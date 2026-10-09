import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SIZES = ["50–250", "250–500", "500–1000", "1000–2000", "2000+"];
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[a-zA-Z]{2,}$/;
const LINK_RE = /(https?:|www\.|\.(com|net|ru|xyz|top|io|org)\b|\[url|<a\s)/i;
const MIN_FILL_MS = 3000;
const IP_LIMIT_PER_HOUR = 3;
const GLOBAL_LIMIT_PER_HOUR = 20;

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

// Strips control chars and <> so senders cannot inject Google Chat mentions like <users/all>.
const clean = (v: unknown, max: number) =>
  typeof v === "string"
    ? v.replace(/[\u0000-\u001f\u007f<>]/g, " ").replace(/\s+/g, " ").trim().slice(0, max)
    : "";

async function hashIp(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
    req.headers.get("cf-connecting-ip") || "unknown";
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`nord-contact:${ip}`));
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function countSince(column: string | null, value: string | null, minutes: number, status?: string) {
  let q = supabase
    .from("contact_submissions")
    .select("id", { count: "exact", head: true })
    .gte("created_at", new Date(Date.now() - minutes * 60_000).toISOString());
  if (column && value !== null) q = q.eq(column, value);
  if (status) q = q.eq("status", status);
  const { count, error } = await q;
  if (error) throw error;
  return count ?? 0;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return json({ error: "Invalid request" }, 400);
    }

    const name = clean(body.name, 120);
    const company = clean(body.company, 160);
    const email = clean(body.email, 200).toLowerCase();
    const phone = clean(body.phone, 40);
    const size = SIZES.includes(body.size) ? body.size : "";

    if (!name || !company || !EMAIL_RE.test(email)) {
      return json({ error: "Missing or invalid fields" }, 400);
    }

    const ip_hash = await hashIp(req);
    const record = { ip_hash, email, name, company, size, phone };
    const log = async (status: string, reason = "") => {
      const { error } = await supabase.from("contact_submissions").insert({ ...record, status, reason });
      if (error) console.error("contact log failed", error);
    };

    const elapsed = Number(body.elapsed);
    let spamReason = "";
    if (typeof body.website === "string" && body.website.trim() !== "") spamReason = "honeypot";
    else if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) spamReason = "too_fast";
    else if (LINK_RE.test(name) || LINK_RE.test(company) || LINK_RE.test(phone)) spamReason = "link";
    else if (!/\p{L}{2,}/u.test(name) || !/\p{L}/u.test(company)) spamReason = "gibberish";
    else if (phone && !/^[0-9+()\s-]{7,20}$/.test(phone)) spamReason = "bad_phone";

    // Bots get a normal-looking success so they do not adapt.
    if (spamReason) {
      await log("spam", spamReason);
      return json({ success: true });
    }

    if (await countSince("ip_hash", ip_hash, 60) >= IP_LIMIT_PER_HOUR) {
      await log("rate_limited", "ip");
      return json({ error: "Too many requests" }, 429);
    }
    if (await countSince("email", email, 24 * 60, "delivered") >= 1) {
      await log("spam", "duplicate_email");
      return json({ success: true });
    }
    if (await countSince(null, null, 60, "delivered") >= GLOBAL_LIMIT_PER_HOUR) {
      await log("rate_limited", "global");
      return json({ error: "Too many requests" }, 429);
    }

    const { data: setting, error: settingError } = await supabase
      .from("app_settings")
      .select("value")
      .eq("key", "google_chat_webhook")
      .maybeSingle();
    if (settingError || !setting?.value) {
      console.error("webhook setting missing", settingError);
      await log("failed", "no_webhook");
      return json({ error: "Delivery failed" }, 502);
    }

    const text =
      `*Yeni Analiz Talebi*\n\n` +
      `*Ad Soyad:* ${name}\n` +
      `*Şirket:* ${company}\n` +
      `*Çalışan Sayısı:* ${size || "-"}\n` +
      `*Telefon:* ${phone || "-"}\n` +
      `*E-posta:* ${email}`;

    const response = await fetch(setting.value, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error("Google Chat webhook failed", response.status, await response.text());
      await log("failed", `chat_${response.status}`);
      return json({ error: "Delivery failed" }, 502);
    }

    await log("delivered");
    return json({ success: true });
  } catch (err) {
    console.error("contact-webhook error", err);
    return json({ error: "Unexpected error" }, 500);
  }
});

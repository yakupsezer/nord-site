import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const GOOGLE_CHAT_WEBHOOK =
  "https://chat.googleapis.com/v1/spaces/AAQAcXZadcg/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=AogKCk_s4NiaSWGCKXq6oSIMq3xNcHieyRaqNzWU0Xw";

const SIZES = ["50–250", "250–500", "500–1000", "1000–2000", "2000+"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";

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
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 40);
    const size = SIZES.includes(body.size) ? body.size : "";

    if (!name || !company || !EMAIL_RE.test(email)) {
      return json({ error: "Missing or invalid fields" }, 400);
    }

    const text =
      `*Yeni Analiz Talebi*\n\n` +
      `*Ad Soyad:* ${name}\n` +
      `*Şirket:* ${company}\n` +
      `*Çalışan Sayısı:* ${size || "-"}\n` +
      `*Telefon:* ${phone || "-"}\n` +
      `*E-posta:* ${email}`;

    const response = await fetch(GOOGLE_CHAT_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error("Google Chat webhook failed", response.status, await response.text());
      return json({ error: "Delivery failed" }, 502);
    }

    return json({ success: true });
  } catch (err) {
    console.error("contact-webhook error", err);
    return json({ error: "Unexpected error" }, 500);
  }
});

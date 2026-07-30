#!/usr/bin/env python3
"""robots.txt, sitemap.xml ve llms.txt üretir."""
import json, os, datetime, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from gen_seo import SITE_URL, LINKEDIN, POSTS  # tek doğruluk kaynağı
SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TODAY = datetime.date.today().isoformat()

# ---------------- robots.txt ----------------
# AI tarayıcıları açıkça izinli: kullanıcı AI aramalarında görünürlük istiyor.
AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-Web",
           "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended",
           "Applebot", "Applebot-Extended", "Bingbot", "CCBot", "meta-externalagent",
           "Amazonbot", "YouBot", "DuckAssistBot", "cohere-ai", "Timpibot", "Diffbot"]

robots = ["# Nord Kurumsal Hizmetler — robots.txt",
          "# Tüm arama motorları ve AI yanıt motorları için erişim açıktır.",
          "",
          "User-agent: *",
          "Allow: /",
          "Disallow: /vendor/",
          "",
          "# --- AI / yanıt motoru tarayıcıları (açıkça izinli) ---"]
for b in AI_BOTS:
    robots += ["", "User-agent: %s" % b, "Allow: /"]
robots += ["", "Sitemap: %s/sitemap.xml" % SITE_URL, ""]
open(os.path.join(SITE, "robots.txt"), "w", encoding="utf-8").write("\n".join(robots))

# ---------------- sitemap.xml ----------------
# (yol, öncelik, değişim sıklığı, lastmod)
urls = [("", "1.0", "monthly", TODAY),
        ("hizmetler.html", "0.9", "monthly", TODAY),
        ("yaklasim.html", "0.9", "monthly", TODAY),
        ("odak.html", "0.8", "monthly", TODAY),
        ("referanslar.html", "0.8", "monthly", TODAY),
        ("hakkimizda.html", "0.7", "yearly", TODAY),
        ("panel.html", "0.6", "monthly", TODAY),
        ("blog.html", "0.8", "weekly", TODAY)]
for s in ["insan-kaynaklari", "filo-yakit", "yan-haklar", "saglik-sigorta", "seyahat", "teknopark"]:
    urls.append(("hizmetler/%s.html" % s, "0.9", "monthly", TODAY))
for p in POSTS:
    urls.append(("blog/%s.html" % p["slug"], "0.7", "yearly", p["iso"]))
for lg in ["kvkk.html", "gizlilik.html", "cerez-politikasi.html"]:
    urls.append((lg, "0.3", "yearly", TODAY))

sm = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for loc, pri, freq, lastmod in urls:
    sm += ["  <url>",
           "    <loc>%s/%s</loc>" % (SITE_URL, loc),
           "    <lastmod>%s</lastmod>" % lastmod,
           "    <changefreq>%s</changefreq>" % freq,
           "    <priority>%s</priority>" % pri,
           "  </url>"]
sm.append("</urlset>")
open(os.path.join(SITE, "sitemap.xml"), "w", encoding="utf-8").write("\n".join(sm) + "\n")

# ---------------- llms.txt ----------------
# AI tarayıcıları için özet + yönlendirme (llmstxt.org konvansiyonu)
llms = """# Nord Kurumsal Hizmetler

> Nord, regüle finans kurumlarının ve teknoloji şirketlerinin dışarıdan aldığı tüm destek
> hizmetlerini tek çatı altında toplayan kurumsal çözüm ortağıdır. Altı hizmet ailesini tek
> sözleşme, tek fatura ve tek muhatap altında yöneterek işletme giderinde %18–34 tasarruf sağlar.

Nord bir hizmet sağlayıcı değil, bir konsolidasyon modelidir. Bir kurum destek hizmetleri için
ortalama yedi ilâ on bir ayrı tedarikçiyle çalışır; Nord bu sayıyı bire indirir. Tasarruf, daha
ucuz tedarikçi bulmaktan değil tedarik yapısının kendisini değiştirmekten doğar.

- Kuruluş: 2025, Ümraniye / İstanbul
- Odak: SPK, BDDK ve TCMB düzenlemesi altındaki kurumlar ve teknoloji şirketleri
- Taahhüt: sözleşmeye yazılan tasarruf oranı, 30 gün ihbarla fesih, uyum sorumluluğu Nord'da
- İletişim: kurumsal@nord.services · +90 850 885 15 00
- LinkedIn: {{LI}}

## Hizmet aileleri

- [İnsan Kaynakları]({{U}}/hizmetler/insan-kaynaklari.html): Bordro outsource, özlük, işe alım,
  performans ve ücret yönetimi, işten ayrılma, yetenek değerlendirme. 7 hizmet, tipik tasarruf %22–31.
- [Filo & Yakıt]({{U}}/hizmetler/filo-yakit.html): Operasyonel kiralama, araç takip, yakıt ve HGS
  yönetimi, bakım ve hasar süreçleri. Filoyu bilançodan çıkarır. 5 hizmet, tipik tasarruf %19–28.
- [Yan Hak Kartları]({{U}}/hizmetler/yan-haklar.html): Yemek, hediye, market ve akaryakıt kartları,
  prim ve puan programları. Vergi istisnasıyla işveren maliyetini düşürür. 4 hizmet, tasarruf %12–19.
- [Sağlık & Sigorta]({{U}}/hizmetler/saglik-sigorta.html): Grup sağlık ve tamamlayıcı sigorta,
  işyeri hekimliği ve İSG, EAP, grup BES, wellness. 6 hizmet, tipik tasarruf %15–24.
- [Seyahat Yönetimi]({{U}}/hizmetler/seyahat.html): Uçak/otel/araç rezervasyonu, seyahat politikası
  ve onay akışı, vize operasyonu, kongre organizasyonu. 4 hizmet, tipik tasarruf %17–26.
- [Teknopark]({{U}}/hizmetler/teknopark.html): Ar-Ge proje yazımı, portal yönetimi, denetime
  hazırlık, fikri mülkiyet, nitelikli personel tedariki. 7 hizmet, tipik tasarruf %24–38.

## Odak segmentler

Menkul değerler ve aracı kurumlar · portföy yönetim şirketleri · ödeme ve elektronik para
kuruluşları · fintech girişimleri · teknoloji şirketleri · dijital bankalar.
Bu altı segment dışındaki kurumları kapsam dışı bırakır ve yönlendirir.

## Sayfalar

- [Ana sayfa]({{U}}/): model özeti, tasarruf hesaplayıcısı, referanslar
- [Yaklaşım]({{U}}/yaklasim.html): Nord Modeli, dağınık vs konsolide tedarik karşılaştırması,
  dört adımlı geçiş süreci, sözleşme taahhütleri
- [Hizmetler]({{U}}/hizmetler.html): altı aile, 33 hizmet, hacim bazlı fiyat mantığı
- [Odak]({{U}}/odak.html): segment bazlı regülasyon yükü
- [Referanslar]({{U}}/referanslar.html): Pionr, Tahsildar, Pratik İşlem, One Portföy, Destek Yatırım
- [Hakkımızda]({{U}}/hakkimizda.html): misyon, kuruluş hikâyesi, ilkeler, ofis
- [Nord Panel]({{U}}/panel.html): geliştirme aşamasındaki gider görünürlüğü paneli
- [Blog]({{U}}/blog.html): destek hizmeti maliyeti, mevzuat ve teşvikler üzerine yazılar

## Blog yazıları

{{POSTS}}

## Hukuki

- [KVKK Aydınlatma Metni]({{U}}/kvkk.html)
- [Gizlilik Politikası]({{U}}/gizlilik.html)
- [Çerez Politikası]({{U}}/cerez-politikasi.html)
"""

_posts_md = "\n".join(
    "- [{t}]({u}/blog/{s}.html) — {c}, {d}, {m} dk okuma".format(
        t=p["title"], u=SITE_URL, s=p["slug"], c=p["cat"], d=p["iso"], m=p["mins"])
    for p in POSTS)
llms = llms.replace("{{POSTS}}", _posts_md).replace("{{U}}", SITE_URL).replace("{{LI}}", LINKEDIN)
open(os.path.join(SITE, "llms.txt"), "w", encoding="utf-8").write(llms)

print("robots.txt   : %d satır, %d AI botu açıkça izinli" % (len(robots), len(AI_BOTS)))
print("sitemap.xml  : %d URL" % len(urls))
print("llms.txt     : %d bayt" % len(llms.encode()))

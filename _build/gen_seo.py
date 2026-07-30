#!/usr/bin/env python3
"""
Nord — HTML üreteci (SEO + AI arama uyumlu).

Her sayfaya şunları koyar:
  canonical, robots yönergeleri, Open Graph, Twitter kartı, theme-color,
  JSON-LD (Organization / WebSite / Service / BlogPosting / WebPage + BreadcrumbList),
  ve önbellek kırıcı ?v=<içerik-hash> ekli yerel script/CSS adresleri.

Ön-render edilmiş gövde .prerender/ içinde varsa #root'a gömer.

Kullanım:
  gen_seo.py --shells    → #root BOŞ yaz + pages.json manifestini üret
  gen_seo.py             → .prerender/ içeriğini gömerek yaz
"""
import os, re, json, html, sys, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
PRE_DIR = os.path.join(HERE, ".prerender")

# ─── canlı alan adı. Değişirse SADECE burayı değiştirin. ───
SITE_URL = "https://nord.services"
LINKEDIN = "https://www.linkedin.com/company/nordservices/"

SHELLS_ONLY = "--shells" in sys.argv

ORG_ID, SITE_ID = SITE_URL + "/#organization", SITE_URL + "/#website"
LOGO = SITE_URL + "/assets/nord-logo-black.png"

# ─── blog meta verisini kaynaktan çek (tek doğruluk kaynağı) ───
AY = {'Ocak':'01','Şubat':'02','Mart':'03','Nisan':'04','Mayıs':'05','Haziran':'06',
      'Temmuz':'07','Ağustos':'08','Eylül':'09','Ekim':'10','Kasım':'11','Aralık':'12'}

def read_posts():
    src = open(os.path.join(SITE, "nord-blog-data.jsx"), encoding="utf-8").read()
    recs = re.findall(
        r"slug:\s*'([^']+)'.*?cat:\s*'([^']+)'.*?date:\s*'([^']+)'.*?mins:\s*(\d+)"
        r".*?title:\s*'((?:[^'\\]|\\.)*)'.*?dek:\s*'((?:[^'\\]|\\.)*)'", src, re.S)
    out = []
    for slug, cat, date, mins, title, dek in recs:
        g, a, y = date.split()
        out.append(dict(slug=slug, cat=cat, date=date, iso="%s-%s-%02d" % (y, AY[a], int(g)),
                        mins=int(mins), title=title.replace("\\'", "'"),
                        dek=dek.replace("\\'", "'")))
    return out

POSTS = read_posts()

# ─── önbellek kırıcı ───
_h = {}
def ver(rel):
    if rel not in _h:
        p = os.path.join(SITE, rel)
        try: _h[rel] = hashlib.md5(open(p, "rb").read()).hexdigest()[:8]
        except FileNotFoundError: _h[rel] = "0"
    return _h[rel]

def asset(base, rel):
    return "%s%s?v=%s" % (base, rel, ver(rel))

# ─── JSON-LD parçaları ───
ORGANIZATION = {
    "@type": "Organization", "@id": ORG_ID,
    "name": "Nord Kurumsal Hizmetler", "alternateName": "Nord",
    "url": SITE_URL + "/", "sameAs": [LINKEDIN],
    "logo": {"@type": "ImageObject", "url": LOGO, "width": 1754, "height": 594},
    "email": "kurumsal@nord.services", "telephone": "+90-850-885-15-00",
    "address": {"@type": "PostalAddress",
                "streetAddress": "İnkılap Mah. Dr. Adnan Büyükdeniz Cad. 2. Blok No:4, İç Kapı No:7",
                "addressLocality": "Ümraniye", "addressRegion": "İstanbul", "addressCountry": "TR"},
    "areaServed": {"@type": "Country", "name": "Türkiye"}, "foundingDate": "2025",
    "description": ("Regüle finans kurumlarının ve teknoloji şirketlerinin dışarıdan aldığı tüm destek "
                    "hizmetlerini tek çatı altında toplayarak işletme giderini düşüren kurumsal çözüm ortağı."),
    "knowsAbout": ["İnsan kaynakları outsource", "Bordro yönetimi", "Kurumsal filo ve yakıt yönetimi",
                   "Yan hak kartları", "Grup sağlık sigortası", "İş sağlığı ve güvenliği",
                   "Kurumsal seyahat yönetimi", "Teknopark ve Ar-Ge teşvikleri"],
}
WEBSITE = {"@type": "WebSite", "@id": SITE_ID, "name": "Nord Kurumsal Hizmetler",
           "url": SITE_URL + "/", "inLanguage": "tr-TR", "publisher": {"@id": ORG_ID}}

def jsonld(*nodes):
    return ('<script type="application/ld+json">\n%s\n</script>'
            % json.dumps({"@context": "https://schema.org", "@graph": list(nodes)},
                         ensure_ascii=False, indent=1))

def crumbs(trail):
    items = []
    for i, (name, url) in enumerate(trail, 1):
        it = {"@type": "ListItem", "position": i, "name": name}
        if url is not None:
            it["item"] = SITE_URL + "/" + url
        items.append(it)
    return {"@type": "BreadcrumbList", "itemListElement": items}

def webpage(path, title, desc, typ="WebPage"):
    return {"@type": typ, "@id": SITE_URL + "/" + path + "#webpage",
            "url": SITE_URL + "/" + path, "name": title, "description": desc,
            "isPartOf": {"@id": SITE_ID}, "inLanguage": "tr-TR", "about": {"@id": ORG_ID}}

TPL = """<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<meta name="description" content="{desc}" />
<link rel="canonical" href="{canonical}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="theme-color" content="#07090D" />
<meta name="author" content="Nord Kurumsal Hizmetler" />
<meta property="og:type" content="{ogtype}" />
<meta property="og:site_name" content="Nord Kurumsal Hizmetler" />
<meta property="og:locale" content="tr_TR" />
<meta property="og:title" content="{ogtitle}" />
<meta property="og:description" content="{desc}" />
<meta property="og:url" content="{canonical}" />
<meta property="og:image" content="{ogimage}" />
<meta property="og:image:alt" content="Nord Kurumsal Hizmetler" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{ogtitle}" />
<meta name="twitter:description" content="{desc}" />
<meta name="twitter:image" content="{ogimage}" />
<link rel="icon" type="image/png" href="{base}assets/nord-logo-black.png" />
<link rel="stylesheet" href="{fontscss}" />
<link rel="stylesheet" href="{nordcss}" />
{ld}
</head>
<body>
<div id="root">{pre}</div>
<script>{gvars}</script>
{react}
{scripts}
</body>
</html>
"""

HOME_JS  = ["nord-data.js", "nord-shared.js", "nord-home.js"]
LEGAL_JS = ["nord-data.js", "nord-legal-data.js", "nord-shared.js", "nord-page-legal.js"]
POST_JS  = ["nord-data.js", "nord-blog-data.js", "nord-shared.js", "nord-page-post.js"]
BLOG_JS  = ["nord-data.js", "nord-blog-data.js", "nord-shared.js", "nord-page-blog.js"]
SVC_JS   = ["nord-data.js", "nord-shared.js", "nord-service.js"]
def one(p): return ["nord-data.js", "nord-shared.js", p]

PAGES = []
def add(path, title, desc, base, gvars, scripts, ld, ogtype="website"):
    PAGES.append(dict(path=path, title=title, desc=desc, base=base,
                      gvars=gvars, scripts=scripts, ld=ld, ogtype=ogtype))

H_T = "Nord Kurumsal Hizmetler — Kurumsal giderinizi tek noktadan yönetin"
H_D = ("Nord, şirketinizin dışarıdan aldığı tüm destek hizmetlerini tek çatı altında toplar. "
       "Tek sözleşme, tek fatura, %18–34 işletme gideri tasarrufu.")
for p in ("index.html", "Nord.html"):
    add(p, H_T, H_D, "", {"NORD_BASE": "", "NORD_IS_HOME": True}, HOME_JS,
        jsonld(ORGANIZATION, WEBSITE, webpage(p, H_T, H_D), crumbs([("Ana Sayfa", "")])))

for path, title, desc, js, typ, crumb in [
 ("hizmetler.html", "Hizmetler — Nord Kurumsal Hizmetler",
  "İnsan kaynakları, filo ve yakıt, yan hak kartları, sağlık ve sigorta, seyahat, teknopark: altı hizmet ailesi, 33 hizmet, tek sözleşme.",
  one("nord-page-hizmetler.js"), "CollectionPage", "Hizmetler"),
 ("yaklasim.html", "Yaklaşım — Nord Kurumsal Hizmetler",
  "Nord Modeli: altı hizmet ailesini tek sözleşme altında toplayarak tedarikçi sayısını dokuzdan bire, işletme giderini %18–34 düşüren konsolidasyon yaklaşımı.",
  one("nord-page-yaklasim.js"), "WebPage", "Yaklaşım"),
 ("odak.html", "Odak — Nord Kurumsal Hizmetler",
  "Aracı kurumlar, portföy yönetim şirketleri, ödeme ve elektronik para kuruluşları, fintech girişimleri, teknoloji şirketleri ve dijital bankalar.",
  one("nord-page-odak.js"), "WebPage", "Odak"),
 ("referanslar.html", "Referanslar — Nord Kurumsal Hizmetler",
  "Pionr, Tahsildar, Pratik İşlem, One Portföy ve Destek Yatırım dahil regüle finans ve teknoloji kurumları 2025 yılından bu yana Nord ile çalışıyor.",
  one("nord-page-referanslar.js"), "WebPage", "Referanslar"),
 ("panel.html", "Nord Panel — tek ekranda gider görünürlüğü",
  "Nord Panel, konsolide destek hizmetlerinizin gider ve tasarruf tablosunu tek ekranda gösterecek. Geliştirme aşamasında; bugün aynı veri atanmış hizmet yöneticisi ve aylık rapor üzerinden sunuluyor.",
  one("nord-page-panel.js"), "WebPage", "Panel"),
 ("hakkimizda.html", "Hakkımızda — Nord Kurumsal Hizmetler",
  "Nord Kurumsal Hizmetler, şirketlerin dışarıdan aldığı destek hizmetlerini tek çatı altında toplayarak işletme giderini düşüren kurumsal çözüm ortağıdır.",
  one("nord-about.js"), "AboutPage", "Hakkımızda"),
]:
    add(path, title, desc, "", {"NORD_BASE": ""}, js,
        jsonld(ORGANIZATION, webpage(path, title, desc, typ),
               crumbs([("Ana Sayfa", ""), (crumb, path)])))

B_T = "Blog — Nord Kurumsal Hizmetler"
B_D = ("Regüle finans kurumları ve teknoloji şirketleri için destek hizmetleri maliyeti, "
       "mevzuat uyumu, teşvikler ve yan hak yönetimi üzerine yazılar.")
add("blog.html", B_T, B_D, "", {"NORD_BASE": ""}, BLOG_JS,
    jsonld(ORGANIZATION,
           {"@type": "Blog", "@id": SITE_URL + "/blog.html#blog", "url": SITE_URL + "/blog.html",
            "name": B_T, "description": B_D, "inLanguage": "tr-TR", "publisher": {"@id": ORG_ID},
            "blogPost": [{"@type": "BlogPosting",
                          "@id": "%s/blog/%s.html#article" % (SITE_URL, p["slug"]),
                          "headline": p["title"],
                          "url": "%s/blog/%s.html" % (SITE_URL, p["slug"]),
                          "datePublished": p["iso"]} for p in POSTS]},
           crumbs([("Ana Sayfa", ""), ("Blog", "blog.html")])))

for path, page, title, desc in [
 ("kvkk.html", "kvkk", "KVKK Aydınlatma Metni — Nord Kurumsal Hizmetler",
  "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Nord Kurumsal Hizmetler aydınlatma metni: işlenen veriler, amaçlar, aktarım, saklama süreleri ve haklarınız."),
 ("gizlilik.html", "gizlilik", "Gizlilik Politikası — Nord Kurumsal Hizmetler",
  "Nord Kurumsal Hizmetler veri güvenliği: Türkiye lokasyonlu ISO 27001 altyapı, rol bazlı erişim, şifreleme, yedekleme ve veri ihlali bildirim süreci."),
 ("cerez-politikasi.html", "cerez", "Çerez Politikası — Nord Kurumsal Hizmetler",
  "Nord web sitesinde kullanılan zorunlu ve analitik çerezler, saklama süreleri ve çerez tercihlerinizi nasıl yöneteceğiniz."),
]:
    add(path, title, desc, "", {"NORD_BASE": "", "NORD_PAGE": page}, LEGAL_JS,
        jsonld(ORGANIZATION, webpage(path, title, desc),
               crumbs([("Ana Sayfa", ""), (title.split(" — ")[0], path)])))

SERVICES = [
 ("insan-kaynaklari", "ik", "İnsan Kaynakları Çözümleri — Nord Kurumsal Hizmetler",
  "Bordro outsource, işe alım, performans ve yetenek yönetimi dahil yedi İK hizmeti tek sözleşme altında.",
  "İnsan Kaynakları Çözümleri", "İnsan Kaynakları"),
 ("filo-yakit", "filo", "Kurumsal Araç Filo ve Yakıt Çözümleri — Nord Kurumsal Hizmetler",
  "Operasyonel kiralama, filo takibi, yakıt ve HGS yönetimi ile filoyu bilançodan çıkarın.",
  "Kurumsal Araç Filo ve Yakıt Çözümleri", "Filo & Yakıt"),
 ("yan-haklar", "yanhak", "Yemek, Hediye ve Yan Hak Kartı Çözümleri — Nord Kurumsal Hizmetler",
  "Vergi avantajlı yemek, hediye ve market kartlarıyla yan hak maliyetini düşürün.",
  "Yemek, Hediye ve Yan Hak Kartı Çözümleri", "Yan Hak Kartları"),
 ("saglik-sigorta", "saglik", "Kurumsal Sağlık, Sigorta ve Refah Çözümleri — Nord Kurumsal Hizmetler",
  "Grup sağlık sigortası, işyeri hekimliği, İSG, EAP ve BES tek pakette.",
  "Kurumsal Sağlık, Sigorta ve Refah Çözümleri", "Sağlık & Sigorta"),
 ("seyahat", "seyahat", "Kurumsal Seyahat ve Harcama Yönetimi — Nord Kurumsal Hizmetler",
  "Rezervasyon, politika kurgusu, vize ve organizasyon ile seyahat bütçesini kontrol altına alın.",
  "Kurumsal Seyahat ve Harcama Yönetimi", "Seyahat Yönetimi"),
 ("teknopark", "teknopark", "Teknopark Çözümleri — Nord Kurumsal Hizmetler",
  "Proje yazımı, portal yönetimi, denetime hazırlık ve fikri mülkiyet ile Ar-Ge teşviklerini eksiksiz kullanın.",
  "Teknopark Çözümleri", "Teknopark"),
]
for slug, sid, title, desc, svcname, short in SERVICES:
    path = "hizmetler/%s.html" % slug
    add(path, title, desc, "../", {"NORD_BASE": "../", "NORD_SERVICE": sid}, SVC_JS,
        jsonld(ORGANIZATION,
               {"@type": "Service", "@id": SITE_URL + "/" + path + "#service",
                "name": svcname, "description": desc, "serviceType": svcname,
                "url": SITE_URL + "/" + path, "provider": {"@id": ORG_ID},
                "areaServed": {"@type": "Country", "name": "Türkiye"},
                "audience": {"@type": "BusinessAudience",
                             "name": "Regüle finans kurumları ve teknoloji şirketleri"}},
               webpage(path, title, desc),
               crumbs([("Ana Sayfa", ""), ("Hizmetler", "hizmetler.html"), (short, path)])))

POST_META = {
 "sgk-tesvikleri": ("SGK teşvikleri: finans ve teknoloji şirketleri için 2026 haritası — Nord",
  "2026 başında imalat dışı prim indirimi dört puandan iki puana düştü ve işveren payı bir puan arttı. Kadro bazlı SGK teşvikleri, yararlanma önkoşulları ve geriye dönük tarama."),
 "destek-hizmetleri-gizli-maliyeti": ("Destek hizmetlerinin faturada görünmeyen maliyeti — Nord",
  "Dokuz tedarikçiyle çalışmanın bedeli dokuz faturanın toplamından fazladır: yönetim yükü, kaçırılan yenilenmeler ve kullanılmayan ölçek avantajı."),
 "regule-kurumlarda-outsource": ("Regüle kurumlarda dış kaynak: nereye kadar mümkün? — Nord",
  "SPK, BDDK ve TCMB lisanslı kurumlarda dış kaynak kullanımının sınırı, denetime hazırlık ve sözleşmede aranması gereken beş madde."),
 "tesvik-ve-ar-ge": ("Kullanılmayan teşvik, ödenmiş vergidir — Nord",
  "Teknopark ve Ar-Ge teşviklerinin neden eksik kullanıldığı, doğru hesabın üç bileşeni ve bordroyla teşvikin aynı yerde olmasının etkisi."),
 "yan-haklarda-maliyet-dengesi": ("Yan haklarda maliyeti düşürmek, paketi küçültmek değildir — Nord",
  "Yemek kartı komisyonu, grup sağlık poliçesi kapsamı ve kullanım verisi üzerinden yan hak bütçesini paketi küçültmeden düşürmek."),
}
for p in POSTS:
    slug = p["slug"]; path = "blog/%s.html" % slug
    if slug not in POST_META:
        print("  UYARI: %s için başlık/açıklama tanımı yok, atlanıyor" % slug); continue
    title, desc = POST_META[slug]
    add(path, title, desc, "../", {"NORD_BASE": "../", "NORD_POST": slug}, POST_JS,
        jsonld(ORGANIZATION,
               {"@type": "BlogPosting", "@id": SITE_URL + "/" + path + "#article",
                "headline": p["title"], "description": desc, "url": SITE_URL + "/" + path,
                "mainEntityOfPage": {"@type": "WebPage", "@id": SITE_URL + "/" + path},
                "datePublished": p["iso"], "dateModified": p["iso"],
                "author": {"@id": ORG_ID}, "publisher": {"@id": ORG_ID},
                "inLanguage": "tr-TR", "articleSection": p["cat"],
                "timeRequired": "PT%dM" % p["mins"],
                "isPartOf": {"@id": SITE_URL + "/blog.html#blog"}, "image": LOGO},
               crumbs([("Ana Sayfa", ""), ("Blog", "blog.html"), (p["cat"], path)])),
        ogtype="article")

# ─── yaz ───
def pre_for(path):
    if SHELLS_ONLY: return ""
    f = os.path.join(PRE_DIR, path.replace("/", "__"))
    return open(f, encoding="utf-8").read() if os.path.isfile(f) else ""

def gvars_js(d):
    return "".join("window.%s=%s;" % (k, json.dumps(v)) for k, v in d.items())

def main():
  n_pre = 0
  for pg in PAGES:
    base, pre = pg["base"], pre_for(pg["path"])
    if pre: n_pre += 1
    canonical = SITE_URL + "/" if pg["path"] in ("index.html", "Nord.html") \
                else SITE_URL + "/" + pg["path"]
    doc = TPL.format(
        title=html.escape(pg["title"], True), desc=html.escape(pg["desc"], True),
        ogtitle=html.escape(pg["title"].split(" — ")[0], True),
        canonical=canonical, ogtype=pg["ogtype"], ogimage=LOGO, base=base,
        fontscss=asset(base, "vendor/fonts.css"), nordcss=asset(base, "nord.css"),
        ld=pg["ld"], pre=pre, gvars=gvars_js(pg["gvars"]),
        react="\n".join('<script src="%s"></script>' % asset(base, r) for r in
                        ("vendor/react.production.min.js", "vendor/react-dom.production.min.js")),
        scripts="\n".join('<script src="%s"></script>' % asset(base, s) for s in pg["scripts"]))
    full = os.path.join(SITE, pg["path"])
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "w", encoding="utf-8").write(doc)

  if SHELLS_ONLY:
    manifest = [{"path": p["path"], "gvars": p["gvars"], "scripts": p["scripts"]} for p in PAGES]
    json.dump(manifest, open(os.path.join(HERE, "pages.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("  %d kabuk yazıldı (#root boş), pages.json güncellendi" % len(PAGES))
  else:
    print("  %d sayfa yazıldı, %d tanesine ön-render gömüldü" % (len(PAGES), n_pre))
    if n_pre != len(PAGES):
        print("  UYARI: %d sayfada ön-render eksik!" % (len(PAGES) - n_pre))
        sys.exit(1)

# Sadece doğrudan çalıştırıldığında yaz — gen_seofiles.py bu dosyayı
# SITE_URL / LINKEDIN / POSTS için import ediyor.
if __name__ == "__main__":
    main()

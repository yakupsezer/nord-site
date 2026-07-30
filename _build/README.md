# Nord sitesi — build

## Tek komut

```bash
./_build/build.sh
```

Node, npm veya tarayıcı gerekmez. macOS'un yerleşik JavaScript motorunu
(`osascript -l JavaScript`) ve `python3`'ü kullanır — ikisi de sistemde hazır.

## Ne zaman çalıştırmalı

**Bir `.jsx` dosyasını veya içerik verisini her değiştirdiğinizde.**

Site statik dosyalardan oluşur; ziyaretçiye build gerekmez. Ancak `.jsx`
değiştirip build çalıştırmazsanız iki şey bozulur:

1. Tarayıcı hâlâ eski `.js` dosyasını çalıştırır (derleme yapılmadı).
2. Botlar hâlâ eski `#root` içeriğini görür (ön-render yenilenmedi) —
   yani **arama motorlarına eski metni gösterirsiniz**.

## Beş adım ve sıraları

Sıra zorunludur, `build.sh` bunu garanti eder:

| # | Adım | Neden bu sırada |
|---|------|-----------------|
| 1 | `compile.js` — JSX → JS | `?v=` hash'leri derlenmiş dosyadan hesaplanır |
| 2 | `gen_seo.py --shells` | `#root` **boş** yazılır + `pages.json` üretilir |
| 3 | `prerender.js` | React ağacını statik HTML'e çevirir |
| 4 | `gen_seo.py` | Ön-renderı `#root`'a gömer, SEO başlıklarını yazar |
| 5 | `gen_seofiles.py` | `robots.txt`, `sitemap.xml`, `llms.txt` |

2. adımın `#root`'u boşaltması kritik: aksi hâlde ön-render kendi eski
çıktısını okuyup geri yazar (bir kez bu tuzağa düşüldü).

## Dosyalar

| Dosya | İş |
|-------|-----|
| `build.sh` | Orkestrasyon |
| `compile.js` | JSX → JS (Babel, IIFE sarmalı) |
| `prerender.js` | React → statik HTML (ReactDOMServer) |
| `gen_seo.py` | HTML + canonical/OG/Twitter/JSON-LD + `?v=` hash |
| `gen_seofiles.py` | robots.txt / sitemap.xml / llms.txt |
| `fonts.py` | Google Fonts'u yerelleştirir (bir kez çalıştırıldı, arşiv) |
| `babel.min.js` | Derleme bağımlılığı — siteye **girmez** |
| `react-dom-server.legacy.js` | Ön-render bağımlılığı — siteye **girmez** |
| `pages.json` | Üretilen manifest (sayfa → global değişkenler + scriptler) |
| `.prerender/` | Üretilen ön-render önbelleği |

## Ayarlar

`gen_seo.py` başındaki iki sabit:

```python
SITE_URL = "https://nord.services"                              # canlı alan adı
LINKEDIN = "https://www.linkedin.com/company/nordservices/"      # LinkedIn sayfası
```

`gen_seofiles.py` bunları buradan import eder — tek doğruluk kaynağı.
Alan adı değişirse canonical, OG, JSON-LD, sitemap ve llms.txt hepsi
otomatik güncellenir.

## Bilinen davranışlar

**Çerez çubuğu statik HTML'de yok.** `CookieBar`, `localStorage`'ı okur;
ön-render ortamında `localStorage` olmadığı için bileşen `null` döner.
Tarayıcıda normal çalışır. Bu istenen davranış — botların çerez banner'ı
metnini indekslemesine gerek yok.

**Ön-render içeriğini React devralır.** Sayfa yüklendiğinde
`createRoot().render()` gömülü içeriği değiştirir (hidrasyon değil).
Markup aynı olduğu için görsel fark olmaz; botlar dolu HTML görür.

**`?v=` hash'leri içerik değişince değişir.** Sunucuda uzun süreli
önbellek başlığı verebilirsiniz; deploy sonrası ziyaretçiler eski JS'e
takılmaz.

## Yayına alma

`_build/` klasörünü kopyalamanız gerekmez — sadece derleme araçlarıdır.
Sunucuya gidecekler:

```
*.html  *.js  nord.css  assets/  vendor/  blog/  hizmetler/
robots.txt  sitemap.xml  llms.txt
```

`.jsx` kaynaklarını da yükleyebilirsiniz (zararsız, sayfalar onları
çağırmıyor) ama gerekli değil.

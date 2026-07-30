#!/usr/bin/env python3
"""Google Fonts CSS'ini yerelleştirir: woff2 dosyalarını indirir, URL'leri yerel yola çevirir."""
import re, os, urllib.request

SITE = "/Users/yakupsezer/nord-site"
FONTDIR = os.path.join(SITE, "vendor", "fonts")
KEEP = {"latin", "latin-ext"}          # Türkçe için latin-ext şart; cyrillic/vietnamese atılıyor
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

css = open("/tmp/gf.css", encoding="utf-8").read()

# "/* subset */ @font-face { ... }" bloklarını yakala
blocks = re.findall(r"/\*\s*([a-z0-9-]+)\s*\*/\s*(@font-face\s*\{[^}]*\})", css)
print("bulunan blok:", len(blocks))

out, kept, downloaded = [], 0, []
for subset, block in blocks:
    if subset not in KEEP:
        continue
    m = re.search(r"url\((https://[^)]+\.woff2)\)", block)
    if not m:
        continue
    url = m.group(1)
    weight = re.search(r"font-weight:\s*(\d+)", block).group(1)
    fname = "plus-jakarta-sans-%s-%s.woff2" % (subset, weight)
    dest = os.path.join(FONTDIR, fname)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    data = urllib.request.urlopen(req).read()
    with open(dest, "wb") as f:
        f.write(data)
    downloaded.append((fname, len(data)))
    out.append("/* %s */\n%s" % (subset, block.replace(url, "fonts/" + fname)))
    kept += 1

header = "/* Plus Jakarta Sans — yerel kopya. Kaynak: Google Fonts (SIL Open Font License 1.1).\n   Alt kümeler: latin, latin-ext (Türkçe karakterler latin-ext'te). */\n"
with open(os.path.join(SITE, "vendor", "fonts.css"), "w", encoding="utf-8") as f:
    f.write(header + "\n".join(out) + "\n")

print("yazılan @font-face:", kept)
total = 0
for n, s in downloaded:
    print("  %-44s %6.1f KB" % (n, s / 1024)); total += s
print("toplam font: %.1f KB" % (total / 1024))

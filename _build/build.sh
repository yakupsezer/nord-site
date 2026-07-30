#!/bin/bash
# Nord sitesi — tek komutluk build.
#
#   ./_build/build.sh
#
# Sıra önemlidir ve zorunludur:
#   1) JSX → JS derle            (hash'ler derlenmiş dosyadan hesaplanacak)
#   2) kabukları BOŞ #root ile yaz + pages.json üret
#   3) ön-render                 (React'i statik HTML'e çevir)
#   4) ön-renderı göm
#   5) robots.txt / sitemap.xml / llms.txt
#
# Node veya tarayıcı gerekmez; macOS'un yerleşik JS motoru kullanılır.

set -euo pipefail

BUILD="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE="$(dirname "$BUILD")"
export NORD_BUILD_DIR="$BUILD" NORD_SITE_DIR="$SITE"

echo "Nord build — $SITE"
echo

echo "1/5  JSX → JS derleniyor"
osascript -l JavaScript "$BUILD/compile.js"

echo "2/5  HTML kabukları (boş #root) + pages.json"
python3 "$BUILD/gen_seo.py" --shells

echo "3/5  ön-render"
osascript -l JavaScript "$BUILD/prerender.js"

echo "4/5  ön-render gömülüyor + SEO başlıkları"
python3 "$BUILD/gen_seo.py"

echo "5/5  robots.txt / sitemap.xml / llms.txt"
python3 "$BUILD/gen_seofiles.py"

echo
echo "Bitti. Yerelde denemek için:"
echo "  python3 -m http.server 8742 --directory \"$SITE\""

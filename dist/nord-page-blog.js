/* nord-page-blog.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const P = window.NORD_POSTS;
const postHref = slug => `${BASE}blog/${slug}.html`;
function Featured() {
  const p = P[0];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: postHref(p.slug),
    className: "post-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "post-meta"
  }, /*#__PURE__*/React.createElement("span", null, p.cat), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, `${p.mins} dk okuma`)), /*#__PURE__*/React.createElement("h2", null, p.title), /*#__PURE__*/React.createElement("p", null, p.dek), /*#__PURE__*/React.createElement("span", {
    className: "arrowlink as-span"
  }, "Yaz\u0131y\u0131 okuyun ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    className: "post-hero-side"
  }, /*#__PURE__*/React.createElement("span", {
    className: "post-no"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "post-tagline"
  }, "\xD6ne \xE7\u0131kan")))));
}
function List() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      paddingTop: 'clamp(72px,9vw,132px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Ar\u015Fiv"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Maliyet, mevzuat ve operasyon."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Reg\xFCle kurumlar\u0131n destek hizmetleri b\xFCt\xE7esinde kar\u015F\u0131la\u015Ft\u0131\u011F\u0131 somut sorunlar ve bunlar\u0131n say\u0131sal kar\u015F\u0131l\u0131\u011F\u0131. Yeni yaz\u0131lar ayda iki kez yay\u0131mlan\u0131r."))), /*#__PURE__*/React.createElement("div", {
    className: "post-list"
  }, P.slice(1).map((p, i0) => {
    const i = i0 + 1;
    return /*#__PURE__*/React.createElement("a", {
      key: p.slug,
      href: postHref(p.slug),
      className: "post-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "num"
    }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "post-meta"
    }, /*#__PURE__*/React.createElement("span", null, p.cat), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, `${p.mins} dk`)), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.dek)), /*#__PURE__*/React.createElement("span", {
      className: "post-go"
    }, /*#__PURE__*/React.createElement(Arrow, {
      size: 16
    })));
  }))));
}
function Sub() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "S\u0131rada"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Yaz\u0131lar\u0131 de\u011Fil, tasarrufu takip edin."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Bu yaz\u0131lardaki y\xF6ntemlerin kendi rakamlar\u0131n\u0131za ne yapt\u0131\u011F\u0131n\u0131 g\xF6rmek i\xE7in tek sayfal\u0131k \xFCcretsiz gider analizimizi isteyin."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`,
    className: "arrowlink"
  }, "Tasarrufunuzu hesaplay\u0131n ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "Hizmet aileleri ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "blog"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Blog"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Blog",
    title: "Gider kalemlerinin arkas\u0131ndaki hesap.",
    lede: "Bordro, filo, yan hak, sa\u011Fl\u0131k, seyahat ve te\u015Fvik kalemlerinde maliyetin nas\u0131l olu\u015Ftu\u011Funu ve nerede a\u015Fa\u011F\u0131 \xE7ekilebilece\u011Fini yaz\u0131yoruz. Genel ge\xE7er \u0130K i\xE7eri\u011Fi de\u011Fil; reg\xFCle kurumlar\u0131n ay sonu tablosunda kar\u015F\u0131l\u0131\u011F\u0131 olan konular.",
    facts: [['Yazı', '5'], ['Odak', 'Maliyet ve mevzuat'], ['Yazan', 'Nord uzman ekibi'], ['Sıklık', 'Ayda iki']]
  }), /*#__PURE__*/React.createElement(Featured, null), /*#__PURE__*/React.createElement(List, null), /*#__PURE__*/React.createElement(Sub, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

/* nord-service.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const S = window.NORD_SERVICES;
const cur = S.find(s => s.id === window.NORD_SERVICE);
const others = S.filter(s => s.id !== cur.id);
function ServiceHero() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME || '#top'
  }, "Nord"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`
  }, "Hizmetler"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-2)'
    }
  }, cur.short))), /*#__PURE__*/React.createElement("section", {
    className: "svc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "svc-lever"
  }, cur.num, " \xB7 ", cur.lever), /*#__PURE__*/React.createElement("h1", null, cur.heroTitle), /*#__PURE__*/React.createElement("div", {
    className: "svc-segs"
  }, cur.segs.map(x => /*#__PURE__*/React.createElement("i", {
    key: x
  }, x)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, cur.lede), /*#__PURE__*/React.createElement("ul", {
    className: "svc-facts"
  }, cur.facts.map(([k, v], i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, k, /*#__PURE__*/React.createElement("b", null, v)))), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "btn btn-primary"
  }, "Bu aile i\xE7in analiz iste ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`,
    className: "btn btn-outline"
  }, "Tasarruf hesab\u0131")))))));
}
function Levers() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Maliyet etkisi"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Bu ailenin gideriniz \xFCzerindeki \xFC\xE7 etkisi."))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, cur.levers.map(([v, t, d], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "lever"
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Detail() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kapsam"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, cur.title, " i\xE7indeki ", cur.items.length, " hizmet."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Tamam\u0131 birlikte ya da ihtiyac\u0131n\u0131za g\xF6re se\xE7ilerek al\u0131nabilir. Her hizmet tek s\xF6zle\u015Fme alt\u0131nda, tek fatura ile y\xFCr\xFCt\xFCl\xFCr."))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, cur.items.map(([t, d, save], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("span", {
    className: "save"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 13
  }), " ", save))))), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "arrowlink"
  }, "Bu ailenin tamam\u0131 i\xE7in fiyat al\u0131n ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))));
}
function Others() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Di\u011Fer aileler"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Ne kadar konsolide ederseniz, o kadar tasarruf."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "\xDC\xE7\xFCnc\xFC aileden itibaren konsolide hacim indirimi devreye girer; her yeni aile mevcutlar\u0131n birim maliyetini de d\xFC\u015F\xFCr\xFCr."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "T\xFCm hizmetler ve fiyat mant\u0131\u011F\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "others"
  }, others.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    className: "other",
    href: svcHref(s.slug)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, s.num), /*#__PURE__*/React.createElement("h4", null, s.short)), /*#__PURE__*/React.createElement("span", {
    className: "go"
  }, /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "hizmetler"
  }), /*#__PURE__*/React.createElement(ServiceHero, null), /*#__PURE__*/React.createElement(Levers, null), /*#__PURE__*/React.createElement(Detail, null), /*#__PURE__*/React.createElement(Others, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

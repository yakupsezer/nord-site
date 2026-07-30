/* nord-page-post.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const POST = window.NORD_POSTS.find(p => p.slug === window.NORD_POST);
const IDX = window.NORD_POSTS.indexOf(POST);
const OTHERS = window.NORD_POSTS.filter(p => p !== POST).slice(0, 3);
function Body() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "art-wrap"
  }, POST.body.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "art-block"
  }, b.h && /*#__PURE__*/React.createElement("h2", null, b.h), b.p && b.p.map((x, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, x)), b.list && /*#__PURE__*/React.createElement("ul", null, b.list.map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, x))), b.quote && /*#__PURE__*/React.createElement("blockquote", {
    className: "art-quote"
  }, b.quote))), /*#__PURE__*/React.createElement("div", {
    className: "art-end"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Nord Kurumsal Hizmetler"), /*#__PURE__*/React.createElement("p", null, "Bu yaz\u0131daki y\xF6ntemlerin kendi gider tablonuzdaki kar\u015F\u0131l\u0131\u011F\u0131n\u0131 g\xF6rmek isterseniz, son on iki ay\u0131n faturalar\u0131 \xFCzerinden \xFCcretsiz bir analiz haz\u0131rl\u0131yoruz."), /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "btn btn-primary btn-dark-on-light"
  }, "\xDCcretsiz gider analizi ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))));
}
function More() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Di\u011Fer yaz\u0131lar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Devam\u0131."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}blog.html`,
    className: "arrowlink"
  }, "T\xFCm yaz\u0131lar ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "post-list on-dark"
  }, OTHERS.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: p.slug,
    href: `${BASE}blog/${p.slug}.html`,
    className: "post-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(window.NORD_POSTS.indexOf(p) + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "post-meta"
  }, /*#__PURE__*/React.createElement("span", null, p.cat), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", null, `${p.mins} dk`)), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.dek)), /*#__PURE__*/React.createElement("span", {
    className: "post-go"
  }, /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "blog"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME
  }, "Nord"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}blog.html`
  }, "Blog"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-2)'
    }
  }, POST.cat))), /*#__PURE__*/React.createElement(PageHero, {
    label: `${POST.cat} · ${POST.date}`,
    title: POST.title,
    lede: POST.dek,
    facts: [['Kategori', POST.cat], ['Yayın', POST.date], ['Okuma süresi', `${POST.mins} dk`], ['Yazı no', String(IDX + 1).padStart(2, '0')]]
  }), /*#__PURE__*/React.createElement(Body, null), /*#__PURE__*/React.createElement(More, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

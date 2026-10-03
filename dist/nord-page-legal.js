/* nord-page-legal.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const LEGAL = window.NORD_LEGAL[window.NORD_PAGE];
function Body() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light legal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "legal-wrap"
  }, LEGAL.sections.map((s, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "legal-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, s.h), s.p.map((x, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, x)), s.list && /*#__PURE__*/React.createElement("ul", null, s.list.map((x, j) => /*#__PURE__*/React.createElement("li", {
    key: j
  }, x)))))))));
}
function Related() {
  const all = [['kvkk', 'KVKK Aydınlatma Metni', 'kvkk.html'], ['gizlilik', 'Gizlilik Politikası', 'gizlilik.html'], ['cerez', 'Çerez Politikası', 'cerez-politikasi.html']].filter(x => x[0] !== window.NORD_PAGE);
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
  }, "Di\u011Fer metinler"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u0130lgili yasal metinler."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, all.map(([k, t, h]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: BASE + h,
    className: "arrowlink"
  }, t, " ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Crumb, {
    here: LEGAL.short
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: LEGAL.label,
    title: LEGAL.title,
    lede: LEGAL.lede,
    facts: LEGAL.facts
  }), /*#__PURE__*/React.createElement(Body, null), /*#__PURE__*/React.createElement(Related, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

/* nord-page-hizmetler.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
function Intro() {
  const total = window.NORD_SERVICES.reduce((a, s) => a + s.items.length, 0);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kapsam"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Alt\u0131 hizmet ailesi, ", total, " hizmet."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Her aile tek ba\u015F\u0131na al\u0131nabilir. \xDC\xE7\xFCnc\xFC aileden itibaren konsolide hacim indirimi devreye girer; her yeni aile mevcutlar\u0131n birim maliyetini de d\xFC\u015F\xFCr\xFCr. Detay i\xE7in bir aileyi a\xE7\u0131n."))), /*#__PURE__*/React.createElement(ServiceIndexList, null)));
}
function Bundling() {
  const tiers = [['1–2 aile', 'Tekil hizmet', 'Tek bir alanda dış kaynağa geçiş. Atanmış müşteri temsilcisi ve aylık gider raporu dahildir.'], ['3–4 aile', 'Konsolide', 'Konsolidasyonun etkisinin görüldüğü eşik. Hacim indirimi devreye girer, tek fatura ve tek mutabakata geçilir, çeyreklik tasarruf gözden geçirmesi başlar.'], ['5–6 aile', 'Tam kapsam', 'Tüm destek hizmetlerinin tek çatıya alındığı model. Azami hacim indirimi ve dedike hizmet yöneticisi; Nord Panel yayına alındığında ilk erişim bu kapsamda açılır.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Fiyat mant\u0131\u011F\u0131"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Fiyat hizmet ba\u015F\u0131na de\u011Fil, toplam hacme g\xF6re."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Bir aile eklemek, o ailenin bedelini eklemekle kalmaz; mevcut ailelerin birim maliyetini de d\xFC\u015F\xFCr\xFCr. Konsolidasyonun as\u0131l getirisi buradad\u0131r."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`,
    className: "arrowlink"
  }, "Ka\xE7 aile alsan\u0131z ne kazan\u0131rs\u0131n\u0131z? ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, tiers.map(([r, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: "lever"
  }, /*#__PURE__*/React.createElement("b", null, r), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Matrix() {
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
  }, "E\u015Fle\u015Fme"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hangi segment hangi aileyi al\u0131yor?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Alt\u0131 odak segmentimizin en \xE7ok ba\u015Fvurdu\u011Fu hizmet aileleri ve her segmentin kendine \xF6zg\xFC reg\xFClasyon y\xFCk\xFC Odak sayfas\u0131nda. Kesin kapsam, gider taramas\u0131ndan sonra netle\u015Fir."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}odak.html`,
    className: "arrowlink"
  }, "Odak segmentler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function App() {
  const total = window.NORD_SERVICES.reduce((a, s) => a + s.items.length, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "hizmetler"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Hizmetler"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Hizmetler",
    title: "Bir kurumun d\u0131\u015Far\u0131dan ald\u0131\u011F\u0131 her \u015Fey, tek s\xF6zle\u015Fmede.",
    lede: "\u0130nsan kayna\u011F\u0131ndan filoya, yan haktan teknoparka kadar alt\u0131 hizmet ailesi. Hepsi tek muhatap, tek fatura ve tek mutabakat alt\u0131nda y\xFCr\xFCr; hepsinin gideri ayn\u0131 raporda g\xF6r\xFCn\xFCr.",
    facts: [['Hizmet ailesi', '6'], ['Toplam hizmet', String(total)], ['Sözleşme', '1'], ['Aylık fatura', '1']],
    cta: [['Kapsamınızı birlikte belirleyelim', '#iletisim', true], ['Tasarruf hesabı', `${HOME}#hesap`, false]]
  }), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Bundling, null), /*#__PURE__*/React.createElement(Matrix, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

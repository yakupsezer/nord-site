/* nord-page-odak.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
function Why() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Neden odak"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Odaklanmak bir k\u0131s\u0131t de\u011Fil, bir yetkinlik karar\u0131."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Reg\xFCle bir kurumun destek ihtiyac\u0131 s\u0131radan bir \u015Firketinkine benzemez. Kadronun b\xFCy\xFCk b\xF6l\xFCm\xFC lisansl\u0131 olmak zorundad\u0131r, denetim takvimi ka\xE7\u0131r\u0131lamaz, sertifikasyon yenilemesi ertelenemez. Ayn\u0131 mevzuat\u0131 tekrar tekrar \xE7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z i\xE7in bir sonraki kurumda \xF6\u011Frenme s\xFCresi s\u0131f\u0131ra yakla\u015F\u0131yor."))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, [['SPK', 'Sermaye piyasası', 'Lisanslı personel zorunluluğu, iç kontrol ve teftiş yapısı, yatırımcı şikâyet süreçleri. Özlük hatası doğrudan denetim bulgusuna dönüşür.'], ['BDDK · TCMB', 'Ödeme ve bankacılık', 'Lisans şartlarının sürekliliği, TÖDEB üyeliği, raporlama takvimi. Uyum gecikmesi idari para cezası olarak geri döner.'], ['PCI-DSS · ISO', 'Sertifikasyon', '27001, 22301 ve 20000-1 denetim döngüleri. Belge kaybı yalnızca itibar değil, doğrudan ticari erişim kaybıdır.']].map(([v, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: "lever"
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Segments() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Alt\u0131 segment"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hizmet verdi\u011Fimiz kurum tipleri."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Her segmentin kendine \xF6zg\xFC bir maliyet bask\u0131s\u0131 ve kendine \xF6zg\xFC bir denetim takvimi var. A\u015Fa\u011F\u0131da her biri i\xE7in en \xE7ok ba\u015Fvurulan hizmet aileleri de listelenmi\u015Ftir."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`,
    className: "arrowlink"
  }, "Bu segmentlerdeki referanslar\u0131m\u0131z ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement(SegsGrid, null)));
}
function Outside() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kapsam d\u0131\u015F\u0131"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Bu alt\u0131 segmentte de\u011Filseniz."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "\xDCretim, perakende ya da hizmet sekt\xF6r\xFCnden bir kurumsan\u0131z modelimiz teknik olarak \xE7al\u0131\u015F\u0131r \u2014 ancak size reg\xFCle finansta sundu\u011Fumuz derinli\u011Fi sunamay\u0131z. Bu durumda a\xE7\u0131k\xE7a s\xF6yler, uygun bir tedarik\xE7iye y\xF6nlendiririz. Yapamayaca\u011F\u0131m\u0131z i\u015Fi almamak da bir maliyet disiplinidir."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "arrowlink"
  }, "Yine de konu\u015Fal\u0131m \u2014 durumunuzu de\u011Ferlendirelim ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "odak"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Odak"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Odak",
    title: "Herkese de\u011Fil, alt\u0131 segmente hizmet veriyoruz.",
    lede: "Nord yaln\u0131zca finansal reg\xFClasyon alt\u0131nda \xE7al\u0131\u015Fan kurumlarla ve teknoloji \u015Firketleriyle \xE7al\u0131\u015F\u0131r. SPK, BDDK, TCMB ve TSPB y\xFCk\xFCml\xFCl\xFCkleri; lisansl\u0131 personel zorunlulu\u011Fu; PCI-DSS ve ISO sertifikasyon takvimi \u2014 bu alan\u0131n dilini biliyoruz.",
    facts: [['Odak segment', '6'], ['Regülatör', 'SPK · BDDK · TCMB'], ['Sertifikasyon', 'PCI-DSS · ISO 27001'], ['Kapsam dışı', 'Diğer sektörler']],
    cta: [['Segmentinize özel analiz iste', '#iletisim', true], ['Hizmetleri görün', `${BASE}hizmetler.html`, false]]
  }), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(Segments, null), /*#__PURE__*/React.createElement(Outside, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

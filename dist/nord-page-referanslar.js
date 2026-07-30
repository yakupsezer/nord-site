/* nord-page-referanslar.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
function Refs() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kurumlar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "2025'ten bu yana bizimle \xE7al\u0131\u015Fan kurumlar."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Her biri farkl\u0131 bir reg\xFClat\xF6re ba\u011Fl\u0131, farkl\u0131 bir denetim takvimiyle \xE7al\u0131\u015F\u0131yor. Ortak noktalar\u0131: destek fonksiyonlar\u0131n\u0131 i\xE7eride tutman\u0131n maliyetini hesaplam\u0131\u015F olmalar\u0131."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "Bu kurumlar\u0131n ald\u0131\u011F\u0131 hizmetler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement(RefsGrid, null)));
}
function Cases() {
  const cases = [['Ödeme kuruluşu · 410 çalışan', 'Dokuz tedarikçi, tek kalem', 'Bordro, filo, yan hak, grup sağlık ve İSG ayrı ayrı yürütülüyordu. Beş ailenin devrinden sonra aylık mutabakat sayısı dokuzdan bire, sözleşme yenileme takvimi dokuz tarihten tek tarihe indi.', '%24', 'yıllık gider azalması'], ['Aracı kurum · 180 çalışan', 'Lisanslı kadroda sıfır hata', 'Kadronun büyük bölümü SPK lisanslı olduğu için özlük ve bordro hassasiyeti yüksekti. Devirden sonraki dört denetim döneminde personel dosyalarına ilişkin bulgu oluşmadı.', '0', 'denetim bulgusu'], ['Fintech · 95 çalışan', 'Ekip iki katına çıkarken', 'On iki ayda kadro iki katına çıktı. İşe alım, özlük ve yan hak operasyonu Nord\'da kaldığı için içeride tek bir İK kadrosu açmaya gerek kalmadı.', '3,5×', 'işe alım hızı']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Sonu\xE7lar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\xDC\xE7 kurumda ne de\u011Fi\u015Fti?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "M\xFC\u015Fteri gizlili\u011Fi gere\u011Fi kurum adlar\u0131 payla\u015F\u0131lm\u0131yor; rakamlar s\xF6zle\u015Fme d\xF6nemi raporlar\u0131ndan al\u0131nm\u0131\u015Ft\u0131r."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`,
    className: "arrowlink"
  }, "Sizde ne de\u011Fi\u015Fir? Hesaplay\u0131n ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, cases.map(([who, t, d, v, vl]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: "lever"
  }, /*#__PURE__*/React.createElement("b", null, v), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 14,
      color: 'var(--text-3)',
      fontSize: 12.5
    }
  }, who, " \xB7 ", vl), /*#__PURE__*/React.createElement("p", null, d))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "referanslar"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Referanslar"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Referanslar",
    title: "Reg\xFCle kurumlar\u0131n destek fonksiyonlar\u0131 bizde.",
    lede: "Arac\u0131 kurumdan \xF6deme kurulu\u015Funa, portf\xF6y y\xF6netiminden fintech giri\u015Fimine kadar; lisansl\u0131 kadro, denetim takvimi ve sertifikasyon y\xFCk\xFC olan kurumlarla \xE7al\u0131\u015F\u0131yoruz \u2014 hatan\u0131n maliyetinin ceza olarak geri d\xF6nd\xFC\u011F\xFC yerlerde.",
    facts: [['Canlıya alış', '2025'], ['Hizmet verilen kurum', '10+'], ['Odak segment', '6'], ['Ortalama tasarruf', '%27']],
    cta: [['Sizin için de hesaplayalım', '#iletisim', true], ['Odak segmentler', `${BASE}odak.html`, false]]
  }), /*#__PURE__*/React.createElement(Refs, null), /*#__PURE__*/React.createElement(Cases, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

/* nord-page-yaklasim.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
function Guarantees() {
  const g = [['01', 'Sözleşmeye yazılan oran', 'Analiz sonrası taahhüt ettiğimiz tasarruf oranı sözleşme metnine işlenir. Dönem sonunda tutturulamazsa aradaki fark bir sonraki fatura döneminden düşülür.'], ['02', 'Otuz gün ihbarla çıkış', 'Standart sözleşme on iki aylıktır ancak otuz gün ihbarla feshedilebilir. Çıkışta tüm verileriniz standart formatta devredilir; devir desteği ücretsizdir.'], ['03', 'Uyum sorumluluğu Nord\'da', 'Mevzuat takibi, yasal bildirim ve hesaplama hatalarının doğurduğu idari para cezası tarafımıza aittir. Denetimde çıkan bulgunun düzeltilmesi de bize düşer.'], ['04', 'Kurulum ve devir ücretsiz', 'Gider taraması, geçiş planlaması, veri aktarımı ve çalışan bilgilendirmesi için ayrıca ücret alınmaz. İlk fatura hizmet başladığı ay kesilir.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Taahh\xFCtler"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "S\xF6zle\u015Fmede ne yaz\u0131yor?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Konsolidasyon vaadi ancak yaz\u0131l\u0131ysa ba\u011Flay\u0131c\u0131d\u0131r. Standart s\xF6zle\u015Fmemizin d\xF6rt maddesi bu vaadi somutla\u015Ft\u0131r\u0131r."))), /*#__PURE__*/React.createElement("div", {
    className: "principles"
  }, g.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "principle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Compare() {
  const before = ['Yedi ilâ on bir ayrı tedarikçi, her biri ayrı sözleşme yenileme takviminde', 'Her tedarikçiyle ayrı fiyat pazarlığı — ölçek avantajı hiçbirinde oluşmuyor', 'Finans ekibi için onlarca fatura, mutabakat ve muhasebe kaydı', 'Hizmetler arası veri kopukluğu; toplam destek gideri hiçbir raporda tek satır değil', 'Sorun çıktığında sorumluluk tedarikçiler arasında dağılıyor', 'Sabit personel ve altyapı maliyeti bilançoda kalıyor'];
  const after = ['Tek sözleşme, tek fatura, tek yenileme takvimi', 'Konsolide hacim üzerinden tek pazarlık — üçüncü hizmet ailesinden itibaren indirim', 'Aylık tek mutabakat; muhasebe kayıt yükü dokuzda bire iniyor', 'Tüm hizmetlerin gideri tek raporda, maliyet merkezi kırılımıyla', 'Tek sorumlu ekip, SLA garantili yanıt süresi', 'Değişken maliyet modeli — kullandığınız kadar ödersiniz'];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kar\u015F\u0131la\u015Ft\u0131rma"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Da\u011F\u0131n\u0131k tedarik pahal\u0131d\u0131r. Konsolide tedarik de\u011Fildir."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Orta ve b\xFCy\xFCk \xF6l\xE7ekli bir kurum destek hizmetleri i\xE7in ortalama yedi il\xE2 on bir ayr\u0131 tedarik\xE7iyle \xE7al\u0131\u015F\u0131r. A\u015Fa\u011F\u0131daki iki s\xFCtun ayn\u0131 hizmet setinin iki farkl\u0131 y\xF6netim bi\xE7imidir."))), /*#__PURE__*/React.createElement("div", {
    className: "cmp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cmp-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmp-tag"
  }, "Bug\xFCnk\xFC tablo"), /*#__PURE__*/React.createElement("ul", null, before.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "x"
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 11,
    d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 6l12 12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }))
  })), x))), /*#__PURE__*/React.createElement("p", {
    className: "cmp-foot"
  }, "Y\xF6netim y\xFCk\xFC y\xFCksek, birim maliyet referans seviyede.")), /*#__PURE__*/React.createElement("div", {
    className: "cmp-col on"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cmp-tag"
  }, "Nord ile"), /*#__PURE__*/React.createElement("ul", null, after.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 12
  })), x))), /*#__PURE__*/React.createElement("p", {
    className: "cmp-foot"
  }, "Y\xF6netim y\xFCk\xFC minimum, birim maliyet %18\u201334 daha d\xFC\u015F\xFCk."))), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`,
    className: "arrowlink"
  }, "Kendi tasarrufunuzu hesaplay\u0131n ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))));
}
function Process() {
  const steps = [['01', 'Gider taraması', 'Mevcut sözleşmelerinizi ve son on iki ayın faturalarını inceler, hangi kalemde ne kadar tasarruf mümkün olduğunu rakamla ortaya koyarız. Analiz ücretsizdir ve bir taahhüt gerektirmez.'], ['02', 'Kapsam kararı', 'Hangi hizmet ailelerinin Nord\'a geçeceğine birlikte karar veririz. Tek sözleşme ve tek fiyat yapısı, taahhüt edilen tasarruf oranıyla birlikte bu aşamada kurulur.'], ['03', 'Devralma', 'Mevcut tedarikçilerle fesih ve devir sürecini biz yürütürüz. Sözleşme bitiş tarihlerine göre kademeli geçiş kurgularız; hiçbir hizmette kesinti olmaz.'], ['04', 'Aylık ritim', 'Her ay tek fatura, tek mutabakat ve hangi kalemde ne kadar tasarruf edildiğini gösteren tek sayfalık tablo. Çeyreklik gözden geçirmede kapsam yeniden değerlendirilir.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "S\xFCre\xE7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "D\xF6rt ad\u0131m, on d\xF6rt g\xFCn."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "arrowlink"
  }, "\u0130lk ad\u0131m\u0131 ba\u015Flat\u0131n \u2014 \xFCcretsiz gider taramas\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Next() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      paddingTop: 'clamp(72px,9vw,132px)',
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "S\u0131rada"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Modeli hizmetler \xFCzerinden g\xF6r\xFCn."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Alt\u0131 hizmet ailesinin i\xE7eri\u011Fi, maliyet etkisi ve hangi segmentin hangi aileyi ald\u0131\u011F\u0131 hizmetler sayfas\u0131nda."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "Hizmetler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`,
    className: "arrowlink"
  }, "Referanslar ve sonu\xE7lar ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "yaklasim"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Yakla\u015F\u0131m"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Nord Modeli",
    title: "Tedarik\xE7i say\u0131s\u0131n\u0131 azaltmak, en h\u0131zl\u0131 tasarruf kalemidir.",
    lede: "Nord bir hizmet sa\u011Flay\u0131c\u0131 de\u011Fil, bir konsolidasyon modelidir. Alt\u0131 hizmet ailesini tek s\xF6zle\u015Fme alt\u0131nda toplad\u0131\u011F\u0131m\u0131zda d\xFC\u015Fen sadece fiyat de\u011Fil; y\xF6netim y\xFCk\xFC, uyum riski ve karar s\xFCresi de d\xFC\u015Fer.",
    facts: [['Ortalama tasarruf', '%18–34'], ['Tedarikçi sadeleşmesi', '9 → 1'], ['Devralma süresi', '14 gün'], ['Fesih ihbarı', '30 gün']],
    cta: [['Ücretsiz gider analizi', '#iletisim', true], ['Tasarruf hesabı', `${HOME}#hesap`, false]]
  }), /*#__PURE__*/React.createElement(Compare, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Guarantees, null), /*#__PURE__*/React.createElement(Next, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

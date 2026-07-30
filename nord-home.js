/* nord-home.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const {
  useState
} = React;
const S = window.NORD_SERVICES;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Finans, fintech ve teknoloji \u015Firketleri i\xE7in")), /*#__PURE__*/React.createElement("h1", null, "Kurumsal giderinizi ", /*#__PURE__*/React.createElement("em", null, "tek noktadan"), " y\xF6netin."), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "Nord, reg\xFCle finans kurumlar\u0131n\u0131n ve teknoloji \u015Firketlerinin d\u0131\u015Far\u0131dan ald\u0131\u011F\u0131 t\xFCm destek hizmetlerini tek \xE7at\u0131 alt\u0131nda toplar. Da\u011F\u0131n\u0131k tedarik yerine tek muhatap, tek s\xF6zle\u015Fme, tek fatura \u2014 ve \xF6l\xE7ek avantaj\u0131yla d\xFC\u015Fen bir i\u015Fletme gideri."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#iletisim",
    className: "btn btn-primary btn-lg"
  }, "\xDCcretsiz gider analizi ", /*#__PURE__*/React.createElement(Arrow, {
    size: 15
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "btn btn-outline btn-lg"
  }, "Hizmetleri inceleyin")))));
}
function Band() {
  const items = [['%18–34', 'Konsolidasyon sonrası toplam işletme gideri tasarrufu'], ['9 → 1', 'Tek muhataba inen tedarikçi sayısı, tek fatura ve tek mutabakat'], ['2025', 'Canlıya alındığımızdan bu yana altı regüle ve teknoloji segmentinde']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "band"
  }, items.map(([b, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "band-item"
  }, /*#__PURE__*/React.createElement("b", null, b), /*#__PURE__*/React.createElement("span", null, s))))));
}
function References() {
  return /*#__PURE__*/React.createElement("section", {
    id: "referanslar",
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Referanslar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hatan\u0131n bedelinin ceza oldu\u011Fu kurumlarla \xE7al\u0131\u015F\u0131yoruz."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Lisansl\u0131 kadro, ka\xE7\u0131r\u0131lamayan denetim takvimi ve ertelenemeyen sertifikasyon yenilemesi \u2014 bizimle \xE7al\u0131\u015Fan kurumlar\u0131n ortak zemini bu."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`,
    className: "arrowlink"
  }, "Referanslar ve sonu\xE7lar ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}odak.html`,
    className: "arrowlink"
  }, "Odak segmentler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement(RefsStrip, null)));
}
function Approach() {
  const p = [['01', 'Tek muhatap', 'Altı hizmet ailesi, tek sözleşme ve tek fatura altında toplanır. Sorumluluk tedarikçiler arasında dağılmaz.'], ['02', 'Konsolide hacim', 'Pazarlık tedarikçi başına değil toplam hacim üzerinden yapılır. Tek başınıza elde edemeyeceğiniz fiyat oluşur.'], ['03', 'Değişken maliyet', 'Sabit personel ve altyapı yatırımı bilançodan çıkar. Kullandığınız kadar ödersiniz.'], ['04', 'Ölçülen tasarruf', 'Taahhüt edilen oran sözleşmeye yazılır, her ay kalem bazında raporlanır.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "yaklasim",
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Yakla\u015F\u0131m"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Tasarruf, d\xF6rt karardan do\u011Fuyor."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Nord bir hizmet sa\u011Flay\u0131c\u0131 de\u011Fil, bir konsolidasyon modeli. Giderin d\xFC\u015Fmesini sa\u011Flayan \u015Fey daha ucuz bir tedarik\xE7i bulmak de\u011Fil; tedarik yap\u0131s\u0131n\u0131n kendisini de\u011Fi\u015Ftirmek."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}yaklasim.html`,
    className: "arrowlink"
  }, "Nord Modeli'nin tamam\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "principles"
  }, p.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "principle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function ServiceIndex() {
  return /*#__PURE__*/React.createElement("section", {
    id: "hizmetler",
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Hizmetler"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "D\u0131\u015Far\u0131dan ald\u0131\u011F\u0131n\u0131z her \u015Fey, alt\u0131 ailede."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Bordrodan filoya, yan haktan teknoparka. Bir aileyi a\xE7\u0131n; i\xE7indeki hizmetleri, kimlerin ald\u0131\u011F\u0131n\u0131 ve maliyet etkisini g\xF6r\xFCn."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "Hizmetlerin tamam\u0131 ve fiyat mant\u0131\u011F\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "index"
  }, S.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    className: "index-row",
    href: svcHref(s.slug)
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, s.num), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, s.short), /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, s.items.length, " hizmet")), /*#__PURE__*/React.createElement("p", null, s.one), /*#__PURE__*/React.createElement("span", {
    className: "go"
  }, /*#__PURE__*/React.createElement(Arrow, {
    size: 16
  })))))));
}
const FAMILIES = [{
  k: 'ik',
  n: 'İnsan Kaynakları',
  rate: 0.030
}, {
  k: 'filo',
  n: 'Filo & Yakıt',
  rate: 0.026
}, {
  k: 'yanhak',
  n: 'Yan Hak Kartları',
  rate: 0.014
}, {
  k: 'saglik',
  n: 'Sağlık & Sigorta',
  rate: 0.018
}, {
  k: 'seyahat',
  n: 'Seyahat',
  rate: 0.012
}, {
  k: 'teknopark',
  n: 'Teknopark',
  rate: 0.022
}];
function Calculator() {
  const [emp, setEmp] = useState(250);
  const [sel, setSel] = useState(['ik', 'filo', 'saglik']);
  const toggle = k => setSel(s => s.includes(k) ? s.filter(x => x !== k) : [...s, k]);
  const chosen = FAMILIES.filter(f => sel.includes(f.k));
  const bonus = chosen.length >= 5 ? 1.22 : chosen.length >= 3 ? 1.12 : 1;
  const annual = Math.round(emp * 420000 * chosen.reduce((a, f) => a + f.rate, 0) * bonus);
  const vendors = chosen.length ? chosen.length + Math.round(chosen.length * 0.6) : 0;
  const fmt = n => '₺ ' + n.toLocaleString('tr-TR');
  return /*#__PURE__*/React.createElement("section", {
    id: "hesap",
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Tasarruf hesab\u0131"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Nord ile ne kadar tasarruf edersiniz?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "\xC7al\u0131\u015Fan say\u0131n\u0131z\u0131 ve Nord'a devretmeyi d\xFC\u015F\xFCnd\xFC\u011F\xFCn\xFCz hizmet ailelerini se\xE7in."))), /*#__PURE__*/React.createElement("div", {
    className: "calc-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "calc-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "\xC7al\u0131\u015Fan say\u0131s\u0131"), /*#__PURE__*/React.createElement("div", {
    className: "calc-input"
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "50",
    max: "2000",
    step: "10",
    value: emp,
    onChange: e => setEmp(+e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "calc-num"
  }, emp, /*#__PURE__*/React.createElement("small", null, "ki\u015Fi")))), /*#__PURE__*/React.createElement("div", {
    className: "calc-block"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Devredilecek hizmet aileleri"), /*#__PURE__*/React.createElement("div", {
    className: "chips"
  }, FAMILIES.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.k,
    className: sel.includes(f.k) ? 'on' : '',
    onClick: () => toggle(f.k)
  }, f.n)))), /*#__PURE__*/React.createElement("p", {
    className: "calc-note"
  }, "Hesap; ki\u015Fi ba\u015F\u0131 y\u0131ll\u0131k 420.000 \u20BA toplam i\u015Fletme gideri ve aile bazl\u0131 sekt\xF6r ortalamas\u0131 tasarruf oranlar\u0131 \xFCzerinden yap\u0131l\u0131r. \xDC\xE7 aileden itibaren konsolide hacim indirimi uygulan\u0131r. Ger\xE7ek oran, mevcut s\xF6zle\u015Fmeleriniz incelendikten sonra netle\u015Fir.")), /*#__PURE__*/React.createElement("div", {
    className: "calc-out"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Y\u0131ll\u0131k tahmini tasarruf"), /*#__PURE__*/React.createElement("b", null, fmt(annual)), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Ayl\u0131k \u2248 ", fmt(Math.round(annual / 12)))), /*#__PURE__*/React.createElement("div", {
    className: "calc-out-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Tedarik\xE7i sadele\u015Fmesi"), /*#__PURE__*/React.createElement("b", null, vendors || 0, " \u2192 ", chosen.length ? 1 : 0), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, chosen.length, " hizmet ailesi, tek s\xF6zle\u015Fme ve tek fatura alt\u0131nda")), /*#__PURE__*/React.createElement("a", {
    href: "#iletisim",
    className: "btn btn-primary btn-lg"
  }, "\u015Eirketime \xF6zel analiz iste ", /*#__PURE__*/React.createElement(Arrow, {
    size: 15
  }))))));
}
function Platform() {
  return /*#__PURE__*/React.createElement("section", {
    id: "platform",
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "soon-badge"
  }, /*#__PURE__*/React.createElement(Lock, {
    size: 13
  }), " Yak\u0131nda"), /*#__PURE__*/React.createElement("h2", null, "Nord Panel \u2014 alt\u0131 hizmetin gideri tek ekranda."), /*#__PURE__*/React.createElement("p", null, "T\xFCm hizmet ailelerinin t\xFCketimini, maliyet merkezi k\u0131r\u0131l\u0131m\u0131n\u0131 ve ayl\u0131k tasarruf tablosunu tek aray\xFCzden izleyebilece\u011Finiz panel geli\u015Ftirme a\u015Famas\u0131nda."), /*#__PURE__*/React.createElement("p", null, "Bug\xFCn bu takibi sizin ad\u0131n\u0131za atanm\u0131\u015F hizmet y\xF6neticiniz manuel olarak y\xFCr\xFCt\xFCyor: her ay tek fatura, tek mutabakat ve kalem bazl\u0131 tasarruf raporu size ula\u015F\u0131yor. Panel yay\u0131na al\u0131nd\u0131\u011F\u0131nda ayn\u0131 veriler ger\xE7ek zamanl\u0131 olarak eri\u015Fiminize a\xE7\u0131lacak."), /*#__PURE__*/React.createElement("ul", {
    className: "soon-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Dot, {
    size: 14
  }), " Bug\xFCn: atanm\u0131\u015F hizmet y\xF6neticisi, ayl\u0131k rapor ve tek fatura"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Dot, {
    size: 14
  }), " Yak\u0131nda: ger\xE7ek zamanl\u0131 gider paneli ve maliyet merkezi k\u0131r\u0131l\u0131m\u0131"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Dot, {
    size: 14
  }), " Sonraki ad\u0131m: ERP ve muhasebe entegrasyonu")), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}panel.html`,
    className: "arrowlink"
  }, "Panel kapsam\u0131 ve yol haritas\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: "#iletisim",
    className: "arrowlink"
  }, "Yay\u0131na al\u0131n\u0131nca haber verin ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))), /*#__PURE__*/React.createElement("div", {
    className: "soon-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon-bar"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "panel.nord.services")), /*#__PURE__*/React.createElement("div", {
    className: "soon-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon-kpis"
  }, [['Toplam aylık gider', '₺ 8.412.900'], ['Nord ile tasarruf', '₺ 2.147.600'], ['Tedarikçi', '1']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "soon-kpi"
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("b", null, v)))), /*#__PURE__*/React.createElement("div", {
    className: "soon-chart"
  }, [62, 70, 58, 74, 68, 82, 76, 88, 79, 85, 72, 91, 84, 94].map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      height: `${h}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "soon-rows"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null))), /*#__PURE__*/React.createElement("div", {
    className: "soon-veil"
  }, /*#__PURE__*/React.createElement("span", null, "Yak\u0131nda"))))));
}
function Quote() {
  return /*#__PURE__*/React.createElement("section", {
    className: "quote sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "M\xFC\u015Fteri"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Dokuz ayr\u0131 tedarik\xE7iyle \xE7al\u0131\u015F\u0131yorduk. Nord'dan sonra bu ", /*#__PURE__*/React.createElement("em", null, "tek bir kalem"), " oldu ve ilk y\u0131lda destek hizmetleri b\xFCt\xE7emiz y\xFCzde yirmi d\xF6rt d\xFC\u015Ft\xFC."), /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, "SK"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Selin Kaya"), /*#__PURE__*/React.createElement("span", null, "CFO \xB7 \xD6deme kurulu\u015Fu, 410 \xE7al\u0131\u015Fan")))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Band, null), /*#__PURE__*/React.createElement(References, null), /*#__PURE__*/React.createElement(Approach, null), /*#__PURE__*/React.createElement(ServiceIndex, null), /*#__PURE__*/React.createElement(Platform, null), /*#__PURE__*/React.createElement(Calculator, null), /*#__PURE__*/React.createElement(Quote, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

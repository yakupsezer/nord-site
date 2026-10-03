/* nord-page-panel.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
function Mock() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon-frame pnl-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon-bar"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("span", {
    className: "u"
  }, "panel.nord.services")), /*#__PURE__*/React.createElement("div", {
    className: "soon-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "soon-kpis"
  }, [['Toplam aylık gider', '₺ 8.412.900'], ['Nord ile tasarruf', '₺ 2.147.600'], ['Aktif hizmet ailesi', '6'], ['Tedarikçi', '1']].map(([l, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "soon-kpi"
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("b", null, v)))), /*#__PURE__*/React.createElement("div", {
    className: "soon-chart"
  }, [62, 70, 58, 74, 68, 82, 76, 88, 79, 85, 72, 91, 84, 94, 88, 96].map((h, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: {
      height: `${h}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pnl-tbl"
  }, window.NORD_SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "pnl-tr"
  }, /*#__PURE__*/React.createElement("span", null, s.short), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", {
    style: {
      width: `${28 + s.id * 11 % 46}%`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "soon-veil"
  }, /*#__PURE__*/React.createElement("span", null, "Yak\u0131nda"))), /*#__PURE__*/React.createElement("p", {
    className: "pnl-cap"
  }, "Aray\xFCz tasla\u011F\u0131. G\xF6rseldeki tutarlar \xF6rnektir.")));
}
function Today() {
  const steps = [['01', 'Atanmış hizmet yöneticisi', 'Altı hizmet ailesinin tamamı için tek muhatabınız var. Talep, arıza, yenileme ve istisna yönetimi bu kişiden geçer; içeride kim çalışıyorsa sizi ilgilendirmez.'], ['02', 'Tek fatura, tek mutabakat', 'Her ayın ilk haftasında hizmet ailelerinin tamamını kapsayan tek fatura kesilir. Muhasebeniz dokuz mutabakat yerine bir mutabakat yapar.'], ['03', 'Kalem bazlı gider raporu', 'Fatura ekinde hizmet, lokasyon ve maliyet merkezi kırılımlı gider tablosu gelir. Hangi kalemin arttığını, hangisinin düştüğünü aynı sayfada görürsünüz.'], ['04', 'Çeyreklik tasarruf gözden geçirmesi', 'Üç ayda bir, devir öncesi baz maliyetle güncel maliyeti karşılaştıran bir gözden geçirme yapılır. Hedefin altında kalan kalem varsa aksiyon planıyla birlikte sunulur.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "bugun",
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Bug\xFCn"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Panel yay\u0131na girmeden de takip aksam\u0131yor."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Nord Panel geli\u015Ftirme a\u015Famas\u0131nda. Panelin g\xF6sterece\u011Fi verinin tamam\u0131 bug\xFCn de \xFCretiliyor \u2014 sadece bir ekran yerine bir insan ve bir rapor \xFCzerinden ula\u015F\u0131yor."))), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "step"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Modules() {
  const m = [['01', 'Gider paneli', 'Altı hizmet ailesinin aylık tüketimi tek ekranda. Baz maliyetle karşılaştırmalı tasarruf eğrisi, hedefe uzaklık ve sapma uyarıları.'], ['02', 'Maliyet merkezi kırılımı', 'Her kalemin hangi departmana, lokasyona ve maliyet merkezine düştüğü. Bütçe sahibi kendi satırını kendi görür.'], ['03', 'Talep ve onay akışı', 'Yeni araç, kart limiti, seyahat ya da işe alım talebi panelden açılır; onay zinciri kayıt altında ilerler.'], ['04', 'Belge ve sözleşme arşivi', 'Poliçeler, İSG kayıtları, kira sözleşmeleri ve teşvik dosyaları tek yerde; yenileme tarihleri otomatik hatırlatmalı.'], ['05', 'Denetim izi', 'Kim ne zaman hangi kaydı gördü ve değiştirdi. Bağımsız denetim ve iç kontrol talepleri için dışa aktarılabilir log.'], ['06', 'Rapor ve dışa aktarım', 'Aylık gider, tasarruf ve tedarikçi raporları; muhasebe fişi ve ERP entegrasyonu için standart formatta çıktı.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Kapsam"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Panelde ne olacak?"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Panel bir \u0130K yaz\u0131l\u0131m\u0131 de\u011Fil; gider g\xF6r\xFCn\xFCrl\xFC\u011F\xFC arac\u0131. Tek amac\u0131, konsolidasyonun getirdi\u011Fi tasarrufu \xF6l\xE7\xFClebilir ve denetlenebilir k\u0131lmak."))), /*#__PURE__*/React.createElement("div", {
    className: "principles"
  }, m.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "principle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Road() {
  const r = [['Şimdi', 'Manuel operasyon', 'Atanmış hizmet yöneticisi, tek fatura, aylık kalem bazlı gider raporu ve çeyreklik tasarruf gözden geçirmesi.', 'live'], ['Sonraki', 'Gider paneli — ilk sürüm', 'Salt okunur gider ve tasarruf ekranı, maliyet merkezi kırılımı, belge arşivi. Aktif müşterilere kademeli açılış.', 'next'], ['Sonra', 'Akış ve entegrasyon', 'Talep–onay akışları, denetim izi, ERP ve muhasebe entegrasyonu, tek oturum açma (SSO).', 'later']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Yol haritas\u0131"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "S\u0131ralamay\u0131 m\xFC\u015Fterilerimizin talebi belirliyor."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Panel, mevcut m\xFC\u015Fterilerimizin ay sonu kapan\u0131\u015F\u0131nda en \xE7ok sordu\u011Fu \xFC\xE7 soruya g\xF6re \xF6nceliklendiriliyor. Tarih taahh\xFCd\xFC vermiyoruz \u2014 \xE7al\u0131\u015Fan bir s\xFCr\xFCm\xFC olmadan duyurmayaca\u011F\u0131z."))), /*#__PURE__*/React.createElement("div", {
    className: "road"
  }, r.map(([tag, t, d, st]) => /*#__PURE__*/React.createElement("article", {
    key: t,
    className: `road-row ${st}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "road-tag"
  }, tag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d)), /*#__PURE__*/React.createElement("span", {
    className: "road-st"
  }, st === 'live' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Check, {
    size: 12
  }), " Y\xFCr\xFCrl\xFCkte") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Lock, {
    size: 12
  }), " Geli\u015Ftirmede")))))));
}
function Sec() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
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
  }, "G\xFCvenlik"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Panel de veriyi T\xFCrkiye'de tutacak."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Panel, bug\xFCnk\xFC operasyonla ayn\u0131 altyap\u0131 \xFCzerinde \xE7al\u0131\u015Facak: T\xFCrkiye lokasyonlu ISO 27001 sertifikal\u0131 veri merkezi, rol bazl\u0131 eri\u015Fim, hizmet aileleri aras\u0131nda ayr\u0131\u015Ft\u0131r\u0131lm\u0131\u015F yetki ve tam denetim izi. \xDCcret verisini g\xF6ren ekip, filo verisini g\xF6rmez."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}gizlilik.html`,
    className: "arrowlink"
  }, "Gizlilik Politikas\u0131 ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}kvkk.html`,
    className: "arrowlink"
  }, "KVKK Ayd\u0131nlatma Metni ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "panel"
  }), /*#__PURE__*/React.createElement(Crumb, {
    here: "Nord Panel"
  }), /*#__PURE__*/React.createElement(PageHero, {
    label: "Nord Panel \xB7 Yak\u0131nda",
    title: "Alt\u0131 hizmet ailesinin gideri, tek ekranda.",
    lede: "Nord Panel, konsolide etti\u011Finiz destek hizmetlerinin t\xFCketimini ve tasarrufunu ger\xE7ek zamanl\u0131 g\xF6steren gider g\xF6r\xFCn\xFCrl\xFC\u011F\xFC panelidir. Geli\u015Ftirme a\u015Famas\u0131nda; bug\xFCn ayn\u0131 veriyi atanm\u0131\u015F hizmet y\xF6neticiniz ve ayl\u0131k raporunuz \xFCzerinden al\u0131yorsunuz.",
    facts: [['Durum', 'Geliştirmede'], ['Bugünkü model', 'Hizmet yöneticisi + aylık rapor'], ['Müşteriler için', 'Ücretsiz'], ['Veri lokasyonu', 'Türkiye']],
    cta: [['Yayına alınınca haber verin', '#iletisim', true], ['Bugün nasıl çalışıyor?', '#bugun']]
  }), /*#__PURE__*/React.createElement(Mock, null), /*#__PURE__*/React.createElement(Today, null), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(Road, null), /*#__PURE__*/React.createElement(Sec, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

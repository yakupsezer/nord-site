/* nord-about.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const S = window.NORD_SERVICES;
function AboutHero() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME || '#top'
  }, "Nord"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-2)'
    }
  }, "Hakk\u0131m\u0131zda"))), /*#__PURE__*/React.createElement("section", {
    className: "svc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "svc-lever"
  }, "Hakk\u0131m\u0131zda"), /*#__PURE__*/React.createElement("h1", null, "Bir kurumun destek yap\u0131s\u0131, reg\xFClasyonu kadar a\u011F\u0131rd\u0131r.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Nord Kurumsal Hizmetler, reg\xFCle finans kurumlar\u0131n\u0131n ve teknoloji \u015Firketlerinin d\u0131\u015Far\u0131dan ald\u0131\u011F\u0131 destek hizmetlerini tek \xE7at\u0131 alt\u0131nda toplayan bir kurumsal \xE7\xF6z\xFCm orta\u011F\u0131d\u0131r. Alt\u0131 hizmet ailesini tek s\xF6zle\u015Fme, tek fatura ve tek muhatap alt\u0131nda y\xF6netir; kurumun destek yap\u0131s\u0131na ay\u0131rd\u0131\u011F\u0131 b\xFCt\xE7eyi ve dikkati as\u0131l i\u015Fine geri d\xF6nd\xFCr\xFCr\xFCz."), /*#__PURE__*/React.createElement("ul", {
    className: "svc-facts"
  }, [['Canlıya alış', '2025'], ['Odak segment', '6'], ['Hizmet verilen kurum', '10+'], ['Merkez', 'Ümraniye / İstanbul']].map(([k, v], i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, k, /*#__PURE__*/React.createElement("b", null, v)))), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "btn btn-primary"
  }, "Bizimle konu\u015Fun ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`,
    className: "btn btn-outline"
  }, "Referanslar")))))));
}
function Mission() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Misyon"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u015Eirketlerin ana i\u015Fine ay\u0131rd\u0131\u011F\u0131 kayna\u011F\u0131 b\xFCy\xFCtmek."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Bir kurumun kayna\u011F\u0131 iki yere gider: de\u011Fer \xFCretti\u011Fi i\u015Fe ve o i\u015Fi ayakta tutan destek yap\u0131s\u0131na. Reg\xFCle sekt\xF6rlerde ikincisi orant\u0131s\u0131z b\xFCy\xFCr \u2014 lisansl\u0131 kadro, denetim takvimi, sertifikasyon y\xFCk\xFC. Nord'un varl\u0131k sebebi bu dengeyi d\xFCzeltmektir: destek hizmetlerini daha ucuza, daha az y\xF6netim y\xFCk\xFCyle ve daha az uyum riskiyle sa\u011Flayarak kurumun sermayesini ve dikkatini as\u0131l i\u015Fine geri vermek."))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, [['Sadeleştirme', 'Dağınık tedarikçi yapısını tek muhataba indirger, sözleşme ve mutabakat yükünü ortadan kaldırırız.'], ['Ölçek', 'Tek şirketin erişemeyeceği fiyatı, konsolide hacim üzerinden pazarlık ederek elde ederiz.'], ['Şeffaflık', 'Taahhüt ettiğimiz tasarruf oranı sözleşmeye yazılır, her ay kalem bazında raporlanır.']].map(([t, d], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "lever"
  }, /*#__PURE__*/React.createElement("b", null, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h4", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Focus() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Odak ve referanslar"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Kapsam\u0131m\u0131z iki listenin kesi\u015Fimi."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Alt\u0131 segment ve alt\u0131 hizmet ailesi \u2014 ikisinin kesi\u015Fimi bu \u015Firketin t\xFCm kapsam\u0131. Hangi segmentin hangi aileyi ald\u0131\u011F\u0131, bizimle \xE7al\u0131\u015Fan kurumlar ve elde edilen sonu\xE7lar ilgili sayfalarda."), /*#__PURE__*/React.createElement("div", {
    className: "sec-more",
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}odak.html`,
    className: "arrowlink"
  }, "Odak segmentler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`,
    className: "arrowlink"
  }, "Referanslar ve sonu\xE7lar ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`,
    className: "arrowlink"
  }, "Hizmetler ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))))));
}
function Story() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Hik\xE2ye"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Bir y\u0131l, alt\u0131 hizmet ailesi."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Nord 2025'te, tek bir soruya cevap vermek i\xE7in kuruldu: reg\xFCle bir kurum destek fonksiyonlar\u0131n\u0131 neden sekiz ayr\u0131 tedarik\xE7iden almak zorunda olsun?"))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, [['2025 · Q1', 'Kuruluş ve canlıya alış', 'Nord, bir aracı kurumun bordro ve özlük operasyonunu devralan küçük bir uzman ekiple kuruldu ve aynı yıl canlıya alındı. İlk müşterilerimizin ortak sorusu hep aynıydı: "Bunu yapıyorsanız, diğerlerini de yapabilir misiniz?"'], ['2025 · Q2', 'İlk kurumlar', 'Tahsildar ve Pratik İşlem ile başlayan portföy, One Portföy ve Destek Yatırım ile genişledi. Regüle finans, doğal odak alanımız olarak burada netleşti.'], ['2025 · Q3', 'Filo, yan hak ve sağlık', 'Araç kiralama, yakıt yönetimi, yan hak kartları, grup sağlık poliçesi ve İSG yükümlülüğü portföye eklendi. Konsolidasyonun tek bir hizmette değil, hizmetlerin toplamında anlam kazandığını burada gördük.'], ['2025 · Q4', 'Seyahat ve teknopark', 'Kurumsal seyahat yönetimi ve ardından Ar-Ge teşvikleri, proje yazımı ve portal yönetimiyle altıncı hizmet ailesi tamamlandı. Müşteri başına ortalama tedarikçi sayısı dokuzdan bire indi.'], ['2026', 'Nord Panel', 'Tüm hizmet ailelerinin giderini tek ekranda birleştiren panel geliştirme aşamasında. Bugün bu takibi atanmış hizmet yöneticileri manuel olarak yürütüyor.']].map(([y, t, d], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: "detail-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, y), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("p", null, d)))))));
}
function Principles() {
  const p = [['01', 'Rakam konuşur', 'Tasarruf iddiası ancak ölçülebiliyorsa anlamlıdır. Her müşterimize aylık olarak hangi kalemde ne kadar tasarruf edildiğini gösteren tek sayfalık tablo sunarız.'], ['02', 'Yapamayacağımız işi almayız', 'Odak segmentlerimizin dışındaki bir kurumu, model teknik olarak çalışsa bile geçirmeyiz. Ciroyu büyütmek için derinliğimizi seyreltmeyiz.'], ['03', 'Kalıcı ekip', 'Her kuruma atanan hizmet yöneticisi değişmez. Mevzuatınızı, kadro yapınızı ve denetim takviminizi öğrenmiş bir kişiyle çalışırsınız; her seferinde baştan anlatmazsınız.'], ['04', 'Kötü haberi önce biz veririz', 'Bir bildirim kaçtıysa, bir hesaplama hatalıysa ya da bir teşvik kaçırıldıysa denetimden önce siz öğrenirsiniz. Güven, iyi haberle değil kötü haberin zamanında gelmesiyle kurulur.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-slate"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "\u0130lkeler"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Nas\u0131l \xE7al\u0131\u015Ft\u0131\u011F\u0131m\u0131z\u0131 belirleyen d\xF6rt karar."))), /*#__PURE__*/React.createElement("div", {
    className: "principles"
  }, p.map(([n, t, d]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "principle"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d))))));
}
function Office() {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec panel-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Ofis"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\xDCmraniye, \u0130stanbul."))), /*#__PURE__*/React.createElement("div", {
    className: "levers"
  }, /*#__PURE__*/React.createElement("article", {
    className: "lever"
  }, /*#__PURE__*/React.createElement("h4", null, "Adres"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\u0130nk\u0131lap Mah."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Dr. Adnan B\xFCy\xFCkdeniz Cad."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "2. Blok No:4, \u0130\xE7 Kap\u0131 No:7"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "\xDCmraniye / \u0130stanbul"))), /*#__PURE__*/React.createElement("article", {
    className: "lever"
  }, /*#__PURE__*/React.createElement("h4", null, "\u0130leti\u015Fim"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:kurumsal@nord.services",
    style: {
      display: 'block'
    }
  }, "kurumsal@nord.services"), /*#__PURE__*/React.createElement("a", {
    href: LINKEDIN,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'block'
    }
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("article", {
    className: "lever"
  }, /*#__PURE__*/React.createElement("h4", null, "\xC7al\u0131\u015Fma saatleri"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Pazartesi \u2013 Cuma, 09.00 \u2013 18.00"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, "Aktif m\xFC\u015Fteriler i\xE7in 7/24 acil hat")))), /*#__PURE__*/React.createElement("div", {
    className: "sec-more"
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "arrowlink"
  }, "Randevu i\xE7in bize yaz\u0131n ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })))));
}
function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    active: "hakkimizda"
  }), /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(Mission, null), /*#__PURE__*/React.createElement(Focus, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Principles, null), /*#__PURE__*/React.createElement(Office, null), /*#__PURE__*/React.createElement(CTASection, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})();

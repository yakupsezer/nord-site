/* nord-shared.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const {
  useState
} = React;
const BASE = window.NORD_BASE || '';
const HOME = window.NORD_IS_HOME ? '' : BASE + 'Nord.html';
const svcHref = slug => `${BASE}hizmetler/${slug}.html`;
const LINKEDIN = 'https://www.linkedin.com/company/nordservices/';
const Ico = ({
  d,
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.4",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d);
const Arrow = ({
  size
}) => /*#__PURE__*/React.createElement(Ico, {
  size: size,
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 6 6 6-6 6"
  }))
});
const Check = ({
  size
}) => /*#__PURE__*/React.createElement(Ico, {
  size: size,
  d: /*#__PURE__*/React.createElement("path", {
    d: "M4 12.5 9.5 18 20 6"
  })
});
const Lock = ({
  size
}) => /*#__PURE__*/React.createElement(Ico, {
  size: size,
  d: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "16",
    height: "10",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10V7a4 4 0 0 1 8 0v3"
  }))
});
const Dot = ({
  size
}) => /*#__PURE__*/React.createElement(Ico, {
  size: size,
  d: /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })
});

/* Nord compass mark — ring + four-point star, long NE–SW needle */
function Mark({
  className = ''
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    viewBox: "0 0 100 100",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "31",
    stroke: "currentColor",
    strokeWidth: "11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M92 8 55 55 8 92 45 45Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M27 27 54 46 73 73 46 54Z",
    fill: "currentColor"
  }));
}
function Logo({
  size = '',
  href = null
}) {
  const inner = /*#__PURE__*/React.createElement("img", {
    src: `${BASE}assets/nord-logo-tescil-05.png`,
    alt: "Nord",
    className: "logo-img"
  });
  const cls = `logo ${size}`;
  return href !== null ? /*#__PURE__*/React.createElement("a", {
    href: href,
    className: cls,
    "aria-label": "Nord"
  }, inner) : /*#__PURE__*/React.createElement("span", {
    className: cls,
    "aria-label": "Nord"
  }, inner);
}
function Nav({
  active = ''
}) {
  const [open, setOpen] = useState(false);
  const links = [['yaklasim', 'Yaklaşım', 'yaklasim.html'], ['hizmetler', 'Hizmetler', 'hizmetler.html'], ['odak', 'Odak', 'odak.html'], ['referanslar', 'Referanslar', 'referanslar.html'], ['panel', 'Panel', 'panel.html'], ['blog', 'Blog', 'blog.html'], ['hakkimizda', 'Hakkımızda', 'hakkimizda.html']];
  return /*#__PURE__*/React.createElement("nav", {
    className: `nav ${open ? 'open' : ''}`
  }, /*#__PURE__*/React.createElement(Logo, {
    size: "sm",
    href: HOME || '#top'
  }), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(([k, t, h]) => /*#__PURE__*/React.createElement("li", {
    key: k
  }, /*#__PURE__*/React.createElement("a", {
    href: BASE + h,
    className: active === k ? 'on' : ''
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "btn btn-outline"
  }, "Gider analizi ", /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "nav-toggle",
    onClick: () => setOpen(o => !o),
    "aria-label": "Men\xFC",
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "nav-drawer"
  }, links.map(([k, t, h]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: BASE + h,
    className: active === k ? 'on' : ''
  }, t, " ", /*#__PURE__*/React.createElement(Arrow, {
    size: 15
  }))), /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "drawer-cta"
  }, "Gider analizi ", /*#__PURE__*/React.createElement(Arrow, {
    size: 15
  }))));
}
function Crumb({
  here
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME || '#top'
  }, "Nord"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-2)'
    }
  }, here)));
}
function PageHero({
  label,
  title,
  lede,
  facts,
  cta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "svc-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "svc-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "svc-lever"
  }, label), /*#__PURE__*/React.createElement("h1", null, title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, lede), facts && /*#__PURE__*/React.createElement("ul", {
    className: "svc-facts"
  }, facts.map(([k, v], i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, k, /*#__PURE__*/React.createElement("b", null, v)))), cta && /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      marginTop: 28
    }
  }, cta.map(([t, h, primary], i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: h,
    className: `btn ${primary ? 'btn-primary' : 'btn-outline'}`
  }, t, primary && /*#__PURE__*/React.createElement(Arrow, {
    size: 14
  }))))))));
}
function SegsGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "segs"
  }, window.NORD_SEGMENTS.map(([n, t, d, tags]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    className: "seg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, n), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, d), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, tags.map(x => /*#__PURE__*/React.createElement("i", {
    key: x
  }, x))))));
}
function RefsStrip() {
  return /*#__PURE__*/React.createElement("div", {
    className: "refstrip"
  }, window.NORD_REFS.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.name,
    href: r.url,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement("b", null, r.name), /*#__PURE__*/React.createElement("span", null, r.cat))));
}
function RefsGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "refs"
  }, window.NORD_REFS.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.name,
    className: "ref",
    href: r.url,
    target: "_blank",
    rel: "noopener"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cat"
  }, r.cat), /*#__PURE__*/React.createElement("h4", null, r.name), /*#__PURE__*/React.createElement("p", null, r.desc))));
}
function ServiceIndexList() {
  return /*#__PURE__*/React.createElement("div", {
    className: "index"
  }, window.NORD_SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
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
  })))));
}
function CTASection() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({
    name: '',
    company: '',
    size: '250–500',
    email: '',
    phone: ''
  });
  const up = k => e => setF(s => ({
    ...s,
    [k]: e.target.value
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "iletisim",
    className: "cta sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cta-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, "Gider analizi"), /*#__PURE__*/React.createElement("h2", null, "Nerede fazla \xF6dedi\u011Finizi \xFCcretsiz g\xF6sterelim."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Son on iki ay\u0131n destek hizmeti faturalar\u0131n\u0131 inceleyip, hangi kalemde ne kadar tasarruf m\xFCmk\xFCn oldu\u011Funu g\xF6steren tek sayfal\u0131k bir rapor haz\u0131rl\u0131yoruz."), /*#__PURE__*/React.createElement("ul", {
    className: "cta-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, {
    size: 16
  }), " Kalem bazl\u0131 kar\u015F\u0131la\u015Ft\u0131rma, ger\xE7ek faturalar\u0131n\u0131z \xFCzerinden"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, {
    size: 16
  }), " Taahh\xFCt edilen tasarruf oran\u0131 s\xF6zle\u015Fmeye yaz\u0131l\u0131r"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Check, {
    size: 16
  }), " Analiz \xFCcretsizdir, bir taahh\xFCt gerektirmez")), /*#__PURE__*/React.createElement("div", {
    className: "cta-reach"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+908508851500"
  }, "+90 850 885 15 00"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kurumsal@nord.services"
  }, "kurumsal@nord.services"), /*#__PURE__*/React.createElement("a", {
    href: LINKEDIN,
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn"))), /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, !sent ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Analiz talebi"), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Ad Soyad"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: f.name,
    onChange: up('name'),
    placeholder: "Mehmet Y\u0131lmaz"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u015Eirket"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: f.company,
    onChange: up('company'),
    placeholder: "\u015Eirket ad\u0131"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\xC7al\u0131\u015Fan say\u0131s\u0131"), /*#__PURE__*/React.createElement("select", {
    value: f.size,
    onChange: up('size')
  }, /*#__PURE__*/React.createElement("option", null, "50\u2013250"), /*#__PURE__*/React.createElement("option", null, "250\u2013500"), /*#__PURE__*/React.createElement("option", null, "500\u20131000"), /*#__PURE__*/React.createElement("option", null, "1000\u20132000"), /*#__PURE__*/React.createElement("option", null, "2000+"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Telefon"), /*#__PURE__*/React.createElement("input", {
    value: f.phone,
    onChange: up('phone'),
    placeholder: "0 5__ ___ __ __"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Kurumsal e-posta"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    value: f.email,
    onChange: up('email'),
    placeholder: "ad@sirket.com"
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg btn-block",
    type: "submit"
  }, "\xDCcretsiz analiz iste ", /*#__PURE__*/React.createElement(Arrow, {
    size: 15
  })), /*#__PURE__*/React.createElement("p", {
    className: "form-tos"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}kvkk.html`
  }, "KVKK ayd\u0131nlatma metnini"), " okudu\u011Funuzu kabul edersiniz.")) : /*#__PURE__*/React.createElement("div", {
    className: "form-ok"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tick-lg"
  }, /*#__PURE__*/React.createElement(Check, {
    size: 24
  })), /*#__PURE__*/React.createElement("h3", null, "Talebiniz al\u0131nd\u0131", f.name ? `, ${f.name.split(' ')[0]}` : '', "."), /*#__PURE__*/React.createElement("p", null, "Kurumsal \xE7\xF6z\xFCm ekibimiz bir i\u015F g\xFCn\xFC i\xE7inde sizinle ileti\u015Fime ge\xE7ecek. Bu s\u0131rada ", /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`
  }, "hizmet ailelerini"), " inceleyebilirsiniz."))))));
}
function CookieBar() {
  const KEY = 'nord-cookie-consent';
  const [choice, setChoice] = useState(() => {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return 'dismissed';
    }
  });
  if (choice) return null;
  const decide = v => {
    try {
      localStorage.setItem(KEY, v);
    } catch (e) {}
    setChoice(v);
  };
  return /*#__PURE__*/React.createElement("aside", {
    className: "cookiebar",
    role: "region",
    "aria-label": "\xC7erez bildirimi"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cookiebar-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cookiebar-txt"
  }, /*#__PURE__*/React.createElement("h4", null, "\xC7erezler"), /*#__PURE__*/React.createElement("p", null, "Bu site, \xE7al\u0131\u015Fmas\u0131 i\xE7in zorunlu \xE7erezleri kullan\u0131r. Sayfa kullan\u0131m\u0131n\u0131 \xF6l\xE7en analitik \xE7erezler ise yaln\u0131zca onay\u0131n\u0131zla \xE7al\u0131\u015F\u0131r. Reklam \xE7erezi kullanm\u0131yoruz. ", /*#__PURE__*/React.createElement("a", {
    href: `${BASE}cerez-politikasi.html`
  }, "\xC7erez Politikas\u0131"))), /*#__PURE__*/React.createElement("div", {
    className: "cookiebar-act"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cb-ghost",
    onClick: () => decide('rejected')
  }, "Yaln\u0131zca zorunlu"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "cb-solid",
    onClick: () => decide('accepted')
  }, "Kabul et"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-brand"
  }, /*#__PURE__*/React.createElement(Logo, {
    href: HOME || '#top'
  }), /*#__PURE__*/React.createElement("p", null, "Reg\xFCle finans kurumlar\u0131n\u0131n ve teknoloji \u015Firketlerinin d\u0131\u015Far\u0131dan ald\u0131\u011F\u0131 t\xFCm destek hizmetlerini tek \xE7at\u0131 alt\u0131nda toplayarak i\u015Fletme giderini d\xFC\u015F\xFCren kurumsal \xE7\xF6z\xFCm orta\u011F\u0131.")), /*#__PURE__*/React.createElement("div", {
    className: "foot-cols"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hizmetler.html`
  }, "Hizmetler")), window.NORD_SERVICES.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.id,
    href: svcHref(s.slug)
  }, s.short))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Kurumsal"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}yaklasim.html`
  }, "Yakla\u015F\u0131m"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}odak.html`
  }, "Odak segmentler"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}referanslar.html`
  }, "Referanslar"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}hakkimizda.html`
  }, "Hakk\u0131m\u0131zda"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}blog.html`
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    href: `${HOME}#hesap`
  }, "Tasarruf hesab\u0131"), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}panel.html`
  }, "Nord Panel")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "\u0130leti\u015Fim"), /*#__PURE__*/React.createElement("address", null, /*#__PURE__*/React.createElement("span", null, "\u0130nk\u0131lap Mah."), /*#__PURE__*/React.createElement("span", null, "Dr. Adnan B\xFCy\xFCkdeniz Cad."), /*#__PURE__*/React.createElement("span", null, "2. Blok No:4, \u0130\xE7 Kap\u0131 No:7"), /*#__PURE__*/React.createElement("span", null, "\xDCmraniye / \u0130stanbul")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kurumsal@nord.services"
  }, "kurumsal@nord.services"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+908508851500"
  }, "+90 850 885 15 00"), /*#__PURE__*/React.createElement("a", {
    href: LINKEDIN,
    target: "_blank",
    rel: "noopener"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: '#iletisim',
    className: "foot-cta"
  }, "\xDCcretsiz gider analizi ", /*#__PURE__*/React.createElement(Arrow, {
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bot"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Nord Kurumsal Hizmetler"), /*#__PURE__*/React.createElement("div", {
    className: "foot-meta"
  }, /*#__PURE__*/React.createElement("a", {
    href: `${BASE}kvkk.html`
  }, "KVKK Ayd\u0131nlatma Metni"), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}gizlilik.html`
  }, "Gizlilik Politikas\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }), /*#__PURE__*/React.createElement("a", {
    href: `${BASE}cerez-politikasi.html`
  }, "\xC7erez Politikas\u0131"), /*#__PURE__*/React.createElement("span", {
    className: "d"
  }), /*#__PURE__*/React.createElement("span", null, "ISO 27001 \xB7 KVKK uyumlu")))), /*#__PURE__*/React.createElement(CookieBar, null));
}
Object.assign(window, {
  Ico,
  Arrow,
  Check,
  Lock,
  Dot,
  Mark,
  Logo,
  Nav,
  Crumb,
  PageHero,
  SegsGrid,
  RefsGrid,
  RefsStrip,
  ServiceIndexList,
  CTASection,
  Footer,
  CookieBar,
  BASE,
  HOME,
  svcHref,
  LINKEDIN
});
})();

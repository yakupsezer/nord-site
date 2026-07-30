const { useState } = React;
const BASE = window.NORD_BASE || '';
const HOME = window.NORD_IS_HOME ? '' : BASE + 'Nord.html';
const svcHref = (slug) => `${BASE}hizmetler/${slug}.html`;
const LINKEDIN = 'https://www.linkedin.com/company/nordservices/';

const Ico = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);
const Arrow = ({ size }) => <Ico size={size} d={<><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>} />;
const Check = ({ size }) => <Ico size={size} d={<path d="M4 12.5 9.5 18 20 6"/>} />;
const Lock = ({ size }) => <Ico size={size} d={<><rect x="4" y="10" width="16" height="10" rx="1.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>} />;
const Dot = ({ size }) => <Ico size={size} d={<circle cx="12" cy="12" r="3"/>} />;

/* Nord compass mark — ring + four-point star, long NE–SW needle */
function Mark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="31" stroke="currentColor" strokeWidth="11"/>
      <path d="M92 8 55 55 8 92 45 45Z" fill="currentColor"/>
      <path d="M27 27 54 46 73 73 46 54Z" fill="currentColor"/>
    </svg>
  );
}

function Logo({ size = '', href = null }) {
  const inner = <img src={`${BASE}assets/nord-logo-final.png`} alt="Nord" className="logo-img"/>;
  const cls = `logo ${size}`;
  return href !== null ? <a href={href} className={cls} aria-label="Nord">{inner}</a> : <span className={cls} aria-label="Nord">{inner}</span>;
}

function Nav({ active = '' }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['yaklasim','Yaklaşım','yaklasim.html'],
    ['hizmetler','Hizmetler','hizmetler.html'],
    ['odak','Odak','odak.html'],
    ['referanslar','Referanslar','referanslar.html'],
    ['panel','Panel','panel.html'],
    ['blog','Blog','blog.html'],
    ['hakkimizda','Hakkımızda','hakkimizda.html']
  ];
  return (
    <nav className={`nav ${open ? 'open' : ''}`}>
      <Logo size="sm" href="/"/>
      <ul className="nav-links">
        {links.map(([k,t,h]) => (
          <li key={k}><a href={BASE + h} className={active === k ? 'on' : ''}>{t}</a></li>
        ))}
      </ul>
      <div className="nav-right">
        <a href={'#iletisim'} className="btn btn-outline">Gider analizi <Arrow size={14}/></a>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menü" aria-expanded={open}>
          <span/><span/>
        </button>
      </div>
      <div className="nav-drawer">
        {links.map(([k,t,h]) => (
          <a key={k} href={BASE + h} className={active === k ? 'on' : ''}>{t} <Arrow size={15}/></a>
        ))}
        <a href={'#iletisim'} className="drawer-cta">Gider analizi <Arrow size={15}/></a>
      </div>
    </nav>
  );
}

function Crumb({ here }) {
  return (
    <div className="wrap">
      <div className="crumb"><a href="/">Nord</a><span>/</span><span style={{color:'var(--text-2)'}}>{here}</span></div>
    </div>
  );
}

function PageHero({ label, title, lede, facts, cta }) {
  return (
    <section className="svc-hero">
      <div className="wrap">
        <div className="svc-hero-grid">
          <div>
            <span className="svc-lever">{label}</span>
            <h1>{title}</h1>
          </div>
          <div>
            <p className="lede">{lede}</p>
            {facts && <ul className="svc-facts">{facts.map(([k,v],i) => <li key={i}>{k}<b>{v}</b></li>)}</ul>}
            {cta && <div className="hero-cta" style={{marginTop:28}}>
              {cta.map(([t,h,primary],i) => (
                <a key={i} href={h} className={`btn ${primary ? 'btn-primary' : 'btn-outline'}`}>{t}{primary && <Arrow size={14}/>}</a>
              ))}
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function SegsGrid() {
  return (
    <div className="segs">
      {window.NORD_SEGMENTS.map(([n,t,d,tags]) => (
        <article key={n} className="seg">
          <span className="num">{n}</span>
          <h3>{t}</h3><p>{d}</p>
          <div className="tags">{tags.map(x => <i key={x}>{x}</i>)}</div>
        </article>
      ))}
    </div>
  );
}

function RefsStrip() {
  return (
    <div className="refstrip">
      {window.NORD_REFS.map(r => (
        <a key={r.name} href={r.url} target="_blank" rel="noopener">
          <b>{r.name}</b><span>{r.cat}</span>
        </a>
      ))}
    </div>
  );
}

function RefsGrid() {
  return (
    <div className="refs">
      {window.NORD_REFS.map(r => (
        <a key={r.name} className="ref" href={r.url} target="_blank" rel="noopener">
          <span className="cat">{r.cat}</span>
          <h4>{r.name}</h4>
          <p>{r.desc}</p>
        </a>
      ))}
    </div>
  );
}

function ServiceIndexList() {
  return (
    <div className="index">
      {window.NORD_SERVICES.map(s => (
        <a key={s.id} className="index-row" href={svcHref(s.slug)}>
          <span className="num">{s.num}</span>
          <div><h3>{s.short}</h3><span className="count">{s.items.length} hizmet</span></div>
          <p>{s.one}</p>
          <span className="go"><Arrow size={16}/></span>
        </a>
      ))}
    </div>
  );
}

function CTASection() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name:'', company:'', size:'250–500', email:'', phone:'' });
  const up = (k) => (e) => setF(s => ({...s, [k]: e.target.value}));
  return (
    <section id="iletisim" className="cta sec">
      <div className="wrap">
        <div className="cta-grid">
          <div>
            <span className="label">Gider analizi</span>
            <h2>Nerede fazla ödediğinizi ücretsiz gösterelim.</h2>
            <p className="lede">Son on iki ayın destek hizmeti faturalarını inceleyip, hangi kalemde ne kadar tasarruf mümkün olduğunu gösteren tek sayfalık bir rapor hazırlıyoruz.</p>
            <ul className="cta-list">
              <li><Check size={16}/> Kalem bazlı karşılaştırma, gerçek faturalarınız üzerinden</li>
              <li><Check size={16}/> Taahhüt edilen tasarruf oranı sözleşmeye yazılır</li>
              <li><Check size={16}/> Analiz ücretsizdir, bir taahhüt gerektirmez</li>
            </ul>
            <div className="cta-reach">
              <a href="tel:+908508851500">+90 850 885 15 00</a>
              <a href="mailto:kurumsal@nord.services">kurumsal@nord.services</a>
              <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {!sent ? <>
              <h3>Analiz talebi</h3>
              <div className="field"><label>Ad Soyad</label><input required value={f.name} onChange={up('name')} placeholder="Mehmet Yılmaz"/></div>
              <div className="field"><label>Şirket</label><input required value={f.company} onChange={up('company')} placeholder="Şirket adı"/></div>
              <div className="row-2">
                <div className="field"><label>Çalışan sayısı</label>
                  <select value={f.size} onChange={up('size')}>
                    <option>50–250</option><option>250–500</option><option>500–1000</option><option>1000–2000</option><option>2000+</option>
                  </select>
                </div>
                <div className="field"><label>Telefon</label><input value={f.phone} onChange={up('phone')} placeholder="0 5__ ___ __ __"/></div>
              </div>
              <div className="field"><label>Kurumsal e-posta</label><input required type="email" value={f.email} onChange={up('email')} placeholder="ad@sirket.com"/></div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Ücretsiz analiz iste <Arrow size={15}/></button>
              <p className="form-tos"><a href={`${BASE}kvkk.html`}>KVKK aydınlatma metnini</a> okuduğunuzu kabul edersiniz.</p>
            </> : <div className="form-ok">
              <span className="tick-lg"><Check size={24}/></span>
              <h3>Talebiniz alındı{f.name ? `, ${f.name.split(' ')[0]}` : ''}.</h3>
              <p>Kurumsal çözüm ekibimiz bir iş günü içinde sizinle iletişime geçecek. Bu sırada <a href={`${BASE}hizmetler.html`}>hizmet ailelerini</a> inceleyebilirsiniz.</p>
            </div>}
          </form>
        </div>
      </div>
    </section>
  );
}

function CookieBar() {
  const KEY = 'nord-cookie-consent';
  const [choice, setChoice] = useState(() => {
    try { return localStorage.getItem(KEY); } catch(e) { return 'dismissed'; }
  });
  if (choice) return null;
  const decide = (v) => { try { localStorage.setItem(KEY, v); } catch(e) {} setChoice(v); };
  return (
    <aside className="cookiebar" role="region" aria-label="Çerez bildirimi">
      <div className="cookiebar-in">
        <div className="cookiebar-txt">
          <h4>Çerezler</h4>
          <p>Bu site, çalışması için zorunlu çerezleri kullanır. Sayfa kullanımını ölçen analitik çerezler ise yalnızca onayınızla çalışır. Reklam çerezi kullanmıyoruz. <a href={`${BASE}cerez-politikasi.html`}>Çerez Politikası</a></p>
        </div>
        <div className="cookiebar-act">
          <button type="button" className="cb-ghost" onClick={() => decide('rejected')}>Yalnızca zorunlu</button>
          <button type="button" className="cb-solid" onClick={() => decide('accepted')}>Kabul et</button>
        </div>
      </div>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Logo href="/"/>
            <p>Regüle finans kurumlarının ve teknoloji şirketlerinin dışarıdan aldığı tüm destek hizmetlerini tek çatı altında toplayarak işletme giderini düşüren kurumsal çözüm ortağı.</p>
          </div>
          <div className="foot-cols">
            <div>
              <h4><a href={`${BASE}hizmetler.html`}>Hizmetler</a></h4>
              {window.NORD_SERVICES.map(s => <a key={s.id} href={svcHref(s.slug)}>{s.short}</a>)}
            </div>
            <div>
              <h4>Kurumsal</h4>
              <a href={`${BASE}yaklasim.html`}>Yaklaşım</a>
              <a href={`${BASE}odak.html`}>Odak segmentler</a>
              <a href={`${BASE}referanslar.html`}>Referanslar</a>
              <a href={`${BASE}hakkimizda.html`}>Hakkımızda</a>
              <a href={`${BASE}blog.html`}>Blog</a>
              <a href={`${HOME}#hesap`}>Tasarruf hesabı</a>
              <a href={`${BASE}panel.html`}>Nord Panel</a>
            </div>
            <div>
              <h4>İletişim</h4>
              <address><span>İnkılap Mah.</span><span>Dr. Adnan Büyükdeniz Cad.</span><span>2. Blok No:4, İç Kapı No:7</span><span>Ümraniye / İstanbul</span></address>
              <a href="mailto:kurumsal@nord.services">kurumsal@nord.services</a>
              <a href="tel:+908508851500">+90 850 885 15 00</a>
              <a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn</a>
              <a href={'#iletisim'} className="foot-cta">Ücretsiz gider analizi <Arrow size={13}/></a>
            </div>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2026 Nord Kurumsal Hizmetler</span>
          <div className="foot-meta">
            <a href={`${BASE}kvkk.html`}>KVKK Aydınlatma Metni</a><span className="d"/><a href={`${BASE}gizlilik.html`}>Gizlilik Politikası</a><span className="d"/><a href={`${BASE}cerez-politikasi.html`}>Çerez Politikası</a><span className="d"/><span>ISO 27001 · KVKK uyumlu</span>
          </div>
        </div>
      </div>
      <CookieBar/>
    </footer>
  );
}

Object.assign(window, { Ico, Arrow, Check, Lock, Dot, Mark, Logo, Nav, Crumb, PageHero, SegsGrid, RefsGrid, RefsStrip, ServiceIndexList, CTASection, Footer, CookieBar, BASE, HOME, svcHref, LINKEDIN });

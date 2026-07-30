const { useState } = React;
const S = window.NORD_SERVICES;

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero-tag"><span className="dot"/><span className="label">Finans, fintech ve teknoloji şirketleri için</span></div>
        <h1>Kurumsal giderinizi <em>tek noktadan</em> yönetin.</h1>
        <div className="hero-grid">
          <p className="hero-sub">Nord, regüle finans kurumlarının ve teknoloji şirketlerinin dışarıdan aldığı tüm destek hizmetlerini tek çatı altında toplar. Dağınık tedarik yerine tek muhatap, tek sözleşme, tek fatura — ve ölçek avantajıyla düşen bir işletme gideri.</p>
          <div className="hero-cta">
            <a href="#iletisim" className="btn btn-primary btn-lg">Ücretsiz gider analizi <Arrow size={15}/></a>
            <a href={`${BASE}hizmetler.html`} className="btn btn-outline btn-lg">Hizmetleri inceleyin</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Band() {
  const items = [
    ['%18–34','Konsolidasyon sonrası toplam işletme gideri tasarrufu'],
    ['9 → 1','Tek muhataba inen tedarikçi sayısı, tek fatura ve tek mutabakat'],
    ['2025','Canlıya alındığımızdan bu yana altı regüle ve teknoloji segmentinde']
  ];
  return (
    <section className="sec" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="band">
          {items.map(([b,s],i) => <div key={i} className="band-item"><b>{b}</b><span>{s}</span></div>)}
        </div>
      </div>
    </section>
  );
}

function References() {
  return (
    <section id="referanslar" className="sec" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Referanslar</span>
          <div>
            <h2>Hatanın bedelinin ceza olduğu kurumlarla çalışıyoruz.</h2>
            <p className="lede">Lisanslı kadro, kaçırılamayan denetim takvimi ve ertelenemeyen sertifikasyon yenilemesi — bizimle çalışan kurumların ortak zemini bu.</p>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <a href={`${BASE}referanslar.html`} className="arrowlink">Referanslar ve sonuçlar <Arrow size={14}/></a>
              <a href={`${BASE}odak.html`} className="arrowlink">Odak segmentler <Arrow size={14}/></a>
            </div>
          </div>
        </div>
        <RefsStrip/>
      </div>
    </section>
  );
}

function Approach() {
  const p = [
    ['01','Tek muhatap','Altı hizmet ailesi, tek sözleşme ve tek fatura altında toplanır. Sorumluluk tedarikçiler arasında dağılmaz.'],
    ['02','Konsolide hacim','Pazarlık tedarikçi başına değil toplam hacim üzerinden yapılır. Tek başınıza elde edemeyeceğiniz fiyat oluşur.'],
    ['03','Değişken maliyet','Sabit personel ve altyapı yatırımı bilançodan çıkar. Kullandığınız kadar ödersiniz.'],
    ['04','Ölçülen tasarruf','Taahhüt edilen oran sözleşmeye yazılır, her ay kalem bazında raporlanır.']
  ];
  return (
    <section id="yaklasim" className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Yaklaşım</span>
          <div>
            <h2>Tasarruf, dört karardan doğuyor.</h2>
            <p className="lede">Nord bir hizmet sağlayıcı değil, bir konsolidasyon modeli. Giderin düşmesini sağlayan şey daha ucuz bir tedarikçi bulmak değil; tedarik yapısının kendisini değiştirmek.</p>
            <div className="sec-more"><a href={`${BASE}yaklasim.html`} className="arrowlink">Nord Modeli'nin tamamı <Arrow size={14}/></a></div>
          </div>
        </div>
        <div className="principles">
          {p.map(([n,t,d]) => (
            <article key={n} className="principle">
              <span className="num">{n}</span>
              <h3>{t}</h3><p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIndex() {
  return (
    <section id="hizmetler" className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Hizmetler</span>
          <div>
            <h2>Dışarıdan aldığınız her şey, altı ailede.</h2>
            <p className="lede">Bordrodan filoya, yan haktan teknoparka. Bir aileyi açın; içindeki hizmetleri, kimlerin aldığını ve maliyet etkisini görün.</p>
            <div className="sec-more"><a href={`${BASE}hizmetler.html`} className="arrowlink">Hizmetlerin tamamı ve fiyat mantığı <Arrow size={14}/></a></div>
          </div>
        </div>
        <div className="index">
          {S.map(s => (
            <a key={s.id} className="index-row" href={svcHref(s.slug)}>
              <span className="num">{s.num}</span>
              <div>
                <h3>{s.short}</h3>
                <span className="count">{s.items.length} hizmet</span>
              </div>
              <p>{s.one}</p>
              <span className="go"><Arrow size={16}/></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAMILIES = [
  { k:'ik', n:'İnsan Kaynakları', rate:0.030 },
  { k:'filo', n:'Filo & Yakıt', rate:0.026 },
  { k:'yanhak', n:'Yan Hak Kartları', rate:0.014 },
  { k:'saglik', n:'Sağlık & Sigorta', rate:0.018 },
  { k:'seyahat', n:'Seyahat', rate:0.012 },
  { k:'teknopark', n:'Teknopark', rate:0.022 },
];

function Calculator() {
  const [emp, setEmp] = useState(250);
  const [sel, setSel] = useState(['ik','filo','saglik']);
  const toggle = (k) => setSel(s => s.includes(k) ? s.filter(x => x !== k) : [...s, k]);
  const chosen = FAMILIES.filter(f => sel.includes(f.k));
  const bonus = chosen.length >= 5 ? 1.22 : chosen.length >= 3 ? 1.12 : 1;
  const annual = Math.round(emp * 420000 * chosen.reduce((a,f) => a + f.rate, 0) * bonus);
  const vendors = chosen.length ? chosen.length + Math.round(chosen.length * 0.6) : 0;
  const fmt = (n) => '₺ ' + n.toLocaleString('tr-TR');
  return (
    <section id="hesap" className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Tasarruf hesabı</span>
          <div>
            <h2>Nord ile ne kadar tasarruf edersiniz?</h2>
            <p className="lede">Çalışan sayınızı ve Nord'a devretmeyi düşündüğünüz hizmet ailelerini seçin.</p>
          </div>
        </div>
        <div className="calc-grid">
          <div>
            <div className="calc-block">
              <span className="label">Çalışan sayısı</span>
              <div className="calc-input">
                <input type="range" min="50" max="2000" step="10" value={emp} onChange={e => setEmp(+e.target.value)}/>
                <div className="calc-num">{emp}<small>kişi</small></div>
              </div>
            </div>
            <div className="calc-block">
              <span className="label">Devredilecek hizmet aileleri</span>
              <div className="chips">
                {FAMILIES.map(f => (
                  <button key={f.k} className={sel.includes(f.k) ? 'on' : ''} onClick={() => toggle(f.k)}>{f.n}</button>
                ))}
              </div>
            </div>
            <p className="calc-note">Hesap; kişi başı yıllık 420.000 ₺ toplam işletme gideri ve aile bazlı sektör ortalaması tasarruf oranları üzerinden yapılır. Üç aileden itibaren konsolide hacim indirimi uygulanır. Gerçek oran, mevcut sözleşmeleriniz incelendikten sonra netleşir.</p>
          </div>
          <div className="calc-out">
            <div className="calc-out-row">
              <span className="label">Yıllık tahmini tasarruf</span>
              <b>{fmt(annual)}</b>
              <span className="sub">Aylık ≈ {fmt(Math.round(annual/12))}</span>
            </div>
            <div className="calc-out-row">
              <span className="label">Tedarikçi sadeleşmesi</span>
              <b>{vendors || 0} → {chosen.length ? 1 : 0}</b>
              <span className="sub">{chosen.length} hizmet ailesi, tek sözleşme ve tek fatura altında</span>
            </div>
            <a href="#iletisim" className="btn btn-primary btn-lg">Şirketime özel analiz iste <Arrow size={15}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="sec">
      <div className="wrap">
        <div className="soon">
          <div>
            <div className="soon-badge"><Lock size={13}/> Yakında</div>
            <h2>Nord Panel — altı hizmetin gideri tek ekranda.</h2>
            <p>Tüm hizmet ailelerinin tüketimini, maliyet merkezi kırılımını ve aylık tasarruf tablosunu tek arayüzden izleyebileceğiniz panel geliştirme aşamasında.</p>
            <p>Bugün bu takibi sizin adınıza atanmış hizmet yöneticiniz manuel olarak yürütüyor: her ay tek fatura, tek mutabakat ve kalem bazlı tasarruf raporu size ulaşıyor. Panel yayına alındığında aynı veriler gerçek zamanlı olarak erişiminize açılacak.</p>
            <ul className="soon-list">
              <li><Dot size={14}/> Bugün: atanmış hizmet yöneticisi, aylık rapor ve tek fatura</li>
              <li><Dot size={14}/> Yakında: gerçek zamanlı gider paneli ve maliyet merkezi kırılımı</li>
              <li><Dot size={14}/> Sonraki adım: ERP ve muhasebe entegrasyonu</li>
            </ul>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}><a href={`${BASE}panel.html`} className="arrowlink">Panel kapsamı ve yol haritası <Arrow size={14}/></a><a href="#iletisim" className="arrowlink">Yayına alınınca haber verin <Arrow size={14}/></a></div>
          </div>
          <div className="soon-frame">
            <div className="soon-bar"><i/><i/><i/><span className="u">panel.nord.services</span></div>
            <div className="soon-body">
              <div className="soon-kpis">
                {[['Toplam aylık gider','₺ 8.412.900'],['Nord ile tasarruf','₺ 2.147.600'],['Tedarikçi','1']].map(([l,v],i) =>
                  <div key={i} className="soon-kpi"><span>{l}</span><b>{v}</b></div>
                )}
              </div>
              <div className="soon-chart">
                {[62,70,58,74,68,82,76,88,79,85,72,91,84,94].map((h,i) => <i key={i} style={{height:`${h}%`}}/>)}
              </div>
              <div className="soon-rows"><i/><i/><i/><i/></div>
            </div>
            <div className="soon-veil"><span>Yakında</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="quote sec panel-slate">
      <div className="wrap">
        <blockquote>
          <span className="label">Müşteri</span>
          <div>
            <p>Dokuz ayrı tedarikçiyle çalışıyorduk. Nord'dan sonra bu <em>tek bir kalem</em> oldu ve ilk yılda destek hizmetleri bütçemiz yüzde yirmi dört düştü.</p>
            <footer>
              <span className="av">SK</span>
              <div><b>Selin Kaya</b><span>CFO · Ödeme kuruluşu, 410 çalışan</span></div>
            </footer>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav/><Hero/><Band/><References/><Approach/><ServiceIndex/><Platform/><Calculator/><Quote/><CTASection/><Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

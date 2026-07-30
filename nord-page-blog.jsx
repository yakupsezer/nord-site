const P = window.NORD_POSTS;
const postHref = (slug) => `${BASE}blog/${slug}.html`;

function Featured() {
  const p = P[0];
  return (
    <section className="sec" style={{paddingTop:0}}>
      <div className="wrap">
        <a href={postHref(p.slug)} className="post-hero">
          <div>
            <div className="post-meta"><span>{p.cat}</span><i/><span>{p.date}</span><i/><span>{`${p.mins} dk okuma`}</span></div>
            <h2>{p.title}</h2>
            <p>{p.dek}</p>
            <span className="arrowlink as-span">Yazıyı okuyun <Arrow size={14}/></span>
          </div>
          <div className="post-hero-side">
            <span className="post-no">01</span>
            <span className="post-tagline">Öne çıkan</span>
          </div>
        </a>
      </div>
    </section>
  );
}

function List() {
  return (
    <section className="sec panel-light" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="sec-head" style={{paddingTop:'clamp(72px,9vw,132px)'}}>
          <span className="label">Arşiv</span>
          <div>
            <h2>Maliyet, mevzuat ve operasyon.</h2>
            <p className="lede">Regüle kurumların destek hizmetleri bütçesinde karşılaştığı somut sorunlar ve bunların sayısal karşılığı. Yeni yazılar ayda iki kez yayımlanır.</p>
          </div>
        </div>
        <div className="post-list">
          {P.slice(1).map((p,i0) => { const i = i0 + 1; return (
            <a key={p.slug} href={postHref(p.slug)} className="post-row">
              <span className="num">{String(i+1).padStart(2,'0')}</span>
              <div>
                <div className="post-meta"><span>{p.cat}</span><i/><span>{p.date}</span><i/><span>{`${p.mins} dk`}</span></div>
                <h3>{p.title}</h3>
                <p>{p.dek}</p>
              </div>
              <span className="post-go"><Arrow size={16}/></span>
            </a>
          ); })}
        </div>
      </div>
    </section>
  );
}

function Sub() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head" style={{marginBottom:0}}>
          <span className="label">Sırada</span>
          <div>
            <h2>Yazıları değil, tasarrufu takip edin.</h2>
            <p className="lede">Bu yazılardaki yöntemlerin kendi rakamlarınıza ne yaptığını görmek için tek sayfalık ücretsiz gider analizimizi isteyin.</p>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <a href={`${HOME}#hesap`} className="arrowlink">Tasarrufunuzu hesaplayın <Arrow size={14}/></a>
              <a href={`${BASE}hizmetler.html`} className="arrowlink">Hizmet aileleri <Arrow size={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="blog"/>
    <Crumb here="Blog"/>
    <PageHero
      label="Blog"
      title="Gider kalemlerinin arkasındaki hesap."
      lede="Bordro, filo, yan hak, sağlık, seyahat ve teşvik kalemlerinde maliyetin nasıl oluştuğunu ve nerede aşağı çekilebileceğini yazıyoruz. Genel geçer İK içeriği değil; regüle kurumların ay sonu tablosunda karşılığı olan konular."
      facts={[['Yazı','5'],['Odak','Maliyet ve mevzuat'],['Yazan','Nord uzman ekibi'],['Sıklık','Ayda iki']]}
    />
    <Featured/>
    <List/>
    <Sub/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

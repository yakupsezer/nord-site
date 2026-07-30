function Intro() {
  const total = window.NORD_SERVICES.reduce((a,s) => a + s.items.length, 0);
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Kapsam</span>
          <div>
            <h2>Altı hizmet ailesi, {total} hizmet.</h2>
            <p className="lede">Her aile tek başına alınabilir. Üçüncü aileden itibaren konsolide hacim indirimi devreye girer; her yeni aile mevcutların birim maliyetini de düşürür. Detay için bir aileyi açın.</p>
          </div>
        </div>
        <ServiceIndexList/>
      </div>
    </section>
  );
}

function Bundling() {
  const tiers = [
    ['1–2 aile','Tekil hizmet','Tek bir alanda dış kaynağa geçiş. Atanmış müşteri temsilcisi ve aylık gider raporu dahildir.'],
    ['3–4 aile','Konsolide','Konsolidasyonun etkisinin görüldüğü eşik. Hacim indirimi devreye girer, tek fatura ve tek mutabakata geçilir, çeyreklik tasarruf gözden geçirmesi başlar.'],
    ['5–6 aile','Tam kapsam','Tüm destek hizmetlerinin tek çatıya alındığı model. Azami hacim indirimi ve dedike hizmet yöneticisi; Nord Panel yayına alındığında ilk erişim bu kapsamda açılır.']
  ];
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Fiyat mantığı</span>
          <div>
            <h2>Fiyat hizmet başına değil, toplam hacme göre.</h2>
            <p className="lede">Bir aile eklemek, o ailenin bedelini eklemekle kalmaz; mevcut ailelerin birim maliyetini de düşürür. Konsolidasyonun asıl getirisi buradadır.</p>
            <div className="sec-more"><a href={`${HOME}#hesap`} className="arrowlink">Kaç aile alsanız ne kazanırsınız? <Arrow size={14}/></a></div>
          </div>
        </div>
        <div className="levers">
          {tiers.map(([r,t,d]) => (
            <article key={t} className="lever"><b>{r}</b><h4>{t}</h4><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Matrix() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head" style={{marginBottom:0}}>
          <span className="label">Eşleşme</span>
          <div>
            <h2>Hangi segment hangi aileyi alıyor?</h2>
            <p className="lede">Altı odak segmentimizin en çok başvurduğu hizmet aileleri ve her segmentin kendine özgü regülasyon yükü Odak sayfasında. Kesin kapsam, gider taramasından sonra netleşir.</p>
            <div className="sec-more"><a href={`${BASE}odak.html`} className="arrowlink">Odak segmentler <Arrow size={14}/></a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  const total = window.NORD_SERVICES.reduce((a,s) => a + s.items.length, 0);
  return <>
    <Nav active="hizmetler"/>
    <Crumb here="Hizmetler"/>
    <PageHero
      label="Hizmetler"
      title="Bir kurumun dışarıdan aldığı her şey, tek sözleşmede."
      lede="İnsan kaynağından filoya, yan haktan teknoparka kadar altı hizmet ailesi. Hepsi tek muhatap, tek fatura ve tek mutabakat altında yürür; hepsinin gideri aynı raporda görünür."
      facts={[['Hizmet ailesi','6'],['Toplam hizmet',String(total)],['Sözleşme','1'],['Aylık fatura','1']]}
      cta={[['Kapsamınızı birlikte belirleyelim','#iletisim',true],['Tasarruf hesabı',`${HOME}#hesap`,false]]}
    />
    <Intro/>
    <Bundling/>
    <Matrix/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

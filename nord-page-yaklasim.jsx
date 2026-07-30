function Guarantees() {
  const g = [
    ['01','Sözleşmeye yazılan oran','Analiz sonrası taahhüt ettiğimiz tasarruf oranı sözleşme metnine işlenir. Dönem sonunda tutturulamazsa aradaki fark bir sonraki fatura döneminden düşülür.'],
    ['02','Otuz gün ihbarla çıkış','Standart sözleşme on iki aylıktır ancak otuz gün ihbarla feshedilebilir. Çıkışta tüm verileriniz standart formatta devredilir; devir desteği ücretsizdir.'],
    ['03','Uyum sorumluluğu Nord\'da','Mevzuat takibi, yasal bildirim ve hesaplama hatalarının doğurduğu idari para cezası tarafımıza aittir. Denetimde çıkan bulgunun düzeltilmesi de bize düşer.'],
    ['04','Kurulum ve devir ücretsiz','Gider taraması, geçiş planlaması, veri aktarımı ve çalışan bilgilendirmesi için ayrıca ücret alınmaz. İlk fatura hizmet başladığı ay kesilir.']
  ];
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Taahhütler</span>
          <div>
            <h2>Sözleşmede ne yazıyor?</h2>
            <p className="lede">Konsolidasyon vaadi ancak yazılıysa bağlayıcıdır. Standart sözleşmemizin dört maddesi bu vaadi somutlaştırır.</p>
          </div>
        </div>
        <div className="principles">
          {g.map(([n,t,d]) => (
            <article key={n} className="principle"><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const before = [
    'Yedi ilâ on bir ayrı tedarikçi, her biri ayrı sözleşme yenileme takviminde',
    'Her tedarikçiyle ayrı fiyat pazarlığı — ölçek avantajı hiçbirinde oluşmuyor',
    'Finans ekibi için onlarca fatura, mutabakat ve muhasebe kaydı',
    'Hizmetler arası veri kopukluğu; toplam destek gideri hiçbir raporda tek satır değil',
    'Sorun çıktığında sorumluluk tedarikçiler arasında dağılıyor',
    'Sabit personel ve altyapı maliyeti bilançoda kalıyor'
  ];
  const after = [
    'Tek sözleşme, tek fatura, tek yenileme takvimi',
    'Konsolide hacim üzerinden tek pazarlık — üçüncü hizmet ailesinden itibaren indirim',
    'Aylık tek mutabakat; muhasebe kayıt yükü dokuzda bire iniyor',
    'Tüm hizmetlerin gideri tek raporda, maliyet merkezi kırılımıyla',
    'Tek sorumlu ekip, SLA garantili yanıt süresi',
    'Değişken maliyet modeli — kullandığınız kadar ödersiniz'
  ];
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Karşılaştırma</span>
          <div>
            <h2>Dağınık tedarik pahalıdır. Konsolide tedarik değildir.</h2>
            <p className="lede">Orta ve büyük ölçekli bir kurum destek hizmetleri için ortalama yedi ilâ on bir ayrı tedarikçiyle çalışır. Aşağıdaki iki sütun aynı hizmet setinin iki farklı yönetim biçimidir.</p>
          </div>
        </div>
        <div className="cmp">
          <div className="cmp-col">
            <span className="cmp-tag">Bugünkü tablo</span>
            <ul>{before.map((x,i) => <li key={i}><span className="x"><Ico size={11} d={<><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>}/></span>{x}</li>)}</ul>
            <p className="cmp-foot">Yönetim yükü yüksek, birim maliyet referans seviyede.</p>
          </div>
          <div className="cmp-col on">
            <span className="cmp-tag">Nord ile</span>
            <ul>{after.map((x,i) => <li key={i}><span className="tick"><Check size={12}/></span>{x}</li>)}</ul>
            <p className="cmp-foot">Yönetim yükü minimum, birim maliyet %18–34 daha düşük.</p>
          </div>
        </div>
        <div className="sec-more"><a href={`${HOME}#hesap`} className="arrowlink">Kendi tasarrufunuzu hesaplayın <Arrow size={14}/></a></div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['01','Gider taraması','Mevcut sözleşmelerinizi ve son on iki ayın faturalarını inceler, hangi kalemde ne kadar tasarruf mümkün olduğunu rakamla ortaya koyarız. Analiz ücretsizdir ve bir taahhüt gerektirmez.'],
    ['02','Kapsam kararı','Hangi hizmet ailelerinin Nord\'a geçeceğine birlikte karar veririz. Tek sözleşme ve tek fiyat yapısı, taahhüt edilen tasarruf oranıyla birlikte bu aşamada kurulur.'],
    ['03','Devralma','Mevcut tedarikçilerle fesih ve devir sürecini biz yürütürüz. Sözleşme bitiş tarihlerine göre kademeli geçiş kurgularız; hiçbir hizmette kesinti olmaz.'],
    ['04','Aylık ritim','Her ay tek fatura, tek mutabakat ve hangi kalemde ne kadar tasarruf edildiğini gösteren tek sayfalık tablo. Çeyreklik gözden geçirmede kapsam yeniden değerlendirilir.']
  ];
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Süreç</span>
          <div><h2>Dört adım, on dört gün.</h2>
          <div className="sec-more"><a href={'#iletisim'} className="arrowlink">İlk adımı başlatın — ücretsiz gider taraması <Arrow size={14}/></a></div></div>
        </div>
        <div className="steps">
          {steps.map(([n,t,d]) => (
            <article key={n} className="step"><span className="num">{n}</span><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Next() {
  return (
    <section className="sec panel-slate" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="sec-head" style={{paddingTop:'clamp(72px,9vw,132px)',marginBottom:0}}>
          <span className="label">Sırada</span>
          <div>
            <h2>Modeli hizmetler üzerinden görün.</h2>
            <p className="lede">Altı hizmet ailesinin içeriği, maliyet etkisi ve hangi segmentin hangi aileyi aldığı hizmetler sayfasında.</p>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <a href={`${BASE}hizmetler.html`} className="arrowlink">Hizmetler <Arrow size={14}/></a>
              <a href={`${BASE}referanslar.html`} className="arrowlink">Referanslar ve sonuçlar <Arrow size={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return <>
    <Nav active="yaklasim"/>
    <Crumb here="Yaklaşım"/>
    <PageHero
      label="Nord Modeli"
      title="Tedarikçi sayısını azaltmak, en hızlı tasarruf kalemidir."
      lede="Nord bir hizmet sağlayıcı değil, bir konsolidasyon modelidir. Altı hizmet ailesini tek sözleşme altında topladığımızda düşen sadece fiyat değil; yönetim yükü, uyum riski ve karar süresi de düşer."
      facts={[['Ortalama tasarruf','%18–34'],['Tedarikçi sadeleşmesi','9 → 1'],['Devralma süresi','14 gün'],['Fesih ihbarı','30 gün']]}
      cta={[['Ücretsiz gider analizi','#iletisim',true],['Tasarruf hesabı',`${HOME}#hesap`,false]]}
    />
    <Compare/>
    <Process/>
    <Guarantees/>
    <Next/>
    <CTASection/>
    <Footer/>
  </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

const S = window.NORD_SERVICES;

function AboutHero() {
  return <>
    <div className="wrap">
      <div className="crumb"><a href={HOME || '#top'}>Nord</a><span>/</span><span style={{color:'var(--text-2)'}}>Hakkımızda</span></div>
    </div>
    <section className="svc-hero">
      <div className="wrap">
        <div className="svc-hero-grid">
          <div>
            <span className="svc-lever">Hakkımızda</span>
            <h1>Bir kurumun destek yapısı, regülasyonu kadar ağırdır.</h1>
          </div>
          <div>
            <p className="lede">Nord Kurumsal Hizmetler, regüle finans kurumlarının ve teknoloji şirketlerinin dışarıdan aldığı destek hizmetlerini tek çatı altında toplayan bir kurumsal çözüm ortağıdır. Altı hizmet ailesini tek sözleşme, tek fatura ve tek muhatap altında yönetir; kurumun destek yapısına ayırdığı bütçeyi ve dikkati asıl işine geri döndürürüz.</p>
            <ul className="svc-facts">
              {[['Canlıya alış','2025'],['Odak segment','6'],['Hizmet verilen kurum','10+'],['Merkez','Ümraniye / İstanbul']].map(([k,v],i) =>
                <li key={i}>{k}<b>{v}</b></li>
              )}
            </ul>
            <div className="hero-cta" style={{marginTop:28}}>
              <a href={'#iletisim'} className="btn btn-primary">Bizimle konuşun <Arrow size={14}/></a>
              <a href={`${BASE}referanslar.html`} className="btn btn-outline">Referanslar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

function Mission() {
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Misyon</span>
          <div>
            <h2>Şirketlerin ana işine ayırdığı kaynağı büyütmek.</h2>
            <p className="lede">Bir kurumun kaynağı iki yere gider: değer ürettiği işe ve o işi ayakta tutan destek yapısına. Regüle sektörlerde ikincisi orantısız büyür — lisanslı kadro, denetim takvimi, sertifikasyon yükü. Nord'un varlık sebebi bu dengeyi düzeltmektir: destek hizmetlerini daha ucuza, daha az yönetim yüküyle ve daha az uyum riskiyle sağlayarak kurumun sermayesini ve dikkatini asıl işine geri vermek.</p>
          </div>
        </div>
        <div className="levers">
          {[
            ['Sadeleştirme','Dağınık tedarikçi yapısını tek muhataba indirger, sözleşme ve mutabakat yükünü ortadan kaldırırız.'],
            ['Ölçek','Tek şirketin erişemeyeceği fiyatı, konsolide hacim üzerinden pazarlık ederek elde ederiz.'],
            ['Şeffaflık','Taahhüt ettiğimiz tasarruf oranı sözleşmeye yazılır, her ay kalem bazında raporlanır.']
          ].map(([t,d],i) => (
            <article key={i} className="lever">
              <b>{String(i+1).padStart(2,'0')}</b>
              <h4>{t}</h4><p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head" style={{marginBottom:0}}>
          <span className="label">Odak ve referanslar</span>
          <div>
            <h2>Kapsamımız iki listenin kesişimi.</h2>
            <p className="lede">Altı segment ve altı hizmet ailesi — ikisinin kesişimi bu şirketin tüm kapsamı. Hangi segmentin hangi aileyi aldığı, bizimle çalışan kurumlar ve elde edilen sonuçlar ilgili sayfalarda.</p>
            <div className="sec-more" style={{display:'flex',gap:20,flexWrap:'wrap'}}>
              <a href={`${BASE}odak.html`} className="arrowlink">Odak segmentler <Arrow size={14}/></a>
              <a href={`${BASE}referanslar.html`} className="arrowlink">Referanslar ve sonuçlar <Arrow size={14}/></a>
              <a href={`${BASE}hizmetler.html`} className="arrowlink">Hizmetler <Arrow size={14}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Hikâye</span>
          <div>
            <h2>Bir yıl, altı hizmet ailesi.</h2>
            <p className="lede">Nord 2025'te, tek bir soruya cevap vermek için kuruldu: regüle bir kurum destek fonksiyonlarını neden sekiz ayrı tedarikçiden almak zorunda olsun?</p>
          </div>
        </div>
        <div className="detail">
          {[
            ['2025 · Q1','Kuruluş ve canlıya alış','Nord, bir aracı kurumun bordro ve özlük operasyonunu devralan küçük bir uzman ekiple kuruldu ve aynı yıl canlıya alındı. İlk müşterilerimizin ortak sorusu hep aynıydı: "Bunu yapıyorsanız, diğerlerini de yapabilir misiniz?"'],
            ['2025 · Q2','İlk kurumlar','Tahsildar ve Pratik İşlem ile başlayan portföy, One Portföy ve Destek Yatırım ile genişledi. Regüle finans, doğal odak alanımız olarak burada netleşti.'],
            ['2025 · Q3','Filo, yan hak ve sağlık','Araç kiralama, yakıt yönetimi, yan hak kartları, grup sağlık poliçesi ve İSG yükümlülüğü portföye eklendi. Konsolidasyonun tek bir hizmette değil, hizmetlerin toplamında anlam kazandığını burada gördük.'],
            ['2025 · Q4','Seyahat ve teknopark','Kurumsal seyahat yönetimi ve ardından Ar-Ge teşvikleri, proje yazımı ve portal yönetimiyle altıncı hizmet ailesi tamamlandı. Müşteri başına ortalama tedarikçi sayısı dokuzdan bire indi.'],
            ['2026','Nord Panel','Tüm hizmet ailelerinin giderini tek ekranda birleştiren panel geliştirme aşamasında. Bugün bu takibi atanmış hizmet yöneticileri manuel olarak yürütüyor.']
          ].map(([y,t,d],i) => (
            <article key={i} className="detail-row">
              <span className="num">{y}</span>
              <h3>{t}</h3>
              <div className="body"><p>{d}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const p = [
    ['01','Rakam konuşur','Tasarruf iddiası ancak ölçülebiliyorsa anlamlıdır. Her müşterimize aylık olarak hangi kalemde ne kadar tasarruf edildiğini gösteren tek sayfalık tablo sunarız.'],
    ['02','Yapamayacağımız işi almayız','Odak segmentlerimizin dışındaki bir kurumu, model teknik olarak çalışsa bile geçirmeyiz. Ciroyu büyütmek için derinliğimizi seyreltmeyiz.'],
    ['03','Kalıcı ekip','Her kuruma atanan hizmet yöneticisi değişmez. Mevzuatınızı, kadro yapınızı ve denetim takviminizi öğrenmiş bir kişiyle çalışırsınız; her seferinde baştan anlatmazsınız.'],
    ['04','Kötü haberi önce biz veririz','Bir bildirim kaçtıysa, bir hesaplama hatalıysa ya da bir teşvik kaçırıldıysa denetimden önce siz öğrenirsiniz. Güven, iyi haberle değil kötü haberin zamanında gelmesiyle kurulur.']
  ];
  return (
    <section className="sec panel-slate">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">İlkeler</span>
          <div><h2>Nasıl çalıştığımızı belirleyen dört karar.</h2></div>
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

function Office() {
  return (
    <section className="sec panel-light">
      <div className="wrap">
        <div className="sec-head">
          <span className="label">Ofis</span>
          <div><h2>Ümraniye, İstanbul.</h2></div>
        </div>
        <div className="levers">
          <article className="lever">
            <h4>Adres</h4>
            <p><span style={{display:'block'}}>İnkılap Mah.</span><span style={{display:'block'}}>Dr. Adnan Büyükdeniz Cad.</span><span style={{display:'block'}}>2. Blok No:4, İç Kapı No:7</span><span style={{display:'block'}}>Ümraniye / İstanbul</span></p>
          </article>
          <article className="lever">
            <h4>İletişim</h4>
            <p><a href="mailto:kurumsal@nord.services" style={{display:'block'}}>kurumsal@nord.services</a><a href={LINKEDIN} target="_blank" rel="noopener" style={{display:'block'}}>LinkedIn</a></p>
          </article>
          <article className="lever">
            <h4>Çalışma saatleri</h4>
            <p><span style={{display:'block'}}>Pazartesi – Cuma, 09.00 – 18.00</span><span style={{display:'block'}}>Aktif müşteriler için 7/24 acil hat</span></p>
          </article>
        </div>
        <div className="sec-more"><a href={'#iletisim'} className="arrowlink">Randevu için bize yazın <Arrow size={14}/></a></div>
      </div>
    </section>
  );
}

function App() {
  return <><Nav active="hakkimizda"/><AboutHero/><Mission/><Focus/><Story/><Principles/><Office/><CTASection/><Footer/></>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

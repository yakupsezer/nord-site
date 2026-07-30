/* nord-legal-data.jsx dosyasindan uretildi — elle duzenlemeyin */
(function () {
"use strict";
const VS = 'Nord Kurumsal Hizmetler';
const ADR = 'İnkılap Mah. Dr. Adnan Büyükdeniz Cad. 2. Blok No:4 İç Kapı No:7, Ümraniye / İstanbul';
const MAIL = 'kvkk@nord.services';
window.NORD_LEGAL = {
  kvkk: {
    short: 'KVKK Aydınlatma Metni',
    label: 'KVKK',
    title: 'Kişisel verilerinizi neden, nasıl ve ne kadar süreyle işliyoruz.',
    lede: `Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi kapsamında, veri sorumlusu sıfatıyla ${VS} tarafından hazırlanmıştır. Web sitemizi ziyaret eden, form dolduran ve hizmetlerimizden yararlanan kurumların çalışanlarına yöneliktir.`,
    facts: [['Veri sorumlusu', 'Nord Kurumsal Hizmetler'], ['Kanun', '6698 sayılı KVKK'], ['Başvuru', 'kvkk@nord.services'], ['Yürürlük', 'Temmuz 2026']],
    sections: [{
      h: 'Veri sorumlusunun kimliği',
      p: [`Kişisel verileriniz, veri sorumlusu sıfatıyla ${VS} ("Nord") tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuata uygun olarak işlenmektedir.`, `Adres: ${ADR}. İletişim: ${MAIL} · +90 850 885 15 00.`]
    }, {
      h: 'İşlenen kişisel veri kategorileri',
      p: ['Nord, faaliyet konusu gereği iki farklı ilgili kişi grubunun verisini işler: web sitesi ziyaretçileri ve müşteri kurumların çalışanları.'],
      list: ['Kimlik verisi — ad, soyad, T.C. kimlik numarası, doğum tarihi (yalnızca bordro ve özlük hizmetlerinde)', 'İletişim verisi — kurumsal e-posta adresi, telefon numarası, adres', 'Özlük verisi — ücret bilgisi, SGK sicil numarası, işe giriş–çıkış tarihleri, izin ve puantaj kayıtları', 'Finans verisi — banka hesap bilgisi, ücret ödeme kayıtları, yan hak kartı harcama özetleri', 'Mesleki deneyim verisi — özgeçmiş, eğitim bilgisi, sertifika ve lisans kayıtları', 'İşlem güvenliği verisi — IP adresi, tarayıcı ve cihaz bilgisi, site içi gezinme kayıtları', 'Sağlık verisi — yalnızca işyeri hekimliği, İSG ve grup sağlık sigortası hizmetlerinde, açık rızaya ya da kanuni yükümlülüğe dayalı olarak']
    }, {
      h: 'Kişisel verilerin işlenme amaçları',
      p: ['Verileriniz, aşağıda sayılan amaçlarla sınırlı olarak işlenir:'],
      list: ['Bordro, özlük ve insan kaynakları hizmetlerinin yürütülmesi', 'SGK, vergi dairesi ve İŞKUR bildirimlerinin yasal süresinde yapılması', 'İş sağlığı ve güvenliği yükümlülüklerinin yerine getirilmesi', 'Filo, seyahat, yan hak kartı ve sigorta hizmetlerinin sağlanması', 'Talep ettiğiniz gider analizinin hazırlanması ve tarafınıza sunulması', 'Sözleşme süreçlerinin kurulması, ifası ve mutabakat yönetimi', 'Web sitesinin güvenliğinin ve performansının sağlanması']
    }, {
      h: 'İşlemenin hukuki sebepleri',
      p: ['Kişisel verileriniz KVKK m.5 ve m.6 uyarınca aşağıdaki hukuki sebeplere dayanılarak işlenir: kanunlarda açıkça öngörülmesi; bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması; veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi; ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati.', 'Sağlık verileri gibi özel nitelikli kişisel veriler, yalnızca kanunlarda öngörülen hâllerde ya da ilgili kişinin açık rızasıyla işlenir.']
    }, {
      h: 'Kişisel verilerin aktarılması',
      p: ['Verileriniz, hizmetin gereği ve yasal yükümlülükler çerçevesinde sınırlı olarak aktarılabilir:'],
      list: ['Yetkili kamu kurum ve kuruluşlarına (SGK, Gelir İdaresi Başkanlığı, İŞKUR, Çalışma ve Sosyal Güvenlik Bakanlığı)', 'Hizmetin ifası için çalışılan sigorta şirketleri, filo tedarikçileri, kart ve ödeme kuruluşlarına', 'Bağımsız denetim, hukuk ve mali müşavirlik hizmeti alınan kurumlara', 'Bilgi teknolojileri altyapı sağlayıcılarımıza (Türkiye lokasyonlu veri merkezleri)']
    }, {
      h: 'Yurt dışına aktarım',
      p: ['Nord, kişisel verilerinizi kural olarak yurt dışına aktarmaz. Tüm veriler Türkiye Cumhuriyeti sınırları içindeki, ISO 27001 sertifikalı veri merkezlerinde barındırılır. İstisnai bir aktarım gerekmesi hâlinde KVKK m.9 kapsamındaki şartlar sağlanır ve gerekli olduğu durumda ayrıca açık rızanız alınır.']
    }, {
      h: 'Saklama süreleri',
      p: ['Kişisel verileriniz, ilgili mevzuatta öngörülen süreler boyunca saklanır. Bordro ve özlük kayıtları için İş Kanunu ve Sosyal Sigortalar mevzuatı uyarınca on yıl; ticari defter ve belgeler için Türk Ticaret Kanunu uyarınca on yıl; işe alım süreçlerinde toplanan aday verileri için en fazla iki yıl; web sitesi trafik kayıtları için iki yıl.', 'Sürenin sona ermesi hâlinde veriler Kişisel Veri Saklama ve İmha Politikamız uyarınca silinir, yok edilir veya anonim hâle getirilir.']
    }, {
      h: 'İlgili kişi olarak haklarınız',
      p: ['KVKK m.11 uyarınca aşağıdaki haklara sahipsiniz:'],
      list: ['Kişisel verinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme', 'İşlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme', 'Yurt içinde veya yurt dışında verilerinizin aktarıldığı üçüncü kişileri bilme', 'Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme', 'Kanundaki şartlar çerçevesinde silinmesini veya yok edilmesini isteme', 'Düzeltme, silme ve yok etme işlemlerinin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme', 'Münhasıran otomatik sistemler yoluyla analiz edilmesi suretiyle aleyhinize bir sonuç ortaya çıkmasına itiraz etme', 'Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme']
    }, {
      h: 'Başvuru yöntemi',
      p: [`Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ uyarınca ${MAIL} adresine kayıtlı elektronik posta ile ya da ${ADR} adresine ıslak imzalı dilekçeyle iletebilirsiniz.`, 'Başvurunuz, talebin niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul tarafından belirlenen tarifedeki ücret talep edilebilir.']
    }]
  },
  gizlilik: {
    short: 'Gizlilik Politikası',
    label: 'Gizlilik',
    title: 'Verilerinizi nasıl koruduğumuz ve kimin eriştiği.',
    lede: 'Nord, regüle finans kurumlarının en hassas verilerini işler: ücret bilgisi, lisanslı personel kayıtları, sağlık beyanları. Bu politika, bu verileri hangi teknik ve idari tedbirlerle koruduğumuzu açıklar.',
    facts: [['Veri lokasyonu', 'Türkiye'], ['Standart', 'ISO 27001'], ['Erişim modeli', 'Rol bazlı'], ['Yedekleme', 'Günlük']],
    sections: [{
      h: 'Kapsam',
      p: [`Bu Gizlilik Politikası, ${VS} tarafından işletilen nord.services alan adlı web sitesi ve Nord tarafından sunulan tüm hizmetler kapsamında geçerlidir.`, 'Politika, KVKK Aydınlatma Metni ile birlikte okunmalıdır. Aydınlatma metni verilerin hangi hukuki sebeple işlendiğini, bu politika ise nasıl korunduğunu açıklar.']
    }, {
      h: 'Veri saklama altyapısı',
      p: ['Tüm müşteri ve çalışan verileri, Türkiye Cumhuriyeti sınırları içindeki veri merkezlerinde barındırılır. Barındırma altyapısı ISO/IEC 27001 Bilgi Güvenliği Yönetim Sistemi sertifikasına sahiptir.', 'Veriler aktarım sırasında TLS 1.2 ve üzeri protokollerle, durağan hâlde ise AES-256 standardında şifrelenir. Şifreleme anahtarları ayrı bir anahtar yönetim sisteminde tutulur.']
    }, {
      h: 'Erişim kontrolü',
      p: ['Nord içinde veriye erişim rol bazlıdır ve asgari yetki ilkesine göre tanımlanır. Bir hizmet yöneticisi, yalnızca sorumlu olduğu kurumun ve yalnızca yürüttüğü hizmet ailesinin verisine erişebilir.'],
      list: ['Hizmet aileleri arasında veri erişimi ayrıştırılmıştır; bordro ekibi filo verisine, filo ekibi sağlık verisine erişemez', 'Tüm erişimler kayıt altına alınır ve altı ay boyunca saklanır', 'Yönetici hesapları için çok faktörlü kimlik doğrulama zorunludur', 'Personel ayrılışında erişim yetkileri aynı iş günü içinde kapatılır']
    }, {
      h: 'Alt işleyenler',
      p: ['Hizmetin ifası için çalıştığımız sigorta şirketleri, filo tedarikçileri ve kart kuruluşları ile aramızda KVKK uyumlu veri işleme sözleşmeleri bulunur. Bu sözleşmeler, alt işleyenin veriyi yalnızca talimatlarımız doğrultusunda işlemesini ve aynı güvenlik seviyesini sağlamasını zorunlu kılar.', 'Müşterilerimiz, talep hâlinde kendi verilerinin hangi alt işleyenlere aktarıldığının güncel listesini alabilir.']
    }, {
      h: 'İş sürekliliği ve yedekleme',
      p: ['Veriler günlük olarak yedeklenir; yedekler coğrafi olarak ayrı bir Türkiye lokasyonunda, şifreli biçimde saklanır. Yedekten geri dönüş testleri çeyreklik olarak yapılır.', 'Bordro gibi yasal süreye bağlı hizmetlerde, kesinti hâlinde manuel yürütmeye geçişi tanımlayan bir iş sürekliliği planı uygulanır.']
    }, {
      h: 'Veri ihlali bildirimi',
      p: ['Bir veri ihlali tespit edildiğinde, olay derhâl kayıt altına alınır ve etkilenen müşteri kurumlar en geç yirmi dört saat içinde bilgilendirilir.', 'Kişisel Verileri Koruma Kurulu\'na bildirim, KVKK ve ilgili Kurul kararları uyarınca en geç yetmiş iki saat içinde yapılır. İlgili kişilere bildirim, Kurul tarafından öngörülen usule göre gerçekleştirilir.']
    }, {
      h: 'Sözleşme sona erdiğinde',
      p: ['Hizmet ilişkisi sona erdiğinde, müşteriye ait tüm veriler standart ve makine tarafından okunabilir bir formatta müşteriye ya da göstereceği yeni tedarikçiye aktarılır. Devir desteği ücretsizdir.', 'Aktarım tamamlandıktan sonra, yasal saklama yükümlülüğü bulunan kayıtlar dışındaki veriler Kişisel Veri Saklama ve İmha Politikası uyarınca imha edilir ve imha tutanağı müşteriyle paylaşılır.']
    }, {
      h: 'Politikadaki değişiklikler',
      p: ['Bu politika, mevzuat değişiklikleri ve hizmet kapsamındaki güncellemeler doğrultusunda revize edilebilir. Esaslı değişiklikler, yürürlüğe girmeden en az on beş gün önce web sitemizde yayımlanır ve aktif müşterilere e-posta ile bildirilir.', `Sorularınız için: ${MAIL}`]
    }]
  },
  cerez: {
    short: 'Çerez Politikası',
    label: 'Çerezler',
    title: 'Bu sitede hangi çerezleri kullanıyoruz.',
    lede: 'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Nord, siteyi çalıştırmak ve iyileştirmek için sınırlı sayıda çerez kullanır; reklam amaçlı çerez kullanmaz.',
    facts: [['Zorunlu çerez', 'Var'], ['Analitik çerez', 'Rızaya bağlı'], ['Reklam çerezi', 'Yok'], ['Yurt dışı aktarım', 'Yok']],
    sections: [{
      h: 'Çerez nedir?',
      p: ['Çerez (cookie), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük bir metin dosyasıdır. Sitenin sizi bir sonraki ziyaretinizde tanımasını, tercihlerinizi hatırlamasını ve teknik olarak doğru çalışmasını sağlar.', 'Çerezler tek başına kimliğinizi ortaya çıkarmaz; ancak diğer verilerle birleştiğinde kişisel veri niteliği kazanabilir. Bu nedenle çerez kullanımımız KVKK ve ilgili Kurul kararlarına uygun biçimde yürütülür.']
    }, {
      h: 'Kullandığımız çerez türleri',
      p: ['Nord web sitesinde yalnızca iki kategori çerez bulunur:'],
      list: ['Zorunlu çerezler — sitenin temel işlevleri için gereklidir. Oturum yönetimi, form güvenliği ve çerez tercihinizin hatırlanması bu kapsamdadır. Rızaya tabi değildir; bu çerezler olmadan site çalışmaz.', 'Analitik çerezler — hangi sayfaların ne kadar görüntülendiğini, ziyaretçilerin siteyi nasıl kullandığını anlamamızı sağlar. Yalnızca açık rızanızla çalışır ve dilediğiniz an kapatabilirsiniz.']
    }, {
      h: 'Kullanmadığımız çerezler',
      p: ['Nord, web sitesinde reklam, yeniden hedefleme (retargeting) ve sosyal medya izleme çerezi kullanmaz. Ziyaretçi verisi üçüncü taraf reklam ağlarıyla paylaşılmaz ve pazarlama amacıyla satılmaz.']
    }, {
      h: 'Çerez saklama süreleri',
      p: ['Oturum çerezleri tarayıcınızı kapattığınızda silinir. Çerez tercihinizi saklayan kalıcı çerez on iki ay boyunca cihazınızda kalır. Analitik çerezler en fazla yirmi dört ay saklanır.']
    }, {
      h: 'Çerezleri nasıl yönetirsiniz?',
      p: ['Siteye ilk girişinizde gösterilen çerez bildirimi üzerinden analitik çerezleri kabul edebilir ya da reddedebilirsiniz. Tercihinizi daha sonra değiştirmek isterseniz tarayıcınızın çerez ayarlarından bu sitenin çerezlerini silmeniz yeterlidir.', 'Tüm modern tarayıcılar, çerezleri engelleme ya da silme imkânı sunar. Zorunlu çerezleri engellemeniz hâlinde site bazı bölümlerde doğru çalışmayabilir.']
    }, {
      h: 'Politikadaki değişiklikler',
      p: [`Bu politika gerektiğinde güncellenir; güncel sürüm her zaman bu sayfada yayımlanır. Çerez kullanımına ilişkin sorularınız için ${MAIL} adresine yazabilirsiniz.`]
    }]
  }
};
})();

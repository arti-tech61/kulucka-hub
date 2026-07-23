export interface Yazi {
    slug: string;
    kategori: string;
    baslik: string;
    ozet: string;
    tarih: string; // ISO
    paragraflar: string[];
}

export const kategoriler = ["Sanayi", "Lojistik", "Enerji", "İş Dünyası", "İş Güvenliği"] as const;

export const yazilar: Yazi[] = [
    {
        slug: "izmir-organize-sanayi-bolgeleri-rehberi",
        kategori: "Sanayi",
        baslik: "İzmir'in Organize Sanayi Bölgeleri: Yatırımcı ve Tedarikçi Rehberi",
        ozet: "Kemalpaşa'dan Aliağa'ya, Torbalı'dan Çiğli'ye — İzmir'in üretim coğrafyasını, bölgelerin sektörel ağırlıklarını ve tedarikçiler için pratik ipuçlarını derledik.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir, Ege'nin üretim merkezi olarak birden fazla organize sanayi bölgesini bir arada barındırır. Kemalpaşa hattı metal, makine ve gıda işleme tesisleriyle; Çiğli'deki Atatürk Organize Sanayi Bölgesi elektronik, plastik ve ambalaj sanayiiyle; Torbalı çevresi yapı malzemeleri ve lojistik depolarıyla; Aliağa ise ağır sanayi, petrokimya ve gemi söküm tesisleriyle öne çıkar.",
            "Bölge seçimi yapan yatırımcı için üç pratik ölçüt öne çıkıyor: limana ve otoyola uzaklık, nitelikli işgücüne erişim ve bölgenin altyapı kapasitesi. Alsancak Limanı'na ve Aliağa'daki özel iskelelere yakınlık, ihracat ağırlıklı üreticiler için taşıma maliyetini doğrudan etkiler.",
            "Tedarikçiler açısından İzmir OSB'lerinin ortak özelliği, bakım-onarım ve ekipman kiralama taleplerinin yıl boyu sürmesidir: fabrika bakım duruşları, depo raf kurulumları, çatı ve cephe işleri bölgedeki hizmet ekonomisinin düzenli kalemleridir.",
            "İzmir Sektör olarak bu rehberi, bölgeye yeni gelen işletmelerin doğru muhataplara hızla ulaşması için güncel tutacağız; katkı ve düzeltmeleriniz için bize yazabilirsiniz.",
        ],
    },
    {
        slug: "alsancak-limani-izmir-lojistik-ekosistemi",
        kategori: "Lojistik",
        baslik: "Alsancak Limanı ve İzmir'in Lojistik Ekosistemi",
        ozet: "Konteyner hatları, demiryolu bağlantısı ve arka saha depoculuğu: İzmir'in dış ticaret kapısının işleyişi ve bölge işletmelerine sunduğu imkânlar.",
        tarih: "2026-07-19",
        paragraflar: [
            "Alsancak Limanı, Ege ihracatının ana kapısı olarak konteyner ve genel kargo trafiğinde bölgenin en işlek tesisidir. Limanın demiryolu bağlantısı, iç bölgelerdeki üreticilerin yükünü karayoluna göre daha öngörülebilir maliyetle kıyıya ulaştırır.",
            "Liman çevresinde ve Kemalpaşa-Torbalı hattında gelişen arka saha depoculuğu, İzmir lojistiğinin ikinci katmanını oluşturur: gümrüklü antrepolar, soğuk zincir tesisleri ve e-ticaret dağıtım merkezleri son yıllarda bu koridorda yoğunlaştı.",
            "Lojistik tesislerin işletmecileri için yüksek raf sistemleri, otomasyon ve bakım hizmetleri sürekli bir ihtiyaç kalemidir; bölgedeki hizmet sağlayıcı ağı da bu talebe paralel büyüyor.",
            "Aliağa'daki özel iskeleler ve Çandarlı'da planlanan kapasite, uzun vadede İzmir'in kuzey aksını güçlendirecek gelişmeler arasında izlenmeyi hak ediyor.",
        ],
    },
    {
        slug: "izmir-ruzgar-enerjisi-yenilenebilir-sektor",
        kategori: "Enerji",
        baslik: "İzmir'de Yenilenebilir Enerji: Rüzgârın Başkenti Neden Burası?",
        ozet: "Türbin kanadı üretiminden santral bakım hizmetlerine — İzmir'in rüzgâr enerjisi kümelenmesi ve bölge iş dünyasına yansımaları.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir ve çevresi, Türkiye'nin rüzgâr enerjisi kapasitesinde başı çeken bölgeler arasında yer alır. Çeşme, Aliağa, Bergama ve Foça hattındaki santraller, kentin enerji üretimindeki payını her yıl büyütüyor.",
            "Kümelenme yalnız santrallerden ibaret değil: İzmir, türbin kanadı ve komponent üretiminde uluslararası tedarik zincirine çalışan fabrikalara ev sahipliği yapıyor. Bu tesisler bölgede nitelikli istihdam ve yan sanayi talebi yaratıyor.",
            "Santral işletmecileri için türbin bakımı, kanat onarımı ve yüksekte çalışma organizasyonu düzenli bir hizmet kalemidir; İSG standartlarına uygun ekipman ve belgeli personel bu işlerin ön şartıdır.",
            "Güneş tarafında da çatı tipi kurulumlar sanayi tesislerinde hızla yaygınlaşıyor; öz tüketim modelleri, enerji maliyetini yönetmek isteyen üreticilerin gündeminde.",
        ],
    },
    {
        slug: "santiyede-yuksekte-calisma-guvenligi-temel-kurallar",
        kategori: "İş Güvenliği",
        baslik: "Şantiyede Yüksekte Çalışma: Vazgeçilmez Beş Kural",
        ozet: "Düşme, iş kazalarının başlıca nedenlerinden. Platform seçiminden operatör belgesine, İzmir sanayisinde yüksekte çalışmanın temel güvenlik çerçevesi.",
        tarih: "2026-07-19",
        paragraflar: [
            "Yüksekten düşme, inşaat ve bakım işlerindeki ciddi iş kazalarının başında gelir. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu ve ilgili yönetmelikler, yüksekte çalışmayı özel risk değerlendirmesine tabi tutar.",
            "Birinci kural doğru ekipman seçimidir: seyyar merdiven ve iskelenin yetersiz kaldığı işlerde makaslı, eklemli veya teleskopik personel yükselticiler kontrollü bir çalışma alanı sağlar.",
            "İkinci kural belgeli operatördür: yükseltici platform kullanan personelin operatör eğitimi almış ve belgelendirilmiş olması gerekir. Üçüncüsü günlük kontroldür: her vardiya öncesi makinenin fren, acil indirme ve korkuluk kontrolleri kayıt altına alınmalıdır.",
            "Dördüncü kural kişisel koruyucu donanımdır: eklemli ve teleskopik platformlarda üretici talimatı ile saha risk değerlendirmesine uygun tam vücut kemeri ve bağlantı sistemi kullanılmalıdır. Beşinci kural ise çalışma alanının sınırlandırılması ve zemin uygunluğunun teyididir.",
            "İzmir Sektör'de bu başlığı düzenli işleyeceğiz; sahadan soru ve vaka paylaşımlarınız içerik gündemimizi belirleyecek.",
        ],
    },
    {
        slug: "izmirde-is-kurmak-sanayi-yatirimcisi-ilk-adimlar",
        kategori: "İş Dünyası",
        baslik: "İzmir'de İş Kurmak: Sanayi Yatırımcısı İçin İlk Adımlar",
        ozet: "Yer seçiminden teşvik başvurusuna, ilk personelden tedarikçi ağına — İzmir'de üretim yatırımına başlarken izlenecek pratik yol haritası.",
        tarih: "2026-07-19",
        paragraflar: [
            "İzmir'de üretim yatırımı planlayan bir girişimci için ilk karar yer seçimidir: OSB içinde hazır altyapılı parsel mi, OSB dışında münferit tesis mi? OSB'ler ruhsat süreçlerinin görece hızlı ilerlemesi ve ortak altyapı maliyetleri açısından çoğu yatırımcı için ilk tercihtir.",
            "İkinci adım teşvik araştırmasıdır: yatırım teşvik belgesi, bölgesel destekler ve Ar-Ge/tasarım merkezi imkânları, kuruluş maliyetini belirgin biçimde etkileyebilir. Başvuru öncesi güncel mevzuatın yetkin bir danışmanla taranması zaman kazandırır.",
            "Üçüncü adım tedarikçi ağıdır: inşaat ve kurulum döneminde ekipman kiralama, elektrik-mekanik taahhüt ve lojistik hizmetleri için bölgeye hâkim tedarikçilerle erken temas, hem maliyeti hem takvimi korur.",
            "İzmir Sektör, bölgede iş kuran ve büyüten işletmelerin deneyimlerini görünür kılmayı amaçlıyor; hikâyesini paylaşmak isteyen girişimcilere sayfalarımız açık.",
        ],
    },
    {
        slug: "kemalpasa-osb-bakim-sezonu-tedarikci-planlamasi",
        kategori: "Sanayi",
        baslik: "Kemalpaşa'da Bakım Sezonu: Fabrikalar Duruşları Nasıl Planlıyor?",
        ozet: "Yaz duruşları yaklaşırken Kemalpaşa hattındaki tesisler bakım takvimlerini kilitliyor. Ekipman ve tedarikçi rezervasyonunda geç kalmanın maliyeti artıyor.",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir sanayisinde yıllık bakım duruşları ağırlıkla yaz aylarında ve dini bayram tatillerinde toplanır: üretim kaybının en düşük olduğu pencerede fabrikalar tavan vinçlerinden havalandırmaya, çatıdan enerji altyapısına birikmiş işleri kapatır.",
            "Bu yoğunlaşmanın tedarik tarafında bir sonucu var: bakım haftalarında bölgede ekipman kiralama, elektrik taahhüt ve izolasyon ekiplerine talep aynı anda patlar. Geç rezervasyon, ya işin ertelenmesi ya da uzak bölgeden yüksek nakliyeyle makine getirilmesi anlamına geliyor.",
            "Tesis yöneticilerinin son yıllarda benimsediği pratik, duruş takvimini tedarikçilerle en az bir ay önceden paylaşmak: makine, ekip ve vinç planı tek organizasyonda kilitleniyor, duruş günü sürprizsiz açılıyor.",
            "İzmir Sektör olarak bakım sezonu boyunca bölgedeki tedarik dengesini izleyecek, kapasite sıkışıklıklarını bu sayfadan duyuracağız.",
        ],
    },
    {
        slug: "izmir-e-ticaret-depolari-cigli-torbali-hatti",
        kategori: "Lojistik",
        baslik: "İzmir'de E-Ticaret Depoculuğu: Çiğli-Torbalı Hattına Bakış",
        ozet: "İzmir çevresindeki depo yeri seçiminde ulaşım bağlantısı, kent erişimi ve yapı özelliklerinin olası etkilerine editoryal bir bakış.",
        tarih: "2026-07-20",
        paragraflar: [
            "E-ticarette kısa teslimat hedefleri, dağıtım merkezinin tüketiciye ve ana ulaşım koridorlarına yakınlığını önemli hâle getiriyor. İzmir'in kuzeyindeki Çiğli-Menemen ile güney ve doğusundaki Torbalı-Kemalpaşa hatları, sanayi ve lojistik alanları nedeniyle depo yeri değerlendirmelerinde gündeme gelebilecek bölgeler arasında.",
            "Tek bir ölçüt bütün lokasyon kararlarını açıklamaz. Otoyol bağlantısı, kent merkezine kurye erişimi, yapının net yüksekliği ve taşıma kapasitesi, yangın güvenliği, kira koşulları ile işgücüne erişim birlikte değerlendirilir. Belirli bir tavan yüksekliğinin her işletme için zorunlu ya da eski yapıların tümüyle elverişsiz olduğu söylenemez.",
            "Yüksek raf veya otomasyon kullanan bir dağıtım merkezinin raf kurulumu ve denetimi, forklift ve istif ekipmanı, yangın sistemi, aydınlatma ve bakım hizmetlerine ihtiyacı olabilir. İş hacmi ise tesisin ölçeğine, faaliyet modeline ve dönemsel talebe göre değişir.",
            "Bu metin, doğrulanmış tekil yatırım duyurularının veya güncel depo envanterinin listesi değildir. Yeni bir tesis, kapasite ya da şirket kararı haberleştirildiğinde şirket açıklaması, ruhsat veren kurum veya ilgili resmî kayıt ayrıca kontrol edilmelidir.",
        ],
    },
    {
        slug: "aliaga-agir-sanayi-yatirimlari-2026",
        kategori: "Enerji",
        baslik: "Aliağa'da Yatırım Trafiği: Ağır Sanayi ve Enerjide Yeni Dönem",
        ozet: "Petrokimyadan gemi geri dönüşümüne, rüzgâr komponentinden liman genişlemelerine — Aliağa aksındaki yatırım başlıkları ve bölge tedarik zincirine yansımaları.",
        tarih: "2026-07-20",
        paragraflar: [
            "Aliağa, İzmir sanayisinin ağır tonajlı ucu olmayı sürdürüyor: petrokimya kapasite artışları, liman ve iskele genişlemeleri, gemi geri dönüşüm tesislerindeki modernizasyon ve enerji depolama projeleri bölgenin yatırım gündemini dolduruyor.",
            "Bu ölçekteki tesislerin ortak özelliği, bakım ve proje işlerinin sürekli bir yüklenici ekosistemi beslemesi: yüksek tonajlı kaldırma, bakım duruşları, izolasyon ve yüzey koruma işleri yıl boyu dönüyor.",
            "Bölgede çalışacak taşeron ve tedarikçiler için giriş bileti İSG olgunluğu: rafineri ve petrokimya sahaları, ekipman evrakları ve personel belgelendirmesinde en sıkı denetimi uygulayan işverenler arasında.",
            "İzmir Sektör, Aliağa aksındaki yatırım duyurularını ve bunların yerel tedarik zincirine açtığı iş kalemlerini düzenli izleyecek.",
        ],
    },
    {
        slug: "izmir-gida-sanayi-zeytin-sut-isleme-tesisleri",
        kategori: "Sanayi",
        baslik: "İzmir'in Gıda Sanayi Haritası: Zeytinden Süte Üretim Hatları",
        ozet: "Menemen'den Bergama'ya zeytinyağı işleme, Kemalpaşa'da süt ve içecek fabrikaları — İzmir'in gıda sanayisini bir araya getiren coğrafya ve tedarik zinciri.",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir'in gıda sanayisi, bölgenin tarımsal zenginliğiyle doğrudan bağlantılıdır. Menemen ve Bergama hattı zeytin ve zeytinyağı işleme tesislerinin yoğunlaştığı bölge; Ödemiş ve Tire ovası ise sebze-meyve işleme ve soğuk hava deposu kapasitesiyle öne çıkar.",
            "Kemalpaşa OSB içindeki süt ve içecek fabrikaları, İzmir'in gıda sanayisindeki ikinci büyük kümeyi oluşturur. Bu tesisler, üretim hattı bakımından ambalajlama otomasyonuna kadar geniş bir yelpazede düzenli teknik hizmet talebi yaratır.",
            "Gıda güvenliği mevzuatı (ISO 22000, HACCP) bu sektörde çalışan taşeron ve ekipman tedarikçileri için ayrı bir uyumluluk katmanı getirir: hijyen sertifikalı personel, paslanmaz ekipman ve iz sürülebilir bakım kayıtları artık standart beklenti hâline geldi.",
            "İzmir Sektör olarak gıda sanayisindeki kapasite yatırımlarını ve mevsimsel üretim döngülerinin (zeytin hasadı, konserve sezonu) yerel hizmet talebine etkisini izlemeye devam edeceğiz.",
        ],
    },
    {
        slug: "bergama-kinik-tekstil-hazir-giyim-uretimi",
        kategori: "Sanayi",
        baslik: "Bergama-Kınık Hattında Tekstil ve Hazır Giyim Üretimi",
        ozet: "İzmir'in kuzeyinde büyüyen tekstil kümesi: ipliğe yakınlık, işgücü havuzu ve ihracat bağlantılarıyla Bergama-Kınık aksı neden tercih ediliyor?",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir'in tekstil ve hazır giyim üretimi, Kemalpaşa OSB'nin yanı sıra Bergama ve Kınık hattında da büyüyen bir küme oluşturuyor. Bölgenin İzmir-Çanakkale karayoluna yakınlığı, hem hammadde girişini hem de bitmiş ürünün limana ulaşmasını kolaylaştırıyor.",
            "Bu hattaki işletmelerin çoğu, örme ve dokuma üretiminden konfeksiyona kadar dikey entegre çalışıyor; bu da fabrika içi taşıma, depo düzenleme ve raf sistemleri için sürekli bir ekipman ihtiyacı doğuruyor.",
            "Mevsimsel sipariş yoğunluğu (özellikle ihracat kampanyaları öncesi) bu bölgedeki işletmelerin kısa süreli, hızlı devreye alınabilir kiralık ekipman taleplerini artırıyor — depo genişletme ve ek vardiya dönemlerinde bu ihtiyaç belirginleşiyor.",
            "İzmir Sektör, Bergama-Kınık tekstil kümesindeki kapasite hareketlerini ve bölgenin lojistik bağlantılarındaki gelişmeleri takip etmeyi sürdürecek.",
        ],
    },
    {
        slug: "aliaga-hurda-celik-geri-donusum-sanayi",
        kategori: "Sanayi",
        baslik: "Aliağa'nın İkinci Yüzü: Hurda, Çelik ve Metal Geri Dönüşüm",
        ozet: "Gemi geri dönüşümü, metal hurda ve çelik üretiminin aynı sanayi bölgesinde nasıl bir tedarik zinciri oluşturabildiğine editoryal bakış.",
        tarih: "2026-07-20",
        paragraflar: [
            "Aliağa; petrokimya ve gemi geri dönüşümünün yanında metal hurdanın ayrıştırılması, taşınması ve çelik üretiminde değerlendirilmesiyle ilişkili işletmelerin bulunduğu bir ağır sanayi bölgesidir. Tesislerin güncel kapasitesi veya ülke içindeki sıralaması, karşılaştırılabilir resmî veri olmadan kesinleştirilemez.",
            "Gemi geri dönüşümünden elde edilen metalin yeniden üretim zincirine girmesi mümkündür; ancak malzemenin hangi tesise, hangi miktarda ve hangi yöntemle gönderildiği işletme kayıtlarına göre değişir. Bu hareketlilik nakliye, ayrıştırma ve ağır kaldırma hizmetlerine talep yaratabilir.",
            "Metal işleme ve çelik üretiminde yüksek sıcaklık, ağır malzeme hareketi ve vardiyalı çalışma gibi riskler bulunabilir. Alınacak önlemler genel bir “standart üstü” ifadesiyle değil, işyerine özgü risk değerlendirmesi, yürürlükteki mevzuat ve kullanılan ekipmanın talimatlarıyla belirlenmelidir.",
            "Bu yazı sektörel yapıyı açıklayan bir çerçevedir; kapasite artışı veya istihdam sonucu ilan etmez. Yeni yatırım ve kapasite haberlerinde şirket açıklaması, çevresel izin belgeleri ve ilgili kamu kurumlarının kayıtları ayrıca doğrulanacaktır.",
        ],
    },
    {
        slug: "izmir-ihracat-performansi-2026-onculuk-eden-sektorler",
        kategori: "İş Dünyası",
        baslik: "İzmir'in 2026 İhracat Performansı: Öncülük Eden Sektörler",
        ozet: "Petrokimyadan makineye, gıdadan tekstile — İzmir'in ihracat sepetinde hangi sektörler büyüyor, hangileri yerini koruyor?",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir, İstanbul'un ardından Türkiye'nin önde gelen ihracat merkezlerinden biri konumunu koruyor. Petrokimya ve rafineri ürünleri (Aliağa ağırlıklı), makine-teçhizat, gıda ve tarım ürünleri ile tekstil, ilin ihracat sepetinin büyük bölümünü oluşturuyor.",
            "Makine ve teçhizat ihracatındaki büyüme, Kemalpaşa ve Çiğli OSB'lerindeki üretici tabanının genişlemesiyle paralel ilerliyor; bu üreticilerin büyük kısmı Avrupa pazarına yönelik siparişlerde kapasite artırımına gidiyor.",
            "Gıda ihracatında zeytinyağı, kuru meyve ve konserve ürünler öne çıkarken; İzmir Limanı üzerinden yapılan konteyner sevkiyatlarının düzenliliği ihracatçılar için önemli bir rekabet avantajı sağlıyor.",
            "İzmir Sektör olarak ihracat verilerini ve bunun arkasındaki üretim kapasitesi hareketlerini düzenli olarak okurlarımızla paylaşmayı sürdüreceğiz.",
        ],
    },
    {
        slug: "fabrikada-risk-degerlendirmesi-osgb-sureci-nasil-isler",
        kategori: "İş Güvenliği",
        baslik: "Fabrikada Risk Değerlendirmesi: OSGB Süreci Nasıl İşler?",
        ozet: "Ortak Sağlık Güvenlik Birimi (OSGB) hizmeti alan bir fabrikada risk değerlendirmesi süreci hangi adımlardan geçer? İşverenler için pratik bir çerçeve.",
        tarih: "2026-07-20",
        paragraflar: [
            "6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında her işletme, tehlike sınıfına göre belirli aralıklarla risk değerlendirmesi yaptırmakla yükümlü. Bu süreç genellikle işyeri hekimi, iş güvenliği uzmanı ve işveren temsilcisinden oluşan bir ekiple yürütülür.",
            "Saha gözlemi, çalışan görüşmeleri ve geçmiş kaza/ramak kala kayıtlarının incelenmesiyle başlayan süreç; tehlikelerin olasılık ve şiddet skorlarına göre sınıflandırılmasıyla devam eder. Yüksekte çalışma, ağır yük kaldırma ve kapalı alan işleri genellikle en yüksek risk skorunu alan kalemler arasında yer alır.",
            "Risk değerlendirmesi raporu, sadece bir uyumluluk belgesi değil — hangi ekipmanın (kiralık platform, güvenlik hattı, kişisel koruyucu donanım) ne sıklıkla ve hangi standartta temin edilmesi gerektiğine dair somut bir yol haritası sunar.",
            "İzmir Sektör, OSGB süreçleri ve İSG mevzuatındaki güncellemeleri bölge işletmeleri için anlaşılır şekilde aktarmaya devam edecek.",
        ],
    },
    {
        slug: "izmir-gunes-enerjisi-santralleri-tarim-arazisi-dengesi",
        kategori: "Enerji",
        baslik: "İzmir'de Güneş Enerjisi Santralleri ve Tarım Arazisi Dengesi",
        ozet: "GES yatırımları İzmir'in tarım arazilerinde hızla yayılırken, bölge hem enerji dönüşümünün hem de tarım-enerji çekişmesinin merkezine oturuyor.",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir, güneşlenme süresi yüksek ovaları (Menemen, Bergama, Ödemiş) nedeniyle güneş enerjisi santrali (GES) yatırımları için aranan bir bölge hâline geldi. Lisanssız ve lisanslı GES başvuruları son yıllarda belirgin şekilde arttı.",
            "Bu yatırımların bir kısmı düşük verimli veya nadasa bırakılmış arazilerde yapılırken, verimli tarım arazilerinde kurulan projeler yerel üretici birlikleriyle zaman zaman gerilim yaratıyor — tarım arazisi statüsü değişikliği süreci bu tartışmanın merkezinde yer alıyor.",
            "GES kurulum ve bakım süreçleri, panel montajı için özel taşıma ekipmanı, saha çevre düzenlemesi ve periyodik bakımda erişim platformu ihtiyacı doğuruyor — bu da bölgedeki ekipman kiralama talebine yeni bir kalem ekliyor.",
            "İzmir Sektör, enerji dönüşümü ile tarım arazisi kullanımı arasındaki bu dengeyi ve GES yatırımlarının bölge ekonomisine etkisini izlemeyi sürdürecek.",
        ],
    },
    {
        slug: "adnan-menderes-havalimani-kargo-terminali-e-ihracat",
        kategori: "Lojistik",
        baslik: "Adnan Menderes Kargo Terminali: E-İhracatın Yeni Kapısı",
        ozet: "Deniz yoluna ek olarak İzmir'in hava kargo kapasitesi büyüyor — özellikle hızlı teslimat gerektiren e-ihracat sevkiyatları için Adnan Menderes'in rolü artıyor.",
        tarih: "2026-07-20",
        paragraflar: [
            "İzmir Adnan Menderes Havalimanı'nın kargo terminali, geleneksel olarak deniz yoluna dayanan İzmir dış ticaretine hızlı ve zamana duyarlı bir alternatif sunuyor. Özellikle tekstil, elektronik parça ve gıda takviyesi gibi ürünlerde hava kargo talebi büyüyor.",
            "E-ihracat hacminin artmasıyla birlikte, küçük paket sevkiyatlarının konsolide edilip hızlı işlem gördüğü kargo depoları bölgede yeni bir lojistik segment oluşturdu. Bu depoların otomasyon ve raf sistemi yatırımları düzenli bir bakım-kurulum talebi yaratıyor.",
            "Havalimanı çevresindeki serbest bölge ve gümrüklü antrepo kapasitesi, e-ihracat yapan KOBİ'ler için önemli bir cazibe unsuru; bu işletmelerin depo kurulum ve genişletme dönemlerinde kiralık platform ve forklift ihtiyacı öne çıkıyor.",
            "İzmir Sektör, hava kargo kapasitesindeki büyümeyi ve e-ihracat ekosisteminin bölge lojistiğine kattığı yeni iş kalemlerini takip etmeye devam edecek.",
        ],
    },
];

export function slugIleYazi(slug: string): Yazi | undefined {
    return yazilar.find((y) => y.slug === slug);
}

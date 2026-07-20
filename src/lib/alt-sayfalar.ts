export interface AltSayfa {
    slug: string;
    baslik: string; // <title> ve bağlantı metni
    aciklama: string; // meta description
    h1: string;
    paragraflar: string[];
    maddeler?: { baslik: string; metin: string }[];
    sss?: { soru: string; cevap: string }[];
}

export const altSayfalar: Record<string, AltSayfa[]> = {
    "eklemliplatform.com.tr": [
        {
            slug: "dizel-eklemli-platform-kiralama",
            baslik: "Dizel Eklemli Platform Kiralama (18-43 m)",
            aciklama: "Şantiye ve açık saha işleri için 18-43 metre dizel eklemli platform kiralama. 4x4 çekiş, bozuk zemin yeteneği, Türkiye geneli sevkiyat.",
            h1: "Dizel Eklemli Platform Kiralama",
            paragraflar: [
                "Dizel eklemli platformlar, açık sahada ve bozuk zeminde çalışmanın standart makinesidir. 4x4 çekişli şasileri sayesinde stabilize yollarda, şantiye içi rampalarda ve tesviyesi tamamlanmamış zeminlerde güvenle hareket eder; elektrik altyapısı gerektirmediği için sahanın her noktasında çalışır.",
                "Filomuzdaki dizel eklemli modeller 18 metreden 43 metreye uzanır. Cephe kaplama, çelik konstrüksiyon montajı, dış cephe boya ve mantolama, yüksek aydınlatma direği bakımı ve reklam tabelası işleri bu grubun en yoğun kullanım alanlarıdır.",
                "Eklemli bom yapısı, düz teleskopik bomların aksine engelin üzerinden aşarak çalışmaya izin verir: bir çatı parapetinin arkasına, bir boru hattının ötesine veya ağaçların üzerinden cepheye bu makinelerle erişilir.",
            ],
            maddeler: [
                { baslik: "18-26 m sınıfı", metin: "En çok kiralanan aralık; cephe ve montaj işlerinin çoğunu karşılar, nakliyesi tek çekiciyle yapılır." },
                { baslik: "28-43 m sınıfı", metin: "Yüksek yapı cepheleri, silo ve endüstriyel baca işleri için; sahada geniş kurulum alanı ister." },
                { baslik: "4x4 ve jack sistemleri", metin: "Eğimli ve gevşek zeminlerde çekiş ve dengeleme desteği sağlar." },
                { baslik: "Operatörlü teslim", metin: "Talep hâlinde belgeli operatörle birlikte günlük veya vardiyalık çalışma organize edilir." },
            ],
            sss: [
                { soru: "Dizel eklemli platform hangi zeminlerde çalışır?", cevap: "Stabilize yol, sıkıştırılmış dolgu ve şantiye zemini dahil çoğu açık saha zemininde çalışır. Çamurlu ve taşıma kapasitesi belirsiz zeminlerde önce zemin uygunluğu değerlendirilir; gerekirse çelik plaka serilir." },
                { soru: "Kiralama için asgari süre nedir?", cevap: "Günlük kiralama yapılabilir; işin niteliğine göre haftalık ve aylık kiralamada birim fiyat belirgin şekilde düşer." },
                { soru: "Nakliye kime aittir?", cevap: "Nakliye organizasyonunu biz yaparız; bedeli mesafeye göre teklife ayrı kalem olarak eklenir. Uzun süreli kiralamalarda nakliye çoğunlukla teklife dahil edilir." },
                { soru: "Operatör belgesi zorunlu mu?", cevap: "Evet. Makineyi kullanacak kişinin yükseltici platform operatör belgesi bulunmalıdır; belgeli personeliniz yoksa operatörlü kiralama öneririz." },
            ],
        },
        {
            slug: "elektrikli-eklemli-platform-kiralama",
            baslik: "Elektrikli Eklemli Platform Kiralama (12-16 m)",
            aciklama: "İç mekân ve hassas zemin işleri için 12-16 metre elektrikli eklemli platform kiralama. Sıfır emisyon, sessiz çalışma, beyaz lastik seçeneği.",
            h1: "Elektrikli Eklemli Platform Kiralama",
            paragraflar: [
                "Elektrikli eklemli platformlar; AVM, fabrika içi, depo, otel ve hastane gibi kapalı alanlarda yüksekte çalışmanın doğru tercihidir. Sıfır emisyonla ve düşük gürültüyle çalışır, iz bırakmayan beyaz lastik seçenekleriyle epoksi ve mermer zeminlerde güvenle kullanılır.",
                "12-16 metre çalışma yüksekliğindeki modeller, kapalı alanların büyük bölümündeki tesisat, aydınlatma, sprinkler, havalandırma ve dekorasyon işlerini karşılar. Dar şasi genişlikleri standart kapılardan ve koridorlardan geçişe izin verir.",
                "Tek şarjla tam iş günü çalışma tipiktir; gece şarjıyla makine ertesi güne hazır olur. Yoğun kullanımda yedek akü veya gündüz ara şarj planlaması yapıyoruz.",
            ],
            maddeler: [
                { baslik: "İç mekân uyumu", metin: "Sıfır emisyon ve düşük ses; gıda tesisleri ve hastanelerde vardiya saatinde çalışabilir." },
                { baslik: "Dar alan manevrası", metin: "Kendi ekseninde dönüş ve kompakt şasi; raf aralarında ve koridorlarda rahat hareket." },
                { baslik: "Beyaz lastik", metin: "Epoksi, mermer ve seramik zeminlerde iz bırakmaz." },
                { baslik: "Aşırı yük ve eğim sensörleri", metin: "Standart güvenlik donanımı; limit dışı kullanım makine tarafından engellenir." },
            ],
            sss: [
                { soru: "Elektrikli platform dış mekânda kullanılabilir mi?", cevap: "Düz ve sert zeminli dış alanlarda kısa süreli kullanılabilir; ancak rüzgâr limiti ve zemin hassasiyeti nedeniyle asıl çalışma alanı kapalı mekânlardır. Açık saha işleri için dizel modeller önerilir." },
                { soru: "Şarj için ne gerekli?", cevap: "Standart 220V priz yeterlidir. Gece boyu şarj tam kapasite sağlar." },
                { soru: "Asansörle kata çıkarılabilir mi?", cevap: "Bazı kompakt modeller yük asansörü kapasitesine ve kapı ölçüsüne sığar; proje bazında makine ölçü tablosuyla birlikte değerlendiririz." },
                { soru: "Kaç kişiyle çalışılır?", cevap: "Sepet kapasitesine göre genellikle 2 kişi + el aleti. Model bazında sepet yükü 200-230 kg aralığındadır." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Eklemli Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Eklemli platform kiralamada fiyat, nakliye, operatör, İSG evrakları ve makine seçimi hakkında en sık sorulan sorular ve net yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Eklemli platform kiralama sürecinde müşterilerimizden en sık gelen soruları ve net yanıtlarını derledik. Sorunuzun yanıtını bulamazsanız ana sitemiz üzerinden bize ulaşabilirsiniz; keşif ve makine seçimi danışmanlığı ücretsizdir.",
            ],
            sss: [
                { soru: "Eklemli platform ile teleskopik platform arasındaki fark nedir?", cevap: "Teleskopik bom düz bir doğrultuda uzar ve aynı yükseklikte daha fazla yatay erişim sunar; eklemli bom ise 'kırılan' yapısıyla engellerin üzerinden aşarak çalışır. Cephe önünde engel (saçak, boru, ağaç, parapet) varsa eklemli, açık alanda maksimum erişim gerekiyorsa teleskopik doğru seçimdir." },
                { soru: "Fiyat neye göre belirlenir?", cevap: "Makinenin yükseklik sınıfı, kiralama süresi, nakliye mesafesi ve operatör talebi fiyatı belirleyen dört ana kalemdir. Aynı gün içinde yazılı teklif iletiyoruz." },
                { soru: "Hangi evrakları veriyorsunuz?", cevap: "Periyodik kontrol raporu, makine uygunluk belgeleri ve talep hâlinde operatör belgeleri makineyle birlikte teslim edilir; İSG dosyanıza hazır set sunarız." },
                { soru: "Yağmurda çalışılır mı?", cevap: "Hafif yağışta dizel makinelerle çalışma sürdürülebilir; ancak rüzgâr hızı üretici limitini (genellikle 12,5 m/sn) aştığında çalışma durdurulmalıdır. Operatörlerimiz hava koşulu kararlarında yetkilidir." },
                { soru: "Ne kadar önceden rezervasyon gerekli?", cevap: "Standart yükseklikler için 1-2 gün genellikle yeterlidir; 28 metre üzeri makinelerde ve yoğun sezonda bir hafta öncesinden planlama öneririz." },
            ],
        },
    ],

    "bandirmamanlift.net": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bandırma Makaslı Platform Kiralama (8-22 m)",
            aciklama: "Bandırma, Erdek, Gönen ve Biga'da 8-22 metre makaslı platform kiralama. Liman, fabrika ve tersane işlerine uygun; hızlı teslimat.",
            h1: "Bandırma Makaslı Platform Kiralama",
            paragraflar: [
                "Makaslı platformlar, geniş sepetiyle birden fazla çalışanın malzemeyle birlikte dikey yükselmesine izin verir; Bandırma bölgesindeki fabrika bakımı, liman ekipmanı onarımı ve depo işlerinin en çok kiralanan makinesidir.",
                "Filomuzda 8-22 metre arası elektrikli ve dizel makaslı modeller bulunur. Bandırma limanındaki yükleme ekipmanlarının bakımından Gönen'deki gıda tesislerinin tavan çalışmalarına, bölgenin sanayi dokusuna uygun makineyi aynı gün veya ertesi gün teslim ediyoruz.",
                "Elektrikli modeller kapalı üretim alanlarında ve gıda tesislerinde, dizel 4x4 modeller tersane sahaları ve açık depolama alanlarında kullanılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat ve aydınlatma işlerinin standardı; dar koridor geçişine uygun." },
                { baslik: "14-22 m dizel", metin: "Tersane, liman sahası ve dış cephe işleri için; bozuk zemin yeteneği." },
                { baslik: "Geniş sepet + uzatma", metin: "Malzemeyle birlikte 2-3 kişi; uzatma tablasıyla erişim alanı büyür." },
                { baslik: "Hızlı sevkiyat", metin: "Bandırma merkeze aynı gün, Erdek-Gönen-Biga hattına planlı ertesi gün teslim." },
            ],
            sss: [
                { soru: "Makaslı platform kaç kişi taşır?", cevap: "Modele göre sepet kapasitesi 230-450 kg arasındadır; pratikte 2-3 çalışan ve el aletleri güvenle taşınır." },
                { soru: "Liman sahasında çalışma için özel izin gerekir mi?", cevap: "Liman işletmesinin saha giriş prosedürüne tabidir; makine evraklarını (periyodik kontrol, sigorta) giriş için hazır dosya hâlinde veririz." },
                { soru: "Tersane işlerinde hangi model uygun?", cevap: "Açık saha ve halat/blok engelleri nedeniyle 4x4 dizel makaslı veya duruma göre bomlu platform önerilir; keşifte netleştiririz." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Bandırma Bomlu Platform Kiralama (16-43 m)",
            aciklama: "Bandırma ve çevresinde 16-43 metre eklemli ve teleskopik bomlu platform kiralama. Silo, enerji tesisi ve cephe işleri; İSG uyumlu teslimat.",
            h1: "Bandırma Bomlu Platform Kiralama",
            paragraflar: [
                "Bomlu platformlar hem yükseğe hem de yatayda uzağa erişim gerektiren işlerin makinesidir. Bandırma bölgesinde silo bakımları, un ve yem fabrikalarının çatı-cephe işleri, enerji tesislerindeki yapısal kontroller bu grubun tipik kullanım alanlarıdır.",
                "16-43 metre aralığında eklemli ve teleskopik seçenekler sunuyoruz: engel üzerinden aşarak çalışmak gerekiyorsa eklemli, açık alanda maksimum erişim gerekiyorsa teleskopik modeller tercih edilir.",
                "Bomlu platformda tam vücut emniyet kemeri zorunludur; makineyle birlikte kemer ve lanyard setini de talep edebilirsiniz. Operatörlü kiralamada belgeli operatörümüz İSG kurallarının tamamını uygular.",
            ],
            maddeler: [
                { baslik: "16-26 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklikteki silo işleri; bölgede en çok dönen aralık." },
                { baslik: "28-43 m sınıfı", metin: "Yüksek silolar, baca ve enerji yapıları; planlı sevkiyatla temin edilir." },
                { baslik: "Eklemli / teleskopik seçim", metin: "Engelli erişimde eklemli, açık sahada teleskopik; keşifte ücretsiz yönlendirme." },
                { baslik: "İSG seti", metin: "Kemer, lanyard ve makine evrakları teslimatta hazır." },
            ],
            sss: [
                { soru: "Bomlu platformda kemer neden zorunlu?", cevap: "Bom yapısı ani hareketlerde sepetteki çalışanı fırlatabilir (mancınık etkisi); tam vücut kemeri ve kısa lanyard çalışanı sepette tutar. Bu, mevzuat ve üretici talimatı gereğidir." },
                { soru: "Rüzgârlı havada çalışılır mı?", cevap: "Üretici limiti (çoğunlukla 12,5 m/sn) aşıldığında çalışma durdurulur. Bandırma'nın rüzgârlı ikliminde günlük planlamayı hava tahminiyle birlikte yapıyoruz." },
                { soru: "43 metreden yüksek iş için çözümünüz var mı?", cevap: "Filo dışı yükseklikler için tedarikçi ağımızdan proje bazlı temin sağlıyoruz; erken planlama gerekir." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Bandırma Manlift Kiralama — Sık Sorulan Sorular",
            aciklama: "Bandırma bölgesinde manlift kiralamada teslimat süreleri, fiyatlandırma, operatör ve evraklar hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Bandırma, Erdek, Gönen ve Biga hattında manlift kiralarken en çok merak edilenleri derledik. Farklı bir sorunuz için ana sitemizden bize ulaşın.",
            ],
            sss: [
                { soru: "Bandırma'ya teslimat ne kadar sürer?", cevap: "Merkez ve yakın sanayi bölgelerine çoğunlukla aynı gün; Erdek, Gönen ve Biga hattına planlı ertesi gün teslim ediyoruz." },
                { soru: "Kiralama fiyatına neler dahil?", cevap: "Makine, periyodik kontrol evrakları ve temel kullanım eğitimi dahildir; nakliye ve operatör talebi ayrı kalem olarak teklife yazılır." },
                { soru: "Asgari kiralama süresi nedir?", cevap: "Günlük kiralama yapıyoruz; saatlik işler için de bölgede uygun rota varsa çözüm üretiyoruz." },
                { soru: "Operatörsüz kiralamada şart nedir?", cevap: "Makineyi kullanacak personelinizin yükseltici platform operatör belgesi olması gerekir; teslimatta kısa makine tanıtımı yaparız." },
                { soru: "Hafta sonu teslimat yapıyor musunuz?", cevap: "Evet, fabrika bakım duruşları çoğunlukla hafta sonuna denk geldiği için cumartesi-pazar teslimatları önceden planlanarak yapılır." },
            ],
        },
    ],

    "izmirforkliftkiralama.net": [
        {
            slug: "elektrikli-forklift-kiralama",
            baslik: "İzmir Elektrikli Forklift Kiralama (1,5-3 ton)",
            aciklama: "İzmir'de depo içi kullanım için 1,5-3 ton elektrikli forklift kiralama. Triplex asansör, sessiz ve emisyonsuz çalışma; aynı gün teslimat.",
            h1: "İzmir Elektrikli Forklift Kiralama",
            paragraflar: [
                "Elektrikli forkliftler kapalı depo ve üretim alanlarının standardıdır: emisyon üretmez, sessiz çalışır ve dar koridorlarda üstün manevra sağlar. İzmir'deki e-ticaret depoları, gıda tesisleri ve soğuk hava depolarında en çok kiraladığımız gruptur.",
                "1,5-3 ton kapasite aralığında, triplex asansörlü ve yan kaydırmalı (side shift) modeller sunuyoruz. Triplex asansör, standart tavan yüksekliğindeki depolarda 4,5-6 metre istif yapmaya izin verir.",
                "Akü teknolojisine göre gece şarjı veya vardiya arası hızlı şarj planlanır; çift vardiya çalışan tesislere yedek akü çözümü sunuyoruz.",
            ],
            maddeler: [
                { baslik: "1,5-2 ton", metin: "Dar koridorlu depolar ve hafif paletli yükler; en ekonomik sınıf." },
                { baslik: "2,5-3 ton", metin: "Standart palet trafiği ve üretim hattı besleme; en çok kiralanan aralık." },
                { baslik: "Triplex asansör", metin: "6 metreye kadar istif; kapıdan giriş yüksekliği düşük kalır." },
                { baslik: "Soğuk hava paketi", metin: "Eksi derece depolar için uygun donanımlı modeller mevcut." },
            ],
            sss: [
                { soru: "Elektrikli forklift dışarıda çalışır mı?", cevap: "Düz beton/asfalt zeminde ve kuru havada kısa süreli çalışabilir; ancak yağmura ve bozuk zemine uygun değildir. Açık saha için dizel/LPG öneririz." },
                { soru: "Şarj altyapısı nasıl olmalı?", cevap: "Modele göre 220V veya 380V priz gerekir; keşifte elektrik altyapınıza uygun modeli belirleriz." },
                { soru: "Kiralamada bakım kime ait?", cevap: "Periyodik bakım ve arıza müdahalesi bize aittir; İzmir içinde aynı gün servis sağlıyoruz." },
            ],
        },
        {
            slug: "dizel-forklift-kiralama",
            baslik: "İzmir Dizel ve LPG Forklift Kiralama (3-10 ton)",
            aciklama: "İzmir'de açık saha ve rampa işleri için 3-10 ton dizel/LPG forklift kiralama. Kemalpaşa, Torbalı, Çiğli, Aliağa'ya hızlı teslimat.",
            h1: "İzmir Dizel ve LPG Forklift Kiralama",
            paragraflar: [
                "Dizel ve LPG forkliftler açık saha, rampa ve yoğun tempolu yükleme işlerinin makinesidir. Kemalpaşa ve Torbalı'daki lojistik merkezlerinde konteyner boşaltma, Aliağa'daki ağır sanayi tesislerinde malzeme elleçleme bu grubun tipik işleridir.",
                "3-5 ton sınıfı standart palet ve balya trafiğini karşılar; 7-10 ton sınıfı mermer blokları, çelik rulolar ve makine parçaları gibi ağır yükler için kiralanır.",
                "LPG modeller, iyi havalandırılan kapalı alanlarda da kullanılabilme esnekliği sunar; tüp değişimiyle kesintisiz vardiya çalışması yapılır.",
            ],
            maddeler: [
                { baslik: "3-5 ton dizel/LPG", metin: "Yükleme rampaları ve açık stok sahaları; günlük ve aylık kiralamada en yoğun sınıf." },
                { baslik: "7-10 ton ağır hizmet", metin: "Mermer, çelik ve makine sanayii yükleri; planlı temin edilir." },
                { baslik: "Konteyner boşaltma", metin: "Uzun çatal ve kaydırıcı ataşman seçenekleri mevcut." },
                { baslik: "Saha servisi", metin: "İzmir genelinde mobil servis aracıyla yerinde bakım ve arıza müdahalesi." },
            ],
            sss: [
                { soru: "Operatörlü saatlik kiralama yapıyor musunuz?", cevap: "Evet; özellikle konteyner ve tır boşaltma işleri için operatörlü saatlik hizmet İzmir genelinde en çok talep edilen modeldir." },
                { soru: "10 ton üzeri yük için çözümünüz var mı?", cevap: "10 ton üzeri için ağır hizmet forkliftleri ve telehandler seçeneklerini proje bazlı temin ediyoruz; yük tablosuyla birlikte değerlendiririz." },
                { soru: "Aylık kiralamada yakıt kime ait?", cevap: "Yakıt kiracıya aittir; bakım, lastik ve servis bize aittir. Uzun dönemde bu model toplam maliyeti öngörülebilir kılar." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "İzmir Forklift Kiralama — Sık Sorulan Sorular",
            aciklama: "İzmir'de forklift kiralamada kapasite seçimi, teslimat, operatör belgesi ve fiyatlandırma hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "İzmir'de forklift kiralarken en sık gelen soruları yanıtladık. Kapasite ve model seçiminde kararsızsanız yük tablonuzu iletin; aynı gün içinde doğru makineyi önerelim.",
            ],
            sss: [
                { soru: "Doğru forklift kapasitesini nasıl seçerim?", cevap: "En ağır yükünüzün ağırlığı ve yük merkezi mesafesi belirleyicidir: 500 mm yük merkezinde 2 ton taşıyan makine, yük merkezi uzadıkça daha az taşır. Palet ölçünüzü ve en ağır yükünüzü iletmeniz seçim için yeterlidir." },
                { soru: "Forklift kullanmak için hangi belge gerekir?", cevap: "G sınıfı operatör belgesi (iş makinesi kullanma yetkisi) zorunludur. Belgeli personeliniz yoksa operatörlü kiralama sunuyoruz." },
                { soru: "İzmir içi teslimat süresi nedir?", cevap: "Stoktaki modellerde Kemalpaşa, Torbalı, Çiğli ve Aliağa dahil çoğu bölgeye aynı gün teslimat yapıyoruz." },
                { soru: "Kısa süreli (birkaç saatlik) iş için kiralama olur mu?", cevap: "Operatörlü saatlik hizmetimiz tam bu ihtiyaç içindir; tır boşaltma gibi işlerde makine + operatör birlikte gelir, iş bitince ayrılır." },
                { soru: "Kiralık forkliftin sigortası kime ait?", cevap: "Makine sigortası bize aittir; operasyon sırasındaki üçüncü şahıs zararları için sorumluluk sözleşmede netleştirilir." },
            ],
        },
    ],

    "kutahyaplatform.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Kütahya Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Kütahya'da seramik fabrikaları ve depolar için 8-18 metre makaslı platform kiralama. Elektrikli ve dizel modeller; Eskişehir'den hızlı sevkiyat.",
            h1: "Kütahya Makaslı Platform Kiralama",
            paragraflar: [
                "Kütahya'nın seramik ve çini üretim tesislerinde tavan vinçleri, havalandırma kanalları ve aydınlatma sistemlerinin bakımı düzenli yüksekte çalışma gerektirir. Makaslı platformlar bu işlerin en verimli makinesidir: geniş sepetinde iki-üç çalışan malzemeleriyle birlikte yükselir.",
                "8-18 metre aralığında elektrikli ve dizel modeller sunuyoruz. Elektrikli modeller fabrika içi hassas zeminlerde iz bırakmadan çalışır; dizel 4x4 modeller fabrika sahaları ve açık depolama alanlarında kullanılır.",
                "Eskişehir filomuzdan Kütahya merkez ve Kütahya OSB'ye sevkiyat genellikle aynı gün planlanır; Tavşanlı ve Gediz hattına ertesi gün teslim yapılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Seramik fabrikaları ve depo içi işlerin standardı; sessiz ve emisyonsuz." },
                { baslik: "14-18 m dizel", metin: "Açık saha, cephe ve çatı kenarı işleri; bozuk zemin yeteneği." },
                { baslik: "Fırın bölgesi çalışmaları", metin: "Sıcak bölge planlaması ve uygun lastik seçimiyle fabrika bakımlarına özel çözüm." },
                { baslik: "Bakım duruşu paketi", metin: "Planlı duruşlarda birden fazla makine tek organizasyonla sevk edilir." },
            ],
            sss: [
                { soru: "Kütahya'ya teslimat süresi nedir?", cevap: "Eskişehir filomuzdan merkez ve OSB'ye çoğunlukla aynı gün; ilçelere planlı ertesi gün teslim ediyoruz." },
                { soru: "Seramik fabrikası zemininde hangi model çalışır?", cevap: "Epoksi ve sırlı zeminlerde beyaz lastikli elektrikli modeller iz bırakmadan çalışır; zemin yükü hassasiyeti varsa makine ağırlık tablosunu paylaşırız." },
                { soru: "Günlük kiralama yapılıyor mu?", cevap: "Evet; kısa bakım işleri için günlük, duruş dönemleri için haftalık paketler sunuyoruz." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Kütahya Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Kütahya'da fabrika bacası, silo ve cephe işleri için 16-32 metre eklemli/teleskopik bomlu platform kiralama; Eskişehir'den hızlı sevkiyat.",
            h1: "Kütahya Bomlu Platform Kiralama",
            paragraflar: [
                "Yüksek fabrika cepheleri, bacalar, silolar ve enerji hatları — Kütahya sanayisinin dikeyde en zorlu işleri bomlu platformlarla yapılır. Bom, hem yükseğe hem de engellerin ötesine yatay erişim sağlar.",
                "16-32 metre aralığında eklemli ve teleskopik modeller sunuyoruz: fırın binalarının arkasına veya boru köprülerinin üzerinden erişim gerekiyorsa eklemli, açık cephede maksimum yükseklik gerekiyorsa teleskopik model doğru seçimdir.",
                "Kamu binaları ve tarihi yapıların dış cephe bakımları için de bölgede düzenli çalışıyoruz; hassas yüzeylere uygun kurulum planı keşifte netleştirilir.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklik işleri; en yoğun kiralanan aralık." },
                { baslik: "26-32 m sınıfı", metin: "Baca, silo ve yüksek yapı işleri; planlı sevkiyat." },
                { baslik: "Eklemli / teleskopik seçim", metin: "Keşifte iş fotoğrafı üzerinden ücretsiz yönlendirme." },
                { baslik: "İSG evrak seti", metin: "Periyodik kontrol raporu ve kemer setiyle teslim." },
            ],
            sss: [
                { soru: "Bomlu platformda operatör şart mı?", cevap: "Makineyi kullananın operatör belgesi olması zorunludur; bomlu grupta çoğu müşterimiz operatörlü kiralamayı tercih eder." },
                { soru: "32 metreden yüksek iş için çözüm var mı?", cevap: "Filo dışı yükseklikler tedarikçi ağımızdan proje bazlı temin edilir; bir hafta öncesinden planlama öneririz." },
                { soru: "Kış koşullarında çalışılıyor mu?", cevap: "Kütahya kışında kar ve buzlanma günlerinde zemin ve rüzgâr değerlendirmesi yapılır; makine ısıtma süreleri günlük plana eklenir." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Kütahya Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Kütahya'da platform kiralamada sevkiyat, fiyat, evrak ve makine seçimi hakkında sık sorulan sorular ve yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Kütahya ve ilçelerinde platform kiralamada en çok merak edilenleri derledik. Başka sorunuz için ana sitemizden ulaşabilirsiniz.",
            ],
            sss: [
                { soru: "Hangi ilçelere hizmet veriyorsunuz?", cevap: "Merkez, OSB, Tavşanlı, Gediz, Simav ve Emet dahil tüm ilçelere sevkiyat yapıyoruz; mesafeye göre teslim günü planlanır." },
                { soru: "Fiyata neler dahil?", cevap: "Makine ve evrak seti dahildir; nakliye mesafeye göre ayrı hesaplanır, uzun kiralamalarda çoğunlukla pakete dahil edilir." },
                { soru: "Makine seçiminde yardım alabilir miyim?", cevap: "Çalışma yüksekliği, zemin ve engel durumunu (mümkünse fotoğrafla) iletin; aynı gün doğru makine önerisi ve yazılı teklif gönderelim." },
                { soru: "Periyodik kontrol raporu veriyor musunuz?", cevap: "Evet, tüm makineler güncel periyodik kontrol raporuyla teslim edilir; İSG dosyanız için kopyası e-posta ile de iletilir." },
            ],
        },
    ],

    "aydinplatform.net": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Aydın Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Aydın, Nazilli, Söke ve Kuşadası'nda 8-18 metre makaslı platform kiralama. Otel, jeotermal tesis ve tarım sanayi işleri; İzmir'den hızlı sevkiyat.",
            h1: "Aydın Makaslı Platform Kiralama",
            paragraflar: [
                "Aydın bölgesinde makaslı platform talebinin üç ana kaynağı var: incir ve zeytin işleme tesislerinin depo işleri, jeotermal santrallerin bakım programları ve Kuşadası-Didim hattındaki otellerin sezon öncesi yenileme çalışmaları.",
                "8-18 metre aralığındaki elektrikli ve dizel makaslı filomuzla bu işlerin tamamını karşılıyoruz: otel iç mekânlarında iz bırakmayan beyaz lastikli elektrikli modeller, santral sahalarında 4x4 dizel modeller çalışır.",
                "İzmir filomuzdan Aydın merkez ve Efeler'e sevkiyat çoğunlukla aynı gün planlanır; Nazilli, Söke ve sahil hattına ertesi gün teslim yapılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Otel, AVM ve tesis içi işler; sessiz ve emisyonsuz çalışma." },
                { baslik: "14-18 m dizel", metin: "Jeotermal saha, fabrika cephesi ve açık depo işleri." },
                { baslik: "Sezon paketi", metin: "Otellerin kapalı dönem yenilemeleri için haftalık/aylık avantajlı paketler." },
                { baslik: "Tarım sanayi çözümü", metin: "İşleme tesislerinin hasat öncesi bakım duruşlarına planlı sevkiyat." },
            ],
            sss: [
                { soru: "Kuşadası'ndaki otele teslimat yapıyor musunuz?", cevap: "Evet; sahil hattına planlı ertesi gün teslim ediyoruz. Otel yenileme sezonu (kasım-mart) için erken rezervasyon öneririz." },
                { soru: "Jeotermal sahada çalışma deneyiminiz var mı?", cevap: "Bölgedeki santral bakımlarında düzenli çalışıyoruz; saha giriş prosedürlerine uygun evrak setini hazır teslim ederiz." },
                { soru: "Elektrikli model otel içinde asansörle taşınır mı?", cevap: "Kompakt modeller bazı yük asansörlerine sığar; ölçü tablosunu paylaşarak proje bazında değerlendiririz." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Aydın Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Aydın genelinde 16-32 metre eklemli ve teleskopik bomlu platform kiralama. Otel cepheleri, jeotermal santral ve silo işleri; ücretsiz keşif.",
            h1: "Aydın Bomlu Platform Kiralama",
            paragraflar: [
                "Otel dış cepheleri, jeotermal santral boru hatları, tarım işleme tesislerinin siloları — Aydın'da yükseğe ve uzağa erişim gerektiren işleri 16-32 metre bomlu platformlarla yapıyoruz.",
                "Eklemli modeller, otel bahçelerindeki ağaçların veya santral sahalarındaki boru köprülerinin üzerinden aşarak çalışma imkânı verir; teleskopik modeller açık cephede maksimum erişim sağlar.",
                "Sahil hattındaki tuzlu hava koşullarında cephe bakım ihtiyacı iç bölgelere göre daha sıktır; otel işletmelerine yıllık bakım takvimine bağlı dönemsel kiralama modeli öneriyoruz.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Otel ve fabrika cepheleri; en yoğun aralık." },
                { baslik: "26-32 m sınıfı", metin: "Silo, baca ve yüksek yapı işleri; planlı temin." },
                { baslik: "Ağaç/engel aşma", metin: "Eklemli bom peyzajlı alanlarda cepheye zarar vermeden erişir." },
                { baslik: "Dönemsel paket", metin: "Otellerin yıllık bakım takvimine bağlı avantajlı sözleşme." },
            ],
            sss: [
                { soru: "Otel çalışmasında misafir konforu nasıl korunur?", cevap: "Elektrikli-hibrit modellerle ve sabah erken/öğle arası vardiyalarla gürültü penceresi daraltılır; çalışma alanı şeritle izole edilir." },
                { soru: "Keşif ücretli mi?", cevap: "Hayır; Aydın genelinde keşif ve makine seçim danışmanlığı ücretsizdir. Fotoğraf üzerinden ön değerlendirme de yapıyoruz." },
                { soru: "Operatörlü kiralama mümkün mü?", cevap: "Evet; bomlu grupta belgeli operatörle günlük veya vardiyalık çalışma organize ediyoruz." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Aydın Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Aydın'da platform kiralamada teslimat bölgeleri, fiyatlandırma, evrak ve rezervasyon hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Aydın ve ilçelerinde platform kiralarken en çok gelen soruları yanıtladık. Farklı sorularınız için ana sitemizden bize ulaşın.",
            ],
            sss: [
                { soru: "Hangi bölgelere hizmet veriyorsunuz?", cevap: "Aydın merkez, Efeler, Nazilli, Söke, Kuşadası ve Didim başta olmak üzere il genelinde sevkiyat yapıyoruz." },
                { soru: "Teslimat süresi ne kadar?", cevap: "İzmir filomuzdan merkez hatta çoğunlukla aynı gün, sahil ve doğu ilçelerine planlı ertesi gün teslim ediyoruz." },
                { soru: "Fiyat teklifi için hangi bilgiler gerekli?", cevap: "Çalışma yüksekliği, işin süresi, zemin tipi ve adres yeterlidir; aynı gün yazılı teklif iletiyoruz." },
                { soru: "Uzun dönem kiralamada avantaj var mı?", cevap: "Haftalık kiralamada günlük birim fiyat düşer; aylık sözleşmelerde nakliye çoğunlukla pakete dahil edilir." },
            ],
        },
    ],

    "bilecikplatform.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bilecik Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Bilecik, Bozüyük, Osmaneli ve Söğüt'te 8-18 metre makaslı platform kiralama. Seramik ve metal tesislerine Eskişehir'den aynı gün teslim.",
            h1: "Bilecik Makaslı Platform Kiralama",
            paragraflar: [
                "Bilecik sanayisinin omurgasını oluşturan seramik ve metal işleme tesislerinde tavan ve tesisat işleri düzenli yüksekte çalışma gerektirir. 8-18 metre makaslı platformlarımız bu işlerin standart makinesidir.",
                "Elektrikli modeller üretim alanlarında emisyonsuz ve iz bırakmadan çalışır; dizel 4x4 modeller açık stok sahalarında ve cephe işlerinde kullanılır.",
                "Eskişehir filomuza yakınlık Bilecik'in avantajıdır: merkez, Bozüyük ve Osmaneli'ye teslimat genellikle aynı gün yapılır. Kısa bakım duruşları için günlük kiralama en çok tercih edilen modeldir.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat, aydınlatma ve vinç bakımı işleri." },
                { baslik: "14-18 m dizel", metin: "Cephe, çatı kenarı ve açık saha işleri." },
                { baslik: "Aynı gün teslim", metin: "Eskişehir'e yakınlık sayesinde merkez ve Bozüyük'e hızlı sevkiyat." },
                { baslik: "Duruş planlaması", metin: "Fabrika bakım duruşlarında çoklu makine organizasyonu." },
            ],
            sss: [
                { soru: "Bilecik'e teslimat gerçekten aynı gün mü?", cevap: "Stok durumuna bağlı olarak merkez, Bozüyük ve Osmaneli'ye çoğunlukla aynı gün teslim ediyoruz; sabah gelen talepler öğleden sonra sahada olur." },
                { soru: "Seramik fabrikası içinde hangi model çalışır?", cevap: "Beyaz lastikli elektrikli makaslı modeller sırlı ve epoksi zeminlerde iz bırakmadan çalışır." },
                { soru: "En kısa kiralama süresi nedir?", cevap: "Günlük kiralama yapıyoruz; yarım günlük acil işler için rota uygunsa çözüm üretiyoruz." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Bilecik Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Bilecik ve çevresinde 16-32 metre eklemli/teleskopik bomlu platform kiralama. Fabrika cephesi, silo ve baca işleri; hızlı sevkiyat.",
            h1: "Bilecik Bomlu Platform Kiralama",
            paragraflar: [
                "Fabrika cepheleri, silolar, bacalar ve yüksek depo yapıları — Bilecik sanayisinin dikeyde zorlu işleri için 16-32 metre bomlu platform kiralıyoruz.",
                "Eklemli modeller boru hatlarının ve yapı çıkıntılarının üzerinden aşarak çalışır; teleskopik modeller açık cephede maksimum yatay erişim sağlar. Keşifte işin fotoğrafı üzerinden doğru tipi öneriyoruz.",
                "Mermer ocakları ve taş işleme tesislerinin kırıcı-elek sistemlerinin bakımında da bölgede düzenli çalışıyoruz; tozlu ortam için uygun filtre bakımlı makineler sevk edilir.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Cephe ve orta yükseklik işleri; en yoğun aralık." },
                { baslik: "26-32 m sınıfı", metin: "Silo ve baca işleri; planlı sevkiyat." },
                { baslik: "Ocak/tesis deneyimi", metin: "Mermer ve taş işleme sahalarında çalışma tecrübesi." },
                { baslik: "İSG seti", metin: "Kemer, lanyard ve güncel periyodik kontrol raporuyla teslim." },
            ],
            sss: [
                { soru: "Bomlu platform için operatör veriyor musunuz?", cevap: "Evet; belgeli operatörle günlük veya vardiyalık çalışma organize ediyoruz. Operatörsüz kiralamada personelinizin belgesi zorunludur." },
                { soru: "Silo bakımı için hangi yükseklik gerekir?", cevap: "Bölgedeki tipik çimento ve agrega siloları 20-30 metre aralığındadır; silo yüksekliğinize erişim payı eklenerek makine seçilir. Fotoğrafla ön değerlendirme yapıyoruz." },
                { soru: "Hafta sonu çalışma mümkün mü?", cevap: "Fabrika duruşları çoğunlukla hafta sonu olduğu için cumartesi-pazar teslimat ve çalışma önceden planlanarak yapılır." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Bilecik Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Bilecik'te platform kiralamada teslimat, fiyat, evrak ve makine seçimi hakkında sık sorulan sorular ve net yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Bilecik ve ilçelerinde platform kiralarken en çok merak edilenleri derledik. Başka sorunuz için ana sitemizden ulaşabilirsiniz.",
            ],
            sss: [
                { soru: "Hangi ilçelere hizmet veriyorsunuz?", cevap: "Merkez, Bozüyük, Osmaneli, Söğüt, Gölpazarı ve Pazaryeri dahil il genelinde sevkiyat yapıyoruz." },
                { soru: "Fiyat neye göre değişir?", cevap: "Makine sınıfı, süre, nakliye mesafesi ve operatör talebi dört ana kalemdir; aynı gün yazılı teklif veriyoruz." },
                { soru: "Evrak seti neleri kapsıyor?", cevap: "Periyodik kontrol raporu, makine uygunluk belgeleri ve talep hâlinde operatör belgesi; İSG dosyanıza hazır teslim edilir." },
                { soru: "Rezervasyonu ne kadar önceden yapmalıyım?", cevap: "Standart makineler için 1-2 gün yeterli; bakım duruşu dönemlerinde ve 26 metre üzeri makinelerde bir hafta öncesini öneririz." },
            ],
        },
    ],

    "bozuyukplatform.com.tr": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bozüyük Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Bozüyük OSB'de 8-18 metre makaslı platform kiralama. Seramik, cam ve lojistik tesislerinin bakım işlerine aynı gün teslimat.",
            h1: "Bozüyük Makaslı Platform Kiralama",
            paragraflar: [
                "Bozüyük OSB'deki seramik ve cam fabrikalarının tavan işleri, lojistik depoların raf ve aydınlatma çalışmaları için makaslı platform en verimli çözümdür: geniş sepette iki-üç çalışan, malzemeleriyle birlikte dakikalar içinde çalışma yüksekliğine ulaşır.",
                "8-18 metre aralığında elektrikli ve dizel modeller sunuyoruz. OSB içindeki tesislere teslimat çoğunlukla aynı gün gerçekleşir; acil arıza müdahaleleri için saatlik çözüm de üretiyoruz.",
                "Fırın hatlarının çevresindeki sıcak bölge çalışmalarında makine konumlandırması ve çalışma penceresi planlaması tecrübeli ekibimizce yapılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Üretim alanı içi işler; emisyonsuz, iz bırakmayan lastikler." },
                { baslik: "14-18 m dizel", metin: "Depo dışı sahalar ve cephe işleri." },
                { baslik: "OSB içi acil teslim", metin: "Arıza duruşlarında aynı gün, çoğunlukla saatler içinde sevkiyat." },
                { baslik: "Vardiya uyumu", metin: "Gece vardiyasında teslim ve alım organize edilir." },
            ],
            sss: [
                { soru: "Acil arıza için en hızlı teslimat ne kadar?", cevap: "OSB içine stok durumuna göre aynı gün, çoğu durumda birkaç saat içinde makine ulaştırıyoruz; acil hattımızdan 7/24 planlama yapılır." },
                { soru: "Cam fabrikasında hangi önlemler alınır?", cevap: "Sıcak bölge mesafeleri, zemin koruma ve kıvılcım riski değerlendirmesi tesis İSG ekibiyle birlikte yapılır; uygun lastik ve konumlandırma planı çıkarılır." },
                { soru: "Aylık kiralama avantajlı mı?", cevap: "Sürekli bakım ekibi olan tesisler için aylık kiralama, günlük çağırmaya göre belirgin maliyet avantajı sağlar; makine sahada konuşlu kalır." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Bozüyük Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Bozüyük'te 16-32 metre eklemli ve teleskopik bomlu platform kiralama. Fabrika bacası, silo ve cephe işleri; OSB'ye hızlı teslim.",
            h1: "Bozüyük Bomlu Platform Kiralama",
            paragraflar: [
                "Seramik fabrikalarının bacaları, hammadde siloları ve yüksek depo cepheleri — Bozüyük'ün dikeyde en zorlu işleri 16-32 metre bomlu platformlarla yapılır.",
                "Eklemli modeller boru köprülerinin ve konveyör hatlarının üzerinden aşarak erişim sağlar; teleskopik modeller açık cephede maksimum yüksekliğe ulaşır. İşin fotoğrafı üzerinden doğru bom tipini ücretsiz öneriyoruz.",
                "OSB lojistiğine hâkim ekibimiz, tesis giriş prosedürlerini ve İSG evrak gereksinimlerini önceden tamamlayarak makineyi çalışmaya hazır teslim eder.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Cephe ve konveyör üstü işler; en çok dönen aralık." },
                { baslik: "26-32 m sınıfı", metin: "Baca ve silo bakımı; planlı sevkiyat." },
                { baslik: "Engel aşma", metin: "Eklemli bomla boru ve konveyör hatlarının üzerinden çalışma." },
                { baslik: "Hazır evrak", metin: "OSB tesis girişleri için evrak seti önceden iletilir." },
            ],
            sss: [
                { soru: "Baca bakımı için hangi makine uygun?", cevap: "Baca yüksekliği ve çevresindeki yapılara göre 26-32 metre eklemli modeller tercih edilir; erişim yönü keşifte belirlenir." },
                { soru: "Operatörlü hizmet var mı?", cevap: "Evet; bomlu grupta belgeli operatörle çalışma en yaygın modeldir, vardiyalık planlama yapılır." },
                { soru: "Yıllık bakım anlaşması yapıyor musunuz?", cevap: "Düzenli bakım programı olan tesislerle dönemsel sözleşme yapıyoruz; makine ve operatör takvime bağlanır, birim maliyet düşer." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Bozüyük Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Bozüyük OSB ve çevresinde platform kiralamada teslimat, fiyat, evrak ve acil durum süreçleri hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Bozüyük OSB ve çevresinde platform kiralarken en çok gelen soruları derledik. Farklı bir sorunuz için ana sitemizden bize ulaşın.",
            ],
            sss: [
                { soru: "OSB dışına da hizmet veriyor musunuz?", cevap: "Evet; Bozüyük merkez, İnönü hattı ve çevre beldelere de sevkiyat yapıyoruz." },
                { soru: "Fiyat teklifi ne kadar sürede gelir?", cevap: "Çalışma yüksekliği, süre ve adres bilgisiyle aynı gün içinde yazılı teklif iletiyoruz." },
                { soru: "Gece vardiyasında teslim mümkün mü?", cevap: "Evet; OSB tesislerinin vardiya düzenine uygun gece teslim ve alım önceden planlanarak yapılır." },
                { soru: "Makine arızalanırsa süreç nasıl işler?", cevap: "Mobil servis ekibimiz müdahale eder; makul sürede çözülemeyen arızalarda makine ücretsiz değiştirilir, kayıp gün ücretlendirilmez." },
            ],
        },
    ],

    "canakkaleplatform.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Çanakkale Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Çanakkale, Biga ve Çan'da 8-18 metre makaslı platform kiralama. Enerji, seramik ve gıda tesislerinin bakım işlerine planlı teslimat.",
            h1: "Çanakkale Makaslı Platform Kiralama",
            paragraflar: [
                "Biga'daki enerji ve metal tesisleri, Çan'daki seramik fabrikaları ve merkez hattındaki gıda işletmeleri — Çanakkale'de makaslı platform talebinin ana kaynakları sanayi bakım işleridir.",
                "8-18 metre aralığında elektrikli ve dizel modeller sunuyoruz: üretim alanlarında emisyonsuz elektrikli modeller, açık sahalarda 4x4 dizel modeller çalışır.",
                "Bandırma hattındaki filomuzdan Çanakkale'ye sevkiyat planlı günlerde ertesi gün teslim olarak organize edilir; proje bazlı işlerde makine sahada konuşlu kalır ve günlük nakliye maliyeti ortadan kalkar.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat ve bakım işleri; gıda tesislerine uygun." },
                { baslik: "14-18 m dizel", metin: "Açık saha, cephe ve depo dışı çalışmalar." },
                { baslik: "Sahada konuşlu model", metin: "Uzun projelerde makine sahada kalır; nakliye tek sefer ödenir." },
                { baslik: "Planlı sevkiyat", metin: "Bandırma hattından ertesi gün teslim; duruş takvimine göre rezervasyon." },
            ],
            sss: [
                { soru: "Çanakkale'ye teslimat süresi nedir?", cevap: "Planlı günlerde ertesi gün teslim ediyoruz; Biga ve Çan hattı rotamızda olduğu için bu bölgelere planlama daha esnektir." },
                { soru: "Kısa günlük iş için nakliye maliyeti yüksek olmaz mı?", cevap: "Tek günlük işlerde bölgedeki rota günlerimize denk getirerek nakliyeyi paylaştırıyoruz; tarih esnekliği maliyeti belirgin düşürür." },
                { soru: "Gıda tesisinde hangi model çalışır?", cevap: "Emisyonsuz elektrikli modeller hijyen gereksinimli alanlarda tercih edilir; iz bırakmayan lastik standarttır." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Çanakkale Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Çanakkale genelinde 16-32 metre bomlu platform kiralama. Rüzgâr santrali, liman ve fabrika cephesi işleri; belgeli operatör desteği.",
            h1: "Çanakkale Bomlu Platform Kiralama",
            paragraflar: [
                "Çanakkale'nin rüzgâr santralleri, liman tesisleri ve fabrika cepheleri yüksekte ve uzakta çalışma gerektirir; 16-32 metre eklemli ve teleskopik bomlu platformlarımız bu işlerin makinesidir.",
                "Rüzgâr santrali sahalarında türbin kule dibi ekipmanları, trafo binaları ve saha aydınlatması işlerinde düzenli çalışıyoruz; santral sahalarının İSG prosedürlerine uygun belgeli operatör desteği sağlıyoruz.",
                "Liman çalışmalarında vinç ve aydınlatma direği bakımları için teleskopik modeller, gemi yanaşma bölgelerindeki engelli erişimlerde eklemli modeller kullanılır.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklik işleri." },
                { baslik: "26-32 m sınıfı", metin: "Liman ekipmanları ve yüksek yapı işleri; planlı temin." },
                { baslik: "Santral deneyimi", metin: "RES sahalarında İSG prosedürlü çalışma tecrübesi." },
                { baslik: "Operatör desteği", metin: "Belgeli operatörle günlük veya proje bazlı çalışma." },
            ],
            sss: [
                { soru: "Rüzgârlı bölgede bomlu platform güvenli mi?", cevap: "Üretici rüzgâr limiti (genellikle 12,5 m/sn) aşıldığında çalışma durdurulur; Çanakkale planlamasında günlük rüzgâr tahmini çalışma penceresine dahil edilir." },
                { soru: "Santral sahası giriş evrakları hazır mı?", cevap: "Evet; periyodik kontrol raporu, sigorta ve operatör belgeleri saha girişi için önceden iletilir." },
                { soru: "Gelibolu yakasına hizmet var mı?", cevap: "Evet, planlı sevkiyatla Gelibolu ve Eceabat hattına da teslimat yapıyoruz; feribot geçişi programa eklenir." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Çanakkale Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Çanakkale'de platform kiralamada teslimat planı, fiyat, saha prosedürleri ve makine seçimi hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Çanakkale, Biga, Çan ve Gelibolu hattında platform kiralarken en çok merak edilenleri derledik. Farklı sorunuz için ana sitemizden ulaşın.",
            ],
            sss: [
                { soru: "Hangi bölgelere hizmet veriyorsunuz?", cevap: "Merkez, Biga, Çan, Ezine, Gelibolu ve Eceabat dahil il genelinde planlı sevkiyat yapıyoruz." },
                { soru: "Rezervasyon ne kadar önceden yapılmalı?", cevap: "Bölgeye sevkiyat planlı günlerde yapıldığı için 2-3 gün öncesinden rezervasyon öneririz; acil durumlar için ayrıca çözüm üretiyoruz." },
                { soru: "Uzun projede fiyat nasıl hesaplanır?", cevap: "Makine sahada konuşlu kalır, aylık birim fiyat uygulanır ve nakliye tek sefer alınır; bu model kısa kiralamalara göre belirgin avantajlıdır." },
                { soru: "Evrak setinde neler var?", cevap: "Periyodik kontrol raporu, sigorta, makine uygunluk belgeleri ve talep hâlinde operatör belgeleri; İSG dosyanıza hazır iletilir." },
            ],
        },
    ],

    "platformmanisa.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Manisa Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Manisa OSB, Turgutlu, Salihli ve Akhisar'da 8-18 metre makaslı platform kiralama. Elektronik ve gıda tesislerine vardiya uyumlu teslimat.",
            h1: "Manisa Makaslı Platform Kiralama",
            paragraflar: [
                "Manisa OSB'deki elektronik fabrikaları, gıda işleme tesisleri ve lojistik depolar makaslı platform talebinin merkezi: tavan tesisatı, sprinkler, aydınlatma ve havalandırma işleri bu makinelerle yapılır.",
                "8-18 metre aralığında elektrikli ve dizel modeller sunuyoruz. Elektronik üretim alanlarının temiz oda koşullarına uygun, iz bırakmayan lastikli ve düşük gürültülü elektrikli modeller filomuzun ağırlıklı grubudur.",
                "İzmir filomuzdan Manisa'ya teslimat çoğu makinede aynı gün planlanır; OSB tesislerinin vardiya düzenine uygun gece teslim ve alım organize edilir.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Elektronik ve gıda tesislerinin iç mekân standardı." },
                { baslik: "14-18 m dizel", metin: "Depo dışı sahalar, cephe ve çatı kenarı işleri." },
                { baslik: "Vardiya uyumlu teslim", metin: "Gece vardiyasında teslim/alım; üretim kesintisi olmaz." },
                { baslik: "Temiz alan uyumu", metin: "Düşük gürültü ve emisyonsuz çalışma; hijyen bölgelerine uygun." },
            ],
            sss: [
                { soru: "Üretimi durdurmadan çalışma mümkün mü?", cevap: "Elektrikli modellerle hat üzerindeki işler vardiya aralarında bölümler hâlinde planlanır; gece teslim-alım ile üretim kesintisi en aza iner." },
                { soru: "Manisa'ya teslimat süresi nedir?", cevap: "İzmir filomuzdan OSB ve merkez hatta çoğunlukla aynı gün; Salihli ve Akhisar'a planlı ertesi gün teslim ediyoruz." },
                { soru: "Gıda tesisi için hijyen şartları sağlanıyor mu?", cevap: "Makineler temizlenmiş ve hijyen bölgesine uygun lastiklerle teslim edilir; talep hâlinde makine temizlik kaydı da sunulur." },
            ],
        },
        {
            slug: "bomlu-platform-kiralama",
            baslik: "Manisa Bomlu Platform Kiralama (16-32 m)",
            aciklama: "Manisa genelinde 16-32 metre eklemli ve teleskopik bomlu platform kiralama. Fabrika cephesi, silo ve altyapı işleri; ücretsiz keşif.",
            h1: "Manisa Bomlu Platform Kiralama",
            paragraflar: [
                "Fabrika cepheleri, hammadde siloları, yüksek depo yapıları ve OSB altyapı direkleri — Manisa'da yükseğe ve uzağa erişim gerektiren işleri 16-32 metre bomlu platformlarla yapıyoruz.",
                "Eklemli modeller konveyör ve boru hatlarının üzerinden aşarak çalışır; teleskopik modeller açık cephede maksimum erişim sağlar. Keşifte işin fotoğrafı üzerinden doğru tipi ücretsiz öneriyoruz.",
                "Turgutlu ve Akhisar'daki gıda işleme tesislerinin silo bakımlarında dönemsel yoğunluk yaşanır; hasat sezonu öncesi erken rezervasyon öneriyoruz.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Cephe ve konveyör üstü işler; en çok kiralanan aralık." },
                { baslik: "26-32 m sınıfı", metin: "Silo, baca ve yüksek yapı işleri; planlı sevkiyat." },
                { baslik: "Sezon planlaması", metin: "Gıda sanayinin hasat öncesi bakım dönemine öncelikli rezervasyon." },
                { baslik: "İSG seti", metin: "Kemer, lanyard ve güncel evraklarla teslim." },
            ],
            sss: [
                { soru: "Silo bakımı için hangi yükseklik gerekir?", cevap: "Bölgedeki tipik gıda siloları 18-28 metre aralığındadır; silo yüksekliğine erişim payı eklenerek makine seçilir. Fotoğrafla ön değerlendirme yapıyoruz." },
                { soru: "Operatörlü kiralama mümkün mü?", cevap: "Evet; bomlu grupta belgeli operatörle günlük veya vardiyalık çalışma organize ediyoruz." },
                { soru: "OSB dışındaki ilçelere hizmet var mı?", cevap: "Turgutlu, Salihli, Akhisar ve Soma dahil il genelinde planlı sevkiyat yapıyoruz." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Manisa Platform Kiralama — Sık Sorulan Sorular",
            aciklama: "Manisa'da platform kiralamada teslimat, vardiya uyumu, fiyat ve evraklar hakkında sık sorulan sorular ve net yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Manisa OSB ve il genelinde platform kiralarken en çok gelen soruları yanıtladık. Farklı bir sorunuz için ana sitemizden bize ulaşın.",
            ],
            sss: [
                { soru: "Hangi bölgelere hizmet veriyorsunuz?", cevap: "Manisa OSB, merkez, Turgutlu, Salihli, Akhisar ve Soma başta olmak üzere il genelinde sevkiyat yapıyoruz." },
                { soru: "Gece teslimat gerçekten yapılıyor mu?", cevap: "Evet; OSB tesislerinin vardiya saatlerine uyumlu gece teslim ve alım, önceden planlanarak düzenli yapılır." },
                { soru: "Fiyat teklifi için ne gerekli?", cevap: "Çalışma yüksekliği, işin süresi, zemin tipi ve adres; aynı gün yazılı teklif iletiyoruz. Keşif ücretsizdir." },
                { soru: "Uzun dönem kiralamada avantaj nedir?", cevap: "Aylık sözleşmede birim fiyat düşer, nakliye çoğunlukla dahil edilir ve makine sahada konuşlu kalır." },
            ],
        },
    ],

    "manisaforklift.com": [
        {
            slug: "elektrikli-forklift-kiralama",
            baslik: "Manisa Elektrikli Forklift Kiralama (1,5-3 ton)",
            aciklama: "Manisa OSB'de depo içi kullanım için 1,5-3 ton elektrikli forklift kiralama. Triplex asansör, temiz alan uyumu; vardiya uyumlu teslimat.",
            h1: "Manisa Elektrikli Forklift Kiralama",
            paragraflar: [
                "Manisa OSB'deki elektronik ve gıda tesislerinin kapalı depo operasyonları elektrikli forkliftlerle döner: emisyonsuz ve sessiz çalışma, hijyen ve temiz alan gereksinimlerine doğrudan uyum sağlar.",
                "1,5-3 ton kapasite aralığında triplex asansörlü ve yan kaydırmalı modeller sunuyoruz; standart depo raf sistemlerinde 6 metreye kadar istif yapılır.",
                "Çift vardiya çalışan tesisler için yedek akü veya vardiya arası hızlı şarj planlaması yapıyoruz; makine vardiya değişiminde beklemez.",
            ],
            maddeler: [
                { baslik: "1,5-2 ton", metin: "Dar koridorlu depolar ve hafif palet trafiği." },
                { baslik: "2,5-3 ton", metin: "Üretim hattı besleme ve standart palet işleri; en yoğun sınıf." },
                { baslik: "Triplex asansör", metin: "6 metreye kadar istif; alçak kapı girişlerine uygun." },
                { baslik: "Gıda hijyen uyumu", metin: "Temizlenmiş makine ve uygun lastiklerle teslim." },
            ],
            sss: [
                { soru: "Elektrikli forklift çift vardiyada yeter mi?", cevap: "Tek aküyle tipik olarak bir vardiya + kısmi ikinci vardiya çalışılır; çift vardiya için yedek akü veya hızlı şarj çözümü planlıyoruz." },
                { soru: "Kiralamada bakım kime ait?", cevap: "Periyodik bakım ve arıza müdahalesi bize aittir; Manisa'ya mobil servisle aynı gün müdahale ediyoruz." },
                { soru: "Şarj için altyapı gerekir mi?", cevap: "Modele göre 220V veya 380V priz yeterlidir; keşifte elektrik altyapınıza uygun model belirlenir." },
            ],
        },
        {
            slug: "dizel-forklift-kiralama",
            baslik: "Manisa Dizel ve LPG Forklift Kiralama (3-10 ton)",
            aciklama: "Manisa'da açık saha ve rampa işleri için 3-10 ton dizel/LPG forklift kiralama. OSB, Turgutlu ve Akhisar'a hızlı teslimat.",
            h1: "Manisa Dizel ve LPG Forklift Kiralama",
            paragraflar: [
                "Açık stok sahaları, yükleme rampaları ve tır-konteyner boşaltma işleri Manisa'da dizel ve LPG forkliftlerle döner. OSB'nin sevkiyat trafiğinde 3-5 ton sınıfı en yoğun kiralanan gruptur.",
                "7-10 ton ağır hizmet sınıfı; makine parçaları, bobin ve büyük ebatlı ambalajlı ürünlerin elleçlenmesinde kullanılır. Uzun çatal ve kaydırıcı ataşman seçenekleri mevcuttur.",
                "LPG modeller iyi havalandırılan kapalı alanlarda da çalışabilir; tüp değişimiyle kesintisiz vardiya sürdürülür.",
            ],
            maddeler: [
                { baslik: "3-5 ton dizel/LPG", metin: "Rampa ve açık saha işlerinin standardı." },
                { baslik: "7-10 ton ağır hizmet", metin: "Ağır sanayi yükleri; planlı temin." },
                { baslik: "Konteyner boşaltma", metin: "Uzun çatal seçeneğiyle konteyner içi elleçleme." },
                { baslik: "Saha servisi", metin: "Manisa genelinde mobil servisle yerinde bakım." },
            ],
            sss: [
                { soru: "Operatörlü saatlik hizmet var mı?", cevap: "Evet; tır ve konteyner boşaltma işleri için makine + belgeli operatör birlikte gelir, iş bitince ayrılır. OSB içinde en çok tercih edilen modeldir." },
                { soru: "Aylık kiralamada yakıt kime ait?", cevap: "Yakıt kiracıya, bakım-servis-lastik bize aittir; toplam maliyet öngörülebilir kalır." },
                { soru: "Hangi ilçelere teslimat yapıyorsunuz?", cevap: "OSB ve merkez başta olmak üzere Turgutlu, Salihli, Akhisar ve Soma'ya planlı teslimat yapıyoruz." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Manisa Forklift Kiralama — Sık Sorulan Sorular",
            aciklama: "Manisa'da forklift kiralamada kapasite seçimi, belge, teslimat ve fiyatlandırma hakkında sık sorulan sorular ve yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Manisa'da forklift kiralarken en sık gelen soruları derledik. Kapasite seçiminde kararsızsanız en ağır yükünüzü ve palet ölçünüzü iletin; doğru makineyi aynı gün önerelim.",
            ],
            sss: [
                { soru: "Forklift kapasitesi nasıl seçilir?", cevap: "En ağır yük ve yük merkezi mesafesi belirleyicidir; standart 500 mm yük merkezinde etiket kapasitesi geçerlidir, uzayan yükte kapasite düşer. Yük bilgisiyle seçimi biz yapıyoruz." },
                { soru: "Hangi belge gerekir?", cevap: "G sınıfı operatör belgesi zorunludur; belgeli personel yoksa operatörlü kiralama sunuyoruz." },
                { soru: "Teslimat süresi nedir?", cevap: "Stoktaki modellerde OSB ve merkez hatta aynı gün, ilçelere planlı ertesi gün teslim ediyoruz." },
                { soru: "Kiralık makinenin sigortası kime ait?", cevap: "Makine sigortası bize aittir; operasyon kaynaklı üçüncü şahıs zararlarının sorumluluğu sözleşmede netleştirilir." },
            ],
        },
    ],

    "platformakademisi.com": [
        {
            slug: "myk-operator-belgesi",
            baslik: "MYK Operatör Belgesi: Başvurudan Sınava Yol Haritası",
            aciklama: "Yükseltici platform operatörü için MYK Ulusal Yeterlilik belgesi: başvuru adımları, sınav içeriği, geçerlilik süresi ve maliyet çerçevesi.",
            h1: "MYK Operatör Belgesi Yol Haritası",
            paragraflar: [
                "Türkiye'de tehlikeli ve çok tehlikeli işlerde çalışanların Mesleki Yeterlilik Kurumu (MYK) belgesine sahip olması yasal zorunluluktur; yükseltici platform operatörlüğü de bu kapsamdadır.",
                "Belge, MYK tarafından yetkilendirilmiş belgelendirme kuruluşlarından alınır. Süreç üç adımdan oluşur: başvuru ve evrak teslimi, teorik sınav (iş güvenliği, makine bilgisi, işaretleşme) ve pratik sınav (kurulum, manevra, acil indirme senaryoları).",
                "Sınav başarımında belge düzenlenir ve MYK portalında sorgulanabilir. Belgenin geçerlilik süresi ilgili ulusal yeterlilikte tanımlanır; süre sonunda gözetim/yenileme prosedürü uygulanır.",
                "İşverenler için pratik not: belge ücretleri, sınavda başarılı olunması hâlinde teşvik kapsamında iade edilebilmektedir; güncel teşvik koşullarını belgelendirme kuruluşunuzdan teyit edin.",
            ],
            maddeler: [
                { baslik: "1. Adım — Kuruluş seçimi", metin: "MYK yetkilendirilmiş kuruluş listesinden ilinize yakın merkezi seçin." },
                { baslik: "2. Adım — Evrak", metin: "Kimlik, sağlık uygunluğu ve başvuru formu; kuruluşa göre ufak farklar olabilir." },
                { baslik: "3. Adım — Teorik sınav", metin: "Çoktan seçmeli; İSG, makine bilgisi ve mevzuat soruları." },
                { baslik: "4. Adım — Pratik sınav", metin: "Gerçek makine üzerinde kurulum, manevra ve acil durum uygulaması." },
            ],
            sss: [
                { soru: "Belge ne kadar sürede alınır?", cevap: "Başvuru yoğunluğuna göre değişir; evrak tamamsa sınav randevusu genellikle birkaç hafta içinde verilir, belge sınav sonrası birkaç hafta içinde düzenlenir." },
                { soru: "Ehliyet (G sınıfı) MYK belgesinin yerine geçer mi?", cevap: "Hayır; iki belge farklı mevzuatlara dayanır. Yükseltici platform için MYK yeterlilik belgesi esastır." },
                { soru: "Sınavda başarısız olursam ne olur?", cevap: "Başarısız olunan bölüm (teorik veya pratik) belirli süre içinde tekrar edilebilir; yalnız o bölümün sınavına yeniden girilir." },
            ],
        },
        {
            slug: "ipaf-egitimi-nedir",
            baslik: "IPAF Eğitimi Nedir? PAL Card Kategorileri ve Başvuru",
            aciklama: "IPAF operatör eğitimi ve PAL Card: 3a/3b kategorileri, eğitim içeriği, geçerlilik süresi ve Türkiye'de nereden alınacağı.",
            h1: "IPAF Eğitimi ve PAL Card",
            paragraflar: [
                "IPAF (International Powered Access Federation), yükseltici platform sektörünün uluslararası federasyonudur; eğitim programını tamamlayan operatörlere PAL Card (Powered Access Licence) düzenlenir.",
                "Kart, makine kategorilerine göre verilir: 3a dikey (makaslı) platformlar, 3b bomlu platformlar en yaygın kategorilerdir; statik kategoriler (1a/1b) araç üstü ve sabit kurulumlu makineleri kapsar.",
                "Eğitim bir gün sürer: teorik bölümde mevzuat, risk değerlendirme ve makine bilgisi işlenir; pratik bölümde kurulum, manevra ve acil indirme uygulanır. Sonunda yazılı ve uygulamalı değerlendirme yapılır.",
                "PAL Card beş yıl geçerlidir ve uluslararası projelerde, kurumsal denetimli şantiyelerde sıkça şart koşulur. Türkiye'de IPAF onaylı eğitim merkezleri üzerinden alınır; MYK belgesinin yasal zorunluluğunu ortadan kaldırmaz, onu tamamlar.",
            ],
            maddeler: [
                { baslik: "Kategori 3a", metin: "Makaslı ve dikey platformlar; depo ve tesis işlerinin standardı." },
                { baslik: "Kategori 3b", metin: "Eklemli ve teleskopik bomlu platformlar; şantiye ve cephe işleri." },
                { baslik: "Süre ve geçerlilik", metin: "1 günlük eğitim, 5 yıl geçerli kart." },
                { baslik: "Kimler almalı", metin: "Uluslararası projede çalışacak veya kurumsal şantiyelere girecek operatörler." },
            ],
            sss: [
                { soru: "IPAF eğitimi Türkçe veriliyor mu?", cevap: "Evet; Türkiye'deki onaylı merkezlerde eğitim Türkçe verilir, kart uluslararası formatta düzenlenir." },
                { soru: "MYK belgem varsa IPAF gerekir mi?", cevap: "Yasal olarak gerekmez; ancak yabancı ana yüklenicili projelerde ve bazı kurumsal sahalarda sözleşme gereği istenir." },
                { soru: "Kart süresi dolunca ne yapılır?", cevap: "Yenileme eğitimiyle kart beş yıl daha uzatılır; süresi geçmiş kartla sahaya giriş çoğu projede reddedilir." },
            ],
        },
        {
            slug: "gunluk-kontrol-listesi",
            baslik: "Yükseltici Platformda Günlük Kontrol Listesi",
            aciklama: "Vardiya öncesi yükseltici platform kontrolü: 12 maddelik pratik liste, kayıt tutma ve kontrolde çıkan arızada yapılacaklar.",
            h1: "Günlük (Vardiya Öncesi) Kontrol Listesi",
            paragraflar: [
                "Yükseltici platform kazalarının önemli bölümü, vardiya öncesi beş dakikalık kontrolle yakalanabilecek arızalardan çıkar. Günlük kontrol operatörün yükümlülüğüdür ve kayıt altına alınmalıdır.",
                "Aşağıdaki liste saha pratiğine göre derlenmiştir; üreticinin kullanım kılavuzundaki modele özgü kontroller her zaman önceliklidir.",
                "Kontrolde arıza bulunursa makine kullanılmaz: makineye 'KULLANMAYIN' etiketi asılır, vardiya amiri ve kiralama firması bilgilendirilir. Arızalı makineyle 'kısa bir iş' dahi yapılmamalıdır — kayıtlardaki ciddi kazaların tekrar eden senaryosu budur.",
            ],
            maddeler: [
                { baslik: "1. Görsel kontrol", metin: "Gövde, bom ve sepette çatlak, deformasyon, kaçak izi." },
                { baslik: "2. Lastik ve jantlar", metin: "Hasar, basınç, bijon gevşekliği." },
                { baslik: "3. Hidrolik sistem", metin: "Hortumlarda sızıntı, yağ seviyesi." },
                { baslik: "4. Akü / yakıt", metin: "Şarj-yakıt seviyesi, bağlantı uçları." },
                { baslik: "5. Kumandalar", metin: "Alt ve üst kumanda fonksiyon testi; ölü adam pedalı." },
                { baslik: "6. Acil stop", metin: "Alt ve üst acil stop butonlarının testi." },
                { baslik: "7. Acil indirme", metin: "Manuel indirme düzeneğinin çalışması — kazalarda hayat kurtaran kontrol." },
                { baslik: "8. Korkuluk ve kapı", metin: "Korkuluk sağlamlığı, giriş kapısı kilidi." },
                { baslik: "9. Denge sensörü", metin: "Tilt alarmı ve limit anahtarlarının testi." },
                { baslik: "10. Sesli/ışıklı uyarılar", metin: "Korna, çakar ve hareket alarmı." },
                { baslik: "11. Çalışma alanı", metin: "Zemin uygunluğu, üstte enerji hattı, çevre şeritleme." },
                { baslik: "12. KKD", metin: "Bomlu makinede kemer + lanyard; baret ve yelek." },
            ],
            sss: [
                { soru: "Kontrolü kim yapmalı?", cevap: "Makineyi o vardiyada kullanacak belgeli operatör yapar; İSG uzmanı veya vardiya amiri kayıtları denetler." },
                { soru: "Kayıt nasıl tutulmalı?", cevap: "Basılı form veya dijital checklist kullanılabilir; tarih, saat, makine seri no ve operatör imzası asgari alanlardır. Kayıtlar denetimde istenir." },
                { soru: "Kiralık makinede arıza çıkarsa sorumluluk kimde?", cevap: "Arıza bildirimi yapıldığı andan itibaren kiralama firmasınındır; makine değişimi veya onarım süreci sözleşme koşullarına göre işletilir. Bildirilmeden kullanılmaya devam edilen makinedeki kaza sorumluluğu kiracıya geçer." },
            ],
        },
    ],
};

export function hostAltSayfalari(host: string): AltSayfa[] {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return altSayfalar[temiz] ?? [];
}

export function altSayfaBul(host: string, slug: string): AltSayfa | undefined {
    return hostAltSayfalari(host).find((s) => s.slug === slug);
}

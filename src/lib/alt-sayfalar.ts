import {
    platformAkademisiIpafParagraflari,
    platformAkademisiKontrolParagraflari,
    platformAkademisiMykParagraflari,
} from "./platform-akademisi-icerik";

export interface AltSayfa {
    slug: string;
    baslik: string; // <title> ve bağlantı metni
    aciklama: string; // meta description
    h1: string;
    paragraflar: string[];
    maddeler?: { baslik: string; metin: string }[];
    sss?: { soru: string; cevap: string }[];
    kaynaklar?: { ad: string; url: string; not?: string }[];
}

export const altSayfalar: Record<string, AltSayfa[]> = {
    "eklemliplatform.com.tr": [
        {
            slug: "dizel-eklemli-platform-kiralama",
            baslik: "Dizel Eklemli Platform Kiralama (18-43 m)",
            aciklama: "Şantiye ve açık saha işleri için dizel eklemli platform seçimi. Çalışma yüksekliği, yatay erişim, zemin ve sevkiyat koşulları teklifte doğrulanır.",
            h1: "Dizel Eklemli Platform Kiralama",
            paragraflar: [
                "Dizel eklemli platformlar, açık saha ve engel aşma gerektiren işlerde değerlendirilen seçeneklerdendir. Çekiş, izin verilen eğim, zemin basıncı ve kullanım alanı modele göre değişir; stabilize yol, rampa veya tesviyesi tamamlanmamış zeminde uygunluk ancak saha incelemesi ile üretici verileri birlikte değerlendirilerek belirlenir.",
                "Gerekli yükseklik sınıfı; cephe kaplama, çelik konstrüksiyon, dış cephe, aydınlatma ve tabela işinin erişim ölçülerine göre belirlenir. Model ve kapasite uygunluğu güncel stok üzerinden teyit edilir.",
                "Eklemli bom yapısı, düz teleskopik bomların aksine engelin üzerinden aşarak çalışmaya izin verir: bir çatı parapetinin arkasına, bir boru hattının ötesine veya ağaçların üzerinden cepheye bu makinelerle erişilir.",
            ],
            maddeler: [
                { baslik: "18-26 m sınıfı", metin: "Cephe ve montaj işlerinde değerlendirilen aralık; erişim geometrisi ve nakliye biçimi seçilen modelin teknik ölçülerine göre teyit edilir." },
                { baslik: "28-43 m sınıfı", metin: "Yüksek yapı cepheleri, silo ve endüstriyel baca işleri için; sahada geniş kurulum alanı ister." },
                { baslik: "4x4 ve jack sistemleri", metin: "Eğimli ve gevşek zeminlerde çekiş ve dengeleme desteği sağlar." },
                { baslik: "Operatör seçeneği", metin: "Operatör talebi, yeterlilik belgesi ve tarih uygunluğu teklif sırasında doğrulanır." },
            ],
            sss: [
                { soru: "Dizel eklemli platform hangi zeminlerde çalışır?", cevap: "Stabilize yol, sıkıştırılmış dolgu ve şantiye zemini dahil çoğu açık saha zemininde çalışır. Çamurlu ve taşıma kapasitesi belirsiz zeminlerde önce zemin uygunluğu değerlendirilir; gerekirse çelik plaka serilir." },
                { soru: "Kiralama için asgari süre nedir?", cevap: "Asgari süre ve dönemsel fiyat, seçilen makine ile proje tarihine göre yazılı teklifte belirtilir." },
                { soru: "Nakliye kime aittir?", cevap: "Nakliye sorumluluğu, çıkış noktası, teslimat adresi ve ücret kalemi yazılı teklifte açıkça belirtilir." },
                { soru: "Operatör için hangi belgeler gerekir?", cevap: "Gereklilik; yapılan görev, ekipman sınıfı, işveren prosedürü ve yürürlükteki mevzuata göre belirlenir. Göreve başlamadan önce güncel şartlar yetkili İSG birimi ve resmî kaynaklardan doğrulanmalıdır." },
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
                "Çalışma süresi akü tipi, makine modeli, yük, sıcaklık ve kullanım yoğunluğuna göre değişir. Şarj altyapısı ve vardiya planı seçilen modelin üretici verileriyle birlikte değerlendirilir.",
            ],
            maddeler: [
                { baslik: "İç mekân uyumu", metin: "Sıfır emisyon ve düşük ses; gıda tesisleri ve hastanelerde vardiya saatinde çalışabilir." },
                { baslik: "Dar alan manevrası", metin: "Kendi ekseninde dönüş ve kompakt şasi; raf aralarında ve koridorlarda rahat hareket." },
                { baslik: "Beyaz lastik", metin: "Epoksi, mermer ve seramik zeminlerde iz bırakmaz." },
                { baslik: "Aşırı yük ve eğim sensörleri", metin: "Standart güvenlik donanımı; limit dışı kullanım makine tarafından engellenir." },
            ],
            sss: [
                { soru: "Elektrikli platform dış mekânda kullanılabilir mi?", cevap: "Düz ve sert zeminli dış alanlarda kısa süreli kullanılabilir; ancak rüzgâr limiti ve zemin hassasiyeti nedeniyle asıl çalışma alanı kapalı mekânlardır. Açık saha işleri için dizel modeller önerilir." },
                { soru: "Şarj için ne gerekli?", cevap: "Gerekli voltaj ve şarj süresi modele göre değişir; teslimattan önce teknik föy ve saha elektrik altyapısı birlikte kontrol edilmelidir." },
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
                "Eklemli platform seçiminde sık sorulan başlıkları derledik. Kesin kapasite, belge, teslimat, süre ve ücret bilgisi seçilen makine ile saha koşulları doğrulandıktan sonra yazılı teklifte verilir.",
            ],
            sss: [
                { soru: "Eklemli platform ile teleskopik platform arasındaki fark nedir?", cevap: "Teleskopik bom düz bir doğrultuda uzar ve aynı yükseklikte daha fazla yatay erişim sunar; eklemli bom ise 'kırılan' yapısıyla engellerin üzerinden aşarak çalışır. Cephe önünde engel (saçak, boru, ağaç, parapet) varsa eklemli, açık alanda maksimum erişim gerekiyorsa teleskopik doğru seçimdir." },
                { soru: "Fiyat neye göre belirlenir?", cevap: "Makine sınıfı, süre, nakliye mesafesi, operatör talebi ve saha koşulları fiyatı etkiler; geçerlilik süresi bulunan yazılı teklif esas alınır." },
                { soru: "Hangi evraklar gerekir?", cevap: "Periyodik kontrol, makine uygunluğu ve operatör yeterliliği gibi saha tarafından istenen belgeler önceden listelenir; mevcut belge seti sözleşme öncesinde doğrulanır." },
                { soru: "Yağmurda çalışılır mı?", cevap: "Yağış, rüzgâr, görüş ve zemin koşulları birlikte değerlendirilir. Çalışma kararı sabit bir genel sınıra göre değil, seçilen modelin kullanım kılavuzu, saha risk değerlendirmesi ve sorumlu personelin kararıyla verilir." },
                { soru: "Ne kadar önceden rezervasyon gerekli?", cevap: "Rezervasyon süresi güncel stok, makine sınıfı, nakliye ve proje tarihine bağlıdır; uygunluk teyidi alınmadan teslimat tarihi kesin kabul edilmemelidir." },
            ],
        },
    ],

    "bandirmamanlift.net": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bandırma Makaslı Platform Kiralama (8-22 m)",
            aciklama: "Bandırma, Erdek, Gönen ve Biga'da makaslı platform seçimi. Yükseklik, zemin, saha girişi ve teslimat koşulları teklifte doğrulanır.",
            h1: "Bandırma Makaslı Platform Kiralama",
            paragraflar: [
                "Makaslı platformlar, geniş sepetiyle birden fazla çalışanın malzemeyle birlikte dikey yükselmesine izin verir; Bandırma bölgesindeki fabrika bakımı, liman ekipmanı onarımı ve depo işlerinin en çok kiralanan makinesidir.",
                "Elektrikli veya dizel makine seçimi; çalışma yüksekliği, zemin, iç-dış mekân ve saha giriş şartlarına göre yapılır. Model ile teslimat tarihi güncel uygunluk kontrolünden sonra yazılı teklifte netleşir.",
                "Elektrikli modeller kapalı üretim alanlarında ve gıda tesislerinde, dizel 4x4 modeller tersane sahaları ve açık depolama alanlarında kullanılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat ve aydınlatma işlerinin standardı; dar koridor geçişine uygun." },
                { baslik: "14-22 m dizel", metin: "Tersane, liman sahası ve dış cephe işleri için; bozuk zemin yeteneği." },
                { baslik: "Geniş sepet + uzatma", metin: "Malzemeyle birlikte 2-3 kişi; uzatma tablasıyla erişim alanı büyür." },
                { baslik: "Sevkiyat planı", metin: "Bandırma, Erdek, Gönen ve Biga teslimatı makine, tarih ve nakliye uygunluğuna göre planlanır." },
            ],
            sss: [
                { soru: "Makaslı platform kaç kişi taşır?", cevap: "Modele göre sepet kapasitesi 230-450 kg arasındadır; pratikte 2-3 çalışan ve el aletleri güvenle taşınır." },
                { soru: "Liman sahasında çalışma için özel izin gerekir mi?", cevap: "Liman işletmesinin saha giriş prosedürü önceden öğrenilmelidir. Talep edilen periyodik kontrol, sigorta ve operatör belgelerinin mevcudiyeti sözleşmeden önce doğrulanır." },
                { soru: "Tersane işlerinde hangi model uygun?", cevap: "Açık saha ve halat/blok engelleri nedeniyle 4x4 dizel makaslı veya duruma göre eklemli veya teleskopik platform önerilir; keşifte netleştiririz." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Bandırma Eklemli ve Teleskopik Platform Kiralama (16-43 m)",
            aciklama: "Bandırma ve çevresinde 16-43 metre eklemli ve teleskopik platform seçenekleri. Silo, enerji tesisi ve cephe işleri için saha koşullarına göre planlama.",
            h1: "Bandırma Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Eklemli ve teleskopik platformlar hem yükseğe hem de yatayda uzağa erişim gerektiren işlerin makinesidir. Bandırma bölgesinde silo bakımları, un ve yem fabrikalarının çatı-cephe işleri, enerji tesislerindeki yapısal kontroller bu grubun tipik kullanım alanlarıdır.",
                "Eklemli veya teleskopik seçiminde hedef yükseklik, yatay erişim ve engel geometrisi dikkate alınır; uygun model ve kapasite güncel stok üzerinden doğrulanır.",
                "Eklemli ve teleskopik platform kullanımında üretici talimatları, risk değerlendirmesi ve geçerli saha kuralları esas alınır. KKD, operatör ve belge gereksinimleri iş başlamadan önce sorumlu taraflarla yazılı olarak netleştirilir.",
            ],
            maddeler: [
                { baslik: "16-26 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklikteki silo işleri; bölgede en çok dönen aralık." },
                { baslik: "28-43 m sınıfı", metin: "Yüksek silolar, baca ve enerji yapıları; planlı sevkiyatla temin edilir." },
                { baslik: "Eklemli / teleskopik seçim", metin: "Engelli erişimde eklemli, açık sahada teleskopik seçenek teknik ölçülerle karşılaştırılır." },
                { baslik: "İSG kontrolü", metin: "KKD ve makine evrakı gereksinimleri saha prosedürüne göre teklif öncesinde doğrulanır." },
            ],
            sss: [
                { soru: "Eklemli veya teleskopik platformda düşüşten korunma nasıl belirlenir?", cevap: "Bağlantı noktası, donanım ve kullanım yöntemi seçilen modelin üretici talimatı, saha risk değerlendirmesi ve yürürlükteki kurallara göre belirlenir; ekipmana özgü talimat görülmeden genelleme yapılmamalıdır." },
                { soru: "Rüzgârlı havada çalışılır mı?", cevap: "Çalışma, seçilen modelin üretici rüzgâr limiti ve saha risk değerlendirmesine tabidir; limit değeri teknik föyden doğrulanmalıdır." },
                { soru: "Yüksek erişim işi nasıl planlanır?", cevap: "Gerekli çalışma yüksekliği ve yatay erişim ölçülür; uygun makine bulunabilirliği teyit edilmeden kapasite veya teslimat sözü verilmez." },
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
                { soru: "Bandırma'ya teslimat ne kadar sürer?", cevap: "Teslimat süresi makine uygunluğu, çıkış noktası, nakliye aracı ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Kiralama fiyatına neler dahil?", cevap: "Makine, nakliye, operatör, belge ve varsa eğitim kalemlerinin dahil veya hariç olduğu teklifte ayrı ayrı gösterilir." },
                { soru: "Asgari kiralama süresi nedir?", cevap: "Asgari süre seçilen makine, rota ve iş programına göre değişir; yazılı teklif esas alınır." },
                { soru: "Operatörsüz kiralamada şart nedir?", cevap: "Makineyi kullanacak personelinizin yükseltici platform operatör belgesi olması gerekir; teslimatta kısa makine tanıtımı yaparız." },
                { soru: "Hafta sonu teslimat mümkün mü?", cevap: "Hafta sonu talebi personel, makine, nakliye ve saha kabul uygunluğuna göre önceden değerlendirilir; onay yazılı planda belirtilir." },
            ],
        },
    ],

    "izmirforkliftkiralama.net": [
        {
            slug: "elektrikli-forklift-kiralama",
            baslik: "İzmir Elektrikli Forklift Kiralama (1,5-3 ton)",
            aciklama: "İzmir'de depo içi kullanım için elektrikli forklift seçimi. Kapasite, kaldırma yüksekliği, şarj altyapısı ve teslimat teklifte doğrulanır.",
            h1: "İzmir Elektrikli Forklift Kiralama",
            paragraflar: [
                "Elektrikli forkliftler kapalı depo ve üretim alanlarının standardıdır: emisyon üretmez, sessiz çalışır ve dar koridorlarda üstün manevra sağlar. İzmir'deki e-ticaret depoları, gıda tesisleri ve soğuk hava depolarında en çok kiraladığımız gruptur.",
                "Gerekli kapasite, asansör tipi ve ataşman; yük ağırlığı, yük merkezi, raf yüksekliği ve koridor ölçüsüne göre belirlenir. Model uygunluğu güncel stoktan teyit edilir.",
                "Akü teknolojisi, şarj gerilimi ve tahmini çalışma süresi modele göre değişir; vardiya planı teknik föy ve saha altyapısıyla birlikte değerlendirilir.",
            ],
            maddeler: [
                { baslik: "1,5-2 ton", metin: "Dar koridorlu depolar ve hafif paletli yükler; en ekonomik sınıf." },
                { baslik: "2,5-3 ton", metin: "Standart palet trafiği ve üretim hattı besleme; en çok kiralanan aralık." },
                { baslik: "Triplex asansör", metin: "6 metreye kadar istif; kapıdan giriş yüksekliği düşük kalır." },
                { baslik: "Soğuk hava gereksinimi", metin: "Düşük sıcaklıkta kullanım için model uygunluğu ve üretici limitleri önceden doğrulanır." },
            ],
            sss: [
                { soru: "Elektrikli forklift dışarıda çalışır mı?", cevap: "Düz beton/asfalt zeminde ve kuru havada kısa süreli çalışabilir; ancak yağmura ve bozuk zemine uygun değildir. Açık saha için dizel/LPG öneririz." },
                { soru: "Şarj altyapısı nasıl olmalı?", cevap: "Modele göre 220V veya 380V priz gerekir; keşifte elektrik altyapınıza uygun modeli belirleriz." },
                { soru: "Kiralamada bakım kime ait?", cevap: "Bakım, arıza müdahalesi, süre ve sorumlu taraflar kiralama sözleşmesinde açıkça belirtilir; servis zamanı arıza ve ekip uygunluğuna göre teyit edilir." },
            ],
        },
        {
            slug: "dizel-forklift-kiralama",
            baslik: "İzmir Dizel ve LPG Forklift Kiralama (3-10 ton)",
            aciklama: "İzmir'de açık saha ve rampa işleri için dizel veya LPG forklift seçimi. Kapasite, ataşman, zemin ve teslimat koşulları teklifte doğrulanır.",
            h1: "İzmir Dizel ve LPG Forklift Kiralama",
            paragraflar: [
                "Dizel ve LPG forkliftler açık saha, rampa ve yoğun tempolu yükleme işlerinin makinesidir. Kemalpaşa ve Torbalı'daki lojistik merkezlerinde konteyner boşaltma, Aliağa'daki ağır sanayi tesislerinde malzeme elleçleme bu grubun tipik işleridir.",
                "3-5 ton sınıfı standart palet ve balya trafiğini karşılar; 7-10 ton sınıfı mermer blokları, çelik rulolar ve makine parçaları gibi ağır yükler için kiralanır.",
                "LPG modellerin kapalı alanda kullanımı; havalandırma, emisyon, yangın ve tesis kuralları değerlendirilerek planlanmalıdır. Yakıt ve vardiya düzeni teklif ile saha prosedüründe netleştirilir.",
            ],
            maddeler: [
                { baslik: "3-5 ton dizel/LPG", metin: "Yükleme rampaları ve açık stok sahaları; günlük ve aylık kiralamada en yoğun sınıf." },
                { baslik: "7-10 ton ağır hizmet", metin: "Mermer, çelik ve makine sanayii yükleri; planlı temin edilir." },
                { baslik: "Konteyner boşaltma", metin: "Uzun çatal veya kaydırıcı gereksinimi yük ölçüsü ve model uyumuna göre kontrol edilir." },
                { baslik: "Servis koşulu", metin: "Bakım ve arıza müdahalesinin kapsamı ile hedef süresi sözleşmede belirtilir." },
            ],
            sss: [
                { soru: "Operatörlü kısa süreli kiralama mümkün mü?", cevap: "Operatör, makine ve rota uygunluğu talep tarihi için kontrol edilir; asgari süre ve ücret yazılı teklifte belirtilir." },
                { soru: "Yüksek kapasiteli yük için çözüm nasıl belirlenir?", cevap: "En ağır yük, yük merkezi, kaldırma yüksekliği ve ataşman bilgisiyle kapasite hesabı yapılır; uygun makine bulunmadan temin sözü verilmez." },
                { soru: "Aylık kiralamada yakıt ve bakım kime ait?", cevap: "Yakıt, bakım, lastik ve servis sorumlulukları sözleşmede ayrı ayrı belirtilir; varsayıma göre hareket edilmemelidir." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "İzmir Forklift Kiralama — Sık Sorulan Sorular",
            aciklama: "İzmir'de forklift kiralamada kapasite seçimi, teslimat, operatör belgesi ve fiyatlandırma hakkında sık sorulan sorular.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "İzmir'de forklift seçiminde sık sorulan başlıkları derledik. Yük tablosu, palet ölçüsü, kaldırma yüksekliği, zemin ve çalışma süresi doğrulanmadan kapasite veya teslimat kesinleştirilmez.",
            ],
            sss: [
                { soru: "Doğru forklift kapasitesini nasıl seçerim?", cevap: "En ağır yükünüzün ağırlığı ve yük merkezi mesafesi belirleyicidir: 500 mm yük merkezinde 2 ton taşıyan makine, yük merkezi uzadıkça daha az taşır. Palet ölçünüzü ve en ağır yükünüzü iletmeniz seçim için yeterlidir." },
                { soru: "Forklift kullanmak için hangi belge gerekir?", cevap: "Operatörün geçerli yetkinliği ve işverenin saha yükümlülükleri güncel mevzuat ile İSG sorumlusu üzerinden doğrulanmalıdır; operatör seçeneği ayrıca teyit edilir." },
                { soru: "İzmir içi teslimat süresi nedir?", cevap: "Teslimat tarihi, seçilen modelin güncel uygunluğu, nakliye ve saha kabul saatleri kontrol edildikten sonra yazılı teklifte belirtilir." },
                { soru: "Kısa süreli iş için kiralama olur mu?", cevap: "Asgari süre; makine, operatör, rota ve iş programına göre değerlendirilir ve teklif sırasında netleştirilir." },
                { soru: "Kiralık forkliftin sigortası kime ait?", cevap: "Sigorta kapsamı, muafiyetler ve üçüncü şahıs sorumlulukları poliçe ile sözleşmeden kontrol edilmelidir; teklif öncesinde yazılı teyit istenir." },
            ],
        },
    ],

    "kutahyaplatform.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Kütahya Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Kütahya'da seramik fabrikaları ve depolar için makaslı platform seçimi. Elektrikli veya dizel sınıf, zemin ve sevkiyat koşulları teklifte doğrulanır.",
            h1: "Kütahya Makaslı Platform Kiralama",
            paragraflar: [
                "Kütahya'nın seramik ve çini üretim tesislerinde tavan vinçleri, havalandırma kanalları ve aydınlatma sistemlerinin bakımı düzenli yüksekte çalışma gerektirir. Makaslı platformlar bu işlerin en verimli makinesidir: geniş sepetinde iki-üç çalışan malzemeleriyle birlikte yükselir.",
                "Elektrikli veya dizel makine sınıfı; çalışma yüksekliği, zemin taşıma kapasitesi, lastik tipi ve iç/dış mekân koşuluna göre değerlendirilir. Seçilen modelin teknik ölçüleri ve zemin uyumu teklif öncesinde doğrulanır.",
                "Kütahya merkez, OSB, Tavşanlı ve Gediz sevkiyatı; seçilen makine, tarih, çıkış noktası ve nakliye uygunluğu doğrulandıktan sonra planlanır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Seramik fabrikaları ve depo içi işlerin standardı; sessiz ve emisyonsuz." },
                { baslik: "14-18 m dizel", metin: "Açık saha, cephe ve çatı kenarı işleri; bozuk zemin yeteneği." },
                { baslik: "Fırın bölgesi çalışmaları", metin: "Sıcak bölge planlaması ve uygun lastik seçimiyle fabrika bakımlarına özel çözüm." },
                { baslik: "Bakım duruşu paketi", metin: "Planlı duruşlarda birden fazla makine tek organizasyonla sevk edilir." },
            ],
            sss: [
                { soru: "Kütahya'ya teslimat süresi nedir?", cevap: "Teslimat tarihi, makine ve nakliye uygunluğu ile saha kabul saatleri teyit edildikten sonra yazılı teklifte belirtilir." },
                { soru: "Seramik fabrikası zemininde hangi model çalışır?", cevap: "Lastik tipi, toplam makine ağırlığı, noktasal yük ve zeminin üretici kuralları birlikte kontrol edilir; uygunluk teknik föy ve saha sorumlusu onayıyla belirlenir." },
                { soru: "Günlük kiralama yapılıyor mu?", cevap: "Asgari süre ve dönemsel fiyat seçilen makine ile iş programına göre teklifte belirtilir." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Kütahya Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Kütahya'da fabrika bacası, silo ve cephe işleri için eklemli veya teleskopik platform seçimi ve doğrulanmış sevkiyat teklifi.",
            h1: "Kütahya Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Yüksek fabrika cepheleri, bacalar, silolar ve enerji hatları — Kütahya sanayisinin dikeyde en zorlu işleri eklemli veya teleskopik platformlarla yapılır. Bom, hem yükseğe hem de engellerin ötesine yatay erişim sağlar.",
                "16-32 metre aralığında eklemli ve teleskopik modeller sunuyoruz: fırın binalarının arkasına veya boru köprülerinin üzerinden erişim gerekiyorsa eklemli, açık cephede maksimum yükseklik gerekiyorsa teleskopik model doğru seçimdir.",
                "Kamu binaları ve tarihi yapılarda yetkili kurum izinleri, yüzey koruması, zemin ve kurulum alanı iş başlamadan önce ayrıca değerlendirilmelidir.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklik işleri; en yoğun kiralanan aralık." },
                { baslik: "26-32 m sınıfı", metin: "Baca, silo ve yüksek yapı işleri; planlı sevkiyat." },
                { baslik: "Eklemli / teleskopik seçim", metin: "İş fotoğrafı, ölçüler ve erişim diyagramı üzerinden ön değerlendirme." },
                { baslik: "İSG evrak seti", metin: "Periyodik kontrol raporu ve kemer setiyle teslim." },
            ],
            sss: [
                { soru: "Eklemli veya teleskopik platformda operatör için ne gerekir?", cevap: "Operatör yetkinliği, eğitim ve belgelendirme gereklilikleri makine sınıfı, işveren yükümlülükleri ve güncel mevzuata göre İSG sorumlusuyla doğrulanmalıdır." },
                { soru: "Yüksek erişim işi nasıl planlanır?", cevap: "Çalışma ve yatay erişim ölçüsü alınır; uygun makine ile tedarik süresi doğrulanmadan kapasite veya teslimat sözü verilmez." },
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
                { soru: "Hangi ilçelere sevkiyat planlanabilir?", cevap: "Merkez, OSB, Tavşanlı, Gediz, Simav ve Emet talepleri mesafe, makine ve nakliye uygunluğuna göre ayrı ayrı değerlendirilir." },
                { soru: "Fiyata neler dahil?", cevap: "Makine, nakliye, operatör, yakıt, evrak ve diğer hizmet kalemlerinin dahil olup olmadığı her teklif ve sözleşmede ayrı ayrı belirtilir." },
                { soru: "Makine seçiminde hangi bilgiler gerekir?", cevap: "Çalışma yüksekliği, zemin, engel, tarih ve adres bilgilerini mümkünse fotoğrafla iletin; uygunluk kontrolünden sonra yazılı teklif hazırlanır." },
                { soru: "Periyodik kontrol raporu veriliyor mu?", cevap: "Seçilen makinenin raporu ve geçerlilik tarihi sözleşmeden önce doğrulanmalı; saha dosyasına girecek kopyanın teslim yöntemi yazılı olarak belirlenmelidir." },
            ],
        },
    ],

    "aydinplatform.net": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Aydın Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Aydın, Nazilli, Söke ve Kuşadası'nda otel, jeotermal tesis ve tarım sanayisi işleri için makaslı platform seçimi ve sevkiyat teklifi.",
            h1: "Aydın Makaslı Platform Kiralama",
            paragraflar: [
                "Aydın bölgesinde makaslı platform talebinin üç ana kaynağı var: incir ve zeytin işleme tesislerinin depo işleri, jeotermal santrallerin bakım programları ve Kuşadası-Didim hattındaki otellerin sezon öncesi yenileme çalışmaları.",
                "Otel iç mekânlarında elektrikli, açık saha çalışmalarında dizel makine sınıfları değerlendirilebilir; yükseklik, lastik ve çekiş uygunluğu seçilen modelin teknik föyünden doğrulanır.",
                "Aydın merkez, Efeler, Nazilli, Söke ve sahil hattı sevkiyatı; makine, tarih, çıkış noktası ve nakliye uygunluğu doğrulandıktan sonra planlanır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Otel, AVM ve tesis içi işler; sessiz ve emisyonsuz çalışma." },
                { baslik: "14-18 m dizel", metin: "Jeotermal saha, fabrika cephesi ve açık depo işleri." },
                { baslik: "Sezon planı", metin: "Otellerin kapalı dönem yenilemeleri için süre, makine ve sevkiyat kalemleri ayrı gösterilen dönemsel teklif." },
                { baslik: "Tarım sanayi çözümü", metin: "İşleme tesislerinin hasat öncesi bakım duruşlarına planlı sevkiyat." },
            ],
            sss: [
                { soru: "Kuşadası'ndaki otele teslimat mümkün mü?", cevap: "Sahil hattı talebi makine, nakliye ve tesis kabul koşullarına göre değerlendirilir; teyit edilen tarih yazılı teklifte belirtilir." },
                { soru: "Jeotermal saha için hangi kontroller gerekir?", cevap: "Tesisin giriş prosedürü, makine özellikleri, operatör yeterliliği ve istenen evrak listesi teklif öncesinde karşılıklı doğrulanır." },
                { soru: "Elektrikli model otel içinde asansörle taşınır mı?", cevap: "Kompakt modeller bazı yük asansörlerine sığar; ölçü tablosunu paylaşarak proje bazında değerlendiririz." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Aydın Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Aydın'da eklemli veya teleskopik platform seçimi. Otel cephesi, jeotermal tesis ve silo işlerinde erişim, makine, operatör ve sevkiyat teklifte doğrulanır.",
            h1: "Aydın Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Otel dış cepheleri, jeotermal santral boru hatları, tarım işleme tesislerinin siloları — Aydın'da yükseğe ve uzağa erişim gerektiren işleri 16-32 metre eklemli veya teleskopik platformlarla yapıyoruz.",
                "Eklemli modeller, otel bahçelerindeki ağaçların veya santral sahalarındaki boru köprülerinin üzerinden aşarak çalışma imkânı verir; teleskopik modeller açık cephede maksimum erişim sağlar.",
                "Sahil hattındaki tuzlu hava koşullarında cephe bakım ihtiyacı iç bölgelere göre daha sıktır; otel işletmelerine yıllık bakım takvimine bağlı dönemsel kiralama modeli öneriyoruz.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Otel ve fabrika cepheleri; en yoğun aralık." },
                { baslik: "26-32 m sınıfı", metin: "Silo, baca ve yüksek yapı işleri; planlı temin." },
                { baslik: "Ağaç/engel aşma", metin: "Eklemli bom peyzajlı alanlarda cepheye zarar vermeden erişir." },
                { baslik: "Dönemsel plan", metin: "Otellerin yıllık bakım takvimine göre kapsamı ve fiyat kalemleri yazılı sözleşmede belirtilen çalışma planı." },
            ],
            sss: [
                { soru: "Otel çalışmasında misafir konforu nasıl korunur?", cevap: "Elektrikli-hibrit modellerle ve sabah erken/öğle arası vardiyalarla gürültü penceresi daraltılır; çalışma alanı şeritle izole edilir." },
                { soru: "Keşif nasıl yapılır?", cevap: "Fotoğraf ve ölçülerle ön değerlendirme yapılabilir; yerinde keşif gereksinimi, kapsamı ve olası ücreti teklif öncesinde teyit edilir." },
                { soru: "Operatörlü kiralama mümkün mü?", cevap: "Operatörün yeterlilik belgesi, tarih ve vardiya uygunluğu talep bazında kontrol edilerek teklifte belirtilir." },
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
                { soru: "Hangi bölgelere sevkiyat planlanabilir?", cevap: "Aydın merkez, Efeler, Nazilli, Söke, Kuşadası ve Didim talepleri güncel makine ve nakliye uygunluğuna göre değerlendirilir." },
                { soru: "Teslimat süresi ne kadar?", cevap: "Teslimat tarihi makine, çıkış noktası, nakliye ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Fiyat teklifi için hangi bilgiler gerekli?", cevap: "Çalışma yüksekliği, yatay erişim, süre, zemin, tarih ve adres bilgileriyle uygunluk ve fiyat hesabı hazırlanır." },
                { soru: "Uzun dönem kiralama nasıl fiyatlanır?", cevap: "Süreye bağlı fiyat, nakliye ve diğer hizmet kalemleri güncel uygunluğa göre hesaplanır; kısa dönemden farklı olup olmadığı yazılı teklifte karşılaştırılmalıdır." },
            ],
        },
    ],

    "bilecikplatform.com": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bilecik Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Bilecik, Bozüyük, Osmaneli ve Söğüt'te makaslı platform seçimi. Makine, zemin ve sevkiyat koşulları teklifte doğrulanır.",
            h1: "Bilecik Makaslı Platform Kiralama",
            paragraflar: [
                "Bilecik'teki seramik ve metal işleme tesislerinde tavan ve tesisat işleri düzenli yüksekte çalışma gerektirir. 8-18 metre makaslı platformlar; zemin taşıma gücü, çalışma yüksekliği ve sepet kapasitesi uygun olduğunda değerlendirilebilecek seçenekler arasındadır.",
                "Elektrikli veya dizel sınıf seçimi; emisyon, havalandırma, zemin, lastik, çekiş ve çalışma yüksekliği gereksinimlerine göre yapılır. Seçilen modelin sahaya uygunluğu teknik föyden doğrulanır.",
                "Bilecik merkez, Bozüyük ve Osmaneli sevkiyatı makine, tarih, çıkış noktası ve nakliye uygunluğu kontrol edildikten sonra planlanır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat, aydınlatma ve vinç bakımı işleri." },
                { baslik: "14-18 m dizel", metin: "Cephe, çatı kenarı ve açık saha işleri." },
                { baslik: "Sevkiyat planı", metin: "Merkez ve Bozüyük teslimatı güncel makine ile nakliye uygunluğuna göre teyit edilir." },
                { baslik: "Duruş planlaması", metin: "Fabrika bakım duruşlarında çoklu makine organizasyonu." },
            ],
            sss: [
                { soru: "Bilecik'e teslimat süresi nedir?", cevap: "Teslimat tarihi stok, nakliye, adres ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Seramik fabrikası içinde hangi model çalışır?", cevap: "Lastik tipi, makine ağırlığı, noktasal yük, emisyon ve tesis kuralları kontrol edilir; uygunluk teknik föy ile saha sorumlusu onayına göre belirlenir." },
                { soru: "En kısa kiralama süresi nedir?", cevap: "Asgari süre makine, operatör, nakliye rotası ve iş programına göre değerlendirilir; teklif verilmeden kesin süre sözü verilmez." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Bilecik Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Bilecik ve çevresinde fabrika cephesi, silo ve baca işleri için eklemli veya teleskopik platform seçimi ve sevkiyat teklifi.",
            h1: "Bilecik Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Fabrika cepheleri, silolar, bacalar ve yüksek depo yapılarında gerekli çalışma ve yatay erişim ölçüsüne göre eklemli veya teleskopik platform sınıfı değerlendirilir.",
                "Eklemli modeller boru hatlarının ve yapı çıkıntılarının üzerinden aşarak çalışır; teleskopik modeller açık cephede maksimum yatay erişim sağlar. Keşifte işin fotoğrafı üzerinden doğru tipi öneriyoruz.",
                "Mermer ocağı ve taş işleme tesisi gibi tozlu ortamlarda makine uygunluğu, filtre bakımı ve saha riskleri seçilen model için ayrıca doğrulanmalıdır.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Cephe ve orta yükseklik işleri; en yoğun aralık." },
                { baslik: "26-32 m sınıfı", metin: "Silo ve baca işleri; planlı sevkiyat." },
                { baslik: "Ocak/tesis deneyimi", metin: "Mermer ve taş işleme sahalarında çalışma tecrübesi." },
                { baslik: "İSG seti", metin: "Kemer, lanyard ve güncel periyodik kontrol raporuyla teslim." },
            ],
            sss: [
                { soru: "Eklemli veya teleskopik platform için operatör seçeneği var mı?", cevap: "Operatör yeterliliği, tarih ve vardiya uygunluğu talep bazında kontrol edilir; operatörsüz kullanım şartları saha sorumlusuyla doğrulanır." },
                { soru: "Silo bakımı için hangi yükseklik gerekir?", cevap: "Bölgedeki tipik çimento ve agrega siloları 20-30 metre aralığındadır; silo yüksekliğinize erişim payı eklenerek makine seçilir. Fotoğrafla ön değerlendirme yapıyoruz." },
                { soru: "Hafta sonu çalışma mümkün mü?", cevap: "Hafta sonu teslimat ve çalışma; makine, nakliye, operatör ve tesis kabul saatleri doğrulandıktan sonra yazılı olarak planlanabilir." },
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
                { soru: "Hangi ilçelere sevkiyat planlanabilir?", cevap: "Merkez, Bozüyük, Osmaneli, Söğüt, Gölpazarı ve Pazaryeri talepleri makine ve nakliye uygunluğuna göre değerlendirilir." },
                { soru: "Fiyat neye göre değişir?", cevap: "Makine sınıfı, süre, nakliye mesafesi, operatör talebi ve saha koşulları fiyatı etkiler; yazılı teklif esas alınır." },
                { soru: "Evrak seti neleri kapsıyor?", cevap: "Sahanın istediği periyodik kontrol, makine uygunluğu ve operatör belgeleri listelenir; mevcut belgeler sözleşme öncesinde doğrulanır." },
                { soru: "Rezervasyonu ne kadar önceden yapmalıyım?", cevap: "Uygun süre; makine sınıfına, mevcut programa, nakliye rotasına ve saha giriş koşullarına bağlıdır. Tarih, model ve teslimat planı yazılı teyit edilmeden kesin kabul edilmemelidir." },
            ],
        },
    ],

    "bozuyukplatform.com.tr": [
        {
            slug: "makasli-platform-kiralama",
            baslik: "Bozüyük Makaslı Platform Kiralama (8-18 m)",
            aciklama: "Bozüyük OSB'de makaslı platform seçimi. Yükseklik, zemin, saha girişi, makine ve teslimat koşulları teklifte doğrulanır.",
            h1: "Bozüyük Makaslı Platform Kiralama",
            paragraflar: [
                "Bozüyük OSB'deki seramik ve cam fabrikalarının tavan işleri, lojistik depoların raf ve aydınlatma çalışmaları için makaslı platform en verimli çözümdür: geniş sepette iki-üç çalışan, malzemeleriyle birlikte dakikalar içinde çalışma yüksekliğine ulaşır.",
                "Elektrikli veya dizel model; yükseklik, zemin ve çalışma ortamına göre seçilir. OSB teslimat tarihi ile asgari kiralama süresi güncel uygunluk kontrolünden sonra belirlenir.",
                "Fırın hatlarının çevresindeki sıcak bölge çalışmalarında makine konumlandırması ve çalışma penceresi planlaması tecrübeli ekibimizce yapılır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Üretim alanı içi işler; emisyonsuz, iz bırakmayan lastikler." },
                { baslik: "14-18 m dizel", metin: "Depo dışı sahalar ve cephe işleri." },
                { baslik: "OSB sevkiyat planı", metin: "Acil taleplerde dahi makine, nakliye ve saha kabul uygunluğu teyit edilmeden süre sözü verilmez." },
                { baslik: "Vardiya uyumu", metin: "Gece vardiyasında teslim ve alım organize edilir." },
            ],
            sss: [
                { soru: "Acil arıza için teslimat ne kadar sürer?", cevap: "Stok, nakliye, adres ve saha kabul saatleri kontrol edilir; teyit edilen en erken tarih yazılı olarak bildirilir." },
                { soru: "Cam fabrikasında hangi önlemler alınır?", cevap: "Sıcak bölge mesafeleri, zemin koruma ve kıvılcım riski değerlendirmesi tesis İSG ekibiyle birlikte yapılır; uygun lastik ve konumlandırma planı çıkarılır." },
                { soru: "Aylık kiralama nasıl değerlendirilir?", cevap: "Süre, kullanım yoğunluğu, nakliye ve sahada konuşlanma koşulları karşılaştırılır; maliyet farkı yalnız güncel yazılı teklif üzerinden değerlendirilmelidir." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Bozüyük Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Bozüyük'te 16-32 metre eklemli ve teleskopik platform seçenekleri. Fabrika bacası, silo ve cephe işleri için OSB teslimat planlaması.",
            h1: "Bozüyük Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Seramik fabrikalarının bacaları, hammadde siloları ve yüksek depo cepheleri — Bozüyük'ün dikeyde en zorlu işleri 16-32 metre eklemli veya teleskopik platformlarla yapılır.",
                "Eklemli modeller engel aşma, teleskopik modeller açık erişim için değerlendirilebilir; doğru bom tipi fotoğraf, ölçü ve üretici erişim diyagramıyla seçilir.",
                "Tesis giriş prosedürü ve İSG evrak listesi saha yetkilisinden alınır; seçilen makinenin ve operatörün belgeleri sözleşmeden önce doğrulanır.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Cephe ve konveyör üstü işler; en çok dönen aralık." },
                { baslik: "26-32 m sınıfı", metin: "Baca ve silo bakımı; planlı sevkiyat." },
                { baslik: "Engel aşma", metin: "Eklemli bomla boru ve konveyör hatlarının üzerinden çalışma." },
                { baslik: "Hazır evrak", metin: "OSB tesis girişleri için evrak seti önceden iletilir." },
            ],
            sss: [
                { soru: "Baca bakımı için hangi makine uygun?", cevap: "Baca yüksekliği ve çevresindeki yapılara göre 26-32 metre eklemli modeller tercih edilir; erişim yönü keşifte belirlenir." },
                { soru: "Operatörlü hizmet mümkün mü?", cevap: "Operatör yeterliliği, tarih ve vardiya uygunluğu talep bazında kontrol edilerek teklifte belirtilir." },
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
                { soru: "OSB dışına sevkiyat mümkün mü?", cevap: "Bozüyük merkez, İnönü hattı ve çevre talepleri makine ile nakliye uygunluğuna göre ayrıca değerlendirilir." },
                { soru: "Fiyat teklifi için ne gerekir?", cevap: "Çalışma yüksekliği, yatay erişim, süre, zemin, tarih ve adres bilgileriyle teklif hazırlanır; yanıt süresi uygunluğa bağlıdır." },
                { soru: "Gece vardiyasında teslim mümkün mü?", cevap: "Evet; OSB tesislerinin vardiya düzenine uygun gece teslim ve alım önceden planlanarak yapılır." },
                { soru: "Makine arızalanırsa süreç nasıl işler?", cevap: "Bildirim kanalı, müdahale hedefi, ikame koşulları ve ücretlendirme kiralama sözleşmesinde açıkça belirtilmelidir." },
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
                "Çanakkale sevkiyatı; makine, tarih, çıkış noktası, güzergâh ve saha kabul koşulları doğrulandıktan sonra planlanır. Uzun süreli sahada kalışın koşulları teklifte belirtilir.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Fabrika içi tesisat ve bakım işleri; gıda tesislerine uygun." },
                { baslik: "14-18 m dizel", metin: "Açık saha, cephe ve depo dışı çalışmalar." },
                { baslik: "Sahada konuşlu model", metin: "Uzun projelerde makine sahada kalır; nakliye tek sefer ödenir." },
                { baslik: "Planlı sevkiyat", metin: "Teslimat günü makine, nakliye ve duruş takvimi birlikte doğrulanarak belirlenir." },
            ],
            sss: [
                { soru: "Çanakkale'ye teslimat süresi nedir?", cevap: "Teslimat tarihi makine, güzergâh, nakliye ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Kısa günlük iş için nakliye maliyeti yüksek olmaz mı?", cevap: "Tek günlük işlerde bölgedeki rota günlerimize denk getirerek nakliyeyi paylaştırıyoruz; tarih esnekliği maliyeti belirgin düşürür." },
                { soru: "Gıda tesisinde hangi model çalışır?", cevap: "Emisyonsuz elektrikli modeller hijyen gereksinimli alanlarda tercih edilir; iz bırakmayan lastik standarttır." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Çanakkale Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Çanakkale'de eklemli veya teleskopik platform seçimi. Rüzgâr santrali, liman ve cephe işlerinde makine, operatör ve saha evrakı teklifte doğrulanır.",
            h1: "Çanakkale Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Çanakkale'nin rüzgâr santralleri, liman tesisleri ve fabrika cepheleri yüksekte ve uzakta çalışma gerektirir; 16-32 metre eklemli ve teleskopik platformlarımız bu işlerin makinesidir.",
                "Rüzgâr santrali sahalarında türbin kule dibi ekipmanları, trafo binaları ve saha aydınlatması işleri için erişim ölçüsü ile tesis prosedürleri birlikte değerlendirilmelidir.",
                "Liman çalışmalarında vinç ve aydınlatma direği bakımları için teleskopik modeller, gemi yanaşma bölgelerindeki engelli erişimlerde eklemli modeller kullanılır.",
            ],
            maddeler: [
                { baslik: "16-22 m sınıfı", metin: "Fabrika cepheleri ve orta yükseklik işleri." },
                { baslik: "26-32 m sınıfı", metin: "Liman ekipmanları ve yüksek yapı işleri; planlı temin." },
                { baslik: "Santral deneyimi", metin: "RES sahalarında İSG prosedürlü çalışma tecrübesi." },
                { baslik: "Operatör seçeneği", metin: "Yeterlilik belgesi, tarih ve proje koşulları teklif öncesinde doğrulanır." },
            ],
            sss: [
                { soru: "Rüzgârlı bölgede eklemli veya teleskopik platform kullanılabilir mi?", cevap: "İzin verilen koşullar modele ve üretici talimatına göre değişir. Güncel hava verisi, anlık saha ölçümü ve risk değerlendirmesi birlikte ele alınır; model limiti dışında çalışma planlanmaz." },
                { soru: "Santral sahası giriş evrakları nasıl kontrol edilir?", cevap: "Tesisin istediği periyodik kontrol, sigorta, makine ve operatör belgeleri listelenir; seçilen kaynağın mevcut belgeleri sözleşmeden önce doğrulanır." },
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
                { soru: "Hangi bölgelere sevkiyat planlanabilir?", cevap: "Merkez, Biga, Çan, Ezine, Gelibolu ve Eceabat talepleri makine, güzergâh ve nakliye uygunluğuna göre değerlendirilir." },
                { soru: "Rezervasyon ne kadar önceden yapılmalı?", cevap: "Bölgeye sevkiyat planlı günlerde yapıldığı için 2-3 gün öncesinden rezervasyon öneririz; acil durumlar için ayrıca çözüm üretiyoruz." },
                { soru: "Uzun projede fiyat nasıl hesaplanır?", cevap: "Süre, kullanım planı, nakliye, operatör ve sahada konuşlanma koşulları ayrı kalemlerle hesaplanır; kısa dönemle farkı güncel yazılı teklifte gösterilir." },
                { soru: "Evrak setinde neler olmalı?", cevap: "Saha prosedürüne göre periyodik kontrol, sigorta, makine uygunluğu ve operatör belgeleri istenebilir; kapsam ve geçerlilik tarihleri önceden doğrulanır." },
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
                "Elektrikli veya dizel model; yükseklik, zemin, gürültü ve emisyon koşullarına göre seçilir. Temiz alan uyumu yalnız seçilen modelin teknik özellikleri ve tesis prosedürü doğrulandığında kabul edilir.",
                "Manisa teslimatı ve vardiya dışı teslim talebi; makine, personel, nakliye ve tesis kabul saatleri teyit edildikten sonra planlanır.",
            ],
            maddeler: [
                { baslik: "8-12 m elektrikli", metin: "Elektronik ve gıda tesislerinin iç mekân standardı." },
                { baslik: "14-18 m dizel", metin: "Depo dışı sahalar, cephe ve çatı kenarı işleri." },
                { baslik: "Vardiya uyumlu teslim", metin: "Gece vardiyasında teslim/alım; üretim kesintisi olmaz." },
                { baslik: "Temiz alan uyumu", metin: "Düşük gürültü ve emisyonsuz çalışma; hijyen bölgelerine uygun." },
            ],
            sss: [
                { soru: "Üretimi durdurmadan çalışma mümkün mü?", cevap: "Elektrikli modellerle hat üzerindeki işler vardiya aralarında bölümler hâlinde planlanır; gece teslim-alım ile üretim kesintisi en aza iner." },
                { soru: "Manisa'ya teslimat süresi nedir?", cevap: "Teslimat tarihi makine, çıkış noktası, nakliye ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Gıda tesisi için hijyen şartları sağlanıyor mu?", cevap: "Makineler temizlenmiş ve hijyen bölgesine uygun lastiklerle teslim edilir; talep hâlinde makine temizlik kaydı da sunulur." },
            ],
        },
        {
            slug: "eklemli-ve-teleskopik-platform-kiralama",
            baslik: "Manisa Eklemli ve Teleskopik Platform Kiralama (16-32 m)",
            aciklama: "Manisa'da eklemli veya teleskopik platform seçimi. Fabrika cephesi, silo ve altyapı işlerinde erişim, makine, operatör ve sevkiyat teklifte doğrulanır.",
            h1: "Manisa Eklemli ve Teleskopik Platform Kiralama",
            paragraflar: [
                "Fabrika cepheleri, hammadde siloları, yüksek depo yapıları ve OSB altyapı direkleri — Manisa'da yükseğe ve uzağa erişim gerektiren işleri 16-32 metre eklemli veya teleskopik platformlarla yapıyoruz.",
                "Eklemli veya teleskopik seçiminde konveyör, boru hattı, açık erişim ve kurulum alanı ölçülür; fotoğrafla ön değerlendirme sonrası teknik erişim diyagramı doğrulanır.",
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
                { soru: "Operatörlü kiralama mümkün mü?", cevap: "Operatör yeterliliği, tarih ve vardiya uygunluğu talep bazında kontrol edilerek teklifte belirtilir." },
                { soru: "OSB dışındaki ilçelere sevkiyat mümkün mü?", cevap: "Turgutlu, Salihli, Akhisar ve Soma talepleri makine ile nakliye uygunluğuna göre ayrı ayrı değerlendirilir." },
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
                { soru: "Hangi bölgelere sevkiyat planlanabilir?", cevap: "Manisa OSB, merkez, Turgutlu, Salihli, Akhisar ve Soma talepleri güncel makine ve nakliye uygunluğuna göre değerlendirilir." },
                { soru: "Gece teslimat gerçekten yapılıyor mu?", cevap: "Evet; OSB tesislerinin vardiya saatlerine uyumlu gece teslim ve alım, önceden planlanarak düzenli yapılır." },
                { soru: "Fiyat teklifi için ne gerekli?", cevap: "Çalışma yüksekliği, yatay erişim, süre, zemin, tarih ve adres bilgileriyle uygunluk ve fiyat hesabı hazırlanır." },
                { soru: "Uzun dönem kiralama nasıl planlanır?", cevap: "Süre, nakliye, bakım, operatör ve sahada konuşlanma koşulları sözleşmede ayrı ayrı belirtilir; fiyat farkı güncel teklif üzerinden değerlendirilir." },
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
                { soru: "Kiralamada bakım kime ait?", cevap: "Bakım, arıza müdahalesi, hedef süre ve sorumlu taraflar kiralama sözleşmesinde açıkça belirtilir." },
                { soru: "Şarj için altyapı gerekir mi?", cevap: "Modele göre 220V veya 380V priz yeterlidir; keşifte elektrik altyapınıza uygun model belirlenir." },
            ],
        },
        {
            slug: "dizel-forklift-kiralama",
            baslik: "Manisa Dizel ve LPG Forklift Kiralama (3-10 ton)",
            aciklama: "Manisa'da açık saha ve rampa işleri için 3-10 ton dizel/LPG forklift seçenekleri. OSB, Turgutlu ve Akhisar için teslimat planlaması.",
            h1: "Manisa Dizel ve LPG Forklift Kiralama",
            paragraflar: [
                "Açık stok sahaları, yükleme rampaları ve tır-konteyner boşaltma işleri Manisa'da dizel ve LPG forkliftlerle döner. OSB'nin sevkiyat trafiğinde 3-5 ton sınıfı en yoğun kiralanan gruptur.",
                "7-10 ton ağır hizmet sınıfı; makine parçaları, bobin ve büyük ebatlı ambalajlı ürünlerin elleçlenmesinde kullanılır. Uzun çatal ve kaydırıcı ataşman seçenekleri mevcuttur.",
                "LPG modelin kapalı alanda kullanımı; havalandırma, emisyon, yangın ve tesis prosedürlerine göre değerlendirilir. Yakıt ve vardiya düzeni yazılı çalışma planında netleştirilir.",
            ],
            maddeler: [
                { baslik: "3-5 ton dizel/LPG", metin: "Rampa ve açık saha işlerinin standardı." },
                { baslik: "7-10 ton ağır hizmet", metin: "Ağır sanayi yükleri; planlı temin." },
                { baslik: "Konteyner boşaltma", metin: "Uzun çatal seçeneğiyle konteyner içi elleçleme." },
                { baslik: "Saha servisi", metin: "Manisa genelinde mobil servisle yerinde bakım." },
            ],
            sss: [
                { soru: "Operatörlü kısa süreli hizmet mümkün mü?", cevap: "Operatör, makine ve rota uygunluğu kontrol edilir; asgari süre ve ücret yazılı teklifte belirtilir." },
                { soru: "Aylık kiralamada yakıt ve bakım kime ait?", cevap: "Yakıt, bakım, servis ve lastik sorumlulukları sözleşmede ayrı ayrı belirtilir." },
                { soru: "Hangi ilçelere teslimat yapıyorsunuz?", cevap: "OSB ve merkez başta olmak üzere Turgutlu, Salihli, Akhisar ve Soma'ya planlı teslimat yapıyoruz." },
            ],
        },
        {
            slug: "sik-sorulan-sorular",
            baslik: "Manisa Forklift Kiralama — Sık Sorulan Sorular",
            aciklama: "Manisa'da forklift kiralamada kapasite seçimi, belge, teslimat ve fiyatlandırma hakkında sık sorulan sorular ve yanıtları.",
            h1: "Sık Sorulan Sorular",
            paragraflar: [
                "Manisa'da forklift seçiminde sık sorulan başlıkları derledik. En ağır yük, yük merkezi, palet ölçüsü, kaldırma yüksekliği, zemin ve tarih doğrulanmadan kapasite veya teslimat kesinleştirilmez.",
            ],
            sss: [
                { soru: "Forklift kapasitesi nasıl seçilir?", cevap: "En ağır yük ve yük merkezi mesafesi belirleyicidir; standart 500 mm yük merkezinde etiket kapasitesi geçerlidir, uzayan yükte kapasite düşer. Yük bilgisiyle seçimi biz yapıyoruz." },
                { soru: "Hangi belge gerekir?", cevap: "Operatör yetkinliği ve gerekli belgeler makine sınıfı, işveren yükümlülükleri ve güncel mevzuata göre İSG sorumlusuyla doğrulanmalıdır; operatör seçeneği ayrıca teklif edilir." },
                { soru: "Teslimat süresi nedir?", cevap: "Teslimat tarihi seçilen model, nakliye, adres ve saha kabul saatleri doğrulandıktan sonra yazılı teklifte belirtilir." },
                { soru: "Kiralık makinenin sigortası kime ait?", cevap: "Sigorta kapsamı, muafiyetler ve üçüncü şahıs sorumlulukları poliçe ile sözleşmeden kontrol edilmelidir." },
            ],
        },
    ],

    "platformakademisi.com": [
        {
            slug: "myk-operator-belgesi",
            baslik: "MYK Operatör Belgesi Rehberi: Başvuru ve Doğrulama",
            aciklama: "MYK operatör belgesi araştırmasında yeterlilik, yetkili kuruluş, sınav, doğrulama ve yenileme adımlarını resmî kaynaklarla öğrenin.",
            h1: "MYK Operatör Belgesi: Kaynaklı Başvuru Rehberi",
            paragraflar: platformAkademisiMykParagraflari,
            maddeler: [
                { baslik: "1. Görevi tanımlayın", metin: "Kullanılacak ekipman sınıfını ve fiilî işi yazın; belge adını tahmin etmeyin." },
                { baslik: "2. Yeterliliği doğrulayın", metin: "Kod, revizyon, birimler ve geçerlilik koşullarını MYK Ulusal Yeterlilikler portalından okuyun." },
                { baslik: "3. Kuruluş kapsamını kontrol edin", metin: "Kuruluşun aktif yetkisini MYK resmî listesinden başvuru tarihinde doğrulayın." },
                { baslik: "4. Sınav ve kayıtları izleyin", metin: "Aday bilgilendirmesini, sonucu, itiraz yolunu ve yenileme tarihini yazılı saklayın." },
            ],
            sss: [
                { soru: "Belge ne kadar sürede alınır?", cevap: "Sabit süre verilemez. Kuruluşun sınav takvimi, değerlendirme ve belge düzenleme sürecini yazılı isteyin; güncel bilgiyi yetkili kuruluştan doğrulayın." },
                { soru: "G sınıfı sürücü belgesi MYK belgesinin yerine geçer mi?", cevap: "Belge türleri farklı düzenlemelere dayanabilir. Yapılacak iş ve makine için güncel gerekliliği işverenin yetkili İSG birimi ve resmî kaynaklarla doğrulamadan eşdeğer kabul etmeyin." },
                { soru: "Sınavda başarısız olunca ne olur?", cevap: "Tekrar, birim başarısı ve itiraz koşulları yeterlilik revizyonu ile kuruluş prosedürüne bağlıdır. Aday bilgilendirmesindeki güncel hüküm esas alınır." },
            ],
            kaynaklar: [
                {
                    ad: "MYK — Ana sayfa ve güncel duyurular",
                    url: "https://www.myk.gov.tr/",
                    not: "Mevzuat, teşvik ve süreç değişikliklerini başvuru tarihinde kurumun güncel duyurularından kontrol edin.",
                },
                {
                    ad: "MYK — Yetkilendirilmiş Belgelendirme Kuruluşları",
                    url: "https://www.myk.gov.tr/index.php/tr/yetkilendirilmis-belgelendirme-kuruluslari",
                    not: "Başvuru yapmadan önce kuruluşun güncel yetki kapsamını MYK üzerinden doğrulayın.",
                },
                {
                    ad: "MYK — Ulusal Yeterlilikler",
                    url: "https://portal.myk.gov.tr/index.php?option=com_yeterlilik",
                    not: "Belge adı, seviye, geçerlilik ve sınav birimleri ilgili ulusal yeterlilikte yer alır.",
                },
                {
                    ad: "T.C. Mevzuat Bilgi Sistemi",
                    url: "https://www.mevzuat.gov.tr/",
                    not: "Yasal yorum için resmî güncel metni ve işyerinizin yetkili birimlerinin değerlendirmesini esas alın.",
                },
            ],
        },
        {
            slug: "ipaf-egitimi-nedir",
            baslik: "IPAF Eğitimi Nedir? Kategori ve PAL Card Rehberi",
            aciklama: "IPAF eğitimi, 3a ve 3b kategorileri, onaylı merkez doğrulaması ve PAL Card sürecini resmî IPAF kaynaklarıyla inceleyin.",
            h1: "IPAF Eğitimi ve PAL Card: Bağımsız Rehber",
            paragraflar: platformAkademisiIpafParagraflari,
            maddeler: [
                { baslik: "3a kategorisi", metin: "Hareketli dikey platformlarla ilişkilidir; kesin kapsamı güncel IPAF kategori tablosundan kontrol edin." },
                { baslik: "3b kategorisi", metin: "Hareketli kol tipi platformlarla ilişkilidir; Eklemli ve Teleskopik Platform için model hareketini doğrulayın." },
                { baslik: "Merkez doğrulaması", metin: "Sağlayıcıyı IPAF Find a Training Centre dizininde unvan ve program kapsamıyla eşleştirin." },
                { baslik: "Saha aktarımı", metin: "Kart sonrasında model tanıtımı, saha oryantasyonu ve kurtarma planını ayrıca tamamlayın." },
            ],
            sss: [
                { soru: "IPAF eğitiminin dili nasıl öğrenilir?", cevap: "Dili ve değerlendirme desteğini seçilen onaylı merkezden kayıt öncesinde yazılı teyit edin; bütün merkezler için tek bir varsayım yapmayın." },
                { soru: "MYK belgesi varsa IPAF gerekir mi?", cevap: "Yasal koşul ile müşteri veya proje şartı ayrı değerlendirilir. Güncel mevzuatı, görev kapsamını ve sözleşmeyi yetkili taraflarla doğrulayın." },
                { soru: "PAL Card ne zaman yenilenir?", cevap: "Kart kaydı ve IPAF’ın güncel yenileme kuralları esas alınır. Süre ve yöntem değişebileceği için kart sahibi yetkili merkezle önceden görüşmelidir." },
            ],
            kaynaklar: [
                {
                    ad: "IPAF — Training and PAL Card",
                    url: "https://www.ipaf.org/en/training",
                    not: "Kategori, eğitim merkezi ve kart koşullarını IPAF'ın güncel sayfasından kontrol edin.",
                },
                {
                    ad: "IPAF — Find a Training Centre",
                    url: "https://www.ipaf.org/en/training-centres",
                    not: "Eğitim sağlayıcının IPAF kaydını başvuru öncesinde doğrulayın.",
                },
                {
                    ad: "IPAF — PAL Card",
                    url: "https://www.ipaf.org/en/pal-card",
                    not: "Kart biçimi, dijital kayıt ve geçerlilik koşullarını işlem tarihinde resmî sayfadan doğrulayın.",
                },
            ],
        },
        {
            slug: "gunluk-kontrol-listesi",
            baslik: "Yükseltici Platform Günlük Kontrol Listesi ve Yöntemi",
            aciklama: "Makaslı, Eklemli, Teleskopik ve Örümcek Platform için vardiya öncesi kontrol, arıza bildirimi ve kayıt yöntemini öğrenin.",
            h1: "Günlük (Vardiya Öncesi) Kontrol Listesi",
            paragraflar: platformAkademisiKontrolParagraflari,
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
                { baslik: "12. KKD", metin: "Eklemli veya teleskopik platformda üretici talimatına uygun kemer ve lanyard; ayrıca saha kuralına uygun baret ve yelek." },
            ],
            sss: [
                { soru: "Kontrolü kim yapmalı?", cevap: "İşverenin görevlendirdiği, makineyi ve kontrol yöntemini bilen operatör yapmalıdır. Yetkinlik ve gözetim koşulu güncel işyeri prosedürüyle doğrulanır." },
                { soru: "Kayıt nasıl tutulmalı?", cevap: "Basılı form veya dijital checklist kullanılabilir; tarih, saat, makine seri no ve operatör imzası asgari alanlardır. Kayıtlar denetimde istenir." },
                { soru: "Kontrolde arıza çıkarsa ne yapılır?", cevap: "Makine kullanılmaz, erişim engellenir, görünür biçimde işaretlenir ve işyerinin kayıtlı bildirim süreci uygulanır. Yetkisiz onarım yapılmaz; yeniden devreye alma yetkili prosedürle gerçekleşir." },
            ],
            kaynaklar: [
                {
                    ad: "IPAF — Operators' Safety Guide",
                    url: "https://www.ipaf.org/en/resource-library/operators-safety-guide",
                    not: "Günlük kontrol, güvenli kullanım ve acil durum adımlarını üretici kılavuzuyla birlikte uygulayın.",
                },
                {
                    ad: "T.C. Mevzuat Bilgi Sistemi",
                    url: "https://www.mevzuat.gov.tr/",
                    not: "İşyerinize uygulanacak güncel mevzuat için İSG sorumlunuz ve resmî metinler esas alınmalıdır.",
                },
            ],
        },
    ],
};

type TicariAltProfil = {
    yer: string;
    sektor: string;
    saha: string;
    rota: string;
    risk: string;
    icIs: string;
    disIs: string;
};

const ticariAltProfiller: Record<string, TicariAltProfil> = {
    "eklemliplatform.com.tr": {
        yer: "Türkiye genelindeki proje sahaları",
        sektor: "endüstriyel bakım, cephe, çelik montaj, tesisat ve yapı işleri",
        saha: "dar fabrika koridorundan açık şantiye dolgusuna, bitmiş AVM zemininden boru köprüleriyle çevrili proses alanına kadar değişen sahalar",
        rota: "çıkış deposu, ağır vasıta güzergâhı, tesis kabul saati ve indirme alanı",
        risk: "parapet, çatı, boru, ağaç veya üretim hattının arkasına yatay erişim",
        icIs: "tavan tesisatı, sprinkler, aydınlatma, dekorasyon ve hat üstü bakım",
        disIs: "çelik montaj, cephe kaplama, çatı kenarı, silo ve saha aydınlatması",
    },
    "bandirmamanlift.net": {
        yer: "Bandırma, Erdek, Gönen ve Biga hattı",
        sektor: "liman lojistiği, yem-gıda üretimi, enerji, tersane ve fabrika bakımı",
        saha: "rüzgâr alan liman betonları, yoğun kamyon trafiği, fabrika içi kaplamalar ve açık stok sahaları",
        rota: "liman veya tesis kapı randevusu, kantar, vardiya geçişi ve Bandırma-Biga nakliye planı",
        risk: "aynı alanda çalışan araçlar, açık saha rüzgârı ve üretim sürerken çalışma bölgesinin ayrılması",
        icIs: "depo aydınlatması, raf kurulumu, yangın tesisatı ve bakım duruşu işleri",
        disIs: "silo çevresi, liman tesisi, çelik yapı, cephe ve yüksek saha ekipmanı bakımı",
    },
    "izmirforkliftkiralama.net": {
        yer: "Kemalpaşa, Torbalı, Çiğli, Aliağa ve İzmir çevresi",
        sektor: "lojistik, gıda, e-ticaret, metal, kimya ve üretim operasyonları",
        saha: "dar raf koridoru, epoksi üretim zemini, yükleme rampası, konteyner sahası ve açık stok alanı",
        rota: "OSB giriş randevusu, şehir içi ağır araç kısıtı, rampa sırası ve güvenli indirme noktası",
        risk: "yük merkezinin büyümesi, eğimli rampada denge, yaya trafiği ve görüşü kapatan hacimli yük",
        icIs: "raf istifi, üretim hattı besleme, palet toplama ve kapalı depo transferi",
        disIs: "konteyner boşaltma, açık saha istifi, ağır parça taşıma ve araç yükleme",
    },
    "kutahyaplatform.com": {
        yer: "Kütahya merkez, OSB, Tavşanlı ve Gediz hattı",
        sektor: "seramik, çini, maden, gıda ve üretim tesisleri",
        saha: "fırın çevresindeki sıcak-tozlu bölümler, fabrika betonu, hassas kaplama ve kışın buzlanabilen açık alanlar",
        rota: "şehirler arası sevkiyat, tesis kapı kontrolü, bakım duruşu saati ve makine indirme alanı",
        risk: "fırın hattı, toz toplama kanalı, dar kolon arası ve zemin üzerindeki noktasal yük",
        icIs: "tavan vinci çevresi, aydınlatma, kanal, raf ve üretim hattı bakımı",
        disIs: "silo, baca, fabrika cephesi, çatı kenarı ve açık saha montajı",
    },
    "aydinplatform.net": {
        yer: "Efeler, Nazilli, Söke, Kuşadası ve Didim hattı",
        sektor: "otelcilik, jeotermal enerji, tarım ürünleri işleme, depo ve yapı bakımı",
        saha: "otel içi hassas zemin, peyzajlı cephe çevresi, sıcak jeotermal alan ve tarım işletmesi avlusu",
        rota: "sahil trafiği, işletme kabul saati, misafir veya üretim programı ve nakliye indirme noktası",
        risk: "peyzaj ve saçak üzerinden erişim, sıcak yüzey, açık alan rüzgârı ve faal işletmede alan izolasyonu",
        icIs: "otel atriumu, depo aydınlatması, yangın sistemi ve gıda tesisi bakım işi",
        disIs: "otel cephesi, jeotermal boru hattı, silo, çatı ve saha aydınlatması",
    },
    "bilecikplatform.com": {
        yer: "Bilecik, Bozüyük, Osmaneli ve Söğüt çevresi",
        sektor: "seramik, metal, ambalaj, kimya ve lojistik üretim tesisleri",
        saha: "dar üretim hattı, epoksi zemin, depo betonu, açık stok alanı ve eğimli fabrika yolu",
        rota: "tesis kabul randevusu, vardiya değişimi, şehirler arası taşıma ve boşaltma cebi",
        risk: "kolon-hat arası sınırlı manevra, üst yapı engeli, zemin yükü ve çalışan tesis trafiği",
        icIs: "raf kurulumu, çatı altı tesisat, aydınlatma ve planlı bakım duruşu",
        disIs: "cephe, çelik konstrüksiyon, çatı, baca ve saha aydınlatması",
    },
    "bozuyukplatform.com.tr": {
        yer: "Bozüyük Organize Sanayi Bölgesi ve yakın çevresi",
        sektor: "seramik, cam, metal, ambalaj ve lojistik işletmeleri",
        saha: "üretim hattı araları, yüksek tavanlı depolar, fabrika rampaları ve kış koşullarından etkilenen açık sahalar",
        rota: "OSB güvenlik kaydı, bakım penceresi, fabrika içi ağır araç yolu ve indirme alanı",
        risk: "kısıtlı bakım süresinde doğru geçiş ölçüsü, üretim hatları üzerindeki engel ve güvenli alan ayrımı",
        icIs: "hat üstü bakım, raf, aydınlatma, yangın tesisatı ve kanal çalışmaları",
        disIs: "baca, çatı, dış cephe, saha ekipmanı ve çelik montaj işleri",
    },
    "canakkaleplatform.com": {
        yer: "Çanakkale merkez, Biga, Çan ve Gelibolu hattı",
        sektor: "enerji, liman, seramik, gıda, metal ve inşaat projeleri",
        saha: "rüzgârlı kıyı alanları, enerji tesisi mıcırı, fabrika içi zemin ve yağıştan etkilenen şantiye dolgusu",
        rota: "feribot veya kara yolu seçimi, hava-sefer durumu, tesis kabul saati ve boşaltma alanı",
        risk: "uzak sevkiyat, açık alan rüzgârı, enerji tesisi giriş prosedürü ve değişken zemin",
        icIs: "fabrika tavanı, depo rafı, aydınlatma, tesisat ve bakım duruşu",
        disIs: "enerji ekipmanı, liman deposu, cephe, çelik yapı ve yüksek montaj",
    },
    "platformmanisa.com": {
        yer: "Manisa OSB, Turgutlu, Salihli ve Akhisar hattı",
        sektor: "elektronik, otomotiv, gıda, ambalaj, beyaz eşya ve lojistik tesisleri",
        saha: "temiz üretim bölümü, epoksi kaplı hat çevresi, yüksek depo ve açık fabrika sahası",
        rota: "OSB kapı kaydı, vardiya dışı teslimat, fabrika içi trafik ve nakliye bekleme alanı",
        risk: "temiz alan kuralları, hatlar arasındaki dar geçiş, vardiya trafiği ve üst yapı engelleri",
        icIs: "üretim hattı üstü tesisat, raf, yangın sistemi, aydınlatma ve bakım",
        disIs: "fabrika cephesi, çatı, çelik montaj ve saha aydınlatması",
    },
    "manisaforklift.com": {
        yer: "Manisa OSB, Turgutlu, Akhisar ve Salihli çevresi",
        sektor: "otomotiv, elektronik, gıda, ambalaj, tarım ürünleri ve lojistik operasyonları",
        saha: "epoksi üretim alanı, dar depo koridoru, rampa, asfalt avlu ve yüzeyi bozuk açık stok sahası",
        rota: "OSB girişi, vardiya ve rampa randevusu, ağır araç yolu ve güvenli boşaltma alanı",
        risk: "yük merkezi, görüşü kapatan yük, yaya-araç ayrımı, rampa eğimi ve ataşmanla azalan kapasite",
        icIs: "hammadde kabulü, hat besleme, palet istifi ve bitmiş ürün hazırlığı",
        disIs: "araç yükleme, açık saha istifi, kalıp-makine taşıma ve ağır malzeme transferi",
    },
};

function urunTuru(alt: AltSayfa) {
    const s = `${alt.slug} ${alt.h1}`.toLocaleLowerCase("tr-TR");
    if (s.includes("elektrikli-eklemli")) return {
        ad: "Elektrikli Eklemli Platform",
        temel: "kapalı veya zemini tamamlanmış alanda egzoz emisyonu oluşturmadan, bir engelin üzerinden ya da çevresinden çalışma noktasına ulaşmak",
        olculer: "çalışanın el seviyesi, makine merkezinden hedefe yatay mesafe, aşılacak engelin eni-yüksekliği, kapı-koridor, dönüş cebi, zemin yük sınırı ve sepetin toplam yükü",
        teknik: "çalışma diyagramı, hedef konumdaki yatay erişim ve sepet kapasitesi, şasi-kuyruk dönüşü, kapalı makine yüksekliği, toplam ağırlık, lastik türü, akü ve şarj gerilimi",
        uygun: "düz ve taşıyıcı zeminde AVM, fabrika, depo, hastane veya otel içindeki tesisat, dekorasyon ve hat üstü erişim işi",
        hata: "yalnız çalışma yüksekliğine bakıp engel geometrisini, kuyruk dönüşünü, zemin noktasal yükünü ve vardiyaya yetecek şarj planını gözden kaçırmak",
    };
    if (s.includes("dizel-eklemli")) return {
        ad: "Dizel Eklemli Platform",
        temel: "açık sahada çekiş gerektiren zeminden çalışarak çatı, boru hattı, yapı elemanı veya ekipman engelinin arkasındaki noktaya erişmek",
        olculer: "hedef çalışma kotu, yatay uzaklık, aşılacak engelin eni-yüksekliği, kurulum ve kuyruk dönüş alanı, zemin eğimi, yaklaşma rotası ve sepet yükü",
        teknik: "erişim zarfı, hedef konumdaki sepet kapasitesi, şasi genişliği, toplam ağırlık, 4x4 çekiş ve lastik yapısı, kuyruk dönüşü, tırmanma-eğim sınırı ile rüzgâr limiti",
        uygun: "taşıma kapasitesi doğrulanmış açık saha, şantiye, fabrika dışı, cephe, çelik montaj, silo veya çatı çevresindeki engel aşmalı iş",
        hata: "arazi tipi görünümüne güvenip zemin taşıma kapasitesini veya eğimi ölçmemek ve azami yükseklik değerini bütün erişim zarfında geçerli sanmak",
    };
    if (s.includes("elektrikli-forklift")) return {
        ad: "Elektrikli Forklift",
        temel: "kapalı alanda egzoz emisyonu oluşturmadan, düşük gürültüyle palet ve malzeme taşımak",
        olculer: "en ağır yük, yükün eni-boyu, yük merkezi, rafın üst kotu, en dar koridor, kapı yüksekliği ve asansör serbest kaldırma ihtiyacı",
        teknik: "nominal kapasite, belirtilen yük merkezindeki kalan kapasite, duplex veya triplex asansör, kapalı yükseklik, dönüş yarıçapı, akü tipi ve şarj gerilimi",
        uygun: "düz ve taşıyıcı depo zemini, yeterli havalandırmaya rağmen emisyon istenmeyen üretim alanı ve düzenli şarj molası bulunan vardiya",
        hata: "tonaj etiketine bakıp raf kotundaki kalan kapasiteyi, akü-şarj düzenini veya kapalı asansör yüksekliğini kontrol etmemek",
    };
    if (s.includes("dizel-forklift")) return {
        ad: "Dizel Forklift",
        temel: "açık sahada, rampada veya yoğun vardiyada paletli ve ağır yükleri kontrollü biçimde elleçlemek",
        olculer: "yük ağırlığı ve ölçüsü, ağırlık merkezi, kaldırma kotu, koridor ve kapı, rampa eğimi, zemin bozukluğu ile ataşman ihtiyacı",
        teknik: "yük merkezi tablosu, kaldırma yüksekliğinde kalan kapasite, çatal boyu, sideshift veya özel ataşman, lastik tipi, kabin yüksekliği ve dönüş dairesi",
        uygun: "açık veya iyi yönetilen saha, taşıyıcı zemin, egzoz ve gürültüye uygun işletme kuralı, yeterli manevra ve yaya ayrımı",
        hata: "uzun ya da hacimli yükün merkezini hesaba katmadan nominal kapasite seçmek ve kapalı alanda emisyon riskini göz ardı etmek",
    };
    if (s.includes("makasli")) return {
        ad: "Makaslı Platform",
        temel: "çalışma noktasının doğrudan altında konumlanıp personel ile el aletlerini geniş bir platformda dikey olarak yükseltmek",
        olculer: "çalışanın el seviyesi, tavan veya cephe kotu, kapı-koridor ölçüsü, dönüş alanı, zemin eğimi ve platformda taşınacak toplam yük",
        teknik: "çalışma yüksekliği, platform yüksekliği, uzatma tablası, sepet kapasitesi, makine genişliği-yüksekliği, toplam ağırlık, lastik ve iç/dış kullanım sınıfı",
        uygun: "hedefin altında düz yaklaşma alanı bulunan tavan, aydınlatma, raf, kanal, cephe veya montaj işi",
        hata: "yatay erişim gereken işi makaslı platformla çözmeye çalışmak, korkuluk katlama ölçüsünü veya zemin noktasal yükünü atlamak",
    };
    if (s.includes("eklemli-ve-teleskopik")) return {
        ad: "Eklemli Platform ve Teleskopik Platform",
        temel: "yüksek çalışma noktasına yatay mesafe kat ederek ulaşmak; engel aşma gerekiyorsa Eklemli Platform, açık doğrultuda daha uzun uzanma gerekiyorsa Teleskopik Platform değerlendirmek",
        olculer: "çalışma kotu, makine merkezinden hedefe yatay uzaklık, aşılacak engelin eni ve yüksekliği, sepet yükü, kurulum alanı ve zemin eğimi",
        teknik: "çalışma diyagramındaki erişim zarfı, sepet kapasitesi, kuyruk dönüşü, şasi genişliği, toplam ağırlık, lastik-çekiş yapısı, rüzgâr limiti ve güç türü",
        uygun: "cephe, çatı arkası, boru köprüsü, silo, çelik yapı veya üretim hattı üzerinden erişilen bakım-montaj noktası",
        hata: "yalnız azami çalışma yüksekliğine göre seçim yapıp yatay erişimi, kuyruk dönüşünü veya hedef konumdaki sepet kapasitesini doğrulamamak",
    };
    return null;
}

function urunSeoParagraflari(host: string, alt: AltSayfa, p: TicariAltProfil, u: NonNullable<ReturnType<typeof urunTuru>>): string[] {
    return [
        `${alt.h1} için sağlıklı karar, makinenin adından önce işin hareketini tarif etmekle başlar. ${p.yer} içinde bu ürünün temel amacı ${u.temel} şeklindedir. ${p.sektor} aynı ürün sınıfını farklı gerekçelerle kullanabilir; bu yüzden komşu tesiste çalışan modelin sizin sahaya da uygun olduğu varsayılmaz. Hedef nokta, yük veya personel miktarı, çalışma döngüsü ve çevrede süren faaliyetler birlikte kaydedilir. Talep formuna birkaç fotoğraf eklemek faydalıdır fakat fotoğraf ölçek vermediği için gerçek ölçülerin yerini tutmaz. Ön değerlendirme, ölçü ve saha bilgisiyle yapılır; kesin model güncel uygunluk ve teknik veriler kontrol edildiğinde belirlenir.`,
        `Saha ölçümünde ${u.olculer} açıkça yazılmalıdır. Ölçülerin nereden nereye alındığı fotoğraf üzerinde işaretlenirse yanlış yorum azalır. ${p.risk}, bu hizmet alanındaki ayırt edici koşullardan biridir. Platform için bina yüksekliği ile çalışanın erişeceği el seviyesi karıştırılmamalı; forklift için paletin toplam ağırlığı kadar ağırlık merkezinin çatal yüzüne mesafesi de bilinmelidir. Kapıdan yalnız makinenin gövdesi değil, korkuluk, kabin, asansör veya diğer üst yapı geçecektir. En dar nokta, dönüşten sonraki açıklık ve tavan altındaki tesisatlar ayrı ölçülür. Eksik saha ölçüsü büyük sınıf seçilerek güvenli biçimde telafi edilemez.`,
        `${u.ad} teknik karşılaştırmasında ${u.teknik} seçilen modelin teknik föyünden kontrol edilir. Katalogdaki en yüksek değerler çoğu zaman aynı anda kullanılamaz: erişim uzadıkça izin verilen yük değişebilir, ataşman eklendiğinde forklift kapasitesi azalabilir veya platform yalnız belirli şasi konumunda üst erişim değerine ulaşabilir. Bu nedenle teklif üzerinde yalnız “on iki metre” ya da “üç ton” yazması yeterli değildir. Model belli değilse performans aralığı ve kabul kriterleri tanımlanmalı; sevkten önce önerilen modelin verileri bu kriterlerle karşılaştırılmalıdır. Teknik uygunluk, satış ifadesiyle değil üretici verisi ve gerçek saha ölçüsüyle kanıtlanır.`,
        `${p.saha} zemin ve hareket planında farklı sonuçlar doğurur. Makinenin toplam ağırlığı, teker başına veya denge noktasında oluşabilecek yük, zeminin altındaki boşluklar, rögar-mazgal, kenar mesafesi, eğim ve yüzey kirliliği incelenir. ${u.ad} için uygun kullanım bağlamı genel olarak ${u.uygun} olarak tarif edilebilir; yine de her modelin sınırı ayrıdır. Epoksi veya bitmiş yüzeyde lastik izi ve dönüş hasarı, açık alanda çamur ve yağış, rampada çekiş-frenleme, bodrum üstü döşemede taşıma kapasitesi önem kazanır. Zeminin kapasitesi bilinmiyorsa tahmin yürütülmez; saha yetkilisinin veya ilgili teknik disiplinin onayı alınır.`,
        `İç mekândaki tipik işler ${p.icIs}; dış mekândaki tipik işler ise ${p.disIs} olarak öne çıkar. İçeride gürültü, egzoz, havalandırma, yangın kuralları, lastik izi ve enerji altyapısı; dışarıda çekiş, görüş, yağış, rüzgâr ve yüzey değişimi değerlendirilir. Elektrikli ürün her zaman küçük veya hafif, dizel ürün de her zeminde kullanılabilir kabul edilmemelidir. Akü kapasitesi ile şarj zamanı vardiya akışına, yakıt ikmali işletme prosedürüne yazılmalıdır. Çalışma alanı üretim, misafir, araç ya da yaya trafiğine açıksa bariyerleme, gözcü ve hareket zamanları iş planının parçası olur. Makine tercihi saha kurallarından bağımsız yapılamaz.`,
        `Sevkiyat için ${p.rota} önceden teyit edilir. Nakliye aracının tesis kapısından dönüp dönemeyeceği, boşaltma alanının düz ve taşıyıcı olup olmadığı, rampa kullanımı, bekleme ve kabul saatleri sorulur. Makinenin nakliye konumundaki eni, boyu ve yüksekliği çalışma konumundan farklı olabileceği için teknik föydeki taşıma ölçüleri esas alınır. Güvenlik kaydı, araç ve sürücü belgesi, randevu numarası ya da saha oryantasyonu isteniyorsa liste teklif aşamasında paylaşılmalıdır. Planlanan teslim tarihi, model ve nakliye uygunluğu doğrulanmadan kesin kabul edilmez. Uzak veya özel rotada dönüş nakliyesinin bildirim süresi de yazılı kapsamda yer almalıdır.`,
        `Seçim hataları içinde en önemlisi ${u.hata} davranışıdır. Ayrıca yalnız kiralama birim fiyatına bakmak; gidiş-dönüş nakliye, operatör, yakıt veya şarj, ataşman, fazla çalışma, bekleme ve hasar sorumluluğunu karşılaştırmamak toplam maliyeti belirsiz bırakır. Gereğinden büyük makine daha güvenli olmak zorunda değildir; ek ağırlık, genişlik ve dönüş alanı yeni risk yaratabilir. Gereğinden küçük model ise kullanıcıyı erişim sınırını zorlamaya, yükü yanlış konumlandırmaya veya işi doğaçlama yöntemle tamamlamaya yöneltebilir. Doğru yaklaşım, kabul edilecek teknik sınırları önce yazmak ve teklifleri aynı iş tanımı üzerinden karşılaştırmaktır.`,
        `Teklif dosyasında ürün sınıfı ile mümkünse marka-model, teknik föy, kiralama başlangıç ve bitişi, günlük çalışma saati veya sayaç sınırı, operatör kapsamı, nakliye bedelleri, enerji-yakıt sorumluluğu, bakım ve arıza bildirim yolu, ikame koşulu, ödeme ve iptal maddeleri görülmelidir. İstenen periyodik kontrol veya uygunluk kayıtlarının geçerlilik tarihi makine özelinde kontrol edilir; genel tanıtım dosyası yeterli sayılmaz. Operatörlü hizmette vardiya, fazla çalışma, konaklama-yol ve saha eğitimleri; operatörsüz kiralamada kullanıcı yetkinliği ve teslim eğitimi konuşulur. Dahil-hariç bütün kalemler açık yazılmadan farklı fiyatların gerçekten karşılaştırılabilir olduğu söylenemez.`,
        `Teslim anında model ve seri bilgisi teklif ile eşleştirilir; görünür hasar, lastikler, korkuluk-kabin, çatal veya sepet, enerji seviyesi ve varsa ataşman kayıt altına alınır. Alt ve üst kumandalar, fren, korna, acil durdurma, acil indirme veya ürüne özgü güvenlik işlevleri kullanım kılavuzuna göre yetkili kişi tarafından kontrol edilir. Bu vardiya öncesi kontrol, geçerli periyodik kontrolün yerine geçmez. Uygunsuzluk bulunduğunda makine kullanılmaz, etiketlenir ve yazılı bildirim yapılır. İade sırasında sayaç, yakıt-şarj, anahtar-aksesuar ve görünür durum yeniden kayda alınarak sonradan oluşabilecek anlaşmazlıkların önüne geçilir.`,
        `Saha çalışması boyunca üretici sınırları, risk değerlendirmesi ve sorumlu personelin kararları esas alınır. Makineyi başka amaçla kullanmak, emniyet sistemini devre dışı bırakmak, kapasite dışı insan veya malzeme taşımak kabul edilemez. Platform sepeti vinç değildir; forklift de uygun ve onaylı çözüm olmaksızın insan yükseltmek için kullanılmaz. Hava, zemin, yük, güzergâh veya çalışma noktası değişirse ilk seçim yeniden değerlendirilir. ${p.yer} için fiyat ve teslimat; talep tarihi, makine durumu, rota ve kapsam görülmeden bu içerikte garanti edilmez. Ölçüleri ve iş planını paylaşmak, doğrulanabilir bir teklifin ve kesintisiz bir saha uygulamasının en kısa yoludur.`,
    ];
}

for (const [host, sayfalar] of Object.entries(altSayfalar)) {
    const profil = ticariAltProfiller[host];
    if (!profil) continue;
    for (const alt of sayfalar) {
        const urun = urunTuru(alt);
        if (urun) alt.paragraflar.push(...urunSeoParagraflari(host, alt, profil, urun));
    }
}

export function hostAltSayfalari(host: string): AltSayfa[] {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return altSayfalar[temiz] ?? [];
}

export function altSayfaBul(host: string, slug: string): AltSayfa | undefined {
    return hostAltSayfalari(host).find((s) => s.slug === slug);
}

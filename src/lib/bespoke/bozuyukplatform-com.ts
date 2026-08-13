// ═══════════════════════════════════════════════════════════════════════════
// bozuyukplatform.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bozüyük'ün Ankara-İstanbul karayolu (D-650) ve demiryolu üzerindeki
// konumundan kaynaklanan nakliye terminali / TIR parkı yoğunluğuna odaklı
// yükseltilebilir çalışma platformu kiralama. Açı: terminal aydınlatma
// direkleri, tabela-pano bakımı, güvenlik kamerası montajı, çevre ilçelerin
// (İnönü, Söğüt) bu terminale karayoluyla bağlanması.
//
// ⚠️ Bozüyük'te başka kardeş domainler de var (bozuyukmanlift-*, bozuyukplatform-*
// diğer uzantılar, bilecikplatform-com.ts). Bu dosyanın merceği NAKLİYE
// TERMİNALİ/LOJİSTİK altyapısıdır; üretim hattı, mobilya-orman sanayii veya
// seramik gibi diğer açılarla cümle/tablo/SSS örtüşmesi kurulmamıştır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Firma adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOZUYUKPLATFORM_COM: Record<string, BespokeIcerik> = {
    "bolge:bozuyuk-lojistik-bolgesi": {
        h1: "Bozüyük Nakliye Terminali Çevresinde Platform Kiralama",
        giris:
            "Bozüyük, Ankara-İstanbul karayolunun (D-650) ve aynı hatta paralel giden demiryolunun kesiştiği bir konumda bulunduğu için, ilçenin çeperinde yıllar içinde bir nakliye ve TIR parkı yoğunluğu oluşmuş durumda. Akaryakıt istasyonları, dinlenme tesisleri, nakliye firması depoları ve yük transfer alanları bu koridor boyunca sıralanır. Buradaki iş taleplerimiz üretim hattından değil, terminal işletmesinin kendi altyapısından gelir: giriş-çıkış barkovizyonlarının üzerindeki aydınlatma, saha genelini gören güvenlik kamerası direkleri, uzaktan okunması gereken tabela ve pano yüzeyleri. Terminal sahipleri için ortak sorun, bu yapıların çoğunun sabit bir vinç veya iskele ile değil, günü birlik ve hızlı çözülmesi gereken bir arıza ya da periyodik bakım olarak ortaya çıkmasıdır. Biz de teklifi buna göre kuruyoruz: geniş, düz ve açık sahalarda hızlı kurulabilen, gece de çalışabilen bir makine profili.",
        maddeler: [
            {
                baslik: "Saha aydınlatma direkleri ve armatür değişimi",
                metin:
                    "Terminal sahalarındaki aydınlatma direkleri genellikle 8-12 metre bandında, geniş aralıklarla yerleştirilmiş projektör kolonlarıdır. Armatür arızası gece görüşünü doğrudan etkilediği için bu işler çoğunlukla acil kategoride gelir. Direk tabanına erişimin sınırlı olduğu, çevresinde park hâlinde araç bulunan sahalarda teleskopik bir makinenin uzun yatay uzanması, aracın taşınmasını beklemeden çalışmaya izin verir.",
            },
            {
                baslik: "Güvenlik kamerası direkleri ve saha görüş açısı",
                metin:
                    "Terminal işletmelerinde kamera direği konumu, giriş-çıkış hattını ve saha köşelerini görecek şekilde önceden planlanır; bu yüzden direk taşınamaz, yalnızca üzerindeki ekipman değişir. Kamera açısının doğru ayarlanması için teknisyenin sepette bir süre sabit durup görüntüyü canlı kontrol etmesi gerekir — bu, sepetin hassas mikro hareket yapabilmesini önemli kılar.",
            },
            {
                baslik: "Tabela ve pano yüzeyleri: yol kenarı erişimi",
                metin:
                    "Karayoluna bakan büyük tabela ve pano yüzeyleri, hem yükseklik hem yol kenarı trafiği nedeniyle ayrı bir dikkat ister. Çalışma sırasında makinenin yol omzuna taştığı noktalarda trafik uyarı önlemi alınır, iş mümkün olduğunda trafiğin görece sakin olduğu saatlere çekilir. Geniş yüzeyli panolarda bom tipi makinenin yatay tarama hareketi, defalarca makine konumu değiştirmekten daha hızlı sonuç verir.",
            },
            {
                baslik: "Depo ve yük transfer alanlarında çatı-cephe bakımı",
                metin:
                    "Nakliye firmalarının transfer depoları genellikle geniş açıklıklı, tek katlı çelik yapılardır. Çatı oluğu temizliği, cephe aydınlatması ve yükleme kapısı üstü tente bakımı bu yapılarda sık talep edilir. Zemin çoğunlukla beton ve düzdür; bu da akülü makaslı platformu günlük operasyonu aksatmadan içeri alınabilecek en pratik seçenek yapar.",
            },
            {
                baslik: "Gece ve hafta sonu çalışma penceresi",
                metin:
                    "Terminal trafiği gün boyu kesintisiz sürdüğü için bazı işler ancak trafiğin en düştüğü gece saatlerinde ya da hafta sonu yapılabilir. Bu pencerelerde sessiz çalışan akülü makineler, hem çevredeki bekleme alanlarını rahatsız etmez hem de operasyonu durdurmadan ilerlemeyi mümkün kılar. Gece işlerinde makinenin kendi çalışma alanı reflektörlü şeritle işaretlenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Terminal yapı tipine göre makine seçimi",
                paragraflar: [
                    "Bozüyük'teki lojistik bölgesinde iş aldığımız yapı tiplerini ve bunlara uygun makine sınıfını aşağıdaki tabloda topladık; teklif öncesi bu çerçeveden başlıyoruz.",
                ],
                tablo: {
                    basliklar: ["Yapı/alan tipi", "Tipik yükseklik", "Ana kısıt", "Uygun platform"],
                    satirlar: [
                        ["Saha aydınlatma direği", "8 – 12 m", "Geniş aralık, açık alan", "Teleskopik bom"],
                        ["Kamera direği", "6 – 10 m", "Hassas konumlama", "Eklemli veya teleskopik"],
                        ["Yol kenarı tabela/pano", "6 – 14 m", "Trafik yakınlığı", "Bom tipi, yatay uzanma"],
                        ["Transfer deposu çatı/cephe", "6 – 9 m", "Zemin, operasyon devamlılığı", "Akülü makaslı"],
                        ["Giriş barkovizyonu üstü", "4 – 6 m", "Dar çalışma alanı", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Açık sahada rüzgâr ve zemin",
                paragraflar: [
                    "Terminal sahaları genellikle çevresinde yüksek yapı bulunmayan, açık ve rüzgâra maruz alanlardır. Bu yüzden yüksek işlerde önceden rüzgâr durumu kontrol edilir ve makinenin üretici tarafından belirlenen rüzgâr sınırı esas alınır. Zemin tarafında saha genelde sıkıştırılmış stabilize veya kaba beton olabilir; bu durumda geniş tekerlekli bir gövde tercih edilir.",
                    "Sahanın bir bölümü hâlâ toprak ya da yeni dolgu ise, makine konumlandırılmadan önce zemin taşıma durumu gözle kontrol edilir; gerekirse zemin plakası kullanılır. Bu kontrolü atlamak, açık sahalarda en sık karşılaşılan devrilme riskinin kaynağıdır.",
                ],
            },
            {
                baslik: "Operasyonu durdurmadan planlama",
                paragraflar: [
                    "Bir nakliye terminalinde trafiği durdurmak maliyetlidir; bu yüzden iş planını terminal işletmesinin trafik yoğunluk saatlerine göre kuruyoruz. Giriş-çıkış hattına yakın işler mümkünse gece ya da düşük trafik saatlerine alınır, geniş depo içi işler ise mesai saatinde ama araç trafiğinden ayrılmış bir koridorda yürütülür.",
                    "Birden fazla direk veya pano aynı sahada değişecekse, makineyi tek sevkiyatla getirip günün tamamında sırayla kullanmak, her iş için ayrı sevkiyat yapmaktan daha ekonomik olur. Bu planlamayı biz kuruyoruz, sizden istediğimiz tavan iş listesinin önceden netleşmesi.",
                ],
            },
        ],
        sss: [
            {
                soru: "Terminal sahamızda gece çalışma yapabilir misiniz?",
                cevap:
                    "Yapabiliriz; akülü makineler sessiz çalıştığı için gece bekleme alanlarını rahatsız etmez. Gece işlerinde makinenin çalışma alanını reflektörlü şeritle işaretliyoruz, gerekirse taşınabilir aydınlatma getiriyoruz. Tek şart, dizel değil akülü bir makine sınıfının seçilmesi ve sahada araç trafiğinin bulunduğu koridorlardan ayrı bir çalışma alanı belirlenmesidir. Gece penceresi genellikle trafiğin en düştüğü saatlerde açılır, bu saati sizinle birlikte belirliyoruz.",
            },
            {
                soru: "Yol kenarındaki tabelamız yüksek ve trafiğe yakın; nasıl çalışıyorsunuz?",
                cevap:
                    "Bu tür işlerde önce makinenin yol omzuna ne kadar taşacağını ölçüyoruz. Taşma varsa trafik uyarı önlemi alınır ve iş mümkün olduğunca trafiğin sakin olduğu saatlere çekilir. Yüksek ve geniş yüzeyli panolarda bom tipi bir makine tercih ediyoruz, çünkü tek bir konumdan yatay tarama yaparak defalarca yer değiştirmeden yüzeyin tamamına ulaşılabiliyor. Rüzgârlı günlerde yol kenarı çalışmasını üreticinin belirlediği rüzgâr sınırına göre erteliyoruz.",
            },
            {
                soru: "Kamera direğimizin açısı bozulmuş, yeniden ayarlanabilir mi?",
                cevap:
                    "Evet, bu işlerde sepette teknisyenin bir süre sabit durup görüntüyü canlı kontrol etmesi gerekir. Bunun için sepetin hassas mikro hareket yapabilen bir makine seçiyoruz; kaba hareketli bir makine ayar sürecini uzatır. İşlem sırasında görüntüyü izleyecek bir ekranın sahada bulunması, ayarın tek seferde tamamlanmasını sağlıyor. Direğin taşınması söz konusu değildir, yalnızca üzerindeki ekipmana erişim sağlanır.",
            },
            {
                soru: "Sahamız açık ve rüzgârlı, bu bir sorun oluşturur mu?",
                cevap:
                    "Rüzgâr, açık sahalardaki en gerçek kısıttır ve makinenin üretici tarafından belirlenen rüzgâr sınırı aşıldığında sepet yükseltilemez. Bu kural esnetilemez. Yüksek işlerde çalışma öncesi hava durumu kontrol edilir, rüzgârlı günlerde iş ertelenir ya da alçak profilli bir makineye geçilir. Zemin tarafında da stabilize veya toprak alanlarda geniş tekerlekli gövde tercih ederek devrilme riskini azaltıyoruz.",
            },
            {
                soru: "Aynı sahada birden fazla direk ve pano değişecek, tek seferde çözülebilir mi?",
                cevap:
                    "Genellikle en ekonomik yol budur. Tavan iş listesini önceden çıkarıp makineyi tek sevkiyatla getiriyor, gün içinde sırayla tüm noktaları dolaşıyoruz. Bu, hem nakliye bedelini tekilleştirir hem terminal trafiğinin birden fazla kez kesilmesini önler. Sizden istediğimiz, hangi direk ve panoların değişeceğinin ve sıralamanın önceden netleşmesidir; sahada karar değişikliği günü uzatır.",
            },
            {
                soru: "İnönü veya Söğüt tarafından gelen bir işletme için de hizmet veriyor musunuz?",
                cevap:
                    "Evet, terminal bölgesi karayolu bağlantısı nedeniyle çevre ilçelerden gelen taleplere de yakın konumdadır. İnönü ve Söğüt yönünden gelen işletmelerde önce yol durumu ve mesafe konuşulur, ardından aynı sevkiyat planına dahil edilir. Yakın tarihli başka bir işiniz varsa aynı güne toplayarak nakliye payını paylaşabiliriz; bu, özellikle küçük ölçekli işletmeler için maliyeti belirgin şekilde düşürür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Ankara-İstanbul karayolu (D-650) ve demiryolu üzerindeki konumu ile bu güzergâhtaki nakliye/lojistik yoğunluğu kamuya açık coğrafi bilgidir; rüzgâr sınırı ve zemin taşıma kuralları makine üretici talimatları ve İSG pratiğinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk-merkez": {
        h1: "Bozüyük Merkezde Platform Kiralama",
        giris:
            "Bozüyük ilçe merkezi, karayolu koridorunun getirdiği nakliye hareketliliğinin yanı sıra kendi ticari ve kurumsal dokusunu da taşır: çarşı hattındaki işyerleri, akaryakıt istasyonları, banka ve kurum binaları, okul ve sağlık yapıları. Merkezdeki platform talepleri terminal bölgesinden farklı bir profil çizer — burada iş çoğunlukla dar sokak, sınırlı park alanı ve yaya yoğunluğu ile birlikte gelir. Bir cephe aydınlatması ya da tabela değişimi, terminal sahasındaki gibi geniş ve boş bir alanda değil, karşı kaldırımda yayaların geçtiği bir hatta yapılır. Bu yüzden merkezdeki işlerde makine seçimini erişim yüksekliğinden çok, sokağın genişliği ve park koşulu belirler.",
        maddeler: [
            {
                baslik: "Dar sokak ve kısıtlı park alanı",
                metin:
                    "Merkez çarşı hattında araç trafiği ve park yeri sınırlıdır; büyük bir platformun bu sokaklarda manevra yapması güçtür. Bu yüzden merkez işlerinde kompakt gövdeli akülü makineler öne çıkar. Makinenin duracağı nokta ile çalışma noktası arasındaki mesafe önceden konuşulur, gerekirse geçici park izni için ilgili kuruma bilgi verilir.",
            },
            {
                baslik: "Yaya trafiğine açık cephelerde alan güvenliği",
                metin:
                    "Çarşı ve kurum binası cephelerinde çalışma sırasında yaya geçişi kesilmez, bunun yerine çalışma alanı bariyerle çevrilir ve makinenin altına örtü serilir. Yoğun saatlerde çalışmak yerine mümkün olduğunda öğle arası sonrası ya da akşam saatine geçiliyoruz; bu, hem güvenlik hem hız açısından avantaj sağlıyor.",
            },
            {
                baslik: "Kurum ve okul binalarında pencere planlaması",
                metin:
                    "Kamu binaları, okul ve sağlık yapılarında yüksek erişim işi kullanım saatleri dışında yapılır. Bina yetkilisiyle birlikte teslimat ve çalışma saatini yazılı olarak netleştiriyoruz; refakat, anahtar ve alarm düzeni bu görüşmede belirlenir. Akülü makinelerin sessiz çalışması, akşam saatlerinde çevredeki konutları rahatsız etmemesini sağlıyor.",
            },
            {
                baslik: "Ticari işletmelerde tabela ve cephe aydınlatması",
                metin:
                    "Çarşı hattındaki işletmelerin tabela ve cephe aydınlatma işleri genellikle kapanış sonrası saatlere alınır. Zemin çoğunlukla asfalt veya kilit taşıdır; iz bırakmayan lastikli bir makine tercih edilir. Kısa süren bu işlerde operatörlü kiralama, ekstra planlama gerektirmeden en hızlı çözümü sunar.",
            },
            {
                baslik: "Merkeze yakın küçük sanayi ve depo yapıları",
                metin:
                    "Merkezin çeperinde küçük ölçekli imalat ve depo yapıları da bulunur. Bu yapılarda çatı, aydınlatma ve raf üstü bakım işleri talep edilir; zemin genelde beton olduğu için akülü makaslı platform en pratik seçenektir. İşletme kapalıyken çalışmayı tercih eden işletmeler için hafta sonu planlaması yapıyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkez sokaklarında yapı tipine göre makine",
                paragraflar: [
                    "Merkezdeki iş çeşitliliğini yapı tipi ve sokak koşuluna göre sınıflandırıyoruz; aşağıdaki tablo keşif görüşmesinde kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Sokak koşulu", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Çarşı işletmesi cephesi", "Dar, yaya yoğun", "Park ve manevra", "Kompakt akülü"],
                        ["Kurum/okul binası", "Orta genişlik", "Kullanım saati", "Akülü makaslı"],
                        ["Kamu meydanı çevresi", "Açık alan", "Yaya güvenliği", "Akülü eklemli"],
                        ["Küçük sanayi/depo", "Beton zemin", "Operasyon devamlılığı", "Akülü makaslı"],
                        ["Konut sitesi çevresi", "Dar iç yol", "Gürültü, gece kısıtı", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Teslimat saati ve güzergâh planı",
                paragraflar: [
                    "Merkezdeki trafik yoğunluğu sabah ve akşam saatlerinde belirgin şekilde artar. Bu yüzden teslimat saatini genellikle öğle arasına ya da akşam trafiğinin düştüğü saate göre planlıyoruz. Aracın duracağı nokta ile çalışma alanı arasındaki mesafe önceden belirlenmezse, makinenin indirilmesi beklenenden uzun sürebilir.",
                    "Aynı sokakta ya da yakın adreslerde birden fazla işletmenin talebi varsa bunları tek güne toplayarak nakliye maliyetini paylaştırıyoruz. Bu model merkezdeki küçük işletmeler arasında sık uygulanıyor.",
                ],
            },
            {
                baslik: "Gürültü ve çevre hassasiyeti",
                paragraflar: [
                    "Merkezde konut ve işyerlerinin iç içe olduğu bölgelerde gürültü hassasiyeti yüksektir. İçten yanmalı bir makine bu bölgelerde tercih edilmez; akülü makineler hem gürültü hem egzoz açısından bu ortama uygundur.",
                    "Akşam saatlerinde yapılan işlerde çevre işyerlerine ve konutlara önceden bilgi verilmesi, olası şikâyetleri önlüyor. Bu bildirimi genellikle işi veren işletme yapar, biz de çalışma saatini bu bilgiye göre kesinleştiriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çarşı hattındaki dükkânımızın tabelası bozuldu, ne kadar sürede gelebilirsiniz?",
                cevap:
                    "Merkezdeki kısa süreli işlerde genellikle aynı gün ya da ertesi gün içinde planlama yapabiliyoruz. Öncelik, sokağın genişliği ve makinenin park edebileceği noktanın belirlenmesidir; bu bilgi netleşince kompakt bir akülü makineyle operatörlü kiralama en hızlı çözümü sunar. Kapanış saatinden sonra çalışmayı tercih ederseniz yaya trafiğinden de etkilenmemiş oluruz.",
            },
            {
                soru: "Sokağımızda park yeri neredeyse yok, makine nasıl konumlanıyor?",
                cevap:
                    "Bu durumda kompakt gövdeli, dar geçişlerden geçebilen bir makine seçiyoruz. Makinenin ineceği nokta ile çalışma alanı arasındaki mesafeyi önceden belirliyoruz; gerekirse kısa mesafeyi kendi tahrikiyle kat ediyor. Geçici park için ilgili kuruma bilgi vermeniz gerekiyorsa bunu birlikte planlıyoruz, sahada beklenmedik bir sorun çıkmasını istemiyoruz.",
            },
            {
                soru: "Okulumuzda ders saatleri dışında bir çalışma yapılabilir mi?",
                cevap:
                    "Yapılabilir ve zaten önerdiğimiz düzen budur. Okul yetkilisiyle birlikte teslimat saatini, çalışma başlangıç-bitiş saatini ve refakat düzenini yazılı olarak netleştiriyoruz. Akülü makineler sessiz çalıştığı için ders dışı saatlerde de çevredeki idari işleyişi bozmuyor. Zemin koruma örtüsü kullanıyor, iş bitiminde alanı temiz teslim ediyoruz.",
            },
            {
                soru: "Merkeze yakın küçük atölyemizde çatı bakımı yapılacak, zemin uygun mu?",
                cevap:
                    "Küçük sanayi yapılarının zemini genellikle betondur, bu da akülü makaslı platformu en pratik seçenek yapar. Zeminin durumunu ve çatıya erişim yüksekliğini keşifte kontrol ediyoruz. İşletme açıkken çalışma operasyonu etkileyeceği için, tercih edilirse hafta sonuna planlıyoruz; bu, hem sizin hem bizim için daha rahat bir çalışma temposu sağlıyor.",
            },
            {
                soru: "Akşam saatinde çalışma yapacağız, çevre işyerleri rahatsız olur mu?",
                cevap:
                    "Akülü makineler içten yanmalı makinelere göre belirgin şekilde daha sessiz çalışır, bu yüzden akşam işlerinde tercihimiz her zaman bu yöndedir. Yine de çevredeki işyerlerine ve konutlara önceden bilgi verilmesini öneriyoruz; bu bildirimi genellikle işi veren taraf yapıyor. Çalışma alanını bariyerle çevirip iş bitiminde temiz teslim ediyoruz.",
            },
            {
                soru: "Aynı sokaktaki birkaç işletme birlikte kiralama yapabilir mi?",
                cevap:
                    "Yapabilir ve merkezde sık uyguladığımız bir model bu. Aynı sokak ya da yakın adreslerdeki işletmelerin taleplerini tek güne topluyor, makineyi bir kez indirip sırayla kullanıyoruz. Nakliye bedeli bölünür, her işletme yalnızca kendi kullanım süresini üstlenir. Sırayı ve saat planını biz kurguluyoruz, sizden istediğimiz sadece tarih esnekliği.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük merkezin çarşı-kurumsal dokusu ve karayolu koridorundaki konumu kamuya açık genel bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:inonu": {
        h1: "İnönü'de Platform Kiralama",
        giris:
            "Eskişehir'in İnönü ilçesi, Bozüyük'e komşu konumu ve karayolu bağlantısı nedeniyle nakliye terminali bölgesine yakın çalışma alanlarından biridir. İlçenin kendi ölçeği küçüktür; burada platform talepleri genellikle kamu binaları, küçük işletmeler ve ilçe merkezindeki ticari yapılardan gelir. Bozüyük'teki terminal sahasına olan yakınlık, buradaki işleri lojistik açıdan avantajlı kılar — makine aynı güzergâh üzerinden kısa sürede ulaşabilir. Buna karşılık ilçenin kendi yol ve zemin koşulları merkez ilçelerden farklıdır; bu yüzden her işte önce ulaşım ve zemin bilgisini netleştiriyoruz.",
        maddeler: [
            {
                baslik: "Bozüyük terminaline yakınlığın getirdiği avantaj",
                metin:
                    "İnönü, karayolu üzerinden Bozüyük'teki terminal bölgesine kısa mesafededir. Bu, makinenin aynı sevkiyat güzergâhı üzerinden hızlı ulaşabilmesi anlamına gelir. Terminal bölgesinde zaten planlı bir işimiz varsa İnönü'deki talebi aynı güne ekleyerek nakliye payını paylaştırabiliyoruz; bu, küçük ölçekli işler için belirgin bir maliyet avantajı sağlıyor.",
            },
            {
                baslik: "İlçe merkezinde dar yol ve sınırlı erişim",
                metin:
                    "İlçe merkezindeki sokaklar dar ve araç trafiği sınırlıdır; büyük gövdeli bir makinenin buraya girmesi güçtür. Bu yüzden ilçe merkezindeki işlerde kompakt akülü makineler tercih edilir. Makinenin ineceği nokta ile çalışma alanı arasındaki mesafeyi önceden netleştiriyoruz.",
            },
            {
                baslik: "Kamu binaları ve okul yapılarında pencere",
                metin:
                    "İlçedeki kamu binaları ve okullarda yüksek erişim işi kullanım saatleri dışında planlanır. Kurum görevlisiyle birlikte teslimat ve çalışma saatini netleştiriyor, refakat düzenini önceden belirliyoruz. Bu, küçük ilçelerde sıkça karşılaştığımız ve kolayca çözülebilen bir planlama meselesidir.",
            },
            {
                baslik: "Küçük işletmelerde tek seferlik iş planı",
                metin:
                    "İlçedeki küçük işletmelerin platform ihtiyacı genellikle yılda bir-iki kez, kısa süreli bir bakım veya tabela işidir. Bu profildeki işlerde operatörlü kiralama, ayrı bir belge süreci gerektirmeden en hızlı çözümü sunar. Sevkiyat planını, aynı hat üzerindeki başka bir talep varsa ona göre birleştiriyoruz.",
            },
            {
                baslik: "Kırsal çevrede zemin ve mesafe",
                metin:
                    "İlçe merkezi dışındaki köy ve mahallelerde zemin çoğunlukla toprak ya da stabilizedir. Bu durumda arazi tipi bir makine tercih edilir ve mesafeye göre ek sevkiyat süresi hesaba katılır. Yağış sonrası zemin yumuşamışsa çalışmayı erteliyoruz; bu ilçede devrilme riskinin en sık kaynağı zemin koşullarıdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçe genelinde yapı tipi ve makine eşleşmesi",
                paragraflar: [
                    "İnönü'deki işleri yapı tipi ve konuma göre sınıflandırıyoruz; aşağıdaki tablo keşif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Konum", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["İlçe merkezi işletmesi", "Merkez, dar sokak", "Manevra alanı", "Kompakt akülü"],
                        ["Kamu binası/okul", "Merkez", "Kullanım saati", "Akülü makaslı"],
                        ["Köy/mahalle yapısı", "Kırsal", "Zemin, mesafe", "Arazi tipi eklemli"],
                        ["Küçük depo/atölye", "Merkez çeperi", "Beton zemin", "Akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Terminal sevkiyatıyla birleştirme",
                paragraflar: [
                    "İnönü'deki tek başına küçük bir iş için nakliye bedeli, iş bedelinin önemli bir bölümünü oluşturabilir. Bu yüzden mümkün olduğunda talebi Bozüyük terminal bölgesindeki planlı sevkiyatlarla birleştiriyoruz; araç aynı gün içinde iki noktaya uğrar.",
                    "Bu birleştirme, acil olmayan işlerde birkaç günlük tarih esnekliği gerektirir. Karşılığında nakliye bedeli belirgin şekilde düşer; küçük işletmeler için bu fark önemli bir teşviktir.",
                ],
            },
            {
                baslik: "Kırsal işlerde hazırlık",
                paragraflar: [
                    "Köy ve mahalle yapılarına giden işlerde teslimattan önce yol durumunu ve zemin cinsini soruyoruz. Stabilize ya da toprak yolda taşıyıcı aracın geçip geçemeyeceği, gerekirse makinenin giriş noktasında indirilip kendi tahrikiyle ilerletilmesi önceden planlanır.",
                    "Yağışlı dönemlerde zemin taşıma gücü düşer; bu durumda çalışmayı hava koşulu uygun olan bir sonraki güne erteliyoruz. Kırsal işlerde bu esnekliği sözleşmeye baştan yazıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "İnönü'ye Bozüyük'ten ne kadar sürede makine gelir?",
                cevap:
                    "Karayolu bağlantısı kısa olduğu için genellikle aynı gün içinde ulaşım sağlanabiliyor. Kesin süre, o gün terminal bölgesinde planlı başka bir sevkiyat olup olmadığına ve İnönü'deki çalışma noktasının merkeze veya kırsala olan konumuna göre değişir. Talebinizi aldığımızda güzergâhı netleştirip size net bir saat aralığı veriyoruz.",
            },
            {
                soru: "İlçe merkezindeki dükkânımızın tabelası için makine gelebilir mi?",
                cevap:
                    "Gelebilir; merkezdeki dar sokaklar için kompakt gövdeli akülü bir makine kullanıyoruz. Makinenin ineceği nokta ile dükkânınız arasındaki mesafeyi önceden belirliyoruz. Kısa süren bu tür işlerde operatörlü kiralama en hızlı çözüm oluyor, ayrı bir belge süreci gerekmiyor.",
            },
            {
                soru: "Okulumuzda ders saatleri dışında çalışma planlayabilir miyiz?",
                cevap:
                    "Evet, kurum görevlisiyle birlikte teslimat ve çalışma saatini netleştirip refakat düzenini önceden belirliyoruz. Akülü makineler sessiz çalıştığı için ders dışı saatlerde de rahatsızlık oluşturmuyor. Zemin koruma örtüsü kullanıp iş bitiminde alanı temiz teslim ediyoruz.",
            },
            {
                soru: "Köyümüzdeki yola stabilize sonrası ulaşım nasıl sağlanıyor?",
                cevap:
                    "Taşıyıcı araç stabilize yolun taşıma gücüne göre mümkün olduğunca ilerler; yol durumu uygun değilse makineyi giriş noktasında indirip kendi tahrikiyle çalışma alanına götürüyoruz. Bu durumda arazi tipi, geniş tekerlekli bir makine tercih ediyoruz. Yolun bir fotoğrafını ve yaklaşık mesafeyi önceden isteyerek planı netleştiriyoruz.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, nakliye maliyeti yüksek çıkar mı?",
                cevap:
                    "Tek başına küçük bir iş için nakliye payı gerçekten belirgin olabilir. Bunu azaltmanın yolu, talebinizi Bozüyük terminal bölgesindeki planlı sevkiyatlarla birleştirmektir; araç aynı gün iki noktaya uğrar ve nakliye bedeli paylaşılır. Acil değilse birkaç günlük tarih esnekliği vermeniz, bu birleştirmeyi mümkün kılıyor.",
            },
            {
                soru: "Yağış sonrası sahamıza gelinebilir mi?",
                cevap:
                    "Zemin durumuna bağlı. Stabilize veya toprak zeminde yağış sonrası taşıma gücü düşer ve bu durumda hem taşıyıcı araç hem makine için risk oluşur. Böyle bir durumda çalışmayı zeminin kuruduğu bir sonraki güne erteliyoruz; bu esnekliği baştan sözleşmeye yazıyoruz, ek bir ceza doğmuyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İnönü'nün Eskişehir iline bağlı olması ve Bozüyük'e komşu, karayoluyla bağlantılı konumu kamuya açık coğrafi bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:sogut": {
        h1: "Söğüt'te Platform Kiralama",
        giris:
            "Söğüt, Bilecik'in tarihî kimliğiyle öne çıkan ilçelerinden biridir ve bugün hem ilçe merkezindeki ticari-kurumsal yapı stoku hem de çevresindeki tarımsal alanlarla karma bir talep profili taşır. Buradaki platform işleri Bozüyük'teki terminal yoğunluğundan farklıdır; burada büyük ölçekli lojistik yapı yerine küçük işletmeler, kamu binaları ve tarımsal depo yapıları öne çıkar. İlçenin Bozüyük'e karayoluyla bağlı olması, buradaki sevkiyatları terminal bölgesindeki planlı işlerle birleştirmeyi kolaylaştırır. Söğüt'te doğru makine, en yükseğe çıkan değil, dar sokaktan geçen ve kısa sürede kurulup sökülebilen makinedir.",
        maddeler: [
            {
                baslik: "İlçe merkezinde dar sokak ve tarihi doku",
                metin:
                    "Söğüt merkezinin bir bölümü eski yerleşim dokusunu korur; sokaklar dar, araç trafiği sınırlıdır. Bu bölgede kompakt gövdeli akülü makineler tercih edilir. Tarihi doku içindeki cephe ve tabela işlerinde zemin koruma örtüsü kullanılır, makinenin izleyeceği güzergâh önceden belirlenir.",
            },
            {
                baslik: "Kamu ve kurum binalarında planlama",
                metin:
                    "İlçedeki kamu binaları, okul ve sağlık yapılarında yüksek erişim işi kullanım saatleri dışında yapılır. Kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz; bu, küçük ilçelerde sık karşılaştığımız ve kolayca çözülen bir planlama adımıdır.",
            },
            {
                baslik: "Tarımsal depo ve ahır yapılarında zemin",
                metin:
                    "İlçe çevresindeki tarımsal depo ve ahır yapılarında zemin çoğunlukla toprak ya da parçalı betondur. Bu zeminlerde arazi tipi, geniş tekerlekli bir makine tercih edilir; gerekirse zemin plakası kullanılır. Hasat dönemleri bu yapıların en yoğun kullanıldığı zaman olduğu için bakım işlerini hasat öncesi ya da sonrasına planlamak öneriliyor.",
            },
            {
                baslik: "Bozüyük terminaline yakınlığın avantajı",
                metin:
                    "Söğüt, karayoluyla Bozüyük'e bağlıdır ve bu bağlantı sevkiyat planlamasında avantaj sağlar. Terminal bölgesinde planlı bir işimiz varsa Söğüt'teki talebi aynı güne ekleyip nakliye payını paylaştırabiliyoruz. Bu, özellikle küçük ölçekli işler için belirgin bir maliyet avantajı sunuyor.",
            },
            {
                baslik: "Küçük işletmelerde tek seferlik bakım işleri",
                metin:
                    "İlçedeki küçük işletmelerin platform ihtiyacı genellikle yılda bir-iki kez ortaya çıkan, kısa süreli bir tabela veya aydınlatma işidir. Bu profildeki işlerde operatörlü kiralama en hızlı çözümü sunar; ayrı bir belge süreci gerekmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre makine seçimi",
                paragraflar: [
                    "Söğüt'teki işleri yapı tipi ve zemin koşuluna göre sınıflandırıyoruz; aşağıdaki tablo keşif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Konum", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Merkez işletmesi/tabela", "Tarihi doku, dar sokak", "Manevra alanı", "Kompakt akülü"],
                        ["Kamu binası/okul", "Merkez", "Kullanım saati", "Akülü makaslı"],
                        ["Tarımsal depo/ahır", "Kırsal", "Zemin, mevsim", "Arazi tipi eklemli"],
                        ["Küçük atölye/depo", "Merkez çeperi", "Beton zemin", "Akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Sevkiyatı terminal bölgesiyle birleştirmek",
                paragraflar: [
                    "Söğüt'te tek başına küçük bir iş için nakliye payı bedelin önemli bir kısmını oluşturabilir. Bunu azaltmak için talebi Bozüyük terminal bölgesindeki planlı sevkiyatlarla birleştiriyoruz; araç aynı gün iki noktaya uğrar.",
                    "Bu model, acil olmayan işlerde birkaç günlük tarih esnekliği gerektirir; karşılığında nakliye bedeli belirgin şekilde düşer.",
                ],
            },
            {
                baslik: "Hasat dönemine göre bakım takvimi",
                paragraflar: [
                    "Tarımsal depo ve ahır yapıları hasat döneminde yoğun kullanımdadır; bakım işleri için doğal pencere hasat öncesi ve sonrasıdır. Bu dönemlerde talep artışı olduğu için erken planlama, tercih ettiğiniz tarihi güvence altına alır.",
                    "Hasat dönemi dışında yapılan bakım, hem işletme için daha az aksama hem bizim için daha esnek bir sevkiyat planı anlamına geliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tarihi merkezdeki dükkânımızın cephesi için makine gelebilir mi?",
                cevap:
                    "Gelebilir; tarihi dokudaki dar sokaklar için kompakt gövdeli akülü bir makine kullanıyoruz. Çalışma öncesi zemine koruma örtüsü seriyoruz ve makinenin izleyeceği güzergâhı önceden belirliyoruz. Kısa süren bu işlerde operatörlü kiralama en hızlı çözümü sunuyor.",
            },
            {
                soru: "Ahırımızın çatısında bakım yapılacak, zemin toprak; sakıncası var mı?",
                cevap:
                    "Önlemsiz çalışmıyoruz. Toprak veya parçalı beton zeminde arazi tipi, geniş tekerlekli bir makine tercih ediyoruz; gerekirse zemin plakası seriyoruz. Yağış sonrası zemin yumuşamışsa çalışmayı erteliyoruz. Hasat dönemi dışındaki bir tarihte planlarsanız hem zemin hem yoğunluk açısından daha rahat ilerliyoruz.",
            },
            {
                soru: "Okulumuzda ders saatleri dışında çalışma yapılabilir mi?",
                cevap:
                    "Evet, kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz. Akülü makineler sessiz çalıştığı için ders dışı saatlerde de idari işleyişi bozmuyor. Zemin koruma örtüsü kullanıp iş bitiminde alanı temiz teslim ediyoruz.",
            },
            {
                soru: "Söğüt'e Bozüyük'ten makine ne kadar sürede ulaşır?",
                cevap:
                    "Karayolu bağlantısı sayesinde genellikle aynı gün içinde ulaşım sağlanabiliyor. Kesin süre, o gün terminal bölgesinde planlı başka bir sevkiyat olup olmadığına göre değişir. Talebinizi aldığımızda güzergâhı netleştirip net bir saat aralığı veriyoruz.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, maliyeti düşürmenin yolu var mı?",
                cevap:
                    "Var; talebinizi Bozüyük terminal bölgesindeki planlı sevkiyatlarla birleştirerek nakliye payını paylaştırabiliyoruz. Bunun için acil olmayan işlerde birkaç günlük tarih esnekliği vermeniz yeterli. Bu model küçük işletmeler için belirgin bir maliyet avantajı sağlıyor.",
            },
            {
                soru: "Hasat döneminde bakım işi yaptırabilir miyiz?",
                cevap:
                    "Yaptırabilirsiniz ancak bu dönemde depo ve ahır yapıları en yoğun kullanıldığı için talep de artıyor. Mümkünse bakımı hasat öncesi ya da sonrasına planlamanızı öneriyoruz; bu hem işletmeniz için daha az aksama hem bizim için daha esnek bir sevkiyat anlamına geliyor. Hasat döneminde talep ederseniz erken rezervasyon önemli.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Söğüt'ün Bilecik'e bağlı, tarihî dokuya sahip bir ilçe olması ve Bozüyük'e karayoluyla bağlantısı kamuya açık coğrafi bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:eskisehir-cevre-ili": {
        h1: "Eskişehir Yönünde Platform Kiralama — Bozüyük Terminal Bağlantısı",
        giris:
            "Bozüyük'ün Ankara-İstanbul karayolu üzerindeki konumu, ilçeyi yalnızca Bilecik içi değil, komşu Eskişehir iline yönelik taleplerde de bir sevkiyat üssü hâline getirir. Eskişehir yönünden gelen ve terminal bölgesine yakın konumlanan işletmeler — nakliye firmaları, depo işletmeleri, yol kenarı tesisler — için makine ulaşımı bu güzergâh üzerinden hızlı sağlanır. Bu sayfa, Eskişehir'in kendi bölge sayfalarımızdan (Odunpazarı, Tepebaşı, Sivrihisar gibi) farklı olarak, yalnızca Bozüyük terminal bölgesine karayoluyla yakın konumlanan çevre işletmeleri kapsar; Eskişehir merkez ilçelerdeki derinlemesine sanayi profili için ayrı bölge sayfalarımızı öneriyoruz.",
        maddeler: [
            {
                baslik: "Karayolu güzergâhı üzerinden hızlı ulaşım",
                metin:
                    "Bozüyük ile Eskişehir arasındaki karayolu bağlantısı, terminal bölgesindeki makinenin bu hat üzerindeki taleplere kısa sürede ulaşmasını sağlar. Güzergâh üzerindeki yol kenarı tesisler ve depo işletmeleri için bu, planlı bir sevkiyata eklenme imkânı sunar.",
            },
            {
                baslik: "Yol kenarı tesislerde aydınlatma ve tabela",
                metin:
                    "Güzergâh üzerindeki akaryakıt istasyonları, dinlenme tesisleri ve yol kenarı işletmelerde aydınlatma direği ve tabela bakımı sık talep edilir. Bu işlerde trafik yakınlığı nedeniyle uyarı önlemi alınır, mümkün olduğunda trafiğin sakin olduğu saatlere geçilir.",
            },
            {
                baslik: "Depo ve transfer yapılarında ortak profil",
                metin:
                    "Güzergâh üzerindeki depo ve transfer yapıları, Bozüyük terminal bölgesindeki yapılarla benzer bir profil taşır: geniş açıklıklı, tek katlı çelik yapılar, beton zemin. Bu benzerlik, aynı makine sınıfının iki bölgede de kullanılabilmesini sağlıyor.",
            },
            {
                baslik: "Sevkiyat birleştirme ile maliyet avantajı",
                metin:
                    "Terminal bölgesinde planlı bir işimiz varken güzergâh üzerindeki Eskişehir yönlü bir talebi aynı sevkiyata eklemek mümkündür. Bu, özellikle kısa süreli ve tek seferlik işler için nakliye maliyetini belirgin şekilde düşürür.",
            },
            {
                baslik: "Mesafeye göre planlama farkı",
                metin:
                    "Güzergâh üzerindeki mesafe arttıkça sevkiyat süresi de uzar; bu yüzden Eskişehir yönündeki taleplerde önce noktanın Bozüyük'e olan yaklaşık mesafesini netleştiriyoruz. Bu bilgi, hem teslimat saatini hem de birleştirme imkânını belirliyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Güzergâh üzerindeki yapı profili",
                paragraflar: [
                    "Bozüyük-Eskişehir güzergâhı üzerindeki tesis tiplerini ve tipik ihtiyaçlarını aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Konum", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Akaryakıt/dinlenme tesisi", "Yol kenarı", "Trafik yakınlığı", "Bom tipi teleskopik"],
                        ["Depo/transfer yapısı", "Güzergâh üzeri", "Beton zemin", "Akülü makaslı"],
                        ["Nakliye firması ofisi", "Güzergâh üzeri", "Sınırlı erişim", "Kompakt akülü"],
                        ["Yol kenarı tabela/pano", "Yol kenarı", "Yükseklik, trafik", "Bom tipi"],
                    ],
                },
            },
            {
                baslik: "Sevkiyatı planlı işe eklemek",
                paragraflar: [
                    "Bu güzergâh üzerindeki talepleri, terminal bölgesindeki planlı sevkiyatlarla birleştirdiğimizde nakliye bedeli paylaşılır. Bunun için talebinizi mümkün olduğunca erken iletmeniz, uygun bir sevkiyata denk gelme ihtimalini artırır.",
                    "Acil işlerde birleştirme her zaman mümkün olmayabilir; bu durumda tek başına sevkiyat planlıyor, mesafeye göre net bir teslimat saati veriyoruz.",
                ],
            },
            {
                baslik: "Eskişehir merkez ilçeler için ayrı derinlik",
                paragraflar: [
                    "Bu sayfa yalnızca Bozüyük terminal bölgesine karayoluyla yakın çevre işletmeleri kapsar. Eskişehir'in Odunpazarı, Tepebaşı gibi merkez ilçelerindeki kurumsal ve sanayi yapıları için farklı bir saha disiplini ve makine profili geçerlidir; bu ilçeler için ayrı bölge sayfalarımızı incelemenizi öneriyoruz.",
                    "İki bölge arasında iş birleştirmesi genellikle yapılmaz, çünkü güzergâh üzerindeki işler ile merkez ilçe içi işler farklı zaman pencerelerinde ve farklı makine sınıflarıyla ilerler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eskişehir yönündeki tesisimize Bozüyük'ten makine gelebilir mi?",
                cevap:
                    "Gelebilir; karayolu güzergâhı bu ulaşımı hızlı kılar. Öncelikle tesisin Bozüyük'e olan yaklaşık mesafesini netleştiriyoruz, bu bilgi hem teslimat saatini hem de planlı bir sevkiyatla birleştirme imkânını belirliyor. Mesafe arttıkça sevkiyat süresi de uzuyor, bu yüzden net bir adres ve mesafe bilgisi planlamayı hızlandırıyor.",
            },
            {
                soru: "Yol kenarındaki tesisimizin aydınlatma direği arızalandı, ne kadar sürede gelirsiniz?",
                cevap:
                    "Bu tür acil işlerde önceliği trafik güvenliğine veriyoruz; makinenin yol omzuna taşıp taşmayacağını önceden ölçüyoruz. Taşma varsa uyarı önlemi alınır, mümkünse trafiğin sakin olduğu saate geçilir. Güzergâh üzerinde planlı bir sevkiyatımız varsa süre kısalır, yoksa mesafeye göre net bir saat veriyoruz.",
            },
            {
                soru: "Depo yapımız Bozüyük terminaline benziyor, aynı makine mi kullanılıyor?",
                cevap:
                    "Genellikle evet. Güzergâh üzerindeki depo ve transfer yapıları, geniş açıklıklı çelik yapı ve beton zemin açısından terminal bölgesindeki yapılarla benzer bir profil taşır. Bu benzerlik sayesinde akülü makaslı platform gibi aynı makine sınıfı iki bölgede de kullanılabiliyor; kesin karar keşifte zemin ve erişim ölçüsüne göre veriliyor.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, maliyeti nasıl düşürebiliriz?",
                cevap:
                    "Talebinizi mümkün olduğunca erken iletmeniz, terminal bölgesindeki planlı bir sevkiyata eklenme ihtimalini artırıyor. Bu birleştirme yapılabilirse nakliye bedeli paylaşılır ve toplam maliyet belirgin şekilde düşer. Acil bir işse birleştirme her zaman mümkün olmayabilir, bu durumda mesafeye göre net bir teklif veriyoruz.",
            },
            {
                soru: "Eskişehir merkezdeki bir sanayi tesisi için de bu sayfadan mı hizmet alınıyor?",
                cevap:
                    "Hayır, bu sayfa yalnızca Bozüyük terminal bölgesine karayoluyla yakın çevre işletmeleri kapsıyor. Eskişehir'in Odunpazarı, Tepebaşı gibi merkez ilçelerindeki kurumsal ve sanayi yapıları için farklı bir saha disiplini geçerli; bu ilçeler için ayrı bölge sayfalarımızı incelemenizi öneriyoruz, orada o bölgeye özgü bilgiler yer alıyor.",
            },
            {
                soru: "Mesafe arttıkça fiyat nasıl değişiyor?",
                cevap:
                    "Nakliye payı mesafeyle birlikte artar, bu yüzden net adres ve mesafe bilgisi teklifin ilk adımıdır. Eğer talebiniz terminal bölgesindeki planlı bir sevkiyatla birleştirilebiliyorsa bu pay paylaşılır ve fark azalır. Tek başına uzak bir sevkiyat gerekiyorsa mesafeye göre net bir bedel önceden bildiriyoruz, sahada sürpriz bir ek ücret çıkmıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Eskişehir iline karayoluyla komşu konumu kamuya açık coğrafi bilgidir. Firma adı ve rakam kullanılmamıştır.",
    },
    "bolge:sakarya-cevre-ili": {
        h1: "Sakarya Terminal ve Liman Yönlü Nakliye Akışına Platform Entegrasyonu",
        giris:
            "Sakarya çevre ili için bu sayfanın konusu TEM üzerinden metal tesisine bakım makinesi yetiştirmek ya da forklift ile platformu tek pakette göndermek değildir. B7'nin dar merceği, terminal ve liman yönünde ilerleyen nakliye akışının içindeki yüksek erişim işini, yük kabul ve çıkış düzenini bozmadan planlamaktır. Belirli terminal, liman, işletme, yük türü, kapasite veya güzergâh süresi hakkında iddia kurulmaz. Gerçek talepte platformun çalışacağı yer doğrulanır: yükleme rampası sundurması, kapı üstü mekanizma, dış aydınlatma, kamera, tabela, çatı kenarı, kablo veya haberleşme bağlantısı gibi personel erişimi isteyen noktalar. Platform yük elleçlemez ve terminal aracının yerine geçmez. İş, randevulu araç kabulü, kapı tahsisi, geçici park, yaya rotası ve sepetin hareket zarfı ile aynı operasyon çizelgesine eklenir. Makine sahaya giriş yaptığında aktif yük koridoruna sürülmez; ayrılmış hücrede kabul edilir ve yalnız terminal sorumlusunun açtığı pencerede hareket eder. Böylece bakım faaliyeti nakliye akışına sonradan eklenen görünmez engel olmaz; giriş, çalışma, hücre teslimi ve çıkış olayları operasyonun kendi ritmine bağlanır.",
        maddeler: [
            {
                baslik: "Kapı randevusuna bakım hücresi eklemek",
                metin:
                    "Terminalde her araç girişi aynı anda aynı kapıyı kullanamaz. Platform taşıyıcısı için kabul noktası, indirme alanı ve çalışma makinesinin içeri alınacağı saat operasyon sorumlusuyla belirlenir. Bakım yapılacak rampa veya sundurma kapısı o zaman diliminde yük kabulünden çıkarılır ya da fiziksel olarak ayrılmışsa komşu kapılar çalışmaya devam eder. Platformun geliş saati yük aracının randevusuyla çakışırsa rastgele kenarda bekletilmez. Hücrenin başlangıç ve kapanış saati çizelgede görünür olur; bakım bitip sepet toplanmadan kapı tekrar operasyona verilmez.",
            },
            {
                baslik: "Rampa üstü donanımda araç hareketini kesmek",
                metin:
                    "Kapı motoru, rampa üstü aydınlatma, sundurma, kamera veya kablo hattı üzerinde çalışırken yanaşan araç hareketi durur. Teker takozu, kapı sinyali veya işletmenin kullandığı başka kontrol yöntemi terminal yetkilisince uygulanır. Platform operatörü aracın güvenli duruma geldiğine tek başına karar vermez. Sepet ile araç kasası, kapı kanadı veya hareketli körük aynı zarfı paylaşmaz. Alt alan bariyerlenir ve sürücünün kabine dönüp aracı hareket ettirmesini önleyecek iletişim kurulur. İş tamamlanınca mekanizma tesis sorumlusuna teslim edilir; yeniden kullanıma açma yetkisi operasyondadır.",
            },
            {
                baslik: "Çapraz sevkiyat temposunda bakım noktasını ayırmak",
                metin:
                    "Yükün uzun süre beklemeden bir araçtan diğerine aktarıldığı yoğun akışlarda boş zemin hızla değişir. Platform için keşifte görülen park yeri çalışma saatinde palet, kasa veya araçla dolmuş olabilir. Bu yüzden geçici bakım hücresi operasyon planında rezerve edilir ve zemindeki sınırı görünür biçimde işaretlenir. Sepet aktif yükün üstüne uzatılmaz, düşen parça alanında açık yük bırakılmaz. Hücre başka iş için gerektiğinde platform aceleyle başka noktaya alınmaz; bom indirilir, güzergâh açılır ve yeni park konumu yeniden kontrol edilir.",
            },
            {
                baslik: "Terminalden liman yönüne giden akışta çıkış sırası",
                metin:
                    "Nakliye zincirinde yük aracının sonraki randevusu olabilir; bakım ekibi bu operasyonun önceliklerini bilerek çalışır. Hangi kapının ne zaman tekrar açılması gerektiği, hangi dış aydınlatma ya da tabela işinin araç çıkışını etkilediği önceden sıralanır. Kritik geçiş önce tamamlanıp teknik kabul alınır, daha esnek cephe kalemleri sonraki hücreye bırakılabilir. Platform veya taşıyıcısı ana çıkış kuyruğunu kapatmaz. İşin bitişi yalnız son vidanın sıkılması değildir; bomun toplanması, alet-parça sayımı ve bariyerin güvenle kaldırılması operasyon devrinin parçasıdır.",
            },
            {
                baslik: "Platformu yük ekipmanından kesin biçimde ayırmak",
                metin:
                    "Terminal ortamında farklı makineler yan yana görünse de platformun görevi yalnız personel erişimidir. Sepete palet, uzun yük veya terminal malzemesi bağlanmaz; korkuluk dışına parça uzatılmaz ve platform araç kasasına yük aktarmak için kullanılmaz. Yük elleçleme işletmenin uygun ekipman ve prosedürüyle ayrı yürür. Aynı alanda bu faaliyetler sırayla yapılır; hareket zarfları kesişmez. B11'in forklift-platform paket yaklaşımına girmeden, bu sayfa tek ekipmanın sınırını korur. Bakım listesinde erişim ve yük operasyonu ayrı sorumlularla yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Terminal akışında platform işi kontrol tablosu",
                paragraflar: [
                    "Aşağıdaki tablo belirli terminal veya liman işletmesinin prosedürü değildir; gerçek talepte yüksek erişim işini randevulu nakliye akışına bağlamak için kullanılan genel hücre modelidir.",
                ],
                tablo: {
                    basliklar: ["Operasyon alanı", "Yüksek erişim işi", "Çakışma", "Entegrasyon kararı"],
                    satirlar: [
                        ["Rampa kapısı", "Motor, körük, aydınlatma", "Yanaşan araç", "Kapıyı bakım hücresine al"],
                        ["Sundurma", "Çatı altı ve kamera", "Yük kabulü", "Alt alanı boşalt"],
                        ["Çapraz sevkiyat alanı", "Kablo ve işaretleme", "Hızlı değişen stok", "Park yerini rezerve et"],
                        ["Dış saha", "Direk, tabela, cephe", "Çıkış kuyruğu", "Alternatif trafik rotası"],
                        ["Makine kabul alanı", "İndirme ve iade", "Diğer teslimatlar", "Ayrı randevu penceresi"],
                    ],
                },
            },
            {
                baslik: "Operasyon çizelgesinden bakım sırası çıkarmak",
                paragraflar: [
                    "Terminal yetkilisi yoğun kapıları, daha sakin pencereleri, araç kabul ve çıkış dönemlerini bildirir. Bakım ekibi hedefleri bu akışa göre gruplar: önce operasyonu doğrudan durduran kapı üstü kalemler, sonra bağımsız sundurma ve dış saha işleri. Her hedefin erişim kotu, yatay engeli ve park tabanı ölçülür. Malzeme ile teknik yetkili pencere başlamadan hazır olur. Böylece kapı kapalıyken parça aranmaz.",
                    "Akış beklenmedik biçimde değişirse platform sepet açıkken taşınmaz. İş güvenli ara noktada kapatılır, bom indirilir ve yeni hücre terminal sorumlusuyla kararlaştırılır. Bakım çizelgesindeki esneklik, operasyonun her talebine anında yer değiştirmek değildir; önceden onaylanmış alternatifler arasında kontrollü geçiştir.",
                ],
            },
            {
                baslik: "Hücre kapanışı ve operasyon devri",
                paragraflar: [
                    "Her kapı veya saha hücresi sonunda el aletleri ile sökülen parçalar sayılır, gevşek bağlantı kalmadığı gözlenir ve çalışma tabanı temizlenir. Kapı mekanizması veya elektrikli donanım yalnız tesis yetkilisinin kontrolüyle yeniden çalıştırılır. Platform güvenli sınırın dışına çıkmadan bariyer kaldırılmaz. Teknik kabul ile operasyonun kapıyı açması iki ayrı adımdır ve ikisi de tamamlanır.",
                    "Son hücre kapandığında platform iade alanına alınır; taşıyıcının randevusu diğer terminal araçlarıyla çakışmayacak biçimde doğrulanır. Açık iş varsa kapı, neden ve gerekli yeni pencere kaydedilir. Çıkış kuyruğuna yetişmek için tamamlanmamış bakım kapatılmış gösterilmez. Bu teslim düzeni yüksek erişim işini terminal akışında iz bırakmadan sonlandırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Terminal çalışırken rampa üstü bakım yapılabilir mi?",
                cevap:
                    "Tüm terminalin durması gerekmeyebilir, ancak çalışılan rampa kapısı ile sepet zarfına giren araç hareketi durmalıdır. Kapı operasyon çizelgesinde bakım hücresine alınır, sürücü ve saha ekibi bilgilendirilir, alt alan bariyerlenir. Fiziksel ayrımı olan komşu kapılar çalışabilir. Yanaşan araç, hareketli körük veya kapı mekanizması tesis yetkilisince güvenli duruma getirilmeden sepet yaklaşmaz. İş bitince teknik kabul ve operasyon devri yapılır; bom toplanmadan kapı yeniden açılmaz.",
            },
            {
                soru: "Platformla araç kasasına veya palete yük aktarabilir miyiz?",
                cevap:
                    "Hayır. Yükseltilebilir çalışma platformu personel ve izin verilen el aletleri içindir; terminal yük ekipmanı değildir. Sepete palet, uzun parça veya korkuluk dışına taşan yük bağlanmaz. Kasa ile platform arasında malzeme köprüsü kurulmaz. Yük elleçleme uygun ekipman ve işletme prosedürüyle ayrı yapılır. İki faaliyet aynı hücrede gerekiyorsa sıraya konur ve hareket zarfları birbirinden ayrılır. Platformun sahada bulunması başka ekipmanın görevini üstlenebileceği anlamına gelmez.",
            },
            {
                soru: "Taşıyıcınız terminal kapı randevusuna nasıl uyum sağlar?",
                cevap:
                    "İndirme alanı, giriş irtibatı ve kabul penceresi platform sevkiyatından önce terminalle netleştirilir. Taşıyıcı randevu dışı gelişigüzel giriş yapmaz ve ana yük kuyruğunda bakım makinesi indirmez. Varış değişirse operasyon sorumlusuna erken bilgi verilir. Makine kabul alanında görünür kontrolden sonra iç rotaya alınır. Bu kayıt TEM yolculuk süresini anlatmaz; terminalin kendi kapı ve saha akışına doğru zamanda bağlanmayı amaçlar. Gerekli evrak ve giriş kuralı ilgili işletmeden güncel olarak alınır.",
            },
            {
                soru: "Çapraz sevkiyat alanında boş park yeri sürekli değişiyorsa ne yaparsınız?",
                cevap:
                    "Çalışma tabanı operasyon çizelgesinde geçici bakım hücresi olarak rezerve edilir. Keşifte boş görünen yere güvenmeyiz. Hücrenin sınırı, bom hareket zarfı ve düşen parça alanıyla birlikte işaretlenir; bu alana yük veya araç alınmaz. Operasyon önceliği değişirse sepet indirilir ve iş güvenli ara kapanışa getirilir. Yeni park noktası zemin, yatay erişim ve trafik açısından yeniden kontrol edilmeden makine taşınmaz. Sürekli yer değiştirme baskısı güvenli çalışmayı bozuyorsa bakım daha sakin pencereye alınır.",
            },
            {
                soru: "Liman yönüne çıkacak araçların programı bakımı yarıda keser mi?",
                cevap:
                    "Kritik çıkış kapıları ve saatleri önceden biliniyorsa bakım sırası buna göre kurulur. Operasyonu doğrudan etkileyen kapı üstü iş önce tamamlanıp teslim edilir; esnek cephe veya dış saha kalemi başka hücreye geçebilir. Ancak platform aktifken araç geçirmek için bariyer aniden kaldırılmaz. İş güvenli kapanışa getirilir, bom toplanır ve alan operasyon sorumlusuna devredilir. Planın amacı nakliye önceliğini tanımak, fakat bakım güvenliğini çıkış saatine feda etmemektir.",
            },
            {
                soru: "Bu hizmet forklift ile platformun birlikte sevkini içeriyor mu?",
                cevap:
                    "Hayır. Bu sayfa platformun terminal-liman yönlü nakliye akışındaki yüksek erişim işine entegrasyonunu anlatır. Forklift veya başka yük ekipmanının kiralama ve sevkiyatı ayrı kapsamdır. Platform yük elleçlemez. Gerçek iş iki ekipman gerektiriyorsa görevler, operatörler, çalışma hücreleri ve zaman sırası ayrıca değerlendirilir; burada paket hizmet vaadi kurulmaz. Böylece B11 için ayrılmış forklift-platform temasıyla karışmadan, terminal operasyonu içindeki personel erişimi sınırında kalırız.",
            },
        ],
        kaynak:
            "Bu özgün metin 2026-08-13 tarihinde hazırlandı. Uygulama belgesi Sakarya için yalnız çevre il ile terminal-liman yönlü nakliye bağlantısını genel çapa olarak verir. Belirli terminal, liman, tesis, yük, kapasite, rota süresi ve rakam kullanılmamıştır; randevulu kapı, bakım hücresi ve operasyon devri koşullu lojistik saha pratiğidir. TEM metal bakım ve forklift-platform paket temaları kapsam dışıdır.",
    },

    "bolge:golpazari": {
        h1: "Gölpazarı'nı Çevre İlçe Platform Rotasına Ara Durak Olarak Planlamak",
        giris:
            "Gölpazarı için bu sayfa Bilecik merkezden doğrudan servis zincirini veya ilçedeki tarımsal tesislerin mevsimsel bakımını yeniden anlatmaz. B7'nin merceği, Bozüyük çıkışlı ya da Bozüyük'e dönen çok duraklı çevre ilçe programında Gölpazarı'ndaki hazır bir işi ara durak olarak konumlandırmaktır. Belirli yol, mesafe, işletme, sektör veya süre iddiası kurulmaz. Ara durak modeli, sırf rota ilçeden geçiyor diye plansız iş kabul etmek değildir. Gölpazarı talebinin makine sınıfı, kapı ve zemin koşulu, hedefi, malzemesi, yetkilisi ve çalışma penceresi ana rota kesinleşmeden doğrulanır. Önceki duraktan çıkış bildirimi yapılır; ilçedeki saha sorumlusu çalışma alanını ve indirme/park noktasını hazırlar. Makine kısa blokta işini tamamlar, alan teknik olarak teslim edilir ve sonraki durağa ancak bom, alet ve izin kapanışı tamamlandıktan sonra hareket eder. Uygun sınıf veya güvenli zaman penceresi ana rotayla örtüşmüyorsa talep zorla eklenmez, ayrı programa alınır. Bu düzen, çevre ilçe seyahatindeki boş geçişi üretken kılarken bir duraktaki gecikmenin bütün zinciri görünmez biçimde bozmasını önler.",
        maddeler: [
            {
                baslik: "Ara durak için hazır iş kapısı koymak",
                metin:
                    "Talep rota listesine girmeden hedef fotoğrafı, çalışma kotu, yatay engel, giriş, zemin, park alanı ve iş malzemesi doğrulanır. Enerji veya hareket izolasyonunu yapacak kişi ile sahanın boşaltılacağı saat belirlenir. Bu hazırlıklardan biri eksikse 'yoldayken uğrama' sözü verilmez. Ana programda yalnız teknik kartı kapanmış durak görünür. Son değişiklik, önceki duraktan makine çıkmadan bildirilmelidir. Böylece ilçeye varıldığında ölçü almak, anahtar veya malzeme beklemek yerine doğrudan güvenli saha kabulüne geçilir.",
            },
            {
                baslik: "Önceki duraktan çıkış bildirimini saha kabulüne bağlamak",
                metin:
                    "Çevre ilçe rotasında kesin dakika iddiası trafik, iş kapanışı ve saha koşulu nedeniyle yanıltıcı olabilir. Bunun yerine olay bazlı iletişim kullanılır: önceki iş teknik olarak kapandığında Gölpazarı sorumlusuna çıkış bilgisi verilir; varışa yaklaşınca indirme veya park alanının hâlâ açık olduğu teyit edilir. Saha hazır değilse makine dar yol veya ortak alanda kontrolsüz bekletilmez. Alternatif güvenli bekleme veya sıra değişikliği plan sorumlusunca kararlaştırılır. Ara durak, rota aracını belirsiz süre rehin tutamaz.",
            },
            {
                baslik: "Kısa iş paketini tek park konumunda kapatmak",
                metin:
                    "Ara durakta zaman kazanmanın yolu güvenlik adımını atlamak değil, hedefleri aynı konumdan erişilebilen bir paket hâlinde hazırlamaktır. Aydınlatma, oluk, kapı üstü, cephe veya benzeri doğrulanmış kalemlerden uygun olanlar önceden sıralanır. Platformun zarfı, alt alanı ve enerji kontrolü tek hücrede kurulur. Yeni bir hedef fark edilirse ana rota saati ve teknik uygunluk değerlendirilir. Ek iş pencereye sığmıyorsa açık kalem olarak bırakılır; sırf makine ilçedeyken tamamlanmış görünmek için bom sınırı veya kapanış süresi zorlanmaz.",
            },
            {
                baslik: "Duraklar arası temizlik ve makine uygunluğu",
                metin:
                    "Önceki saha tozlu, çamurlu veya başka bir yüzey etkisine sahipse makine Gölpazarı'ndaki temiz kapalı alana doğrudan sokulmaz. Teker, alt takım, sepet ve aletler kontrol edilir; işletmenin kabul ettiği yöntemle gerekli temizlik yapılır. Görünür sızıntı veya hasarda kullanım durur. Aynı modelin iki durağa uygunluğu kapı, zemin, egzoz ve erişim geometrisiyle önceden karşılaştırılır. Ana rotadaki makine uygun değilse talebi eklemek ekonomik görünse bile yapılmaz; doğru sınıf ayrı planlanır.",
            },
            {
                baslik: "Sonraki durağın saatini koruyan teknik kapanış",
                metin:
                    "Gölpazarı işi bitince sepet boşaltılır, el aleti ve sökülen parça sayılır, bağlantılar gözlenir ve alan saha sorumlusuna teslim edilir. Enerjiyi veya mekanizmayı yeniden açma kararı ilgili yetkilidedir. Makine temizlenir, bom taşıma konumuna alınır ve rota için görünür kontrol yapılır. Tamamlanmayan iş nedeni ile kayda geçer. Sonraki durağa yetişmek uğruna açık izin, dağınık parça veya teslim edilmemiş alan bırakılmaz. Çıkış bilgisi zincirdeki bir sonraki sorumluya ancak bu kapanıştan sonra verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çevre ilçe rotasında Gölpazarı durak kartı",
                paragraflar: [
                    "Aşağıdaki tablo belirli güzergâh veya tesis iddiası değildir; Gölpazarı işinin çok duraklı bir programa alınabilmesi için her aşamada kapanması gereken genel koşulları gösterir.",
                ],
                tablo: {
                    basliklar: ["Durak aşaması", "Ana karar", "Hazırlık", "Çıkış ölçütü"],
                    satirlar: [
                        ["Rota öncesi", "Makine uyumlu mu", "Ölçü, zemin, hedef kartı", "Teknik onay"],
                        ["Yaklaşım", "Saha hazır mı", "Çıkış bildirimi, park teyidi", "Güvenli kabul"],
                        ["Çalışma", "Paket pencereye sığar mı", "Malzeme, izin, hücre", "Hedef teslimi"],
                        ["Geçiş hazırlığı", "Makine sonraki alana uygun mu", "Temizlik ve durum kontrolü", "Taşıma konumu"],
                        ["Rota devamı", "Çıkış ne zaman verilir", "Açık iş ve imzalı kapanış", "Sonraki durak bilgilendi"],
                    ],
                },
            },
            {
                baslik: "Ara durak ekleme ve çıkarma kararını yönetmek",
                paragraflar: [
                    "Gölpazarı işi ana rotaya ancak gerekli sınıf zaten o programdaysa, saha penceresiyle durak sırası uyuyorsa ve hazırlık kapısı tamamlandıysa eklenir. Yalnız coğrafi yakınlık yeterli değildir. Aynı gün farklı gövde veya dış zemin sınıfı gerekiyorsa ek sevkiyat avantajı kaybolur. Talep sahibine programlı rota ile ayrı blok seçeneği kapsamlarıyla anlatılır; kesinleşmemiş geçiş garanti edilmez.",
                    "Hava, önceki işin uzaması veya Gölpazarı sahasının hazır olmaması halinde durak çıkarılabilir ya da sıra değişebilir. Karar mümkün olan en erken anda yazılı paylaşılır. Makine ilçeye ulaştıktan sonra uygunsuz zeminde veya izinsiz alanda bekletilmez. Yeni tarih ve hazırlık açıkça belirlenir. Esneklik, müşteriyi habersiz bırakmak değil, zinciri gerçek saha durumuna göre görünür biçimde güncellemektir.",
                ],
            },
            {
                baslik: "Kısa blokta kapsamı dondurmak",
                paragraflar: [
                    "Ara durak için iş listesi rotadan önce dondurulur. Her hedefin gerekli aleti ve küçük malzemesi hazırdır; teknik yetkili çalışma başlangıcında sahada olur. Hedefler öncelik sırasına dizilir: güvenlik veya işlevi etkileyen doğrulanmış kalemler önce, ertelenebilir işler sonra. Yeni kalem mevcut hücre, sınıf ve süreyle uyumluysa sorumlu onayıyla eklenebilir; aksi durumda açık listeye alınır.",
                    "Bu disiplin, kısa pencereyi aceleye dönüştürmez. Bariyer, enerji kontrolü, alet bağlama ve teknik teslim tam uygulanır. İşin planlanan süreden erken bitmesi de kontrol adımlarını azaltmaz. Kapanış kaydı sonraki ziyaret için erişim hafızası oluşturur; fakat saha değişebileceği için önceki model ve park noktası otomatik garanti sayılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Gölpazarı işi her çevre ilçe rotasına otomatik eklenir mi?",
                cevap:
                    "Hayır. Gerekli makine sınıfı, kapı ve zemin koşulu, iş penceresi, saha hazırlığı ve rotadaki toplam süre uyumlu olmalıdır. Coğrafi olarak yol üzerinde görünmesi teknik uygunluk anlamına gelmez. Fotoğraf ve ölçü kartı önceden tamamlanır. Ana programdaki model işe yetmiyorsa veya saha hazır değilse talep ayrı bloğa alınır. Programlı rota kesinleşmeden teslim sözü verilmez; uygunluk oluştuğunda durak sırası ve olay bazlı iletişim yöntemi yazılı paylaşılır.",
            },
            {
                soru: "Makinenin varış saatini kesin olarak öğrenebilir miyiz?",
                cevap:
                    "Çok duraklı rotada önceki işin gerçek kapanışı belirleyici olduğu için gerçek dışı dakika garantisi vermeyiz. Planlanan bir pencere paylaşılır; önceki durak teknik olarak kapandığında çıkış bildirimi yapılır ve yaklaşırken park alanı tekrar teyit edilir. Gecikme veya sıra değişikliği erken haber verilir. Bu yöntem belirsizlik yaratmak yerine gerçekleşen olaya dayanır. Kesin saat zorunluysa ara durak modeli yerine ayrı blok sevkiyat değerlendirilmelidir.",
            },
            {
                soru: "Hazır değilsek makine ilçede bizi bekleyebilir mi?",
                cevap:
                    "Kısa ve önceden tanımlı güvenli bekleme noktası varsa plan sorumlusu değerlendirebilir, fakat dar yol veya ortak alanda belirsiz bekleme yapılmaz. Malzeme, teknik yetkili, enerji kontrolü ve çalışma hücresi makine yaklaşmadan hazır olmalıdır. Hazırlık tamamlanmıyorsa rota sırası değişebilir veya durak yeni tarihe alınır. Beklemenin sonraki müşteriye etkisi ve sözleşme koşulu açıkça bildirilir. Ara durak modeli, hazırlıksız iş için ücretsiz zaman rezervasyonu değildir.",
            },
            {
                soru: "Aynı ziyarette birkaç adrese uğrayabilir misiniz?",
                cevap:
                    "Adreslerin gerekli sınıfı, zemini ve penceresi uyuyorsa Gölpazarı durağı kendi içinde alt noktalara ayrılabilir. Her adresin hedef kartı, malzemesi, saha sorumlusu ve teslim kaydı ayrı hazırlanır. Geçiş süresi ana rota planına eklenir. Bir adres hazır değilse diğerinin çalışma alanına rastgele taşınmaz. Dar iç mekân ile bozuk dış saha farklı makine istiyorsa tek programda birleştirilmez. Ortak rota sorumlulukları ve iş izinlerini tekleştirmez.",
            },
            {
                soru: "Önceki durak tozluysa makine kapalı binamıza girebilir mi?",
                cevap:
                    "Ancak teker, alt takım, sepet ve aletler kontrol edilip işletmenizin kabul ettiği yöntemle temizlendikten sonra; makinenin kapı, lastik, egzoz ve zemin koşulları uygunsa girebilir. Görünür sızıntı veya hasarda kullanım başlamaz. Temizlik süresi rota planına yazılır. Aynı model kapalı hacme uygun değilse sırf yakında olduğu için kullanılmaz. Doğru sınıf ayrı programa alınır. Önceki sahanın etkisini yeni alana taşımamak durak entegrasyonunun temel şartıdır.",
            },
            {
                soru: "İşimiz pencereye sığmazsa yarım mı bırakılır?",
                cevap:
                    "Öncelikli ve güvenle tamamlanan hedefler teknik teslim alır; kalan kalemler nedenleriyle açık listeye yazılır. Pencere aşımı sonraki durakları ve kullanıcı vardiyasını etkiliyorsa otomatik uzatma yapılmaz. Yeni sürenin mümkün olup olmadığı plan sorumlusu ve saha yetkilisiyle değerlendirilir. Uygun değilse ikinci ziyaret gerekli sınıf, malzeme ve zamanla hazırlanır. Yetişmek için enerji, bariyer, alet sayımı veya makine sınırı atlanmaz. Tamamlanmamış iş tamamlanmış gibi işaretlenmez.",
            },
        ],
        kaynak:
            "Özgün içerik 2026-08-13 günü oluşturuldu. Bu kaydın dayanağı, Gölpazarı'nın Bilecik'e bağlı bir ilçe olduğu yönündeki genel coğrafya bilgisi ile görev belgesinin çevre ilçeler arasındaki sevkiyat rotasında ara durak yaklaşımıdır. Belirli rota, mesafe, işletme, sektör, süre, kapasite ve rakam kullanılmamıştır; durak kartı, olay bazlı bildirim, kısa blok ve rota kapanışı sektör geneli planlama pratiğidir. Merkezden servis ve tarımsal sezon temaları kapsam dışıdır.",
    },
};

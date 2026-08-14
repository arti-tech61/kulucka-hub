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

    // ─────────────────────────────────────────────────────────────────────
    // HİZMET SAYFALARI — açı: Bilecik ve Bozüyük'ün tarihten gelen tekstil/
    // dokuma sanayii geleneği. Kardeş domainlerin açıları (seramik üretim
    // hattı, cam/VitrA, OSB genel yönetimi, üç sektörlü arıza müdahale) ile
    // örtüşme kurulmamıştır; buradaki mercek dokuma hattı, iplik/kumaş
    // deposu, boyahane-apre tesisi ve tekstil OSB'sidir.
    // Yazım: 2026-08-14. Firma adı ve rakam uydurulmadı.
    // ─────────────────────────────────────────────────────────────────────

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bozüyük'te Dokuma Hattı Sıraları Arasında Sepetli Örümcek Platform Kiralama",
        giris:
            "Bilecik ve özellikle Bozüyük, Osmanlı'dan bu yana süregelen bir dokumacılık geleneğine sahip bir bölge; bugün bu geleneğin devamı sayılabilecek dokuma ve iplik işletmeleri hâlâ ilçede üretim yapıyor. Bu tesislerin salon düzeni, seramik ya da metal işleme hatlarından farklı bir sıkışıklık yaratır: dokuma tezgahları art arda, aralarında ancak bir işçinin geçebileceği kadar boşlukla dizilir, tezgah üstündeki çözgü çerçevesi ve ışık rayı bu dar aralığın hemen üzerinde kalır. Standart bir makaslı platform bu sıraya giremez, girse bile yan tezgahlara temas riski taşır. Sepetli örümcek platformun paletli ve dar gövdeli yapısı, tam bu tezgah sırası boşluğuna oturur; ayakların bağımsız açılabilmesi de salon zemini genelde düz olsa bile tezgah kaidesi çevresindeki küçük seviye farklarında dengeyi korumayı mümkün kılar. Bozüyük'teki dokuma tesislerinden gelen taleplerin çoğu bu nedenle üretim durdurulmadan, tezgah sırası içinden yapılan aydınlatma ve ray bakımı işleridir.",
        maddeler: [
            {
                baslik: "Tezgah sırası aralığının dar geçişi",
                metin:
                    "Dokuma salonlarında tezgahlar arası mesafe, üretim düzenine göre sabitlenmiştir ve bu mesafe bir bakım makinesini değil bir işçinin geçişini esas alır. Sepetli örümcek platformun paletli gövdesi, katlandığında bu dar aralığa sığacak genişliğe iner; ayaklar tezgah kaidesine değmeyecek şekilde asimetrik açılabilir. Hedefin tam olarak hangi tezgah üzerinde olduğu ve iki yanındaki boşluk önceden fotoğrafla teyit edilir; komşu tezgaha temas riski varsa geçici bir koruma önlemi birlikte kararlaştırılır.",
            },
            {
                baslik: "Çözgü çerçevesi ve ışık rayı seviyesinde çalışma",
                metin:
                    "Tezgah üstündeki çözgü çerçevesi ve aydınlatma rayı, salonun genel tavan yüksekliğinden daha alçak bir bantta bulunur; bu da aslında çoğu zaman yüksek çalışma yüksekliği değil, dar ve hassas bir erişim gerektirir. Örümcek platformun sepeti bu bandı hedefleyecek şekilde konumlanır, tezgah kanadı veya iplik gergisine temas etmeyecek mesafe önceden ölçülür. Çalışma sırasında tezgahın hareketli parçaları (varsa) durdurulmuş olmalıdır; bu koordinasyon tesis vardiya sorumlusuyla önceden netleştirilir.",
            },
            {
                baslik: "Toz ve iplik lifi birikiminin makineye etkisi",
                metin:
                    "Dokuma ve iplik salonlarında havada asılı kalan lif ve toz, hem zeminde ince bir tabaka oluşturur hem de hareketli parçalara yapışabilir. Bu ortamda kullanılacak makinenin teker ve palet temizliği, salona girmeden önce ve çıkarken kontrol edilir; salon içinde kalan toz birikintisi makinenin fren ve manevra performansını etkileyebileceği için düşük hızda ve kısa mesafelerde manevra yapılır. Statik elektrik riski olan bölümlerde ek önlem tesisin kendi prosedürüne göre uygulanır.",
            },
            {
                baslik: "Kısa üretim molasına sığan çalışma",
                metin:
                    "Dokuma hatları genelde vardiya değişimi veya kısa bakım molası dışında durdurulmaz; bu yüzden tezgah sırası içindeki bir bakım işi çoğunlukla dar bir zaman penceresine sıkışır. Örümcek platformun hızlı kurulumu, bu kısa pencerede işe başlamayı kolaylaştırır ama pencerenin süresini önceden bilmemiz gerekir. Kapsam, pencere süresine göre önceliklendirilir; yetişmeyen kalemler ertelenir, yarım bırakılmış gibi gösterilmez.",
            },
            {
                baslik: "Salon dışına çıkış ve iç kapı geçişi",
                metin:
                    "Dokuma salonundan çıkıp başka bir bölüme (örneğin iplik deposuna) geçiş gerektiğinde, makinenin katlanmış gövde genişliği iç kapı ölçüsüyle karşılaştırılır. Salon kapıları genelde malzeme arabası genişliğine göre yapıldığı için çoğu geçişe uyar, ancak kapı üstü alçak kiriş veya boru hattı varsa yükseklik de teyit edilir. Ölçü netleşmeden güzergah üzerinden geçiş vaadi verilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dokuma salonu içi erişimde sınıf karşılaştırması",
                paragraflar: [
                    "Bozüyük'teki dokuma ve iplik tesislerinde tezgah sırası içi erişim için hangi makine sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Koşul", "Örümcek platform", "Standart makaslı", "Standart eklemli"],
                    satirlar: [
                        ["Tezgah sırası aralığı (dar)", "Uygun, paletli geçiş", "Genelde sığmaz", "Sığmaz"],
                        ["Çözgü/ray seviyesi hassas hedef", "Sepetle yakın konumlama", "Kaba konumlama", "Kaba konumlama"],
                        ["Kısa üretim molası", "Hızlı kurulum", "Ayak hizalama süresi ister", "Konumlama süresi ister"],
                        ["Toz/lif yoğun ortam", "Düşük hızda manevra ile uygun", "Uygun, geniş alan gerektirir", "Uygun, geniş alan gerektirir"],
                        ["İç kapıdan geçiş", "Katlanmış gövdeyle mümkün", "Genişlik yetmeyebilir", "Genişlik yetmeyebilir"],
                    ],
                },
            },
            {
                baslik: "Neden bu sınıf tezgah sırasında tercih ediliyor",
                paragraflar: [
                    "Dokuma salonlarının düzeni, tezgah sayısını artırmak üzere kurulduğu için aralardaki boşluk bakım makinesi değil, işçi geçişi düşünülerek bırakılmıştır. Bu yüzden salon içi bir arıza ya da periyodik bakım ihtiyacı doğduğunda, sığacak bir makine bulmak işin kendisi kadar zaman alabilir. Örümcek platformun paletli ve katlanabilir gövdesi, tam olarak bu dar sıralar için uygundur ve tezgah taşınmadan, üretim düzeni bozulmadan erişim sağlar.",
                    "Ayrıca paletli sistem, tekerlekli bir platforma göre birim alana daha az nokta yükü aktarır. Dokuma salonlarının zemini genelde düz beton olsa da, tezgah kaidesi çevresindeki kanal kapakları veya kablo geçiş noktaları ağır nokta yüküne karşı hassas olabilir; paletli dağılım bu noktalarda avantaj sağlar.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz ölçüler",
                paragraflar: [
                    "Doğru modeli önerebilmek için tezgah sırasının en dar noktasının genişliğini, hedefin (çözgü çerçevesi, ışık rayı, tesisat) yerden yüksekliğini ve salon zemininde varsa kanal kapağı ya da kot farkını önceden bilmemiz gerekiyor. Bu ölçüler fotoğraf veya kısa bir kroki ile paylaşıldığında, hangi model gövde genişliğinin sıraya sığacağını aynı gün teyit edebiliyoruz.",
                    "Ölçü belirsizse önce keşif yapılır; salona giren ama sıraya sığmayan bir makineyi geri çıkarmak, üretim akışını keşiften çok daha fazla etkiler. Bu yüzden ölçü teyidi, teklif aşamasının değil, planlamanın ilk adımıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dokuma tezgahlarımız çok sık dizilmiş, aralarına platform gerçekten girebilir mi?",
                cevap:
                    "Çoğu dokuma salonunda evet, ama kesin cevap için tezgah sırasının en dar noktasının ölçüsünü bilmemiz gerekiyor — bu ölçüye çözgü çerçevesi çıkıntısı ve varsa tezgah kenarındaki iplik gergisi de dahil edilmeli. Katlanmış gövde genişliği modelden modele değişir, bu yüzden tek rakam vermek yerine sıranın fotoğrafını isteriz. Sığmayan bir durumda, tezgahın bir ucundan sepetle uzanarak erişim ya da kısa süreli tezgah kaydırma seçeneklerini birlikte değerlendiririz.",
            },
            {
                soru: "Salon içinde toz ve iplik lifi çok, makine bundan etkilenir mi?",
                cevap:
                    "Toz ve lif birikimi zeminde ince bir tabaka oluşturabildiği için manevrayı düşük hızda ve kısa mesafelerde yaparız; bu, fren ve yön kontrolünü daha güvenli tutar. Makinenin teker ve palet kısmı salona girmeden önce ve çıkarken kontrol edilip gerekirse temizlenir. Statik elektrik riski olan bölümler varsa tesisin kendi prosedürüne uyarız; bu bilgiyi çalışma öncesi sizden alırız.",
            },
            {
                soru: "Üretim durmadan, sadece kısa bir molada çalışabilir misiniz?",
                cevap:
                    "Evet, dokuma hatlarının çoğunda uzun duruş mümkün olmadığı için işi kısa mola veya vardiya arası pencereye göre planlarız. Örümcek platformun kurulumu destek ayağı tek tek hizalanan bir makaslıya göre daha hızlı olduğu için bu dar pencereye daha kolay sığar. Pencerenin süresini önceden bilmemiz, kapsamı önceliklendirmemiz için gerekli; yetişmeyen kalemler nedenleriyle açık listeye yazılır, yarım bırakılmış gibi gösterilmez.",
            },
            {
                soru: "Makineyi tezgah sırasından çıkarıp iplik deposuna geçirebilir miyiz?",
                cevap:
                    "Katlanmış gövde genişliği standart iç kapı ölçülerinin çoğuna uyduğu için genelde mümkün. Ama her salonun kapı ölçüsü ve varsa kapı üstü boru/kablo hattı yüksekliği farklı; kesin cevap için bu ölçüleri bilmemiz gerekiyor. Ölçüler teyit edildiğinde güzergahı önceden planlar, hangi kapılardan geçileceğini net söyleriz.",
            },
            {
                soru: "Tezgah kaidesinin çevresinde küçük bir kot farkı var, makine dengesini kaybeder mi?",
                cevap:
                    "Örümcek platformun ayakları bağımsız açılıp farklı yüksekliklere basabildiği için hafif kot farklarında gövde yatay kalmaya devam eder. Ancak üreticinin belirttiği azami eğim ve yükseklik farkı sınırı vardır; bu sınırın üzerindeki bir kademede makine geçirilmez. Kot farkını ölçüp sınırla karşılaştırırız; uygun değilse alternatif erişim noktası birlikte belirlenir.",
            },
            {
                soru: "Operatörsüz mü çalıştırılıyor, yoksa bizim personelimiz mi kullanıyor?",
                cevap:
                    "İki seçenek de mevcut. Dar tezgah sırası gibi manevra hassasiyeti yüksek ortamlarda, özellikle ilk kullanımda operatörlü seçeneği öneriyoruz; operatörümüz salon düzenine ve tezgah aralığına aşina olmadığı için önce ölçü ve fotoğraf üzerinden hazırlık yapar. Tesisin kendi personeli sertifikalıysa operatörsüz düzen de mümkündür, kararı sahanın hassasiyetine göre birlikte veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik ve Bozüyük'ün tarihten gelen dokumacılık geleneği ile bölgede günümüzde dokuma/iplik tesislerinin faaliyet gösterdiği genel bilgidir; tezgah sırası düzeni ve örümcek platformun paletli/bağımsız ayaklı yapısı sektör geneli bilgidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bozüyük Tekstil Tesislerine Platform ve Forklift Nakliye-Teslimat Hizmeti",
        giris:
            "Bozüyük'teki dokuma ve iplik tesislerine yapılan teslimat, çoğu sanayi tesisinden farklı bir hassasiyet ister; çünkü indirme noktası genelde iplik ya da kumaş top deposunun hemen yanındadır ve buradaki zemin, ağır bir sevkiyat aracının değil bir istif makinesinin geçişine göre düzenlenmiştir. Bir diğer fark, tesisin iç trafiğinin sürekliliğidir: hammadde balyaları ve mamul kumaş topları gün boyu forkliftle taşındığı için, sevkiyat aracının indirme için bu güzergahı kısa süreliğine paylaşması gerekir. Ayrıca boyahane veya apre bölümüne yakın noktalarda nem ve buhar oranı yüksek olabilir; bu bölümlere elektrikli ekipman indirirken zemin ıslaklığı ve havalandırma durumu ayrıca gözden geçirilir. Bu sayfa, Bozüyük'teki tekstil tesislerine sevkiyat sürecimizi ve hangi bilgiyi neden önceden istediğimizi anlatıyor; sahaya göre değişen bu ayrıntılar, teslimatın ilk seferde ve kesintisiz tamamlanmasını sağlıyor.",
        maddeler: [
            {
                baslik: "İplik/kumaş top deposu önündeki indirme noktası",
                metin:
                    "Depo önündeki indirme alanı, genelde raf sırasına paralel dar bir şerittir ve bu şeridin bir kısmı sürekli forklift trafiğine ayrılmıştır. Sevkiyat aracının bu şeritte manevra yapabilmesi için raf ucundaki dönüş boşluğunu önceden bilmemiz gerekir; dar bir dönüş varsa aracı depo girişine yakın bir noktada durdurup makineyi kendi tekerlek ya da palet sistemiyle kısa mesafede yürütmek daha pratik olabilir.",
            },
            {
                baslik: "Boyahane-apre bölümüne yakın teslimatta nem kontrolü",
                metin:
                    "Boyahane ve apre tesislerinin çevresinde nem ve buhar yoğunluğu diğer bölümlere göre daha yüksektir; bu durum hem zeminin kayganlığını hem elektrikli ekipmanın indirilme koşullarını etkiler. Teslimat öncesi bu bölüme yakın bir noktaya indirme yapılacaksa zemin durumu ve havalandırma sorulur; nem yüksekse indirme noktası biraz daha uzağa, kuru bir alana kaydırılır ve makine oradan yürütülür.",
            },
            {
                baslik: "Hammadde ve mamul trafiğiyle eşzamanlı boşaltma",
                metin:
                    "Tekstil tesislerinde forklift trafiği hammadde girişinden mamul çıkışına kadar sürekli akar; sevkiyat aracının indirme için bu akışı kısa süreliğine kesmesi gerekebilir. Kesintiyi en aza indirmek için indirme saatini tesisin trafik yoğunluğunun düştüğü bir dilime denk getirmeye çalışırız. Saha içi öncelik kuralları varsa şoförümüz bunlara uyar; kurallar teslimattan önce tesisten alınır.",
            },
            {
                baslik: "Teslimat sonrası ilk çalıştırma kontrolü",
                metin:
                    "Makine indirildikten sonra çalışma başlamadan önce hidrolik seviyeleri, lastik/palet durumu ve acil durdurma sistemi kısa bir kontrolden geçirilir. Bu kontrol, taşıma sırasında oluşabilecek bir sorunun çalışma başlamadan fark edilmesini sağlar. Operatörsüz teslimatlarda kontrol tesisin görevlendirdiği kişiyle birlikte yapılır, sonuç kısa bir teslim tutanağına geçirilir.",
            },
            {
                baslik: "Çok bölümlü tesiste sıralı teslimat",
                metin:
                    "Bir tesisin hem dokuma salonuna hem depo veya boyahane bölümüne aynı gün teslimat gerekiyorsa güzergahı önceden sıralarız; en dar erişimli ya da en hassas bölüm gün içinde erken saate, kolay erişimli noktalar sona bırakılır. Bu sıralama, aracın gün boyunca gereksiz manevra yapmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Teslimat öncesi bizden istenen bilgiler",
                paragraflar: [
                    "Bir tekstil tesisine sevkiyatı sorunsuz planlayabilmemiz için aşağıdaki bilgilerin teslimat talebiyle birlikte gelmesini isteriz.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neden isteniyor", "Kim sağlıyor", "Eksikse ne olur"],
                    satirlar: [
                        ["İndirme noktasının bölümü (depo/boyahane/salon)", "Zemin ve nem koşulu farklı", "Tesis", "Genel giriş noktasına göre planlanır"],
                        ["Depo raf ucu dönüş boşluğu", "Araç manevra uygunluğu", "Tesis", "Küçük araçla parça taşıma"],
                        ["Forklift trafiğinin yoğun olduğu saatler", "Üretim trafiğiyle çakışmama", "Tesis", "Genel mesai saatine göre planlanır"],
                        ["Boyahane yakınında nem/buhar durumu", "Ekipman indirme güvenliği", "Tesis", "İndirme noktası kuru alana kaydırılır"],
                        ["Yetkili irtibat kişisi", "Sahada anlık koordinasyon", "Tesis", "Sevkiyat gecikebilir"],
                    ],
                },
            },
            {
                baslik: "Bozüyük'teki tekstil tesislerinin dağılımının sevkiyata etkisi",
                paragraflar: [
                    "Bilecik'in dokumacılık geleneğinin sürdüğü Bozüyük'te tekstil tesisleri genelde aynı sanayi bölgesi içinde kümelenir; bu kümelenme, aynı gün içinde birden fazla tesise teslimat yapabilmemizi ve yol payını paylaştırabilmemizi kolaylaştırır. Komşu tesislerin talepleri aynı güne toplandığında hem bizim hem işletmenin lehine bir düzenleme oluyor.",
                    "Bunun karşılığında tarih esnekliği isteriz: belirli bir güne kilitli olmayan teslimatları aynı bölgedeki başka bir talebin gününe ekleyebiliyoruz. Acil ihtiyaçlarda tekil sevkiyat da yapılır, bu durumda yol bedeli teklifte ayrı bir kalem olarak görünür.",
                ],
            },
            {
                baslik: "Geri alma (toplama) sevkiyatının planlaması",
                paragraflar: [
                    "Kiralama süresi dolduğunda makinenin geri alınması da aynı titizlikle planlanır. Kullanım süresince makine depo içinden salona ya da boyahane çevresine taşınmış olabilir; toplama öncesinde güncel konumunu ve çıkış güzergahını teyit ederiz.",
                    "Toplama öncesinde kısa bir iade kontrolü yapılır: görünür hasar, yakıt/şarj durumu ve iplik lifi birikiminin ekipmana etkisi birlikte tutanağa geçirilir. Bu, teslimat sürecinin şeffaf kapanmasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "İplik deposu önündeki alan dar, sevkiyat aracı buraya girebilir mi?",
                cevap:
                    "Depo önü alanların çoğu forklift trafiğine göre daraltılmış olduğu için önce raf ucundaki dönüş boşluğunu bilmemiz gerekir. Dar bir alan söz konusuysa aracı depo girişine yakın bir noktada durdurup makineyi kendi tekerlek ya da palet sistemiyle kısa mesafede yürütmek en pratik çözümdür; bu, büyük aracın dar alana girmesini gereksiz kılar.",
            },
            {
                soru: "Boyahane bölümüne yakın bir yere teslimat istiyoruz, nem ekipmana zarar verir mi?",
                cevap:
                    "Boyahane ve apre çevresinde nem ve buhar diğer bölümlere göre yüksek olabildiği için indirme noktasını mümkün olduğunca kuru bir alana kaydırırız ve makineyi oradan yürütürüz. Nem oranı ve havalandırma durumu teslimattan önce sorulur; riskli görünüyorsa indirme noktası tesisle birlikte yeniden belirlenir.",
            },
            {
                soru: "Forklift trafiğimiz çok yoğun, sevkiyat bu trafiği kesintiye uğratır mı?",
                cevap:
                    "Amacımız bunu en aza indirmek. İndirme saatini tesisin trafik yoğunluğunun düşük olduğu bir dilime denk getirmeye çalışırız; saha içi öncelik kurallarınız varsa önceden bize iletildiğinde şoförümüz bunlara uyar. Yine de indirme sırasında güzergahın birkaç dakikalığına kısıtlanması gerekebilir; bu süreyi en kısa tutar, önceden haber veririz.",
            },
            {
                soru: "Operatörsüz kiralıyoruz, teslimat sırasında makinenin sağlam geldiğini nasıl teyit ediyoruz?",
                cevap:
                    "Teslimat ekibimiz makine indirildikten sonra çalışma başlamadan kısa bir kontrol yapar — hidrolik seviyesi, lastik/palet durumu, acil durdurma sistemi gözden geçirilir. Bu kontrolü tesisin görevlendirdiği kişiyle birlikte yaparız, sonucu kısa bir teslim tutanağına yazarız; tutanak iki tarafça imzalanır.",
            },
            {
                soru: "Aynı gün hem dokuma salonuna hem depoya teslimat yapılabilir mi?",
                cevap:
                    "Evet, bölümlerin adresini aldıktan sonra güzergahı sıralarız — en hassas ya da erişimi en dar noktayı gün içinde erken saate, kolay erişimli noktaları sona bırakırız. Bu sıralama toplam teslimat süresini kısaltır ve gereksiz geri dönüşü önler.",
            },
            {
                soru: "Kiralama bitince makineyi biz mi getirmeliyiz, siz mi alıyorsunuz?",
                cevap:
                    "Toplama sevkiyatını biz üstleniriz. Kullanım süresince makinenin sahadaki konumu değişmiş olabileceği için toplama öncesi güncel konumunu ve çıkış güzergahını sizden teyit alırız. Alım sırasında kısa bir iade kontrolü yapılır ve sonucu size de iletiriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik'in dokumacılık geleneği ve bölgedeki tekstil tesislerinin depo/boyahane/salon ayrımı genel sektörel bilgidir; sevkiyat güzergahı ve zemin koordinasyonu firma teslimat pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bozüyük'te İplik ve Kumaş Top Deposunda Forklift ile İstifleme",
        giris:
            "Bilecik'in dokumacılık geleneğini sürdüren Bozüyük'teki tekstil tesislerinde en yoğun forklift kullanımı, iplik bobini ve kumaş topu deposunda görülür. Bu depoların rafları, standart palet depolarından farklı bir düzenle kurulur: iplik bobinleri dik veya yatık istiflenir, kumaş topları ise genelde uzun ve ağır silindirler hâlinde raf gözlerine yerleştirilir. Bu yükün şekli, forklift çatalının açısını ve istifleme hızını doğrudan etkiler — çatalın hafif yanlış açısı bir kumaş topunu deforme edebilir ya da bobin sarımını gevşetebilir. Bozüyük'teki taleplerimizin bir kısmı bu nedenle sadece yük taşıma değil, hassas istifleme deneyimi ister; deponun raf yüksekliği, koridor genişliği ve yükün kırılganlığı birlikte değerlendirilerek doğru forklift sınıfı ve operatör deneyimi önerilir. Bu sayfa, Bozüyük'teki iplik ve kumaş depolarında forklift kiralama sürecimizi anlatıyor.",
        maddeler: [
            {
                baslik: "İplik bobini istiflemede çatal açısı hassasiyeti",
                metin:
                    "İplik bobinleri, sarımın gevşememesi için genelde belirli bir eksende (dik ya da yatık) istiflenir. Çatalın yanlış açıyla girmesi bobin merkezindeki mili zorlayabilir ya da dış sarımı kaydırabilir. Deneyimli operatörlerimiz, bobin tipine göre çatal açısını ve kaldırma hızını buna göre ayarlar; ilk teslimatta depo sorumlusuyla birlikte örnek bir istifleme yapılarak yöntem netleştirilir.",
            },
            {
                baslik: "Kumaş topu taşımada silindir dengesi",
                metin:
                    "Kumaş topları uzun silindir şeklinde ve ağırlık merkezi topun ortasına yakın olduğu için çatal üzerinde dengesi hassastır; hızlı fren veya keskin dönüş topun yuvarlanarak düşmesine yol açabilir. Bu nedenle kumaş topu taşımada hız düşük tutulur, dönüşler geniş yarıçapla yapılır. Topun raf gözüne yerleştirilirken de gözün derinliği ve top uzunluğu önceden karşılaştırılır.",
            },
            {
                baslik: "Dar raf koridorunda manevra",
                metin:
                    "İplik ve kumaş depolarının koridor genişliği, genelde standart palet depolarına göre daha dardır çünkü raf yoğunluğu tesis içinde yer kazanmak için artırılmıştır. Bu koridorlarda dar gövdeli ya da dar koridor forklift sınıfı tercih edilir; koridor genişliği ve raf yüksekliği önceden ölçülüp uygun model belirlenir.",
            },
            {
                baslik: "Toz ve lif birikiminin forklift bakımına etkisi",
                metin:
                    "İplik ve kumaş depolarında havada asılı lif, forkliftin motor filtresi ve hareketli aksamına birikebilir; bu birikim uzun vadede performansı etkiler. Uzun süreli kiralamalarda periyodik filtre kontrolü planımıza dahildir; kısa süreli kiralamalarda ise teslimat öncesi ve sonrası kontrol yeterli olur.",
            },
            {
                baslik: "Yükleme rampası ile depo arasında geçiş",
                metin:
                    "Mamul kumaş topları depodan yükleme rampasına taşınırken, rampa eğimi ve zemin geçişi (beton-metal plaka birleşimi gibi) forkliftin denge kaybetmesine yol açabilir. Bu geçiş noktaları önceden gözden geçirilir, gerekirse geçici bir rampa desteği önerilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yük tipine göre forklift sınıfı karşılaştırması",
                paragraflar: [
                    "Bozüyük'teki tekstil depolarında yük tipine göre hangi forklift sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Yük tipi", "Önerilen sınıf", "Kritik nokta", "Operatör deneyimi"],
                    satirlar: [
                        ["İplik bobini (dik istif)", "Standart çatallı, dar gövde", "Çatal açısı hassasiyeti", "Önerilir"],
                        ["Kumaş topu (silindir)", "Standart çatallı, düşük hız profili", "Dönüşte denge", "Önerilir"],
                        ["Dar koridor raf sistemi", "Dar koridor forklift", "Koridor genişliği ölçümü", "Şart"],
                        ["Yükleme rampası geçişi", "Standart çatallı", "Rampa eğimi/zemin birleşimi", "Önerilir"],
                        ["Hammadde balyası (ağır)", "Yüksek kapasiteli standart", "Ağırlık merkezinin konumu", "Önerilir"],
                    ],
                },
            },
            {
                baslik: "Neden operatör deneyimi bu depolarda öncelikli",
                paragraflar: [
                    "Standart palet taşımada forklift operasyonu görece basittir çünkü palet şekli ve ağırlık dağılımı öngörülebilir. İplik bobini ve kumaş topu gibi düzensiz veya kırılgan yüklerde ise operatörün yük tipine özgü tecrübesi doğrudan hasar riskini azaltır. Bu yüzden Bozüyük'teki tekstil deposu taleplerinde operatörlü kiralamayı öncelikli olarak öneriyoruz.",
                    "Operatörsüz kiralama da mümkündür, ancak bu durumda tesisin kendi personelinin yük tipine aşina ve sertifikalı olması beklenir; ilk kullanımda kısa bir bilgilendirme (çatal açısı, hız sınırı, dönüş yarıçapı) birlikte yapılır.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru forklift sınıfını önerebilmek için depo koridor genişliğini, raf yüksekliğini, yük tipini (bobin/top/balya) ve varsa rampa eğimini önceden bilmemiz gerekiyor. Bu bilgiler fotoğraf veya kısa ölçümle paylaşıldığında hangi modelin uygun olduğunu aynı gün teyit edebiliyoruz.",
                    "Yük tipi belirsizse ya da karışık bir depo söz konusuysa önce keşif yapılır; yanlış sınıf forklift göndermek, hem zaman kaybı hem hasar riski oluşturur.",
                ],
            },
        ],
        sss: [
            {
                soru: "İplik bobinlerimiz hassas, forklift çatalı bunlara zarar verir mi?",
                cevap:
                    "Doğru çatal açısı ve düşük kaldırma hızıyla zarar riski düşüktür, ama bu deneyime bağlıdır. Operatörlü kiralamada operatörümüz bobin tipine göre çatal açısını ayarlar; ilk teslimatta depo sorumlusuyla birlikte örnek bir istifleme yaparak yöntemi netleştiririz. Operatörsüz kiralamada ise personelinize kısa bir bilgilendirme yaparız.",
            },
            {
                soru: "Kumaş topları çok uzun, raf gözüne sığdırmak zor oluyor, yardımcı olabilir misiniz?",
                cevap:
                    "Evet, ama önce raf gözünün derinliğini ve topun uzunluğunu karşılaştırmamız gerekiyor. Top raf derinliğine tam sığmıyorsa ya farklı bir göz önerilir ya da topun rafın önünde kısmen çıkıntılı bırakılabileceği depo kurallarınıza göre değerlendirilir. Ölçüleri önceden paylaştığınızda doğru istifleme planını birlikte çıkarırız.",
            },
            {
                soru: "Depo koridorumuz dar, standart forklift dönemeyebilir mi?",
                cevap:
                    "Koridor genişliğini önceden ölçüp dar koridor sınıfı gerekip gerekmediğine karar veririz. Dar koridor forkliftleri daha küçük dönüş yarıçapına sahiptir ve raf sırasında yan yatarak ilerleyebilir. Koridor ölçüsü net değilse fotoğraf isteriz; yanlış sınıf gönderip depoda manevra sorunu yaşamak istemeyiz.",
            },
            {
                soru: "Depoda çok fazla toz ve iplik lifi var, forklift bundan etkilenir mi?",
                cevap:
                    "Uzun süre kullanımda lif birikimi filtre ve hareketli aksamı etkileyebilir; bu yüzden uzun süreli kiralamalarda periyodik kontrol planımıza dahildir. Kısa süreli kiralamada teslimat öncesi ve sonrası kontrol yeterli oluyor. Depodaki toz yoğunluğu çok yüksekse bunu önceden bildirdiğinizde kontrol sıklığını artırırız.",
            },
            {
                soru: "Yükleme rampasından depoya geçişte forklift dengesini kaybeder mi?",
                cevap:
                    "Rampa eğimi ve zemin birleşim noktası (beton-metal plaka gibi) önceden gözden geçirilmediğinde risk oluşabilir. Bu noktaları teslimat öncesi kontrol eder, gerekiyorsa geçici bir rampa desteği öneririz. Eğim üreticinin belirttiği sınırın üzerindeyse geçiş noktası ayrıca değerlendirilir.",
            },
            {
                soru: "Operatörlü mü yoksa kendi personelimizle mi çalıştırmalıyız?",
                cevap:
                    "İplik ve kumaş gibi kırılgan yüklerde operatör deneyimi hasar riskini azalttığı için operatörlü seçeneği öncelikli öneriyoruz. Kendi personeliniz sertifikalı ve yük tipine aşina ise operatörsüz kiralama da mümkün; bu durumda ilk kullanımda çatal açısı ve hız sınırı konusunda kısa bir bilgilendirme yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik'in dokumacılık geleneği ve bölgedeki tekstil tesislerinde iplik/kumaş deposu bulunması genel sektörel bilgidir; bobin ve kumaş topu istiflemesinin çatal açısı ve denge hassasiyeti ekipman kullanımı genel bilgisidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bozüyük'te Dokuma Hattı Üstü Aydınlatma ve Tesisat İçin Eklemli Platform (Boom) Kiralama",
        giris:
            "Dokuma salonlarının tavan yüksekliği, çoğu üretim tesisinden farklı bir düzenle kurulur: tavan genelde yüksektir ama altında asılı aydınlatma rayı, havalandırma kanalı ve bazen ikinci bir servis platformu bulunur; bu katmanlı yapı, tavana dik bir makaslı platformla değil, hem yükselen hem yatay uzanabilen bir eklemli platformla erişilebilir. Bozüyük'teki dokuma hattı üstü aydınlatma ve tesisat bakım taleplerimizin çoğu bu nedenle boom sınıfı platform ister: tezgah sırasının dışından, sıraya girmeden hedefe erişebilme kabiliyeti, üretim durdurulmadan çalışmayı mümkün kılar. Eklemli kolun 'omuz üstünden' geçme özelliği, aradaki bir engeli (örneğin havalandırma kanalı) dolaşarak hedefe ulaşmayı sağlar; bu, dokuma hattı üstündeki dar ve engebeli erişim koşulunda düz kollu bir teleskopik bomdan daha pratik sonuç verir. Bu sayfa, Bozüyük'teki dokuma salonlarında eklemli platform kullanımını ve dikkat ettiğimiz noktaları anlatıyor.",
        maddeler: [
            {
                baslik: "Tezgah sırasının dışından erişim",
                metin:
                    "Eklemli platform, tezgah sırasının kenarında (ana koridorda) konumlanıp kolunu tezgahların üzerinden uzatarak hedefe ulaşabilir; bu, makinenin sıraya girmesini gereksiz kılar. Kolun ulaşım mesafesi ve açısı, tezgah yüksekliği ve sıra derinliğine göre önceden hesaplanır; hedefin sıranın kaçıncı tezgahında olduğu belirleyici bir veridir.",
            },
            {
                baslik: "Havalandırma kanalını dolaşarak geçiş",
                metin:
                    "Dokuma salonlarında aydınlatma rayının üzerinde çoğu zaman bir havalandırma kanalı bulunur; düz kollu bir platform bu kanalı aşamaz ama eklemli kol 'omuz' noktasından bükülerek kanalın altından veya yanından dolaşabilir. Kanal konumu ve yüksekliği önceden fotoğrafla teyit edilir, kolun bu geçişi güvenle yapabileceği model seçilir.",
            },
            {
                baslik: "Üretim durdurulmadan sepet konumlaması",
                metin:
                    "Sepetin tezgah üzerinde asılı kalması gerektiğinde, altındaki tezgahın çalışıp çalışmadığı belirleyicidir; hareketli çözgü ya da mekik varsa sepet güvenli mesafede tutulur. Tezgah durdurulmadan çalışılabilecek noktalar önceden tesisle birlikte belirlenir, gerekiyorsa ilgili tezgah kısa süreliğine durdurulur.",
            },
            {
                baslik: "Salon içi zemin ve tekerlek izi",
                metin:
                    "Boom sınıfı platformlar genelde tekerlekli ve ağırlığı örümcek platforma göre daha fazladır; salon zemininde hassas döşeme veya taze boyalı yüzey varsa tekerlek izi bırakma riski değerlendirilir. Gerekirse tekerlek altına koruyucu bir yüzey serilir.",
            },
            {
                baslik: "Kısa bakım penceresinde çoklu hedef",
                metin:
                    "Bir vardiya arasında birden fazla aydınlatma armatürüne erişmek gerekiyorsa, hedefler önceden sıralanır ve kolun bir konumdan diğerine geçiş süresi plana dahil edilir. Bu, pencerenin sonuna doğru acele etmeden, öncelikli hedeflerin tamamlanmasını sağlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dokuma hattı üstü erişimde platform sınıfı karşılaştırması",
                paragraflar: [
                    "Dokuma salonlarında tavan altı aydınlatma ve tesisat erişimi için hangi sınıfın uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Koşul", "Eklemli platform (boom)", "Standart makaslı", "Sepetli örümcek"],
                    satirlar: [
                        ["Tezgah sırasının dışından erişim", "Uygun, kol uzanır", "Uygun değil, dik erişim ister", "Uygun değil, sıraya girer"],
                        ["Kanal/engel dolaşma", "Uygun, eklemli kol", "Uygun değil", "Sınırlı"],
                        ["Salon genel aydınlatma bakımı", "Uygun, geniş erişim alanı", "Uygun, düz tavan altı", "Sınırlı, dar hedef"],
                        ["Ağır tekerlek yükü hassasiyeti", "Dikkat gerekir", "Dikkat gerekir", "Daha hafif, avantajlı"],
                        ["Kısa vardiya molası", "Orta kurulum süresi", "Ayak hizalama süresi ister", "Hızlı kurulum"],
                    ],
                },
            },
            {
                baslik: "Neden eklemli sınıf bu erişimde öne çıkıyor",
                paragraflar: [
                    "Dokuma salonlarının tavan altı katmanlı yapısı (aydınlatma rayı + havalandırma kanalı + varsa ikinci servis düzeneği) düz bir dikey erişimle değil, engelleri dolaşabilen bir kolla daha güvenli aşılır. Eklemli platformun 'omuz' eklemi, kolun yatay uzanırken bile dikey ayarlanabilmesini sağlar; bu da tezgah sırasının dışından, hedefe tam isabetle ulaşmayı mümkün kılar.",
                    "Bir diğer avantaj, makinenin ana koridorda sabit kalarak çalışabilmesidir; bu, tezgah sırasına girmeden üretim akışını kesintiye uğratmadan bakım yapmayı mümkün kılar — dokuma salonlarında koridor genelde tek geniş alan olduğu için makine burada rahatça konumlanabilir.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru modeli önerebilmek için hedefin salon içindeki konumunu (kaçıncı tezgah sırası, koridora uzaklığı), tavan altı yüksekliğini ve varsa havalandırma kanalının konumunu önceden bilmemiz gerekiyor. Bu bilgiler fotoğraf veya kroki ile paylaşıldığında kol uzunluğu ve açısı uygun modeli aynı gün belirleyebiliyoruz.",
                    "Bilgi eksikse önce keşif yapılır; kolun menzili yetmeyen bir makineyi sahaya göndermek, işi tamamlamadan geri çağırmak anlamına gelir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tezgah sırasının ortasındaki bir armatüre koridordan erişebilir misiniz?",
                cevap:
                    "Çoğu durumda evet, ama kolun menzili sıra derinliği ve tezgah yüksekliğine bağlı. Hedefin koridora olan mesafesini ve sırada kaçıncı tezgahta olduğunu bilmemiz gerekiyor. Menzil yetmiyorsa daha uzun kollu bir model ya da tezgah sırasına örümcek platformla girme seçeneğini birlikte değerlendiririz.",
            },
            {
                soru: "Aydınlatma rayının üstünde havalandırma kanalı var, kol buraya takılır mı?",
                cevap:
                    "Eklemli kol, düz kollu bir bomdan farklı olarak 'omuz' noktasından bükülüp kanalı dolaşabilir. Ancak kanalın konumunu ve yüksekliğini önceden bilmemiz gerekiyor; fotoğrafla teyit ettiğimizde kolun bu geçişi güvenle yapıp yapamayacağını söyleriz. Geçiş riskliyse alternatif bir erişim açısı planlanır.",
            },
            {
                soru: "Tezgahlar çalışırken sepeti üstlerinde tutabilir miyiz?",
                cevap:
                    "Bu, tezgahın hareketli parçalarının (çözgü, mekik) sepete olan mesafesine bağlı; güvenli mesafe sağlanabiliyorsa mümkün, sağlanamıyorsa ilgili tezgahın kısa süreliğine durdurulması istenir. Bu kararı tesisin vardiya sorumlusuyla birlikte, çalışma başlamadan önce netleştiririz.",
            },
            {
                soru: "Salon zeminimiz hassas, tekerlek izi bırakır mı?",
                cevap:
                    "Boom sınıfı platformlar örümcek platforma göre daha ağır olduğu için hassas veya yeni boyalı zeminlerde iz bırakma riski değerlendirilir. Riskli görünen zeminlerde tekerlek altına koruyucu yüzey seriyoruz; zemin türünü önceden bildirdiğinizde bu malzemeyi hazır getiririz.",
            },
            {
                soru: "Bir vardiya arasında birkaç armatüre birden bakabilir miyiz?",
                cevap:
                    "Evet, hedefleri önceden sıralar ve kolun bir konumdan diğerine geçiş süresini plana dahil ederiz. Bu, pencerenin sonuna doğru acele etmeden öncelikli hedeflerin güvenle tamamlanmasını sağlar; yetişmeyen kalemler bir sonraki pencereye aktarılır.",
            },
            {
                soru: "Operatörlü mü kiralanıyor, yoksa kendi personelimiz mi kullanabilir?",
                cevap:
                    "İki seçenek de mevcut. Dar salon içi engel dolaşma gerektiren erişimlerde, özellikle ilk kullanımda operatörlü seçeneği öneriyoruz; operatörümüz kol açısını salon düzenine göre önceden planlar. Sertifikalı personeliniz varsa operatörsüz kiralama da mümkündür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik'in dokumacılık geleneği ve dokuma salonlarının tavan altı aydınlatma/havalandırma katmanlı düzeni genel sektörel bilgidir; eklemli platformun kol geometrisi ekipman kategorisi genel özelliğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Bozüyük'te İplik ve Kumaş Top Deposunda İç Mekân Platform Kiralama",
        giris:
            "Bozüyük'teki tekstil tesislerinin iplik ve kumaş top depoları, standart palet depolarından farklı bir yükseklik ve raf düzenine sahiptir; raflar genelde bobin ya da top boyutuna göre özel aralıklı kurulur ve tavan aydınlatması bu rafların üstünden geçen dar bir hatta yerleşir. Bu depolarda yapılan iç mekân bakım işleri (aydınlatma değişimi, yangın algılama sensörü kontrolü, sprinkler hattı bakımı) hem raf sırası içinden hem de raf üstü koridordan erişim gerektirebilir. Akülü makaslı platform, iç mekânda egzoz gazı bırakmaması ve sessiz çalışması nedeniyle bu depolarda tercih edilen sınıftır; ancak raf aralığı dar olduğunda gövde genişliği kritik hâle gelir. Bozüyük'teki taleplerimizin çoğu bu nedenle önce raf aralığının ölçülmesiyle başlar, ardından depo yüksekliğine uygun model belirlenir. Bu sayfa, Bozüyük'teki iplik ve kumaş depolarında iç mekân platform kullanımını anlatıyor.",
        maddeler: [
            {
                baslik: "Raf aralığına uygun gövde genişliği",
                metin:
                    "İplik ve kumaş depolarının raf aralığı, bobin çapı veya top uzunluğuna göre belirlendiği için standart palet raf aralığından farklı olabilir. Platformun gövde genişliği bu aralığa göre seçilir; dar aralıklarda kompakt gövdeli akülü makaslı, geniş koridorlarda standart model tercih edilir.",
            },
            {
                baslik: "Raf üstü aydınlatma hattına erişim",
                metin:
                    "Depo aydınlatması genelde raf sıralarının üstünden geçen bir hat şeklindedir; bu hatta erişim için platform raf koridorunda ilerleyip hedefin tam altında durur. Raf üstündeki malzeme yüksekliği (istiflenmiş bobin/top) ile tavan arasındaki boşluk önceden ölçülür, sepetin bu boşluğa sığıp sığmadığı teyit edilir.",
            },
            {
                baslik: "Yangın algılama ve sprinkler hattı bakımı",
                metin:
                    "Tekstil depoları yanıcı malzeme yoğunluğu nedeniyle yangın algılama ve sprinkler sistemine önem verir; bu sistemlerin periyodik kontrolü de raf üstü erişim gerektirir. Kontrol sırasında sistemin devre dışı bırakılması gerekiyorsa bu, tesisin güvenlik prosedürüne göre önceden planlanır.",
            },
            {
                baslik: "Toz ve lif birikiminin platform tekerine etkisi",
                metin:
                    "Depo zemininde biriken iplik lifi, tekerlek tutunmasını zaman zaman etkileyebilir; bu nedenle raf koridorunda manevra düşük hızda yapılır. Teslimat öncesi ve sonrası teker kontrolü standart prosedürümüzdür.",
            },
            {
                baslik: "Depo içi kısa mesafeli taşınma",
                metin:
                    "Bir depo içinde birden fazla raf koridorunda çalışma gerekiyorsa platform kendi tekerlekleriyle koridorlar arası kısa mesafede taşınır; bu taşınma sırasında forklift trafiğiyle çakışmaması için güzergah önceden tesisle koordine edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo yüksekliğine göre platform sınıfı karşılaştırması",
                paragraflar: [
                    "Bozüyük'teki iplik ve kumaş depolarında raf yüksekliğine göre hangi platform sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Depo yüksekliği", "Önerilen sınıf", "Raf aralığı hassasiyeti", "Kurulum hızı"],
                    satirlar: [
                        ["4-6 metre", "Kompakt akülü makaslı", "Dar aralığa uygun", "Hızlı"],
                        ["6-9 metre", "Standart akülü makaslı", "Orta aralık", "Orta"],
                        ["9-12 metre", "Geniş şaseli makaslı veya eklemli", "Geniş koridor gerekir", "Orta-yavaş"],
                        ["Raf sırası içi dar nokta", "Sepetli örümcek platform", "En dar aralığa uygun", "Hızlı"],
                    ],
                },
            },
            {
                baslik: "Neden akülü makaslı bu depolarda öncelikli",
                paragraflar: [
                    "İplik ve kumaş depoları genelde kapalı ve havalandırması sınırlı alanlardır; egzoz gazlı bir makine burada kullanılmaz. Akülü makaslı platform hem sessiz hem emisyonsuz çalıştığı için bu tip kapalı depolarda tercih edilen sınıftır. Ayrıca lastik izi bırakmayan tekerlek seçenekleri, depo zemininin hassas kaplamalı olduğu durumlarda ek avantaj sağlar.",
                    "Raf aralığı dar olduğunda gövde genişliği belirleyici hâle gelir; bu yüzden depo taleplerinde önce raf aralığı ölçülür, sonra model önerilir. Yanlış geniş bir model önerilirse raf koridoruna giremez.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz ölçüler",
                paragraflar: [
                    "Doğru modeli belirlemek için raf koridoru genişliğini, raf yüksekliğini, hedefin (aydınlatma/sensör) yerden yüksekliğini ve depo zemininin türünü (beton, epoksi kaplama vb.) önceden bilmemiz gerekiyor. Bu ölçüler fotoğraf veya kroki ile paylaşıldığında hangi model raf aralığına sığacağını aynı gün teyit edebiliyoruz.",
                    "Ölçü belirsizse önce keşif yapılır; raf aralığına sığmayan bir platformu depoya sokup çıkarmak, hem zaman kaybı hem raf hasarı riski taşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Raflarımız arası çok dar, standart makaslı platform sığar mı?",
                cevap:
                    "Bu, raf koridoru genişliğine bağlı; iplik/kumaş depolarında koridor bazen standart palet deposundan daha dardır. Koridor ölçüsünü önceden bilmemiz gerekiyor, sığmıyorsa kompakt gövdeli bir akülü makaslı ya da sepetli örümcek platform öneririz. Ölçü net değilse fotoğraf isteriz.",
            },
            {
                soru: "Depo kapalı ve havalandırması sınırlı, hangi makine uygun?",
                cevap:
                    "Kapalı ve sınırlı havalandırmalı depolarda akülü makaslı platform tercih edilir; egzoz gazlı bir makine burada kullanılmaz. Akülü modeller hem sessiz hem emisyonsuz çalıştığı için depo içi çalışma koşullarına uygundur.",
            },
            {
                soru: "Sprinkler sistemini kontrol ederken sistemi kapatmak gerekiyor mu?",
                cevap:
                    "Bu, tesisin güvenlik prosedürüne bağlı; bazı kontroller sistemi devre dışı bırakmadan yapılabilirken bazıları için kısa süreli kapatma gerekebilir. Bu kararı önceden tesisin ilgili sorumlusuyla netleştiririz, kapatma gerekiyorsa süresini en kısa tutarız.",
            },
            {
                soru: "Depo zeminimiz epoksi kaplı, platform tekerleği iz bırakır mı?",
                cevap:
                    "İz bırakmayan lastik izi olmayan teker seçenekleri mevcuttur; hassas kaplamalı zeminlerde bu seçeneği öneririz. Zemin türünü önceden bildirdiğinizde uygun teker tipiyle geliriz.",
            },
            {
                soru: "Aynı ziyarette birden fazla raf koridorunda çalışabilir misiniz?",
                cevap:
                    "Evet, platform kendi tekerlekleriyle koridorlar arası kısa mesafede taşınabilir. Bu taşınma sırasında forklift trafiğiyle çakışmaması için güzergahı önceden tesisle koordine ederiz; birden fazla koridor için hedef sırası da önceden planlanır.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa kendi personelimiz mi kullanabilir?",
                cevap:
                    "İki seçenek de mevcut. Dar raf koridoru gibi manevra hassasiyeti yüksek alanlarda operatörlü seçeneği öneriyoruz; sertifikalı personeliniz varsa operatörsüz kiralama da mümkündür. Kararı raf aralığının darlığına göre birlikte veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik'in dokumacılık geleneği ve bölgedeki tekstil tesislerinin iplik/kumaş depolarının raf düzeni genel sektörel bilgidir; akülü makaslı platformun kapalı mekân avantajı ekipman kategorisi genel özelliğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bozüyük'te Yeni Dokuma Hattı Çelik Konstrüksiyon Montajı İçin Platform Kiralama",
        giris:
            "Bir tekstil tesisinin kapasite artırımı ya da yeni bir dokuma hattı eklemesi, genelde mevcut salona bitişik yeni bir çelik konstrüksiyon bölümü inşasıyla başlar; bu bölüm hem çatı kirişleri hem de yeni hattın aydınlatma-havalandırma altyapısını taşıyacak çelik iskeleti içerir. Bozüyük'teki taleplerimizin bir kısmı bu tip genişleme projelerinden gelir: çelik kolon dikimi tamamlandıktan sonra kiriş bağlantı noktalarının cıvatalanması, çatı aşık montajı ve bu aşıklara asılacak aydınlatma-havalandırma hattının ön kablolaması. Bu iş, mevcut üretim hattından ayrı ama bitişik bir sahada yürüdüğü için hem inşaat trafiği hem de yakındaki çalışan üretim biriminin güvenliği birlikte gözetilir. Standart bir vinç ya da sabit iskele yerine eklemli veya teleskopik platform tercih edilmesinin nedeni, montaj ilerledikçe erişim noktasının sürekli değişmesi ve sahanın henüz düzenli bir zemine kavuşmamış olmasıdır. Bu sayfa, Bozüyük'te yeni dokuma hattı çelik konstrüksiyon montajında platform kullanımını anlatıyor.",
        maddeler: [
            {
                baslik: "Kolon dikimi sonrası kiriş bağlantı montajı",
                metin:
                    "Kolonlar dikildikten sonra kirişlerin bağlantı noktalarındaki cıvatalama işi, her bağlantı noktasında ayrı bir erişim gerektirir. Platform, kolon sırası boyunca ilerleyerek her bağlantıya sırayla yaklaşır; bağlantı yüksekliği ve kolon aralığı önceden bilinerek doğru sepet yüksekliği ve gövde genişliği belirlenir.",
            },
            {
                baslik: "Çatı aşık montajında yatay hareket",
                metin:
                    "Aşık montajı, çatı düzleminde yatay yönde ilerleyen bir iştir; bu nedenle tek noktada sabit kalan bir vinç yerine, yatay ve dikey hareketi birlikte sağlayan eklemli platform daha verimli çalışır. Aşık aralıkları ve çatı eğimi önceden bilinerek kolun bu eğimde güvenle çalışabileceği açı belirlenir.",
            },
            {
                baslik: "Aydınlatma-havalandırma ön kablolaması",
                metin:
                    "Çatı iskeleti tamamlandıktan sonra, gelecekteki aydınlatma ve havalandırma hattının kablo taşıyıcıları bu aşamada monte edilir. Bu iş, kiriş ve aşık montajından daha hassas bir konumlama ister; sepetin taşıyıcı hattı boyunca yavaş ve kontrollü ilerlemesi gerekir.",
            },
            {
                baslik: "Düzensiz inşaat sahası zemini",
                metin:
                    "Yeni bölümün zemini, üretim salonunun aksine henüz düzgün bir beton döşemeye kavuşmamış olabilir; dökülmüş dolgu, henüz sıkıştırılmamış toprak veya geçici platform yolu bulunabilir. Bu zeminde platformun destek ayaklarının veya paletli sisteminin taşıma kapasitesi önceden değerlendirilir, gerekirse takoz veya plaka desteği kullanılır.",
            },
            {
                baslik: "Mevcut üretim birimine yakınlık güvenliği",
                metin:
                    "İnşaat sahası genelde çalışan üretim salonuna bitişiktir; bu nedenle platformun çalışma alanı ile üretim salonu arasındaki sınır (bariyer, uyarı şeridi) net çizilir. Malzeme düşürme riski olan işlerde üretim tarafındaki geçişler geçici olarak kısıtlanabilir; bu kısıtlama tesisle önceden koordine edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre platform sınıfı karşılaştırması",
                paragraflar: [
                    "Yeni dokuma hattı çelik konstrüksiyon montajının farklı aşamalarında hangi platform sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Montaj aşaması", "Önerilen sınıf", "Kritik nokta", "Zemin gereksinimi"],
                    satirlar: [
                        ["Kiriş bağlantı cıvatalama", "Eklemli platform (boom)", "Nokta erişim hassasiyeti", "Orta sertlikte zemin"],
                        ["Çatı aşık montajı", "Teleskopik/eklemli platform", "Yatay+dikey hareket", "Düz veya hafif eğimli"],
                        ["Kablo taşıyıcı montajı", "Eklemli platform, düşük hız", "Konumlama hassasiyeti", "Sabit zemin"],
                        ["Düzensiz dolgu zemin geçişi", "Paletli sepetli platform", "Ayak/palet dengesi", "Takviyeli olabilir"],
                    ],
                },
            },
            {
                baslik: "Neden bu iş erken planlama gerektiriyor",
                paragraflar: [
                    "Çelik konstrüksiyon montajı, tek bir sabit noktada değil kolon sırası ve çatı düzlemi boyunca ilerleyen bir iştir; bu yüzden platformun erişim planı, montaj sırasına paralel olarak önceden hazırlanır. Erişim planı olmadan sahaya gelen bir makine, her bağlantı noktasında yeniden konumlanmak zorunda kalır ve bu da işi yavaşlatır.",
                    "Ayrıca inşaat sahasının zemini üretim sahasından farklı olduğu için, zemin taşıma değerlendirmesi montaj başlamadan yapılır. Bu değerlendirme, ilerleyen haftalarda zemin sertleştikçe (beton dökümü tamamlandıkça) güncellenir.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru modeli önerebilmek için kolon aralığını, çatı yüksekliğini ve eğimini, aşık aralıklarını ve inşaat sahası zemininin o anki durumunu (dolgu, sıkıştırılmış, beton) önceden bilmemiz gerekiyor. Bu bilgiler proje çizimi veya fotoğrafla paylaşıldığında hangi model ve kol uzunluğunun uygun olduğunu değerlendirebiliyoruz.",
                    "Montaj birden fazla haftaya yayılıyorsa, zemin durumu değiştikçe (örneğin beton döküldükten sonra) platform ihtiyacını yeniden gözden geçiririz; ilk haftanın planı son haftaya otomatik uygulanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni bölümün zemini henüz betonlanmadı, platform bu zeminde çalışabilir mi?",
                cevap:
                    "Zeminin o anki durumuna bağlı; sıkıştırılmış dolgu üzerinde paletli veya geniş tabanlı platformlar çalışabilir, ancak henüz gevşek toprak varsa taşıma kapasitesi yetersiz kalabilir. Zemin durumunu önceden değerlendirir, gerekiyorsa takoz veya plaka desteği kullanırız; riskli görünen bir zeminde çalışma ertelenir.",
            },
            {
                soru: "Kolonlar dikildi ama kiriş bağlantı noktaları farklı yüksekliklerde, tek makine yeter mi?",
                cevap:
                    "Bağlantı yüksekliklerinin aralığını önceden bilmemiz gerekiyor; fark büyükse tek bir modelin çalışma yüksekliği yetmeyebilir. Bu durumda ya daha yüksek kapasiteli bir model önerilir ya da iş iki aşamaya bölünerek farklı modellerle tamamlanır. Kesin cevap için kolon ve kiriş yükseklik ölçülerini paylaşmanız gerekir.",
            },
            {
                soru: "Çatı eğimli, platform bu eğimde güvenle çalışabilir mi?",
                cevap:
                    "Eğim derecesine bağlı; üreticinin belirttiği azami eğim sınırının altındaki çatılarda eklemli platform kolu güvenle çalışabilir. Eğimi ölçüp bu sınırla karşılaştırırız; sınırın üzerindeyse alternatif erişim yöntemi (örneğin sabit iskele desteği) birlikte değerlendirilir.",
            },
            {
                soru: "İnşaat sahası üretim salonuna bitişik, üretimi etkiler mi?",
                cevap:
                    "Çalışma alanı ile üretim salonu arasına net bir sınır (bariyer, uyarı şeridi) çekeriz; malzeme düşürme riski olan işlerde üretim tarafındaki geçişleri geçici olarak kısıtlarız. Bu kısıtlamanın zamanlamasını ve süresini tesisle önceden koordine ederiz, üretimi habersiz etkilemeyiz.",
            },
            {
                soru: "Montaj birkaç hafta sürecek, aynı makineyi mi kiralıyoruz?",
                cevap:
                    "Genelde evet, ama zemin durumu değiştikçe (örneğin beton döküldükten sonra) ihtiyacı yeniden değerlendiririz. İlk haftalarda paletli bir model gerekebilirken, zemin sertleştikten sonra tekerlekli bir modele geçiş daha verimli olabilir. Bu değişimi süreç içinde birlikte planlarız.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa şantiye ekibimiz mi kullanabilir?",
                cevap:
                    "İki seçenek de mevcut. İnşaat sahasının değişken zemin ve erişim koşulları nedeniyle operatörlü seçeneği öncelikli öneriyoruz; operatörümüz zemin ve kolon düzenine göre günlük konumlama yapar. Sertifikalı şantiye personeliniz varsa operatörsüz kiralama da mümkündür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tekstil tesislerinde kapasite artırımı amacıyla yeni hat/bölüm eklenmesi ve bunun çelik konstrüksiyon montajı gerektirmesi sektör geneli bilgidir; kolon-kiriş-aşık montaj sırası inşaat pratiği genel bilgisidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bozüyük'te İplik Fabrikası Hammadde (Pamuk Balyası) Depolama Alanında Platform Kiralama",
        giris:
            "İplik üretiminin ilk aşaması, pamuk balyalarının fabrikaya girişi ve hammadde deposunda istiflenmesidir; bu depolar genelde fabrikanın ana üretim binasından ayrı, açık veya yarı kapalı bir alanda kurulur ve balyaların üst üste yüksek istiflenmesi nedeniyle depo çatısı ve aydınlatma sistemi standart bir üretim salonundan farklı bir yükseklik-erişim ihtiyacı doğurur. Bozüyük'teki dokumacılık geleneğinin devamı olan iplik tesislerinde bu hammadde deposu çevresinde yaptığımız işler; çatı altı aydınlatma bakımı, yangın algılama sensörü kontrolü ve depo giriş kapısı üzerindeki yükleme rampası aydınlatmasıdır. Bu alanların zemini genelde beton olsa da açık hava koşullarına maruz kaldığı için zaman zaman düzensizlik gösterebilir; bu yüzden makine seçiminde hem çalışma yüksekliği hem zemin taşıması birlikte değerlendirilir. Bu sayfa, Bozüyük'teki iplik fabrikalarının hammadde depolama alanında platform kullanımını anlatıyor.",
        maddeler: [
            {
                baslik: "Yüksek balya istifinin üstündeki çatı erişimi",
                metin:
                    "Pamuk balyaları depo içinde birkaç kat yüksekliğinde istiflenebilir; bu istifin üstündeki çatı altı aydınlatma veya havalandırma noktasına erişim, istif yüksekliğinin üzerine çıkabilen bir çalışma yüksekliği gerektirir. İstifin o anki yüksekliği değişken olduğu için, çalışma öncesi güncel istif durumu fotoğrafla teyit edilir.",
            },
            {
                baslik: "Açık veya yarı kapalı alan hava koşulu",
                metin:
                    "Hammadde deposu tam kapalı bir salon olmayabilir; rüzgar ve yağış maruziyeti olduğunda platformun dış mekân kullanım koşullarına uygun olması gerekir. Rüzgar hızı sınırı aşıldığında yüksek irtifada çalışma ertelenir, bu karar sahada anlık olarak verilir.",
            },
            {
                baslik: "Yangın algılama sisteminin öncelikli kontrolü",
                metin:
                    "Pamuk gibi yanıcı hammadde depoları için yangın algılama sisteminin periyodik kontrolü kritik önemdedir; bu kontrol genelde depo tavanındaki sensör noktalarına erişim ister. Sensör konumları önceden bilinerek platform güzergahı buna göre planlanır.",
            },
            {
                baslik: "Yükleme rampası üstü aydınlatma",
                metin:
                    "Balya girişinin yapıldığı yükleme rampası üzerindeki aydınlatma, hem gece teslimatları hem forklift güvenliği için önemlidir. Bu noktaya erişim sırasında rampa üzerindeki araç trafiği geçici olarak durdurulur.",
            },
            {
                baslik: "Zeminin açık hava koşullarından etkilenmesi",
                metin:
                    "Açık depolama alanının zemini yağış sonrası ıslanabilir veya zamanla çatlaklar oluşabilir; bu durum platformun ayak veya tekerlek taşıma güvenliğini etkiler. Çalışma öncesi zemin görsel olarak kontrol edilir, riskli bölgelerde takoz desteği kullanılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hammadde deposu koşullarına göre platform karşılaştırması",
                paragraflar: [
                    "Bozüyük'teki iplik fabrikalarının hammadde depolama alanında hangi platform sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Koşul", "Önerilen sınıf", "Kritik nokta", "Hava koşulu uygunluğu"],
                    satirlar: [
                        ["Yüksek balya istifi üstü erişim", "Eklemli/teleskopik platform", "Çalışma yüksekliği yeterliliği", "Dış mekân uygun model"],
                        ["Açık alan rüzgar maruziyeti", "Ağır dizel/hibrit platform", "Rüzgar sınırı takibi", "Şart"],
                        ["Yükleme rampası üstü nokta erişim", "Eklemli platform", "Trafik koordinasyonu", "Dış mekân uygun model"],
                        ["Düzensiz açık zemin", "Geniş tabanlı, dört tekerlek tahrikli", "Zemin taşıma kontrolü", "Şart"],
                    ],
                },
            },
            {
                baslik: "Neden bu alan ayrı bir değerlendirme gerektiriyor",
                paragraflar: [
                    "Hammadde depolama alanı, üretim salonunun kapalı ve kontrollü ortamından farklı olarak açık hava koşullarına maruz kalabilir; bu, hem makinenin dış mekân kullanıma uygun olmasını hem de rüzgar/yağış gibi değişken koşulların anlık takip edilmesini gerektirir. Ayrıca yüksek balya istifi, sabit bir çalışma yüksekliği varsayımını geçersiz kılar — istif azaldıkça ya da arttıkça gerekli çalışma yüksekliği değişir.",
                    "Bu nedenle her ziyaret öncesi güncel istif durumu ve hava koşulu tekrar teyit edilir; geçen ay uygun olan model bu ay otomatik olarak uygun sayılmaz.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru modeli önerebilmek için depo alanının açık mı yarı kapalı mı olduğunu, güncel balya istif yüksekliğini, sensör/aydınlatma hedeflerinin konumunu ve zemin türünü önceden bilmemiz gerekiyor. Bu bilgiler fotoğrafla paylaşıldığında uygun modeli aynı gün belirleyebiliyoruz.",
                    "İstif yüksekliği sık değişiyorsa, çalışma tarihine yakın bir güncel fotoğraf isteriz; eski bir fotoğrafa göre planlanan model, güncel istifle uyuşmayabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Balya istifimiz çok yüksek, standart platform buna yetişir mi?",
                cevap:
                    "İstifin güncel yüksekliğini bilmemiz gerekiyor çünkü istif yüksekliği zamanla değişir. Güncel bir fotoğraf paylaştığınızda, çalışma yüksekliği yeterli modeli önerebiliyoruz; istif çok yüksekse teleskopik veya eklemli sınıf gerekebilir. Eski bir ölçüye göre model önermeyiz, her çalışma öncesi güncel durumu teyit ederiz.",
            },
            {
                soru: "Deponuz açık alan, rüzgarlı günlerde çalışma yapılabilir mi?",
                cevap:
                    "Üreticinin belirttiği rüzgar hızı sınırının üzerinde yüksek irtifada çalışma yapılmaz; bu karar sahada anlık ölçümle verilir. Rüzgarlı bir günde planlanan çalışma ertelenebilir, bu durumda yeni tarih en kısa sürede belirlenir. Güvenlik, program aksaması pahasına önceliklidir.",
            },
            {
                soru: "Yangın algılama sensörlerinin konumunu bilmiyoruz, siz bulabilir misiniz?",
                cevap:
                    "Sensör konumlarını genelde tesisin yangın güvenlik sorumlusu veya proje çizimlerinden netleştiriyoruz; bu bilgi bizde yoksa çalışma öncesi sizinle birlikte sahada tespit ederiz. Konumlar netleştikten sonra platform güzergahı buna göre planlanır.",
            },
            {
                soru: "Yükleme rampasındaki aydınlatmaya çalışırken araç trafiği durur mu?",
                cevap:
                    "Evet, çalışma süresince rampa üzerindeki araç trafiği geçici olarak durdurulur; bu süreyi mümkün olduğunca kısa tutmaya çalışırız. Rampanın yoğun kullanıldığı saatler varsa bunu önceden bildirdiğinizde çalışmayı sakin bir saate planlarız.",
            },
            {
                soru: "Zeminimiz açık alanda, yağış sonrası çamurlaşıyor. Yine de çalışabilir miyiz?",
                cevap:
                    "Zeminin o anki durumuna bağlı; ıslak ve yumuşamış zeminde geniş tabanlı ve dört tekerlek tahrikli bir model daha güvenlidir, riskli görünen noktalarda takoz desteği kullanırız. Son yağıştan bu yana geçen süreyi ve zeminin görünür durumunu çalışma öncesi sorarız.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa personelimiz mi kullanabilir?",
                cevap:
                    "İki seçenek de mevcut. Açık alan ve değişken hava koşulu nedeniyle operatörlü seçeneği öncelikli öneriyoruz; operatörümüz rüzgar ve zemin durumunu sahada değerlendirip karar verir. Sertifikalı personeliniz varsa operatörsüz kiralama da mümkündür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İplik üretiminde pamuk balyası hammadde deposunun ayrı ve yüksek istifli bir alan olması, tekstil sektörü üretim süreci genel bilgisidir. Belirli tesis, rakam ve istif ölçüsü verilmemiştir; istif yüksekliğinin değişken olduğu ve her ziyarette güncel teyit gerektiği vurgulanmıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bozüyük'te Dokuma Hattı Üstü Enerji ve Aydınlatma Bakım Platformu Kiralama",
        giris:
            "Dokuma salonlarının aydınlatması, standart bir sanayi tesisinden farklı bir hassasiyet gerektirir; çünkü tezgah üzerindeki iplik renginin ve dokuma hatasının doğru görülebilmesi belirli bir aydınlatma şiddeti ve açısı ister. Bu yüzden dokuma salonlarında armatür yoğunluğu genelde yüksektir ve her armatürün periyodik bakımı, tek tek tezgah sıraları arasında dolaşarak yapılır. Bozüyük'teki iplik ve dokuma tesislerinden gelen enerji-aydınlatma bakım taleplerimiz, bu yoğun armatür düzenine ek olarak elektrik pano ve kablo tavası bakımını da kapsar; kablo tavaları genelde tezgah sıralarının üstünden geçtiği için erişim, hem tezgaha temas etmeden hem de enerjili hat güvenliği gözetilerek yapılır. Bu sayfa, Bozüyük'teki dokuma ve iplik tesislerinde enerji-aydınlatma bakım sürecimizi ve platform kullanımını anlatıyor.",
        maddeler: [
            {
                baslik: "Yoğun armatür düzeninde sıralı bakım",
                metin:
                    "Dokuma salonunda çok sayıda armatür kısa aralıklarla dizildiği için, bir bakım turu genelde tek seferde birkaç armatürü kapsar. Armatürler önceden numaralandırılıp bir güzergah planı çıkarılır; platform bu güzergah boyunca ilerleyerek her armatüre sırayla yaklaşır, gereksiz geri dönüş yapılmaz.",
            },
            {
                baslik: "Enerjili kablo tavası yakınında güvenli mesafe",
                metin:
                    "Kablo tavaları tezgah sıralarının üstünden geçtiği için, bakım sırasında sepetin bu hatta güvenli mesafede kalması gerekir. Enerjili hat yakınında çalışırken izole ekipman ve güvenli mesafe kuralı uygulanır; hat üzerinde çalışma gerekiyorsa ilgili hattın enerjisi tesisin elektrik sorumlusuyla koordineli kesilir.",
            },
            {
                baslik: "Elektrik panosu çevresinde erişim",
                metin:
                    "Salon içi elektrik panoları genelde duvara veya kolona monte edilir; panonun üst kısmındaki bağlantı veya soğutma fanı bakımı platform erişimi gerektirebilir. Pano önünde güvenli çalışma alanı bırakılması, elektrik güvenlik kuralı gereği önceden netleştirilir.",
            },
            {
                baslik: "Vardiya arası kısa bakım penceresi",
                metin:
                    "Aydınlatma bakımı genelde üretim durmadan, vardiya arası kısa bir pencerede yapılır. Bu pencerede kaç armatürün tamamlanabileceği önceden hesaplanır; yetişmeyen armatürler bir sonraki pencereye planlanır, acele ile enerji güvenlik adımları atlanmaz.",
            },
            {
                baslik: "Aydınlatma şiddeti ölçümü ve raporlama",
                metin:
                    "Bakım sonrası, dokuma kalitesi için kritik olan aydınlatma şiddeti bazı tesislerde ölçülüp kayıt altına alınır. Bu ölçüm talep edilirse bakım sırasında yapılır ve sonuç kısa bir raporla tesise iletilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bakım kapsamına göre platform sınıfı karşılaştırması",
                paragraflar: [
                    "Dokuma salonu enerji-aydınlatma bakımında hangi platform sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Bakım kapsamı", "Önerilen sınıf", "Kritik nokta", "Kurulum hızı"],
                    satirlar: [
                        ["Tek tezgah sırası armatür bakımı", "Sepetli örümcek platform", "Dar koridor geçişi", "Hızlı"],
                        ["Genel salon aydınlatma turu", "Standart akülü makaslı", "Sıralı güzergah", "Orta"],
                        ["Kablo tavası/enerjili hat yakını", "Eklemli platform", "Güvenli mesafe kontrolü", "Orta"],
                        ["Yüksek tavan pano bakımı", "Eklemli/teleskopik platform", "Enerji kesme koordinasyonu", "Orta-yavaş"],
                    ],
                },
            },
            {
                baslik: "Neden bu bakım sıralı güzergah gerektiriyor",
                paragraflar: [
                    "Dokuma salonundaki armatür sayısının fazlalığı, bakımı tek bir noktada değil bir güzergah boyunca yapılan bir iş hâline getirir. Güzergah önceden planlanmazsa platform aynı bölgeye tekrar tekrar dönmek zorunda kalır, bu da vardiya arası kısa pencereyi verimsiz kullanır.",
                    "Ayrıca enerjili hatlara yakın çalışma, her armatürde ayrı bir güvenlik değerlendirmesi gerektirir; bu değerlendirme güzergah planına dahil edilerek, hangi noktada enerji kesintisi gerektiği önceden belirlenir.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru planı çıkarabilmek için armatür sayısını ve salon içindeki dağılımını, kablo tavası ve pano konumlarını, vardiya arası pencere süresini önceden bilmemiz gerekiyor. Bu bilgiler bir kroki ile paylaşıldığında güzergahı ve gereken makine sayısını önceden belirleyebiliyoruz.",
                    "Armatür sayısı çoksa iş birkaç pencereye bölünebilir; tek seferde bitirme baskısı enerji güvenlik adımlarının atlanmasına yol açmamalıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Salonumuzda çok sayıda armatür var, hepsine tek seferde bakabilir misiniz?",
                cevap:
                    "Armatür sayısına ve vardiya arası pencerenin süresine bağlı. Önceden hazırlanan bir güzergah planıyla mümkün olduğunca çoğunu tek seferde kapsamaya çalışırız, ama pencere yetmiyorsa iş birkaç ziyarete bölünür. Acele ile enerji güvenlik adımları atlanmaz; yetişmeyen armatürler bir sonraki pencereye planlanır.",
            },
            {
                soru: "Kablo tavası enerjili, platform buraya çok yaklaşırsa risk oluşur mu?",
                cevap:
                    "Evet, bu yüzden sepedin enerjili hatta güvenli mesafede kalmasına dikkat ederiz. Hat üzerinde doğrudan çalışma gerekiyorsa, ilgili hattın enerjisini tesisin elektrik sorumlusuyla koordineli olarak keseriz; enerji kesilmeden hat üzerinde çalışma yapılmaz.",
            },
            {
                soru: "Elektrik panosunun önünde çalışma alanı dar, platform buraya sığar mı?",
                cevap:
                    "Pano önündeki güvenli çalışma alanı elektrik güvenlik kuralı gereği zaten belirli bir genişlikte olmalıdır; bu alan platform için de yeterli olabilir. Alan darsa daha kompakt gövdeli bir model öneririz. Pano önü ölçüsünü önceden bilmemiz, doğru modeli seçmemiz için gerekir.",
            },
            {
                soru: "Bakımı üretim durmadan yapabilir misiniz?",
                cevap:
                    "Genelde evet, vardiya arası kısa pencerede çalışırız. Ancak enerjili hat üzerinde doğrudan müdahale gerekiyorsa, o bölümün kısa süreliğine durdurulması gerekebilir. Bu durumu önceden tesisin ilgili sorumlusuyla netleştirir, süreyi mümkün olan en kısa tutarız.",
            },
            {
                soru: "Aydınlatma şiddetini ölçüp bize rapor verebilir misiniz?",
                cevap:
                    "Talep edilirse bakım sırasında ölçüm yapıp kısa bir rapor hazırlarız. Bu ölçüm özellikle dokuma kalite kontrolü için aydınlatma şiddetinin belirli bir standartta tutulması gereken tesislerde faydalı oluyor; ölçüm ihtiyacınızı önceden belirtmeniz yeterli.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa kendi elektrik ekibimiz mi kullanabilir?",
                cevap:
                    "İki seçenek de mevcut. Enerjili hat yakınında çalışma riski nedeniyle operatörlü seçeneği öncelikli öneriyoruz; operatörümüz güvenli mesafe ve güzergah planını uygular. Sertifikalı elektrik personeliniz varsa operatörsüz kiralama da mümkündür, bu durumda güvenlik koordinasyonu birlikte yapılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Dokuma salonlarında aydınlatma yoğunluğunun ürün kalite kontrolü için önemli olduğu ve armatür sayısının fazla olduğu genel sektörel bilgidir; enerjili hat yakınında güvenli mesafe kuralı elektrik iş güvenliği genel bilgisidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bozüyük'te Boyahane ve Apre Tesisinde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Bir tekstil tesisinde operatörlü mü yoksa operatörsüz mü platform kiralanması gerektiği sorusu, salonun türüne göre farklı cevap bulur. Dokuma salonunda tezgah sırası içinde manevra ustalık isterken, boyahane ve apre bölümünde asıl belirleyici faktör ortamın kendisidir: yüksek nem, buhar ve zaman zaman kimyasal madde varlığı, hem makinenin hem operatörün bu koşullara aşina olmasını gerektirir. Bozüyük'teki tekstil tesislerinden gelen taleplerde bu nedenle boyahane-apre bölümü için genelde operatörlü kiralamayı öneriyoruz; operatörümüz nem ve buhar yoğunluğunun makinenin elektrik aksamına ve zemin tutunmasına etkisini bilerek çalışır. Kuru ve düz zeminli salon veya depo bölümlerinde ise sertifikalı personeliniz varsa operatörsüz seçenek de rahatlıkla tercih edilebilir. Bu sayfa, Bozüyük'teki tekstil tesislerinde operatörlü/operatörsüz kararını nasıl verdiğimizi anlatıyor.",
        maddeler: [
            {
                baslik: "Boyahane-apre bölümünde nem ve buhar riski",
                metin:
                    "Boyahane ve apre bölümlerinde nem oranı ve zaman zaman buhar yoğunluğu diğer bölümlere göre belirgin şekilde yüksektir. Bu koşullarda çalışacak operatörün, zemin kayganlığını ve elektrikli aksamın nem etkisini bilerek hız ve manevra kararı vermesi gerekir; bu nedenle bu bölümlerde operatörlü kiralamayı öncelikli öneririz.",
            },
            {
                baslik: "Kimyasal madde bulunan alanlarda ek dikkat",
                metin:
                    "Boyahane bölümünde boya ve yardımcı kimyasal maddeler bulunabilir; bu maddelerin döküntü veya buharına maruz kalma riski olan noktalarda operatörümüz tesisin kimyasal güvenlik prosedürüne göre hareket eder. Hangi alanların bu riski taşıdığı çalışma öncesi tesisten öğrenilir.",
            },
            {
                baslik: "Kuru salon ve depo bölümünde operatörsüz seçenek",
                metin:
                    "Dokuma salonu koridoru veya iplik deposu gibi kuru ve düz zeminli bölümlerde, sertifikalı personeliniz varsa operatörsüz kiralama pratik bir seçenektir. Bu durumda ilk kullanımda makinenin kontrol paneli ve güvenlik özellikleri hakkında kısa bir bilgilendirme yapılır.",
            },
            {
                baslik: "Vardiya süresince sürekli operatör ihtiyacı",
                metin:
                    "Uzun süreli bakım işlerinde, özellikle nemli bölümlerde, operatörün vardiya boyunca sahada kalması güvenlik açısından tercih edilir. Kısa süreli tek noktalı işlerde ise operatör teslim sonrası ayrılıp, iş bitince tekrar gelerek makineyi toplayabilir; bu tercih iş süresine göre önceden konuşulur.",
            },
            {
                baslik: "Karma bölüm geçişlerinde tek operatörle devamlılık",
                metin:
                    "Bir çalışma hem kuru salon hem nemli boyahane bölümünü kapsıyorsa, tek bir operatörlü makine ile iki bölümü de geçmek, ortadan operatör değiştirmekten daha pratiktir. Operatörümüz bölüm geçişinde ortam koşuluna göre hız ve manevrasını ayarlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bölüme göre operatörlü/operatörsüz karşılaştırması",
                paragraflar: [
                    "Bozüyük'teki tekstil tesislerinin farklı bölümlerinde operatörlü ya da operatörsüz kararını aşağıdaki gibi veriyoruz.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Önerilen seçenek", "Gerekçe", "Sertifika gereksinimi"],
                    satirlar: [
                        ["Boyahane/apre (nemli)", "Operatörlü", "Nem/buhar risk yönetimi", "Tesis personeli için de şart"],
                        ["Kimyasal madde alanı", "Operatörlü", "Güvenlik prosedürü bilgisi", "Ek eğitim gerekebilir"],
                        ["Dokuma salonu koridoru (kuru)", "Operatörsüz mümkün", "Düz zemin, düşük risk", "Standart sertifika yeterli"],
                        ["İplik/kumaş deposu (kuru)", "Operatörsüz mümkün", "Düz zemin, düşük risk", "Standart sertifika yeterli"],
                        ["Karma bölüm geçişi", "Operatörlü", "Tek operatörle devamlılık", "-"],
                    ],
                },
            },
            {
                baslik: "Operatörlü seçimin boyahanede önceliklendirilme nedeni",
                paragraflar: [
                    "Boyahane ve apre bölümlerinin ortam koşulu, standart bir sanayi salonundan farklıdır; nem, buhar ve zemin kayganlığı birlikte değerlendirilmesi gereken faktörlerdir. Deneyimsiz bir kullanıcının bu koşullarda hız veya manevra hatası yapma riski, kuru bir salona göre daha yüksektir. Operatörümüz bu ortamlara aşina olduğu için riski önceden öngörüp buna göre hareket eder.",
                    "Ayrıca boyahanede kimyasal madde bulunması, operatörün sadece makine kullanımını değil, tesisin kimyasal güvenlik prosedürünü de bilmesini gerektirir. Bu bilgi genelde tesisten alınıp operatörümüze aktarılır.",
                ],
            },
            {
                baslik: "Operatörsüz kiralamada beklediğimiz koşullar",
                paragraflar: [
                    "Operatörsüz kiralama için personelinizin ilgili makine sınıfı için geçerli sertifikaya sahip olması ve çalışılacak alanın kuru, düz zeminli olması beklenir. İlk kullanımda kısa bir bilgilendirme (kontrol paneli, acil durdurma, hız sınırları) yaparız.",
                    "Nemli veya kimyasal madde bulunan bir bölümde operatörsüz kiralama talep edilirse, önce riski birlikte değerlendiririz; koşullar uygun değilse operatörlü seçeneği öneririz, bu bir dayatma değil güvenlik değerlendirmesidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Boyahane bölümünde neden operatörsüz kiralama önermiyorsunuz?",
                cevap:
                    "Boyahane ve apre bölümlerinde nem, buhar ve zaman zaman kimyasal madde varlığı, deneyimsiz kullanımda hız ve manevra hatası riskini artırır. Operatörümüz bu koşullara aşina olduğu için riski önceden öngörür. Personeliniz bu ortamda deneyimliyse ve tesisin kimyasal güvenlik prosedürünü biliyorsa operatörsüz seçeneği yine de değerlendirebiliriz; kararı birlikte veririz.",
            },
            {
                soru: "İplik deposunda kendi personelimiz kullanabilir mi?",
                cevap:
                    "Evet, iplik deposu genelde kuru ve düz zeminli olduğu için, sertifikalı personeliniz varsa operatörsüz kiralama pratik bir seçenektir. İlk kullanımda kontrol paneli ve güvenlik özellikleri hakkında kısa bir bilgilendirme yaparız.",
            },
            {
                soru: "Aynı çalışma hem kuru salon hem nemli boyahane bölümünü kapsıyor, iki operatör mü gerekiyor?",
                cevap:
                    "Hayır, tek bir operatörlü makine ile iki bölümü de geçmek daha pratik. Operatörümüz bölüm geçişinde ortam koşuluna göre hız ve manevrasını kendisi ayarlar; bu, ortada operatör değiştirmekten daha az kesinti yaratır.",
            },
            {
                soru: "Kimyasal madde alanında çalışırken operatörünüz ek önlem alıyor mu?",
                cevap:
                    "Evet, tesisin kimyasal güvenlik prosedürünü çalışma öncesi öğreniriz ve operatörümüz buna göre hareket eder; hangi alanların döküntü veya buhar riski taşıdığı önceden tesisten sorulur. Gerekirse tesisin kendi güvenlik ekibiyle koordineli çalışılır.",
            },
            {
                soru: "Kısa süreli bir iş için operatörün tüm gün sahada kalması gerekiyor mu?",
                cevap:
                    "Hayır, kısa süreli tek noktalı işlerde operatör teslim sonrası ayrılıp iş bitince tekrar gelerek makineyi toplayabilir. Bu tercih iş süresine göre önceden konuşulur; nemli bölümlerde uzun süreli işlerde ise operatörün vardiya boyunca sahada kalması güvenlik açısından tercih edilir.",
            },
            {
                soru: "Operatörsüz kiralama için personelimizde hangi belge aranıyor?",
                cevap:
                    "Kiralanan makine sınıfına uygun, geçerli bir operatör sertifikası beklenir. Bu belge olmadan operatörsüz kiralama yapılmaz. Belge mevcutsa ve çalışılacak alan kuru/düz zeminliyse operatörsüz seçenek uygulanır; nemli veya riskli alanlar için ayrıca değerlendirme yaparız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tekstil tesislerinde boyahane/apre bölümünün nem-buhar yoğunluğu ve dokuma/depo bölümlerinin kuru zemin özelliği sektör geneli bilgidir; operatörlü/operatörsüz kiralama kararı firma güvenlik pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bozüyük Tekstil OSB'sinde Çok Noktalı Rota Bakım Platformu Kiralama",
        giris:
            "Bilecik'in dokumacılık geleneği, günümüzde Bozüyük'teki organize sanayi bölgesinde kümelenen birden fazla tekstil ve dokuma tesisi olarak sürüyor; bu kümelenme, tek bir günde birden fazla tesise uğrayan bir bakım rotasını mantıklı kılıyor. Farklı tesislerin ihtiyacı da birbirinden farklı olabiliyor — biri dokuma salonu aydınlatma bakımı isterken diğeri depo raf üstü kontrolü, üçüncüsü boyahane çevresi bir işi bekliyor olabilir. Bu farklılık, tek bir makine sınıfının rotanın tamamına uymayabileceği anlamına gelir; bu yüzden rota planlanırken her durağın gerekli makine sınıfı, saha penceresi ve hazırlık durumu ayrı ayrı değerlendirilir. Bozüyük OSB'deki taleplerimizin bir kısmı bu şekilde, aynı güne toplanmış çok noktalı bir rota olarak yürüyor; bu hem işletmelerin yol payını paylaşmasını sağlıyor hem de bizim aynı bölgede günü daha verimli kullanmamızı mümkün kılıyor. Bu sayfa, Bozüyük OSB'de çok noktalı rota planlama yaklaşımımızı anlatıyor.",
        maddeler: [
            {
                baslik: "Her durağın makine sınıfı uyumunun teyidi",
                metin:
                    "Bir tesisin dokuma salonu için sepetli örümcek platform gerekirken, komşu tesisin depo bakımı için standart akülü makaslı yeterli olabilir. Rotaya eklenecek her durak için gerekli sınıf, ana programdaki makinelerle uyumlu olmalıdır; uymuyorsa durak ayrı bir sevkiyata alınır, coğrafi yakınlık tek başına yeterli sayılmaz.",
            },
            {
                baslik: "Saha penceresi ve hazırlık durumu",
                metin:
                    "Her tesisin bakım için ayırdığı zaman penceresi farklıdır; biri vardiya arasını, diğeri hafta sonu tam gün penceresini tercih edebilir. Rota, bu pencerelerin çakışmayacağı ya da yol süresiyle uyumlu olacağı şekilde sıralanır. Hazırlık (erişim izni, saha temizliği) tamamlanmamış bir durak, rotanın diğer duraklarını geciktirmemesi için sona alınabilir.",
            },
            {
                baslik: "OSB içi kısa mesafeli geçişler",
                metin:
                    "Tesisler arası mesafenin kısa olması, makineyi kendi hızıyla değil taşıma aracıyla geçirmeyi genelde daha hızlı kılar; ancak bazı komşu tesislerde makinenin kendi tekerlek/palet sistemiyle kısa mesafede yürütülmesi de değerlendirilir. Karar, güzergahtaki trafik ve yol koşuluna göre verilir.",
            },
            {
                baslik: "Ortak rota sorumluluklarının netleştirilmesi",
                metin:
                    "Çok noktalı rotada her durağın kendi teslim tutanağı, kendi hedef listesi ve kendi saha sorumlusu vardır; bir tesisin gecikmesi diğerinin sorumluluğuna yansıtılmaz. Rota planı, her durağın bağımsız değerlendirildiğini işletmelere önceden açıkça belirtir.",
            },
            {
                baslik: "Rota değişikliğinin şeffaf iletişimi",
                metin:
                    "Hava koşulu, önceki durağın uzaması veya bir tesisin hazır olmaması rotanın sırasını değiştirebilir. Bu değişiklik mümkün olan en erken anda ilgili işletmelere iletilir; makine bir tesise ulaştıktan sonra habersiz beklemez, yeni tarih ve saat açıkça paylaşılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB içi çok noktalı rotada tesis tipine göre örnek eşleştirme",
                paragraflar: [
                    "Bozüyük OSB'deki tekstil tesislerinin farklı bölüm ihtiyaçlarına göre rota içinde nasıl eşleştirme yaptığımızı aşağıdaki gibi özetliyoruz.",
                ],
                tablo: {
                    basliklar: ["Tesis bölümü", "Tipik ihtiyaç", "Önerilen sınıf", "Rota uyumu"],
                    satirlar: [
                        ["Dokuma salonu", "Tezgah sırası aydınlatma/tesisat", "Sepetli örümcek platform", "Ayrı sınıf, ayrı blok gerekebilir"],
                        ["İplik/kumaş deposu", "Raf üstü aydınlatma/sensör", "Akülü makaslı platform", "Ana rotaya uyumlu"],
                        ["Boyahane/apre çevresi", "Nemli ortam bakımı", "Operatörlü platform", "Ayrı değerlendirme gerekir"],
                        ["Hammadde deposu", "Yüksek istif üstü erişim", "Eklemli/teleskopik platform", "Ayrı sınıf, ayrı blok gerekebilir"],
                    ],
                },
            },
            {
                baslik: "Rotaya ekleme kararını nasıl veriyoruz",
                paragraflar: [
                    "Bir tesisin talebi ana rotaya ancak gerekli sınıf zaten programdaysa, saha penceresi rota sırasıyla uyuyorsa ve hazırlık tamamlanmışsa eklenir. Coğrafi yakınlık tek başına yeterli değildir; farklı sınıf gerektiren bir talep, ek sevkiyat avantajını ortadan kaldırabilir. Bu durumda talep sahibine ayrı blok seçeneği açıkça anlatılır.",
                    "OSB'deki tesislerin çoğu benzer bölüm yapısına sahip olsa da (dokuma salonu, depo, boyahane) her tesisin bakım önceliği farklı olabilir; bu yüzden eşleştirme her seferinde güncel taleple yeniden yapılır, geçmiş rota otomatik tekrarlanmaz.",
                ],
            },
            {
                baslik: "Kısa blokta kapsamı dondurmak",
                paragraflar: [
                    "Rotadaki her durak için iş listesi ziyaretten önce dondurulur; gerekli alet ve malzeme hazırdır, tesis yetkilisi çalışma başlangıcında sahada olur. Yeni bir kalem, mevcut hücre ve sınıfla uyumluysa sorumlu onayıyla eklenebilir, aksi durumda açık listeye alınır.",
                    "Bu disiplin, kısa pencereyi aceleye dönüştürmez; enerji kontrolü, bariyer ve teknik teslim adımları tam uygulanır. Kapanış kaydı bir sonraki ziyaret için referans oluşturur, ancak saha koşulları değişebileceği için önceki plan otomatik garanti sayılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'deki komşu tesise de aynı gün uğrayabilir misiniz?",
                cevap:
                    "Genellikle evet, ama gerekli makine sınıfı ana rotadaki ile uyumlu olmalı ve saha penceresi çakışmamalı. Komşu tesisin talebi farklı sınıf gerektiriyorsa (örneğin dokuma salonu için örümcek platform, komşu için standart makaslı yetiyorsa) ikisi de rotaya sığabilir; aynı sınıf gerekiyorsa sıralama kolaylaşır. Kesin cevap için her iki tesisin ihtiyacını netleştirmemiz gerekir.",
            },
            {
                soru: "Bizim tesisimiz boyahane bölümü, rotaya otomatik girer mi?",
                cevap:
                    "Boyahane bölümü nem ve güvenlik nedeniyle genelde operatörlü ve ayrı bir değerlendirme gerektirdiği için, kuru bölüm bakımlarının olduğu bir rotaya otomatik eklenmeyebilir. Talebinizi aldığımızda gerekli sınıf ve operatör ihtiyacını değerlendirir, uygun bir rotaya ya da ayrı bloğa yerleştiririz.",
            },
            {
                soru: "Rota sırası bize göre değişebilir mi, yoksa sabit mi?",
                cevap:
                    "Hava koşulu, önceki durağın uzaması veya bir tesisin hazır olmaması rotanın sırasını değiştirebilir. Bu değişikliği mümkün olan en erken anda size iletiriz; makine sahaya ulaştıktan sonra habersiz beklemez. Esneklik, sizi habersiz bırakmak değil, gerçek saha durumuna göre görünür güncelleme yapmaktır.",
            },
            {
                soru: "Bizim hazırlığımız gecikirse rotadaki diğer tesisleri etkiler mi?",
                cevap:
                    "Hazırlık tamamlanmıyorsa durağınız rota sırasında sona alınabilir veya yeni tarihe kaydırılabilir; bu, diğer tesislerin bekletilmesini önlemek için yapılır. Her durağın kendi sorumluluğu ayrıdır, bir tesisin gecikmesi diğerinin planına yansıtılmaz.",
            },
            {
                soru: "Aynı ziyarette hem depo hem dokuma salonumuza bakabilir misiniz?",
                cevap:
                    "İkisinin gerekli sınıfı uyumluysa evet, tek ziyarette iki bölüme de bakılabilir. Ancak dokuma salonu genelde farklı bir sınıf (sepetli örümcek platform) gerektirdiği için, depo bakımıyla aynı makineyle yapılamayabilir; bu durumda iki bölüm ayrı makinelerle ama aynı gün planlanır.",
            },
            {
                soru: "İşimiz pencereye sığmazsa yarım mı bırakılır?",
                cevap:
                    "Öncelikli ve güvenle tamamlanabilecek hedefler teslim alınır; kalan kalemler nedenleriyle açık listeye yazılır. Pencere aşımı rotadaki diğer durakları etkiliyorsa otomatik uzatma yapılmaz; yeni sürenin mümkün olup olmadığı sizinle birlikte değerlendirilir. Yetişmek için güvenlik adımları atlanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bozüyük'te tekstil/dokuma tesislerinin organize sanayi bölgesinde kümelenmesi genel sektörel bilgidir; çok noktalı rota planlama, sınıf uyumu ve durak sıralaması firma planlama pratiğidir. Belirli tesis adı ve rakam kullanılmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bozüyük'te Yeni Tekstil Tesisi İnşaat Sahasında Zor Zemin / Arazi Platform Kiralama",
        giris:
            "Bozüyük'teki tekstil tesislerinin bir kısmı, mevcut üretim alanına ek bina yaparak ya da OSB içinde yeni bir arsa üzerine kurularak büyür; bu genişleme sürecinin ilk aylarında saha, henüz sıkıştırılmış toprak, kısmi dolgu veya toz-çamur karışımı gibi düzensiz bir zemin durumundadır. Standart bir platformun dört ayağı ya da tekerleği bu tip düzensiz zeminde eşit taşıma bulamayabilir; bu da hem makine dengesi hem operatör güvenliği açısından risk oluşturur. Bozüyük'teki yeni tesis inşaat sahalarından gelen taleplerimizde bu nedenle önce zeminin o anki durumu (sıkıştırma seviyesi, nem, dolgu varlığı) değerlendirilir, ardından geniş tabanlı, dört tekerlek tahrikli ya da paletli bir model önerilir. Bu sayfa, Bozüyük'te yeni tekstil tesisi inşaat sahasında zor zemin koşullarında platform kullanımını anlatıyor.",
        maddeler: [
            {
                baslik: "Sıkıştırılmamış dolgu üzerinde ayak taşıması",
                metin:
                    "İnşaat sahasının zemini henüz nihai sıkıştırmayı görmemişse, standart bir platformun destek ayağı bu zeminde batabilir veya eğik oturabilir. Zeminin sıkıştırma seviyesi önceden sorulur; belirsizse geniş taban plakası ile ek destek kullanılır.",
            },
            {
                baslik: "Yağış sonrası çamurlaşan geçici yol",
                metin:
                    "İnşaat sahasına giden geçici yol, yağış sonrası çamurlaşabilir; bu durumda tekerlekli bir platform yerine paletli ya da dört tekerlek tahrikli model tercih edilir. Son yağıştan bu yana geçen süre ve yolun görünür durumu çalışma öncesi değerlendirilir.",
            },
            {
                baslik: "Düzensiz eğim ve kot farkı",
                metin:
                    "Yeni saha genelde tesviye edilmemiş olduğu için farklı noktalarda kot farkı bulunabilir. Bağımsız ayak açma kabiliyeti olan modeller bu farkı telafi edebilir; fark üreticinin belirttiği sınırın üzerindeyse geçiş noktası değiştirilir veya geçici dolgu önerilir.",
            },
            {
                baslik: "İnşaat malzemesi ve ekipman yoğunluğu arasında manevra",
                metin:
                    "Saha üzerinde inşaat malzemesi yığınları, diğer ekipmanlar ve geçici depolar bulunabilir; bu, platformun güzergahını daraltır. Çalışma öncesi güzergah üzerindeki engeller fotoğrafla teyit edilir, gerekiyorsa geçici olarak kaldırılması istenir.",
            },
            {
                baslik: "Zemin durumunun zamanla değişmesi",
                metin:
                    "İnşaat ilerledikçe zemin (dolgu tamamlanması, beton dökümü) değişir; bu yüzden bir hafta önce uygun olan model bir sonraki hafta farklı olabilir. Her ziyaret öncesi zemin durumu yeniden teyit edilir, geçmiş ziyarete göre otomatik model tekrarlanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin durumuna göre platform sınıfı karşılaştırması",
                paragraflar: [
                    "İnşaat sahasındaki zemin durumuna göre hangi platform sınıfının uygun olduğunu aşağıdaki gibi ayırıyoruz.",
                ],
                tablo: {
                    basliklar: ["Zemin durumu", "Önerilen sınıf", "Kritik nokta", "Ek destek ihtiyacı"],
                    satirlar: [
                        ["Sıkıştırılmamış dolgu", "Geniş taban plakalı model", "Ayak batma riski", "Takoz/plaka önerilir"],
                        ["Yağış sonrası çamur", "Paletli veya dört tekerlek tahrikli", "Tutunma kaybı", "Genelde gerekmez"],
                        ["Düzensiz kot farkı", "Bağımsız ayaklı model", "Denge kaybı", "Eğim sınırı kontrolü"],
                        ["Sıkıştırılmış/beton döşeli", "Standart tekerlekli model", "Düşük risk", "Gerekmez"],
                    ],
                },
            },
            {
                baslik: "Neden zemin değerlendirmesi her ziyarette tekrarlanıyor",
                paragraflar: [
                    "İnşaat sahaları statik değildir; dolgu tamamlanır, beton dökülür, geçici yollar değişir. Bir ay önce paletli model gerektiren bir alan, beton döküldükten sonra standart tekerlekli modele geçebilir. Bu yüzden zemin değerlendirmesini her ziyaret öncesi güncel fotoğraf veya sahadan gelen bilgiyle tekrar yaparız; eski değerlendirmeye göre model göndermeyiz.",
                    "Bu yaklaşım, yanlış modelin sahaya gönderilip geri döndürülmesini önler — inşaat sahasında bu tip bir geri dönüş, düzenli bir salondakinden daha fazla zaman ve manevra kaybına yol açar.",
                ],
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz bilgiler",
                paragraflar: [
                    "Doğru modeli önerebilmek için zeminin güncel durumunu (sıkıştırma, nem, dolgu), hedefin sahadaki konumunu ve güzergah üzerindeki engelleri önceden bilmemiz gerekiyor. Bu bilgiler güncel fotoğrafla paylaşıldığında uygun modeli aynı gün belirleyebiliyoruz.",
                    "Zemin durumu hızlı değişiyorsa (örneğin yağış beklentisi varsa), çalışma tarihine yakın bir teyit isteriz; günler öncesinden verilen bir zemin bilgisi çalışma gününde geçerliliğini yitirmiş olabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamız henüz tesviye edilmedi, platform buraya girebilir mi?",
                cevap:
                    "Zeminin sıkıştırma seviyesine bağlı; tamamen gevşek toprak üzerinde standart bir platform güvenli çalışamaz. Zemin durumunu önceden sorar, gerekirse geniş taban plakalı model ve ek destek kullanırız. Zemin çok riskliyse önce kısmi sıkıştırma veya geçici plaka döşeme önerilir.",
            },
            {
                soru: "Yağış sonrası saha çamurlaşıyor, çalışma iptal mi olur?",
                cevap:
                    "Mutlaka iptal olmaz; paletli veya dört tekerlek tahrikli model çamurlu zeminde daha güvenli çalışabilir. Son yağıştan bu yana geçen süreyi ve zeminin görünür durumunu çalışma öncesi sorarız; çok riskli görünüyorsa çalışma birkaç gün ertelenip zeminin kurumasını bekleriz.",
            },
            {
                soru: "Saha üzerinde kot farkları var, makine dengesini kaybeder mi?",
                cevap:
                    "Bağımsız ayak açma kabiliyeti olan modeller belirli bir kot farkına kadar dengeyi korur; ancak üreticinin belirttiği azami eğim sınırı vardır. Kot farkını ölçüp bu sınırla karşılaştırırız; sınırın üzerindeyse geçici dolgu ya da alternatif erişim noktası birlikte değerlendirilir.",
            },
            {
                soru: "İnşaat malzemeleri sahayı dolduruyor, platform manevra alanı bulabilir mi?",
                cevap:
                    "Güzergah üzerindeki malzeme yığınlarını ve diğer ekipmanları çalışma öncesi fotoğrafla teyit ederiz; dar bir güzergah varsa geçici olarak kaldırılmasını isteriz. Güzergah netleşmeden sahaya makine göndermeyiz, bu gereksiz manevra kaybını önler.",
            },
            {
                soru: "Geçen ay gönderdiğiniz model bu ay da uygun mu?",
                cevap:
                    "Otomatik olarak değil; inşaat sahaları hızla değişir, bir aylık sürede dolgu tamamlanmış ya da beton dökülmüş olabilir. Her ziyaret öncesi zemin durumunu güncel fotoğrafla yeniden teyit ederiz ve modeli buna göre güncelleriz.",
            },
            {
                soru: "Operatörlü mü çalışıyorsunuz, yoksa şantiye personelimiz mi kullanabilir?",
                cevap:
                    "İnşaat sahasının değişken zemin koşulu nedeniyle operatörlü seçeneği öncelikli öneriyoruz; operatörümüz zemin durumuna göre günlük hız ve manevra kararı verir. Sertifikalı şantiye personeliniz varsa operatörsüz kiralama da mümkündür, bu durumda zemin bilgisi önceden aktarılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yeni tekstil tesisi/ek bina inşaat sahalarının henüz tesviye edilmemiş zemin özelliği inşaat sektörü genel bilgisidir; zemin değerlendirmesinin ziyaretten ziyarete güncellenmesi firma pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },
};

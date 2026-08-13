// ═══════════════════════════════════════════════════════════════════════════
// bozuyukplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: Bozüyük ve çevresindeki mobilya-orman ürünleri işleyen küçük/orta
// ölçekli atölye ve tesislere yükseltilebilir çalışma platformu kiralama.
// Açı: ahşap tozu yangın yükü, kereste deposu yüksek istif, boyahane-vernik
// hattı — Bursa/İnegöl mobilya sanayiinin Bilecik'e taşan ölçeği.
//
// ⚠️ bozuyukplatform.com (nakliye terminali) ile aynı ilçede beş ortak sayfa
// paylaşır; örtüşme YASAKTIR. Bu dosyanın merceği ahşap işleme sanayisidir,
// lojistik/terminal değil.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Firma adı, tesis adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BOZUYUKPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:bozuyuk-merkez": {
        h1: "Bozüyük'te Mobilya ve Ahşap Atölyelerine Platform Kiralama",
        giris:
            "Bozüyük, Bursa'nın İnegöl ilçesindeki mobilya sanayiine coğrafi olarak yakın konumu nedeniyle, bu sektörün küçük ölçekli bir uzantısını kendi sınırları içinde de barındırır: kereste kesim atölyeleri, mobilya montaj hatları, boyahane ve vernik uygulama tesisleri. Bu işletmelerde platform kiralama talebi diğer sanayi kollarından farklı bir dikkat ister, çünkü ahşap tozu ve solvent buharı birlikte ele alındığında yangın açısından hassas bir ortam oluşur. Bize göre buradaki her teklif önce iki soruyla başlar: ortamda toz toplama sistemi işliyor mu, boyahane hattı aktif mi. Bu iki soru, hangi güç tipinin ve hangi elektrik sınıfının kullanılacağını belirliyor — geometri sorusu her zaman ikinci sırada geliyor.",
        maddeler: [
            {
                baslik: "Ahşap tozu ortamında güç tipi seçimi",
                metin:
                    "Kesim ve zımparalama hatlarının bulunduğu hacimlerde havada asılı ahşap tozu birikir ve bu, statik kıvılcımla tutuşabilecek bir ortam oluşturur. Bu hacimlerde içten yanmalı hiçbir makine kullanılmaz; akülü tahrikli modeller tercih edilir. Elektrik aksamı kapalı gövdeli olan makineler, toz birikiminin kısa devre riskini azaltması açısından öne çıkar.",
            },
            {
                baslik: "Kereste deposunda yüksek istif ve dar koridor",
                metin:
                    "Kereste depolarında malzeme genellikle yüksek raflarda ya da istiflenmiş şekilde tutulur ve koridorlar dar bırakılır. Raf üstü aydınlatma veya sprinkler bakımı gibi işlerde makine bu dar koridorlardan geçmek zorundadır. Kompakt gövdeli, dar geçişe uygun makineler burada tercih edilir; istifin yüksekliği ve koridor genişliği önceden ölçülür.",
            },
            {
                baslik: "Boyahane-vernik hattında patlama sınıfı hassasiyeti",
                metin:
                    "Vernik ve boya uygulama kabinlerinde solvent buharı yoğunlaşabilir; bu hacimlerde standart elektrik ekipmanı kullanmak risklidir. Boyahane hattı aktifken bu bölümlerde çalışma yapılmaz, hat durdurulup havalandırma tamamlandıktan sonra makine içeri alınır. Bu bekleme süresi teklif aşamasında müşteriyle birlikte planlanır.",
            },
            {
                baslik: "Montaj hattında zemin ve çalışma penceresi",
                metin:
                    "Mobilya montaj hatlarının bulunduğu hacimlerde zemin genellikle beton, tavan yüksekliği orta seviyededir. Bu hacimlerde üretim sürerken çalışma yapılmaz; işler vardiya arası ya da hafta sonu saatlerine planlanır. Akülü makaslı platform, bu hacimlerde en sık tercih edilen sınıftır.",
            },
            {
                baslik: "Küçük atölyede tek seferlik bakım işleri",
                metin:
                    "Bölgedeki küçük ölçekli mobilya atölyelerinin platform ihtiyacı genellikle yılda birkaç kez ortaya çıkan aydınlatma veya çatı bakım işidir. Bu profildeki işlerde operatörlü kiralama en hızlı çözümü sunar; atölye sahibinin ayrı bir belge süreciyle uğraşmasına gerek kalmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hacim tipine göre makine ve güç seçimi",
                paragraflar: [
                    "Ahşap işleme tesislerindeki hacimleri toz ve buhar yoğunluğuna göre sınıflandırıyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Ana risk", "Elektrik sınıfı", "Uygun platform"],
                    satirlar: [
                        ["Kesim/zımparalama hattı", "Ahşap tozu", "Kapalı gövdeli", "Akülü kompakt"],
                        ["Kereste deposu", "Yüksek istif, dar koridor", "Standart", "Akülü makaslı, dar gövde"],
                        ["Boyahane/vernik kabini", "Solvent buharı", "Hat durdurulmuş, havalandırılmış", "Akülü, kabin dışı öncelik"],
                        ["Montaj hattı", "Üretim devamlılığı", "Standart", "Akülü makaslı"],
                        ["Depo/sevkiyat alanı", "Forklift trafiği", "Standart", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Toz toplama sistemi çalışırken ve çalışmazken",
                paragraflar: [
                    "Toz toplama sistemi aktif olan hacimlerde havadaki toz yoğunluğu düşük tutulur ve bu, çalışma riskini azaltır. Sistem devre dışıysa ya da bakımdaysa, o hacimde yüksek erişim işi ertelenir ya da toz birikimi gözle kontrol edilerek karar verilir.",
                    "Teklif öncesi sorduğumuz standart soru, toz toplama sisteminin işin yapılacağı gün aktif olup olmayacağıdır. Bu bilgi, makine seçimini ve çalışma saatini doğrudan belirliyor.",
                ],
            },
            {
                baslik: "Vardiya arası ve hafta sonu planlama",
                paragraflar: [
                    "Üretim hattı sürerken platform çalışması hem güvenlik hem verimlilik açısından tercih edilmez. Bu yüzden işleri vardiya arası boşluklara ya da hafta sonuna planlıyoruz. Boyahane hattı gibi durdurulması zaman alan bölümlerde, hattın durma ve havalandırma süresini işin başlangıcına dahil ediyoruz.",
                    "Birden fazla hacimde iş varsa — örneğin hem kereste deposu hem montaj hattı — bunları tek sevkiyatta sırayla çözüyoruz; bu, atölye için nakliye ve iş durdurma maliyetini birlikte düşürüyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde ahşap tozu birikimi var, hangi makineyi öneriyorsunuz?",
                cevap:
                    "Akülü ve elektrik aksamı kapalı gövdeli bir makine öneriyoruz; içten yanmalı makine bu ortamda hiçbir koşulda kullanılmaz. Teklif öncesi toz toplama sisteminizin işin yapılacağı gün aktif olup olmayacağını soruyoruz, çünkü bu bilgi hem makine seçimini hem çalışma saatini belirliyor. Sistem devre dışıysa toz birikimini gözle kontrol edip karara göre ilerliyoruz.",
            },
            {
                soru: "Boyahane hattımızda bakım yapılacak, ne zaman girebilirsiniz?",
                cevap:
                    "Hat durdurulup havalandırma tamamlandıktan sonra. Solvent buharının yoğunlaştığı bir kabinde standart elektrikli ekipmanla çalışmak risklidir, bu yüzden bekleme süresini işin başlangıcına dahil ediyoruz. Havalandırma süresini genellikle işletmenizin kendi prosedürü belirler, biz de sevkiyat saatini buna göre planlıyoruz.",
            },
            {
                soru: "Kereste deposumuzun koridorları dar, makine geçebilir mi?",
                cevap:
                    "Büyük olasılıkla geçer; kompakt gövdeli akülü modeller dar koridorlar için üretilir. Kesin karar için istifin yüksekliğini ve koridorun en dar noktasının genişliğini önceden ölçüyoruz. Yüksek istif arasında çalışırken sepetin istife temas etmemesi için manevra payını da hesaba katıyoruz.",
            },
            {
                soru: "Üretim hattımız sürerken çalışma yapılabilir mi?",
                cevap:
                    "Genellikle önermiyoruz; üretim hattı sürerken hem güvenlik hem verimlilik açısından risk oluşur. Bunun yerine işleri vardiya arası boşluklara ya da hafta sonuna planlıyoruz. Zorunlu bir acil durum varsa hattın ilgili bölümünü durdurup dar bir zaman penceresinde çalışıyoruz, ancak bu istisnai bir durumdur.",
            },
            {
                soru: "Küçük bir atölyeyiz, belge süreci karmaşık mı?",
                cevap:
                    "Değil. Küçük ölçekli atölyelerin ihtiyacı genellikle yılda birkaç kez ortaya çıkan kısa süreli bir iştir; bu profilde operatörlü kiralama en hızlı çözümü sunuyor ve ayrı bir belge süreci gerektirmiyor. Makinenin periyodik kontrol raporunu ve operatörümüzün yeterlilik belgesini talep etmeden gönderiyoruz.",
            },
            {
                soru: "Aynı gün hem depo hem montaj hattında işimiz var, tek sevkiyatla olur mu?",
                cevap:
                    "Olur ve önerdiğimiz yöntem de bu. Makineyi tek sevkiyatla getirip gün içinde sırayla iki hacimde de kullanıyoruz; bu, hem nakliye bedelini tekilleştiriyor hem üretim akışının bir kez kesintiye uğramasını sağlıyor. Sizden istediğimiz, iki hacimdeki iş listesinin önceden netleşmesi ve toz toplama/havalandırma durumunun bildirilmesi.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Bursa'nın İnegöl ilçesindeki mobilya sanayiine coğrafi yakınlığı kamuya açık bilgidir; ahşap tozu ve solvent buharı ile ilgili elektrik sınıfı ve yangın riski değerlendirmeleri genel İSG pratiğinden gelir. Firma adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk-osb": {
        h1: "Bozüyük OSB'de Ahşap ve Mobilya Sanayii için Platform Kiralama",
        giris:
            "Bozüyük Organize Sanayi Bölgesi, ilçedeki üretim faaliyetlerinin yoğunlaştığı ana alandır ve burada ahşap işleme ile mobilya üretimi yapan tesisler diğer sanayi kollarıyla iç içe bulunur. OSB'deki fabrika binaları genellikle geniş açıklıklı, yüksek tavanlı çelik yapılardır; bu da yüksek erişim işlerini kapalı atölyelere göre daha planlı ve daha büyük ölçekli kılar. OSB'deki iş akışımız, tesisin kendi güvenlik ve giriş prosedürüyle başlar — çoğu tesiste dış firma personeli kayıt altında girer, bazılarında iş güvenliği brifingi zorunludur. Buna ek olarak ahşap işleme hattı olan tesislerde toz ve solvent riski hâlâ geçerlidir; OSB ölçeği bu riski küçültmez, yönetimini kurumsallaştırır.",
        maddeler: [
            {
                baslik: "OSB giriş prosedürü ve iş güvenliği brifingi",
                metin:
                    "OSB'deki fabrikaların çoğunda dış firma personeli kayıt altında ve genellikle refakatli girer; bazı tesislerde sahaya girmeden önce kısa bir iş güvenliği brifingi zorunludur. Bu prosedürü sevkiyattan önce öğrenip planımızı ona göre kuruyoruz — brifing saatine göre teslimat saatini erteliyor ya da öne çekiyoruz.",
            },
            {
                baslik: "Yüksek tavanlı üretim hollerinde erişim",
                metin:
                    "OSB'deki üretim holleri genellikle 8-10 metre bandında tavan yüksekliğine sahiptir. Çatı altı aydınlatma, havalandırma kanalı ve vinç ray bakımı bu yükseklikte yapılır. Hol içi forklift ve malzeme trafiği sürdüğü için çalışma alanı bariyerle ayrılır, makinenin hareket koridoru üretim trafiğinden bağımsız tutulur.",
            },
            {
                baslik: "Toz ve solvent riski OSB ölçeğinde",
                metin:
                    "OSB'deki büyük ölçekli ahşap işleme tesislerinde toz toplama sistemleri genellikle merkezi ve daha kapsamlıdır, ancak sistem arızası ya da bakım dönemlerinde risk aynı şekilde geçerlidir. Boyahane bölümleri bu tesislerde ayrı bir bina ya da bölmede olabilir; bu durumda erişim ve havalandırma kuralları o bölüme özgü olarak yeniden değerlendirilir.",
            },
            {
                baslik: "Vardiyalı üretimde çalışma penceresi",
                metin:
                    "OSB'deki fabrikaların çoğu vardiyalı çalışır ve üretim neredeyse hiç durmaz. Bu yüzden platform işleri genellikle vardiya değişim aralığına ya da planlı bakım durdurmalarına denk getirilir. Bu pencereyi önceden bilmek, sevkiyat planını büyük ölçüde kolaylaştırıyor.",
            },
            {
                baslik: "Depo ve sevkiyat alanında yüksek raf sistemleri",
                metin:
                    "Bitmiş ürün depolarında raf sistemleri genellikle yüksek ve dar koridorludur. Raf üstü aydınlatma ve sprinkler bakımı bu koridorlarda yapılır; forklift trafiğinin yoğun olduğu saatlerde çalışma önerilmez, bu yüzden depo trafiğinin düştüğü saatler tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB'deki tesis tipine göre hazırlık",
                paragraflar: [
                    "OSB'deki ahşap-mobilya tesislerini giriş rejimi ve üretim yoğunluğuna göre sınıflandırıyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Tesis bölümü", "Giriş rejimi", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Üretim holü", "Kayıt + brifing", "Vardiya, toz", "Akülü makaslı"],
                        ["Boyahane bölümü", "Ayrı erişim izni", "Solvent, havalandırma", "Akülü, hat durdurulmuş"],
                        ["Bitmiş ürün deposu", "Kayıt", "Forklift trafiği, dar koridor", "Kompakt akülü"],
                        ["İdari/ofis binası", "Ziyaretçi kaydı", "Kullanım saati", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Sevkiyat öncesi tesise gönderilen dosya",
                paragraflar: [
                    "Kalite ve güvenlik yönetim sistemi işletilen OSB tesislerinde, kullanılan ekipmanın belgesi kapıda istenir. Sevkiyattan önce periyodik kontrol raporu ve operatör yeterlilik belgesini elektronik olarak gönderip onay alıyoruz; bu adım, kapı önünde yaşanan gecikmeleri büyük ölçüde azaltıyor.",
                    "Bazı tesisler ayrıca iş güvenliği taahhütnamesi ister; bu belge de sevkiyat öncesi imzalanıp iletiliyor.",
                ],
            },
            {
                baslik: "Vardiya ve bakım durdurma takvimiyle uyum",
                paragraflar: [
                    "OSB'deki fabrikaların planlı bakım durdurmaları genellikle önceden belirlenmiş takvimlere bağlıdır. Bu takvimi öğrendiğimizde platform işini o pencereye yerleştiriyoruz; bu, hem tesis için üretim kesintisini azaltır hem bizim açımızdan daha geniş bir çalışma süresi anlamına gelir.",
                    "Acil bir arıza söz konusuysa vardiya arasındaki kısa boşluklarda da çalışabiliyoruz, ancak bu durumda iş listesinin önceden netleşmiş olması gerekiyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "OSB'deki fabrikamıza giriş için hangi belgeleri istiyorsunuz?",
                cevap:
                    "Standart olarak periyodik kontrol raporu, makinenin tanım bilgisi ve operatörlü kiralamada operatörümüzün yeterlilik belgesini sevkiyattan önce elektronik olarak gönderiyoruz. Tesisiniz ayrıca iş güvenliği taahhütnamesi istiyorsa bunu da önceden imzalayıp iletiyoruz. Bu belgeleri talep anında değil, teklif aşamasında hazırlamamız, kapıda yaşanan gecikmeleri önlüyor.",
            },
            {
                soru: "Üretim vardiyalı sürüyor, ne zaman çalışabilirsiniz?",
                cevap:
                    "Genellikle vardiya değişim aralığında ya da planlı bakım durdurmalarında. Tesisinizin bakım takvimini öğrendiğimizde işi o pencereye yerleştiriyoruz; bu hem üretim kesintisini azaltıyor hem bize daha geniş bir çalışma süresi veriyor. Acil bir arıza varsa vardiya arasındaki kısa boşluklarda da çalışabiliyoruz, ancak iş listesinin önceden netleşmiş olması gerekiyor.",
            },
            {
                soru: "Boyahane bölümümüz ayrı bir bina, oraya da girebilir misiniz?",
                cevap:
                    "Girebiliriz, ancak hat durdurulup havalandırma tamamlandıktan sonra. Boyahane bölümleri genellikle ayrı erişim izni gerektirir; bu izni sevkiyattan önce netleştiriyoruz. Solvent buharının yoğunlaştığı bir ortamda standart elektrikli ekipmanla çalışmak risklidir, bu yüzden bekleme süresini işin başlangıcına dahil ediyoruz.",
            },
            {
                soru: "Bitmiş ürün depomuzun raf koridorları dar ve forklift trafiği yoğun, nasıl çalışıyorsunuz?",
                cevap:
                    "Koridor genişliğini ve raf yüksekliğini önceden ölçüp kompakt gövdeli bir makine seçiyoruz. Forklift trafiğinin yoğun olduğu saatlerde çalışma yapmıyoruz; depo trafiğinin düştüğü saatleri tesis yetkilinizle birlikte belirliyoruz. Çalışma sırasında makinenin hareket koridoru forklift güzergâhından bariyerle ayrılıyor.",
            },
            {
                soru: "Tesisimizde toz toplama sistemi bakımda, çalışmaya devam edilebilir mi?",
                cevap:
                    "Sistem devre dışıysa toz birikimini gözle kontrol ediyor, riskli görülen bölümlerde çalışmayı erteliyoruz. OSB ölçeğindeki merkezi toz toplama sistemleri genellikle geniş bir alanı kapsadığı için bakım süresi kısa olsa bile etkisi birden fazla hacme yayılabilir. Bu nedenle sevkiyattan önce sistemin durumunu sormamız standart bir adımdır.",
            },
            {
                soru: "OSB dışındaki merkezdeki bir atölyeyle aynı hafta iş planlanabilir mi?",
                cevap:
                    "Planlanabilir. OSB'deki iş ile merkezdeki küçük atölye işini aynı güzergâha toplayıp nakliye payını bölebiliyoruz. OSB'deki geniş hollerde kullanılan makine ile merkezdeki dar koridorlu atölyede kullanılan makine genellikle farklı sınıflardan olduğu için, iki işi tek makineyle değil, aynı sevkiyat güzergâhındaki iki ayrı makineyle çözüyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük OSB'nin varlığı ve OSB'lerde standart olan kayıt/giriş prosedürleri kamuya açık genel bilgidir. Firma adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:inonu": {
        h1: "İnönü'de Ahşap İşleme Atölyelerine Platform Kiralama",
        giris:
            "Eskişehir'in İnönü ilçesi, Bozüyük'e komşu konumu nedeniyle bölgedeki ahşap işleme ve mobilya sanayiinin sınırlı ölçekli bir uzantısını da barındırır. İlçedeki atölyeler büyük ölçüde küçük işletmelerden oluşur; kereste kesim, basit montaj ve boyama işleri bu ölçekte yürütülür. Buradaki platform talepleri Bozüyük OSB'dekinden farklı bir profil çizer — burada iş büyük bir üretim holünde değil, birkaç kişilik bir atölyede, dar bir mekânda yürütülür. Bu yüzden İnönü'deki teklifler önce mekânın büyüklüğüne ve toz/solvent riskinin ne ölçüde yönetildiğine bakar.",
        maddeler: [
            {
                baslik: "Küçük atölyede toz ve havalandırma",
                metin:
                    "Küçük ölçekli atölyelerde toz toplama sistemi OSB'deki kadar kapsamlı olmayabilir; bazı atölyelerde yerel emişli basit sistemler kullanılır. Bu durumda toz birikimini keşifte gözle kontrol ediyor, riskli görülen ortamlarda akülü ve kapalı gövdeli makine tercih ediyoruz.",
            },
            {
                baslik: "Dar mekânda kompakt makine ihtiyacı",
                metin:
                    "İlçedeki atölye binaları genellikle küçük ve dar mekânlardır; büyük gövdeli bir makinenin buraya girmesi mümkün olmayabilir. Kompakt gövdeli akülü modeller bu profile uygundur. Kapı ve koridor ölçüsü sevkiyat öncesi netleştirilir.",
            },
            {
                baslik: "Boyama işlerinde bekleme süresi",
                metin:
                    "Küçük atölyelerde boyama işlemi genellikle ayrı bir kabin değil, aynı mekânın bir köşesinde yapılır. Bu durumda solvent buharının dağılması için beklenmesi gereken süre daha belirsizdir; işe başlamadan önce havalandırma durumunu atölye sahibiyle birlikte değerlendiriyoruz.",
            },
            {
                baslik: "Bozüyük OSB'ye yakınlığın sevkiyat avantajı",
                metin:
                    "İnönü, Bozüyük'e karayoluyla yakın konumdadır. Bozüyük OSB'de planlı bir işimiz varsa İnönü'deki talebi aynı güzergâha ekleyip nakliye payını paylaştırabiliyoruz; bu, küçük ölçekli atölyeler için belirgin bir maliyet avantajı sağlıyor.",
            },
            {
                baslik: "Tek seferlik bakım işlerinde hızlı çözüm",
                metin:
                    "İlçedeki küçük atölyelerin platform ihtiyacı genellikle yılda bir-iki kez ortaya çıkan kısa süreli bir iştir. Bu profilde operatörlü kiralama en hızlı çözümü sunar; atölye sahibinin ayrı bir belge süreciyle uğraşmasına gerek kalmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye ölçeğine göre hazırlık",
                paragraflar: [
                    "İlçedeki ahşap işleme atölyelerini ölçek ve risk profiline göre sınıflandırıyoruz; aşağıdaki tablo keşif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Atölye tipi", "Ana risk", "Mekân ölçüsü", "Makine tercihi"],
                    satirlar: [
                        ["Kesim/basit montaj", "Ahşap tozu", "Küçük-orta", "Akülü kompakt"],
                        ["Boyama köşesi olan atölye", "Solvent buharı", "Küçük", "Akülü, bekleme süreli"],
                        ["Kereste stok alanı", "İstif, dar koridor", "Küçük-orta", "Akülü kompakt"],
                    ],
                },
            },
            {
                baslik: "Bozüyük sevkiyatıyla birleştirme",
                paragraflar: [
                    "İnönü'deki tek başına küçük bir iş için nakliye payı bedelin önemli bir kısmını oluşturabilir. Bozüyük OSB'deki planlı bir sevkiyatla birleştirdiğimizde bu pay paylaşılır ve maliyet belirgin şekilde düşer.",
                    "Bu birleştirme, acil olmayan işlerde birkaç günlük tarih esnekliği gerektirir; karşılığında sağlanan maliyet avantajı küçük atölyeler için önemlidir.",
                ],
            },
            {
                baslik: "Havalandırma durumunun önceden değerlendirilmesi",
                paragraflar: [
                    "Küçük atölyelerde boyama işleminin ayrı bir kabinde yapılmaması, havalandırma süresini belirsizleştirir. Bu yüzden işe başlamadan önce atölye sahibiyle birlikte son boyama işleminin ne zaman yapıldığını ve mekânın ne kadar havalandırıldığını konuşuyoruz.",
                    "Belirsizlik varsa temkinli davranıp bekleme süresini uzatıyoruz; bu, küçük ve kapalı mekânlarda alınabilecek en güvenli yaklaşımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemiz küçük, standart bir platform sığar mı?",
                cevap:
                    "Çoğu zaman sığar; bunun için kompakt gövdeli akülü modelleri kullanıyoruz. Kesin karar için kapı genişliği, mekân içindeki manevra alanı ve tavan yüksekliğini önceden netleştiriyoruz. Bu ölçüler net olduğunda hangi modelin gireceğini kesin olarak söyleyebiliyoruz.",
            },
            {
                soru: "Boyama işlemimiz ayrı bir kabinde değil, aynı mekânda yapılıyor; ne zaman çalışabilirsiniz?",
                cevap:
                    "Bu durumda temkinli davranıyoruz. Son boyama işleminin ne zaman yapıldığını ve mekânın ne kadar havalandırıldığını sizinle birlikte değerlendiriyor, belirsizlik varsa bekleme süresini uzatıyoruz. Kapalı ve küçük mekânlarda solvent buharının dağılması, geniş bir boyahane kabinine göre daha uzun sürebilir.",
            },
            {
                soru: "Toz toplama sistemimiz basit bir yerel emişli sistem, yeterli mi?",
                cevap:
                    "Yeterlilik durumu ortamdaki toz birikimine bağlı; bunu keşifte gözle kontrol ediyoruz. Riskli görülen ortamlarda akülü ve elektrik aksamı kapalı gövdeli bir makine tercih ediyoruz. İçten yanmalı makine bu tür ortamlarda hiçbir koşulda kullanılmaz.",
            },
            {
                soru: "Bozüyük'teki bir işle birlikte planlanabilir mi?",
                cevap:
                    "Evet, İnönü Bozüyük'e karayoluyla yakın konumdadır. Bozüyük OSB'de planlı bir sevkiyatımız varsa talebinizi aynı güzergâha ekleyip nakliye payını paylaştırabiliyoruz. Bunun için acil olmayan işlerde birkaç günlük tarih esnekliği vermeniz yeterli.",
            },
            {
                soru: "Kereste stok alanımızın koridorları dar, makine geçebilir mi?",
                cevap:
                    "Kompakt gövdeli akülü modeller çoğu dar koridordan geçebilir. Kesin karar için istifin yüksekliğini ve koridorun en dar noktasının genişliğini önceden ölçüyoruz. Yüksek istif arasında çalışırken sepetin istife temas etmemesi için manevra payı da hesaba katılıyor.",
            },
            {
                soru: "Küçük bir atölyeyiz, belge süreci var mı?",
                cevap:
                    "Karmaşık bir süreç değil. Küçük atölyelerin ihtiyacı genellikle yılda bir-iki kez ortaya çıkan kısa süreli bir iştir; bu profilde operatörlü kiralama en hızlı çözümü sunuyor. Makinenin periyodik kontrol raporunu talep etmeden gönderiyoruz, ayrı bir belge süreciyle uğraşmanız gerekmiyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. İnönü'nün Eskişehir iline bağlı, Bozüyük'e komşu konumu kamuya açık coğrafi bilgidir. Firma adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:yenipazar": {
        h1: "Yenipazar'da Ahşap ve Küçük Sanayi Atölyelerine Platform Kiralama",
        giris:
            "Bilecik'in Yenipazar ilçesi, küçük ölçekli sanayi ve tarımsal karakteriyle öne çıkan bir yerleşimdir. Buradaki platform talepleri çoğunlukla küçük atölyeler, kooperatif yapıları ve kamu binalarından gelir; büyük ölçekli bir ahşap işleme tesisi bu ilçede yaygın değildir. Bu yüzden Yenipazar'daki iş profili, Bozüyük OSB'dekinden çok İnönü'deki küçük atölye profiline benzer — dar mekân, sınırlı toz/solvent yönetimi ve tek seferlik bakım ihtiyacı. Doğru makine burada da en yükseğe çıkan değil, dar kapıdan geçen ve hızlı kurulan makinedir.",
        maddeler: [
            {
                baslik: "İlçe merkezinde küçük atölye profili",
                metin:
                    "Yenipazar merkezindeki atölyeler genellikle birkaç kişilik küçük işletmelerdir; kereste kesimi ve basit mobilya montajı bu ölçekte yürütülür. Bu atölyelerde kompakt gövdeli akülü makineler tercih edilir, çünkü mekân genellikle dar ve düşük tavanlıdır.",
            },
            {
                baslik: "Tarımsal-kırsal çevrede zemin ve mesafe",
                metin:
                    "İlçe merkezi dışındaki köylerde zemin çoğunlukla toprak ya da stabilizedir. Küçük ölçekli depo veya ahır yapılarında çalışma gerekiyorsa arazi tipi bir makine tercih edilir ve mesafeye göre ek sevkiyat süresi hesaplanır.",
            },
            {
                baslik: "Kamu binaları ve kooperatif yapılarında planlama",
                metin:
                    "İlçedeki kamu binaları ve kooperatif yapılarında yüksek erişim işi kullanım saatleri dışında yapılır. Kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz; küçük ilçelerde bu planlama genellikle hızlı çözülüyor.",
            },
            {
                baslik: "Boyama ve toz yönetiminde temkinli yaklaşım",
                metin:
                    "Küçük atölyelerde toz toplama ve havalandırma sistemleri sınırlı olabilir. Bu durumda ortamı keşifte gözle kontrol edip akülü, kapalı gövdeli bir makine tercih ediyoruz. Belirsizlik varsa bekleme süresini uzatarak temkinli ilerliyoruz.",
            },
            {
                baslik: "Bozüyük'e sevkiyat mesafesi ve birleştirme",
                metin:
                    "Yenipazar, Bozüyük'e karayoluyla bağlıdır. Bozüyük'teki planlı bir işimiz varsa Yenipazar'daki talebi aynı güzergâha ekleyip nakliye payını paylaştırabiliyoruz; bu, küçük ölçekli işler için belirgin bir maliyet avantajı sağlıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçe genelinde yapı tipi ve makine eşleşmesi",
                paragraflar: [
                    "Yenipazar'daki işleri yapı tipi ve konuma göre sınıflandırıyoruz; aşağıdaki tablo keşif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Konum", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Küçük ahşap atölyesi", "Merkez", "Dar mekân, toz", "Akülü kompakt"],
                        ["Kamu binası/kooperatif", "Merkez", "Kullanım saati", "Akülü makaslı"],
                        ["Köy depo/ahır", "Kırsal", "Zemin, mesafe", "Arazi tipi eklemli"],
                    ],
                },
            },
            {
                baslik: "Sevkiyatı Bozüyük ile birleştirmek",
                paragraflar: [
                    "Yenipazar'daki tek başına küçük bir iş için nakliye payı bedelin önemli bir kısmını oluşturabilir. Bozüyük'teki planlı sevkiyatlarla birleştirdiğimizde bu pay paylaşılır.",
                    "Bu model, acil olmayan işlerde birkaç günlük tarih esnekliği gerektirir; karşılığında maliyet belirgin şekilde düşer.",
                ],
            },
            {
                baslik: "Kırsal işlerde hazırlık",
                paragraflar: [
                    "Köy ve kırsal alanlardaki işlerde teslimattan önce yol durumunu ve zemin cinsini soruyoruz. Stabilize ya da toprak yolda taşıyıcı aracın geçip geçemeyeceği önceden planlanır, gerekirse makine giriş noktasında indirilip kendi tahrikiyle ilerletilir.",
                    "Yağışlı dönemlerde zemin taşıma gücü düşer; bu durumda çalışmayı hava koşulu uygun olan bir sonraki güne erteliyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Küçük atölyemiz için makine ne kadar sürede gelir?",
                cevap:
                    "Genellikle Bozüyük'teki sevkiyat planına göre değişir. Talebinizi aldığımızda güzergâhı netleştirip net bir saat aralığı veriyoruz. Planlı bir işle birleştirebiliyorsak süre biraz uzayabilir ama maliyet düşer; acil bir talepse tek başına sevkiyat yapıyoruz.",
            },
            {
                soru: "Köyümüzdeki depo binasına ulaşım nasıl sağlanıyor?",
                cevap:
                    "Taşıyıcı araç yolun taşıma gücüne göre mümkün olduğunca ilerler; yol durumu uygun değilse makineyi giriş noktasında indirip kendi tahrikiyle çalışma alanına götürüyoruz. Bu durumda arazi tipi bir makine tercih ediyoruz. Yolun bir fotoğrafını ve yaklaşık mesafeyi önceden isteyerek planı netleştiriyoruz.",
            },
            {
                soru: "Atölyemizde toz toplama sistemi yok, çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, ancak temkinli bir yaklaşımla. Ortamı keşifte gözle kontrol edip akülü, elektrik aksamı kapalı gövdeli bir makine tercih ediyoruz. İçten yanmalı makine bu tür ortamlarda hiçbir koşulda kullanılmaz.",
            },
            {
                soru: "Kooperatif binamızda kullanım saatleri dışında çalışma yapılabilir mi?",
                cevap:
                    "Evet, kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz. Akülü makineler sessiz çalıştığı için kullanım dışı saatlerde de rahatsızlık oluşturmuyor. Zemin koruma örtüsü kullanıp iş bitiminde alanı temiz teslim ediyoruz.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, maliyeti nasıl düşürebiliriz?",
                cevap:
                    "Talebinizi Bozüyük'teki planlı bir sevkiyatla birleştirerek nakliye payını paylaştırabiliyoruz. Bunun için acil olmayan işlerde birkaç günlük tarih esnekliği vermeniz yeterli. Bu model küçük ölçekli işletmeler için belirgin bir maliyet avantajı sağlıyor.",
            },
            {
                soru: "Yağış sonrası köy yoluna gelinebilir mi?",
                cevap:
                    "Zemin durumuna bağlı. Stabilize veya toprak zeminde yağış sonrası taşıma gücü düşer; bu durumda çalışmayı zeminin kuruduğu bir sonraki güne erteliyoruz. Bu esnekliği baştan sözleşmeye yazıyoruz, ek bir ceza doğmuyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yenipazar'ın Bilecik'e bağlı bir ilçe olması ve küçük ölçekli sanayi-tarım karakteri kamuya açık bilgidir. Firma adı, tesis adı ve rakam kullanılmamıştır.",
    },

    "bolge:bilecik-cevre-ilce": {
        h1: "Bilecik Çevre İlçelerinde Ahşap Sanayii için Platform Kiralama",
        giris:
            "Bilecik'in Bozüyük dışındaki çevre ilçeleri — Osmaneli, Gölpazarı, Pazaryeri, İnhisar — küçük ölçekli sanayi ve tarım karakterini bir arada taşır. Bu ilçelerdeki ahşap işleme ve mobilya ile ilgili talepler nadir ama düzenli olarak gelir; genellikle küçük bir atölyenin aydınlatma ya da çatı bakım işidir. Bu sayfa, il genelindeki bu tür dağınık ve küçük ölçekli talepleri tek bir çerçevede topluyor: Bozüyük'teki ana sevkiyat üssüne olan mesafe ve buna göre birleştirme imkânı, her ilçe için ayrı ayrı değil ortak bir mantıkla ele alınıyor.",
        maddeler: [
            {
                baslik: "İlçeler arası mesafe ve sevkiyat mantığı",
                metin:
                    "Bilecik'in çevre ilçeleri birbirine ve Bozüyük'e karayoluyla bağlıdır, ancak mesafeler ilçeden ilçeye değişir. Bu yüzden her talepte önce ilçenin Bozüyük'e olan yaklaşık mesafesini netleştiriyoruz; bu bilgi hem teslimat saatini hem birleştirme imkânını belirliyor.",
            },
            {
                baslik: "Küçük atölyelerde ortak risk profili",
                metin:
                    "Çevre ilçelerdeki ahşap işleme atölyeleri büyük ölçüde küçük işletmelerdir; toz ve solvent yönetimi sınırlı olabilir. Bu ortamlarda akülü, elektrik aksamı kapalı gövdeli makineler tercih edilir; içten yanmalı makine hiçbir koşulda kullanılmaz.",
            },
            {
                baslik: "Kamu binaları ve tarımsal yapılarda ortak talep",
                metin:
                    "Ahşap sanayii dışında bu ilçelerde en sık gelen talep kamu binaları ve tarımsal depo yapılarından gelir. Kamu binalarında kullanım saati dışı çalışma, tarımsal yapılarda ise zemin ve mevsim penceresi belirleyici olur.",
            },
            {
                baslik: "Tek seferlik işlerde birleştirme stratejisi",
                metin:
                    "Çevre ilçelerdeki talepler genellikle tek seferlik ve küçük ölçeklidir. Bu yüzden mümkün olduğunda birden fazla ilçedeki talebi ya da Bozüyük'teki planlı bir işi aynı güzergâha topluyoruz; bu, nakliye maliyetini belirgin şekilde düşürüyor.",
            },
            {
                baslik: "Kırsal zemin ve hava koşulu payı",
                metin:
                    "Çevre ilçelerin kırsal kesimlerinde zemin çoğunlukla toprak ya da stabilizedir. Bu durumda arazi tipi makine tercih edilir ve yağışlı dönemlerde çalışma hava koşuluna göre esnek planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çevre ilçe profili ve makine eşleşmesi",
                paragraflar: [
                    "Bilecik'in çevre ilçelerindeki tipik talepleri ve makine tercihini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Yapı/talep tipi", "Tipik konum", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Küçük ahşap atölyesi", "İlçe merkezi", "Dar mekân, toz", "Akülü kompakt"],
                        ["Kamu binası", "İlçe merkezi", "Kullanım saati", "Akülü makaslı"],
                        ["Tarımsal depo/ahır", "Kırsal", "Zemin, mevsim", "Arazi tipi eklemli"],
                    ],
                },
            },
            {
                baslik: "Mesafeye göre planlama farkı",
                paragraflar: [
                    "Çevre ilçeler arasındaki mesafe farkı sevkiyat süresini doğrudan etkiler. Bu yüzden her talepte önce yaklaşık mesafeyi netleştiriyor, buna göre net bir teslimat saati veriyoruz.",
                    "Birden fazla ilçede aynı hafta içinde talep varsa, bunları güzergâha göre sıralayıp tek sevkiyatla çözmeye çalışıyoruz; bu, hem sizin hem bizim için en ekonomik yoldur.",
                ],
            },
            {
                baslik: "Tek makineyle çözülemeyen durumlar",
                paragraflar: [
                    "Bazı hallerde bir ilçedeki iş kompakt bir makine, başka bir ilçedeki iş arazi tipi bir makine gerektirir. Bu durumda tek makineyle iki işi çözmeye çalışmak yerine, sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi taşıyoruz.",
                    "Bu yöntem, tek makineyle uzlaşmaya çalışmaktan hem daha güvenli hem çoğu zaman daha ekonomik oluyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Osmaneli/Gölpazarı/Pazaryeri/İnhisar'daki atölyemize makine gelir mi?",
                cevap:
                    "Gelir; bu ilçeler Bozüyük'e ve birbirine karayoluyla bağlıdır. Önce ilçenin Bozüyük'e olan yaklaşık mesafesini netleştiriyoruz, bu bilgi hem teslimat saatini hem birleştirme imkânını belirliyor. Talebinizi aldığımızda güzergâhı netleştirip net bir saat aralığı veriyoruz.",
            },
            {
                soru: "Küçük atölyemizde toz toplama sistemi yok, çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz, temkinli bir yaklaşımla. Ortamı keşifte gözle kontrol edip akülü, elektrik aksamı kapalı gövdeli bir makine tercih ediyoruz. İçten yanmalı makine bu tür ortamlarda hiçbir koşulda kullanılmaz.",
            },
            {
                soru: "Kamu binamızda kullanım saatleri dışında çalışma yapılabilir mi?",
                cevap:
                    "Evet, kurum görevlisiyle teslimat ve çalışma saatini önceden netleştiriyoruz. Akülü makineler sessiz çalıştığı için kullanım dışı saatlerde de rahatsızlık oluşturmuyor.",
            },
            {
                soru: "Tarımsal depomuzun zemini toprak, sakıncası var mı?",
                cevap:
                    "Önlemsiz çalışmıyoruz. Toprak veya parçalı beton zeminde arazi tipi, geniş tekerlekli bir makine tercih ediyoruz; gerekirse zemin plakası seriyoruz. Yağış sonrası zemin yumuşamışsa çalışmayı erteliyoruz.",
            },
            {
                soru: "Tek başına küçük bir işimiz var, maliyeti düşürmenin yolu var mı?",
                cevap:
                    "Var; talebinizi Bozüyük'teki ya da başka bir çevre ilçedeki planlı sevkiyatla birleştirerek nakliye payını paylaştırabiliyoruz. Bunun için acil olmayan işlerde birkaç günlük tarih esnekliği vermeniz yeterli.",
            },
            {
                soru: "Aynı hafta hem merkezde hem kırsalda işimiz var, tek makineyle olur mu?",
                cevap:
                    "Çoğu zaman olmuyor ve bunu baştan söylemeyi tercih ediyoruz. Merkezdeki kompakt makine ile kırsaldaki arazi tipi makine farklı gövdelerdir. Bu yüzden sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi taşıyoruz; bu, tek makineyle çözmeye çalışmaktan daha güvenli ve genellikle daha ekonomik oluyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bilecik'in Bozüyük dışındaki ilçeleri (Osmaneli, Gölpazarı, Pazaryeri, İnhisar) ve bunların küçük ölçekli sanayi-tarım karakteri kamuya açık bilgidir. Firma adı, tesis adı ve rakam kullanılmamıştır.",
    },
};

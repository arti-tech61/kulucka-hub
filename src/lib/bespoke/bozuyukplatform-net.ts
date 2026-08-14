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
    "bolge:sogut-osb": {
        h1: "Söğüt OSB Ahşap İşleme Hatlarında Toz ve Yangın Disipliniyle Platform Kiralama",
        giris: "Söğüt OSB’de ahşap işleme hattının üst kotuna erişim, ortak makine parkı planından da genel tozlu tesis bakımından da daha dar bir konuya sahiptir: kesim, zımpara veya şekillendirme faaliyetinin çevresinde oluşabilen yanıcı toz yükü altında, bakım işinin ne zaman ve hangi izinle yapılacağını belirlemek. Bu sayfa filo paylaşımı, transfer ya da makinenin genel temizliğini merkezine almaz. Odak; hat üstü aydınlatma, emiş ağzı, kablo taşıyıcı ve askı noktalarına yaklaşmadan önce üretimi güvenli duruma getirmek, birikmiş tozu kontrollü yöntemle azaltmak, kıvılcım üreten işleri ayrı izin zincirine almak, el aletlerini bağlamak ve çalışma sonrası gözetim ile teslimi tamamlamaktır. Ortamın sınıflandırmasını platform firması yapmaz; tesisin risk değerlendirmesi ve yetkili onayı olmadan yalnız akülü olduğu için bir ünite uygun kabul edilmez.",
        maddeler: [
            { baslik: "Hat üstü işi üretimden fiziksel olarak ayırmak", metin: "Kesim veya zımpara hattı yalnız düğmesi kapalı göründüğü için güvenli kabul edilmez. Tesisin yetkili ekibi hareket ve enerji durumunu kendi prosedürüne göre güvenli hâle getirir, ürün ve personel çalışma aksından çıkarılır, alt alan bariyerlenir. Emiş hattının hangi durumda kalacağı tesisçe belirlenir. Platform operatörü makine hattını devre dışı bırakmaz. Sepet yükselmeden önce acil iniş koridoru ve gözcü iletişimi doğrulanır. İş bittiğinde platform güvenli alana çıkmadan ve alet sayımı tamamlanmadan üretim yeniden başlatılmaz." },
            { baslik: "Birikmiş tozu bakım öncesi kontrol etmek", metin: "Üst kiriş, kanal, armatür veya kablo tavasındaki birikim, söküm sırasında havaya kalkabilir ve yüzeye yayılabilir. Tesisin belirlediği temizlik yöntemi uygulanır; rastgele kuru süpürme ya da basınçlı havayla dağıtma yapılmaz. Görüşü, makine kumandasını veya güvenli tutunmayı etkileyen birikim varsa çalışma ertelenir. Temizlik, teknik bakımın kendisiyle karıştırılmaz; platform yalnız uygun hâle getirilen aksa erişir. İş sırasında yeni bir birikim cebi görülürse konum kaydedilir, yetkili değerlendirmesi olmadan kanal açılmaz veya proses hakkında karar verilmez." },
            { baslik: "Kıvılcım üreten kalemi ayrı izinle yürütmek", metin: "Kaynak, taşlama veya kesme ihtiyacı sıradan armatür değişimiyle aynı iş emrine saklanmaz. Tesisin sıcak iş izni, ortam uygunluğu, yangın gözcüsü, söndürme düzeni ve iş sonrası gözlem şartı eksiksiz sağlanır. Yanıcı tozun temizliği ve komşu hattın durumu doğrulanmadan kıvılcım üretilmez. Koruyucu örtü platformun hortum, kumanda ve acil inişini engellemez. Şartlar uygun değilse kıvılcımsız bakım kalemleri tamamlanabilir, sıcak iş farklı pencereye bırakılır; kiralama günü var diye riskli kapsam zorlanmaz." },
            { baslik: "Sepette alet ve küçük parça kontrolü", metin: "Ahşap işleme hattının üstünde düşen bir vida, anahtar veya armatür parçası hem personeli hem aşağıdaki ekipmanı tehlikeye atar. El aletleri bağlanır, küçük parçalar kapalı kutuda tutulur ve sökülen eleman sepete sabitlenir. Sepet kapasitesi personel, alet ve malzemenin toplamıyla değerlendirilir; uzun kanal veya ağır parça platformla kaldırılmaz. Alt alanda ürün bırakılmaz ve örtü, boşaltmanın yerine geçmez. Her yükseliş öncesinde yalnız o hedefin malzemesi hazırlanır; gereksiz yük ve karışıklık azaltılır." },
            { baslik: "Yangın gözetimiyle bölüm teslimi", metin: "Kıvılcım üreten iş yapılmışsa kapanış, sepetin inmesiyle bitmez. Tesisin izin prosedüründeki gözetim uygulanır, sıcak parça ve olası tutuşma noktaları kontrol edilir. Kıvılcımsız işte de üst kotta gevşek eleman kalmadığı, aletlerin eksiksiz olduğu ve alt alanın temizlendiği görülür. Açık kalemler nedenleriyle kaydedilir. Bölüm sorumlusu erişilen aksı teslim alır ve yeniden çalıştırma kararını kendi yetkisiyle verir. Platform ekibi üretim hattının teknik kabulünü değil, erişim hizmetinin kapanışını belgeler." },
        ],
        ekBolumler: [
            { baslik: "Hat işi türüne göre toz ve yangın kontrolü", paragraflar: ["Ahşap işleme hattındaki erişim kalemleri, kıvılcım ve alt alan etkisine göre ayrılır."], tablo: { basliklar: ["Kalem", "Ortam etkisi", "Ön koşul", "Erişim düzeni"], satirlar: [["Aydınlatma", "Üst yüzey tozu", "Hat güvenli, aks temiz", "Akülü dikey"], ["Emiş ağzı", "Yoğun birikim", "Tesis temizlik onayı", "Yandan eklemli"], ["Kablo taşıyıcı", "Hat üstü hareket", "Enerji-hareket kontrolü", "Bağlı aletlerle"], ["Askı bağlantısı", "Parça düşmesi", "Alt alan boş", "Kısa erişim bloğu"], ["Kaynaklı onarım", "Kıvılcım", "Sıcak iş izni", "Ayrı kapsam"], ["Kanal parçası", "Ağır/uzun yük", "Ayrı kaldırma", "Platform yalnız personel"]] } },
            { baslik: "İzin açılışında görev sınırları", paragraflar: ["Tesis yetkilisi ortamı, hattın enerji ve hareket durumunu, sıcak iş gereksinimini ve yeniden çalıştırma yetkisini yönetir. Uygulayıcı bakım ekibi teknik işi ve malzemeyi üstlenir. Platform ekibi uygun makineyi, operatörü, erişim rotasını ve acil iniş düzenini sağlar. Bu görevler iş kartında açıkça görünür.", "Bir taraf hazır değilse izin açılmış sayılmaz. Özellikle ortam uygunluğunu platformun akülü olmasına bakarak varsaymayız. Gözcü ve iletişim kişisi değişirse çalışma durdurulup yeni kişiyle devir yapılır. Böylece hızlı bir tavan işi sırasında sorumluluğun ekipler arasında kaybolması önlenir." ] },
            { baslik: "Kıvılcımsız ve sıcak işi ayrı sıraya koymak", paragraflar: ["Bakım listesi önce kıvılcım üretmeyen kontrol, değişim ve sabitleme kalemleriyle; sonra sıcak iş gerektiren onarımlarla ayrılır. İlk grup, tesisin temel güvenli duruşu ve temizlik koşuluyla ilerleyebilir. İkinci grup ek izin, koruma ve kapanış ister. İki grubun malzemesi ve personeli karıştırılmaz.", "Sıcak iş izni gecikirse platform tüm gün beklemek yerine onaylı kıvılcımsız noktalara geçebilir. Buna karşılık sırayı değiştirmek alt alanda yeni risk yaratıyorsa çalışma yapılmaz. Esnek sıra önceden hazırlanmış seçenekler arasında uygulanır; sahada rastgele yeni kapsam üretilmez." ] },
        ],
        sss: [
            { soru: "Akülü platform ahşap tozu bulunan her hatta uygun mudur?", cevap: "Hayır. Tesisin ortam risk değerlendirmesi ve ekipman uygunluğu gerekir. Akülü tahrik egzozu kaldırır fakat elektriksel ve yangın risklerini tek başına çözmez. Uygunluk doğrulanmadan makine içeri alınmaz. Önce temizlik, havalandırma veya farklı yöntem gerekebilir." },
            { soru: "Hat durmadan tavan lambası değiştirilebilir mi?", cevap: "Çalışılan aksın hareket ve enerji durumu tesis prosedürüne göre güvenli hâle getirilmeden değiştirmeyiz. Alt alanda personel, ürün veya hareketli ekipman kalmaz. Başka bölümlerin çalışması ancak fiziksel ayrım ve kesişmeyen rota varsa mümkündür. Üretim kaybını azaltmak güvenlik zincirini kaldırmaz." },
            { soru: "Toz emiş sistemi bakım sırasında açık mı kalmalı?", cevap: "Bunu tesisin yetkili ekibi kaleme göre belirler. Bazı işlemlerde hava hareketi sökümü etkileyebilir, bazılarında ortam kontrolü için farklı düzen gerekir. Platform ekibi karar vermez. İş kartında emiş sisteminin durumu yazılmadan kanal veya ağız çevresinde müdahale başlatılmaz." },
            { soru: "Sepette taşlama yapabilir miyiz?", cevap: "Yalnız ortam uygunluğu, sıcak iş izni, temizlik, gözcü, söndürme ve kapanış şartları tesisçe sağlanırsa ayrı kapsamda değerlendirilir. Bu şartlardan biri eksikse yapılmaz. Kıvılcımsız kalemler ayrı ilerleyebilir; makinenin sahada olması sıcak işe otomatik izin vermez." },
            { soru: "Ağır kanal parçasını platformla indirebilir miyiz?", cevap: "Platform vinç değildir. Personel ve küçük sabitlenmiş malzeme kapasite içinde taşınabilir; ağır veya uzun parça için ayrı kaldırma planı gerekir. Parçayı sepete çekerek yan yük bindirmeyiz. Kaldırma ekipmanı ve geçici sabitleme tesis ile uygulayıcı tarafından ayrıca planlanır." },
            { soru: "İş bitince hattı kim yeniden açar?", cevap: "Tesisin yetkili ekibi açar. Platform ekibi sepeti indirir, alet ve parçaları sayar, erişim alanını boşaltır ve kendi kapanış kaydını teslim eder. Sıcak iş varsa izin prosedüründeki gözetim tamamlanır. Bölüm sorumlusu teslim almadan üretim yeniden başlatılmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Söğüt OSB’nin ve bölgede orman ürünleri faaliyetlerinin varlığı kamuya açık genel bilgidir; ahşap işleme hattında toz, sıcak iş izni, düşen cisim ve yangın kapanışı sektör geneli ilkeler ile firma pratiğine dayanır. Ortak park, genel makine bakımı, tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:bozuyuk-kucuk-sanayi-sitesi": {
        h1: "Bozüyük Küçük Sanayi Sitesi Mobilya Atölyelerinde İç Mekân Makaslı Platform",
        giris: "Bozüyük Küçük Sanayi Sitesindeki mobilya atölyelerinde bu sayfanın konusu çatı ve cephe kabuğu da değildir, yükleme rampası veya yüksek raf operasyonu da. Odak yalnız atölye içindeki düz beton zemin üzerinde, hedefin altına park edilebilen tavan aydınlatması, havalandırma menfezi, kamera, kablo taşıyıcı ve asma tesisat kalemlerine kompakt akülü makaslı platformla erişmektir. Makaslı sınıf yatay engel aşmak için değil, dikey çalışma yüzeyi ve geniş sepet avantajı için seçilir. Tezgâh, malzeme arabası ve yarı mamul rota dışına alınır; kapı, eşik, dönüş ve tavan açıklığı ölçülür; çalışma vardiya dışında veya ayrılmış bölümde yürütülür. Ahşap tozu ya da kaplama buharı bulunan özel hacimler tesisin risk değerlendirmesiyle ayrıca ele alınır ve standart iç mekân işi gibi varsayılmaz.",
        maddeler: [
            { baslik: "Makaslı platform için dikey hedef seçmek", metin: "Makaslı sınıf, hedefin tam altına güvenli biçimde park edilebildiğinde verimlidir. Armatür sırası, düz kanal hattı veya tavan boyunca dağılan kamera noktaları bu geometriye uygundur. Sabit tezgâh, boya kabini veya yüksek stok hedefin altını kapatıyorsa sepette dışarı uzanılmaz; alan işletmece boşaltılır ya da kompakt eklemli sınıf ayrı değerlendirilir. İş listesi keşifte dikey ve engelli hedefler olarak ayrılır. Böylece makaslı platforma uygun olmayan bir nokta uğruna bütün atölyede yanlış sınıf kullanılmaz." },
            { baslik: "Kapıdan çalışma aksına net rota", metin: "Atölye kapısının eni ve yüksekliği, eşik, kepenk rayı, hemen içerideki dönüş, zemindeki kablo ve çalışma alanındaki boşluk birlikte ölçülür. Gündüz açık olan rota kapanışta malzeme arabası veya yarı mamulle dolu olabilir; işletme geçişi makine gelmeden boşaltır. Basamak veya uygunsuz rampa doğaçlama malzemeyle aşılmaz. Sepet yükselirken acil iniş noktasına erişim korunur. Makine bir tavan aksından diğerine geçerken tamamen indirilir ve gözcü dar dönüşü kontrol eder." },
            { baslik: "İç mekânda akülü ve temiz ünite kabulü", metin: "Kapılar açık olsa bile iç hacimde dizel sınıf tercih edilmez; akülü, egzozsuz ve atölyeye girmeden temizlenmiş makine kullanılır. Tekerleklerde dış sahadan gelen çamur, metal veya cam kırığı bulunmadığı kontrol edilir. Ahşap talaşı ve kaygan sıvı rota üzerinden kaldırılır. Hidrolik sızıntı belirtisi olan ünite ürün ve makine parkının yanına alınmaz. Zeminin altında kanal, çukur veya zayıf kapak varsa işaretlenir. İçeri giriş kaydı, makinenin atölye düzenine ek risk taşımadığını doğrular." },
            { baslik: "Geniş sepette alet ve malzeme düzeni", metin: "Makaslı platformun geniş sepeti iki kişinin ve küçük malzemenin çalışmasını kolaylaştırabilir, fakat kapasite sınırı değişmez. Personel, el aleti ve malzeme toplamı üretici sınırında tutulur. Uzun levha, mobilya paneli veya ağır kanal parçası sepette taşınmaz. Aletler bağlanır, küçük bağlantılar kutuda tutulur ve sökülen eleman aşağıya atılmaz. Sepette yalnız çalışılan aksın malzemesi bulunur. Düzenli yükleme, hem kapasiteyi korur hem tavan altında parçaların birbirine karışmasını önler." },
            { baslik: "Vardiya dışı aks teslimi", metin: "Atölyenin tamamını kapatmak yerine tavan aksları sıraya alınabilir. Çalışılan bölüm boşaltılır, ilgili ekipman tesis prosedürüne göre güvenli duruma getirilir ve makaslı platform o aksın hazır kalemlerini tamamlar. İş bitiminde alet sayılır, üstte gevşek parça kalmadığı görülür, zemin temizlenir ve bölüm sorumlusu aksı teslim alır. Sonra makine indirilip sonraki bölüme geçer. Sabah vardiyası başlamadan bütün bariyer ve koruyucular kaldırılır; yarım iş varsa konum ve güvenli durumuyla kayda alınır." },
        ],
        ekBolumler: [
            { baslik: "Mobilya atölyesi iç tavanında makaslı eşleşmesi", paragraflar: ["Makaslı platform yalnız dikey erişim geometrisine uyan iç kalemlerde kullanılır."], tablo: { basliklar: ["İç kalem", "Alt alan", "Kısıt", "Plan"], satirlar: [["Armatür sırası", "Boş beton aks", "Dikey erişim", "Akülü makaslı"], ["Tavan menfezi", "Taşınabilir araba", "Alan boşaltma", "Geniş sepetli"], ["Kamera hattı", "Yaya koridoru", "Bariyer", "Aks bazlı"], ["Kablo taşıyıcı", "Düz güzergâh", "Enerji kontrolü", "Vardiya dışında"], ["Tezgâh gerisi hedef", "Sabit engel", "Yatay erişim", "Makaslı kapsam dışı"], ["Asma tavan paneli", "Hassas ürün", "Düşen cisim", "Ürün kaldırılınca"]] } },
            { baslik: "Makaslı ve eklemli sınırını keşifte çizmek", paragraflar: ["Tavan planında her hedefin altındaki boşluk işaretlenir. Makaslı, düz aks boyunca hedefin altına girebildiği noktaları kapatır. Tezgâh veya kabin nedeniyle yatay uzanma isteyen hedefler farklı renkle ayrılır. Bu ayrım, sahada operatörün korkuluk üzerinden uzanarak erişmeye çalışmasını önler.", "Engelli hedef sayısı azsa ana tur makaslıyla, özel noktalar başka sınıfla ayrı kısa programda ele alınabilir. Hepsi engelliyse baştan eklemli sınıf seçilir. Ekonomi günlük bedelden değil, kaç hedefin güvenle kapandığından hesaplanır. Makaslıyı görev sınırının dışında kullanmak daha ucuz çözüm değildir." ] },
            { baslik: "Atölyeyi gece çalışmasına hazırlamak", paragraflar: ["Kapanışta üretim ekibi ilgili aksı boşaltır, hareketli ekipmanı güvenli duruma getirir, zemin temizliğini yapar ve elektrik yetkilisi çalışılacak devreyi tanımlar. Uygulayıcı ekip armatür, bağlantı ve el aletini hazır eder. Anahtar, alarm ve sabah teslim sorumlusu belirlenir. Platform geldiğinde hazırlık tamamlanmamışsa gece penceresi hızla kaybolur.", "Kapanışta ters sıra uygulanır: sökülen parça çıkarılır, alet sayılır, zemin ve ürün çevresi kontrol edilir, korumalar kaldırılır ve tesis yetkilisi sistemi devreye alır. Makine tamamen dışarı çıktıktan sonra alarm ve kapı düzeni normale döner. Bu süreç çatı veya yükleme operasyonuna değil, atölye içi temiz teslim disiplinine aittir." ] },
        ],
        sss: [
            { soru: "Makaslı platform tezgâhın üzerinden uzanabilir mi?", cevap: "Hayır; makaslı platform dikey yükselir. Hedefin altında sabit tezgâh varsa alan boşaltılmalı veya yatay erişimli kompakt eklemli sınıf değerlendirilmelidir. Korkuluk üzerinden uzanmak kabul edilmez. Fotoğraf ve ölçüyle hedefler baştan makaslıya uygun veya kapsam dışı olarak ayrılır." },
            { soru: "Atölye çalışırken tavan bakımı yapılır mı?", cevap: "Çalışılan aks üretimden fiziksel olarak ayrılmış ve hareketli ekipman güvenli duruma getirilmişse bölüm bazlı plan kurulabilir; çoğunlukla vardiya dışını tercih ederiz. Altında personel, yarı mamul veya çalışan makine varken sepet yükselmez. Güvenli ayrım yoksa ilgili bölüm durur." },
            { soru: "Ahşap tozu varsa standart makaslı kullanılır mı?", cevap: "Tesisin ortam risk değerlendirmesi ve ekipman uygunluğu görülmeden kullanılamaz. Akülü olması tek başına yeterli değildir. Yoğun toz veya kaplama buharı bulunan özel hacimler ayrı izin ve hazırlık ister. Uygunluk doğrulanmıyorsa önce temizlik, havalandırma ya da farklı yöntem planlanır." },
            { soru: "Sepete mobilya paneli alabilir miyiz?", cevap: "Uzun veya ağır panel makaslı platformda taşınmaz; rüzgâr olmasa bile denge, kapasite ve sıkışma riski yaratır. Sepete yalnız kapasite içinde, sabitlenmiş küçük bakım malzemesi alınır. Panel montajı gerekiyorsa ayrı kaldırma ve tutma yöntemi gerekir. Platform personel erişim aracı olarak kalır." },
            { soru: "Zemindeki talaş makine için sorun olur mu?", cevap: "Evet; tekerlek altında tutunmayı ve yönlendirmeyi etkileyebilir, sivri parça lastiğe zarar verebilir. Rota ve çalışma aksı süpürülüp temizlenmeden makine içeri alınmaz. Kaygan sıvı varsa kaynak giderilir ve yüzey kurulanır. Temiz zemin makaslı platformun temel ön koşuludur." },
            { soru: "Bu KSS hizmeti yükleme ve raf bakımını kapsıyor mu?", cevap: "Hayır. Bu sayfa yalnız mobilya atölyesi içindeki dikey tavan kalemlerine makaslı erişimi anlatır. Yükleme rampası, yüksek raf, dış cephe ve çatı işleri farklı geometri ile trafik planı gerektirir. Talep bunlardan biriyse ayrı kapsam ve uygun makine sınıfı hazırlanır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Bozüyük Küçük Sanayi Sitesinin ve bölgedeki mobilya-orman ürünleri atölye bağlamının varlığı kamuya açık genel bilgidir; iç mekân makaslı platform geometrisi, temiz rota ve vardiya dışı aks teslimi firma saha pratiğidir. Çatı-cephe, yükleme-raf, tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Bozüyük Plastik Enjeksiyon Hattında Kalıp Üstü ve Boru Hattı Dar Erişim",
        giris:
            "Enjeksiyon ve ekstrüzyon hatlarının bulunduğu üretim hollerinde arıza veya bakım noktası çoğu zaman standart bir platformun rahatça yaklaşabileceği açık bir alanda değildir — hattın üzerinden geçen bir hava hattı, iki makine arasına sıkışmış bir kablo kanalı, kalıp değişim vinç rayının hemen yanındaki dar bir servis boşluğu ya da granül besleme borusunun bir dirsek noktası. Bu noktalara standart makaslı veya eklemli platformla erişmek çoğu zaman hattın bir bölümünü boşaltmayı gerektirir; bu ise üretim kaybı demektir. Sepetli örümcek platform, kendi ayaklarını hat kenarındaki boş noktalara tek tek yerleştirebildiği ve sepet kolunu makinenin üzerinden veya yanından uzatabildiği için, hattı durdurmadan bu tip dar noktalara erişim sağlar. Bu sayfa, Bozüyük OSB'deki plastik enjeksiyon ve ambalaj üretim tesislerinde örümcek platformun ne zaman devreye alındığını ve hat kenarına nasıl konumlandırıldığını anlatıyor.",
        maddeler: [
            {
                baslik: "Hat üstü boru ve kablo hattı arızalarında ilk tercih",
                metin:
                    "Granül besleme hattı, soğutma suyu borusu veya kablo taşıyıcı, enjeksiyon makinelerinin üzerinden geçtiği için standart platformun tabanı bu hatların altına sığmayabilir. Telefonda arızanın konumu ve üstündeki engel tarif edildiğinde, üstte boru veya kablo hattı varsa örümcek platform yönlendiririz; ayaklar makineler arasındaki boş noktalara konumlandırılır, sepet kolu hattın üzerine uzanır.",
            },
            {
                baslik: "Kalıp değişim vinç rayı çevresinde dar servis boşluğu",
                metin:
                    "Kalıp değişim vinç rayının çevresinde bırakılan servis boşluğu genellikle dardır ve ray hattı boyunca sabit bir engel oluşturur. Bu boşlukta çalışırken makinenin vinç rayına temas etmeyecek mesafede kalması gerekir; örümcek platformun dar ayak izi bu boşluğa sığar, sepet kolu ray altından geçmeden servis noktasına ulaşır.",
            },
            {
                baslik: "Ekstrüzyon hattı üzerinde soğutma tankı ve kalibrasyon ünitesi erişimi",
                metin:
                    "Ekstrüzyon hattındaki soğutma tankı veya kalibrasyon ünitesinin üstü, hat boyunca uzanan dar bir koridorda kalır. Standart platformun geniş tabanı bu koridora giremeyeceği için, örümcek platform ayaklarını hattın yanındaki boş alana yerleştirip sepeti tank üzerine uzatarak çalışır; hat üretime devam ederken müdahale planlanabilir, ancak tankın sıcak yüzeyine temas riski varsa çalışma önce hat durdurularak yapılır.",
            },
            {
                baslik: "Ambalaj hattı üzerindeki konveyör dönüş noktaları",
                metin:
                    "Kutulama veya paketleme hattındaki konveyör dönüş noktaları, hattın iki kolu arasında dar bir üçgen alan bırakır. Bu tip noktalara standart platform giremez; örümcek platform ayaklarını üçgenin dışına, sepeti içeri uzatarak konveyör üstü sensör veya motor bakımını mümkün kılar.",
            },
            {
                baslik: "Sahaya taşıma ve hat kenarına kurulum süresi",
                metin:
                    "Örümcek platformun birçok modeli standart bir sanayi kapısından geçebilecek boyuttadır ve tesis içinde kendi gücüyle veya çekilerek hareket edebilir; bu, kurulum süresini standart platforma göre kısaltır çünkü geniş bir alan boşaltmaya gerek kalmaz. Sahaya varan ekip önce hat kenarındaki boş noktaları ve üstteki engelleri gözden geçirir, ardından ayakları konumlandırıp sepeti güvenli açıyla uzatır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hat üstü engel tipine göre makine kararı",
                paragraflar: [
                    "Enjeksiyon ve ekstrüzyon hatlarında hangi makine sınıfının gönderileceği aşağıdaki karar noktalarına göre belirlenir.",
                ],
                tablo: {
                    basliklar: ["Durum", "Standart platform", "Örümcek platform"],
                    satirlar: [
                        ["Düz koridor, üstte engel yok", "Uygun, hızlı kurulum", "Gerekmez"],
                        ["Üstte boru/kablo hattı", "Taban altına giremez", "Sepet kolu üstten uzanır"],
                        ["Vinç rayı çevresi dar boşluk", "Manevra kısıtlı", "Dar ayak izi uygun"],
                        ["Konveyör dönüş üçgeni", "Sığmaz", "Ayaklar dışarıda, sepet içeride"],
                    ],
                },
            },
            {
                baslik: "Hattı durdurmadan çalışmanın sınırı",
                paragraflar: [
                    "Örümcek platformun hattı durdurmadan çalışabilmesi, ayakların oturacağı noktanın ve sepet kolunun geçeceği güzergâhın üretim hareketinden fiziksel olarak ayrı olmasına bağlıdır. Sıcak yüzey, dönen mil veya hareketli parça sepet kolunun güzergâhında ise çalışma önce tesisin ilgili bölümü güvenli duruma getirmesiyle başlar.",
                    "Bu değerlendirmeyi platform ekibi tek başına yapmaz; tesisin yetkili bakım ekibi hattın hangi bölümünün güvenli, hangisinin risk taşıdığını belirler. Belirsiz kalan bir nokta varsa, o bölüm durdurulmadan çalışmaya başlanmaz.",
                ],
            },
            {
                baslik: "Ayak konumlandırmasının hat kenarında dikkat gerektirmesi",
                paragraflar: [
                    "Hat kenarındaki zemin genellikle beton olsa da, kablo kanalı kapağı, zemin ızgarası veya geçici bir palet üstü ayak basma noktası olarak uygun değildir. Sahaya varan operatör her ayağın oturduğu noktayı tek tek kontrol eder, kanal kapağı veya ızgara üzerine basılmaz.",
                    "Bir ayak boşluğa veya zayıf bir noktaya denk gelirse makine dengesi bozulabilir; bu yüzden konumlandırma kontrolü, arızanın aciliyeti ne olursa olsun atlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Örümcek platform ile standart makaslı platform arasındaki farkı hat kenarında nasıl belirliyorsunuz?",
                cevap:
                    "Telefonda arızanın konumunu, üstteki boru/kablo/ray gibi engelleri ve zeminin genişliğini sorarız. Üstte engel yoksa ve alan genişse standart platform daha hızlı kurulur; engel varsa veya alan darsa örümcek platformun dar ayak izi ve esnek sepet kolu tercih edilir. Sahaya varan ekip ilk gözlemiyle son kararı verir.",
            },
            {
                soru: "Örümcek platform çalışırken enjeksiyon hattı durur mu?",
                cevap:
                    "Ayakların oturacağı nokta ve sepet kolunun geçeceği güzergâh üretim hareketinden fiziksel olarak ayrıysa hat durmadan çalışabiliriz. Sıcak yüzey veya hareketli parça güzergâhta ise tesisin ilgili bölümü önce güvenli duruma getirilir. Bu kararı tesisin yetkili ekibi verir, platform ekibi tek başına belirlemez.",
            },
            {
                soru: "Kalıp değişim vinç rayına temas riski var mı?",
                cevap:
                    "Örümcek platform ayaklarını ray dışındaki boş noktalara konumlandırır ve sepet kolu ray altından geçmeden hedefe uzanır; operatör manevra sırasında rayla mesafeyi sürekli kontrol eder. Ray hattı aktif kullanımdaysa, o sırada çalışma yapılmaz ve vinç trafiği ile koordinasyon sağlanır.",
            },
            {
                soru: "Ekstrüzyon hattındaki sıcak soğutma tankına yaklaşırken ek önlem var mı?",
                cevap:
                    "Evet. Tank yüzeyi sıcaksa sepet kolu güvenli mesafede tutulur ve gerekirse hat kısa süreliğine durdurularak yaklaşılır. Isı riski taşıyan bölgelerde operatör koruyucu ekipman kullanır; bu, makine tipi değişse de sektöre özgü standart bir önlemdir.",
            },
            {
                soru: "Konveyör dönüş üçgeninde çalışırken paketleme hattı devam edebilir mi?",
                cevap:
                    "Çalışılan dönüş noktası dışındaki hat bölümleri, fiziksel ayrım sağlandığında devam edebilir. Ancak konveyörün tamamı tek bir tahrikle çalışıyorsa ve ayrım mümkün değilse, o bölümün kısa süreliğine durdurulması istenir; bu, sahaya varan ekip ile tesis yetkilisi arasında netleştirilir.",
            },
            {
                soru: "Hat kenarındaki zemin ızgarası veya kanal kapağı üzerine ayak basılabilir mi?",
                cevap:
                    "Hayır, kanal kapağı ve ızgara üzeri ayak basma noktası olarak kullanılmaz çünkü altındaki boşluk makinenin dengesini bozabilir. Operatör her ayağın oturduğu noktayı tek tek kontrol eder, uygun olmayan bir nokta varsa en yakın sağlam beton alan konumlandırma noktası olarak seçilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli örümcek platformun dar ayak izi ve esnek sepet kolu ile engelli/dar noktalara erişim sağlaması makine sınıfının genel teknik özelliğidir. Bozüyük OSB'de plastik enjeksiyon ve ekstrüzyon üretiminin varlığı genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Bozüyük Ambalaj ve Plastik Tesislerine Platform Nakliyesi ve Vardiya Uyumlu Teslimat",
        giris:
            "Ambalaj ve plastik enjeksiyon tesislerinde platform kiralamanın ilk adımı çoğu zaman geometri değil, teslimat zamanlamasıdır. Bu tesislerin çoğu üç vardiya kesintisiz çalışır ve üretim hattının bulunduğu holün kapısı, günün her saatinde malzeme veya bitmiş ürün paletiyle dolu olabilir. Bu yüzden platform teslimatını, hangi kapıdan gireceğimizi, o kapının hangi saatte boş olduğunu ve makinenin hangi vardiya arasında hatta ulaşabileceğini önceden netleştirerek planlarız. Bilecik'in Bozüyük dışındaki ilçelerinden (Osmaneli, Gölpazarı, Pazaryeri, İnhisar) gelen taleplerde ek olarak yol süresi ve varış saati hesaba katılır. Nakliye aracının kapı önüne değil, hattın kendisine kadar hangi rotayla ulaşacağı — dar dönüşler, rampa eğimi, tavan yüksekliği — teslimattan önce tesis yetkilisiyle birlikte doğrulanır; bu doğrulama atlanırsa makine kapıda bekler ve vardiya penceresi kaybolur.",
        maddeler: [
            {
                baslik: "Vardiya arası teslimat penceresini önceden netleştirmek",
                metin:
                    "Üç vardiya çalışan tesislerde makine, üretim akışını kesmeyecek bir vardiya değişim aralığında teslim edilir. Telefonda tesisin vardiya saatlerini ve hangi kapının o aralıkta boş olacağını sorarız; bu bilgi olmadan teslimat saati belirlenmez. Vardiya değişimi gecikirse teslimat da o kadar ertelenir, bunu önceden konuşuruz.",
            },
            {
                baslik: "Hat kapısına kadar rota ölçümü",
                metin:
                    "Nakliye aracının tesis girişinden hattın bulunduğu noktaya kadar geçeceği rota — dar dönüşler, rampa eğimi, kapı yüksekliği — teslimattan önce ölçülür. Bu ölçüm atlanırsa makine kapıda kalabilir ve hatta ulaşmak için ayrı bir çözüm (parçalı taşıma, farklı giriş) aranması gerekebilir; bu da vardiya penceresini kaçırır.",
            },
            {
                baslik: "Hammadde ve ambalaj paleti trafiğiyle çakışmayı önlemek",
                metin:
                    "Granül hammadde tedariki ve bitmiş ambalaj sevkiyatı genellikle aynı kapılardan geçer. Platform teslimatını bu trafiğin yoğun olmadığı bir saate denk getirmeye çalışırız; mümkün değilse, tesisin sevkiyat sorumlusuyla birlikte kısa bir geçici öncelik sırası belirlenir.",
            },
            {
                baslik: "OSB dışı ilçelerden gelen taleplerde yol süresi",
                metin:
                    "Osmaneli, Gölpazarı, Pazaryeri veya İnhisar'daki bir ambalaj veya plastik atölyesine teslimatta, Bozüyük'e göre ek yol süresi hesaba katılır. Talep acilse önceliği güvenlik riskine göre belirleriz; acil olmayan işlerde birkaç günlük tarih esnekliği verilmesi, teslimatı planlı sevkiyatla birleştirmemizi ve maliyeti düşürmemizi kolaylaştırır.",
            },
            {
                baslik: "Teslim sonrası kısa saha oryantasyonu",
                metin:
                    "Makine hatta ulaştıktan sonra operatör, tesisin acil durdurma noktalarını, yürüme koridorlarını ve o gün aktif olan hat bölümlerini kısa bir tur ile öğrenir. Bu oryantasyon, çalışmaya başlamadan önce yapılır ve teslimat süresine dahildir; atlanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Teslimat öncesi netleştirilen bilgiler",
                paragraflar: [
                    "Bir ambalaj veya plastik tesisine platform teslimatı planlanırken aşağıdaki bilgiler önceden alınır.",
                ],
                tablo: {
                    basliklar: ["Bilgi", "Neden gerekli", "Alınmazsa risk"],
                    satirlar: [
                        ["Vardiya saatleri", "Boş kapı penceresini belirler", "Makine kapıda bekler"],
                        ["Rota ölçüsü (dönüş, rampa, kapı)", "Hatta ulaşımı doğrular", "Parçalı taşıma gerekebilir"],
                        ["Hammadde/ambalaj trafiği", "Çakışmayı önler", "Sevkiyat gecikir"],
                        ["Tesis konumu (ilçe)", "Yol süresini belirler", "Vardiya penceresi kaçar"],
                        ["Acil durdurma/koridor bilgisi", "Operatör oryantasyonu", "İlk saatte belirsizlik"],
                    ],
                },
            },
            {
                baslik: "Planlı sevkiyatla birleştirerek maliyeti düşürmek",
                paragraflar: [
                    "Acil olmayan bir teslimat talebinde, Bozüyük'teki ya da çevre ilçedeki başka bir sevkiyatla güzergâhı birleştirerek nakliye payını paylaştırabiliyoruz. Bunun için tarih esnekliği yeterlidir; talebi aldığımızda önce bu esneklik olup olmadığını sorarız.",
                    "Acil bir arıza veya hat durması söz konusuysa bu birleştirme yapılmaz, makine doğrudan ve en kısa sürede yola çıkar. Öncelik her zaman aciliyet durumuna göre belirlenir.",
                ],
            },
            {
                baslik: "Vardiya değişiminde gecikme olursa",
                paragraflar: [
                    "Üretim tesislerinde vardiya değişimi bazen planlanan saatten geç gerçekleşir. Bu durumda nakliye ekibi sahada bekler ve kapı boşaldığında teslimatı tamamlar; bekleme süresi teklif aşamasında müşteriyle birlikte konuşulur.",
                    "Gecikme uzarsa ve teslimat başka bir vardiyaya kayarsa, bu yeni pencere tesis yetkilisiyle birlikte yeniden netleştirilir; makine belirsiz bir sürede kapıda tutulmaz.",
                ] ,
            },
        ],
        sss: [
            {
                soru: "Üç vardiya çalışan bir tesise ne zaman teslimat yapıyorsunuz?",
                cevap:
                    "Vardiya değişim aralığında, üretim akışını kesmeyecek şekilde. Telefonda tesisin vardiya saatlerini sorup buna göre teslimat saati belirleriz. Bu bilgi netleşmeden teslimat planlanmaz, çünkü yanlış saatte gelen makine kapıda bekleyip vardiya penceresini kaçırabilir.",
            },
            {
                soru: "Hattın bulunduğu hole kadar rota dar ise ne yapıyorsunuz?",
                cevap:
                    "Teslimattan önce dönüş, rampa eğimi ve kapı yüksekliğini ölçüp rotayı doğrularız. Rota gerçekten dar ise parçalı taşıma veya farklı bir giriş noktası değerlendirilir. Bu doğrulama atlanmaz çünkü sahada karşılaşılan bir dar dönüş, teslimatı saatlerce geciktirebilir.",
            },
            {
                soru: "Granül hammadde teslimatıyla aynı kapıyı kullanmamız gerekiyorsa çakışma olur mu?",
                cevap:
                    "Olabilir; bu yüzden teslimatı mümkünse trafiğin az olduğu saate denk getiririz. Mümkün değilse tesisin sevkiyat sorumlusuyla kısa bir geçici öncelik sırası belirleriz. Çakışma riski varsa bunu önceden söyleriz, sahada sürpriz yaşanmaz.",
            },
            {
                soru: "Osmaneli veya Gölpazarı'ndaki bir atölyeye teslimat süresi ne kadar farklı?",
                cevap:
                    "Bozüyük'e göre ek yol süresi eklenir; bu süreyi talep alındığında netleştiririz. Acil bir durumda önceliği mesafeye bakmaksızın güvenlik riskine göre veririz. Acil olmayan işlerde birkaç günlük tarih esnekliği, teslimatı planlı bir sevkiyatla birleştirip maliyeti düşürmemizi kolaylaştırır.",
            },
            {
                soru: "Operatör hatta geldiğinde direkt çalışmaya başlıyor mu?",
                cevap:
                    "Hayır, önce kısa bir saha oryantasyonu yapılır: acil durdurma noktaları, yürüme koridorları ve o gün aktif olan hat bölümleri öğrenilir. Bu adım teslimat süresine dahildir ve atlanmaz; güvenlik açısından ilk adımdır.",
            },
            {
                soru: "Vardiya değişimi geç kalırsa nakliye ekibi ne yapar?",
                cevap:
                    "Sahada bekler ve kapı boşaldığında teslimatı tamamlar. Bekleme süresi uzun olacaksa veya teslimat başka bir vardiyaya kayacaksa, bunu tesis yetkilisiyle birlikte yeniden netleştiririz; makine belirsiz bir sürede kapıda bırakılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bilecik'in Bozüyük dışındaki ilçeleri (Osmaneli, Gölpazarı, Pazaryeri, İnhisar) kamuya açık coğrafi bilgidir; ambalaj/plastik tesislerinin vardiyalı çalışması sektör geneli bilinen bir özelliktir. Tesis adı, mesafe ve rakam verilmemiştir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Bozüyük Ambalaj Deposunda Hafif Hacimli Ürün İstifleme İçin Forklift Kiralama",
        giris:
            "Ambalaj üretim tesislerinin bitmiş ürün depoları, diğer sanayi kollarından farklı bir istifleme sorunuyla karşılaşır: karton kutu, plastik şişe, kapak veya streç film paletleri ağırlık olarak hafiftir ama hacim olarak çok yer kaplar. Bu, depo yönetiminin ağırlık sınırından çok yükseklik ve devrilme dengesiyle uğraştığı anlamına gelir — özellikle boş karton koli istifleri rüzgârsız bir kapalı depoda bile yanlış istiflendiğinde kolayca devrilebilir. Forklift seçimi bu yüzden kaldırma kapasitesinden çok direk yüksekliği, çatal genişliği ve dar koridor manevrasına göre yapılır. Bozüyük OSB'deki ambalaj depolarının çoğunda koridor genişliği standarttır ama raf yüksekliği tesisten tesise değişir; bu sayfa, hafif hacimli ambalaj ürünlerinin depo içinde nasıl istiflendiğini ve hangi forklift sınıfının bu işe uygun olduğunu anlatıyor.",
        maddeler: [
            {
                baslik: "Hafif ama hacimli yükte devrilme riski",
                metin:
                    "Boş karton koli veya plastik kap istifleri, ağırlık merkezinin yüksekte kalması nedeniyle görünürden daha az stabildir. İstifleme sırasında palet üstündeki yük dengesiz dağılmışsa, forklift kaldırma sırasında değil, direği eğerken devrilme riski taşır. Bu yüzden yük her kaldırmadan önce gözle kontrol edilir, dengesiz paletler yeniden düzenlenmeden kaldırılmaz.",
            },
            {
                baslik: "Dar koridorda çatal manevrası",
                metin:
                    "Ambalaj depolarındaki raf koridorları genellikle standart forklift dönüş yarıçapına göre tasarlanmıştır ama koridor kesişim noktalarında zaman zaman geçici olarak bırakılmış paletler bulunabilir. Operatör koridora girmeden önce güzergâhı gözle kontrol eder; engel varsa depo personelinden kaldırılmasını ister, manevra ile aşmaya çalışmaz.",
            },
            {
                baslik: "Yüksek rafta hafif ürün istifleme sırası",
                metin:
                    "Hafif ürünler genellikle rafın üst katlarına, ağır olanlar alt katlara yerleştirilir; bu, hem raf yük dağılımını dengeler hem de üst kattaki bir paletin düşme etkisini azaltır. İstifleme sırası bu mantığa göre planlanır; depo yönetiminin farklı bir yerleşim talebi varsa, önce raf yük dağılım sınırı kontrol edilir.",
            },
            {
                baslik: "Sevkiyat rampasında yoğun trafik saatleri",
                metin:
                    "Sevkiyat rampasında araç yükleme saatleri genellikle günün belirli dilimlerinde yoğunlaşır. Bu saatlerde forklift trafiği artar; istifleme işleri mümkünse bu yoğun saatlerin dışına planlanır. Yoğun saatte çalışmak gerekiyorsa, rampa sorumlusuyla kısa bir trafik sırası belirlenir.",
            },
            {
                baslik: "Streç film ve paketleme malzemesi istifi",
                metin:
                    "Streç film ruloları ve diğer paketleme sarf malzemeleri dik istiflendiğinde devrilmeye, yatay istiflendiğinde ezilmeye eğilimlidir. Bu malzemeler için tesisin kendi istif talimatı varsa önce ona uyulur; talimat yoksa üretici önerisine göre dik ve düşük katlı istifleme tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ambalaj ürün tipine göre istifleme yaklaşımı",
                paragraflar: [
                    "Depodaki farklı ambalaj ürün tiplerinin istiflenmesinde aşağıdaki genel yaklaşım izlenir.",
                ],
                tablo: {
                    basliklar: ["Ürün tipi", "Ana risk", "Raf konumu", "İstif sınırı"],
                    satirlar: [
                        ["Boş karton koli", "Devrilme (yüksek ağırlık merkezi)", "Üst kat", "Üretici önerisine göre"],
                        ["Plastik şişe/kap paleti", "Ezilme, devrilme", "Orta-üst kat", "Palet başına düşük"],
                        ["Streç film rulosu", "Devrilme/ezilme", "Alt-orta kat", "Dik, az katlı"],
                        ["Dolu ambalaj paleti (ağır ürün)", "Ağırlık", "Alt kat", "Raf kapasitesine göre"],
                    ],
                },
            },
            {
                baslik: "Dengesiz palet ile karşılaşıldığında",
                paragraflar: [
                    "Operatör bir paleti kaldırmadan önce yükün palet üzerinde düzgün dağıldığını, streç film veya bant ile sabitlendiğini gözle kontrol eder. Yük kaymışsa veya sabitleme gevşemişse, palet önce düzeltilir ya da depo personeline bildirilir; sabitlenmemiş bir palet olduğu gibi kaldırılmaz.",
                    "Kaldırma sırasında dengesizlik hissedilirse forklift yavaşça indirilir, yeniden düzenleme yapılır. Devrilme riski taşıyan bir kaldırma zorlanmaz; bu, kısa vadede iş kaybı gibi görünse de depo personeli ve ürün güvenliği için gerekli bir adımdır.",
                ],
            },
            {
                baslik: "Sevkiyat yoğunluğuna göre çalışma planı",
                paragraflar: [
                    "Depo yönetimiyle birlikte günün hangi saatlerinde sevkiyat rampasının en yoğun olduğu netleştirilir; istifleme işleri mümkünse bu saatlerin dışına alınır. Bu, hem forklift trafiğinin karışmasını önler hem de sevkiyat programının aksamamasını sağlar.",
                    "Yoğun saatte kaçınılmaz bir istifleme ihtiyacı doğarsa, rampa sorumlusuyla kısa bir öncelik sırası konuşulur ve iki forklift aynı koridoru aynı anda kullanmaz.",
                ] ,
            },
        ],
        sss: [
            {
                soru: "Boş karton koli istifleri neden dolu paletlerden daha riskli olabiliyor?",
                cevap:
                    "Ağırlık merkezi yüksekte kaldığı için görünürden daha az stabildirler. Dengesiz bir istif, kaldırma sırasında değil forklift dönüş veya direği eğme hareketinde devrilebilir. Bu yüzden her kaldırmadan önce yükün palet üzerinde düzgün dağıldığı gözle kontrol edilir.",
            },
            {
                soru: "Dar koridorda geçici bırakılmış bir palete rastlarsak ne yapıyorsunuz?",
                cevap:
                    "Manevra ile aşmaya çalışmayız; depo personelinden paletin kaldırılmasını isteriz. Koridor kesişim noktalarındaki engeller forklift dönüş yarıçapını daralttığı için, güvenli manevra alanı sağlanmadan koridora girilmez.",
            },
            {
                soru: "Hafif ürünler her zaman üst kata mı konuyor?",
                cevap:
                    "Genel eğilim budur çünkü bu, raf yük dağılımını dengeler ve düşme etkisini azaltır. Ancak depo yönetiminin farklı bir yerleşim talebi varsa, önce raf yük dağılım sınırı kontrol edilir; sınır uygunsa talep karşılanır.",
            },
            {
                soru: "Sevkiyat rampasının yoğun olduğu saatte istifleme yapabiliyor musunuz?",
                cevap:
                    "Yapabiliriz ama önceliğimiz bu işleri yoğun saatlerin dışına planlamaktır. Kaçınılmazsa rampa sorumlusuyla kısa bir trafik sırası belirleriz; iki forklift aynı koridoru aynı anda kullanmaz.",
            },
            {
                soru: "Streç film rulolarını nasıl istifliyorsunuz?",
                cevap:
                    "Tesisin kendi istif talimatı varsa ona uyarız; yoksa üretici önerisine göre dik ve düşük katlı istifleme tercih ederiz. Ruloları yatay istiflemek ezilmeye yol açabileceği için tercih edilmez.",
            },
            {
                soru: "Kaldırma sırasında dengesizlik hissedilirse ne oluyor?",
                cevap:
                    "Forklift yavaşça indirilir ve yük yeniden düzenlenir. Devrilme riski taşıyan bir kaldırma zorlanmaz; kısa vadede yavaşlık gibi görünse de bu adım hem ürün hem personel güvenliği için atlanmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Karton/plastik ambalaj ürünlerinin hacim/ağırlık oranı ve devrilme eğilimi, depo/lojistik sektöründe genel bilinen bir özelliktir. Bozüyük OSB'de ambalaj üretim tesislerinin bulunması genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Bozüyük Ambalaj Tesisinde Silo Dış Cephesi ve Çatı Üstü Boru Hattına Eklemli Platform",
        giris:
            "Ambalaj ve plastik üretim tesislerinin bina dışındaki yüksek noktaları — hammadde granül silosunun dış cephesi, çatı üzerinden geçen basınçlı hava veya soğutma suyu hattı, bina cephesindeki yükleme kapısı üstü tabela ya da çatı kenarındaki yağmur oluğu — makaslı platformun dikey erişiminden farklı bir geometri ister. Bu noktalara çoğu zaman düz bir zeminden dik değil, bir çevre engelini (silo gövdesi, cephe çıkıntısı, boru desteği) aşarak yatay uzanmak gerekir. Eklemli platform, kolunu hem yukarı hem yatay hareket ettirebildiği için bu tip dış cephe ve çatı üstü noktalara erişimde tercih edilir. Bu sayfa, silo dış cephesi ve çatı üstü boru hattı gibi bina dışı yüksek noktalara eklemli platformla nasıl erişildiğini anlatıyor; hat içi üretim ekipmanı montajı veya iç mekân tavan işleri bu sayfanın kapsamı dışındadır.",
        maddeler: [
            {
                baslik: "Silo dış cephesinde eklemli erişimin gerekliliği",
                metin:
                    "Granül silosunun dış cephesindeki bir kaplama, merdiven korkuluğu veya dolum ağzı çevresi bakımı, silonun dairesel gövdesi nedeniyle dik bir erişimle değil, kolun gövde etrafında yatay hareketiyle mümkün olur. Eklemli platform kolu, silo gövdesine güvenli mesafede tutularak çevresinde konumlandırılır; sepet gövdeye temas etmeden hedefe uzanır.",
            },
            {
                baslik: "Çatı üstü boru hattında engel aşma",
                metin:
                    "Basınçlı hava veya soğutma suyu hattı çatı üzerinde desteklerle taşınır ve bu destekler zaman zaman erişim yolunu keser. Eklemli platform kolu, desteğin üzerinden veya yanından dolaşarak hattaki arıza noktasına ulaşabilir; makaslı platformun düz dikey hareketi bu tip engelleri aşamaz.",
            },
            {
                baslik: "Cephe tabelası ve yükleme kapısı üstü işler",
                metin:
                    "Bina cephesindeki tabela değişimi veya yükleme kapısı üstü aydınlatma bakımı, kapı önündeki araç trafiği nedeniyle zeminden dik bir erişimi zorlaştırabilir. Eklemli platform, kapıdan biraz uzağa konumlandırılıp kolu hedefe uzatılarak, kapı önündeki trafiği tamamen kesmeden çalışmayı mümkün kılar.",
            },
            {
                baslik: "Çatı kenarı ve yağmur oluğu bakımı",
                metin:
                    "Çatı kenarındaki yağmur oluğu veya saçak bakımı, çatı yüzeyine çıkmadan kolun dışarıdan yatay uzanmasıyla yapılır; bu, çatı membranına yük bindirmeden çalışmayı sağlar. Kolun menzili yetmiyorsa çatıya çıkma seçeneği ayrıca ve farklı güvenlik önlemleriyle değerlendirilir.",
            },
            {
                baslik: "Dış sahada zemin ve rüzgâr kontrolü",
                metin:
                    "Bina dışındaki zemin OSB içinde genellikle beton olsa da, silo veya depo çevresinde çakıl ya da düzensiz yüzey bulunabilir. Sahaya varan ekip zemini kontrol eder, gerekirse destek ayağı altına plaka koyar. Rüzgâr hızı güvenli sınırın üzerindeyse, dış sahada yükseklikte çalışma ertelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bina dışı yüksek noktalarda erişim kararı",
                paragraflar: [
                    "Ambalaj/plastik tesisinin dışındaki yüksek noktalarda hangi geometri kararının verildiği aşağıdaki tabloda özetlenmiştir.",
                ],
                tablo: {
                    basliklar: ["Nokta", "Engel", "Erişim tipi", "Ön koşul"],
                    satirlar: [
                        ["Silo dış cephesi", "Dairesel gövde", "Kol yatay dolanır", "Gövdeye güvenli mesafe"],
                        ["Çatı üstü boru hattı", "Boru desteği", "Kol destek üzerinden aşar", "Destek konumu bilinir"],
                        ["Cephe tabelası/kapı üstü", "Araç trafiği", "Kapıdan uzak konumlanma", "Trafik geçici düzenlenir"],
                        ["Çatı kenarı/oluk", "Çatı membranı", "Dışarıdan yatay uzanma", "Membrana yük binmez"],
                    ],
                },
            },
            {
                baslik: "Silo gövdesine güvenli mesafe",
                paragraflar: [
                    "Eklemli platform kolu silo gövdesine çok yaklaştırıldığında hem gövde yüzeyine hem sepetin kendisine zarar verme riski taşır. Operatör, kol hareketleri sırasında gövdeyle arasındaki mesafeyi sürekli kontrol eder ve temas riski oluşan noktalarda kolu geri çeker.",
                    "Silonun dolum veya boşaltım hâlinde olup olmadığı çalışmadan önce tesisten öğrenilir; aktif dolum sırasında dış cephe çalışması yapılmaz, dolum tamamlanana kadar beklenir.",
                ],
            },
            {
                baslik: "Rüzgârlı havada dış sahada karar",
                paragraflar: [
                    "Dış sahada, özellikle silo gibi açık ve yüksek yapılar çevresinde rüzgâr etkisi kapalı hol içine göre daha belirgindir. Rüzgâr hızı güvenli sınırın üzerindeyse kol uzatma işlemi ertelenir; bu, platform operasyonlarında genel bir güvenlik kuralıdır.",
                    "Acil bir arıza (örneğin dolum ağzı arızası nedeniyle üretim durması) söz konusuysa, düşük rüzgâr penceresi beklenerek en kısa sürede müdahale planlanır; rüzgâr sınırının üzerinde zorlama yapılmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo dış cephesine neden makaslı değil eklemli platform kullanıyorsunuz?",
                cevap:
                    "Silonun dairesel gövdesi dik bir erişimi değil, kolun gövde etrafında yatay hareketini gerektirir. Makaslı platform yalnız düz dikey yükselir, gövde eğrisini takip edemez. Eklemli platformun kolu hem yukarı hem yatay hareket ettiği için gövdeye güvenli mesafede konumlanıp hedefe uzanabilir.",
            },
            {
                soru: "Silo dolum hâlindeyken dış cephe bakımı yapılabilir mi?",
                cevap:
                    "Hayır, aktif dolum veya boşaltım sırasında dış cephe çalışması yapılmaz. Silonun durumu çalışmadan önce tesisten öğrenilir ve işlem tamamlanana kadar beklenir; bu, hem güvenlik hem malzeme kaybını önlemek için gereklidir.",
            },
            {
                soru: "Çatı üstü boru hattındaki desteği aşarken çatı membranına zarar verir mi?",
                cevap:
                    "Hayır, kol çatı yüzeyine değil desteğin üzerinden veya yanından dolaşarak boruya uzanır; membrana yük bindirilmez. Çatıya fiziksel çıkış gerekiyorsa bu ayrı ve farklı güvenlik önlemleriyle (örneğin düşme koruması) değerlendirilir.",
            },
            {
                soru: "Yükleme kapısı önündeki araç trafiği çalışma sırasında tamamen durur mu?",
                cevap:
                    "Genellikle hayır. Platform kapıdan biraz uzağa konumlandırılıp kolu hedefe uzatıldığı için trafik tamamen kesilmez; ancak çalışma süresince kapı önünde geçici bir yavaşlama olabilir. Yoğun saatlerde çalışma mümkünse trafik dışı bir zamana planlanır.",
            },
            {
                soru: "Dış sahada rüzgârlı havada çalışma ne zaman ertelenir?",
                cevap:
                    "Rüzgâr hızı güvenli sınırın üzerine çıktığında kol uzatma işlemi ertelenir. Sahaya varan ekip rüzgâr durumunu değerlendirir; güvenli değilse durumu bildirir ve düşük rüzgâr penceresine planlar. Acil bir durumda da bu sınır zorlanmaz.",
            },
            {
                soru: "Silo çevresindeki zemin çakıllı, destek ayakları güvenli oturur mu?",
                cevap:
                    "Sahaya varan ekip zemini kontrol eder ve çakıllı veya düzensiz noktalarda destek ayağı altına yük dağıtım plakası koyar. Zemin gerçekten güvensizse daha sağlam bir konumlandırma noktası aranır; kontrol tamamlanmadan kol uzatılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformun kol geometrisiyle çevresel engel aşabilmesi makine sınıfının genel teknik özelliğidir. Bozüyük OSB'de plastik/ambalaj tesislerinde hammadde silosu bulunması genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Bozüyük Ambalaj Deposunda İç Mekân Tavan Tesisatı İçin Makaslı Platform",
        giris:
            "Ambalaj tesislerinin bitmiş ürün deposu, üretim holünden farklı bir iç mekân profili taşır: zemin düz betondur, raf sıraları belirli bir düzende dizilidir ve tavanda genellikle sprinkler hattı, aydınlatma armatürü ve duman tahliye sensörleri bulunur. Bu depolarda platform ihtiyacı çoğunlukla raf üstü aydınlatma değişimi, sprinkler başlığı kontrolü veya tavan sensörü bakımı gibi işlerden gelir. Makaslı platform, hedefin tam altına park edilebildiği ve geniş sepetiyle iki kişinin çalışmasına izin verdiği için bu tip düz aks işlerinde tercih edilir. Raf sıraları arasındaki koridor genişliği ve karton/plastik palet istiflerinin oluşturduğu geçici engeller, çalışmadan önce mutlaka kontrol edilir; depo boşken çalışmak mümkünse sevkiyat programına göre planlanır, dolu koridorlarda çalışma önce o koridorun geçici olarak boşaltılmasını gerektirir.",
        maddeler: [
            {
                baslik: "Raf üstü aydınlatma ve sprinkler hattı erişimi",
                metin:
                    "Depo tavanındaki aydınlatma armatürleri ve sprinkler hattı genellikle raf sıralarının üzerinde düz bir aks boyunca uzanır. Makaslı platform bu aksın altına park edilip yükseldiğinde hedefe doğrudan ulaşır. Sprinkler başlığına dokunmadan önce hattın aktif olup olmadığı tesisten teyit edilir.",
            },
            {
                baslik: "Raf koridorunda geçici palet engeli",
                metin:
                    "Ambalaj depolarında koridorlar zaman zaman geçici olarak bırakılmış paletlerle daralır. Makine koridora girmeden önce güzergâh gözle kontrol edilir; palet varsa depo personelinden kaldırılması istenir, dar geçitten manevra ile geçilmeye çalışılmaz.",
            },
            {
                baslik: "Duman tahliye sensörü ve yangın algılama bakımı",
                metin:
                    "Depo tavanındaki duman tahliye sensörleri, yangın algılama sistemiyle bağlantılı olduğu için bakım öncesi sistemin ilgili bölgesinin geçici olarak devre dışı bırakılması gerekebilir; bu, tesisin yangın güvenlik sorumlusu tarafından yapılır. Platform ekibi sistemi kendi başına devre dışı bırakmaz.",
            },
            {
                baslik: "Depo boşken ve doluyken çalışma farkı",
                metin:
                    "Depo boşken (örneğin sevkiyat sonrası düşük stok döneminde) çalışmak, koridor manevrasını kolaylaştırır. Depo doluyken çalışmak gerekiyorsa, ilgili koridor geçici olarak boşaltılır ve forklift trafiği o koridordan geçici olarak yönlendirilir; bu koordinasyon depo yönetimiyle önceden yapılır.",
            },
            {
                baslik: "Geniş sepette iki kişilik çalışma düzeni",
                metin:
                    "Makaslı platformun geniş sepeti, sprinkler ve aydınlatma işlerinde bir operatör ve bir teknisyenin birlikte çalışmasına izin verir. Sepet kapasitesi personel ve malzeme toplamına göre değerlendirilir; uzun boru parçası veya ağır armatür kutusu sepette taşınmaz, ayrı taşıma planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo tavan kalemine göre erişim planı",
                paragraflar: [
                    "Ambalaj deposundaki tavan kalemlerinin erişim planı aşağıdaki gibi ayrılır.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Konum", "Kısıt", "Plan"],
                    satirlar: [
                        ["Raf üstü aydınlatma", "Koridor aksı", "Geçici palet", "Koridor kontrolü sonrası"],
                        ["Sprinkler başlığı", "Tavan aksı", "Hat aktifliği", "Tesis teyidiyle"],
                        ["Duman tahliye sensörü", "Tavan merkezi", "Yangın sistemi bağlantısı", "Yetkili devre dışı bırakır"],
                        ["Raf arası kamera", "Koridor üstü", "Yaya trafiği", "Bariyerle"],
                    ],
                },
            },
            {
                baslik: "Koridor boşaltma koordinasyonu",
                paragraflar: [
                    "Dolu bir koridorda çalışmak gerektiğinde, önce depo yönetimiyle o koridorun hangi saatte geçici olarak boşaltılabileceği konuşulur. Forklift trafiği o süre boyunca alternatif bir güzergâha yönlendirilir.",
                    "Boşaltma mümkün değilse, çalışma depo boşken (örneğin vardiya dışı veya düşük stok döneminde) planlanır. Koridor dolu ve boşaltma da mümkün değilken çalışma zorlanmaz; başka bir zaman dilimi önerilir.",
                ],
            },
            {
                baslik: "Yangın algılama sistemiyle koordinasyon",
                paragraflar: [
                    "Duman tahliye sensörü veya sprinkler başlığı çevresindeki çalışmalarda, ilgili bölgenin yangın algılama sisteminden geçici olarak ayrılması gerekip gerekmediği tesisin yangın güvenlik sorumlusuyla netleştirilir. Bu karar ve uygulama platform ekibinin yetkisi dışındadır.",
                    "Sistem geçici olarak devre dışı bırakılmışsa, çalışma bitiminde yeniden devreye alındığı tesis tarafından doğrulanır. Platform ekibi yalnız erişim hizmetini tamamlar, sistemin teknik kabulünü yapmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sprinkler hattına dokunmadan önce ne kontrol ediyorsunuz?",
                cevap:
                    "Hattın o bölgesinin aktif olup olmadığını tesisten teyit ederiz. Aktifse ve müdahale hattı etkileyecekse, tesisin yangın güvenlik sorumlusu ilgili bölgeyi geçici olarak sistemden ayırır. Bu karar platform ekibinin yetkisinde değildir.",
            },
            {
                soru: "Koridor palet dolu ise makine nasıl giriyor?",
                cevap:
                    "Girmiyor; önce güzergâh gözle kontrol edilir, palet varsa depo personelinden kaldırılması istenir. Dar bir geçitten manevra ile geçmeye çalışmayız çünkü bu, hem palete hem makineye zarar verme riski taşır.",
            },
            {
                soru: "Depo doluyken de çalışabiliyor musunuz?",
                cevap:
                    "Evet ama ilgili koridorun geçici olarak boşaltılması ve forklift trafiğinin o süre için yönlendirilmesi gerekir. Bu koordinasyon depo yönetimiyle önceden yapılır; koordinasyon sağlanmadan dolu koridorda çalışma başlatılmaz.",
            },
            {
                soru: "Duman tahliye sensörünü platform ekibi kendisi devre dışı bırakabilir mi?",
                cevap:
                    "Hayır. Bu, tesisin yangın güvenlik sorumlusunun yetkisindedir. Platform ekibi yalnız erişim hizmetini sağlar; sistemin devre dışı bırakılması ve yeniden devreye alınması tesis tarafından yapılır ve doğrulanır.",
            },
            {
                soru: "Sepette iki kişi ve malzeme birlikte çalışabilir mi?",
                cevap:
                    "Evet, makaslı platformun geniş sepeti buna izin verir, ancak toplam ağırlık üretici kapasite sınırını aşamaz. Uzun boru veya ağır armatür kutusu sepette taşınmaz; bu tip malzemeler için ayrı taşıma planlanır.",
            },
            {
                soru: "Bu hizmet üretim holündeki hat üstü işleri de kapsıyor mu?",
                cevap:
                    "Hayır, bu sayfa yalnız bitmiş ürün deposundaki tavan kalemlerini anlatır. Üretim holündeki hat üstü dar erişim veya çelik konstrüksiyon montaj işleri farklı geometri ve güvenlik kuralları gerektirir; talep bunlardan biriyse ayrı kapsam hazırlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ambalaj tesislerinde bitmiş ürün deposunun tavan tesisatı (aydınlatma, sprinkler, duman tahliye) genel depo mimarisi bilgisidir. Bozüyük OSB'de ambalaj üretim tesislerinin bulunması genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Bozüyük'te Yeni Enjeksiyon Hattı Kurulumunda Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Bir ambalaj veya plastik enjeksiyon tesisi yeni bir üretim hattı eklediğinde, bu genellikle yalnız makinenin kendisini değil, hattın üstündeki çelik konstrüksiyonu da kapsar: kablo taşıyıcı köprü, aydınlatma rayı, havalandırma kanalı desteği ve bazen hattın üstünü kapatan hafif çelik çatı uzantısı. Bu montaj işleri mevcut üretim devam ederken yapılıyorsa, platformun konumlandırılması hem yeni inşaat hem de çevredeki aktif hatların güvenliğini aynı anda gözetmek zorundadır. Kaynak ve montaj işleri sırasında platform, hem yükseklik hem de kıvılcım kontrolü açısından standart bakım işinden farklı bir hazırlık ister. Bu sayfa, yeni hat kurulumu sırasında çelik konstrüksiyon montajına platformla nasıl destek verildiğini anlatıyor; mevcut hattaki bakım veya arıza müdahalesi bu sayfanın kapsamı dışındadır.",
        maddeler: [
            {
                baslik: "Yeni inşaat alanını aktif hattan ayırmak",
                metin:
                    "Yeni hat kurulumu genellikle mevcut üretim holünün bir bölümünde, aktif hatların yakınında yapılır. Montaj başlamadan önce inşaat alanı fiziksel bariyerle çevrilir; platform ve montaj personeli yalnız bu alan içinde çalışır. Bariyer dışına taşan bir kaynak kıvılcımı veya düşen parça riski varsa çalışma durdurulur.",
            },
            {
                baslik: "Kablo taşıyıcı köprü ve aydınlatma rayı montajı",
                metin:
                    "Yeni hattın üstündeki kablo taşıyıcı köprü ve aydınlatma rayı, genellikle önceden hazırlanmış parçaların yerinde birleştirilmesiyle kurulur. Platform, her parçayı montaj noktasına taşımak yerine montaj ekibinin elini serbest bırakacak şekilde sabit konumda tutulur; ağır parça taşıma ayrı vinç veya forklift ile yapılır.",
            },
            {
                baslik: "Kaynak işlerinde kıvılcım kontrolü",
                metin:
                    "Çelik konstrüksiyon montajında kaynak kaçınılmazdır. Kaynak sırasında altta ve çevrede yanıcı malzeme (ambalaj kartonu, plastik granül torbası) bulunmadığı doğrulanır, gerekirse geçici koruyucu örtü kullanılır. Sıcak iş izni, tesisin standart prosedürüne göre alınır; bu izin olmadan kaynak başlamaz.",
            },
            {
                baslik: "Havalandırma kanalı desteği ve tavan yükü",
                metin:
                    "Yeni havalandırma kanalı desteğinin mevcut çatı veya kolon yapısına bağlanması, tavan yük taşıma kapasitesinin önceden değerlendirilmesini gerektirir. Bu değerlendirme tesisin veya montaj yükleniciğinin statik hesabına dayanır; platform ekibi yalnız erişimi sağlar, yapısal kararı vermez.",
            },
            {
                baslik: "Montaj sonrası aktif hatla kesişim kontrolü",
                metin:
                    "Yeni konstrüksiyon tamamlandığında, komşu aktif hattın hareket alanıyla kesişip kesişmediği kontrol edilir — örneğin yeni kablo köprüsünün, mevcut hattaki kalıp değişim vinç rayının hareket alanına taştığı fark edilirse düzeltme yapılır. Bu kontrol, hat yeniden tam kapasiteyle çalışmaya başlamadan önce tamamlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yeni hat kurulumu kalemlerine göre platform kullanımı",
                paragraflar: [
                    "Yeni bir enjeksiyon veya ekstrüzyon hattı kurulumunda çelik konstrüksiyon kalemleri ve platform kullanım biçimi aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Ana risk", "Platform rolü", "Ek önlem"],
                    satirlar: [
                        ["Kablo taşıyıcı köprü", "Yüksekte montaj", "Sabit erişim, elleri serbest bırakma", "Ağır parça ayrı vinç"],
                        ["Aydınlatma rayı", "Elektrik bağlantısı", "Erişim + malzeme tutma", "Enerji kesikken"],
                        ["Kaynaklı bağlantı", "Kıvılcım", "Sabit platform, koruyucu örtü", "Sıcak iş izni"],
                        ["Havalandırma kanalı desteği", "Tavan yükü", "Erişim", "Statik hesap önceden"],
                    ],
                },
            },
            {
                baslik: "Aktif hat ile inşaat alanının fiziksel ayrımı",
                paragraflar: [
                    "Yeni hat kurulumu sırasında inşaat alanı, mevcut üretimden fiziksel bariyerle ayrılır. Bariyer, hem yayaların hem forklift trafiğinin inşaat alanına yanlışlıkla girmesini önler, hem de kaynak kıvılcımı veya düşen parçanın dışarı taşmasına karşı bir sınır oluşturur.",
                    "Bariyer dışına taşan bir risk (kıvılcım sıçraması, malzeme düşmesi) fark edildiğinde çalışma anında durdurulur ve bariyer güçlendirilir; bu kontrol yalnız gün başında değil, çalışma boyunca sürekli yapılır.",
                ],
            },
            {
                baslik: "Statik hesap ve yapısal onay süreci",
                paragraflar: [
                    "Yeni çelik konstrüksiyonun mevcut çatı veya kolon yapısına bağlanması, montaj yüklenicisinin veya tesisin kendi statik hesabına dayanır. Platform ekibi bu hesabı yapmaz, yalnız montaj personelinin erişimini sağlar.",
                    "Statik onay netleşmeden ağır parça montajı başlamaz; belirsiz bir yük taşıma kararı platform ekibi tarafından tahmin edilerek uygulanmaz. Onay gecikirse, montajın onay gerektirmeyen bölümleri (örneğin hafif kablo kanalı) öncelikli olarak tamamlanabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni hat kurulumu sırasında mevcut üretim durur mu?",
                cevap:
                    "Genellikle durmaz; inşaat alanı fiziksel bariyerle ayrılır ve komşu hatlar çalışmaya devam eder. Ancak bariyer dışına taşan bir risk (kıvılcım, düşen parça) oluşursa o anda ilgili bölüm durdurulur. Karar, riskin büyüklüğüne göre sahada anında verilir.",
            },
            {
                soru: "Kaynak işleri sırasında ambalaj malzemesi yakınında güvenlik nasıl sağlanıyor?",
                cevap:
                    "Kaynak öncesi altta ve çevrede yanıcı malzeme olmadığı doğrulanır; varsa uzaklaştırılır veya koruyucu örtüyle kapatılır. Sıcak iş izni tesisin standart prosedürüne göre alınmadan kaynak başlamaz. Bu, ambalaj/plastik tesislerinde standart bir önlemdir.",
            },
            {
                soru: "Havalandırma kanalı desteğinin tavana bağlanabileceğini kim onaylıyor?",
                cevap:
                    "Montaj yüklenicisi veya tesisin kendi statik hesabı. Platform ekibi bu kararı vermez, yalnız erişimi sağlar. Onay netleşmeden ağır parça montajı başlamaz; onay gecikirse hafif kalemler öncelikli tamamlanabilir.",
            },
            {
                soru: "Yeni kablo köprüsü mevcut hattın vinç rayına çok yakın çıkarsa ne oluyor?",
                cevap:
                    "Montaj tamamlandığında bu kesişim kontrol edilir. Vinç rayının hareket alanına taşan bir kısım varsa düzeltme yapılır; bu kontrol, hat tam kapasiteyle yeniden çalışmaya başlamadan önce tamamlanır ve atlanmaz.",
            },
            {
                soru: "Platform montaj sırasında ağır çelik parça taşır mı?",
                cevap:
                    "Hayır, platform montaj personelinin erişimini sağlar ve elini serbest bırakır; ağır parça taşıma ayrı bir vinç veya forklift ile yapılır. Platform sepetine ağır çelik parça yüklenmez, bu hem kapasite hem denge açısından uygun değildir.",
            },
            {
                soru: "Bu hizmet mevcut hattaki bir arızayı da kapsıyor mu?",
                cevap:
                    "Hayır, bu sayfa yalnız yeni hat kurulumu sırasındaki çelik konstrüksiyon montajını anlatır. Mevcut hattaki bakım veya arıza müdahalesi farklı bir kapsam ve farklı bir güvenlik hazırlığı gerektirir; talep bunlardan biriyse ayrı bir sayfa ve süreç geçerlidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yeni üretim hattı kurulumunda çelik konstrüksiyon montajı (kablo köprüsü, aydınlatma rayı, havalandırma desteği) genel sanayi inşaat pratiğidir. Sıcak iş izni ve statik onay süreci sektör standardı iş güvenliği ilkesidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Bozüyük Plastik Tesislerinde Hammadde Granül Silosuna Platform Erişimi",
        giris:
            "Enjeksiyon ve ekstrüzyon hattı besleyen hammadde granül siloları, tesisin en yüksek yapılarından biridir ve bakım ihtiyacı çoğunlukla dolum ağzı, seviye sensörü, hava filtresi veya silo üstü merdiven-korkuluk gibi noktalardan gelir. Bu silolar sürekli dolum-boşaltım döngüsünde çalıştığı için, platformla erişim öncesi silonun o an hangi durumda olduğunu (dolu, boşalıyor, bekleme) netleştirmek çalışmanın ilk adımıdır — aktif dolum sırasında silo üstüne yaklaşmak hem toz hem de düşme riski taşır. Silo gövdesinin dairesel yapısı ve genellikle bina dışında ya da yarı açık bir alanda bulunması, makine seçimini de etkiler: bazı noktalar dikey erişimle, bazıları kolun gövde etrafında yatay uzanmasıyla ulaşılabilir hâle gelir. Bu sayfa, hammadde granül silosuna platformla erişimde hangi hazırlığın yapıldığını ve dolum döngüsüyle çalışmanın nasıl uyumlaştırıldığını anlatıyor.",
        maddeler: [
            {
                baslik: "Dolum döngüsüyle çalışmayı uyumlaştırmak",
                metin:
                    "Silo dolum veya boşaltım hâlindeyken üst noktalara yaklaşılmaz; toz salınımı görüşü ve tutunmayı etkileyebilir, ayrıca dolum ekipmanının ani hareketi risk taşır. Çalışma öncesi silonun o anki durumu tesisten teyit edilir; dolum sürüyorsa tamamlanana kadar beklenir ya da bir sonraki bekleme penceresine planlanır.",
            },
            {
                baslik: "Seviye sensörü ve dolum ağzı bakımı",
                metin:
                    "Silo üstündeki seviye sensörü veya dolum ağzı arızası, granül akışını doğrudan etkileyebileceği için genellikle önceliklidir. Platform, silonun tepesindeki servis platformuna veya çevresine güvenli mesafede konumlandırılır; sensöre erişim, silo boşken ya da düşük seviyedeyken tercih edilir.",
            },
            {
                baslik: "Hava filtresi ve toz toplama ünitesi erişimi",
                metin:
                    "Silonun üstündeki hava filtresi, granül dolumu sırasında oluşan tozu tutar ve düzenli temizlik ister. Filtre değişimi veya temizliği sırasında toz maskesi kullanılır; filtre ünitesi genellikle silo gövdesinin yan tarafında olduğu için erişim, kolun gövde etrafında yatay uzanmasıyla sağlanır.",
            },
            {
                baslik: "Silo merdiveni ve korkuluk bakımı",
                metin:
                    "Silo dışındaki sabit merdiven ve korkulukların periyodik kontrolü, dış cepheye eklemli platformla erişilerek yapılır. Merdiven kullanımdaysa (personel silo üstünde işlem yapıyorsa) platform çalışması ertelenir; iki farklı erişim yönteminin aynı anda aynı bölgede kullanılması karışıklık yaratır.",
            },
            {
                baslik: "Açık veya yarı açık sahada zemin ve hava koşulu",
                metin:
                    "Silo genellikle bina dışında veya yarı açık bir alanda bulunur; zemin OSB içinde çoğunlukla beton olsa da silo tabanı çevresinde çakıl veya drenaj kanalı bulunabilir. Sahaya varan ekip zemini kontrol eder, rüzgâr hızı güvenli sınırın üzerindeyse dış saha çalışması ertelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo durumuna göre çalışma kararı",
                paragraflar: [
                    "Granül silosuna erişimde silonun o anki durumu, çalışmanın yapılıp yapılmayacağını doğrudan belirler.",
                ],
                tablo: {
                    basliklar: ["Silo durumu", "Toz/hareket riski", "Karar"],
                    satirlar: [
                        ["Aktif dolum", "Yüksek", "Çalışma ertelenir"],
                        ["Aktif boşaltım (besleme)", "Orta", "Sınırlı erişim, dikkatli"],
                        ["Bekleme (dolu, durgun)", "Düşük", "Standart çalışma"],
                        ["Boş/düşük seviye", "En düşük", "Sensör/ağız işleri için tercih edilir"],
                    ],
                },
            },
            {
                baslik: "Dış cephe ile silo üstü erişim farkı",
                paragraflar: [
                    "Silo üstündeki (dolum ağzı, seviye sensörü) noktalara genellikle dikey erişimle, dış cephedeki (hava filtresi, merdiven-korkuluk) noktalara ise kolun yatay uzanmasıyla ulaşılır. Hangi makine sınıfının kullanılacağı, hedefin silonun tepesinde mi yoksa yan cephesinde mi olduğuna göre belirlenir.",
                    "Bazı işlerde her iki erişim tipi de gerekebilir (örneğin hem tepe hem yan cephe kontrolü); bu durumda iş iki ayrı aşamaya bölünür, tek bir makineyle her iki geometriyi zorlamak yerine uygun sınıf her aşamada ayrı değerlendirilir.",
                ],
            },
            {
                baslik: "Toz maskesi ve kişisel koruma",
                paragraflar: [
                    "Hava filtresi veya dolum ağzı çevresinde çalışırken toz maskesi standart kişisel koruma ekipmanıdır. Granül tozu solunum yolunu tahriş edebileceği için, çalışma öncesi maske ve gerekiyorsa gözlük kontrolü yapılır.",
                    "Toz yoğunluğu beklenenden fazlaysa (örneğin filtre uzun süre değişmemişse) çalışma kısa süreli molalarla bölünür; bu, operatör konforu değil solunum güvenliği için yapılan bir uygulamadır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo dolum hâlindeyken üst noktaya çıkabilir miyiz?",
                cevap:
                    "Hayır, aktif dolum sırasında silo üstüne yaklaşılmaz. Toz salınımı görüşü ve tutunmayı etkileyebilir, dolum ekipmanının hareketi ek risk taşır. Çalışma öncesi silonun durumu tesisten teyit edilir; dolum sürüyorsa tamamlanana kadar beklenir.",
            },
            {
                soru: "Seviye sensörü arızası acil mi değerlendiriliyor?",
                cevap:
                    "Genellikle önceliklidir çünkü granül akışını etkileyebilir. Ancak erişim yine de silonun o anki durumuna bağlıdır; silo boşken veya düşük seviyedeyken erişim daha güvenli ve hızlıdır, mümkünse bu pencereye planlanır.",
            },
            {
                soru: "Hava filtresi değişirken toz maskesi zorunlu mu?",
                cevap:
                    "Evet, standart kişisel koruma ekipmanıdır. Granül tozu solunum yolunu tahriş edebilir. Toz yoğunluğu beklenenden fazlaysa çalışma kısa molalarla bölünür; bu, solunum güvenliği için yapılan bir uygulamadır.",
            },
            {
                soru: "Silo merdiveninde personel varken platform aynı bölgede çalışabilir mi?",
                cevap:
                    "Hayır, iki farklı erişim yönteminin aynı anda aynı bölgede kullanılması karışıklık ve risk yaratır. Merdiven kullanımdaysa platform çalışması ertelenir; personel işini tamamladıktan sonra platform devreye girer.",
            },
            {
                soru: "Silo çevresindeki çakıllı zeminde makine güvenli duruyor mu?",
                cevap:
                    "Sahaya varan ekip zemini kontrol eder ve gerekirse destek ayağı altına yük dağıtım plakası koyar. Zemin güvensizse daha sağlam bir konumlandırma noktası aranır; bu kontrol tamamlanmadan çalışma başlamaz.",
            },
            {
                soru: "Hem silo tepesi hem yan cephesi kontrol edilecekse tek makine yeterli mi?",
                cevap:
                    "Genellikle değil. Tepe noktaları dikey erişim, yan cephe noktaları kolun yatay uzanması ister; bu iki geometri farklı makine sınıfı gerektirebilir. Bu durumda iş iki aşamaya bölünüp her aşamada uygun sınıf ayrıca değerlendirilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Plastik enjeksiyon/ekstrüzyon tesislerinde granül hammadde silosunun varlığı ve dolum-boşaltım döngüsü sektör geneli bilinen bir özelliktir. Bozüyük OSB'de bu tip tesislerin bulunması genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Bozüyük Enjeksiyon Hattında Elektrik Pano ve Hat Üstü Aydınlatma Bakım Platformu",
        giris:
            "Enjeksiyon ve ekstrüzyon hatlarının bulunduğu üretim hollerinde, tavan yüksekliğindeki aydınlatma armatürleri kadar hat üzerine kurulu enerji dağıtım hattı, kablo taşıyıcı köprü ve bazı makinelerin üst pano bağlantıları da düzenli bakım ister. Bu iş, standart bir depo aydınlatma değişiminden farklıdır çünkü çalışma noktası genellikle enerjili hatların yakınında ya da üzerindedir; bu yüzden her işten önce ilgili devrenin durumu ve enerjisiz hâle getirilip getirilmediği netleştirilir. Bozüyük OSB'deki plastik üretim tesislerinde bu tip işler genellikle planlı bakım takviminde yer alır, ancak aydınlatma arızası gibi acil çağrılar da olur. Bu sayfa, hat üstü enerji ve aydınlatma bakımına platformla nasıl yaklaşıldığını, hangi elektrik güvenlik adımlarının atlanmadığını anlatıyor.",
        maddeler: [
            {
                baslik: "Enerjili hat yakınında çalışma öncesi teyit",
                metin:
                    "Hat üzerindeki enerji dağıtım kablosuna veya panosuna yakın bir noktada çalışılacaksa, ilgili devrenin enerjisiz hâle getirilip getirilmediği tesisin elektrik yetkilisinden teyit alınır. Bu teyit yazılı veya kayıtlı bir izinle netleştirilir; sözlü onayla enerjili hat yakınına yaklaşılmaz.",
            },
            {
                baslik: "Hat üstü aydınlatma armatürü değişimi",
                metin:
                    "Üretim holündeki aydınlatma armatürleri genellikle hat boyunca düz bir aksta sıralanır. Makaslı platform bu aksın altına park edilerek armatüre ulaşır; değişim sırasında armatürün beslendiği devre kapatılır, armatür değişip test edilmeden devre yeniden açılmaz.",
            },
            {
                baslik: "Kablo taşıyıcı köprü üzerinde görsel kontrol",
                metin:
                    "Hat üstündeki kablo taşıyıcı köprünün periyodik kontrolünde kablo izolasyonu, bağlantı noktaları ve taşıyıcı sabitlemesi gözle incelenir. Görünür bir hasar (kesik izolasyon, gevşek sabitleme) tespit edilirse, o bölüm elektrik yetkilisine bildirilir; platform ekibi kabloya doğrudan müdahale etmez.",
            },
            {
                baslik: "Üst pano bağlantılarında ısı taraması",
                metin:
                    "Bazı enjeksiyon makinelerinin üst panoları, aşırı ısınma riskini erken tespit için termal kamera ile periyodik olarak taranır. Bu tarama sırasında pano kapağı açılmaz; sadece dışarıdan görüntü alınır. Anormal bir sıcaklık tespit edilirse, detaylı inceleme tesisin elektrik ekibi tarafından yapılır.",
            },
            {
                baslik: "Acil aydınlatma arızasında hızlı müdahale",
                metin:
                    "Bir hat bölümünde aydınlatma tamamen kesilirse, bu üretim güvenliği açısından hızlı müdahale gerektirir. Bu tip çağrılarda öncelik verilir; sahaya varan ekip önce arızalı devreyi izole eder, ardından platformla armatüre erişip değişimi tamamlar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji-aydınlatma kalemlerine göre güvenlik adımı",
                paragraflar: [
                    "Hat üstü enerji ve aydınlatma kalemlerinde izlenen güvenlik adımları aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Risk", "Ön koşul", "Platform rolü"],
                    satirlar: [
                        ["Aydınlatma armatürü", "Elektrik çarpması", "Devre kapatılır", "Erişim + değişim"],
                        ["Kablo taşıyıcı köprü", "İzolasyon hasarı", "Görsel kontrol yeterli", "Erişim, müdahale yok"],
                        ["Üst pano ısı taraması", "Aşırı ısınma", "Kapak açılmaz", "Dışarıdan tarama"],
                        ["Enerji dağıtım hattı", "Yüksek voltaj", "Yazılı izin", "Elektrik yetkilisiyle birlikte"],
                    ],
                },
            },
            {
                baslik: "Yazılı izin olmadan enerjili hatta yaklaşılmaz",
                paragraflar: [
                    "Hat üstü enerji dağıtım kablosuna veya panosuna yakın çalışmalarda, ilgili devrenin enerjisiz hâle getirildiğine dair yazılı veya kayıtlı bir izin alınmadan çalışmaya başlanmaz. Bu izin tesisin elektrik yetkilisi tarafından verilir ve iş kartında belgelenir.",
                    "İzin alınamıyorsa veya devrenin durumu belirsizse, çalışma o devre netleşene kadar ertelenir; platform ekibi enerji durumunu kendi başına tahmin ederek çalışmaz.",
                ],
            },
            {
                baslik: "Acil aydınlatma çağrısında öncelik sırası",
                paragraflar: [
                    "Aydınlatması tamamen kesilen bir hat bölümü, üretim güvenliği açısından risk taşıdığı için öncelikli değerlendirilir. Sahaya varan ekip önce arızalı devreyi izole eder, ardından platformla erişip değişimi tamamlar.",
                    "Birden fazla acil çağrı aynı anda gelirse, öncelik hâlâ çalışan personel sayısı ve güvenlik riskine göre belirlenir; sıralama tesis yetkilisiyle birlikte netleştirilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aydınlatma armatürünü değiştirirken devre neden kapatılıyor?",
                cevap:
                    "Elektrik çarpması riskini ortadan kaldırmak için. Devre kapatılıp teyit alınmadan armatüre dokunulmaz. Değişim tamamlandıktan ve test edildikten sonra devre yeniden açılır; bu sıra hiçbir koşulda değiştirilmez.",
            },
            {
                soru: "Kablo taşıyıcı köprüde hasar görürseniz kendiniz mi onarıyorsunuz?",
                cevap:
                    "Hayır, platform ekibi kabloya doğrudan müdahale etmez. Görünür bir hasar tespit edilirse, konum ve durum tesisin elektrik yetkilisine bildirilir; onarım o ekip tarafından yapılır. Platform ekibinin görevi erişim ve tespittir.",
            },
            {
                soru: "Termal kamera taraması sırasında pano kapağı açılıyor mu?",
                cevap:
                    "Hayır, tarama dışarıdan görüntü alınarak yapılır, kapak açılmaz. Anormal bir sıcaklık tespit edilirse, detaylı inceleme ve gerekli müdahale tesisin elektrik ekibi tarafından ayrıca planlanır.",
            },
            {
                soru: "Enerji dağıtım hattı yakınında çalışmak için yazılı izin şart mı?",
                cevap:
                    "Evet. İlgili devrenin enerjisiz hâle getirildiğine dair yazılı veya kayıtlı izin alınmadan enerjili hat yakınına yaklaşılmaz. Sözlü onay yeterli kabul edilmez; bu izin iş kartında belgelenir.",
            },
            {
                soru: "Aydınlatma tamamen kesilirse ne kadar sürede müdahale ediyorsunuz?",
                cevap:
                    "Bu çağrılara öncelik veririz çünkü üretim güvenliğini doğrudan etkiler. Sahaya varan ekip önce arızalı devreyi izole eder, ardından platformla erişip değişimi tamamlar; süre, devrenin izolasyon durumuna göre değişebilir.",
            },
            {
                soru: "Birden fazla acil aydınlatma çağrısı aynı anda gelirse sıralama nasıl yapılıyor?",
                cevap:
                    "Öncelik, çalışan personel sayısı ve güvenlik riskine göre belirlenir; bu sıralama tesis yetkilisiyle birlikte netleştirilir. Rastgele veya çağrı sırasına göre değil, risk değerlendirmesine göre karar verilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerjili hat yakınında yazılı izin ve devre kapatma pratiği elektrik iş güvenliğinin genel ilkesidir. Bozüyük OSB'de plastik enjeksiyon/ekstrüzyon üretiminin varlığı genel bölgesel bilgidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Bozüyük Küçük Ambalaj Atölyelerinde Operatörlü Platform Kiralama",
        giris:
            "Bozüyük OSB'deki büyük ölçekli enjeksiyon ve ekstrüzyon tesislerinin yanı sıra, ilçede ambalaj ve plastik parça üreten daha küçük ölçekli atölyeler de bulunur. Bu atölyelerin platform ihtiyacı genellikle yılda birkaç kez ortaya çıkan tek seferlik bir iştir — bir tavan aydınlatması değişimi, bir çatı bakımı ya da yeni bir asma tesisat hattı kurulumu. Bu profildeki işletmeler çoğunlukla kendi bünyesinde sertifikalı platform operatörü bulundurmaz; bu yüzden operatörlü kiralama, atölye sahibinin ayrı bir eğitim veya belge süreciyle uğraşmasına gerek kalmadan en hızlı çözümü sunar. Bu sayfa, küçük ölçekli ambalaj/plastik atölyelerinde operatörlü kiralamanın nasıl işlediğini, hangi işlerde tercih edildiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Tek seferlik işte operatörlü kiralamanın avantajı",
                metin:
                    "Yılda birkaç kez ortaya çıkan bir bakım işi için atölyenin kendi personelini platform kullanımı konusunda eğitip belgelendirmesi genellikle ekonomik değildir. Operatörlü kiralamada makine, eğitimli bir operatörle birlikte gelir; atölye sahibi yalnız işin ne olduğunu ve nerede yapılacağını tarif eder.",
            },
            {
                baslik: "Küçük atölye zemininde makine seçimi",
                metin:
                    "Küçük ölçekli atölyelerin zemin alanı genellikle sınırlıdır; kapı genişliği ve iç mekân dönüş alanı standart büyük makinelere göre daha dardır. Operatör, atölyeye varmadan önce telefonda alınan ölçülere göre uygun kompakt makine ile gelir; sahada beklenmedik bir dar geçitle karşılaşılırsa alternatif bir yaklaşım (parçalı taşıma, farklı giriş) değerlendirilir.",
            },
            {
                baslik: "Yeni asma tesisat kurulumunda tek seferlik erişim",
                metin:
                    "Küçük bir atölyenin yeni bir tesisat hattı (aydınlatma, havalandırma) kurması, genişleme ya da yenileme döneminde bir kereye mahsus bir platform ihtiyacı doğurur. Bu işlerde operatörlü kiralama, kurulum süresi boyunca (genellikle bir-iki gün) makinenin sahada kalmasıyla planlanır.",
            },
            {
                baslik: "Belgelendirme ve sorumluluk netliği",
                metin:
                    "Operatörlü kiralamada makinenin kullanımı ve iş güvenliği sorumluluğu operatöre aittir; atölye sahibi yalnız çalışma alanını ve erişilecek hedefi tarif eder. Bu, küçük işletmelerin kendi personelini platform sertifikasyonuyla uğraştırmadan işi tamamlamasını sağlar.",
            },
            {
                baslik: "Kısa süreli işlerde nakliye ve zamanlama",
                metin:
                    "Tek seferlik küçük işlerde nakliye maliyeti işin toplam bedelinin önemli bir parçası olabilir; bu yüzden mümkünse aynı gün Bozüyük'teki başka bir küçük işle veya planlı bir sevkiyatla güzergâh birleştirilir. Acil olmayan işlerde birkaç günlük tarih esnekliği bu birleştirmeyi kolaylaştırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama arasındaki fark",
                paragraflar: [
                    "Küçük ambalaj atölyelerinde hangi kiralama tipinin uygun olduğu aşağıdaki gibi değerlendirilir.",
                ],
                tablo: {
                    basliklar: ["Durum", "Operatörsüz", "Operatörlü"],
                    satirlar: [
                        ["Atölyede sertifikalı personel var", "Uygun", "Gerekmeyebilir"],
                        ["Tek seferlik iş, personel yok", "Ek eğitim gerekir", "Doğrudan uygun"],
                        ["Kısa süreli (1-2 gün) kurulum", "Ekonomik olmayabilir", "Pratik çözüm"],
                        ["Dar/bilinmeyen zemin koşulu", "Risk taşır", "Operatör kararını sahada verir"],
                    ],
                },
            },
            {
                baslik: "Telefonda ön ölçüm ve doğru makine seçimi",
                paragraflar: [
                    "Küçük atölyeler için operatörlü kiralama talep edildiğinde, telefonda kapı genişliği, tavan yüksekliği ve zemin tipi (beton, düzensiz) sorulur. Bu bilgiler, hangi kompakt makinenin gönderileceğini belirler.",
                    "Telefonda alınan ölçüler sahada doğrulanamazsa (örneğin atölye sahibinin tam ölçüsü yoksa), operatör sahaya varışta önce hızlı bir keşif yapar; makine bu keşfe göre içeri alınır veya alternatif bir yaklaşım önerilir.",
                ],
            },
            {
                baslik: "Kısa işlerde güzergâh birleştirme",
                paragraflar: [
                    "Tek seferlik küçük bir işin nakliye maliyetini düşürmek için, mümkünse aynı gün veya hafta içinde Bozüyük'teki başka bir talep ya da planlı bir sevkiyatla güzergâh birleştirilir. Bu, atölye sahibinden birkaç günlük tarih esnekliği ister.",
                    "Acil bir durumsa (örneğin çökme riski taşıyan bir tavan hasarı) bu birleştirme yapılmaz, makine doğrudan ve en kısa sürede yönlendirilir; öncelik her zaman güvenlik riskine göre belirlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde platform kullanacak sertifikalı personel yok, operatörlü kiralama nasıl işliyor?",
                cevap:
                    "Makine, eğitimli bir operatörle birlikte gelir; siz yalnız işin ne olduğunu ve nerede yapılacağını tarif edersiniz. Makinenin kullanımı ve iş güvenliği sorumluluğu operatöre aittir, atölyenizin ayrı bir belge süreciyle uğraşmasına gerek kalmaz.",
            },
            {
                soru: "Atölyemizin kapısı dar, buna göre makine seçebiliyor musunuz?",
                cevap:
                    "Evet, telefonda kapı genişliği ve iç mekân dönüş alanını sorup buna uygun kompakt makine ile geliyoruz. Sahada beklenmedik bir dar geçitle karşılaşılırsa, operatör alternatif bir yaklaşım (parçalı taşıma, farklı giriş) değerlendirir.",
            },
            {
                soru: "Yeni tesisat kurulumu birkaç gün sürecek, makine o süre boyunca sahada kalabiliyor mu?",
                cevap:
                    "Evet, kurulum süresine göre (genellikle bir-iki gün) makine sahada kalacak şekilde planlanabilir. Bu süre teklif aşamasında netleştirilir; işin uzaması durumunda süre birlikte yeniden değerlendirilir.",
            },
            {
                soru: "Operatörlü kiralamada iş güvenliğinden kim sorumlu?",
                cevap:
                    "Makinenin kullanımı ve iş güvenliği sorumluluğu operatöre aittir. Atölye sahibi çalışma alanını ve erişilecek hedefi tarif eder, sahadaki güvenlik kararlarını (zemin uygunluğu, konumlandırma) operatör verir.",
            },
            {
                soru: "Tek seferlik küçük bir iş için nakliye maliyeti çok mu yüksek oluyor?",
                cevap:
                    "Mümkünse aynı gün veya hafta içindeki başka bir talep ya da planlı sevkiyatla güzergâhı birleştirerek maliyeti düşürüyoruz. Bunun için birkaç günlük tarih esnekliği yeterli; acil bir işte bu birleştirme yapılmaz, makine doğrudan yönlendirilir.",
            },
            {
                soru: "Telefonda verdiğim ölçüler yanlış çıkarsa ne oluyor?",
                cevap:
                    "Operatör sahaya varışta önce hızlı bir keşif yapar. Ölçüler gerçekten uyuşmuyorsa, makine içeri alınamayabilir; bu durumda alternatif bir yaklaşım (farklı giriş, parçalı taşıma) önerilir veya farklı bir makine sınıfı planlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bozüyük OSB'de büyük tesislerin yanı sıra küçük ölçekli ambalaj/plastik atölyelerinin bulunması genel bölgesel bilgidir. Operatörlü kiralamanın sertifikasyon yükünü ortadan kaldırması genel sektör pratiğidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Bozüyük OSB'deki Ambalaj Tedarikçi Ağında Çok Noktalı Rota Bakım Platformu",
        giris:
            "Bozüyük OSB'de birden fazla ambalaj ve plastik üretim tesisi, aynı bölgede yakın konumlarda faaliyet gösterir — bir enjeksiyon tesisi, onun karton ambalaj tedarikçisi ve bir başka plastik parça üreticisi genellikle birbirine birkaç kilometre mesafededir. Bu yakınlık, düzenli bakım ihtiyacı olan birden fazla tesisi tek bir rota içinde, aynı gün ya da hafta içinde ziyaret etmeyi mantıklı kılar. Çok noktalı rota bakımı, her tesisteki işi ayrı bir çağrı gibi değil, önceden planlanmış bir güzergâhın durakları gibi ele alır; bu hem nakliye maliyetini düşürür hem de her tesisin bakım takvimini öngörülebilir hâle getirir. Bu sayfa, birden fazla ambalaj/plastik tesisini kapsayan rota bazlı bakımın nasıl planlandığını anlatıyor.",
        maddeler: [
            {
                baslik: "Rota planlamasında tesis sırasının belirlenmesi",
                metin:
                    "Bir günlük rotada hangi tesisin önce ziyaret edileceği, coğrafi yakınlık kadar her tesisin vardiya saatine ve işin aciliyetine göre belirlenir. Acil bir arıza bildiren tesis, rotanın önceliğini değiştirebilir; bu durumda diğer duraklar bir sonraki güne kayabilir.",
            },
            {
                baslik: "Ortak makine parkının duraklar arası taşınması",
                metin:
                    "Rotadaki tesislerin ihtiyacı benzer sınıfta bir makineyle (örneğin akülü makaslı) karşılanabiliyorsa, aynı makine bir tesisten diğerine taşınarak kullanılır. İhtiyaç farklı sınıflarda ise (bir tesiste iç mekân, diğerinde dış cephe işi), her durak için ayrı makine planlanır ve rota buna göre düzenlenir.",
            },
            {
                baslik: "Her tesiste kısa güvenlik oryantasyonu",
                metin:
                    "Rotadaki her tesis kendi giriş prosedürüne, acil durdurma noktalarına ve o gün aktif olan hat bölümlerine sahiptir. Operatör her durakta kısa bir oryantasyon alır; bu, önceki tesisten gelen alışkanlıkla yanlış bir varsayımda bulunmayı önler.",
            },
            {
                baslik: "Bakım takviminin öngörülebilir hâle gelmesi",
                metin:
                    "Rota bazlı bakımda her tesis, kendi bakım kaleminin yaklaşık hangi gün veya haftada geleceğini önceden bilir. Bu, tesislerin kendi üretim planlamasını buna göre ayarlamasını (örneğin bakım gününde ilgili hattı hafif kapasitede çalıştırmasını) mümkün kılar.",
            },
            {
                baslik: "Rota dışı acil çağrının rotayı bozması",
                metin:
                    "Planlı rota devam ederken bir başka tesisten acil bir çağrı gelirse, bu çağrı güvenlik riski taşıyorsa rotanın önüne alınır. Rotadaki diğer tesislere bu değişiklik önceden bildirilir; bakım günü kaymışsa yeni tarih netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota planlamasında karar noktaları",
                paragraflar: [
                    "Birden fazla ambalaj/plastik tesisini kapsayan bir rotanın planlanmasında aşağıdaki unsurlar değerlendirilir.",
                ],
                tablo: {
                    basliklar: ["Unsur", "Etkisi", "Karar"],
                    satirlar: [
                        ["Coğrafi yakınlık", "Nakliye süresi", "Yakın tesisler aynı güne toplanır"],
                        ["Vardiya saatleri", "Erişim penceresi", "Rota sırası buna göre ayarlanır"],
                        ["Makine sınıfı ihtiyacı", "Ekipman taşıma", "Benzer ihtiyaç aynı makineyle"],
                        ["Acil çağrı", "Öncelik", "Rota anlık olarak yeniden sıralanır"],
                    ],
                },
            },
            {
                baslik: "Acil çağrının rotayı bozması ve telafisi",
                paragraflar: [
                    "Rota dışından gelen acil bir çağrı, güvenlik riski taşıyorsa mevcut rotanın önüne alınır. Bu, o gün rotada olan diğer tesislerin bakımını erteleyebilir; bu tesislere durum ve yeni tarih mümkün olan en kısa sürede bildirilir.",
                    "Erteleme sık tekrarlanıyorsa, rotanın kendisi gözden geçirilir — belki daha esnek bir gün ayrılır ya da acil çağrı sıklığı yüksek olan tesis için ayrı bir öncelik penceresi tanımlanır.",
                ],
            },
            {
                baslik: "Tesisler arası ortak makine kullanımının sınırı",
                paragraflar: [
                    "Aynı makinenin birden fazla tesiste kullanılması, ihtiyaçların benzer sınıfta olmasına bağlıdır. Bir tesiste iç mekân makaslı, diğerinde dış cephe eklemli platform gerekiyorsa, tek makineyle her iki işi de zorlamak yerine iki ayrı makine planlanır.",
                    "Bu ayrım, tek makineyle çözmeye çalışmaktan daha güvenli ve genellikle daha öngörülebilirdir; rota planlaması bu ayrımı baştan hesaba katar, sahada doğaçlama bir çözüm aranmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Rotadaki tesislerin sırası neye göre belirleniyor?",
                cevap:
                    "Coğrafi yakınlık, her tesisin vardiya saati ve işin aciliyeti birlikte değerlendirilir. Acil bir arıza bildiren tesis rotanın önceliğini değiştirebilir; bu durumda diğer duraklar bir sonraki güne kayabilir.",
            },
            {
                soru: "Aynı makine birden fazla tesiste kullanılabiliyor mu?",
                cevap:
                    "İhtiyaçlar benzer sınıftaysa (örneğin hepsinde akülü makaslı yeterliyse) evet. Farklı sınıflar gerekiyorsa (iç mekân ve dış cephe gibi) her durak için ayrı makine planlanır; tek makineyle her ihtiyacı karşılamaya zorlanmaz.",
            },
            {
                soru: "Her tesiste yeniden güvenlik oryantasyonu almak zaman kaybı yaratmıyor mu?",
                cevap:
                    "Kısa sürer ama atlanmaz. Her tesisin giriş prosedürü, acil durdurma noktaları ve o gün aktif hat bölümleri farklıdır; önceki tesisten gelen alışkanlıkla yanlış bir varsayımda bulunmak, kısa oryantasyondan çok daha büyük bir risk yaratır.",
            },
            {
                soru: "Rota dışından acil çağrı gelirse planlı tesisler ne olur?",
                cevap:
                    "Acil çağrı güvenlik riski taşıyorsa rotanın önüne alınır ve o gün rotada olan diğer tesislerin bakımı ertelenebilir. Bu tesislere durum ve yeni tarih mümkün olan en kısa sürede bildirilir; belirsiz bırakılmaz.",
            },
            {
                soru: "Bakım takvimi önceden bildirilince üretim planımızı buna göre ayarlayabilir miyiz?",
                cevap:
                    "Evet, rota bazlı bakımın amaçlarından biri de budur. Kendi bakım kaleminizin yaklaşık hangi gün geleceğini bilerek, o gün ilgili hattı hafif kapasitede çalıştırmak gibi kendi planlamanızı yapabilirsiniz.",
            },
            {
                soru: "Erteleme sık tekrarlanırsa ne yapıyorsunuz?",
                cevap:
                    "Rotanın kendisini gözden geçiririz — daha esnek bir gün ayırmak ya da acil çağrı sıklığı yüksek olan tesis için ayrı bir öncelik penceresi tanımlamak gibi. Amaç, sürekli erteleme yerine öngörülebilir bir düzen kurmaktır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Bozüyük OSB'de birden fazla ambalaj/plastik üretim tesisinin yakın konumda bulunması genel bölgesel bilgidir. Rota bazlı bakım planlaması firma saha pratiğidir. Tesis adı, mesafe ve rakam verilmemiştir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Bozüyük'te Yeni Ambalaj Tesisi İnşaat Sahasında Zor Zemin Platform Kiralama",
        giris:
            "Bir ambalaj veya plastik üretim tesisi genişlerken, yeni bina inşaatının veya dış saha malzeme depolama alanının zemini, mevcut üretim holünün düz betonundan çok farklıdır. İnşaat sahasında zemin genellikle sıkıştırılmış toprak, moloz dolgu ya da henüz betonlanmamış bir yüzeydir; bu, standart platformun destek ayaklarının güvenilir biçimde oturmasını zorlaştırır. Yağış sonrası yumuşayan toprak, gizli çukurlar ve düzensiz eğim, makinenin devrilme riskini artıran unsurlardır. Bu tip sahalarda platform kiralama, geometri sorusundan önce zemin sorusuyla başlar: zemin taşıma kapasitesi yeterli mi, destek plakası gerekiyor mu, hava koşulu çalışmaya uygun mu. Bu sayfa, yeni tesis inşaatı ya da dış saha genişletme çalışmalarında zor zemin koşullarında platformun nasıl konumlandırıldığını anlatıyor.",
        maddeler: [
            {
                baslik: "İnşaat sahasında zemin taşıma kapasitesi kontrolü",
                metin:
                    "Sıkıştırılmış toprak veya moloz dolgu zeminin görünüşte sağlam olması, altta yumuşak veya boşluklu bir yapı olmadığı anlamına gelmez. Sahaya varan ekip zemini gözle ve elle kontrol eder, şüpheli bir noktada destek ayağı altına yük dağıtım plakası kullanır; bu kontrol atlanmadan makine konumlandırılmaz.",
            },
            {
                baslik: "Yağış sonrası zemin yumuşaması",
                metin:
                    "Yağmur sonrası inşaat sahasındaki toprak zemin yumuşayabilir ve destek ayaklarının batma riskini artırır. Yağış sonrası çalışma öncesi zemin durumu yeniden değerlendirilir; zemin gerçekten yumuşaksa, kuruyana kadar geçici bir bekleme veya alternatif konumlandırma noktası aranır.",
            },
            {
                baslik: "Düzensiz eğim ve arazi tipi makine seçimi",
                metin:
                    "İnşaat sahasında zemin eğimi standart bir üretim holünden farklı olarak düzensiz olabilir. Bu tip sahalarda geniş tekerlekli, arazi tipi makine tercih edilir; standart dar tekerlekli makineler bu zeminlerde manevra ve denge açısından uygun değildir.",
            },
            {
                baslik: "Gizli çukur ve dolgu boşluğu riski",
                metin:
                    "Moloz dolgu alanlarında yüzeyin altında gizli bir çukur veya sıkıştırılmamış boşluk bulunabilir. Görünür bir işaret olmasa bile, dolgu alanının yakın zamanda yapıldığı biliniyorsa ek dikkatle yaklaşılır; şüpheli bölgeler işaretlenir ve makine bu bölgelerin dışına konumlandırılır.",
            },
            {
                baslik: "İnşaat trafiği ile koordinasyon",
                metin:
                    "İnşaat sahasında beton mikseri, kamyon veya vinç gibi başka ekipmanlar aynı anda çalışıyor olabilir. Platform, bu trafikle çakışmayacak bir güzergâh ve zaman diliminde konumlandırılır; şantiye şefiyle günün hangi saatinde hangi ekipmanın hangi bölgede çalışacağı önceden netleştirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre hazırlık",
                paragraflar: [
                    "İnşaat sahasındaki farklı zemin tiplerinde platform konumlandırmadan önce yapılan hazırlık aşağıdaki gibidir.",
                ],
                tablo: {
                    basliklar: ["Zemin tipi", "Ana risk", "Hazırlık"],
                    satirlar: [
                        ["Sıkıştırılmış toprak", "Yağış sonrası yumuşama", "Zemin kontrolü, plaka"],
                        ["Moloz dolgu", "Gizli çukur/boşluk", "İşaretleme, uzak konumlandırma"],
                        ["Düzensiz eğim", "Denge kaybı", "Arazi tipi geniş tekerlek"],
                        ["Henüz betonlanmamış yüzey", "Belirsiz taşıma kapasitesi", "Şantiye şefi onayı"],
                    ],
                },
            },
            {
                baslik: "Şantiye şefiyle önceden netleştirilen bilgiler",
                paragraflar: [
                    "İnşaat sahasına platform girmeden önce, o bölgenin zemin hazırlığının hangi aşamada olduğu (sıkıştırma tamamlandı mı, dolgu ne zaman yapıldı) şantiye şefinden öğrenilir. Bu bilgi, hangi bölgelerin ek dikkat gerektirdiğini belirler.",
                    "Şantiye şefinin zemin hakkında net bilgisi yoksa, en temkinli varsayımla (zemin güvensiz kabul edilerek) hareket edilir; belirsizlik makinenin lehine değil, güvenliğin lehine yorumlanır.",
                ],
            },
            {
                baslik: "İnşaat ekipmanlarıyla aynı sahada çalışma",
                paragraflar: [
                    "Beton mikseri, kamyon veya vinç gibi ekipmanlarla aynı sahada çalışırken, platformun güzergâhı bu ekipmanların çalışma alanıyla kesişmeyecek şekilde planlanır. Kesişme kaçınılmazsa, iki ekipman aynı anda aynı bölgede çalışmaz; sıra şantiye şefiyle belirlenir.",
                    "Şantiye trafiği yoğunsa, platform çalışması mümkünse bu yoğunluğun az olduğu bir saate (örneğin öğle molası veya vardiya değişimi) planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İnşaat sahasındaki toprak zemin platform için güvenli mi?",
                cevap:
                    "Görünüşte sağlam olsa bile altında yumuşak veya boşluklu bir yapı olabilir. Sahaya varan ekip zemini gözle ve elle kontrol eder, şüpheli noktalarda destek ayağı altına yük dağıtım plakası kullanır. Bu kontrol tamamlanmadan makine konumlandırılmaz.",
            },
            {
                soru: "Yağmur sonrası hemen çalışabiliyor musunuz?",
                cevap:
                    "Zemin durumu yağış sonrası yeniden değerlendirilir. Toprak zemin yumuşamışsa, kuruyana kadar geçici bir bekleme yapılır veya daha sağlam bir konumlandırma noktası aranır. Zorlanarak yumuşak zemine makine konumlandırılmaz.",
            },
            {
                soru: "Moloz dolgu alanında gizli çukur olup olmadığını nasıl anlıyorsunuz?",
                cevap:
                    "Görünür bir işaret olmasa bile, dolgunun yakın zamanda yapıldığı biliniyorsa ek dikkatle yaklaşılır; şüpheli bölgeler işaretlenir ve makine bu bölgelerin dışına konumlandırılır. Şantiye şefinden dolgunun ne zaman ve nasıl yapıldığı önceden öğrenilir.",
            },
            {
                soru: "Standart makine düzensiz eğimli zeminde kullanılabilir mi?",
                cevap:
                    "Genellikle önerilmez; bu tip sahalarda geniş tekerlekli, arazi tipi makine tercih edilir. Standart dar tekerlekli makineler düzensiz eğimde manevra ve denge açısından yeterince güvenli değildir.",
            },
            {
                soru: "Şantiyede vinç veya beton mikseriyle aynı anda çalışabiliyor musunuz?",
                cevap:
                    "Güzergâhlar kesişmediği sürece evet. Kesişme kaçınılmazsa iki ekipman aynı anda aynı bölgede çalışmaz; sıra şantiye şefiyle önceden belirlenir. Yoğun trafik saatlerinde platform çalışması mümkünse daha sakin bir zaman dilimine planlanır.",
            },
            {
                soru: "Zemin hazırlığı hakkında net bilgi alamazsak ne yapıyorsunuz?",
                cevap:
                    "En temkinli varsayımla hareket ederiz; zemin bilgisi belirsizse güvensiz kabul edilir ve buna göre hazırlık (plaka, uzak konumlandırma) yapılır. Belirsizlik makinenin lehine değil, güvenliğin lehine yorumlanır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İnşaat sahasında zemin taşıma kapasitesi ve yağış sonrası yumuşama riski platform operasyonlarının genel bilinen bir konusudur. Bozüyük OSB'de ambalaj/plastik tesislerinin genişleme yapması genel sektör bilgisidir. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "Bozüyük Mobilya Atölyeleri için Makaslı Platform Kiralama",
        giris:
            "Makaslı platform, sepetin doğrudan yukarı doğru dikey açılan bir makas mekanizmasıyla yükseldiği, yatayda uzanma yapmayan bir platform tipidir. Bu özellik onu Bozüyük'teki mobilya montaj hatları ve boyahane kabinleri gibi düz beton zeminli, tavanı belirli bir yükseklikte olan kapalı hacimler için doğal bir tercih hâline getirir: hat üstü aydınlatma armatürüne, havalandırma kanalına veya kabin tavanına dosdoğru çıkılır, yana doğru bir uzanma gerekmez. Sepetin geniş oluşu da bu işlerde avantaj sağlıyor — bir elektrikçi ve yardımcı malzemesi aynı anda platforma sığabiliyor, bu da hat üstü bir aydınlatma değişimini tek çıkışta bitirmeyi mümkün kılıyor. Bize göre makaslı platform tercihinin arkasındaki asıl soru şu: iş dikey mi, yoksa bir engelin üzerinden ya da yanından mı yapılacak? Cevap dikeyse, makaslı platform hem daha ekonomik hem daha stabil bir çözüm sunuyor. Bu sayfada, mobilya ve kereste işleme tesislerinin iç mekanlarında makaslı platformun hangi işlerde tercih edildiğini, zemin ve tekerlek seçiminin neden önemli olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj hattı tavanında dikey aydınlatma ve kanal bakımı",
                metin:
                    "Mobilya montaj hatlarının üzerinde uzanan aydınlatma armatürleri ve havalandırma kanalları, doğrudan tavana dikey çıkışla erişilen noktalardır. Makaslı platform bu tip işlerde yatay uzanmaya gerek bırakmadan, hattın tam üzerine konumlanıp dikey yükselir. Geniş sepet sayesinde armatür değişimi için gereken malzeme ve alet tek seferde taşınabiliyor.",
            },
            {
                baslik: "Boyahane kabini içinde geniş çalışma alanı",
                metin:
                    "Vernik veya boya kabini içinde birden fazla nokta üzerinde çalışmak gerektiğinde, makaslı platformun geniş sepeti makineyi sık sık indirip kaldırmadan yan yana birkaç noktayı kapsamayı sağlar. Kabin havalandırılıp hat durdurulduktan sonra girilir; kabin içindeki boyalı yüzeylerde iz bırakmaması için tekerlek tipi ayrıca gözden geçirilir.",
            },
            {
                baslik: "İç mekan kereste raf sisteminde dar koridor erişimi",
                metin:
                    "Kapalı depo hacimlerinde kereste raflarının arasındaki koridorlar dar bırakılmış olabilir. Kompakt gövdeli makaslı modeller bu koridorlardan geçip raf üstündeki bir noktaya dikey çıkabilir; koridor genişliği ve raf yüksekliği teklif öncesi ölçülür, sepetin rafa temas etmemesi için manevra payı hesaba katılır.",
            },
            {
                baslik: "Boyalı ve cilalı beton zeminde tekerlek izi hassasiyeti",
                metin:
                    "Montaj hattı ve boyahane çevresindeki beton zeminler genellikle epoksi kaplı veya cilalıdır; standart tekerlekler bu yüzeyde iz bırakabilir. Bu hacimlerde iz bırakmayan (non-marking) tekerlekli makaslı platform tercih edilir. Zeminin ağırlığı ne ölçüde taşıyabildiği, özellikle asma kat veya galeri katı varsa önceden kontrol edilir.",
            },
            {
                baslik: "Kısa süreli iç mekan bakım işlerinde operatörlü hız",
                metin:
                    "Küçük ölçekli atölyelerde makaslı platform ihtiyacı çoğunlukla birkaç saatlik, tek noktalı bir iç mekan bakım işidir — bir aydınlatma değişimi, bir kanal kontrolü. Bu profildeki işlerde operatörlü kiralama en hızlı çözümü sunar; atölye sahibinin ayrı bir eğitim veya belge süreciyle uğraşmasına gerek kalmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekan tipine göre makaslı platform seçimi",
                paragraflar: [
                    "Mobilya ve kereste tesislerinin kapalı hacimlerini zemin ve erişim ihtiyacına göre sınıflandırıyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Zemin", "Tekerlek", "Erişim şekli"],
                    satirlar: [
                        ["Montaj hattı üstü", "Standart beton", "Standart dolgu", "Dikey, tavan noktası"],
                        ["Boyahane/vernik kabini", "Epoksi kaplı beton", "İz bırakmayan (non-marking)", "Dikey, kabin içi"],
                        ["İç depo raf koridoru", "Standart beton", "Standart, kompakt gövde", "Dikey, dar koridor"],
                        ["Galeri katı üstü ofis/kalite kontrol", "Asma kat betonu", "Hafif, düşük yük", "Dikey, kat altı kontrol"],
                    ],
                },
            },
            {
                baslik: "Zemin yükü ve tekerlek seçiminde iki ayrı karar",
                paragraflar: [
                    "Zeminin taşıma kapasitesi ile tekerleğin yüzeyde bıraktığı iz, birbirinden bağımsız iki karardır. Bir asma kat veya galeri katının altında çalışılıyorsa, önce o katın taşıyabileceği azami yük sorulur; bu bilgi olmadan makine konumlandırılmaz. Zeminin epoksi kaplı ya da cilalı olduğu boyahane çevresinde ise iz bırakmayan tekerlek zorunlu tutulur.",
                    "İki koşul aynı anda geçerliyse — örneğin galeri katı altında epoksi kaplı bir zeminse — hem yük hem tekerlek kısıtı birlikte değerlendirilir ve buna uygun, genellikle daha hafif ve kompakt bir model önerilir.",
                ],
            },
            {
                baslik: "Üretim durdurmadan planlama",
                paragraflar: [
                    "Montaj hattı ve boyahane, üretimin kesintisiz aktığı bölümlerdir; bu yüzden makaslı platform işleri çoğunlukla vardiya arası boşluklara ya da hafta sonuna planlanır. Boyahane kabini gibi durdurulması ve havalandırılması zaman alan bölümlerde, bu bekleme süresi işin başlangıç saatine dahil edilir.",
                    "Aynı gün içinde birden fazla hacimde iş varsa — örneğin hem montaj hattı hem iç depo — makine tek sevkiyatla getirilip gün içinde sırayla kullanılır; bu, hem nakliye maliyetini tekilleştirir hem üretim akışının bir kez kesintiye uğramasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platform ile manlift arasındaki fark nedir, hangisini önerirsiniz?",
                cevap:
                    "Makaslı platform yalnızca dikey yükselir, yatayda uzanma yapmaz; manlift ise kollarıyla yana ve engel üzerinden uzanabilir. Montaj hattı tavanı veya boyahane kabini gibi doğrudan üstüne çıkılacak bir nokta varsa makaslı platform önerilir — hem daha stabil hem daha ekonomiktir. İş bir engelin arkasına veya dış cepheye uzanmayı gerektiriyorsa manlift daha uygun olur.",
            },
            {
                soru: "Boyahane kabinimizin zemini epoksi kaplı, iz bırakır mı?",
                cevap:
                    "İz bırakmayan (non-marking) tekerlekli makaslı platform kullandığımızda hayır. Epoksi veya cilalı beton zeminlerde standart tekerlek kullanmıyoruz; teklif öncesi zemin kaplamasının tipini soruyor ve buna göre tekerlek tipini belirliyoruz. Kabin havalandırılıp hat durdurulduktan sonra makineyi içeri alıyoruz.",
            },
            {
                soru: "Montaj hattımızın üstünde galeri katı var, bu katın altına makine girebilir mi?",
                cevap:
                    "Girebilir, ancak önce galeri katının taşıma kapasitesini ve kat altı boşluğunun yüksekliğini öğreniyoruz. Bu bilgi olmadan makine konumlandırmıyoruz; kapasite bilgisi belirsizse en hafif ve düşük tekerlek yüküne sahip modeli öneriyoruz. Kat altı yüksekliği de seçilecek makinenin gövde tipini doğrudan belirliyor.",
            },
            {
                soru: "İç depomuzun raf koridorları dar, makaslı platform sığar mı?",
                cevap:
                    "Büyük olasılıkla evet; kompakt gövdeli makaslı modeller dar koridorlar için üretilir. Kesin karar için koridorun en dar noktasının genişliğini ve raf yüksekliğini önceden ölçüyoruz. Sepetin rafa temas etmemesi için manevra payını da işin planına dahil ediyoruz.",
            },
            {
                soru: "Üretim hattımız sürerken makaslı platform çalışması yapılabilir mi?",
                cevap:
                    "Genellikle önermiyoruz; hat çalışırken hem güvenlik hem verimlilik açısından risk oluşur. Bunun yerine işleri vardiya arası boşluklara ya da hafta sonuna planlıyoruz. Boyahane gibi durdurulması zaman alan bölümlerde bu bekleme süresini işin başlangıcına dahil ediyoruz.",
            },
            {
                soru: "Küçük bir atölyeyiz, tek seferlik bir aydınlatma değişimi için operatörlü kiralama mantıklı mı?",
                cevap:
                    "Evet, bu tür kısa süreli tek noktalı işlerde operatörlü kiralama en hızlı çözüm. Atölye sahibinin ayrı bir eğitim veya belge süreciyle uğraşmasına gerek kalmıyor; makinenin periyodik kontrol raporunu ve operatörümüzün yeterlilik belgesini talep etmeden gönderiyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platformun dikey yükselme prensibi ve iz bırakmayan tekerlek kullanımı genel platform ekipmanı bilgisidir. Bozüyük'teki mobilya/kereste tesislerinin kapalı hacim özellikleri bu dosyanın genel profiline dayanır. Tesis adı, kapasite ve rakam verilmemiştir.",
    },

    "hizmet:manlift-kiralama": {
        h1: "Bozüyük'te Mobilya ve Kereste Tesisleri için Manlift Kiralama",
        giris:
            "Manlift, kolunu hem yukarı hem yana uzatabilen — teleskopik ya da eklemli — bir platform tipidir ve bu özelliği onu bir engelin üzerinden veya arkasından erişim gerektiren dış mekan işlerinde makaslı platformdan ayırır. Bozüyük'teki mobilya ve kereste işleme tesislerinde bu ihtiyaç genellikle üç noktada ortaya çıkıyor: boyahane hattının dış cephedeki egzoz bacası, açık sahada istiflenmiş kereste yığınının üzerinden yükleme rampasına erişim ve atölye binasının dış cephe-çatı oluğu. Bu üç işin ortak noktası, sepetin doğrudan altına konumlanamayacağı bir hedefe kolun yana veya üstten uzanarak ulaşmasıdır. Bize göre manlift teklifinin başlangıç sorusu şudur: hedefe engelsiz dikey erişim mi var, yoksa kol uzanması mı gerekiyor? İkincisiyse, açık sahanın zemin durumu ve o gün beklenen hava koşulu (rüzgar, yağış) makine tipini ve çalışma saatini belirliyor. Bu sayfada, mobilya-kereste ekseninde manliftin hangi dış mekan işlerinde kullanıldığını ve açık saha koşullarının kiralama kararını nasıl şekillendirdiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Boyahane bacası ve egzoz sisteminin dış yüzey bakımı",
                metin:
                    "Vernik ve boya kabininin dış cephedeki egzoz bacası ile filtre sistemi, düzenli dış yüzey kontrolü gerektirir. Bu baca genellikle çatı hizasında ve bina cephesinden bir miktar dışarı taşan bir konumdadır; kolun yana ve yukarı uzanabildiği eklemli veya teleskopik manlift bu noktaya makaslı platformdan daha uygun erişim sağlar.",
            },
            {
                baslik: "Açık saha kereste stokunun üzerinden yükleme rampasına erişim",
                metin:
                    "Açık sahada istiflenmiş kereste yığınlarının arkasında kalan bir yükleme rampasına ya da aydınlatma direğine ulaşmak gerektiğinde, yığının üzerinden geçmek zorunda kalınabilir. Manlift kolu, istifin üzerinden dolanarak hedefe ulaşır; istifin yüksekliği ve genişliği önceden ölçülür, kolun yığına temas etmeyeceği bir güzergah belirlenir.",
            },
            {
                baslik: "Atölye binası dış cephe ve çatı oluğu bakımı",
                metin:
                    "Mobilya atölyesi binasının dış cephesi ve çatı oluğu, düzenli temizlik ve boya bakımı gerektirir. Bina cephesi düz olsa da pencere silmeleri, tabela çıkıntıları gibi engeller kolun manevra kabiliyetini gerektirir; eklemli manlift bu tür engelleri dolanarak aşabilir.",
            },
            {
                baslik: "Açık saha aydınlatma direği ve güvenlik kamerası bakımı",
                metin:
                    "Kereste deposu açık sahasındaki aydınlatma direkleri ve güvenlik kameraları, direğin tabanına yakın park edilemeyecek şekilde malzeme yığınlarıyla çevrili olabilir. Manlift kolu, yığınlardan güvenli mesafede park edilen makineden direğe uzanarak erişim sağlar; bu, malzeme istifini bozmadan bakım yapılmasını mümkün kılar.",
            },
            {
                baslik: "Forklift ve kamyon trafiğinin geçtiği noktalarda engel aşma",
                metin:
                    "Açık sahada forklift veya kamyonun düzenli geçtiği bir güzergahın üzerinde kalan bir noktaya erişim gerektiğinde, makine bu güzergahın dışına konumlanıp kolunu güzergahın üzerinden uzatır. Bu, sahadaki araç trafiğini durdurmadan çalışmayı mümkün kılan bir çözümdür; güzergahın o an aktif olup olmadığı işin başında teyit edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dış mekan konum tipine göre manlift seçimi",
                paragraflar: [
                    "Mobilya ve kereste tesislerinin açık saha ve dış cephe noktalarını erişim şekline göre sınıflandırıyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Konum tipi", "Ana engel", "Manlift tipi", "Konumlandırma"],
                    satirlar: [
                        ["Boyahane bacası/egzoz", "Cephe çıkıntısı", "Eklemli", "Bina cephesinden mesafeli"],
                        ["Kereste istifi arkası rampa", "Yığın yüksekliği", "Teleskopik", "İstiften uzak, kol üstten"],
                        ["Bina dış cephe/oluk", "Silme, tabela çıkıntısı", "Eklemli", "Cephe boyunca kademeli"],
                        ["Açık saha aydınlatma direği", "Malzeme yığını çevresi", "Eklemli", "Yığından güvenli mesafe"],
                    ],
                },
            },
            {
                baslik: "Açık sahada zemin ve hava koşulu",
                paragraflar: [
                    "Açık sahalar iç mekanların aksine sıkıştırılmış toprak, parke taşı veya kısmen bakımsız zeminlere sahip olabilir; destek ayaklarının güvenilir oturması için zemin önceden kontrol edilir, gerekirse yük dağıtım plakası kullanılır.",
                    "Kolu yana ve yukarı uzatan manlift, rüzgara makaslı platformdan daha duyarlıdır. Sahadaki iş günü için rüzgar tahmini önceden kontrol edilir; kuvvetli rüzgar beklentisi varsa, özellikle kol tam uzanmışken çalışma ertelenir ya da daha sakin bir saate planlanır.",
                ],
            },
            {
                baslik: "Açık saha trafiğiyle koordinasyon",
                paragraflar: [
                    "Kereste deposu ve yükleme sahasında forklift ile kamyon trafiği süreklidir; manlift bu trafiği durdurmadan çalışabilecek bir güzergah ve saat diliminde konumlandırılır. Yoğun sevkiyat saatlerinde çalışma mümkünse daha sakin bir zaman dilimine ertelenir.",
                    "Aynı gün içinde birden fazla dış mekan noktasında iş varsa — örneğin hem boyahane bacası hem aydınlatma direği — makine tek sevkiyatla getirilip sırayla kullanılır; bu, sahadaki araç trafiğinin yalnızca bir kez kesintiye uğramasını sağlar.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manlift ile makaslı platform arasında hangisini seçeceğimizi nasıl belirliyorsunuz?",
                cevap:
                    "Hedefin doğrudan altına konumlanıp dikey çıkılabiliyorsa makaslı platform öneriyoruz; hedefe bir yığının, cephe çıkıntısının veya başka bir engelin üzerinden ya da yanından ulaşmak gerekiyorsa manlift öneriyoruz. Boyahane bacası ve kereste istifi arkasındaki noktalar bu ikinci gruba giriyor, çünkü sepetin altına doğrudan konumlanacak düz bir zemin yok.",
            },
            {
                soru: "Kereste istifimizin arkasındaki rampaya erişim için istifi kaldırmamız gerekiyor mu?",
                cevap:
                    "Hayır, genellikle gerekmiyor. Manlift kolu istifin üzerinden dolanarak rampaya ulaşabiliyor; bunun için istifin yüksekliğini ve genişliğini önceden ölçüyor, kolun yığına temas etmeyeceği bir güzergah belirliyoruz. İstif çok yüksekse ya da düzensizse, güzergahı yeniden değerlendiriyoruz.",
            },
            {
                soru: "Rüzgarlı bir günde açık sahada çalışabiliyor musunuz?",
                cevap:
                    "Kol tam uzanmışken manlift rüzgara makaslı platformdan daha duyarlıdır, bu yüzden iş günü için rüzgar tahminini önceden kontrol ediyoruz. Kuvvetli rüzgar beklentisi varsa çalışmayı erteliyor ya da daha sakin bir saate planlıyoruz; zorlanarak kuvvetli rüzgarda kol tam uzanmıyor.",
            },
            {
                soru: "Boyahane bacamızın dış yüzeyine erişim için hangi manlift tipi uygun?",
                cevap:
                    "Genellikle eklemli manlift öneriyoruz, çünkü cephe çıkıntısını dolanarak bacaya yaklaşabiliyor. Bina cephesinden güvenli bir mesafede konumlanıp kolu yukarı ve yana uzatıyoruz; bacanın tam yüksekliğini ve cepheden çıkıntı mesafesini teklif öncesi ölçüyoruz.",
            },
            {
                soru: "Açık sahada forklift trafiği sürekli, çalışmamız bunu engeller mi?",
                cevap:
                    "Engellemiyoruz; makineyi trafiğin dışında bir noktaya konumlandırıp kolu güzergahın üzerinden uzatıyoruz. Yoğun sevkiyat saatlerinde mümkünse daha sakin bir zaman dilimine erteliyoruz. Güzergahın o an aktif olup olmadığını işin başında sahada teyit ediyoruz.",
            },
            {
                soru: "Açık sahanın zemini toprak, destek ayakları batar mı?",
                cevap:
                    "Batma riskini önceden kontrol ediyoruz; sıkıştırılmış toprak zeminlerde destek ayağı altına yük dağıtım plakası kullanıyoruz. Yağış sonrası zemin yumuşamışsa, kuruyana kadar bekliyor ya da daha sağlam bir konumlandırma noktası arıyoruz. Zorlanarak yumuşak zemine makine konumlandırmıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manliftin eklemli/teleskopik kol yapısı ve rüzgar hassasiyeti genel platform ekipmanı bilgisidir. Bozüyük'teki mobilya/kereste tesislerinin açık saha ve dış cephe özellikleri bu dosyanın genel profiline dayanır. Tesis adı, kapasite ve rakam verilmemiştir.",
    },
};

// ═══════════════════════════════════════════════════════════════════════════
// eskisehirplatform.org — ELLE YAZILMIŞ İÇERİK
//
// Profil: Eskişehir'in havacılık-savunma tedarik zinciri ile Sivrihisar'ın
// kırsal-enerji karakterine odaklı yükseltilebilir çalışma platformu
// kiralama. Açı: tedarikçi tesislerinde yabancı madde (FOD) rejimi, gizlilik
// ve yüklenici giriş süreçleri, kayıt-izlenebilirlik disiplini; Sivrihisar
// tarafında rüzgâr enerji santrali saha yapıları, havacılık merkezi hangar
// hacimleri ve tarımsal depo-ahır yapıları.
//
// ⚠️ eskisehirmanlift.net (üretim hattı bakımı açısı) ile aynı ilde ve beş
// ortak sayfada çalışır; cümle/tablo/SSS örtüşmesi YASAKTIR. Bu dosyanın
// merceği tedarik rejimi ve kırsal-enerji altyapısıdır, hat duruşu değil.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Firma adı ve rakam uydurulmadı.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const ESKISEHIRPLATFORM_ORG: Record<string, BespokeIcerik> = {
    "bolge:eskisehir": {
        h1: "Eskişehir'de Havacılık ve Savunma Tedarikçilerine Platform Kiralama",
        giris:
            "Eskişehir, Türkiye'nin havacılık kimliğini en uzun süredir taşıyan şehirlerinden biridir ve bu kimlik yalnızca birkaç büyük tesiste değil, onların çevresinde kümelenmiş yüzlerce parça, kaplama, ısıl işlem, kalıp ve test tedarikçisinde yaşar. Bir tedarikçi tesisine yükseltilebilir çalışma platformu göndermek, sıradan bir sanayi sevkiyatından farklıdır: makinenin kapıdan girebilmesi için evrağının, operatörün geçmişinin ve sahaya götürülecek her parçanın önceden bildirilmiş olması gerekir. Bu şehirde bize sorulan ilk soru neredeyse hiçbir zaman makinenin erişim yüksekliği olmaz; önce yüklenici giriş prosedürüne uyup uymadığımız, sepetin üretim hacmine yabancı madde bırakma riski taşıyıp taşımadığı ve iş sonunda hangi kaydı teslim edeceğimiz sorulur. Biz de teklifi bu sıraya göre kuruyoruz: önce rejim, sonra geometri. Eskişehir'in ikinci yüzü ise kırsaldadır — Sivrihisar hattındaki rüzgâr enerjisi tesisleri, havacılık merkezi çevresindeki hangar hacimleri ve tarımsal yapılar bambaşka bir saha disiplini ister. Tek ilde iki ayrı çalışma kültürü var ve ikisi de aynı ekipten farklı hazırlık bekliyor.",
        maddeler: [
            {
                baslik: "Yabancı madde kontrolü: sepetten aşağı hiçbir şey düşmez",
                metin:
                    "Havacılık ve savunma parçası üreten hacimlerde en ciddi risk, düşen bir vidanın birine çarpması değil; o vidanın bir daha bulunamamasıdır. Yabancı madde disiplini bunu tek kuralla çözer — sahaya giren her kalem sayılır, çıkan her kalem tekrar sayılır ve sayı tutmazsa iş kapanmaz. Uygulamada sepete alınan el aletleri gölge tablosu mantığıyla listelenir, hepsi bağ ile emniyete alınır, sarf malzemesi ambalajları sepet içinde kapalı kutuda tutulur ve çalışma alanının altı örtüyle kapatılır. Platformun kendisi de bu listenin parçasıdır: hidrolik sızdırmazlık kontrolü teslimattan önce yapılır, sepet tabanı boşaltılmış ve temizlenmiş olarak teslim edilir.",
            },
            {
                baslik: "Yüklenici giriş rejimi ve gizlilik yükümlülüğü",
                metin:
                    "Tedarikçi tesislerinin çoğunda dış firma personeli, geçici kartla ve refakatli olarak girer; bazı hacimlerde fotoğraf makinesi ve kamera taşıyan cihazlar tümüyle yasaktır. Bu, teslimatı yapan sürücü ve varsa operatörümüz için de geçerlidir. Bizim tarafımızda standart hazırlık şudur: sahaya girecek kişilerin bilgileri en az bir gün önce yazılı olarak iletilir, gizlilik taahhüdü talep edilirse imzalanır ve cihaz kısıtı olan hacimlerde iş öncesi/sonrası fotoğraf çekimi tamamen bırakılır. Bu kısıt yüzünden yapamadığımız tek şey görsel raporlamadır; onun yerine yazılı iş kabul formu kullanıyoruz.",
            },
            {
                baslik: "Temizlik sınıfı olan hacimlerde makine seçimi",
                metin:
                    "Kaplama, montaj ve test hacimlerinin bir bölümünde ortam temizliği ölçülür ve dışarıdan giren her ekipman bu ölçüme etki eder. Bu hacimlerde içten yanmalı hiçbir makine söz konusu edilemez; akülü tahrik, iz bırakmayan lastik ve dış yüzeyi temizlenebilir gövde temel şarttır. Makine binaya alınmadan önce tekerlekleri ve şasi altı silinir, gerekirse geçici tekerlek örtüsü kullanılır. Hidrolik hortum bağlantılarının damlama yapmadığı gözle doğrulanır. Bu kontrol listesini tesisin kendi giriş formuyla birleştirip tek belge hâline getiriyoruz, böylece kapıda iki ayrı evrakla uğraşılmıyor.",
            },
            {
                baslik: "Kayıt disiplini: makinenin de bir dosyası olur",
                metin:
                    "Kalite yönetim sistemi işletilen tesislerde kullanılan ekipmanın belgesi, işin kendisi kadar denetlenir. Platform için istenen dosya genellikle üç parçadan oluşur: periyodik kontrol raporu, makinenin tanım ve seri bilgisi, kullanacak kişinin mesleki yeterlilik belgesi. Bunların tarih geçerliliği kapıda kontrol edilir ve süresi dolmuş tek bir belge makinenin geri dönmesine yeter. Sevkiyattan önce dosyayı elektronik olarak gönderip onay alıyoruz; bu tek adım, Eskişehir'de yaşadığımız kapı dönüşlerinin neredeyse tamamını ortadan kaldırdı.",
            },
            {
                baslik: "Kırsal hatta bambaşka bir hazırlık listesi",
                metin:
                    "Aynı ilin batı ve güney kırsalında iş, evrak rejiminden çok zemine ve mesafeye bakar. Rüzgâr enerjisi sahalarının işletme binaları, şalt yapıları ve hangar tipi depolar çoğunlukla stabilize yol sonunda, rüzgâra açık düzlüklerde konumlanır. Burada belirleyici olan üç şey vardır: makinenin arazi tipi mi yoksa sert zemin tipi mi olacağı, sahaya çekilecek aracın yol genişliğine uyup uymadığı ve çalışma gününde rüzgâr hızının sepet kullanımına izin verip vermeyeceği. Kırsal işlerde teklifimizi hava koşuluna bağlı esnek gün planıyla veriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis rejimine göre hazırlık ve makine sınıfı",
                paragraflar: [
                    "Eskişehir'de çalıştığımız sahalar, giriş rejimi ve ortam koşullarına göre birbirinden belirgin ayrışır. Aşağıdaki tablo, teklif öncesi yaptığımız sınıflandırmadır; tesisiniz hangi satıra denk geliyorsa hazırlık listesi de ona göre çıkarılır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Giriş rejimi", "Belirleyici koşul", "Uygun platform"],
                    satirlar: [
                        ["Havacılık parça tedarikçisi", "Kart + refakat + gizlilik", "Yabancı madde sayımı", "Akülü eklemli, temiz gövde"],
                        ["Kaplama ve test hacmi", "Kart + cihaz kısıtı", "Ortam temizliği", "Akülü makaslı"],
                        ["Kurumsal ve kamu binası", "Ziyaretçi kaydı", "İç mekân geçiş ölçüsü", "Kompakt akülü"],
                        ["Enerji sahası işletme yapısı", "Saha güvenliği + brifing", "Rüzgâr ve stabilize yol", "Arazi tipi eklemli"],
                        ["Hangar ve tarımsal yapı", "Basit izin", "Yükseklik ve zemin taşıması", "Teleskopik veya arazi tipi"],
                    ],
                },
            },
            {
                baslik: "Teklif öncesi topladığımız sekiz bilgi",
                paragraflar: [
                    "Bu şehirde doğru fiyat, makine listesinden değil saha bilgisinden çıkar. Teklif hazırlarken sorduğumuz sabit set şudur: çalışılacak noktanın zeminden yüksekliği, makinenin durabileceği zeminden hedefe kadarki yatay açıklık, zemin cinsi ve taşıma durumu, makinenin gireceği en dar açıklık, tesisin giriş için istediği belgeler, cihaz ve fotoğraf kısıtı olup olmadığı, işin yapılacağı saat aralığı ve operatörün sizden mi bizden mi olacağı. Sekiz başlığın hepsi cevaplandığında teklif tek seferde kesinleşir.",
                    "Bu setin en çok atlanan maddesi yatay mesafedir. Havacılık tedarikçilerinin hollerinde hedefin altı neredeyse her zaman doludur — tezgâh, test düzeneği, kabin veya raf. Dolayısıyla makine hedefin dibine park edemez ve yalnızca yükseklik üzerinden yapılan seçim sahada yetersiz kalır. Bir fotoğraf ve iki ölçü, bu hatayı tümüyle önlüyor.",
                ],
            },
            {
                baslik: "Operatörlü mü, operatörsüz mü: rejime göre değişir",
                paragraflar: [
                    "Kural olarak sepeti kullanan kişide ilgili yeterlilik belgesi aranır ve bu belge, makinenin ait olduğu aileye göre düzenlenir; makaslı platform için alınmış belge bom tipi bir makineyi kapsamaz. Bu şartın ötesinde, havacılık ve savunma tedarikçilerinde ikinci bir filtre daha çalışır: sahaya girecek kişinin tesisin yüklenici onay sürecinden geçmesi. Bu süreç bazı tesislerde günler sürebildiği için, kısa süreli işlerde belgeli kendi personelinizin makineyi kullanması genellikle daha hızlı ilerler.",
                    "Buna karşılık uzun süren ve sürekli makine hareketi gerektiren işlerde operatörlü kiralama daha güvenlidir; operatör hem makinenin sınırlarını hem yabancı madde disiplinini bilir. Karar, işin süresi ile tesisin onay süresinin karşılaştırılmasıyla verilir — bunu keşif görüşmesinde açıkça hesaplıyoruz ve size hangisinin daha erken başlatacağını söylüyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimizde yabancı madde kontrolü uygulanıyor; platform bu rejime uyar mı?",
                cevap:
                    "Uyar, ancak bu bizim tarafımızda ek hazırlık gerektirir ve bunu baştan planlıyoruz. Makine sahaya girmeden hidrolik bağlantıları damlama açısından kontrol edilir, sepet tabanı boşaltılıp temizlenir ve gövdesinde gevşek parça bırakılmaz. Çalışma sırasında sepete alınan her el aleti ve sarf malzemesi liste üzerinden sayılır, hepsi emniyet bağıyla bağlanır, ambalajlar kapalı kutuda tutulur. İş sonunda aynı liste tekrar sayılır ve sayım tutmadan alan terk edilmez. Çalışma noktasının altı örtüyle kapatıldığı için düşen bir parça zaten yayılmaz. Tesisinizin kendi formu varsa onu kullanırız, yoksa kendi kontrol listemizi imzalı olarak teslim ederiz.",
            },
            {
                soru: "Yüklenici giriş onayımız birkaç gün sürüyor; süreci nasıl hızlandırabiliriz?",
                cevap:
                    "Belgeleri talep anında değil, teklif aşamasında göndererek. Sizden makineyi istediğiniz tarihi öğrendiğimizde periyodik kontrol raporunu, makinenin tanım bilgisini ve sahaya girecek kişilerin kimlik bilgilerini aynı gün elektronik olarak iletiyoruz; böylece onay süreci teslimatla paralel işler. İkinci hızlandırıcı, operatör kararını erken vermektir: kendi belgeli personeliniz kullanacaksa dışarıdan giren tek kişi sürücü olur ve onay yükü belirgin azalır. Üçüncüsü, gizlilik taahhüdü isteyen tesislerde metni önceden paylaşmanızdır — imzayı kapıda değil, öncesinde tamamlıyoruz. Bu üç adım uygulandığında onay süresi neredeyse hiçbir zaman teslimatı geciktirmiyor.",
            },
            {
                soru: "Ortam temizliği ölçülen bir hacimde çalışacağız; makine içeri alınabilir mi?",
                cevap:
                    "Alınabilir; bu hacimler için akülü ve iz bırakmayan lastikli makineleri ayırıyoruz. İçten yanmalı makine hiçbir koşulda söz konusu edilmez. Girişten önce tekerlekler ve şasi altı silinir, talep edilirse geçici tekerlek örtüsü kullanılır ve gövde dış yüzeyi temizlenir. Hidrolik hortum bağlantıları damlama açısından gözle doğrulanır; en küçük sızıntı şüphesinde makine değiştirilir. Çalışma sırasında toz kaldıracak bir işlem varsa nokta emişli toz toplama ile ilerlenir ve altına örtü serilir. Sizden istediğimiz tek şey, makinenin izleyeceği güzergâhın önceden belirlenmesi ve temizlik sınıfı olan bölüme giriş noktasının gösterilmesidir.",
            },
            {
                soru: "Sivrihisar tarafındaki bir enerji sahasına makine gelebilir mi?",
                cevap:
                    "Gelebilir, ancak burada belirleyici olan makine değil ulaşımdır. Saha yolunun genişliği, eğimi ve stabilize yüzeyin lowbed aracını taşıyıp taşımayacağı önceden konuşulur; gerekirse makine sahanın giriş noktasında indirilip kendi tahrikiyle ilerler. İşletme binası, şalt yapısı veya depo çevresinde çalışılacaksa zemin çoğu zaman sıkıştırılmış toprak olur ve bu durumda arazi tipi, geniş tekerlekli bir makine tercih edilir. Üçüncü değişken rüzgârdır: sepet kullanımının izin verilen rüzgâr sınırı aşıldığında çalışma durdurulur, bu yüzden kırsal sahalarda gün planını esnek kurup alternatif gün belirliyoruz. Bu üç başlık netleşirse sevkiyat sorunsuz ilerler.",
            },
            {
                soru: "Fotoğraf çekmemiz yasak; iş kaydını nasıl tutuyorsunuz?",
                cevap:
                    "Yazılı forma geçiyoruz. Cihaz kısıtı olan hacimlerde teslim alma ve teslim etme aşamalarında fotoğraf çekmiyoruz; bunun yerine iki taraflı imzalanan bir iş kabul formu kullanıyoruz. Formda makinenin teslim saati, sayaç durumu, gözle görülen hasar kaydı, sahaya götürülen alet ve sarf listesi ile iş bitiminde yapılan sayım sonucu yer alır. Bu belge hem sizin kalite kayıtlarınıza ekleyebileceğiniz bir izlenebilirlik kaydıdır hem de bizim açımızdan makinenin durumunu belgeler. Fotoğraf kısıtı olmayan sahalarda ise ikisini birlikte kullanıyoruz. Hangi düzenin geçerli olacağını sevkiyattan önce yazılı olarak teyit ediyoruz, kapıda tartışma çıkmıyor.",
            },
            {
                soru: "Aynı hafta hem merkezde hem kırsalda işimiz var; tek kiralama ile çözülür mü?",
                cevap:
                    "Çoğu zaman çözülmez ve bunu baştan söylemeyi tercih ediyoruz. Merkez ilçelerdeki tedarikçi hollerine giren makine akülü, kompakt ve iz bırakmayan lastikli olur; kırsaldaki stabilize zeminde ise bu makinenin ilerlemesi güvenli değildir. Tersi de geçerli — arazi tipi bir makinenin epoksi zeminli bir hole alınması genellikle kabul edilmez. Bu yüzden iki işi tek makineye bindirmek yerine, sevkiyatı aynı güzergâha toplayıp nakliye payını bölüyoruz: araç aynı gün içinde iki makineyi iki noktaya bırakır, dönüşte ikisini birden alır. Sonuç, tek makineyle çözmeye çalışmaktan hem daha güvenli hem çoğu kez daha ekonomik oluyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir'in havacılık-savunma sanayi kimliği ve Sivrihisar çevresindeki rüzgâr enerjisi ile havacılık merkezi varlığı kamuya açık genel bilgidir; yabancı madde kontrolü, yüklenici giriş rejimi ve mesleki yeterlilik belgesi uygulamaları sektör pratiği ve mevzuattan gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:sivrihisar": {
        h1: "Sivrihisar'da Enerji, Havacılık ve Tarım Yapıları için Platform Kiralama",
        giris:
            "Sivrihisar, Eskişehir'in en geniş yüzölçümlü ilçelerinden biridir ve bu genişlik doğrudan iş planına yansır: burada bir saha ile diğeri arasındaki mesafe, çoğu ilde iki ilçe arasındaki mesafeye denktir. İlçenin bugünkü teknik kimliğini üç başlık kuruyor. Birincisi rüzgâr enerjisi: açık ve rüzgâra maruz platolar, bölgeyi enerji yatırımları için elverişli kılmış durumda ve bu tesislerin işletme binaları, şalt yapıları ve saha depoları düzenli bakım ister. İkincisi havacılık: ilçe, havacılık merkezi ve planör faaliyetleriyle tanınır ve hangar tipi yapılar bu çevrede yaygındır. Üçüncüsü tarım: geniş arazilerin sonunda çelik konstrüksiyon depolar, silo yardımcı yapıları ve büyük açıklıklı ahır-hangar binaları bulunur. Üçünün ortak paydası, yüksek ve geniş açıklıklı hacimler ile çoğu zaman sert olmayan zeminlerdir. Bu yüzden Sivrihisar'da makine seçimi merkez ilçelerdekinden farklı başlar: önce zemin ve ulaşım konuşulur, yükseklik sonra gelir.",
        maddeler: [
            {
                baslik: "Stabilize yol ve saha girişi: makineden önce araç",
                metin:
                    "İlçedeki sahaların önemli bölümüne asfalt bitip stabilize yol başladıktan sonra ulaşılır. Bu, makinenin değil onu taşıyan aracın sınırıdır: lowbed aracın dönüş yarıçapı, yolun eğimi ve yağış sonrası zeminin taşıma gücü belirleyicidir. Uygulamada saha girişine kadar araçla gidilir, gerekirse makine giriş noktasında indirilip kendi tahrikiyle ilerletilir. Bu mesafeyi baştan bilmek gerekir; kendi tahrikiyle uzun mesafe yapan makine hem zaman hem akü harcar. Sahaya giden yolun bir fotoğrafı ve tahmini mesafesi, planlamayı büyük ölçüde netleştiriyor.",
            },
            {
                baslik: "Rüzgâr: çalışmayı durduran tek doğal sınır",
                metin:
                    "Bölgenin enerji yatırımlarına elverişli olmasını sağlayan rüzgâr, sepet çalışmasının en sert kısıtıdır. Yükseltilebilir platformların üretici tarafından tanımlanmış bir rüzgâr sınırı vardır ve bu sınır aşıldığında sepet yükseltilemez; kural, işin aciliyetine göre esnetilebilecek bir öneri değildir. Bom tipi makinelerde sepet yüksekliği arttıkça etki de büyür. Bu yüzden kırsal Sivrihisar işlerinde gün planını tek güne kilitlemiyoruz: iş için bir ana gün ve bir yedek gün belirliyor, sabah ölçülen koşula göre karar veriyoruz.",
            },
            {
                baslik: "Hangar hacimlerinde yükseklikten çok uzanma",
                metin:
                    "Havacılık merkezi çevresindeki hangarlar ve büyük açıklıklı tarımsal yapılar, geniş ama içi dolu hacimlerdir. Çatı makası altındaki aydınlatma, havalandırma ve kablo hattı işlerinde makine hedefin altına park edemez, çünkü altı genellikle uçak, planör, araç ya da depolanmış malzeme ile kaplıdır. Dolayısıyla seçim yatay uzanma üzerinden yapılır: teleskopik makine düz ve uzak hedeflerde park sayısını azaltır, eklemli makine ise makas ve kiriş arasına girmesi gereken işlerde üstündür. Karar, erişim eğrisinin tamamına bakılarak verilir; tek bir yükseklik rakamı yanıltıcıdır.",
            },
            {
                baslik: "Enerji sahası yapılarında güvenlik brifingi ve mesafe kuralı",
                metin:
                    "Şalt sahası ve dağıtım yapıları çevresinde çalışma, elektrik güvenliği kurallarına tabidir; enerjili ekipmana güvenli yaklaşma mesafesi korunmadan sepet hareket ettirilemez ve gerektiğinde ilgili bölümün enerjisi kesilerek kilitlenir. Bu tesislerde saha girişi öncesi güvenlik brifingi standarttır ve dış firma personeli bu brifinge katılmadan sahaya alınmaz. Biz de sevkiyat planını brifing saatine göre kuruyoruz; makine sabah erken teslim edilir, brifing tamamlandıktan sonra çalışma başlar. Bu sıralama bozulduğunda gün kaybı kaçınılmaz oluyor.",
            },
            {
                baslik: "Tarımsal yapılarda zemin ve mevsim penceresi",
                metin:
                    "Depo, ahır ve makine hangarı gibi tarımsal yapılarda zemin çoğunlukla beton değil sıkıştırılmış toprak ya da parçalı betondur; bu, bom tipi bir makinede stabilite açısından doğrudan risktir. Çözüm, arazi tipi geniş tekerlekli makine ve gerektiğinde zemin plakası kullanmaktır. İkinci belirleyici mevsimdir: hasat ve depolama dönemlerinde bu yapılar dolu ve trafik hâlindedir, bakım işleri için doğal pencere hasat öncesi ve sonrasıdır. Talebi bu pencerelere göre planlayan işletmeler hem daha rahat çalışıyor hem daha uygun fiyat alıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sivrihisar sahalarında koşul-makine eşleşmesi",
                paragraflar: [
                    "İlçedeki işleri zemin, ulaşım ve hava koşulu üzerinden sınıflandırıyoruz. Aşağıdaki tablo, keşif görüşmesinde kullandığımız çerçevedir; bir sahada birden çok satırın karşılığı bulunabilir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Zemin durumu", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Enerji sahası işletme binası", "Sıkıştırılmış toprak", "Rüzgâr ve brifing saati", "Arazi tipi eklemli"],
                        ["Şalt ve dağıtım yapısı", "Çakıl serilmiş saha", "Güvenli yaklaşma mesafesi", "Arazi tipi, sınırlı erişim"],
                        ["Hangar ve büyük açıklık", "Beton", "Yatay uzanma", "Teleskopik"],
                        ["Tarımsal depo ve ahır", "Toprak veya parçalı beton", "Stabilite ve mevsim", "Arazi tipi, zemin plakası"],
                        ["İlçe merkezi bina işleri", "Asfalt/beton", "Dar sokak ve park yeri", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Mesafeyi işe çevirmek: tek sevkiyatta çok nokta",
                paragraflar: [
                    "Sivrihisar'ın en büyük maliyet kalemi kiralama süresi değil, nakliyedir. İlçenin geniş yüzölçümü nedeniyle makinenin gidiş-dönüşü tek başına anlamlı bir bedel oluşturur ve bir saatlik iş için bu bedeli ödemek ekonomik değildir. Bu yüzden burada tek bir kural uyguluyoruz: makine geldiğinde yapılacak her şey hazır olmalı. Tavan iş listesi önceden çıkarılır, noktalar makinenin izleyeceği güzergâha göre sıralanır ve malzeme sahada bekler.",
                    "İkinci yöntem birden çok noktayı aynı sevkiyata toplamaktır. Aynı hat üzerindeki iki tesis, aynı köydeki iki işletme ya da aynı sahadaki farklı yapılar tek gün içinde sırayla dolaşılabilir; nakliye bir kez ödenir ve taraflar yalnızca kendi kullanım süresini üstlenir. Bu eşgüdümü biz kuruyoruz, sizden istediğimiz tek şey acil olmayan işlerde tarih esnekliği. İlçede en çok bu modelle çalışıyoruz.",
                ],
            },
            {
                baslik: "Yedek plan: kırsalda arıza ve hava iki ayrı risktir",
                paragraflar: [
                    "Merkezde arızalanan bir makine birkaç saat içinde değiştirilebilir; kırsalda aynı işlem yol mesafesi kadar uzar. Bu yüzden Sivrihisar'a giden makinelerde teslimat öncesi kontrolü daha geniş tutuyoruz: akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu, emniyet tertibatlarının işlevi tek tek doğrulanır. Uzun süreli işlerde yedek akü grubu ya da sahada şarj çözümü baştan planlanır, çünkü kırsal sahalarda uygun şarj noktası her zaman bulunmaz.",
                    "İkinci risk havadır ve bunun karşılığı sözleşmede olmalıdır. Rüzgâr veya yağış nedeniyle çalışılamayan günün nasıl değerlendirileceğini baştan yazıyoruz: alternatif güne aktarım, kısmi bekleme bedeli veya sevkiyatın ertelenmesi seçeneklerinden hangisinin geçerli olduğu teklifte açıkça yer alır. Bu netlik, kırsal işlerde en sık yaşanan anlaşmazlığı ortadan kaldırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamıza giden yol stabilize; makine buradan geçebilir mi?",
                cevap:
                    "Sorunun cevabı makineden çok taşıyıcı araca bağlı. Lowbed aracın yola girip dönebilmesi için yeterli genişlik ve dönüş alanı gerekir; eğim ve yağış sonrası zemin taşıma gücü de belirleyicidir. Bu şartlar sağlanmıyorsa makineyi saha girişinde indirip kendi tahrikiyle ilerletiyoruz — arazi tipi makineler bunun için uygundur, ancak uzun mesafede akü ve zaman harcarlar, bu yüzden mesafeyi baştan bilmek gerekir. Sizden istediğimiz iki şey var: yolun son bölümünün bir fotoğrafı ve asfaltın bittiği noktadan çalışma alanına yaklaşık mesafe. Bu ikisiyle hangi makinenin nasıl geleceğine kesin karar veriyoruz.",
            },
            {
                soru: "Rüzgâr yüzünden çalışma iptal olursa ne oluyor?",
                cevap:
                    "Bunu baştan sözleşmeye yazıyoruz, çünkü bu ilçede iptal ihtimali gerçek. Platformların üretici tarafından belirlenmiş rüzgâr sınırı vardır ve aşıldığında sepet yükseltilemez; bu kural pazarlığa açık değildir ve operatör aksini yapamaz. Uygulamada iş için bir ana gün ve bir yedek gün belirliyoruz. Makine sahada kalır ve koşul uygun olan gün çalışılır; bu durumda yalnızca kiralama süresi işler, ek bir ceza doğmaz. Sevkiyatın tümüyle ertelenmesi gerekiyorsa nakliye tekrarı söz konusu olacağı için kararı birlikte veriyoruz. Hangi seçeneğin geçerli olduğu teklifte yazılı olarak yer alır.",
            },
            {
                soru: "Hangar çatısındaki noktaya makine altına giremeden ulaşılabilir mi?",
                cevap:
                    "Evet, bom tipi makinelerin varlık sebebi tam olarak bu. Makine hangarın boş kalan kenarına park eder, bomunu içerideki uçak, araç ya da depolanmış malzemenin üzerinden aşırır ve sepet hedefin hizasına gelir; içeridekilerin yerinden oynatılmasına gerek kalmaz. Doğru sınıfı belirlemek için iki ölçü istiyoruz: hedefin zeminden kotu ile makinenin durabileceği zeminden hedefe kadarki yatay açıklık. Burada gözden kaçan ayrıntı şudur: bir bom, en yüksek kotuna ancak uzanmasını kısarak çıkar; ikisi birlikte kullanılamaz. Bu nedenle sınıf kararını katalog satırından değil, üreticinin erişim diyagramından okuyoruz.",
            },
            {
                soru: "Enerji tesisimizin şalt sahasında çalışılacak; nasıl bir prosedür işliyor?",
                cevap:
                    "Prosedürü tesisin kendi güvenlik düzeni belirler, biz ona uyarız. Standart akış şu şekilde işliyor: sahaya girecek kişilerin bilgileri önceden bildirilir, giriş günü güvenlik brifingi alınır ve iş izni formu doldurulur. Enerjili ekipmana güvenli yaklaşma mesafesi korunmadan sepet hareket ettirilmez; mesafenin korunamayacağı işlerde ilgili bölümün enerjisi kesilir ve pano kilitlenir. Bu kararı tesisin teknik sorumlusuyla birlikte veriyoruz, tek taraflı bir değerlendirme yapmıyoruz. Sevkiyat planını brifing saatine göre kuruyoruz — makine sabah erken teslim edilir, brifing bittiğinde iş başlar ve gün kaybı yaşanmaz.",
            },
            {
                soru: "Ahır ve depo binamızın zemini beton değil; sakıncası var mı?",
                cevap:
                    "Doğrudan sakıncası var ve önlem alınmadan çalışmıyoruz. Sıkıştırılmış toprak veya parçalı beton zeminde bom açıldığında yük tek noktada yoğunlaşır; zemin oturursa makine dengesini kaybeder. Çözüm iki katmanlı: arazi tipi geniş tekerlekli makine kullanmak ve gerekli görülen noktalarda zemin plakası sermek. Yağış sonrası yumuşamış zeminde ise çalışmayı erteliyoruz, plaka bile yeterli olmuyor. Keşifte zeminin cinsini ve son yağış durumunu soruyoruz; mümkünse çalışma noktasının bir fotoğrafını istiyoruz. Bu ilçedeki devrilme riskinin neredeyse tamamı zeminden kaynaklandığı için bu konuda esnek davranmıyoruz.",
            },
            {
                soru: "İlçedeki birkaç işletme birlikte kiralayabilir mi?",
                cevap:
                    "Sivrihisar'da en çok önerdiğimiz model bu. İlçenin geniş olması nedeniyle nakliye, toplam bedelin belirgin bir parçasını oluşturur; tek bir kısa iş için bu payı tek başına üstlenmek ekonomik değildir. Aynı hat üzerindeki tesisler, aynı köydeki işletmeler ya da aynı sahadaki farklı yapılar tek gün içinde sırayla dolaşılabilir. Nakliye bir kez ödenir ve bölünür, her taraf yalnızca kendi kullanım saatini üstlenir. Sıralamayı ve zaman planını biz kurguluyoruz; sizden istediğimiz, acil olmayan işlerde birkaç günlük tarih esnekliği. Hasat öncesi ve sonrası dönemlerde bu model özellikle iyi çalışıyor, çünkü benzer işler aynı haftalarda gündeme geliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Sivrihisar'ın geniş yüzölçümü, rüzgâra açık plato yapısı, havacılık merkezi ve planör faaliyetleriyle tanınması ile tarımsal yapı yoğunluğu kamuya açık genel bilgidir; rüzgâr sınırı, güvenli yaklaşma mesafesi ve zemin taşıma gücü kuralları makine üretici talimatları ile İSG uygulamalarından gelir.",
    },

    "bolge:odunpazari": {
        h1: "Odunpazarı'nda Kurumsal Yapılar ve Hassas İmalat için Platform Kiralama",
        giris:
            "Odunpazarı, Eskişehir'in tarihi çekirdeğini ve kentin kurumsal ağırlığının önemli bölümünü taşıyan merkez ilçesidir. Bizim buradaki iş dağılımımız iki kutupludur. Bir yanda kamu binaları, eğitim yapıları, kültür ve hizmet tesisleri var; bunlarda platform işi bir üretim meselesi değil, kullanım dışı saat bulma meselesidir. Diğer yanda ilçenin dokusuna gömülmüş küçük hassas imalat atölyeleri var; bunların bir bölümü ilin havacılık ve savunma tedarik zincirine parça, kalıp veya işleme hizmeti veriyor ve büyük tesislerdeki kalite disiplininin küçültülmüş bir halini uyguluyor. İkinci grup, ölçeği küçük olmasına rağmen bizden en fazla evrak ve kayıt talep eden gruptur — çünkü kendi müşterisine karşı izlenebilirlik yükümlülüğü altında. Bu ilçede doğru makine bu yüzden en yükseğe çıkan değil, dar kapıdan geçen, iz bırakmayan, sessiz çalışan ve dosyası eksiksiz olan makinedir.",
        maddeler: [
            {
                baslik: "Küçük atölyede büyük tesis disiplini",
                metin:
                    "Havacılık zincirine iş yapan küçük bir atölye, müşterisinin denetimine tabidir ve bu denetim kendi tavan bakımına da uzanır. Pratikte bu, birkaç kişilik bir işletmenin bizden periyodik kontrol raporu, operatör yeterlilik belgesi ve iş sonu kayıt istemesi anlamına gelir. Bu talebi fazlalık olarak görmüyoruz; aksine belgeleri sevkiyattan önce elektronik olarak gönderip onay alıyoruz. Aynı disiplin sahada da sürer: çalışma noktasının altı örtülür, sepete çıkan aletler sayılır ve iş sonunda tekrar sayılır. Küçük ölçek, düşen bir parçanın işlenmiş bir yüzeye vermesi olası hasarı küçültmez.",
            },
            {
                baslik: "Dar kapı, dolu koridor ve iz bırakmayan geçiş",
                metin:
                    "İlçenin üretim ve hizmet yapıları kent dokusunun içinde büyümüş binalardır; kapılar dar, koridorlar yıllar içinde eklenmiş donanımla sıkışmış durumdadır. Bu yüzden ilk sorumuz erişim yüksekliği değil geçiş ölçüsüdür: en dar açıklığın genişliği, en keskin dönüşün alanı ve çalışma noktasındaki manevra payı. Kompakt gövdeli akülü makineler bu profile göre seçilir. Kamu ve kültür yapılarında ise ikinci bir şart devreye girer — cilalı veya taş kaplı zeminde iz bırakmamak. Makine binaya alınmadan tekerlekleri silinir, gerekli görülen güzergâhta koruma örtüsü serilir.",
            },
            {
                baslik: "Kamu ve eğitim yapılarında pencere ve refakat",
                metin:
                    "Kamu binaları, okullar ve kültür yapılarında yüksek erişim işi kullanım sürerken yapılmaz; pencere akşam saatleri, hafta sonu veya tatil dönemleridir. Bu yapılarda ikinci gerçek refakattir: dış firma personeli genellikle kurum görevlisi eşliğinde çalışır ve bina anahtarları ile alarm sistemi kurumun sorumluluğundadır. Dolayısıyla planlama tek taraflı yapılamaz. Teslimat saatini, çalışma başlangıcını ve bina kapanış saatini kurum görevlisiyle birlikte yazılı olarak belirliyoruz; bu netleşmeden makineyi yola çıkarmıyoruz.",
            },
            {
                baslik: "Ziyaretçi trafiği olan hacimlerde alan güvenliği",
                metin:
                    "Kültür yapıları, hizmet binaları ve ticari holler gibi ziyaretçi giren hacimlerde çalışma alanının fiziksel olarak kapatılması esastır. Şerit değil, bariyer kullanıyoruz; çünkü şerit yalnızca uyarır, bariyer geçişi engeller. Makinenin hareket koridoru ziyaretçi güzergâhından ayrılır ve kesişme noktasında bir gözcü bulunur. İş bittiğinde alan süpürülür, örtüler toplanır ve teslim edilir. Bu düzeni kurmak birkaç dakika sürer ama ilçedeki en sık yaşanan sorunu — ziyaretçinin çalışma alanına dalmasını — tümüyle önler.",
            },
            {
                baslik: "Kent içi sevkiyatta saat ve park planı",
                metin:
                    "Odunpazarı'na mesafe kısa, sokaklar dardır ve tarihi doku içinde araç park etmek kolay değildir. Bu yüzden teslimat saatini trafik yoğunluğuna göre planlıyoruz: akşam penceresi için öğleden sonra, sabah penceresi için erken saat. Aracın duracağı nokta ile makinenin indirileceği yer arasındaki mesafe önceden konuşulur; yanlış planlanan bir indirme, kazanılan zamanı geri alır. Aynı sokaktaki veya aynı yapı adasındaki işleri tek güne toplamak ise nakliye payını bölen en pratik çözümdür ve ilçede sıkça uyguluyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre pencere, hazırlık ve makine",
                paragraflar: [
                    "İlçedeki işlerimiz yapı tipine göre belirgin ayrışır; çalışma penceresi, ön hazırlık ve makine sınıfı bu ayrımdan çıkar. Aşağıdaki tablo keşif görüşmesinin çerçevesidir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Çalışma penceresi", "Ön hazırlık", "Makine sınıfı"],
                    satirlar: [
                        ["Hassas imalat atölyesi", "Mesai dışı", "Belge dosyası, alet sayımı", "Kompakt akülü eklemli"],
                        ["Kamu hizmet binası", "Akşam, hafta sonu", "Refakat ve anahtar planı", "Akülü makaslı"],
                        ["Eğitim yapısı", "Tatil ve dönem arası", "Zemin koruma, giriş ölçüsü", "Kompakt akülü"],
                        ["Kültür ve ziyaretçi yapısı", "Kapanış sonrası", "Bariyer ve gözcü", "İz bırakmayan lastik"],
                        ["Ticari hol ve mağaza", "Kapanış sonrası", "Alan kapatma, temizlik", "Akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "İç mekâna makine sokmadan önce alınan altı ölçü",
                paragraflar: [
                    "Kent içi yapılarda en sık yaşanan aksaklık, makinenin binaya girememesidir ve bu tümüyle önlenebilir bir durumdur. Sevkiyattan önce şu altı ölçüyü istiyoruz: giriş kapısının net genişliği ve yüksekliği, giriş önündeki eşik veya basamak durumu, koridorun en dar noktası, ilk dönüşün alanı, kat değişimi varsa asansör kabin ölçüsü ve taşıma kapasitesi, çalışma noktasındaki serbest manevra alanı. Altısı da net olduğunda hangi makinenin gireceğini kesin söyleyebiliyoruz.",
                    "Bu listeye çoğu zaman yedinci bir başlık ekleniyor: zemin taşıma kapasitesi. Asma kat, bodrum üstü döşeme veya tarihi yapı zemininde makinenin toplam ağırlığı ve tekerlek başına düşen yük kontrol edilmelidir. Bu bilgi yapının teknik sorumlusunda bulunur; bizden istenirse makinenin ağırlık ve tekerlek yükü değerlerini yazılı olarak veriyoruz, karar yapı sorumlusuyla birlikte alınıyor.",
                ],
            },
            {
                baslik: "Belge ve sorumluluk sınırı: kimde ne var",
                paragraflar: [
                    "Bu ilçede en sık karışan konu, hangi belgenin kimden isteneceğidir. Ayrım nettir: makinenin periyodik kontrol raporu ve teknik dosyası bizden istenir; platformu kullanacak kişinin mesleki yeterlilik belgesi ise kullanan taraftan. Belge kişiye aittir, kalıcıdır ve makine ailesine göre alınır — makaslı platform için alınmış bir belge bom tipi makinenin kullanımını kapsamaz. İşin kısa sürmesi ya da personelin deneyimli olması bu şartı değiştirmez.",
                    "İşletmenizde belgeli personel yoksa iki yol var. Kısa işlerde operatörlü kiralama en hızlısıdır; operatör iş süresince sahada kalır. İhtiyaç yıl içinde tekrarlıyorsa personelinizden birinin belge alması daha ekonomiktir, çünkü sonraki kiralamalar operatörsüz kurulur. Havacılık zincirine iş yapan atölyelerde ikinci seçenek ayrıca avantajlıdır — dışarıdan giren kişi sayısı azalır ve müşteri denetimlerinde açıklanacak bir kalem eksilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Müşterimiz denetim yapıyor; kullandığınız makinenin belgelerini alabilir miyiz?",
                cevap:
                    "Alabilirsiniz ve bunu talep etmenizi beklemeden gönderiyoruz. Standart olarak ilettiğimiz dosya üç parçalıdır: makinenin geçerli periyodik kontrol raporu, makinenin marka-model-seri tanımını içeren teknik bilgi sayfası ve operatörlü kiralamada operatörümüzün mesleki yeterlilik belgesi. Bunlara iş sonunda imzalanan kabul formunu da ekleyebiliyoruz; formda teslim saati, sayaç durumu ve sahaya götürülen alet sayımı yer alır. Bu evrak seti, müşteri denetiminde tavan bakımıyla ilgili sorulan soruların hemen tamamını karşılıyor. Belgelerin tarih geçerliliğini sevkiyattan önce kontrol ediyoruz; süresi dolmak üzere olan bir raporla makine göndermiyoruz.",
            },
            {
                soru: "Atölyemizde işlenmiş yüzeyler var; yukarıdan bir şey düşme riskini nasıl yönetiyorsunuz?",
                cevap:
                    "Üç katmanlı bir düzenle. Birinci katman sayımdır: sepete çıkarılan her el aleti ve sarf malzemesi liste üzerinden kaydedilir, iş sonunda aynı liste tekrar sayılır ve sayı tutmadan alan terk edilmez. İkinci katman bağlamadır — aletler emniyet bağıyla sepete bağlanır, küçük parçalar kapalı kutuda tutulur. Üçüncü katman fiziksel korumadır: çalışma noktasının altına örtü serilir ve mümkünse hassas yüzeyler geçici olarak kapatılır. Ek olarak makine sahaya girmeden hidrolik bağlantıları damlama açısından kontrol edilir. Bu düzenin maliyeti birkaç dakikalık hazırlık; karşılığında işlenmiş bir yüzeyin hurdaya ayrılma riski ortadan kalkıyor.",
            },
            {
                soru: "Kamu binamızda çalışacaksınız; bina kapalıyken nasıl bir düzen kuruluyor?",
                cevap:
                    "Planı kurum görevlinizle birlikte yapıyoruz, tek taraflı kurgulamıyoruz. Yazılı olarak netleştirdiğimiz başlıklar şunlar: makinenin teslim saati ve nereye bırakılacağı, çalışmanın başlangıç ve bitiş saati, binada refakat edecek görevlinin kim olacağı, alarm ve kapı düzeninin nasıl işleyeceği, iş bitiminde alanın kime teslim edileceği. Bu beş başlık netleşmeden makineyi yola çıkarmıyoruz, çünkü kapalı binada yaşanan bir aksaklığın çözümü olmuyor. Çalışma sırasında zemin koruma örtüsü kullanıyor, iş bitiminde alanı süpürülmüş ve toplanmış hâlde teslim ediyoruz. Akülü makineler sessiz çalıştığı için akşam saatlerinde çevre yapılarda rahatsızlık oluşturmuyor.",
            },
            {
                soru: "Kapımız dar ve koridorumuz dolu; makine girebilir mi?",
                cevap:
                    "Büyük olasılıkla girer, ama kapı ölçüsü tek başına yeterli bilgi değil. Kompakt gövdeli akülü modeller dar servis kapılarından geçecek genişlikte ve düşük kapalı yükseklikte üretilir. Asıl belirleyici olan kapıdan sonrasıdır: ilk dönüşün alanı, koridorun en dar noktası ve çalışma yerindeki manevra payı. İlçede makineyi durduran şey çoğunlukla kapının kendisi değil, hemen ardından gelen köşe oluyor. Kat değişimi varsa asansör kabin ölçüsü ve taşıma kapasitesi de gerekiyor. Bu ölçüleri ve giriş güzergâhının birkaç fotoğrafını paylaşırsanız hangi modelin gireceğini kesin olarak söyleyebiliriz — sahada kapının önünde kalan bir makine ikimizin de zamanını harcıyor.",
            },
            {
                soru: "Ziyaretçi girişi olan bir hacimde çalışacağız; alanı nasıl güvene alıyorsunuz?",
                cevap:
                    "Uyarı şeridi yerine fiziksel bariyer kullanarak. Şerit yalnızca uyarı verir, kararlı bir ziyaretçiyi durdurmaz; bariyer ise geçişi engeller. Çalışma noktasının düşey izdüşümü ve çevresindeki güvenlik payı bariyerle çevrilir, altına örtü serilir. Makinenin hareket koridoru ziyaretçi güzergâhından ayrılır; ikisinin kesişmesi kaçınılmazsa o noktada bir gözcü bulunur. Mümkün olan her durumda işi kapanış sonrası saatlere alıyoruz — bu, hem güvenlik hem hız açısından açık ara en iyi seçenek. İş bitiminde bariyerler kaldırılmadan önce alan süpürülür ve gözle kontrol edilir; küçük bir vida bile kalmadan teslim ederiz.",
            },
            {
                soru: "Aynı sokakta birkaç işletmeyiz; birlikte kiralamak avantaj sağlar mı?",
                cevap:
                    "Sağlar ve ilçedeki dar sokak koşullarında ayrıca pratiktir. Nakliye, kısa süreli işlerde toplam bedelin belirgin bir parçası; işleri aynı güne topladığınızda bu pay bölünür ve herkesin birim maliyeti düşer. İkinci kazanç lojistiktir: tarihi dokuda araç park etmek zor olduğu için makineyi bir kez indirip gün boyunca yakın noktalar arasında kendi tahrikiyle dolaştırmak, her seferinde yeniden sevkiyat yapmaktan çok daha kolay. Sırayı ve saat planını biz kurguluyoruz; sizden istediğimiz sadece tarih esnekliği. Bu model özellikle dönemsel işlerde — havalandırma bakımı, aydınlatma yenileme, tabela ve cephe kalemlerinde — iyi çalışıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Odunpazarı'nın tarihi kent çekirdeğini barındırması ve kurumsal yapı stokunun buradaki ağırlığı kamuya açık bilgidir; mesleki yeterlilik belgesi ve periyodik kontrol raporu zorunluluğu mevzuattan, alet sayımı ve alan güvenliği uygulamaları saha pratiğinden gelir.",
    },

    "bolge:tepebasi": {
        h1: "Tepebaşı'nda Kurumsal Tesisler ve Teknik Yapılar için Platform Kiralama",
        giris:
            "Tepebaşı, kentin idari ve teknik omurgasının önemli bölümünü barındıran merkez ilçelerden biridir: yönetim binaları, sağlık ve eğitim yapıları, kent altyapısına hizmet eden teknik tesisler ve büyük hacimli hizmet yapıları burada yoğunlaşır. Bu ilçede platform işini belirleyen şey üretim takvimi değil, kurum işleyişidir — bir binanın kullanımı durdurulmaz, çalışma o kullanımın etrafından dolaşarak yapılır. İkinci belirleyici ise erişim yetkisidir: bu yapıların çoğunda hangi hacme kimin girebileceği yazılı olarak tanımlıdır ve dış firma personeli bu tanımın dışına çıkamaz. Havacılık ve savunma zincirinden gelen alışkanlıklarımız burada işimize yarıyor, çünkü ikisinde de aynı şey isteniyor: önceden bildirim, sınırlı erişim, eksiksiz kayıt. Bize kalan teknik kısım ise tanıdık — dar geçişten giren, iz bırakmayan, sessiz çalışan ve hedefe yandan uzanan makineyi doğru seçmek.",
        maddeler: [
            {
                baslik: "Kesintiye uğramayan kurum işleyişinin etrafında çalışmak",
                metin:
                    "Bir hizmet binasında çalışmanın en zor yanı, işi durduramamaktır. Çözüm, işi kullanım yoğunluğunun düştüğü saatlere taşımak ve alanı bölerek ilerlemektir: hol tümüyle kapatılmaz, çalışma bölümü bariyerlenir, kullanıcı akışına alternatif güzergâh açılır ve iş bittikçe bariyer ilerletilir. Bu yöntem uzun holler ve koridorlarda çok işe yarar. Planı kurumun kendi işleyişini bilen görevlisiyle birlikte kuruyoruz; dışarıdan bakarak yapılan bir bölümlendirme neredeyse her zaman yanlış yerden geçiyor.",
            },
            {
                baslik: "Yetki sınırı ve önceden bildirim disiplini",
                metin:
                    "Kurumsal yapılarda hangi hacme kimin girebileceği tanımlıdır; sunucu odası, arşiv, laboratuvar veya yönetim katı gibi bölümler ayrı izne tabidir. Dış firma olarak bu sınırları önceden öğrenmek, sahada tartışmaktan çok daha kolaydır. Standart uygulamamız, sahaya girecek kişilerin bilgilerini ve çalışılacak bölümleri en az bir gün önce yazılı olarak bildirmektir. Bazı kurumlarda kamera ve cihaz kısıtı da bulunur; bu durumda görsel raporlamayı bırakıp yazılı iş kabul formuna geçiyoruz. Bu disiplin, kapıda kaybedilen saatleri ortadan kaldırıyor.",
            },
            {
                baslik: "Teknik tesislerde enerji, mesafe ve iş izni",
                metin:
                    "İlçedeki pompa istasyonları, dağıtım merkezleri ve ısıtma tesislerinde çalışma alanı dar, çevresi ise hareketlidir. Buradaki temel kural enerjili ekipmana güvenli yaklaşma mesafesinin korunmasıdır; mesafenin sağlanamadığı işlerde ilgili bölümün enerjisi kesilir ve pano kilitlenir. Bu karar tesisin teknik sorumlusuyla birlikte verilir, tek taraflı alınmaz. İkinci kural alan kapatmadır: çalışma noktasının altı fiziksel olarak kapatılır ve makinenin hareket koridoru personel geçişinden ayrılır. Her iki kalem de iş izni formuna yazılır.",
            },
            {
                baslik: "Yüksek hollü hizmet yapılarında temiz ve sessiz müdahale",
                metin:
                    "Büyük hacimli hizmet ve ticaret yapılarında tavan altı kalemleri yıl içinde tekrar tekrar açılır: armatür yenileme, menfez ve kanal bakımı, tabela ve yönlendirme, asma tavan onarımı. Bu ortamlarda beklenti nettir: alan mümkün olan en kısa süre kapatılsın ve iş bitiminde hiçbir iz kalmasın. Akülü ve iz bırakmayan lastikli makineler cilalı zeminde işaret bırakmadan hareket eder; sessiz ve emisyonsuz çalışma bu yapılarda pazarlık konusu değil, kapıdan girmenin ön koşuludur. Alanın çevresi kapatılır, zemine koruma serilir ve iş genellikle kapanıştan sonraki saatlere alınır.",
            },
            {
                baslik: "Merkez ilçe lojistiği: mesafe kısa, saat kritik",
                metin:
                    "Tepebaşı'na sevkiyat mesafesi kısadır; belirleyici olan saat planıdır. Kalabalık saatlerde bir platformu araçtan indirmek hem işi geciktirir hem çevredeki akışı tıkar, bu yüzden teslimatı erken sabah ya da öğleden sonraya alıyoruz. Aracın nerede duracağı, boşaltmanın hangi noktada yapılacağı ve makinenin bina kapısına kadar hangi hattı izleyeceği baştan kararlaştırılır. Bu ilçede en sık yaşanan gecikme makineden değil, aracın uygun park noktası bulamamasından kaynaklanır; kurumun otopark veya servis girişini kullanma izni önceden alındığında sorun tümüyle ortadan kalkar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kurum tipine göre erişim izni ve çalışma düzeni",
                paragraflar: [
                    "Aşağıdaki tablo, Tepebaşı'ndaki kurumsal ve teknik yapılarda çalışma düzenini belirleyen başlıkları özetler. Keşif görüşmesinde bu satırlardan hangisinde olduğunuzu belirleyip hazırlık listesini ona göre çıkarıyoruz.",
                ],
                tablo: {
                    basliklar: ["Kurum tipi", "Erişim izni", "Çalışma düzeni", "Makine tercihi"],
                    satirlar: [
                        ["Yönetim ve hizmet binası", "Ziyaretçi kaydı + refakat", "Mesai dışı, bölümlü", "Kompakt akülü makaslı"],
                        ["Sağlık yapısı", "Bölüm bazlı izin", "Düşük yoğunluk saati", "Sessiz akülü, iz bırakmayan"],
                        ["Eğitim ve araştırma yapısı", "Bölüm sorumlusu onayı", "Tatil ve dönem arası", "Kompakt akülü"],
                        ["Teknik tesis", "İş izni formu", "Enerji kesme, mesafe kuralı", "Kompakt eklemli"],
                        ["Yüksek hollü ticaret yapısı", "İşletme izni", "Kapanış sonrası", "Akülü, geniş erişim"],
                    ],
                },
            },
            {
                baslik: "Bina içine girişte kontrol edilen yedi başlık",
                paragraflar: [
                    "İç mekân işlerinde sevkiyat öncesi şu yedi başlığı kontrol ediyoruz: giriş kapısının net ölçüsü, eşik ve rampa durumu, koridorun en dar noktası, dönüş alanı, kat değişimi varsa asansör kabin ölçüsü ve kapasitesi, zemin kaplaması ve taşıma kapasitesi, çalışma noktasındaki serbest manevra payı. Kurumsal binalarda bu bilgilerin çoğu teknik işler biriminde hazır bulunur; talep ettiğimizde çoğunlukla aynı gün geliyor.",
                    "Zemin taşıma kapasitesi bu listenin en kritik maddesidir ve atlanmaması gerekir. Asma kat, galeri döşemesi veya bodrum üstü hacimlerde makinenin toplam ağırlığı kadar tekerlek başına düşen yük de önemlidir. Bu değerleri yazılı olarak veriyoruz; kararı yapının teknik sorumlusuyla birlikte alıyoruz. Değerler uygun değilse daha hafif bir makine sınıfına geçmek ya da yük dağıtıcı plaka kullanmak gündeme gelir.",
                ],
            },
            {
                baslik: "Kurumsal kiralamada evrak ve fatura akışı",
                paragraflar: [
                    "Kurumsal ve kamu tarafında iş, teknik hazırlıktan çok evrak akışında yavaşlar. Bunu hızlandırmak için standart setimizi talep beklemeden gönderiyoruz: makinenin periyodik kontrol raporu, teknik bilgi sayfası, operatörlü kiralamada yeterlilik belgesi, sigorta ve vergi durumuna dair belgeler ile teklif metni. Kurumun kendi tedarik formatı varsa teklifi o formatta yeniden düzenliyoruz; bu, satın alma sürecinde geri dönüş sayısını belirgin azaltıyor.",
                    "Ödeme ve fatura tarafında ise iki noktayı baştan netleştiriyoruz: kiralama süresinin hangi saatte başlayıp bittiği ve nakliyenin ayrı kalem mi yoksa dâhil mi olduğu. Kurumsal işlerde en sık yaşanan anlaşmazlık bu iki başlıkta çıkıyor; teklifte açıkça yazıldığında sonradan tartışma olmuyor. Tekrarlayan ihtiyacı olan kurumlarla yıllık çerçeve anlaşma kuruyoruz, böylece her talep için baştan süreç işletilmiyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Binamız hizmet vermeye devam edecek; çalışma nasıl planlanıyor?",
                cevap:
                    "Binayı kapatmadan, alanı bölerek ilerliyoruz. Çalışma bölümü fiziksel bariyerle çevrilir, kullanıcı akışına alternatif güzergâh açılır ve iş ilerledikçe bariyer bir sonraki bölüme taşınır; böylece hiçbir anda binanın tamamı kapanmaz. Bu yöntem uzun koridorlarda ve büyük hollerde çok verimli çalışıyor. Bölümlendirmeyi kurumunuzun işleyişini bilen görevliyle birlikte yapıyoruz, çünkü dışarıdan bakarak çizilen sınır neredeyse her zaman yanlış yerden geçiyor. Kullanım yoğunluğunun düştüğü saatler varsa işi oraya kaydırmak en iyi seçenek; akülü makineler sessiz çalıştığı için mesai saatleri içinde bile rahatsızlık düzeyi düşük kalıyor.",
            },
            {
                soru: "Bazı bölümlerimize giriş yetkisi sınırlı; bu bir sorun yaratır mı?",
                cevap:
                    "Yaratmaz, yeter ki önceden bilelim. Standart uygulamamız, sahaya girecek kişilerin bilgilerini ve çalışılacak bölümleri en az bir gün önce yazılı olarak bildirmek. Yetki gerektiren hacimlerde refakatli çalışmayı kabul ediyoruz ve refakatçinin uygun olduğu saatlere göre planı kuruyoruz. Kamera ve cihaz kısıtı olan bölümlerde fotoğraf çekimini tümüyle bırakıp yazılı iş kabul formuna geçiyoruz; formda teslim saati, sayaç durumu, hasar kaydı ve alet sayımı yer alır. Bu düzen bizim için alışılmadık değil — ilin havacılık ve savunma tedarikçilerinde benzer rejimlerde düzenli çalışıyoruz.",
            },
            {
                soru: "Teknik tesisimizde enerjili ekipman var; çalışma güvenli yürütülebilir mi?",
                cevap:
                    "Yürütülebilir, ancak kararı birlikte vermemiz gerekir. Temel kural, enerjili ekipmana güvenli yaklaşma mesafesinin korunmasıdır; sepet bu mesafenin içine giremez. Mesafenin sağlanamayacağı işlerde tek kabul edilebilir yol, ilgili bölümün enerjisini kesip panoyu kilitlemektir — bu kararı tesisinizin teknik sorumlusuyla birlikte alıyoruz ve iş izni formuna yazıyoruz. Ayrıca çalışma noktasının altı fiziksel olarak kapatılır ve makinenin hareket koridoru personel geçişinden ayrılır. Dar teknik hacimlerde kompakt gövdeli makineleri tercih ediyoruz; manevra alanı daraldıkça makine boyutunun önemi erişim yüksekliğinin önüne geçiyor.",
            },
            {
                soru: "Asma katımızın zemini makineyi taşır mı?",
                cevap:
                    "Bunu tahminle değil, sayıyla karara bağlamak gerekir. Sizden zeminin taşıma kapasitesini, bizden makinenin toplam ağırlığı ile tekerlek başına düşen yük değerlerini masaya koyuyoruz; kararı yapınızın teknik sorumlusu veriyor. Değerler yeterli değilse iki seçenek var: daha hafif bir makine sınıfına geçmek ya da yükü yayan zemin plakası kullanmak. Bazı durumlarda üçüncü bir yol da mümkün oluyor — hedefe alt kattan, bom tipi bir makineyle boşluk üzerinden uzanarak ulaşmak. Galeri boşluğu olan yapılarda bu çözüm hem daha güvenli hem daha hızlı çıkıyor. Yapının kesit bilgisini paylaşırsanız hangisinin uygun olduğunu birlikte değerlendirebiliriz.",
            },
            {
                soru: "Satın alma sürecimiz için hangi belgeleri sağlıyorsunuz?",
                cevap:
                    "Talep beklemeden gönderdiğimiz standart bir set var: makinenin geçerli periyodik kontrol raporu, marka-model-seri bilgisini içeren teknik sayfa, operatörlü kiralamada operatörün mesleki yeterlilik belgesi, sigorta ve vergi durumuna ilişkin belgeler ile ayrıntılı teklif metni. Kurumunuzun kendi tedarik formatı veya form şablonu varsa teklifi o formatta yeniden düzenliyoruz. Bu tek adım, satın alma sürecindeki geri dönüş sayısını belirgin şekilde azaltıyor. Teklifte ayrıca kiralama süresinin hangi saatte başlayıp bittiğini ve nakliyenin ayrı kalem mi dâhil mi olduğunu açıkça yazıyoruz — kurumsal işlerde anlaşmazlık çıkan başlıklar hemen her zaman bu ikisi.",
            },
            {
                soru: "Yıl içinde birden çok kez ihtiyacımız oluyor; her defasında süreç baştan mı işleyecek?",
                cevap:
                    "Gerekmiyor; tekrarlayan ihtiyaçlarda yıllık çerçeve anlaşma öneriyoruz. Fiyatlandırma, belge akışı, teslim ve iade koşulları bir kez netleştikten sonra sonraki talepler tek yazışmayla sevkiyata dönüşüyor. Kurumsal tarafta bunun asıl kazancı hızdır: acil bir ihtiyaçta satın alma sürecinin baştan işletilmesi günler alabilirken, çerçeve anlaşma bunu saatlere indiriyor. İkinci kazanç planlamadır — bina genelindeki dönemsel işleri, örneğin havalandırma bakımı ile aydınlatma yenilemeyi aynı sevkiyata toplayıp nakliye payını tek kaleme indiriyoruz. Bunun için sizden istediğimiz tek şey, acil olmayan işlerde birkaç günlük tarih esnekliği.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Kentin idari ve teknik yapı stokunun Tepebaşı'nda yoğunlaşması kamuya açık bilgidir; güvenli yaklaşma mesafesi, enerji kesme-kilitleme ve iş izni uygulamaları İSG mevzuatı ve saha pratiğinden, zemin taşıma kapasitesi kontrolü yapı mühendisliği pratiğinden gelir.",
    },

    "bolge:eskisehir-2-osb": {
        h1: "Eskişehir 2. OSB'de Tedarikçi Tesisleri için Platform Kiralama",
        giris:
            "Eskişehir'in ikinci organize sanayi alanı, ilin sanayi büyümesinin yeni kuşağını barındırır ve buradaki tesislerin önemli bölümü bir başkasının müşterisidir — yani kendi ürününü değil, bir ana sanayinin şartnamesine göre üretilmiş parçayı teslim eder. Bu tek cümle, bölgedeki çalışma kültürünün tamamını açıklar. Şartnameye göre üreten bir tesiste her şey belgelenir: hangi hacimde kim çalıştı, hangi ekipman girdi, hangi kayıt tutuldu. Dolayısıyla bir platform kiralamak, burada teknik bir tedarik değil, denetlenebilir bir hizmet alımıdır. Bölgenin fiziksel özellikleri de bu rejimle uyumludur — parseller büyük, holler yüksek, servis kapıları geniş ve saha betonu düzgündür; yani merkezdeki dar kapı ve sıkışık koridor sorunlarının hemen hepsi burada gündeme gelmez. Buna karşılık erişim mesafeleri uzar, tavan kotları yükselir ve dolayısıyla makine seçiminde hata payı daralır. Bizim bu bölgedeki işimiz iki başlıkta toplanıyor: dosyayı eksiksiz teslim etmek ve erişim eğrisini doğru okumak.",
        maddeler: [
            {
                baslik: "Şartnameli üretimde ekipmanın izlenebilirliği",
                metin:
                    "Ana sanayiye parça veren tesisler düzenli denetlenir ve denetimin kapsamı yalnızca tezgâhla sınırlı değildir; hacimde çalışan dış firma ekipmanı da sorulur. Bu yüzden kiraladığınız platformun dosyası, sizin kalite kaydınızın parçası hâline gelir. Standart olarak gönderdiğimiz set periyodik kontrol raporu, makinenin seri bilgisiyle birlikte teknik tanımı ve operatör yeterlilik belgesinden oluşur. İş sonunda ise imzalı kabul formu bırakıyoruz. Bu belgeler bir formalite değil; denetimde tavan bakımına ilişkin sorulan soruların doğrudan cevabı oluyor.",
            },
            {
                baslik: "Yabancı madde riski ana sanayiye kadar gider",
                metin:
                    "Havacılık ve savunma zincirine üretim yapan bir tesiste, bir parçanın içinde kalan yabancı cisim yalnızca o parçanın hurdaya ayrılmasıyla sonuçlanmaz; ana müşteriye bildirim, kök neden analizi ve düzeltici faaliyet zinciri başlar. Yukarıda çalışan bir platform bu riskin doğrudan kaynağıdır. Bu yüzden bölgeye giden makinelerde sayım disiplinini standart uyguluyoruz: sepete çıkan alet ve sarf listelenir, emniyet bağıyla bağlanır, iş sonunda tekrar sayılır. Çalışma noktasının altı örtülür ve alan gözle taranmadan teslim edilmez.",
            },
            {
                baslik: "Yüksek tavanlı yeni hollerde erişim eğrisini okumak",
                metin:
                    "Yeni kuşak hollerde tavan kotu, eski sanayi yapılarına göre belirgin yukarıdadır; çatı konstrüksiyonuna giren işlerde gereken erişim sınıfı da buna bağlı olarak sıçrar. Burada belirleyici olan tek bir rakam değil, makinenin erişim eğrisidir: bom tipi makinelerde maksimum yükseklik ile maksimum yatay uzanma aynı anda kullanılamaz, biri arttıkça diğeri düşer. Tedarikçi hollerinde hedefin altı test düzeneği, raf sistemi veya işleme merkeziyle dolu olduğu için makine hedefin dibine park edemez; dolayısıyla karar her zaman eğrinin üzerindeki bir noktaya bakılarak verilir.",
            },
            {
                baslik: "Kapasite artışı dönemlerinde uzun süreli kiralama",
                metin:
                    "Bölgedeki tesislerin bir bölümü hâlâ büyüme evresindedir; yeni hol ekleniyor, mevcut hacim yeni ürüne göre düzenleniyor, altyapı genişletiliyor. Bu evrede platform ihtiyacı tek seferlik değil, haftalara yayılan bir kullanımdır. Uzun süreli kiralamada sözleşme dili farklı kurulur: bakım ve arıza müdahalesi süreye bağlanır, akü şarj düzeni ve gece park noktası baştan belirlenir, kullanım sayacı üzerinden dönemsel raporlama yapılır. Bu düzen hem maliyeti öngörülebilir kılıyor hem denetim kaydını kendiliğinden üretiyor.",
            },
            {
                baslik: "Geniş sahada makineyi taşımak yerine yürütmek",
                metin:
                    "Büyük parsellerde tesisin bir ucundan diğerine gitmek başlı başına bir mesafedir; buna karşılık saha betonu düzgün ve geçişler geniştir. Bu ikisi bir araya geldiğinde makineyi araca yükleyip taşımak yerine kendi tahrikiyle yürütmek çoğu zaman daha hızlıdır. Planlarken dikkat ettiğimiz iki şey var: güzergâhın forklift ve kamyon trafiğiyle kesişmemesi ve akü durumunun mesafeyi kaldırması. Uzun kullanımda ara şarj noktasını mola saatlerine denk getirmek, gün içinde kaybedilen zamanı belirgin azaltıyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre süre, kayıt ve makine sınıfı",
                paragraflar: [
                    "Bölgedeki taleplerimiz süre ve kayıt gereksinimine göre ayrışır. Aşağıdaki tablo, teklif hazırlarken kullandığımız çerçevedir; işiniz hangi satıra denk geliyorsa hem fiyatlama hem belge akışı ona göre kurulur.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tipik süre", "Kayıt gereksinimi", "Makine sınıfı"],
                    satirlar: [
                        ["Hol içi nokta bakımı", "Yarım gün", "Kabul formu", "Kompakt akülü eklemli"],
                        ["Yeni ekipman montajı", "Birkaç hafta", "Dönemsel sayaç raporu", "Teleskopik veya eklemli"],
                        ["Çatı makası altı işler", "1 – 2 gün", "İş izni + kabul formu", "Yüksek erişimli eklemli"],
                        ["Temizlik sınıflı hacim işi", "Saatlik", "Alet sayımı + giriş formu", "Akülü makaslı"],
                        ["Dış cephe ve saha işleri", "Değişken", "Basit iş izni", "Arazi tipi veya teleskopik"],
                    ],
                },
            },
            {
                baslik: "Montaj ve devreye alma dönemini tek planda kurgulamak",
                paragraflar: [
                    "Yeni bir hacim kuran tesiste platform ihtiyacı iki dalga hâlinde gelir. Birinci dalga yoğundur ve haftalarca sürer: konstrüksiyon, mekanik montaj, elektrik tesisatı ve havalandırma işleri aynı hacimde üst üste yürür. İkinci dalga ise üretim başladıktan sonra gelir ve aylara yayılır — ince ayar, ilave bağlantı, eksik kalan noktaların tamamlanması. Bu iki dalgayı ayrı ayrı fiyatlamak yerine tek bir plan içinde kurgulamak, hem birim maliyeti düşürüyor hem ikinci dalgada makine arayışını ortadan kaldırıyor.",
                    "Pratikte bunu şöyle yapıyoruz: birinci dalga için makine uzun süreli kiralanır ve sahada kalır; ikinci dalga için çağrı bazlı bir düzen kurulur, makine ihtiyaç oldukça kısa sürelerle gelir. İki dönemin koşulları tek teklifte yazılır. Aynı hacimde çalışan farklı yükleniciler varsa makinenin kullanım saatleri arasında paylaşımını da bu plana ekliyoruz; bu, montaj dönemindeki en sık çakışma nedenini ortadan kaldırıyor.",
                ],
            },
            {
                baslik: "Aynı hacimde birden çok yüklenici: koordinasyon kuralı",
                paragraflar: [
                    "Yeni kurulan bir hacimde mekanik, elektrik, otomasyon ve havalandırma ekipleri çoğunlukla aynı anda çalışır ve hepsi yukarı çıkmak ister. Bu, dikey çakışmanın en yoğun yaşandığı durumdur: birinin altında diğerinin bulunması yasak olduğu için, hacmin saat ya da bölge esasına göre paylaşılması gerekir. Uygulamada tesisin saha koordinatörüyle birlikte günlük bir yükseklik planı çıkarıyoruz — hangi ekip hangi saatte hangi açıklıkta çalışacak.",
                    "İkinci koordinasyon kalemi gezer köprülü vinçtir. Vinç bulunan hacimlerde sepet ile kancanın aynı düşeyde bulunması hiçbir koşulda kabul edilmez; çalışılan açıklık vincin hareket sahasından mekanik olarak çıkarılır ve iş kapanmadan bu sınır kaldırılmaz. Bu düzeni teslimat öncesi saha turunda kuruyor ve iş izni formuna yazıyoruz. Bölgedeki yeni hollerde açıklıklar geniş olduğu için, doğru planlandığında vinç ile platform aynı hacimde sorunsuz çalışabiliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ana müşterimiz denetim yapıyor; dış firma ekipmanı için ne isteniyor?",
                cevap:
                    "Denetimlerde en sık sorulan üç şey var ve üçünü de talep beklemeden sağlıyoruz. Birincisi makinenin geçerli periyodik kontrol raporu — tarihi geçmiş bir rapor tek başına bulgu konusu olur. İkincisi makinenin marka, model ve seri bilgisini içeren teknik tanım sayfası; denetçi hangi ekipmanın hangi tarihte hacimde bulunduğunu eşleştirmek ister. Üçüncüsü platformu kullanan kişinin mesleki yeterlilik belgesi; operatörlü kiralamada bu bizden, operatörsüzde sizden istenir. Bunlara ek olarak iş sonunda imzalı kabul formu bırakıyoruz ve bu form alet sayımı sonucunu da içeriyor. Belgeleri sevkiyattan önce elektronik olarak gönderip onay alıyoruz.",
            },
            {
                soru: "Hedefimiz yerden yüksek ve altı dolu; hangi makine sınıfı gerekir?",
                cevap:
                    "Bu soruya tek bir yükseklik rakamıyla cevap veremeyiz, iki ölçü gerekir: hedefin zeminden kotu ile makinenin durabileceği zeminden hedefe kadarki yatay açıklık. Bom tipi makinelerde maksimum yükseklik ile maksimum yatay uzanma aynı anda kullanılamaz — biri arttıkça diğeri düşer — bu yüzden seçim katalogdaki tek satıra değil, makinenin erişim eğrisine bakılarak yapılır. Bölgenizdeki yüksek tavanlı hollerde bu ayrımı atlayan seçimler sahada yetersiz kalıyor. İki ölçüyü ve çalışma noktasının bir fotoğrafını paylaşırsanız uygun sınıfı kesin olarak belirleyip alternatifleriyle birlikte sunuyoruz.",
            },
            {
                soru: "Montaj dönemimiz birkaç hafta sürecek; nasıl fiyatlanıyor?",
                cevap:
                    "Uzun süreli kullanımda günlük birim bedel belirgin düşer, ama asıl fark fiyatta değil sözleşme kurgusundadır. Uzun kiralamada baştan netleştirdiğimiz başlıklar şunlar: periyodik bakımın kim tarafından ve hangi aralıkla yapılacağı, arıza durumunda müdahale süresi ve ikame makine taahhüdü, gece park ve şarj noktası, kullanım sayacı üzerinden dönemsel raporlama. Bu kalemler yazılı olmadığında haftalar süren bir montaj döneminde mutlaka bir noktada tartışma çıkıyor. Ayrıca montaj bittikten sonraki ince ayar dönemini de aynı teklife çağrı bazlı bir düzen olarak ekliyoruz; böylece ikinci dalgada yeniden süreç işletmiyorsunuz.",
            },
            {
                soru: "Aynı hacimde birkaç yüklenici çalışıyor; platform paylaşılabilir mi?",
                cevap:
                    "Paylaşılabilir ve bunu sık kurguluyoruz, ancak iki kural konur. Birincisi kullanım planıdır: makinenin hangi ekip tarafından hangi saatte kullanılacağı gün başında yazılır, kullanan her ekipten belgeli bir operatör bulunur. İkincisi dikey çakışma yasağıdır — bir ekip yukarıdayken altında başka bir ekibin çalışması kabul edilmez, bu yüzden hacim saat ya da açıklık esasına göre bölünür. Planı tesisin saha koordinatörüyle birlikte çıkarıyoruz. Vinç bulunan hacimlerde ayrıca sepet ile kancanın aynı düşeye gelmemesi için çalışılan açıklık vincin hareket sahasının dışına alınır. Bu düzen kurulduğunda tek makine birden çok ekibe rahatlıkla yetiyor.",
            },
            {
                soru: "Makineyi tesis içinde bir holden diğerine kendimiz taşıyabilir miyiz?",
                cevap:
                    "Kendi tahrikiyle yürütebilirsiniz, ancak bunu belgeli operatörünüz yapmalıdır ve güzergâh önceden belirlenmelidir. Bölgedeki geniş parsellerde saha betonu düzgün olduğu için makineler uzun mesafeyi rahatlıkla kat eder; dikkat edilmesi gereken iki şey var. Birincisi güzergâhın forklift ve kamyon trafiğiyle kesişmemesi — kesişme kaçınılmazsa geçiş saatinin ayrılması gerekir. İkincisi akü durumu: uzun yürüyüşler akü harcar ve çalışma sırasında yetersiz kalabilir, bu yüzden ara şarj noktasını mola saatlerine denk getiriyoruz. Rampa, kanal kapağı veya eğimli geçiş varsa bunları da baştan konuşuyoruz; makinelerin izin verilen eğim sınırı vardır ve aşılamaz.",
            },
            {
                soru: "Temizlik sınıfı olan bir bölümümüz var; makine oraya alınabilir mi?",
                cevap:
                    "Alınabilir; bu tip hacimler için akülü, iz bırakmayan lastikli ve dış yüzeyi temizlenebilir makineleri ayırıyoruz. İçten yanmalı makine kesinlikle söz konusu değil. Giriş öncesi tekerlekler ve şasi altı silinir, talep edilirse geçici tekerlek örtüsü kullanılır, hidrolik bağlantılar damlama açısından gözle doğrulanır. Sepete çıkan malzeme liste üzerinden sayılır ve iş sonunda tekrar sayılır; toz kaldıran işlemlerde nokta emişli toz toplama ile ilerlenir. Sizden istediğimiz iki şey var: makinenin izleyeceği giriş güzergâhının önceden belirlenmesi ve varsa tesisinizin kendi ekipman giriş formunun bize önceden gönderilmesi. Formu kendi kontrol listemizle birleştirip tek belge hâlinde teslim ediyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Eskişehir 2. OSB'nin genç yapı stoku ve tedarikçi ağırlıklı sanayi dokusu kamuya açık genel bilgidir; periyodik kontrol, mesleki yeterlilik belgesi ve iş izni uygulamaları mevzuattan, yabancı madde sayımı ve dikey çakışma kuralları saha pratiğinden gelir.",
    },

    "bolge:bozuyuk-osb-bilecik-cevre-ili": {
        h1: "Bozüyük OSB'de Yüklenici Rejimine Uygun Platform Kiralama (Çevre İl)",
        giris:
            "Bozüyük, Bilecik'in üretim hacmini büyük ölçüde üzerinde toplayan ilçedir ve Eskişehir'e karayoluyla kısa mesafededir ve bu yakınlık, Eskişehir merkezli bir kiralama ekibi için ilçeyi düzenli servis alanı hâline getirir. Ancak burada iş, il sınırının ötesine geçmenin getirdiği iki farklı gerçekle şekillenir. Birincisi lojistiktir: makine il dışına çıkar, sevkiyat planı gün içinde dönüşü kaldıramayabilir ve dolayısıyla kiralama süresi ile nakliye kalemi merkezdeki işlerden farklı kurgulanır. İkincisi rejimdir: ilçedeki büyük ölçekli tesisler kurumsal yüklenici prosedürleriyle çalışır — dış firma personeli önceden bildirilir, giriş eğitimi alınır, iş izni açılır ve iş sonunda kayıt teslim edilir. Bu bizim alışık olduğumuz bir düzendir; Eskişehir'in havacılık ve savunma tedarikçilerinde aynı disiplinle çalışıyoruz. Bu sayfada ilçedeki işleri bu iki eksende, yani il dışı lojistiği ve yüklenici rejimi üzerinden ele alıyoruz.",
        maddeler: [
            {
                baslik: "İl dışı sevkiyatta gün planı ve süre kurgusu",
                metin:
                    "Makine il sınırını geçtiğinde gidiş-dönüş tek bir güne sıkışmayabilir ve bu, kiralama süresinin nasıl yazılacağını doğrudan etkiler. Bir saatlik bir iş için iki günlük nakliye trafiği ekonomik değildir. Bu yüzden Bozüyük işlerinde iki yaklaşım kullanıyoruz: ya iş listesi makinenin sahada geçireceği süreyi anlamlı kılacak kadar doldurulur, ya da aynı güzergâhtaki başka bir işle birleştirilir. Teklifte kiralama süresinin hangi saatte başlayıp bittiğini ve nakliyenin ayrı kalem olup olmadığını açıkça yazıyoruz; çevre il işlerinde en sık yaşanan anlaşmazlık bu başlıkta çıkıyor.",
            },
            {
                baslik: "Kurumsal yüklenici prosedürüne uyum",
                metin:
                    "İlçedeki büyük tesislerde dış firma girişi yazılı bir sürece bağlıdır: personel bilgisi önceden bildirilir, giriş güvenlik eğitimi alınır, iş izni formu açılır ve çalışma sonunda kapatılır. Bu sürecin adımları tesisten tesise değişse de mantığı aynıdır ve atlanan tek adım kapıda gün kaybına yol açar. Sevkiyat planını bu adımlara göre kuruyoruz: belgeler talep anında değil teklif aşamasında gönderilir, eğitim saati teslimat saatinden önce planlanır ve makine ancak izin açıldıktan sonra çalışmaya başlar.",
            },
            {
                baslik: "Ağır sanayi hollerinde zemin, toz ve görüş",
                metin:
                    "İlçenin yapı malzemeleri ve ağır sanayi ağırlıklı üretim dokusunda holler tozlu, zeminler ise noktasal olarak kirli ya da bozuk olabilir. Bu iki koşul bom tipi makinelerde doğrudan stabilite ve görüş sorunu yaratır. Standart uygulamamız çalışma öncesi makinenin park noktasını ve güzergâhını temizletmek, tozun yoğun olduğu hacimlerde çalışma saatini üretimin durduğu ya da yavaşladığı zamana kaydırmaktır. Yüksek noktada görüşün kısıtlı olduğu durumlarda yerden bir gözcü bulundurmak, çevre il işlerinde tavizsiz uyguladığımız bir kalemdir.",
            },
            {
                baslik: "Arıza toleransı: mesafe her şeyi uzatır",
                metin:
                    "Eskişehir merkezinde arızalanan bir makine birkaç saat içinde değiştirilebilir; il dışında aynı işlem yol mesafesi kadar uzar ve çoğu zaman günü tüketir. Bu yüzden Bozüyük'e giden makinelerde teslimat öncesi kontrolü geniş tutuyoruz: akü sağlığı, hidrolik seviye ve kaçak, tekerlek ve emniyet tertibatları tek tek doğrulanır. Kritik takvimli işlerde ise yedek makine rezervasyonu öneriyoruz; yedek hiç devreye girmezse yalnızca sembolik bir hazır bulundurma bedeli çıkar; devreye girerse il dışında kaybedilecek koca bir günü kurtarır.",
            },
            {
                baslik: "Eskişehir-Bilecik ekseninde ortak sevkiyat",
                metin:
                    "İki il arasındaki karayolu ekseni düzenli kullandığımız bir güzergâhtır ve bu, maliyet açısından somut bir imkân yaratır. Aynı hafta içinde eksen üzerinde birden çok işimiz varsa sevkiyatı birleştirip nakliye payını bölüyoruz; araç gidişte iki noktaya makine bırakır, dönüşte ikisini birden alır. Bu modelin tek koşulu tarih esnekliğidir. Acil olmayan işlerde birkaç günlük esneklik belirtildiğinde, çevre il fiyatı çoğu zaman merkez fiyatına yakın bir seviyeye iniyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çevre il işinde belge ve planlama akışı",
                paragraflar: [
                    "Bozüyük işlerinde sıralama merkezdekinden farklıdır; belge ve izin adımları sevkiyattan önce tamamlanmalıdır. Aşağıdaki tablo, bir talebin geliş anından çalışmanın başlamasına kadar izlediği akışı ve her adımda kimin ne yapacağını gösterir.",
                ],
                tablo: {
                    basliklar: ["Adım", "Kim yapar", "Ne zaman", "Atlanırsa sonuç"],
                    satirlar: [
                        ["Saha ölçüsü ve fotoğraf paylaşımı", "Tesis", "Talep anında", "Yanlış makine sevki"],
                        ["Belge dosyasının gönderimi", "Kiralayan firma", "Teklif aşamasında", "Kapıda bekleme"],
                        ["Yüklenici giriş onayı", "Tesis", "Sevkiyattan önce", "Gün kaybı"],
                        ["Giriş güvenlik eğitimi", "Tesis + saha personeli", "Teslimat günü sabahı", "Çalışma başlayamaz"],
                        ["İş izni formunun açılması", "Tesis + kiralayan firma", "Çalışmadan hemen önce", "Denetimde bulgu"],
                    ],
                },
            },
            {
                baslik: "İş listesini sahaya gitmeden kesinleştirmek",
                paragraflar: [
                    "Çevre il işlerinde keşif için ayrı bir gün ayırmak çoğu zaman ekonomik değildir; bu yüzden keşfi uzaktan yapacak bir veri seti kurduk. İstediğimiz bilgiler şunlar: çalışılacak her noktanın zeminden yüksekliği, makinenin durabileceği zeminden hedefe kadarki yatay açıklık, zemin cinsi ve durumu, makinenin gireceği en dar açıklık, hol içindeki engellerin konumu ve çalışma noktalarının birbirine göre dağılımı. Buna birkaç fotoğraf eklendiğinde sahaya gitmeden doğru makineyi belirleyebiliyoruz.",
                    "Bu setin ikinci faydası süre tahminidir. Nokta sayısı ve dağılımı bilindiğinde makinenin güzergâhını önceden sıraya koyup toplam süreyi hesaplayabiliyoruz; il dışı bir işte bu hesabın doğruluğu, kiralama süresinin doğru yazılması demektir. Sığmayacağını gördüğümüzde bunu baştan söylüyoruz — yarım kalan bir iş, çevre ilde ikinci bir nakliye anlamına geliyor ve bedeli kiralama farkından çok daha yüksek oluyor.",
                ],
            },
            {
                baslik: "İki ilin arasındaki işlerde sorumluluk sınırı",
                paragraflar: [
                    "Çevre il kiralamalarında sorumluluk sınırını sözleşmede daha ayrıntılı yazıyoruz, çünkü mesafe her belirsizliği büyütüyor. Netleştirdiğimiz başlıklar: makinenin sahaya varış saati ve teslim tutanağı, kullanım süresince oluşabilecek hasarın nasıl değerlendirileceği, arıza durumunda müdahale ve ikame süresi, hava koşulu nedeniyle çalışılamayan günün nasıl sayılacağı, iade sırasında yakıt-akü ve temizlik durumu. Beş başlık da yazılı olduğunda, iş bittikten sonra tartışılacak bir konu kalmıyor.",
                    "Operatör tarafında da sınır nettir: makineyi kullanacak kişinin mesleki yeterlilik belgesi kullanan tarafa aittir ve makine ailesine göre alınmıştır. Operatörlü kiralamada belge ve sorumluluk bizde olur, ancak bu durumda operatörün de tesisin yüklenici giriş sürecinden geçmesi gerekir — bu süre uzunsa kendi belgeli personelinizin kullanması genellikle daha hızlı ilerler. Kararı, işin süresi ile onay süresini karşılaştırarak birlikte veriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Çevre il olduğu için fiyat çok mu değişiyor?",
                cevap:
                    "Kiralama bedeli değişmiyor, değişen kalem nakliye. Bozüyük, Eskişehir'e karayoluyla yakın olduğu ve bu ekseni düzenli kullandığımız için fark birçok çevre il işine göre sınırlı kalıyor. Farkı daraltmanın iki yolu var. Birincisi işi anlamlı bir süreye doldurmak: makine geldiğinde yapılacak her şey hazırsa tek sevkiyatla çok iş bitiyor ve nakliyenin birim maliyeti düşüyor. İkincisi ortak sevkiyat: aynı hafta içinde eksen üzerinde başka bir işimiz varsa araç iki noktaya uğruyor ve nakliye bölünüyor. Bunun için sizden istediğimiz tek şey, acil olmayan işlerde birkaç günlük tarih esnekliği. Teklifte nakliyenin ayrı kalem mi dâhil mi olduğunu her zaman açıkça yazıyoruz.",
            },
            {
                soru: "Tesisimizin yüklenici giriş süreci var; buna uyum sağlıyor musunuz?",
                cevap:
                    "Bu düzende düzenli çalışıyoruz; Eskişehir'in havacılık ve savunma tedarikçilerinde benzer prosedürler standart. Sizden prosedürün adımlarını ve istenen belgeleri talep anında öğreniyoruz, ardından personel bilgisi, makine belgeleri ve varsa gizlilik taahhüdünü sevkiyattan önce iletiyoruz. Giriş güvenlik eğitimi gerekiyorsa saha personelimiz teslimat günü sabahı bu eğitime katılır ve çalışma ancak iş izni açıldıktan sonra başlar. Sevkiyat planını bu adımlara göre kuruyoruz, çünkü çevre ilde kapıda kaybedilen bir saat merkezdeki gibi telafi edilemiyor. Prosedürünüzün bir kopyasını önceden paylaşırsanız süreci tümüyle sorunsuz yürütüyoruz.",
            },
            {
                soru: "Keşif için gelmeden doğru makineyi belirleyebilir misiniz?",
                cevap:
                    "Çoğu durumda evet ve çevre il işlerinde bunu tercih ediyoruz, çünkü ayrı bir keşif günü hem size hem bize maliyet. İhtiyacımız olan veri seti şu: her çalışma noktasının zeminden yüksekliği, makinenin durabileceği zeminden hedefe kadarki yatay açıklık, zemin cinsi ve durumu, makinenin gireceği en dar açıklık, hol içindeki engellerin yerleşimi ve noktaların birbirine göre dağılımı. Bunlara birkaç fotoğraf eklendiğinde hem makine sınıfını hem tahmini süreyi belirleyebiliyoruz. Verilerde belirsizlik varsa bunu size söylüyor ve gerekirse keşif yapıyoruz; yanlış makineyle çevre ile gitmenin bedeli, bir keşif gününden çok daha yüksek.",
            },
            {
                soru: "Makine il dışındayken arızalanırsa ne oluyor?",
                cevap:
                    "Önce riski küçültüyoruz, sonra sözleşmeyle sınırlandırıyoruz. Küçültme tarafı teslimat öncesi kontrolde: il dışına çıkan makinelerde akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu ile emniyet tertibatları tek tek doğrulanır ve sınırda görünen hiçbir makine yola çıkmaz. Sınırlandırma tarafı sözleşmede: müdahale süresi saatle tanımlanır, uzaktan çözülemeyen arızalarda teknisyen yola çıkar; onarımın uzayacağı anlaşılırsa yerine başka bir makine gönderilir. Takvimi kritik olan işlerde yedek makine rezervasyonu öneriyoruz — yedek hiç devreye girmezse yalnızca sembolik bir hazır bulundurma bedeli çıkıyor; devreye girerse il dışında kaybedilecek koca bir günü kurtarıyor.",
            },
            {
                soru: "Holümüz tozlu; çalışma güvenli olur mu?",
                cevap:
                    "Önlem alınırsa olur. Tozun iki ayrı etkisi var. Birincisi zemindedir: biriken toz tekerlek tutunmasını bozar, altında bozuk zemin varsa bunu gizler. Bu yüzden makinenin park noktası ve güzergâhı çalışma öncesi temizlenir, zemin gözle kontrol edilir. İkincisi görüştedir: yükseğe çıkıldığında toz yoğunluğu görüşü kısıtlayabilir ve bu, bom hareketleri sırasında ciddi risktir. Bu durumda çalışma saatini üretimin durduğu ya da yavaşladığı zamana kaydırmayı öneriyoruz; mümkün değilse yerden bir gözcü bulundurulur ve makine hareketleri gözcünün yönlendirmesiyle yapılır. Bu iki önlem uygulanmadan çalışmayı başlatmıyoruz.",
            },
            {
                soru: "Kendi personelimiz kullanabilir mi, yoksa operatör mü göndermelisiniz?",
                cevap:
                    "İkisi de mümkün, karar süreye ve onay hızına bağlı. Kural şu: sepeti kullanan kişide ilgili yeterlilik belgesi aranır ve bu belge makinenin ait olduğu aileye göre düzenlenir — makaslı için alınan belge bom tipi makineyi kapsamaz. Belgeli personeliniz varsa çevre il işlerinde bu genellikle daha hızlı ilerler, çünkü tesisinize dışarıdan giren kişi sayısı azalır ve yüklenici onay yükü hafifler. Belgeli personeliniz yoksa operatörlü kiralama yapıyoruz; bu durumda operatörümüzün de sizin giriş sürecinizden geçmesi gerekir, dolayısıyla onay süresini baştan hesaba katıyoruz. Hangisinin daha erken başlatacağını teklif aşamasında birlikte hesaplıyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Bozüyük'ün Bilecik üretiminde tuttuğu yer ve Eskişehir'e karayolu mesafesi kamuya açık bilgidir; yüklenici giriş prosedürü, iş izni ve mesleki yeterlilik belgesi uygulamaları mevzuat ile kurumsal saha pratiğinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },

    "bolge:polatli-ankara-cevre-ili": {
        h1: "Polatlı'da Kurumsal ve Kırsal Sahalar için Platform Kiralama (Çevre İl)",
        giris:
            "Polatlı, Ankara'nın batı ucunda, Eskişehir ile başkent arasındaki karayolu ekseninin tam üzerindedir; bu konum ilçeyi Eskişehir merkezli bir ekip için doğal servis alanı yapar. İlçedeki iş dokusu bizim açımızdan iki kutba ayrılır. Bir yanda ilçe merkezi ve organize sanayi alanındaki kurumsal tesisler var; buralarda giriş prosedürü, iş izni ve kayıt disiplini işin başında konuşulur ve bu düzen Eskişehir'in tedarikçi kültürüyle neredeyse birebir örtüşür. Diğer yanda ilçenin geniş kırsalı var: tarımsal depolar, hayvancılık yapıları, sulama ve enerji altyapısına ait teknik binalar. Bu ikinci grupta belirleyici olan evrak değil, zemin ve mesafedir. Aynı ilçede iki ayrı hazırlık listesi işletiyoruz ve talebi aldığımızda ilk yaptığımız şey hangi kutupta olduğunuzu belirlemek oluyor — çünkü makine sınıfı, sevkiyat planı ve teklif kurgusu bu ayrımdan sonra şekilleniyor.",
        maddeler: [
            {
                baslik: "Batı ekseninde sevkiyat: konumun getirdiği avantaj",
                metin:
                    "Polatlı, Eskişehir'den Ankara'ya giden güzergâhın üzerindedir ve bu, çevre il işlerinde nadiren rastlanan bir kolaylık sağlar: makine ilçeye ulaşmak için ayrı bir sapma yapmaz. Eksen üzerinde aynı hafta içinde başka bir işimiz olduğunda sevkiyatı birleştirip nakliye payını bölüyoruz. Ayrıca ilçedeki bir işin dönüşünde başka bir noktadan makine alınabildiği için araç boş dönmüyor. Bu iki nedenle Polatlı, çevre il olmasına rağmen maliyet açısından merkez ilçelere yakın konumda kalıyor.",
            },
            {
                baslik: "Kurumsal tesislerde giriş izni ve kayıt",
                metin:
                    "İlçedeki kurumsal ve kamu nitelikli tesislerde dış firma girişi yazılı sürece bağlıdır: personel bilgisi önceden bildirilir, geçici kart düzenlenir, gerektiğinde refakat uygulanır ve iş izni açılıp kapatılır. Bazı tesislerde kamera ve cihaz kısıtı da bulunur. Bu rejimde çalışmak bizim için alışılmış bir durum; Eskişehir'in havacılık ve savunma tedarikçilerinde aynı adımları düzenli işletiyoruz. Sevkiyattan önce belge dosyasını gönderip onay alıyor, cihaz kısıtı olan yerlerde görsel raporlama yerine imzalı yazılı iş kabul formu kullanıyoruz.",
            },
            {
                baslik: "Kırsal sahada zemin ve ulaşım gerçeği",
                metin:
                    "İlçenin kırsalındaki depo, ahır ve teknik yapılarda beton zemin istisnadır; çoğunlukla sıkıştırılmış toprak, çakıl ya da parçalı beton ile karşılaşırız. Bom açıldığında yük tek noktada yoğunlaştığı için bu zeminlerde arazi tipi geniş tekerlekli makine ve gerektiğinde yük dağıtıcı plaka kullanmak zorunludur. Ulaşım tarafında ise belirleyici olan taşıyıcı araçtır: stabilize yolun genişliği, eğimi ve yağış sonrası taşıma gücü. Gerekli görülen durumlarda makine saha girişinde indirilip kendi tahrikiyle ilerletilir.",
            },
            {
                baslik: "Büyük açıklıklı yapılarda yandan uzanma",
                metin:
                    "Tarımsal depolar, makine hangarları ve hayvancılık yapıları geniş açıklıklı ve yüksek hacimlerdir; içleri ise genellikle doludur. Çatı makası altındaki aydınlatma, havalandırma, oluk ve kablo işlerinde makine hedefin altına park edemez, dolayısıyla erişim yandan gelmek zorundadır. Teleskopik makine uzun ve düz hatlarda park sayısını azaltarak zaman kazandırır; eklemli makine ise makas ve kirişler arasına girmesi gereken noktalarda üstündür. Seçim, aşılacak engelin yüksekliği ile yatay mesafenin birlikte değerlendirilmesiyle yapılır.",
            },
            {
                baslik: "Mevsim penceresi: kırsalda takvim doğayla kurulur",
                metin:
                    "Kırsal yapılarda bakım işleri yıl boyunca eşit dağılmaz. Depolama yapıları dolu olduğu dönemde içeride manevra alanı kalmaz; hayvancılık yapılarında ise çalışma, hayvanların bulunduğu bölümlerden ayrılmayı gerektirir. Doğal pencereler bu nedenle dolum öncesi ve boşalma sonrası dönemlerdir. Bu pencerelerin herkes için aynı haftalara denk gelmesi, ilçede talebin yığılmasına yol açar; erken planlayan işletmeler hem istediği makineyi hem daha uygun bir gün buluyor. Talebi mevsim başında konuşmayı bu yüzden öneriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Polatlı'da saha tipine göre hazırlık",
                paragraflar: [
                    "İlçedeki işleri kurumsal ve kırsal olmak üzere iki kutupta ele alıyoruz; hazırlık listesi, sevkiyat planı ve makine sınıfı bu ayrımdan çıkıyor. Aşağıdaki tablo talebi aldığımızda yaptığımız ilk sınıflandırmadır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Zemin", "Ana hazırlık", "Makine tercihi"],
                    satirlar: [
                        ["Kurumsal üretim tesisi", "Beton", "Giriş izni ve belge dosyası", "Akülü eklemli"],
                        ["Kamu nitelikli tesis", "Beton/asfalt", "Kart, refakat, cihaz kısıtı", "Kompakt akülü"],
                        ["Tarımsal depo", "Toprak veya parçalı beton", "Zemin plakası, mevsim", "Arazi tipi teleskopik"],
                        ["Hayvancılık yapısı", "Toprak, kaygan yüzey", "Bölüm ayrımı ve temizlik", "Arazi tipi eklemli"],
                        ["Sulama ve enerji tesisi", "Çakıl saha", "Enerji kesme, yaklaşma mesafesi", "Arazi tipi, sınırlı erişim"],
                    ],
                },
            },
            {
                baslik: "Tek sevkiyatta çok nokta: ilçe genişliğini yönetmek",
                paragraflar: [
                    "Polatlı geniş bir ilçedir ve kırsaldaki iki nokta arasındaki mesafe kimi zaman ilçe merkezine olan mesafeden uzundur. Bu nedenle burada nakliye, kiralama süresinden daha belirleyici bir kalem olabilir. Uyguladığımız temel kural, makine geldiğinde yapılacak her şeyin hazır olmasıdır: iş listesi önceden çıkarılır, noktalar makinenin izleyeceği güzergâha göre sıralanır ve malzeme sahada bekler. Bu hazırlık, aynı kiralama süresi içinde bitirilen iş miktarını belirgin artırıyor.",
                    "İkinci yöntem birden çok noktayı aynı güne toplamaktır. Aynı hat üzerindeki işletmeler, aynı sahadaki farklı yapılar ya da komşu tesisler tek gün içinde sırayla dolaşılabilir; nakliye bir kez ödenir ve bölünür. Sıralamayı biz kurguluyoruz, sizden istediğimiz acil olmayan işlerde tarih esnekliği. İlçede en çok bu modelle çalışıyoruz ve kırsal taleplerde birim maliyeti en çok düşüren yöntem bu oluyor.",
                ],
            },
            {
                baslik: "Kırsal işlerde hava, ışık ve gün planı",
                paragraflar: [
                    "Açık alanda yapılan platform işlerinde iki doğal sınır vardır: rüzgâr ve ışık. Platformların üretici tarafından tanımlanmış rüzgâr sınırı aşıldığında sepet yükseltilemez ve bu kural işin aciliyetine göre esnetilemez; bom tipi makinelerde sepet yükseldikçe etki büyür. Işık tarafında ise kırsal sahalarda genel aydınlatma çoğunlukla yetersizdir, dolayısıyla çalışma gün ışığına bağlıdır. Bu iki sınır, gün planını tek güne kilitlememizi engelliyor.",
                    "Uygulamada bir ana gün ve bir yedek gün belirliyoruz; makine sahada kalır ve koşul uygun olan gün çalışılır. Bu durumda yalnızca kiralama süresi işler, ek bir ceza doğmaz. Sevkiyatın tümüyle ertelenmesi gerekiyorsa nakliye tekrarı gündeme geleceği için kararı birlikte veriyoruz. Hangi seçeneğin geçerli olduğunu ve çalışılamayan günün nasıl sayılacağını teklifte yazılı olarak belirtiyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ankara'ya bağlı bir ilçeyiz; Eskişehir'den hizmet almak mantıklı mı?",
                cevap:
                    "Konum açısından fazlasıyla mantıklı, çünkü Polatlı iki şehir arasındaki karayolu ekseninin üzerinde. Makine ilçeye ulaşmak için ayrı bir sapma yapmıyor ve bu, çevre il işlerinde nadir bir avantaj. Eksen üzerinde aynı hafta içinde başka bir işimiz varsa sevkiyatı birleştirip nakliye payını bölüyoruz; ayrıca dönüşte araç boş gelmediği için maliyet daha da düşüyor. Uygulamada Polatlı fiyatlarımız birçok çevre il işine göre merkez ilçelere daha yakın çıkıyor. Teklifte nakliyenin ayrı kalem mi dâhil mi olduğunu ve kiralama süresinin hangi saatte başlayıp bittiğini her zaman açıkça yazıyoruz.",
            },
            {
                soru: "Tesisimizde giriş prosedürü ve cihaz kısıtı var; buna uyum sağlıyor musunuz?",
                cevap:
                    "Bu düzende düzenli çalışıyoruz. Sizden prosedürün adımlarını ve istenen belgeleri talep anında öğreniyor, personel bilgisi ile makine belgelerini sevkiyattan önce iletiyoruz; gizlilik taahhüdü isteniyorsa metni önceden alıp imzalıyoruz. Kamera ve cihaz kısıtı olan hacimlerde fotoğraf çekimini tümüyle bırakıyor, bunun yerine iki taraflı imzalanan yazılı iş kabul formu kullanıyoruz; formda teslim saati, sayaç durumu, hasar kaydı ve sahaya götürülen alet sayımı yer alır. Refakat gerektiren bölümlerde refakatçinin uygun olduğu saatlere göre plan kuruyoruz. Prosedürünüzün bir kopyasını önceden paylaşırsanız kapıda hiçbir adım eksik kalmıyor.",
            },
            {
                soru: "Deponun zemini toprak; makine burada güvenle çalışır mı?",
                cevap:
                    "Önlem alınırsa çalışır, alınmazsa çalıştırmıyoruz. Sıkıştırılmış toprak veya parçalı beton zeminde bom açıldığında yük tek noktada yoğunlaşır; zemin oturursa makine dengesini kaybeder ve bu, kırsal sahalardaki devrilme vakalarının başlıca nedenidir. Çözüm iki katmanlı: arazi tipi geniş tekerlekli makine kullanmak ve gerekli noktalarda yük dağıtıcı zemin plakası sermek. Yağış sonrası yumuşamış zeminde ise plaka bile yeterli olmadığı için çalışmayı erteliyoruz. Keşif aşamasında zeminin cinsini, son yağış durumunu ve mümkünse çalışma noktasının bir fotoğrafını istiyoruz; bu üç bilgi kararı neredeyse tümüyle netleştiriyor.",
            },
            {
                soru: "Depomuz dolu; içeride manevra alanı olmadan çalışılabilir mi?",
                cevap:
                    "Sınırlı ölçüde. Bom tipi makineler hedefin altına girmeden yandan uzanabildiği için dolu bir yapıda bile çalışabilirler, ancak makinenin park edeceği ve dönebileceği bir alan mutlaka gerekir. Depolama yapılarında bu alan çoğunlukla giriş kapısı çevresidir ve oradan uzaktaki noktalara ulaşmak yatay uzanma sınırına takılır. Bu yüzden dolu yapılarda işleri kapı çevresindeki noktalarla sınırlı tutmayı, uzak noktaları ise boşalma dönemine bırakmayı öneriyoruz. Kalıcı çözüm mevsim planlamasıdır: dolum öncesi ve boşalma sonrası dönemler bu yapıların doğal bakım penceresidir ve bu pencerede tüm iş listesi tek seferde kapanıyor.",
            },
            {
                soru: "Sulama veya enerji tesisimizde enerjili ekipman var; nasıl çalışılıyor?",
                cevap:
                    "Temel kural, enerjili ekipmana güvenli yaklaşma mesafesinin korunmasıdır; sepet bu mesafenin içine hiçbir koşulda giremez. Mesafenin sağlanamayacağı işlerde tek kabul edilebilir yol, ilgili bölümün enerjisini kesip panoyu kilitlemektir ve bu kararı tesisin teknik sorumlusuyla birlikte alıyoruz. Karar iş izni formuna yazılır. Açık sahada ayrıca hava koşulu devreye girer: rüzgâr sınırı aşıldığında çalışma durdurulur. Zemin genellikle çakıl serilmiş saha olduğu için arazi tipi makine ve gerektiğinde zemin plakası kullanılır. Bu üç başlık — enerji, hava, zemin — teslimat öncesinde yazılı olarak netleşmeden makineyi sahaya sokmuyoruz.",
            },
            {
                soru: "Kırsalda birkaç komşu işletme birlikte kiralayabilir mi?",
                cevap:
                    "Bu ilçede en çok önerdiğimiz model tam olarak bu. Polatlı geniş olduğu için nakliye, kısa süreli kırsal işlerde toplam bedelin belirgin bir parçası; tek bir işletmenin bu payı tek başına üstlenmesi ekonomik değil. Aynı hat üzerindeki işletmeler, komşu tesisler ya da aynı sahadaki farklı yapılar tek gün içinde sırayla dolaşılabilir. Nakliye bir kez ödenir ve bölünür, her taraf yalnızca kendi kullanım saatini üstlenir. Sıralamayı ve zaman planını biz kurguluyoruz; sizden istediğimiz, acil olmayan işlerde birkaç günlük tarih esnekliği. Dolum öncesi ve hasat sonrası dönemlerde aynı tip iş bütün işletmelerde neredeyse eşzamanlı açıldığı için bu model verimini en çok o dönemde gösteriyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Polatlı'nın başkentin batı ucunda ve iki şehri bağlayan karayolu hattı üzerinde bulunması ve geniş kırsal dokusu kamuya açık bilgidir; güvenli yaklaşma mesafesi, enerji kesme-kilitleme, rüzgâr sınırı ve zemin taşıma kuralları mevzuat, üretici talimatları ve saha pratiğinden gelir. Firma adı ve rakam kullanılmamıştır.",
    },
    "bolge:osb-havacilik-kumesi": {
        h1: "OSB Havacılık Kümesinde Belgeli ve İzlenebilir Platform Kiralama",
        giris:
            "Eskişehir OSB içindeki havacılık kümesine yönelik platform hizmetinin bu sayfadaki merceği makinenin temizliği ya da belirli bir üretim prosesinin teknik ayrıntısı değildir; tedarikçi sahasına dış ekipman kabulünün baştan sona izlenebilir olmasıdır. Kamuya açık çerçeve yalnız Eskişehir OSB'de havacılık motor sanayisi çevresinde bir kümenin varlığıdır. Hangi tesiste hangi parçanın üretildiği, içeride hangi hattın bulunduğu veya özel bir güvenlik sınıfı olduğu varsayılmaz. Talep geldiğinde tesisin kendi yüklenici prosedürü alınır; sahaya girecek makine, taşıyıcı, sürücü, operatör, el aletleri ve iş kapsamı bu prosedüre göre önceden bildirilir. Periyodik kontrol, kullanıcı yeterliliği ve iş izinleri kapıda aranacak sürpriz evraklar değil, sevkiyat kararının ön koşuludur. Platformun hedefe erişimi ayrıca ölçülür, fakat doğru geometri belge onayı olmadan sahaya giriş sağlamaz. İş başladığında görev sınırı, enerji ve hareket izolasyonu, alt alan koruması, alet sayımı ve vardiya devri kayıtla yürür. Kapanışta hangi noktanın tamamlandığı, hangi malzemenin sahadan çıktığı ve makinenin teslim durumu iki tarafça teyit edilir. Bu düzen, havacılık kümesini genel Eskişehir OSB anlatısından ayırır: burada hizmetin değeri yalnız yükselmek değil, yapılan her adımın kim, ne zaman, hangi onayla sorularına cevap verebilmesidir.",
        maddeler: [
            {
                baslik: "Yüklenici ön kabul dosyasını sevkiyattan önce kapatmak",
                metin:
                    "Tesisin istediği belge listesi teklif aşamasında alınır ve yalnız makine raporuyla sınırlı görülmez. Platformun tanım bilgisi, geçerli kontrol kaydı, kullanacak kişinin uygun yeterliliği, sahaya girecek personel bildirimi ve varsa işe özel değerlendirmeler tek dosyada sunulur. Taşıyıcı sürücünün yalnız teslim yapacağı mı yoksa saha sınırına gireceği mi ayrıca belirtilir. Belgenin gönderilmiş olması onaylandığı anlamına gelmez; tesis yetkilisinin kabul teyidi gelmeden araç yola çıkarılmaz. Son dakika makine değişikliği olursa yeni ünitenin bilgileri eski onayın yerine otomatik geçmez, dosya güncellenir.",
            },
            {
                baslik: "İş kapsamını görev sınırına çevirmek",
                metin:
                    "Platform için açılan iş emri, 'tavan bakımı' gibi geniş bir ifadeyle bırakılmaz. Hedef bölge, erişilecek noktalar, makinenin kullanacağı güzergâh, alt alanın nasıl ayrılacağı, enerji veya hareket kontrolünü kimin teslim edeceği ve izin dışı kalan komşu bölümler yazılır. Sahada yeni bir kalem fark edilirse kısa sürmesi mevcut iznin kapsamını genişletmez. Yeni hedef için risk, geometri ve yetki yeniden görülür. Bu disiplin, bakım ekibinin iyi niyetle başladığı ek işin denetlenemez bir faaliyete dönüşmesini önler ve kapanış kaydını açık tutar.",
            },
            {
                baslik: "Alet ve sarf hareketini giriş-çıkış kaydıyla izlemek",
                metin:
                    "Sepete alınacak aletler çalışma öncesinde listelenir, düşmeye karşı bağlanır ve küçük sarflar kapalı kutuda tutulur. İş boyunca ambalaj, kesilmiş bağ veya sökülen bağlantı gelişigüzel bırakılmaz. Vardiya sonunda alet-sarf ve sökülen parça sayımı tamamlanmadan hücre teslim edilmez. Tesis kendi formunu kullanıyorsa kayıt ona işlenir; ayrı bir paralel sistem dayatılmaz. Fotoğrafın kısıtlı olduğu sahada yazılı kabul ve iki taraflı imza kullanılır. Amaç tesis içine ilişkin görsel toplamak değil, sahaya giren her unsurun geri çıktığını kanıtlamaktır.",
            },
            {
                baslik: "Yetki zincirinde enerji ve hareket teslimi",
                metin:
                    "Platform operatörü üretim ekipmanının güvenli duruma getirildiğine kendi başına karar vermez. Elektrik, basınç, vinç, otomatik hareket veya başka beklenmedik enerji kaynakları tesisin yetkili kişisince belirlenir, kontrol edilir ve iş iznine işlenir. Sepet hedefe yaklaşmadan önce alt alan boşaltılır ve hareket zarfı fiziksel olarak ayrılır. Bir vardiya değişiminde önceki kilit veya sözlü teyit yeni ekip için otomatik kabul sayılmaz. Sorumlular yeniden buluşur, açık izolasyonlar ve görev sınırı doğrulanır. İş sonu enerjinin geri verilmesi de tesis yetkisinde kalır.",
            },
            {
                baslik: "Kapanış kaydını denetlenebilir teslim hâline getirmek",
                metin:
                    "Çalışma tamamlandığında yalnız makinenin sahadan çıkışı kaydedilmez. Yapılan hedefler, erişilemeyen noktalar, açık kalan iş izinleri, alet sayımı, alan temizliği ve görünür makine durumu birlikte kontrol edilir. Fotoğraf izni varsa yalnız prosedürün izin verdiği teslim görüntüleri alınır; cihaz kısıtında yazılı tutanak yeterlidir. Platform güvenli park noktasına çekilir, sepet boşaltılır ve taşıyıcıya teslim yetkisi belirlenir. Açık bir uygunsuzluk sözlü notla kapatılmaz. Böylece tedarikçi, kendi kalite veya İSG denetiminde dış hizmetin nasıl yürüdüğünü kanıtlayabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tedarikçi sahasında belge ve saha kapıları",
                paragraflar: [
                    "Aşağıdaki tablo belirli bir tesis prosedürü iddiası değildir; havacılık tedarik zincirindeki dış ekipman işini denetlenebilir kılmak için kullanılan genel kontrol kapılarını gösterir. Tesisin kendi form ve yetkileri her zaman belirleyicidir.",
                ],
                tablo: {
                    basliklar: ["Kontrol kapısı", "İstenen kanıt", "Onay sahibi", "Onay yoksa"],
                    satirlar: [
                        ["Makine kabulü", "Tanım ve geçerli kontrol kaydı", "Tesis yüklenici birimi", "Sevkiyat başlamaz"],
                        ["Personel girişi", "Bildirim ve uygun yeterlilik", "Tesis güvenlik yetkilisi", "Personel sahaya girmez"],
                        ["İş başlangıcı", "Görev sınırı ve iş izni", "Saha sorumlusu", "Sepet yükselmez"],
                        ["Enerji teslimi", "İzolasyon teyidi", "Tesis teknik yetkilisi", "Hedefe yaklaşılmaz"],
                        ["İş kapanışı", "Alet sayımı ve alan kabulü", "İş emri sahibi", "Hücre açılmaz"],
                    ],
                },
            },
            {
                baslik: "Tekliften saha girişine belge akışı",
                paragraflar: [
                    "İlk adım, tesisin güncel yüklenici şartlarını istemektir. Eski bir işte kullanılan evrak listesinin hâlâ geçerli olduğu varsayılmaz. İş kapsamı ve hedef fotoğrafı, makine sınıfı ile personel modeli belirlendikten sonra dosya hazırlanır. Operatörlü ve operatörsüz seçeneklerde sahaya bildirilecek kişiler değişebilir. Belgeler tek paket hâlinde iletilir, eksik veya süresi uygun olmayan kayıt varsa sevkiyat öncesinde giderilir. Onay yanıtı ve geçerlilik penceresi plan dosyasında tutulur.",
                    "Teslim günü makine veya personel değişmişse kapıda eski dosyaya dayanılmaz. Değişiklik tesis sorumlusuna bildirilir ve gerekli ek onay alınır. Güvenlik bilgilendirmesi, refakat ve cihaz kısıtı başlamadan önce teyit edilir. Taşıyıcı yalnız izin verilen alana girer. Bu akış bürokrasi üretmek için değil, uygun makinenin kapıda bekleyip bakım penceresini tüketmesini önlemek için kurulur.",
                ],
            },
            {
                baslik: "Vardiya devrinde izlenebilirliği kaybetmemek",
                paragraflar: [
                    "Birden fazla vardiyaya yayılan işte makinenin anahtarı veya sözlü talimatı devretmek yeterli değildir. Yeni ekip, tamamlanan hedefleri, açık izolasyonları, alet-sarf listesini, makinenin park ve şarj durumunu, sonraki çalışma hücresini yazılı teslim alır. Kullanıcı değişiyorsa yeterlilik ve yetkilendirme ayrıca doğrulanır. Önceki vardiyanın alan bariyerinin hâlâ doğru yerde olduğu varsayılmaz; üretim ve lojistik düzeni değişmiş olabilir.",
                    "Son vardiya bütün ara kayıtları tek kapanış belgesinde birleştirir. Açık iş varsa nedeni ve yeni izne ihtiyaç durumu belirtilir. Tesisin kayıt saklama düzenine uygun kopya teslim edilir; kiralama tarafı da kendi makine teslim kaydını korur. Böylece bir denetimde hangi vardiyada kimin ne yaptığı tahmin edilmez, izin ve teslim zincirinden okunur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Havacılık kümesindeki her tesis aynı belgeyi mi ister?",
                cevap:
                    "Hayır; bu nedenle her talepte güncel yüklenici prosedürünü doğrudan ilgili tesisten isteriz. Periyodik kontrol ve kullanıcı yeterliliği gibi temel kayıtlar ortak olabilir, fakat personel bildirimi, giriş eğitimi, refakat, cihaz kısıtı, iş izni ve belge biçimi değişebilir. Önceki bir tesiste kabul edilen dosya başka tesise otomatik taşınmaz. İstenen kayıtları teklif aşamasında tek listede toplar, gönderimden sonra onay teyidi alırız. Onaylanmamış evrakla aracı yola çıkarmak, bakım penceresini kapıda tüketme riski taşır.",
            },
            {
                soru: "Makine son anda değişirse eski giriş onayı geçerli olur mu?",
                cevap:
                    "Genellikle otomatik geçerli sayılmaz, çünkü onay belirli makinenin tanım ve kontrol bilgisine bağlanmış olabilir. İkame ünitenin tanım kaydı, geçerli kontrol belgesi ve işi etkileyen teknik farkları tesis yetkilisine iletilir. Operatör de değişiyorsa personel bildirimi ile yeterlilik kaydı güncellenir. Tesis ek onayı vermeden yeni makine giriş yapmaz. Acil durum, kayıt zincirini atlama gerekçesi değildir; doğru hazırlık, ikame dosyasını önceden hazır tutarak süreyi kısaltır.",
            },
            {
                soru: "Fotoğraf çekmenin yasak olduğu alanda teslimi nasıl kanıtlarsınız?",
                cevap:
                    "Tesisin yazılı iş kabul formu veya iki taraflı tutanak kullanılır. Makinenin teslim durumu, iş başlangıç ve bitiş zamanı, görev kapsamı, tamamlanan noktalar, açık kalan işler, alet-sarf sayımı ve görünür hasar kaydı forma işlenir. Fotoğraf alınmadığı açıkça belirtilir. Cihaz yasağını delerek görsel üretmek izlenebilirlik sağlamaz, aksine prosedür ihlalidir. İmzalı kayıt hem tesisin kalite dosyasına hem kiralama teslimine kanıt olur. Hangi formun kullanılacağı sevkiyattan önce kesinleştirilir.",
            },
            {
                soru: "Tesisimizde belgeli personel var; operatörsüz kiralama mümkün mü?",
                cevap:
                    "Makine ailesine uygun yeterlilik, tesisin kendi yetkilendirmesi ve kiralama koşulları karşılanıyorsa değerlendirilebilir. Belgenin bulunması tek başına yeterli değildir; kullanıcının iş iznine dâhil edilmesi, günlük kontrolü üstlenmesi ve görev sınırına uyması gerekir. Makaslı bir makine için alınan yeterliliğin bom tipi platformu kapsadığı varsayılmaz. Teslimde kumanda, acil indirme, üretici sınırları ve arıza bildirimi gösterilir. Yetkisiz başka personelin vardiya içinde makineyi devralmasına izin verilmez.",
            },
            {
                soru: "İş sırasında ek bir yüksek nokta fark edersek hemen yapılabilir mi?",
                cevap:
                    "Ancak yeni nokta mevcut makine sınırı, enerji izolasyonu, alt alan ve tesis izni açısından ayrıca değerlendirilirse yapılabilir. Yakında bulunması veya birkaç dakika sürmesi onu otomatik olarak mevcut görevin parçası yapmaz. Hedef iş emrine eklenir, sorumlu onayı alınır, alet ve sarf listesi güncellenir. Mevcut platform erişemiyorsa korkuluk üstüne çıkma veya uzanma sınırını aşma yoluna gidilmez. Uygun değilse açık kalem olarak kaydedilir ve yeni plan hazırlanır.",
            },
            {
                soru: "Bir denetim için iş sonunda hangi kayıtları alabiliriz?",
                cevap:
                    "Tesis prosedürüne göre makine kabulünün, kullanıcı yetkisinin, iş izninin, enerji tesliminin, vardiya devirlerinin ve iş kapanışının kanıtlarını bir araya getirebilirsiniz. Kiralama tarafı makinenin tanım ve kontrol kayıtlarını, teslim-iade durumunu sağlar; tesis görev sınırı ve teknik kabulü yönetir. Alet-sarf sayımı ile açık iş listesi kapanışa eklenir. Fotoğraf yalnız izin verilen alanda ve amaçla kullanılır. Bu kayıtlar belirli bir kalite standardına uygunluk iddiası değil, dış hizmetin izlenebilir yürütüldüğünün somut zinciridir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Eskişehir OSB içinde havacılık motor sanayisi çevresinde bir kümenin bulunması uygulama belgesinde verilen kamuya açık genel bilgidir. Tesis içi proses, firma, ürün, güvenlik sınıfı, kapasite ve rakam iddiası kullanılmamıştır; yüklenici kabulü, iş izni, yetki zinciri ve alet sayımı sektör geneli İSG ve tedarik pratiğidir.",
    },

    "bolge:sivrihisar-osb": {
        h1: "Sivrihisar OSB'de Havacılık-Savunma Tedarik Disipliniyle Platform Kiralama",
        giris:
            "Sivrihisar OSB için bu içerik, ilçenin kırsal enerji sahalarını, tarımsal yapılarını veya OSB genelindeki bölüm bölüm bakım turunu tekrar etmez. A3 iş emrinin verdiği dar mercek, Eskişehir'in havacılık ve savunma tedarik kültürünün ilçe OSB'sindeki olası tedarik ilişkilerine hazırlanırken kullanılan yüklenici disiplinidir. Burada belirli bir fabrikanın bu sektörlere üretim yaptığı iddia edilmez; anlatım, böyle bir şartname veya müşteri beklentisiyle çalışan tesisin dış platform hizmetini nasıl denetlenebilir kılacağına odaklanır. Talep sahibi önce kendi müşteri ve tesis kurallarını bildirir. Makinenin kontrol dosyası, kullanıcının yeterliliği, görev kapsamı, sahaya girecek aletler ve personel listesi sevkiyat öncesinde onaylanır. İş emri yalnız yüksekliği değil, hangi alanın hangi yetkili tarafından güvenli teslim edileceğini ve hangi kaydın kapanışta bırakılacağını tanımlar. İlçe dışından gelen makinenin teslim zamanı, giriş onayı ve bakım penceresi aynı plana bağlanır. Böylece Sivrihisar OSB sayfasının ayrımı net kalır: sektör geneli bakım turu yerine, ana sanayi beklentisine cevap verebilen alt yüklenici evrakı, değişiklik kontrolü ve izlenebilir saha teslimi ele alınır.",
        maddeler: [
            {
                baslik: "Müşteri şartını tesis prosedürüne çevirmek",
                metin:
                    "Bir tedarik ilişkisi varsa dış ekipman için istenen kurallar sözlü aktarımda bırakılmaz. Tesis, kendi müşteri beklentisini iş izni, ekipman kabulü, personel bildirimi, alet kontrolü ve kapanış formu gibi uygulanabilir adımlara dönüştürür. Platform firması doğrudan ana müşteri adına varsayım üretmez; yalnız tesisin yazılı prosedürüne uyar. Belge listesi güncel sürümüyle alınır ve sorumlu kişi belirlenir. Çelişkili talimat varsa saha başlamadan çözülür. Böylece operatör kapıda farklı, bakım alanında farklı beklentiyle karşılaşmaz.",
            },
            {
                baslik: "Uzak sevkiyat öncesinde uygunluk dosyası",
                metin:
                    "Sivrihisar OSB'ye çıkacak makinenin tanım ve geçerli kontrol kayıtları, kullanacak kişinin yeterlilik bilgisi ve teslim ekibi önceden bildirilir. Fotoğraf, kimlik veya cihaz kısıtı varsa araç yola çıkmadan öğrenilir. Onay, yalnız dosyanın gönderilmesi değil tesisin kabul teyididir. Son anda başka makine ayrılırsa yeni ünitenin bilgileri güncellenmeden sevkiyat yapılmaz. İlçe yolunu kat ettikten sonra kapıda eksik belge görmek, yalnız nakliye kaybı değil bakım penceresinin kapanması anlamına gelebilir.",
            },
            {
                baslik: "Değişiklik kontrolüyle ek işi yönetmek",
                metin:
                    "Bakım sırasında hedef, malzeme veya çalışma alanı değişebilir. Tedarik disiplininde bu değişiklikler 'hazır gelmişken yapalım' yaklaşımıyla yürütülmez. Yeni noktanın erişim geometrisi, enerji durumu, alt alanı, gerekli aleti ve sorumlu onayı kayda eklenir. Makine sınıfını etkileyen değişiklikte üretici erişim diyagramı yeniden kontrol edilir. İş, güvenli pencereye sığmıyorsa açık kalem olarak bırakılır. Bu uygulama esnekliği yok etmez; değişikliğin kim tarafından, neye dayanarak kabul edildiğini görünür kılar.",
            },
            {
                baslik: "Parça ve alet sayımını hücre teslimine bağlamak",
                metin:
                    "Sepete giren el aletleri ve küçük sarflar listelenir, düşmeye karşı bağlanır ve kullanım sonunda yeniden sayılır. Sökülen bağlantılar ile ambalajlar kapalı kutuda tutulur. Çalışma altı bariyerlenir; üretim, stok veya personel bu hücreye girmez. Sayım tutmadan ve alan gözle kontrol edilmeden iş emri kapatılmaz. Fotoğraf izni yoksa teslim yazılı form ve iki taraflı imzayla yürür. Bu kayıt belirli bir üretim prosesine dair iddia değil, dış bakımın sahada yabancı unsur bırakmadığını kanıtlama yöntemidir.",
            },
            {
                baslik: "Tedarikçi tesliminde açık kalemleri dürüstçe bırakmak",
                metin:
                    "Duruş süresine sığmayan, malzemesi hazır olmayan veya mevcut platformla güvenle erişilemeyen hedef tamamlanmış gibi işaretlenmez. Nedeni sınıflandırılır: izin, erişim, enerji, malzeme ya da zaman. Yeni ziyaret için gerekli makine ve hazırlık bu kayda göre kurulur. Tesis sorumlusu tamamlanan hücreleri ayrı ayrı kabul eder. Makine iade edilirken açık iş listesi hem bakım ekibine hem planlamaya teslim edilir. Bu dürüst kapanış, tedarik zincirinde yüzeysel bir tamamlama beyanından daha değerlidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sivrihisar OSB tedarikçi işi kontrol matrisi",
                paragraflar: [
                    "Bu matris belirli bir tesiste havacılık üretimi bulunduğu iddiasını taşımaz; havacılık-savunma şartnamesine göre çalışan herhangi bir tedarikçinin dış platform işinde doğrulayabileceği genel kontrol alanlarını gösterir.",
                ],
                tablo: {
                    basliklar: ["Kontrol alanı", "Saha kanıtı", "Sorumlu", "Kapanış"],
                    satirlar: [
                        ["Ekipman uygunluğu", "Makine tanımı ve kontrol kaydı", "Tesis yüklenici kabulü", "Onaylı makine teslimde"],
                        ["Kullanıcı yetkisi", "Uygun yeterlilik ve bildirim", "İSG sorumlusu", "Yetkisiz kullanım yok"],
                        ["Görev kapsamı", "Hedef ve sınırlandırılmış alan", "Bakım iş emri sahibi", "Ek iş kayıtlı"],
                        ["Alet hareketi", "Giriş-çıkış sayımı", "Saha ekibi", "Eksiksiz hücre teslimi"],
                        ["Teknik kabul", "Tamamlanan ve açık kalem listesi", "Tesis teknik yetkilisi", "İmzalı kapanış"],
                    ],
                },
            },
            {
                baslik: "İlçe OSB'sine giriş gününü boşa çıkarmamak",
                paragraflar: [
                    "Teslim planı bakım başlangıcından geriye doğru kurulur. Önce hedef fotoğrafı ve ölçüyle makine sınıfı seçilir; sonra tesisin belge onay süresi, personel giriş adımı, güvenlik bilgilendirmesi, taşıyıcının indirme alanı ve iş izninin açılacağı saat yerleştirilir. Makine, izin açılırken henüz yolda olmamalı; aynı şekilde günlerce kontrolsüz bekleyecek kadar erken de gönderilmemelidir. Onay sahibi ve saha irtibatı teslim formunda bulunur.",
                    "Tarih kayarsa yalnız kiralama başlangıcı değil, taşıma, personel bildirimi ve belge geçerliliği de yeniden değerlendirilir. Makine sahaya ulaştıysa güvenli park ve yetkisiz kullanım kontrolü sürer. Değişiklik yazılı teyit edilir. Bu hazırlık Sivrihisar OSB'yi genel kırsal sevkiyat anlatısından ayırır; yolun kendisinden çok, tedarikçi kabulüyle bakım penceresinin birbirine bağlanmasına odaklanır.",
                ],
            },
            {
                baslik: "Alt yüklenici kaydından tekrar edilebilir bakım düzeni",
                paragraflar: [
                    "İlk işte kullanılan makine sınıfı, park konumu, giriş rotası, kabul edilen evrak ve erişilemeyen hedefler sonraki bakım için kayıt oluşturur. Ancak saha değiştiğinde eski sonuç otomatik tekrarlanmaz. Yeni ekipman, istif veya yapı değişikliği fotoğrafla karşılaştırılır; güncel kontrol belgesi ve kullanıcı listesi yeniden sunulur. Tekrar edilebilirlik, aynı dosyayı kopyalamak değil, aynı kontrol kapılarını güncel kanıtla geçmektir.",
                    "Sonraki çağrıda bu kayıtlar hazırlık süresini kısaltır ve eksik evrak riskini azaltır. Açık kalemin nedeni daha önce erişimse uygun sınıf baştan seçilir; malzemeyse tesis hazırlığı tamamlanmadan sevkiyat açılmaz. Tedarikçi işletme böylece platform kullanımını rastgele dış hizmetten, kendi kalite ve İSG sistemine bağlı izlenebilir bir bakım sürecine dönüştürür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu sayfa Sivrihisar OSB'de havacılık tesisi bulunduğunu mu söylüyor?",
                cevap:
                    "Hayır. Kamuya açık ve belgeyle verilen gerçek, Eskişehir'de havacılık motor sanayisi çevresinde bir tedarik kültürünün bulunması ve Sivrihisar OSB'nin varlığıdır. Belirli bir OSB tesisinin hangi sektöre çalıştığı, hangi parçayı ürettiği veya özel bir müşteri şartına tabi olduğu varsayılmaz. Buradaki çerçeve koşulludur: tesis havacılık-savunma tedarik şartlarıyla çalışıyorsa dış platform hizmetini hangi evrak, izin ve kayıt disipliniyle yönetebileceğini anlatır. Gerçek kapsam her talepte tesisin yazılı beyanıyla doğrulanır.",
            },
            {
                soru: "Tedarikçi kabul dosyasında hangi kayıtlar hazırlanır?",
                cevap:
                    "Tesisin güncel prosedürü belirleyicidir. Genel olarak makinenin tanımı ve geçerli kontrol kaydı, kullanacak kişinin makine ailesine uygun yeterliliği, sahaya girecek personel bildirimi, görev kapsamı ve işe özel izinler istenebilir. Alet-sarf listesi ile teslim formu da süreçte kullanılabilir. Dosyayı gönderip onay teyidi alırız; yalnız e-posta çıkışı yeterli sayılmaz. Tesis ek gizlilik, refakat veya cihaz kısıtı istiyorsa buna sevkiyattan önce uyarlanır. Belirli bir standarda otomatik uygunluk iddiası verilmez.",
            },
            {
                soru: "Bakım sırasında kapsam değişirse iş tamamen durur mu?",
                cevap:
                    "Her değişiklik tüm işi durdurmaz; yalnız yeni hedef mevcut iznin içine kontrolsüz biçimde eklenmez. Erişim geometrisi, enerji ve hareket izolasyonu, alt alan, gerekli alet, süre ve yetkili onayı değerlendirilir. Güvenle aynı sınıf ve pencerede yapılabiliyorsa iş emri güncellenir. Uygun değilse mevcut kapsam devam eder, yeni hedef açık kalem olarak planlanır. Böylece değişiklik yönetilir fakat güvenlik veya izlenebilirlik adına gereksiz bir genel duruş yaratılmaz.",
            },
            {
                soru: "Alet sayımında eksik çıkarsa ne yapılır?",
                cevap:
                    "İş hücresi açılmaz ve eksik unsur bulunmadan kapanış verilmez. Sepet, çalışma altı, kullanılan kutular ve güzergâh kontrollü biçimde aranır; tesisin olay ve uygunsuzluk prosedürü uygulanır. Eksik parçayı varsayımla kayıttan düşmeyiz. Başlangıçta aletlerin tanımlı listeyle ve mümkünse düzenli yerleşimle sayılması aramayı kolaylaştırır. Bulgu ve alınan düzeltici adım teslim formuna işlenir. Amaç yalnız bir eşyayı bulmak değil, yabancı unsurun sonraki sürece taşınmadığını kanıtlamaktır.",
            },
            {
                soru: "İlçe dışından gelen operatörün tesis eğitimini ne zaman alması gerekir?",
                cevap:
                    "Tesisin belirlediği zaman ve biçimde, çalışmaya başlamadan önce tamamlamalıdır. Eğitim veya brifing için ayrılan saat taşıma planına eklenir; makine duruş başladığında kapıda eğitim beklemez. Önceden çevrim içi bölüm varsa tamamlanır, sahaya özel bilgilendirme teslim günü yapılır. Operatör değişirse önceki kişinin eğitimi yeni kişiye geçmez. Eğitim kaydı ve saha yetkisi alınmadan sepet yükseltilmez. Bu süreyi gizlemek yerine teklif ve gün planında görünür kılmak bakım penceresini korur.",
            },
            {
                soru: "İş sonunda hangi açık kalemler ikinci ziyarete taşınır?",
                cevap:
                    "Mevcut platformun erişim diyagramı dışında kalan, enerji izolasyonu sağlanamayan, malzemesi hazır olmayan, izin penceresine sığmayan veya ortam koşulu uygun bulunmayan hedefler açık bırakılır. Her biri nedeni ve gereken hazırlıkla kaydedilir. İkinci ziyaret aynı belirsizlikle çağrılmaz; farklı sınıf, yetkili, malzeme ya da zaman penceresi önceden belirlenir. Tamamlanan işler ayrı teknik kabul alır. Açık kalan hedefi tamamlanmış gibi göstermek tedarik zinciri kaydını zayıflatır ve sonraki bakım riskini büyütür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Sivrihisar OSB'nin varlığı ile Eskişehir'in havacılık-savunma tedarik kültürü uygulama belgesindeki kamuya açık genel çerçevedir. Sivrihisar OSB içinde belirli bir havacılık tesisi, firma, proses, ürün, kapasite veya müşteri iddiası kurulmamıştır; içerik koşullu tedarikçi evrakı ve İSG pratiğini anlatır.",
    },

    "bolge:mihaliccik": {
        h1: "Mihalıççık'a Planlı Platform Sevkiyatı ve Sahada Kalış Yönetimi",
        giris:
            "Mihalıççık için platform kiralamasının bu sayfadaki ana konusu belirli bir sektör veya tesis değildir; Eskişehir merkezden uzak ilçeye giden makine, taşıyıcı ve çalışma ekibinin tek ziyaret içinde işi tamamlayabilmesi için kurulan lojistik düzendir. İlçede hangi işletmenin, yapının veya prosesin bulunduğuna dair belge dışı iddia üretmeden depo, atölye, kamu yapısı, çelik çatı ya da dış bakım gibi gerçek talepte doğrulanabilecek iş türlerini ortak bir planlama çerçevesinde ele alırız. Uzak işte eksik kapı ölçüsü, hazır olmayan malzeme veya belirsiz enerji yetkilisi merkezdeki kısa bir gecikmeden daha ağır sonuç verir; yeni araç, yeni gün ve yeni saha kabulü gerekebilir. Bu nedenle hedef ve güzergâh fotoğrafları, zemin, en dar geçiş, yatay uzaklık, çalışma penceresi, makinenin gece parkı ve ekibin sahada kalış ihtiyacı araç çıkmadan kesinleştirilir. İş birden fazla vardiyaya uzanacaksa her gün merkeze dönüş varsayılmaz; güvenli konaklama ve vardiya başlangıç-bitiş saatleri personel planına dâhil edilir. Amaç uzaklığı dramatikleştirmek değil, yol, çalışma ve dinlenme sürelerini birbirine karıştırmadan güvenli bir program kurmaktır.",
        maddeler: [
            {
                baslik: "Uzaktan ön keşfi güzergâh boyunca yapmak",
                metin:
                    "Yalnız arızalı noktanın yakın çekimi makine seçtirmez. Taşıyıcının yaklaşacağı yol, güvenli indirme alanı, parsel kapısı, dönüş, zemin, kapalı hacim girişi ve hedefe kadarki en dar rota ardışık fotoğraflanır. Hedef kotu, yatay engel ve kullanılabilir çalışma tabanı ölçülür. Kanal, rampa, eğim veya geçici istif ayrıca gösterilir. Bilgi çelişkiliyse canlı görüntüyle tekrar bakılır ya da fiziksel keşif planlanır. Uzak ilçeye yanlış sınıf göndermek yerine ölçüyü yeniden almak hem daha kısa hem daha güvenlidir.",
            },
            {
                baslik: "Gidiş, çalışma ve dinlenme süresini ayırmak",
                metin:
                    "Taşıma ve personel yolculuğu bakım penceresinin görünmez parçası sayılmaz. Makine mümkünse çalışmadan önce teslim edilip kabul edilir; ekip işe dinlenmiş biçimde başlar. Uzun günün sonunda aynı personeli zorunlu dönüşe çıkarmak yerine işin süresi, hava ve yol koşuluna göre sahada konaklama değerlendirilir. Konaklama ticari bir ayrıntı değil, vardiya ve yorgunluk yönetimidir. Ertesi gün başlayacaksa kullanıcı yetkisi, makine kontrolü ve saha izni yeniden doğrulanır; önceki günün onayı otomatik uzamaz.",
            },
            {
                baslik: "Bir sevkiyatta tüm hazır kalemleri toplamak",
                metin:
                    "İşletme veya kurum, aydınlatma, oluk, havalandırma, kapı üstü mekanizma, dış cephe ve benzeri yüksek erişim ihtiyaçlarını bölüm bölüm listeler. Aynı makineyle güvenle kapanabilen hedefler konum sırasına dizilir; farklı zemin ya da uzanma isteyen kalemler açıkça ayrılır. Her hedefin malzemesi, enerji izolasyonu ve yetkilisi hazır olmadan programa alınmaz. Hazır olmayan bir iş için bütün gün beklemek yerine onaylı sıradaki kaleme geçilir. Fakat yeni iş rastgele eklenmez; erişim ve izin kontrolünden geçer.",
            },
            {
                baslik: "Sahada park, şarj ve arıza iletişimi",
                metin:
                    "Makine gece kalacaksa düz, taşıma gücü uygun, yetkisiz erişimden ve araç trafiğinden ayrılmış park noktası belirlenir. Akülü sınıfın şarj alanı kuru ve havalandırılan yerde olmalı, kablo yaya veya araç yolundan geçmemelidir. Yetkilendirilmiş kullanıcı her vardiya başında görünür kontrolleri yapar. Olağan dışı ses, sızıntı, alarm veya kumanda sorunu varsa kullanım durur ve servisle iletişim kurulur; sahadaki personele yetkisiz onarım yaptırılmaz. Müdahale ve gerekirse ikame düzeni teklif aşamasında konuşulur.",
            },
            {
                baslik: "İade aracını iş kapanışına bağlamak",
                metin:
                    "Taşıyıcının dönüş zamanı tahmine göre değil, gerçekçi bakım sırasına göre rezerve edilir. İş erken veya geç biterse araç planı mümkün olduğunca önceden güncellenir. İadeden önce sepet boşaltılır, alet-parça sayılır, makine temizlenir, görünür durumu kaydedilir ve tamamlanan alanlar saha sorumlusuna teslim edilir. Açık kalem varsa nedeni yazılır; iade saatini tutturmak için tamamlanmış gösterilmez. Yükleme alanı diğer araçlardan ayrılır ve makine güvenli biçimde bağlandıktan sonra teslim kapanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mihalıççık uzak saha programının kontrol tablosu",
                paragraflar: [
                    "Aşağıdaki tablo belirli bir işletmeye ilişkin iddia değil, uzak ilçe işinde yolculuktan iadeye kadar kapanması gereken genel kararları gösterir.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Ana soru", "Gerekli hazırlık", "Tamamlanma kanıtı"],
                    satirlar: [
                        ["Ön keşif", "Makine hedefe ulaşır mı?", "Rota, ölçü, zemin fotoğrafı", "Sınıf ve indirme onayı"],
                        ["Gidiş", "Teslim ne zaman yapılır?", "Taşıyıcı, saha irtibatı", "Makine kabul edildi"],
                        ["Çalışma", "Hangi sıra izlenir?", "Malzeme, izin, izolasyon", "Bölüm teslimleri"],
                        ["Sahada kalış", "Park ve personel düzeni nedir?", "Şarj, konaklama, vardiya devri", "Günlük kontrol kaydı"],
                        ["İade", "İş ve makine nasıl kapanır?", "Alet sayımı, yükleme alanı", "İmzalı teslim"],
                    ],
                },
            },
            {
                baslik: "Tek günlük ve çok vardiyalı seçenekleri dürüst karşılaştırmak",
                paragraflar: [
                    "Tek günlük model, hedeflerin az, malzemenin hazır, saha kabulünün hızlı ve çalışma penceresinin kesintisiz olduğu işlerde uygundur. Makine ile ekip aynı gün gidip dönecekse yol ve çalışma süresi birlikte değerlendirilir; sıkışık takvim uğruna güvenli vardiya uzatılmaz. Belirsiz izin, çok noktalı rota veya hava bağımlı dış iş varsa makinenin önce teslim edilmesi ve ekibin sahada kalması daha öngörülebilir olabilir.",
                    "Çok vardiyalı modelde park, şarj, anahtar muhafazası, kullanıcı değişimi, personelin dinlenmesi ve iade zamanı ayrı kalemlerdir. Hangi seçeneğin uygun olduğu sabit bir gün sayısıyla değil, doğrulanmış iş listesiyle belirlenir. Teklif iki senaryonun kapsamını açıkça gösterir; konaklama veya bekleme sonradan saklı maliyet olarak çıkarılmaz.",
                ],
            },
            {
                baslik: "Uzak sahada değişiklik ve yedek plan",
                paragraflar: [
                    "Hava, zemin, kapalı güzergâh veya tesis programı değiştiğinde bütün planı körlemesine sürdürmeyiz. Dış iş yapılamıyorsa hazır ve güvenli iç kalemlere geçmek için yedek liste tutulabilir. Zemin yağışla yumuşamışsa daha büyük makine çözüm sayılmaz; yüzey hazırlanır veya iş ertelenir. Yeni istif rotayı kapattıysa saha sorumlusu alternatif güzergâhı onaylamadan makine hareket etmez.",
                    "Arıza halinde belirtiler kaydedilir, kullanım durdurulur ve uzaktan teşhis yalnız güvenli kullanıcı kontrolleriyle sınırlı kalır. Servis veya ikame kararı, işin kalan süresi ile erişim sınıfına göre verilir. Erteleme gerekirse açık iş ve yeni hazırlık yazılı bırakılır. Uzaklık, güvenlik adımlarını atlama nedeni değil; yedek planı önceden kurma nedenidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Mihalıççık işi için fiziksel keşif şart mı?",
                cevap:
                    "Her işte şart değildir. Girişten hedefe kadar ardışık fotoğraflar, kapı ve dönüş ölçüleri, hedef kotu, yatay uzaklık, zemin ile indirme alanı açıkça gösterilebiliyorsa uzaktan ön seçim yapılabilir. Bilgi sınırda, güzergâh karmaşık veya taşıma yüzeyi belirsizse fiziksel keşif gerekir. Yalnız hedefin yakın çekimi yeterli değildir. Teslim günü saha yine yürünür; uzaktan keşif güncel engel ve zemin kontrolünün yerine geçmez. Ama doğru paket, gereksiz ön yolculuğu ve yanlış makine sevkiyatını azaltır.",
            },
            {
                soru: "Ekip neden bazen ilçede konaklamalıdır?",
                cevap:
                    "İş birden fazla vardiyaya uzanıyorsa veya yolculukla birleşen gün güvenli çalışma ve dinlenme süresini aşacaksa konaklama değerlendirilir. Amaç maliyet eklemek değil, operatörün uzun yol ardından yorgun biçimde platform kullanmasını ya da iş sonunda zorunlu dönüşe çıkmasını önlemektir. Makine sahada güvenli parkta kalır, ekip yeni vardiyaya dinlenmiş başlar. Konaklama ihtiyacı iş listesi ve zaman penceresine göre teklif öncesinde görünür kılınır; sahada sürpriz karar olarak bırakılmaz.",
            },
            {
                soru: "Tek sevkiyatta farklı binalardaki işleri bitirebilir miyiz?",
                cevap:
                    "Makine sınıfı, zemin ve erişim geometrisi uyuyorsa mümkün olabilir. Her bina için rota, hedef, enerji izolasyonu, malzeme ve sorumlu kişi önceden hazırlanır. Sıra en az geçişe göre kurulur, fakat bir bölüm teslim edilmeden diğeri açılmaz. Kapalı dar hacim ile bozuk dış saha farklı sınıf istiyorsa tek makineyi zorlamayız. İki sınıfın aynı taşıma programında planlanması veya işleri ayrı günlere bölmek daha güvenli olabilir. Ortak sevkiyat sorumluluk ve izinleri birleştirmez.",
            },
            {
                soru: "Hava nedeniyle dış iş durursa gün tamamen kaybolur mu?",
                cevap:
                    "Önceden hazırlanmış ve aynı makineyle güvenle yapılabilecek iç işler varsa yedek listeye geçilebilir. Bunun için malzeme, giriş izni ve enerji yetkilisi hazır olmalıdır. Yedek iş yoksa rüzgâr, yağış veya zemin üretici ve saha sınırlarına uymadığında çalışma yapılmaz. Bekleme, erteleme ve yeni sevkiyat koşulu sözleşmede önceden yazılır. Hava riskini yok edemeyiz; kalemleri bağımlılıklarına göre ayırarak bütün programın tek dış işe bağlanmasını önleyebiliriz.",
            },
            {
                soru: "Makine gece sahada kalırsa güvenlik ve şarj kime aittir?",
                cevap:
                    "Tesis düz, korunaklı ve yetkisiz erişime kapalı park alanı ile uygun şarj noktasını sağlar; kiralama tarafı teknik bakım ve arıza desteğini yürütür. Akülü makinenin kablosu araç-yaya yolundan geçmez, şarj alanı kuru ve havalandırılan yerde olur. Yetkili kullanıcı vardiya başında görünür kontrol yapar. Anahtar ve kullanım yetkisi teslim formunda belirlenir. Olağan dışı durumda makine durdurulur ve servis aranır; sahada yetkisiz müdahale yapılmaz. İki tarafın sorumlulukları sözleşmede açıkça ayrılır.",
            },
            {
                soru: "İş erken biter veya uzarsa dönüş aracı nasıl yönetilir?",
                cevap:
                    "Saha sorumlusu kapanış tahminini mümkün olduğunca erken planlamaya bildirir. Erken bitişte taşıyıcı uygunluğu kontrol edilir; geçişte ise mevcut rezervasyonun kaydırılması ve makinenin güvenli parkı kararlaştırılır. Araç gelsin diye tamamlanmamış iş kapanmış sayılmaz. İade öncesinde alet-parça sayımı, alan teslimi, makine temizliği ve görünür kontrol yapılır. Değişen taşıma ve kiralama süresi yazılı teyit edilir. Böylece iş ekibi, taşıyıcı ve tesis aynı kapanış saatine göre hareket eder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Mihalıççık'ın Eskişehir'in ilçesi olması ve görevde uzak ilçeye planlı sevkiyat-konaklama çapası kamuya açık uygulama çerçevesidir. Belirli tesis, sektör, yol mesafesi, süre, kapasite veya doğrulanmamış rakam kullanılmamıştır; rota keşfi, yorgunluk, vardiya, park ve iade planı sektör geneli saha pratiğidir.",
    },

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Tedarikçi Hollerinde Sepetli / Örümcek Platform Kiralama",
        giris:
            "Eskişehir'in havacılık ve savunma tedarik zincirinde çalışan atölyeler için sepetli platform ihtiyacı neredeyse hiçbir zaman tek başına bir yükseklik meselesi olarak başlamaz; önce hangi hacme, hangi kayıtla ve hangi ölçüde ekipmanla girileceği sorulur. Sepetli/örümcek tipi platformlar, kapı ölçüsü dar ve koridoru dolu olan bu tesislerde tercih edilen sınıftır — parçalara ayrılıp taşınabilir, dar bir açıklıktan geçebilir ve iç mekânda ayaklarını genişleterek stabil bir taban kurar. Ancak bu manevra kabiliyeti, tedarikçi sahasındaki kayıt disiplinini ortadan kaldırmaz. Sepete çıkan her el aleti listelenir, ayak plakalarının basacağı zemin önceden değerlendirilir ve makine hacme girmeden hidrolik bağlantılar damlama açısından kontrol edilir. Sivrihisar tarafındaki hangar ve tarımsal yapı çevresinde ise aynı makine sınıfı farklı bir nedenle tercih edilir: geniş açıklıklı ama içi dolu hacimlerde ayakları tek tek konumlandırılabilen bir platform, bom tipi bir makinenin giremediği köşelere ulaşabilir. Bu sayfada iki kullanım örneğini de — tedarikçi hollerindeki kayıt disiplini ve kırsal hangarlardaki konumlandırma esnekliği — ayrı ayrı ele alıyoruz.",
        maddeler: [
            {
                baslik: "Parça parça taşınan makinenin kendi dosyası olur",
                metin:
                    "Sepetli platformun modüler yapısı, tesise taşınma şeklini de değiştirir; makine tek parça değil, ayaklar, gövde ve sepet olarak ayrı ayrı girer. Tedarikçi sahalarında bu durum ayrı bir kayıt gerektirir: her parçanın sayısı ve tanımı giriş formuna yazılır, hacme alınan parça sayısı kadarının çıkması beklenir. Montaj tesis içinde yapılacaksa bu işlem için ayrılan alan önceden belirlenir ve montaj sırasında kullanılan bağlantı elemanları da sayım listesine eklenir. Bu ayrıntı, sepetli platformu diğer makine sınıflarından ayıran ek bir izlenebilirlik katmanıdır.",
            },
            {
                baslik: "Ayak yerleşimi ve zemin noktasal yük",
                metin:
                    "Sepetli platformun ağırlığı, makasa veya tekerleklere değil, ayrı ayrı konumlandırılan ayaklara aktarılır ve bu ayaklar zemine noktasal yük bindirir. Cilalı, döşeme kaplı veya hassas test hacimlerinde bu nokta yükü, geniş tabanlı bir makinenin toplam ağırlığından daha kritik hâle gelebilir. Bu yüzden ayak yerleşimini belirlerken zeminin taşıma değerini ve varsa döşeme altı boşluğunu tesisin teknik sorumlusuyla birlikte doğruluyoruz; gerekli görülen noktalarda yük dağıtıcı taban plakası kullanıyoruz.",
            },
            {
                baslik: "Dar geçişte cihaz kısıtına uygun makine hazırlığı",
                metin:
                    "Kamera ve cihaz kısıtı olan hacimlerde makinenin kendisi de bu kısıta göre hazırlanır: dış yüzeyde marka dışı hiçbir işaretleme bırakılmaz, gövde önceden silinir ve tekerlek izi bırakmayan lastik kullanılır. Giriş sırasında fotoğraf çekilemeyen sahalarda, teslim ve iade durumunu belgelemek için iki taraflı imzalanan yazılı kabul formuna geçiyoruz. Bu form makinenin sayaç durumunu, görünür hasar kaydını ve sahaya götürülen parça-alet listesini içerir.",
            },
            {
                baslik: "Sivrihisar hangarlarında köşe erişimi",
                metin:
                    "Havacılık merkezi çevresindeki hangar hacimlerinde ve büyük açıklıklı tarımsal yapılarda içerideki uçak, planör, araç veya depolanmış malzeme, makinenin dolaşım alanını daraltır. Sepetli platform, ayaklarını dar bir aralığa yerleştirip sepeti köşeye doğru uzatabildiği için, bom tipi bir makinenin manevra edemediği noktalarda tercih ediliyor. Zemin toprak veya parçalı betonsa ayak altına taşıma plakası konur; bu, kırsal hangarlarda uyguladığımız standart hazırlıktır.",
            },
            {
                baslik: "Operatör yeterliliği makine ailesine özgüdür",
                metin:
                    "Sepetli platformu kullanacak kişide aranan yeterlilik belgesi, makaslı veya bom tipi bir platform için alınmış belgeyle aynı kabul edilmez; sepetli/örümcek sınıfı ayrı bir yeterlilik gerektirir. Tedarikçi tesislerinde bu belge, sahaya giriş onayının bir parçası olarak kontrol edilir. Kısa süreli işlerde operatörlü kiralama tercih edildiğinde operatörümüzün de tesisin yüklenici giriş sürecinden geçmesi gerekir; bu süre teklif aşamasında hesaba katılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hacim tipine göre sepetli platform hazırlığı",
                paragraflar: [
                    "Sepetli platform talebini aldığımızda önce hangi hacim tipiyle karşı karşıya olduğumuzu belirliyoruz; hazırlık listesi ve montaj yeri bu sınıflandırmadan çıkıyor.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Zemin riski", "Kayıt gereksinimi", "Ayak/taban hazırlığı"],
                    satirlar: [
                        ["Havacılık parça tedarikçisi", "Cilalı/hassas döşeme", "Parça sayımı, bağlantı elemanı takibi", "Yük dağıtıcı taban"],
                        ["Kaplama/test hacmi", "Ölçüm hassasiyeti", "Cihaz kısıtı, yazılı kabul formu", "Temiz, izsiz taban"],
                        ["Hangar (Sivrihisar)", "Toprak/parçalı beton", "Basit giriş kaydı", "Geniş taşıma plakası"],
                        ["Tarımsal depo yapısı", "Sıkıştırılmış toprak", "Mevsim penceresi notu", "Ayak altı plaka zorunlu"],
                        ["Kurumsal ofis/idari bina", "Asma kat/döşeme", "Ziyaretçi kaydı", "Nokta yükü hesabı"],
                    ],
                },
            },
            {
                baslik: "Montaj yerini önceden belirlemenin faydası",
                paragraflar: [
                    "Sepetli platform parça hâlinde geldiği için, montajın yapılacağı alanın tesis içinde mi yoksa dışında mı olacağı sevkiyattan önce netleşmelidir. Tesis içi montaj, cihaz kısıtı ve kayıt yükü olan sahalarda tercih ediliyor çünkü parçalar tek seferde sayılıp içeri alınıyor; dışarıda montaj ise geniş yükleme alanı olan tedarikçi parsellerinde daha hızlı ilerliyor. Kararı, hacmin giriş genişliği ve montaj için ayrılabilecek alan üzerinden veriyoruz.",
                    "İkinci belirleyici, montaj sırasında kullanılan el aletlerinin de sayım listesine girmesidir. Bir cıvata anahtarının montaj alanında unutulması, tamamlanmış bir sepetli platformun tesis içinde park edilmesinden farklı bir kayıt riski taşır — bu yüzden montaj öncesi ve sonrası ayrı bir sayım yapıyoruz.",
                ],
            },
            {
                baslik: "Sivrihisar ile merkez arasındaki fark: neden aynı makine değil",
                paragraflar: [
                    "Merkez ilçelerdeki tedarikçi hollerine giden sepetli platform kompakt, akülü ve iz bırakmayan lastiklidir; Sivrihisar'daki hangar ve tarımsal yapılara giden makine ise geniş taşıma plakalı, arazi tipine yakın ayak yapısına sahiptir. İki makineyi birbirinin yerine kullanmak sahada risk yaratır — merkezdeki makine kırsal toprak zeminde ayak batması yaşayabilir, kırsal makine ise dar bir koridordan geçemeyebilir.",
                    "Bu yüzden aynı hafta içinde hem merkezde hem Sivrihisar'da işiniz varsa, tek makineyle ikisini çözmeyi önermiyoruz; sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi iki noktaya bırakıyoruz. Nakliye payı bu şekilde bölünüyor, saha riski ise doğru makine-zemin eşleşmesiyle ortadan kalkıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sepetli platform tesise parça parça mı giriyor, montajı nerede yapılıyor?",
                cevap:
                    "Genellikle parça parça girer — ayaklar, gövde ve sepet ayrı taşınır — ve montaj yeri sevkiyattan önce belirlenir. Cihaz kısıtı ve kayıt yükü olan tedarikçi hollerinde montajı tesis içinde, ayrılan bir alanda yapıyoruz; böylece parçalar tek seferde sayılıp içeri alınıyor ve montaj sırasında kullanılan aletler de aynı listeye giriyor. Geniş yükleme alanı olan parsellerde ise dışarıda monte edip tamamlanmış makineyi içeri sokmak daha hızlı ilerliyor. Hangi yöntemin uygun olduğuna hacmin giriş genişliği ve montaj için ayrılabilecek alan üzerinden karar veriyoruz; bu bilgiyi teklif aşamasında sizden istiyoruz.",
            },
            {
                soru: "Hassas ölçüm yapılan bir laboratuvara sepetli platform sokulabilir mi?",
                cevap:
                    "Sokulabilir, ancak bu hacimler için ayrı bir hazırlık uyguluyoruz. Makine önceden silinir, tekerlek ve ayak altına iz bırakmayan koruma konur, gerekiyorsa geçici örtü kullanılır. Cihaz kısıtı varsa fotoğraf çekimini bırakıp iki taraflı imzalanan yazılı kabul formuna geçiyoruz; formda teslim saati, sayaç durumu ve sahaya götürülen alet-parça listesi yer alır. Ölçüm hassasiyeti olan hacimlerde ayrıca ayak yerleşimini zeminin nokta yükü taşıma değerine göre belirliyoruz — geniş tabanlı bir makinenin toplam ağırlığından çok, ayakların bastığı noktadaki yük burada belirleyici oluyor.",
            },
            {
                soru: "Sivrihisar'daki bir hangara sepetli platform gönderebilir misiniz?",
                cevap:
                    "Gönderebiliriz; burada kullandığımız makine merkezdekinden farklıdır. Hangar zemini genellikle toprak veya parçalı betondur, bu yüzden ayak altına geniş taşıma plakası koyuyoruz ve ayakları tek tek konumlandırarak içerideki uçak, planör veya depolanmış malzemenin arasına giriyoruz. Bom tipi bir makinenin manevra edemediği köşelere bu şekilde ulaşılıyor. Zeminin son yağış durumunu ve mümkünse çalışma noktasının bir fotoğrafını sevkiyattan önce istiyoruz; bu iki bilgi ayak yerleşim planını netleştiriyor.",
            },
            {
                soru: "Montaj sırasında kullanılan aletler de mi sayılıyor?",
                cevap:
                    "Evet, bu sepetli platform kiralamasının ayırt edici bir parçası. Makine parça hâlinde geldiği için, montajda kullanılan cıvata anahtarı, tork anahtarı ve bağlantı elemanları da sayım listesine giriyor; montaj öncesi ve sonrası ayrı ayrı sayım yapılıyor. Bir aletin montaj alanında unutulması, tamamlanmış bir makinenin park edilmesinden farklı bir kayıt riski taşıyor — bu yüzden bu adımı atlamıyoruz. Tesisin kendi ekipman giriş formu varsa bizim listemizi onunla birleştirip tek belge hâline getiriyoruz.",
            },
            {
                soru: "Sepetli platform için hangi yeterlilik belgesi geçerli?",
                cevap:
                    "Sepetli/örümcek sınıfı için ayrı bir yeterlilik belgesi aranır; makaslı veya bom tipi bir platform için alınmış belge bu sınıfı kapsamaz. Tedarikçi tesislerinde bu belge, sahaya giriş onayının parçası olarak kontrol edilir ve belgenin tarih geçerliliği kapıda sorgulanır. Kısa süreli işlerde operatörlü kiralama seçildiğinde operatörümüzün de tesisin yüklenici giriş sürecinden geçmesi gerekir; bu sürecin ne kadar süreceğini teklif aşamasında öğrenip sevkiyat planını ona göre kuruyoruz.",
            },
            {
                soru: "Aynı hafta hem merkezde hem Sivrihisar'da sepetli platform ihtiyacımız var; tek makineyle olur mu?",
                cevap:
                    "Genellikle önermiyoruz. Merkezdeki tedarikçi hollerine giden makine kompakt, akülü ve iz bırakmayan lastiklidir; Sivrihisar'daki hangar ve tarımsal yapılara giden makine ise geniş taşıma plakalı ve toprak zemine uygun ayak yapısındadır. Birini diğerinin yerine kullanmak saha riski doğurur. Bunun yerine sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi iki noktaya bırakıyoruz; nakliye bir kez planlanır ve payı bölünür, her makine kendi zeminine uygun kalır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli/örümcek platformların modüler yapısı, ayak üzerinden nokta yük aktarması ve makine ailesine özgü yeterlilik belgesi gerekliliği üretici talimatları ve sektör pratiğinden gelir; Eskişehir'in havacılık-savunma tedarik zinciri ve Sivrihisar'daki hangar/tarımsal yapı varlığı kamuya açık genel bilgidir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Yüklenici Onay Sürecine Bağlı Nakliye ve Teslimat",
        giris:
            "Eskişehir'in tedarikçi tesislerinde bir platformun sahaya girişi, aracın kapıdan geçmesiyle başlamaz; başlangıç noktası, teslimattan günler önce gönderilen belge dosyasıdır. Nakliye ve teslimat hizmetimizi bu şehirde diğer illerdekinden ayıran şey, taşıyıcı aracın ve sürücünün de yüklenici giriş rejimine tabi olmasıdır — bazı tesislerde sürücü saha sınırına giremez, yalnızca kapıda teslim yapar; bazılarında ise sürücünün de kimlik bildirimi ve gerekirse gizlilik taahhüdü gerekir. Bu ayrımı önceden bilmek, kapıda kaybedilen saatleri baştan ortadan kaldırıyor. Sivrihisar tarafında ise mesele evrak değil mesafe ve zemindir: asfalt bittiği noktadan sonra makinenin taşıyıcı araçla mı yoksa kendi tahrikiyle mi ilerleyeceği, stabilize yolun dönüş yarıçapını kaldırıp kaldırmadığı belirleyici olur. Bu sayfada iki farklı teslimat gerçeğini — tedarikçi kapısındaki belge senkronizasyonu ve kırsaldaki yol/zemin planlamasını — ayrı ayrı ele alıyoruz.",
        maddeler: [
            {
                baslik: "Belge dosyası teslimattan önce, talep anında değil",
                metin:
                    "Tedarikçi tesislerinin çoğunda yüklenici onayı birkaç gün sürebilir; bu süreyi teslimat gününe sıkıştırmak yerine teklif aşamasında başlatıyoruz. Makinenin periyodik kontrol raporu, teknik tanım bilgisi ve sahaya girecek personelin kimlik bilgileri, sevkiyat tarihi netleştiği anda elektronik olarak gönderilir. Onay geldikten sonra araç yola çıkar; onay beklenmeden yapılan bir sevkiyat kapıda geri çevrilme riski taşır ve bu, hem zaman hem güven kaybı anlamına gelir.",
            },
            {
                baslik: "Sürücünün saha sınırına girip girmeyeceği önceden netleşir",
                metin:
                    "Bazı tedarikçi tesislerinde dış firma aracının sürücüsü yalnızca kapıya kadar gelir, makine oradan tesisin kendi personeli veya bizim refakatli ekibimiz tarafından içeri alınır. Bazılarında ise sürücünün de geçici kart ve refakatle içeri girmesi kabul edilir. Bu ayrımı bilmeden planlanan bir teslimat, kapıda beklenmedik bir aktarım gerektirir ve gün kaybına yol açar. Sevkiyat planını kurarken bu bilgiyi tesisten önceden alıyor, gerekiyorsa kapıda aktarım için ikinci bir personel görevlendiriyoruz.",
            },
            {
                baslik: "Cihaz kısıtı olan sahalarda teslim tutanağı",
                metin:
                    "Kamera ve cihaz taşıma kısıtı olan tesislerde teslimat sırasında fotoğraf çekilemez; bu durumda teslim ve iade kaydını yazılı tutanakla tutuyoruz. Tutanakta makinenin teslim saati, sayaç durumu, görünür hasar kaydı ve sahaya götürülen alet-sarf listesi yer alır, iki taraf imzalar. Bu belge hem bizim açımızdan makinenin teslim anındaki durumunu kanıtlar hem de tesisin kendi kayıt sistemine eklenebilecek bir izlenebilirlik belgesi oluşturur.",
            },
            {
                baslik: "Sivrihisar'da asfaltın bittiği yerden sonrası",
                metin:
                    "Sivrihisar'daki enerji sahaları, hangar çevresi ve tarımsal yapılara giden yolların önemli bölümü stabilizedir. Lowbed aracın bu yola girip dönebilmesi yol genişliğine, eğime ve yağış sonrası zeminin taşıma gücüne bağlıdır. Bu şartlar sağlanmıyorsa makineyi saha girişinde indirip kendi tahrikiyle ilerletiyoruz; bu seçenek için makinenin akü kapasitesinin mesafeyi kaldırıp kaldırmadığını önceden hesaplıyoruz. Yolun son bölümünün bir fotoğrafı ve tahmini mesafe, bu kararı büyük ölçüde netleştiriyor.",
            },
            {
                baslik: "Aynı güzergâhta birden çok noktayı tek sevkiyata toplamak",
                metin:
                    "Hem merkez ilçelerdeki tedarikçi hollerinde hem Sivrihisar'ın geniş kırsalında, nakliye çoğu zaman kiralama süresinden daha belirleyici bir kalemdir. Aynı hat üzerindeki birden çok tesisin veya sahanın işini tek güne toplayıp aracı sırayla dolaştırmak, nakliye payını bölen en pratik yöntemdir. Bu eşgüdümü biz kuruyoruz; sizden istediğimiz, acil olmayan işlerde birkaç günlük tarih esnekliğidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha tipine göre teslimat akışı",
                paragraflar: [
                    "Nakliye planını çıkarırken önce hangi teslimat rejimiyle karşı karşıya olduğumuzu belirliyoruz; aşağıdaki tablo, teklif öncesi kullandığımız sınıflandırmadır.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Sürücü erişimi", "Belge zamanlaması", "Kayıt biçimi"],
                    satirlar: [
                        ["Havacılık parça tedarikçisi", "Kapıda aktarım", "Teklif aşamasında gönderim", "Yazılı kabul formu"],
                        ["Kaplama/test hacmi", "Refakatli giriş", "Onay teyidi beklenir", "Fotoğrafsız tutanak"],
                        ["Kurumsal/kamu binası", "Ziyaretçi kaydı", "Sevkiyattan önce", "İmzalı teslim formu"],
                        ["Sivrihisar enerji sahası", "Kendi tahrikiyle ilerleme", "Yol/zemin bilgisi önceden", "Fotoğraflı teslim"],
                        ["Hangar/tarımsal yapı", "Serbest giriş", "Basit bildirim", "Fotoğraflı teslim"],
                    ],
                },
            },
            {
                baslik: "Onay süresini teslimat tarihine göre geriye saymak",
                paragraflar: [
                    "Tedarikçi tesislerinde yüklenici onayı bazen birkaç gün sürer ve bu süreyi hesaba katmayan bir sevkiyat planı, teslimat tarihini kaydırmak zorunda kalır. Bu yüzden istenen teslimat tarihinden geriye doğru sayıyoruz: önce onay süresi tesisten öğrenilir, belge dosyası bu süreyi karşılayacak şekilde erken gönderilir, sevkiyat aracı ancak onay teyidi geldiğinde yola çıkarılır. Bu sıralama tersine çevrildiğinde — yani araç önce yola çıkıp onay yolda beklenirse — kapıda bekleme riski doğuyor.",
                    "İkinci bir zamanlama unsuru, sahaya girecek kişi sayısının onay süresini etkilemesidir. Sadece sürücü giren bir teslimatın onayı, operatörlü ekip giren bir teslimata göre daha hızlı işler. Bu yüzden operatör kararını erken vermenizi, mümkünse kendi belgeli personelinizin kullanacağını netleştirmenizi öneriyoruz; bu, onay yükünü doğrudan azaltıyor.",
                ],
            },
            {
                baslik: "Kırsal teslimatta yedek gün ve mesafe payı",
                paragraflar: [
                    "Sivrihisar'a giden bir teslimatta arıza veya hava koşulu, merkezdekinden farklı bir sonuç doğurur — mesafe, müdahale süresini de uzatır. Bu yüzden kırsal sahalara giden makinelerde teslimat öncesi kontrolü daha geniş tutuyoruz: akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu tek tek doğrulanır. Rüzgâr veya yağış nedeniyle çalışılamayan gün için bir yedek gün baştan belirleniyor; makine sahada kalır, koşul uygun olan gün çalışılır ve bu durumda ek bir nakliye bedeli doğmuyor.",
                    "Sevkiyatın tümüyle ertelenmesi gerekiyorsa, ki bu nakliye tekrarı demektir, kararı birlikte veriyoruz. Hangi seçeneğin geçerli olduğunu — yedek gün mü, tam erteleme mi — teklifte yazılı olarak belirtiyoruz; kırsal teslimatlarda en sık yaşanan anlaşmazlık bu netliğin eksikliğinden çıkıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sürücünüz tesisimizin saha sınırına girebilir mi?",
                cevap:
                    "Bu, tesisin kendi giriş rejimine bağlı ve önceden netleştirdiğimiz bir konu. Bazı tedarikçi tesislerinde sürücü yalnızca kapıya kadar gelir, makineyi içeri tesisin kendi personeli veya refakatli ekibimiz alır; bazılarında sürücü geçici kart ve refakatle saha sınırına kadar girebilir. Bu bilgiyi teklif aşamasında sizden veya tesisten öğreniyoruz; bilinmiyorsa kapıda aktarım için ikinci bir personel planlıyoruz ki gün kaybı yaşanmasın. Sürücünün kimlik bilgisi, hangi senaryoda olursa olsun, sevkiyattan önce tesise bildiriliyor.",
            },
            {
                soru: "Yüklenici onayımız birkaç gün sürüyor; teslimat tarihini nasıl garanti ediyorsunuz?",
                cevap:
                    "İstenen teslimat tarihinden geriye doğru sayarak. Önce onay süresini öğreniyor, belge dosyasını — periyodik kontrol raporu, teknik tanım, personel bilgileri — bu süreyi karşılayacak şekilde erken gönderiyoruz. Sevkiyat aracı ancak onay teyidi geldiğinde yola çıkıyor; bu sıralama tersine çevrilirse kapıda bekleme riski doğuyor. Onay süresini kısaltmanın bir yolu da sahaya giren kişi sayısını azaltmak — kendi belgeli personeliniz kullanacaksa dışarıdan giren tek kişi sürücü olur ve onay yükü hafifler.",
            },
            {
                soru: "Fotoğraf çekemediğimiz bir sahada teslimatı nasıl belgeliyorsunuz?",
                cevap:
                    "Yazılı tutanakla. Cihaz kısıtı olan tesislerde teslim ve iade aşamasında fotoğraf çekmiyoruz; bunun yerine iki taraflı imzalanan bir tutanak kullanıyoruz. Tutanakta makinenin teslim saati, sayaç durumu, görünür hasar kaydı ve sahaya götürülen alet-sarf listesi yer alıyor. Bu belge sizin kalite kayıtlarınıza eklenebilecek bir izlenebilirlik kaydı; bizim açımızdan ise makinenin teslim anındaki durumunu kanıtlıyor. Fotoğraf kısıtı olmayan sahalarda ikisini birlikte kullanıyoruz.",
            },
            {
                soru: "Sivrihisar'daki sahamıza asfalt yok; makine nasıl ulaşıyor?",
                cevap:
                    "Öncelikle taşıyıcı aracın yolu kaldırıp kaldırmadığına bakıyoruz — stabilize yolun genişliği, eğimi ve yağış sonrası taşıma gücü belirleyici. Uygunsa araç saha girişine kadar gidiyor; uygun değilse makineyi giriş noktasında indirip kendi tahrikiyle ilerletiyoruz, bunun için akü kapasitesinin mesafeyi kaldırdığını önceden hesaplıyoruz. Yolun son bölümünün bir fotoğrafı ve tahmini mesafe, hangi yöntemin uygulanacağını netleştiriyor. Kendi tahrikiyle uzun mesafe yapan makine akü ve zaman harcadığı için bu bilgiyi baştan bilmek planlamayı doğrudan etkiliyor.",
            },
            {
                soru: "Aynı hafta içinde birden fazla teslimatımız var; nakliyeyi birleştirebilir misiniz?",
                cevap:
                    "Evet ve bunu düzenli öneriyoruz. Aynı hat üzerindeki birden çok tesisin veya sahanın işi tek güne toplandığında, araç gidişte iki noktaya makine bırakıyor, dönüşte ikisini birden alıyor. Nakliye bir kez ödeniyor ve payı bölünüyor. Sıralamayı ve saat planını biz kurguluyoruz; sizden istediğimiz tek şey, acil olmayan işlerde birkaç günlük tarih esnekliği. Bu model özellikle merkez-Sivrihisar ekseninde iyi çalışıyor çünkü mesafe payı ikiye bölünmüş oluyor.",
            },
            {
                soru: "Kırsal teslimatta hava koşulu nedeniyle iş iptal olursa nakliye bedeli ne oluyor?",
                cevap:
                    "Bunu teklifte baştan yazıyoruz çünkü kırsal sahalarda bu ihtimal gerçek. Standart uygulamamız bir ana gün ve bir yedek gün belirlemek; makine sahada kalır, koşul uygun olan gün çalışılır ve bu durumda ek bir nakliye bedeli doğmaz. Sevkiyatın tümüyle ertelenmesi gerekiyorsa — ki bu ikinci bir nakliye demektir — kararı birlikte veriyoruz. Hangi seçeneğin geçerli olduğu, teklifte yazılı olarak yer alıyor; bu netlik kırsal teslimatlarda en sık yaşanan anlaşmazlığı ortadan kaldırıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir'in havacılık-savunma tedarik zinciri kapsamında yüklenici giriş prosedürlerinin varlığı ve Sivrihisar'daki stabilize yol/kırsal ulaşım gerçeği kamuya açık genel bilgidir; kayıt ve teslim tutanağı uygulamaları saha pratiğinden gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Tedarikçi Deposunda Kayıtlı Forklift ve İstifleme Kiralama",
        giris:
            "Havacılık ve savunma tedarik zincirine üretim yapan atölyelerde malzeme hareketi, sıradan bir depo işlemi değildir; her palet, her kutu ve her hammadde partisi bir kayıt zincirinin parçasıdır. Forklift ve istifleme kiralaması bu bağlamda iki ayrı ihtiyacı karşılar: platform işi öncesi malzeme ve iskele hazırlığı, ve tedarikçi deposundaki rutin istifleme-taşıma. İkisinde de belirleyici olan makinenin kaldırma kapasitesinden çok, hangi malzemenin nereden nereye taşındığının izlenebilir olmasıdır — özellikle hassas veya seri numaralı parçaların söz konusu olduğu hacimlerde. Sivrihisar tarafında ise forklift ihtiyacı farklı bir bağlamda ortaya çıkıyor: tarımsal depo ve silo çevresindeki yükleme-boşaltma işleri, düzgün beton yerine toprak veya çakıl zeminde yürütülüyor ve bu, makine seçimini doğrudan değiştiriyor. Bu sayfada tedarikçi deposundaki kayıt disiplinini ve kırsal sahadaki zemin uyumunu birlikte ele alıyoruz.",
        maddeler: [
            {
                baslik: "Platform işi öncesi malzeme ve iskele hazırlığı",
                metin:
                    "Çelik konstrüksiyon veya tesisat işleri öncesinde, malzemenin çalışma noktasına yakın bir yerde istiflenmesi gerekir; bu istifleme genellikle forklift ile yapılır. Tedarikçi hacimlerinde bu hazırlığın kendi kuralı vardır: istif noktası, ana üretim hattının veya test düzeneğinin trafiğini kesmeyecek şekilde belirlenir ve istiflenen malzeme sayımı platform işinin sayım listesinden ayrı tutulur. Forklift operatörü de sahaya giriş için aynı yüklenici onay sürecinden geçer.",
            },
            {
                baslik: "Parça bazlı sayım ve seri takibi",
                metin:
                    "Ana sanayiye parça veren tesislerde, taşınan her palet veya kutu genellikle bir üretim partisine karşılık gelir ve bu partinin hangi rafa, hangi tarihte konduğu izlenebilir olmalıdır. Forklift kiralamasında bizim eklediğimiz katman, taşıma sırasında malzemenin düşürülmemesi ve karışmaması için yükleme-boşaltma noktalarının önceden işaretlenmesidir. Operatörümüz, tesisin kendi malzeme takip sistemine göre yönlendirme alır; bağımsız bir rota izlemez.",
            },
            {
                baslik: "Dar koridor ve raf aralığında kompakt makine",
                metin:
                    "Kent içi ve tedarikçi depolarının bir bölümü dar koridorlu raf sistemleriyle kuruludur; bu hacimlerde standart forklift dönemez. Kompakt gövdeli ve dar koridor tipi istifleme makineleri bu ölçüye göre seçilir. Zemin cilalıysa iz bırakmayan tekerlek tercih edilir, raf yüksekliği belirleyiciyse makinenin kaldırma yüksekliği raf sistemine göre eşleştirilir. Bu ölçüleri teklif öncesi istiyoruz; yanlış ölçülen bir koridor, makinenin sahada işe yaramamasına yol açar.",
            },
            {
                baslik: "Sivrihisar'da toprak zeminde yükleme-boşaltma",
                metin:
                    "Tarımsal depo ve silo çevresinde forklift, çoğunlukla toprak veya çakıl zeminde çalışır ve bu, standart lastikli bir makinenin tutunma ve dengesini doğrudan etkiler. Bu sahalarda geniş tekerlekli, arazi koşullarına uygun modelleri tercih ediyoruz ve yağış sonrası yumuşamış zeminde çalışmayı erteliyoruz. İkinci belirleyici mevsimdir: hasat ve depolama dönemlerinde bu alanlar yoğun trafik altındadır, doğal çalışma penceresi bu dönemlerin dışıdır.",
            },
            {
                baslik: "Kısa süreli iş için nakliye payını bölmek",
                metin:
                    "Forklift ihtiyacı çoğu zaman kısa süreli ve tek seferliktir; bu durumda nakliye bedeli kiralama bedeline göre orantısız büyüyebilir. Aynı hat üzerinde başka bir işimiz varsa sevkiyatı birleştirip payı bölüyoruz. Kısa süreli işlerde ayrıca malzemenin önceden hazır olması önemlidir — makine geldiğinde yükleme-boşaltma listesi netse iş birkaç saatte tamamlanabilir, aksi hâlde kiralama süresi gereksiz uzar.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ortam tipine göre forklift ve istifleme seçimi",
                paragraflar: [
                    "Forklift talebini aldığımızda önce hangi ortamla karşı karşıya olduğumuzu belirliyoruz; aşağıdaki tablo teklif öncesi kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Ortam tipi", "Zemin", "Kayıt/izin gereksinimi", "Makine tercihi"],
                    satirlar: [
                        ["Havacılık tedarikçi deposu", "Beton, cilalı", "Parça sayımı, giriş onayı", "İz bırakmayan, kompakt"],
                        ["Dar koridor raf sistemi", "Beton", "Ölçü onayı", "Dar koridor tipi"],
                        ["Genel sanayi deposu", "Beton", "Basit bildirim", "Standart dizel/akülü"],
                        ["Sivrihisar tarımsal depo", "Toprak/çakıl", "Mevsim penceresi notu", "Geniş tekerlekli arazi tipi"],
                        ["Platform işi hazırlığı", "Beton/toprak", "İş listesi ile eşleşme", "Ortama göre değişken"],
                    ],
                },
            },
            {
                baslik: "Malzeme sayımını platform işinden ayırmak",
                paragraflar: [
                    "Aynı işte hem forklift hem platform kullanıldığında, iki makinenin sayım kaydını birbirine karıştırmamak önemlidir. Forklift ile taşınan malzeme (paletler, profiller, sarf malzemesi) ayrı bir listede, platform sepetine çıkan el aletleri ayrı bir listede tutulur. Bu ayrım, iş sonunda hangi kaydın hangi makineye ait olduğunu netleştirir ve tesisin denetiminde karışıklık yaşanmasını önler.",
                    "Uygulamada bu iki listeyi tek bir iş dosyasında birleştiriyoruz, ancak her biri kendi makinesine referans veriyor. Tesisin kendi malzeme takip formatı varsa bizim listemizi o formata göre düzenliyoruz; ayrı bir paralel sistem dayatmıyoruz.",
                ],
            },
            {
                baslik: "Kısa süreli kiralamada hazırlığın maliyete etkisi",
                paragraflar: [
                    "Forklift kiralamalarının büyük bölümü yarım günü aşmayan işlerdir ve bu sürede nakliye zamanı kullanım zamanından uzun olabilir. Bu nedenle sizden makine gelmeden önce şu bilgileri istiyoruz: taşınacak malzemenin miktarı ve ağırlığı, yükleme-boşaltma noktalarının konumu, zemin cinsi ve varsa rampa/eşik durumu. Bu bilgiler netse operatör sahaya adım attığı andan itibaren çalışmaya başlar.",
                    "Sivrihisar'daki tarımsal sahalarda bu hazırlığa bir madde daha ekleniyor: mevsim penceresi. Depolama yapıları dolu olduğu dönemde manevra alanı daralır; doğal çalışma penceresi dolum öncesi ve boşalma sonrasıdır. Talebi bu pencerelere göre planlayan işletmeler hem daha rahat çalışıyor hem daha kısa sürede iş bitiriyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Forklift operatörünüz de tedarikçi giriş onayından mı geçiyor?",
                cevap:
                    "Evet, forklift kiralamasında operatör de platform işlerindeki aynı yüklenici giriş sürecine tabidir. Sahaya girecek kişinin bilgileri sevkiyattan önce bildirilir, gerekiyorsa geçici kart düzenlenir ve refakat uygulanır. Malzemenin hangi rafa, hangi partiye ait olduğunu bilmesi gereken hacimlerde operatörümüz tesisin kendi malzeme takip sistemine göre yönlendirme alır, bağımsız bir rota izlemez. Bu, hem güvenlik hem izlenebilirlik açısından tesisin kendi denetim gerekliliklerine uygun düşüyor.",
            },
            {
                soru: "Platform işi ile forklift işini aynı anda mı planlıyorsunuz?",
                cevap:
                    "Genellikle evet, özellikle çelik konstrüksiyon veya tesisat işlerinde. Forklift önce malzemeyi çalışma noktasına yakın bir yere istifler, ardından platform işi başlar. İki makinenin sayım kaydını ayrı tutuyoruz — forklift ile taşınan malzeme ayrı bir listede, platform sepetine çıkan aletler ayrı bir listede — böylece iş sonunda hangi kaydın hangi makineye ait olduğu net kalıyor. Bu ayrım, tesisin denetiminde karışıklık yaşanmasını önlüyor.",
            },
            {
                soru: "Dar koridorlu raf sistemimize forklift girebilir mi?",
                cevap:
                    "Büyük olasılıkla girer, ama bunu doğrulamak için koridor genişliği ve raf yüksekliği ölçüsü gerekiyor. Standart forklift dönemeyen bu tip hacimler için dar koridor tipi kompakt istifleme makineleri kullanıyoruz; zemin cilalıysa iz bırakmayan tekerlek, raf yüksekliği belirleyiciyse buna uygun kaldırma yüksekliği seçiyoruz. Bu ölçüleri teklif öncesi istiyoruz çünkü yanlış ölçülen bir koridor, makinenin sahada işe yaramamasına yol açıyor — bu ikimizin de zamanını boşa harcıyor.",
            },
            {
                soru: "Sivrihisar'daki silo sahamızda toprak zemin var; forklift çalışabilir mi?",
                cevap:
                    "Çalışabilir, ancak standart lastikli bir makine yerine geniş tekerlekli, arazi koşullarına uygun bir model kullanıyoruz. Toprak veya çakıl zeminde standart lastik tutunma sorunu yaşayabilir ve yük dengesini bozabilir. Yağış sonrası yumuşamış zeminde çalışmayı erteliyoruz, çünkü bu durumda risk artıyor. İkinci belirleyici mevsimdir: depolama yapıları dolu olduğu dönemde manevra alanı daralıyor, bu yüzden dolum öncesi veya boşalma sonrası dönemi öneriyoruz.",
            },
            {
                soru: "Kısa süreli bir iş için forklift kiralamak ekonomik mi?",
                cevap:
                    "Malzeme ve saha bilgisini önceden hazırlarsanız evet. Kısa süreli işlerde nakliye zamanı kullanım zamanından uzun olabildiği için, makine gelmeden önce taşınacak malzemenin miktarı, yükleme-boşaltma noktaları ve zemin durumu netleşmiş olmalı. Aynı hat üzerinde başka bir işimiz varsa sevkiyatı birleştirip nakliye payını bölüyoruz. Bu iki adım uygulandığında kısa süreli forklift kiralaması, ayrı bir kalıcı ekipman yatırımından çok daha ekonomik kalıyor.",
            },
            {
                soru: "Taşınan malzemenin kaydı bize nasıl teslim ediliyor?",
                cevap:
                    "İş sonunda imzalı bir teslim formu veriyoruz; formda taşınan malzemenin miktarı, yükleme-boşaltma saatleri ve varsa görünür hasar kaydı yer alıyor. Tesisin kendi malzeme takip formatı varsa bizim kaydımızı o formata göre düzenliyoruz, ayrı bir paralel sistem dayatmıyoruz. Fotoğraf kısıtı olan hacimlerde bu form tek kayıt aracı olarak kullanılıyor; kısıt yoksa fotoğrafla destekliyoruz. Bu belge, hem sizin denetim kayıtlarınıza eklenebiliyor hem de bizim açımızdan işin doğru tamamlandığını gösteriyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir'in havacılık-savunma tedarik zincirinde malzeme izlenebilirliği pratiği ve Sivrihisar'daki tarımsal depo/silo yapılarının zemin karakteri kamuya açık genel bilgi ve saha pratiğine dayanır. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Hangar ve Tedarikçi Hollerinde Eklemli Platform (Boom) Kiralama",
        giris:
            "Eklemli (boom) platformlar, hedefin altına park edilemeyen hacimlerde tercih edilen makine sınıfıdır ve Eskişehir'in iki farklı saha profilinde de bu özellik öne çıkar. Tedarikçi hollerinde hedefin altı çoğunlukla test düzeneği, tezgâh veya raf sistemiyle doludur; havacılık merkezi çevresindeki hangarlarda ise altı uçak, planör veya depolanmış malzeme kaplıdır. İki durumda da makine hedefin dibine giremez, bomunu engelin üzerinden aşırarak sepeti hedefin hizasına getirmesi gerekir. Ancak bu iki saha aynı makineyi istemez: tedarikçi hollerinde akülü, iz bırakmayan ve temizlik sınıfına uygun kompakt bir eklemli makine aranırken, Sivrihisar hangarlarında zemin toprak veya parçalı beton olduğu için arazi tipi, geniş tekerlekli bir eklemli makine gerekir. Bu sayfada erişim eğrisinin nasıl okunduğunu ve iki farklı zemine göre makine seçiminin nasıl değiştiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Erişim eğrisi: yükseklik ve yatay uzanma birlikte okunur",
                metin:
                    "Bom tipi makinelerde maksimum yükseklik ile maksimum yatay uzanma aynı anda kullanılamaz; biri arttıkça diğeri düşer. Bu yüzden doğru sınıfı belirlemek için tek bir yükseklik rakamı yeterli değildir, iki ölçü gerekir: hedefin zeminden kotu ve makinenin durabileceği zeminden hedefe kadarki yatay açıklık. Tedarikçi hollerinde hedefin altı dolu olduğu için bu ikinci ölçü neredeyse her zaman belirleyici olur; kararı katalog satırından değil, üreticinin erişim diyagramından okuyoruz.",
            },
            {
                baslik: "Temizlik sınıfı hacimde akülü eklemli makine",
                metin:
                    "Kaplama, montaj ve test hacimlerinin bir bölümünde ortam temizliği ölçülür ve içten yanmalı hiçbir makine bu hacimlere alınamaz. Bu ortamlarda akülü tahrikli, iz bırakmayan lastikli ve dış gövdesi temizlenebilir eklemli makineleri tercih ediyoruz. Girişten önce tekerlekler ve şasi altı silinir, hidrolik bağlantılar damlama açısından kontrol edilir. Bu hazırlık, tedarikçi hollerinde standart uyguladığımız bir prosedür.",
            },
            {
                baslik: "Vinç bulunan hacimlerde dikey çakışma kuralı",
                metin:
                    "Yeni kuşak sanayi hollerinde gezer köprülü vinç bulunuyorsa, sepet ile vinç kancasının aynı düşeyde bulunması hiçbir koşulda kabul edilmez. Çalışılan açıklık, vincin hareket sahasından mekanik olarak çıkarılır ve iş kapanmadan bu sınır kaldırılmaz. Bu düzeni teslimat öncesi saha turunda tesisin koordinatörüyle birlikte kuruyor ve iş izni formuna yazıyoruz.",
            },
            {
                baslik: "Sivrihisar hangarlarında arazi tipi eklemli tercih",
                metin:
                    "Hangar ve büyük açıklıklı tarımsal yapılarda zemin çoğunlukla toprak veya parçalı betondur; bu zeminlerde bom açıldığında yük tek noktada yoğunlaşır ve standart lastikli bir makine devrilme riski taşır. Bu yüzden burada arazi tipi, geniş tekerlekli eklemli makineleri tercih ediyoruz ve gerekli görülen noktalarda zemin plakası kullanıyoruz. İkinci belirleyici rüzgârdır — açık alana yakın hangarlarda rüzgâr sınırı aşıldığında sepet yükseltilemez.",
            },
            {
                baslik: "İş kapsamının hedef bölgeyle sınırlı tutulması",
                metin:
                    "Eklemli platform işi açıldığında hedef bölge, erişilecek noktalar ve makinenin izleyeceği güzergâh önceden yazılır. Sahada yeni bir kalem fark edilirse, kısa sürmesi bile mevcut iznin kapsamını genişletmez; yeni hedef için risk ve geometri yeniden değerlendirilir. Bu disiplin, özellikle tedarikçi hollerinde denetlenebilir bir kayıt tutmanın ön koşuludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hacim tipine göre eklemli platform sınıfı",
                paragraflar: [
                    "Eklemli platform talebini aldığımızda önce hedefin altındaki durumu ve zemini soruyoruz; aşağıdaki tablo bu sınıflandırmayı özetler.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Hedef altı durumu", "Zemin", "Makine sınıfı"],
                    satirlar: [
                        ["Tedarikçi holü (test/kaplama)", "Tezgâh, düzenek doldurmuş", "Beton, temizlik sınıflı", "Akülü kompakt eklemli"],
                        ["Genel sanayi holü", "Kısmen dolu", "Beton", "Akülü orta boy eklemli"],
                        ["Sivrihisar hangarı", "Uçak/araç/malzeme dolu", "Toprak/parçalı beton", "Arazi tipi eklemli"],
                        ["Tarımsal büyük açıklık", "Depo malzemesi dolu", "Toprak", "Arazi tipi, zemin plakalı"],
                        ["Kurumsal yüksek hol", "Kısmen dolu", "Beton", "Akülü, iz bırakmayan"],
                    ],
                },
            },
            {
                baslik: "Erişim eğrisini önceden çıkarmak",
                paragraflar: [
                    "Eklemli platform seçiminde en sık yapılan hata, yalnızca yükseklik üzerinden karar vermektir. Bunun yerine sizden iki ölçü istiyoruz: hedefin zeminden kotu ve makinenin durabileceği en yakın noktadan hedefe kadarki yatay açıklık. Bu iki değeri üreticinin erişim diyagramına yerleştirdiğimizde, hangi makinenin hedefe ulaşıp ulaşamayacağını kesin olarak görebiliyoruz.",
                    "Bir bom, en yüksek kotuna ancak uzanmasını kısarak çıkar; ikisi birlikte maksimumda kullanılamaz. Bu ayrıntı özellikle tedarikçi hollerinde önemlidir çünkü hedefin altı dolu olduğu için makine hedefe yakın park edemez ve yatay açıklık büyür — bu da erişilebilir maksimum yüksekliği katalog değerinden daha düşük bir noktaya çeker.",
                ],
            },
            {
                baslik: "İki farklı zemin, iki farklı hazırlık",
                paragraflar: [
                    "Tedarikçi hollerindeki eklemli makine ile Sivrihisar hangarlarındaki eklemli makine, aynı iş sınıfını yapsa da farklı hazırlanır. Birincisi akülü, sessiz ve temizlenmiş gövdeyle gelir; girişten önce tekerlek ve şasi altı silinir. İkincisi arazi tipi lastikli ve geniş taban ayaklıdır; girmeden önce zemin durumu ve varsa son yağış kontrol edilir, gerekiyorsa zemin plakası hazırlanır.",
                    "Bu yüzden aynı hafta içinde hem merkezde hem Sivrihisar'da eklemli platform ihtiyacınız varsa tek makineyle çözmeyi önermiyoruz; sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi iki noktaya bırakıyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eklemli platform seçiminde neden tek bir yükseklik rakamı yeterli olmuyor?",
                cevap:
                    "Çünkü bom tipi makinelerde maksimum yükseklik ile maksimum yatay uzanma aynı anda kullanılamaz — biri arttıkça diğeri düşer. Hedefin altına park edilebiliyorsa yatay uzanma küçük kalır ve yükseklik sınırı belirleyici olur; ama tedarikçi hollerinde veya hangarda hedefin altı doluysa makine uzaktan park eder ve yatay açıklık büyür, bu da erişilebilir maksimum yüksekliği düşürür. Bu yüzden sizden hedefin kotunu ve yatay açıklığı birlikte istiyor, seçimi üreticinin erişim diyagramından yapıyoruz.",
            },
            {
                soru: "Temizlik sınıfı olan bir hacme eklemli platform sokulabilir mi?",
                cevap:
                    "Sokulabilir; bu hacimler için akülü, iz bırakmayan lastikli ve dış gövdesi temizlenebilir eklemli makineler ayırıyoruz. İçten yanmalı makine hiçbir koşulda söz konusu edilmez. Girişten önce tekerlekler ve şasi altı silinir, hidrolik hortum bağlantıları damlama açısından gözle doğrulanır. Toz kaldıracak bir işlem varsa nokta emişli toz toplama ile ilerlenir. Bu hazırlık, tedarikçi hollerinde standart olarak uyguladığımız bir prosedürdür ve talep beklemeden yapılır.",
            },
            {
                soru: "Hangarımızda vinç var; eklemli platform aynı hacimde çalışabilir mi?",
                cevap:
                    "Çalışabilir, ancak sepet ile vincin kancası aynı düşeyde bulunamaz — bu kural pazarlığa açık değildir. Çalışılan açıklık vincin hareket sahasından mekanik olarak çıkarılır ve iş bitene kadar bu sınır kaldırılmaz. Bu düzeni teslimat öncesi saha turunda kuruyor ve iş izni formuna yazıyoruz. Vincin hareket sahası geniş bir hangarda, doğru planlandığında vinç ile eklemli platform aynı hacimde sorunsuz çalışabiliyor.",
            },
            {
                soru: "Sivrihisar'daki hangarımızın zemini toprak; eklemli platform devrilir mi?",
                cevap:
                    "Önlem alınmazsa risk gerçek. Toprak veya parçalı beton zeminde bom açıldığında yük tek noktada yoğunlaşır; standart lastikli bir makinede bu durum devrilme riski yaratır. Biz bu sahalar için arazi tipi, geniş tekerlekli eklemli makineleri tercih ediyoruz ve gerekli görülen noktalarda zemin plakası kullanıyoruz. Yağış sonrası yumuşamış zeminde çalışmayı erteliyoruz — plaka bile bazen yeterli olmuyor. Keşifte zeminin cinsini ve son yağış durumunu soruyoruz.",
            },
            {
                soru: "Sahada iş sırasında yeni bir nokta fark edersek, aynı izinle çalışılabilir mi?",
                cevap:
                    "Çalışılmaz; bu bilinçli bir kural. Eklemli platform işi açıldığında hedef bölge ve erişilecek noktalar önceden yazılır. Sahada yeni bir kalem fark edilirse, ne kadar kısa sürerse sürsün mevcut iznin kapsamını genişletmiyoruz — yeni hedef için risk ve geometri yeniden değerlendirilir. Bu, özellikle tedarikçi hollerinde denetlenebilir bir kayıt tutmanın ön koşulu; bir işin sınırsız genişlemesi, hem güvenlik hem izlenebilirlik açısından kabul edilebilir değil.",
            },
            {
                soru: "Aynı hafta hem tedarikçi holünde hem hangarda eklemli platform ihtiyacımız var; tek makineyle çözülür mü?",
                cevap:
                    "Genellikle çözülmez. Tedarikçi holündeki makine akülü, sessiz ve temizlenmiş gövdeyle gelir; hangardaki makine ise arazi tipi lastikli ve geniş taban ayaklıdır. Birini diğerinin yerine kullanmak sahada risk yaratır — akülü makine toprak zeminde ilerleyemeyebilir, arazi tipi makine ise temizlik sınıflı hacme alınmaz. Bu yüzden sevkiyatı aynı güzergâha toplayıp iki ayrı makineyi iki noktaya bırakıyoruz; nakliye payı bölünüyor, her makine kendi zeminine uygun kalıyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformların erişim eğrisi ilişkisi (yükseklik/yatay uzanma dengesi) üretici teknik belgelerinden gelir; Eskişehir'in tedarikçi holü ve Sivrihisar hangar/tarımsal yapı profili kamuya açık genel bilgidir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Temizlik Sınıflı Hacimlerde İç Mekân ve Depo İçi Platform Kiralama",
        giris:
            "Eskişehir'in havacılık ve savunma tedarik zincirinde bazı iç mekânlar sadece kapalı alan değildir; ortam temizliği ölçülen, dışarıdan giren her ekipmanın bu ölçüme etki ettiği kontrollü hacimlerdir. İç mekân ve depo içi platform kiralamasını bu şehirde diğer illerdekinden ayıran şey, makinenin fiziksel ölçüsünden çok, hacme girme koşuludur — akülü tahrik, iz bırakmayan lastik ve temizlenebilir gövde burada tercih değil, kapıdan girmenin ön koşuludur. Bu kural yalnızca havacılık zincirindeki tesislerle sınırlı değil; ilin kurumsal ve kamu binalarındaki depo, arşiv ve teknik hacimlerinde de benzer bir temizlik ve sessizlik beklentisi var. Bu sayfada iç mekân platform kiralamasını bu iki gerekçeyle — ölçülen ortam temizliği ve kurumsal binaların iz bırakmama beklentisi — ele alıyoruz.",
        maddeler: [
            {
                baslik: "Ortam temizliği ölçülen hacimde makine hazırlığı",
                metin:
                    "Kaplama, montaj ve test hacimlerinin bir bölümünde ortam temizliği periyodik olarak ölçülür ve bu ölçüme giren her ekipman kaydedilir. Bu hacimlere giren makine akülü ve iz bırakmayan lastikli olmak zorundadır; içten yanmalı hiçbir makine söz konusu edilemez. Girişten önce tekerlekler ve şasi altı silinir, gerekirse geçici tekerlek örtüsü kullanılır, hidrolik hortum bağlantıları damlama açısından gözle doğrulanır. Bu üç adım, temizlik sınıflı bir hacme girişin standart ön koşuludur.",
            },
            {
                baslik: "Depo içinde raf ve tavan hattı ayrımı",
                metin:
                    "İç mekân depo işlerinde iki farklı erişim ihtiyacı karışabilir: raf üstü malzemeye ulaşmak ile tavan hattındaki tesisat veya aydınlatmaya ulaşmak. Bunlar farklı makine sınıfı gerektirir — raf üstü erişim çoğunlukla dar koridor tipi bir makineyle, tavan hattı işleri ise makaslı veya kompakt eklemli bir platformla yapılır. İki işi karıştırıp tek makineyle çözmeye çalışmak, sahada ya raf aralığına sığmayan ya da tavana yetişmeyen bir makineyle karşılaşmak anlamına gelir.",
            },
            {
                baslik: "Toz kaldıran işlemde nokta emişli toz toplama",
                metin:
                    "Depo içi bakım işlerinin bir kısmı — delme, zımparalama, kablo kanalı açma — toz kaldırır ve bu, temizlik sınıflı bir hacimde kabul edilemez bir risktir. Bu işlemlerde nokta emişli toz toplama sistemiyle ilerliyor, çalışma noktasının altına örtü seriyoruz. İş bittiğinde alan süpürülür ve gözle kontrol edilerek teslim edilir; küçük bir toz birikintisi bile denetimde bulgu konusu olabileceği için bu adımı atlamıyoruz.",
            },
            {
                baslik: "Kurumsal arşiv ve teknik depoda cilalı zemin koruması",
                metin:
                    "Kamu ve kurumsal binaların arşiv, depo veya teknik hacimlerinde zemin genellikle cilalı veya özel kaplamalıdır ve iz bırakmamak bir beklentidir. Makine binaya alınmadan tekerlekler silinir, gerekli görülen güzergâhta koruma örtüsü serilir. Bu hacimlerde çalışma genellikle mesai dışı saatlere alınır ve iş bittiğinde alan süpürülmüş hâlde teslim edilir.",
            },
            {
                baslik: "Alet ve sarf sayımı: depo içi işin standart parçası",
                metin:
                    "İç mekân ve depo içi işlerde sepete çıkan her el aleti ve sarf malzemesi listelenir, iş sonunda aynı liste tekrar sayılır. Bu, özellikle hassas malzeme veya seri numaralı parça bulunan depolarda kritik bir adımdır — düşen bir vida veya unutulan bir alet, depo içindeki bir malzemenin yanlış sınıflandırılmasına yol açabilir. Sayım tutmadan alan terk edilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hacim tipine göre iç mekân platform sınıfı",
                paragraflar: [
                    "İç mekân talebini aldığımızda önce hacmin temizlik ve erişim gereksinimini belirliyoruz; aşağıdaki tablo bu sınıflandırmayı özetler.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Temizlik gereksinimi", "Erişim ihtiyacı", "Makine tercihi"],
                    satirlar: [
                        ["Kaplama/test hacmi", "Ölçülen ortam temizliği", "Tavan hattı", "Akülü makaslı, temiz gövde"],
                        ["Tedarikçi deposu (raf sistemi)", "Standart", "Raf üstü erişim", "Dar koridor tipi"],
                        ["Kurumsal arşiv/teknik depo", "İz bırakmama", "Tavan/raf karışık", "Kompakt akülü"],
                        ["Genel sanayi deposu", "Standart", "Tavan hattı", "Akülü makaslı"],
                        ["Fabrika içi tesisat hattı", "Toz kısıtı", "Kanal/boru hattı", "Kompakt eklemli"],
                    ],
                },
            },
            {
                baslik: "Raf yüksekliği ve tavan kotunu ayrı ayrı ölçmek",
                paragraflar: [
                    "Depo içi işlerde en sık karışan iki ölçü raf yüksekliği ile tavan kotudur. Raf üstü erişimde belirleyici olan rafın en üst noktası ve koridor genişliğidir; tavan hattı işlerinde ise tavan altındaki tesisatın veya aydınlatmanın kotu ile makinenin park edeceği noktadan hedefe kadarki yatay açıklık belirleyicidir. İkisini karıştırmamak için sevkiyat öncesi hangi işin yapılacağını netleştiriyoruz — aynı depoda iki farklı iş varsa iki farklı makine gerekebiliyor.",
                    "Bu ayrımı atlayan bir talep genellikle sahada makinenin yetersiz kalmasıyla sonuçlanıyor: dar koridor tipi bir makine tavana yetişemiyor, kompakt eklemli bir makine ise raf aralığına giremiyor. Bu yüzden teklif öncesi iki bilgiyi ayrı ayrı istiyoruz.",
                ],
            },
            {
                baslik: "Mesai dışı çalışma ve kapanış kaydı",
                paragraflar: [
                    "Kurumsal ve tedarikçi depolarının çoğunda iç mekân işi kullanım sürerken yapılmaz; çalışma penceresi mesai dışı saatler veya hafta sonudur. Bu, planlamayı doğrudan etkiliyor — makine teslimatı ve iş başlangıcı, hacmin boşaldığı saate göre kurgulanır. Akülü makineler sessiz çalıştığı için mesai saatleri içinde bile rahatsızlık düzeyi düşük kalıyor, ancak biz yine de tercih sırasını mesai dışına veriyoruz.",
                    "İş bittiğinde kapanış kaydı iki parçadan oluşur: alan temizliği ve teslim tutanağı. Alan süpürülür, örtüler toplanır, gözle kontrol edilir; teslim tutanağında iş saatleri, alet-sarf sayımı ve varsa görünür hasar kaydı yer alır. Bu belge, denetimlerde depo içindeki dış firma faaliyetinin kanıtı olarak kullanılabiliyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ortam temizliği ölçülen bir depoya makine sokulabilir mi?",
                cevap:
                    "Sokulabilir; bu hacimler için akülü ve iz bırakmayan lastikli makineleri ayırıyoruz. İçten yanmalı makine hiçbir koşulda söz konusu edilmez. Girişten önce tekerlekler ve şasi altı silinir, talep edilirse geçici tekerlek örtüsü kullanılır, hidrolik hortum bağlantıları damlama açısından gözle doğrulanır. Toz kaldıracak bir işlem varsa nokta emişli toz toplama ile ilerlenir ve altına örtü serilir. Sizden istediğimiz, makinenin izleyeceği güzergâhın önceden belirlenmesi ve temizlik sınıfı olan bölüme giriş noktasının gösterilmesidir.",
            },
            {
                soru: "Raf üstü malzemeye mi yoksa tavan hattına mı erişeceğimize göre makine değişiyor mu?",
                cevap:
                    "Evet, ikisi farklı makine sınıfı gerektiriyor. Raf üstü erişim çoğunlukla dar koridor tipi bir makineyle yapılır ve belirleyici olan rafın en üst noktası ile koridor genişliğidir. Tavan hattı işlerinde ise makaslı veya kompakt eklemli bir platform kullanılır ve belirleyici olan tavan altındaki tesisatın kotu ile yatay açıklıktır. Aynı depoda iki farklı iş varsa iki farklı makine gerekebiliyor; bu yüzden teklif öncesi hangi işin yapılacağını netleştiriyoruz.",
            },
            {
                soru: "Delme veya zımparalama gibi toz kaldıran işler yapılacak; nasıl önlem alıyorsunuz?",
                cevap:
                    "Nokta emişli toz toplama sistemiyle ilerliyoruz ve çalışma noktasının altına örtü seriyoruz. Bu, temizlik sınıflı hacimlerde kabul edilemez bir risk olan tozun yayılmasını engelliyor. İş bittiğinde alan süpürülür ve gözle kontrol edilerek teslim edilir; küçük bir toz birikintisi bile denetimde bulgu konusu olabileceği için bu adımı atlamıyoruz. Toz kaldıran işlemin türünü ve süresini önceden bilirsek, doğru toz toplama ekipmanını da birlikte planlayabiliyoruz.",
            },
            {
                soru: "Arşiv veya teknik depomuzun zemini cilalı; iz bırakmadan çalışabilir misiniz?",
                cevap:
                    "Çalışabiliriz; bu hacimler için standart hazırlığımız makineyi içeri almadan tekerlekleri silmek ve gerekli görülen güzergâhta koruma örtüsü sermektir. Çalışma genellikle mesai dışı saatlere alınır ve iş bittiğinde alan süpürülmüş hâlde teslim edilir. Akülü makineler sessiz çalıştığı için mesai saatleri içinde bile çevredeki hacimlerde rahatsızlık yaratmıyor, ancak biz yine de tercih sırasını mesai dışına veriyoruz çünkü hem güvenlik hem hız açısından en iyi seçenek bu.",
            },
            {
                soru: "Depo içindeki hassas malzemenin yanına makine sokmak riskli mi?",
                cevap:
                    "Önlem alınmazsa risklidir, biz üç katmanlı bir düzenle yönetiyoruz. Birinci katman sayımdır: sepete çıkan her el aleti ve sarf malzemesi listelenir, iş sonunda aynı liste tekrar sayılır. İkinci katman bağlamadır — aletler emniyet bağıyla bağlanır, küçük parçalar kapalı kutuda tutulur. Üçüncü katman fiziksel korumadır: çalışma noktasının altına örtü serilir, mümkünse hassas malzeme geçici olarak kapatılır. Bu düzenin maliyeti birkaç dakikalık hazırlık; karşılığında depo içindeki bir malzemenin hasar görme veya yanlış sınıflandırılma riski ortadan kalkıyor.",
            },
            {
                soru: "İş sonunda hangi kaydı bize teslim ediyorsunuz?",
                cevap:
                    "Standart teslim tutanağı iş saatlerini, alet-sarf sayımı sonucunu ve varsa görünür hasar kaydını içerir. Fotoğraf kısıtı olmayan hacimlerde bunu görsellerle destekliyoruz; kısıt varsa yalnızca yazılı tutanak kullanılıyor. Tesisin kendi ekipman giriş formu veya denetim şablonu varsa bizim kaydımızı o formata göre düzenliyoruz. Bu belge, depo içindeki dış firma faaliyetinin denetimlerde kanıtı olarak kullanılabiliyor ve sizin kalite kayıtlarınıza doğrudan eklenebiliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ortam temizliği ölçülen üretim/test hacimlerinin varlığı ve kurumsal binalardaki arşiv/teknik depo pratiği kamuya açık genel bilgi ve sektör pratiğine dayanır; akülü/iz bırakmayan makine tercihi ve alet sayımı disiplini saha uygulamasından gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Yeni Hol ve Hangar Montajında Çelik Konstrüksiyon Platformu",
        giris:
            "Eskişehir'in sanayi büyümesinin yeni kuşağı, OSB'lerdeki genişleyen tesislerde ve Sivrihisar çevresindeki enerji-havacılık yapılarında somutlaşıyor; her ikisinde de çelik konstrüksiyon montaj işleri, platform kiralamasının uzun süreli ve çok evreli bir biçimini gerektiriyor. Yeni bir hol veya hangar kurulurken platform ihtiyacı tek seferlik değildir — konstrüksiyon, mekanik montaj, elektrik tesisatı ve havalandırma işleri aynı hacimde üst üste yürür ve bu, hem makine paylaşımını hem sözleşme kurgusunu değiştirir. Tedarikçi tesislerinde bu döneme bir de kayıt yükü eklenir: hangi ekibin ne zaman yukarıda olduğu, hangi ekipmanın sahaya girip çıktığı denetlenebilir olmalıdır. Bu sayfada montaj döneminin iki evresini — yoğun konstrüksiyon dalgası ve sonrasındaki ince ayar dönemi — ve bu evrelerde platform kiralamasının nasıl kurgulandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj döneminin iki dalgası",
                metin:
                    "Yeni bir hacim kuran tesiste platform ihtiyacı iki dalga hâlinde gelir. Birinci dalga yoğundur ve haftalarca sürer: konstrüksiyon, mekanik montaj, elektrik tesisatı ve havalandırma işleri aynı hacimde üst üste yürür. İkinci dalga üretim başladıktan sonra gelir ve aylara yayılır — ince ayar, ilave bağlantı, eksik kalan noktaların tamamlanması. Bu iki dalgayı tek bir plan içinde kurgulamak, birim maliyeti düşürüyor ve ikinci dalgada yeniden makine arayışını ortadan kaldırıyor.",
            },
            {
                baslik: "Aynı hacimde birden çok yüklenici: saat/bölge paylaşımı",
                metin:
                    "Yeni kurulan bir hacimde mekanik, elektrik, otomasyon ve havalandırma ekipleri çoğunlukla aynı anda çalışır ve hepsi yukarı çıkmak ister. Birinin altında diğerinin bulunması yasak olduğu için hacmin saat ya da bölge esasına göre paylaşılması gerekir. Tesisin saha koordinatörüyle birlikte günlük bir yükseklik planı çıkarıyoruz — hangi ekip hangi saatte hangi açıklıkta çalışacak. Bu plan olmadan montaj döneminde çakışma kaçınılmaz oluyor.",
            },
            {
                baslik: "Gezer vinç ile aynı hacimde çalışma",
                metin:
                    "Montaj döneminde çoğu yeni holde gezer köprülü vinç aynı anda kullanılır. Sepet ile vincin kancası aynı düşeyde bulunamaz; çalışılan açıklık vincin hareket sahasından mekanik olarak çıkarılır ve iş kapanmadan bu sınır kaldırılmaz. Bu düzeni teslimat öncesi saha turunda kuruyor ve iş izni formuna yazıyoruz. Açıklıklar geniş olduğunda, doğru planlandığında vinç ile platform sorunsuz birlikte çalışabiliyor.",
            },
            {
                baslik: "Uzun süreli kiralamada sözleşme kurgusu",
                metin:
                    "Haftalarca süren bir montaj döneminde platform ihtiyacı, günlük kiralamadan farklı bir sözleşme dili gerektirir. Baştan netleştirdiğimiz başlıklar şunlar: periyodik bakımın kim tarafından ve hangi aralıkla yapılacağı, arıza durumunda müdahale süresi ve ikame makine taahhüdü, gece park ve şarj noktası, kullanım sayacı üzerinden dönemsel raporlama. Bu kalemler yazılı olmadığında haftalar süren bir montaj döneminde mutlaka bir noktada tartışma çıkıyor.",
            },
            {
                baslik: "Sivrihisar'da hangar/enerji sahası konstrüksiyon işleri",
                metin:
                    "Enerji sahalarındaki işletme binaları, şalt yapıları ve hangar tipi depoların konstrüksiyon işlerinde zemin genellikle toprak veya çakıldır ve saha rüzgâra açıktır. Bu iki koşul, arazi tipi makine seçimini ve gün planının rüzgâr sınırına bağlı esnekliğini gerektiriyor. Şalt sahası çevresinde çalışılıyorsa ayrıca enerjili ekipmana güvenli yaklaşma mesafesi ve gerektiğinde enerji kesme-kilitleme prosedürü devreye girer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj evresine göre platform planı",
                paragraflar: [
                    "Yeni bir hacmin montaj sürecini evrelere ayırıp her evrede hangi platform düzeninin uygulandığını aşağıdaki tabloda özetliyoruz.",
                ],
                tablo: {
                    basliklar: ["Evre", "Tipik süre", "Paylaşım ihtiyacı", "Sözleşme kurgusu"],
                    satirlar: [
                        ["Konstrüksiyon (birinci dalga)", "Haftalar", "Yüksek — çok yüklenici", "Uzun süreli, sayaç raporlu"],
                        ["Mekanik/elektrik montaj", "Haftalar", "Orta — bölge paylaşımlı", "Uzun süreli, vardiyalı"],
                        ["İnce ayar (ikinci dalga)", "Aylara yayılı", "Düşük", "Çağrı bazlı"],
                        ["Sivrihisar konstrüksiyon", "Haftalar", "Düşük — tek yüklenici", "Kısa/orta süreli, arazi tipi"],
                        ["Devreye alma sonrası bakım", "Değişken", "Düşük", "Çağrı bazlı"],
                    ],
                },
            },
            {
                baslik: "İki dalgayı tek teklifte birleştirmek",
                paragraflar: [
                    "Montaj ve devreye alma dönemini ayrı ayrı fiyatlamak yerine tek bir plan içinde kurguluyoruz. Birinci dalga için makine uzun süreli kiralanır ve sahada kalır; ikinci dalga için çağrı bazlı bir düzen kurulur, makine ihtiyaç oldukça kısa sürelerle gelir. İki dönemin koşulları tek teklifte yazılır — bu, ikinci dalgada yeniden süreç işletmenizi gerektirmiyor.",
                    "Aynı hacimde çalışan farklı yükleniciler varsa makinenin kullanım saatleri arasında paylaşımını da bu plana ekliyoruz; bu, montaj döneminde en sık yaşanan çakışma nedenini ortadan kaldırıyor.",
                ],
            },
            {
                baslik: "Kayıt yükü olan tesislerde montaj döneminin belgelenmesi",
                paragraflar: [
                    "Tedarikçi hollerinde montaj döneminin kendi kaydı olur; hangi ekipmanın hangi tarihte hacimde bulunduğu, denetimde sorulan sorulardan biridir. Uzun süreli kiralamada bunu dönemsel raporlama ile karşılıyoruz: kullanım sayacı düzenli aralıklarla okunur, periyodik kontrol tarihleri takip edilir ve her rapor tesise iletilir.",
                    "Sivrihisar'daki enerji sahası veya hangar konstrüksiyonlarında ise kayıt yükü daha hafiftir, ancak İSG tarafında enerji kesme-kilitleme ve güvenli yaklaşma mesafesi gibi kurallar tavizsiz uygulanır. Bu farkı bilerek iki farklı hazırlık listesi işletiyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montaj dönemimiz birkaç hafta sürecek; nasıl fiyatlanıyor?",
                cevap:
                    "Uzun süreli kullanımda günlük birim bedel belirgin düşer, ama asıl fark sözleşme kurgusundadır. Baştan netleştirdiğimiz başlıklar şunlar: periyodik bakımın kim tarafından ve hangi aralıkla yapılacağı, arıza durumunda müdahale süresi ve ikame makine taahhüdü, gece park ve şarj noktası, kullanım sayacı üzerinden dönemsel raporlama. Ayrıca montaj bittikten sonraki ince ayar dönemini de aynı teklife çağrı bazlı bir düzen olarak ekliyoruz; böylece ikinci dalgada yeniden süreç işletmiyorsunuz.",
            },
            {
                soru: "Aynı hacimde birkaç yüklenici çalışıyor; platform paylaşılabilir mi?",
                cevap:
                    "Paylaşılabilir ve bunu sık kurguluyoruz, ancak iki kural konur. Birincisi kullanım planıdır: makinenin hangi ekip tarafından hangi saatte kullanılacağı gün başında yazılır, kullanan her ekipten belgeli bir operatör bulunur. İkincisi dikey çakışma yasağıdır — bir ekip yukarıdayken altında başka bir ekibin çalışması kabul edilmez. Planı tesisin saha koordinatörüyle birlikte çıkarıyoruz. Vinç bulunan hacimlerde ayrıca sepet ile kancanın aynı düşeye gelmemesi için çalışılan açıklık vincin hareket sahasının dışına alınır.",
            },
            {
                soru: "Gezer köprülü vinç ile aynı anda çalışabiliyor muyuz?",
                cevap:
                    "Çalışabilirsiniz, tek şart sepet ile kancanın aynı düşeyde bulunmaması. Çalışılan açıklık vincin hareket sahasından mekanik olarak çıkarılır ve iş kapanmadan bu sınır kaldırılmaz. Bu düzeni teslimat öncesi saha turunda kuruyor ve iş izni formuna yazıyoruz. Yeni kuşak hollerde açıklıklar geniş olduğu için, doğru planlandığında vinç ile platform aynı hacimde sorunsuz çalışabiliyor; asıl risk bu sınırın kağıt üzerinde kalıp sahada uygulanmamasından doğuyor.",
            },
            {
                soru: "İnce ayar döneminde her seferinde yeniden süreç mi işletiyorsunuz?",
                cevap:
                    "Gerekmiyor. Montaj ve devreye alma dönemini tek bir plan içinde kurguluyoruz: birinci dalga için makine uzun süreli kiralanır, ikinci dalga için çağrı bazlı bir düzen kurulur ve makine ihtiyaç oldukça kısa sürelerle gelir. İki dönemin koşulları tek teklifte yazılır. Bu düzenin asıl kazancı hızdır — ince ayar döneminde acil bir ihtiyaç çıktığında baştan süreç işletmek yerine mevcut çerçeveden tek yazışmayla sevkiyat yapılır.",
            },
            {
                soru: "Sivrihisar'daki bir enerji sahasında konstrüksiyon işi yapacağız; makine seçimi nasıl değişiyor?",
                cevap:
                    "Zemin ve rüzgâr belirleyici oluyor. Enerji sahalarındaki işletme binaları ve şalt yapıları çoğunlukla toprak veya çakıl zeminde, rüzgâra açık düzlüklerde konumlanır. Bu yüzden arazi tipi, geniş tekerlekli bir makine tercih ediyoruz. Rüzgâr sınırı aşıldığında sepet yükseltilemediği için gün planını bir ana gün ve bir yedek günle esnek kuruyoruz. Şalt sahası çevresinde çalışılıyorsa ayrıca enerjili ekipmana güvenli yaklaşma mesafesi ve gerektiğinde enerji kesme-kilitleme prosedürü devreye giriyor; bu kararı tesisin teknik sorumlusuyla birlikte veriyoruz.",
            },
            {
                soru: "Montaj döneminde hangi ekipmanın sahada bulunduğunu nasıl belgeliyorsunuz?",
                cevap:
                    "Uzun süreli kiralamada dönemsel raporlama kullanıyoruz: kullanım sayacı düzenli aralıklarla okunur, periyodik kontrol tarihleri takip edilir ve her rapor tesise iletilir. Bu, hangi ekipmanın hangi tarihte hacimde bulunduğunu denetime açık hâlde tutuyor. Tedarikçi hollerinde bu rapor, kalite kayıtlarınıza doğrudan eklenebilecek bir izlenebilirlik belgesi oluşturuyor. Sivrihisar'daki konstrüksiyon işlerinde kayıt yükü daha hafif olsa da aynı raporlama düzenini isteyen tesislerde uyguluyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir OSB'lerindeki yeni yapı stoku ve Sivrihisar çevresindeki enerji/hangar konstrüksiyon faaliyeti kamuya açık genel bilgidir; dikey çakışma kuralı, iş izni ve dönemsel raporlama uygulamaları saha pratiği ve İSG mevzuatından gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Sivrihisar Kırsalında Tarım ve Silo Sahası Platform Kiralama",
        giris:
            "Sivrihisar'ın geniş kırsalında tarımsal depo, ahır, silo yardımcı yapıları ve makine hangarları, kentteki tedarikçi hollerinden bambaşka bir çalışma disiplini ister. Burada belirleyici olan evrak rejimi değil, zemin ve mevsimdir. Bu yapıların zemini çoğunlukla beton değil, sıkıştırılmış toprak veya parçalı betondur; bu, bom tipi bir makinede doğrudan stabilite riskidir. İkinci belirleyici mevsimdir: hasat ve depolama dönemlerinde bu yapılar dolu ve trafik hâlindedir, bakım işleri için doğal pencere hasat öncesi ve sonrasıdır. Bu sayfada tarımsal yapı ve silo sahalarında platform kiralamasını zemin, mevsim ve büyük açıklıklı hacimlerde erişim üzerinden ele alıyoruz; aynı disiplini merkez ilçelerdeki tedarikçi hollerinde farklı bir gerekçeyle (kayıt ve izlenebilirlik) uyguladığımızı da belirtelim — ama bu sayfanın odağı doğrudan tarım ve silo sahasıdır.",
        maddeler: [
            {
                baslik: "Toprak ve parçalı beton zeminde stabilite",
                metin:
                    "Depo, ahır ve makine hangarı gibi tarımsal yapılarda zemin çoğunlukla beton değil sıkıştırılmış toprak ya da parçalı betondur; bu, bom tipi bir makinede stabilite açısından doğrudan risktir. Bom açıldığında yük tek noktada yoğunlaşır ve zemin oturursa makine dengesini kaybeder. Çözüm iki katmanlı: arazi tipi geniş tekerlekli makine kullanmak ve gerektiğinde zemin plakası kullanmaktır. Yağış sonrası yumuşamış zeminde çalışmayı erteliyoruz, plaka bile bazen yeterli olmuyor.",
            },
            {
                baslik: "Mevsim penceresi: dolum öncesi ve boşalma sonrası",
                metin:
                    "Hasat ve depolama dönemlerinde bu yapılar dolu ve trafik hâlindedir; bakım işleri için doğal pencere hasat öncesi ve sonrasıdır. Talebi bu pencerelere göre planlayan işletmeler hem daha rahat çalışıyor hem daha uygun fiyat alıyor. Erken planlama, ayrıca aynı bölgedeki komşu işletmelerle ortak sevkiyat kurma imkânı da veriyor çünkü benzer işler aynı haftalarda gündeme geliyor.",
            },
            {
                baslik: "Büyük açıklıklı yapılarda yandan erişim",
                metin:
                    "Silo yardımcı yapıları ve büyük açıklıklı ahır-hangar binaları, geniş ama çoğu zaman içi dolu hacimlerdir. Çatı makası altındaki aydınlatma, havalandırma ve kablo hattı işlerinde makine hedefin altına park edemez, çünkü altı genellikle depolanmış malzeme veya ekipmanla kaplıdır. Bu yüzden seçim yatay uzanma üzerinden yapılır: teleskopik makine düz ve uzak hedeflerde park sayısını azaltır, eklemli makine ise kiriş arasına girmesi gereken işlerde üstündür.",
            },
            {
                baslik: "Silo çevresinde aydınlatma ve bakım platformu",
                metin:
                    "Silo dış yüzeyi, merdiven-basamak sistemi ve çevresindeki aydınlatma direkleri düzenli bakım gerektirir. Bu işler için makine, silo gövdesine yakın ama devrilme riski taşımayacak bir mesafede konumlandırılır; zemin genellikle beton bir platform veya sıkıştırılmış toprak olur. Yükseklik arttıkça rüzgâr etkisi de büyür, bu yüzden çalışma günü rüzgâr durumuna göre esnek tutulur.",
            },
            {
                baslik: "Tek sevkiyatta çok nokta: kırsal mesafeyi yönetmek",
                metin:
                    "Sivrihisar'ın geniş yüzölçümü nedeniyle iki tarımsal saha arasındaki mesafe kimi zaman ilçe merkezine olan mesafeden uzundur. Bu yüzden nakliye, kiralama süresinden daha belirleyici bir kalem olabilir. Aynı hat üzerindeki iki tesis veya aynı köydeki iki işletme tek gün içinde sırayla dolaşılabilir; nakliye bir kez ödenir ve bölünür.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapı tipine göre zemin ve makine eşleşmesi",
                paragraflar: [
                    "Tarımsal yapı talebini aldığımızda önce zemin ve mevsim durumunu belirliyoruz; aşağıdaki tablo keşif görüşmesinde kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Zemin", "Ana kısıt", "Makine tercihi"],
                    satirlar: [
                        ["Tarımsal depo", "Toprak/parçalı beton", "Stabilite, mevsim", "Arazi tipi, zemin plakalı"],
                        ["Ahır/hayvancılık yapısı", "Toprak, kaygan yüzey", "Bölüm ayrımı", "Arazi tipi eklemli"],
                        ["Silo yardımcı yapısı", "Beton platform/toprak", "Rüzgâr, yükseklik", "Teleskopik/eklemli"],
                        ["Makine hangarı", "Toprak/parçalı beton", "Yatay uzanma", "Teleskopik"],
                        ["Sulama/enerji altyapı yapısı", "Çakıl saha", "Güvenli mesafe", "Arazi tipi, sınırlı erişim"],
                    ],
                },
            },
            {
                baslik: "Dolu depoda kapı çevresinden başlamak",
                paragraflar: [
                    "Depolama yapıları dolu olduğunda içeride manevra alanı kalmaz; bom tipi makineler hedefin altına girmeden yandan uzanabildiği için dolu bir yapıda bile çalışabilir, ancak makinenin park edeceği ve dönebileceği bir alan mutlaka gerekir. Bu alan çoğunlukla giriş kapısı çevresidir ve oradan uzaktaki noktalara ulaşmak yatay uzanma sınırına takılır.",
                    "Bu yüzden dolu yapılarda işleri kapı çevresindeki noktalarla sınırlı tutmayı, uzak noktaları ise boşalma dönemine bırakmayı öneriyoruz. Kalıcı çözüm mevsim planlamasıdır: dolum öncesi ve boşalma sonrası dönemler bu yapıların doğal bakım penceresidir ve bu pencerede tüm iş listesi tek seferde kapanabiliyor.",
                ],
            },
            {
                baslik: "Rüzgâr ve gün planı: kırsal işlerde iki ayrı risk",
                paragraflar: [
                    "Açık alanda yapılan platform işlerinde rüzgâr tek doğal sınırdır. Platformların üretici tarafından tanımlanmış bir rüzgâr sınırı vardır ve bu sınır aşıldığında sepet yükseltilemez; kural işin aciliyetine göre esnetilemez. Bu yüzden Sivrihisar'daki tarım ve silo işlerinde gün planını tek güne kilitlemiyoruz: bir ana gün ve bir yedek gün belirliyor, sabah ölçülen koşula göre karar veriyoruz.",
                    "İkinci risk merkezden uzaklıktır — arızalanan bir makinenin değişimi kırsalda yol mesafesi kadar uzar. Bu yüzden teslimat öncesi kontrolü daha geniş tutuyoruz: akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu tek tek doğrulanır. Uzun süreli işlerde yedek akü grubu baştan planlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ahır ve depo binamızın zemini beton değil; sakıncası var mı?",
                cevap:
                    "Doğrudan sakıncası var ve önlem alınmadan çalışmıyoruz. Sıkıştırılmış toprak veya parçalı beton zeminde bom açıldığında yük tek noktada yoğunlaşır; zemin oturursa makine dengesini kaybeder. Çözüm iki katmanlı: arazi tipi geniş tekerlekli makine kullanmak ve gerekli görülen noktalarda zemin plakası sermek. Yağış sonrası yumuşamış zeminde ise çalışmayı erteliyoruz, plaka bile yeterli olmuyor. Keşifte zeminin cinsini ve son yağış durumunu soruyoruz; mümkünse çalışma noktasının bir fotoğrafını istiyoruz.",
            },
            {
                soru: "Depomuz dolu; içeride manevra alanı olmadan çalışılabilir mi?",
                cevap:
                    "Sınırlı ölçüde. Bom tipi makineler hedefin altına girmeden yandan uzanabildiği için dolu bir yapıda bile çalışabilirler, ancak makinenin park edeceği ve dönebileceği bir alan mutlaka gerekir. Depolama yapılarında bu alan çoğunlukla giriş kapısı çevresidir ve oradan uzaktaki noktalara ulaşmak yatay uzanma sınırına takılır. Bu yüzden dolu yapılarda işleri kapı çevresindeki noktalarla sınırlı tutmayı, uzak noktaları ise boşalma dönemine bırakmayı öneriyoruz.",
            },
            {
                soru: "Silo çevresindeki aydınlatma direklerinin bakımı için hangi makine uygun?",
                cevap:
                    "Silo gövdesinin yüksekliği ve çevresindeki zemin belirleyici oluyor. Zemin beton bir platformsa ve devrilme mesafesi uygunsa teleskopik veya eklemli bir makine kullanıyoruz; toprak zeminse arazi tipi geniş tekerlekli bir model tercih ediyoruz. Yükseklik arttıkça rüzgâr etkisi de büyüdüğü için çalışma gününü rüzgâr durumuna göre esnek tutuyoruz — bir ana gün ve bir yedek gün belirliyoruz. Direklerin konumu ve silo gövdesine yakınlığı ile ilgili bir ölçü veya fotoğraf paylaşırsanız uygun sınıfı netleştirebiliyoruz.",
            },
            {
                soru: "Hasat döneminde bakım yaptırmak istiyoruz, mümkün mü?",
                cevap:
                    "Mümkün ama önermiyoruz. Hasat ve depolama dönemlerinde tarımsal yapılar dolu ve trafik hâlinde olur; bu, hem manevra alanını daraltır hem de öncelik verilmesi gereken işleri geciktirir. Doğal bakım penceresi hasat öncesi ve sonrasıdır — bu dönemlerde yapı boş, zemin trafiğe daha az maruz kalmış ve gün planı daha esnek olur. Erken planlama ayrıca komşu işletmelerle ortak sevkiyat kurma imkânı da veriyor, çünkü benzer işler aynı haftalarda gündeme geliyor.",
            },
            {
                soru: "Rüzgâr yüzünden çalışma iptal olursa ne oluyor?",
                cevap:
                    "Bunu baştan sözleşmeye yazıyoruz, çünkü açık kırsal sahalarda bu ihtimal gerçek. Platformların üretici tarafından belirlenmiş rüzgâr sınırı vardır ve aşıldığında sepet yükseltilemez; bu kural pazarlığa açık değildir. Uygulamada iş için bir ana gün ve bir yedek gün belirliyoruz. Makine sahada kalır ve koşul uygun olan gün çalışılır; bu durumda yalnızca kiralama süresi işler, ek bir ceza doğmaz. Sevkiyatın tümüyle ertelenmesi gerekiyorsa kararı birlikte veriyoruz.",
            },
            {
                soru: "İlçedeki birkaç işletme birlikte kiralayabilir mi?",
                cevap:
                    "Bu ilçede en çok önerdiğimiz model bu. Sivrihisar'ın geniş olması nedeniyle nakliye, toplam bedelin belirgin bir parçasını oluşturur; tek bir kısa iş için bu payı tek başına üstlenmek ekonomik değildir. Aynı hat üzerindeki tesisler veya aynı köydeki işletmeler tek gün içinde sırayla dolaşılabilir. Nakliye bir kez ödenir ve bölünür, her taraf yalnızca kendi kullanım saatini üstlenir. Hasat öncesi ve sonrası dönemlerde bu model özellikle iyi çalışıyor, çünkü benzer işler aynı haftalarda gündeme geliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sivrihisar'ın tarımsal yapı yoğunluğu, hasat/depolama mevsimselliği ve rüzgâra açık plato karakteri kamuya açık genel bilgidir; zemin taşıma gücü ve rüzgâr sınırı kuralları makine üretici talimatları ve saha pratiğinden gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Rüzgâr Enerjisi ve Aydınlatma Altyapısı Bakım Platformu",
        giris:
            "Sivrihisar hattındaki rüzgâr enerjisi tesisleri, Eskişehir'in enerji yatırımlarına elverişli platosunda kümelenmiş durumda ve bu tesislerin işletme binaları, şalt yapıları ve saha depoları düzenli bakım ister. Enerji ve aydınlatma bakım platformu kiralamasını burada belirleyen şey, sıradan bir aydınlatma direği bakımından farklı olarak, enerjili ekipmana yakın çalışmanın getirdiği güvenlik disiplinidir — güvenli yaklaşma mesafesi korunmadan sepet hareket ettirilemez ve gerektiğinde ilgili bölümün enerjisi kesilerek kilitlenir. Aynı disiplin, ilin havacılık ve savunma tedarikçilerindeki elektrik pano ve aydınlatma bakım işlerinde de geçerlidir; ikisi arasındaki fark, birinin açık sahada rüzgâra maruz kalması, diğerinin kapalı hacimde yabancı madde ve kayıt rejimine tabi olmasıdır. Bu sayfada enerji sahası ve aydınlatma bakım platformu kiralamasını bu iki bağlamda ele alıyoruz.",
        maddeler: [
            {
                baslik: "Güvenli yaklaşma mesafesi ve enerji kesme-kilitleme",
                metin:
                    "Şalt sahası ve dağıtım yapıları çevresinde çalışma, elektrik güvenliği kurallarına tabidir; enerjili ekipmana güvenli yaklaşma mesafesi korunmadan sepet hareket ettirilemez ve gerektiğinde ilgili bölümün enerjisi kesilerek kilitlenir. Bu tesislerde saha girişi öncesi güvenlik brifingi standarttır ve dış firma personeli bu brifinge katılmadan sahaya alınmaz. Sevkiyat planını brifing saatine göre kuruyoruz; makine sabah erken teslim edilir, brifing tamamlandıktan sonra çalışma başlar.",
            },
            {
                baslik: "Rüzgâr sınırı: aşıldığında sepet yükselmez",
                metin:
                    "Bölgenin enerji yatırımlarına elverişli olmasını sağlayan rüzgâr, sepet çalışmasının en sert kısıtıdır. Yükseltilebilir platformların üretici tarafından tanımlanmış bir rüzgâr sınırı vardır ve bu sınır aşıldığında sepet yükseltilemez; kural, işin aciliyetine göre esnetilebilecek bir öneri değildir. Bu yüzden enerji sahası işlerinde gün planını tek güne kilitlemiyoruz: iş için bir ana gün ve bir yedek gün belirliyoruz.",
            },
            {
                baslik: "Fabrika içi elektrik panosu ve aydınlatma bakımı",
                metin:
                    "Tedarikçi hollerinde enerji panosu ve aydınlatma bakımı, açık sahadan farklı bir rejime tabidir: burada rüzgâr değil kayıt ve yabancı madde disiplini belirleyicidir. Panoya yaklaşırken enerji kesme-kilitleme kuralı yine geçerlidir, ancak buna ek olarak sepete çıkan aletlerin sayımı ve alan altına örtü serilmesi standarttır. Akülü ve iz bırakmayan makine tercih edilir çünkü bu hacimler genellikle temizlik sınıflıdır.",
            },
            {
                baslik: "Stabilize yol ve saha girişi",
                metin:
                    "Enerji sahalarının önemli bölümüne asfalt bitip stabilize yol başladıktan sonra ulaşılır. Bu, makinenin değil onu taşıyan aracın sınırıdır: lowbed aracın dönüş yarıçapı, yolun eğimi ve yağış sonrası zeminin taşıma gücü belirleyicidir. Gerekirse makine giriş noktasında indirilip kendi tahrikiyle ilerletilir. Sahaya giden yolun bir fotoğrafı ve tahmini mesafesi, planlamayı büyük ölçüde netleştiriyor.",
            },
            {
                baslik: "Aydınlatma direği ve kablo hattı bakımında rota planı",
                metin:
                    "Enerji santrali çevresi ve kırsal aydınlatma direkleri, tek bir noktada değil dağınık bir hat boyunca yer alır. Bu tip işlerde makineyi tek bir noktaya götürüp getirmek yerine, hat boyunca sıralı bir bakım rotası kuruyoruz; her direk arası mesafe ve zemin durumu önceden değerlendirilir. Bu, aynı sevkiyatta birden çok noktayı kapatmanın en verimli yolu.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Saha tipine göre enerji-aydınlatma bakım hazırlığı",
                paragraflar: [
                    "Enerji ve aydınlatma bakım talebini aldığımızda önce hangi rejimle karşı karşıya olduğumuzu belirliyoruz; aşağıdaki tablo bu sınıflandırmayı özetler.",
                ],
                tablo: {
                    basliklar: ["Saha tipi", "Ana risk", "Güvenlik kuralı", "Makine tercihi"],
                    satirlar: [
                        ["Enerji santrali şalt sahası", "Enerjili ekipman", "Güvenli mesafe, kesme-kilitleme", "Arazi tipi, sınırlı erişim"],
                        ["Enerji santrali işletme binası", "Rüzgâr", "Brifing, ana gün + yedek gün", "Arazi tipi eklemli"],
                        ["Fabrika içi elektrik panosu", "Yabancı madde", "Kesme-kilitleme + sayım", "Akülü, temiz gövde"],
                        ["Kırsal aydınlatma hattı", "Mesafe, zemin", "Rota planı", "Arazi tipi teleskopik"],
                        ["Kentsel aydınlatma/tabela", "Trafik", "Alan kapatma", "Kompakt akülü"],
                    ],
                },
            },
            {
                baslik: "Enerji kesme-kilitleme kararı kimde",
                paragraflar: [
                    "Platform operatörü, üretim veya dağıtım ekipmanının güvenli duruma getirildiğine kendi başına karar vermez. Elektrik ve diğer enerji kaynakları tesisin yetkili kişisince belirlenir, kontrol edilir ve iş iznine işlenir. Sepet hedefe yaklaşmadan önce güvenli mesafe teyit edilir; mesafenin sağlanamayacağı işlerde ilgili bölümün enerjisi kesilip pano kilitlenir.",
                    "Bu karar, hem açık sahadaki şalt yapılarında hem fabrika içi elektrik panolarında aynı mantıkla işler — sorumluluk her zaman tesisin teknik yetkilisiyle paylaşılır, tek taraflı değerlendirme yapılmaz.",
                ],
            },
            {
                baslik: "Rota bakımında sıralama ve mesafe hesabı",
                paragraflar: [
                    "Aydınlatma direği veya kablo hattı bakımı tek bir noktada değil bir hat boyunca yapıldığında, makinenin izleyeceği güzergâhı önceden sıraya koyuyoruz. Her direk arası mesafe, zemin durumu ve varsa ulaşım engeli (kanal, eğim, dar geçiş) değerlendirilir. Bu planlama, tek sevkiyatta kapatılabilecek nokta sayısını doğrudan etkiliyor.",
                    "Sivrihisar'daki kırsal hatlarda bu rota planlaması özellikle önemli, çünkü noktalar arası mesafe merkez ilçelerdekinden çok daha uzun olabiliyor. Rota netleştiğinde toplam süreyi ve dolayısıyla kiralama süresini doğru tahmin edebiliyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Enerji tesisimizin şalt sahasında çalışılacak; nasıl bir prosedür işliyor?",
                cevap:
                    "Prosedürü tesisin kendi güvenlik düzeni belirler, biz ona uyarız. Standart akış şu şekilde işliyor: sahaya girecek kişilerin bilgileri önceden bildirilir, giriş günü güvenlik brifingi alınır ve iş izni formu doldurulur. Enerjili ekipmana güvenli yaklaşma mesafesi korunmadan sepet hareket ettirilmez; mesafenin korunamayacağı işlerde ilgili bölümün enerjisi kesilir ve pano kilitlenir. Sevkiyat planını brifing saatine göre kuruyoruz — makine sabah erken teslim edilir, brifing bittiğinde iş başlar.",
            },
            {
                soru: "Rüzgâr yüzünden çalışma iptal olursa ne oluyor?",
                cevap:
                    "Bunu baştan sözleşmeye yazıyoruz. Platformların üretici tarafından belirlenmiş rüzgâr sınırı vardır ve aşıldığında sepet yükseltilemez; bu kural pazarlığa açık değildir. Uygulamada iş için bir ana gün ve bir yedek gün belirliyoruz. Makine sahada kalır ve koşul uygun olan gün çalışılır; bu durumda yalnızca kiralama süresi işler, ek bir ceza doğmaz. Sevkiyatın tümüyle ertelenmesi gerekiyorsa kararı birlikte veriyoruz.",
            },
            {
                soru: "Fabrika içi elektrik panosu bakımında yabancı madde riski nasıl yönetiliyor?",
                cevap:
                    "Enerji kesme-kilitleme kuralına ek olarak yabancı madde disiplini uyguluyoruz. Sepete alınan aletler listelenir, emniyet bağıyla bağlanır, çalışma noktasının altı örtüyle kapatılır. İş sonunda aynı liste tekrar sayılır ve sayım tutmadan alan terk edilmez. Bu, panonun içine düşebilecek bir parçanın elektrik arızasına yol açma riskini ortadan kaldırıyor. Akülü ve iz bırakmayan makine kullanıyoruz çünkü bu hacimler genellikle temizlik sınıflı.",
            },
            {
                soru: "Enerji sahasına giden yol stabilize; makine buradan geçebilir mi?",
                cevap:
                    "Sorunun cevabı makineden çok taşıyıcı araca bağlı. Lowbed aracın yola girip dönebilmesi için yeterli genişlik ve dönüş alanı gerekir; eğim ve yağış sonrası zemin taşıma gücü de belirleyicidir. Bu şartlar sağlanmıyorsa makineyi saha girişinde indirip kendi tahrikiyle ilerletiyoruz. Sizden istediğimiz iki şey var: yolun son bölümünün bir fotoğrafı ve asfaltın bittiği noktadan çalışma alanına yaklaşık mesafe.",
            },
            {
                soru: "Dağınık aydınlatma direklerini tek sevkiyatla bakıma alabilir misiniz?",
                cevap:
                    "Evet, bu tip işlerde tercih ettiğimiz yöntem tam olarak bu. Hat boyunca sıralı bir bakım rotası kuruyoruz; her direk arası mesafe ve zemin durumu önceden değerlendirilir, makinenin izleyeceği güzergâh sıraya konur. Sivrihisar'daki kırsal hatlarda noktalar arası mesafe merkez ilçelerdekinden uzun olabildiği için bu planlama toplam süreyi doğrudan etkiliyor. Rota netleştiğinde tek sevkiyatla kaç noktanın kapatılabileceğini önceden söyleyebiliyoruz.",
            },
            {
                soru: "Enerji kesme-kilitleme kararını kim veriyor?",
                cevap:
                    "Bu karar tek taraflı verilmez; her zaman tesisin teknik yetkilisiyle birlikte alınır. Platform operatörümüz, ekipmanın güvenli duruma getirildiğine kendi başına karar vermez. Sepet hedefe yaklaşmadan önce güvenli mesafe teyit edilir; sağlanamıyorsa ilgili bölümün enerjisi kesilip pano kilitlenir ve bu iş izni formuna yazılır. Bu düzen hem açık sahadaki şalt yapılarında hem fabrika içi elektrik panolarında aynı mantıkla işliyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sivrihisar hattındaki rüzgâr enerjisi tesislerinin varlığı ve platonun rüzgâra açık karakteri kamuya açık genel bilgidir; güvenli yaklaşma mesafesi, enerji kesme-kilitleme ve rüzgâr sınırı kuralları İSG mevzuatı ve üretici talimatlarından gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Yüklenici Onay Süresine Göre Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Eskişehir'in tedarikçi tesislerinde operatörlü mü yoksa operatörsüz mü kiralama yapılacağı, çoğu ilde olduğu gibi yalnızca maliyet sorusu değildir; burada belirleyici olan tesisin yüklenici onay süresidir. Sahaya girecek her kişi — sürücü, operatör, refakatçi — aynı bildirim ve onay sürecinden geçer, ve bu süreç bazı tesislerde günler sürebilir. Kısa süreli bir işte bu süreyi beklemek işi geciktirirken, uzun süreli bir işte operatörlü kiralamanın getirdiği disiplin avantaj sağlar. Sivrihisar tarafında ise karar farklı bir eksende verilir: kırsal sahada belgeli kendi personeliniz varsa mesafeyi tek başına yönetebilir, ancak enerji sahası gibi güvenlik brifingi gerektiren yerlerde operatörümüzün deneyimi işi hızlandırır. Bu sayfada operatörlü/operatörsüz kararını iki farklı bağlamda — tedarikçi onay süreci ve kırsal saha koşulları — nasıl verdiğimizi anlatıyoruz.",
        maddeler: [
            {
                baslik: "Yeterlilik belgesi makine ailesine özgüdür",
                metin:
                    "Kural olarak sepeti kullanan kişide ilgili yeterlilik belgesi aranır ve bu belge, makinenin ait olduğu aileye göre düzenlenir; makaslı platform için alınmış belge bir bom tipi makineyi kapsamaz. Operatörsüz kiralamada bu belgenin sizin tarafınızda geçerli ve güncel olması gerekir; operatörlü kiralamada belge ve sorumluluk bizde kalır.",
            },
            {
                baslik: "Tesisin yüklenici onay süresi kararı etkiler",
                metin:
                    "Bu şartın ötesinde, havacılık ve savunma tedarikçilerinde ikinci bir filtre daha çalışır: sahaya girecek kişinin tesisin yüklenici onay sürecinden geçmesi. Bu süreç bazı tesislerde günler sürebildiği için, kısa süreli işlerde belgeli kendi personelinizin makineyi kullanması genellikle daha hızlı ilerler — dışarıdan giren tek kişi sürücü olur ve onay yükü hafifler.",
            },
            {
                baslik: "Uzun süreli işlerde operatörlü kiralamanın avantajı",
                metin:
                    "Buna karşılık uzun süren ve sürekli makine hareketi gerektiren işlerde operatörlü kiralama daha güvenlidir; operatör hem makinenin sınırlarını hem yabancı madde disiplinini bilir. Karar, işin süresi ile tesisin onay süresinin karşılaştırılmasıyla verilir — bunu keşif görüşmesinde açıkça hesaplıyoruz ve hangisinin daha erken başlatacağını söylüyoruz.",
            },
            {
                baslik: "Kırsal sahada operatör kararı: mesafe ve deneyim",
                metin:
                    "Sivrihisar'ın kırsalında karar farklı bir eksende verilir. Stabilize yol, rüzgâr sınırı ve arazi tipi makine kullanımı deneyim gerektirir; enerji sahası gibi güvenlik brifingi zorunlu olan yerlerde operatörümüzün bu düzene alışkın olması işi hızlandırır. Kısa bir tek noktalık iş için belgeli kendi personeliniz yeterli olabilirken, çok noktalı bir rota bakımında operatörlü kiralama genellikle daha verimli sonuç veriyor.",
            },
            {
                baslik: "Karma ekiplerde koordinasyon",
                metin:
                    "Bazı işlerde hem sizin personeliniz hem bizim operatörümüz aynı sahada bulunur — örneğin sizin ekibiniz tavan işini yürütürken bizim operatörümüz makineyi yönetir. Bu tip işlerde kullanım planı gün başında yazılır, kimin hangi saatte makineyi kullanacağı netleşir. Bu koordinasyon, özellikle vardiya değişimi olan uzun süreli işlerde belirsizliği önlüyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş süresine göre operatör kararı",
                paragraflar: [
                    "Operatörlü mü operatörsüz mü sorusuna verdiğimiz cevap, iş süresi ve tesisin onay süresine göre değişiyor; aşağıdaki tablo bu kararı özetliyor.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Süre", "Onay yükü", "Önerilen düzen"],
                    satirlar: [
                        ["Tedarikçi holünde kısa iş", "Saatlik/yarım gün", "Yüksek (kısa süreye göre)", "Belgeli kendi personeliniz"],
                        ["Tedarikçi holünde uzun montaj", "Haftalar", "Tek seferlik onay yeterli", "Operatörlü"],
                        ["Kurumsal/kamu binası", "Değişken", "Orta", "İşin süresine göre"],
                        ["Sivrihisar enerji sahası", "Günlük/rota", "Brifing zorunlu", "Operatörlü"],
                        ["Sivrihisar tek noktalık iş", "Kısa", "Düşük", "Belgeli kendi personeliniz"],
                    ],
                },
            },
            {
                baslik: "Onay süresini erken hesaba katmak",
                paragraflar: [
                    "Operatör kararını teklif aşamasında verirsek, sevkiyat planını buna göre kurabiliyoruz. Kendi belgeli personeliniz kullanacaksa dışarıdan giren tek kişi sürücü olur ve onay süreci hızlanır; belgeler talep anında değil teklif aşamasında gönderildiğinde onay süreci teslimatla paralel işler. Operatörlü kiralama seçildiğinde ise operatörümüzün de aynı onay sürecinden geçmesi gerektiğini baştan hesaba katıyoruz.",
                    "Bu hesaplamayı atlayan bir karar, genellikle teslimat gününde ortaya çıkıyor — operatör sahaya giremiyor ve iş bir gün gecikiyor. Bu yüzden operatör kararını teklif aşamasında netleştirmenizi öneriyoruz.",
                ],
            },
            {
                baslik: "Kırsalda operatör deneyiminin katkısı",
                paragraflar: [
                    "Sivrihisar'ın kırsalında operatörlü kiralamanın katkısı yalnızca makine kullanımı değildir; stabilize yolda kendi tahrikle ilerleme kararı, rüzgâr sınırının doğru okunması ve arazi tipi zeminde ayak/taban yerleşimi gibi konularda deneyim işi hızlandırıyor. Çok noktalı bir rota bakımında bu deneyim, her noktada yeniden değerlendirme yapmak yerine akışı sürdürüyor.",
                    "Buna karşılık kısa, tek noktalık ve tanıdık bir sahada belgeli personeliniz aynı işi genellikle daha hızlı bitiriyor çünkü sahayı zaten biliyor. Kararı bu ayrım üzerinden birlikte veriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kendi personelimiz kullanabilir mi, yoksa operatör mü göndermelisiniz?",
                cevap:
                    "İkisi de mümkün, karar süreye ve onay hızına bağlı. Kural şu: sepeti kullanan kişide ilgili yeterlilik belgesi aranır ve bu belge makinenin ait olduğu aileye göre düzenlenir. Belgeli personeliniz varsa kısa süreli işlerde bu genellikle daha hızlı ilerler, çünkü tesisinize dışarıdan giren kişi sayısı azalır ve yüklenici onay yükü hafifler. Belgeli personeliniz yoksa operatörlü kiralama yapıyoruz; bu durumda operatörümüzün de sizin giriş sürecinizden geçmesi gerekir.",
            },
            {
                soru: "Operatörlü kiralamada operatörünüz tesisin yüklenici sürecinden geçiyor mu?",
                cevap:
                    "Geçiyor, istisnasız. Havacılık ve savunma tedarikçilerinde sahaya girecek her kişi — sürücü, operatör, refakatçi — aynı bildirim ve onay sürecine tabidir. Bu süreç bazı tesislerde günler sürebildiği için, operatörlü kiralama kararını verdiğimiz anda operatörümüzün belgelerini ve kimlik bilgilerini teklif aşamasında iletiyoruz. Kısa süreli işlerde bu süreç işi geciktirebileceği için, karar verirken işin süresi ile onay süresini birlikte hesaplıyoruz.",
            },
            {
                soru: "Uzun süreli bir montaj işinde operatörlü mü daha mantıklı?",
                cevap:
                    "Genellikle evet. Uzun süren ve sürekli makine hareketi gerektiren işlerde operatörlü kiralama daha güvenlidir; operatör hem makinenin sınırlarını hem yabancı madde disiplinini bilir ve tesisin kayıt gerekliliklerine alışkındır. Bu tip işlerde onay süreci tek seferlik bir yatırım olarak kalır — iş haftalarca sürdüğü için başlangıçta harcanan onay süresi toplam süreye oranla küçük kalıyor.",
            },
            {
                soru: "Sivrihisar'daki bir enerji sahasında operatörlü kiralama şart mı?",
                cevap:
                    "Şart değil ama öneriyoruz. Enerji sahalarında güvenlik brifingi zorunludur ve stabilize yol, rüzgâr sınırı, arazi tipi zemin gibi konularda deneyim işi hızlandırır. Kısa, tek noktalık bir iş için belgeli kendi personeliniz yeterli olabilir; ancak çok noktalı bir rota bakımında operatörümüzün deneyimi, her noktada yeniden değerlendirme yapmak yerine akışı sürdürüyor. Kararı sahanın büyüklüğü ve nokta sayısına göre birlikte veriyoruz.",
            },
            {
                soru: "Hem sizin operatörünüz hem bizim ekibimiz aynı sahada olacak; koordinasyon nasıl sağlanıyor?",
                cevap:
                    "Kullanım planı gün başında yazılır — kimin hangi saatte makineyi kullanacağı, hangi ekibin tavan işini, hangi ekibin makine yönetimini üstleneceği netleşir. Bu koordinasyon özellikle vardiya değişimi olan uzun süreli işlerde belirsizliği önlüyor. Operatörümüz, sizin ekibinizin talimatı doğrultusunda makineyi yönetir ancak güvenlik kararlarını (rüzgâr sınırı, enerji kesme durumu gibi) kendi yetkisinde tutar.",
            },
            {
                soru: "Operatör kararını ne zaman vermemiz gerekiyor?",
                cevap:
                    "Mümkün olduğunca erken, tercihen teklif aşamasında. Operatör kararı, sevkiyat planını doğrudan etkiliyor — kendi personeliniz kullanacaksa dışarıdan giren tek kişi sürücü olur ve onay süreci hızlanır; operatörlü kiralama seçildiğinde operatörümüzün de onay sürecinden geçmesi gerektiğini baştan hesaba katıyoruz. Bu kararı teslimat gününe bırakmak, sahada operatörün giremediği bir durumla karşılaşma riskini doğuruyor.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir'in havacılık-savunma tedarik zincirinde yüklenici onay süreci ve Sivrihisar'daki enerji sahası güvenlik brifingi uygulamaları kamuya açık genel bilgi ve saha pratiğinden gelir; mesleki yeterlilik belgesinin makine ailesine özgü olması mevzuattan gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "OSB Havacılık Kümesi ve Sivrihisar Hattında Çok Noktalı Rota Bakımı",
        giris:
            "Çok noktalı rota bakımı, Eskişehir'de iki bambaşka bağlamda ortaya çıkıyor. OSB havacılık kümesinde birden çok tedarikçi tesisinin benzer bakım ihtiyacı olduğunda, her tesis için ayrı iş izni ve kayıt açmak gerekiyor — rota aynı olsa da her nokta kendi onay sürecini taşıyor. Sivrihisar hattında ise rota, dağınık enerji direği, aydınlatma noktası veya tarımsal yapı arasında kilometrelerce uzanabiliyor ve belirleyici olan kayıt değil mesafe ve zemin çeşitliliği oluyor. İkisinde de ortak nokta, tek bir sevkiyatla birden çok işi bitirmenin ekonomik zorunluluk olmasıdır — ama planlama mantığı tümüyle farklıdır. Bu sayfada iki rota tipini de ayrı ayrı ele alıyoruz.",
        maddeler: [
            {
                baslik: "OSB kümesinde her nokta kendi iznini taşır",
                metin:
                    "Aynı OSB içinde birbirine yakın birkaç tedarikçi tesisinde benzer bakım ihtiyacı olduğunda, makineyi bir sahadan diğerine taşımak fiziksel olarak kolaydır ama her tesisin kendi yüklenici onay süreci vardır. Bir tesiste açılan iş izni diğerinde geçerli sayılmaz; her nokta için ayrı bildirim, ayrı belge kontrolü ve ayrı kabul formu gerekir. Rotayı planlarken bu onay sürelerini de sıraya koyuyoruz, çünkü bir tesiste beklenen onay diğerindeki işi geciktirebilir.",
            },
            {
                baslik: "Dağınık direk ve aydınlatma noktalarında rota sırası",
                metin:
                    "Sivrihisar hattındaki enerji direği ve aydınlatma noktaları tek bir hat üzerinde ama kilometrelerce yayılmış olabilir. Bu tip işlerde makineyi tek bir noktaya götürüp getirmek yerine, hat boyunca sıralı bir bakım rotası kuruyoruz; her nokta arası mesafe ve zemin durumu önceden değerlendirilir. Zemin her noktada aynı olmayabilir — bazı noktalar beton, bazıları toprak veya çakıl — bu yüzden rota planı zemin değişimini de hesaba katar.",
            },
            {
                baslik: "Tek sevkiyatta iş listesini önceden kesinleştirmek",
                metin:
                    "Çok noktalı rotanın verimliliği, makine geldiğinde her noktada yapılacak işin önceden netleşmiş olmasına bağlıdır. Tavan iş listesi önceden çıkarılır, noktalar makinenin izleyeceği güzergâha göre sıralanır ve malzeme her noktada bekler. Bu hazırlık, aynı kiralama süresi içinde bitirilen iş miktarını belirgin artırıyor; hazırlıksız bir rota, her noktada bekleme süresiyle kayba dönüşüyor.",
            },
            {
                baslik: "Zemin ve makine sınıfı noktadan noktaya değişebilir",
                metin:
                    "Bir rotada hem beton zeminli bir tesis hem toprak zeminli bir saha varsa, tek bir makine ikisine de uygun olmayabilir. Bu durumda ya rotayı zemin tipine göre iki ayrı sevkiyata bölüyoruz ya da her iki zemine de uygun, arazi tipine yakın ama iz bırakmayan bir orta sınıf makine seçiyoruz. Kararı, noktaların zemin dağılımına bakarak veriyoruz.",
            },
            {
                baslik: "Kayıt formatını rota boyunca tek tip tutmak",
                metin:
                    "OSB kümesindeki rotalarda her tesisin kendi kayıt formatı olabilir, ancak bizim tarafımızda tek bir iş dosyası tutuyoruz — her noktanın kabul formu, alet sayımı ve teslim kaydı bu dosyaya ekleniyor. Bu, rota tamamlandığında hangi noktada ne yapıldığının tek bakışta görülebilmesini sağlıyor ve tesislerin kendi denetimlerinde referans olarak kullanılabiliyor.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Rota tipine göre planlama farkı",
                paragraflar: [
                    "Çok noktalı rota talebini aldığımızda önce OSB kümesi mi yoksa kırsal hat mı olduğunu belirliyoruz; aşağıdaki tablo iki rota tipinin planlama farkını özetler.",
                ],
                tablo: {
                    basliklar: ["Rota tipi", "Ana kısıt", "Nokta arası mesafe", "Planlama önceliği"],
                    satirlar: [
                        ["OSB havacılık kümesi", "Her tesiste ayrı onay", "Kısa (aynı bölge)", "Onay süresi sıralaması"],
                        ["Sivrihisar enerji/aydınlatma hattı", "Mesafe, zemin çeşitliliği", "Uzun (km ölçeğinde)", "Zemin ve rüzgâr"],
                        ["Kentsel şube/dükkân zinciri", "Trafik, park", "Orta", "Saat planı"],
                        ["Karma OSB + kırsal", "İki farklı rejim", "Değişken", "İki ayrı sevkiyat"],
                        ["Tek tesis, çok nokta", "İç mekân sırası", "Kısa", "Tavan iş listesi"],
                    ],
                },
            },
            {
                baslik: "Onay süresini rotaya göre sıralamak",
                paragraflar: [
                    "OSB kümesindeki bir rotada, her tesisin onay süresi farklı olabilir; bazı tesisler aynı gün onay verirken bazıları bir gün önceden bildirim ister. Rota sırasını belirlerken en uzun onay süresine sahip tesisi listenin başına alıyoruz, böylece diğer tesislerdeki onaylar beklenirken ilk tesiste iş zaten başlamış oluyor.",
                    "Bu sıralama, rotanın toplam süresini belirgin kısaltıyor. Onay sürelerini bilmeden rastgele sıralanan bir rota, bazı noktalarda makinenin kapıda beklemesine yol açabiliyor — bu da hem zaman hem nakliye maliyeti demek.",
                ],
            },
            {
                baslik: "Kırsal rotada zemin geçişini yönetmek",
                paragraflar: [
                    "Sivrihisar hattındaki bir rota, bazen aynı gün içinde beton bir tesis girişinden toprak bir enerji sahasına geçiş yapabiliyor. Bu geçişte makinenin lastik ve şasi altı temizliği ile zemin uyumu iki kez kontrol ediliyor — önce beton hacme girerken iz bırakmama açısından, sonra toprak sahaya geçerken tutunma açısından.",
                    "Rotanın ortasında zemin tipi tümüyle değişiyorsa (örneğin merkez tedarikçi holünden Sivrihisar kırsalına geçiliyorsa), tek makineyle devam etmek yerine iki ayrı makineyi iki ayrı segment için planlamayı öneriyoruz; bu, saha riskini ortadan kaldırıyor.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı OSB içindeki birkaç tesise tek sevkiyatla gidebilir misiniz?",
                cevap:
                    "Gidebiliriz, ancak her tesisin kendi yüklenici onay süreci olduğunu unutmuyoruz. Bir tesiste açılan iş izni diğerinde geçerli sayılmaz; her nokta için ayrı bildirim, ayrı belge kontrolü ve ayrı kabul formu gerekir. Rota sırasını belirlerken en uzun onay süresine sahip tesisi listenin başına alıyoruz, böylece diğer tesislerdeki onaylar beklenirken ilk tesiste iş zaten başlamış oluyor. Bu sıralama rotanın toplam süresini belirgin kısaltıyor.",
            },
            {
                soru: "Sivrihisar hattındaki dağınık aydınlatma direklerini tek gün içinde bitirebilir misiniz?",
                cevap:
                    "Nokta sayısına ve aralarındaki mesafeye bağlı, ama bunun için hat boyunca sıralı bir bakım rotası kuruyoruz. Her direk arası mesafe ve zemin durumu önceden değerlendirilir, makinenin izleyeceği güzergâh sıraya konur. Zemin her noktada aynı olmayabileceği için rota planı zemin değişimini de hesaba katıyor. Nokta listesini ve yaklaşık konumlarını paylaşırsanız kaç noktanın tek sevkiyatta kapatılabileceğini önceden söyleyebiliyoruz.",
            },
            {
                soru: "Rotadaki bir tesiste zemin beton, diğerinde toprak; tek makine yeterli mi?",
                cevap:
                    "Her zaman değil. Bir rotada hem beton zeminli bir tesis hem toprak zeminli bir saha varsa, tek bir makine ikisine de uygun olmayabilir. Bu durumda ya rotayı zemin tipine göre iki ayrı sevkiyata bölüyoruz ya da her iki zemine de uygun, arazi tipine yakın ama iz bırakmayan bir orta sınıf makine seçiyoruz. Kararı noktaların zemin dağılımına bakarak veriyoruz; bu bilgiyi rotayı planlarken sizden istiyoruz.",
            },
            {
                soru: "Her noktanın kaydını ayrı mı tutuyorsunuz, yoksa tek dosyada mı topluyorsunuz?",
                cevap:
                    "İkisini birleştiriyoruz. Her tesisin kendi kayıt formatı olabilir ve biz o formata uyuyoruz, ancak bizim tarafımızda tek bir iş dosyası tutuyoruz — her noktanın kabul formu, alet sayımı ve teslim kaydı bu dosyaya ekleniyor. Bu, rota tamamlandığında hangi noktada ne yapıldığının tek bakışta görülebilmesini sağlıyor ve isteyen tesislere kendi denetimlerinde referans olarak sunulabiliyor.",
            },
            {
                soru: "Rota sırasında hazırlıksız bir nokta çıkarsa ne oluyor?",
                cevap:
                    "Bu, rotanın verimliliğini en çok düşüren durumdur ve mümkün olduğunca önlemeye çalışıyoruz. Rota planlanmadan önce her noktanın iş listesini netleştiriyoruz; malzemenin sahada hazır olması, tavan işlerinin önceden belirlenmiş olması gerekiyor. Bir nokta hazırlıksız çıkarsa o noktayı atlayıp rotanın geri kalanına devam ediyor, hazırlıksız noktayı ayrı bir sevkiyata bırakıyoruz — bu, rotanın tamamının gecikmesini önlüyor.",
            },
            {
                soru: "OSB kümesi ile Sivrihisar hattını aynı rotaya alabilir misiniz?",
                cevap:
                    "Genellikle önermiyoruz. İki rejim tümüyle farklı — OSB kümesinde belirleyici onay süresi, Sivrihisar hattında mesafe ve zemin. Bu iki farklı planlama mantığını tek rotada birleştirmek, her ikisinde de verimi düşürüyor. Bunun yerine iki ayrı sevkiyat planlıyoruz; aynı hafta içinde ikisi de gerçekleşiyorsa güzergâhı mümkün olduğunca ortak noktadan geçirip nakliye payını kısmen bölüyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir OSB'sindeki havacılık kümesinin varlığı ve Sivrihisar hattındaki dağınık enerji/aydınlatma altyapısı kamuya açık genel bilgidir; yüklenici onay süreci ve rota bakım planlaması saha pratiğinden gelir. Firma adı ve rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Sivrihisar Kırsalında Zor Zemin ve Arazi Koşullarında Platform Kiralama",
        giris:
            "Sivrihisar, Eskişehir'in en geniş yüzölçümlü ilçelerinden biri olması nedeniyle zor zemin ve arazi koşullarında platform kiralamasının en sık gündeme geldiği bölgedir. Enerji sahalarının stabilize yolları, tarımsal yapıların toprak zemini ve hangar çevresindeki düzensiz saha yüzeyleri, standart lastikli bir makinenin güvenle çalışamayacağı koşullar yaratır. Bu sayfada zor zemin ve arazi koşullarında platform kiralamasını üç eksende ele alıyoruz: taşıyıcı aracın ulaşım sınırı, zeminin taşıma gücü ve rüzgârın getirdiği doğal kısıt. Aynı disiplin, merkez ilçelerdeki inşaat veya tadilat aşamasındaki binaların kaba zemininde de geçerli olabiliyor, ancak bu sayfanın odağı doğrudan Sivrihisar'ın kırsal arazi gerçeğidir.",
        maddeler: [
            {
                baslik: "Stabilize yol ve saha girişi: makineden önce araç",
                metin:
                    "İlçedeki sahaların önemli bölümüne asfalt bitip stabilize yol başladıktan sonra ulaşılır. Bu, makinenin değil onu taşıyan aracın sınırıdır: lowbed aracın dönüş yarıçapı, yolun eğimi ve yağış sonrası zeminin taşıma gücü belirleyicidir. Uygulamada saha girişine kadar araçla gidilir, gerekirse makine giriş noktasında indirilip kendi tahrikiyle ilerletilir. Kendi tahrikiyle uzun mesafe yapan makine hem zaman hem akü harcar, bu yüzden mesafeyi baştan bilmek gerekir.",
            },
            {
                baslik: "Toprak ve parçalı beton zeminde noktasal yük riski",
                metin:
                    "Depo, ahır ve makine hangarı gibi yapılarda zemin çoğunlukla beton değil sıkıştırılmış toprak ya da parçalı betondur; bu, bom tipi bir makinede stabilite açısından doğrudan risktir. Çözüm arazi tipi geniş tekerlekli makine ve gerektiğinde zemin plakası kullanmaktır. Yağış sonrası yumuşamış zeminde çalışmayı erteliyoruz; plaka bile bazen yeterli olmuyor.",
            },
            {
                baslik: "Rüzgâr: çalışmayı durduran doğal sınır",
                metin:
                    "Bölgenin enerji yatırımlarına elverişli olmasını sağlayan rüzgâr, sepet çalışmasının en sert kısıtıdır. Yükseltilebilir platformların üretici tarafından tanımlanmış bir rüzgâr sınırı vardır ve bu sınır aşıldığında sepet yükseltilemez; kural pazarlığa açık değildir. Bu yüzden kırsal işlerde gün planını tek güne kilitlemiyoruz: bir ana gün ve bir yedek gün belirliyoruz.",
            },
            {
                baslik: "Devrilme riskinin kaynağı: zemin, hız değil",
                metin:
                    "Kırsal sahalardaki devrilme vakalarının başlıca nedeni, makinenin aşırı hızı veya operatör hatası değil, zeminin taşıma gücünün gözden kaçırılmasıdır. Bom açıldığında yük tek noktada yoğunlaşır; zemin oturursa makine dengesini kaybeder. Keşifte zeminin cinsini ve son yağış durumunu sormamız, mümkünse çalışma noktasının bir fotoğrafını istememiz bu yüzden — bu bilgi kararı neredeyse tümüyle netleştiriyor.",
            },
            {
                baslik: "Kentte kaba zeminde inşaat/tadilat işleri",
                metin:
                    "Zor zemin yalnızca kırsalla sınırlı değil; yapım veya tadilat aşamasındaki bina içlerinde de kaba beton, döküm sonrası pürüzlü yüzey veya geçici dolgu zeminiyle karşılaşılıyor. Bu tip sahalarda da arazi tipine yakın, geniş temaslı tekerlek tercih ediliyor ve makinenin park noktası önceden düzleştiriliyor. Kırsal ve kentsel kaba zemin arasındaki fark, kırsalda mesafenin de eklenmesi.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin tipine göre makine ve hazırlık",
                paragraflar: [
                    "Zor zemin talebini aldığımızda önce zemin cinsini ve ulaşım koşulunu belirliyoruz; aşağıdaki tablo keşif görüşmesinde kullandığımız çerçevedir.",
                ],
                tablo: {
                    basliklar: ["Zemin/saha tipi", "Ana risk", "Hazırlık", "Makine tercihi"],
                    satirlar: [
                        ["Sıkıştırılmış toprak", "Nokta yükü, oturma", "Zemin plakası", "Arazi tipi, geniş tekerlek"],
                        ["Parçalı beton", "Dengesiz yüzey", "Rota kontrolü", "Arazi tipi eklemli"],
                        ["Çakıl/stabilize saha", "Kayma, tutunma", "Yavaş ilerleme", "Arazi tipi teleskopik"],
                        ["Yağış sonrası yumuşamış zemin", "Batma, devrilme", "Erteleme veya plaka", "Duruma göre değerlendirme"],
                        ["Kentte kaba/döküm zemin", "Pürüzlü yüzey", "Park noktası düzleştirme", "Geniş temaslı tekerlek"],
                    ],
                },
            },
            {
                baslik: "Keşifte istediğimiz zemin bilgisi",
                paragraflar: [
                    "Zor zemin sahalarında yanlış makine seçiminin bedeli yüksek olduğu için, keşif aşamasında net bilgi istiyoruz: zeminin cinsi (toprak, çakıl, parçalı beton), son yağış tarihi ve zeminin o gün nasıl olduğu, makinenin park edeceği noktanın eğimi, ulaşım yolunun genişliği ve yağış sonrası durumu. Mümkünse çalışma noktasının ve yolun birer fotoğrafı.",
                    "Bu bilgiler netse sahaya gitmeden doğru makineyi belirleyebiliyoruz; belirsizlik varsa bunu söylüyor ve gerekirse keşif yapıyoruz. Yanlış makineyle kırsal bir sahaya gitmenin bedeli, bir keşif gününden çok daha yüksek.",
                ],
            },
            {
                baslik: "Yedek plan: kırsalda arıza ve hava iki ayrı risktir",
                paragraflar: [
                    "Merkezde arızalanan bir makine birkaç saat içinde değiştirilebilir; kırsalda aynı işlem yol mesafesi kadar uzar. Bu yüzden zor zemin sahalarına giden makinelerde teslimat öncesi kontrolü daha geniş tutuyoruz: akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu, emniyet tertibatlarının işlevi tek tek doğrulanır.",
                    "İkinci risk havadır ve bunun karşılığı sözleşmede olmalıdır. Rüzgâr veya yağış nedeniyle çalışılamayan günün nasıl değerlendirileceğini baştan yazıyoruz: alternatif güne aktarım, kısmi bekleme bedeli veya sevkiyatın ertelenmesi seçeneklerinden hangisinin geçerli olduğu teklifte açıkça yer alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Sahamıza giden yol stabilize; makine buradan geçebilir mi?",
                cevap:
                    "Sorunun cevabı makineden çok taşıyıcı araca bağlı. Lowbed aracın yola girip dönebilmesi için yeterli genişlik ve dönüş alanı gerekir; eğim ve yağış sonrası zemin taşıma gücü de belirleyicidir. Bu şartlar sağlanmıyorsa makineyi saha girişinde indirip kendi tahrikiyle ilerletiyoruz — arazi tipi makineler bunun için uygundur, ancak uzun mesafede akü ve zaman harcarlar. Sizden istediğimiz iki şey var: yolun son bölümünün bir fotoğrafı ve asfaltın bittiği noktadan çalışma alanına yaklaşık mesafe.",
            },
            {
                soru: "Deponun zemini toprak; makine burada güvenle çalışır mı?",
                cevap:
                    "Önlem alınırsa çalışır, alınmazsa çalıştırmıyoruz. Sıkıştırılmış toprak veya parçalı beton zeminde bom açıldığında yük tek noktada yoğunlaşır; zemin oturursa makine dengesini kaybeder ve bu, kırsal sahalardaki devrilme vakalarının başlıca nedenidir. Çözüm iki katmanlı: arazi tipi geniş tekerlekli makine kullanmak ve gerekli noktalarda yük dağıtıcı zemin plakası sermek. Yağış sonrası yumuşamış zeminde ise plaka bile yeterli olmadığı için çalışmayı erteliyoruz.",
            },
            {
                soru: "Rüzgâr yüzünden çalışma iptal olursa ne oluyor?",
                cevap:
                    "Bunu baştan sözleşmeye yazıyoruz, çünkü bu ilçede iptal ihtimali gerçek. Platformların üretici tarafından belirlenmiş rüzgâr sınırı vardır ve aşıldığında sepet yükseltilemez; bu kural pazarlığa açık değildir. Uygulamada iş için bir ana gün ve bir yedek gün belirliyoruz. Makine sahada kalır ve koşul uygun olan gün çalışılır; bu durumda yalnızca kiralama süresi işler, ek bir ceza doğmaz.",
            },
            {
                soru: "Zemin durumunu keşif yapmadan nasıl değerlendiriyorsunuz?",
                cevap:
                    "Net bir bilgi setiyle. Zeminin cinsini (toprak, çakıl, parçalı beton), son yağış tarihini ve zeminin o gün nasıl olduğunu, makinenin park edeceği noktanın eğimini, ulaşım yolunun genişliğini soruyoruz; mümkünse çalışma noktasının ve yolun birer fotoğrafını istiyoruz. Bu bilgiler netse sahaya gitmeden doğru makineyi belirleyebiliyoruz. Belirsizlik varsa bunu söylüyor ve gerekirse keşif yapıyoruz — yanlış makineyle kırsal bir sahaya gitmenin bedeli bir keşif gününden çok daha yüksek.",
            },
            {
                soru: "Kentte tadilat aşamasındaki bir binada kaba zeminde çalışabiliyor musunuz?",
                cevap:
                    "Çalışabiliyoruz; bu tip sahalarda da kırsaldakine benzer bir hazırlık uyguluyoruz — arazi tipine yakın, geniş temaslı tekerlekli makine tercih ediyor ve makinenin park noktasını önceden düzleştiriyoruz. Kırsal ve kentsel kaba zemin arasındaki fark, kırsalda buna mesafe ve ulaşım kısıtının da eklenmesidir; kentte genellikle bu ek yok, bu yüzden hazırlık daha basit kalıyor.",
            },
            {
                soru: "Makine il dışına veya uzak bir kırsal sahaya giderken arızalanırsa ne oluyor?",
                cevap:
                    "Önce riski küçültüyoruz, sonra sözleşmeyle sınırlandırıyoruz. Küçültme tarafı teslimat öncesi kontrolde: uzak sahalara giden makinelerde akü sağlığı, hidrolik seviye ve kaçak, tekerlek durumu ile emniyet tertibatları tek tek doğrulanır. Sınırlandırma tarafı sözleşmede: müdahale süresi tanımlanır, onarımın uzayacağı anlaşılırsa yerine başka bir makine gönderilir. Takvimi kritik olan işlerde yedek makine rezervasyonu öneriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sivrihisar'ın geniş yüzölçümü, stabilize yol ağı ve rüzgâra açık plato yapısı kamuya açık genel bilgidir; zemin taşıma gücü ve rüzgâr sınırı kuralları makine üretici talimatları ve İSG uygulamalarından gelir. Firma adı ve rakam uydurulmamıştır.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Eskişehir'de Tedarikçi Tesislerine Uygun Makaslı Platform Kiralama",
        giris:
            "Makaslı platform, Eskişehir'in havacılık-savunma tedarik zincirinde en sık istenen makine sınıfıdır — çünkü çoğu iş dikey bir hat üzerinde, sabit bir noktada ve kapalı hacimde yürür: kaynak istasyonu üstü aydınlatma değişimi, vinç ray bakımı, çelik konstrüksiyon boyası, tavan tesisatı kontrolü. Ama bu tesislerde makinenin geometrisi kadar kapıdan nasıl gireceği de konuşulur. Yabancı madde (FOD) rejimi uygulanan bir hacme sepetli bir makine sokmak, sıradan bir sanayi teslimatından farklı bir hazırlık ister: gövdenin dışarıdan getirdiği hiçbir parçacık, iz veya sızıntı üretim alanına karışmamalı; sepete konan her alet önceden listelenmeli; sahaya girecek kişi refakatli ve kayıtlı olmalı. Biz Eskişehir'de makaslı platform teslimatını bu iki eksende birden kuruyoruz — bir yanda dar koridor ve düşük tavan yüksekliğine uyan doğru gövde ölçüsü, diğer yanda tesisin temizlik ve gizlilik protokolüne uyan teslim biçimi. Sivrihisar tarafındaki kırsal ve enerji sahalarında ise makaslı platform farklı bir rol üstlenir: rüzgâr enerjisi işletme binalarının iç mekân bakımı, şalt sahası kontrol panosu erişimi gibi zemin sabit, ölçü dar işlerde tercih edilir. İki ortam da aynı makine ailesini ister ama hazırlık listesi baştan sona değişir.",
        maddeler: [
            {
                baslik: "FOD rejiminde makaslı platformun giriş hazırlığı",
                metin:
                    "Sepetli bir makine üretim veya montaj hacmine girmeden önce üç şey doğrulanır: tekerlek ve şasi altında toprak, yağ veya metal talaşı kalıntısı olmadığı, hidrolik hortum bağlantılarının sızdırmadığı ve sepet tabanının boş, süpürülmüş olduğu. Bu üç maddeyi tesise girmeden, park alanında tamamlıyoruz ve gerekirse geçici tekerlek örtüsü kullanıyoruz. Akülü tahrikli makaslı platformlar bu rejime doğal olarak uyar; içten yanmalı bir makine bu tür hacimlere zaten teklif edilmez.",
            },
            {
                baslik: "Sepete giren her alet sayılır, çıkan sayılır",
                metin:
                    "Makaslı platformun sepeti, FOD disiplininde kendi başına bir kontrol noktasıdır — çünkü operatör orada çalışırken elindeki alet, bağlantı parçası veya sarf malzemesi düşme riski taşır. Uygulamada sepete alınacak her el aleti önceden bir listeye yazılır, bağ ile sepete emniyete alınır, küçük parçalar kapalı kutuda taşınır. İş bitiminde aynı liste tekrar sayılır; sayı tutmadan sepet indirilmez. Bu prosedürü tesisin kendi FOD formuna uyarlıyoruz, ayrı bir kâğıt çıkarmıyoruz.",
            },
            {
                baslik: "Dar koridor ve düşük tavanda gövde seçimi",
                metin:
                    "Tedarikçi tesislerinin üretim hollerinde koridor genişliği ve tavan yüksekliği çoğu zaman standart bir makaslı platformun sığmadığı kadar dardır — özellikle test düzenekleri, raf sistemleri ve asma taşıyıcılar arasında kalan bölgelerde. Bu yüzden teklif öncesi en dar geçiş noktasının ölçüsünü ve çalışma noktasının tavana olan uzaklığını soruyoruz. Dar gövdeli, düşük kapalı yükseklikli akülü makaslı modeller bu hacimlerde standart tercih; iz bırakmayan lastik burada da aranan özellik.",
            },
            {
                baslik: "Gizlilik kısıtlı hacimde teslim ve refakat",
                metin:
                    "Bazı tedarikçi hacimlerinde kamera ve fotoğraf makinesi taşınması tamamen yasaktır, bazılarında ise dışarıdan gelen her personel refakatli hareket etmek zorundadır. Makaslı platform teslimatını yapan sürücü ve varsa operatör için bu kısıt aynen geçerlidir — sahaya girecek kişilerin bilgisi bir gün önceden yazılı iletilir, istenirse gizlilik taahhüdü imzalanır. Cihaz kısıtı olan hacimlerde teslim-alım kaydı fotoğrafla değil, iki taraflı imzalı iş kabul formuyla tutulur.",
            },
            {
                baslik: "Sivrihisar'da makaslı platformun farklı rolü: sabit nokta, dar ölçü",
                metin:
                    "Kırsal ve enerji sahalarında makaslı platform, bom tipi makinelerin aksine geniş yatay erişim için değil, sabit bir noktada dar bir ölçüye girmek için tercih edilir — işletme binası içi aydınlatma, şalt sahası kontrol panosu, depo içi raf üstü erişimi gibi işlerde. Zemin sabit olduğu sürece (beton veya sıkıştırılmış zemin), sepetin dikey kararlılığı makaslı platformu bu işler için bom tipi makinelerden daha uygun kılar. Zemin taşıması belirsizse önce bunu netleştiriyoruz; makaslı platformun tekerlek izi bom tipi kadar tolere edilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Hacim tipine göre makaslı platform sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, tedarikçi ve kurumsal hacimlerde en sık karşılaştığımız dört senaryoyu ve bunlara göre belirlediğimiz makine sınıfını gösterir. Tesisinizin FOD veya gizlilik rejimi bu tablodaki satırlardan birine denk geliyorsa, hazırlık listesi de aynı satıra göre çıkar.",
                ],
                tablo: {
                    basliklar: ["Hacim tipi", "Kısıt", "Öncelik", "Uygun makaslı platform"],
                    satirlar: [
                        ["Havacılık parça üretim hattı", "FOD sayım rejimi", "Sızıntısız, iz bırakmayan gövde", "Akülü, dar gövdeli"],
                        ["Kaplama / test hacmi", "Ortam temizliği", "Toz ve sıvı sızıntısı yok", "Akülü, temizlenebilir yüzey"],
                        ["Kalite/gizlilik odalı ofis-üretim geçişi", "Cihaz ve kamera yasağı", "Sessiz, düşük emisyon", "Akülü, kompakt"],
                        ["Sivrihisar enerji işletme binası", "Sabit zemin, dar iç mekân", "Dikey kararlılık", "Standart akülü makaslı"],
                    ],
                },
            },
            {
                baslik: "Teklif öncesi FOD hacmi için sorduğumuz altı soru",
                paragraflar: [
                    "Tedarikçi tesisine makaslı platform teklifi hazırlarken şu altı bilgiyi topluyoruz: çalışma noktasının zeminden yüksekliği, en dar geçiş noktasının ölçüsü, tesisin FOD veya temizlik sınıfı olup olmadığı, cihaz/fotoğraf kısıtı olup olmadığı, sahaya girecek kişi sayısı ve tesisin istediği evrak seti. Bu altısı netleştiğinde teklif tek seferde kapanıyor; netleşmediğinde genellikle kapıda ek evrak isteniyor ve teslimat gecikiyor.",
                    "En sık atlanan madde, koridor ölçüsüdür. Üretim hollerinde raf, test düzeneği veya kablo kanalı yüzünden geçiş genişliği görünenden dar olabilir; bu yüzden bir fotoğraf ve tek bir ölçü isteyerek bu riski baştan kapatıyoruz.",
                ],
            },
            {
                baslik: "Operatörlü mü, operatörsüz mü: FOD rejiminde karar",
                paragraflar: [
                    "FOD rejimi uygulanan hacimlerde operatörün de tesisin yüklenici onay sürecinden geçmesi gerekebilir; bu süreç bazı tesislerde birkaç gün sürer. Kısa süreli işlerde, sepeti kullanacak kişinin yeterlilik belgesi olan kendi personelinizin makineyi kullanması genellikle daha hızlı başlar. Uzun süreli ve sık makine hareketi gerektiren işlerde ise operatörlü kiralama tercih edilir; operatörümüz hem makinenin sınırlarını hem FOD disiplinini bilir ve sayım prosedürünü kendisi yürütür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı platformun sepetine koyacağımız aletler FOD rejimine göre nasıl kontrol ediliyor?",
                cevap:
                    "Sepete alınacak her el aleti ve sarf malzemesi, iş başlamadan önce bir listeye yazılır ve bağ ile sepete emniyete alınır. Küçük parçalar (vida, somun, bağlantı elemanı) kapalı kutuda taşınır, açıkta bırakılmaz. İş bitiminde aynı liste tekrar sayılır; bir kalem eksikse alan terk edilmeden aranır ve bulunmadan iş kapanmaz. Tesisinizin kendi FOD formu varsa onu kullanıyoruz, yoksa kendi kontrol listemizi imzalı olarak teslim ediyoruz. Bu prosedür sepetin boyutundan bağımsız her makaslı platform teslimatında aynı şekilde işler.",
            },
            {
                soru: "Üretim hattımızda koridor dar; hangi makaslı platform sığar?",
                cevap:
                    "Bunu net ölçüyle belirliyoruz, tahminle değil. Teklif öncesi en dar geçiş noktasının genişliğini ve varsa yükseklik kısıtını (kapı, kiriş, kablo kanalı) soruyoruz; mümkünse bir fotoğraf istiyoruz. Dar gövdeli akülü makaslı platform modelleri standart modele göre önemli ölçüde daha dar bir koridordan geçebilir, ancak bu modellerin taşıma kapasitesi de daha düşüktür — bu yüzden çalışma noktasındaki iş yükünü de birlikte değerlendiriyoruz. Ölçü ve iş yükü netleştiğinde doğru model tek seferde belirleniyor.",
            },
            {
                soru: "Tesisimizde fotoğraf çekimi yasak; teslim kaydını nasıl tutuyorsunuz?",
                cevap:
                    "Yazılı forma geçiyoruz. Cihaz kısıtı olan hacimlerde teslim alma ve teslim etme aşamalarında fotoğraf çekmiyoruz; onun yerine iki taraflı imzalanan bir iş kabul formu kullanıyoruz. Formda makinenin teslim saati, sayaç durumu, gözle görülen hasar kaydı, sepete götürülen alet listesi ve iş bitiminde yapılan sayım sonucu yer alır. Bu belge hem sizin kalite kayıtlarınıza eklenebilir hem de bizim açımızdan makinenin durumunu belgeler. Hangi düzenin geçerli olacağını sevkiyattan önce yazılı olarak teyit ediyoruz.",
            },
            {
                soru: "Makaslı platform mu, eklemli bom tipi mi — FOD hacminde hangisi tercih edilmeli?",
                cevap:
                    "Çalışma noktası sabitse ve düşey erişim yeterliyse makaslı platform genellikle tercih sebebidir; sepet tabanı geniş, dikey kararlılığı yüksek ve tekerlek izi daha öngörülebilirdir — bu da FOD sayımını kolaylaştırır. Çalışma noktası engelin arkasında veya yandaysa (örneğin bir tezgâhın üstünden geçip arkasına ulaşmak gerekiyorsa) eklemli bom tipi makine gerekir; ancak bu tip makineler FOD hacimlerinde daha sıkı bir sayım rejimi gerektirir çünkü bom hareketli parça sayısı daha fazladır. Kararı, çalışma noktasının fotoğrafına bakarak veriyoruz.",
            },
            {
                soru: "Operatörümüzün tesisin yüklenici onayından geçmesi gerekiyor mu?",
                cevap:
                    "Çoğu tedarikçi tesisinde evet, ve bu süreç birkaç gün sürebilir. Bu yüzden operatör kararını erken vermenizi öneriyoruz: kısa süreli bir işse, sepeti kullanacak yeterlilik belgeli kendi personelinizin makineyi kullanması genellikle daha hızlı başlar çünkü dışarıdan giren tek kişi sürücü olur. Uzun süreli veya sık makine hareketi gerektiren işlerde operatörlü kiralama daha güvenli ilerler; operatörümüzün belgesini ve kimlik bilgisini teklif aşamasında elektronik olarak iletip onay sürecini teslimatla paralel yürütüyoruz.",
            },
            {
                soru: "Sivrihisar'daki bir enerji işletme binasında makaslı platform çalışabilir mi?",
                cevap:
                    "Çalışabilir; buradaki tek şart zeminin sabit olmasıdır — beton veya sıkıştırılmış zemin makaslı platform için yeterlidir, gevşek toprak veya çakıl zeminde dikey kararlılık için tercih edilmez ve bu durumda arazi tipi bir makine önerilir. İşletme binası içi aydınlatma değişimi, kontrol panosu erişimi veya raf üstü bakım gibi sabit noktalı, dar ölçülü işlerde makaslı platform bom tipi makinelerden daha pratik sonuç veriyor. Zemin durumu net değilse teklif öncesi bunu netleştiriyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir'in havacılık-savunma tedarik zinciri kamuya açık genel bilgidir; FOD (yabancı madde) rejimi, gizlilik/refakat uygulaması ve mesleki yeterlilik belgesi zorunluluğu sektör pratiği ve mevzuattan gelir. Firma adı ve rakam uydurulmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Eskişehir'de Gizlilik Kısıtlı Tesislere Manlift Kiralama",
        giris:
            "Manlift, Eskişehir'in tedarikçi hollerinde makaslı platformun ulaşamadığı yerlere gitmek için kullanılır — bir tezgâhın arkasına, bir kanal döşemesinin üstüne, bir çelik konstrüksiyonun köşesine. Eklemli veya teleskopik kolun sağladığı bu yanal erişim, aynı zamanda FOD (yabancı madde) rejimi açısından ek bir dikkat ister: kol hareketli olduğu için sepetin gideceği yol, sabit bir makaslı platforma göre daha geniş bir alanı kapsar ve bu alanın tamamı yabancı madde kontrolüne dahil edilir. Eskişehir'de manlift teslimatını planlarken önce kolun çalışma yarıçapı içinde kalacak üretim ekipmanı, raf veya kablo tesisatı olup olmadığını soruyoruz; sonra makinenin kendisinin temizlik ve gizlilik protokolüne nasıl uyacağını. Bazı tesislerde bu iki soru birbirine bağlıdır — kolun geniş hareket alanı, kısıtlı bir hacimde ancak dar bir koridordan girip sabit bir noktada açılarak çözülür. Sivrihisar tarafında ise manlift farklı bir işe yarar: rüzgâr enerji santrali direklerinin çevresindeki aydınlatma ve kablo işleri, hangar tipi yapıların yüksek noktalarına erişim gibi geniş açık alan işlerinde tercih edilir — orada FOD değil, rüzgâr ve zemin taşıması belirleyicidir.",
        maddeler: [
            {
                baslik: "Kolun hareket yarıçapı FOD kontrolüne dahildir",
                metin:
                    "Manliftte sepet tek bir nokta üzerinde durmaz; kol açıldıkça sepet geniş bir yay çizer ve bu yayın geçtiği her nokta yabancı madde riski taşır. Bu yüzden FOD hacimlerinde iş öncesi sadece sepetin değil, kolun tüm hareket yarıçapının altındaki alan da örtüyle kapatılır veya boşaltılır. Kol menzilindeki raf, kablo kanalı veya asma taşıyıcı önceden tespit edilir; gerekirse çalışma açısı bunlara çarpmayacak şekilde sınırlandırılır. Bu planlamayı teklif aşamasında, tesisin krokisi veya fotoğrafı üzerinden yapıyoruz.",
            },
            {
                baslik: "Hidrolik eklem sayısı fazla, sızıntı kontrolü daha titiz",
                metin:
                    "Manliftin eklemli veya teleskopik kolu, makaslı platforma göre daha fazla hidrolik bağlantı noktası içerir ve her ek nokta potansiyel bir sızıntı riskidir. FOD rejimi uygulanan hacimlere giriş öncesi tüm hidrolik bağlantılar tek tek gözle kontrol edilir, en küçük damlama şüphesinde makine değiştirilir. Sepet ve kol yüzeyi girişten önce silinir, tekerlek ve şasi altı temizlenir. Akülü tahrikli manlift modelleri bu rejimde standart tercih; içten yanmalı model FOD hacimlerine hiç teklif edilmez.",
            },
            {
                baslik: "Dar girişten geniş çalışma alanına: iki aşamalı erişim",
                metin:
                    "Tedarikçi tesislerinde sıkça karşılaştığımız senaryo şudur: kapı ve koridor dar, ama çalışma noktası geniş bir hacmin ortasında ve yüksekte. Bu durumda teleskopik gövdesi kapalıyken dar profile inen bir manlift seçilir; makine dar koridordan geçer, açık alana ulaştığında kol ve teleskopik gövde açılarak hedefe erişir. Bu iki aşamalı yaklaşım, tek parça geniş bir makine yerine dar bir makineyle geniş bir işi çözmemizi sağlıyor.",
            },
            {
                baslik: "Refakat ve gizlilik: kol hareketi görünürlüğü artırır",
                metin:
                    "Manlift kolu açıldığında makine, sabit bir platforma göre tesisin daha geniş bir bölümünü görüş alanına alır — bu da kamera ve fotoğraf kısıtı olan hacimlerde ayrı bir dikkat gerektirir. Operatörün ve varsa refakatçinin, kol açıkken görüş alanına giren ekipman veya süreçle ilgili hiçbir görsel veya yazılı not almaması, tesisin gizlilik taahhüdünün standart bir maddesidir. Bu taahhüdü sevkiyat öncesi imzalıyoruz ve ekibimize iş başı brifinginde ayrıca hatırlatıyoruz.",
            },
            {
                baslik: "Sivrihisar'da manlift: rüzgâr ve zemin taşıması öncelikli",
                metin:
                    "Kırsal ve enerji sahalarında manliftin önceliği FOD değil, açık alan koşullarıdır. Rüzgâr enerji santrali direkleri çevresinde aydınlatma ve kablo işlerinde kol menzili geniş olduğu için arazi tipi, geniş tekerlekli manlift tercih edilir; zemin sıkıştırılmış toprak veya stabilize ise bu makine güvenle ilerler. Rüzgâr hızı sepet kullanımının üretici sınırını aştığında çalışma durdurulur — bu yüzden kırsal manlift işlerinde teklifi esnek gün planıyla veriyoruz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre manlift sınıfı",
                paragraflar: [
                    "Aşağıdaki tablo, Eskişehir'de manlift talep eden dört farklı saha profilini ve bunlara göre önerdiğimiz makine sınıfını gösterir. FOD veya gizlilik rejimi olan hacimlerde kol menzili ve gövde temizliği öncelikli, açık alan işlerinde ise zemin taşıması ve rüzgâr sınırı öncelikli değerlendirilir.",
                ],
                tablo: {
                    basliklar: ["Saha profili", "Erişim ihtiyacı", "Öncelikli kısıt", "Uygun manlift"],
                    satirlar: [
                        ["Havacılık parça üretim hattı", "Tezgâh arkası / yüksek nokta", "FOD, kol menzili planı", "Akülü teleskopik, dar profil"],
                        ["Çelik konstrüksiyon montaj sahası", "Köşe ve alt yüzey erişimi", "Sızıntısız hidrolik", "Akülü eklemli"],
                        ["Kurumsal/gizlilik odalı tesis", "Geniş hacimde nokta erişim", "Cihaz ve kamera yasağı", "Akülü, sessiz"],
                        ["Sivrihisar rüzgâr enerji sahası", "Direk çevresi aydınlatma/kablo", "Rüzgâr sınırı, zemin taşıması", "Arazi tipi teleskopik"],
                    ],
                },
            },
            {
                baslik: "Teklif öncesi kol menzili için sorduğumuz beş soru",
                paragraflar: [
                    "Manlift teklifinde makaslı platforma göre bir soru daha ekliyoruz: çalışma noktasının zeminden yüksekliği, makinenin park edeceği noktadan hedefe yatay uzaklık, kolun geçeceği güzergâhta engel olup olmadığı, tesisin FOD/gizlilik rejimi ve cihaz kısıtı olup olmadığı, en dar giriş noktasının ölçüsü. Beşinci soru — kol güzergâhındaki engel — manlift teklifine özgüdür ve genellikle en çok atlanan maddedir; bir kroki veya birkaç fotoğrafla bu riski baştan kapatıyoruz.",
                    "Bu bilgi eksik geldiğinde sahada karşılaştığımız en sık sorun, kolun hedefe ulaşırken bir raf veya kablo kanalına yaklaşmak zorunda kalmasıdır. Bu durumda ya çalışma açısı sınırlanır ya da makine değiştirilir; ikisi de teslimat gününde zaman kaybettirir.",
                ],
            },
            {
                baslik: "Operatörlü kiralama: manliftte neden daha sık tercih edilir",
                paragraflar: [
                    "Manliftin kol kontrolü, makaslı platformun düz yükselişine göre daha fazla dikkat ister — özellikle FOD hacimlerinde kol menzilini sınırlarken. Bu yüzden Eskişehir'deki tedarikçi tesislerinde manlift işlerinin büyük bölümünü operatörlü olarak yürütüyoruz. Operatörümüz hem makinenin sınırlarını hem tesisin FOD ve gizlilik kurallarını bilir, kol açısını menzildeki engellere göre kendisi ayarlar. Kısa süreli ve deneyimli personeliniz olan işlerde operatörsüz seçenek de sunuyoruz; kararı iş süresi ve tesisin onay süresine göre birlikte veriyoruz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Manliftin kolu açıldığında FOD kontrolü nasıl yapılıyor?",
                cevap:
                    "Kolun tüm hareket yarıçapı, sepetin kendisi kadar kontrole dahildir. İş öncesi kolun ulaşacağı en geniş noktayı belirliyoruz ve bu alanın altını örtüyle kapatıyor veya taşınabilir ekipmanı geçici olarak uzaklaştırıyoruz. Kol menzilindeki sabit ekipman (raf, kablo kanalı, taşıyıcı) tespit edilip çalışma açısı buna göre sınırlandırılır. Sepete alınan alet ve sarf malzemesi, makaslı platformdaki gibi liste üzerinden sayılır ve iş sonunda tekrar sayılır. Bu planlama teklif aşamasında bir kroki veya fotoğraf üzerinden yapılıyor, sahada doğaçlama yapılmıyor.",
            },
            {
                soru: "Manlift mi, makaslı platform mu — dar bir kapıdan geniş bir hacme erişim için hangisi?",
                cevap:
                    "Kapı dar ama hedef geniş bir hacmin ortasında ve yüksekteyse manlift genellikle tek çözümdür, çünkü teleskopik gövdesi kapalıyken dar bir profile iner ve içeri girdikten sonra açılıp hedefe ulaşır. Makaslı platform ise sepet genişliği sabit olduğu için bu tip iki aşamalı erişimde kullanılamaz. Buna karşılık hedef sabit bir noktadaysa ve engel yoksa makaslı platform hem daha kararlı hem genellikle daha ekonomik seçenektir. Kararı çalışma noktasının konumuna göre veriyoruz.",
            },
            {
                soru: "Hidrolik sızıntı riski manliftte neden daha önemli?",
                cevap:
                    "Manliftin eklemli veya teleskopik kolu, makaslı platforma göre daha fazla hidrolik bağlantı noktası taşır — her eklem, silindir ve hortum bağlantısı ayrı bir sızıntı ihtimalidir. FOD hacimlerinde bir damla hidrolik yağ bile üretim sürecini durdurabilecek bir kontaminasyon sayılabilir. Bu yüzden girişten önce tüm bağlantılar tek tek gözle kontrol edilir ve en küçük damlama şüphesinde makine hemen değiştirilir, riske girilmez. Bu kontrol her manlift teslimatında, tesisin kendi FOD formu olsun olmasın standart olarak uygulanır.",
            },
            {
                soru: "Gizlilik taahhüdü olan bir tesiste manlift operatörü ne kadar bilgiye erişiyor?",
                cevap:
                    "Kol açıldığında makine, sabit bir platforma göre daha geniş bir alanı görüş açısına alır ve bu, gizlilik taahhüdünün ayrıca vurguladığı bir noktadır. Operatörümüz ve varsa refakatçi, kol çalışırken görüş alanına giren hiçbir ekipman, süreç veya belgeyle ilgili not, fotoğraf veya sözlü paylaşım yapmaz; bu kural iş başı brifinginde ayrıca hatırlatılır. Cihaz kısıtı olan hacimlerde ekibimiz zaten telefon ve kamera taşımadan sahaya girer. Taahhüt metnini sevkiyattan önce imzalıyoruz, kapıda ayrıca imza gerekmiyor.",
            },
            {
                soru: "Manlift kolunun menzili tesisimizdeki rafa çarpar mı, nasıl önlüyorsunuz?",
                cevap:
                    "Bunu teklif aşamasında önlüyoruz, sahada değil. Sizden çalışma noktasının bir fotoğrafını veya krokisini istiyoruz; bu görsel üzerinden kolun hedefe ulaşmak için izleyeceği yol ile çevredeki raf, kablo kanalı veya taşıyıcı arasındaki mesafeyi değerlendiriyoruz. Mesafe dar görünüyorsa iki seçenek sunuyoruz: daha kısa kollu ve dar profilli bir manlift veya farklı bir yaklaşım açısı. Bilgi netse teklif tek seferde kesinleşiyor; sahada anlık karar vermek hem güvenlik hem tesis ekipmanı açısından riskli olduğu için bundan kaçınıyoruz.",
            },
            {
                soru: "Sivrihisar'daki rüzgâr santrali direği çevresinde manlift ile çalışılabilir mi?",
                cevap:
                    "Çalışılabilir, ancak burada belirleyici olan kol menzili değil rüzgâr ve zemindir. Direk çevresindeki aydınlatma veya kablo işlerinde arazi tipi, geniş tekerlekli bir manlift tercih ediyoruz çünkü zemin genellikle sıkıştırılmış toprak veya çakıldır. Rüzgâr hızı üreticinin belirlediği sepet kullanım sınırını aştığında çalışma anında durdurulur; bu yüzden kırsal manlift işlerinde bir ana gün, bir de yedek gün belirliyoruz. Direk yakınında yüksek gerilim hattı varsa güvenlik mesafesi ayrıca netleştirilir ve bu mesafe çalışma planına dahil edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eskişehir'in havacılık-savunma tedarik zinciri ve Sivrihisar'ın rüzgâr enerjisi altyapısı kamuya açık genel bilgidir; FOD (yabancı madde) rejimi, hidrolik güvenlik kontrolü ve gizlilik/refakat uygulaması sektör pratiği ve İSG mevzuatından gelir. Firma adı ve rakam uydurulmamıştır.",
    },
};

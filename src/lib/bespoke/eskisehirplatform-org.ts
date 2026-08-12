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
};

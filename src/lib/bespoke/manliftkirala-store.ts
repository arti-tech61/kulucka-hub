// ═══════════════════════════════════════════════════════════════════════════
// manliftkirala.store — ELLE YAZILMIŞ İÇERİK
//
// Profil: Konya Selçuklu-Karatay sanayi bölgesinde tarım makineleri ve gıda
// sanayi tesisleri için manlift kiralama.
// Açı: İMALATÇI GÖZÜ — platformu bir bakım aracı olarak değil, imalatın
// kendi istasyonlarında kullanılan bir üretim ekipmanı olarak ele alır:
// kaynaklı imalat ve montaj kızakları, kumlama-boyahane kabinleri, büyük
// gövde parçalarının üst yüzeyi, sac-pres holleri, sevk ve teşhir hazırlığı;
// gıda kolunda un-bulgur-bakliyat işletmelerinin dikey akış hatları.
//
// ⚠️ Kardeş domain konyaplatform.net aynı ilçelerde YAZILI (selcuklu,
// karatay, konya-osb, meram, eregli) ama açısı ağır hizmet + Konya yereli.
// O dosyadaki anlatım, tablo ve SSS kurgusu burada TEKRARLANMAZ; bu sayfalar
// tesis bakımına değil, imalat sürecine bakar.
//
// Simetri: h1 → giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Tesis adı, marka ve rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALA_STORE: Record<string, BespokeIcerik> = {
    "bolge:konya-osb": {
        h1: "Konya OSB'de İmalat Hattı İçin Manlift Kiralama",
        giris:
            "Bir tarım makinesi imalatçısı platform aradığında, aslında tavandaki bir armatürü değiştirmek istemez; kendi ürününün üstüne çıkmak ister. Konya Organize Sanayi Bölgesi'ndeki hollerde römork kasası, tank gövdesi, silaj makinesi şasesi, gübre dağıtıcısı haznesi gibi parçalar montaj kızağına alındığında yerden iki-üç metre yükselir ve o andan itibaren her cıvata, her kaynak dikişi, her hortum bağlantısı bir erişim problemine dönüşür. Atölyelerin bu soruna verdiği geleneksel cevap belli: tahta seyyar merdiven, kaynakçının kendi yaptığı boru iskele, hatta çoğu zaman ürünün üstüne doğrudan basmak. Manlifti imalatçı gözüyle anlatan bir sayfa yazmamızın nedeni tam olarak budur — biz bu makineleri Konya OSB'ye tesis bakımı için değil, üretim istasyonunun bir parçası olarak veriyoruz. Bu sayfada gövde üstü montajdan kumlama kabinine, pres holünden sevk öncesi son kontrole kadar imalatın hangi adımında hangi sınıfın işi kolaylaştırdığını, sepetin hangi donanımla donatılması gerektiğini ve parti üretimi yapan bir işletmenin kiralamayı neden gün değil dönem üzerinden kurması gerektiğini anlattık.",
        maddeler: [
            {
                baslik: "Gövde üstü çalışma: ürünün kendisi bir yükseklik kaynağıdır",
                metin:
                    "İmalatta yükseklik binadan değil üründen gelir. Kızağa alınmış bir kasa gövdesi, tank ya da büyük hazne, üst yüzeyine ulaşmak isteyen montajcıyı üç metre yukarı çeker ve o yüzeyin üstünde saatlerce çalışılır: kapak menteşesi ayarı, üst dikiş kaynağı, sensör ve hortum güzergâhı, korkuluk montajı. Sepetli erişimin buradaki asıl kazancı yükseklik değil duruştur — montajcı ürüne basmadan, elleri serbest, aletleri yanında ve gövdeye istediği açıdan bakabildiği bir konumda çalışır. Ürünün boyalı ya da ince saclı yüzeyine basılmaması, hem işçi güvenliğini hem yüzey kalitesini aynı anda kurtarır; bu iki kazancın toplamı, imalatçının platformu neden kalıcı ekipman gibi kullandığını açıklar.",
            },
            {
                baslik: "Kumlama ve boyahane bölümünde kabin içi erişim",
                metin:
                    "Yüzey hazırlığı bölümü, atölyenin en kısıtlı hacmidir: kumlama kabini ve boya kabini kapalı, filtreli ve ölçüsü belli hacimlerdir; içeriye giren her ekipman kapı açıklığından ve iç yükseklikten geçmek zorundadır. Büyük gövdeler kabine alındığında üst yüzeyin kumlanması ve boyanması operatörü yukarı çıkarır ve burada geniş şaseli hiçbir makine iş göremez. Bu bölümün doğal ekipmanı, kapı ölçüsüne sığan kompakt akülü sınıftır; kabin havalandırması çalışırken egzozlu makine zaten söz konusu değildir. İkinci konu temizliktir: boya kabinine giren makinenin dışarıdan toz ve yağ taşımaması, o gün boyanan partinin yüzey kalitesini doğrudan belirler — bu yüzden boyahaneye gidecek makineyi ayrı hazırlarız.",
            },
            {
                baslik: "Sac işleme ve pres holünde kalıp üstü kalemler",
                metin:
                    "Pres ve büküm holü, imalatçının erişim ihtiyacını en az beklediği ama en sık yaşadığı yerdir: pres gövdesinin üst kotundaki yağlama noktaları, kalıp bağlama cıvataları, üst tabla çevresindeki koruma sacları ve sac besleme hattının üstündeki kılavuz düzenleri, hepsi makine tepesinde bir çalışma noktası üretir. Bu noktalara çoğu atölyede presin kendi gövdesine tırmanılarak çıkılır. Kompakt makaslı bir platform, presin yan tarafına yanaşıp aynı işi tabana basmadan bitirir. Bu holde dikkat edilen tek şey, çalışma alanının sac istifleme ve tezgâh arası taşıma güzergâhıyla kesişmemesidir; kalıp taşıyan bir transpalet ile yükselmiş sepetin aynı koridoru paylaşması kabul edilmez.",
            },
            {
                baslik: "Montaj hattında istasyondan istasyona ilerleme",
                metin:
                    "Seri montaj yapan atölyelerde iş, tek bir noktada değil hat boyunca dizilmiş istasyonlarda ilerler ve erişim ihtiyacı her istasyonda birkaç dakikalıktır. Bu ritimde sabit iskele kurmak anlamsızdır; hat boyunca ilerleyebilen, kısa mesafeleri sepet yukarıdayken sürüş moduyla kat eden bir makine, ekibin temposuna ayak uydurur. Uygulamada makine hattın bir ucundan başlar, istasyon sırası neyse onu izler ve gün içinde defalarca konum değiştirir. Bu kullanım biçimi, platformun günlük çalışma saatinin neden bakım işlerine kıyasla çok yüksek olduğunu ve neden akü kapasitesinin sınıf seçiminde ilk kritere dönüştüğünü de açıklar.",
            },
            {
                baslik: "Sevk öncesi son kontrol, dekal ve ambalaj",
                metin:
                    "Ürün boyanıp montajı bittikten sonra atölyenin son adımı sevk hazırlığıdır ve bu adım tamamen üst yüzey işidir: kalite kontrolcünün üstten bakması, dekal ve etiketlerin hizalanarak yapıştırılması, koruyucu bandın çekilmesi, brandanın örtülmesi ve nakliye bağlantı noktalarının kontrolü. Bu kalemlerin ortak özelliği, artık ürüne dokunulmaması gereken bir aşamada yapılmalarıdır — boyalı yüzeye basmak, çizmek ya da ayak izi bırakmak bu noktada doğrudan yeniden işlem demektir. Sepetten çalışıldığında ürünle temas yalnızca elin dokunduğu yerde kalır. Sevk sahası çoğu atölyede yarı açık olduğu için burada zemin ve rüzgâr da hesaba katılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İmalat istasyonuna göre sınıf ve sepet donanımı",
                paragraflar: [
                    "Aşağıdaki tablo, bir tarım makinesi atölyesinin gün içinde ürettiği erişim ihtiyaçlarını istasyon istasyon ayırıyor. Amacımız, talep alırken sorduğumuz soruları önceden cevaplamanız — istasyonunuzu bulduğunuzda sınıf tartışması büyük ölçüde biter.",
                ],
                tablo: {
                    basliklar: ["İmalat istasyonu", "Erişim yüksekliği", "Uygun sınıf", "Sepet düzeni"],
                    satirlar: [
                        ["Kaynaklı gövde kızağı", "3-6 m", "Kompakt akülü makaslı", "Alet askısı, kaynak battaniyesi"],
                        ["Kumlama / boya kabini", "3-5 m", "Dar şase akülü", "Temiz makine, örtülü tekerlek"],
                        ["Pres ve büküm holü", "4-7 m", "Akülü makaslı", "Yağlama seti için taşıma tablası"],
                        ["Seri montaj hattı", "3-6 m", "Sürüş yetenekli akülü", "Yüksek kapasiteli akü"],
                        ["Sevk ve teşhir sahası", "4-9 m", "Eklemli akülü / dizel", "İz bırakmayan lastik"],
                    ],
                },
            },
            {
                baslik: "Seyyar merdivenden sepete geçen atölyede ne değişiyor",
                paragraflar: [
                    "Konya OSB'de görüştüğümüz atölyelerin çoğunda erişim işi hâlâ seyyar merdiven ve doğaçlama iskele ile yürüyor. Bu düzenin görünen maliyeti sıfırdır ama görünmeyen üç kalemi vardır: montajcının aleti aşağıda unutup her seferinde inip çıkması, tek elini merdivene vermek zorunda kaldığı için işin iki katı sürmesi ve düşme riskinin her gün yeniden alınması. Sepetli çalışmada bu üçü birden ortadan kalkar — alet sepette durur, iki el işe kalır ve korkuluk sabit güvenliktir.",
                    "İkinci fark iş kalitesindedir. Merdivenden ulaşılan bir kaynak dikişi, ulaşılabildiği açıdan yapılır; sepetten ulaşılan dikiş, doğru açıdan yapılır. Ürünün üst yüzeyinde çalışan bir ekibin gün sonunda ne kadar yeniden işlem çıkardığı, bu farkın en dürüst ölçüsüdür. Atölyesinde bir hafta deneme kiralaması yapan işletmelerin çoğunun dönemsel kullanıma geçmesinin nedeni de teoride değil, o haftanın sonunda tutulan kayıtta yatıyor.",
                ],
            },
            {
                baslik: "Parti üretimi yapan atölyede kiralama süresi nasıl kurulur",
                paragraflar: [
                    "İmalatçının iş temposu düz değildir: sipariş partisi açıldığında hat haftalarca dolu çalışır, parti kapandığında atölye yavaşlar. Platform ihtiyacı da bu eğriyi izler. Bu yüzden imalat müşterilerimizde gün bazlı çağrı yerine parti süresine bağlı dönemsel kiralama kuruyoruz — makine partinin başında gelir, hat boyunca kullanılır ve parti kapanınca çıkar. Günlük tarifeyle kurulan bir kullanımda aynı süre çok daha pahalıya gelir, üstelik her çağrıda nakliye yeniden ödenir.",
                    "Kurulumun tek şartı takvimin baştan konuşulmasıdır: partinin kaç hafta süreceği, hattın kaç vardiya çalışacağı ve makineyi kaç kişinin kullanacağı belli olduğunda sınıf, akü kapasitesi ve bakım ziyareti takvimi birlikte planlanır. Belirsiz süreyle başlayan kiralamalarda ise makine ya erken çıkar ya gereğinden uzun kalır; ikisi de imalatçının kârından gider.",
                ],
            },
        ],
        sss: [
            {
                soru: "Ürünlerimizin üstünde çalışıyoruz, tavanda işimiz yok; yine de platform mantıklı mı?",
                cevap:
                    "En mantıklı olduğu yer tam olarak burasıdır. Tavan işi yılda birkaç kez çıkar, ürün üstü çalışma ise her gün tekrarlanır — yani platformun getirisi bakım işinde değil, imalatın kendisinde birikir. Kızağa alınmış bir gövdenin üst yüzeyinde çalışan montajcı, sepetten baktığında ürüne basmaz, aletini yanında taşır ve iki elini işe verir. Bize kaç metre gerektiğini sorarken ürünün kızak üstündeki toplam yüksekliğini söyleyin, bina yüksekliğini değil; sınıf seçimini buna göre yaparız ve çoğu atölyede sonuç, düşündüğünüzden küçük bir makinedir.",
            },
            {
                soru: "Boya kabinimizin kapısı dar; içeri girecek bir makine bulunur mu?",
                cevap:
                    "Bulunur ama ölçüyü kabin kapısından almamız gerekir, hol kapısından değil — atölyelerde en sık yapılan hata budur. Kabin kapısının net eni, net yüksekliği ve varsa eşik kotu bize ulaştığında dar şase akülü sınıfın hangi modelinin sığacağını kesin söyleriz. İkinci soru iç yüksekliktir: kabin tavanı, sepet yükseldiğinde çarpma noktasıdır ve makinenin kapalı yükseklik değeri kadar açık yükseklik sınırı da hesaba girer. Üçüncüsü temizliktir; boya kabinine gidecek makineyi ayrı hazırlar, tekerlek yüzeylerini temizler ve dışarıdan toz taşımasını engelleriz.",
            },
            {
                soru: "Kaynak işini sepetin içinden yapabilir miyiz?",
                cevap:
                    "Yapılabilir ama düzeni baştan kurmak şartıyla. Sepetten kaynak, çapak ve kıvılcımın hidrolik hortumlara, kablo demetine ve sepet tabanına düşmesi anlamına gelir; bu yüzden koruyucu battaniye serilir, hortum güzergâhı kıvılcım yönünden kaçırılır ve iş bitiminde yangın gözlemi yapılır. Kaynak makinesinin sepete alınacak ağırlığı da sepetin taşıma kapasitesine dahildir — iki kişi, alet ve kaynak ekipmanı toplandığında sınır zorlanabilir. Kaynak yapılacağını talep aşamasında söyleyin; hem uygun kapasiteli sınıfı seçelim hem koruma setini makineyle birlikte gönderelim.",
            },
            {
                soru: "Atölyemizde makineyi birden çok montajcı kullanacak; sorun olur mu?",
                cevap:
                    "Olmaz, ama iki şartla. Birincisi kullanacak herkesin ilgili sınıf için yeterlilik belgesinin bulunmasıdır; imalat atölyelerinde makine gün içinde el değiştirdiği için bu, kâğıt üstünde kalan bir formalite değil gerçek bir gerekliliktir. İkincisi teslim eğitiminin ekibin tamamına verilmesidir — kumanda, acil indirme, şarj düzeni ve günlük kontrol tek kişiye anlatılıp bırakılmaz. Vardiyalı çalışıyorsanız her vardiyadan en az bir kullanıcının eğitime katılmasını isteriz. Bu düzen kurulduğunda makinenin gün içinde birkaç istasyon dolaşması hiçbir sorun çıkarmaz.",
            },
            {
                soru: "Sipariş partimiz üç hafta sürecek; günlük mü aylık mı kiralamalıyız?",
                cevap:
                    "Üç haftalık kesintisiz kullanımda dönemsel kiralama neredeyse her senaryoda öne geçer: nakliye tek sefere iner, makine partinin ritmine göre sahada bekler ve montajcı ihtiyaç duyduğu dakikada erişime sahip olur. Günlük çağrı modeli ancak ihtiyaç gerçekten seyrekse, örneğin haftada bir günü geçmiyorsa anlamlıdır. Karar için partinin süresini, günlük kaç saat kullanacağınızı ve vardiya düzeninizi söylemeniz yeterli; iki modelin toplamını yan yana koyarız. Deneyimimiz, hattın açık olduğu her günde kullanılan bir makinede dönemsel kurgunun tartışmasız kazandığı yönünde.",
            },
            {
                soru: "Makineyi imalat holünde bırakacağız; şarj ve bakımı kim yapacak?",
                cevap:
                    "Şarj sizin düzeninize yerleşir, bakım bizde kalır. Şarj için hol içinde uygun bir priz noktası belirleriz — vardiya sonunda makinenin oraya çekilmesi, ertesi gün tam kapasiteyle başlaması demektir; iki vardiya çalışan atölyelerde ara şarj penceresini birlikte planlarız. Periyodik bakım, yağ-filtre kontrolü ve arıza müdahalesi bizim sorumluluğumuzdadır ve dönemsel kiralamalarda saha ziyaretiyle yapılır, makine atölyenizden çıkarılmaz. Kullanıcı tarafına düşen tek şey günlük gözle kontrol ve hasar bildirimidir; erken söylenen küçük bir belirti, partinin ortasında yaşanacak duruşu önler.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Konya'nın tarım makineleri üretimindeki yeri genel geçer sektör bilgisidir; istasyon eşlemesi, sepet donanımı ve parti üretimine bağlı kiralama kurgusu saha deneyimimize dayanır. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "bolge:selcuklu": {
        h1: "Selçuklu'da İmalatçı ve Teşhir Sahaları İçin Manlift Kiralama",
        giris:
            "Selçuklu, imalatçı gözünden bakıldığında iki işin aynı ilçede buluştuğu yerdir: ürünün geliştirildiği ve ürünün gösterildiği yer. Bir yanda prototip atölyeleri, kalıphaneler ve az sayıda üretilen özel donanımların hazırlandığı küçük ölçekli imalat birimleri; öte yanda ana arterler boyunca uzanan bayi ve teşhir sahaları, servis noktaları, satış binaları. Bu ikilinin platform ihtiyacı, seri üretim holündekinden farklıdır — burada iş partiler hâlinde değil, tek tek ürünler üzerinde ilerler ve çoğu zaman bir teslim tarihine, bir açılışa ya da bir fuar takvimine bağlıdır. Prototipin üst gövdesinde yapılan bir revizyon ile teşhire çıkacak makinenin üstündeki son dekal işi, teknik olarak birbirine benzese de aciliyeti ve saha koşulları bakımından ayrışır. Bu sayfada, tek ürün üzerinde çalışan atölyelerin erişim düzenini, teşhir ve fuar hazırlığının kendine özgü kurallarını ve tarih baskısı altında çalışan bir imalatçının kiralamayı nasıl kurgulaması gerektiğini anlattık.",
        maddeler: [
            {
                baslik: "Prototip ve tek ürün atölyelerinde değişken erişim",
                metin:
                    "Seri üretimde erişim noktaları tekrarlanır; prototipte her gün başkadır. Tasarım henüz oturmadığı için gövde bugün üç metrede, yarın parça eklendiğinde dört buçukta biter ve montajcı aynı noktaya bir hafta içinde farklı açılardan ulaşmak zorunda kalır. Bu belirsizlik, sabit iskele kurmayı baştan anlamsız kılar. Prototip atölyesinin doğal ekipmanı, hızlı konum değiştirebilen ve sepeti dar alanda döndürebilen kompakt sınıftır. Deneyimimiz, bu atölyelerde makinenin günün büyük bölümünde açık durduğu ve kullanıcının onu bir tezgâh gibi benimsediği yönünde; sınıf seçerken kot kadar manevra yarıçapını da bu yüzden sorarız.",
            },
            {
                baslik: "Teşhir sahasında ürün üstü son işler",
                metin:
                    "Bayi ve teşhir alanlarına çıkan makinelerin üstünde her zaman son bir iş listesi kalır: koruyucu bandın alınması, dekal ve fiyat etiketinin hizalanması, kabin camlarının temizliği, üst yüzey rötuşu ve satış sonrası eklenen aksesuar montajı. Bu işler açık alanda, çoğu zaman parke veya beton zeminli bir teşhir sahasında yapılır ve ürünler yan yana dizili olduğu için makinenin aralarından geçmesi gerekir. Burada belirleyici olan yükseklik değil, sepetin komşu ürüne çarpmadan uzanabilmesidir — eklemli sınıfın kırılarak yaklaşabilmesi, dar dizilmiş bir teşhir sahasında makaslı sınıfa göre belirgin üstünlük sağlar.",
            },
            {
                baslik: "Fuar ve tanıtım takvimine bağlı işler",
                metin:
                    "Tarım makinesi üreticisinin yılı, fuar ve tanıtım takvimiyle bölünür ve bu takvim esnemez. Fuara çıkacak ürünün hazırlığı — üst gövde rötuşu, tanıtım giydirmesi, stand üstü asma malzemelerin montajı, yükleme öncesi son kontrol — genellikle son haftaya sıkışır ve bu haftada erişim ekipmanının gecikmesi doğrudan tarih kaçırmak demektir. Bu tip taleplerde çalışma biçimimiz farklıdır: tarih kesinleştiği anda makineyi rezerve eder, hazırlık haftasının tamamını kapsayan bir kullanım penceresi açarız. Fuar hazırlığı için son iki güne bırakılan çağrılarda dürüst cevabımız çoğu zaman müsaitlik durumunu olduğu gibi söylemek olur.",
            },
            {
                baslik: "Servis noktalarında büyük makinenin üstünde bakım",
                metin:
                    "Selçuklu'daki servis ve yedek parça noktalarında iş, imalatın tersinden yürür: sökülür, onarılır, geri toplanır. Kabin sökümü, üst hidrolik hat müdahalesi, depo ve hazne temizliği gibi kalemler yine ürünün üst kotunda geçer ve servisçi çoğu zaman makinenin kendi basamaklarına tırmanarak çalışır. Sepetli erişimin buradaki katkısı, sökülen parçanın kontrollü indirilebilmesi ve iki kişinin aynı anda aynı noktaya bakabilmesidir. Servis sahalarında dikkat ettiğimiz nokta zemindir: yağ dökülmüş beton, tekerlek tutuşunu düşürür ve çalışma noktası altındaki bölgenin temizlenmesi standart şartımızdır.",
            },
            {
                baslik: "Arter üstü satış binalarında cephe ve tabela kalemleri",
                metin:
                    "İmalatçının kendi binası da bir iş kaynağıdır: satış ofisinin cephesi, ürün fotoğrafı çekilen duvar yüzeyleri, giriş kanopisi, aydınlatma ve tabela düzeni. Bu kalemler tesis bakımı gibi görünse de imalatçı için markanın vitrinidir ve genellikle bir teşhir yenilemesiyle aynı takvime bağlanır. Arter üstünde çalışıldığında saha düzeni kaldırım ve otopark kullanımına göre kurulur; müşteri trafiğinin yoğun olduğu saatler dışına alınan çalışma hem güvenli hem hızlı biter. Bu işleri, teşhir sahasındaki ürün hazırlığıyla aynı güne dizmek, sahaya gelen makinenin gününü verimli doldurmanın en pratik yoludur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tek ürün üzerinde çalışan sahalarda iş tipi ve öncelik",
                paragraflar: [
                    "Selçuklu'daki talepler, seri hat mantığından çok tek ürün ve tek tarih mantığıyla gelir. Aşağıdaki tablo bu işleri aciliyet ve saha koşuluna göre ayırıyor; hangi sütunda olduğunuzu bilmek, rezervasyonu ne kadar önceden yapmanız gerektiğini de söyler.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Saha", "Tarih baskısı", "Öne çıkan özellik"],
                    satirlar: [
                        ["Prototip gövde revizyonu", "Kapalı atölye", "Düşük, kayabilir", "Dar alanda manevra"],
                        ["Teşhir öncesi son işler", "Açık teşhir sahası", "Orta", "Eklemli uzanma"],
                        ["Fuar hazırlığı", "Atölye ve yükleme", "Yüksek, esnemez", "Erken rezervasyon"],
                        ["Servis ve söküm", "Yarı açık servis holü", "Değişken", "Yağlı zemin önlemi"],
                        ["Bina cephesi ve tabela", "Arter üstü", "Düşük", "Trafik dışı saat"],
                    ],
                },
            },
            {
                baslik: "Teşhir sahasında ürünü koruyarak çalışmak",
                paragraflar: [
                    "Teşhir sahasında en pahalı hata, satılacak ürüne verilen küçük bir hasardır: bir çizik, bir ezik ya da lastik izi, o makineyi rötuşa geri gönderir. Bu yüzden teşhir alanına giren platformu farklı hazırlarız — iz bırakmayan lastik, temizlenmiş tekerlek yüzeyi ve mümkün olan her yerde ürünlerin arasından değil, çevresinden dolaşan bir güzergâh. Sepet, komşu üründen güvenli mesafede konumlandırılır ve yaklaşma son santimlerde yavaş modda yapılır.",
                    "İkinci alışkanlığımız çalışma sırasının sahaya göre kurulmasıdır: sıkışık dizilmiş bir teşhir alanında, işi ürün ürün değil sıra sıra ilerletmek makinenin toplam manevra sayısını düşürür. Sahanızın yerleşimini gösteren birkaç fotoğraf, bu sıralamayı daha teklif aşamasında kurmamıza yeter ve gün içinde kaybedilen manevra dakikaları ortadan kalkar.",
                ],
            },
            {
                baslik: "Tarih baskılı işlerde rezervasyon nasıl çalışır",
                paragraflar: [
                    "Fuar, açılış ve teslim tarihine bağlı işlerde kiralamanın kritik kalemi fiyat değil kesinliktir. Bu tür taleplerde çalışma düzenimiz şudur: tarih netleştiğinde makine sınıfı belirlenir ve hazırlık penceresinin tamamı için rezerve edilir; pencerenin başında makine sahada olur, sonunda çıkar. Rezervasyon, işin bir gün kayması ihtimalini de kapsar — hazırlık takvimi son güne kurulduğunda en küçük gecikme telafisiz kalır.",
                    "Erken haber vermenin karşılığını açıkça söyleyelim: yoğun dönemlerde her sınıf her tarihte boşta olmaz ve tutamayacağımız bir günü söz vermeyiz. Fuar haftasına iki gün kala gelen taleplerde de elimizden geleni yaparız, ancak o noktada seçenek makine sınıfıyla değil, o gün müsait olanla sınırlıdır. Takviminizi paylaşmak, bu sınırla hiç karşılaşmamanın en basit yoludur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Prototip atölyemizde ürünün yüksekliği sürekli değişiyor; sınıfı neye göre seçelim?",
                cevap:
                    "Tek ürünün bugünkü haline göre değil, o proje boyunca ulaşacağı en yüksek noktaya göre. Prototipte gövde parça eklendikçe büyüdüğü için başta yeterli görünen bir sınıf, birkaç hafta sonra yetersiz kalır ve makine değişimi hem zaman hem nakliye kaybıdır. Bize projenin hedeflenen toplam yüksekliğini ve atölyedeki en dar geçiş ölçüsünü söyleyin; büyüme payını sınıfa baştan yazalım. Manevra yarıçapı da bu atölyelerde en az kot kadar önemlidir, çünkü makine gün içinde ürünün etrafında defalarca döner.",
            },
            {
                soru: "Teşhir sahamızda makineler sıkışık dizili; platform aralarına girer mi?",
                cevap:
                    "Girmesine gerek olmayabilir — çözüm çoğu zaman aradan geçmek değil, dışarıdan uzanmaktır. Eklemli sınıf, sahanın kenarına konumlanıp bomu kırarak komşu ürünlerin üstünden hedefe yaklaşır ve dar dizilimde manevra riski ortadan kalkar. Aradan geçmek zorunluysa ürünler arası net açıklığı ve sahanın zemin türünü bilmemiz gerekir. Teşhir alanına giren makineyi iz bırakmayan lastikle ve temizlenmiş tekerlek yüzeyiyle gönderiyoruz; satılacak üründe hasar riskini sıfıra yaklaştırmak, bu sahanın en temel kuralıdır.",
            },
            {
                soru: "Fuara hazırlanıyoruz, tarih kesin; makineyi ne zaman ayırtmalıyız?",
                cevap:
                    "Tarih kesinleştiği gün. Fuar hazırlığı esnemeyen bir takvimdir ve hazırlık işleri neredeyse her zaman son haftaya yığılır; aynı haftada birden fazla üretici benzer ihtiyaçla arayabilir. Rezervasyonu erken yapan, sınıfını kendisi seçer; geç arayan o gün müsait olanla çalışmak zorunda kalır. Bize fuar tarihini, hazırlığın kaç gün süreceğini ve yükleme gününü söyleyin; pencereyi baştan sona kapsayan bir kullanım planı kuralım. Tutamayacağımız bir tarih için söz vermeyiz, müsaitliği olduğu gibi bildiririz.",
            },
            {
                soru: "Servis holümüzün zemini yağlı; bu sahada çalışmak güvenli mi?",
                cevap:
                    "Önlem alınırsa güvenlidir, alınmazsa değildir. Yağ ve gres bulaşmış beton üzerinde tekerlek tutuşu düşer; yükselmiş sepetin altında kayma ihtimali kabul edilebilir bir risk değildir. Uygulamamız basittir: makinenin duracağı nokta ve yaklaşma güzergâhı iş öncesi temizlenir, temizlenemiyorsa çalışma noktası kuru bölgeye kaydırılır. Bu, çoğu serviste yarım saatlik bir hazırlıktır. Talep alırken zeminin durumunu sorarız ve gerekiyorsa temizlik şartını iş planına yazarız — sahaya vardığımızda gündeme gelen bir konu olmasını istemeyiz.",
            },
            {
                soru: "Hem atölyede hem teşhir sahasında işimiz var; tek makine ikisini de görür mü?",
                cevap:
                    "Çoğu durumda görür, ama karar iki koşula bakar: atölyedeki en dar geçiş ile teşhir sahasındaki en uzak uzanma. Atölye kapısı dar, teşhir sahası genişse tek makine ikisini birden karşılayamayabilir; bu durumda ya işi iki kısa kiralamaya böleriz ya da her iki koşulu da sağlayan bir eklemli sınıfa çıkarız. İki sahanın ölçülerini ve iş listelerini birlikte gönderin, tek makineyle iki makineli kurgunun toplamını karşılaştıralım. Aynı gün içinde iki sahayı dolaşan bir plan, nakliyeyi tek sefere indirdiği için genellikle öne geçer.",
            },
            {
                soru: "Ürünlerimiz açık sahada; rüzgârlı günlerde çalışabilir miyiz?",
                cevap:
                    "Yükseklik ve makine sınıfına bağlı olarak evet, ama sınırı üretici belirler ve o sınır aşıldığında çalışma durur — bu bir tercih değil, güvenlik kuralıdır. Açık teşhir ve yükleme sahalarında pratik yaklaşımımız, yüksek kotlu kalemleri günün rüzgârın zayıf olduğu dilimine yazmak ve rüzgâr sertleştiğinde ekibi kapalı alandaki işlere kaydırmaktır. Elinizde hem atölye hem saha kalemi varsa bu geçiş sorunsuz yapılır ve kiralanan gün boş geçmez. Gün planını kurarken bu esnekliği baştan hesaba katmanızı öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Selçuklu'nun bayi, servis ve teşhir yapılarını barındıran arter dokusu herkesçe gözlenebilir bir gerçektir; prototip atölyesi düzeni, teşhir sahası koruma pratiği ve rezervasyon kurgusu kendi çalışma biçimimizdir. Firma adı ve sayısal iddia yoktur.",
    },

    "bolge:karatay": {
        h1: "Karatay'da Yan Sanayi Atölyeleri İçin Manlift Kiralama",
        giris:
            "Tarım makinesi bir fabrikada bitmez; onlarca küçük atölyenin sırayla dokunduğu bir zincirin sonunda ortaya çıkar. Karatay, bu zincirin Konya'daki en yoğun halkasıdır: sac kesen, büken, kaynak yapan, kalıp açan, kabin döşeyen, boyayan ve parçayı ana imalatçıya yetiştiren fason atölyeler burada yan yana dizilir. Yan sanayi gözünden bakıldığında manlift ihtiyacı, büyük hollerdekinden bambaşka bir yerden doğar — burada sorun ürünün yüksekliği kadar atölyenin küçüklüğüdür. Tavan alçaktır, asma kat vardır, kapı dardır ve çalışma alanının yarısını zaten yarı mamul parçalar kaplar. Bir atölyenin platform kiralamaya karar vermesi çoğu zaman tek bir tetikleyiciyle olur: yetişmesi gereken bir parti, ulaşılamayan bir kaynak dikişi ve boru iskele kurmaya kalmayan zaman. Bu sayfa, dar atölyede sepetli çalışmanın nasıl kurulduğunu, fason teslim ritminin kiralamayı nasıl şekillendirdiğini ve komşu atölyelerin aynı makineyi paylaşarak maliyeti nasıl böldüğünü anlatıyor.",
        maddeler: [
            {
                baslik: "Alçak tavan, asma kat ve kapalı yükseklik meselesi",
                metin:
                    "Küçük atölyede kritik ölçü, makinenin çıkabildiği yükseklik değil, kapalıyken kapladığı yüksekliktir. Asma kat altından geçmesi, kapıdan girmesi ve tavana çarpmadan yükselmesi gereken bir makinede bu üç ölçü aynı anda tutmalıdır. Uygulamada en sık yaşanan aksama, ölçüsü yalnızca çalışma yüksekliğine göre seçilen bir makinenin atölyeye girdikten sonra tam yükselememesidir. Bu yüzden talep alırken üç sayı isteriz: kapı net yüksekliği, atölyenin en alçak tavan kotu ve ulaşılmak istenen noktanın kotu. Üçü elimize geldiğinde seçim tartışmasız çıkar ve kapıdan geri dönen makine diye bir kalem hiç doğmaz.",
            },
            {
                baslik: "Yarı mamul yığını arasında çalışma alanı açmak",
                metin:
                    "Fason atölyelerin ortak gerçeği, üretim alanının aynı zamanda stok alanı olmasıdır: kesilmiş saclar, bükülmüş profiller, boyaya bekleyen parçalar ve teslime hazır yığınlar zemini paylaşır. Platform bu ortama girdiğinde ilk iş, çalışma noktasının altında ve çevresinde makinenin dönebileceği bir boşluk açmaktır. Bunu iş öncesi hazırlık olarak plana yazarız çünkü sahada yapılan her yer açma dakikası kiralama saatinden gider. Pratik önerimiz, makine gelmeden önce güzergâhın işaretlenip boşaltılmasıdır; yarım saatlik bu hazırlık, dar atölyede çoğu zaman bir saatten fazla kazandırır.",
            },
            {
                baslik: "Kalıp, kabin ve büyük parça imalatında sepetli erişim",
                metin:
                    "Karatay atölyelerinin ürettiği parçaların çoğu, tek başına ayakta duran ve üstüne çıkılması gereken hacimlerdir: kabin iskeleti, hazne gövdesi, büyük kalıp blokları, silo elemanları. Bu parçalar tezgâha sığmadığı için doğrudan zemine kurulur ve üst dikişleri, kaynak sonrası taşlama ve montaj delikleri yerden üç-beş metrede kalır. Sepetten çalışıldığında ustanın parçaya tırmanması ortadan kalkar; bunun kalite tarafındaki karşılığı, taşlama ve dikiş işinin doğru açıdan yapılmasıdır. Parça üzerinde durarak yapılan işlerde en sık görülen hata, ulaşılan açının işin gerektirdiği açı olmamasıdır.",
            },
            {
                baslik: "Fason teslim ritmi ve kısa süreli kiralama",
                metin:
                    "Yan sanayinin takvimi ana imalatçının siparişine bağlıdır ve bu, atölyenin platform ihtiyacını darbeli hâle getirir: bir parti için üç gün yoğun kullanım, ardından iki hafta hiç ihtiyaç duymamak. Bu ritimde uzun dönemli kiralama boşa maliyettir; doğru kurgu kısa ve tekrarlanan kullanımdır. Düzenli çalıştığımız atölyelerde bunu bir çağrı düzenine bağlıyoruz: parti tarihi belli olduğunda makine o günlere ayrılır, iş bitince çıkar. Ana imalatçıdan gelen sipariş takvimini paylaşan atölye, makineyi ihtiyaç doğduğu gün değil, ihtiyaç doğmadan önce ayırtmış olur.",
            },
            {
                baslik: "Komşu atölyelerin makineyi paylaşması",
                metin:
                    "Aynı sokakta sıralanmış atölyelerin işleri çoğu zaman birbirine yakın tarihlere düşer ve tek atölyenin tek başına ödediği nakliye, üç atölye arasında bölündüğünde herkesin maliyeti düşer. Bu paylaşımı biz koordine ederiz: aynı bölgede biriken talepler tek sevkiyata bağlanır, makine sırayla atölyeleri dolaşır ve her işletme yalnız kendi kullandığı süreyi öder. Modelin tek şartı süre disiplinidir — ilk atölyenin işi uzarsa sıradaki bekler. Bu yüzden paylaşımlı günlerde her atölyenin iş tanımını ve tahmini süresini önceden alır, sıralamayı sokak düzenine göre kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dar atölyede ölçü kontrol listesi",
                paragraflar: [
                    "Küçük atölyelerde yaşanan aksamaların neredeyse tamamı eksik ölçüden doğar. Aşağıdaki liste, makine gelmeden önce elinizde olması gereken beş ölçüyü ve her birinin neyi belirlediğini gösteriyor. Bu beş sayı telefonda verildiğinde teklif ilk turda kesinleşir.",
                ],
                tablo: {
                    basliklar: ["Ölçü", "Nasıl alınır", "Neyi belirler"],
                    satirlar: [
                        ["Kapı net eni", "Kasa içinden kasa içine", "Makinenin girip giremeyeceğini"],
                        ["Kapı net yüksekliği", "Eşikten üst kasaya", "Kapalı yükseklik sınırını"],
                        ["En alçak tavan kotu", "Asma kat veya kiriş altı", "Yükselme sınırını"],
                        ["Hedef nokta kotu", "Zeminden çalışılacak noktaya", "Sınıf ve sepet payını"],
                        ["Serbest zemin alanı", "Çalışma noktası çevresi", "Manevra ve konumlanmayı"],
                    ],
                },
            },
            {
                baslik: "Boru iskele ile sepet arasındaki gerçek fark",
                paragraflar: [
                    "Karatay atölyelerinde yıllardır süren pratik, gereken yerde boru iskele kurmak ve iş bitince sökmektir. Bu yöntemin maliyeti kiralama bedeliyle karşılaştırıldığında ucuz görünür, ancak hesabın içine kurulum ve söküm saatleri girdiğinde tablo değişir: iki kişinin yarım günü kurulum, yarım günü söküm demektir ve bu süre boyunca atölyede o alan kullanılamaz. Kısa süren işlerde bu hazırlık, işin kendisinden uzundur.",
                    "İkinci fark hareket kabiliyetidir. İskele kurulduğu yerde durur; iş birkaç metre ötede devam edecekse yeniden kurulur. Sepet ise noktadan noktaya dakikalar içinde geçer. Parça üzerinde birden çok noktada çalışılan işlerde — ki fason atölyelerin işlerinin çoğu böyledir — bu tek başına gün içindeki verimi belirleyen kalemdir. Kararı verirken kiralama bedelini değil, iskelenin size kaç saate mal olduğunu hesaplayın.",
                ],
            },
            {
                baslik: "Küçük atölyede güvenliğin pratik karşılığı",
                paragraflar: [
                    "Dar atölyede risk yükseklikten çok sıkışıklıktan doğar: alçak kiriş, asılı kablo, tavana yakın havalandırma kanalı ve asma kat kenarı, sepet yükselirken çarpma noktasına dönüşür. Bu yüzden çalışma öncesi yükselme güzergâhı gözle taranır ve engeller işaretlenir; makinenin duracağı nokta buna göre seçilir. Bu tarama birkaç dakikadır ve dar atölyede en sık yaşanan hasar tipini — sepet üstü çarpmayı — doğrudan önler.",
                    "İkinci pratik kural, sepet altındaki alanın boş tutulmasıdır. Küçük atölyede herkes birbirinin dibinde çalışır ve yukarıdan düşen bir alet, aşağıdaki ustanın üzerine düşer. Çalışma alanının altına kimsenin girmemesi için basit bir işaretleme yeterlidir. Makineyi teslim ederken bu iki kuralı kullanıcıya gösteririz; kâğıt üstünde kalan bir prosedür değil, sahada bir dakikada uygulanan iki alışkanlıktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizin tavanı alçak; küçük bir makine bu işi görür mü?",
                cevap:
                    "Görür, ama seçimi çalışma yüksekliğine değil kapalı yüksekliğe bakarak yapmamız gerekir. Alçak tavanlı atölyede makinenin katlanmış hâldeki yüksekliği, kapıdan geçmesini ve tavana çarpmadan yükselmesini belirler. Bize kapı net yüksekliğini, en alçak tavan kotunu ve ulaşmak istediğiniz noktanın kotunu verin — bu üç sayıyla uygun modeli tereddütsüz söyleriz. Alçak tavan çoğu zaman engel değil, tam tersine küçük ve ekonomik bir sınıfın yeterli olması demektir; büyük makine ısrarı bu atölyelerde gereksiz maliyet üretir.",
            },
            {
                soru: "Atölyede yarı mamul yığını var; makine için yer açmamız gerekir mi?",
                cevap:
                    "Gerekir ve bunu makine gelmeden yapmanız kendi lehinizedir. Sepetli çalışma, makinenin çalışma noktasının altına yanaşabilmesini ve orada dönebilmesini ister; parça yığınları arasında bu boşluk yoksa açılana kadar geçen süre kiralama saatinizden gider. Pratik önerimiz, güzergâhı ve çalışma noktasını iş öncesi işaretleyip boşaltmanızdır. Ne kadar alan gerektiğini teklif aşamasında söyleriz — makine sınıfına göre değişir ve çoğu kompakt modelde düşündüğünüzden azdır. Hazırlığı yapan atölyede iş, aynı gün içinde belirgin biçimde erken biter.",
            },
            {
                soru: "Üç gün sürecek bir partimiz var; bu kadar kısa süre için kiralama yapılır mı?",
                cevap:
                    "Yapılır, yan sanayinin doğal kiralama süresi zaten budur. Fason atölyede ihtiyaç darbelidir: parti açılır, birkaç gün yoğun kullanılır ve kapanır. Uzun dönemli kiralama bu ritimde boşa maliyettir. Bizden isteyeceğiniz şey, parti tarihini mümkün olduğunca erken bildirmenizdir; tarih elimizde olduğunda makineyi o günlere ayırırız. Ana imalatçıdan gelen sipariş takvimini düzenli paylaşan atölyelerle çalışma biçimimiz neredeyse otomatiktir — parti tarihi gelir, makine o gün sahada olur, iş bitince çıkar.",
            },
            {
                soru: "Sokaktaki diğer atölyelerle aynı hafta işimiz var; birlikte kiralayabilir miyiz?",
                cevap:
                    "Kesinlikle ve bunu biz koordine ederiz. Aynı bölgede biriken talepleri tek sevkiyata bağlar, makineyi sokak düzenine göre atölye atölye dolaştırırız; her işletme yalnız kendi kullandığı süreyi öder ve nakliye katılımcılar arasında bölünür. Tek şartımız süre disiplinidir — her atölyenin iş tanımı ve tahmini süresi önceden netleşmezse sıradaki bekler. Komşularınızla anlaşıp tek telefonda hepinizin işini kaydettirin; sıralamayı ve gün planını çıkarmak bizim işimiz. Küçük işler için bu, tekil sevkiyata göre çok daha ekonomik bir yoldur.",
            },
            {
                soru: "Parçanın üstüne çıkarak çalışıyoruz; sepetten çalışmak neyi değiştirir?",
                cevap:
                    "İki şeyi: güvenliği ve iş kalitesini. Parça üzerinde durarak çalışan usta, dengesini korumak zorunda olduğu için yalnız ulaşabildiği açıdan müdahale eder ve aletini yanında taşıyamaz. Sepetten çalışıldığında konum serbesttir, iki el işe kalır ve alet askıda durur. Bunun somut karşılığı, kaynak dikişi ve taşlamada yeniden işlem oranının düşmesidir. Güvenlik tarafı ise tartışma götürmez: boyalı ya da yağlı bir gövde yüzeyi tutunma için tasarlanmamıştır. Bir haftalık deneme kullanımı, bu farkı anlatmaktan çok daha ikna edicidir.",
            },
            {
                soru: "Makineyi kullanacak personelimiz için belge şart mı?",
                cevap:
                    "Şart. Makineyi kullanacak kişinin ilgili ekipman sınıfı için geçerli yeterlilik belgesi bulunması gerekir; bu, bizim koyduğumuz bir şart değil, mevzuatın gereğidir. Küçük atölyelerde bu çoğu zaman gözden kaçar ve iş kazası hâlinde sonucu ağır olur. Belgeli personeliniz yoksa iki yolumuz var: operatörlü kiralama ya da uygun eğitimin alınmasını beklemek. Kısa süreli tek partilik işlerde operatörlü seçenek genellikle daha pratiktir ve toplam maliyeti çok değiştirmez. Teslimde ayrıca saha eğitimi verir, kumandayı ve acil indirmeyi birlikte gözden geçiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Karatay'ın yan sanayi ve fason atölye yoğunluğu ile Konya'nın tarım makineleri zincirindeki rolü genel geçer bilgidir; ölçü kontrol listesi, paylaşımlı sevkiyat ve atölye içi güvenlik alışkanlıkları kendi uygulamamızdır.",
    },

    "bolge:meram": {
        h1: "Meram'da Gıda Sanayi Tesisleri İçin Manlift Kiralama",
        giris:
            "Konya'nın tahılla kurduğu ilişki tarlada bitmez; ürün, ilin dört bir yanına yayılmış değirmen, bulgur işliği ve bakliyat eleme-paketleme tesislerinde işlenerek çuvala girer. Meram'ın kent dışına açılan çeperi, bu tesislerin yoğunlaştığı yerlerden biridir ve buradaki manlift ihtiyacı, metal atölyelerinden tamamen farklı bir mantıkla doğar. Gıda işleme tesisi dikey bir makinedir: ürün en üstteki elevatörle yukarı çıkarılır, elekten geçer, taşlardan ayrılır, kırılır ya da öğütülür ve kat kat aşağı inerek paketleme hattına ulaşır. Dolayısıyla bakım noktalarının çoğu tabanda değil, kat aralarında ve tepede bulunur — kovalı elevatör başlığı, aspiratör kanalı, elek asma noktası, sıyırıcı bandın üst tamburu. Buna bir de gıda tesisine özgü iki kısıt eklenir: hijyen ve organik toz. Bu sayfa, un-bulgur-bakliyat hattında çalışan işletmeler için erişim planının nasıl kurulduğunu, tozlu dikey hacimlerde hangi kuralların pazarlıksız olduğunu ve bakım penceresinin neden ürün akışına göre seçilmesi gerektiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Dikey akışın bakım noktaları nerede toplanır",
                metin:
                    "Değirmen ve eleme tesislerinde ekipman kat kat dizilir ve bakım ihtiyacı, ürünün yükseldiği hatta yoğunlaşır. Kovalı elevatörün üst başlığı, kayış gerginliği ve kova bağlantıları en üst kotta; aspiratör ve toz emiş kanalları tavan hattı boyunca; elek gövdelerinin askı ve amortisör bağlantıları ise kat aralarında bulunur. Bu noktaların ortak özelliği, tesisin merdiven ve platform düzeninden ancak kısmen erişilebilir olmalarıdır — sabit merdiven sizi kotun yanına getirir ama çalışılacak noktanın karşısına getirmez. Sepetli erişimin buradaki katkısı, işçiyi ekipmanın tam karşısına, doğru mesafeye ve doğru açıya yerleştirmesidir.",
            },
            {
                baslik: "Organik toz: yanıcı bir ortamda çalışmanın kuralı",
                metin:
                    "Un, kepek ve tahıl tozu, havada belirli yoğunluğa ulaştığında yanıcı bir ortam oluşturur ve bu, gıda tesislerinde çalışmanın en ciddiye alınması gereken konusudur. Pratik karşılığı nettir: bu hacimlerde kıvılcım üreten hiçbir işlem — taşlama, kesme, kaynak — ortam temizlenmeden ve tesisin kendi izin süreci işletilmeden yapılmaz. Platform tarafında da düzen bellidir; kapalı üretim hacimlerinde egzozlu makine kullanılmaz, akülü sınıf tercih edilir ve çalışma öncesi tozun yoğun biriktiği yüzeyler temizlenir. Bu şartları tesisin bize hatırlatmasını beklemeyiz; gıda hattında iş alırken ilk konuştuğumuz başlıklardan biridir.",
            },
            {
                baslik: "Hijyen zincirine giren bir ekipman olarak platform",
                metin:
                    "Ürünün açıkta aktığı bir hattın üstüne çıkan makine, artık sadece bir erişim aracı değil, hijyen zincirinin parçasıdır. Bu yüzden gıda tesisine gönderilen platformu ayrı hazırlarız: dışarıdan çamur ve yağ taşımaması için tekerlek yüzeyleri temizlenir, hidrolik bağlantılarda sızıntı kontrolü yapılır ve çalışma noktasının altına damlama önleyici serilir. Sepetteki her alet bağlanır, küçük parçalar kapalı kapta taşınır. İş bittiğinde alan tesisin kendi temizlik prosedürüne göre teslim edilir. Bu düzen, işletmenin talep etmesine bağlı değildir — açık hattın üstüne çıkan ekibin standart çalışma biçimidir.",
            },
            {
                baslik: "Paketleme ve çuvallama hattının üst kotları",
                metin:
                    "Tesisin son bölümü, ürünü torbaya ve çuvala indiren dolum hattıdır ve buranın erişim ihtiyacı diğer bölümlerden farklıdır: dolum hunileri, ağırlık kantarı bağlantıları, etiketleme ünitesi ve konveyör üstü yönlendiriciler, hattın hemen üzerinde ama görece alçak bir kotta durur. Burada kompakt makaslı sınıf yeterlidir; asıl kısıt hattın etrafındaki dar servis koridorlarıdır. Çalışma sırasında paketlenmiş ürün istifleri sepetin altında kalmamalı, dolum hattı ya durdurulmalı ya da çalışılan kesit boşaltılmalıdır. Bu bölümde işlerin temizlik duruşuna yazılması, hem hijyen hem verim açısından en pratik yoldur.",
            },
            {
                baslik: "Silo ve dış hatlarda mevsim ve alım trafiği",
                metin:
                    "İşletmenin kapalı hacminden çıkıp dışarı bakıldığında iş, silo gövdeleri, dış elevatör kuleleri, boşaltma çukuru üstü kapaklar ve saha aydınlatmasına döner. Bu kalemlerin planında belirleyici olan alım trafiğidir: ürün girişinin yoğun olduğu dönemde kantar önü ve boşaltma sahası araç doludur, platformun konumlanacağı yer kalmaz. Doğru zamanlama, alım yoğunluğunun düştüğü dönemdir; zorunlu hâllerde çalışma günün araç trafiğinin seyreldiği dilimine alınır ve saha yönlendiricisiyle birlikte yürütülür. Dış işlerde ikinci değişken rüzgârdır ve yüksek kotlu kalemler günün sakin saatlerine yazılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda hattında bölüm bazlı erişim planı",
                paragraflar: [
                    "Aynı tesisin içinde bölümden bölüme hem kot hem kural değişir. Aşağıdaki tablo, un-bulgur-bakliyat hattında en sık çalıştığımız bölümleri ve her birinde belirleyici olan koşulu topluyor.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Tipik bakım kalemi", "Belirleyici koşul", "Uygun sınıf"],
                    satirlar: [
                        ["Elevatör ve kule hattı", "Başlık, kayış, kova bağlantısı", "Dikey ve dar hacim", "Kompakt akülü"],
                        ["Eleme ve temizleme katı", "Elek askısı, amortisör", "Kat arası kısıt", "Dar şase akülü"],
                        ["Öğütme ve kırma bölümü", "Aspiratör, kanal, filtre", "Yoğun organik toz", "Akülü, temizlik sonrası"],
                        ["Paketleme ve çuvallama", "Huni, kantar, etiketleme", "Hijyen ve dar koridor", "Kompakt makaslı"],
                        ["Silo ve dış saha", "Gövde, kapak, aydınlatma", "Alım trafiği, rüzgâr", "Eklemli bom"],
                    ],
                },
            },
            {
                baslik: "Bakım penceresini ürün akışı belirler",
                paragraflar: [
                    "Gıda işleme tesisinde bir bölümü durdurmak, o bölümü değil hattın tamamını durdurmak anlamına gelir; çünkü akış diziseldir — eleme durursa öğütme de boşa çalışır. Bu yüzden bakım planı, tek tek ekipmanlara göre değil, akış zincirine göre kurulur. Uygulamada bu şu demektir: aynı duruşta aynı hat üzerindeki bütün kalemler yapılır, farklı hatlardaki işler ayrı pencerelere yazılır. Kalemleri hat mantığıyla gruplayan bir işletme, yılda çok daha az duruşla aynı bakım listesini bitirir.",
                    "İkinci belirleyici, tesisin zaten planladığı temizlik ve periyodik duruşlardır. Bu duruşlarda hat boşalır, hijyen prosedürü zaten uygulanacaktır ve erişim işleri ek bir üretim kaybı üretmez. Yıllık bakım listesini bu duruşlara dağıtmak, gıda tesislerinde tanıdığımız en verimli planlama biçimidir. Duruş takviminizi paylaşın, kalemleri pencerelere biz dağıtalım.",
                ],
            },
            {
                baslik: "Toz yoğun hacimden dönen makineye ne yapılır",
                paragraflar: [
                    "Un ve kepek tozu aşındırıcı değildir ama yapışkandır: soğutma ızgaralarına, fan kanatlarına ve hidrolik bağlantı çevresine tutunur, zamanla ısınma ve performans kaybı üretir. Bu tesislerden dönen makinede temizlik ve filtre kontrolü rutine bağlıdır; bir sonraki müşteriye giden makine, önceki sahanın kalıntısını taşımaz. Bu, gıda tesisleri için ayrıca önemlidir — çünkü aynı hassasiyet ters yönde de geçerlidir ve size gelen makinenin başka bir sahadan ne taşıdığı, sizin hijyen zincirinizi ilgilendirir.",
                    "Uzun süreli kullanımlarda kullanıcı tarafına düşen basit bir rutin vardır: vardiya sonunda ızgara yüzeylerinin gözle kontrolü ve gerekiyorsa kuru temizliği. Birkaç dakikalık bu alışkanlık, tozlu hacimde çalışan bir makinenin arıza kaynaklı duruşunu belirgin biçimde azaltır. Teslimde bu rutini kullanıcı personele gösteririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Elevatör kulemizin üst başlığına ulaşmamız gerekiyor; sabit merdiven varken platform gerekli mi?",
                cevap:
                    "Sabit merdiven sizi kota çıkarır, çalışma pozisyonuna çıkarmaz — aradaki fark, bu tesislerde platform kiralanmasının başlıca nedenidir. Kayış gerginliği ayarı, kova bağlantısı ya da başlık sökümü gibi işlerde iki elin serbest olması ve gövdenin karşıdan görülebilmesi gerekir; merdiven basamağında bunların ikisi de mümkün değildir. Bize kulenin çalışılacak kotunu, çevresindeki serbest alanı ve iç mi dış mı çalışılacağını söyleyin. İç hacimde kompakt akülü, dış gövdede eklemli sınıf konuşulur ve seçim genellikle tek görüşmede netleşir.",
            },
            {
                soru: "Un tozu yoğun bir bölümde kaynak yapmamız gerekiyor; nasıl ilerlemeliyiz?",
                cevap:
                    "Ortam temizlenmeden ve tesisin kendi sıcak iş izin süreci işletilmeden bu işe başlanmaz — burada esnetilecek bir alan yoktur. Doğru sıra şudur: çalışma bölgesindeki toz birikimi temizlenir, mümkünse ilgili hat durdurulur ve havalandırılır, sıcak iş izni yazılı olarak alınır, yangın gözcüsü görevlendirilir ve söndürme ekipmanı çalışma noktasının yanında bulundurulur. Platform tarafında sepet altına koruyucu serilir ve hortum güzergâhı kıvılcım yönünden kaçırılır. Bu düzeni kurmayan bir sahada makinemizi çalıştırmayız; şartları teklif aşamasında yazılı iletiriz.",
            },
            {
                soru: "Paketleme hattımızın üstünde iş var; hattı durdurmak zorunda mıyız?",
                cevap:
                    "Zorunda kalmamanın yolu, işi zaten planladığınız temizlik duruşuna yazmaktır — hat boştur, hijyen prosedürü uygulanacaktır ve ek bir üretim kaybı doğmaz. Hat çalışırken zorunlu bir müdahale gerekiyorsa çalışılan kesit boşaltılır, sepet altına damlama önleyici konur, aletler bağlanır ve alan bariyerlenir; ancak bu riski azaltan bir düzendir, ortadan kaldıran değil. Açık ürünün üstünde serbest bırakılmış hiçbir parça kabul edilmez. Duruş takviminizi paylaşırsanız hangi kalemin hangi pencereye düştüğünü gösteren bir liste çıkarırız.",
            },
            {
                soru: "Tesisimiz eski ve kat araları dar; makine içeri sığar mı?",
                cevap:
                    "Sığması, çalışma yüksekliğinden çok kapalı yüksekliğe ve şase enine bağlıdır. Eski işliklerde kat araları alçak, servis koridorları dar olur ve bu iki ölçü doğru alınmadığında makine kapıdan girer ama bölüme ulaşamaz. Bize üç şey iletin: bölüm girişindeki en dar açıklık, kat arası net yükseklik ve çalışılacak noktanın kotu. Bu üçlüyle dar şase akülü sınıfın hangi modelinin uyacağını kesin söyleriz. Ölçü belirsizse birkaç fotoğraf da işimizi görür; sahaya yanlış sınıf göndermemek, ikimizin de kazandığı tek sonuçtur.",
            },
            {
                soru: "Alım döneminde silolarımızın dış bakımını yaptırabilir miyiz?",
                cevap:
                    "Teknik olarak mümkün ama verimli değil. Alım yoğunluğunda kantar önü ve boşaltma sahası araç doludur; platformun konumlanacağı yer kalmaz, çalışma sürekli beklemeye girer ve aynı iş sakin dönemde yarı sürede biter. Zorunlu kalemlerde kurgumuz, günün araç trafiğinin seyreldiği dilimlerinde ve saha yönlendiricinizle birlikte çalışmaktır. Kalıcı çözüm, silo ve dış hat işlerini yıllık planda alım dönemi dışına yazmaktır. Sezon takviminizi bize söyleyin; kalemleri doğru pencerelere yerleştirip tarih önerisiyle birlikte teklif verelim.",
            },
            {
                soru: "Makinenin hidroliğinden ürüne yağ damlaması riski var mı?",
                cevap:
                    "Bu riski sıfıra yaklaştırmak için üç katmanlı çalışırız. Birincisi hazırlık: gıda tesisine giden makine, sevkiyat öncesi sızıntı kontrolünden geçer ve tekerlek yüzeyleri temizlenir. İkincisi saha düzeni: açık hattın üstünde çalışılacaksa çalışma noktasının altına damlama önleyici tabla veya örtü konur, mümkün olan her durumda iş, hat boşken yapılır. Üçüncüsü kontrol: iş süresince çalışma noktasının altı gözle izlenir ve herhangi bir iz görülürse çalışma durdurulur. Gıda tesisinde bir bulaşma vakasının maliyeti, alınan bütün bu önlemlerin toplamından kat kat büyüktür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Konya çevresinde un, bulgur ve bakliyat işleyen tesislerin varlığı ile tahıl tozunun yanıcı ortam oluşturması sektör geneli teknik bilgidir; bölüm bazlı erişim planı, hijyen hazırlığı ve duruş penceresi dağıtımı kendi çalışma düzenimizdir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:eregli": {
        h1: "Ereğli'de Saha Montajı ve Devreye Alma İçin Manlift Kiralama",
        giris:
            "İmalatçının işi, ürün kamyona yüklendiğinde bitmez. Yem karma ünitesi, tahıl kurutma hattı, sulama pompa grubu ya da depolama ekipmanı gibi ürünler müşterinin sahasında kurulur, birbirine bağlanır ve ancak devreye alındıktan sonra teslim edilmiş sayılır. Konya Ereğli, ilin doğu ucunda kendi tarım ve işleme ekonomisini taşıdığı için bu tür saha montajlarının sık yapıldığı yerlerden biridir — ve montaj ekibi için burası, kendi atölyesinin konforundan çıkıp müşterinin sahasında çalıştığı yerdir. Elinin altında ne köprü vinç vardır, ne tanıdığı bir zemin, ne de ihtiyaç anında koşup getireceği bir ekipman. Bu sayfayı, atölyesinden çıkıp müşteri sahasında iş kuran ekipler için yazdık: montaj sırasının erişim ihtiyacını nasıl belirlediğini, ilin doğu ucuna gidecek bir makinenin sevkiyatının neden montaj takvimiyle birlikte planlanması gerektiğini ve devreye alma haftalarında sahada makine bulundurmanın neden her defasında yeniden çağırmaktan ucuza geldiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj sırası, erişim ihtiyacını belirler",
                metin:
                    "Saha montajında iş yukarıdan aşağı değil, aşağıdan yukarı ilerler: şase ve ayaklar kurulur, gövde oturtulur, bağlantı hatları çekilir ve en son üst kısımdaki kapak, sensör ve merdiven düzeni tamamlanır. Erişim ihtiyacı bu sıranın son üçte birinde patlar ve genellikle tam da montajın en sıkışık gününe denk gelir. Bu yüzden makine talebini montajın başında değil, montaj planı çıkarılırken belirlemek gerekir. Ekipten istediğimiz tek şey sıralı bir program ve nihai yüksekliktir; makineyi bu programın hangi gününde sahada olacağı belli şekilde ayırırız.",
            },
            {
                baslik: "Müşteri sahasında zemin ve konumlanma belirsizliği",
                metin:
                    "Atölyede zemin bellidir; müşteri sahasında değildir. Kurulum çoğu zaman yeni dökülmüş beton, sıkıştırılmış mıcır ya da tarla kenarı toprak üzerinde yapılır ve makinenin nereye basacağı, ancak sahaya varıldığında netleşir. Bu belirsizliği azaltmanın yolu, keşif fotoğrafıdır: kurulum noktasının ve çevresinin birkaç karesi, hangi sınıfın uygun olacağını ve yük dağıtma plakasına ihtiyaç olup olmayacağını önceden söyler. Yeni dökülmüş betonda beklenmesi gereken süre de bu aşamada konuşulur; erken sürülen ağır bir makine, müşterinin yeni zeminine kalıcı iz bırakır ve bu, montaj ekibinin en istemeyeceği başlangıçtır.",
            },
            {
                baslik: "Devreye alma haftalarının ani erişim talebi",
                metin:
                    "Kurulum bittikten sonra başlayan test ve ayar dönemi, erişim ihtiyacının en öngörülemez olduğu aşamadır: bir sensörün yeri değişir, bir hat sızdırır, bir kapak yeniden ayarlanır. Bu işlerin tamamı kısa sürer ama her biri yükseğe çıkmayı gerektirir ve ne zaman çıkacakları bilinmez. Bu dönemde her ihtiyaçta yeniden makine çağırmak, bekleme süresini işin kendisinden uzun hâle getirir. Uygulamada doğru olan, devreye alma penceresi boyunca makineyi sahada tutmaktır; günlük bedel işler ama bekleme ve tekrarlayan nakliye ortadan kalkar.",
            },
            {
                baslik: "Uzak sahaya çıkan ekibin hazırlık listesi",
                metin:
                    "İl merkezinden uzaktaki bir sahada eksik çıkan bir parça, aynı gün tamamlanamaz — bu, uzak saha çalışmasının değişmeyen kuralıdır. Bu yüzden Ereğli yönüne çıkan sevkiyatta kontrol listemiz daha uzundur: makinenin genel durumu, aküsü, aksesuarları, periyodik kontrol raporu ve saha giriş evrakı birlikte gözden geçirilir. Müşteri tesisinin kendi giriş prosedürü varsa belgeler sevkiyattan önce iletilir ve makine kapıda beklemez. Montaj ekibine önerimiz de aynıdır: sahada ihtiyaç duyulacak yardımcı ekipmanı yola çıkmadan listeleyin, çünkü buradaki yarım gün, merkezdeki yarım saatin karşılığıdır.",
            },
            {
                baslik: "Aynı yöndeki işleri tek çıkışta toplamak",
                metin:
                    "İlin doğu ucuna yapılan her sevkiyat, kendi başına bir organizasyondur ve tek bir montaj için kurulduğunda maliyeti yüksektir. Bu yüzden aynı yöne giden talepleri topluca değerlendirir, tarihleri birbirine yakın olan işleri tek çıkışta birleştiririz: bir montaj, bir devreye alma ziyareti ve ilçe merkezindeki kısa bir kalem aynı sevkiyatın içinde yer alabilir. Bu düzenden en çok, tarihini birkaç gün esnetebilen işletmeler kazanır. Sabit tarihli acil montajlarda tekil sevkiyat elbette yapılır; farkı baştan açık söyler, kararı müşteriye bırakırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj aşamasına göre erişim ihtiyacı",
                paragraflar: [
                    "Saha montajında makine ihtiyacı işin türünden çok aşamasına bağlıdır. Aşağıdaki tablo, tipik bir kurulumun aşamalarını ve her aşamada erişimin ne kadar öne çıktığını gösteriyor; kiralama penceresini bu tabloya bakarak kurmak, hem boş bekleyen makineyi hem yetişmeyen günü önler.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Tipik iş", "Erişim yoğunluğu", "Uygun kiralama"],
                    satirlar: [
                        ["Temel ve şase kurulumu", "Ayak, ankraj, hizalama", "Düşük", "Gerekmeyebilir"],
                        ["Gövde ve ünite yerleştirme", "Kaldırma, birleştirme", "Orta", "Gün bazlı"],
                        ["Hat ve tesisat bağlantısı", "Boru, kablo, tava", "Yüksek", "Haftalık"],
                        ["Üst donanım tamamlama", "Kapak, sensör, korkuluk", "En yüksek", "Haftalık"],
                        ["Devreye alma ve ayar", "Test, düzeltme, rötuş", "Değişken ve ani", "Sahada park"],
                    ],
                },
            },
            {
                baslik: "Sahada park modelinin hesabı",
                paragraflar: [
                    "Devreye alma döneminde en sık tartışılan konu, makineyi sahada tutmanın pahalı olup olmadığıdır. Hesabı basitleştirelim: her ayrı çağrıda nakliye yeniden ödenir ve makine gelene kadar ekip bekler. İki hafta süren bir devreye almada üç-dört çağrı olağandır ve bunların toplamı, aynı süre boyunca sahada bekleyen bir makinenin bedelini çoğu senaryoda geçer. Üstelik bekleme süresi montaj ekibinin gündelik maliyetiyle çarpıldığında fark daha da açılır.",
                    "Park modelinin şartı, makinenin geceleri güvenli biçimde bırakılabileceği bir alandır ve bu, müşteri sahasında çoğu zaman zaten vardır. Devreye alma takvimini paylaşan ekiplere iki senaryonun rakamını yan yana koyarız; karar, işin gerçekten kaç kez erişim gerektireceğine bakılarak verilir. Tek seferlik ve öngörülebilir bir ayar için park modeli gereksizdir, bunu da açıkça söyleriz.",
                ],
            },
            {
                baslik: "Montaj ekibiyle makine arasındaki iş bölümü",
                paragraflar: [
                    "Saha montajında makineyi kullanan, bizim operatörümüz değil çoğu zaman montaj ekibinin kendisidir ve bu, sorumlulukların baştan yazılmasını gerektirir. Düzenimiz nettir: periyodik bakım, mekanik arıza ve gerektiğinde ikame makine bize aittir; günlük kontrol, doğru kullanım ve hasar bildirimi kullanan ekibe. Makineyi kullanacak her montajcının ilgili sınıf için yeterlilik belgesi bulunması şarttır ve teslimde kumanda, acil indirme ve rüzgâr sınırı birlikte gözden geçirilir.",
                    "Uzak sahada bu ayrımın yazılı olması ayrıca önem taşır, çünkü bir tartışma çıktığında iki taraf da yüz yüze değildir. Teslim tutanağı, ara kontrol kaydı ve iade tutanağı üçlüsü makinenin durumunu belgeler; montaj ekibi değişse bile kayıt zinciri kopmaz. Bu belgeleri sözleşme ekinde veririz, sözlü mutabakatla bırakmayız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Müşterimizin sahasında kurulum yapacağız; makineyi biz mi kiralayalım, müşteri mi?",
                cevap:
                    "İkisi de mümkün ama montaj ekibinin kendi adına kiralaması genellikle daha pratiktir; çünkü kiralama süresi montaj takvimine bağlıdır ve takvim kaydığında süreyi uzatıp kısaltacak tarafın işi yürüten ekip olması işi hızlandırır. Müşterinin kiralaması, kurulum sonrası aynı makinenin tesis bakımında da kullanılacağı durumlarda mantıklıdır. Karar için montaj süresini, sahanın konumunu ve kurulum sonrası kullanım niyetini bize söyleyin; iki kurguyu da fiyatlandırıp farkı gösterelim. Sorumluluk ve belge düzeni her iki modelde de aynı şekilde yazılır.",
            },
            {
                soru: "Kurulum sahasının zemini yeni dökülmüş beton; makine sürebilir miyiz?",
                cevap:
                    "Betonun yaşına ve tasarım mukavemetine bağlıdır ve bu bilgiyi zemini döken taraftan almak gerekir — tahminle karar verilecek bir konu değildir. Erken sürülen ağır bir makine, müşterinizin yeni zemininde kalıcı iz bırakır ve bu, montajın en kötü başlangıcıdır. Beklenmesi gereken süre uygun değilse iki alternatifimiz var: yük dağıtma plakalarıyla çalışmak ya da daha hafif bir sınıfa geçmek. Kurulum noktasının fotoğrafını ve beton döküm tarihini iletin; hangi yolun uygun olduğunu sahaya çıkmadan söyleyelim ve gerekiyorsa tarihi birlikte kaydıralım.",
            },
            {
                soru: "Devreye alma iki hafta sürecek; makineyi bütün süre boyunca tutmak mantıklı mı?",
                cevap:
                    "İhtiyacın sıklığına bağlı, ama devreye alma dönemlerinde genellikle mantıklıdır. Bu haftalarda erişim ihtiyacı ani doğar ve kısa sürer; her seferinde makine çağırmak, ekibi bekleten ve nakliyeyi tekrarlayan bir modeldir. Üç-dört çağrının toplamı, aynı süre sahada bekleyen bir makinenin bedelini çoğu senaryoda geçer. Karar için testte kaç kez yükseğe çıkmayı beklediğinizi ve ekibinizin günlük maliyetini birlikte konuşalım. Tek seferlik, tarihi belli bir ayar söz konusuysa park modelini önermeyiz — o durumda gün bazlı çağrı daha doğrudur.",
            },
            {
                soru: "Ereğli'ye sevkiyat ne kadar sürer, aynı gün gelebilir misiniz?",
                cevap:
                    "Aynı gün mümkün olabilir ama bunu makine müsaitliğine bakmadan söz vermeyiz. Belirleyici olan mesafeden çok planlamadır: uygun sınıfın o an boşta olması, sevkiyat aracının müsaitliği ve müşteri sahasının giriş prosedürü süreyi belirler. Bu yüzden telefonda tahmin değil, gerçekçi bir saat veririz. Montaj işlerinde asıl önerimiz farklıdır: sevkiyatı montaj programıyla birlikte planlayın, makine ihtiyacın doğduğu gün değil, doğmadan bir gün önce sahada olsun. Bu tek alışkanlık, uzak sahada kaybedilen günlerin çoğunu ortadan kaldırır.",
            },
            {
                soru: "Montaj ekibimizde belgeli operatör yok; ne yapmalıyız?",
                cevap:
                    "İki seçenek var. Birincisi operatörlü kiralama: makineyi bizim yetkili operatörümüzle gönderiririz, montaj ekibi kendi işine odaklanır ve kullanım sorumluluğu bizde kalır. Uzak sahada ve kısa süreli kurulumlarda bu genellikle en pratik yoldur. İkincisi, ekipten en az bir kişinin ilgili sınıf için yeterlilik belgesini almasıdır; düzenli saha montajı yapan ekipler için bu kalıcı bir yatırımdır ve uzun vadede kendini karşılar. Hangi yolun size uyacağını yıl içinde kaç kurulum yaptığınıza bakarak konuşalım; ikisinin de maliyetini açıkça gösteririz.",
            },
            {
                soru: "Aynı bölgede birkaç müşterimize kurulum yapacağız; sevkiyat birleşir mi?",
                cevap:
                    "Birleşir ve uzak sahada en çok fark yaratan düzen budur. Aynı yöne giden montajların tarihleri birbirine yakınsa tek çıkışta toplanır: makine ilçeye gelir, kurulumları sırayla dolaşır ve tek dönüşle çıkar. Nakliye, katılan işlerin arasında bölünür. Tek şartımız, her kurulumun süresinin gerçekçi verilmesidir; ilk sahada uzayan iş sıradakini bekletir. Kurulum listenizi, adresleri ve tahmini süreleri birlikte gönderin — sıralamayı coğrafyaya göre kurar, birleşik sevkiyatın toplam rakamını tekil çıkışların toplamıyla karşılaştırarak gösteririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Ereğli'nin il merkezinden uzakta kendi tarım ve işleme ekonomisini taşıyan bir ilçe olması coğrafi bir gerçektir; montaj aşaması eşlemesi, sahada park hesabı ve uzak saha hazırlık listesi kendi çalışma pratiğimizdir. Müşteri, marka ve rakam adı geçmez.",
    },

    "bolge:ankara-osb-cevre-ili": {
        h1: "Ankara Sanayi Bölgelerine Konya'dan İmalat Odaklı Manlift Hizmeti",
        giris:
            "Bir tarım makinesi, tek bir ilde tamamlanmaz. Konya'daki bir imalatçının ürününde kullandığı hidrolik grup, elektrik panosu, kabin donanımı ya da özel işlenmiş parçanın önemli bölümü başka illerdeki tedarikçilerden gelir ve Ankara sanayi bölgeleri bu zincirin kuzey ucunda durur. Zincir çift yönlü işler: Konya'dan Ankara'ya parça ve montaj ekibi gider, Ankara'dan Konya'ya bileşen gelir. Manlift kiralama açısından bunun anlamı şudur — imalatçının erişim ihtiyacı kendi atölyesinin duvarlarında bitmez; tedarikçi sahasında yapılan bir kabul kontrolü, ortak yürütülen bir prototip denemesi ya da müşteriye kurulan bir ünitenin devreye alınması, aynı ihtiyacı başka bir ilde doğurur. Bu sayfa, iki il arasında iş yürüten imalatçılar ve montaj ekipleri için yazıldı: tedarikçi sahasında çalışmanın kendine özgü kuralları, iki yöne birden akan sevkiyatın nasıl birleştirileceği ve komşu ilde geçirilen bir günün nasıl planlanacağı burada anlatılıyor.",
        maddeler: [
            {
                baslik: "Tedarikçi sahasında çalışmanın farkı",
                metin:
                    "Kendi atölyenizde kural koyarsınız, tedarikçinin sahasında kurallara uyarsınız — bu basit fark, komşu ilde çalışmanın tamamını belirler. Giriş prosedürü, iş izni, çalışma saatleri ve İSG düzeni ev sahibi tesisin kurallarıdır ve makinenin de bu düzene uyması gerekir. Pratik karşılığı, evrakın önden hazırlanmasıdır: makinenin periyodik kontrol raporu, operatörün yeterlilik belgesi ve iş güvenliği kayıtları sevkiyattan önce iletilir. Ev sahibi tesisin ek talebi varsa baştan sorulur. Kapıda evrak bekleyen bir makine, komşu ilde yarım günü boşa harcamış demektir ve bu kayıp genellikle telafi edilemez.",
            },
            {
                baslik: "Kabul kontrolü ve ortak denemelerde erişim",
                metin:
                    "İmalatçının tedarikçi sahasında en sık yaptığı iş, kendi ürününe girecek bir bileşeni yerinde görmek ve denemektir: bir grubun bağlantı noktalarının kontrolü, monte edilmiş hâlde ölçü alınması, ortak yürütülen bir prototip denemesinde üst kotun izlenmesi. Bu işler kısa sürer ama üst yüzeye ulaşmayı gerektirir ve ev sahibi tesisin ekipmanı her zaman uygun olmayabilir. Yanında makinesiyle giden ekip, ev sahibinin planına bağlı kalmadan işini bitirir. Bu tür ziyaretlerde kiralamayı ziyaret süresine göre kurar, gerekiyorsa aynı çıkışta birden fazla tedarikçiyi programa dahil ederiz.",
            },
            {
                baslik: "İki yöne akan sevkiyatın birleştirilmesi",
                metin:
                    "İki il arasında zaten düzenli bir araç trafiği vardır: parça giden, bileşen gelen, ekip taşıyan. Makine sevkiyatını bu akıştan bağımsız planlamak, ödenmesi gerekmeyen bir maliyet üretir. Bu yüzden Ankara yönündeki talepleri topluca değerlendirir, tarihi esnek olan işleri aynı çıkışta birleştiririz. Birkaç günü aşan işlerde tekil sevkiyat zaten ekonomiktir; yarım günlük ziyaretlerde ise ortak çıkışı beklemek belirgin biçimde ucuza gelir. Hangisinin size uyduğunu işin süresine ve tarih esnekliğinize bakarak söyler, iki seçeneğin rakamını yan yana koyarız.",
            },
            {
                baslik: "Komşu ilde geçen günün planlanması",
                metin:
                    "Uzak sahada kaybedilen zaman, işin kendisinden değil aradaki boşluklardan doğar: kapıda geçen süre, yanlış sınıf makinenin geri dönmesi, eksik aksesuarın tamamlanamaması. Bu yüzden komşu ile çıkan bir sevkiyatta gün planı dakikayla değil, adımla kurulur — giriş, konumlanma, iş, kontrol ve çıkış. Her adımın kimin sorumluluğunda olduğu önceden yazılır. Ev sahibi tesisle bir gün önce yapılan kısa bir teyit görüşmesi, bu adımların çoğunu garanti altına alır. Bu hazırlık uzun görünse de, komşu ilde bir günü kurtarmanın en ucuz yoludur.",
            },
            {
                baslik: "Tanıtım, teşhir ve organizasyon işleri",
                metin:
                    "İmalatçının komşu ildeki işi her zaman teknik değildir; tanıtım organizasyonları, bayi açılışları ve teşhir düzenlemeleri de erişim ekipmanı ister. Büyük bir ürünün üstündeki tanıtım giydirmesi, asma pankart düzeni, stand üstü aydınlatma ve kurulum sonrası söküm işleri bu ailedendir. Bu işlerin ortak özelliği kesin tarih ve kısa süredir: bir açılış ertelenmez. Bu nedenle organizasyon işlerinde rezervasyon erken yapılır, makine bir gün önceden sahada bulunur ve kurulum-söküm penceresi tek kiralamada planlanır. Sökümün de aynı ekipmanla yapılacağını hesaba katmayan planlar, açılış sonrası ikinci bir sevkiyat maliyeti doğurur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Komşu ilde çalışma tipine göre planlama",
                paragraflar: [
                    "Ankara yönüne çıkan işleri süre ve tarih baskısına göre ayırmak, hangi sevkiyat modelinin uygun olduğunu doğrudan söyler. Aşağıdaki tablo bu ayrımı ve her tipin ön hazırlığını topluyor.",
                ],
                tablo: {
                    basliklar: ["Çalışma tipi", "Tipik süre", "Tarih esnekliği", "Uygun sevkiyat"],
                    satirlar: [
                        ["Tedarikçi kabul kontrolü", "Yarım gün", "Yüksek", "Ortak çıkış beklenir"],
                        ["Ortak prototip denemesi", "1-2 gün", "Orta", "Ortak çıkış veya tekil"],
                        ["Müşteride kurulum desteği", "Birkaç gün", "Düşük", "Tekil sevkiyat"],
                        ["Devreye alma ziyareti", "Değişken", "Düşük", "Sahada park"],
                        ["Açılış ve tanıtım kurulumu", "1-2 gün", "Yok", "Erken rezervasyonlu tekil"],
                    ],
                },
            },
            {
                baslik: "Evrak hazırlığı: kapıda kaybedilmeyen yarım gün",
                paragraflar: [
                    "Komşu ilde bir sahaya girmek, kendi atölyenize girmekten farklıdır ve fark neredeyse tamamen evraktadır. Standart setimizi sevkiyattan önce iletiriz: makinenin periyodik kontrol raporu, operatörün ilgili sınıf yeterlilik belgesi ve iş güvenliği eğitim kayıtları. Ev sahibi tesisin kendi giriş prosedürü — güvenlik brifingi, giriş kartı, koruyucu donanım denetimi — bunun üstüne eklenir ve ekibimiz bu prosedüre uyar.",
                    "Sizden istediğimiz, ev sahibi tesisin standart dışı bir belge talebi varsa bunu baştan bildirmenizdir. Bazı tesisler ek sigorta belgesi, taşeron kaydı ya da özel iş izni formu ister ve bunlar sevkiyat günü öğrenildiğinde makine kapıda bekler. Bir telefonla halledilecek bu soru, komşu ilde bir yarım günün karşılığıdır.",
                ],
            },
            {
                baslik: "İki ilde çalışan imalatçı için yıllık kurgu",
                paragraflar: [
                    "Yıl içinde komşu ilde düzenli işi olan imalatçılarla çalışma biçimimiz, tek tek çağrılar üzerinden değil yıllık bir çerçeve üzerinden yürür: hangi dönemlerde tedarikçi ziyareti, hangi dönemlerde kurulum ve devreye alma yoğunluğu olduğu baştan konuşulur ve sınıf ihtiyacı buna göre öngörülür. Bu çerçeve, yoğun dönemlerde makine bulma sorununu büyük ölçüde ortadan kaldırır.",
                    "Çerçevenin ikinci faydası fiyat öngörüsüdür: yıl boyunca yapılacak sevkiyatların yaklaşık sayısı bilindiğinde, ortak çıkışa uygun olanlar önceden işaretlenir ve toplam nakliye yükü düşer. Yıllık üretim ve tedarik takviminizi paylaşan işletmelere bu çerçeveyi yazılı sunarız; bağlayıcı bir taahhüt değil, ihtiyacı önceden görmeye yarayan bir plandır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tedarikçimizin sahasında yarım günlük bir kontrol yapacağız; makine göndermeniz mantıklı mı?",
                cevap:
                    "Tek başına gönderildiğinde nakliye, işin kendisinden pahalıya gelir — dürüst cevap budur. Bu tip kısa ziyaretlerde önerimiz ortak çıkışı beklemektir: aynı yöne giden başka bir sevkiyata eklenirsiniz ve nakliye payı bölünür. Tarihiniz esnekse bu genellikle birkaç gün içinde mümkün olur. Alternatif, ev sahibi tesisin kendi ekipmanını kullanmaktır; her zaman uygun olmasa da sormaya değer. Ziyaretin tarihini, süresini ve esnekliğini bize iletin, ortak çıkışla tekil sevkiyatın rakamını yan yana koyalım.",
            },
            {
                soru: "Ev sahibi tesis bizden belge istiyor; bunları siz mi sağlıyorsunuz?",
                cevap:
                    "Makineye ve operatöre ait olanları biz sağlarız: periyodik kontrol raporu, yeterlilik belgesi ve iş güvenliği eğitim kayıtları sevkiyattan önce e-posta ile iletilir. Ekibinize ait belgeler — sigorta kayıtları, taşeron dosyası, kişisel koruyucu donanım beyanı gibi — sizin tarafınızda kalır. Ev sahibi tesisin standart dışı bir talebi varsa mutlaka baştan bildirin; bazı sahalar özel iş izni formu ya da ek sigorta belgesi ister ve bu, sevkiyat günü öğrenildiğinde makineyi kapıda bekletir. Bir gün öncesinden yapılan teyit görüşmesi bu riski neredeyse tamamen kaldırır.",
            },
            {
                soru: "Ankara'daki müşterimize kurduğumuz ünitenin devreye alması sürüyor; her seferinde makine mi çağıralım?",
                cevap:
                    "Devreye alma dönemlerinde bu en pahalı modeldir. Ayar ve düzeltme ihtiyaçları ani doğar, kısa sürer ve tekrarlanır; her biri için ayrı sevkiyat hem nakliyeyi çoğaltır hem ekibinizi bekletir. Pencere boyunca makineyi sahada tutmak, üç-dört çağrının toplamının altında kalır ve bekleme süresi sıfırlanır. Şartı, makinenin geceleri güvenli bırakılabileceği bir alandır. Devreye alma takviminizi ve beklediğiniz erişim sıklığını söyleyin; park modeliyle çağrı modelinin toplamını çıkarıp hangisinin sizin işinize uyduğunu birlikte görelim.",
            },
            {
                soru: "Bayi açılışımız için kurulum yapılacak; tarih kesin, gecikme olur mu?",
                cevap:
                    "Açılış tarihleri ertelenmez, biz de bu işleri öyle planlarız: makine bir gün öncesinden sahada bulunur ve kurulum penceresinin tamamı için rezerve edilir. Rezervasyonu erken yapmanızı özellikle isteriz, çünkü açılış ve tanıtım işleri belirli dönemlerde yığılır ve yoğun tarihlerde her sınıf boşta olmaz. Bir de sık atlanan bir kalem var: söküm. Kurulumdan sonra pankart, giydirme ve aydınlatmanın indirilmesi de aynı ekipmanı ister; bunu baştan plana yazmayan organizasyonlar ikinci bir sevkiyat maliyetiyle karşılaşır. İki pencereyi tek kiralamada kurgulayalım.",
            },
            {
                soru: "İki il arasında yılda birkaç kez işimiz oluyor; her seferinde sıfırdan mı görüşeceğiz?",
                cevap:
                    "Gerek yok. Düzenli işi olan imalatçılarla yıllık bir çerçeve kuruyoruz: hangi dönemlerde tedarikçi ziyareti, hangi dönemlerde kurulum ve devreye alma yoğunluğunuz olduğu baştan konuşulur, sınıf ihtiyacı öngörülür ve ortak çıkışa uygun tarihler önceden işaretlenir. Bu, bağlayıcı bir taahhüt değil; ihtiyacı önceden görmeye ve yoğun dönemde makine bulamama riskini ortadan kaldırmaya yarayan bir plandır. Yıllık üretim ve tedarik takviminizi paylaşın; çerçeveyi yazılı çıkarır, her yeni iş için tekrar başa dönmeyelim.",
            },
            {
                soru: "Komşu ilde makine arızalanırsa iş durur mu?",
                cevap:
                    "Durmaması için riski baştan azaltırız: uzak sahaya çıkan sevkiyatta kontrol listesi daha kapsamlı uygulanır, makinenin genel durumu, aküsü ve aksesuarları ayrıntılı gözden geçirilir. Buna rağmen bir arıza olursa müdahale bize aittir ve işin kritikliğine göre ikame makine devreye girer. Kesin tarihli bir açılışta ya da duruş penceresine sıkışmış bir kurulumda çalışıyorsanız yedek planı baştan kurarız; bunun maliyeti, bir günlük gecikmenin karşılığından genellikle çok düşüktür. İşin kritiklik seviyesini bize söyleyin, planı ona göre kuralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Konya imalatının Ankara sanayi bölgeleriyle tedarik ilişkisi içinde olması sektör geneli bir gerçektir; evrak hazırlığı, ortak çıkış modeli ve yıllık çerçeve kurgusu kendi çalışma düzenimizdir. Tesis adı, marka ve rakam kullanılmamıştır.",
    },
    "bolge:busan-sanayi-sitesi": {
        h1: "Büsan Sanayi Sitesinde Yoğun Atölye Dokusunda Manlift Kullanımı",
        giris: "Karatay’daki Büsan Sanayi Sitesinde manlift planını zorlaştıran şey tek bir atölyenin içindeki hedef değil, dükkânların, mal kabul araçlarının, açık kapıların ve ortak geçişlerin birbirine çok yakın olmasıdır. Tarım makinesi parçası veya gıda ekipmanı imal eden küçük işletmelerde gövde üstü montaj, tavan aydınlatması, havalandırma ve iç tabela gibi işler kısa sürse de makinenin indirilmesi, sokağa yerleşmesi ve atölye içinde dönmesi ayrı bir çalışma ister. Bu sayfa belirli bir işletmenin prosesini varsaymaz; yoğun sanayi sitesi dokusunda kompakt manliftin adresler arasında güvenli biçimde hareketini, kapanış penceresini, ortak yol ayrımını ve imalat istasyonuna göre dikey ya da yanal erişim seçimini anlatır. Doğru sınıf en yüksek olan değil, atölyenin kapısından geçip komşu işletmenin akışını kesmeden hedefi kapatabilendir.",
        maddeler: [
            { baslik: "Ortak sokakta indirme saatini belirlemek", metin: "Taşıyıcı araç site yolunda uzun süre bekletilmez. Mal kabul ve müşteri trafiğinin seyrek olduğu saat, işletme ve komşularla önceden belirlenir; indirme alanı araç gelmeden boşaltılır. Platform indirildikten sonra taşıyıcı yol üzerinde bırakılmaz. Makine kendi yürüyüşüyle kısa mesafe ilerleyecekse sepet tamamen toplanır ve gözcü kavşak ile açık dükkân önlerini kontrol eder. Ortak yolun bariyerlenmesi yalnız bir işletmenin kararıyla yapılmaz; saha düzeni ilgili sorumlularla netleşir." },
            { baslik: "Dar kapıdan imalat istasyonuna rota", metin: "Kapının net eni ve yüksekliği, kepenk rayı, eşik, ilk dönüş ve tezgâh arası geçiş birlikte ölçülür. İçerideki malzeme arabaları rota dışına çekilir, zemindeki kablo ve parçalar temizlenir. Hedefin altında boş alan varsa kompakt makaslı, ürün gövdesi veya tezgâh engeli varsa kısa eklemli sınıf değerlendirilir. Büyük makineyi güvenli pay düşüncesiyle göndermek dar hacimde ters sonuç verir; dönüşü ve acil iniş koridorunu kapatabilir. Girişten hedefe kesintisiz rota doğrulanmadan sevkiyat yapılmaz." },
            { baslik: "İmalat gövdesi çevresinde temas etmeden çalışmak", metin: "Tarım makinesi veya gıda ekipmanı gövdesinin üst bağlantısına erişirken sepet ürüne yaslanmaz, boyalı ya da işlenmiş yüzeye basılmaz. Uzun parça ve ağır ekipman platformla kaldırılmaz; ayrı taşıma ve geçici sabitleme düzeni gerekir. Sepete yalnız kapasite içinde küçük malzeme alınır, aletler bağlanır. Kaynak veya taşlama varsa işletmenin sıcak iş prosedürü uygulanır ve komşu dükkâna kıvılcım taşınmayacak alan kurulmadan iş başlamaz. Platform erişim sağlar; imalat yöntemini onaylamaz." },
            { baslik: "Kısa işi vardiya sonuna hazırlamak", metin: "Bir armatür veya birkaç montaj noktası için tüm gün üretimi durdurmak yerine vardiya sonu penceresi kullanılabilir. İşletme hedefi, uygulayıcıyı, malzemeyi ve elektrik ya da hareket güvenliğini önceden hazırlar. Makine geldiğinde ölçü alınmaz veya parça aranmaz. Pencere içinde tamamlanamayacak ek kalemler ana işi riske atmaz; kayda alınarak başka güne bırakılır. İş sonunda alet ve parça sayılır, ürün çevresi temizlenir ve atölye sabah vardiyasına engelsiz teslim edilir." },
            { baslik: "Komşu dükkânların kısa taleplerini sıralamak", metin: "Aynı sokaktaki birkaç hazır iş, uygun makine sınıfı ortaksa tek programda kapanabilir. Her işletme kendi teslimini, sıcak iş iznini ve uygulayıcısını ayrı yürütür. Makine dükkânlar arasında tamamen toplanmış hâlde geçer; önceki alandan kir veya parça taşınmaz. Süre sınırı baştan yazılır ki ilk adresteki kapsam büyümesi sonraki kapanış penceresini tüketmesin. Ortak olan yalnız taşıma ve site içi rota verimidir, işletmelerin teknik sorumluluğu değildir." },
        ],
        ekBolumler: [
            { baslik: "Büsan’da adres ve erişim eşleşmesi", paragraflar: ["Yoğun site dokusunda hedef kadar kapı, sokak ve alt engel sınıfı belirler."], tablo: { basliklar: ["İş noktası", "Ana kısıt", "Sınıf", "Pencere"], satirlar: [["Boş tavan aksı", "Dar kapı", "Kompakt makaslı", "Vardiya sonu"], ["Gövde üstü", "Ürün engeli", "Kısa eklemli", "İstasyon boşken"], ["Pres yanı", "Tezgâh ve trafik", "Dar akülü", "Hat güvenliyken"], ["İç tabela", "Müşteri alanı", "Dikey", "Kapanış sonrası"], ["Dükkân önü", "Ortak yol", "Kompakt bomlu", "Mal kabul dışında"], ["Sıcak iş", "Kıvılcım", "Uygunluk teyitli", "Ayrı izinle"]] } },
            { baslik: "Site içi hareket kartı", paragraflar: ["Her adres için indirme noktası, kapı ölçüsü, içerideki ilk dönüş, hedef altı ve güvenli park yeri kısa bir kartta tutulur. Makine başka dükkâna geçeceğinde yeni kart açılır; önceki adresin ölçüsü komşu işyerine kopyalanmaz. Güncel fotoğraf, kapı önündeki araç veya malzeme değişikliğini gösterir.", "Kartta ayrıca uygulayıcı, teslim sorumlusu ve izin gerektiren işlem yazılır. Bu bilgi, kısa işlerin site içinde hızlı ama kontrolsüz olmayan biçimde sıralanmasını sağlar. Geçişe engel çıkan adres ertelenir, makine hazır olan diğer noktaya gider; ortak yol üzerinde bekletilmez." ] },
            { baslik: "Kompakt sınıfın gerçek sınırları", paragraflar: ["Dar gövde her hedefe ulaşmak anlamına gelmez. Makaslı yalnız dikey yükselir; sabit ürün veya tezgâh arkasında kalan hedef yatay uzanma ister. Eklemli sınıf engeli aşabilir fakat dönüş zarfı daha fazla alan gerektirebilir. İki değer katalogdan değil sahadaki ölçüyle karşılaştırılır.", "İç mekânda akülü ve temiz ünite tercih edilir. Zemin taşıması, çukur veya kapak ayrıca kontrol edilir. Küçük sınıf, uygunsuz zemini veya eksik alan ayırmayı telafi etmez. Doğru çözüm, bütün rota boyunca sınırları karşılayan en kompakt makinedir." ] },
        ],
        sss: [
            { soru: "Makine yoğun saatte Büsan’a indirilebilir mi?", cevap: "Mümkün olsa bile önermeyiz. Taşıyıcı için boş indirme alanı ve güvenli manevra gerekir. Mal kabulün seyrek olduğu saat belirlenir, alan önceden açılır ve araç indirme sonrası yolu boşaltır. Acil durumda bile ortak yolu habersiz kapatmayız." },
            { soru: "Kapımız dar, hangi ölçüleri göndermeliyiz?", cevap: "Net en-yükseklik, eşik ve kepenk rayı, kapıdan sonraki dönüş, en dar tezgâh arası ve hedef kot gerekir. Fotoğraf girişten hedefe rotayı göstermelidir. Yalnız kapı ölçüsü makinenin içeride döneceğini kanıtlamaz." },
            { soru: "Ürünün üstüne sepette kaynak yapılır mı?", cevap: "Tesisin sıcak iş izni, kıvılcım ayrımı ve yangın önlemleri sağlanırsa uygun erişimle değerlendirilebilir. Sepet ürüne yaslanmaz, alet ve küçük malzeme sabitlenir. Uzun veya ağır parça platformla kaldırılmaz. Koşullar yoksa sıcak iş yapılmaz." },
            { soru: "Komşu dükkânla ortak kiralama mümkün mü?", cevap: "Aynı sınıf iki işi güvenle karşılıyorsa mümkündür. Her adresin izni, teslimi ve süresi ayrıdır. Geçişte makine toplanır ve temizlenir. İlk işin kapsamı büyürse sonraki adres bekletilmeden yeni zaman bildirilir." },
            { soru: "Atölye çalışırken tavan işi yapılabilir mi?", cevap: "Çalışılan aks fiziksel olarak ayrılmış, hareketli ekipman güvenli ve alt alan boşsa bölüm bazlı plan kurulabilir; çoğunlukla vardiya sonu daha verimlidir. Personel veya ürün altında sepet yükselmez. Tesisin enerji-hareket prosedürü tamamlanır." },
            { soru: "En büyük makineyi istersek sorun çözülür mü?", cevap: "Hayır. Büyük şase kapıdan geçmeyebilir, içeride dönemeyebilir ve ortak yolu daha çok kapatır. Hedef kot, yatay engel ve rota ölçülerine uyan en kompakt sınıf seçilir. Yetersiz sınıf kadar gereğinden büyük sınıf da yanlış seçimdir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Büsan Sanayi Sitesinin Konya sanayi dokusundaki varlığı kamuya açık genel bilgidir; yoğun atölye alanında kompakt manlift rotası, vardiya penceresi ve çok adresli sıra firma saha pratiğidir. Tesis adı, özel proses, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:konya-yeni-sanayi-sitesi": {
        h1: "Konya Yeni Sanayi Sitesinde Küçük İmalatçılar İçin Kısa Süreli Manlift",
        giris: "Konya Yeni Sanayi Sitesindeki küçük imalatçının yüksekte işi çoğu zaman tek vardiyayı doldurmaz: bir gövdenin üst bağlantısı, birkaç tavan armatürü, kapı üstü mekanizma, havalandırma ağzı veya sevk öncesi ürün kontrolü. Bu ölçekte ekonomik sonuç, makineyi uzun süre kiralamaktan değil, iş listesini hazır etmekten, doğru kompakt sınıfı seçmekten ve kısa pencereyi kuruluma harcamamaktan gelir. Tarım makinesi ve gıda ekipmanı imalatıyla ilişkili bir atölyede ürün geometrisi değişebilir; belirli bir ürün veya tesis varsaymadan hedef altındaki engel, kapı, zemin ve malzeme yükü üzerinden karar veririz. Operatörlü kısa kullanım, işletmenin ayrı bir kullanım düzeni kurmadan erişim almasını sağlar; yine de tesisin enerji, sıcak iş ve çalışma alanı sorumluluğu aynen korunur. İşin birkaç saat sürmesi, teslim kontrolünü kısaltmaz: mevcut zemin durumu, makinenin fotoğrafı, uygulayıcı ekibin adı ve kapanışta açık kalan kalemler yine kayıt altına alınır. Kısa programın güvenilirliği tam da bu başlangıç ve bitiş disiplininden doğar.",
        maddeler: [
            { baslik: "Tek iş yerine hazır nokta listesi", metin: "Tek armatür için çağrı açmadan önce tavan, kapı üstü, kamera, menfez ve ürün üstü gerçek ihtiyaçlar aynı listede toplanır. Her hedef fotoğraf, yaklaşık kot ve alt engelle kaydedilir. Liste işi gereksiz büyütmez; aynı konumlanmadan kapanabilecek hazır kalemleri görünür kılar. Uygulayıcı ve malzeme makine gelmeden hazır olur. Eksik parça nedeniyle bitmeyen hedef, kısa kiralamayı uzatmak yerine başka pencereye yazılır. Bu disiplin nakliye ve operatör süresinden daha fazla sonuç alınmasını sağlar." },
            { baslik: "Dikey ve engel üstü işi ayırmak", metin: "Hedefin altına park edilebiliyorsa kompakt makaslı geniş sepetle hızlı çalışır. Ürün gövdesi, tezgâh veya pres araya giriyorsa kısa eklemli bom gerekir. Sepetten dışarı uzanarak sınıf farkı kapatılmaz. Aynı atölyede iki geometri varsa hangi grubun daha fazla kalemi kapattığı hesaplanır; gerekirse özel hedef başka güne ayrılır. Doğru sınıf seçimi yalnız yüksekliği değil, yatay mesafe ve içerideki dönüş zarfını birlikte kullanır." },
            { baslik: "Kısa süreli operatörlü kullanım", metin: "Küçük işletmede platformu seyrek kullanan personele makineyi bırakmak yerine operatörlü hizmet tercih edilebilir. Operatör manevra, yükselme ve acil inişi yönetir; uygulayıcı teknik işi yapar. Tesis, enerji ve hareket güvenliğiyle alt alan ayrımını sağlar. Görev sınırları teslimde yazılır. Operatör imalat kararını vermez veya ağır parçayı kaldırmaz. Kısa çalışma penceresinde bu iş bölümü, makineyi öğrenme süresini azaltırken sorumluluğu belirsizleştirmez." },
            { baslik: "Sepet yükünü küçük işte de hesaplamak", metin: "İki kişi, alet çantası ve küçük bağlantılar toplam kapasite içinde değerlendirilir. Uzun sac, panel, boru veya ağır gövde parçası platformla kaldırılmaz. Aletler bağlanır, küçük elemanlar kapalı kutuda taşınır. Ürüne basılmaz ve sepet gövdeye yaslanmaz. Birkaç dakikalık işte kapasite kontrolünü atlamak kabul edilmez; beklenmeyen yan yük makinenin dengesini etkileyebilir. Malzeme ikmali aşağıdan kontrollü yapılır ve sepette gereksiz stok tutulmaz." },
            { baslik: "Aynı gün içinde site turu", metin: "Hazır ve birbirine yakın kısa talepler, aynı sınıf uygunsa bir site gününde sıralanabilir. Her dükkân kendi teslim kişisini, uygulayıcısını ve izinlerini hazırlar. Makine adresler arasında sepet aşağıda ilerler; ortak trafik gözlenir. Bir işin kapsamı büyütülerek sıradaki müşteri geciktirilmez. Nakliye payı rota üzerinden bölünür, sözleşmeler ayrı kalır. Tarih esnekliği olan iş programa daha kolay yerleşir; sabit üretim penceresi olan talep önce korunur." },
        ],
        ekBolumler: [
            { baslik: "Kısa imalat işi için seçim tablosu", paragraflar: ["Yeni Sanayi Sitesindeki kısa talepler, hedef geometrisi ve hazırlık durumuyla sınıflandırılır."], tablo: { basliklar: ["Kalem", "Geometri", "Sınıf", "Hazırlık"], satirlar: [["Tavan armatürü", "Dikey", "Kompakt makaslı", "Devre ve alt alan"], ["Gövde üstü bağlantı", "Engelli", "Kısa eklemli", "Ürün sabit"], ["Kapı üstü", "Yandan", "Kompakt bomlu", "Giriş kapalı"], ["Menfez", "Dağınık", "Akülü dikey", "Malzeme hazır"], ["Sevk kontrolü", "Ürün çevresi", "Makaslı/eklemli", "Yüzey korunmuş"], ["Ağır montaj", "Yük kaldırma", "Platform kapsam dışı", "Ayrı ekipman"]] } },
            { baslik: "Yarım günlük işi hazırlama sırası", paragraflar: ["İşten önce hedef listesi kilitlenir, kapı ve rota ölçülür, zemin temizlenir, ürün veya tezgâh güvenli konuma alınır ve uygulama malzemesi kontrol edilir. Elektrik veya hareket izolasyonunu yapacak kişi sahada bulunur. Makine geldiğinde bu hazırlıklar yeniden icat edilmez, yalnız güncel durum doğrulanır.", "Kapanışta alet ve parça sayılır, ürün ile zemin incelenir, açık kalan hedef kaydedilir ve tesis yetkilisi sistemini devreye alır. Kısa kiralamanın kalitesi yalnız hızlı yükselmekten değil, başlama ve bitiş devirlerinin eksiksiz olmasından gelir." ] },
            { baslik: "Günlük ve ortak tur teklifini karşılaştırmak", paragraflar: ["Tekil sevkiyat kesin saat sağlar fakat taşıma payı tek işe kalır. Site turunda taşıma bölünebilir, karşılığında belirli bir tarih aralığı esnekliği gerekir. İki senaryo makine sınıfı, operatör, kullanım süresi ve taşıma ayrı satırlarda gösterilerek karşılaştırılır.", "Ortak tur başka talebin teyidine bağlıysa koşul ve son onay tarihi yazılır. Program gerçekleşmezse işletmeye yeni tur, tekil sevkiyat veya tarih değişikliği seçenekleri sunulur. Maliyet değişikliği sessizce uygulanmaz. Böylece küçük imalatçı fiyat avantajının hangi esnekliğe dayandığını bilir." ] },
        ],
        sss: [
            { soru: "Tek bir armatür için manlift kiralamak mantıklı mı?", cevap: "Acilse mümkündür; planlıysa aynı atölyedeki diğer gerçek yüksek noktaları listelemek veya site turuna katılmak taşıma payını azaltır. Gereksiz iş eklenmez. Malzeme ve uygulayıcı hazır olduğunda kısa erişim gerçekten kısa sürer; hazırlıksız tek kalem bile günü tüketebilir." },
            { soru: "Operatör teknik montajı da yapar mı?", cevap: "Hayır. Operatör platformun hareketini ve güvenli konumunu yönetir; montajı sizin yetkili uygulayıcınız yapar. Tesis enerji-hareket güvenliği ve alt alan ayrımından sorumludur. Görevler teslim kartında yazılır, kısa iş diye birbirine karıştırılmaz." },
            { soru: "Ürün gövdesinin üstüne makaslıyla ulaşılır mı?", cevap: "Hedefin altı boşsa olabilir; gövde araya giriyorsa makaslı dikey kaldığı için yeterli değildir. Kısa eklemli sınıf yandan yaklaşır. Ürün ölçüsü, park mesafesi ve kapı-dönüş alanı görülmeden seçim yapılmaz. Sepetten uzanmak çözüm değildir." },
            { soru: "Sepete uzun sac veya boru alabilir miyiz?", cevap: "Hayır. Uzun veya ağır malzeme yan yük, sıkışma ve kapasite riski yaratır. Platform personel ile küçük sabitlenmiş bakım malzemesini taşır. Büyük parça için ayrı kaldırma ve tutma düzeni gerekir. Sepet ürüne veya yapıya dayanak yapılmaz." },
            { soru: "Site turunda saat garantisi var mı?", cevap: "Her adres için tahmini pencere ve geçiş payı verilir; önceki iş uzarsa güncel saat bildirilir. Sabit üretim penceresi olan talep programa ona göre yerleştirilir. Kesin saat zorunluysa tekil sevkiyat seçeneği daha uygundur. İki model teklif aşamasında açıklanır." },
            { soru: "Atölye zemini yağlıysa çalışılır mı?", cevap: "Kaynak giderilip rota temizlenmeden çalışılmaz. Kaygan yüzey tutunmayı ve frenlemeyi etkiler. Talaş, kablo ve gevşek parçalar da kaldırılır. Zemin altında kanal veya kapak varsa işaretlenir. Küçük kompakt makine, uygunsuz zemini otomatik olarak güvenli yapmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Konya Yeni Sanayi Sitesinin küçük imalatçı dokusu kamuya açık genel bilgidir; kısa süreli operatörlü kullanım, hazır nokta listesi ve site turu firma saha pratiğidir. Tesis adı, özel ürün, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:cumra": {
        h1: "Çumra Gıda ve Şeker Ekseni Tesislerinde Bakım Manlifti",
        giris: "Çumra’da gıda ve şekerle bağlantılı işleme yapılarının yüksek erişim ihtiyacı, açık arazide dolaşan ağır hizmet ekipmanından farklı olarak tesisin içindeki hijyen sınırları, ürün akışı ve yardımcı sistemler çevresinde şekillenir. Bu sayfa tarla yolu, sulama altyapısı, köy rotası, hangar veya tahıl saklama anlatısı kurmaz. Belirli bir işletmenin varlığını, kapasitesini ya da proses ayrıntısını varsaymadan; ürün kabulünden işleme ve paketlemeye uzanan hacimlerde tavan aydınlatması, havalandırma, kablo taşıyıcı, kapı üstü mekanizma ve teknik galeri noktalarına manliftle erişim yöntemini ele alır. Temiz alan ile ham madde bölümü ayrılır, hareketli ekipman tesisçe güvenli hâle getirilir, düşen cisim kontrolü uygulanır ve platform iş sonunda üretim sorumlusuna temiz biçimde teslim edilir.",
        maddeler: [
            { baslik: "Ürün bölgesine temiz makine kabulü", metin: "İç hacme girecek akülü ünitenin tekerlek, sepet ve alt şasesi temizlenir; hidrolik sızıntı belirtisi kontrol edilir. Tesisin hijyen kabulü platform firmasının genel kontrolünün yerine geçmez, ayrıca uygulanır. Dış veya ham madde alanından gelen makine temiz bölüme doğrudan geçmez. Koruyucu düzen zeminde kayma ya da fren riski oluşturmayacak biçimde kurulur. İş sonunda makine ve kullanılan aletler tekrar kontrol edilir. Platformun temiz olması ürün güvenliği prosedürünü tek başına tamamlamaz; işletmenin kendi kuralları belirleyicidir." },
            { baslik: "Hat üstünde hareket ve enerji güvenliği", metin: "Konveyör, paketleme veya aktarma ekipmanının üstünde çalışmadan önce ilgili kesit tesisin yetkili ekibi tarafından güvenli duruma getirilir. Platform operatörü hattı kapatmaz veya yeniden açmaz. Alt alan ürün, personel ve araçtan arındırılır; bariyer ve iletişim düzeni kurulur. Kısa duruş penceresi varsa hedef sırası, uygulayıcı ve malzeme önceden hazırlanır. İş bittikten sonra sepet güvenli alana çekilir, alet sayılır ve bölüm sorumlusu teslim almadan hareket yeniden başlatılmaz." },
            { baslik: "Açık ürün üzerinde düşen cisim sınırı", metin: "Açık ürünün üzerinde planlı bakım yapılmaz. İlgili bölüm boşaltılır veya ürün güvenli başka alana alınır; yalnız örtü sererek risk çözülmüş sayılmaz. El aletleri bağlanır, küçük bağlantılar kapalı kutuda tutulur ve sökülen eleman sepette sabitlenir. Sepet kapasitesi personel ile tüm yükün toplamına göre korunur. Ağır kanal veya ekipman platformla kaldırılmaz. Şüpheli temas ya da düşen parça derhâl tesis sorumlusuna bildirilir; ürünün uygunluğuna platform ekibi karar vermez." },
            { baslik: "Temiz ve ham madde hacmini ayrı sıraya koymak", metin: "Aynı ünitenin farklı bölümlere girmesi gerekiyorsa temiz paketleme veya mamul alanı önce, daha kirli kabul ve ham madde bölümü sonra planlanır. Ters geçiş zorunluysa tesis prosedürüne uygun temizlik ve yeniden kabul süresi konur. Bu süre günlük programa yazılır; görünmez ara iş sayılmaz. Temizlik imkânı yoksa alanlar farklı gün veya makineyle ele alınır. Sıralama, bir bölümün kalıntısını diğerine taşımadan tek sevkiyattan verim almayı sağlar." },
            { baslik: "Tesis bakım listesini bölüm bölüm kapatmak", metin: "Tavan aydınlatması, menfez, kapı motoru, kamera ve kablo hattı tek genel liste yerine bölüm ve konumlanma bazında sıralanır. Aynı yerleşimden erişilen hazır kalemler birlikte tamamlanır. Teknik müdahaleyi ilgili yetkili ekip yapar; platform yalnız erişim sağlar. Her bölüm sonunda üst kot, alet ve alt alan kontrol edilir, açık kalemler konumuyla yazılır. Tamamlanan bölüm üretime geri verilir ve makine bir sonraki onaylı alana geçer; bütün tesis belirsiz süreyle kapalı tutulmaz." },
        ],
        ekBolumler: [
            { baslik: "Gıda tesisi bölümüne göre manlift planı", paragraflar: ["Gerçek tesiste doğrulanacak bölüm koşulları, erişim ve teslim sırasını belirler."], tablo: { basliklar: ["Bölüm", "Yüksek kalem", "Ana koşul", "Plan"], satirlar: [["Ürün kabulü", "Kapı üstü, ışık", "Araç ve ham madde", "Kabul dışında"], ["İşleme hattı", "Menfez, kablo", "Hareketli ekipman", "Güvenli duruşta"], ["Paketleme", "Armatür, sensör", "Açık ürün", "Bölüm boşken"], ["Mamul alanı", "Algılama, tavan", "Temiz hacim", "İlk sırada"], ["Teknik galeri", "Kanal ve bağlantı", "Dar engeller", "Kompakt eklemli"], ["İdari bölüm", "Asma tavan", "Standart iç ortam", "Akülü dikey"]] } },
            { baslik: "Bakım penceresi için hazır olma kartı", paragraflar: ["Her bölüm için hedef, kot, alt engel, gerekli yetkili, malzeme, enerji-hareket durumu ve hijyen kabulü aynı kartta tutulur. Pencere açıldığında eksik kalem varsa o bölüm bekletilir, hazır başka bölüm öne alınır. Bu esneklik yalnız önceden onaylanan sıralar arasında uygulanır.", "Gün sonunda kart yapılan ve açık kalan işlerle kapanır. Erişilememe nedeni sınıf, zemin, ürün, izin veya malzeme olarak belirtilir. Bir sonraki ziyaret aynı belirsizliği yeniden yaşamaz. Kart teknik proses raporu değildir; erişim ve teslim zincirinin kaydıdır." ] },
            { baslik: "Gıda eksenini ağır hizmet işinden ayıran sınır", paragraflar: ["Bu program tesis içi temiz erişime aittir. Tarla kenarı, sulama direği, toprak yol, açık depo ve ilçeler arası ağır makine rotası başka zemin ile sınıf planı gerektirir. Aynı talepte iki dünya varsa işler makine uygunluğuna göre ayrılır; içeri girecek temiz akülü ünite dış arazi göreviyle kirletilmez.", "İç tesiste de ürün tipi veya kapasite varsayılmaz. Gerçek çalışma alanı, hijyen prosedürü ve hareketli ekipman tesisçe tanımlanır. İçeriğin gıda-şeker ekseni, yalnız bakım disiplinini çerçeveler; belirli bir fabrikanın varlığına veya işleyişine ilişkin iddia oluşturmaz." ] },
        ],
        sss: [
            { soru: "Ürün hattı çalışırken tavan bakımı yapılabilir mi?", cevap: "Çalışılan kesit tesis prosedürüne göre güvenli hâle getirilmeden ve alt alan boşaltılmadan yapılmaz. Fiziksel ayrım varsa diğer bölümler çalışabilir. Platform ekibi hattı durdurmaz veya açmaz. Duruş penceresi kısa ise malzeme ve hedef sırası önceden hazırlanır." },
            { soru: "Dış sahadan gelen platform doğrudan paketlemeye girebilir mi?", cevap: "Hayır. Tekerlek, sepet ve gövde temizlenir, sızıntı kontrolü yapılır ve tesisin hijyen kabulü tamamlanır. Uygunluk sağlanmazsa içeri alınmaz. Mümkünse temiz iç hacim işleri ayrı ünite veya programın ilk sırasıyla yürütülür." },
            { soru: "Açık ürünün üstünü örtersek çalışabilir misiniz?", cevap: "Örtü tek başına yeterli değildir. Planlı işte ürün çalışma alanından çıkarılır ve alt bölüm boş bırakılır. Aletler bağlanır, parçalar sepette tutulur. Ürünün taşınamadığı durumda farklı pencere veya erişim konumu aranır; ürün uygunluğu konusunda risk alınmaz." },
            { soru: "Hangi makine sınıfı gerekir?", cevap: "Altı boş düz hedefte kompakt akülü makaslı, sabit hat veya kanal arkasında kalan noktada eklemli sınıf gerekebilir. Kapı, dönüş, hedef kot ve yatay mesafe ölçülür. Hijyen ve ortam uygunluğu ayrıca değerlendirilir. Yalnız yükseklik bilgisi kesin seçim için yeterli değildir." },
            { soru: "Aynı gün ham madde ve temiz bölümde çalışılır mı?", cevap: "Mümkünse önce temiz, sonra ham madde bölümünde çalışılır. Ters geçişte tesis prosedürüne uygun temizlik ve yeniden kabul yapılır. Bu süre plana eklenir. Temizlik kurulamazsa farklı gün veya ünite seçilir; bölüm sınırı verim uğruna kaldırılmaz." },
            { soru: "Bu Çumra kaydı tarla ve tahıl depolarını kapsıyor mu?", cevap: "Hayır. Kapsam yalnız gıda ve şeker eksenindeki tesis içi bakım manlifti, hijyen, hareketli hat ve bölüm teslimidir. Tarla yolu, sulama, açık arazi, ağır hizmet ve tahıl saklama işleri farklı plan gerektirir. Talebiniz o kapsama giriyorsa ayrı makine ve saha değerlendirmesi yapılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Çumra’nın tarım ve şeker pancarı ekonomisi kamuya açık genel bilgidir; gıda tesislerinde hijyen kabulü, hareketli ekipman güvenliği, temiz-kirli rota ve bölüm teslimi sektör geneli ilkeler ile firma pratiğine dayanır. Tesis adı, kapasite, saha rakamı ve tahıl-ağır hizmet iddiası kullanılmamıştır.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // HİZMET SAYFALARI (/hizmet/[slug]) — 11 sabit slug, manliftkirala.store
    // Açı: '.store' — envanterden hazır, stokta bekleyen makine; imalatçı
    // atölyesine bekletmeden, siparişten değil raftan teslim edilen ekipman.
    // Yazım: 2026-08-14. Tesis adı, marka, rakam uydurulmamıştır.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Sepetli / Örümcek Platform Kiralama: Envanterden Hazır Kompakt Seçenek",
        giris:
            "Bir imalat atölyesinde dar bir kapıdan geçip asma katın altından süzülerek gövde üstüne ulaşmak gereken anlarda, aranan makine genellikle katalogdaki en büyük değil, envanterde o gün fiilen duran en uygun modeldir. Sepetli (örümcek) platformu bu listeye koymamızın nedeni tam olarak budur: paletli tabanı dar geçitlerde manevra kabiliyeti verir, katlanmış hâli çoğu atölye kapısından sığar ve — adının taşıdığı '.store' vurgusuyla söylüyoruz — bu sınıfın birden çok modeli stokta beklediği için talep geldiğinde yeni bir tedarik süreci başlatmaya gerek kalmaz. Bu sayfada, hangi atölye koşulunun hangi örümcek platform modelini gerektirdiğini, paletli tabanın zemin üzerindeki etkisini ve envanterden hazır bulunmanın kısa süreli işlerde neden fark yarattığını anlatıyoruz. Sepetli platformu burada bir tesis bakım aracı değil, dar imalat hacimlerine giren kompakt bir erişim çözümü olarak ele alıyoruz.",
        maddeler: [
            {
                baslik: "Dar kapı ve asma kat altı geçiş",
                metin:
                    "Küçük ve orta ölçekli atölyelerde kapı genişliği ile asma kat altı yüksekliği, makine seçiminin ilk filtresidir. Örümcek platformun katlanmış gövdesi bu iki kısıtı aynı anda karşılayacak şekilde tasarlanmıştır; geniş şaseli bir makinenin giremediği bir kapıdan bu sınıf rahatlıkla geçer. Talep alırken kapı net eni, net yüksekliği ve asma kat kirişinin en alçak noktasını sorarız; bu üç ölçü elimizde olduğunda hangi modelin uygun olduğunu tereddütsüz söyleriz.",
            },
            {
                baslik: "Paletli tabanın zemine etkisi",
                metin:
                    "İmalat atölyesinin zemini genellikle boyalı veya perdahlı betondur ve bu yüzeyde iz bırakmak istenmez. Paletli sistem, tekerlekli sınıfa göre yükü daha geniş bir alana yayar ve dönüş sırasında yüzeyi çizme riskini azaltır. Buna karşın palet izinin tamamen sıfır olduğu iddia edilmez; hassas cilalı zeminlerde koruyucu tahta veya keçe kullanımı önceden konuşulur. Zemin türünü ve hassasiyetini talep aşamasında bildiren atölyede bu konu sahada sürpriz olmaz.",
            },
            {
                baslik: "Sepet kapasitesi ve alet taşıma",
                metin:
                    "Kompakt gövdeye rağmen sepet, bir kişi ve el aletlerini taşıyacak kapasitede tasarlanır; bazı modellerde iki kişilik kapasite de mevcuttur. Kaynak ekipmanı veya ağır bağlantı parçası taşınacaksa toplam ağırlığı önceden belirtmek gerekir, çünkü kompakt sınıfın taşıma kapasitesi büyük makaslı sınıfa göre daha sınırlıdır. Bu sınırı aşan yükler için ya daha geniş sepetli bir model önerilir ya da yük iki aşamada taşınır.",
            },
            {
                baslik: "Envanterden model çeşitliliği",
                metin:
                    "Farklı kapalı yükseklik ve farklı çalışma yüksekliğine sahip birkaç örümcek platform modeli aynı anda envanterde bulunur; bu, tek bir standart modele bağlı kalmadan atölyenin gerçek kısıtına uygun makineyi seçebilmemizi sağlar. Bir atölyede kapı dar ama tavan yüksekse bir model, kapı geniş ama asma kat alçaksa başka bir model öne çıkar. Envanter çeşitliliği, saha ölçüleri elimize geçtiğinde ikinci bir tedarik beklemeden doğru modeli ayırabilmemiz anlamına gelir.",
            },
            {
                baslik: "Kısa süreli çağrıda hızlı tahsis",
                metin:
                    "Örümcek platform talebi çoğu zaman plansız çıkar: bir gövde üstü bağlantı, bir kısa süreli kaynak işi, bir tek seferlik montaj kalemi. Bu tip taleplerde makinenin envanterde hazır durması, günler süren bir tedarik beklentisini ortadan kaldırır. Talep geldiğinde elimizdeki modeller arasından ölçüye uygun olanı ayırır, sevkiyatı aynı gün içinde planlarız; müsaitlik durumu değişkendir ve bunu olduğu gibi bildiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Atölye kısıtına göre model seçimi",
                paragraflar: [
                    "Aşağıdaki tablo, örümcek platform talebinde en sık karşılaştığımız atölye kısıtlarını ve bu kısıtlara uygun envanter sınıfını gösteriyor. Ölçülerinizi bu tabloyla karşılaştırmak, teklif öncesi kabaca bir fikir verir.",
                ],
                tablo: {
                    basliklar: ["Atölye kısıtı", "Belirleyici ölçü", "Uygun envanter sınıfı", "Not"],
                    satirlar: [
                        ["Dar kapı, yüksek tavan", "Kapı net eni", "Dar şaseli örümcek", "Katlanmış hâlde ölçülür"],
                        ["Alçak asma kat", "Kiriş altı kotu", "Düşük kapalı yükseklikli model", "Yükselme sınırını da etkiler"],
                        ["Hassas cilalı zemin", "Zemin türü", "Koruyucu tahta ile paletli", "Önceden bildirilmeli"],
                        ["Kısa ve plansız iş", "Süre", "Envanterden ilk uygun model", "Aynı gün tahsis hedeflenir"],
                    ],
                },
            },
            {
                baslik: "Envanterden hazır olmanın atölyeye katkısı",
                paragraflar: [
                    "Tedarik süreci bir makinenin başka bir sahadan çekilip getirilmesini gerektirdiğinde, iş plansızsa atölye günlerce bekler. Birden çok örümcek platform modelinin aynı anda elimizde bulunması, bu bekleme süresini ortadan kaldırmayı hedefler — garanti değil, hedeftir; yoğun dönemlerde her modelin her an boşta olmadığını açıkça söyleriz.",
                    "İkinci katkı esneklik tarafındadır: ölçü verilerinde belirsizlik olduğunda, envanterdeki farklı modeller arasında seçim yapabilme imkânı, tek bir sabit modele bağlı kalmaktan daha güvenlidir. Sahaya varan ekip, gerekirse aynı gün içinde modeller arasında değişiklik önerebilir.",
                ],
            },
            {
                baslik: "Ne zaman büyük sınıfa geçmek gerekir",
                paragraflar: [
                    "Örümcek platform her dar geçiş sorununu çözmez. Çalışma yüksekliği atölyenin üst kotunu aşıyorsa, ya da taşınacak yük sepet kapasitesini geçiyorsa, bu sınıf yerine kompakt makaslı ya da eklemli sınıfa yönlendiririz. Dürüst değerlendirme, kompakt görünen bir makinenin her işe uymadığını kabul etmekten geçer.",
                    "Karar noktası basittir: kapı ve tavan kısıtı varsa örümcek platform öne çıkar; kısıt yoksa ve daha yüksek kapasite gerekiyorsa büyük sınıfa geçilir. İki durumu da kapsayan bir iş varsa, çalışmayı iki aşamaya bölmeyi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Atölyemizde kapı dar, hangi model bize uyar?",
                cevap:
                    "Kapı net enini ve asma kat varsa kiriş altı kotunu bize iletin; envanterdeki dar şaseli modellerden ölçüye uyanı ayırırız. Katlanmış hâldeki genişlik ve yükseklik, çalışma yüksekliğinden daha kritik bir veridir çünkü makine önce kapıdan geçmek zorundadır. Ölçü belirsizse birkaç fotoğraf yeterli olur; sahaya yanlış model göndermemek ikimizin de kazandığı sonuçtur.",
            },
            {
                soru: "Aynı gün teslim mümkün mü?",
                cevap:
                    "Çoğu zaman mümkündür çünkü birden fazla model envanterde hazır bekler ve bu, ayrı bir tedarik süreci beklemeden sevkiyat kurabilmemizi sağlar. Ancak bunu garanti olarak söylemeyiz — yoğun dönemlerde uygun ölçüdeki model o an başka bir sahada olabilir. Talebinizi ölçülerle birlikte ilettiğinizde müsaitlik durumunu olduğu gibi, telefonda bildiririz.",
            },
            {
                soru: "Paletli taban zeminimizde iz bırakır mı?",
                cevap:
                    "Standart kullanımda iz riski tekerlekli sınıfa göre düşüktür ama sıfır değildir; hassas cilalı veya yeni kaplanmış zeminlerde koruyucu tahta veya keçe kullanırız. Zemin türünüzü ve varsa özel hassasiyetinizi talep aşamasında bildirin; bu önlemi teklife ekleyip sahaya hazır göndeririz. Bildirilmeyen bir hassasiyet, sahada geri dönüşü olmayan bir hasara yol açabilir.",
            },
            {
                soru: "Sepete kaç kişi ve ne kadar alet sığar?",
                cevap:
                    "Modele göre değişir; çoğu örümcek platform tek kişilik, bazı modeller iki kişilik kapasiteyle üretilir. El aletleri sepette taşınabilir ama ağır kaynak ekipmanı veya büyük bağlantı parçası taşınacaksa toplam ağırlığı önceden bildirmeniz gerekir. Kapasiteyi aşan bir yük, makinenin dengesini etkileyebileceği için bu bilgiyi teklif aşamasında netleştiririz.",
            },
            {
                soru: "Kısa süreli, birkaç saatlik bir iş için de kiralanır mı?",
                cevap:
                    "Kiralanır; bu sınıfın en yaygın kullanım biçimi zaten kısa ve plansız işlerdir. Envanterden hazır bulunma, tam olarak bu tip taleplerde işe yarar — günler süren bir tedarik beklentisi olmadan makineyi aynı gün sahaya yönlendirebiliriz. Süre kısa da olsa teslim ve iade kaydı yine tutulur; bu, hem sizin hem bizim için makinenin durumunu netleştirir.",
            },
            {
                soru: "Çalışma yüksekliğimiz atölye tavanını aşıyor, bu sınıf yeterli mi?",
                cevap:
                    "Değil; örümcek platform dar geçiş ve kompakt manevra için tasarlanmıştır, büyük yükseklik ihtiyacında yetersiz kalır. Böyle bir durumda dürüst önerimiz kompakt makaslı veya eklemli sınıfa geçmenizdir. Atölyenizin gerçek üst kotunu ve kapı ölçüsünü birlikte verin, iki kısıtı da karşılayan doğru sınıfı önerelim — gerekirse işi iki aşamaya bölmeyi de konuşuruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli/örümcek platformların paletli taban ve katlanmış gövde özellikleri genel ürün bilgisidir; envanterden hazır bulunma ve atölye kullanım kalıpları saha pratiğimize dayanır. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Nakliye ve Teslimat Hizmeti: Envanterden Sahaya Hızlı Sevkiyat",
        giris:
            "Bir kiralama firmasının en görünmez ama en belirleyici işi, telefonda konuşulan makinenin doğru gün, doğru saatte, doğru sahaya inmesidir. '.store' adını taşıyan bir yapıda bu iş iki ayrı adımdan değil, tek bir akıştan ibarettir: makine zaten envanterde durduğu için önce üretilmesi ya da başka bir sahadan çekilmesi beklenmez, doğrudan sevkiyat planına girer. İmalat atölyesine giden bir kiralamada nakliye, işin yan kalemi değil zamanlamanın kendisidir — parti üretimi belirli bir tarihte başlıyorsa makine o tarihten önce sahada olmalı, devreye alma haftası geldiğinde bekleme süresi sıfıra yakın olmalıdır. Bu sayfada nakliye ve teslimat sürecini üç ayrı katmanda ele alıyoruz: envanterden hazır makinenin sevkiyata girme hızı, saha indirme ve teslim kontrolünün nasıl yapıldığı ve iade lojistiğinin kiralama süresiyle nasıl örtüştürüldüğü. Sözünü tutamayacağımız bir teslim saatini vermeyiz; müsaitlik durumunu olduğu gibi söyleriz.",
        maddeler: [
            {
                baslik: "Envanterden hazır makinenin sevkiyat hızına etkisi",
                metin:
                    "Klasik kiralama modelinde talep alındıktan sonra uygun makinenin bulunması, kontrolden geçirilmesi ve sevkiyata hazırlanması ayrı ayrı zaman alan adımlardır. Envanterden çalışan bir yapıda bu adımların çoğu talep gelmeden önce tamamlanmış olur; makineler düzenli kontrolden geçmiş, sevkiyata hazır hâlde beklerler. Bu, her talebin aynı gün karşılanacağı anlamına gelmez — model ve tarihe göre müsaitlik değişir — ama bekleme süresinin kaynağının makinenin hazırlığı değil, o an başka bir sahada olup olmadığı olduğu anlamına gelir.",
            },
            {
                baslik: "Araç ve indirme planlaması",
                metin:
                    "Sevkiyat aracının tipi makinenin sınıfına göre belirlenir: kompakt bir örümcek platform küçük bir kapalı kasa araçla taşınabilirken, büyük bir makaslı veya eklemli sınıf lowbed ya da açık platformlu araç gerektirir. İndirme noktasının zemin durumu, eğimi ve çevresindeki serbest alan önceden sorulur; dar bir atölye sokağında indirme, geniş bir saha girişinden farklı bir planlama ister. Forklift ile indirilecek yükler için sahada uygun kaldırma ekipmanının bulunup bulunmadığı da teyit edilir.",
            },
            {
                baslik: "Teslim tutanağı ve makine kontrolü",
                metin:
                    "Makine sahaya indiğinde teslim öncesi kısa bir kontrol yapılır: görünür hasar, akü/yakıt durumu, kumanda ve acil indirme sisteminin çalışırlığı birlikte gözden geçirilir ve bir teslim tutanağıyla kayıt altına alınır. Bu tutanak, kiralama süresince makinenin durumuna dair ortak bir referans noktasıdır; iade sırasında yaşanabilecek bir anlaşmazlıkta ilk başvurulan belgedir. Teslim anında kullanıcı personele kısa bir kullanım brifingi de verilir; bu, ayrı bir hizmet değil teslimatın standart parçasıdır.",
            },
            {
                baslik: "Parti ve proje takvimine bağlı zamanlı teslim",
                metin:
                    "İmalat atölyelerinin çoğunda iş takvimi düzdür değil, parti bazlıdır: bir sipariş açıldığında hat haftalarca yoğun çalışır, kapandığında yavaşlar. Nakliye planını bu takvime bağlamak, makinenin ne çok erken gelip boşa beklemesini ne de geç kalıp hattı durdurmasını sağlar. Parti başlangıç tarihi ve tahmini süresi bize iletildiğinde, teslim ve iade tarihlerini bu pencereye göre kurarız; belirsiz süreyle başlayan kiralamalarda ise makine ya erken çıkar ya gereğinden uzun kalır.",
            },
            {
                baslik: "İade ve geri alım lojistiği",
                metin:
                    "İade süreci teslimatla aynı titizlikte yürütülür: makine sahadan alınmadan önce son bir kontrol yapılır, teslim tutanağıyla karşılaştırılır ve varsa yeni hasar veya eksik kaydedilir. Aynı gün başka bir sahaya yönlendirilecek makinelerde bu kontrol, bir sonraki kullanıcının makineyi eksiksiz teslim alması için de kritik hâle gelir. Birden fazla makinenin aynı bölgeden aynı anda toplanması gerektiğinde, geri alım rotası coğrafi olarak birleştirilir ve nakliye maliyeti buna göre paylaşılır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sevkiyat tipine göre hazırlık",
                paragraflar: [
                    "Aşağıdaki tablo, sık karşılaştığımız sevkiyat durumlarını ve her birinde hangi hazırlığın öne çıktığını gösteriyor. Amaç, kesin bir saat vaadi değil, hangi bilginin teklif aşamasında paylaşılırsa sürecin hızlanacağını göstermektir.",
                ],
                tablo: {
                    basliklar: ["Sevkiyat durumu", "Belirleyici koşul", "Araç tipi", "Önceden gereken bilgi"],
                    satirlar: [
                        ["Kompakt sınıf, tek makine", "Envanter müsaitliği", "Kapalı kasa / küçük araç", "Kapı ve sokak ölçüsü"],
                        ["Büyük makaslı / eklemli", "Yük ve boyut", "Lowbed / açık platform", "İndirme noktası zemini"],
                        ["Parti üretimine bağlı teslim", "Proje takvimi", "Duruma göre değişir", "Başlangıç tarihi, süre"],
                        ["Aynı bölgede birden fazla adres", "Rota birleştirme", "Tek araç, çoklu durak", "Adres listesi, sıralama"],
                    ],
                },
            },
            {
                baslik: "Envanterden teslim ile sipariş üretimi arasındaki fark",
                paragraflar: [
                    "Bir makinenin başka bir bölgeden getirilmesi ya da bakımdan çıkması gerektiğinde, sevkiyat süresi büyük ölçüde bu hazırlığa bağlıdır. Envanterden çalışan bir yapıda makineler zaten kontrolden geçmiş ve sevkiyata hazır durumda bekler; bu, talep ile teslim arasındaki süreyi kısaltmayı hedefler.",
                    "Bunu mutlak bir söz olarak sunmuyoruz: yoğun dönemlerde belirli bir sınıfın tüm modelleri aynı anda sahada olabilir. Bu durumda müsaitlik tarihini olduğu gibi bildirir, alternatif bir model veya tarih öneririz — tutamayacağımız bir teslim saatini vermeyiz.",
                ],
            },
            {
                baslik: "Nakliye maliyetini etkileyen kalemler",
                paragraflar: [
                    "Nakliye bedeli sabit bir tarife değildir; makinenin sınıfı, sevkiyat mesafesi, indirme noktasının erişilebilirliği ve gerekiyorsa özel araç ihtiyacı birlikte belirler. Aynı bölgeye giden birden fazla talebin tek sevkiyata birleştirilmesi, katılan tarafların nakliye payını düşürür.",
                    "Bu birleşimi biz koordine ederiz: yakın tarihli ve yakın konumlu talepleri fark ettiğimizde, mümkünse tek çıkışa öneririz. Tek şartı, her tarafın süre ve tarih konusunda esnek olmasıdır; sabit tarihli acil işlerde tekil sevkiyat elbette yapılır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Aynı gün teslim garantisi veriyor musunuz?",
                cevap:
                    "Garanti olarak sunmuyoruz ama envanterden hazır bulunan modellerde aynı gün teslim sık rastlanan bir sonuçtur. Belirleyici olan, ihtiyacınız olan sınıfın o an başka bir sahada olup olmadığıdır. Talebinizi ölçü ve tarihle birlikte ilettiğinizde müsaitlik durumunu telefonda net biçimde söyleriz; tutamayacağımız bir saati vaat etmeyiz, gerçekçi bir zaman dilimi veririz.",
            },
            {
                soru: "Nakliye ücreti neye göre belirleniyor?",
                cevap:
                    "Dört kalem birlikte belirler: makinenin sınıfı ve gerektirdiği araç tipi, sevkiyat mesafesi, indirme noktasının erişilebilirliği ve varsa özel ekipman ihtiyacı (örneğin lowbed). Aynı bölgeye giden başka bir talep varsa sevkiyatı birleştirip payı düşürebiliriz; bunu size teklif aşamasında ayrıca sunarız. Sabit bir tarife yerine sahanızın gerçek koşuluna göre rakam veririz.",
            },
            {
                soru: "İndirmeyi kendi ekibimiz mi yapmalı, siz mi yapıyorsunuz?",
                cevap:
                    "Standart teslimatlarda indirme sevkiyat ekibimizin sorumluluğundadır. Sahanızda özel bir kısıt varsa — dar sokak, forklift ile indirme ihtiyacı, kısıtlı zaman penceresi gibi — bunu önceden bildirmeniz gerekir; aksi hâlde sahaya varan ekip planı yeniden kurmak zorunda kalır ve bu, teslim saatini geciktirir. Sahanızın fotoğrafını göndermeniz, indirme planını doğru kurmamızı kolaylaştırır.",
            },
            {
                soru: "Teslim tutanağı neden önemli, imzalamak zorunda mıyız?",
                cevap:
                    "Zorunlu tutuyoruz çünkü tutanak, kiralama süresince makinenin durumuna dair ortak referans noktasıdır. Görünür hasar, akü/yakıt seviyesi ve sistem kontrolü teslim anında birlikte gözden geçirilir ve kayıt altına alınır. İade sırasında bir fark ortaya çıkarsa, ilk başvurulan belge budur; imzalamadan teslim almak her iki tarafı da belirsizlikte bırakır.",
            },
            {
                soru: "Kiralama süresi belirsizse iade tarihi nasıl planlanır?",
                cevap:
                    "Belirsiz süreyle başlayan kiralamalarda makine ya erken geri çağrılır ya gereğinden uzun sahada kalır; ikisi de maliyeti artırır. Bunun yerine parti veya proje takviminizi paylaşmanızı öneririz — başlangıç tarihi ve tahmini süre elimizde olduğunda iade planını baştan kurarız. Süre uzarsa haber vermeniz yeterlidir, planı birlikte güncelleriz.",
            },
            {
                soru: "Birden fazla makineyi tek seferde teslim edebilir misiniz?",
                cevap:
                    "Edebiliriz; aynı bölgeye giden birden fazla makine varsa tek araçla, sıralı duraklar hâlinde teslim ederiz. Bu hem nakliye maliyetini düşürür hem sahalar arası koordinasyonu kolaylaştırır. Tek şartı, her durağın teslim penceresinin gerçekçi verilmesidir — ilk durakta uzayan bir teslimat, sıradaki sahayı geciktirir. Adres listenizi ve tercih ettiğiniz sırayı bize iletin.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sevkiyat, indirme ve teslim tutanağı süreçleri genel kiralama sektörü pratiğidir; envanterden hazır bulunma ve parti takvimine bağlı planlama kendi çalışma biçimimizdir. Tesis adı, mesafe ve rakam uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Forklift ve İstifleme Kiralama: Envanterden Hazır Parkta Seçenek",
        giris:
            "İmalat atölyesinde forklift ihtiyacı çoğu zaman platform ihtiyacından önce doğar: sac paleti indirilir, yarı mamul istiflenir, boyanmış parça sevk sahasına taşınır. Bu işlerin ortak özelliği süreklilik ve öngörülebilirliktiğidir — bir atölye forklifti bir defa değil, gün boyunca defalarca kullanır. '.store' envanter yaklaşımımızı burada da aynı şekilde uyguluyoruz: farklı kapasite ve lastik tipine sahip birden çok forklift aynı anda parkımızda hazır bekler, böylece talep geldiğinde kapasite hesaplaması ile sevkiyat arasında günler geçmez. Bu sayfada forklift seçiminde kapasitenin nasıl belirlendiğini, iç mekân ile dış saha kullanımı arasındaki lastik ve güç kaynağı farkını, dar koridorlu depolarda hangi modelin işe yaradığını ve operatörlü/operatörsüz kararının nasıl verildiğini anlatıyoruz. Forkliftin de manlift gibi işin gerçek kısıtına göre seçildiğini, en büyük kapasitenin her zaman en doğru cevap olmadığını baştan söylüyoruz.",
        maddeler: [
            {
                baslik: "Kapasite seçimi: en büyük değil, doğru olan",
                metin:
                    "Forklift seçiminde en sık yapılan hata, güvenlik payı düşüncesiyle gereğinden büyük kapasiteli bir model istemektir. Oysa aşırı büyük forklift dar koridorlarda manevra edemez, düşük tavanlı depolarda sığmaz ve gereksiz yere yüksek maliyet üretir. Doğru seçim, taşınacak en ağır yükün gerçek ağırlığına, palet boyutuna ve kaldırma yüksekliğine bakılarak yapılır. Bu üç veriyi verdiğinizde, envanterdeki modeller arasından ihtiyacınıza en yakın kapasiteyi öneririz — büyüğünü değil, uyanı.",
            },
            {
                baslik: "İç mekân ve dış saha: lastik ve güç kaynağı farkı",
                metin:
                    "Kapalı bir imalat holünde egzoz emisyonu kabul edilemez; bu hacimlerde elektrikli veya akülü forklift zorunludur. Dış sahada, özellikle düzensiz zeminde, dizel ya da LPG'li modeller daha güçlü ve dayanıklıdır. Lastik tarafında da aynı ayrım geçerlidir: iç mekân zemininde katı (solid) lastik yeterliyken, açık ve engebeli sahada pnömatik lastik gerekir. Bu iki eksende doğru kombinasyonu seçmek, forkliftin performansı kadar zemin ve hava kalitesini de korur.",
            },
            {
                baslik: "Dar koridorlu depoda manevra",
                metin:
                    "Raf aralarının dar olduğu depolarda standart forklift dönemez; bu durumda dar koridor forklifti (reach truck veya dar gövdeli model) tercih edilir. Bu sınıfın seçimi, koridor genişliği ile raf yüksekliğinin birlikte değerlendirilmesini gerektirir — yalnızca koridor ölçüsü yeterli değildir, çünkü yüksek istiflemede direğin geriye yatma payı da hesaba girer. Depo planınızın kaba bir krokisi, bu sınıfın hangi modelinin uygun olduğunu belirlememizi kolaylaştırır.",
            },
            {
                baslik: "İstifleme yüksekliği ve palet düzeni",
                metin:
                    "İstifleme yüksekliği arttıkça direğin görüş açısını kapatma ihtimali de artar; bu yüzden yüksek istiflemede forkliftin görüş sağlayan direk tipi ve varsa kamera sistemi önem kazanır. Palet düzeninin standart ölçülerde olması, forkliftin kapasitesinden tam verim alınmasını sağlar; standart dışı ölçülü veya dengesiz yüklerde kapasite hesabı düşürülerek çalışılır. Bu detayları teklif aşamasında sormamızın nedeni, sahada kapasite aşımı riskine girmemektir.",
            },
            {
                baslik: "Operatörlü ve operatörsüz seçenek",
                metin:
                    "Kısa süreli ya da yoğun trafikli bir sahada forklift kullanacak belgeli personel yoksa operatörlü kiralama tercih edilir; bu durumda kullanım sorumluluğu bizim operatörümüzde kalır. Düzenli ve uzun süreli kullanımlarda ise işletmenin kendi belgeli personeli ile operatörsüz kiralama daha ekonomik olur. Hangi modelin size uygun olduğunu, kullanım sıklığınızı ve personel durumunuzu konuşarak birlikte kararlaştırırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapasite ve zemine göre model tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, atölye ve depo işlerinde en sık karşılaştığımız forklift ihtiyaçlarını kapasite ve zemin türüne göre gruplandırıyor.",
                ],
                tablo: {
                    basliklar: ["Kullanım", "Zemin/hacim", "Güç kaynağı", "Lastik"],
                    satirlar: [
                        ["İmalat holü içi taşıma", "Kapalı, beton", "Elektrikli/akülü", "Katı (solid)"],
                        ["Sevk sahası, açık alan", "Dış, düzensiz", "Dizel / LPG", "Pnömatik"],
                        ["Dar koridorlu raflı depo", "Kapalı, dar koridor", "Elektrikli/akülü", "Katı (solid)"],
                        ["Yükleme rampası çevresi", "Yarı açık", "LPG / elektrikli", "Duruma göre"],
                    ],
                },
            },
            {
                baslik: "Envanterden hazır parkın avantajı",
                paragraflar: [
                    "Farklı kapasite, lastik tipi ve güç kaynağına sahip birden çok forklift aynı anda parkımızda hazır bulunur. Bu, kapasite hesabı yapıldıktan sonra tedarik beklemek yerine, elimizdeki modeller arasından uygun olanı doğrudan sevkiyata alabilmemiz anlamına gelir.",
                    "Yoğun dönemlerde belirli bir kapasitedeki tüm modeller aynı anda kullanımda olabilir; bu durumda en yakın alternatif kapasiteyi ya da bir sonraki müsaitlik tarihini açıkça bildiririz. Amacımız, sahaya yanlış kapasiteli bir makine göndermek yerine doğru zamanı beklemektir.",
                ],
            },
            {
                baslik: "Forklift ve platformun birlikte kullanıldığı işler",
                paragraflar: [
                    "İmalat atölyelerinde forklift ve manlift genellikle aynı sahada, farklı işler için birlikte çalışır: forklift malzemeyi taşırken platform üst kottaki montaj veya kontrol işini yürütür. Bu iki ekipmanın aynı anda sahada bulunduğu işlerde çalışma alanlarının net biçimde ayrılması gerekir; forkliftin geçiş güzergâhı ile platformun çalışma noktası kesişmemelidir.",
                    "İki ekipmanı aynı sevkiyatta talep ettiğinizde, hem araç organizasyonunu birleştirir hem sahada güvenli çalışma düzenini önceden kurarız. Bu, tek tek talep etmeye göre hem nakliye hem koordinasyon açısından daha verimlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kapasiteyi nasıl belirliyoruz, en büyüğünü mü istemeliyiz?",
                cevap:
                    "Hayır, en büyük kapasite her zaman doğru cevap değildir; dar koridorlarda manevra edemeyebilir ve gereksiz maliyet üretir. Doğru seçim, taşınacak en ağır yükün gerçek ağırlığına, palet boyutuna ve kaldırma yüksekliğine bakılarak yapılır. Bu üç bilgiyi bize verin, envanterdeki modeller arasından ihtiyacınıza tam uyan kapasiteyi önerelim; abartılı seçim hem maliyeti hem manevra riskini artırır.",
            },
            {
                soru: "İç mekânda hangi forklift kullanılmalı?",
                cevap:
                    "Kapalı imalat holünde egzoz emisyonu nedeniyle elektrikli veya akülü forklift zorunludur; dizel model bu hacimlerde kullanılamaz. Zemin boyalı veya perdahlı betonsa katı (solid) lastikli model tercih edilir, bu hem zemini korur hem iz bırakmaz. Vardiya boyunca kesintisiz kullanım gerekiyorsa akü kapasitesini ve şarj noktasını teslimat öncesi birlikte planlarız.",
            },
            {
                soru: "Depomuzun koridorları dar, standart forklift döner mi?",
                cevap:
                    "Çoğu zaman dönemez; bu durumda dar koridor forklifti (reach truck) gerekir. Seçim için yalnızca koridor genişliği yeterli değildir — raf yüksekliği ve direğin geriye yatma payı da hesaba girer. Depo planınızın kaba bir krokisini veya koridor ile raf ölçülerini gönderin, uygun modeli net biçimde söyleyelim; yanlış sınıf gönderilen bir forklift raflar arasında sıkışabilir.",
            },
            {
                soru: "Forklifti ne kadar süreyle kiralayabiliriz?",
                cevap:
                    "Günlük çağrıdan aylık dönemsel kiralamaya kadar esner; belirleyici olan kullanım sıklığınızdır. Sürekli, günlük kullanılan bir forklift için dönemsel kiralama neredeyse her zaman daha ekonomiktir; seyrek ve plansız ihtiyaçlarda günlük çağrı yeterlidir. Kullanım sıklığınızı söylerseniz iki modelin toplam maliyetini karşılaştırıp size uygun olanı önereceğiz.",
            },
            {
                soru: "Operatör şart mı, kendi personelimiz kullanabilir mi?",
                cevap:
                    "Kendi personeliniz kullanabilir, ancak ilgili sınıf için geçerli yeterlilik belgesine sahip olması mevzuat gereğidir. Belgeli personeliniz yoksa operatörlü kiralama seçeneğini öneririz; bu durumda kullanım sorumluluğu bizim operatörümüzde kalır. Kısa süreli ve tek seferlik işlerde operatörlü seçenek genellikle daha pratiktir; düzenli kullanımda kendi personelinizin eğitilmesi uzun vadede daha ekonomik olur.",
            },
            {
                soru: "Forklift sahada arızalanırsa ne olur?",
                cevap:
                    "Arıza bildirimini aldığımızda önceliğimiz işi durdurmamaktır: mümkünse aynı gün içinde envanterdeki uygun bir modelle ikame yaparız. Periyodik bakım ve mekanik arıza sorumluluğu bize aittir; kullanıcı tarafına düşen, günlük gözle kontrol ve arıza belirtisini erken bildirmektir. Envanterden hazır bulunan yedek modeller, bu ikame sürecinin uzun sürmesini engeller — ama yoğun dönemlerde ikame süresi değişebilir, bunu olduğu gibi söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Forklift kapasite/lastik/güç kaynağı ayrımı genel ürün ve mevzuat bilgisidir; envanterden hazır parkın işleyişi ve dar koridor değerlendirmesi kendi saha pratiğimize dayanır. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Eklemli Platform (Boom) Kiralama: Envanterden Hazır Erişim Sınıfı",
        giris:
            "Eklemli platform, dikey yükselmenin yetmediği ve sepetin bir engelin üstünden ya da yanından hedefe uzanması gerektiği işlerde devreye girer — kızağa alınmış bir gövdenin arka tarafı, bir konveyörün üstü, teşhir sahasında dizili ürünler arası bir dekal işi. Bomun kırılarak yaklaşabilmesi, makaslı sınıfın dikey sınırlı hareketine göre belirgin bir esneklik sağlar. '.store' envanter yaklaşımımızda farklı bom uzunluğuna ve farklı taşıma gücüne sahip birkaç eklemli model aynı anda hazır bekler; bu sayede iş tarifine göre model seçimi, uzun bir tedarik sürecine değil elimizdeki envantere bakılarak yapılır. Bu sayfada eklemli platformun ne zaman makaslı sınıfın yerini alması gerektiğini, iç mekân ile açık saha kullanımı arasındaki farkı ve dar dönüş zarfının nasıl hesaplandığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Makaslı yetmediğinde: yatay uzanma ihtiyacı",
                metin:
                    "Makaslı platform yalnızca dikey yükselir; hedefin önünde bir engel varsa — ürün gövdesi, tezgâh, konveyör hattı — sepetin bu engeli aşıp karşı tarafa ulaşması gerekir. Eklemli sınıf, bomunu kırarak bu tür engellerin üstünden veya yanından geçebilir. Karar noktası basittir: hedefin altına dosdoğru park edilebiliyorsa makaslı yeterlidir, edilemiyorsa eklemli sınıfa geçilir. Bu ayrımı net yapmak, sahada gereksiz makine değişimini önler.",
            },
            {
                baslik: "İç mekân ile açık saha arasındaki fark",
                metin:
                    "Kapalı imalat hacimlerinde egzoz emisyonu nedeniyle akülü eklemli model tercih edilir ve şase genişliği kapı ölçüsüne göre seçilir. Açık sahada — sevk alanı, dış cephe, teşhir sahası — dizel modeller daha yüksek çalışma yüksekliğine ve daha güçlü zemin toleransına sahiptir. İki ortam arasında model geçişi yapılacaksa, hangi bölümde hangi gücün kullanılacağını önceden netleştiririz; kapalı alana dizel makine göndermeyiz.",
            },
            {
                baslik: "Dar dönüş zarfının hesaplanması",
                metin:
                    "Eklemli platformun avantajı bomunu kırabilmesidir, ama bu esneklik dönüş sırasında daha geniş bir alan gerektirir. Sadece hedefe olan mesafe değil, makinenin konumlandığı noktadan bom hareketi sırasında kapladığı toplam alan da hesaba girer. Sıkışık bir sahada bu zarf hesaplanmadan makine yönlendirilirse, bom komşu ekipmana veya rafa çarpabilir. Saha planınızın kaba ölçüleri, bu hesabı teklif aşamasında yapmamızı sağlar.",
            },
            {
                baslik: "Taşıma kapasitesi ve sepet donanımı",
                metin:
                    "Eklemli sınıfın taşıma kapasitesi modele göre değişir ve bomun tam açıldığı durumda kapasite genellikle düşer — bu, üreticilerin standart bir güvenlik prensibidir. Kaynak ekipmanı, alet çantası veya montaj malzemesi taşınacaksa toplam ağırlığı ve bomun ne kadar açılacağını birlikte değerlendiririz. Sepete alet askısı veya kaynak battaniyesi gibi ek donanım gerekiyorsa bunu teslimattan önce hazırlarız.",
            },
            {
                baslik: "Envanterden bom uzunluğu seçimi",
                metin:
                    "Farklı bom uzunluğuna sahip birkaç eklemli model envanterde hazır bulunur; kısa uzanmalı işlerde daha kompakt bir model, uzun ve yüksek engelli işlerde daha büyük bomlu model tercih edilir. Bu çeşitlilik, tek bir sabit modele bağlı kalmadan iş tarifine en yakın makineyi seçebilmemizi sağlar ve talep geldiğinde ikinci bir tedarik süreci beklemeden sevkiyatı planlayabiliriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tarifine göre eklemli sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, eklemli platform taleplerinde en sık karşılaştığımız iş tariflerini ve uygun envanter sınıfını gösteriyor.",
                ],
                tablo: {
                    basliklar: ["İş tarifi", "Ortam", "Uygun sınıf", "Dikkat edilen nokta"],
                    satirlar: [
                        ["Ürün gövdesi arkası erişim", "Kapalı, dar", "Kompakt akülü eklemli", "Dönüş zarfı"],
                        ["Konveyör üstü geçiş", "Kapalı, orta genişlik", "Orta bomlu akülü", "Bom açılma yönü"],
                        ["Teşhir sahası son işler", "Açık, dar dizilim", "Kompakt akülü eklemli", "Komşu ürüne mesafe"],
                        ["Dış cephe / sevk sahası", "Açık, geniş", "Dizel eklemli", "Zemin toleransı"],
                    ],
                },
            },
            {
                baslik: "Bom kırarak yaklaşmanın pratik faydası",
                paragraflar: [
                    "Aradan geçmek yerine dışarıdan uzanmak, sıkışık dizilmiş bir sahada manevra riskini büyük ölçüde azaltır. Eklemli platform sahanın kenarına konumlanıp bomu kırarak hedefe ulaştığında, ürünler veya ekipman arasından geçme zorunluluğu ortadan kalkar.",
                    "Bu yaklaşım özellikle satılacak ürün veya hassas gövde parçalarının bulunduğu alanlarda tercih edilir; makinenin dar aralıklardan geçmesi gerekmediği için çarpma riski düşer. Sahanızın yerleşim düzenini gösteren birkaç fotoğraf, bu yaklaşımın uygulanabilir olup olmadığını teklif aşamasında netleştirir.",
                ],
            },
            {
                baslik: "Envanterden hazır bulunmanın sınırı",
                paragraflar: [
                    "Eklemli sınıfın envanterde çeşitli modellerle bulunması, her bom uzunluğunun her an müsait olduğu anlamına gelmez. Özellikle uzun bomlu ve yüksek kapasiteli modeller sayıca daha azdır ve yoğun dönemlerde daha uzun müsaitlik beklentisi doğabilir.",
                    "Böyle bir durumda alternatif olarak yakın bir tarih ya da farklı bir sınıf öneririz; sahaya uymayan bir makineyi göndermek yerine doğru zamanı ya da doğru modeli beklemeyi tercih ederiz. Bunu teklif aşamasında açıkça söyleriz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Makaslı mı eklemli mi seçmeliyiz?",
                cevap:
                    "Hedefin altına dosdoğru park edebiliyorsanız makaslı platform hem daha geniş sepet hem daha ekonomik bir çözümdür. Hedefle sepet arasında bir engel varsa — gövde, tezgâh, konveyör — eklemli sınıf gerekir çünkü bomu kırarak bu engelin üstünden veya yanından uzanabilir. Saha fotoğrafı veya kaba bir kroki, bu kararı teklif aşamasında netleştirmemizi sağlar.",
            },
            {
                soru: "Kapalı alanda dizel eklemli platform kullanılabilir mi?",
                cevap:
                    "Hayır, kapalı imalat hacimlerinde egzoz emisyonu nedeniyle dizel model kullanılmaz; akülü eklemli sınıf tercih edilir. Şase genişliğinin kapı ölçüsüne uyup uymadığı ayrıca kontrol edilir. Dış sahada ise dizel model daha güçlü ve daha yüksek çalışma kapasitesine sahip olduğu için genellikle tercih edilir; hangi ortamda hangi gücün kullanılacağını teslimattan önce netleştiririz.",
            },
            {
                soru: "Sahamız dar, bom açıldığında komşu ekipmana çarpar mı?",
                cevap:
                    "Bu riski önlemek için yalnızca hedefe olan mesafeyi değil, bomun hareketi sırasında kapladığı toplam dönüş zarfını hesaplarız. Sıkışık bir sahada bu hesap yapılmadan makine yönlendirilmez. Saha planınızın kaba ölçülerini veya birkaç fotoğrafını gönderin; dönüş zarfını teklif aşamasında değerlendirip uygun bom uzunluğunu önerelim.",
            },
            {
                soru: "Bom tam açıldığında taşıma kapasitesi düşer mi?",
                cevap:
                    "Evet, çoğu eklemli modelde bom tam açıldığında taşıma kapasitesi üretici tarafından düşürülür; bu standart bir güvenlik prensibidir. Kaynak ekipmanı veya ağır malzeme taşıyacaksanız, bomun ne kadar açılacağını ve toplam yükü bize önceden bildirin. Kapasiteyi aşan bir kullanım güvenlik riski oluşturur; bu yüzden bu bilgiyi teklif aşamasında netleştiririz.",
            },
            {
                soru: "İstediğimiz bom uzunluğu o gün müsait olmayabilir mi?",
                cevap:
                    "Olabilir; özellikle uzun bomlu ve yüksek kapasiteli modeller envanterde sayıca daha azdır. Bu durumda size en yakın müsaitlik tarihini ya da ihtiyacınızı karşılayabilecek alternatif bir sınıfı açıkça bildiririz. Sahaya uymayan bir makine göndermek yerine doğru zamanı beklemeyi öneririz; bu, sizin için de daha güvenli bir sonuçtur.",
            },
            {
                soru: "Teşhir sahamızda ürünler sıkışık dizili, eklemli sınıf aralarına girer mi?",
                cevap:
                    "Girmesine çoğu zaman gerek kalmaz — çözüm aradan geçmek değil, dışarıdan uzanmaktır. Eklemli platform sahanın kenarına konumlanıp bomu kırarak hedefe ulaşır, bu da dar dizilimde manevra riskini büyük ölçüde azaltır. Ürünler arası net açıklığı ve zemin türünü bize iletin; teşhir sahasına giren makineyi iz bırakmayan lastikle hazırlarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Eklemli platformların bom kırma özelliği ve kapasite düşüş kuralı genel ürün bilgisidir; envanterden model seçimi ve dönüş zarfı değerlendirmesi kendi saha pratiğimize dayanır. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İç Mekân ve Depo İçi Platform Kiralama: Envanterden Hazır Akülü Seçenek",
        giris:
            "Depo ve iç mekân işlerinin ortak kuralı bellidir: kapalı hacimde egzozlu makine yoktur, zemin çoğunlukla hassas betondur ve raf ya da tesisat gibi engeller sepetin hareket alanını daraltır. Bu üç kısıt, iç mekân platform seçimini açık saha işlerinden ayıran temel çizgidir. '.store' envanter yaklaşımımızda farklı kapalı yükseklik ve şase genişliğine sahip akülü modeller aynı anda hazır bekler; bu sayede depo kapısının ölçüsü veya raf aralığının darlığı, bir tedarik sorununa değil elimizdeki envanterden seçime dönüşür. Bu sayfada depo içi çalışmanın kapı ve tavan kısıtını, zemin koruma alışkanlıklarını ve raf arası dar koridorlarda hangi sınıfın tercih edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kapı ölçüsü ve kapalı yükseklik",
                metin:
                    "Depo ve fabrika içi işlerde makinenin önce kapıdan geçmesi gerekir; bu yüzden seçim çalışma yüksekliğinden önce kapalı yükseklik ve şase genişliğine bakılarak yapılır. Kapı net eni, net yüksekliği ve varsa eşik kotu bize iletildiğinde, envanterdeki dar şaseli modellerden hangisinin uygun olduğunu net söyleriz. Bu üç ölçü alınmadan gönderilen bir makine, kapıdan geri dönebilir — bu, hem zaman hem nakliye kaybı demektir.",
            },
            {
                baslik: "Egzozsuz çalışma zorunluluğu",
                metin:
                    "Kapalı hacimlerde egzoz emisyonu birikir ve bu, hem işçi sağlığı hem yangın güvenliği açısından kabul edilemez; bu yüzden depo içi işlerde yalnızca akülü ya da elektrikli modeller kullanılır. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimattan önce birlikte planlanır. İki vardiyalı işletmelerde ara şarj penceresinin nasıl kurulacağı da bu aşamada konuşulur.",
            },
            {
                baslik: "Zemin koruma ve iz bırakmama",
                metin:
                    "Depo zeminleri genellikle epoksi kaplı veya perdahlı betondur ve standart lastik bu yüzeylerde iz bırakabilir; bu yüzden iç mekân işlerine iz bırakmayan (beyaz dolgu) lastikli modeller yönlendirilir. Yükleme rampası çevresindeki kot farkları için çukur önleme sisteminin devrede olması da ayrıca kontrol edilir. Zemin türünüzü ve varsa özel hassasiyetinizi talep aşamasında bildirmeniz, sahada sürpriz bir hasar riskini önler.",
            },
            {
                baslik: "Raf arası dar koridor ve manevra",
                metin:
                    "Yüksek raflı depolarda koridor genişliği makine seçiminin en kritik kısıtıdır; standart şaseli bir platform raf aralığına giremeyebilir. Bu durumda dar şaseli akülü sınıf tercih edilir ve raf yüksekliğiyle çalışma yüksekliği birlikte hesaplanır — raf üstü işlerde rafın kendi yüksekliği de payına eklenir. Koridor ölçüsü ve raf yüksekliği elimizde olduğunda, hangi modelin sığacağını kesin söyleriz.",
            },
            {
                baslik: "Depo trafiğiyle birlikte çalışma",
                metin:
                    "Depo içi işler çoğu zaman forklift trafiğinin sürdüğü bir ortamda yürütülür; platformun çalışma alanı bu trafikten bariyerle ayrılmalıdır. Raf sistemi montajı, çatı altı aydınlatma veya sprinkler hattı bakımı gibi işlerde çalışma noktasının altındaki koridor geçici olarak kapatılır. Bu düzeni depo yönetimiyle birlikte kurarız; işin süresi ve trafiğin yoğunluğuna göre çalışma saatleri de ayarlanabilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Depo tipine göre sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, depo ve iç mekân işlerinde en sık karşılaştığımız yapı tiplerini ve uygun envanter sınıfını gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Tipik kısıt", "Uygun sınıf", "Lastik/zemin önlemi"],
                    satirlar: [
                        ["Standart depo/antrepo", "Kapı ölçüsü", "Akülü makaslı", "İz bırakmayan lastik"],
                        ["Yüksek raflı depo", "Dar koridor", "Dar şaseli akülü", "Koridor ölçüsüne göre"],
                        ["Üretim holü içi", "Egzoz yasağı", "Akülü makaslı/eklemli", "Standart"],
                        ["Yükleme rampası çevresi", "Kot farkı", "Akülü, çukur önleme sistemli", "Zemin kontrolü"],
                    ],
                },
            },
            {
                baslik: "Envanterden dar şase seçeneğinin avantajı",
                paragraflar: [
                    "Farklı şase genişliğine sahip birkaç akülü model envanterde hazır bulunur; bu, kapı veya koridor ölçüsü ne olursa olsun elimizdeki modeller arasından uygun olanı doğrudan sevkiyata alabilmemiz anlamına gelir.",
                    "Ölçü belirsizse birkaç fotoğraf da işimizi görür; sahaya yanlış şaseli makine göndermemek, hem sizin hem bizim için zaman kaybını önler.",
                ],
            },
            {
                baslik: "Vardiyalı depoda şarj ve bakım düzeni",
                paragraflar: [
                    "Sürekli çalışan bir depoda şarj planı, işin aksamaması için önceden kurulmalıdır. Vardiya sonunda makinenin uygun bir priz noktasına çekilmesi, ertesi gün tam kapasiteyle başlamasını sağlar; iki vardiyalı işletmelerde ara şarj penceresini birlikte planlarız.",
                    "Periyodik bakım ve arıza müdahalesi bizim sorumluluğumuzdadır; dönemsel kiralamalarda bu, saha ziyaretiyle yapılır ve makine depodan çıkarılmaz. Kullanıcı tarafına düşen, günlük gözle kontrol ve erken hasar bildirimidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Depo kapımız dar, hangi modeli önerirsiniz?",
                cevap:
                    "Kapı net enini, net yüksekliğini ve varsa eşik kotunu bize iletin; envanterdeki dar şaseli akülü modellerden ölçüye uyanı seçeriz. Çalışma yüksekliği kadar kapalı yükseklik de belirleyicidir çünkü makine önce kapıdan geçmek zorundadır. Ölçü belirsizse birkaç fotoğraf yeterli olur; bu, sahaya yanlış model gönderme riskini ortadan kaldırır.",
            },
            {
                soru: "Depo içinde dizel makine kullanabilir miyiz?",
                cevap:
                    "Hayır, kapalı hacimlerde egzoz emisyonu kabul edilemez; yalnızca akülü veya elektrikli modeller kullanılır. Bu, tercih değil zorunluluktur. Vardiya boyunca kesintisiz kullanım gerekiyorsa akü kapasitesini ve şarj noktasını teslimattan önce birlikte planlarız; iki vardiyalı işletmelerde ara şarj penceresi de bu aşamada konuşulur.",
            },
            {
                soru: "Zeminimiz epoksi kaplı, iz bırakır mı?",
                cevap:
                    "Standart siyah lastik epoksi veya perdahlı beton üzerinde iz bırakabilir; bu yüzden iç mekân işlerine iz bırakmayan (beyaz dolgu) lastikli modelleri yönlendiririz. Zemin türünüzü ve varsa özel hassasiyetinizi talep aşamasında bildirin, bu önlemi teklife ekleyip sahaya hazır göndeririz.",
            },
            {
                soru: "Raf aralarımız dar, platform sığar mı?",
                cevap:
                    "Koridor genişliği ve raf yüksekliği birlikte değerlendirilir; standart şaseli bir platform dar koridora giremeyebilir, bu durumda dar şaseli akülü sınıf gerekir. Raf üstü işlerde rafın kendi yüksekliği de çalışma yüksekliği hesabına eklenir. Koridor ölçünüzü ve raf yüksekliğinizi verin, uygun modeli kesin söyleyelim.",
            },
            {
                soru: "Depo içinde forklift trafiği var, platformla birlikte çalışılabilir mi?",
                cevap:
                    "Çalışılabilir, ama çalışma alanının forklift güzergâhından bariyerle ayrılması şarttır. Raf montajı veya tavan işi gibi kalemlerde çalışma noktasının altındaki koridor geçici olarak kapatılır. Bu düzeni depo yönetiminizle birlikte kurarız; trafiğin yoğun olduğu saatler dışına alınan çalışma hem güvenli hem hızlı biter.",
            },
            {
                soru: "Makineyi depoda birkaç hafta bırakabilir miyiz?",
                cevap:
                    "Bırakabilirsiniz; sürekli kullanılan işlerde dönemsel kiralama günlük çağrıya göre daha ekonomiktir. Şarj için depo içinde uygun bir priz noktası belirleriz; periyodik bakım ve arıza müdahalesi bizim sorumluluğumuzda kalır ve saha ziyaretiyle yapılır, makine depodan çıkarılmaz. Kullanıcı tarafına düşen tek şey günlük gözle kontrol ve erken hasar bildirimidir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı hacimde egzozsuz çalışma zorunluluğu ve zemin koruma pratiği genel iş güvenliği bilgisidir; envanterden dar şase seçimi ve raf arası değerlendirme kendi saha pratiğimize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Çelik Konstrüksiyon Montaj Platformu: Envanterden Hazır İmalat Ekipmanı",
        giris:
            "Çelik konstrüksiyon montajı, imalat holünün en yoğun yükseklik ihtiyacı doğuran işlerinden biridir: kolon-kiriş birleşimi, aşık montajı, cephe kaplama, çatı altı bağlantı elemanları — hepsi yerden birkaç metre yukarıda, çoğu zaman iskele kurmaya değmeyecek kısa sürelerde yapılır. '.store' envanter yaklaşımımız burada özellikle işe yarar: bir montaj ekibi sahaya geldiğinde erişim ekipmanının orada hazır beklemesi gerekir, kurulum süresi kaybedilecek zaman değildir. Farklı sınıftaki makinelerin envanterde hazır bulunması, montaj takviminin kısa ve yoğun günlerinde makineyi beklemeden işe başlamayı mümkün kılar. Bu sayfada çelik konstrüksiyon montajının hangi aşamasında hangi sınıfın kullanıldığını, kaynak işi sırasında alınan önlemleri ve sanayi holü gibi büyük hacimlerde makine seçiminin nasıl yapıldığını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Montaj aşamasına göre sınıf",
                metin:
                    "Çelik konstrüksiyon montajı aşağıdan yukarı ilerler: kolon dikimi ve temel bağlantısı görece alçak kotta, kiriş ve aşık montajı orta kotta, çatı altı ve cephe kaplama işleri ise en üst kotta yapılır. Bu sıralama, aynı sahada farklı günlerde farklı sınıfların gerekebileceği anlamına gelir. Montaj programınızı paylaştığınızda, hangi haftada hangi sınıfın gerekeceğini önceden planlar, makineyi o güne göre ayırırız.",
            },
            {
                baslik: "Sanayi holünde geniş açıklık ve yükseklik",
                metin:
                    "Sanayi holleri genellikle geniş açıklıklı ve yüksek tavanlı yapılardır; bu, standart kompakt sınıfın yetersiz kaldığı, büyük makaslı veya eklemli sınıfın devreye girdiği bir ortamdır. Zemin çoğunlukla beton olsa da inşaat aşamasında henüz sertleşmemiş dökümler bulunabilir; bu durumda zemin dayanımı sorulmadan ağır makine sürülmez. Holün tamamlanmışlık düzeyini ve zemin durumunu talep aşamasında konuşuruz.",
            },
            {
                baslik: "Kaynak işi sırasında koruma önlemi",
                metin:
                    "Çelik konstrüksiyon montajının büyük bölümü kaynaklı birleşimlerdir ve sepetten kaynak yapılacaksa çapak ve kıvılcımın hidrolik hortumlara ve sepet tabanına düşmesine karşı koruyucu battaniye serilir. Kaynak makinesinin sepete alınacak ağırlığı taşıma kapasitesine dahildir; iki kişi, alet ve kaynak ekipmanı birlikte sınırı zorlayabilir. Kaynak yapılacağını talep aşamasında belirtmeniz, uygun kapasiteli sınıfın ve koruma setinin birlikte hazırlanmasını sağlar.",
            },
            {
                baslik: "Cephe kaplama ve dış yüzey işleri",
                metin:
                    "Cephe paneli montajı ve dış yüzey kaplaması, binanın dışında ve genellikle rüzgâra açık bir kotta yapılır. Bu işlerde eklemli sınıf, panelin arkasına veya yan tarafına uzanabilme esnekliği nedeniyle sıkça tercih edilir. Rüzgâr sınırı üretici tarafından belirlenir ve bu sınır aşıldığında çalışma durur; yüksek kotlu cephe işlerini günün rüzgârın zayıf olduğu dilimine planlamak, iş kaybını azaltan pratik bir alışkanlıktır.",
            },
            {
                baslik: "Kısa süreli ve yoğun montaj takvimi",
                metin:
                    "Çelik konstrüksiyon işleri genellikle sıkı bir montaj takvimine bağlıdır ve gecikme, ardışık iş kalemlerini de geciktirir. Envanterden hazır bulunan makine, montaj ekibinin sahaya vardığı gün erişim ekipmanını beklemesini önler. Yoğun montaj dönemlerinde birden fazla sınıfa aynı anda ihtiyaç duyulabilir; bu durumda ihtiyaç listenizi önceden paylaşmanız, tüm sınıfların aynı gün sahada olmasını garanti eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Montaj kotuna göre sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon montajının tipik aşamalarını ve her aşamada tercih edilen envanter sınıfını gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Montaj aşaması", "Tipik kot", "Uygun sınıf", "Not"],
                    satirlar: [
                        ["Kolon dikimi ve temel bağlantısı", "Alçak", "Kompakt akülü makaslı", "Genellikle gerekmeyebilir"],
                        ["Kiriş ve aşık montajı", "Orta", "Akülü/dizel makaslı", "Zemin durumuna göre"],
                        ["Çatı altı bağlantı", "Yüksek", "Eklemli bom", "Açıklık ve engel kontrolü"],
                        ["Cephe kaplama", "Yüksek, dış", "Eklemli bom", "Rüzgâr sınırı takip edilir"],
                    ],
                },
            },
            {
                baslik: "Envanterden hazır bulunmanın montaj takvimine katkısı",
                paragraflar: [
                    "Çelik konstrüksiyon montajında bir günlük gecikme genellikle ardışık iş kalemlerini de geciktirir; bu yüzden erişim ekipmanının sahada zamanında bulunması kritik bir kalemdir. Farklı sınıftaki makinelerin envanterde hazır bekliyor olması, montaj programının kısa ve yoğun günlerinde makineyi beklemeden işe başlamayı hedefler.",
                    "Yoğun dönemlerde birden fazla sınıfa aynı anda ihtiyaç duyulan işlerde, ihtiyaç listesini erken paylaşan ekipler makineleri kendi programlarına göre ayırtabilir; son dakika taleplerinde ise elimizdeki müsaitliğe göre çalışırız.",
                ],
            },
            {
                baslik: "Zemin henüz sertleşmemişse ne yapılır",
                paragraflar: [
                    "İnşaat aşamasındaki sanayi hollerinde zemin dökümü henüz tam dayanıma ulaşmamış olabilir; bu durumda ağır bir makinenin erken sürülmesi kalıcı iz veya çatlak riski taşır. Beton yaşını ve tasarım mukavemetini zemini döken taraftan almak, tahminle karar vermekten daha güvenlidir.",
                    "Bekleme süresi uygun değilse yük dağıtma plakaları ya da daha hafif bir sınıf alternatif olarak değerlendirilir. Zemin durumunu ve döküm tarihini bildiren ekiplerle bu kararı sahaya çıkmadan netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Montaj takvimimiz sıkı, makine zamanında sahada olur mu?",
                cevap:
                    "Montaj programınızı ve hangi haftada hangi kotta çalışacağınızı paylaştığınızda, makineyi bu takvime göre önceden ayırırız. Envanterden hazır bulunan modeller, sahaya vardığınız gün erişim ekipmanını beklemenizi önlemeyi hedefler. Yoğun dönemlerde birden fazla sınıfa ihtiyaç varsa, listeyi erken paylaşmanız tüm sınıfların aynı gün sahada olmasını güvence altına alır.",
            },
            {
                soru: "Kaynak işini sepetten yapabilir miyiz?",
                cevap:
                    "Yapılabilir, düzeni baştan kurmak şartıyla. Çapak ve kıvılcımın hortumlara ve sepet tabanına düşmesine karşı koruyucu battaniye serilir, hortum güzergâhı kıvılcım yönünden kaçırılır. Kaynak makinesinin ağırlığı taşıma kapasitesine dahildir; bu yüzden kaynak yapılacağını talep aşamasında söylemeniz, uygun kapasiteli sınıfın seçilmesini sağlar.",
            },
            {
                soru: "Sanayi holümüzün zemini henüz tam sertleşmedi, makine sürülebilir mi?",
                cevap:
                    "Bu, betonun yaşına ve tasarım mukavemetine bağlıdır ve bilgiyi zemini döken taraftan almanız gerekir. Erken sürülen ağır bir makine kalıcı iz veya çatlak bırakabilir. Bekleme süresi uygun değilse yük dağıtma plakalarıyla çalışmak ya da daha hafif bir sınıfa geçmek alternatiftir. Zemin durumunu ve döküm tarihini bildirin, hangi yolun uygun olduğunu sahaya çıkmadan söyleyelim.",
            },
            {
                soru: "Cephe kaplama işinde rüzgâr çalışmayı etkiler mi?",
                cevap:
                    "Evet; yükseklik ve makine sınıfına bağlı bir rüzgâr sınırı üreticiler tarafından belirlenir ve bu sınır aşıldığında çalışma durur, bu bir tercih değil güvenlik kuralıdır. Pratik yaklaşımımız, yüksek kotlu cephe kalemlerini günün rüzgârın zayıf olduğu dilimine yazmaktır. Elinizde hem alçak kotlu hem yüksek kotlu iş varsa, rüzgâr sertleştiğinde ekibi alçak kottaki işlere kaydırabiliriz.",
            },
            {
                soru: "Aynı anda birden fazla sınıfa ihtiyacımız olacak, tümü aynı gün gelir mi?",
                cevap:
                    "Genellikle gelir, ancak bunu garanti etmek için ihtiyaç listenizi mümkün olduğunca erken paylaşmanızı isteriz. Envanterde farklı sınıflar hazır bulunsa da, yoğun dönemlerde belirli bir sınıfın tüm modelleri aynı anda başka sahalarda olabilir. Erken paylaşılan bir liste, tüm sınıfların aynı gün için ayrılmasını mümkün kılar; son dakika taleplerinde elimizdeki müsaitliğe göre çalışırız.",
            },
            {
                soru: "Geniş açıklıklı holde hangi sınıf tercih edilir?",
                cevap:
                    "Geniş açıklık ve yüksek tavan, genellikle büyük makaslı veya eklemli sınıfı gerektirir; kompakt sınıflar bu ölçekte yetersiz kalabilir. Zemin beton olsa da inşaat aşamasındaysa dayanımı önceden sorarız. Holün gerçek açıklığını, tavan yüksekliğini ve zemin durumunu bize iletin; envanterdeki uygun büyüklükteki modeli buna göre öneririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Çelik konstrüksiyon montajının aşamalı ilerleyişi ve rüzgâr sınırı kuralı genel sektör ve iş güvenliği bilgisidir; envanterden hazır bulunma ve montaj takvimine bağlı planlama kendi saha pratiğimize dayanır. Tesis adı, marka ve rakam kullanılmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Tarım ve Silo Sahası Platform Kiralama: İmalatçı Gözüyle Envanterden Hazır Erişim",
        giris:
            "Tarım makineleri imalatçısının silo ve saha ile ilişkisi iki yönlüdür: bir yandan ürettiği ekipman — gübre dağıtıcısı, silaj makinesi, tahıl taşıma sistemi — çoğu zaman kendi silosu veya deposu olan işletmelere gider, öte yandan imalatçının kendi atölyesi de zaman zaman silo gövdesi veya büyük hazne üretir. Bu sayfayı, açık tarla veya sulama sahasına değil, imalatçının ürettiği veya kurduğu silo ve saha ekipmanına erişim ihtiyacına göre yazdık. '.store' envanter yaklaşımımız burada da geçerlidir: silo gövdesi üstü işler için uygun kompakt ve eklemli modeller aynı anda hazır bekler. Kapsamı dürüstçe çizmek gerekirse, bu sayfa açık arazi ve ağır hizmet sınıfı toprak yolu işlerini kapsamaz — o iş bölgesel ağır hizmet odaklı kardeş hizmetlere aittir; burada imalatçının ürettiği veya işletmenin sahasında bulunan silo/tank gövdesi üstü erişim anlatılır.",
        maddeler: [
            {
                baslik: "Silo gövdesi üst yüzeyi ve kapak montajı",
                metin:
                    "Silo veya büyük hazne gövdesi imalat sırasında zeminden birkaç metre yükseldiğinde, üst kapak montajı, sensör bağlantısı ve merdiven düzeni gibi işler yerden değil gövdenin üstünden yapılır. Sepetli erişim, montajcının gövdeye tırmanmadan, iki eli serbest biçimde bu işleri tamamlamasını sağlar. Gövdenin toplam yüksekliğini ve çevresindeki serbest alanı bildirdiğinizde, uygun kompakt sınıfı envanterden ayırırız.",
            },
            {
                baslik: "Dış saha kurulumunda zemin belirsizliği",
                metin:
                    "Bir silo ya da tank işletme sahasına kurulduğunda, zemin çoğu zaman yeni dökülmüş beton ya da sıkıştırılmış mıcırdır ve makinenin nereye basacağı ancak sahaya varıldığında netleşir. Kurulum noktasının fotoğrafı, hangi sınıfın uygun olacağını ve yük dağıtma plakasına ihtiyaç olup olmayacağını önceden söyler. Bu belirsizliği azaltmak için sahaya çıkmadan önce birkaç soru sorarız; tahminle karar vermeyiz.",
            },
            {
                baslik: "İmalatçının silo/hazne üretim istasyonunda erişim",
                metin:
                    "Atölye içinde üretilen silo elemanları ve hazneler, kaynaklı imalat kızağında yükseldiğinde üst dikiş kaynağı ve montaj deliği gibi işler yerden birkaç metre yukarıda geçer. Bu, imalatçı gözüyle yazdığımız diğer sayfalarda anlattığımız gövde üstü çalışma mantığının bir uzantısıdır — silo elemanları da diğer büyük parçalar gibi üstüne çıkılması gereken bir hacimdir ve sepetli erişim burada da aynı kazancı sağlar.",
            },
            {
                baslik: "Açık tarla ve sulama işleri kapsam dışıdır",
                metin:
                    "Dürüstçe belirtmemiz gereken bir sınır var: açık tarla yollarında, sulama altyapısında veya toprak yollu geniş arazilerde çalışacak ağır hizmet sınıfı ekipman ihtiyacı bu sayfanın kapsamında değildir. Bu ihtiyaç için farklı bir zemin ve makine değerlendirmesi gerekir. Talebiniz açık arazi veya toprak yol içeriyorsa bunu bize söyleyin; kapsamımıza uymuyorsa bunu açıkça belirtir, doğru yönlendirmeyi yaparız.",
            },
            {
                baslik: "Envanterden hazır seçenekle kısa süreli kurulum",
                metin:
                    "Silo veya hazne kurulumu genellikle kısa süreli ve belirli bir montaj penceresine bağlıdır. Envanterden hazır bulunan kompakt ve eklemli modeller, kurulum takviminin son haftasına sıkışan üst donanım işlerinde makineyi beklemeden çalışmayı mümkün kılar. Montaj programınızı paylaştığınızda, üst donanım tamamlama aşamasının hangi güne denk geldiğini görür, makineyi o güne göre ayırırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo/hazne işlerinde kapsam ve sınıf tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, imalatçı gözüyle ele aldığımız silo/hazne işlerinin kapsamını ve kapsam dışı kalan alanı netleştiriyor.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Kapsam", "Uygun sınıf", "Not"],
                    satirlar: [
                        ["Silo gövdesi üst kapak/sensör", "Kapsam içi", "Kompakt akülü/eklemli", "Gövde yüksekliğine göre"],
                        ["Atölyede silo elemanı imalatı", "Kapsam içi", "Kompakt akülü makaslı", "Gövde üstü çalışma mantığı"],
                        ["Dış saha kurulum sonrası ayar", "Kapsam içi", "Kompakt eklemli", "Zemin belirsizliği var"],
                        ["Açık tarla/sulama/toprak yol", "Kapsam dışı", "—", "Farklı değerlendirme gerekir"],
                    ],
                },
            },
            {
                baslik: "Kapsam dışı bir talep geldiğinde ne yapılır",
                paragraflar: [
                    "Açık arazi veya toprak yol içeren bir talep geldiğinde bunu üstlenmiş gibi davranmayız; kapsamımızın imalatçı ve tesis odaklı olduğunu açıkça söyleriz. Bu dürüstlük, yanlış makineyi yanlış zemine göndermekten daha değerlidir çünkü uygun olmayan bir zeminde çalışan makine hem güvenlik hem performans riski taşır.",
                    "Talebinizin kapsamımıza girip girmediğinden emin değilseniz, saha fotoğrafı veya kısa bir açıklama yeterlidir; birkaç dakika içinde net cevap veririz.",
                ],
            },
            {
                baslik: "Silo kurulumunda montaj sırasının etkisi",
                paragraflar: [
                    "Silo ve hazne kurulumunda erişim ihtiyacı montajın son aşamasında yoğunlaşır: temel ve gövde oturtma görece alçak kotta, üst donanım tamamlama ise en yüksek kotta yapılır. Bu sıralamayı bilmek, makine talebini montajın başında değil montaj planı çıkarılırken belirlemeyi mümkün kılar.",
                    "Envanterden hazır bulunan makine, bu son aşamaya denk gelen kısa pencerede beklemeden devreye girer; montaj programınızı erken paylaşmanız, doğru günde doğru sınıfın sahada olmasını güvence altına alır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo gövdesinin üst kapak montajı için hangi sınıf gerekir?",
                cevap:
                    "Gövdenin toplam yüksekliğine ve çevresindeki serbest alana bağlıdır; çoğu durumda kompakt akülü makaslı sınıf yeterlidir, gövde çevresinde manevra kısıtı varsa kompakt eklemli tercih edilir. Bize gövdenin kızak üstündeki toplam yüksekliğini söyleyin, bina yüksekliğini değil; sınıf seçimini buna göre yaparız.",
            },
            {
                soru: "Bu sayfa açık tarla ve sulama işlerini de kapsıyor mu?",
                cevap:
                    "Hayır, dürüstçe belirtmemiz gerekir: açık tarla yolu, sulama altyapısı ve toprak yollu geniş arazi işleri bu kapsamın dışındadır ve farklı bir zemin/makine değerlendirmesi gerektirir. Bu sayfa, imalatçının ürettiği veya işletmenin sahasında bulunan silo/hazne gövdesi üstü erişimi anlatır. Talebiniz açık arazi içeriyorsa bize söyleyin, kapsamımıza uymuyorsa bunu açıkça belirtip yönlendirme yaparız.",
            },
            {
                soru: "Kurulum sahasının zemini yeni dökülmüş beton, makine sürebilir miyiz?",
                cevap:
                    "Betonun yaşına ve tasarım mukavemetine bağlıdır ve bu bilgiyi zemini döken taraftan almanız gerekir; tahminle karar verilecek bir konu değildir. Erken sürülen ağır bir makine yeni zeminde kalıcı iz bırakır. Kurulum noktasının fotoğrafını ve beton döküm tarihini iletin, yük dağıtma plakası mı yoksa daha hafif bir sınıf mı gerektiğini sahaya çıkmadan söyleyelim.",
            },
            {
                soru: "Atölyemizde silo elemanı üretiyoruz, bu da kapsama giriyor mu?",
                cevap:
                    "Evet, atölye içinde üretilen silo ve hazne elemanlarının kaynak kızağındaki üst yüzey işleri kapsamımızdadır; bu, diğer büyük gövde parçalarında uyguladığımız gövde üstü çalışma mantığının bir uzantısıdır. Kızağa alınmış elemanın toplam yüksekliğini iletin, uygun kompakt sınıfı önerelim.",
            },
            {
                soru: "Kurulum kısa sürecek, envanterden hazır makine bu işe uyar mı?",
                cevap:
                    "Uyar; silo/hazne kurulumlarının çoğu kısa ve belirli bir montaj penceresine bağlıdır, tam da envanterden hazır bulunan modellerin işe yaradığı senaryodur. Montaj programınızı ve üst donanım tamamlama tarihinizi paylaşın, makineyi bu güne göre önceden ayıralım.",
            },
            {
                soru: "Silo dışında sulama pompası veya kuyu başı işimiz de var, bunu da yapar mısınız?",
                cevap:
                    "Sulama altyapısı ve açık saha ekipmanı bu sayfanın kapsamı dışındadır; bunu size dürüstçe söylüyoruz çünkü farklı bir zemin ve makine değerlendirmesi gerektirir. Silo veya hazne gövdesi üstü bir işiniz varsa onu memnuniyetle değerlendiririz; sulama tarafındaki ihtiyacınız için doğru kapsamı size yönlendirebiliriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Tarım makineleri imalatının silo/hazne üretimiyle ilişkisi genel sektör bilgisidir; kapsam sınırı (açık arazi hariç tutma) ve envanterden hazır kurulum planlaması kendi çalışma pratiğimize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Enerji ve Aydınlatma Bakım Platformu: Envanterden Hazır Kısa Süreli Erişim",
        giris:
            "İmalat atölyesinin ve teşhir sahasının aydınlatma ve enerji hattı ihtiyaçları çoğu zaman büyük bir proje değil, tek bir armatürün değişimi, bir kablo tavasının kontrolü ya da bir tabela aydınlatmasının onarımıdır. Bu tip işlerin ortak özelliği kısalığıdır — bir-iki saatlik bir iş için makine beklemek, işin kendisinden daha uzun sürebilir. '.store' envanter yaklaşımımız tam olarak bu senaryoda fark yaratır: kompakt akülü modeller hazır bekler, talep geldiğinde tedarik süreci beklemeden sevkiyat kurulur. Bu sayfada tavan aydınlatması ve elektrik hattı bakımının nasıl planlandığını, kısa işlerin nasıl listeye toplandığını ve enerji hattı çalışmasında hangi güvenlik adımlarının pazarlıksız olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tek armatür için hazır nokta listesi",
                metin:
                    "Tek bir aydınlatma armatürü için çağrı açmadan önce, atölyedeki veya sahadaki diğer gerçek yüksek nokta ihtiyaçlarını — tavan aydınlatması, kablo tavası, tabela aydınlatması — aynı listede toplamak, aynı konumlanmadan birden fazla kalemi kapatmayı mümkün kılar. Bu listeyi bizimle paylaştığınızda, hangi kalemlerin aynı erişim penceresinde bitirilebileceğini birlikte belirleriz; işi gereksiz büyütmeden gerçek kazancı ortaya çıkarırız.",
            },
            {
                baslik: "Enerji hattı üzerinde çalışma güvenliği",
                metin:
                    "Elektrik panosu, hat veya direk çevresinde yapılacak bir bakım işi, tesisin kendi enerji kesme prosedürünü gerektirir; platform operatörü hattı kendi başına kapatmaz veya açmaz. Çalışılacak hattın kesilip kesilmediği, ilgili yetkilinin onayı olmadan çalışmaya başlanmaz. Bu, işin kısa sürmesiyle esnetilecek bir kural değildir — kısa bir iş de aynı titizlikle planlanır.",
            },
            {
                baslik: "Kısa süreli operatörlü kullanım",
                metin:
                    "Bir-iki saatlik bir aydınlatma bakımı için işletmenin kendi personelinin platform kullanma eğitimi alması genellikle verimli değildir; bu tip kısa işlerde operatörlü kiralama tercih edilir. Operatör manevra, yükselme ve acil inişi yönetir; elektrik işini işletmenin yetkili teknisyeni yapar. Görev sınırları teslimde net biçimde çizilir — operatör teknik montaj kararı vermez.",
            },
            {
                baslik: "Dağınık noktaların aynı gün taranması",
                metin:
                    "Bir tesiste birden fazla aydınlatma veya tabela noktası bakım bekliyorsa, bu noktalar bir gün içinde sıralı biçimde dolaşılabilir. Her nokta için hedef, kot ve alt engel önceden kaydedilir; makine geldiğinde ölçü yeniden aranmaz. Bu düzen, tek tek çağrı açmaya göre hem nakliye hem zaman açısından belirgin bir tasarruf sağlar.",
            },
            {
                baslik: "Dış cephe ve tabela aydınlatması",
                metin:
                    "Açık sahadaki tabela ve cephe aydınlatması, rüzgâr ve zemin koşullarına göre planlanır. Bu işler genellikle kompakt eklemli sınıf gerektirir çünkü tabela direği ya da cephe yapısı düz bir dikey erişimi engelleyebilir. Müşteri trafiğinin yoğun olduğu saatler dışına alınan çalışma, hem güvenli hem hızlı biter; bu saatleri işletmeyle birlikte belirleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kısa enerji/aydınlatma işleri için tablo",
                paragraflar: [
                    "Aşağıdaki tablo, enerji ve aydınlatma bakımında en sık karşılaştığımız kalemleri ve hazırlık gereksinimlerini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Kalem", "Ortam", "Uygun sınıf", "Hazırlık"],
                    satirlar: [
                        ["Tavan armatürü", "Kapalı, dikey", "Kompakt akülü makaslı", "Devre kesme onayı"],
                        ["Kablo tavası kontrolü", "Kapalı, dağınık", "Akülü dikey", "Nokta listesi hazır"],
                        ["Tabela aydınlatması", "Açık, cephe", "Kompakt eklemli", "Trafik dışı saat"],
                        ["Direk/hat çevresi", "Açık", "Duruma göre", "Yetkili onayı"],
                    ],
                },
            },
            {
                baslik: "Envanterden hazır olmanın kısa işe katkısı",
                paragraflar: [
                    "Bir-iki saatlik bir bakım işinde tedarik süresi, işin kendisinden uzun olmamalıdır. Envanterde hazır bekleyen kompakt akülü modeller, talep geldiğinde tedarik beklemeden sevkiyatı mümkün kılar; bu, özellikle plansız çıkan aydınlatma arızalarında değer taşır.",
                    "Yoğun dönemlerde müsaitlik değişebilir; bu durumda en yakın zamanı olduğu gibi bildiririz. Amacımız kısa işi büyütmeden, gerçek ihtiyacı hızlı karşılamaktır.",
                ],
            },
            {
                baslik: "Enerji kesme onayı olmadan çalışma yapılmaz",
                paragraflar: [
                    "Elektrik hattı veya pano çevresinde çalışma öncesi, ilgili kesitin tesis tarafından güvenli hâle getirildiğine dair onay alınır. Platform ekibimiz bu onayı beklemeden çalışmaya başlamaz; bu kural işin kısalığından bağımsızdır.",
                    "Onay süreci genellikle birkaç dakika sürer ve işin başlangıcını geciktirmez; asıl gecikme, bu adım atlanıp sonradan durdurulan bir çalışmadan doğar. Bu yüzden onay adımını baştan planlarız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tek bir armatür için çağırmak mantıklı mı?",
                cevap:
                    "Acilse mümkündür; ancak aynı tesisteki diğer gerçek yüksek nokta ihtiyaçlarını (kablo tavası, tabela, başka armatürler) aynı listede toplamak, aynı erişim penceresinden birden fazla kalemi kapatmayı sağlar. Hazır ve birbirine yakın kısa talepleri birlikte planlamanızı öneririz; malzeme ve uygulayıcı hazır olduğunda kısa iş gerçekten kısa sürer.",
            },
            {
                soru: "Elektrik hattı üzerinde çalışırken enerji kesme kim tarafından yapılır?",
                cevap:
                    "Enerji kesme, tesisin kendi yetkili ekibinin sorumluluğundadır; platform operatörümüz hattı kendi başına kapatmaz veya açmaz. İlgili kesitin güvenli hâle getirildiğine dair onay alınmadan çalışmaya başlanmaz. Bu, işin süresi ne kadar kısa olursa olsun esnetilmeyen bir kuraldır.",
            },
            {
                soru: "Operatör elektrik işini de yapar mı?",
                cevap:
                    "Hayır. Operatör platformun hareketini ve güvenli konumunu yönetir; elektrik bağlantısını veya montajını işletmenin yetkili teknisyeni yapar. Görev sınırları teslimde açıkça yazılır, kısa iş diye birbirine karıştırılmaz.",
            },
            {
                soru: "Aynı gün birden fazla tabela veya armatür noktasına bakılabilir mi?",
                cevap:
                    "Bakılabilir; hazır ve birbirine yakın noktalar aynı gün içinde sıralı biçimde dolaşılabilir. Her nokta için hedef, kot ve alt engel önceden kaydedilir; makine geldiğinde ölçü yeniden aranmaz. Bu düzen, tek tek çağrı açmaya göre hem nakliye hem zaman açısından belirgin tasarruf sağlar.",
            },
            {
                soru: "Kısa iş için aynı gün teslim alabilir miyiz?",
                cevap:
                    "Çoğu zaman evet; kompakt akülü modeller envanterde hazır bekler ve bu, tedarik beklemeden sevkiyat kurabilmemizi sağlar. Ancak garanti vermeyiz — yoğun dönemlerde müsaitlik değişebilir. Talebinizi ölçü ve tarihle birlikte ilettiğinizde, gerçekçi bir zaman dilimi söyleriz.",
            },
            {
                soru: "Tabela direği çevresinde manevra dar, hangi sınıf uygun?",
                cevap:
                    "Direk veya cephe yapısı düz dikey erişimi engelliyorsa kompakt eklemli sınıf tercih edilir; bomu kırarak yandan yaklaşabilir. Sahanın zemin türünü ve müşteri trafiğinin yoğun olduğu saatleri bize bildirin; çalışmayı trafik dışı bir dilime yerleştirip uygun sınıfı önerelim.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hattı çalışmasında kesme onayı ve operatör-teknisyen görev ayrımı genel iş güvenliği bilgisidir; envanterden hazır bulunma ve hazır nokta listesi kendi saha pratiğimize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Operatörlü / Operatörsüz Platform Kiralama: Envanterden Hazır Operatör Havuzu",
        giris:
            "Operatörlü mü operatörsüz mü sorusu, aslında bir makine sorusu değil bir sorumluluk ve süreklilik sorusudur. İşletmenin platformu kim kullanacak, ne sıklıkla kullanacak ve kullanan kişi ilgili sınıf için yeterlilik belgesine sahip mi — bu üç sorunun cevabı, hangi modelin seçileceğinden önce hangi kullanım biçiminin doğru olduğunu belirler. '.store' envanter yaklaşımımız burada da geçerlidir: makine kadar operatör kadrosu da hazır bir kaynaktır, talep geldiğinde ne makine ne operatör için ayrı bir tedarik süreci beklenmez. Bu sayfada operatörlü ve operatörsüz kiralamanın hangi durumda tercih edildiğini, yeterlilik belgesi zorunluluğunun ne anlama geldiğini ve kısa süreli işlerde operatörlü seçeneğin neden genellikle daha pratik olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Yeterlilik belgesi mevzuat gereğidir, tercih değil",
                metin:
                    "Platformu kullanacak kişinin ilgili ekipman sınıfı için geçerli yeterlilik belgesine sahip olması, bizim koyduğumuz bir şart değil mevzuatın gereğidir. Belgeli personeliniz varsa operatörsüz kiralama mümkündür; yoksa operatörlü seçenek ya da eğitim süreci gündeme gelir. Bu ayrımı talep aşamasında netleştirmek, sahada belge kontrolü nedeniyle işin durmasını önler.",
            },
            {
                baslik: "Kısa süreli işte operatörlü seçenek",
                metin:
                    "Tek seferlik veya birkaç saatlik bir işte, işletmenin kendi personelini eğitmesi genellikle verimli değildir; bu durumda operatörlü kiralama daha pratik bir çözümdür. Operatörümüz manevra, yükselme ve acil indirmeyi yönetir, işletme kendi teknik işine odaklanır. Kullanım sorumluluğu operatörde kalır, bu da işletme için ek bir risk azaltıcı unsurdur.",
            },
            {
                baslik: "Düzenli kullanımda operatörsüz kiralama",
                metin:
                    "Makineyi gün boyunca, hafta boyunca ya da bir montaj partisi süresince sürekli kullanan işletmeler için operatörsüz kiralama genellikle daha ekonomiktir. Bu modelde işletmenin belgeli personeli makineyi diledikleri gibi kullanır; bizim sorumluluğumuz makinenin periyodik bakımı ve mekanik durumuyla sınırlı kalır. Personel sayısı birden fazlaysa, kullanacak herkesin belgesinin bulunması ve teslim eğitiminin ekibin tamamına verilmesi gerekir.",
            },
            {
                baslik: "Operatör ile uygulayıcı arasındaki görev ayrımı",
                metin:
                    "Operatörlü kiralamada bile operatörümüz teknik montaj, kaynak veya bakım işini yapmaz — yalnızca platformun güvenli hareketini yönetir. Teknik işi işletmenin kendi uygulayıcı personeli yürütür. Bu ayrım teslimde açıkça yazılır; kısa süreli iş diye görevler birbirine karıştırılmaz. Bu netlik, bir aksaklık durumunda sorumluluğun net biçimde belli olmasını sağlar.",
            },
            {
                baslik: "Envanterden hazır operatör kadrosu",
                metin:
                    "Farklı sınıf makineler için yetkin operatörler aynı anda hazır kadroda bulunur; bu, operatörlü talep geldiğinde makine kadar operatör tahsisinin de hızlı yapılabilmesi anlamına gelir. Yoğun dönemlerde belirli bir zaman diliminde tüm operatörler dolu olabilir; bu durumda en yakın müsait saati açıkça bildiririz, sözünü tutamayacağımız bir saati vermeyiz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü/operatörsüz karar tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, hangi kullanım biçiminin hangi durumda daha uygun olduğunu gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Durum", "Kullanım sıklığı", "Önerilen model", "Not"],
                    satirlar: [
                        ["Belgeli personel yok", "Herhangi", "Operatörlü", "Mevzuat gereği zorunlu"],
                        ["Tek seferlik kısa iş", "Birkaç saat", "Operatörlü", "Genellikle daha pratik"],
                        ["Parti süresi boyunca sürekli", "Günlük/haftalık", "Operatörsüz", "Belgeli personelle ekonomik"],
                        ["Vardiyalı, çok kullanıcılı", "Sürekli", "Operatörsüz", "Tüm kullanıcılar belgeli olmalı"],
                    ],
                },
            },
            {
                baslik: "Envanterden operatör tahsisinin işleyişi",
                paragraflar: [
                    "Operatörlü bir talep geldiğinde, hem makine hem uygun sınıfta yetkin operatör aynı anda ayrılır. Bu iki kaynağın da hazır kadroda bulunması, talep ile sevkiyat arasındaki süreyi kısaltmayı hedefler.",
                    "Yoğun dönemlerde her operatörün her saat müsait olmadığını açıkça söyleriz; bu durumda size en yakın müsaitlik saatini bildirir, işinizin ne kadar esnek olduğuna göre alternatif önereceğiz.",
                ],
            },
            {
                baslik: "Teslim eğitimi: operatörsüz kiralamada zorunlu adım",
                paragraflar: [
                    "Operatörsüz kiralamada teslim anında kumanda, acil indirme, şarj düzeni ve günlük kontrol, makineyi kullanacak personele gösterilir. Vardiyalı çalışan işletmelerde her vardiyadan en az bir kullanıcının bu eğitime katılmasını isteriz.",
                    "Bu eğitim tek kişiye anlatılıp bırakılmaz; makine gün içinde el değiştiriyorsa bu, kâğıt üstünde kalan bir formalite değil gerçek bir güvenlik gerekliliğidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Belgeli personelimiz yok, ne yapmalıyız?",
                cevap:
                    "İki seçeneğiniz var: operatörlü kiralama ya da uygun eğitimin alınmasını beklemek. Kısa süreli tek seferlik işlerde operatörlü seçenek genellikle daha pratiktir ve toplam maliyeti çok değiştirmez. Operatörlü kiralamada makineyi bizim yetkili operatörümüzle gönderiririz, kullanım sorumluluğu bizde kalır; işletmeniz kendi teknik işine odaklanır.",
            },
            {
                soru: "Operatörlü kiralamada operatör montaj işini de yapar mı?",
                cevap:
                    "Hayır. Operatörümüz yalnızca platformun manevra, yükselme ve acil iniş gibi güvenli hareketini yönetir; kaynak, montaj veya bakım gibi teknik işi işletmenizin kendi uygulayıcı personeli yürütür. Bu görev ayrımı teslimde açıkça yazılır ki bir aksaklık durumunda sorumluluk net olsun.",
            },
            {
                soru: "Operatörsüz kiralamada birden çok kişi makineyi kullanacak, sorun olur mu?",
                cevap:
                    "Olmaz, iki şartla: kullanacak herkesin ilgili sınıf için yeterlilik belgesinin bulunması ve teslim eğitiminin ekibin tamamına verilmesi. Vardiyalı çalışıyorsanız her vardiyadan en az bir kullanıcının eğitime katılmasını isteriz. Bu düzen kurulduğunda makinenin gün içinde el değiştirmesi hiçbir sorun çıkarmaz.",
            },
            {
                soru: "Operatörlü kiralamada aynı gün operatör bulunur mu?",
                cevap:
                    "Çoğu zaman evet, çünkü farklı sınıf makineler için yetkin operatörler hazır kadroda bulunur. Ancak yoğun dönemlerde tüm operatörlerin dolu olduğu saatler olabilir; bu durumda en yakın müsait saati açıkça bildiririz. Talebinizi ölçü, sınıf ve tarihle birlikte ilettiğinizde gerçekçi bir zaman dilimi söyleriz.",
            },
            {
                soru: "Uzun süreli parti işinde hangisi daha ekonomik, operatörlü mü operatörsüz mü?",
                cevap:
                    "Sürekli ve günlük kullanımda operatörsüz kiralama, belgeli personeliniz varsa genellikle daha ekonomiktir çünkü günlük operatör bedeli birikmez. Kullanım seyrek ve aralıklıysa operatörlü seçenek daha pratik kalır. Parti süresini, günlük kullanım saatinizi ve belgeli personel durumunuzu söyleyin, iki modelin toplamını karşılaştıralım.",
            },
            {
                soru: "Operatör teslim eğitimini kim verir, ne kadar sürer?",
                cevap:
                    "Teslim eğitimini, makineyi getiren ekibimiz verir; kumanda, acil indirme, şarj düzeni ve günlük kontrol birlikte gözden geçirilir. Süre modele göre değişir ama genellikle kısa sürer. Vardiyalı işletmelerde her vardiyadan en az bir kullanıcının katılmasını isteriz; bu, makinenin gün içinde el değiştirdiği işletmelerde gerçek bir güvenlik gerekliliğidir, formalite değildir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yeterlilik belgesi zorunluluğu mevzuat bilgisidir; operatörlü/operatörsüz karar kriterleri ve envanterden operatör tahsisi kendi çalışma pratiğimize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Çok Noktalı Rota Bakım Platformu: Komşu Atölyeler İçin Envanterden Paylaşımlı Sevkiyat",
        giris:
            "Bu hizmeti dürüstçe sınırlı bir kapsamda tanımlamak gerekir: geniş bir il genelinde dağınık tesisleri düzenli bir bakım rotasında dolaşmak, bizim ağırlık merkezimiz değildir — bu tür geniş ölçekli bölgesel bakım rotaları için bölgesel ağır hizmet odaklı kardeş hizmetler daha uygun bir muhataptır. Bizim '.store' envanter yaklaşımımızın çok noktalı kullanımda gerçek karşılığı, aynı sanayi sitesi veya aynı sokakta yan yana dizilmiş birkaç atölyenin, kısa ve hazır işlerini tek bir sevkiyatta birleştirmesidir — Karatay'daki yan sanayi atölyelerinde uyguladığımız komşu paylaşımı modelinin bir uzantısı. Bu sayfada, aynı bölgedeki birden fazla küçük işletmenin makineyi nasıl paylaştığını, sıralamanın nasıl kurulduğunu ve bu modelin hangi ölçekte anlamlı olduğunu anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kapsam: komşu atölye kümesi, geniş bölgesel rota değil",
                metin:
                    "Bu hizmetin doğru kullanım alanı, aynı sanayi sitesi veya aynı sokakta birbirine yakın birkaç işletmenin, tarihleri örtüşen kısa işlerini birleştirmesidir. İlin farklı ilçelerine dağılmış, düzenli aralıklarla tekrarlanan bir bakım rotası kurmak istiyorsanız, bu bizim değil bölgesel ağır hizmet odaklı kardeş hizmetlerin uzmanlık alanıdır; talebinizi doğru şekilde değerlendirebilmemiz için önce hangi ölçekte bir ihtiyacınız olduğunu netleştiririz.",
            },
            {
                baslik: "Komşu işletmelerin talebini birleştirme",
                metin:
                    "Aynı sokakta sıralanmış işletmelerin kısa süreli işleri çoğu zaman birbirine yakın tarihlere düşer ve tek işletmenin tek başına ödediği nakliye, birkaç işletme arasında bölündüğünde herkesin maliyeti düşer. Bu paylaşımı biz koordine ederiz: aynı bölgede biriken talepleri tek sevkiyata bağlar, makine sırayla işletmeleri dolaşır ve her işletme yalnız kendi kullandığı süreyi öder.",
            },
            {
                baslik: "Sıralamanın süre disipliniyle kurulması",
                metin:
                    "Paylaşımlı modelin tek şartı süre disiplinidir — ilk işletmenin işi uzarsa sıradaki bekler. Bu yüzden paylaşımlı günlerde her işletmenin iş tanımını ve tahmini süresini önceden alır, sıralamayı coğrafi konuma göre kurarız. Bir işletmenin kapsamı öngörülenden büyürse, bunu sıradaki işletmeye önceden haber veririz; bekletme sessizce olmaz.",
            },
            {
                baslik: "Envanterden hazır makineyle rotaya çıkma",
                metin:
                    "Paylaşımlı bir tur planlandığında, rotadaki en yaygın ihtiyaca uygun kompakt sınıf envanterden ayrılır. Bu, her işletmenin ayrı ayrı makine beklemesi yerine, tek bir uygun makinenin gün içinde birkaç adresi dolaşmasını mümkün kılar. Rotadaki işletmelerden biri farklı bir sınıf gerektiriyorsa bunu önceden belirtmesi, o durağın programa doğru yerleştirilmesini sağlar.",
            },
            {
                baslik: "Ne zaman tekil sevkiyat daha doğrudur",
                metin:
                    "Sabit tarihli, tek başına acil bir iş için paylaşımlı rota beklemek anlamsızdır; bu tip taleplerde tekil sevkiyat önerilir. Paylaşımlı model, tarihi birkaç gün esnetebilen ve kısa süreli işler için anlamlıdır. Hangi modelin sizin durumunuza uyduğunu, işinizin aciliyetine ve tarih esnekliğinize bakarak birlikte kararlaştırırız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Paylaşımlı rota uygunluk tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı bir talebin bu hizmetin kapsamına girip girmediğini kabaca netleştiriyor.",
                ],
                tablo: {
                    basliklar: ["Talep tipi", "Ölçek", "Kapsam", "Önerilen model"],
                    satirlar: [
                        ["Aynı sanayi sitesinde birkaç işletme", "Yerel, dar", "Kapsam içi", "Paylaşımlı tur"],
                        ["Aynı sokakta komşu atölyeler", "Yerel, dar", "Kapsam içi", "Paylaşımlı tur"],
                        ["İl genelinde dağınık düzenli rota", "Geniş, bölgesel", "Kapsam dışı", "Kardeş hizmete yönlendirme"],
                        ["Tek işletme, tek acil iş", "Nokta", "Kapsam içi", "Tekil sevkiyat"],
                    ],
                },
            },
            {
                baslik: "Paylaşımlı modelin gerçek kazancı",
                paragraflar: [
                    "Paylaşımlı sevkiyatın en büyük kazancı, küçük ölçekli ve kısa süreli işlerde nakliye payının bölünmesidir. Tek başına düşünüldüğünde pahalı görünen bir kısa iş, komşu işletmelerle birleştiğinde belirgin biçimde ekonomikleşir.",
                    "Bu modelin sınırı da nettir: katılımcı sayısı arttıkça koordinasyon karmaşıklaşır, bu yüzden aynı anda birkaçtan fazla işletmeyi tek turda birleştirmeyi önermeyiz. Ölçek büyüdüğünde farklı bir planlama yaklaşımı gerekir.",
                ],
            },
            {
                baslik: "Geniş bölgesel rota talebi geldiğinde ne yapılır",
                paragraflar: [
                    "İl genelinde birden fazla tesisi düzenli aralıklarla dolaşan bir bakım rotası talebi aldığımızda, bunu üstlenmiş gibi davranmayız; bu ölçekli işler için bölgesel ağır hizmet odaklı kardeş hizmetlerin daha uygun bir muhatap olduğunu açıkça söyleriz.",
                    "Talebinizin hangi kapsama girdiğinden emin değilseniz, işletme sayısını, aralarındaki mesafeyi ve tekrar sıklığını bize iletin; birkaç dakika içinde doğru yönlendirmeyi yaparız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bu hizmet il genelinde dağınık tesisleri de kapsıyor mu?",
                cevap:
                    "Hayır, dürüstçe belirtmemiz gerekir: geniş bir il genelinde dağınık tesisleri düzenli aralıklarla dolaşan bir bakım rotası, bizim ağırlık merkezimiz değildir. Bu tür geniş ölçekli rotalar için bölgesel ağır hizmet odaklı kardeş hizmetler daha uygun bir muhataptır. Bizim kapsamımız, aynı sanayi sitesi veya sokaktaki komşu işletmelerin kısa işlerini birleştirmektir.",
            },
            {
                soru: "Komşu atölyelerle nasıl birlikte kiralama yapabiliriz?",
                cevap:
                    "Komşularınızla anlaşıp tek telefonda hepinizin işini kaydettirin; sıralamayı ve gün planını çıkarmak bizim işimizdir. Aynı bölgede biriken talepleri tek sevkiyata bağlarız, makine sırayla işletmeleri dolaşır ve her işletme yalnız kendi kullandığı süreyi öder. Tek şartımız her işletmenin iş tanımını ve tahmini süresini önceden netleştirmesidir.",
            },
            {
                soru: "İlk durakta iş uzarsa sonraki işletmeler ne olur?",
                cevap:
                    "Sıradaki işletme bekler; bu, paylaşımlı modelin tek dezavantajıdır ve baştan açıkça söyleriz. Bu riski azaltmak için her işletmenin iş tanımını ve tahmini süresini önceden alırız, sıralamayı buna göre kurarız. Bir işletmenin kapsamı öngörülenden büyürse, bunu sıradaki işletmeye önceden haber veririz; sessiz bir bekletme yaşanmaz.",
            },
            {
                soru: "Kaç işletme aynı turda birleşebilir?",
                cevap:
                    "Pratikte birkaç işletmeyi geçmemesini öneririz; katılımcı sayısı arttıkça koordinasyon karmaşıklaşır ve bir gecikme zincirleme etki yaratabilir. Küçük ölçekli, birbirine yakın birkaç işletme için bu model iyi çalışır; daha büyük bir ölçek düşünüyorsanız farklı bir planlama yaklaşımı gerekir, bunu birlikte değerlendiririz.",
            },
            {
                soru: "Paylaşımlı turda hangi makine sınıfı kullanılır?",
                cevap:
                    "Rotadaki en yaygın ihtiyaca uygun kompakt sınıf envanterden ayrılır; bu, çoğu kısa iş için yeterlidir. Rotadaki işletmelerden biri farklı bir sınıf gerektiriyorsa — örneğin daha yüksek erişim — bunu önceden belirtmesi gerekir, aksi hâlde o durağın kapsamı programa doğru yerleştirilemez.",
            },
            {
                soru: "Acil ve sabit tarihli bir iş için paylaşımlı tur beklemeli miyiz?",
                cevap:
                    "Hayır, bu durumda tekil sevkiyat daha doğrudur. Paylaşımlı model, tarihi birkaç gün esnetebilen ve kısa süreli işler için anlamlıdır. Acil ve sabit tarihli işinizi paylaşımlı tura sıkıştırmaya çalışmak yerine, işinizin aciliyetini bize söyleyin; hangi modelin size uyduğunu birlikte kararlaştıralım.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Komşu işletmeler arası paylaşımlı sevkiyat modeli ve kapsam sınırı (geniş bölgesel rota hariç tutma) kendi çalışma pratiğimize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Zor Zemin / Arazi Platform Kiralama: Kapsam ve Dürüst Sınır",
        giris:
            "Bu sayfayı, kapsamımızı olduğu gibi göstermek için yazdık. Manliftkirala.store, imalatçı atölyesine, sanayi sitesine ve tesis içi çalışmaya envanterden hazır makine sağlamak üzere kuruldu; açık arazide, toprak yolda veya engebeli tarla zemininde çalışacak ağır hizmet sınıfı ekipman bizim ana uzmanlık alanımız değildir. Bunu söylemekten çekinmiyoruz çünkü yanlış zemine yanlış makine göndermek, hem sizin işinizi hem bizim güvenilirliğimizi riske atar. Bu sayfada ne yapabileceğimizi ve nerede sınırımızın bittiğini açıkça belirtiyor, zor zemin talebinizin gerçekte ne tür bir iş olduğunu birlikte netleştirmeyi öneriyoruz.",
        maddeler: [
            {
                baslik: "Sanayi sitesi içindeki zorlu zemin bizim kapsamımızdadır",
                metin:
                    "Bir imalat atölyesinin veya sanayi sitesinin içindeki düzensiz zemin — henüz asfaltlanmamış avlu, yeni dökülmüş beton, hafif engebeli iç saha — bizim değerlendirebileceğimiz bir kapsamdır. Bu tür zeminlerde makine seçimi, zemin dayanımı ve tekerlek/palet tipi birlikte değerlendirilir; envanterdeki farklı modeller arasından bu koşula uygun olanı öneririz.",
            },
            {
                baslik: "Açık tarla ve toprak yol kapsam dışıdır",
                metin:
                    "Geniş açık tarlada, toprak yolda veya sürekli engebeli arazide çalışacak ağır hizmet sınıfı platform ihtiyacı, bizim envanterimizin ve uzmanlığımızın odağında değildir. Bu tür işler için zemin taşıma gücü, lastik/palet mühendisliği ve saha erişim koşulları farklı bir uzmanlık gerektirir. Böyle bir talep aldığımızda üstlenmiş gibi davranmayız, doğrudan söyleriz.",
            },
            {
                baslik: "Sınırın nerede çizildiğini birlikte netleştirmek",
                metin:
                    "Zor zemin talebiniz sanayi sitesi içindeki bir avlu mu, yoksa açık tarla mı — bu ayrım çoğu zaman telefonda birkaç soruyla netleşir. Sahanın fotoğrafı veya kısa bir açıklama, kapsamımıza girip girmediğini hızlıca gösterir. Kapsamımıza uymuyorsa bunu açıkça söyler, gerekiyorsa doğru yönlendirmeyi yaparız; belirsiz bir cevapla sizi oyalamayız.",
            },
            {
                baslik: "Kapsam içi zeminlerde yük dağıtma önlemi",
                metin:
                    "Kapsamımızdaki hafif engebeli veya henüz sertleşmemiş zeminlerde, makinenin ağırlığını daha geniş bir alana yaymak için yük dağıtma plakaları kullanılabilir. Bu, zemin dayanımının sınırda olduğu durumlarda ağır bir makineyi güvenle konumlandırmanın pratik bir yoludur. Zemin durumunu ve döküm tarihini önceden bildiren sahalarda bu önlemi teklife ekleriz.",
            },
            {
                baslik: "Envanterden uygun kompakt/orta sınıf seçimi",
                metin:
                    "Kapsamımızdaki zorlu iç saha zeminlerinde genellikle kompakt veya orta ölçekli sınıflar tercih edilir; büyük ve ağır arazi tipi makineler envanterimizde bulunmaz. Bu, ihtiyacınızın büyük ölçekli arazi ekipmanına yöneldiği durumlarda dürüstçe belirtmemiz gereken bir sınırdır ve kapsam dışı bir talepte sizi yanlış yönlendirmemek için baştan söyleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Kapsam içi ve kapsam dışı zemin tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, zor zemin taleplerinde kapsamımızın nerede başlayıp nerede bittiğini gösteriyor.",
                ],
                tablo: {
                    basliklar: ["Zemin/saha tipi", "Kapsam", "Uygun sınıf", "Not"],
                    satirlar: [
                        ["Sanayi sitesi avlusu, asfaltsız", "Kapsam içi", "Kompakt akülü/dizel", "Zemin dayanımı sorulur"],
                        ["Yeni dökülmüş beton", "Kapsam içi", "Yük dağıtma plakalı", "Döküm tarihi gerekir"],
                        ["Hafif engebeli iç saha", "Kapsam içi", "Orta ölçekli", "Fotoğrafla değerlendirme"],
                        ["Açık tarla / toprak yol", "Kapsam dışı", "—", "Farklı uzmanlık gerekir"],
                    ],
                },
            },
            {
                baslik: "Kapsam dışı bir talebe dürüst yaklaşım",
                paragraflar: [
                    "Açık arazi veya toprak yol içeren bir talep geldiğinde, bunu üstlenip sahaya uygunsuz bir makine göndermek yerine kapsamımızın sınırını açıkça söyleriz. Bu, kısa vadede bir iş kaybı gibi görünse de, uzun vadede güvenilirliğimizi koruyan tek doğru yaklaşımdır.",
                    "Kapsam dışı bir talep aldığımızda elimizden geldiğince yönlendirme yaparız; ama bu, o işi biz yapıyormuş gibi bir izlenim vermeden yapılır.",
                ],
            },
            {
                baslik: "Zemin bilgisini doğru vermenin önemi",
                paragraflar: [
                    "Zemin türü, dayanımı ve döküm tarihi gibi bilgiler tahminle değil, zemini döken veya saha koşulunu bilen taraftan alınmalıdır. Yanlış veya eksik bilgiyle verilen bir zemin tanımı, sahada makinenin batması ya da devrilmesi gibi ciddi risklere yol açabilir.",
                    "Emin değilseniz, birkaç fotoğraf ve kısa bir açıklama yeterlidir; kapsamımıza uyup uymadığını ve gerekiyorsa hangi önlemin alınacağını bu bilgilerle netleştiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Açık tarlada çalışacak bir platforma ihtiyacımız var, siz mi yapıyorsunuz?",
                cevap:
                    "Hayır, dürüstçe söylemek gerekirse açık tarla ve toprak yol işleri bizim ana uzmanlık alanımız değildir; envanterimiz sanayi sitesi ve tesis içi zorlu zeminler için hazırlanmıştır. Bu tür bir talebiniz varsa, farklı bir uzmanlık gerektirdiğini baştan söyler, elimizden geldiğince yönlendirme yaparız.",
            },
            {
                soru: "Sanayi sitemizin avlusu henüz asfaltlanmadı, bu kapsamınızda mı?",
                cevap:
                    "Evet, bu tür iç saha zeminleri kapsamımızdadır. Zemin dayanımını ve tipini sorarız, gerekirse yük dağıtma plakalarıyla çalışırız. Avlunun fotoğrafını veya kısa bir açıklamasını gönderin, uygun kompakt veya orta ölçekli sınıfı önerelim.",
            },
            {
                soru: "Zeminimiz yeni döküldü, ne kadar beklemeliyiz?",
                cevap:
                    "Bu, betonun yaşına ve tasarım mukavemetine bağlıdır ve bilgiyi zemini döken taraftan almanız gerekir; tahminle karar verilecek bir konu değildir. Bekleme süresi uygun değilse yük dağıtma plakalarıyla çalışmak alternatiftir. Döküm tarihini ve mukavemet bilgisini iletin, hangi yolun uygun olduğunu sahaya çıkmadan söyleyelim.",
            },
            {
                soru: "Talebimizin kapsamınıza girip girmediğinden emin değiliz, ne yapmalıyız?",
                cevap:
                    "Sahanın birkaç fotoğrafını veya kısa bir açıklamasını gönderin; kapsamımıza girip girmediğini birkaç dakika içinde netleştiririz. Kapsam içiyse uygun sınıfı önerir, kapsam dışıysa bunu açıkça söyleriz — belirsiz bir cevapla sizi oyalamayız.",
            },
            {
                soru: "Büyük arazi tipi makineniz var mı?",
                cevap:
                    "Hayır, envanterimiz kompakt ve orta ölçekli sınıflara odaklıdır; büyük ölçekli ağır arazi ekipmanı bizim kapsamımızda değildir. İhtiyacınız bu ölçekteyse bunu size dürüstçe söyleriz; sanayi sitesi veya tesis içi bir ihtiyacınız da varsa onu memnuniyetle değerlendiririz.",
            },
            {
                soru: "Kapsam dışı bir talep için başka bir yeri önerir misiniz?",
                cevap:
                    "Elimizden geldiğince yönlendirme yaparız, ancak bu işi biz yapıyormuş gibi bir izlenim vermeyiz. Talebinizin niteliğini bize anlatın; kapsamımıza girmiyorsa bunu net biçimde söyler, hangi tür bir hizmet aramanız gerektiği konusunda genel bir yön veririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapsam sınırı (açık arazi/toprak yol hariç tutma) ve iç saha zemin değerlendirmesi kendi çalışma pratiğimize ve dürüstlük ilkemize dayanır. Tesis adı ve rakam uydurulmamıştır.",
    },
};

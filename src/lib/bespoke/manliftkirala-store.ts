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
};

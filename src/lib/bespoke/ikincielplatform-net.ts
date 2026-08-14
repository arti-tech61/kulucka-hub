// ═══════════════════════════════════════════════════════════════════════════
// ikincielplatform.net — ELLE YAZILMIŞ İÇERİK
//
// Profil: ULUSAL/TEMATİK domain (bölgesel değil). Açı: "ikinci el platform
// SATIN ALMA" ile "KİRALAMA" arasındaki karar — ikinci el makinenin görünmeyen
// riskleri (bakım geçmişi belirsizliği, gizli hasar, yedek parça bulunabilirliği,
// periyodik kontrol belgesi şüphesi) ve kiralamanın bu riskleri devre dışı
// bırakma mekaniği; ayrıca filo yenileme ekonomisi.
//
// İki sayfa: turkiye-geneli (kavramsal/karar rehberi) ve eskisehir-merkez
// (aynı tema, Eskişehir'in bilinen sanayi/lojistik profiliyle bağlamlandırılmış).
// Diğer Eskişehir dosyalarından (eskisehirmanlift-net, eskisehirplatform-org,
// eskisehirvincplatform-com, manlifteskisehir-com) FARKLI eksen: onlar
// "hangi yükseklik/hangi saha" konuşur, bu sayfa "satın almak mı kiralamak mı"
// sorusuna odaklanır — cümle/tablo/SSS düzleminde kesişme yoktur.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS.
// Yazım: 2026-08-13. Yalnızca kamuya açık/genel doğrulanabilir bilgi;
// marka, tesis adı, rakam uydurulmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const IKINCIELPLATFORM_NET: Record<string, BespokeIcerik> = {
    "bolge:turkiye-geneli": {
        h1: "İkinci El Platform Almadan Önce: Riskleri Görün, Kiralamayı Değerlendirin",
        giris:
            "Bir işletme yüksekte çalışma ihtiyacını kalıcı hâle getirmeye karar verdiğinde önüne genellikle iki yol çıkar: sıfır makineye yatırım yapmak ya da ikinci el bir platform satın almak; bu sayfa üçüncü ve çoğu zaman gözden kaçan seçeneği konuşur — kiralama. İkinci el bir makine ilk bakışta cazip görünür, çünkü fiyat etiketi sıfırın çok altındadır ve satıcı genellikle 'bakımlı, sorunsuz' diye tarif eder; ama alıcı o makinenin gerçek geçmişini asla tam olarak bilemez. Kaç saat çalıştığı, hangi koşullarda kullanıldığı, hangi arızaların üstünkörü giderildiği, periyodik kontrolün gerçekten yapılıp yapılmadığı — bunların hepsi satıcının beyanına dayanır ve beyan ile gerçek arasındaki fark, makine devreye girip de ilk arıza çıktığında ortaya çıkar. Bu metin, ikinci el satın almanın gizli maliyet kalemlerini tek tek açar ve kiralamanın bu kalemleri neden yapısal olarak ortadan kaldırdığını, filo yenileme ekonomisi çerçevesinde anlatır.",
        maddeler: [
            {
                baslik: "Bilinmeyen bakım geçmişi: en büyük tek risk",
                metin:
                    "İkinci el bir platformun servis kayıtları eksiksiz teslim edilse bile, o kayıtların makinenin gerçek kullanım yoğunluğunu yansıttığını doğrulamak alıcının elinde değildir. Hidrolik yağının ne sıklıkla değiştiği, filtrelerin zamanında yenilenip yenilenmediği, akü grubunun kaç şarj döngüsü gördüğü — bunların hiçbiri dışarıdan bakılarak anlaşılmaz. Kiralamada bu belirsizlik yer değiştirir: makinenin bakım takvimini alıcı değil, filoyu elinde tutan taraf yönetir ve o taraf makineyi bir sonraki kiracıya da vereceği için bakımı ihmal etme motivasyonu taşımaz.",
            },
            {
                baslik: "Gizli hasar: gözle görülmeyen yorulma",
                metin:
                    "Platform gövdesinde, makasında veya bomunda oluşan yorulma çatlakları, aşırı yüklenme sonrası kalıcı deformasyonlar ya da kaynak bölgelerindeki mikro çatlaklar çıplak gözle fark edilmez ve genellikle satıcı tarafından da bilinmez — çünkü bu tür hasarlar zaman içinde, kademeli biçimde oluşur. Alıcı, ekipman uzmanı olmadığı sürece bu riski fiyat pazarlığıyla telafi edemez; hasar önce görünmez, sonra pahalıya mal olur. Kiralanan bir makine ise düzenli periyodik muayeneden geçer ve bu muayeneler yapısal yorulmayı erken safhada yakalamak üzere tasarlanmıştır.",
            },
            {
                baslik: "Yedek parça bulunabilirliği: markanın yaşı kadar önemli",
                metin:
                    "İkinci el piyasasında sık rastlanan durum, üreticinin artık o modeli üretmediği ya da bölgesel distribütörün belirli parça gruplarını stoklamadığıdır. Bu durumda basit bir arıza bile haftalarca sürebilir, çünkü parça yurt dışından sipariş edilmek zorunda kalınır. Satın alma kararı verilmeden önce modelin güncel parça desteğinin sürüp sürmediği araştırılmalıdır; araştırılmazsa risk makinenin kendisinde değil, makine bozulduğunda ortaya çıkan bekleme süresinde yaşanır. Kiralama modelinde bu risk kiracıya değil filo sahibine aittir ve filo sahibi, güncel parça desteği olan modelleri tercih etmek zorundadır çünkü aksi hâlde kendi filosunu atıl bırakır.",
            },
            {
                baslik: "Periyodik kontrol belgesi: şüpheli mi, güncel mi?",
                metin:
                    "İş ekipmanlarının periyodik kontrolü mevzuat gereğidir ve platform/vinç sınıfı ekipmanlarda bu kontrol belgesinin güncelliği hem yasal hem operasyonel bir zorunluluktur. İkinci el alım sürecinde satıcının sunduğu belge tarihinin gerçekten o makineye ait olup olmadığını, kontrolü yapan kuruluşun yetkinliğini ve raporun kapsamını bağımsız biçimde teyit etmek alıcının sorumluluğundadır — bu teyit çoğu zaman atlanır. Kiralık makinede bu belge, kiralayan tarafın iş süreklilik zorunluluğu nedeniyle zaten güncel tutulur; kiracının ek bir doğrulama yükü olmaz.",
            },
            {
                baslik: "Filo yenileme ekonomisi: kiralamanın asıl kazandırdığı",
                metin:
                    "Bir makineyi satın almak, o makinenin teknolojik ve mekanik ömrü boyunca aynı ekipmana bağlı kalmak demektir; oysa iş ihtiyaçları zamanla değişir — bugün 12 metre yeten bir iş, yarın 18 metre gerektirebilir. Kiralama modelinde bu esneklik doğrudan gelir: kiracı her iş için ihtiyaca en uygun, güncel ve bakımlı sınıfı seçer, elinde amortismanı devam eden ama işine artık uymayan bir makine kalmaz. Filoyu elinde tutan taraf ise makineleri düzenli aralıklarla yeniler, çünkü eski ve arıza riski yüksek makine hem kiracı memnuniyetini hem filo kârlılığını düşürür — bu da yenileme motivasyonunu ekonomik zorunluluk hâline getirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci el satın alma ile kiralamanın risk dağılımı",
                paragraflar: [
                    "Aşağıdaki tablo, ikinci el satın almada riskin kimde kaldığını ve kiralamada aynı riskin nasıl yer değiştirdiğini karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Bakım geçmişinin doğruluğu", "Satıcı beyanına bağlı, alıcı doğrulayamaz", "Filo sahibi tarafından yönetilir ve izlenir"],
                        ["Gizli yapısal hasar", "Alıcı üstlenir, fark edilmesi zaman alır", "Periyodik muayene erken safhada yakalar"],
                        ["Yedek parça bulunabilirliği", "Model eskidikçe alıcının sorunu olur", "Filo sahibinin güncel model seçme zorunluluğu"],
                        ["Periyodik kontrol belgesi", "Bağımsız teyit alıcıya düşer", "İş sürekliliği için zaten güncel tutulur"],
                        ["Teknolojik/ihtiyaç değişimi", "Amortisman bitmeden model değişmez", "Her iş için uygun sınıf seçilebilir"],
                    ],
                },
            },
            {
                baslik: "Ne zaman satın almak, ne zaman kiralamak mantıklıdır",
                paragraflar: [
                    "Kiralamanın her senaryoda tek doğru cevap olduğunu söylemek yanıltıcı olur; karar, kullanım yoğunluğu ve iş çeşitliliğine bağlıdır. Yıl boyunca, aynı bina içinde, aynı yükseklik bandında kesintisiz kullanım varsa ve bakım kapasitesi kurum içinde zaten mevcutsa, sıfır makine yatırımı zamanla kendini amorti edebilir. Ancak iş hacmi mevsimsel dalgalanıyorsa, farklı projelerde farklı yükseklik ve tip ihtiyacı doğuyorsa veya bakım-servis organizasyonu kurulmamışsa, ikinci el alım riski taşımadan kiralama daha rasyonel bir tercihtir.",
                    "Bu kararı verirken sorulması gereken asıl soru fiyat değil kullanım desenidir: makine yılda kaç gün, hangi çeşitlilikte işte kullanılacak? Cevap net değilse, ikinci el bir makineye bağlanmadan önce birkaç iş boyunca kiralama ile denemek, hem doğru sınıfı görmeyi hem de gizli risklere maruz kalmadan karar vermeyi sağlar.",
                ],
            },
            {
                baslik: "Satın almadan önce sorulması gereken beş soru",
                paragraflar: [
                    "İkinci el bir platform değerlendiriliyorsa, karardan önce şu sorular satıcıya yöneltilmeli ve yanıtlar belgeyle desteklenmelidir: makinenin toplam çalışma saati (saat sayacı manipüle edilmemiş mi), son periyodik kontrolün tarihi ve kapsamı, hidrolik sistemde geçmiş arıza kaydı olup olmadığı, üreticinin güncel parça desteğinin sürüp sürmediği ve makinenin daha önce hangi sektörde (örneğin agresif kimyasal veya aşındırıcı ortam) kullanıldığı. Bu beş sorunun tatmin edici yanıtı yoksa, satın alma kararı ertelenmeli ve kiralama alternatifi değerlendirilmelidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el platformun saat sayacına güvenebilir miyim?",
                cevap:
                    "Tek başına güvenilmemelidir. Saat sayacı, elektronik kontrol ünitesiyle birlikte değiştirilmiş veya sıfırlanmış olabilir; bu durum dışarıdan bakıldığında anlaşılmaz. Güvenilir bir değerlendirme için sayaç bilgisi, hidrolik sistemin genel aşınma görünümüyle ve varsa üretici bayisinin servis kayıtlarıyla çapraz kontrol edilmelidir. Bu çapraz kontrolü yapacak teknik bilgiye sahip değilseniz, bağımsız bir makine eksperine başvurmak, satın alma kararından önce atılacak en ucuz sigortadır.",
            },
            {
                soru: "Periyodik kontrol belgesi olan bir makine güvenli demek midir?",
                cevap:
                    "Belgenin varlığı gereklidir ama tek başına yeterli değildir. Kontrolü yapan kuruluşun yetkinliği, raporun kapsamı (yalnızca görsel muayene mi, yoksa yük testi de içeriyor mu) ve belgenin makinenin seri numarasıyla birebir eşleşip eşleşmediği kontrol edilmelidir. Bazı ikinci el satışlarında belge, o makineye değil aynı modelin başka bir örneğine ait olarak sunulabilir; bu yüzden belge üzerindeki seri numarası makinenin üzerindeki plakayla mutlaka karşılaştırılmalıdır.",
            },
            {
                soru: "Yedek parça bulunmayan bir model neden hâlâ satılıyor?",
                cevap:
                    "Çünkü satıcının önceliği elindeki envanteri elden çıkarmaktır, parça desteğinin sürekliliği değil. Üretici bazen belirli bir model hattını sonlandırır veya bölgesel distribütör değişir; bu durumda o modelin sahibi olmak, arıza anında haftalarca bekleme riskiyle karşı karşıya kalmak demektir. Satın almadan önce modelin güncel distribütör listesinde yer alıp almadığı ve parça temin süresinin ne kadar olduğu doğrudan üretici veya yetkili bayiden teyit edilmelidir.",
            },
            {
                soru: "Kiralamak, uzun vadede satın almaktan daha mı pahalıdır?",
                cevap:
                    "Sadece kira bedeli ile satın alma fiyatı karşılaştırıldığında bazen öyle görünebilir; ama bu karşılaştırma eksiktir. Satın almanın gizli maliyetleri — periyodik bakım, beklenmedik arıza onarımı, yedek parça temini, muhafaza alanı, sigorta ve makinenin iş bitince atıl kalması — toplam sahip olma maliyetine dahil edilmelidir. Bu kalemler eklendiğinde, düzensiz veya çeşitlenen iş yükü olan işletmeler için kiralamanın toplam maliyeti çoğu zaman daha öngörülebilir ve daha düşük çıkar.",
            },
            {
                soru: "Kiraladığım makinenin bakım geçmişini ben de sorgulayabilir miyim?",
                cevap:
                    "Evet ve sorgulamalısınız. Ciddi bir kiralama işletmesi, makinenin periyodik kontrol belgesini, bakım kaydını ve varsa son arıza geçmişini teslim öncesinde paylaşmaktan çekinmemelidir. Bu şeffaflık, kiralamanın ikinci el satın almaya göre asıl avantajıdır: bilgi asimetrisi satıcı lehine değil, iki tarafın da erişebildiği bir sürece dönüşür — çünkü kiralayan taraf makineyi bir sonraki kiracıya da teslim edeceği için geçmişi saklamanın kendisine faydası yoktur.",
            },
            {
                soru: "Küçük bir işletme için hangi eşikte satın almak mantıklı hâle gelir?",
                cevap:
                    "Kesin bir rakam vermek yanıltıcı olur çünkü eşik, kullanım sıklığına, iş çeşitliliğine ve kurum içi bakım kapasitesine göre değişir. Genel eğilim şudur: makine yıl boyunca neredeyse her hafta, hep aynı yükseklik ve tip ihtiyacıyla kullanılıyorsa ve bakım-servis organizasyonu zaten mevcutsa, satın almanın amortisman süresi kısalır. Kullanım düzensizse veya iş profili değişkense, bu eşiğe ulaşmadan sıfır ya da ikinci el bir makineye bağlanmak, az kullanılan bir varlığın bakım ve risk yükünü sürekli taşımak anlamına gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. İş ekipmanlarının periyodik kontrolü mevzuat gereğidir; bu genel bilgi kamuya açıktır. Bakım geçmişi, yedek parça ve hasar riskiyle ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; tesis adı, marka veya rakam uydurulmamıştır.",
    },

    "bolge:eskisehir-merkez": {
        h1: "Eskişehir'de İkinci El Platform Almadan Önce Bilinmesi Gerekenler",
        giris:
            "Eskişehir, birden fazla organize sanayi bölgesine, demiryolu ve raylı sistem sanayisine dayalı üretim geleneğine ve üniversite şehri olmasından gelen sürekli yapı-bakım hareketliliğine sahip bir ilimiz; bu profil, ildeki işletmelerin yüksekte çalışma ekipmanı ihtiyacını da düzenli hâle getiriyor. Bu düzenlilik, bazı işletme sahiplerini 'madem sürekli kullanacağız, bari bir tane alalım' düşüncesine yöneltiyor ve ikinci el ilanlarına yöneliyorlar. Ancak Eskişehir'deki sanayi tesislerinin çoğunun vardiyalı ve kesintisiz üretim yaptığı düşünülürse, arızalanan ve yedek parçası bulunamayan bir makinenin üretim durmasına yol açması, satın alma kararının görünmeyen maliyetidir. Bu sayfa, ikinci el platform satın almanın Eskişehir'deki işletmeler için taşıdığı riskleri ve kiralamanın bu riskleri nasıl bertaraf ettiğini anlatıyor.",
        maddeler: [
            {
                baslik: "Vardiyalı üretimde arıza toleransı sıfıra yakındır",
                metin:
                    "Demiryolu ve raylı sistem sanayisi başta olmak üzere ildeki birçok üretim tesisi vardiyalı çalışır ve bakım pencereleri sıkı programlanır. Bu düzende ikinci el bir platformun beklenmedik arızası, yalnızca o makinenin durması değil, bağlı olduğu bakım veya montaj işinin de gecikmesi demektir. Vardiya kaybı, makinenin kendi onarım maliyetinden çok daha ağır bir bedel taşır; bu nedenle arıza riskinin en aza indirildiği bir tedarik modeli, ildeki üretim temposu için satın almaktan daha isabetli olur.",
            },
            {
                baslik: "OSB'lerde çeşitlenen iş profili, tek makineye bağlanmayı zorlaştırır",
                metin:
                    "İldeki organize sanayi bölgelerinde metal işleme, gıda, tekstil ve makine imalatı gibi farklı kollarda üretim yapılır ve her kolun tavan yüksekliği, zemin koşulu ve erişim ihtiyacı birbirinden farklıdır. İkinci el olarak satın alınan tek bir makine, çoğunlukla tek bir yükseklik ve tip için optimize edilmiştir; işletmenin farklı projelerinde farklı sınıf ihtiyacı doğduğunda o makine ya yetersiz kalır ya da gereğinden büyük bir sınıfla verimsiz çalışılır. Kiralamada ise her iş için ihtiyaca uygun sınıf seçilebilir.",
            },
            {
                baslik: "Üniversite şehri temposu: kısa süreli, dağınık talep",
                metin:
                    "Şehrin üniversite nüfusuna bağlı yapı stoku (öğrenci yurtları, kampüs binaları, ticari birimler) düzenli ama kısa süreli bakım ve tadilat işleri doğurur; bu işlerin her biri için ayrı bir makineye sahip olmak ekonomik değildir. İkinci el bir platform satın alan işletme, bu tür kısa işler arasında makinenin büyük bölümünü atıl bekletir; oysa atıl bekleyen makine de bakım ve muhafaza maliyeti üretmeye devam eder. Kiralama, yalnızca işin süresi kadar ödeme yapılmasını sağlayarak bu atıl maliyeti ortadan kaldırır.",
            },
            {
                baslik: "İkinci el ilanlarında geçmiş kullanım bilgisi genelde eksiktir",
                metin:
                    "Bölgedeki ikinci el makine ilanlarının büyük kısmı, makinenin daha önce hangi sektörde çalıştığını (örneğin metal talaşı veya kimyasal buhara maruz kalıp kalmadığını) belirtmez; bu bilgi eksikliği alıcının riskini artırır çünkü aşındırıcı ortamda çalışmış bir makine dışarıdan sağlam görünse bile iç aksamda hızlanmış yıpranma taşıyabilir. Bu tür bilgiyi bağımsız olarak doğrulamak zordur; kiralamada ise makinenin bakım geçmişi filo sahibi tarafından zaten izlendiği için bu belirsizlik kiracıya yansımaz.",
            },
            {
                baslik: "Sezonluk inşaat ve tadilat işleri, sabit makineyi verimsiz kılar",
                metin:
                    "İlin inşaat ve cephe yenileme faaliyetleri, hava koşullarına bağlı olarak yıl içinde belirli aylarda yoğunlaşır. Bu yoğunluk dışındaki dönemlerde sahip olunan bir makine kullanılmadan bekler ve yine de bakım, sigorta, muhafaza gibi sabit maliyetler devam eder. Kiralama modeli, talebin yoğunlaştığı dönemde makineye erişimi garanti ederken, talebin düştüğü dönemde hiçbir sabit maliyet doğurmaz — bu da mevsimsel iş profiline sahip işletmeler için doğrudan tasarruf anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Eskişehir'de tipik iş profiline göre tedarik karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, ildeki yaygın iş profillerinde ikinci el satın alma ile kiralamanın hangi noktada ayrıştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İş profili", "İkinci el satın almanın riski", "Kiralamanın avantajı"],
                    satirlar: [
                        ["Vardiyalı üretim tesisi bakımı", "Arıza vardiya kaybına yol açar", "İkame makine hızlı temin edilir"],
                        ["OSB'de çeşitlenen proje türü", "Tek sınıfa bağlı kalınır", "Her iş için uygun sınıf seçilir"],
                        ["Kısa süreli kampüs/yurt işleri", "Makine büyük ölçüde atıl kalır", "Yalnızca iş süresince ödeme"],
                        ["Sezonluk cephe/tadilat işi", "Sabit maliyet yıl boyu devam eder", "Talep dışı dönemde maliyet yok"],
                    ],
                },
            },
            {
                baslik: "Yerel ikinci el ilanlarını değerlendirirken dikkat edilecekler",
                paragraflar: [
                    "İl genelinde ikinci el platform ilanlarına bakan bir işletme, ilanda yer alan fotoğraflara ve fiyata değil, makinenin belgelerine odaklanmalıdır. Satıcıdan istenmesi gereken üç belge şunlardır: güncel periyodik kontrol raporu (seri numarası eşleşen), varsa üretici yetkili servisinin bakım kayıtları ve makinenin daha önce hangi tür ortamda çalıştığına dair yazılı beyan. Bu belgelerden biri eksikse, fiyat ne kadar cazip olursa olsun karar ertelenmelidir.",
                    "Bölgedeki sanayi tesislerinin çoğunluğu üretimini durdurmadan bakım yapmak zorunda olduğu için, ikame makine temin süresi de sorgulanmalı; bu süre satın alınan bir makinede söz konusu değildir çünkü arızalanan makinenin yerine geçecek ikinci bir makine işletmenin elinde bulunmaz.",
                ],
            },
            {
                baslik: "Kiralamaya geçişte ilk adım: iş yükünü kayıt altına almak",
                paragraflar: [
                    "İkinci el alım yerine kiralamayı değerlendiren bir işletmenin ilk yapması gereken, son bir yıl içindeki yüksekte çalışma ihtiyacını (kaç iş, hangi yükseklik, hangi süre) kayıt altına almaktır. Bu kayıt, hem kiralama sıklığının satın almaya kıyasla ne kadar ekonomik olduğunu somut biçimde görmeyi sağlar hem de ihtiyaç duyulan sınıfların çeşitliliğini ortaya koyar. Çoğu işletme bu kaydı tuttuğunda, tek bir makineye bağlanmanın aslında ihtiyacın yalnızca bir kısmını karşıladığını fark eder.",
                ],
            },
        ],
        sss: [
            {
                soru: "Eskişehir'de ikinci el platform ilanlarında fiyat neden bu kadar değişken?",
                cevap:
                    "Fiyat farkı çoğunlukla makinenin yaşından çok belgelerinin durumuyla ilgilidir. Periyodik kontrolü güncel, bakım kaydı düzenli ve seri numarası belgeleriyle eşleşen bir makine, aynı yaştaki belgesiz bir makineden daha yüksek fiyata satılır ve bu fark aslında haklıdır — çünkü belgesiz makinede alıcı, görünmeyen riskin bedelini sonradan öder. Düşük fiyatlı ilanlara temkinli yaklaşılmalı, fiyat farkının nedeni sorulmalıdır.",
            },
            {
                soru: "Vardiyalı bir tesiste kiralık makine arızalanırsa üretim durur mu?",
                cevap:
                    "Ciddi bir kiralama işletmesiyle çalışıldığında bu risk en aza iner, çünkü ikame makine temini sözleşmenin bir parçasıdır ve filo sahibi olası arızaya karşı yedek kapasite bulundurur. Satın alınan bir makinede ise ikame diye bir seçenek yoktur; arıza, parça temin edilene kadar üretim akışını doğrudan etkiler. Bu fark, vardiyalı üretim yapan işletmeler için kiralamayı belirgin biçimde daha güvenli kılar.",
            },
            {
                soru: "OSB içindeki farklı sektörler için tek bir ikinci el makine yeterli olur mu?",
                cevap:
                    "Genellikle olmaz. Metal işleme tesisinin tavan yüksekliği ile gıda üretim tesisinin hijyen gereksinimi veya tekstil tesisinin zemin koşulu birbirinden farklıdır ve tek bir makine sınıfı bu çeşitliliğin tamamına uygun düşmez. İkinci el alımda genellikle en sık karşılaşılan ihtiyaca göre bir sınıf seçilir ve diğer işlerde ya uygun olmayan makineyle idare edilir ya da yine de ek kiralamaya başvurulur — bu da satın almanın beklenen tasarrufu ortadan kaldırır.",
            },
            {
                soru: "Kısa süreli kampüs veya yurt bakım işleri için satın almak mantıklı mı?",
                cevap:
                    "Çoğunlukla değil. Bu tür işler yılın belirli dönemlerinde, günler veya en fazla birkaç hafta sürecek biçimde ortaya çıkar; satın alınan bir makine bu işler dışındaki sürede atıl kalır ve atıl kaldığı sürede de bakım, muhafaza ve sigorta maliyeti üretmeye devam eder. Kısa ve dağınık iş profili olan kurumlar için kiralama, yalnızca kullanılan gün kadar ödeme yapıldığı için daha rasyonel bir tercihtir.",
            },
            {
                soru: "İkinci el makinenin daha önce hangi ortamda çalıştığını nasıl anlarım?",
                cevap:
                    "Doğrudan gözlemle anlamak zordur; en güvenilir yöntem satıcıdan yazılı beyan istemek ve mümkünse makinenin önceki sahibiyle iletişime geçmektir. Metal talaşı, kimyasal buhar veya aşırı toz gibi aşındırıcı ortamlarda çalışmış makinelerde iç aksam dışarıdan sağlam görünse bile hızlanmış yıpranma olabilir; bu bilgi paylaşılmıyorsa veya belirsizse, makineyi bağımsız bir uzmana kontrol ettirmeden satın almamak en güvenli yaklaşımdır.",
            },
            {
                soru: "Sezonluk cephe işleri için yıl boyu makine elde tutmak yerine ne yapmalıyım?",
                cevap:
                    "İhtiyacın yoğunlaştığı dönemi önceden planlayıp o dönem için kiralama ayarlamak, yıl boyu sabit maliyet taşımaktan daha ekonomiktir. Sezon öncesi talep arttığı için erken rezervasyon önerilir; bu sayede hem uygun sınıf garanti altına alınır hem de talep dışı dönemde hiçbir bakım veya muhafaza yükü taşınmaz. Yıl boyu kullanım öngörülmüyorsa, sahip olma maliyetinin büyük kısmı zaten atıl bekleme süresine gider.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Eskişehir'in organize sanayi bölgeleri, demiryolu/raylı sistem sanayisi geleneği ve üniversite şehri niteliği kamuya açık genel bilgidir. İkinci el ekipman riskleri ve kiralama ekonomisiyle ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; tesis adı ve rakam uydurulmamıştır.",
    },

    // ═══════════════════════════════════════════════════════════════════════
    // /hizmet/[slug] sayfaları — 11 sabit slug (src/lib/hizmet-konulari.ts).
    // Her sayfa aynı iskeleti (giriş → 5 madde → 3 ek bölüm, ilkinde tablo →
    // 6 SSS) kullanır ama FARKLI bir ikinci-el-riski boyutuna odaklanır; bu
    // boyutlar 11 sayfa arasında tekrarlanmaz. Ulusal/tematik domain olduğu
    // için belirli bir şehre/OSB'ye bağlanmaz — iş tipine (fabrika, şantiye,
    // depo, tarım, enerji hattı, arazi vb.) göre bağlamlandırılır.
    // ═══════════════════════════════════════════════════════════════════════

    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "İkinci El Sepetli / Örümcek Platform: Gizli Hidrolik Arıza Riski",
        giris:
            "Sepetli (örümcek) platformlar, paletli şasisi ve çok eklemli kolu sayesinde diğer platform tiplerinin giremediği dar avlulara, merdiven boşluklarına ve bina içi atriyumlara ulaşabilir; bu esnekliğin bedeli, hidrolik devrenin diğer platform tiplerine göre çok daha karmaşık olmasıdır. Kolun her ekleminde ayrı bir hidrolik silindir ve valf grubu çalışır, bu da arıza noktası sayısını artırır. İkinci el bir sepetli platform alırken en büyük risk, dışarıdan sağlam görünen bir kolun içinde birikmiş hidrolik yorgunluğu ve mikro sızıntıların satın alma anında fark edilmemesidir; bu tür arızalar genellikle makine tam açılım açısına geldiğinde, yani en riskli anda ortaya çıkar. Bu sayfa, sepetli platform ihtiyacı olan işletmelere ikinci el alımın bu özel riskini ve kiralamanın bu riski nasıl bertaraf ettiğini anlatır; aynı zamanda dar erişim gerektiren işlerde hangi kriterlerin öne çıktığını açıklar.",
        maddeler: [
            {
                baslik: "Çok eklemli kolun hidrolik karmaşıklığı",
                metin:
                    "Bir sepetli platformun kolu genellikle 4-6 ayrı eklemden oluşur ve her eklem kendi silindiri ile valf bloğuna sahiptir. Bu sistemde tek bir contanın zamanla sertleşmesi, kolun tam açılımda güç kaybetmesine veya sarsıntılı hareket etmesine yol açabilir. İkinci el alımda bu tür bir zafiyeti test etmek için makinenin tam açılım açısında birkaç dakika beklemek ve sepette yük varken sızıntı kontrolü yapmak gerekir — bu test genellikle satış öncesi kısa denemelerde atlanır.",
            },
            {
                baslik: "Paletli şasi ve zemin adaptasyon sisteminin aşınması",
                metin:
                    "Sepetli platformların paletli şasisi ve otomatik zemin dengeleme (self-leveling) sistemi, düzensiz zeminlerde sık kullanıldığı için aşınmaya en açık parçalardır. Dengeleme sensörlerinde oluşan hassasiyet kaybı, makinenin eğimli zeminde otomatik olarak kilitlenmemesine yol açabilir; bu durum dışarıdan test edilmeden anlaşılmaz. İkinci el bir makinede bu sistemin kalibrasyon geçmişi genellikle belgelenmez.",
            },
            {
                baslik: "Sepette yük altında test edilmeden alınan makine",
                metin:
                    "Showroom veya depo ortamında boş sepetle yapılan kısa bir tur, hidrolik sistemin gerçek yük altındaki davranışını göstermez. Silindirlerdeki iç sızıntı, ancak sepette anma yüküne yakın bir ağırlık varken ve kol tam açılımdayken belirginleşir. İkinci el satın alma kararı, yüklü test yapılmadan verilirse, arıza sahada ilk ciddi işte ortaya çıkar.",
            },
            {
                baslik: "Dar erişim işlerinde arızanın maliyeti daha yüksektir",
                metin:
                    "Sepetli platformlar genellikle bina içi atriyum, merdiven boşluğu veya dar avlu gibi başka bir makinenin giremeyeceği noktalarda kullanılır. Böyle bir noktada makine arızalanırsa, ikame bir makineyi aynı dar alana ulaştırmak (varsa) günler alabilir; bu da ikinci el bir makineye bağlı kalmanın dar erişim işlerinde taşıdığı ek riski gösterir.",
            },
            {
                baslik: "Kiralamada hidrolik testin güvencesi",
                metin:
                    "Kiralık bir sepetli platform, her teslimat öncesi kol tam açılımda ve yük altında test edilir; bu test filo sahibinin operasyonel rutinidir çünkü aksi hâlde bir sonraki kiracıya arızalı makine gitmiş olur. Kiracı için bu, ikinci el alımda kendi başına yapması gereken karmaşık bir testi filo sahibine devretmek anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sepetli platformda ikinci el riski ile kiralama avantajı",
                paragraflar: [
                    "Sepetli/örümcek platformların çok eklemli hidrolik yapısı, diğer platform tiplerine göre gizli arıza ihtimalini artırır. Aşağıdaki tablo bu riskin ikinci el alım ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Risk noktası", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Çok eklemli kol hidroliği", "Sızıntı satış öncesi kısa turda fark edilmez", "Her teslimat öncesi yük altında test edilir"],
                        ["Paletli şasi dengeleme sensörü", "Kalibrasyon geçmişi genelde belgesiz", "Periyodik olarak yeniden kalibre edilir"],
                        ["Yüklü test", "Boş sepetle kısa tur yeterli sayılır", "Anma yükü ile teslim öncesi kontrol yapılır"],
                        ["Dar erişim arıza riski", "İkame makine bulunması güç olabilir", "Filo içinde ikame kapasitesi bulunur"],
                    ],
                },
            },
            {
                baslik: "Hangi işlerde sepetli/örümcek platform gerekir",
                paragraflar: [
                    "Sepetli platformlar; bina içi atriyum aydınlatması, merdiven boşluğu boyama, dar bahçe veya avlu ağaç budama, cam cephe iç yüzey temizliği gibi standart makaslı veya eklemli platformların giremediği noktalarda tercih edilir. Paletli yürüyüş takımı sayesinde kapı genişliği yeterliyse iç mekana taşınabilir, ardından kol açılarak yükseğe erişim sağlanır.",
                    "Bu tür işlerin çoğu tek seferlik veya kısa süreli olduğu için, sepetli platforma yatırım yapmak genellikle ekonomik değildir; kiralama, hem düşük kullanım sıklığı hem de yüksek hidrolik arıza riski nedeniyle bu segmentte özellikle mantıklı bir tercihtir.",
                ],
            },
            {
                baslik: "Satın almadan önce test edilmesi gereken üç nokta",
                paragraflar: [
                    "İkinci el bir sepetli platform değerlendiriliyorsa, karardan önce şu üç nokta mutlaka test edilmelidir: kol tam açılımdayken ve sepette yük varken en az on dakika bekletilip sızıntı gözlemlenmeli, paletli şasi eğimli bir zeminde dengeleme fonksiyonu ile test edilmeli, ve kol tüm eklemleri aynı anda hareket ettirilirken sarsıntı veya gecikme olup olmadığı kontrol edilmelidir. Bu üç test atlanırsa, satın alınan makinenin gerçek durumu yalnızca sahada ilk zorlu işte ortaya çıkar.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el sepetli platformda hidrolik sızıntı nasıl anlaşılır?",
                cevap:
                    "En güvenilir yöntem, kolu tam açılım açısına getirip sepete anma yüküne yakın bir ağırlık koyarak en az on dakika beklemektir; bu süre içinde kolun yavaşça alçalması veya silindir gövdesinde yağ izi oluşması sızıntının işaretidir. Kısa bir showroom turu bu tür sızıntıları göstermez çünkü sızıntı yalnızca sürekli yük altında belirginleşir. Bu testi yapacak teknik bilgiye sahip değilseniz bağımsız bir hidrolik ustasına başvurmak, satın alma kararından önce atılacak en ucuz sigortadır.",
            },
            {
                soru: "Paletli şasi aşınması dışarıdan anlaşılır mı?",
                cevap:
                    "Palet lastiklerindeki görünür aşınma dışarıdan fark edilebilir ama şasi içindeki tahrik motorlarının veya dengeleme sensörlerinin durumu görsel muayeneyle anlaşılamaz. Makinenin eğimli bir zeminde otomatik dengeleme yapıp yapmadığı fiilen test edilmelidir; sensör hassasiyeti azalmışsa makine eğimde kilitlenmeyebilir ve bu durum ciddi bir devrilme riski oluşturur.",
            },
            {
                soru: "Sepetli platform kiralamak neden özellikle mantıklı bir tercih?",
                cevap:
                    "Çünkü bu makine sınıfı hem yüksek hidrolik karmaşıklığı nedeniyle en fazla gizli arıza riski taşıyan sınıflardan biridir hem de kullanım ihtiyacı genellikle tek seferlik veya kısa süreli olur. İki faktör bir araya geldiğinde, satın almanın hem riski hem de atıl kalma maliyeti diğer platform tiplerine göre daha yüksek çıkar; kiralama bu iki dezavantajı da ortadan kaldırır.",
            },
            {
                soru: "Dar bir atriyuma giren makinenin arızalanması ne kadar sorun olur?",
                cevap:
                    "Beklenenden çok daha büyük bir sorun olur, çünkü dar erişim noktalarına genellikle sınırlı sayıda makine sınıfı sığar. Sahip olunan tek bir makine arızalandığında ikame temin etmek zaman alır ve bu süre boyunca iş durur. Ciddi bir kiralama işletmesiyle çalışıldığında filo içinde aynı sınıfta ikame makine bulunması bu riski büyük ölçüde azaltır.",
            },
            {
                soru: "Kol eklemlerinin senkronizasyonu neden önemli?",
                cevap:
                    "Çok eklemli bir kolda tüm eklemlerin birlikte ve orantılı hareket etmesi hem operatör güvenliği hem de hassas konumlama için gereklidir. Valf senkronizasyonunda bozulma olursa kol sarsıntılı hareket eder ve bu, özellikle dar mekanlarda çevredeki yapılara temas riskini artırır. İkinci el alımda bu senkronizasyon test edilmeden satın almak, sahada beklenmedik bir çarpma riskini de beraberinde getirir.",
            },
            {
                soru: "Kiralık sepetli platformun bakım kaydını görebilir miyim?",
                cevap:
                    "Evet, ciddi bir kiralama işletmesi bu tür bir talebi karşılamalıdır. Makinenin son periyodik kontrol tarihi, varsa geçmiş hidrolik müdahaleleri ve teslimat öncesi yapılan yük testinin sonucu paylaşılabilir bir bilgidir; bu şeffaflık, ikinci el satın almada satıcının elinde tutabileceği bilgi asimetrisini ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Sepetli/örümcek platformların çok eklemli hidrolik yapısı ve paletli şasi özellikleri kamuya açık genel ekipman bilgisidir. İkinci el hidrolik arıza riskiyle ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; marka, model veya rakam uydurulmamıştır.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "İkinci El Platform Alımında Nakliye Sırasında Sorumluluk Riski",
        giris:
            "İkinci el bir platform veya manlift satın alma sürecinde genellikle gözden kaçan bir aşama vardır: makinenin satıcıdan alıcının sahasına taşınması. Bu nakliye özel bir düzenleme gerektirir; platformlar ağırlık merkezi yüksek, hassas hidrolik bağlantıları olan makinelerdir ve standart bir yük gibi bağlanıp taşınamaz. İkinci el alımda nakliyeyi genellikle alıcı kendi imkânlarıyla veya bulduğu bir nakliyeciyle organize eder; bu durumda nakliye sırasında oluşabilecek bir hasarın (devrilme, bağlama noktasında ezilme, hidrolik hortum kopması) sorumluluğu genellikle net değildir — satıcı 'teslim ettim' der, nakliyeci 'bağlantı talimatına uydum' der, sigorta poliçesi varsa kapsamı tartışmalıdır. Kiralamada ise nakliye, filo sahibinin operasyonunun ayrılmaz bir parçasıdır ve sorumluluk zinciri baştan nettir. Bu sayfa, ikinci el alımda nakliye sırasında ortaya çıkabilecek sorumluluk boşluğunu ve kiralı teslimatın bu boşluğu nasıl kapattığını anlatır.",
        maddeler: [
            {
                baslik: "Nakliye sırasında hasar kimin sorumluluğunda?",
                metin:
                    "İkinci el bir platform, satıcının deposundan alıcının sahasına taşınırken üç taraf devreye girer: satıcı, nakliyeci ve alıcı. Taşıma sırasında oluşan bir hasar (örneğin sarsıntıyla hidrolik hortumun gevşemesi veya sabitleme zincirinin yetersiz kalması) fark edildiğinde, hangi tarafın sorumlu olduğu net bir sözleşmeyle belirlenmemişse anlaşmazlık doğar. Alıcı, makineyi tesliminden önce detaylı fotoğraflamadıysa bu anlaşmazlığı kanıtlamak da güçleşir.",
            },
            {
                baslik: "Platformlara özgü bağlama ve sabitleme gereksinimi",
                metin:
                    "Platformlar, özellikle boom/eklemli tipler, ağırlık merkezi yüksek ve dengesi hassas makinelerdir. Standart bir kamyon platformuna genel amaçlı zincirle bağlamak yeterli olmayabilir; üreticinin belirlediği sabitleme noktaları kullanılmazsa taşıma sırasında sarsıntı, hidrolik silindirlerde iç hasara yol açabilir. İkinci el alımda bu bilgiye genellikle satıcı da sahip değildir çünkü üretici kılavuzu makineyle birlikte devredilmemiş olabilir.",
            },
            {
                baslik: "Sigorta kapsamının belirsizliği",
                metin:
                    "İkinci el bir makinenin nakliyesi için ayrıca bir nakliye sigortası yaptırılmadıysa, taşıma sırasında oluşan hasar hiçbir tarafça karşılanmayabilir. Alıcı bu sigortayı genellikle düşünmez çünkü makineyi henüz kendi malı olarak görmeye başlamıştır ama teslim alana kadar risk fiilen taşınmaktadır. Bu boşluk, ikinci el alımın nakliye aşamasında en sık atlanan risk kalemidir.",
            },
            {
                baslik: "Teslimat sonrası ilk çalıştırmada ortaya çıkan sorunlar",
                metin:
                    "Nakliye sırasında oluşan bir hasar, çoğu zaman makine ilk kez çalıştırıldığında (hidrolik basınç devreye girdiğinde) ortaya çıkar — sahada, taşıyıcı çoktan ayrılmış olduğu için sorumluluk tespiti daha da zorlaşır. Bu nedenle ikinci el alımda makinenin teslim alındığı anda, taşıyıcı hâlâ sahadayken çalıştırılıp test edilmesi önemlidir; bu adım genellikle atlanır.",
            },
            {
                baslik: "Kiralamada nakliye ve sorumluluk zinciri nettir",
                metin:
                    "Kiralık bir makinenin sahaya teslimi, filo sahibinin kendi ekipmanı ve deneyimli personeliyle yapılır; sabitleme noktaları, kaldırma prosedürü ve sigorta kapsamı önceden bellidir çünkü bu, filo sahibinin günlük operasyonudur. Kiracı için sorumluluk zinciriyle uğraşmak gerekmez — makine sahaya sağlam ulaşmazsa bu filo sahibinin sorunudur, kiracının değil.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İkinci el nakliyesi ile kiralı teslimat karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, ikinci el bir platformun nakliyesinde ortaya çıkabilecek sorumluluk ve risk kalemlerini kiralı teslimatla karşılaştırır.",
                ],
                tablo: {
                    basliklar: ["Nakliye risk kalemi", "İkinci el alımda", "Kiralı teslimatta"],
                    satirlar: [
                        ["Sorumluluk zinciri", "Satıcı/nakliyeci/alıcı arasında belirsiz", "Filo sahibinin tek elden operasyonu"],
                        ["Sabitleme bilgisi", "Üretici kılavuzu genelde eksik devredilir", "Standart prosedür olarak bilinir"],
                        ["Nakliye sigortası", "Genellikle ayrıca düşünülmez", "Operasyonun rutin parçasıdır"],
                        ["İlk çalıştırma testi", "Taşıyıcı ayrıldıktan sonra yapılır", "Teslimat anında yapılır"],
                    ],
                },
            },
            {
                baslik: "İkinci el alımda nakliye öncesi kontrol listesi",
                paragraflar: [
                    "Bir ikinci el platform nakliyeye çıkmadan önce alıcı şu adımları atmalıdır: makinenin mevcut durumunu (gövde, sepet, tekerlek/palet, hidrolik hortumlar) fotoğraflarla belgelemek, nakliyeciden sabitleme noktalarının üretici kılavuzuna uygun olduğuna dair teyit almak, ve nakliye sırasında oluşabilecek hasar için ayrı bir nakliye sigortası sorgulamak. Bu adımlar atlanırsa, teslim sonrası ortaya çıkan bir sorun için kanıt ve sorumlu taraf belirsiz kalır.",
                    "Ayrıca teslim alan taraf, taşıyıcı sahadan ayrılmadan önce makineyi çalıştırıp temel fonksiyonları (kaldırma, alçalma, yönlendirme) test etmelidir; bu, taşıma kaynaklı bir hasarın tespitini büyük ölçüde kolaylaştırır.",
                ],
            },
            {
                baslik: "Kiralamada teslimat neden operasyonun bir parçası sayılır",
                paragraflar: [
                    "Bir kiralama işletmesi için nakliye, ayrı bir tedarik problemi değil, günlük operasyonun doğal bir parçasıdır: aynı ekip, aynı ekipman ve aynı prosedürle onlarca teslimat yapılır. Bu tekrar, hem sabitleme hatalarını hem de sigorta boşluklarını sistematik olarak ortadan kaldırır — çünkü bir hata tekrarlanırsa filo sahibinin kendi maliyeti artar. İkinci el alımda ise nakliye genellikle tek seferlik ve deneyimsiz bir organizasyondur.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el platform nakliyesinde hasar oluşursa kim öder?",
                cevap:
                    "Bu, önceden yazılı bir anlaşma yoksa net değildir. Satıcı genellikle teslim noktasına kadar sorumluluk kabul eder, nakliyeci ise yalnızca kendi kusuruyla oluşan hasardan sorumlu tutulabilir; alıcı bu ikisi arasında kalabilir. Sorunu önlemenin yolu, nakliye öncesi yazılı bir sorumluluk paylaşımı yapmak ve mümkünse ayrı bir nakliye sigortası yaptırmaktır.",
            },
            {
                soru: "Makinenin nakliye sırasında hasar görüp görmediğini nasıl anlarım?",
                cevap:
                    "En güvenilir yöntem, taşıyıcı sahadan ayrılmadan önce makineyi çalıştırıp temel fonksiyonlarını test etmektir; hidrolik basınç devreye girdiğinde ortaya çıkan bir sorun (sızıntı, anormal ses, yavaş tepki) bu aşamada fark edilir. Taşıyıcı ayrıldıktan sonra ortaya çıkan bir sorun için nakliye kaynaklı olduğunu kanıtlamak çok daha zordur.",
            },
            {
                soru: "Kiralamada nakliye ücreti ayrı mı hesaplanır?",
                cevap:
                    "Bu, kiralama işletmesinin fiyatlandırma politikasına göre değişir; bazı işletmeler teslimatı kira bedeline dahil eder, bazıları mesafeye göre ayrı ücretlendirir. Önemli olan, kim ücretlendirirse ücretlendirsin, sabitleme ve sigorta sorumluluğunun filo sahibinde kalmasıdır — bu, ikinci el alımdaki belirsizlikten temel farkı oluşturur.",
            },
            {
                soru: "Üretici kılavuzu olmayan ikinci el bir makine nasıl güvenle taşınır?",
                cevap:
                    "Kılavuz yoksa, benzer model ve ağırlıktaki makineler için genel kabul gören sabitleme prensipleri (ağırlık merkezine yakın noktalardan, üretici onaylı kaldırma noktalarından bağlama) deneyimli bir nakliye ekibi tarafından uygulanmalıdır. Kılavuz temin edilemiyorsa, üreticiyle veya yetkili bayiyle iletişime geçip teknik bilgi almak, tahmine dayalı bağlamaktan daha güvenlidir.",
            },
            {
                soru: "Nakliye sigortası olmadan ikinci el makine taşımak ne kadar riskli?",
                cevap:
                    "Risk, makinenin değeri ve taşıma mesafesiyle doğru orantılı büyür. Sigortasız bir taşımada oluşan hasar tamamen alıcının veya nakliyecinin cebinden karşılanır; bu da özellikle uzun mesafeli veya karayolu dışı güzergahlarda önemli bir mali risk oluşturur. Bu risk, kısa mesafeli ve düşük değerli makinelerde bile göz ardı edilmemelidir.",
            },
            {
                soru: "Kiralık makine teslimatında saha uygunluğu önceden kontrol edilir mi?",
                cevap:
                    "Ciddi bir kiralama işletmesi, teslimattan önce sahaya erişim genişliğini, zemin taşıma kapasitesini ve varsa yükseklik kısıtlarını sorgular; bu, hem taşıma güvenliğini hem de makinenin sahaya sorunsuz indirilmesini sağlar. İkinci el alımda bu ön kontrol genellikle atlanır çünkü alıcı bu detayları bilmeyebilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ağır ekipman nakliyesinde sabitleme, sigorta kapsamı ve sorumluluk zinciriyle ilgili genel prensipler kamuya açık lojistik bilgisidir. Rakam, marka veya firma adı uydurulmamıştır.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "İkinci El Forklift Almadan Önce: Akü ve Batarya Durumu Riski",
        giris:
            "Forklift ve istifleme ekipmanlarında, özellikle elektrikli/akülü modellerde, en çok göz ardı edilen ikinci el riski aküdür. Bir forkliftin motoru ve hidroliği görsel olarak sağlam görünse bile, akü grubunun kaç şarj döngüsü gördüğü, hücrelerinden kaçının kapasite kaybına uğradığı ve şarj yönetim sisteminin doğru çalışıp çalışmadığı dışarıdan anlaşılmaz. Akü, forkliftin en pahalı yedek parçalarından biridir ve kapasitesi düştüğünde makinenin bir vardiya boyunca kesintisiz çalışması mümkün olmaz — bu da özellikle istifleme yoğun depo operasyonlarında üretim akışını doğrudan etkiler. İkinci el bir forklift satın alırken satıcının 'akü iyi durumda' beyanı, bağımsız bir kapasite testiyle doğrulanmadığı sürece güvenilir değildir. Bu sayfa, forklift ve istifleme ihtiyacı olan işletmelere akü/batarya riskini ve kiralamanın bu riski nasıl bertaraf ettiğini anlatır.",
        maddeler: [
            {
                baslik: "Şarj döngüsü sayısı dışarıdan görünmez",
                metin:
                    "Bir akü grubunun ömrü, kaç kez tam şarj-deşarj döngüsünden geçtiğiyle doğrudan ilişkilidir. Bu bilgi akünün üzerinde yazmaz; ancak şarj cihazının kayıt geçmişine erişilebiliyorsa görülebilir. İkinci el satış sürecinde bu kayıtlar genellikle paylaşılmaz veya satıcının elinde bile yoktur, çünkü akü genellikle forkliftle birlikte el değiştirmiş, kaydı takip edilmemiştir.",
            },
            {
                baslik: "Kapasite kaybı vardiya ortasında ortaya çıkar",
                metin:
                    "Yorgun bir akü grubu, sabah tam şarjla yola çıksa bile öğleden sonra beklenenden çok daha hızlı boşalabilir. Bu durum, gün içinde birkaç kez şarj molası vermeyi gerektirir ve istifleme operasyonunun akışını böler. İkinci el alımda bu zafiyet, makine kısa bir test sürüşüyle denendiğinde fark edilmez; ancak tam vardiya simülasyonuyla ortaya çıkar.",
            },
            {
                baslik: "Hücre dengesizliği ve güvenlik riski",
                metin:
                    "Akü paketindeki hücrelerden bazıları diğerlerinden daha hızlı yıpranırsa, hücreler arası dengesizlik oluşur; bu durum hem kapasiteyi düşürür hem de aşırı ısınma riskini artırır. Dengesiz bir akü grubunun değişimi, tek başına forkliftin ikinci el fiyatının önemli bir bölümüne denk gelebilir — bu da satın alma sonrası bütçeyi ciddi biçimde aşan bir kalemdir.",
            },
            {
                baslik: "Şarj altyapısı uyumsuzluğu",
                metin:
                    "İkinci el bir forkliftin şarj cihazı makineyle birlikte gelmeyebilir veya farklı bir voltaj/amper standardına sahip olabilir. Bu durumda alıcı, mevcut şarj altyapısına uygun yeni bir şarj ünitesi almak zorunda kalır; bu maliyet satın alma kararı verilirken genellikle hesaba katılmaz.",
            },
            {
                baslik: "Kiralamada akü performansı garanti altındadır",
                metin:
                    "Kiralık forkliftlerde akü durumu, filo sahibinin düzenli bakım programının bir parçasıdır; performans düşen aküler filodan çekilip yenilenir çünkü aksi hâlde kiracı memnuniyetsizliği doğar. Kiracı için bu, akü kapasitesiyle ilgili hiçbir belirsizlik taşımadan, tam vardiya performansı garantisiyle makine kullanmak anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Akü/batarya riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, forklift ve istifleme ekipmanlarında akü kaynaklı riskin ikinci el alım ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Akü risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Şarj döngüsü geçmişi", "Genellikle belgesiz veya bilinmiyor", "Filo bakım kayıtlarında izlenir"],
                        ["Tam vardiya performansı", "Kısa test sürüşüyle anlaşılmaz", "Teslimat öncesi doğrulanır"],
                        ["Hücre dengesizliği", "Fark edildiğinde yüksek maliyetli", "Zayıflayan akü filodan çekilir"],
                        ["Şarj altyapısı uyumu", "Ayrıca temin gerekebilir", "Uyumlu ekipmanla teslim edilir"],
                    ],
                },
            },
            {
                baslik: "İstifleme yoğun depo operasyonlarında akünün kritikliği",
                paragraflar: [
                    "Yoğun istifleme operasyonu yürüten bir depoda forklift, vardiya boyunca neredeyse aralıksız çalışır. Bu profilde akünün kapasite kaybı, tek bir makinenin değil tüm depo akışının verimliliğini etkiler — istifleme sırası aksarsa sevkiyat gecikir. Bu nedenle akü performansı, istifleme yoğun operasyonlarda motor gücünden bile daha kritik bir seçim kriteri olabilir.",
                    "İkinci el bir forklift bu profildeki bir depoya alınacaksa, akü kapasite testi mutlaka tam vardiya simülasyonuyla yapılmalı; kısa bir tur yeterli görülmemelidir.",
                ],
            },
            {
                baslik: "Dizel/LPG modellerde farklı bir risk: yakıt sistemi",
                paragraflar: [
                    "Akü riski elektrikli modellere özgü olsa da, dizel veya LPG forkliftlerde de benzer bir belirsizlik yakıt sisteminde yaşanır: enjektör aşınması, yakıt filtresi geçmişi ve egzoz emisyon kontrolü ikinci el alımda genellikle sorgulanmaz. Kapalı alan kullanımı planlanıyorsa, emisyon seviyesinin güncel standartlara uygunluğu ayrıca doğrulanmalıdır; aksi hâlde iç mekan kullanımı mevzuata aykırı hâle gelebilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el forkliftin akü kapasitesini nasıl test edebilirim?",
                cevap:
                    "En güvenilir yöntem, makineyi tam şarj ettikten sonra gerçek bir çalışma senaryosunda (yükle istifleme, tam vardiya süresi) test etmektir. Kısa bir tur, kapasite kaybını göstermez çünkü akü ilk saatlerde normal performans gösterebilir; kayıp genellikle vardiyanın ikinci yarısında belirginleşir. Bağımsız bir akü test cihazıyla hücre gerilimlerinin kontrol edilmesi de ek bir güvence sağlar.",
            },
            {
                soru: "Akü değişimi ne kadar maliyetli olabilir?",
                cevap:
                    "Kesin bir rakam vermek yanıltıcı olur çünkü maliyet akü kapasitesine ve markaya göre değişir; ancak genel eğilim, endüstriyel forklift akülerinin makinenin kendi ikinci el fiyatının önemli bir kısmına denk gelebilecek kadar pahalı olmasıdır. Bu nedenle akü durumu bilinmeden yapılan bir satın alma, beklenmedik ve yüksek bir ek maliyet riski taşır.",
            },
            {
                soru: "Kiralık forkliftte akü sorunu yaşarsam ne olur?",
                cevap:
                    "Ciddi bir kiralama işletmesiyle çalışıldığında akü kaynaklı bir performans sorunu, filonun bakım sorumluluğundadır ve genellikle makine değişimiyle çözülür. Kiracı, akünün kendi malı olmadığı için onarım veya değişim maliyetiyle karşılaşmaz; bu, ikinci el sahiplikte olmayan bir güvencedir.",
            },
            {
                soru: "Dizel forkliftte akü riski yok mu demektir?",
                cevap:
                    "Akü riski elektrikli modellere özgüdür ama dizel/LPG modellerde benzer bir belirsizlik yakıt sistemi ve emisyon kontrolünde yaşanır. Her iki durumda da ortak nokta, ikinci el alımda enerji/güç kaynağı sisteminin gerçek durumunun kısa bir test sürüşüyle anlaşılamamasıdır.",
            },
            {
                soru: "Şarj altyapım farklıysa ikinci el forklift alabilir miyim?",
                cevap:
                    "Alabilirsiniz ama mevcut şarj cihazınızın forkliftin voltaj ve amper gereksinimine uygun olduğunu önceden doğrulamanız gerekir. Uyumsuzluk durumunda ayrı bir şarj ünitesi almanız gerekebilir; bu maliyet satın alma bütçesine dahil edilmemişse, toplam maliyet beklenenden yüksek çıkar.",
            },
            {
                soru: "İstifleme yoğun bir depoda kiralama neden daha güvenli?",
                cevap:
                    "Çünkü bu profilde bir makinenin durması yalnızca o makinenin değil, tüm sevkiyat akışının aksamasına yol açar. Kiralamada akü veya motor kaynaklı bir performans düşüşü fark edildiğinde ikame makine temini filo sahibinin sorumluluğundadır; ikinci el sahiplikte ise ikame bir seçenek olarak mevcut değildir ve arıza doğrudan operasyonu durdurur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Endüstriyel forklift akülerinin şarj döngüsü, kapasite kaybı ve hücre dengesizliği gibi genel özellikleri kamuya açık ekipman bilgisidir. Rakam, marka veya model uydurulmamıştır.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "İkinci El Eklemli Platform (Boom) Alımında Sertifika Belirsizliği",
        giris:
            "Eklemli platformlar (boom lift), hem dikey hem yatay erişim sağlayan kolları nedeniyle şantiye, cephe ve sanayi tesisi işlerinde en sık tercih edilen sınıflardan biridir; aynı zamanda periyodik kontrol ve yük testi gerektiren, mevzuata tabi bir ekipman sınıfıdır. İkinci el bir eklemli platform satın alırken karşılaşılan en can sıkıcı belirsizlik, satıcının sunduğu periyodik kontrol belgesinin gerçekten o makineye ait olup olmadığıdır. Aynı model birden fazla üretim yılında satıldığı için, bir belgenin seri numarası ile makinenin üzerindeki plaka numarası her zaman birebir eşleşmeyebilir; bu eşleşme kontrol edilmeden alım yapıldığında, işletme aslında geçerli bir belgesi olmayan bir makineyle sahada çalışmaya başlamış olur. Bu sayfa, eklemli platform ihtiyacı olan işletmelere bu sertifika/seri numarası belirsizliğini ve kiralamanın bu riski nasıl ortadan kaldırdığını anlatır.",
        maddeler: [
            {
                baslik: "Belge ile makinenin seri numarası eşleşmeyebilir",
                metin:
                    "İkinci el piyasada, aynı model bir platformun birden fazla örneği aynı anda satışa çıkabilir. Satıcı, elindeki bir periyodik kontrol raporunu satılan makineyle birlikte sunarken, raporun üzerindeki seri numarasının makinenin şasi plakasıyla birebir aynı olup olmadığı çoğu zaman kontrol edilmez. Bu eşleşme yapılmazsa, alıcı elinde geçersiz bir belgeyle sahada çalışmaya başlar.",
            },
            {
                baslik: "Kontrolün kapsamı: görsel mi, yük testli mi?",
                metin:
                    "Periyodik kontrol raporları arasında da kapsam farkı vardır; bazıları yalnızca görsel muayeneyi, bazıları ise anma yükünde statik ve dinamik yük testini içerir. İkinci el alımda satıcı genellikle raporun kapsamını belirtmez, alıcı da bu ayrımı bilmeyebilir. Yalnızca görsel muayeneden geçmiş bir makine, yapısal olarak zayıf bir noktayı gözden kaçırmış olabilir.",
            },
            {
                baslik: "Kontrolü yapan kuruluşun yetkinliği",
                metin:
                    "Periyodik kontrolü gerçekleştiren kuruluşun bu ekipman sınıfı için yetkili olup olmadığı da sorgulanmalıdır. İkinci el ilanlarında bu bilgi nadiren paylaşılır; belge üzerindeki kuruluş adı araştırılmadan kabul edilirse, kontrolün gerçek anlamda güvenilir olup olmadığı belirsiz kalır.",
            },
            {
                baslik: "Belge tarihi geçmiş olabilir",
                metin:
                    "Periyodik kontrol belgelerinin geçerlilik süresi sınırlıdır ve bu süre dolduğunda makine yeniden kontrolden geçirilmeden sahada kullanılamaz. İkinci el satın alma sürecinde belge tarihine bakılmadan, yalnızca belgenin varlığına güvenilerek karar verilirse, teslim alındıktan kısa süre sonra makinenin yeniden kontrole girmesi gerekebilir — bu da beklenmedik bir gecikme ve maliyet doğurur.",
            },
            {
                baslik: "Kiralamada belge güncelliği zaten garanti edilir",
                metin:
                    "Kiralık bir eklemli platform, iş sürekliliği zorunluluğu nedeniyle periyodik kontrolü güncel tutulur; filo sahibi, belgesi geçersiz bir makineyi kiraya veremeyeceği için bu takibi kendi operasyonunun bir parçası olarak yürütür. Kiracı için bu, belge-makine eşleşmesi veya kontrol kapsamı gibi teknik detaylarla uğraşmadan sahada çalışmaya başlamak anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sertifika/seri numarası riski: ikinci el ile kiralama",
                paragraflar: [
                    "Aşağıdaki tablo, eklemli platform alımında periyodik kontrol belgesiyle ilgili riskin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Belge risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Seri numarası eşleşmesi", "Alıcı tarafından teyit edilmesi gerekir", "Filo sahibi tarafından zaten teyitlidir"],
                        ["Kontrolün kapsamı", "Görsel mi yük testli mi belirsiz olabilir", "İş sürekliliği için kapsamlı tutulur"],
                        ["Kontrolü yapan kuruluş", "Yetkinliği araştırılmadan kabul edilebilir", "Filo sahibi tarafından önceden seçilir"],
                        ["Belge geçerlilik tarihi", "Kontrol edilmezse süresi dolmuş olabilir", "Sürekli güncel tutulur"],
                    ],
                },
            },
            {
                baslik: "Eklemli platformun (boom) tipik kullanım alanları",
                paragraflar: [
                    "Eklemli platformlar, hem dikey hem yatay erişim gerektiren cephe boyama, çelik konstrüksiyon montajı, tabela ve aydınlatma bakımı gibi işlerde tercih edilir. Kolun eklemli yapısı, engelleri (bina çıkıntısı, boru hattı, ağaç dalı) aşarak hedefe ulaşmayı mümkün kılar; bu esneklik, makas tipi platformların erişemediği noktalara ulaşımı sağlar.",
                    "Bu geniş kullanım yelpazesi, farklı işlerde farklı kol uzunluğu ve erişim açısı ihtiyacı doğurur; tek bir ikinci el makineye bağlanmak, çeşitli iş profiline sahip işletmeler için sınırlayıcı olabilir.",
                ],
            },
            {
                baslik: "Belge doğrulamada atılması gereken adımlar",
                paragraflar: [
                    "İkinci el bir eklemli platform değerlendiriliyorsa, periyodik kontrol belgesinin üzerindeki seri numarası makinenin şasi plakasındaki numarayla birebir karşılaştırılmalı, belgenin kapsamı (görsel mi yük testli mi) net biçimde sorulmalı ve kontrolü yapan kuruluşun bu ekipman sınıfı için yetkinliği araştırılmalıdır. Bu üç adımdan biri atlanırsa, elde edilen belge kâğıt üzerinde var olsa bile fiilen güvence sağlamayabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Periyodik kontrol belgesinin seri numarasını nasıl doğrularım?",
                cevap:
                    "Makinenin şasisinde veya kontrol panelinin yakınında bulunan üretici plakasındaki seri numarasını, belge üzerindeki numarayla birebir karşılaştırmanız gerekir. İki numara eşleşmiyorsa, elinizdeki belge o makineye ait değildir ve makine fiilen belgesiz sayılır; bu durumda satın alma kararı ertelenmeli ve doğru belge talep edilmelidir.",
            },
            {
                soru: "Görsel muayene ile yük testli kontrol arasındaki fark ne?",
                cevap:
                    "Görsel muayene, makinenin dışarıdan gözlemlenebilir aşınma, hasar veya sızıntılarını kontrol eder; yük testi ise makineyi anma yükünde çalıştırarak yapısal ve hidrolik performansını fiilen doğrular. Yalnızca görsel muayeneden geçmiş bir makine, yük altında ortaya çıkabilecek bir zafiyeti göstermeyebilir; bu nedenle belgenin kapsamı mutlaka sorulmalıdır.",
            },
            {
                soru: "Belgesi olmayan bir eklemli platform hiç satın alınmamalı mı?",
                cevap:
                    "Belgesiz bir makineyi satın almak mümkündür ama kullanmadan önce yetkili bir kuruluşa periyodik kontrol yaptırmak zorunludur; bu hem yasal hem operasyonel bir gerekliliktir. Belgesiz makineyi belge alınana kadar sahada kullanmak, hem mevzuata aykırıdır hem de güvenlik riski taşır.",
            },
            {
                soru: "Kiralık eklemli platformun belgesini kontrol etmem gerekir mi?",
                cevap:
                    "Kontrol etmeniz her zaman iyi bir alışkanlıktır ama ciddi bir kiralama işletmesi bu belgeyi zaten güncel tutar ve talep ettiğinizde paylaşır. Bu, ikinci el alımda kendi başınıza yürütmeniz gereken doğrulama sürecinin filo sahibine devredilmesi anlamına gelir.",
            },
            {
                soru: "Eklemli platform ile makaslı platform arasında belge açısından fark var mı?",
                cevap:
                    "Her iki sınıf da aynı mevzuata tabi periyodik kontrol gerektirir; fark, eklemli platformların kol karmaşıklığı nedeniyle kontrolün yapısal detayının biraz daha kapsamlı olabilmesidir. Bu nedenle eklemli platformlarda belge-makine eşleşmesi ve kontrol kapsamı doğrulaması özellikle önemlidir.",
            },
            {
                soru: "Belge tarihi yakında dolacak bir makineyi almalı mıyım?",
                cevap:
                    "Almanız mümkündür ama yakın tarihte yeniden kontrol maliyetini ve bu süreçte makinenin kullanım dışı kalacağı süreyi baştan hesaba katmanız gerekir. Bu maliyet genellikle satın alma fiyatına yansıtılmadığı için, belge tarihine dikkat etmeden alım yapmak beklenmedik bir ek gider doğurur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. İş ekipmanlarının periyodik kontrolü mevzuat gereğidir; bu genel bilgi kamuya açıktır. Belge-seri numarası eşleşmesi ve kontrol kapsamıyla ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; marka veya rakam uydurulmamıştır.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "İkinci El İç Mekân Platformunda Emisyon ve Gaz Güvenliği Riski",
        giris:
            "Depo, fabrika içi ve AVM gibi kapalı mekanlarda kullanılacak bir platformun en kritik özelliği güç kaynağı tipidir: dizel veya LPG motorlu bir makine, kapalı alanda egzoz emisyonu biriktirerek ciddi bir sağlık ve güvenlik riski oluşturur; bu nedenle iç mekan işlerinde akülü/elektrikli modeller tercih edilir. İkinci el bir platform satın alırken, satıcının 'iç mekana uygun' beyanı yeterli değildir — makinenin güç tipi, emisyon sınıfı ve varsa kapalı alan kullanımı için gerekli sertifikasyonu bağımsız olarak doğrulanmalıdır. Ayrıca ikinci el akülü modellerde, akü grubunun kapasite kaybı iç mekan işlerinde daha da kritik hâle gelir çünkü depo içinde şarj noktası genellikle sınırlıdır ve makinenin vardiya ortasında güç kaybetmesi tüm depo operasyonunu aksatabilir. Bu sayfa, iç mekan ve depo içi platform ihtiyacı olan işletmelere bu riski ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Dizel/LPG makinenin kapalı alanda kullanımı yanlıştır",
                metin:
                    "İçten yanmalı motorlu bir platform, kapalı bir depo veya fabrika içinde çalıştırıldığında karbon monoksit ve diğer egzoz gazları havalandırma yetersizse hızla birikir; bu durum sağlık açısından ciddi bir tehlike oluşturur. İkinci el alımda satıcının makineyi 'iç mekan da kullanılabilir' diye sunması yaygın bir yanıltmadır; güç tipi mutlaka akülü/elektrikli olmalı, bu konuda taviz verilmemelidir.",
            },
            {
                baslik: "Akülü modelde kapasite kaybı depo içinde daha kritik",
                metin:
                    "Depo içi işlerde şarj noktası genellikle sınırlı sayıdadır ve makinenin vardiya ortasında şarj için ana çalışma alanından uzaklaşması operasyonu böler. İkinci el bir akülü platformda kapasite kaybı fark edilmeden alınırsa, bu kesintiler beklenenden sık yaşanır ve raf montajı veya tesisat işi gibi zamana bağlı çalışmalarda gecikmeye yol açar.",
            },
            {
                baslik: "İz bırakmayan lastik gerekliliği",
                metin:
                    "Depo ve AVM zeminleri genellikle epoksi kaplı veya perdahlı betondur; standart siyah lastikler bu yüzeylerde kalıcı iz bırakır. İkinci el bir platform satın alınırken lastik tipi genellikle sorgulanmaz; iz bırakmayan (beyaz/gri dolgu) lastiğe sahip olmayan bir makine, hassas zeminli mekanlarda ek bir maliyet (lastik değişimi) doğurabilir.",
            },
            {
                baslik: "Dar koridor ve raf arası geçiş için şase genişliği",
                metin:
                    "Depo içi raf sistemleri arasında çalışacak bir platformun şase genişliği, koridor ölçüsüyle uyumlu olmalıdır. İkinci el bir makine bu ölçüye göre değil, genel kullanım için tasarlanmış olabilir; satın alma öncesi bu uyumun kontrol edilmemesi, makinenin sahada raf aralarına giremediğinin fark edilmesiyle sonuçlanabilir.",
            },
            {
                baslik: "Kiralamada güç tipi ve zemin uyumu iş tanımına göre seçilir",
                metin:
                    "Kiralık bir platform talep edilirken, işin kapalı mekanda mı açık alanda mı yapılacağı, zemin tipi ve koridor genişliği baştan belirtilir; filo sahibi bu bilgiye göre uygun güç tipi ve lastik/şase ölçüsüne sahip makineyi teslim eder. Kiracı için bu, ikinci el alımda kendi başına araştırması gereken teknik uyumu filo sahibine devretmek anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekan riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, kapalı alan kullanımına özgü risklerin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İç mekan risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Güç tipi doğrulaması", "Satıcı beyanına bağlı kalınır", "İş tanımına göre uygun tip seçilir"],
                        ["Akü kapasitesi", "Depo içi şarj sınırıyla birleşince kritikleşir", "Teslimat öncesi doğrulanır"],
                        ["Zemine uygun lastik", "Genellikle sorgulanmaz", "Zemin bilgisine göre seçilir"],
                        ["Koridor/şase uyumu", "Sahada fark edilme riski var", "Ölçü baştan alınarak seçilir"],
                    ],
                },
            },
            {
                baslik: "Depo içi işlerde tipik kullanım senaryoları",
                paragraflar: [
                    "İç mekan platformları; raf sistemi montajı ve bakımı, tavan aydınlatma ve sprinkler hattı işleri, tesisat/kanal döşemesi ve AVM/hastane gibi yapılarda tavan tadilatı için kullanılır. Bu işlerin ortak özelliği, hem yükseklik hem de dar alan erişimi gerektirmesidir — bu iki koşulun bir arada karşılanması, doğru makine sınıfının seçilmesini kritik hâle getirir.",
                    "Bu tür işler genellikle kısa süreli ve dönemsel olduğu için, tek bir ikinci el makineye bağlanmak, farklı koridor ve tavan yüksekliği kombinasyonlarına sahip projelerde esneklik kaybına yol açabilir.",
                ],
            },
            {
                baslik: "Satın almadan önce kontrol edilmesi gereken teknik uyum",
                paragraflar: [
                    "İkinci el bir iç mekan platformu değerlendiriliyorsa, güç tipinin gerçekten akülü/elektrikli olduğu makine plakasından teyit edilmeli, lastik tipi (iz bırakıp bırakmadığı) yerinde kontrol edilmeli ve şase genişliği ölçülerek hedeflenen koridor genişliğiyle karşılaştırılmalıdır. Bu üç uyum sağlanmadan yapılan bir satın alma, makinenin sahada kullanılamaz çıkması riskini taşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dizel bir platformu iç mekanda kısa süreliğine kullanmak sakıncalı mı?",
                cevap:
                    "Evet, kısa süreli olsa bile sakıncalıdır. Kapalı bir alanda yeterli havalandırma olmadan çalıştırılan içten yanmalı bir motor, egzoz gazlarının hızla birikmesine yol açar ve bu durum sağlık açısından ciddi risk taşır. İç mekan işlerinde süre fark etmeksizin akülü/elektrikli makine kullanılmalıdır.",
            },
            {
                soru: "İkinci el akülü platformun iç mekan için yeterli olduğunu nasıl anlarım?",
                cevap:
                    "Güç tipinin akülü olması tek başına yeterli değildir; akünün gerçek kapasitesi de test edilmelidir. Depo içinde şarj noktası sınırlı olduğu için, makinenin tam vardiya boyunca güç kaybı yaşamadan çalışabildiğinden emin olunmalıdır. Kısa bir test sürüşü bu bilgiyi vermez, tam vardiya simülasyonu gerekir.",
            },
            {
                soru: "Zemin iz bırakırsa sorumluluk kimde olur?",
                cevap:
                    "İkinci el bir makineyle çalışan işletme bu sorumluluğu kendisi taşır; hassas zeminli bir depoda iz bırakan lastikle çalışmak, zemin onarım maliyetine yol açabilir. Kiralamada ise filo sahibi, iş tanımına uygun lastik tipini teslimat öncesi sağlamakla yükümlüdür.",
            },
            {
                soru: "Şase genişliği raf aralarına uymazsa ne olur?",
                cevap:
                    "Makine raf koridoruna giremez ve iş fiilen yapılamaz hâle gelir; bu durum sahada fark edildiğinde iş takvimini doğrudan geciktirir. Bu riski önlemenin yolu, satın alma veya kiralama öncesi koridor genişliğini ölçüp makinenin şase ölçüsüyle karşılaştırmaktır.",
            },
            {
                soru: "İç mekan işleri için hangi tip platform genelde tercih edilir?",
                cevap:
                    "Akülü makaslı platformlar, dar koridor geçişleri ve orta yükseklik ihtiyaçları için en sık tercih edilen sınıftır; daha karmaşık erişim gerektiren işlerde akülü eklemli modeller de kullanılabilir. Seçim, tavan yüksekliği, koridor genişliği ve zemin tipine göre değişir.",
            },
            {
                soru: "Kiralamada iç mekan uyumu nasıl garanti edilir?",
                cevap:
                    "Kiralama talebinde işin kapalı mekanda yapılacağı, zemin tipi ve koridor genişliği belirtildiğinde, filo sahibi bu bilgilere uygun güç tipi, lastik ve şase ölçüsüne sahip makineyi seçer. Bu eşleştirme filo sahibinin sorumluluğunda olduğu için kiracının teknik detayları kendi başına araştırması gerekmez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Kapalı alanlarda içten yanmalı motorların egzoz emisyonu riski ve iz bırakmayan lastik gerekliliği kamuya açık genel ekipman/iş güvenliği bilgisidir. Rakam, marka veya tesis adı uydurulmamıştır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "İkinci El Platformda Çelik Montaj İçin Yapısal Yük Geçmişi Riski",
        giris:
            "Çelik konstrüksiyon montajı, platformların en ağır yüklendiği iş kollarından biridir: kirişler, panel elemanları ve bağlantı parçaları sepette taşınırken makine hem yükseklik hem yatay uzanım hem de yük kapasitesi açısından sınırına yakın çalışabilir. Bu tür yoğun ve tekrarlı yüklenme, platformun kol ve şasi yapısında zamanla yorulma birikimine yol açar; ancak bu birikim dışarıdan bakıldığında görünmez. İkinci el bir platform satın alırken, makinenin geçmişte hangi tür işlerde kullanıldığı — özellikle sık sık anma yükünün üzerinde veya sınırına yakın çalıştırılıp çalıştırılmadığı — neredeyse hiçbir zaman doğru biçimde bilinemez. Çelik montaj gibi ağır yük gerektiren bir işte, geçmişi belirsiz bir makineyi kullanmak, yapısal bir arızanın en riskli anda (yük sepetteyken, yükseklikteyken) ortaya çıkması ihtimalini taşır. Bu sayfa, çelik konstrüksiyon montajı için platform arayan işletmelere bu yapısal yorulma riskini ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Anma yükü sınırında sık çalıştırılmış makineler daha riskli",
                metin:
                    "Bir platformun kol ve şasi yapısı, anma yükünün altında kullanıldığında uzun ömürlü olacak şekilde tasarlanır; ama sürekli sınıra yakın veya üzerinde yüklenirse metal yorulması hızlanır. Çelik montaj işlerinde ağır elemanların taşınması bu riski artırır. İkinci el alımda makinenin bu tür yoğun yük geçmişine sahip olup olmadığı genellikle bilinmez, çünkü satıcı bu bilgiyi ya bilmez ya da paylaşmaz.",
            },
            {
                baslik: "Kaynak bölgelerinde mikro çatlak riski",
                metin:
                    "Platform gövdesi ve kolundaki kaynak bölgeleri, tekrarlı ağır yüklenme altında mikro çatlaklara en yatkın noktalardır. Bu çatlaklar başlangıçta gözle görülmez, zamanla büyüyerek yapısal bütünlüğü tehdit eder. Çelik montaj gibi ağır yük taşıyan bir geçmişe sahip ikinci el bir makinede bu risk, hafif yük işlerinde kullanılmış bir makineye göre daha yüksektir.",
            },
            {
                baslik: "Yatay uzanımda denge kaybı riski",
                metin:
                    "Çelik montaj işlerinde platform genellikle maksimum yatay uzanımda, ağır bir elemanı taşırken çalışır; bu, makinenin denge sınırlarını zorlayan bir kullanım biçimidir. Yıpranmış bir denge/stabilite sisteminin bu koşulda devreye girmemesi, devrilme riskini artırır. İkinci el alımda stabilite sisteminin bu tür ağır yatay yük senaryosunda test edilip edilmediği belirsizdir.",
            },
            {
                baslik: "Kaldırma kapasitesi etiketinin gerçeği yansıtmaması ihtimali",
                metin:
                    "Bir platformun üzerindeki kapasite etiketi, üretim anındaki tasarım değerini gösterir; ama yıllar içinde yapısal yorulma birikmişse, makinenin fiili güvenli kapasitesi etikette yazandan daha düşük olabilir. Bu fark, düzenli yük testi yapılmadan tespit edilemez ve ikinci el alımda bu test genellikle atlanır.",
            },
            {
                baslik: "Kiralamada ağır iş geçmişi filo tarafından izlenir",
                metin:
                    "Kiralık bir platform, hangi işlerde ve ne sıklıkla ağır yük altında çalıştığı filo sahibi tarafından kayıt altına alınır; bu kayıt, periyodik kontrol ve bakım programının temelini oluşturur. Çelik montaj gibi ağır iş için makine talep edildiğinde, filo sahibi bu iş profiline uygun ve yapısal olarak sağlam bir makineyi seçer — kiracı bu geçmiş belirsizliğiyle uğraşmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yapısal yük riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, çelik konstrüksiyon montajı gibi ağır yük gerektiren işlerde yapısal yorulma riskinin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Yapısal risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Ağır yük geçmişi", "Genellikle bilinmez veya belgesiz", "Filo sahibi tarafından izlenir"],
                        ["Kaynak bölgesi mikro çatlak", "Görsel muayeneyle fark edilmeyebilir", "Periyodik muayene erken yakalar"],
                        ["Yatay uzanımda denge", "Ağır yük altında test edilmemiş olabilir", "İş profiline uygun makine seçilir"],
                        ["Fiili kaldırma kapasitesi", "Etiketten farklı olabilir", "Düzenli test ile doğrulanır"],
                    ],
                },
            },
            {
                baslik: "Çelik konstrüksiyon montajında platform seçim kriterleri",
                paragraflar: [
                    "Çelik konstrüksiyon işlerinde platform seçimi; hedef yükseklik, yatay uzanım mesafesi, taşınacak elemanın ağırlığı ve zemin koşulu (sanayi holü betonu, açık şantiye zemini) birlikte değerlendirilerek yapılır. Ağır elemanların sepette taşınacağı işlerde, makinenin anma yükünün taşınacak ağırlığın belirgin biçimde üzerinde olması, yapısal güvenlik payı açısından önemlidir.",
                    "İkinci el bir makine bu kriterlere göre değil, mevcut envantere göre seçildiğinde, ya kapasite yetersiz kalır ya da makine sürekli sınırına yakın çalıştırılarak yapısal riski artırır.",
                ],
            },
            {
                baslik: "Ağır yük işleri öncesi sorulması gereken sorular",
                paragraflar: [
                    "Çelik montaj gibi ağır yük gerektiren bir iş için ikinci el platform değerlendiriliyorsa, satıcıya şu sorular yöneltilmelidir: makine daha önce hangi sektörde ve ne sıklıkla ağır yük taşıdı, son periyodik kontrolde yük testi yapıldı mı, kaynak bölgelerinde herhangi bir onarım veya güçlendirme geçmişi var mı. Bu sorulara net yanıt alınamıyorsa, ağır yük işi için o makineyi tercih etmemek daha güvenlidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Platformun geçmişte ağır yük taşıyıp taşımadığını nasıl anlarım?",
                cevap:
                    "Doğrudan gözlemle anlamak zordur; en güvenilir yol satıcıdan makinenin önceki kullanım sektörünü ve varsa bakım kayıtlarını istemektir. Kaynak bölgelerinde onarım izi olup olmadığı deneyimli bir gözle incelenebilir, ama kesin bir değerlendirme için bağımsız bir yapısal muayene önerilir.",
            },
            {
                soru: "Kapasite etiketine güvenebilir miyim?",
                cevap:
                    "Etiket, üretim anındaki tasarım değerini gösterir ve tek başına yeterli bir güvence değildir; yıllar içinde yapısal yorulma birikmişse fiili güvenli kapasite düşmüş olabilir. Ağır yük işleri için bu farkın önemli olduğu durumlarda, düzenli yük testinden geçmiş bir makine tercih edilmelidir.",
            },
            {
                soru: "Kiralık platformda ağır yük geçmişi bana zarar verir mi?",
                cevap:
                    "Hayır, çünkü filo sahibi makinenin kullanım geçmişini kendi bakım programına göre izler ve yapısal riski artmış bir makineyi filodan çeker. Kiracı, iş tanımını (ağırlık, yükseklik, uzanım) filo sahibine bildirdiğinde, bu profile uygun ve sağlam bir makine teslim alır.",
            },
            {
                soru: "Yatay uzanımda maksimum yükle çalışmak neden daha riskli?",
                cevap:
                    "Çünkü bu konum, makinenin denge sınırlarını en çok zorlayan senaryodur; ağırlık merkezi makinenin şasisinden en uzak noktaya taşınır. Stabilite sisteminde bir zafiyet varsa bu risk en çok bu koşulda ortaya çıkar. İkinci el bir makinede bu senaryo test edilmeden alım yapmak riski gizli tutar.",
            },
            {
                soru: "Kaynak bölgesindeki mikro çatlak neden tehlikelidir?",
                cevap:
                    "Çünkü zamanla büyüyerek yapısal bütünlüğü tehdit eder ve genellikle ani değil kademeli bir arıza ile sonuçlanır — bu da erken tespit edilmezse beklenmedik bir yapısal zafiyete yol açabilir. Periyodik muayene, bu tür çatlakları erken safhada yakalamak üzere tasarlanmıştır.",
            },
            {
                soru: "Ağır yük işleri için satın almak yerine kiralamak neden mantıklı?",
                cevap:
                    "Çünkü ağır yük geçmişi belirsiz bir makineye yatırım yapmak, hem yapısal risk hem de bu riski değerlendirecek teknik uzmanlık gerektirir. Kiralamada iş profiline uygun ve düzenli test edilen bir makine seçilir; bu, özellikle çelik montaj gibi güvenlik kritik işlerde riski ölçülebilir biçimde azaltır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ağır ekipmanlarda yapısal yorulma, kaynak bölgesi mikro çatlak riski ve periyodik yük testi gibi genel mühendislik bilgileri kamuya açıktır. Tesis adı, marka veya rakam uydurulmamıştır.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "İkinci El Platformda Açık Hava Koşullarının Korozyon Riski",
        giris:
            "Tarım ve silo sahalarında kullanılan platformlar, çoğunlukla açık havada, toza, neme ve zaman zaman gübre/kimyasal buharına maruz kalan koşullarda çalışır. Bu tür kırsal ve tarımsal ortamlarda uzun süre bekletilmiş veya çalıştırılmış bir ikinci el platform, dışarıdan boyası sağlam görünse bile içeride, özellikle hidrolik bağlantı noktalarında ve elektrik aksamında korozyon birikmiş olabilir. Nem ve kimyasal buhara maruz kalma, metal yüzeylerde paslanmayı hızlandırır; contalarda ve lastik/kauçuk aksamda çatlama ve sertleşme riskini artırır. İkinci el bir satıcı, makinenin daha önce hangi tür tarımsal ortamda (gübre deposu yakını, silo sahası, sulama sistemi çevresi) çalıştığını genellikle belirtmez ve bu bilgi olmadan korozyon riskini dışarıdan tespit etmek zordur. Bu sayfa, tarım ve silo sahası işleri için platform arayan işletmelere bu riski ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Gübre ve kimyasal buharının metal üzerindeki etkisi",
                metin:
                    "Tarımsal tesislerde yaygın olan amonyak bazlı gübre buharı ve nem, metal yüzeylerde standart atmosferik koşullara göre çok daha hızlı korozyona yol açabilir. Bu etki özellikle hidrolik bağlantı noktalarında ve elektrik kontaklarında görülür; dışarıdan bakıldığında makine sağlam görünse bile bu noktalarda ilerlemiş paslanma olabilir.",
            },
            {
                baslik: "Açık havada uzun süre bekletilmiş makinelerde conta sertleşmesi",
                metin:
                    "Hidrolik ve pnömatik sistemlerdeki lastik/kauçuk contalar, güneş ışığı ve sıcaklık dalgalanmasına uzun süre maruz kaldığında sertleşir ve esnekliğini kaybeder; bu da sızıntı riskini artırır. İkinci el bir makine, tarlada veya açık sahada uzun süre atıl bekletilmişse, bu sertleşme dışarıdan fark edilmeden ilerlemiş olabilir.",
            },
            {
                baslik: "Toz ve toprak partiküllerinin filtre ve hareketli aksama etkisi",
                metin:
                    "Tarım sahalarındaki yoğun toz, makinenin hava filtrelerini hızla tıkayabilir ve hareketli mekanik aksamda (mafsal, ray) aşınmayı hızlandırabilir. İkinci el alımda bu tür bir aşınmanın geçmişi genellikle belgelenmez; filtre değişim sıklığı ve mekanik aksam bakımının düzenli yapılıp yapılmadığı satıcının sözlü beyanına dayanır.",
            },
            {
                baslik: "Zorlu arazi zemininde şasi ve lastik yıpranması",
                metin:
                    "Tarım ve silo sahalarının zemini genellikle düzensiz, bazen çamurlu veya taşlıdır; bu koşullarda sık kullanılan bir makinenin şasi bağlantıları ve lastikleri hızlanmış aşınma yaşar. İkinci el bir makinenin bu tür zeminlerde ne kadar süre çalıştığı bilinmiyorsa, şasi ve lastik durumunun görünenden daha kötü olma ihtimali göz ardı edilmemelidir.",
            },
            {
                baslik: "Kiralamada korozyona dayanıklı ve düzenli bakımlı makine",
                metin:
                    "Kiralık bir platform, açık hava ve tarımsal ortam koşullarına uygun bakım programıyla düzenli olarak kontrol edilir; korozyon veya conta sertleşmesi ilerleyen bir makine filodan çekilerek bakıma alınır. Kiracı için bu, geçmişte hangi ortamda çalıştığı belirsiz bir makineye bağlanmadan, güncel durumu bilinen bir ekipmanla işe başlamak anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Açık hava/korozyon riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, tarım ve silo sahası gibi açık hava ve kimyasal buhara maruz kalan ortamlarda korozyon riskinin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Açık hava risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Gübre/kimyasal buhar korozyonu", "Geçmiş ortam bilgisi genelde eksik", "Bakım programıyla düzenli kontrol edilir"],
                        ["Conta sertleşmesi", "Uzun süre atıl bekleme fark edilmeyebilir", "Sertleşen conta filoda tespit edilip değiştirilir"],
                        ["Toz/filtre tıkanması", "Değişim sıklığı belgesiz olabilir", "Periyodik bakımın parçasıdır"],
                        ["Şasi/lastik aşınması", "Zorlu zemin geçmişi bilinmeyebilir", "Aşınan parça filoda tespit edilir"],
                    ],
                },
            },
            {
                baslik: "Tarım ve silo sahalarında platform kullanım örnekleri",
                paragraflar: [
                    "Tarımsal tesislerde platformlar; silo dış cephe bakımı, sulama sistemi üst hat kontrolü, sera çelik konstrüksiyon montajı ve tarımsal depo/ambar çatı bakımı gibi işlerde kullanılır. Bu işlerin çoğu mevsimsel yoğunlaşır (hasat öncesi/sonrası bakım dönemleri) ve zemin koşulu düzensizdir; bu nedenle zorlu zemine uygun lastik ve şasi tipi seçimi kritik önemdedir.",
                    "Mevsimsel yoğunlaşma, yıl boyu sabit bir makineye sahip olmanın ekonomik olmadığı bir kullanım deseni yaratır; bu da kiralamayı, korozyon riskinden bağımsız olarak da mantıklı bir tercih hâline getirir.",
                ],
            },
            {
                baslik: "İkinci el alımda kontrol edilmesi gereken korozyon noktaları",
                paragraflar: [
                    "Tarımsal ortamda kullanılmış bir ikinci el platform değerlendiriliyorsa, hidrolik bağlantı noktaları ve elektrik kontakları yakından incelenmeli, contaların esnekliği elle kontrol edilmeli ve hava filtresinin değişim sıklığı satıcıdan sorulmalıdır. Makinenin daha önce gübre deposu veya kimyasal depolama alanı yakınında çalışıp çalışmadığı da doğrudan sorulmalı; bu bilgi verilmiyorsa risk daha yüksek kabul edilmelidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el platformda korozyon nasıl fark edilir?",
                cevap:
                    "Dış yüzeydeki boya sağlam görünse bile, hidrolik bağlantı noktaları ve elektrik kontakları yakından incelenmelidir; bu noktalarda hafif pas izi bile içeride daha ilerlemiş bir korozyonun işareti olabilir. Mümkünse makinenin daha önce hangi ortamda çalıştığını gösteren bir beyan istenmeli, belirsizse bağımsız bir teknik kontrol yaptırılmalıdır.",
            },
            {
                soru: "Conta sertleşmesi neden özellikle açık hava kullanımında yaygın?",
                cevap:
                    "Çünkü lastik/kauçuk contalar güneş ışığı (UV) ve sıcaklık dalgalanmasına uzun süre maruz kaldığında esnekliğini kaybeder ve çatlamaya başlar. Kapalı bir depoda bekletilen makinelerde bu etki çok daha yavaş ilerler; açık sahada uzun süre bekletilmiş makinelerde ise sertleşme daha hızlı ve daha belirgin olabilir.",
            },
            {
                soru: "Tarım sahasında toz nedeniyle filtre ne sıklıkla değişmeli?",
                cevap:
                    "Kesin bir sıklık vermek yanıltıcı olur çünkü toz yoğunluğu sahaya göre değişir; ancak yoğun tozlu ortamlarda standart aralıklardan daha sık filtre kontrolü gerekir. İkinci el alımda bu değişim geçmişinin belgesiz olması, filtre durumunun bilinmeyen bir risk kalemi olarak kalmasına yol açar.",
            },
            {
                soru: "Zorlu zeminde kiralık makine kullanmak neden daha güvenli?",
                cevap:
                    "Çünkü filo sahibi, zorlu zemin koşullarına uygun lastik ve şasi tipini iş tanımına göre önceden seçer ve aşınan parçaları düzenli olarak tespit edip değiştirir. İkinci el sahiplikte bu takip alıcının sorumluluğuna kalır ve genellikle arıza ortaya çıkana kadar fark edilmez.",
            },
            {
                soru: "Silo sahasında kullanılacak platform için hangi özellikler önemli?",
                cevap:
                    "Zemin koşuluna uygun lastik/şasi tipi, açık hava koşullarına dayanıklı elektrik aksamı ve mümkünse tozdan etkilenmeyi azaltacak filtre koruma sistemi öncelikli kriterlerdir. Silo yüksekliğine göre kol uzunluğu da ayrıca değerlendirilmelidir.",
            },
            {
                soru: "Mevsimsel tarım işleri için satın almak yerine kiralamak neden mantıklı?",
                cevap:
                    "Çünkü tarımsal bakım işleri genellikle hasat öncesi veya sonrası belirli dönemlerde yoğunlaşır ve yıl boyu sabit bir makineye sahip olmak, kullanılmayan dönemlerde de bakım ve korozyon riskini taşımak anlamına gelir. Kiralama, yalnızca ihtiyaç duyulan dönemde ve güncel durumu bilinen bir makineyle çalışmayı sağlar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Açık hava koşullarının metal korozyonu ve kauçuk/lastik aksam üzerindeki etkisi kamuya açık genel malzeme bilgisidir. Tesis adı, marka veya rakam uydurulmamıştır.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "İkinci El Platformda Elektriksel İzolasyon ve Topraklama Riski",
        giris:
            "Enerji hattı yakınında, trafo çevresinde veya yüksek aydınlatma direği bakımında kullanılacak bir platformun elektriksel izolasyon durumu, standart bir cephe veya depo işine göre çok daha kritik bir güvenlik kriteridir. Bu tür işlerde makinenin sepeti ve kolu, elektrik çarpması riskini azaltacak biçimde izole edilmiş olmalı ve topraklama sistemi düzenli test edilmelidir. İkinci el bir platform satın alırken, izolasyon malzemesinin zamanla bozulup bozulmadığı (nem alması, mikro çatlak oluşması) dışarıdan görsel muayeneyle anlaşılmaz; bu özellik yalnızca özel bir dielektrik test ile doğrulanabilir ve bu test genellikle ikinci el satış sürecinde yapılmaz. Enerji hattı yakınında izolasyonu bozuk bir makineyle çalışmak, diğer platform risklerinden çok daha ağır sonuçlar doğurabilecek bir tehlikedir. Bu sayfa, enerji ve aydınlatma bakım işleri için platform arayan işletmelere bu riski ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Dielektrik izolasyonun zamanla bozulması",
                metin:
                    "Elektriksel izolasyon sağlayan kol ve sepet bölümleri, nem alma veya mikro çatlak oluşumu nedeniyle zamanla izolasyon değerini kaybedebilir. Bu bozulma gözle görülmez; ancak periyodik dielektrik testiyle tespit edilir. İkinci el alımda bu test genellikle yapılmadığı için, izolasyonu görünmez biçimde bozulmuş bir makineyle enerji hattı yakınında çalışmak ciddi bir risk taşır.",
            },
            {
                baslik: "Topraklama sisteminin güncelliği",
                metin:
                    "Enerji işlerinde kullanılan platformların topraklama bağlantıları düzenli test edilmelidir; bu bağlantıdaki bir zafiyet, izolasyon sağlam olsa bile ek bir güvenlik açığı oluşturabilir. İkinci el bir makinede topraklama test kaydı genellikle bulunmaz ve bu, satın alma sonrası ayrıca yaptırılması gereken bir kontrol hâline gelir.",
            },
            {
                baslik: "İzolasyon sertifikasının makineye özgü olması gerekir",
                metin:
                    "Dielektrik test raporu, tıpkı periyodik kontrol belgesi gibi, makinenin seri numarasıyla eşleşmelidir. İkinci el satışta bu eşleşme kontrol edilmezse, elde bulunan sertifika kâğıt üzerinde var olsa bile o makineye ait olmayabilir. Bu durumda enerji hattı yakınında fiilen sertifikasız bir makine kullanılmış olur.",
            },
            {
                baslik: "Yüksek aydınlatma direği işlerinde erişim ve stabilite",
                metin:
                    "Enerji ve aydınlatma direği bakımı genellikle standart cephe işlerinden daha yüksek erişim ve daha hassas konumlama gerektirir. İkinci el bir makinenin bu tür hassas konumlama işlerinde stabilite performansı, kısa bir test sürüşüyle değerlendirilemez; ancak gerçek yükseklik ve rüzgar koşullarında test edilerek anlaşılabilir.",
            },
            {
                baslik: "Kiralamada izolasyon ve topraklama testi düzenli yapılır",
                metin:
                    "Enerji hattı yakınında kullanılacak kiralık bir platform, dielektrik izolasyon ve topraklama testinden düzenli olarak geçirilir; filo sahibi, bu tür bir işte kullanılacak makinenin sertifikasyonunu güncel tutmak zorundadır çünkü aksi hâlde kiracıya karşı ciddi bir güvenlik sorumluluğu doğar. Kiracı için bu, izolasyon riskiyle kendi başına uğraşmadan işe başlamak anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Elektriksel izolasyon riski: ikinci el ile kiralama",
                paragraflar: [
                    "Aşağıdaki tablo, enerji hattı ve aydınlatma direği işlerinde elektriksel izolasyon ve topraklama riskinin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İzolasyon risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Dielektrik izolasyon durumu", "Görsel muayeneyle anlaşılmaz", "Periyodik dielektrik testiyle doğrulanır"],
                        ["Topraklama testi", "Genellikle kayıt bulunmaz", "Düzenli test edilir"],
                        ["Sertifika-makine eşleşmesi", "Doğrulanmazsa geçersiz olabilir", "Filo sahibi tarafından teyitlidir"],
                        ["Yükseklikte stabilite", "Gerçek koşulda test edilmemiş olabilir", "İş tanımına uygun makine seçilir"],
                    ],
                },
            },
            {
                baslik: "Enerji ve aydınlatma bakımında tipik iş profili",
                paragraflar: [
                    "Bu iş kolunda platform; trafo çevresi bakım, yüksek aydınlatma direği lamba değişimi, enerji hattı yakını ağaç budama ve santral sahası ekipman bakımı gibi işlerde kullanılır. Bu işlerin ortak özelliği, standart platform işlerine göre çok daha sıkı bir elektriksel güvenlik protokolü gerektirmesidir.",
                    "Bu protokolün gerekliliği, makinenin yalnızca yapısal olarak sağlam değil, aynı zamanda elektriksel olarak da sertifikalı olmasını zorunlu kılar — iki gereklilik bir arada ikinci el alımda doğrulanması en zor kombinasyonlardan biridir.",
                ],
            },
            {
                baslik: "Enerji işleri öncesi doğrulanması gereken belgeler",
                paragraflar: [
                    "Enerji hattı yakınında kullanılacak bir platform için, standart periyodik kontrol belgesine ek olarak güncel dielektrik izolasyon test raporu ve topraklama test kaydı talep edilmelidir. Bu belgelerin seri numarası makinenin plakasıyla eşleşmeli ve test tarihleri güncel olmalıdır. Bu belgelerden biri eksikse, o makine enerji işinde kullanılmamalıdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dielektrik izolasyon testi ne sıklıkla yapılmalı?",
                cevap:
                    "Bu, makinenin kullanım yoğunluğuna ve maruz kaldığı çevre koşullarına göre değişir; ancak enerji hattı yakınında düzenli kullanılan makinelerde bu test standart periyodik kontrolden bağımsız olarak, üreticinin veya yetkili kuruluşun önerdiği aralıklarla tekrarlanmalıdır. Test tarihinin güncelliği, makineyi kullanmadan önce mutlaka kontrol edilmelidir.",
            },
            {
                soru: "İkinci el bir makinenin izolasyon durumunu nasıl anlarım?",
                cevap:
                    "Görsel muayeneyle anlaşılmaz; yalnızca özel bir dielektrik test cihazıyla ölçülebilir. Bu testi yaptırmadan enerji hattı yakınında bir platform kullanmak, izolasyonun sağlam olduğuna dair hiçbir güvence taşımadan çalışmak anlamına gelir.",
            },
            {
                soru: "Topraklama testi neden ayrıca önemli?",
                cevap:
                    "Çünkü izolasyon sağlam olsa bile topraklama bağlantısında bir zafiyet, ek bir güvenlik açığı oluşturabilir. İki sistem birbirini tamamlar; birinin sağlam diğerinin belirsiz olduğu bir makine, enerji işlerinde tam güvenli kabul edilemez.",
            },
            {
                soru: "Kiralık platformda izolasyon sertifikasını görebilir miyim?",
                cevap:
                    "Evet, enerji işleri için makine talep ederken bu sertifikayı sormanız hem doğru hem beklenmesi gereken bir taleptir. Ciddi bir kiralama işletmesi, enerji hattı yakınında kullanılacak makinenin izolasyon ve topraklama test kayıtlarını paylaşabilmelidir.",
            },
            {
                soru: "Standart bir cephe işinde kullanılmış makine enerji işinde kullanılabilir mi?",
                cevap:
                    "Yapısal olarak sağlam olsa bile, standart bir cephe işinde kullanılmış makinenin elektriksel izolasyon sertifikası genellikle bulunmaz veya güncel değildir. Enerji hattı yakınında kullanılmadan önce mutlaka ayrı bir dielektrik test yaptırılmalıdır.",
            },
            {
                soru: "Yüksek aydınlatma direği işinde stabilite neden özellikle önemli?",
                cevap:
                    "Çünkü bu işler genellikle maksimum yükseklikte ve bazen rüzgarlı koşullarda yapılır; stabilite sisteminde bir zafiyet bu koşullarda çok daha belirgin hâle gelir. İkinci el bir makinenin bu senaryoda test edilmeden alınması, riski gizli tutar.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Enerji hattı yakınında çalışma ekipmanlarında elektriksel izolasyon ve topraklama testinin genel gerekliliği kamuya açık iş güvenliği bilgisidir. Tesis adı, marka veya rakam uydurulmamıştır.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "İkinci El Platform Alımında Üretici Garantisinin Kaybı",
        giris:
            "Operatörlü platform kiralama, işletmenin makineyi işletmek için ayrı bir personel yetiştirmeden, deneyimli bir operatörle birlikte hizmet almasını sağlar; ancak ikinci el bir platform satın alma kararı bu modelin dışında, tamamen farklı bir risk kalemini gündeme getirir: üretici garantisinin kaybı. Yeni bir platform üreticiden alındığında belirli bir süre için garanti kapsamındadır; ancak bu garanti genellikle ilk sahibe özgüdür ve el değiştirme ile birlikte ya tamamen sona erer ya da kalan süre önemli ölçüde kısıtlanır. İkinci el bir makine satın alan işletme, aslında görünürde ucuz bir fiyata makine almış olsa da, garanti kapsamı dışında kaldığı için herhangi bir üretim hatası veya erken arıza durumunda tüm onarım maliyetini kendisi üstlenir. Bu sayfa, operatörlü/operatörsüz platform ihtiyacı olan işletmelere bu garanti kaybı riskini ve kiralamanın bu riski nasıl bertaraf ettiğini anlatır.",
        maddeler: [
            {
                baslik: "Üretici garantisi genellikle ilk sahibe özgüdür",
                metin:
                    "Çoğu üretici, garanti kapsamını satış anındaki ilk alıcıyla sınırlar; makine el değiştirdiğinde garanti ya tamamen sona erer ya da devredilebilse bile bu devrin üreticiye bildirilmesi ve genellikle bir ücret veya inceleme süreci gerektirmesi söz konusu olabilir. İkinci el alıcı bu detayı sorgulamazsa, satın aldığı makinenin fiilen garantisiz olduğunu ancak bir arıza çıktığında fark eder.",
            },
            {
                baslik: "Üretim hatası kaynaklı erken arızalar garantisiz kalır",
                metin:
                    "Yeni bir makinede olası bir üretim hatası (örneğin bir bileşenin erken yıpranması) garanti kapsamında ücretsiz onarılır; garantisi bitmiş veya devredilmemiş ikinci el bir makinede aynı hata tamamen alıcının maliyeti hâline gelir. Bu risk, özellikle makinenin üretim yılı yakın olduğu için 'yeni sayılır' diye düşünülen ikinci el alımlarda gözden kaçar.",
            },
            {
                baslik: "Operatör yetkinliği ile makine uyumu",
                metin:
                    "Operatörlü kiralamada, filo sahibi hem makineyi hem de o makineye aşina, yeterlilik belgesine sahip bir operatörü birlikte sağlar. İkinci el bir makine satın alan işletme, kendi operatörünü bu spesifik makineye alıştırmak zorunda kalır; bu adaptasyon süresi, özellikle farklı marka ve modellerde farklı kontrol mantığı nedeniyle verimlilik kaybına yol açabilir.",
            },
            {
                baslik: "Servis ağına erişim garanti ile birlikte gelir",
                metin:
                    "Birçok üretici, garanti kapsamındaki makineler için öncelikli servis randevusu ve orijinal parça temini sağlar. Garanti dışı kalan bir ikinci el makine, bu önceliği kaybeder ve servis talebi sıraya girer; bu da arıza onarım süresini uzatabilir.",
            },
            {
                baslik: "Kiralamada garanti riski filo sahibine aittir",
                metin:
                    "Kiralık bir platformun garanti durumu ve servis önceliği, filo sahibinin sorumluluğundadır; kiracı bu detaylarla hiç ilgilenmek zorunda kalmaz. Operatörlü kiralama seçildiğinde ayrıca, makineye aşina bir operatörle çalışıldığı için adaptasyon kaybı da yaşanmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Garanti kaybı riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, üretici garantisi ve operatör uyumu açısından ikinci el satın alma ile kiralamanın nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Üretici garantisi", "Genellikle sona ermiş veya devredilmemiş", "Filo sahibinin sorumluluğunda, kiracıyı etkilemez"],
                        ["Üretim hatası kaynaklı arıza", "Alıcı tarafından karşılanır", "Filo sahibi tarafından yönetilir"],
                        ["Operatör-makine uyumu", "Yeni operatör adaptasyon süresi gerekir", "Makineye aşina operatör sağlanabilir"],
                        ["Servis önceliği", "Garanti dışı kaldığı için düşer", "Filo sahibinin anlaşmalarıyla korunur"],
                    ],
                },
            },
            {
                baslik: "Operatörlü ve operatörsüz kiralama arasındaki fark",
                paragraflar: [
                    "Operatörlü kiralamada, makineyle birlikte yeterlilik belgesine sahip bir operatör de sağlanır; bu, işletmenin kendi personelini eğitmesine gerek kalmadan işe başlamasını sağlar. Operatörsüz kiralamada ise makine, işletmenin kendi sertifikalı operatörüyle kullanılır — bu seçenek, işletmenin zaten deneyimli personeli olduğu durumlarda daha ekonomik olabilir.",
                    "Her iki modelde de garanti ve bakım sorumluluğu filo sahibinde kalır; bu, ikinci el sahiplikte bulunmayan bir güvencedir.",
                ],
            },
            {
                baslik: "İkinci el alımda garanti durumu nasıl sorgulanır",
                paragraflar: [
                    "İkinci el bir platform değerlendiriliyorsa, üreticiye veya yetkili bayiye doğrudan başvurup makinenin seri numarasıyla garanti durumu sorgulanmalıdır. Satıcının sözlü 'garantisi var' beyanı yeterli değildir; üretici kaydı bu beyanı doğrulamalıdır. Garanti devri mümkünse, bu devrin maliyeti ve süreci de satın alma kararına dahil edilmelidir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el bir makinenin garantisi devam ediyor mu nasıl anlarım?",
                cevap:
                    "Satıcının beyanına güvenmek yerine, makinenin seri numarasıyla doğrudan üreticiye veya yetkili bayiye başvurup garanti durumunu sorgulamanız gerekir. Bu sorgulama, garantinin fiilen devam edip etmediğini ve varsa devir koşullarını netleştirir.",
            },
            {
                soru: "Garanti devri her zaman mümkün müdür?",
                cevap:
                    "Hayır, bazı üreticiler garantiyi yalnızca ilk alıcıya tanır ve devre izin vermez; bazıları ise belirli bir ücret veya inceleme karşılığında devri kabul eder. Bu politika üreticiden üreticiye değiştiği için, satın alma öncesi doğrudan üreticiden teyit alınmalıdır.",
            },
            {
                soru: "Operatörlü kiralama neden makine adaptasyonu açısından avantajlı?",
                cevap:
                    "Çünkü sağlanan operatör, o spesifik makine markasına ve kontrol mantığına zaten aşinadır; işletmenin kendi personelini yeni bir makineye alıştırma süresine gerek kalmaz. Bu, özellikle kısa süreli veya tek seferlik işlerde verimlilik açısından belirgin bir fark yaratır.",
            },
            {
                soru: "Garantisiz ikinci el bir makinede arıza çıkarsa maliyeti ne olur?",
                cevap:
                    "Kesin bir rakam vermek yanıltıcı olur çünkü maliyet arızanın türüne göre değişir; ancak garanti kapsamı dışında kalan bir onarım, parça ve işçilik dahil tamamen alıcının bütçesinden karşılanır. Bu, satın alma kararı verilirken hesaba katılması gereken önemli bir risk kalemidir.",
            },
            {
                soru: "Kiralamada operatörsüz seçeneği kimler tercih etmeli?",
                cevap:
                    "İşletmenin zaten yeterlilik belgesine sahip, deneyimli operatörü varsa operatörsüz kiralama genellikle daha ekonomik olur. Operatör yetkinliği yoksa veya kısa süreli bir iş için ayrıca personel görevlendirmek verimsizse, operatörlü kiralama tercih edilmelidir.",
            },
            {
                soru: "Yeni sayılabilecek kadar az kullanılmış ikinci el makinede garanti riski var mı?",
                cevap:
                    "Evet, üretim yılı yakın olsa bile garanti genellikle ilk alıcıya özgüdür ve el değiştirmeyle birlikte sona erebilir. 'Az kullanılmış' olması, garanti devrinin otomatik olarak gerçekleştiği anlamına gelmez; bu detay mutlaka ayrıca sorgulanmalıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Üretici garantisinin genellikle ilk alıcıya özgü olması ve el değiştirmede kapsamının değişebilmesi, iş ekipmanları sektöründe kamuya açık genel bir uygulamadır. Marka veya rakam uydurulmamıştır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "İkinci El Platformda Dağınık Rota İçin Servis Ağı Eksikliği",
        giris:
            "Çok noktalı rota bakım işleri — örneğin farklı şehirlerdeki şubelerin aydınlatma bakımı, dağınık lokasyonlardaki tabela kontrolü veya birden fazla sahada yürütülen periyodik cephe muayenesi — bir platformun farklı coğrafi noktalarda, kısa aralıklarla taşınarak kullanılmasını gerektirir. Bu kullanım deseninde ikinci el bir makineye sahip olmanın en büyük dezavantajı, arıza anında yerel bir servis ağına erişimin belirsiz olmasıdır: makine hangi şehirde arızalanırsa arızalansın, o bölgede o marka için yetkili servis bulunmayabilir ve parça teminine günler ayrılabilir. Bir kiralama işletmesi ise genellikle birden fazla bölgede operasyon yürüttüğü için, bir noktada arıza çıktığında ikame makineyi en yakın depodan hızla temin edebilir. Bu sayfa, çok noktalı rota bakım işleri için platform arayan işletmelere bu servis ağı riskini ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Marka servis ağının bölgesel dağınıklığı",
                metin:
                    "Her platform markasının yetkili servis noktaları ülke genelinde eşit dağılmamıştır; bazı markaların belirli bölgelerde hiç yetkili servisi bulunmayabilir. İkinci el bir makine satın alırken bu dağılım genellikle sorgulanmaz; ancak makine rota üzerindeki bir noktada arızalandığında, o bölgede servis bulunmaması onarımı günler, hatta haftalar sürdürebilir.",
            },
            {
                baslik: "Parça teminin rotaya bağlı gecikmesi",
                metin:
                    "İkinci el bir makinenin yedek parçası, arızanın çıktığı bölgede stokta olmayabilir ve parça başka bir şehirden veya yurt dışından getirilmek zorunda kalınabilir. Çok noktalı bir rotada çalışan işletme için bu gecikme, yalnızca bir sahayı değil, o sahadan sonraki tüm rota planını etkiler.",
            },
            {
                baslik: "Nakliye maliyetinin rota uzunluğuyla katlanması",
                metin:
                    "Sahibi olunan bir makineyi farklı şehirler arasında taşımak, her seferinde ayrı bir nakliye organizasyonu gerektirir; bu hem maliyetli hem zaman alıcıdır. İkinci el alımda bu tekrarlayan nakliye maliyeti, satın alma kararı verilirken genellikle hesaba katılmaz ama rota uzadıkça toplam maliyeti önemli ölçüde artırır.",
            },
            {
                baslik: "Farklı sahalarda farklı makine sınıfı ihtiyacı",
                metin:
                    "Çok noktalı rotalarda her sahanın yükseklik ve zemin koşulu farklı olabilir; tek bir ikinci el makineye bağlanmak, bazı sahalarda makinenin yetersiz kalmasına, bazılarında ise gereğinden büyük bir sınıfla verimsiz çalışılmasına yol açar. Bu uyumsuzluk, rota bazlı işlerde sık karşılaşılan ama satın alma öncesi öngörülmeyen bir sorundur.",
            },
            {
                baslik: "Kiralamada bölgesel filo desteği rotayı kolaylaştırır",
                metin:
                    "Birden fazla bölgede operasyon yürüten bir kiralama işletmesi, rota üzerindeki her noktaya en yakın depodan makine tedarik edebilir ve arıza durumunda ikame makineyi hızla ulaştırabilir. Bu, çok noktalı rota işlerinde hem nakliye maliyetini hem de arıza kaynaklı gecikme riskini önemli ölçüde azaltır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Servis ağı riski: ikinci el ile kiralama karşılaştırması",
                paragraflar: [
                    "Aşağıdaki tablo, çok noktalı rota bakım işlerinde servis ve lojistik riskinin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Rota risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Yerel servis erişimi", "Bölgeye göre belirsiz olabilir", "Filo desteği bölgesel olabilir"],
                        ["Yedek parça temini", "Arıza bölgesinde stok garantisi yok", "Filo sahibi tarafından yönetilir"],
                        ["Tekrarlayan nakliye maliyeti", "Her sahaya ayrı organizasyon gerekir", "Bölgesel depo ile optimize edilir"],
                        ["Farklı saha ihtiyacı", "Tek sınıfa bağlı kalınır", "Her sahaya uygun sınıf seçilebilir"],
                    ],
                },
            },
            {
                baslik: "Çok noktalı rota işlerinde tipik senaryo",
                paragraflar: [
                    "Birden fazla şubesi veya sahası olan bir işletme, örneğin farklı illerdeki mağazalarının dış cephe aydınlatmasını periyodik olarak kontrol etmek isteyebilir. Bu tür bir işte platform ihtiyacı her sahada birkaç gün sürer ve ardından bir sonraki sahaya geçilir; bu kullanım deseni, sahibi olunan tek bir makineyi sürekli yollarda taşımayı gerektirir.",
                    "Bu taşıma süreci hem zaman hem maliyet açısından verimsizdir; her sahaya en yakın noktadan makine temin edebilen bir kiralama modeli, rota bazlı işlerde belirgin bir operasyonel avantaj sağlar.",
                ],
            },
            {
                baslik: "Rota planlaması yaparken sorulması gereken sorular",
                paragraflar: [
                    "Çok noktalı bir rota için platform tedariki planlanırken şu sorular yanıtlanmalıdır: her sahanın yükseklik ve zemin koşulu birbirinden ne kadar farklı, bir sahada arıza çıkarsa ikame makine ne kadar sürede temin edilebilir, ve toplam nakliye maliyeti tek bir makineye sahip olmakla her sahada yerel tedarik almak arasında nasıl karşılaştırılıyor. Bu sorulara net yanıt alınmadan tek bir ikinci el makineye yatırım yapmak riskli olabilir.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el makinenin bölgemde servis desteği olup olmadığını nasıl anlarım?",
                cevap:
                    "Satın almadan önce üreticinin veya yetkili distribütörün web sitesinden ya da doğrudan iletişime geçerek, rotanız üzerindeki illerde yetkili servis noktası olup olmadığını sorgulamanız gerekir. Bu bilgi olmadan satın alınan bir makine, arıza anında sizi savunmasız bırakabilir.",
            },
            {
                soru: "Çok noktalı rotada her sahaya farklı makine kiralamak pahalı olmaz mı?",
                cevap:
                    "İlk bakışta öyle görünebilir ama her sahaya uygun sınıfın seçilmesi, sahada verimsiz çalışmayı ve gereksiz büyük makine kirasını önler; toplamda bu genellikle tek bir yetersiz makineye bağlı kalmaktan daha ekonomik çıkar. Ayrıca nakliye maliyeti, bölgesel tedarikle merkezi bir sahiplikten daha düşük olabilir.",
            },
            {
                soru: "Rotada bir noktada arıza çıkarsa kiralamada süreç nasıl işler?",
                cevap:
                    "Birden fazla bölgede operasyon yürüten bir kiralama işletmesi, arızalanan makinenin yerine en yakın depodan ikame makine gönderebilir; bu süreç, sahibi olunan bir makinede mevcut olmayan bir esneklik sağlar. İkame süresi filo sahibinin bölgesel kapasitesine göre değişir, bu nedenle rota planlanırken filo sahibinin bölgesel varlığı sorgulanmalıdır.",
            },
            {
                soru: "Farklı illerdeki sahalar için tek bir marka mı tercih etmeliyim?",
                cevap:
                    "Tek marka tercih etmek, operatör eğitimi ve bakım standardizasyonu açısından avantaj sağlayabilir ama o markanın rotanızdaki her bölgede servis desteği olduğundan emin olmanız gerekir. Aksi hâlde marka birliği, servis erişimi eksikliğiyle dengelenmemiş bir avantaj olur.",
            },
            {
                soru: "İkinci el makineyi rotalar arası taşımak ne gibi ek riskler doğurur?",
                cevap:
                    "Sık taşıma, nakliye sırasında hasar riskini artırır ve her taşımada sabitleme/sigorta sorumluluğu yeniden gündeme gelir. Ayrıca makinenin sürekli yollarda olması, bakım penceresini daraltabilir; bu da periyodik kontrolün zamanında yapılmasını zorlaştırabilir.",
            },
            {
                soru: "Kiralamada rota bazlı planlama nasıl yapılır?",
                cevap:
                    "İşletme, rotasındaki sahaları ve her sahanın tahmini kullanım süresini filo sahibiyle paylaşır; filo sahibi bu bilgiye göre her sahaya en yakın depodan uygun makineyi planlar. Bu planlama, hem nakliye verimliliğini hem de arıza durumunda ikame hızını iyileştirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Ekipman servis ağının bölgesel dağılımı ve yedek parça teminindeki lojistik gerçekler kamuya açık genel bilgidir. Marka, il adı veya rakam uydurulmamıştır.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "İkinci El Arazi Tipi Platformda Gizli Devrilme/Kaza Geçmişi Riski",
        giris:
            "Zor zemin ve arazi koşullarında (engebeli, hazırlıksız, yumuşak veya eğimli zemin) kullanılan platformlar, standart beton zeminde çalışan makinelere göre çok daha yüksek bir devrilme ve dengesizlik riskiyle karşı karşıyadır. Bu risk, makinenin kendisinden çok kullanıldığı zeminden kaynaklanır; ancak bu da geçmişte zorlu arazi koşullarında sık kullanılmış bir makinenin şasi, süspansiyon ve stabilite sisteminde standart kullanıma göre daha fazla yıpranma taşıyabileceği anlamına gelir. İkinci el bir arazi tipi platform satın alırken en büyük belirsizlik, makinenin geçmişte bir devrilme veya ciddi dengesizlik olayı yaşayıp yaşamadığıdır — böyle bir olay sonrası şasi düzeltilmiş olsa bile, yapısal bütünlük tam olarak eski hâline dönmeyebilir ve bu durum satıcı tarafından genellikle beyan edilmez. Bu sayfa, zor zemin ve arazi işleri için platform arayan işletmelere bu gizli kaza geçmişi riskini ve kiralamanın çözümünü anlatır.",
        maddeler: [
            {
                baslik: "Geçmiş devrilme olayı genellikle beyan edilmez",
                metin:
                    "Bir platformun geçmişte devrilmiş veya ciddi bir dengesizlik yaşamış olması, satış değerini büyük ölçüde düşüreceği için satıcı tarafından nadiren gönüllü olarak paylaşılır. Şasi düzeltilmiş ve makine görsel olarak sağlam hâle getirilmiş olsa bile, düzeltme sonrası yapısal bütünlüğün orijinaliyle birebir aynı olduğunu garanti etmek zordur.",
            },
            {
                baslik: "Süspansiyon ve şasi bağlantılarının zorlu zeminde hızlanmış aşınması",
                metin:
                    "Engebeli veya taşlı zeminlerde sık kullanılan bir makinenin süspansiyon elemanları ve şasi bağlantı noktaları, düz zeminde çalışan bir makineye göre çok daha hızlı yıpranır. Bu aşınma, makinenin dengeleme performansını kademeli olarak düşürür ve dışarıdan bakıldığında fark edilmesi zordur.",
            },
            {
                baslik: "Otomatik dengeleme sensörlerinin kalibrasyon kaybı",
                metin:
                    "Zorlu zeminde sık kullanılan makinelerde otomatik dengeleme (self-leveling) sensörleri, tekrarlı sarsıntı nedeniyle kalibrasyon kaybına daha yatkındır. Bu sistem doğru çalışmazsa, makine eğimli bir zeminde gerektiği gibi kilitlenmeyebilir; bu da devrilme riskini doğrudan artırır. İkinci el alımda bu sistemin sahada gerçek eğimli zeminde test edilmesi genellikle atlanır.",
            },
            {
                baslik: "Lastik ve tahrik sisteminin arazi tipine uygunluğu",
                metin:
                    "Arazi tipi bir platformun lastik deseni ve tahrik sistemi (dört çeker, geniş taban) zemine özgü olarak seçilmiştir; ikinci el bir makinede bu bileşenlerin aşınma durumu, makinenin daha önce ne kadar zorlu zeminde çalıştığına bağlıdır. Aşınmış lastik veya zayıflamış tahrik sistemi, zemin tutuşunu azaltarak dengesizlik riskini artırır.",
            },
            {
                baslik: "Kiralamada arazi tipi makineler düzenli stabilite testinden geçer",
                metin:
                    "Zor zemin işleri için kiralanan bir platform, filo sahibi tarafından düzenli olarak stabilite ve dengeleme sistemi testinden geçirilir; geçmişte bir devrilme veya ciddi hasar yaşamış bir makine filoda kullanılmaya devam ettirilmez. Kiracı için bu, geçmişi belirsiz bir makineyle zorlu zeminde çalışma riskini taşımadan işe başlamak anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Devrilme/kaza geçmişi riski: ikinci el ile kiralama",
                paragraflar: [
                    "Aşağıdaki tablo, zor zemin ve arazi koşullarında kullanılan platformlarda gizli kaza geçmişi ve stabilite riskinin ikinci el satın alma ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Arazi risk kalemi", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Geçmiş devrilme/kaza", "Genellikle beyan edilmez", "Filo sahibi tarafından bu geçmişe sahip makine filoda tutulmaz"],
                        ["Süspansiyon/şasi aşınması", "Zorlu zemin geçmişi belirsizse fark edilmez", "Periyodik olarak kontrol edilir"],
                        ["Dengeleme sensör kalibrasyonu", "Sahada test edilmeden alınabilir", "Düzenli kalibrasyon yapılır"],
                        ["Lastik/tahrik uygunluğu", "Aşınma durumu bilinmeyebilir", "İş tanımına göre uygun makine seçilir"],
                    ],
                },
            },
            {
                baslik: "Zor zemin/arazi işlerinde platform seçim kriterleri",
                paragraflar: [
                    "Hazırlıksız veya engebeli zeminde çalışacak bir platform seçilirken; zeminin eğim derecesi, yumuşaklık/sertlik durumu ve varsa taşlı/düzensiz yüzey özellikleri değerlendirilmelidir. Bu koşullara uygun geniş taban, dört çeker tahrik ve güçlü otomatik dengeleme sistemine sahip bir makine, standart zemin makinelerine göre çok daha güvenli bir seçim olur.",
                    "İkinci el bir makine bu kriterlere göre değil mevcut envantere göre seçildiğinde, zeminin gerektirdiği stabilite seviyesinin altında kalınabilir; bu da devrilme riskini doğrudan artırır.",
                ],
            },
            {
                baslik: "Satın almadan önce stabilite sisteminin test edilmesi",
                paragraflar: [
                    "İkinci el bir arazi tipi platform değerlendiriliyorsa, otomatik dengeleme sistemi gerçek eğimli bir zeminde test edilmeli, süspansiyon elemanlarında görünür deformasyon olup olmadığı kontrol edilmeli ve satıcıdan makinenin geçmişte herhangi bir devrilme veya ciddi kaza yaşayıp yaşamadığı doğrudan sorulmalıdır. Bu sorulara net ve tatmin edici yanıt alınamıyorsa, o makineyi zorlu zemin işinde kullanmamak en güvenli yaklaşımdır.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el bir makinenin geçmişte devrildiğini nasıl anlarım?",
                cevap:
                    "Doğrudan gözlemle anlamak zordur çünkü şasi düzeltmesi görsel hasarı gizleyebilir. En güvenilir yöntem, satıcıdan yazılı beyan istemek, mümkünse önceki kullanıcıyla iletişime geçmek ve şüpheli durumlarda bağımsız bir yapısal muayene yaptırmaktır; şasi hizalamasındaki küçük sapmalar uzman bir gözle tespit edilebilir.",
            },
            {
                soru: "Otomatik dengeleme sistemi neden zorlu zeminde daha kritik?",
                cevap:
                    "Çünkü eğimli veya düzensiz zeminlerde makinenin güvenli çalışabilmesi, bu sistemin doğru algılayıp kilitlenmesine bağlıdır. Sistem kalibrasyonunu kaybetmişse, makine aslında güvenli olmayan bir eğimde çalışmaya izin verebilir; bu, düz zeminde çalışan makinelere göre çok daha ciddi bir risktir.",
            },
            {
                soru: "Şasi düzeltmesi yapılmış bir makine güvenli midir?",
                cevap:
                    "Düzeltme kalitesine ve yapılan işin kapsamına bağlıdır; ancak genel prensip olarak, bir kez ciddi yapısal hasar görmüş ve düzeltilmiş bir şasinin orijinal yapısal bütünlüğe birebir döndüğünü garanti etmek zordur. Bu tür bir geçmişi olan makine, özellikle zorlu zemin işlerinde ekstra dikkatle değerlendirilmelidir.",
            },
            {
                soru: "Kiralık arazi tipi platformda stabilite garantisi var mı?",
                cevap:
                    "Ciddi bir kiralama işletmesi, filosundaki arazi tipi makineleri düzenli olarak stabilite ve dengeleme testinden geçirir; geçmişte ciddi bir hasar yaşamış makine filoda tutulmaz. Bu, ikinci el sahiplikte alıcının kendi başına araştırması gereken bir güvenceyi filo sahibine devretmek anlamına gelir.",
            },
            {
                soru: "Zeminin eğimi platform seçimini nasıl etkiler?",
                cevap:
                    "Eğim derecesi arttıkça, makinenin dengeleme sisteminin telafi edebileceği maksimum eğim sınırı da önem kazanır; bu sınırın aşıldığı bir zeminde çalışmak, sistem sağlam olsa bile risklidir. Zemin eğimi önceden ölçülmeli ve makinenin teknik sınırlarıyla karşılaştırılmalıdır.",
            },
            {
                soru: "Arazi tipi bir makineyi düz zeminde de kullanabilir miyim?",
                cevap:
                    "Evet, arazi tipi makineler genellikle düz zeminde de sorunsuz çalışır; ancak daha büyük ve ağır şasi yapısı nedeniyle bazı dar mekanlara sığmayabilir. Zemin koşulunuz karışıksa (hem düz hem engebeli alanlar içeriyorsa) bu esnekliği sağlayan bir sınıf tercih etmek mantıklıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Arazi tipi platformların otomatik dengeleme sistemi ve zorlu zeminde stabilite gereksinimleri kamuya açık genel ekipman bilgisidir. Marka, model veya rakam uydurulmamıştır.",
    },

    "hizmet:makasli-platform-kiralama": {
        h1: "İkinci El Makaslı Platform mu, Kiralık mı? Batarya ve Şase Riskini Görmeden Karar Vermeyin",
        giris:
            "Makaslı platformlar, dikey kalkan kesme mekanizması sayesinde geniş sepet alanı ve yüksek taşıma kapasitesi sunar; bu özellikleri onu depo, üretim hattı ve iç mekân bakım işlerinde en çok tercih edilen platform tipi hâline getirir. Sık kullanılan bir makine olduğu için ikinci el piyasasında da bolca ilan bulunur ve fiyatlar sıfır makineye göre cazip görünür. Ancak makaslı platforma özgü üç bileşen — akü/batarya grubu, kalkan mekanizmasının şase bağlantı noktaları ve hidrolik kaldırma sistemi — ikinci el alımda dışarıdan değerlendirilmesi en zor parçalardır. Bir akü grubunun kaç şarj döngüsü gördüğünü, kalkan pimlerinde birikmiş yorgunluğu veya hidrolik pompanın gerçek performans kaybını satış anındaki kısa bir denemeyle anlamak mümkün değildir; bu belirsizlikler makine sahaya girip yoğun kullanılmaya başladığında ortaya çıkar. Bu sayfa, makaslı platforma özgü ikinci el risklerini tek tek açar ve kiralamanın bu riskleri neden yapısal olarak devre dışı bıraktığını anlatır.",
        maddeler: [
            {
                baslik: "Akü/batarya ömrü: en sık yanılgıya düşülen kalem",
                metin:
                    "Elektrikli makaslı platformların çoğu derin döngü akü grubuyla çalışır ve bu akülerin kapasitesi, şarj döngüsü arttıkça geri dönüşü olmayan biçimde azalır. İkinci el bir makinede akü grubunun kaç kez tam şarj-deşarj döngüsünden geçtiğini dışarıdan görmek mümkün değildir; satıcı 'aküler yeni değiştirildi' dese bile bu beyanı bağımsız doğrulamak alıcının elinde değildir. Kapasitesi düşmüş bir akü grubu, tam yükseklikte çalışma süresini kısaltır ve bu durum genellikle işin ortasında, makine yarı şarjda güç kaybettiğinde fark edilir.",
            },
            {
                baslik: "Kalkan (makas) mekanizmasının pim ve burç yorgunluğu",
                metin:
                    "Makaslı platformun adını aldığı çapraz kalkan mekanizması, her açılış-kapanışta pimler ve burçlar üzerinden yük taşır; bu temas noktalarında zamanla oluşan aşınma boşluk (oynama) yaratır ve bu boşluk kalkan tam açılırken hafif bir sallanma olarak hissedilir. Kısa bir showroom denemesinde bu sallanma fark edilmeyebilir çünkü boşluk yalnızca tam yükseklikte ve yük altında belirginleşir. İkinci el alımda bu detayın atlanması, sahada operatörün güven duymadığı, sallanan bir platformla çalışmasına yol açar.",
            },
            {
                baslik: "Hidrolik pompa performans kaybı: yavaş kalkış belirtisi",
                metin:
                    "Makaslı platformun dikey kaldırma hızı hidrolik pompanın performansına doğrudan bağlıdır; pompa aşındıkça kalkış hızı yavaşlar ve bu yavaşlama, özellikle yoğun kullanılan bir depoda üretkenliği doğrudan düşürür. İkinci el ilanlarında pompa performansı nadiren ölçülüp paylaşılır; alıcı, makineyi yük altında ve tam yüksekliğe kadar test etmeden bu kaybı fark edemez. Performans kaybı arızadan önce gelen bir uyarı sinyalidir ama ikinci el alımda bu sinyal genellikle okunmadan geçilir.",
            },
            {
                baslik: "Dar koridor tekerlek/şase aşınması iç mekân kullanımında kritik",
                metin:
                    "Makaslı platformlar sıklıkla dar depo koridorlarında ve hassas zeminlerde (epoksi kaplı beton, seramik) kullanılır; bu kullanım deseni tekerleklerde ve şase yataklarında özel bir aşınma paterni bırakır. İkinci el bir makinede tekerlek sertliğinin azalması, zemin izi bırakma riskini artırırken, şase yataklarındaki oynama düz sürüşte fark edilmeyip dönüşlerde ortaya çıkar. Bu tür detaylar ancak makine gerçek koridor genişliğinde manevra yaptırılarak test edilebilir.",
            },
            {
                baslik: "Kiralamada bu üç bileşenin teslimat öncesi kontrolü rutindir",
                metin:
                    "Ciddi bir kiralama işletmesi için akü kapasitesi, kalkan pim boşluğu ve hidrolik pompa performansı, her teslimat öncesi kontrol listesinin standart kalemleridir — çünkü bu kontrol yapılmazsa filo sahibinin kendisi bir sonraki kiracıdan şikâyet alır. Kiracı için bu, ikinci el alımda kendi başına yapması gereken üç ayrı teknik testi filo sahibine devretmek anlamına gelir; akü kapasitesi düşükse veya kalkanda boşluk varsa o makine zaten kiralanmaz, filodan çekilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Makaslı platformda ikinci el riski ile kiralama avantajı",
                paragraflar: [
                    "Makaslı platforma özgü üç kritik bileşen — akü, kalkan mekanizması, hidrolik pompa — ikinci el alımda dışarıdan test edilmesi en zor parçalardır. Aşağıdaki tablo bu risklerin ikinci el alım ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Bileşen", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Akü/batarya kapasitesi", "Şarj döngüsü sayısı doğrulanamaz", "Teslimat öncesi kapasite kontrolü yapılır"],
                        ["Kalkan pim/burç boşluğu", "Kısa denemede fark edilmez", "Tam yükseklikte yük altında test edilir"],
                        ["Hidrolik pompa performansı", "Yavaş kalkış genelde ölçülmez", "Standart teslimat kontrolünün parçası"],
                        ["Tekerlek/şase aşınması", "Dar koridorda ancak fiilen anlaşılır", "Aşınan parça filo rotasyonunda değişir"],
                    ],
                },
            },
            {
                baslik: "Depo ve üretim hattı için satın alma mı, kiralama mı",
                paragraflar: [
                    "Makaslı platform, iç mekân kullanımının yoğunluğu nedeniyle 'sürekli ihtiyaç duyuyoruz, satın alalım' düşüncesine en çok yol açan platform tipidir. Ancak sürekli ihtiyaç, illa satın almayı gerektirmez; asıl soru, o sürekli ihtiyacın tek bir makineyle mi yoksa değişen sepet yüksekliği ve taşıma kapasitesi gerektiren farklı işlerle mi karşılandığıdır. Depo raf yüksekliği zamanla değişebilir, üretim hattı yeniden düzenlenebilir; sabit bir makineye bağlanmak bu değişime uyum sağlamayı zorlaştırır.",
                    "Akü teknolojisi de zamanla gelişir; birkaç yıl önce üretilmiş bir makinenin akü grubu, güncel modellere kıyasla daha kısa çalışma süresi ve daha uzun şarj süresi sunabilir. Kiralama, bu teknolojik yenilenmeyi otomatik olarak yakalar çünkü filo sahibi güncel akü teknolojisine sahip makineleri filosunda tutmak zorundadır — aksi hâlde kiracı memnuniyeti düşer.",
                ],
            },
            {
                baslik: "Satın almadan önce test edilmesi gereken üç nokta",
                paragraflar: [
                    "İkinci el bir makaslı platform değerlendiriliyorsa, karardan önce şu üç nokta mutlaka fiilen test edilmelidir: akü tam şarj edilip makine tam yükseklikte belirli bir süre yük altında çalıştırılarak kapasite kaybı gözlemlenmeli, kalkan tam açılımdayken hafif bir yanal kuvvet uygulanıp sallanma/oynama kontrol edilmeli ve makine boştan tam yüksekliğe kaç saniyede çıktığı ölçülüp aynı modelin güncel katalog değeriyle karşılaştırılmalıdır. Bu üç test atlanırsa, makinenin gerçek performansı yalnızca sahada ilk yoğun kullanımda ortaya çıkar.",
                ],
            },
        ],
        sss: [
            {
                soru: "İkinci el makaslı platformda akü ömrünü nasıl anlarım?",
                cevap:
                    "En güvenilir yöntem, aküyü tam şarj ettirip makineyi tam yükseklikte, yük altında belirli bir süre (örneğin yarım saat) çalıştırıp kapasite düşüşünü gözlemlemektir. Satıcının 'aküler yeni' beyanı tek başına yeterli değildir çünkü akü sağlığı görsel muayeneyle anlaşılmaz; kapasite testi yapılmadan satın alınan bir makinede, akünün gerçek durumu ancak sahada işin ortasında güç kaybı yaşandığında fark edilir.",
            },
            {
                soru: "Kalkan mekanizmasındaki oynama ne kadar ciddi bir sorun?",
                cevap:
                    "Küçük bir boşluk normal aşınmanın parçası olabilir ama boşluk arttıkça hem operatör güveni azalır hem de pim/burç grubunun erken değişim ihtiyacı doğar. Bu boşluk yalnızca kalkan tam açılımdayken ve yük varken belirgin hâle gelir; kısa bir showroom turunda fark edilmez. Satın almadan önce makine tam yükseklikte iken hafif bir yanal kuvvet uygulanarak sallanma test edilmelidir.",
            },
            {
                soru: "Hidrolik pompa yavaşlaması makinenin arızalı olduğu anlamına mı gelir?",
                cevap:
                    "Mutlaka arıza anlamına gelmez ama performans kaybının bir işaretidir ve zamanla arızaya dönüşme ihtimali taşır. Yavaş kalkış, özellikle vardiyalı ve yoğun kullanılan bir depoda üretkenliği doğrudan düşürür; bu nedenle ikinci el alımda makinenin boştan tam yüksekliğe çıkış süresi ölçülüp güncel katalog değeriyle karşılaştırılmalıdır. Süre belirgin biçimde uzunsa, pompa revizyonu maliyeti fiyat pazarlığına dahil edilmelidir.",
            },
            {
                soru: "Dar depo koridorlarında ikinci el makine kullanmak neden riskli?",
                cevap:
                    "Dar koridorda kullanılan bir makine, tekerlek ve şase yataklarında düz sürüşte fark edilmeyen ama dönüşlerde ortaya çıkan bir aşınma paterni geliştirir. İkinci el alımda bu detay, makine gerçek koridor genişliğinde manevra yaptırılmadan anlaşılmaz; ayrıca aşınmış tekerlek hassas zeminlerde (epoksi, seramik) iz bırakma riskini artırır. Zemin hassasiyeti yüksek bir depoda çalışacaksa, tekerlek durumu mutlaka fiilen test edilmelidir.",
            },
            {
                soru: "Makaslı platform kiralamak neden özellikle akü riskini ortadan kaldırır?",
                cevap:
                    "Çünkü ciddi bir kiralama işletmesi, akü kapasitesi düşmüş bir makineyi filoda tutmaz — düşük kapasiteli akü, bir sonraki kiracıdan şikâyet almak anlamına gelir ve bu filo sahibinin ticari çıkarına aykırıdır. Bu yüzden kiralık makinelerde akü kontrolü teslimat öncesi standart bir adımdır; kiracı, ikinci el alımda kendi başına yapması gereken kapasite testini filo sahibine devretmiş olur.",
            },
            {
                soru: "Depo işletmem için makaslı platform satın almak ne zaman mantıklı olur?",
                cevap:
                    "Depo raf yüksekliği ve sepet kapasitesi ihtiyacı yıllar boyunca sabit kalacaksa ve makine haftalık olarak yoğun biçimde kullanılacaksa, satın almanın amortismanı kısalabilir. Ancak raf düzeni değişebilir, üretim hattı yeniden konumlanabilir veya mevsimsel talep dalgalanması varsa, tek bir makineye bağlanmak esnekliği azaltır. Bu durumda akü ve kalkan riskini taşımadan, ihtiyaca göre sınıf değiştirebilme imkânı sunan kiralama daha rasyonel bir tercih olur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Makaslı platformların akü/batarya sistemi, kalkan (makas) mekanizması ve hidrolik kaldırma yapısı kamuya açık genel ekipman bilgisidir. İkinci el akü ve mekanik yorgunluk riskiyle ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; marka, model veya rakam uydurulmamıştır.",
    },

    "hizmet:manlift-kiralama": {
        h1: "İkinci El Manlift Satın Almak mı, Kiralamak mı? Bom Yorgunluğu ve Muayene Şüphesi",
        giris:
            "Manlift ailesi (eklemli ve teleskopik bomlu platformlar), makaslı platformların aksine yalnızca dikey değil yatay erişim de sağlar; bu özellik onu çatı altı montaj, cephe işleri ve engelin arkasına ulaşmak gereken bakım işlerinde vazgeçilmez kılar. Ancak bu yatay erişim yeteneği, bomu sürekli eğilme ve burulma yüküne maruz bırakır — ve bu tür yükler, makaslı platformun dikey kalkan mekanizmasında görülmeyen, manlifte özgü bir yorulma riski doğurur. İkinci el bir manlift satın alırken alıcının karşılaştığı asıl belirsizlik üç noktada toplanır: bomun yapısal yorgunluk geçmişi (özellikle aşırı yanal yük altında kalıp kalmadığı), teleskopik veya eklemli bölümlerdeki hidrolik silindirlerin sızıntı geçmişi ve periyodik muayene/sertifika belgesinin gerçekten o makineye ait olup olmadığı. Bu üç risk, dışarıdan bakan bir alıcının fark edemeyeceği kadar teknik ve kademeli biçimde birikir. Bu sayfa, manlift ailesine özgü ikinci el risklerini açar ve kiralamanın bu riskleri nasıl bertaraf ettiğini anlatır.",
        maddeler: [
            {
                baslik: "Bom yorgunluk çatlağı: yanal yükün bıraktığı görünmez iz",
                metin:
                    "Manlift bomu, dikey kaldırmanın yanı sıra yatay uzanma ve dönme hareketleri sırasında sürekli eğilme-burulma yüküne maruz kalır; bu yük paterni, zamanla kaynak dikişlerinde ve bom gövdesinde mikro çatlaklar başlatabilir. Bu tür çatlaklar başlangıç aşamasında çıplak gözle görülmez ve genellikle ancak manyetik parçacık muayenesi gibi özel bir test yöntemiyle tespit edilebilir — ki bu test standart bir ikinci el satış sürecinde neredeyse hiç yapılmaz. Aşırı yanal yükte (örneğin sepette yükken hızlı dönüş) çalıştırılmış bir manlift, dışarıdan sağlam görünse bile bu tür kademeli hasarı taşıyabilir.",
            },
            {
                baslik: "Teleskopik/eklemli bölüm hidrolik silindir sızıntı geçmişi",
                metin:
                    "Manlift bomunun uzama ve açılma hareketini sağlayan hidrolik silindirler, bomun her segmentinde ayrı ayrı çalışır ve bu segmentlerden herhangi birinde başlayan bir iç sızıntı, bomun tam uzunlukta güç kaybetmesine veya sepetin yavaşça alçalmasına yol açabilir. İkinci el alımda bu sızıntı, bom kısa mesafede test edildiğinde fark edilmez; yalnızca bom tam uzunluğa çekilip yük altında bir süre beklendiğinde ortaya çıkar. Satıcının kısa bir gösterimle sınırlı tuttuğu testler bu riski gizler.",
            },
            {
                baslik: "Periyodik muayene/sertifika şüphesi: seri numarası eşleşmesi",
                metin:
                    "Manlift sınıfı ekipmanlarda periyodik kontrol/muayene belgesi yasal bir zorunluluktur ve bu belge, makinenin bom ve sepet bağlantı noktalarındaki yapısal bütünlüğünü de kapsar. İkinci el satışlarda sunulan belgenin, üzerindeki seri numarasının makinenin kendi plakasıyla birebir eşleşip eşleşmediği ve muayeneyi yapan kuruluşun bom/silindir grubunu gerçekten test edip etmediği bağımsız olarak teyit edilmelidir — bu teyit çoğu zaman atlanır ve belge yalnızca 'var' diye kabul edilir.",
            },
            {
                baslik: "Sepet döner tablası ve seviye tutma sisteminin aşınması",
                metin:
                    "Manliftte sepetin bom hareketinden bağımsız olarak yatay kalmasını sağlayan seviye tutma (self-leveling) mekanizması ve döner tabla, bomun her açı değişiminde çalışır; bu sistemdeki hassasiyet kaybı sepetin hafifçe eğik durmasına yol açabilir ve bu durum operatör için fark edilmesi zor ama güvenlik açısından kritik bir işarettir. İkinci el alımda bu sistemin kalibrasyonu genellikle test edilmeden geçilir çünkü sorunun belirtisi ancak bom tam açıldığında görünür hâle gelir.",
            },
            {
                baslik: "Kiralamada bom muayenesi ve sızıntı testi teslimat rutinidir",
                metin:
                    "Ciddi bir kiralama işletmesi için manliftin periyodik muayene belgesi güncel tutulur ve bom/silindir grubu düzenli aralıklarla kontrol edilir, çünkü bomda başlayan bir yorgunluk hasarı hem güvenlik hem de filo kârlılığı açısından erken yakalanmak zorundadır. Kiracı için bu, ikinci el alımda kendi başına yapması gereken bom muayenesini ve sızıntı testini filo sahibine devretmek anlamına gelir; şüpheli bir belge veya sızıntı bulunan makine zaten filoda tutulmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manliftte ikinci el riski ile kiralama avantajı",
                paragraflar: [
                    "Manlift bomunun yatay erişim yeteneği, aynı zamanda diğer platform tiplerinde görülmeyen yorulma ve sızıntı risklerini beraberinde getirir. Aşağıdaki tablo bu risklerin ikinci el alım ile kiralama arasında nasıl farklılaştığını gösterir.",
                ],
                tablo: {
                    basliklar: ["Risk noktası", "İkinci el satın almada", "Kiralamada"],
                    satirlar: [
                        ["Bom yorgunluk çatlağı", "Özel test yapılmadan fark edilmez", "Periyodik muayenede yapısal kontrol yapılır"],
                        ["Silindir sızıntı geçmişi", "Kısa mesafe testinde gizli kalır", "Tam uzunlukta yük altında test edilir"],
                        ["Muayene/sertifika belgesi", "Seri numarası eşleşmesi genelde teyit edilmez", "Belge güncel ve makineye özgü tutulur"],
                        ["Seviye tutma/döner tabla", "Kalibrasyon kaybı test edilmeden geçilir", "Düzenli kalibrasyon rutini uygulanır"],
                    ],
                },
            },
            {
                baslik: "Hangi işlerde manlift, hangi işlerde makaslı platform gerekir",
                paragraflar: [
                    "Manlift ailesi, engelin arkasına ulaşmak (örneğin bir makinenin veya boru hattının üzerinden geçip diğer tarafa erişmek), çatı altı çelik konstrüksiyon montajı veya bina cephesinde yatay hareket gerektiren işlerde tercih edilir; bu esneklik, dikey erişimle sınırlı makaslı platformun sunamadığı bir yetenektir. Ancak bu yetenek, bomu daha karmaşık bir yapısal ve hidrolik sisteme dönüştürür ve bu karmaşıklık ikinci el riskini de artırır.",
                    "İş profili yalnızca dikey, engelsiz bir yükseklik erişimiyse makaslı platform yeterli ve daha az riskli bir seçenektir; iş yatay uzanma veya dönme gerektiriyorsa manlift zorunlu hâle gelir. Bu ayrımı netleştirmeden ikinci el bir makineye yatırım yapmak, ya gereğinden karmaşık ya da yetersiz bir sınıfla çalışmak anlamına gelebilir.",
                ],
            },
            {
                baslik: "Satın almadan önce doğrulanması gereken üç belge/test",
                paragraflar: [
                    "İkinci el bir manlift değerlendiriliyorsa, karardan önce şunlar mutlaka doğrulanmalıdır: periyodik muayene belgesindeki seri numarasının makinenin plakasıyla birebir eşleştiği, bom tam uzunluğa çekilip yük altında en az on beş dakika beklendiğinde sepetin alçalıp alçalmadığı ve seviye tutma sisteminin bom farklı açılara getirildiğinde sepeti yatay tutup tutmadığı. Bu üç doğrulama yapılmadan verilen bir satın alma kararı, bomdaki gizli yorgunluğu ve silindir sızıntısını sahaya taşır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bom yorgunluk çatlağı ikinci el alımda nasıl anlaşılır?",
                cevap:
                    "Standart bir görsel muayeneyle anlaşılmaz; manyetik parçacık muayenesi veya ultrasonik kalınlık ölçümü gibi özel bir test gerekir ve bu test ikinci el satış sürecinde nadiren talep edilir. Alıcı bu testi bağımsız bir uzmana yaptırmadıkça, bomun geçmişte aşırı yanal yük altında kalıp kalmadığını bilme imkânı yoktur; bu belirsizlik, manliftin ikinci el alımda taşıdığı en ciddi risktir.",
            },
            {
                soru: "Periyodik muayene belgesi olan bir manlift güvenli demek midir?",
                cevap:
                    "Belgenin varlığı gereklidir ama tek başına yeterli değildir; belgedeki seri numarasının makinenin üzerindeki plakayla birebir eşleştiği ve muayenenin bom/silindir grubunu da kapsadığı ayrıca teyit edilmelidir. Bazı ikinci el satışlarında belge, aynı modelin başka bir örneğine ait olarak sunulabilir; bu tür bir uyumsuzluk yalnızca seri numarası karşılaştırması yapılırsa ortaya çıkar.",
            },
            {
                soru: "Bom tam uzunlukta yük altında sepet alçalırsa bu ne anlama gelir?",
                cevap:
                    "Bu, teleskopik veya eklemli bölümdeki hidrolik silindirlerden birinde iç sızıntı olduğunun göstergesidir. Sızıntı küçük olsa bile zamanla büyür ve tam yükseklikte çalışırken beklenmedik bir güç kaybına yol açabilir. Bu test kısa mesafede yapılmadığı için ikinci el alımda genellikle atlanır; satın almadan önce bomun tam uzunlukta ve yük altında en az on beş dakika bekletilmesi önerilir.",
            },
            {
                soru: "Manlift ile makaslı platform arasında ikinci el riski açısından fark var mı?",
                cevap:
                    "Evet, belirgin bir fark vardır. Makaslı platformun riski daha çok akü ve dikey kalkan mekanizmasında yoğunlaşırken, manliftin riski bomun yatay/dönel hareketinden kaynaklanan yapısal yorgunluk ve çok segmentli hidrolik sistemdeki sızıntı olasılığındadır. Manliftin bom yapısı daha karmaşık olduğu için ikinci el alımda gizli hasarı test etmek de daha fazla teknik bilgi gerektirir.",
            },
            {
                soru: "Kiralık manliftte muayene belgesini görebilir miyim?",
                cevap:
                    "Evet, ciddi bir kiralama işletmesi bu talebi karşılamalıdır. Makinenin güncel periyodik muayene belgesi, seri numarası eşleşmesi ve varsa geçmiş bom/silindir müdahaleleri teslimat öncesinde paylaşılabilir bir bilgidir; bu şeffaflık, ikinci el satın almada satıcının elinde tutabileceği bilgi asimetrisini ortadan kaldırır çünkü filo sahibi makineyi bir sonraki kiracıya da teslim edecektir.",
            },
            {
                soru: "Çatı altı montaj işleri için manlift kiralamak neden daha mantıklı?",
                cevap:
                    "Çatı altı ve engelin arkasına erişim gerektiren montaj işleri genellikle proje süresine bağlı, tek seferlik veya kısa süreli olur; bu tür işler için manlift satın almak hem yüksek ilk yatırım hem de bomdaki gizli yorgunluk riskini üstlenmek anlamına gelir. Kiralama, hem sadece iş süresince ödeme yapılmasını sağlar hem de bomun periyodik muayeneden geçmiş, sızıntısız bir örneğine erişimi garanti eder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Manlift (eklemli/teleskopik bomlu platform) ailesinin yapısal ve hidrolik özellikleri, periyodik muayene zorunluluğu kamuya açık genel ekipman bilgisidir. İkinci el bom yorgunluğu ve silindir sızıntı riskiyle ilgili değerlendirmeler sektör geneli bilinen dinamiklere dayanır; marka, model veya rakam uydurulmamıştır.",
    },
};

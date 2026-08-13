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
};

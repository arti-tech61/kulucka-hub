// ═══════════════════════════════════════════════════════════════════════════
// balikesirplatform.org — ELLE YAZILMIŞ İÇERİK
//
// Profil: Balıkesir merkezli platform, manlift ve forklift kiralama.
// Açı: GIDA-SÜT-ZEYTİNYAĞI ÜRETİM TESİSLERİNİN İÇİ — proses ekipmanı,
// paslanmaz tank çiftliği, dolum ve paketleme hatları, çeltik değirmeni,
// zeytin kampanyası, hijyen rejiminin yüksekte çalışmaya getirdiği kurallar
// ve kampanya/sezon takviminin bakım penceresini nasıl belirlediği.
//
// ⚠️ Çakışma uyarıları (KOPYA YASAĞI):
//   - bandirmamanlift.net kardeş Balıkesir domainidir ve MARMARA GÜNEY LİMAN
//     KUŞAĞI açısıyla yazılmıştır. O dosyada gonen, susurluk-sanayi-bolgesi ve
//     balikesir-osb sayfaları vardır. Orada işlenen konular BURADA
//     TEKRARLANMAZ: süt tesisinde temizlik döngüsü, soğuk hava deposunda akü
//     davranışı, yem tesisinde toz ve sıcak iş izni, hayvan barınağı, deri
//     işleme, termal otel, kırsal yolda çamur/kurtarma, OSB iki kapı kuralı,
//     hol içi net yükseklik-kapı ölçüsü üçlemesi.
//   - Bu dosyada mercek proses ekipmanının kendisidir: tank üstü, CIP hattı,
//     buhar borusu, dekantör katı, elevatör kulesi, dolum hattı köprüsü.
//   - bursa-cevre-ili sayfası bursamanlift.net / bursamanliftkiralama.net'teki
//     Bursa sayfalarıyla karışmaz; oradaki mercek kent sanayisi, buradaki
//     mercek Karacabey-Mustafakemalpaşa tarım-gıda koridorudur.
//
// Bilgi kuralı: Susurluk'un süt ve süt ürünleriyle, Gönen'in çeltik-pirinç,
// deri ve jeotermal kaynakla, Balıkesir'in zeytin ve zeytinyağı üretimiyle
// anılması kamuya açık genel bölge bilgisidir. Tesis adı, marka adı, kapasite
// ve rakam UYDURULMAZ.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const BALIKESIRPLATFORM_ORG: Record<string, BespokeIcerik> = {
    "bolge:susurluk": {
        h1: "Susurluk’ta Süt ve Ayran Tesislerine Platform, Manlift Kiralama",
        giris:
            "Susurluk’ta bir üretim tesisinin kapısından girdiğinizde sizi karşılayan manzara, klasik bir fabrika görüntüsünden çok bir boru ormanıdır: paslanmaz gövdeli dikey tanklar sıra hâlinde durur, aralarından geçen hatlar tavana çıkıp bir başka bölüme iner, buhar borusu izolasyon kaplamasıyla duvar boyunca ilerler, üst kotta pastörizatör ve homojenizatör çevresinde platformlar birbirine merdivenle bağlanır. İlçenin süt ve ayranla anılan kimliği, bu iç mimariyi neredeyse tipleştirmiştir. Erişim ekipmanı açısından mesele burada bir duvara ulaşmak değil, ekipman kalabalığının arasından bir noktaya varmaktır — hedef çoğu zaman tavanın kendisi değil, tavana yakın duran bir vana, bir sensör, bir askı kelepçesi veya iki tank arasına sıkışmış bir hat parçasıdır. Buna bir de üretimin malzemesinin gıda olması eklenir: sepetin altında kalan her yüzey, düşen her parça ve damlayan her sıvı doğrudan ürünle ilgili bir olaya dönüşür. Bu sayfa, Susurluk’taki süt işleme ve süt ürünleri tesislerinde platform kiralamayı proses ekipmanının çevresinden bakarak anlatıyor: makine nereye kurulur, bom hangi boşluktan geçer, iş hangi saate yazılır.",
        maddeler: [
            {
                baslik: "Tank çiftliğinde üst kapak ve gövde erişimi",
                metin:
                    "Dikey depolama ve dinlendirme tanklarının üst bölümü — kapak contası, karıştırıcı redüktörü, seviye ve sıcaklık probu, tepe temizleme başlığı — tesisin en sık ziyaret edilen yüksek noktasıdır. Tankların yan yana dizilmesi burada özel bir problem üretir: makine tankın dibine yanaşamaz, sepetin komşu iki gövde arasındaki boşluktan yukarı çıkması veya sıradan aşırtarak hedefe uzanması gerekir. Bu geometride belirleyici veri tankın çapı ile sıra aralığıdır; iki ölçüyü önceden alırsak sepetin gerçekten hedefe değip değmeyeceğini sahaya çıkmadan hesaplarız.",
            },
            {
                baslik: "CIP hatları ve tavan altı boru askılarında bakım",
                metin:
                    "Yerinde temizleme hatları tesisin her yerine dağılır ve büyük bölümü tavan altından ilerler; kelepçe gevşemesi, conta değişimi, vana gövdesi bakımı ve yalıtım onarımı bu kotta yapılır. Hattın altında çoğu zaman proses ekipmanı durduğu için makine doğrudan hedefin altına konumlanamaz, yandan uzanma zorunludur. Bu işlerde sepetin borulara temas etmeden yaklaşması esastır — paslanmaz bir hatta bırakılan çizik, kozmetik bir kusur değil, temizlenebilirliği bozan bir yüzey hatasıdır ve tesis bunu haklı olarak ciddiye alır.",
            },
            {
                baslik: "Dolum ve paketleme hattının üzerinde çalışma",
                metin:
                    "Ayran, yoğurt ve peynir hatlarının dolum-paketleme ucu, dar ve makine yoğun bir bölgedir: konveyör köprüleri, kodlama üniteleri, kolileme ve paletleme ekipmanı arka arkaya dizilir. Buradaki erişim işleri genellikle küçüktür — bir lamba, bir fotosel, bir hava hattı — ama hattın tam üzerindedir. Uygulamamız hattı iki bölgeye ayırmaktır: konveyör bandının üzerine gelen kalemler yalnızca hat boşaltıldıktan sonra yapılır, hattın kenarındaki kalemler ise üretim sürerken kapatılmış bir koridordan yürütülür.",
            },
            {
                baslik: "Buhar, kızgın su ve soğutma tesisatında erişim",
                metin:
                    "Süt işleyen bir tesisin enerji tarafı iki uçludur: bir yanda kazan dairesinden çıkan buhar ve kızgın su hattı, diğer yanda soğutma grupları ve kondenser bataryaları. İkisinin de bakım noktaları yüksekte, çoğu zaman çatıda veya dış duvar üzerindedir. Sıcak hatlarda çalışmanın tek bir ön koşulu vardır: hattın boşaltılıp soğuduğunun tesis tarafından teyit edilmesi. Soğutma tarafında ise batarya temizliği ve fan bakımı sırasında çatı üzerindeki yürüyüş yolu değil, ekipmanın kendisi hedeftir; bu yüzden erişimi zeminden bomla kurmayı tercih ederiz.",
            },
            {
                baslik: "Süt kabul saatleri ve çalışma penceresinin seçimi",
                metin:
                    "Tesisin günü, çiğ süt tankerlerinin kabul rampasına yanaştığı saatlerle başlar ve bu saatlerde hem avlu hem kabul bölümü doludur. Erişim ekipmanının bu trafiğin içine girmesi kimseye yaramaz; makinenin avluda konumlanacağı işleri kabul akışının bittiği dilime yazarız. Kabul rampası ve tanker manevra alanı üzerindeki aydınlatma, kamera ve çatı işlerinde ise tersini yaparız: iş, rampanın tamamen boş olduğu saatlere alınır ve alan o süre boyunca resmen kapatılır. Bu koordinasyonu tesisin vardiya sorumlusuyla gün öncesinden yaparız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Tesis bölümüne göre erişim ve makine eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, süt ve süt ürünleri üreten bir tesiste erişim taleplerinin geldiği başlıca bölümleri ve her birinde makineyi belirleyen unsuru gösterir. Sağdaki sütun, doğru sınıfı seçmek için önce öğrenmemiz gereken bilgidir.",
                ],
                tablo: {
                    basliklar: ["Tesis bölümü", "Tipik iş", "Uygun sınıf", "Belirleyici bilgi"],
                    satirlar: [
                        ["Tank çiftliği", "Kapak, prob, karıştırıcı", "Dar gövdeli eklemli", "Tank çapı ve sıra aralığı"],
                        ["Proses salonu", "Boru askısı, vana, yalıtım", "Akülü eklemli", "Ekipman arası boşluk"],
                        ["Dolum-paketleme", "Fotosel, kodlama, aydınlatma", "Kompakt akülü makaslı", "Hat boşaltma saati"],
                        ["Kazan ve enerji", "Buhar hattı, baca çevresi", "Bomlu", "Hat soğuma teyidi"],
                        ["Çatı üstü ekipman", "Soğutma grubu, batarya", "Uzun erişimli bomlu", "Çatı kotu ve dış mesafe"],
                        ["Kabul rampası", "Aydınlatma, kamera, saçak", "Kompakt bomlu", "Tanker trafiği saatleri"],
                    ],
                },
            },
            {
                baslik: "Paslanmaz yüzey ve gıda alanında iz bırakmama disiplini",
                paragraflar: [
                    "Gıda üretim salonunda bir erişim makinesinin bıraktığı iz üç biçimde ortaya çıkar: yüzeye değen bir çizik, zemine damlayan bir sıvı, yukarıdan düşen bir parça. Üçü de teknik arıza değil, üretim olayıdır. Bu yüzden salona giren makinede sepet kenarlarını yumuşak koruma ile kaplar, bom hareketlerinin süpüreceği hacmi çalışma öncesinde tesis sorumlusuyla birlikte işaretler ve sepette gevşek malzeme bulundurulmasını yasaklarız — el aletleri bağlı, küçük parçalar kapalı kutuda taşınır.",
                    "İkinci katman zemindedir. Tekerlek yüzeyleri salon girişinde temizlenir ve makinenin geçeceği güzergâh, ürün akışının olmadığı bir hat olarak seçilir. Çalışma noktasının altına serilen koruyucu örtü yalnızca damlama için değil, sökülen parçanın doğrudan zemine düşmemesi için de vardır. Bu kalemlerin hiçbiri ayrı bir ücret satırı değildir; gıda tesisinde çalışmanın yazılı olmayan giriş bedelidir ve teklif verirken zaten hesaba katılmıştır.",
                ],
            },
            {
                baslik: "Kısa duruşları gerçekten kullanabilmek",
                paragraflar: [
                    "Süt işleyen tesislerde hattın uzun süre durması ender olduğu için işler çoğunlukla saatlerle ölçülen aralıklara sığdırılır. Bu aralıkları verimli kılan şey ekipmanın hızı değil, sıranın önceden kurulmuş olmasıdır. Uygulamamız, duruş öncesinde kalemleri makinenin duracağı noktaya göre gruplamaktır: aynı konumdan erişilebilen ne kadar iş varsa arka arkaya yapılır, konum değiştirmek gerektiğinde ise yeni nokta ve ona ait kalem listesi zaten hazırdır. Sahada en çok zaman kaybettiren şey, makinenin ileri geri dolaşmasıdır.",
                    "İkinci düzenleme ekip tarafındadır. Yükseltilmiş sepette tek kişi çalışıyorsa aşağıda malzeme veren bir kişi bulunması, aynı işi belirgin biçimde kısaltır; her parça için sepetin inip çıkması hem süre hem hidrolik çevrim demektir. Uzun süredir birlikte çalıştığımız tesislerde bu düzen kendiliğinden oturur — operatör hangi bölümde hangi noktaya konumlanacağını bilir ve duruş başladığında hazırlık aşaması neredeyse sıfırlanır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üretim salonumuza dizel makine kesinlikle giremez; alternatifleriniz neler?",
                cevap:
                    "Zaten önermeyiz. Kapalı gıda üretim alanında egzoz gazı tek başına diskalifiye edici bir unsurdur; bu alanlara elektrikli sınıf gönderilir. Pratikte iki seçenek konuşuruz: iş salonun içinden yapılacaksa akülü makaslı veya dar gövdeli akülü eklemli sınıf, iş salonun sınırına yakınsa makineyi dışarıda konumlandırıp kapı veya açıklıktan bomla uzanmak. İkinci yöntem çoğu zaman gözden kaçar ama tesis açısından en temiz çözümdür — salona hiçbir tekerlek girmez. Hangi yöntemin uygulanacağını hedef noktanın konumu belirler; bir kroki veya birkaç fotoğraf paylaşmanız kararı vermemiz için yeterlidir. Elektrikli makinelerin şarj ihtiyacını da baştan planlarız, çünkü uzun işlerde priz noktası ve kablo güzergâhı da tesisin onayına tabi bir konudur.",
            },
            {
                soru: "Tanklarımız birbirine çok yakın dizili; sepet aradan geçebilir mi?",
                cevap:
                    "Bu, bize en sık sorulan geometri sorusudur ve cevabı üç ölçüye bağlıdır: tank çapı, iki tank arasındaki net boşluk ve hedef noktanın yerden yüksekliği. Sepetin fiziksel genişliği bu boşluktan küçük olsa bile, bomun o boşluğa girerken çizeceği yay da hesaba katılmalıdır — çoğu başarısız denemenin sebebi sepetin değil, bomun sığmamasıdır. Bu yüzden ölçüleri önceden alır, gerekiyorsa daha ince gövdeli bir sınıfa geçer veya hedefe sıranın üzerinden aşırtarak ulaşmayı planlarız. Boşluğun gerçekten yetersiz olduğu durumlarda dürüst cevabımız şudur: bu nokta erişim makinesiyle değil, sabit iskele veya tesisin kendi servis platformuyla çalışılmalıdır. Sığmayacak bir makineyi sahaya göndermek kimseye kazandırmaz.",
            },
            {
                soru: "Hattın tam üstündeki bir armatürü üretim dururken değiştirmek istiyoruz; ne kadar süre gerekir?",
                cevap:
                    "Tek bir armatür için harcanan asıl süre, değişimin kendisi değil hazırlıktır. Hattın boşaltılması, alt bölgenin örtülmesi, makinenin konumlanması ve iş sonrası alanın kontrolü toplamda değişimin birkaç katı zaman alır. Bu yüzden önerimiz her zaman aynıdır: tek kalem için duruş kullanmayın, aynı bölgede biriken tüm yüksek kotlu işleri o duruşa toplayın. Aynı konumdan erişilebilen üç-dört kalem, tek kalemin süresine çok yakın bir zamanda biter. Süre tahminini keşif sonrası net veririz ve tahminimizi tesisin duruş penceresine göre değil, işin gerçeğine göre söyleriz — pencereye sığmayan bir işi sığacakmış gibi planlamak, yarım kalan bir montajla sonuçlanır ve bu, gıda hattının üzerinde kabul edilebilir bir durum değildir.",
            },
            {
                soru: "Çatıdaki soğutma gruplarına makineyle mi çıkılıyor, yoksa çatıya mı çıkılıyor?",
                cevap:
                    "Tercihimiz makineyle dışarıdan erişmektir. Çatı üzerine çıkmak, hem yüzeyin taşıma kapasitesi hem kenar güvenliği hem de üzerinde yürünen yalıtım katmanının zarar görmesi açısından ayrı bir risk paketi getirir; buna karşılık zeminden yükselen bir bomlu platform, sepeti ekipmanın yanına doğrudan getirir ve çatıya hiç basılmaz. Bunun için iki bilgiye ihtiyacımız var: çatı kotunun yerden yüksekliği ve makinenin duracağı noktanın binaya olan yatay mesafesi. İkincisi çoğu zaman unutulur, oysa bomlu makinede yatay uzanım yükseklikle birlikte azalır; bina dibine yanaşılamıyorsa daha büyük sınıfa geçmek gerekir. Binanın çevresinde park, saçak veya yeşil alan engeli varsa bunu da baştan bilmemiz gerekir.",
            },
            {
                soru: "İşi vardiya arasına mı yoksa gece hattı temizlenirken mi planlamalıyız?",
                cevap:
                    "İkisi de mümkündür, seçim işin gürültüsüne ve alanın durumuna bağlıdır. Vardiya arası, hattın kısa süre boşaldığı ve ekibin sahada olduğu bir penceredir; küçük ve tek konumdan biten işler için idealdir. Gece temizlik dönemi ise daha uzun bir aralık sunar, ancak alanda su ve temizlik kimyasalı bulunur; zemin kaygandır ve makinenin konumlanması ile ekipmanın korunması ayrıca planlanmalıdır. Uzun süren montaj ve söküm işlerinde gece penceresini, hızlı müdahalelerde vardiya arasını öneririz. Gece çalışması operatör planlamamızı da etkilediği için bunu en az birkaç gün önceden bilmek isteriz; gece vardiyasına atanacak operatör aynı gün gündüz işinde çalışmaz, bu bizim iç kuralımızdır ve pazarlığa açık değildir.",
            },
            {
                soru: "Kısa süreli işler için Susurluk’a gelmeniz ekonomik oluyor mu?",
                cevap:
                    "Tek başına duran yarım günlük bir iş için nakliye kalemi görece yüksek görünür; bunu gizlemenin anlamı yok. Ama bu denklemi değiştirmenin iki yolu var. Birincisi tarih esnekliğidir: işinizi ilçeye giden mevcut bir sevkiyata bağlarız, makine gün içinde size uğrar ve taşıma yükü birden fazla iş arasında paylaşılır. Bunun için bir-iki günlük bir aralık vermeniz yeterlidir. İkincisi kapsamı büyütmektir — çoğu tesiste ertelenmiş küçük yüksek kotlu kalemler birikmiş hâlde bekler: dış cephe aydınlatması, saçak altı, kamera açısı, tabela, oluk. Makine zaten sahadayken bunları aynı güne toplamak, ödenen bedelin karşılığını doldurur. Tarihiniz kesin ve iş tekse günlük tarife geçerli olur; bunu baştan söyler, teklifte gizli kalem bırakmayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Susurluk’un süt ve süt ürünleri üretimiyle anılan bir Balıkesir ilçesi olduğu ve süt işleme tesislerinde tank, boru hattı, dolum ve soğutma ekipmanının standart bir proses düzeni oluşturduğu kamuya açık genel bilgidir; konumlanma, iz bırakmama ve duruş planlaması firmamızın saha uygulamasıdır.",
    },

    "bolge:gonen": {
        h1: "Gönen’de Çeltik, Pirinç ve Gıda Tesislerine Platform Kiralama",
        giris:
            "Gönen ovasında yetişen çeltiğin fabrikadaki karşılığı, dışarıdan bakınca sıradan görünen ama içi tamamen dikey çalışan bir yapıdır. Pirinç işleyen bir tesiste malzeme yatay değil düşey hareket eder: kabul çukurundan alınan ürün elevatörle yukarı çıkar, üst kattaki eleme ve taş ayırma ünitelerinden geçer, kabuk soyma ve beyazlatma katına düşer, oradan tekrar yukarı taşınıp boy ayırma ve renk seçme makinelerine verilir. Bu yüzden fabrika üç-dört kat gibi kurgulanır ve ekipmanın büyük bölümü zeminden erişilemeyecek kotlardadır. Aynı ilçede zeytin işleme, un ve yem tesisleri ile köklü deri sanayisi de bulunur; ancak erişim ekipmanı açısından Gönen’i tanımlayan asıl özellik bu dikey değirmen mimarisidir. Buna bir de sezon gerçeği eklenir: hasat sonrası dönemde tesis gece gündüz çalışır ve bakım işleri için kapı kapanır. Bu sayfa, ilçedeki tarımsal gıda işleme tesislerinde platform ve forklift kiralamayı değirmenin kat düzeni ve sezon takvimi üzerinden anlatıyor.",
        maddeler: [
            {
                baslik: "Elevatör kuleleri ve dikey taşıma hatlarında erişim",
                metin:
                    "Kovalı elevatörler ve dik konveyörler, tesisin en yüksek ama en dar erişim hedefleridir; gövde kapakları, kayış gerginlik ayarı, üst tambur yatağı ve boşaltma ağzı düzenli bakım ister. Kule gövdesi çoğunlukla binaya bitişik veya dış duvarda yükselir; içeriden erişim mümkün olmadığında iş dışarıdan bomlu makineyle yapılır. Burada kritik olan, makinenin duracağı noktanın binaya yatay uzaklığı ile hedef kotudur — kuleye yaklaşmayı engelleyen bir saçak, tesisat veya beton kaide varsa daha uzun erişimli bir sınıf seçmek gerekir.",
            },
            {
                baslik: "Kat aralarında dar hacimli makine ihtiyacı",
                metin:
                    "Değirmen katları, makinelerin arasında ancak insanın geçebileceği koridorlar bırakacak biçimde döşenir; bu hacimlerde standart bir platform çoğu zaman kapıdan bile giremez. Kat içi işlerde tercihimiz dar gövdeli, düşük yükseklikte katlanabilen elektrikli sınıftır. Bazı katlarda çözüm makine değil, ekipmanın kendi servis merdiveni olabilir; bunu keşifte açıkça söyleriz. Kata makine çıkarılamıyorsa bir başka yol daha vardır: yükleme kapısından veya kat açıklığından dışarıdan uzanmak, ki bu Gönen’deki çok katlı tesislerde sık kullandığımız bir yöntemdir.",
            },
            {
                baslik: "Kavuz, kepek ve un tozunun getirdiği kısıtlar",
                metin:
                    "Tahıl işleyen tesislerde havada asılı organik toz, makinenin hareketli aksamında ve soğutma kanallarında birikir; bu ortamdan dönen ekipmanın temizlik ve kontrol aralığı bizim tarafımızda kısaltılır. Saha tarafında ise kısıt farklıdır: toz yoğunluğunun yüksek olduğu kapalı bölümlerde çalışma öncesi tesisin kendi izin düzeni işletilir ve makinenin bu bölgelerde hangi hareketleri yapabileceği önceden sınırlanır. Kavuz ve kepek stok alanlarında zemin de kayganlaşır; tekerlek tutuşu her konumlanmada ayrıca değerlendirilir.",
            },
            {
                baslik: "Paketleme, çuvallama ve depo tarafında forklift",
                metin:
                    "İşlenmiş ürünün çuvallandığı ve paletlendiği bölüm, ilçede forklift talebinin ana kaynağıdır. Sezonda istif yüksekliği artar, depo kapasitesi zorlanır ve mevcut makine sayısı yetmez hâle gelir. Kısa dönemli takviye burada satın almadan çok daha akılcıdır. Ekipman seçimi için üç veri isteriz: paletin gerçek dolu ağırlığı, azami istif yüksekliği ve koridor genişliği. Kapalı depoda elektrikli veya LPG’li sınıf, açık yükleme sahasında dizel sınıf çalışır; ürünün yakınında egzoz istenmiyorsa bu tercih baştan kapatılır.",
            },
            {
                baslik: "Sezon takvimi: bakım işleri hasadın dışına yazılır",
                metin:
                    "Hasat sonrası işleme dönemi başladığında tesisin kapısı bakım işlerine büyük ölçüde kapanır; ürün gelmeye devam ederken hattı durdurmak, o sezonun bütün planını bozar. Bu yüzden Gönen’de planlı bakım penceresi sezonun dışındadır ve ilçedeki tesislerin çoğu aynı aylarda boşalır. Sonuç, birkaç haftaya sıkışmış yoğun bir talep dönemidir. Uygulamamız, düzenli çalıştığımız tesislerden bakım tarihlerini önceden alıp makine tahsisini bu takvime göre yapmaktır; erken bildirim bu dönemde doğrudan bulunabilirlik anlamına gelir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Değirmen katına göre erişim planı",
                paragraflar: [
                    "Aşağıdaki tablo, çok katlı bir tahıl işleme tesisinde erişim ihtiyacının hangi kotta hangi biçime büründüğünü ve her kotta makine seçimini belirleyen unsuru özetler. Aynı tesiste birden fazla satırın geçerli olması olağandır.",
                ],
                tablo: {
                    basliklar: ["Kot / bölüm", "Erişim işi", "Yöntem", "Karar veren unsur"],
                    satirlar: [
                        ["Kabul ve çukur", "Izgara, kapak, aydınlatma", "Kompakt elektrikli", "Açıklık ölçüsü"],
                        ["Elevatör kulesi", "Üst tambur, gövde kapağı", "Dıştan bomlu", "Yatay mesafe ve kot"],
                        ["Eleme katı", "Aspiratör, kanal, askı", "Dar gövdeli elektrikli", "Kapı ve koridor"],
                        ["Soyma-beyazlatma", "Motor, kayış, pano", "Kat içi elektrikli", "Makine arası boşluk"],
                        ["Paketleme", "Konveyör üstü, kodlama", "Kompakt makaslı", "Hat boşaltma"],
                        ["Depo ve sevkiyat", "İstif, raf, çatı altı", "Forklift + makaslı", "Palet ağırlığı"],
                    ],
                },
            },
            {
                baslik: "Çok katlı yapıda ekipmanı doğru kata ulaştırmak",
                paragraflar: [
                    "Gönen’deki tesislerde en sık yaşanan aksaklık, doğru makinenin yanlış kata gitmesidir. Bir platformun üst kata çıkarılması ancak yeterli genişlikte bir yük asansörü, uygun bir yükleme kapısı veya kat açıklığı varsa mümkündür; bunların hiçbiri yoksa makine zemin katta kalır ve iş yapılamaz. Bu yüzden keşif sırasında yalnızca hedefi değil, hedefe giden yolu da ölçeriz: kapı genişliği ve yüksekliği, asansör kabin ölçüsü ve taşıma kapasitesi, döşemenin noktasal yük taşıma durumu. Üçüncüsü özellikle önemlidir; eski yapılarda döşeme, makinenin tekerlek başına düşen yükünü kaldırmayabilir ve bu, hesaplanmadan geçilecek bir konu değildir.",
                    "Yol kapalıysa alternatif üretiriz. En sık kullandığımız yöntem, dış cepheden bomlu makineyle kat açıklığına uzanmak ve işi sepetten yapmaktır; ikinci yöntem, iş penceresini tesisin kendi sabit servis platformlarının kullanılabildiği bir kapsama daraltmaktır. Hiçbiri mümkün değilse durumu açıkça söyleriz — bu iş, erişim makinesi değil iskele işidir. Sahaya çıkıp dönmek yerine bunu telefonda konuşmayı tercih ederiz.",
                ],
            },
            {
                baslik: "Sezon dışı pencerede işi sıkıştırmadan bitirmek",
                paragraflar: [
                    "Sezon dışı bakım dönemi kısa olduğu için tesisler bu haftalara olabildiğince çok kalem sığdırmak ister ve kurulan takvim çoğu zaman gerçekçi olmaz. Deneyimimiz şunu gösteriyor: kaybın büyük bölümü işlerin kendisinden değil, sıralamanın yanlışlığından doğuyor. Farklı ekipman sınıfı gerektiren kalemler birbirine karıştığında makine değiştirmek için gün kaybedilir; aynı kotta yapılabilecek işler farklı günlere dağıtıldığında ise aynı konumlanma birkaç kez tekrarlanır. Doğru sıralama, kalemleri önce ekipman sınıfına, sonra kata göre gruplamaktır.",
                    "İkinci konu malzemedir. Sezon dışı pencerede beklenen bir yedek parça yolda ise, o kalem için ayrılan gün boşa gider ve arkasındaki bütün sıra kayar. Bu yüzden takvim kurulurken her kalemin malzeme durumunu da sorarız; hazır olmayan işler listenin sonuna alınır. Bu iki düzenleme yapıldığında dar bir pencereye normalde sığmayacak sayıda iş sığar. Yapılmadığında ise sezon başlar, kapı kapanır ve kalan kalemler bir sonraki yıla devreder.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tesisimiz dört katlı ve makineyi üst kata çıkaramıyoruz; ne yapabiliriz?",
                cevap:
                    "Bu durum düşündüğünüzden daha yaygındır ve çözümsüz değildir. Önce yolu ölçeriz: yük asansörünüzün kabin ölçüsü ve kapasitesi, kat kapılarının genişlik ve yüksekliği, döşemenin taşıma durumu. Bunlardan biri uygunsa dar gövdeli, hafif elektrikli bir sınıf seçip makineyi kata çıkarırız. Hiçbiri uygun değilse ikinci yöntem devreye girer: binanın dışından bomlu bir makineyle kat açıklığına veya yükleme kapısına uzanıp işi sepetten yapmak. Bunun için dış cephede makinenin duracağı bir alan ve hedefe temiz bir yaklaşma açısı gerekir. Üçüncü ihtimalde, yani her iki yol da kapalıysa size dürüst cevabı veririz: bu iş sabit iskele ile yapılmalıdır. Fotoğraf ve basit bir kat krokisi paylaşırsanız hangi seçeneğin geçerli olduğunu sahaya çıkmadan söyleyebiliriz.",
            },
            {
                soru: "Elevatör kulemizin üst kısmında iş var ama bina dibine yaklaşamıyoruz; çözüm var mı?",
                cevap:
                    "Var, ancak makine sınıfını yeniden seçmek gerekir. Bomlu platformlarda erişim tek bir sayı değil, bir zarftır: yükseldikçe yatay uzanım azalır, yatay uzandıkça ulaşılabilen yükseklik düşer. Bina dibine yanaşamıyorsanız, hedef kota o mesafeden ulaşabilen daha büyük bir sınıfa geçilir. Sizden istediğimiz iki ölçü şudur: hedef noktanın yerden yüksekliği ve makinenin durabileceği en yakın sağlam zeminin binaya olan yatay uzaklığı. Bu ikisiyle uygun modeli hesaplarız. Aradaki engel kaldırılabilir bir şeyse — park hâlindeki araç, geçici stok, hafif bir bariyer — çoğu zaman en ucuz çözüm o engeli kaldırmaktır; birkaç metre yaklaşma, bir sınıf küçük makineyle çalışmak anlamına gelebilir.",
            },
            {
                soru: "Sezon başladıktan sonra acil bir arıza çıkarsa aynı gün gelebilir misiniz?",
                cevap:
                    "Garanti veremeyiz ama ihtimali ciddi biçimde artıran bir düzenimiz var. Sezon dönemlerinde bölgedeki program yoğunlaştığı için günlük planlarda acil müdahalelere pay bırakırız; sabahın erken saatinde gelen bir talep çoğunlukla o günün programına sıkıştırılabilir, gün ortasından sonra gelen talep büyük olasılıkla ertesi sabaha kalır. Aramadan önce üç bilgiyi hazırlamanız süreci hızlandırır: arızanın bulunduğu kot, makinenin durabileceği alanın durumu ve işin tahmini süresi. Bu üçüyle telefonda doğru sınıfı seçer, sahaya yanlış makine göndermeyiz. Düzenli çalıştığımız tesislerde ise kayıt zaten bizde olduğu için konuşma çok daha kısa sürer; sahayı ve giriş prosedürünü bilen operatör doğrudan yola çıkar.",
            },
            {
                soru: "Tozlu bölümlerde çalışmanın makineye verdiği yıpranma bize fatura edilir mi?",
                cevap:
                    "Hayır. Ortamın gerçek koşulu teklif aşamasında konuşulduysa, o ortamın getirdiği bakım yükü zaten fiyatın içindedir ve iş bitiminde ek satır çıkmaz. Tahıl tozunun yoğun olduğu bölümlerden dönen makinede filtre ve soğutma kanalı kontrolü sıkılaştırılır, hareketli yüzeylerdeki birikinti temizlenir; bu işçilik bizim standart iş akışımızdır ve makinenin ömrünü korumak öncelikle bizim işimize yarar. Kiracıya yansıyan tek başlık kullanım hatasıdır: kapasitenin üzerinde yükleme, çarpma, devirme veya makineyi belirlenen çalışma alanının dışına çıkarmak. Bu ayrım sözleşmede tek tek yazılıdır. Bizim beklentimiz karşılığında yalnızca şudur: ortamı olduğundan hafif anlatmayın, çünkü yanlış tarif edilen bir saha yanlış makineyle sonuçlanır ve bundan iki taraf da zarar görür.",
            },
            {
                soru: "Sezon dışı bakımımız üç hafta sürecek; makineyi tüm dönem sahada tutmak mantıklı mı?",
                cevap:
                    "Çoğu durumda evet, ama önce iş listenizin dağılımına bakmak gerekir. Kalemler dönem boyunca yayılıyorsa makinenin sahada kalması hem her seferinde taşıma masrafını ortadan kaldırır hem de ortaya çıkan ek işlere anında müdahale imkânı verir; uzun dönem tarifesi de günlük tarifeye göre belirgin biçimde avantajlıdır. Ancak listeniz aslında iki-üç güne sığacak kadarsa ve aradaki günler boşsa, makineyi bekletmek yerine iki ayrı kısa dönem planlamak daha ekonomiktir. Bunu birlikte hesaplarız ve hangisi sizin lehinizeyse onu öneririz. Uzun dönem kiralamada bir hususu da baştan konuşuruz: makine arızalanırsa ikame ekipman yükümlülüğü bizdedir ve bu, sözleşmede süre belirtilerek yazılır — sahada bekleyen bir ekibin belirsizliğe tahammülü yoktur.",
            },
            {
                soru: "Aynı dönemde hem platform hem forklift lazım; ikisini birlikte kiralamak avantaj sağlar mı?",
                cevap:
                    "Sağlar, ve avantajın büyük bölümü taşımada ortaya çıkar. İki makineyi aynı sevkiyata bindirdiğimizde nakliye kalemi tek bir sefere düşer; ayrı ayrı gönderildiğinde ise iki kez ödenir. İkinci kazanç planlamadadır: paketleme ve depo tarafındaki istif işiyle yüksek kottaki bakım işi genellikle aynı günlere denk gelir ve tek koordinasyonla yürütüldüğünde saha içindeki bekleme süreleri kısalır. Sözleşmeyi tek dosyada kurar, iade tarihlerini ayrı ayrı belirleriz — forklifti sezon boyunca tutup platformu bir hafta sonra iade etmek gibi karma kurgular sorunsuz uygulanır. Tek dikkat edilecek konu operatör ihtiyacıdır: iki makine aynı anda çalışacaksa iki ayrı yetkili kullanıcı gerekir, kendi personelinizin belgeleri yoksa operatörlü seçeneği baştan planlamak gerekir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Gönen’in çeltik üretimiyle anılan bir ova ilçesi olduğu, tahıl işleme tesislerinin dikey akışlı ve çok katlı kurgulandığı, ilçede deri ve jeotermal kaynağa dayalı faaliyetlerin de bulunduğu kamuya açık genel bilgidir; kat erişimi, sıralama ve tahsis uygulamaları firmamızın kendi pratiğidir.",
    },

    "bolge:susurluk-osb": {
        h1: "Susurluk OSB’de Gıda Sanayine Manlift ve Forklift Kiralama",
        giris:
            "Organize sanayi bölgesinde çalışan bir erişim ekipmanı çoğu zaman iki farklı hikâyenin içine girer. Birincisi işleyen bir tesisin bakım hikâyesidir; ikincisi ise henüz üretime geçmemiş, çeliği yeni dikilmiş bir parselin kurulum hikâyesi. Susurluk çevresindeki sanayi parselleri, ilçenin gıda ağırlıklı kimliği nedeniyle bu ikinci başlıkta kendine has bir yoğunluk taşır: bir gıda tesisinin devreye alınması, klasik bir imalathanenin kurulumundan daha uzun ve daha katmanlıdır. Çelik konstrüksiyon dikildikten sonra sırasıyla panel duvar ve tavan, proses tankları, paslanmaz boru hatları, buhar ve soğutma tesisatı, elektrik ve otomasyon, en sonda da hijyenik yüzey kaplamaları gelir. Her katman ayrı bir yükseklikte çalışır ve çoğu zaman ayrı bir makine sınıfı ister. Bu sayfa, Susurluk sanayi parsellerinde platform, manlift ve forklift kiralamayı kurulum ve devreye alma fazları üzerinden ele alıyor; işleyen tesisin günlük bakımından çok, sıfırdan kurulan bir üretim hattının erişim ihtiyacını konu ediyor.",
        maddeler: [
            {
                baslik: "Kurulum fazına göre değişen makine ihtiyacı",
                metin:
                    "Bir gıda tesisi kurulurken erişim ihtiyacı sabit kalmaz. Çelik montaj döneminde açık sahada, yüksek kotta ve engebeli zeminde çalışan arazi tipi bomlu sınıf gerekir; kabuk kapandıktan sonra iç mekânda elektrikli makaslı ve eklemli sınıflar öne çıkar; devreye alma döneminde ise kısa boylu, dar ve hızlı hareket eden makineler tercih edilir. Proje kiralamalarında bu geçişleri baştan takvime bağlarız — her fazın başında makine değiştirmek, tek bir makineyi bütün fazlar için zorlamaktan hem daha güvenli hem daha ucuzdur.",
            },
            {
                baslik: "Paslanmaz tank ve proses ekipmanının montajı",
                metin:
                    "Gıda tesisinin en karakteristik montaj kalemi, dikey proses ve depolama tanklarının yerleştirilip bağlanmasıdır. Tank kaldırma işi vinç işidir; ancak tank yerine oturduktan sonra üst bağlantıların yapılması, tepe hattının çekilmesi ve kaynak dikişlerinin tamamlanması erişim platformu ister. Bu aşamada makine tankın etrafında birden çok kez konumlanır ve her konumda farklı bir yaklaşma açısı kullanılır. Vinç ile platformun aynı alanda bulunduğu saatlerde tek bir kural katıdır: askıdaki yükün hareket hacmiyle sepetin hacmi hiçbir anda kesişmez.",
            },
            {
                baslik: "Soğuk oda ve panel duvar montajında erişim",
                metin:
                    "Yalıtım panelinden kurulan soğuk odalar ve hijyenik bölme duvarları, montaj sırasında iki kişilik ekip ve uzun parça taşıma gerektirir. Panel yerine oturana kadar sepetin sabit durması, sonra da bir sonraki panel için yatay olarak kaydırılması gerekir; bu ritim, sürekli yükselip alçalan bir çalışma değil, kot koruyarak yana ilerleyen bir çalışmadır. Bu yüzden panel montajında geniş sepetli makaslı sınıfı, kolon ve tesisat engelinin bulunduğu bölümlerde ise eklemli sınıfı öneririz. Parça boyları önceden bilinirse sepet genişliğini de buna göre seçeriz.",
            },
            {
                baslik: "Bölge ortak altyapısı ve arıtma çevresinde çalışma",
                metin:
                    "Gıda üretiminin atıksuyu organik yükü yüksek olduğu için sanayi bölgelerindeki arıtma yapıları bu tesislerin ayrılmaz parçasıdır. Havalandırma havuzu, çamur yoğunlaştırma ünitesi ve kapalı hacimlerin çevresinde çalışırken kısıt yükseklik değil, ortamdır: kapalı bölümlerde gaz birikimi ihtimali vardır ve buralarda çalışma, tesisin kendi ölçüm ve izin düzenine bağlanır. Havuz kenarlarında ise zemin dar ve düşme riski yüksektir; makinenin konumu ve destek ayaklarının basacağı yüzey ayrıca değerlendirilir, kenar boşluklarına yaklaşılmaz.",
            },
            {
                baslik: "Devreye alma döneminde ekipmanın sahada kalması",
                metin:
                    "Bir gıda hattının devreye alınması tek seferlik bir olay değil, haftalara yayılan bir ayar sürecidir: sızdırmazlık testleri, sensör kalibrasyonu, otomasyon devreye alma ve deneme üretimleri sırasında sürekli yukarıya çıkma ihtiyacı doğar. Bu dönemde makineyi her seferinde çağırmak hem yavaştır hem pahalı. Uygulamamız, devreye alma süresince ekipmanı sahada tutmak ve kullanımı proje sorumlusunun planına bırakmaktır. Süre belirsizse sözleşmeyi esnek kuyruklu kurar, iade tarihini siz bitti dediğinizde netleştiririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proje fazına göre ekipman ve süre planı",
                paragraflar: [
                    "Aşağıdaki tablo, sıfırdan kurulan bir gıda üretim tesisinde erişim ekipmanının faz faz nasıl değiştiğini gösterir. Süre sütunu takvim vaadi değil, planlama yaparken hangi kalemin uzun soluklu olduğunu göstermek içindir.",
                ],
                tablo: {
                    basliklar: ["Proje fazı", "Erişim işi", "Uygun sınıf", "Kiralama biçimi"],
                    satirlar: [
                        ["Çelik montaj", "Makas, aşık, cephe iskeleti", "Arazi tipi bomlu", "Uzun dönem"],
                        ["Kabuk ve panel", "Duvar, tavan, yalıtım", "Geniş sepetli makaslı", "Uzun dönem"],
                        ["Proses montajı", "Tank üstü, boru, kaynak", "Eklemli bomlu", "Uzun dönem"],
                        ["Mekanik tesisat", "Buhar, soğutma, kanal", "Elektrikli makaslı", "Orta dönem"],
                        ["Elektrik-otomasyon", "Kablo tavası, pano, sensör", "Kompakt elektrikli", "Orta dönem"],
                        ["Devreye alma", "Ayar, test, düzeltme", "Kompakt eklemli", "Esnek kuyruklu"],
                    ],
                },
            },
            {
                baslik: "Sahada birden fazla taşeronun aynı makineyi kullanması",
                paragraflar: [
                    "Kurulum sahalarında ekipman genellikle tek bir ekibin değil, sırayla gelen birkaç taşeronun işine yarar: mekanikçi iner, elektrikçi biner. Bu paylaşım maliyeti düşürür ama sorumluluğu bulanıklaştırır ve en sık yaşanan sorunlar buradan çıkar — makineyi kimin kullandığı, hasarın hangi ekipten kaynaklandığı, kullanıcının yetki belgesinin olup olmadığı. Bu yüzden proje kiralamalarında ekipmanın sahadaki tek muhatabını sözleşmede isim olarak belirleriz; makineyi kullanacak her kişinin yeterlilik belgesi bu kişide toplanır ve teslim sırasında kayda geçer.",
                    "İkinci düzenleme kullanım kaydıdır. Ekipmanın günlük kullanıcısını ve çalışma süresini basit bir formla takip etmek, hem hasar durumunda tarafları netleştirir hem de bakım aralıklarının doğru hesaplanmasını sağlar. Bu kayıt bürokrasi için değil, sahada kimsenin haksız yere suçlanmaması içindir. Ana yüklenici tarafında bu düzeni kurmuş projelerde ekipman ömrü boyunca hiçbir tartışma yaşanmaz; kurulmamış projelerde ise iade gününde çoğu zaman gereksiz bir gerginlik doğar.",
                ],
            },
            {
                baslik: "Kurulum sahasında zemin ve mevsim",
                paragraflar: [
                    "Yeni bir parselde çalışmanın en gerçek kısıtı zemindir. Saha betonu genellikle en son dökülür; o zamana kadar makine dolgu, stabilize veya doğrudan toprak üzerinde hareket eder. Bu evrede ağır bomlu sınıfların yürüyeceği güzergâhı önceden belirler, destek ayaklarının basacağı noktalara yayma yüzeyi hazırlarız. Yağış sonrası taşıma gücünün düştüğü günlerde yüksek kotlu işler ertelenir; ertelemenin bedeli, sıkışan bir makinenin çıkarılması için harcanacak zamanın yanında her zaman küçüktür.",
                    "Mevsim tarafında iki değişken plana girer. Kışın sahanın çamurlanması ve donma, açık alan işlerini doğrudan daraltır; yazın ise uzun gün süresi lehinize çalışır ama öğle saatlerindeki sıcaklık, kapalı olmayan sepette çalışan ekibin verimini düşürür. Uzun süreli proje kiralamalarında bu iki gerçeği takvime baştan yazarız: yüksek kotlu ve hava koşullarına açık kalemler mevsimin uygun olduğu haftalara, iç mekân kalemleri ise havanın işi bloke ettiği dönemlere yerleştirilir. Böylece kirası ödenen makine, boş beklemek yerine sürekli iş görür.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni tesis kuruyoruz; makineyi projenin başında mı yoksa faz faz mı almalıyız?",
                cevap:
                    "Faz faz almanız neredeyse her zaman daha doğrudur. Bunun sebebi fiyat değil, uygunluktur: çelik montaj döneminde işe yarayan arazi tipi büyük bir bomlu makine, kabuk kapandıktan sonra iç mekânda kullanılamaz; tersine, iç mekân için ideal olan kompakt elektrikli bir makine de dış sahada çamurlu zeminde çalışamaz. Tek makineyi tüm proje boyunca zorlamak, yalnızca verimsizlik değil güvenlik sorunudur. Uygulamamız, proje takvimini alıp her faz için ayrı ekipman planı çıkarmak ve geçişleri önceden tarihlemektir. Aynı sözleşme altında makine değişimi yaptığımız için her fazda yeniden pazarlık yapmanız gerekmez, taşıma da tek organizasyonla yürür. Takvimde kayma olursa geçiş tarihlerini yeniden düzenleriz; inşaat işlerinde kayma istisna değil, kuraldır ve planımız buna göre kurulur.",
            },
            {
                soru: "Vinçle tank kaldırılırken aynı alanda platform çalışabilir mi?",
                cevap:
                    "Aynı alanda bulunabilirler ama aynı hacmi paylaşamazlar. Kuralımız nettir: askıdaki yükün hareket edeceği hacim ile sepetin bulunduğu hacim hiçbir anda kesişmez ve sepet, kaldırılan yükün altına veya devrilme yönüne girmez. Bunu sağlamak için kaldırma operasyonundan önce vinç operatörü, montaj şefi ve bizim operatörümüz kısa bir koordinasyon yapar; kaldırma penceresi boyunca platform ya alanın dışına çekilir ya da bomu tamamen indirilmiş hâlde bekletilir. Kaldırma bittikten ve yük emniyetli biçimde oturduktan sonra erişim çalışması başlar. Bu düzen zaman kaybı gibi görünür ama pratikte tersini yapan sahalarda kaybedilen zaman çok daha fazladır; kaldırma sırasında yaşanan en küçük aksaklık, sepetteki ekibin tahliyesi anlamına gelir ve bu, planlı bir beklemeden çok daha uzun sürer.",
            },
            {
                soru: "Devreye alma ne kadar süreceğini bilmiyoruz; kiralamayı nasıl kuralım?",
                cevap:
                    "Bunun için iki parçalı bir kurgu kullanırız. Birinci parça, kesinlikle ihtiyaç duyacağınız çekirdek süredir — testlerin ve ilk ayarların yapılacağı, tarihi görece belli olan dönem. İkinci parça, günlük bazda uzayabilen esnek bir kuyruktur. Çekirdek süre dolduğunda makine otomatik olarak çekilmez; siz bitti diyene kadar sahada kalır ve iadeyi birkaç gün önceden bildirmeniz yeterli olur. Böylece iki maliyet tuzağından da kurtulursunuz: erken iade edip birkaç gün sonra yeniden taşıma ödemek ve kullanmadığınız günlere kira yazdırmak. Devreye alma dönemlerinde çoğu projenin ilk tahmininin uzadığını biliyoruz; bu yüzden esnek kuyruğu bir istisna olarak değil, standart teklif biçimimiz olarak sunuyoruz. Karşılığında tek beklentimiz, bitişe yaklaşırken bize haber vermenizdir — makine bir sonraki iş için planlanabilsin.",
            },
            {
                soru: "Sahamızda birden fazla taşeron var; ekipmanı hepsi kullanabilir mi?",
                cevap:
                    "Kullanabilir, ancak çerçevesi baştan kurulmalıdır. Sözleşmede ekipmanın sahadaki sorumlusunu isim olarak belirleriz; makineyi kullanacak her kişinin yeterlilik belgesi bu kişide toplanır ve teslimatta bize sunulur. Belgesiz kullanım, sözleşmenin doğrudan ihlalidir ve sigorta kapsamını da etkiler — bu konuda esneme payımız yok. Uygulamada en iyi çalışan düzen, günlük kullanıcıyı ve çalışma süresini basit bir formla kayda geçirmektir; bu kayıt hasar durumunda tarafları netleştirir ve kimsenin haksız yere sorumlu tutulmasını önler. Ayrıca teslimat gününde saha ekiplerine kısa bir kullanım ve emniyet brifingi veririz; bu brifing bir eğitim yerine geçmez ama makinenin o özel modeline ait kısıtların herkes tarafından bilinmesini sağlar.",
            },
            {
                soru: "Arıtma ve kapalı hacimlerin çevresinde çalışacağız; ek bir önlem gerekiyor mu?",
                cevap:
                    "Evet, ve bu önlemlerin bir bölümü bizim değil tesisin sorumluluğundadır. Kapalı veya yarı kapalı hacimlerde gaz birikimi ihtimali varsa, çalışma öncesinde ortam ölçümünün yapılması ve iznin verilmesi tesisin kendi düzenine aittir; biz bu izin olmadan çalışmaya başlamayız. Bizim tarafımızdaki önlemler konumlanmayla ilgilidir: havuz ve çukur kenarlarına yaklaşmayız, destek ayaklarının basacağı yüzeyin kenar boşluğuna göre yeterli mesafede olması sağlanır ve sepetten yapılacak hareketler önceden sınırlandırılır. Ayrıca bu bölgelerde sepette çalışan kişinin kurtarma planı ayrıca konuşulur — yüksekte ve aynı zamanda kapalı hacim riski taşıyan bir noktada acil durumda ne yapılacağı, işe başlamadan önce bilinmelidir. Bunu iş öncesi kısa toplantıda tesis sorumlusuyla birlikte netleştiririz.",
            },
            {
                soru: "Uzun dönem kiralamada makine arızalanırsa ne olur?",
                cevap:
                    "İkame ekipman sağlamak bizim yükümlülüğümüzdür ve bu, sözleşmede süre belirtilerek yazılır. Arıza bildirimi geldiğinde önce uzaktan değerlendirme yaparız; basit bir kullanım hatası veya kolay giderilebilir bir durumsa telefonda çözülür. Teknik müdahale gerekiyorsa servis ekibimiz sahaya çıkar; arıza aynı gün giderilemeyecekse eşdeğer sınıfta ikame makine gönderilir. Arızalı geçen süre için kira işlemez, bu da sözleşmede açık bir maddedir. Kurulum sahalarında bu konunun ayrı bir önemi vardır çünkü duran makine yalnızca sizin ekibinizi değil, arkadan gelen bütün fazları bekletir. Bu yüzden uzun dönem projelerde makineyi düzenli aralıklarla sahada kontrol eder, aşınma emaresi gösteren parçaları arıza çıkmadan değiştiririz — plansız bir duruşu beklemek yerine planlı bir bakımı tercih etmek, her iki taraf için de ucuzdur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Susurluk ve çevresindeki sanayi parsellerinde gıda ağırlıklı üretim tesislerinin yaygın olduğu, gıda tesisi kurulumunun çelik-panel-proses-tesisat-otomasyon sırasıyla ilerlediği ve gıda atıksuyunun organik yükü nedeniyle arıtma yapılarının bu tesislerin parçası olduğu kamuya açık genel bilgidir; faz planı, kullanım kaydı ve ikame taahhüdü firmamızın sözleşme pratiğidir.",
    },
};

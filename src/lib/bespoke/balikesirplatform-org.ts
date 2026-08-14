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
                    "Tek başına duran yarım günlük bir iş için nakliye kalemi görece yüksek görünür; bunu gizlemenin anlamı yok. Ama bu denklemi değiştirmenin iki yolu var. Birincisi tarih esnekliğidir: işinizi ilçeye giden mevcut bir sevkiyata bağlarız, makine gün içinde size uğrar ve taşıma yükü birden fazla iş arasında paylaşılır. Bunun için bir-iki günlük bir aralık vermeniz yeterlidir. İkincisi kapsamı büyütmektir — çoğu tesiste ertelenmiş küçük yüksek kotlu kalemler birikmiş hâlde bekler: dış cephe aydınlatması, saçak altı, kamera açısı, tabela, oluk. Makine zaten sahadayken bunları aynı güne toplamak, ödenen bedelin karşılığını doldurur. Tek bir güne kilitli, tek kalemlik bir talepte ise fiyat günlük tarifeden kurulur ve bunu telefonda net söyleriz; teklifte gizlenmiş satır bırakmayız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Susurluk ilçesinin süt ürünleriyle tanınan bir Balıkesir yerleşimi olduğu ve süt işleme tesislerinde tank, boru hattı, dolum ve soğutma ekipmanının standart bir proses düzeni oluşturduğu kamuya açık genel bilgidir; konumlanma, iz bırakmama ve duruş planlaması firmamızın saha uygulamasıdır.",
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
                    "İşlenmiş ürünün çuvallandığı ve paletlendiği bölüm, ilçede forklift talebinin ana kaynağıdır. Sezonda istif yüksekliği artar, depo kapasitesi zorlanır ve mevcut makine sayısı yetmez hâle gelir. Kısa dönemli takviye burada satın almadan çok daha akılcıdır. Ekipman seçimi için üç veri isteriz: paletin gerçek dolu ağırlığı, azami istif yüksekliği ve koridor genişliği. Kapalı depo tarafında elektrikli, gerektiğinde LPG’li makineler kullanılır; dizel sınıf yalnızca açık yükleme alanına çıkar. Ürünün açıkta durduğu bölümlerde egzoz seçeneği zaten gündeme gelmez.",
            },
            {
                baslik: "Sezon takvimi: bakım işleri hasadın dışına yazılır",
                metin:
                    "Hasat sonrası işleme dönemi başladığında tesisin kapısı bakım işlerine büyük ölçüde kapanır; ürün gelmeye devam ederken hattı durdurmak, o sezonun bütün planını bozar. Bu yüzden Gönen’de planlı bakım penceresi sezonun dışındadır ve ilçedeki tesislerin çoğu aynı aylarda boşalır. Sonuç, birkaç haftaya sıkışmış yoğun bir talep dönemidir. Bu yüzden düzenli çalıştığımız tesislerin bakım tarihlerini yılın başında kayda geçirir, park planımızı o takvimin üzerine kurarız. Tarihini erken söyleyen tesis makineyi bulur, geç söyleyen sıraya girer.",
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
                    "Garanti veremeyiz ama ihtimali ciddi biçimde artıran bir düzenimiz var. Sezon dönemlerinde bölgedeki program yoğunlaştığı için günlük planlarda acil müdahalelere pay bırakırız; sabah erken saatte ulaşan bir çağrıyı çoğunlukla aynı günün içine yerleştirebiliriz, öğleden sonra gelen çağrı ise büyük olasılıkla ertesi güne yazılır. Telefon etmeden önce şu üç veriyi hazırlamanız işi hızlandırır: arızanın bulunduğu kot, makinenin durabileceği alanın durumu ve işin tahmini süresi. Bu üçüyle telefonda doğru sınıfı seçer, sahaya yanlış makine göndermeyiz. Düzenli çalıştığımız tesislerde ise kayıt zaten bizde olduğu için konuşma çok daha kısa sürer; sahayı ve giriş prosedürünü bilen operatör doğrudan yola çıkar.",
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

    "bolge:balikesir-merkez": {
        h1: "Balıkesir Merkezde Zeytinyağı ve Gıda Tesislerine Platform Kiralama",
        giris:
            "Balıkesir merkezinden bakıldığında ilin gıda üretimi tek bir kalemden ibaret değildir; şehir, çevresindeki üretim havzalarının hepsinin buluştuğu bir işleme ve dağıtım merkezi gibi çalışır. Zeytin ve zeytinyağı bunun en görünür yüzüdür: kırma tesisleri ve yağhaneler, yağın dinlendirildiği depolama tankları, şişeleme ve etiketleme hatları, sofralık zeytin işleme ve salamura üniteleri şehrin çevresine dağılmış hâldedir. Yanına un ve irmik değirmenleri, et işleme tesisleri, mandıra ölçeğindeki süt ürünleri işletmeleri, ekmek ve unlu mamul fabrikaları ile toptan gıda depoları eklenir. Bu çeşitlilik erişim ekipmanı açısından tek bir reçete bırakmaz — bir yağhanenin dekantör katıyla bir un değirmeninin silo çevresi, bir et tesisinin ray sistemiyle bir toptancı deposunun raf koridoru birbirine benzemez. Buna kent içinde olmanın kendi kısıtları da katılır: dar avlular, komşu parseller, sevkiyat aracının duracağı yerin sorun olması. Bu sayfa, Balıkesir merkezindeki gıda ve zeytinyağı tesislerinde platform, manlift ve forklift kiralamayı tesis tipine göre ayrıştırarak anlatıyor.",
        maddeler: [
            {
                baslik: "Yağhanede kırma hattı ve dekantör katı çevresinde erişim",
                metin:
                    "Zeytin işleyen bir tesiste ekipman kalabalığı belirli bir hatta toplanır: kabul ve yıkama ünitesi, kırıcı, malaksör, dekantör ve separatör arka arkaya dizilir ve hepsinin üzerinde motor, kayış koruması, elektrik bağlantısı ve aspirasyon hattı bulunur. Bu bölgede zemin genellikle ıslak ve yağlıdır; tekerlek tutuşu ile makinenin duracağı noktanın eğimi konumlanmanın ilk maddesidir. Hedefe erişim çoğunlukla yandan uzanmayı gerektirir, çünkü makinelerin üzerine doğrudan çıkılmaz. Bu geometride kompakt eklemli sınıf hem hattı hem geçiş koridorunu tıkamadan çalışır.",
            },
            {
                baslik: "Yağ depolama tanklarının üstünde ve çevresinde çalışma",
                metin:
                    "Dinlendirme ve depolama tankları, tesisin en uzun ömürlü ekipmanıdır ve bakım ihtiyaçları da buna göre seyrektir ama zorludur: kapak contası, menfez, seviye göstergesi, tepe bağlantıları ve dış gövde yüzey bakımı. Tanklar çoğunlukla kapalı bir depoda veya sundurma altında sıralandığı için çalışma yüksekliği kadar tavan yüksekliği de sınırlayıcıdır; sepetin tank üstüne çıkabilmesi için üstte yeterli boşluk kalması gerekir. Bu iki ölçüyü — tank kotu ve tavan altı net boşluğu — önceden almadan makine sınıfını kesinleştirmeyiz.",
            },
            {
                baslik: "Şişeleme, etiketleme ve kolileme hattı üstü işler",
                metin:
                    "Yağın nihai ürüne dönüştüğü bölüm dar ve hassas bir alandır: dolum başlıkları, etiket makinesi, kodlama ünitesi ve kolileme ekipmanı bir hat üzerinde sıkışık durur. Buradaki erişim işleri küçük ama sık tekrarlanır — aydınlatma, fotosel, hava hattı, aspiratör. Hat çalışırken üzerinde çalışılmaz; bu yüzden kalemler hattın durduğu temizlik veya ürün değişim aralıklarına toplanır. Cam şişe kullanılan hatlarda ek bir kural daha vardır: sepette gevşek parça bulundurulmaz ve çalışma noktasının altı fiziksel olarak örtülür.",
            },
            {
                baslik: "Un değirmeni, et işleme ve soğuk depo tesislerinde erişim",
                metin:
                    "Merkezdeki diğer gıda tesisleri kendi geometrilerini dayatır. Un değirmenlerinde erişim hedefleri dikeydir — silo çevresi, aspirasyon kanalları, üst kat üniteleri. Et işleme tesislerinde ise tavan hemen her zaman doludur: taşıma rayları, kancalar, soğutma bataryaları ve aydınlatma aynı kotu paylaşır ve makinenin bu kalabalığın altından geçmesi gerekir. Toptan gıda depolarında ise talep raf montajı, çatı altı tesisat ve dönemsel forklift takviyesi olarak gelir. Üçünde de ortak kısıt aynıdır: alanın gıda alanı olması ve elektrikli sınıf zorunluluğu.",
            },
            {
                baslik: "Kent içi tesislerde sevkiyat ve konumlanma",
                metin:
                    "Merkezdeki işletmelerin önemli bölümü yıllar içinde şehrin içinde kalmış parsellerdedir; avlu dardır, kapı alçaktır, komşu binaya mesafe azdır. Bu sahalarda asıl mesele makinenin kendisi değil, oraya nasıl ulaştığıdır. Sevkiyat planını adres üzerinden değil, giriş noktası üzerinden yaparız: kapı ölçüsü, kapı önündeki manevra alanı ve çekicinin duracağı yer önceden konuşulur. Gerekiyorsa makine uygun bir noktada indirilir ve kalan mesafeyi kendi gücüyle yürür; güzergâhtaki rampa, kanal kapağı ve alçak geçiş bu yürüyüş öncesi kontrol edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Gıda tesisi tipine göre erişim profili",
                paragraflar: [
                    "Balıkesir merkezinde hizmet verdiğimiz gıda tesisi tiplerinin erişim profili aşağıda karşılaştırılmıştır. Sağdaki sütun, o tesis tipinde işi planlarken önce çözmemiz gereken sorunu gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Yoğun erişim noktası", "Ekipman", "Önce çözülen sorun"],
                    satirlar: [
                        ["Yağhane / kırma tesisi", "Malaksör, dekantör üstü", "Kompakt eklemli", "Islak ve yağlı zemin"],
                        ["Yağ depolama", "Tank kapağı, menfez", "Elektrikli makaslı", "Tavan altı boşluk"],
                        ["Şişeleme hattı", "Dolum, etiket, kodlama", "Kompakt makaslı", "Hat durdurma aralığı"],
                        ["Un ve irmik değirmeni", "Silo çevresi, aspirasyon", "Bomlu", "Dikey erişim mesafesi"],
                        ["Et işleme tesisi", "Ray, kanca, soğutma", "Dar gövdeli elektrikli", "Dolu tavan kotu"],
                        ["Toptan gıda deposu", "Raf, çatı altı, istif", "Makaslı + forklift", "Koridor genişliği"],
                    ],
                },
            },
            {
                baslik: "Zeytinyağı tesisinde ıslak ve yağlı zeminle çalışmak",
                paragraflar: [
                    "Yağhanede zemin, yılın hiçbir gününde tam kuru olmaz. Yıkama suyu, karasu ve yağ kalıntısı yüzeyde ince bir film oluşturur; bu film normal görünen bir betonu ciddi biçimde kaygan hâle getirir. Erişim makinesi için bunun iki sonucu vardır. Birincisi hareket: makinenin ilerlerken veya dönerken kayması, sepetteki ekip için doğrudan risk üretir; bu yüzden yağhane içinde konumlanma yavaş yapılır ve hedefe varıldıktan sonra makine sabitlenmeden sepet yükseltilmez. İkincisi zeminin kendisidir — eğimli tahliye kanallarına ve ızgaralara tekerlek veya destek ayağı oturtulmaz.",
                    "Tesis tarafında yapılabilecek en yararlı hazırlık, çalışma yapılacak bölgenin iş öncesinde temizlenip kurutulmasıdır. Bu birkaç dakikalık iş, hem çalışmayı hızlandırır hem de riskin büyük bölümünü ortadan kaldırır. Ekipman tarafında ise iş dönüşü prosedürümüz nettir: yağ ve karasu ile temas eden yüzeyler bekletilmeden temizlenir. Bunu makinenin görüntüsü için değil, sonraki sahaya iz taşınmaması için yaparız; gıda tesisleri arasında dolaşan bir ekipmanda çapraz bulaşma ihtimali en az mekanik arıza kadar ciddiye alınır.",
                ],
            },
            {
                baslik: "Merkez konumun sağladığı hız ve iş birleştirme",
                paragraflar: [
                    "İl merkezine hizmet vermenin en somut avantajı, ekipmanın kısa sürede yola çıkabilmesidir. Bunun karşılığı iki yerde görülür. Birincisi acil taleplerdir: üretimi durduran bir arıza için makine bekleme süresi burada, ilçelere kıyasla belirgin biçimde kısadır. İkincisi uzun dönem kiralamalarda ikame süresidir — sahadaki makine arızalandığında yerine gelen ekipmanın yolda geçireceği zaman doğrudan mesafenin bir fonksiyonudur ve merkez bu denklemde en avantajlı noktadır.",
                    "İkinci kazanç iş birleştirmedir. Merkezde aynı gün içinde birden fazla noktaya sevkiyat yaptığımız için, tarih esnekliği olan işleri mevcut bir programa bağlayabiliriz; taşıma yükü birden fazla iş arasında paylaşıldığında yarım günlük küçük bir iş bile makul bir bedelle yapılabilir hâle gelir. Bunu müşterilerimize açıkça söyleriz: tarihi bir güne kilitlemek yerine bize iki-üç günlük bir aralık verirseniz, işinizi uygun bir sefere yerleştirir ve farkı teklifte gösteririz. Gününüz değişemiyorsa taşıma o iş için ayrı organize edilir ve fiyat buna göre çıkar. Hangi seçenekte olduğunuzu ilk konuşmada netleştirmek, sonradan yaşanan beklenti farkını ortadan kaldırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yağhanemizin içi dar ve ekipman kalabalık; hangi makine sığar?",
                cevap:
                    "Bu sorunun cevabı yükseklikten önce genişlikle başlar. Sizden üç ölçü isteriz: giriş kapısının net genişliği ve yüksekliği, makinenin ilerleyeceği koridorun en dar noktası ve hedefe uzanırken bomun süpüreceği boşluğun durumu. Yağhanelerde en sık karşılaştığımız durum, makinenin hedefin altına hiç giremediği ama birkaç metre uzaktan yandan uzanabildiği bir geometridir; bu yüzden dar gövdeli eklemli sınıfı öneririz. Makaslı platformlar bu tesislerde çoğu zaman işe yaramaz, çünkü doğrudan dikey çıkarlar ve altta duran ekipmanı aşamazlar. Bir de zemin sorusu vardır: yağhane zemini ıslak ve yağlı olduğu için tekerlek tutuşu ile eğim ayrıca değerlendirilir. Birkaç fotoğraf ve kaba bir yerleşim krokisi gönderirseniz sınıfı sahaya çıkmadan kesinleştirebiliriz.",
            },
            {
                soru: "Hasat kampanyası sırasında tesise makine gönderiyor musunuz?",
                cevap:
                    "Gönderiyoruz ama planı tamamen farklı kuruyoruz. Kampanya döneminde tesisin durması pratikte imkânsızdır; bu yüzden yalnızca hattın çalışmasını engellemeyen işleri kabul ederiz — dış cephe, çatı, saha aydınlatması, depo tarafı, sevkiyat ucu ve hattın üzerine gelmeyen kalemler. Hattın tam üzerindeki bir iş için kampanya döneminde gelmek, hem işi yarım bırakmak hem tesisin gününü bozmak demektir; bunu baştan söyleriz. Acil arıza müdahaleleri elbette istisnadır ve öncelikli işlem görür. Asıl önerimiz ise şudur: hattı ilgilendiren bakım kalemlerini kampanya öncesindeki hazırlık dönemine toplayın. O dönemde tesis boş, takvim rahat, ekipman bulunabilirliği yüksek olur ve iş, üretimin üzerinde hiçbir baskı olmadan yapılır.",
            },
            {
                soru: "Depoda yağ tanklarımızın üzerine çıkmak istiyoruz; tavan yüksekliği yeterli mi?",
                cevap:
                    "Bunu iki ölçüyle hesaplıyoruz. Birincisi tank üst kotu, yani sepetin zemininin ulaşması gereken yükseklik; ikincisi tavan altı net boşluk, yani tavana asılı tesisat da dâhil olmak üzere en alçak engelin yerden yüksekliği. Sepet zemininin tank üstüne çıkması yeterli değildir, sepette çalışan kişinin de tavana temas etmeden durabilmesi gerekir. Bu iki ölçüyü verirseniz uygun sınıfı hesaplar, yeterli boşluk yoksa alternatif çözüm öneririz — genellikle tankın yanından uzanarak çalışmak veya makineyi tankların arasındaki koridora konumlandırmak mümkün olur. Depo tavanında sprinkler hattı veya kablo tavası varsa bunları da engel listesine ekleriz; en sık yaşanan sürpriz, hesaplanan yüksekliğin doğru ama unutulan bir tesisat hattının işi bloke etmesidir.",
            },
            {
                soru: "Et işleme tesisimizde tavan ray sistemiyle dolu; platform altından geçebilir mi?",
                cevap:
                    "Geçebilir, ancak makine seçimi tavanın en alçak noktasına göre yapılır, ortalama yüksekliğine göre değil. Bize verilecek kritik bilgi, makinenin ilerleyeceği güzergâhtaki en alçak engelin yerden yüksekliğidir; ray, kanca askısı, boru veya batarya bunların hepsi bu hesaba girer. Katlanmış hâldeki makine yüksekliği bu ölçünün altında kalmalıdır. İkinci konu ray sisteminin kendisidir: çalışma sırasında rayın boş olması ve hareket ettirilmemesi gerekir, bunu tesis sorumlusuyla yazılı olarak teyit ederiz. Üçüncüsü zemindir — et işleme alanlarında zemin sürekli yıkanır ve tahliye kanalları vardır; makinenin bu kanallara basmaması, konumlanma planının bir maddesidir. Kapalı üretim alanı olduğu için elektrikli sınıf zorunludur, bunu ayrıca konuşmaya gerek kalmaz.",
            },
            {
                soru: "İşletmemizin avlusu çok dar; nakliye aracı giremezse ne yapıyorsunuz?",
                cevap:
                    "Bu, merkezdeki tesislerde sık karşılaştığımız bir durum ve çözümü genellikle basittir. Çekici, sokakta ya da avlu ağzında uygun bulduğumuz bir noktada durur; ekipman orada boşaltılır ve son bölümü, önünde bir refakatçiyle kendi tahriğiyle katleder. Bu kısa ilerleyiş öncesinde güzergâhı adım adım gözden geçiririz: rampa eğimi, kapı yüksekliği, kanal kapakları, alçak saçak veya havai hat. Bunların hepsi telefonda konuşulabilecek şeylerdir, sahada sürpriz olmaları gerekmez. İndirme noktasının belediye trafiğini etkileyeceği durumlarda çalışmayı günün sakin saatine alırız. Tek isteğimiz, sipariş anında avlunun ve giriş kapısının fotoğrafını paylaşmanızdır; bu birkaç kare, sevkiyat gününde saatler kazandırır ve yanlış araçla yola çıkma ihtimalini ortadan kaldırır.",
            },
            {
                soru: "Küçük ölçekli bir işletmeyiz, ihtiyaç yılda yalnızca birkaç kez doğuyor; her defasında sıfırdan mı görüşeceğiz?",
                cevap:
                    "Gerekmez. Sizin için bir tesis kaydı açarız: sahanızın ölçüleri, giriş kapısının durumu, zemin koşulları, daha önce kullandığınız makine sınıfı ve varsa hijyen prosedürünüz bir kez kaydedilir. Sonraki ihtiyaçlarınızda tek telefonla aynı koşullar devreye girer, keşif ve evrak süreci baştan yaşanmaz. Kaydın açık durması size hiçbir ödeme yükümlülüğü getirmez; bağlayıcı bir taahhüt değil, hazırda bekleyen bir zemindir. Faydası özellikle plansız işlerde ortaya çıkar: bir arıza çıktığında telefonda uzun uzun saha tarif etmeniz gerekmez, doğru makine ilk uygun seferle yola çıkar. Küçük ölçekli işletmelere ayrıca şunu öneririz: yıl içinde biriken küçük yüksek kotlu kalemleri bir listede tutun ve tek çağrıya dönüştürün; makine zaten geldiğinde ek kalem yapmanın maliyeti çok düşüktür.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Balıkesir’in zeytin ve zeytinyağı üretimiyle anılan illerden biri olduğu, zeytinyağı işlemesinde kırma-malaksasyon-ayırma sırasının izlendiği ve il merkezinde un, et, süt ürünleri ile toptan gıda depolama faaliyetlerinin bulunduğu kamuya açık genel bilgidir; ölçü alma, konumlanma ve tesis kaydı uygulamaları firmamızın kendi çalışma biçimidir.",
    },

    "bolge:manyas": {
        h1: "Manyas’ta Tarım, Süt ve Yem Tesislerine Platform Kiralama",
        giris:
            "Manyas, kuş cennetiyle tanınan gölünün çevresine yayılmış, ekonomisi büyük ölçüde tarım ve hayvancılıkla dönen bir Balıkesir ilçesidir. Buradaki üretim, büyük fabrika blokları hâlinde değil, geniş bir alana serpilmiş orta ve küçük ölçekli tesisler hâlinde durur: süt toplama ve soğutma merkezleri, yem ve kaba yem depoları, tarımsal ürün kurutma ve saklama yapıları, tarım makinesi bakım atölyeleri ve köy ölçeğindeki işletme binaları. Erişim ekipmanı açısından bu dağınıklık, tek bir tesise odaklanan planlamadan farklı bir yaklaşım gerektirir — burada asıl soru hangi makinenin geleceği değil, o makinenin bir günde kaç noktaya uğrayabileceğidir. İkinci belirleyici, göl havzasının kendisidir: sulak alanın komşuluğunda çalışırken gürültü, ışık ve zamanlama konusunda ilçenin doğal hassasiyeti dikkate alınır. Üçüncüsü ise mevsimdir; tarımsal takvimin yoğun dönemlerinde işletmelerin bakıma ayıracak vakti kalmaz. Bu sayfa, Manyas’ta platform ve forklift kiralamayı bu üç gerçeğin üzerine kuruyor.",
        maddeler: [
            {
                baslik: "Süt toplama ve soğutma merkezlerinde erişim",
                metin:
                    "İlçedeki süt toplama noktaları, çevredeki işletmelerden gelen ürünün soğutulup sevk edildiği görece küçük ama kritik yapılardır. Erişim ihtiyacı çoğunlukla soğutma tankının üst bağlantılarında, tesisin dış ünitesinde, çatı ve saçak kesimlerinde ve yükleme alanının aydınlatmasında doğar. Bu yapıların çevresinde manevra alanı sınırlıdır ve tanker sabah saatlerinde yanaşır; işleri sevkiyat trafiğinin bittiği dilime yazarız. Yapı ölçekleri küçük olduğu için kompakt sınıf yeterli olur, ama zemin dış tarafta çoğu zaman betonsuzdur ve ayrıca değerlendirilir.",
            },
            {
                baslik: "Yem, saman ve balya sahalarında istif desteği",
                metin:
                    "Kaba yem ve balya stoklama, ilçede forklift ve telehandler talebinin ana kaynağıdır ve talep tarımsal takvime bağlı olarak keskin dönemlerde yükselir. Bu işlerde makine seçimini yükün ölçüsü ve zemin belirler: standart bir palet değil, hacimli ve dengesiz bir yük söz konusudur ve istif yüksekliği açık sahada kolayca artar. Açık ve sıkıştırılmamış zeminlerde arazi tipi sınıf tercih edilir. Yığın üzerinde çalışma yapılmaz; makine daima sağlam zeminden çalışır ve yüke oradan uzanır, bu kural yoğun dönemde de esnetilmez.",
            },
            {
                baslik: "Depolama ve kurutma yapılarında yüksek kotlu bakım",
                metin:
                    "Tarımsal ürünün saklandığı ve kurutulduğu yapılarda bakım hedefleri tavan ve çatı kotundadır: havalandırma fanları, kanal bağlantıları, aydınlatma armatürleri, çatı sacı ve oluk kesimleri. Bu yapılar geniş açıklıklı olduğu için içeride hareket rahattır, ancak kapı yüksekliği sık sık sınırlayıcı olur — makinenin katlanmış hâldeki yüksekliği kapıdan geçmelidir. Kapalı hacimde toz varsa çalışma öncesi havalandırma istenir. Bu yapıların çoğunda iç aydınlatma zayıftır; çalışma penceresi gün ışığının yeterli olduğu saatlere alınır.",
            },
            {
                baslik: "Sulak alan komşuluğunda gürültü ve ışık disiplini",
                metin:
                    "Göl ve çevresindeki sulak alanın komşuluğunda çalışırken uyguladığımız birkaç basit kural vardır. Motor sesi üreten makineler yerine mümkün olduğunca elektrikli sınıf tercih edilir; gece çalışması gerektiğinde aydınlatma doğrudan alana değil, çalışma noktasına yönlendirilir ve iş biter bitmez söndürülür. Gürültülü kalemler gün ortasına yazılır, erken sabah ve akşam saatlerinden uzak tutulur. Bunlar yasal bir zorunluluk listesi değil, bölgede çalışırken benimsediğimiz bir davranış biçimidir; ilçe halkının kendi hassasiyetine saygı göstermenin karşılığını sahada fazlasıyla görüyoruz.",
            },
            {
                baslik: "Dağınık adresleri tek güne toplayan rota planı",
                metin:
                    "Manyas’ta bir iş genellikle tek başına gelmez; aynı köy veya aynı hat üzerinde başka işletmelerin de bekleyen kalemleri vardır. Ekipmanı her biri için ayrı ayrı göndermek, hem gecikme hem gereksiz taşıma üretir. Uygulamamız, ilçedeki talepleri coğrafi olarak gruplayıp bir rota kurmaktır: makine gün içinde hat boyunca ilerler, her noktada işin gerektirdiği kadar kalır ve taşıma yükü noktalar arasında paylaşılır. Bu düzenin işlemesi için tek şart tarih esnekliğidir; erken haber veren işletme rotanın başında yer alır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Manyas’ta iş tipine göre ekipman ve planlama",
                paragraflar: [
                    "İlçeden gelen taleplerin başlıca tipleri ve her birinde planı belirleyen unsur aşağıdadır. Tablo, telefonda hangi bilgiyi sorduğumuzu da göstermektedir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Yaygın kalem", "Ekipman", "Planı belirleyen"],
                    satirlar: [
                        ["Süt toplama merkezi", "Tank üstü, dış ünite, saçak", "Kompakt bomlu", "Tanker saatleri"],
                        ["Yem ve balya sahası", "İstif, aktarma", "Arazi tipi forklift", "Zemin ve yük ölçüsü"],
                        ["Depolama yapısı", "Fan, kanal, aydınlatma", "Elektrikli makaslı", "Kapı yüksekliği"],
                        ["Kurutma tesisi", "Üst ünite, çatı geçişi", "Bomlu", "Dış erişim mesafesi"],
                        ["Atölye ve garaj", "Vinç yolu, tavan tesisatı", "Kompakt makaslı", "Net tavan kotu"],
                        ["Köy içi yapılar", "Cephe, çatı, aydınlatma", "Kompakt bomlu", "Yol genişliği"],
                    ],
                },
            },
            {
                baslik: "Tarımsal takvim: hangi iş hangi döneme yazılır",
                paragraflar: [
                    "Tarım ve hayvancılıkla geçinen bir ilçede takvimi belirleyen şey, işletmenin değil mevsimin kararıdır. Ekim, hasat ve yem hazırlık dönemlerinde işletme sahibinin bakım işine ayıracak ne vakti ne de dikkati kalır; bu dönemlerde yapılan çağrılar genellikle arıza kaynaklıdır. Buna karşılık iki dönem, planlı bakım için doğal olarak boştur: yoğun tarla işlerinin arasındaki geçiş haftaları ve kışın sakin dilimi. Düzenli çalıştığımız işletmelere önerimiz, ertelenebilir kalemleri bu iki pencereye toplamalarıdır.",
                    "Bunun pratik karşılığı bulunabilirlikte ortaya çıkar. Yoğun dönemde ilçedeki talep aynı haftalara yığılır ve makine seçenekleri daralır; sakin dönemde ise tarihinizi neredeyse serbestçe belirlersiniz, ekip acele etmez ve iş daha temiz biter. Kışın tek dikkat edilecek konu havadır — yağış ve rüzgâr, açık alandaki yüksek kotlu çalışmayı doğrudan sınırlar. Bu yüzden kış planlarını yedek günle kurarız: hedef gün ve onu izleyen bir alternatif birlikte belirlenir, hangisinin geçerli olacağı bir gün önceden netleşir.",
                ],
            },
            {
                baslik: "Köy yollarında sevkiyat ve son yüz metre",
                paragraflar: [
                    "İlçedeki adreslerin bir bölümü, yerleşimin içinden veya tarla yollarından geçilerek ulaşılan noktalardadır. Buralarda planlamayı adres üzerinden değil, güzergâhın en zayıf noktası üzerinden yaparız. Bakılan şeyler bellidir: yolun en dar kesiti, dönüş yarıçapları, menfez ve köprü durumu, ağaç ve havai hat yüksekliği, son yüz metrenin zemini. Bu kontrol telefonda ve harita üzerinde büyük ölçüde yapılabilir; emin olamadığımız noktalarda birkaç fotoğraf isteriz. Ağır çekicinin sokulamadığı yerlerde ekipmanı uygun bir alanda boşaltır, geri kalan bölümü refakatçi önde olmak üzere kendi tahriğiyle aldırırız.",
                    "İkinci mesele varış noktasındaki zemindir. Sıkıştırılmamış toprak veya taze dolgu üzerinde ağır bir makinenin destek ayakları noktasal yük oluşturur ve yüzey beklenmedik biçimde çöker. Bu yüzden destek ayaklarının basacağı yerlere yayma yüzeyi hazırlanır; hazırlanamıyorsa daha uzun erişimli bir makineyle sağlam zeminden uzanmak tercih edilir. Bu tercihi yapmakta hiç tereddüt etmeyiz: mesafeyi ekipmanla kapatmak, makineyi riskli zemine sokmaktan her zaman daha ucuza gelir ve işin tamamlanma ihtimalini artırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Köyümüzde birkaç işletmenin işi var; hepsini aynı güne alabilir misiniz?",
                cevap:
                    "Alabiliriz ve bunu zaten teşvik ediyoruz, çünkü ilçedeki en akılcı çalışma biçimi bu. Yapmanız gereken tek şey, bize komşuda da iş olduğunu söylemek; koordinasyonu biz yaparız. Makine sabah hatta girer, işleri coğrafi sıraya göre yapar ve akşam bölgeden ayrılır. Taşıma yükü noktalar arasında paylaşıldığı için her işletmenin ödeyeceği bedel, tek başına çağırdığındakinden belirgin biçimde düşer. Bu düzenin tek şartı tarih esnekliğidir — tek bir güne kilitlenmiş talepleri rotaya bağlamak zorlaşır. İşleri toplarken sizden istediğimiz bilgi de basittir: her noktada ne yapılacağı, hedef yüksekliği ve makinenin durabileceği alanın durumu. Bu üç bilgiyle günün gerçekçi programını çıkarır, hangi işlerin sığacağını önceden söyleriz.",
            },
            {
                soru: "Süt soğutma tankımızın üstünde iş var ama tesis çok küçük; makine sığar mı?",
                cevap:
                    "Bu tip yapılarda çoğu zaman iki seçenek üretiriz. Birincisi kompakt bir makineyle içeri girmektir; kapı genişliği, katlanmış makine yüksekliği ve iç manevra alanı buna izin veriyorsa en pratik yol budur. İkincisi, makineyi dışarıda konumlandırıp kapı veya açıklıktan bomla uzanmaktır — küçük yapılarda bu yöntem şaşırtıcı derecede sık işe yarar ve içeriye hiçbir tekerlek girmediği için tesis açısından da temiz bir çözümdür. Hangi yolun geçerli olduğuna karar vermek için kapı ölçüsünü ve hedef noktanın kapıya olan mesafesini bilmemiz gerekir. Süt işlenen bir alan olduğu için elektrikli sınıf kullanırız ve makine içeri girmeden önce tekerlek yüzeyleri temizlenir; bu, ayrıca talep etmenize gerek olmayan standart bir adımdır.",
            },
            {
                soru: "Balya istifi için forklift kiralarken nelere dikkat etmeliyiz?",
                cevap:
                    "Üç şeye. Birincisi yükün kendisidir: balya ölçüsü, tahmini ağırlığı ve dengesi standart bir paletten farklıdır, bu yüzden uygun ataşman ve kapasiteyi buna göre seçeriz. İkincisi zemindir — açık sahada sıkıştırılmamış toprak veya taze dolgu varsa standart bir depo forklifti çalışamaz, arazi tipi sınıfa geçmek gerekir. Üçüncüsü istif yüksekliğidir; açık sahada yığın hızla yükselir ve makinenin kaldırma yüksekliği yetmediğinde iş yarıda kalır. Bu üç bilgiyi baştan konuşursak yanlış makine gönderme ihtimali kalmaz. Bir uyarıyı da baştan yapalım: yığının üzerine makine çıkarılmaz ve yükü dengesiz taşımak devrilme riskini doğrudan tetikler. Yoğun dönemde işi hızlandırmak için bu kuralların esnetilmesini talep eden ekiplerle karşılaşıyoruz; operatörlerimiz bu talebi kimden gelirse gelsin kabul etmez.",
            },
            {
                soru: "Göle yakın çalışacağız; özel bir kısıt var mı?",
                cevap:
                    "Bizim kendi uyguladığımız birkaç kural var ve bunları müşterilerimize de öneriyoruz. Motor sesi üreten makineler yerine mümkün olduğunca elektrikli sınıf kullanırız; gürültülü kalemler günün orta saatlerine yazılır, erken sabah ve akşam üzeri tercih edilmez. Gece çalışması gerekiyorsa aydınlatma çevreye değil, doğrudan çalışma noktasına yönlendirilir ve iş bittiğinde söndürülür. Atık, ambalaj ve kimyasal hiçbir şey sahada bırakılmaz. Bunların hiçbiri bize dayatılmış kurallar değil, bölgede uzun süre çalışmak isteyen bir firmanın makul davranışıdır. Bunun ötesinde, korunan alanlar ve resmi kısıtlar söz konusuysa bunun muhatabı ilgili kurumlardır; işi planlarken gerekli izinlerin sizde olduğunu varsayarız ve şüpheli bir durum görürsek işe başlamadan sorarız.",
            },
            {
                soru: "İşletmemiz küçük; birkaç saatlik iş için gelmeniz mantıklı mı?",
                cevap:
                    "Tek başına duran birkaç saatlik bir iş için taşıma kalemi görece yüksek kalır, bunu saklamayız. Ama ilçedeki çalışma biçimimiz bu sorunu büyük ölçüde çözer: işleri rotaya bağlarız. Bize bir-iki günlük esneklik verirseniz, işinizi aynı bölgeye giden bir programa yerleştirir ve maliyeti paylaştırırız; bu durumda kısa bir iş için de gelmek gayet makul hâle gelir. İkinci öneri kapsamı büyütmektir — çoğu işletmede yüksekte yapılacak küçük kalemler birikmiş hâlde bekler: cephe aydınlatması, oluk, çatı sacı, anten, kamera, ağaç budama. Makine zaten geldiğinde bunları aynı güne toplamak neredeyse ek maliyet üretmez. Üçüncüsü komşuluktur: yakınınızdaki işletmelerin de işi varsa bunu bize söylemeniz yeterli, gerisini biz düzenleriz.",
            },
            {
                soru: "Operatörsüz kiralayıp kendi personelimizle kullanabilir miyiz?",
                cevap:
                    "Kullanabilirsiniz, ancak makineyi kullanacak kişinin geçerli yeterlilik belgesi olması şarttır ve bu belgeyi teslimat sırasında görürüz. Belgesiz kullanım hem sözleşmenin ihlalidir hem de olası bir olayda sigorta kapsamını doğrudan etkiler; bu konuda istisna yapmıyoruz. Belgeli bir kullanıcınız varsa teslimatta yine de o modele özgü kısa bir tanıtım yaparız: kumanda düzeni, acil durum indirme, kapasite sınırları ve o makineye ait özel kısıtlar. Kısa sürer ama sahada yaşanan sorunların önemli bölümünü baştan keser. Personeliniz belgeli değilse operatörlü seçeneği öneririz; bu durumda makineyle birlikte gelen operatör yalnızca ekipmanı kullanır, yapılacak teknik işi sizin ekibiniz yürütür. Hangi seçeneği tercih ederseniz edin, kullanım koşulları teklifte açıkça yazılır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Manyas’ın kuş cennetiyle tanınan gölüyle anılan, ekonomisi tarım ve hayvancılığa dayalı bir Balıkesir ilçesi olduğu ve bölgede süt toplama, yem-kaba yem stoklama ile tarımsal ürün depolama faaliyetlerinin yaygın olduğu kamuya açık genel bilgidir; rota planı, çevre duyarlılığı kuralları ve zemin uygulamaları firmamızın kendi çalışma biçimidir.",
    },

    "bolge:bursa-cevre-ili": {
        h1: "Bursa Çevre İlde Gıda ve Tarım Tesislerine Platform Kiralama",
        giris:
            "Balıkesir’in doğu sınırı Bursa’ya komşudur ve bu sınırın iki yanında birbirinin devamı gibi çalışan bir tarım-gıda coğrafyası uzanır. Susurluk’tan doğuya doğru gidildiğinde Karacabey ovası başlar; Mustafakemalpaşa ile birlikte bu hat, hayvancılık, süt üretimi, tarımsal işleme ve kültür mantarı üretimi gibi kalemlerle bilinen bir üretim kuşağı oluşturur. Bizim için buranın anlamı idari sınırdan çok mesafedir: Balıkesir’in doğusundaki parkımızdan bu tesislere ulaşmak, Bursa kent merkezinden yola çıkmaktan çoğu zaman daha kısa sürer. Bu sayfa, Bursa’nın Balıkesir’e komşu bu kesimindeki gıda ve tarım tesislerine verdiğimiz hizmeti anlatıyor — kent sanayisinin cephe ve çatı işlerini değil, üretim tesisinin içindeki erişim ihtiyacını konu ediyor. Buradaki tesis tipleri Susurluk hattındakine benzer biçimde süt, yem ve tarımsal işleme ağırlıklıdır; dolayısıyla saha bilgimiz ve çalışma düzenimiz sınırın ötesinde de aynı şekilde geçerli olur.",
        maddeler: [
            {
                baslik: "Sınır komşuluğunun ulaşım süresine etkisi",
                metin:
                    "Çevre il hizmetinde belirleyici olan şey idari harita değil, yol süresidir. Balıkesir’in doğu ilçelerinden Karacabey ve Mustafakemalpaşa hattına ulaşım kısa olduğu için bu bölgedeki işleri kendi hizmet alanımızın doğal bir uzantısı gibi planlarız. Bunun somut karşılığı iki yerde görülür: acil taleplerde bekleme süresinin kısalması ve uzun dönem kiralamalarda ikame makinenin hızlı ulaşması. Yola çıkma kararını da buna göre veririz; bölgeye giden bir sevkiyat varsa aynı hattaki diğer işler o programa eklenir.",
            },
            {
                baslik: "Süt ve hayvancılık işletmelerinde erişim işleri",
                metin:
                    "Ovadaki büyük ölçekli hayvancılık ve süt üretim işletmeleri, geniş açıklıklı yapıları ve yoğun mekanik donanımıyla düzenli erişim ihtiyacı doğurur: havalandırma ekipmanı, tavan tesisatı, çatı geçişleri, yemleme sistemi bileşenleri ve saha aydınlatması. Bu yapılarda çalışma planı işletmenin günlük düzenine göre bölünür ve gürültülü kalemler mümkün olduğunca uzak bölümlere yazılır. Kapalı hacimlerde elektrikli sınıf kullanılır; zemin nemli olduğu için konumlanma öncesi tekerlek tutuşu her seferinde ayrıca değerlendirilir.",
            },
            {
                baslik: "Tarımsal işleme ve paketleme tesislerinde çalışma",
                metin:
                    "Bölgedeki tarımsal ürünün işlendiği, ayıklandığı ve paketlendiği tesisler, dar hatlar ve çok sayıda küçük ekipmandan oluşur. Erişim hedefleri genellikle hat üzerindeki aydınlatma, sensör, aspirasyon kanalı ve konveyör bağlantılarıdır. Buradaki temel kısıt yüksekliğin kendisi değil, hattın çalışıp çalışmadığıdır; hat üzerindeki kalemler yalnızca üretim durduğunda yapılır. Ürünün doğrudan açıkta olduğu bölümlerde ise çalışma noktasının altı örtülür ve sepette gevşek malzeme bulundurulmaz.",
            },
            {
                baslik: "Kontrollü ortamda üretim yapan tesislerde erişim",
                metin:
                    "Mantar üretimi gibi sıcaklık ve nemin sürekli kontrol edildiği yapılarda, dış ortamla bağlantının açık kaldığı her dakika üretim koşulunu etkiler. Bu tesislerde çalışırken kapıların açık kalma süresini en aza indirmek, çalışmayı tek seferde bitirmek ve makineyi girmeden önce temizlemek standart uygulamalarımızdır. Yüksek nemli ortamlarda ekipmanın elektrik bağlantıları da ayrı bir dikkat ister; iş dönüşünde kontrol aralığı kısaltılır. Erişim hedefleri genellikle havalandırma ve iklimlendirme donanımıdır.",
            },
            {
                baslik: "Depo, soğuk zincir ve sevkiyat tarafında forklift",
                metin:
                    "Ovadaki üretimin şehir pazarlarına ulaştığı halka, depolama ve sevkiyat yapılarıdır ve buradaki talep ağırlıklı olarak forklift takviyesi biçiminde gelir: hasat sonrası dönemde ek makine, kendi ekipmanı bakıma girdiğinde yedek, raf yenilemesinde proje bazlı destek. Kapalı depo içinde elektrikli, ihtiyaca göre LPG’li makineler tercih edilir; dizel ekipman dış yükleme alanında kalır. Ürüne yakın çalışılan bölümlerde egzozlu seçenek en baştan devre dışıdır. Palet ağırlığı, istif yüksekliği ve koridor genişliği teklif öncesinde netleşmesi gereken üç bilgidir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Komşu il hattında tesis tipi ve hizmet biçimi",
                paragraflar: [
                    "Balıkesir’in doğusundan Bursa ovasına uzanan hatta hizmet verdiğimiz tesis tipleri ve her birinde uyguladığımız kiralama biçimi aşağıdadır. Bu tablo, hangi durumda kısa hangi durumda uzun dönem kurgunun mantıklı olduğunu da gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Erişim ihtiyacı", "Ekipman", "Kiralama biçimi"],
                    satirlar: [
                        ["Hayvancılık işletmesi", "Fan, çatı, tesisat", "Elektrikli eklemli", "Kısa dönem tekrarlı"],
                        ["Süt üretim tesisi", "Tank, hat üstü, dış ünite", "Kompakt elektrikli", "Planlı ziyaret"],
                        ["Tarımsal işleme", "Hat üstü, kanal, sensör", "Kompakt makaslı", "Duruşa bağlı"],
                        ["Kontrollü ortam üretimi", "İklimlendirme donanımı", "Dar gövdeli elektrikli", "Kısa ve tek seferlik"],
                        ["Depo ve soğuk zincir", "Raf, çatı altı, istif", "Makaslı + forklift", "Sezonluk takviye"],
                        ["Yeni tesis kurulumu", "Çelik, panel, tesisat", "Arazi tipi bomlu", "Uzun dönem proje"],
                    ],
                },
            },
            {
                baslik: "Çevre il işlerinde takvimi nasıl kuruyoruz",
                paragraflar: [
                    "İl sınırının ötesindeki işlerde planlamayı iki başlıkta yapıyoruz. Tarihi kesin olan işler — planlı duruş, sözleşmeli montaj, önceden belirlenmiş bakım günü — tek başına programlanır ve ekipman o güne ayrılır. Tarihi esnek olan işler ise bekleyen bir listeye alınır ve aynı hatta çıkacak ilk uygun sevkiyata bağlanır. İkinci grupta bekleme birkaç günü bulabilir ama taşıma kalemi paylaşıldığı için bedel belirgin biçimde düşer. Hangi grupta olduğunuzu ilk telefonda birlikte belirleriz; bunu netleştirmek, sonradan yaşanan beklenti farkını tamamen ortadan kaldırır.",
                    "Uzun süreli işlerde ise yaklaşım değişir. Birkaç haftayı aşan kurulum ve montaj projelerinde makine sahada konaklar; bu durumda mesafenin maliyete etkisi tek bir gidiş-dönüşe iner ve çevre il olması hiçbir dezavantaj üretmez. Bu tip projelerde makineyi düzenli aralıklarla yerinde kontrol eder, servis ihtiyacını sahaya giderek karşılarız. Arıza durumunda ikame ekipman yükümlülüğü sözleşmede süre belirtilerek yazılır ve bu süre, çevre il olduğu için uzatılmaz — mesafeyi müşterinin sorununa dönüştürmek bizim işimiz değil.",
                ],
            },
            {
                baslik: "Aynı saha bilgisi, iki ilde geçerli",
                paragraflar: [
                    "Susurluk hattındaki süt ve gıda tesisleriyle Bursa ovasındaki işletmeler, üretim yapıları itibarıyla birbirine yakın çalışır. Bu, bizim için pratik bir avantajdır: bir tesis tipinde biriktirdiğimiz saha bilgisi sınırın öbür tarafında da geçerlidir. Kapalı gıda alanında elektrikli sınıf zorunluluğu, hidrolik sızıntıya karşı sıkılaştırılmış ön kontrol, çalışma noktasının altının örtülmesi ve sepette gevşek parça bulundurmama kuralı hangi ilde olursak olalım aynı biçimde uygulanır. Müşteri açısından bunun anlamı, prosedürü baştan anlatmak zorunda kalmamaktır.",
                    "İkinci avantaj operatör tarafındadır. Gıda tesisinde çalışmış bir operatör, alanın kendine has kurallarını bilir: nereye basılmaz, hangi yüzeye temas edilmez, hangi bölümde ne yapılmaz. Bu tür sahalara ilk kez giren bir ekiple çalışmanın maliyeti genellikle zamanla ödenir. Bölgeye atadığımız operatörleri bu nedenle tesis tipine göre seçeriz ve düzenli çalıştığımız sahalara mümkün olduğunca aynı kişileri göndeririz; tanıdık bir saha, her ziyarette daha kısa hazırlık ve daha az soru demektir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Bursa sınırındayız; Balıkesir’den gelmeniz süre ve maliyet açısından dezavantaj mı?",
                cevap:
                    "Hayır, çoğu durumda tam tersi. Belirleyici olan idari sınır değil, aradaki yol süresidir; Balıkesir’in doğu kesiminden ovaya ulaşmak kısa bir yolculuktur ve bu, kent merkezinden gelen bir alternatife göre çoğu zaman avantajlıdır. Maliyet tarafında ise taşıma kalemi mesafeye göre hesaplanır ve teklifte ayrı bir satır olarak açıkça gösterilir; gizli bir çevre il farkı uygulamayız. Uzun süreli projelerde bu tartışma zaten ortadan kalkar, çünkü makine sahada konaklar ve mesafe tek bir gidiş-dönüşe iner. Kısa işlerde ise tarih esnekliği farkı belirgin biçimde düşürür: işinizi aynı hatta çıkan bir sevkiyata bağlarız ve taşıma yükü paylaşılır.",
            },
            {
                soru: "Üretimimiz sıcaklık ve nem kontrollü; makine girişi koşulları etkiler mi?",
                cevap:
                    "Etkiler, bu yüzden çalışmayı buna göre kurarız. Temel ilke, dış ortamla bağlantının açık kaldığı süreyi en aza indirmektir: makine ve ekip önceden hazırlanır, iş adımları listelenir, alana girildiğinde beklemeden çalışılır ve tek seferde bitirilir. Kapıların uzun süre açık kalmasını gerektiren senaryolardan kaçınırız. Makine alana girmeden temizlenir; yüksek nemli ortamlarda elektrik bağlantılarının korunması da bizim tarafımızda ek bir kontrol kalemidir. Sizden istediğimiz, çalışma yapılacak bölümün üretim döngüsünde hangi aşamada olduğunu bilmemizdir — hasat veya dolum aşamasındaki bir bölümde çalışmak yerine, döngünün boş dilimine denk getirmek her iki taraf için de doğru olandır. Bu takvimi işletme sorumlunuzla birlikte belirleriz.",
            },
            {
                soru: "Hasat sonrası dönemde forklift takviyesi alıyoruz; süre belirsizse nasıl kiralarız?",
                cevap:
                    "Bu senaryo için iki parçalı sözleşme kullanıyoruz. Birinci parça, yoğunluğun kesinlikle yaşanacağı çekirdek süredir; ikinci parça ise gün gün uzayabilen esnek bir uzantıdır. Çekirdek dolduğunda ekipmanı kendiliğinden geri almayız; siz haber verene dek sahada durur ve iade için birkaç gün önceden bildirim yeterli olur. Böylece ne erken iade edip yeniden taşıma ödersiniz ne de kullanmadığınız günlere kira yazdırırsınız. Bu dönemler için ayrıca erken rezervasyonu öneririz: hasat sonrası talep hattın tamamında aynı haftalara yığılır ve makine bulunabilirliği hızla daralır. Yaklaşık bir tarih bildirmeniz bile ekipmanın o döneme ayrılması için yeterlidir; kesinleşme yaklaştıkça takvimi birlikte daraltırız.",
            },
            {
                soru: "Sınırın iki yanında da tesisimiz bulunuyor; hepsini tek bir sözleşmeden yürütebilir miyiz?",
                cevap:
                    "Evet ve bunu öneriyoruz. Tek bir çerçeve altında her tesis için ayrı bir saha kaydı tutarız: giriş prosedürü, zemin ve ölçü bilgileri, hijyen kuralları ve daha önce kullanılan makine sınıfları. Yeni bir talep geldiğinde hangi tesis olduğunu söylemeniz yeterli olur, koşullar zaten kayıtlıdır. Faturalandırmayı tesis bazında ayrıştırabiliriz; muhasebe tarafında bu genellikle istenen bir düzendir. Tesisler arası makine transferini de biz yaparız — ekipmanı kendi imkânlarınızla taşımanızı istemeyiz, çünkü yükleme, bağlama ve karayolu taşıması ayrı bir uzmanlık ve sigorta konusudur. Transferi önceden konuşursak ekipman ertesi sabah öteki tesiste hazır bekler. İki tesisin işini tek bir kiralama penceresine sığdırmak, ayrı ayrı iki dosya açmaktan gözle görülür biçimde ucuza gelir.",
            },
            {
                soru: "Kapalı üretim alanımıza kesinlikle dizel makine giremiyor; hepsi elektrikli mi?",
                cevap:
                    "Kapalı gıda üretim alanlarına gönderdiğimiz makinelerin tamamı elektriklidir; bu bir tercih değil, bizim kendi kuralımızdır. Dizel sınıf yalnızca açık sahalarda, yükleme alanlarında ve kurulum şantiyelerinde kullanılır. Elektrikli makinelerde konuşulması gereken iki konu vardır. Birincisi çalışma süresi: uzun ve kesintisiz işlerde şarj ihtiyacı doğar, bu yüzden priz noktası ve kablo güzergâhı önceden belirlenir. İkincisi tekerlek tipi: gıda alanlarında iz bırakmayan tekerlek tercih edilir ve makine alana girmeden yüzeyler temizlenir. Bu iki konuyu teklif aşamasında konuşuruz, sahada sürpriz olmaz. İşin bir bölümü kapalı bir bölümü açık alandaysa iki farklı sınıf planlarız; tek makineyi iki ortama zorlamak yerine doğru makineyi doğru yere koymak her zaman daha verimlidir.",
            },
            {
                soru: "Bölgede uzun süreli bir kurulum projemiz var; ekipmanı sahada tutmanın avantajı ne?",
                cevap:
                    "Birkaç haftayı aşan projelerde makinenin sahada konaklaması hemen her açıdan avantajlıdır. Taşıma tek bir gidiş-dönüşe iner, ortaya çıkan ek işlere anında müdahale edilebilir, uzun dönem tarifesi günlük tarifeye göre belirgin biçimde uygundur ve ekip makineye alışır. Buna karşılık iki konuyu baştan netleştiririz. Birincisi faz planıdır: kurulum ilerledikçe ihtiyaç duyulan makine sınıfı değişir ve geçişleri takvime bağlarız, aynı sözleşme altında ekipman değiştiririz. İkincisi bakım ve ikamedir; sahada uzun süre kalan makineyi düzenli aralıklarla yerinde kontrol eder, aşınma emaresi gösteren parçaları arıza çıkmadan değiştiririz. Arıza olursa ikame ekipman süresi sözleşmede yazılıdır ve arızalı geçen süre için kira işlemez. Projede takvim kayması yaşanması normaldir; geçiş tarihlerini yeniden düzenlemek için ek bir bedel istemiyoruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Balıkesir’in doğu sınırının Bursa’ya komşu olduğu, Karacabey ve Mustafakemalpaşa hattının tarım, hayvancılık ve tarımsal işleme ile anıldığı ve bölgede kültür mantarı üretiminin bilinen bir faaliyet olduğu kamuya açık genel bilgidir; mesafe planlaması, faz kurgusu ve saha kaydı uygulamaları firmamızın kendi pratiğidir.",
    },

    "bolge:gonen-osb": {
        h1: "Gönen Organize Sanayi Bölgesi’nde Deri ve Gıda Fabrikalarına Platform Kiralama",
        giris:
            "Gönen Organize Sanayi Bölgesi’nin iç yol ağında yürüdüğünüzde, art arda gelen parsellerden birbirine hiç benzemeyen iki koku gelir: bir yanda deri işleme tesislerinin karakteristik kimyasal-nem kokusu, diğer yanda gıda üretim parsellerinin buhar ve pişirme kokusu. Bu iki komşuluk, OSB’nin en özgün planlama meselesini yaratır — aynı gün içinde bir deri fabrikasından çıkıp yan parseldeki gıda tesisine giren bir erişim makinesi, iki dünya arasında görünmez bir sınırı da taşımış olur. Bizim için bu sınır tek bir kelimeyle özetlenir: hazırlık. Makinenin tekerleği, sepeti ve gövdesi bir parselden diğerine geçmeden önce belirli bir düzenden geçmelidir; aksi hâlde deri tesisinin kimyasal izi gıda üretim salonuna, ya da gıda tesisinin nem izi deri kurutma katına taşınabilir. Bu sayfa, Gönen OSB’de platform ve forklift kiralamayı ilçenin genel tanıtımından değil, doğrudan OSB’nin parsel düzeninden ve iki farklı sanayi tipinin komşuluğundan bakarak anlatıyor.",
        maddeler: [
            {
                baslik: "Aynı gün iki farklı parsel tipine giren makinenin hazırlığı",
                metin:
                    "OSB içinde bir günde birden fazla parsele girmek olağan bir programdır; ama parsel tipi değiştiğinde makinenin durumu da değişmelidir. Deri işleme parselinden çıkan bir makine gıda parseline girmeden önce üç noktadan geçer: tekerlek yüzeyi yıkanır, sepet ve gövdede görünür kimyasal kalıntı olup olmadığı kontrol edilir, hidrolik sızıntı ihtimaline karşı alt gövde gözden geçirilir. Bu, ekstra bir hizmet değil, iki parsel arası geçişin standart parçasıdır ve programlamayı yaparken bu geçiş süresini takvime baştan ekleriz — bir gıda tesisinin randevusunu deri tesisi işinin hemen ardına koymayız.",
            },
            {
                baslik: "Deri tesisinde kurutma katı ve nemli proses hacimlerinde erişim",
                metin:
                    "Deri parsellerinde erişim hedefleri iki farklı iklime dağılır: bir yanda ıslak proses hattının üzerindeki askı sistemleri ve havalandırma kanalları, diğer yanda kurutma katının üst raflarına yakın tavan tesisatı. Islak bölümde makine kimyasal buhara maruz kalır ve iş sonrası kontrol aralığı bizim tarafımızda kısaltılır; kurutma katında ise sıcaklık yüksektir ve elektrikli aksamın bu ortamda çalışması ayrıca değerlendirilir. Her iki bölümde de zemin kaygandır, konumlanma öncesi tekerlek tutuşu ayrıca test edilir.",
            },
            {
                baslik: "Gıda parselinde toz ve koku kontrollü çalışma izni",
                metin:
                    "OSB’nin gıda üretim parsellerinde çalışma, tesisin kendi hijyen ve koku kontrol prosedürüne tabidir. Un, yem veya baharat işleyen parsellerde havada asılı organik toz vardır; bu ortamda dizel makine baştan devre dışıdır ve elektrikli sınıfın filtre-soğutma kontrolü iş dönüşünde sıkılaştırılır. Koku hassasiyeti yüksek gıda parsellerinde ise makinenin bir önceki işten kalan koku taşımaması ayrıca önemlidir — bu yüzden deri parselinden gelen bir makine aynı gün gıda parseline değil, aradan geçen bir temizlik ve havalandırma süresinden sonra girer.",
            },
            {
                baslik: "OSB ortak altyapısında çatı, cephe ve yükleme rampası işleri",
                metin:
                    "Parsel içi proses ekipmanının dışında, OSB’deki fabrikaların ortak ihtiyaçları da vardır: çatı sacı ve oluk bakımı, cephe tabelası ve aydınlatması, yükleme rampası üstü saçak ve kamera montajı. Bu işler parsel tipinden bağımsızdır ve genellikle dış cepheden yapıldığı için üretim alanına giriş gerektirmez — dolayısıyla hazırlık süresi de aranmaz. OSB’nin düzenli iki kapılı giriş kontrolü nedeniyle bu tür işlerde araç giriş kaydı önceden fabrika ile koordine edilir; makinenin plakası ve iş saati OSB güvenliğine bildirilir.",
            },
            {
                baslik: "Kampanya döneminde parsel bazlı öncelik sıralaması",
                metin:
                    "Zeytin ve tahıl kampanyası dönemlerinde OSB’deki gıda parsellerinin bakım talebi keskin biçimde artar; aynı haftalarda deri parsellerinin talebi ise değişmez seyreder. Bu asimetri bize bir öncelik kuralı verir: kampanya haftalarında gıda parsellerine ayrılan makine sayısını artırır, deri parsellerinin planlı bakımını mümkünse bu haftaların dışına öneririz. Fabrikalar tarihini erken bildirdiğinde bu ayrım sorunsuz işler; geç bildirilen taleplerde ise kampanya haftasında öncelik gıda üretimini durdurmayan işlere verilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Parsel tipine göre hazırlık ve erişim özeti",
                paragraflar: [
                    "Aşağıdaki tablo, Gönen OSB’deki iki ana parsel tipinde erişim ekipmanının hangi hazırlıktan geçtiğini ve hangi kısıtla çalıştığını gösterir. Sağdaki sütun, parseller arası geçişte neden zaman payı bıraktığımızı özetler.",
                ],
                tablo: {
                    basliklar: ["Parsel tipi", "Erişim hedefi", "Makine hazırlığı", "Geçiş kısıtı"],
                    satirlar: [
                        ["Deri işleme (ıslak)", "Askı sistemi, kanal", "Kimyasal kalıntı kontrolü", "Gıda parseline direkt giriş yok"],
                        ["Deri kurutma katı", "Üst raf, tavan tesisatı", "Isı-elektrik uyumu kontrolü", "Zemin kayma testi"],
                        ["Gıda üretim (toz)", "Aspirasyon, kanal", "Tekerlek yıkama, filtre kontrolü", "Dizel makine yasağı"],
                        ["Gıda üretim (koku hassas)", "Hat üstü, aydınlatma", "Havalandırma bekleme süresi", "Aynı gün deri sonrası giriş yok"],
                        ["Ortak altyapı / cephe", "Çatı, tabela, rampa", "Standart", "Araç giriş kaydı"],
                    ],
                },
            },
            {
                baslik: "İki sanayi tipinin komşuluğunda çapraz bulaşmayı önlemek",
                paragraflar: [
                    "OSB’de çapraz bulaşma riski, iki parsel arasında fiziksel bir sınır olmamasından değil, aynı ekipmanın her iki tarafta da kullanılabilmesinden doğar. Bizim çözümümüz makineyi ayırmak değil — bu, küçük ölçekli bir OSB’de ekonomik olarak sürdürülemez — geçiş anını disipline etmektir. Her makinede bir geçiş kaydı tutulur: son hangi parselde çalıştığı, hangi kontrolden geçtiği ve bir sonraki parsele ne zaman girdiği. Bu kayıt hem bizim hem fabrikaların talep ettiği bir şeffaflıktır ve hijyen denetimlerinde fabrikaya ibraz edilebilir bir belgeye dönüşür.",
                    "İkinci katman planlamadır. Aynı gün içinde deri ve gıda parseli arasında geçiş yapan bir programı mümkün olduğunca kurmamaya çalışırız; bunun yerine günün ilk yarısını bir sanayi tipine, ikinci yarısını diğerine ayırırız. Bu, tek bir makineyle daha az iş yapmak anlamına gelse de, hazırlık süresinin sık sık tekrarlanmasından çok daha verimlidir. Fabrikalar bize randevu talep ederken hangi parsel tipinde olduklarını söylediklerinde, programı bu mantıkla kurarız.",
                ],
            },
            {
                baslik: "OSB giriş-çıkış prosedürü ve iş süresine etkisi",
                paragraflar: [
                    "Gönen OSB’nin iki kapılı giriş-çıkış düzeni, sanayi bölgesine giren her aracın kayıt altına alınmasını gerektirir. Bu, erişim makinesi için ek bir bekleme anlamına gelir ve iş süresini hesaplarken bu bekleme payını baştan koyarız — kapıda beklenen on-onbeş dakika, günün ilk işinde gecikme olarak görünmesin diye programın en başına eklenir. Fabrika değişikliği olduğunda ise araç OSB içinde kalsa bile yeni parsele giriş için ayrı bir kayıt gerekebilir; bunu ilgili fabrikaların güvenlik birimleriyle önceden teyit ederiz.",
                    "Uzun dönem kiralamalarda bu prosedür bir kez kurulduktan sonra tekrar sorun çıkarmaz — makinenin OSB’ye kayıtlı girişi ve operatörün yetki belgesi bir kez sisteme işlendiğinde, sonraki günlerde geçiş hızlanır. Kısa süreli tekil işlerde ise ilk giriş biraz daha uzun sürer; bunu müşteriye teklif aşamasında söyleriz ki iş süresi tahmini gerçekçi kalsın.",
                ],
            },
        ],
        sss: [
            {
                soru: "Deri fabrikasında çalışan makine bizim gıda tesisimize aynı gün gelebilir mi?",
                cevap:
                    "Tercih etmeyiz ve mümkünse önermeyiz. Deri işleme parselinden çıkan bir makinede kimyasal kalıntı ve nem izi bulunma ihtimali vardır; bunu tam olarak sıfırlamak sahada birkaç dakikalık bir işlem değildir. Bu yüzden programımızda deri ve gıda parsellerini aynı güne değil, farklı günlere veya en azından günün farklı yarılarına ayırmayı tercih ederiz. Gerçekten aynı gün gerekiyorsa makine önce deri parselinde çalışır, ardından tekerlek yıkama, gövde kontrolü ve havalandırma bekleme süresinden geçer, sonra gıda parseline girer — bu süreç toplam işi belirgin biçimde uzatır. Tarihinizi bize erken bildirirseniz bu geçişi hiç yaşamadan, gıda parseline özgülenmiş bir makineyle çalışırız; bu her zaman daha hızlı ve daha güvenli sonuç verir.",
            },
            {
                soru: "OSB güvenlik kapısında araç kaydı ne kadar sürüyor, bunu iş süresine nasıl yansıtıyorsunuz?",
                cevap:
                    "İlk girişte on-onbeş dakika civarında bir kayıt süresi olağandır; plaka, sürücü kimliği ve girilecek parsel bilgisi kapıda not edilir. Bu süreyi işin toplam süresine dahil ederiz ve teklif verirken saklamayız — günün ilk işi için randevu saatini bu payı da içerecek şekilde belirleriz. Düzenli çalıştığımız fabrikalarda ise OSB güvenliğiyle önceden bir tanışıklık oluşur ve sonraki girişler hızlanır. Aynı gün içinde parsel değiştirmemiz gerekiyorsa yeni parsele girişte tekrar bir kayıt işlemi olabilir; bunu da programa dahil ederiz, sürpriz bir gecikme yaşatmayız.",
            },
            {
                soru: "Gıda parselimizde toz yoğun bir bölüm var; hangi makine sınıfı uygun?",
                cevap:
                    "Kapalı ve toz yoğun gıda bölümlerinde tek seçenek elektrikli sınıftır; dizel makine bu bölümlere zaten kabul edilmez. Toz yoğunluğu yüksek alanlarda çalışma öncesi tesisin kendi izin prosedürü işletilir ve makinenin bu bölgede yapabileceği hareketler önceden sınırlanır. Bizim tarafımızda ek bir önlem daha vardır: bu ortamdan dönen makinenin filtre ve soğutma kanalı kontrolü standart aralığın altına çekilir, çünkü organik toz hareketli aksamda birikir ve erken müdahale edilmezse arızaya dönüşür. Bu kontrol maliyeti kiracıya yansıtılmaz, bizim bakım rutinimizin parçasıdır.",
            },
            {
                soru: "Deri kurutma katına erişim için özel bir makine sınıfı mı gerekiyor?",
                cevap:
                    "Kurutma katının kendine has iki özelliği var: yüksek sıcaklık ve dar hacim. Sıcaklık, elektrikli aksamın performansını etkileyebileceği için bu katlarda çalışacak makineyi seçerken ortam sıcaklığını önceden sorarız; aşırı yüksek sıcaklıkta uzun süreli çalışma önerilmez ve iş kısa bloklara bölünür. Dar hacim tarafında ise kat içi koridorlar standart bir platformu çoğu zaman almaz; bu yüzden dar gövdeli, düşük katlanma yüksekliğine sahip elektrikli sınıfı öneririz. Kata makine çıkarılamayan durumlarda dışarıdan bomla kat açıklığına uzanmak ikinci bir seçenektir; hangisinin uygun olduğunu kat krokisi ve kapı ölçüleriyle sahaya çıkmadan belirleriz.",
            },
            {
                soru: "Kampanya döneminde OSB’deki gıda parsellerine öncelik mi veriyorsunuz?",
                cevap:
                    "Talep asimetrisi gerçek olduğu için pratikte öyle oluyor. Zeytin ve tahıl kampanyası haftalarında gıda parsellerindeki bakım talebi keskin biçimde artarken deri parsellerinin talebi değişmez seyrediyor; biz de o haftalarda makine tahsisini gıda tarafına kaydırıyoruz. Bu, deri parsellerini ihmal ettiğimiz anlamına gelmez — planlı bakımlarını mümkünse kampanya haftalarının dışına önceriz ve bu takvimi yıl başında birlikte kurarız. Acil bir arıza deri parselinde çıkarsa bu öncelik kuralı devre dışı kalır, acil müdahale her zaman öncelikli işlem görür.",
            },
            {
                soru: "OSB dışındaki merkez fabrikamızla aynı sözleşmeden mi, ayrı mı kiralamalıyız?",
                cevap:
                    "Tek sözleşme altında toplamanızı öneririz. Her parsel veya fabrika için ayrı bir saha kaydı tutarız — giriş prosedürü, zemin durumu, hijyen kuralları, daha önce kullanılan makine sınıfı — ve yeni bir talep geldiğinde hangi lokasyon olduğunu söylemeniz yeterli olur. OSB içi ile merkezdeki fabrika arasında makine transferi gerekiyorsa bunu biz organize ederiz; taşıma ve yükleme ayrı bir uzmanlık gerektirir ve kendi imkânlarınızla yapmanızı önermeyiz. Faturalandırmayı lokasyon bazında ayrıştırmak istiyorsanız bu da mümkündür, tek sözleşme bunu engellemez.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Gönen’de organize sanayi bölgesi bulunduğu ve bölgede deri işleme ile gıda sanayinin komşu parsellerde faaliyet gösterdiği kamuya açık genel bilgidir; parsel arası geçiş hazırlığı, öncelik sıralaması ve giriş-çıkış planlaması firmamızın kendi saha uygulamasıdır.",
    },

    "bolge:edremit": {
        h1: "Edremit Körfezi’nde Zeytinyağı İşleme Tesislerine Platform Kiralama",
        giris:
            "Edremit Körfezi’nin adı, Türkiye’de zeytinyağıyla neredeyse eş anlamlı hâle gelmiştir ve bu ün, sahil şeridi boyunca dizilmiş onlarca kırma ve sıkım tesisinde somutlaşır. Körfezin Edremit tarafında sanayi kolu tek bir üründe yoğunlaşır; bu, erişim ekipmanı açısından hem bir kolaylık hem bir zorluktur. Kolaylık, tesislerin büyük bölümünün benzer bir proses mimarisi paylaşmasıdır — kabul, yıkama, kırma, malaksasyon, ayırma, depolama sırası neredeyse her tesiste tekrar eder. Zorluk ise hasat kampanyasının getirdiği takvim baskısıdır: Kasım’dan başlayıp kışa uzanan birkaç aylık dönemde bütün tesisler aynı anda tam kapasite çalışır ve bu pencerede planlı bakım neredeyse imkânsız hâle gelir. Edremit OSB’nin varlığı bu tabloya bir katman daha ekler — sahil kesimindeki geleneksel yağhanelerin yanına, organize sanayi bölgesinde kurulan daha büyük ölçekli işleme ve dolum tesisleri eklenmiştir. Bu sayfa, Edremit’teki zeytinyağı işleme tesislerine platform kiralamayı hasat takvimi ve bakım penceresi üzerinden anlatıyor.",
        maddeler: [
            {
                baslik: "Kırma-malaksasyon hattında proses ekipmanı bakımı",
                metin:
                    "Zeytin kabul ünitesinden başlayan hat; yıkama, kırıcı, malaksör ve dekantöre kadar art arda dizilir ve her ünitenin üzerinde motor, redüktör, elektrik bağlantısı ve aspirasyon hattı bulunur. Bu hatta erişim çoğunlukla yandan uzanmayı gerektirir çünkü ekipmanın üstüne doğrudan çıkılmaz; zemin ise yağ ve karasu kalıntısı nedeniyle sürekli kaygandır. Kompakt eklemli sınıf, hem hattı tıkamadan hem dar geçitlerden geçerek çalışabildiği için bu tesislerde en sık tercih ettiğimiz sınıftır.",
            },
            {
                baslik: "Depolama tank çiftliğinde üst kapak erişimi",
                metin:
                    "Sıkım sonrası yağın dinlendirildiği paslanmaz tanklar, çoğunlukla sıra hâlinde ve birbirine yakın dizilir. Üst bölümdeki kapak, menfez ve seviye göstergesine erişim, tank çapı ile sıra aralığına bağlıdır — bu iki ölçüyü önceden almadan sepetin gerçekten araya girip giremeyeceğini söylemeyiz. Tanklar kapalı bir depoda ise tavan altı net boşluk da üçüncü bir kısıt olarak devreye girer; sepet üstüne çıkan kişinin tavana değmeden çalışabilmesi gerekir.",
            },
            {
                baslik: "Dolum ve şişeleme hattının üzerinde çalışma",
                metin:
                    "Edremit OSB’deki büyük ölçekli tesislerde yağın şişelendiği ve etiketlendiği hat, dar ve hassas bir bölgedir. Buradaki erişim kalemleri küçük ama sıktır — aydınlatma, fotosel, kodlama ünitesi. Hat çalışırken üzerinde iş yapılmaz; kalemler hattın durduğu temizlik veya ürün değişim aralıklarına toplanır. Cam şişe kullanılan hatlarda sepette gevşek parça bulundurulmaz ve çalışma noktasının altı örtülür — düşen bir parçanın üretim hattına vereceği zarar, kaybedilen birkaç dakikadan çok daha pahalıdır.",
            },
            {
                baslik: "Hasat kampanyası öncesi hazırlık penceresi",
                metin:
                    "Kampanya başlamadan önceki birkaç hafta, körfez boyunca tesislerin tamamının aynı anda bakıma yöneldiği yoğun bir dönemdir: kırma hattının genel kontrolü, tank temizliği, dekantör bakımı, aspirasyon sisteminin gözden geçirilmesi. Bu pencere kısa ve rekabetlidir; erken rezervasyon yapan tesis makineyi bulur, geç kalan tesis kampanya başladıktan sonra beklemeye başlar. Düzenli çalıştığımız tesislerin hazırlık tarihlerini yaz aylarında kayda geçirir, park tahsisimizi bu takvime göre kurarız.",
            },
            {
                baslik: "Kampanya döneminde hattı durdurmayan bakım kalemleri",
                metin:
                    "Kampanya başladıktan sonra tesisin kapısı planlı bakıma büyük ölçüde kapanır, ama hattın üzerine gelmeyen işler durmaz: dış cephe aydınlatması, çatı ve saçak, sevkiyat rampası, depo tarafı. Bu kalemler üretim sürerken de yapılabilir; keşifte tesis planı üzerinde bu ayrımı üretim sorumlusuyla birlikte işaretleriz. Hattın tam üzerindeki bir arıza ise istisnadır ve kampanya döneminde de öncelikli müdahale görür — üretimi durduran bir sorunu ertelemek kimsenin işine yaramaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zeytinyağı tesisinde bölüme göre erişim planı",
                paragraflar: [
                    "Aşağıdaki tablo, Edremit’teki bir zeytinyağı işleme tesisinde erişim taleplerinin geldiği başlıca bölümleri ve her birinde makine seçimini belirleyen unsuru gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis bölümü", "Tipik iş", "Uygun sınıf", "Belirleyici unsur"],
                    satirlar: [
                        ["Kırma-malaksasyon hattı", "Motor, redüktör, aspirasyon", "Kompakt eklemli", "Islak-yağlı zemin"],
                        ["Depolama tank çiftliği", "Kapak, menfez, seviye", "Elektrikli makaslı", "Tank çapı, sıra aralığı"],
                        ["Dolum-şişeleme hattı", "Fotosel, kodlama, aydınlatma", "Kompakt makaslı", "Hat durdurma aralığı"],
                        ["Depo ve sevkiyat", "Raf, çatı altı, istif", "Forklift + makaslı", "Kampanya stok hacmi"],
                        ["Dış cephe ve çatı", "Saçak, oluk, tabela", "Bomlu", "Kampanya dışı öncelik"],
                    ],
                },
            },
            {
                baslik: "Kampanya öncesi ve kampanya sonrası bakım farkı",
                paragraflar: [
                    "Edremit’teki tesislerin bakım ihtiyacı, takvimin neresinde olduğunuza göre tamamen farklı bir işe dönüşür. Kampanya öncesi hazırlık, hattın tamamının durduğu ve önceden planlanabilen bir dönemdir; burada amaç eksiksiz bir kontrol listesini sınırlı bir pencerede bitirmektir. Kampanya sonrası bakım ise farklı bir mantıkla işler — kampanya boyunca aralıksız çalışan ekipmanın yıpranması netleşmiştir ve bakım listesi artık tahmini değil, gözlemlenmiş arıza emarelerine dayanır. Bu iki dönemi karıştırmamak, doğru işi doğru zamana koymanın ilk şartıdır.",
                    "Pratikte gördüğümüz en sık hata, kampanya sonrası bakımın ertelenmesidir — tesis bir sonraki kampanyaya kadar sekiz-dokuz ay vakti olduğunu düşünüp bakımı geciktirir, sonra hazırlık penceresi geldiğinde iş listesi birikmiş hâlde karşımıza çıkar. Kampanya biter bitmez yapılan kısa bir değerlendirme ve küçük onarımlar, hazırlık dönemindeki yükü belirgin biçimde azaltır ve o kısa pencereyi daha rahat kullanılabilir hâle getirir.",
                ],
            },
            {
                baslik: "Körfez hattında sevkiyatı birleştirmek",
                paragraflar: [
                    "Edremit Körfezi’nin sahil şeridi boyunca yakın aralıklarla dizilmiş çok sayıda tesis, bize günlük rota kurma imkânı verir. Aynı gün içinde birden fazla tesise uğrayan bir sevkiyat, taşıma yükünü paylaştırır ve tek başına duran kısa bir işi bile ekonomik hâle getirir. Bunun için istediğimiz tek şey birkaç günlük tarih esnekliğidir; kesin bir güne kilitlenmiş talepler ayrı organize edilir ve maliyet buna göre hesaplanır.",
                    "Kampanya döneminde bu rota mantığı özellikle değerli hâle gelir çünkü aynı haftalarda körfez genelinde talep yoğunlaşır. Erken bildirim yapan tesisler rotanın başına yerleşir; geç kalan talepler ise mevcut rotaların arasına sıkıştırılmaya çalışılır ama bu her zaman mümkün olmaz. Bu yüzden kampanya öncesi hazırlık tarihini yaz sonunda netleştirmenizi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kampanya başladıktan sonra planlı bakım için makine ayırabilir misiniz?",
                cevap:
                    "Zorlaşır ama imkânsız değildir. Kampanya döneminde körfez genelinde talep aynı haftalara yığıldığı için makine bulunabilirliği belirgin biçimde daralır; bu dönemde kabul ettiğimiz işler ağırlıklı olarak hattı durdurmayan kalemlerdir — dış cephe, çatı, depo tarafı, sevkiyat rampası. Hattın üzerine gelen bir bakım kalemi için kampanya ortasında yer açmak, hem tesisin üretimini hem bizim programımızı zorlar. Gerçek önerimiz şudur: hattı ilgilendiren kalemleri kampanya öncesindeki hazırlık penceresine, mümkünse yazın erken bir tarihte rezerve edin. Kampanya başladıktan sonraki tek istisna acil arızadır; üretimi durduran bir sorun geldiğinde önceliği değiştirir, en yakın makineyi yönlendiririz.",
            },
            {
                soru: "Tank çiftliğimiz sık dizili, sepet aradan geçebilir mi?",
                cevap:
                    "Bu, körfez boyunca en sık aldığımız geometri sorusudur. Cevap üç ölçüye bağlıdır: tank çapı, iki tank arasındaki net boşluk ve hedef noktanın yüksekliği. Sepetin genişliği boşluğa sığsa bile bomun o boşluğa girerken çizeceği yay ayrıca hesaplanmalıdır — başarısız denemelerin çoğu sepetin değil bomun sığmamasından kaynaklanır. Ölçüleri önceden alır, gerekiyorsa daha ince gövdeli bir sınıfa geçer veya hedefe sıranın üstünden aşırtarak ulaşmayı planlarız. Boşluk gerçekten yetersizse dürüst cevabımız şudur: bu nokta sabit iskele ile çalışılmalıdır, sığmayacak bir makineyi sahaya göndermek kimseye yaramaz.",
            },
            {
                soru: "Dolum hattımızın tam üstünde bir iş var, üretim dururken ne kadar sürer?",
                cevap:
                    "Tek bir armatür veya sensör için harcanan asıl süre değişimin kendisi değil hazırlıktır — hattın boşaltılması, alt bölgenin örtülmesi, makinenin konumlanması ve iş sonrası kontrol, tek başına değişimin birkaç katı zaman alır. Bu yüzden önerimiz her zaman aynıdır: tek kalem için duruş kullanmayın, aynı bölgede biriken tüm yüksek kotlu işleri bir duruşa toplayın. Süre tahminini keşif sonrası net veririz ve tahminimizi tesisin duruş penceresine göre değil işin gerçeğine göre söyleriz; şişeleme hattının üzerinde yarım kalan bir montaj, kampanya döneminde kabul edilebilir bir risk değildir.",
            },
            {
                soru: "Edremit OSB’deki büyük tesisle sahil kesimindeki küçük yağhane aynı makineyle mi hizmet alıyor?",
                cevap:
                    "Evet, ekipman sınıfı ölçeğe göre seçilir ama filo aynıdır. OSB’deki büyük ölçekli işleme ve dolum tesislerinde geniş sepetli makaslı ve daha büyük bomlu sınıflar tercih edilirken, sahil kesimindeki daha kompakt yağhanelerde dar gövdeli eklemli sınıf öne çıkar — belirleyici olan tesisin büyüklüğü değil koridor genişliği ve ekipman arası boşluktur. İkisi arasında sözleşme veya prosedür farkı yoktur; hijyen kuralları, iz bırakmama disiplini ve zemin kontrolü her ölçekte aynı biçimde uygulanır.",
            },
            {
                soru: "Kampanya sonrası bakımı ne zaman yapmalıyız, hemen mi yoksa bir sonraki kampanyaya kadar bekleyebilir mi?",
                cevap:
                    "Hemen yapmanızı öneririz, en azından bir değerlendirme için. Kampanya boyunca kesintisiz çalışan ekipmanın yıpranması taze bir hafızada iken tespit edilir — operatörler hangi ünitenin ses yaptığını, hangi contanın sızdırdığını hâlâ hatırlar. Bu değerlendirmeyi kampanya bitiminin hemen ardından yapıp küçük onarımları o dönemde tamamlarsanız, bir sonraki hazırlık penceresi çok daha hafif bir iş listesiyle karşılanır. Bekletilen bakım, hazırlık penceresinin kısa süresine sığmayan bir yük biriktirir ve bu, kampanya başlangıcını riske atar.",
            },
            {
                soru: "Körfez boyunca birden fazla tesisimiz var, tek seferde hepsine uğrayabilir misiniz?",
                cevap:
                    "Uğrayabiliriz ve bunu zaten teşvik ediyoruz. Sahil şeridi boyunca dizili tesisler arasındaki mesafe kısa olduğu için günlük bir rota kurup birden fazla lokasyona aynı sevkiyatla gidebiliyoruz; bu hem taşıma maliyetini paylaştırır hem de tek tek küçük işler için ayrı ayrı gelmek zorunda kalmayı ortadan kaldırır. Tek şart, tesislerinizin tarih konusunda birkaç günlük esneklik tanımasıdır — her biri farklı bir güne kilitlenirse rota kurulamaz. İşleri toplarken sizden istediğimiz bilgi her lokasyonda ne yapılacağı ve hedef yüksekliğidir; bu bilgiyle günün gerçekçi programını çıkarır, hangi tesislerin aynı güne sığacağını önceden söyleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Edremit Körfezi’nin zeytinyağı üretimiyle anılan bir sahil hattı olduğu, bölgede Edremit OSB’nin bulunduğu ve zeytin hasat kampanyasının Kasım’dan itibaren birkaç ay sürdüğü kamuya açık genel bilgidir; hazırlık penceresi planlaması ve rota kurgusu firmamızın kendi saha uygulamasıdır.",
    },

    "bolge:burhaniye": {
        h1: "Burhaniye’de Zeytinyağı Tesisleri ve Turizm Yapılarına Platform Kiralama",
        giris:
            "Burhaniye, Edremit Körfezi’nin ortasında, iki farklı talebin aynı sahil şeridinde iç içe geçtiği bir ilçedir: bir yanda köklü zeytinyağı üretim geleneği, diğer yanda yaz aylarında yoğunlaşan tatil beldesi kimliği. Bu ikilik erişim ekipmanı talebine de yansır — kışın ve hasat döneminde tesislerden gelen çağrılar üretim ekipmanı bakımına yönelikken, yaz aylarında sahildeki otel ve tatil sitelerinden gelen çağrılar cephe, çatı ve peyzaj işlerine döner. Aynı ilçeye hizmet verirken iki tür talebin birbirinden tamamen farklı bir takvimde geldiğini bilmek, doğru makineyi doğru zamanda sahada tutmanın anahtarıdır. Bu sayfa, Burhaniye’deki gıda ve zeytinyağı işleme tesisleriyle turizm yapılarındaki karma talebi birlikte ele alıyor — ikisinin ortak noktası aynı ilçede olmaları, farklı noktası ise erişim ekipmanından beklediklerinin neredeyse zıt olmasıdır.",
        maddeler: [
            {
                baslik: "Zeytinyağı işleme tesislerinde proses hattı bakımı",
                metin:
                    "İlçedeki yağhaneler, kırma-malaksasyon-ayırma sırasını izleyen klasik bir hat mimarisine sahiptir. Erişim talepleri en çok kırıcı ve dekantör çevresinde, tepe temizleme hatlarında ve tank çiftliğinin üst bağlantılarında doğar. Zemin yağ ve karasu nedeniyle kaygandır; konumlanma öncesi tekerlek tutuşu ayrıca değerlendirilir. Bu tesislerde hasat kampanyası dönemi bakım penceresini daraltır — bakım işleri mümkün olduğunca kampanya öncesine sıkıştırılır.",
            },
            {
                baslik: "Sahildeki otel ve tatil sitelerinde yaz öncesi hazırlık",
                metin:
                    "Turizm tesislerinde erişim talebi büyük ölçüde bahar aylarında yoğunlaşır: cephe boyası öncesi hazırlık, dış aydınlatma, tente ve gölgelik montajı, palmiye ve ağaç budaması, havuz çevresi işleri. Bu işlerin ortak özelliği, sezon başlamadan tamamlanması gerektiğidir — misafir geldikten sonra cephede çalışan bir makine, otelin imajı açısından istenmeyen bir görüntüdür. Bu yüzden turizm tesisi taleplerini Nisan-Mayıs aylarına yoğunlaştırır, bu dönemde ilçedeki park kapasitesini turizm tarafına ağırlıklı ayırırız.",
            },
            {
                baslik: "Sezon içinde otel ve sitede gürültüsüz çalışma",
                metin:
                    "Sezon başladıktan sonra da bazı işler ertelenemez — bir klima arızası, bir aydınlatma sorunu, bir çatı kaçağı. Bu durumlarda çalışma saatini misafirin en az rahatsız olacağı dilime, genellikle sabah erken veya öğle sıcağının boşalttığı saatlere yazarız. Elektrikli sınıf motor sesi üretmediği için sezon içi işlerde varsayılan tercihimizdir; dizel makine yalnızca sahanın kesinlikle gerektirdiği açık alan işlerinde ve misafirden uzak bir noktada kullanılır.",
            },
            {
                baslik: "Gıda ve konaklama tesislerinde ortak hijyen-güvenlik çizgisi",
                metin:
                    "Zeytinyağı tesisi ile otel mutfağı arasında beklenmedik bir ortak nokta vardır: her ikisi de gıda ile temas eden alanlardır ve erişim ekipmanının bu alanlara girişi benzer bir disiplinle yönetilir. Otel mutfağının havalandırma bacası veya soğuk oda üstü bir bakım gerektirdiğinde, makine tıpkı bir üretim tesisinde olduğu gibi temizlenmiş girer, çalışma noktasının altı örtülür ve sepette gevşek parça bulundurulmaz. Bu, turizm tesisi için beklenmedik bir titizlik gibi görünse de, mutfak denetimlerinde otelin de işine yarayan bir uygulamadır.",
            },
            {
                baslik: "İki talep türü arasında makine tahsisi çakışması",
                metin:
                    "İlçedeki en hassas planlama meselesi, hasat kampanyası ile turizm sezon hazırlığının bazı yıllarda takvimsel olarak örtüşmemesi ama ikisinin de kısa ve yoğun pencereler olmasıdır. Kampanya Kasım-Aralık’ta, sezon hazırlığı Nisan-Mayıs’ta yoğunlaşır; aralarında görece sakin bir kış-erken bahar dönemi vardır. Bu sakin dönemi, her iki taraftan gelen ertelenebilir talepleri toplamak için kullanırız — hem yağhaneler hem oteller, acil olmayan işlerini bu pencereye yazarsa makine bulunabilirliği en yüksek düzeyde olur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İki talep türünün yıl içindeki dağılımı",
                paragraflar: [
                    "Aşağıdaki tablo, Burhaniye’deki iki ana talep kaynağının yıl içinde hangi dönemde yoğunlaştığını ve o dönemde makine seçimini belirleyen unsuru gösterir.",
                ],
                tablo: {
                    basliklar: ["Dönem", "Talep kaynağı", "Tipik iş", "Belirleyici unsur"],
                    satirlar: [
                        ["Kasım-Aralık", "Zeytinyağı tesisi (kampanya)", "Hat üstü acil bakım", "Üretim durma penceresi"],
                        ["Ocak-Mart", "Her iki taraf (sakin dönem)", "Ertelenmiş planlı bakım", "Erken rezervasyon"],
                        ["Nisan-Mayıs", "Turizm tesisi (sezon hazırlık)", "Cephe, aydınlatma, peyzaj", "Sezon açılış tarihi"],
                        ["Haziran-Eylül", "Turizm tesisi (sezon içi)", "Acil müdahale", "Misafir rahatsız etmeme"],
                        ["Ekim", "Zeytinyağı tesisi (hazırlık)", "Hat kontrolü, tank temizliği", "Kampanya başlangıcı"],
                    ],
                },
            },
            {
                baslik: "Sakin dönemi iki taraf için de değerlendirmek",
                paragraflar: [
                    "Ocak-Mart arasındaki görece sakin dönem, Burhaniye’de hem zeytinyağı tesislerinin hem turizm işletmelerinin bakım ihtiyacını rahat bir takvimde karşılayabildiğimiz tek pencere. Bu dönemde park kapasitemiz her iki tarafa da açık olduğu için makine bulunabilirliği yılın geri kalanına göre belirgin biçimde yüksektir ve fiyatlandırma da buna göre daha esnektir. Düzenli çalıştığımız işletmelere önerimiz, ertelenebilir kalemlerini bu pencereye toplamalarıdır — hem yağhanenin tank bakımı hem otelin çatı kontrolü bu dönemde daha rahat sıraya girer.",
                    "Bu dönemin ikinci faydası, ekip ve operatör tanışıklığıdır. Sakin dönemde bir tesise giden operatör sahayı öğrenir; sezon veya kampanya yoğunluğu geldiğinde aynı operatörü aynı sahaya göndermek, hazırlık süresini kısaltır. Bu yüzden sakin dönemdeki işleri mümkün olduğunca aynı ekiple yürütmeye özen gösteririz.",
                ],
            },
            {
                baslik: "Sahil şeridinde sevkiyat ve erişim kısıtları",
                paragraflar: [
                    "Burhaniye’nin sahil şeridi, yaz aylarında yoğun araç trafiğine sahne olur ve bu, büyük ekipmanların sahile inmesini zorlaştırabilir. Sezon içi turizm işlerinde bu yüzden makinenin en dar sokaktan geçebilecek en kompakt sınıfını tercih eder, mümkünse işi trafiğin düşük olduğu erken saatlere planlarız. Zeytinyağı tesisleri genellikle sahil hattının biraz gerisinde, ana yola daha yakın konumlandığı için bu kısıt onlar için daha az belirleyicidir.",
                    "İki talep türü arasında sevkiyatı birleştirme fırsatı da vardır: aynı gün içinde hem bir yağhaneye hem bir otele uğrayan bir program, taşıma yükünü paylaştırır. Bu, özellikle sakin dönemde ve sezon geçiş aylarında (Ekim, Mart) işe yarar; yaz ortasında ise turizm talebinin baskınlığı böyle bir birleşimi çoğu zaman zorlaştırır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Otelimiz sezon açılışına yetiştirmek istiyor, ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Mart ayı ortasına kadar tarih vermenizi öneririz. Nisan-Mayıs dönemi, ilçedeki bütün turizm tesislerinin aynı anda sezon hazırlığına giriştiği bir pencere ve bu dönemde makine bulunabilirliği hızla daralır — erken bildiren tesis makineyi bulur, geç kalan sıraya girer. Sizden istediğimiz ilk bilgi işin kapsamıdır: cephe mi, çatı mı, peyzaj mı, yoksa üçü birden mi. Kapsam netleştikçe hangi sınıfın ne kadar süreyle gerekeceğini hesaplar, park tahsisimizi buna göre ayırırız. Sezon açılış tarihiniz kesinse bu tarihi bize söylemeniz, işin geriye doğru hangi haftada başlaması gerektiğini bizim hesaplamamızı sağlar.",
            },
            {
                soru: "Sezon içinde misafir varken acil bir çatı arızası çıkarsa nasıl çalışıyorsunuz?",
                cevap:
                    "Önceliğimiz misafiri en az rahatsız edecek zamanlama ve ekipmandır. Mümkünse elektrikli sınıf kullanırız, çünkü motor sesi üretmez; çalışma saatini sabah erken veya öğle sıcağının havuz-plaj kullanımını azalttığı dilime yazarız. İş alanının çevresi, misafirlerin geçtiği güzergâhtan fiziksel olarak ayrılır ve makine oradan kalktığı anda alan normale döner. Gerçekten acil ve büyük kapsamlı bir işse — örneğin çatının geniş bir bölümü — bunu otel yönetimiyle birlikte en sakin güne, genellikle hafta içi bir güne planlarız. Amacımız işin görünmez biçimde bitmesidir; bunun mümkün olmadığı nadir durumlarda da en azından en kısa sürede bitmesidir.",
            },
            {
                soru: "Yağhanemizin kampanya öncesi bakımı ile otelin sezon hazırlığı aynı aya denk geliyor, bu bizi etkiler mi?",
                cevap:
                    "Doğrudan etkilemez çünkü bu iki talep genellikle farklı aylarda yoğunlaşır — kampanya hazırlığı Ekim-Kasım, turizm hazırlığı Nisan-Mayıs. Ender olarak takvim kayması yaşandığında bile, ikisi farklı makine sınıfı ve farklı ekip gerektirdiği için park kapasitemizde ayrı ayrı karşılanabilir; asıl kısıt tek bir sınıfın her iki tarafta da aynı anda talep edilmesidir, bu da nadiren gerçekleşir. Yine de her iki tarafa da erken tarih vermenizi öneririz, çünkü ilçe genelinde talep yoğunluğu yükseldiğinde makine seçeneği daralır.",
            },
            {
                soru: "Otel mutfağımızın soğuk odasında bir bakım var, gıda tesisi kuralları burada da mı geçerli?",
                cevap:
                    "Evet, aynı disiplinle çalışırız. Mutfak ve soğuk oda, tıpkı bir üretim tesisi gibi gıda ile temas eden bir alandır; makine girmeden temizlenir, çalışma noktasının altı örtülür, sepette gevşek parça bulundurulmaz ve iş sonrası alan kontrol edilir. Bunu talep etmenize gerek yoktur, gıda alanına giren her işimizde standart uygulamamızdır. Otel açısından bunun ek bir faydası vardır: bu titizlik, mutfak denetimlerinde sorulan bir konudur ve bizim uyguladığımız prosedür bu denetime hazır bir kayıt oluşturur.",
            },
            {
                soru: "Kışın sakin dönemde işlerimizi toplarsak fiyat avantajı oluyor mu?",
                cevap:
                    "Genellikle evet. Ocak-Mart arası hem zeytinyağı tesislerinin hem turizm işletmelerinin talebinin düştüğü bir dönem olduğu için park kapasitemiz bu aylarda daha rahattır ve fiyatlandırmamız da buna yansır. Ayrıca bu dönemde birden fazla kalemi tek bir ziyarette toplamak — örneğin hem tank bakımı hem çatı kontrolü — nakliye kalemini paylaştırır. Bu yüzden acil olmayan işlerinizi bu pencereye yazmanızı öneriyoruz; hem daha uygun fiyat hem daha esnek tarih seçeneği bulursunuz.",
            },
            {
                soru: "Sahildeki dar sokaklara büyük makine giremezse ne yapıyorsunuz?",
                cevap:
                    "Sahil şeridindeki bazı sokaklar yaz trafiğinde özellikle daralır; bu durumlarda en kompakt sınıfı seçer, mümkünse işi trafiğin düştüğü erken saatlere planlarız. Sokağın gerçekten dar olduğu durumlarda makineyi ana yola yakın uygun bir noktada indirir, kalan kısa mesafeyi kendi gücüyle ve önünde bir refakatçiyle yürütürüz. Bu ilerleyiş öncesinde güzergâhı — kaldırım kesitleri, alçak tabela, ağaç dalları — önceden gözden geçiririz. Sipariş anında sokağın ve giriş noktasının birkaç fotoğrafını paylaşmanız, sevkiyat gününde yaşanabilecek sürprizleri büyük ölçüde ortadan kaldırır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Burhaniye’nin Edremit Körfezi’nde zeytinyağı üretimi ve yaz turizmiyle anılan bir ilçe olduğu ve bu iki faaliyetin ilçede aynı sahil şeridinde bulunduğu kamuya açık genel bilgidir; talep takvimi ayrıştırması ve sezon planlaması firmamızın kendi saha uygulamasıdır.",
    },

    "bolge:ayvalik": {
        h1: "Ayvalık’ta Zeytinyağı Dolum Tesislerine Hijyenik Platform Kiralama",
        giris:
            "Ayvalık, zeytinyağının yalnızca üretildiği değil aynı zamanda kavanoza ve şişeye dönüştüğü, ambalajlandığı ve büyük ölçüde ihraç edildiği bir merkezdir. Bu, ilçedeki tesislerin ağırlık noktasını sahil şeridindeki diğer zeytinyağı bölgelerinden biraz farklı bir yöne kaydırır: kırma ve sıkım kadar dolum, etiketleme, kalite kontrol ve sevkiyat hazırlığı da öne çıkar. Dolum hattı, bir üretim tesisinin en hassas bölümüdür — buraya giren her ekipmanın hijyen durumu, ürünün nihai ambalajıyla doğrudan ilişkilendirilir ve bir hatanın bedeli, üretim aşamasındaki bir hataya göre çok daha görünürdür, çünkü sonuç doğrudan tüketicinin eline gider. Buna liman kasabası olmanın getirdiği bir ikinci gerçek eklenir: ihracat sezonunda sevkiyat hazırlığı yoğunlaşır ve depo-yükleme tarafında forklift talebi artar. Bu sayfa, Ayvalık’taki zeytinyağı dolum ve paketleme tesislerine platform ve forklift kiralamayı hijyenik erişim disiplini ve sezonluk yoğunluk üzerinden anlatıyor.",
        maddeler: [
            {
                baslik: "Dolum hattının üzerinde hijyenik erişim disiplini",
                metin:
                    "Şişe veya kavanoz dolum hattı, tesisin en dar ve en hassas bölgesidir: dolum başlıkları, kapak sıkma ünitesi, etiketleme makinesi ve kodlama sistemi art arda dizilir. Bu hatta giren makine önce temizlenir, tekerlek yüzeyleri kontrol edilir ve sepette gevşek malzeme bulundurulmaz — el aletleri bağlı, küçük parçalar kapalı kutuda taşınır. Çalışma noktasının altına serilen koruyucu örtü hem damlama hem sökülen bir parçanın doğrudan hatta düşmemesi içindir. Bu kalemler ayrı bir ücret satırı değil, dolum hattında çalışmanın standart bir parçasıdır.",
            },
            {
                baslik: "Kalite kontrol ve laboratuvar alanlarında sınırlı erişim",
                metin:
                    "İhraç edilen ürünün kalite kontrol ve numune alma bölümleri, tesisin en kontrollü alanlarından biridir; bu bölümlerde erişim işleri çoğunlukla aydınlatma, havalandırma ve tavan tesisatı ile sınırlıdır ve çalışma öncesi laboratuvar sorumlusunun onayı istenir. Bu alanlarda dizel makine zaten sözkonusu değildir; kompakt elektrikli sınıf, dar koridorlardan geçebildiği için tercih sebebidir. İş bitiminde alan, laboratuvar tarafından ayrıca kontrol edilir — bu, bizim değil tesisin kendi kalite prosedürüdür ve buna uyarız.",
            },
            {
                baslik: "Depolama ve etiketli ürün rafında forklift kullanımı",
                metin:
                    "Dolumu tamamlanmış ürünün paletlendiği ve raflara yerleştirildiği depo bölümü, ilçede forklift talebinin ana kaynağıdır. Kırılabilir cam ambalaj taşındığı için yük dengesi ve kaldırma hızı standart bir palete göre daha dikkatli yönetilir; hızlı kalkış ve ani fren, kırılma riskini doğrudan artırır. Operatörlerimiz cam ürün taşırken hızı bilinçli olarak düşürür. Koridor genişliği ve raf yüksekliği önceden bilinmesi gereken iki veridir; dar koridorlu depolarda dar gövdeli elektrikli forklift tercih edilir.",
            },
            {
                baslik: "İhracat sezonunda sevkiyat yoğunluğu ve liman takvimi",
                metin:
                    "Ayvalık’ın liman kasabası kimliği, ihracat sezonunda depo-sevkiyat tarafına ayrı bir yük bindirir: konteyner yükleme, palet hazırlığı ve son kalite kontrolü kısa bir pencerede tamamlanmalıdır çünkü sevkiyat tarihleri liman ve nakliye programına bağlıdır. Bu dönemde forklift talebi keskin biçimde artar ve tesisler kısa süreli takviye ister. Sevkiyat tarihi kesinleştiği andan itibaren bize haber verilmesi, makinenin o güne ayrılması için yeterlidir; liman programının ertelenemez olduğunu biliyoruz ve bu işlere öncelik veririz.",
            },
            {
                baslik: "Kırma-sıkım hattı ile dolum hattı arasında makine geçişi",
                metin:
                    "Ayvalık’taki birçok tesis hem kırma-sıkım hem dolum hattını aynı çatı altında barındırır. Bu iki bölüm farklı hijyen seviyesi ister — sıkım hattı yağlı ve ıslak bir ortamken dolum hattı kuru ve temiz bir ortamdır. Aynı gün iki bölüme de girecek bir makine varsa, sıkım hattından çıkıp dolum hattına girmeden önce tekerlek yıkama ve gövde kontrolünden geçer; bu geçiş süresini programa baştan ekleriz. Mümkünse iki bölümün işini ayrı günlere ayırmayı tercih ederiz, çünkü tekrarlanan geçiş hazırlığı toplam süreyi uzatır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dolum tesisinde bölüme göre hijyen ve erişim gereksinimi",
                paragraflar: [
                    "Aşağıdaki tablo, Ayvalık’ta bir zeytinyağı dolum ve paketleme tesisinde bölüme göre erişim gereksinimini ve hijyen seviyesini gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis bölümü", "Hijyen seviyesi", "Uygun sınıf", "Belirleyici unsur"],
                    satirlar: [
                        ["Kırma-sıkım hattı", "Yağlı-ıslak", "Kompakt eklemli", "Zemin kayganlığı"],
                        ["Dolum-şişeleme hattı", "Kuru-yüksek hijyen", "Kompakt makaslı (temizlenmiş)", "Hat durdurma aralığı"],
                        ["Kalite kontrol / laboratuvar", "Kontrollü giriş", "Dar gövdeli elektrikli", "Sorumlu onayı"],
                        ["Depo / palet rafı", "Standart", "Elektrikli forklift", "Cam ürün yük dengesi"],
                        ["Yükleme rampası / konteyner", "Açık alan", "LPG/dizel forklift", "Liman sevkiyat takvimi"],
                    ],
                },
            },
            {
                baslik: "Cam ambalajlı ürünün forkliftle taşınmasında dikkat noktaları",
                paragraflar: [
                    "Cam şişe veya kavanoz içindeki zeytinyağının taşınması, standart bir kuru yük paletinden farklı bir yaklaşım gerektirir. Kırılma riski, hızlı kalkış ve ani frenle doğrudan ilişkilidir; bu yüzden dolu palet taşırken hızı düşük tutar, dönüşlerde geniş yarıçap kullanır ve yükü mümkün olduğunca zeminden az yükseklikte taşırız. Devrilme riskinin yüksek olduğu dar koridorlarda ise hızı daha da azaltır, gerekirse ikinci bir kişiyi yönlendirici olarak kullanırız.",
                    "İkinci konu istifleme yüksekliğidir. Cam ambalajlı paletler, dolu ağırlığa göre belirli bir istif yüksekliğinin üzerine çıkarılmamalıdır; bu sınırı aşan bir istif, alt paletlerdeki ürünleri risk altına sokar. Bu sınırı tesisin kendi ürün yöneticisiyle birlikte netleştirir, forklift operatörümüze bu bilgiyi teslim öncesi açıkça iletiriz. Depoda istif kurallarına uyulmadığını gördüğümüzde bunu tesise bildirmekten çekinmeyiz — kırılan bir palet, hem ürün hem itibar kaybıdır.",
                ],
            },
            {
                baslik: "İhracat sezonunda erken rezervasyonun değeri",
                paragraflar: [
                    "Liman kasabası olmanın getirdiği ihracat ritmi, Ayvalık’taki forklift talebini yılın belirli dönemlerinde keskin biçimde yükseltir. Bu dönemlerde talep hem miktar hem aciliyet açısından farklıdır — sevkiyat tarihi liman programına bağlı olduğu için ertelenemez, ve birden fazla tesis aynı haftalarda aynı kaynağa başvurur. Erken rezervasyon burada lüks değil zorunluluktur; sevkiyat tarihini bildiğiniz andan itibaren bize haber vermeniz, makinenin size ayrılması için yeterlidir.",
                    "Bu yoğun dönemlerde makineyi tek seferlik değil, sevkiyat penceresinin tamamı için tahsis etmeyi öneririz. Konteyner yükleme genellikle birkaç gün süren bir süreçtir ve makineyi her gün yeniden çağırmak yerine sahada tutmak hem daha ekonomiktir hem de son anda çıkan ek yükleme ihtiyacına anında cevap verir. Sezon dışında ise bu ihtiyaç düşer ve tek seferlik kısa kiralamalar yeterli olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Dolum hattımıza kesinlikle dizel makine giremez, alternatifiniz nedir?",
                cevap:
                    "Zaten önermeyiz. Dolum ve şişeleme hattı, tesisin en yüksek hijyen beklentisine sahip bölümüdür ve buraya elektrikli sınıf dışında bir makine göndermeyiz. İki seçenek konuşuruz: iş hattın içinden yapılacaksa kompakt akülü makaslı veya dar gövdeli akülü eklemli sınıf; iş hattın kenarına yakınsa makineyi dışarıda konumlandırıp açıklıktan bomla uzanmak. İkinci yöntem hatta hiçbir tekerlek girmediği için tesis açısından en temiz çözümdür. Makine hatta girmeden önce temizlenir ve tekerlek yüzeyleri kontrol edilir; bu standart bir adımdır, ayrıca talep etmenize gerek yoktur.",
            },
            {
                soru: "Cam kavanoz taşırken kırılma riskini nasıl azaltıyorsunuz?",
                cevap:
                    "Üç şeyle: hız, yükseklik ve dönüş yarıçapı. Dolu bir cam ürün paleti taşırken hızı standart bir kuru yükten belirgin biçimde düşük tutarız; ani kalkış ve fren kırılmanın en sık sebebidir. Yükü mümkün olduğunca zeminden az yükseklikte taşırız, çünkü yük ne kadar yüksekteyse devrilme anındaki darbe o kadar büyük olur. Dönüşlerde geniş yarıçap kullanır, dar koridorlarda gerekirse ikinci bir kişiyi yönlendirici olarak görevlendiririz. İstif yüksekliği konusunda da tesisin kendi sınırına uyarız; bu sınırı aşan bir talep gelirse bunu açıkça söyleriz, çünkü kırılan bir palet hem ürün hem itibar kaybı demektir.",
            },
            {
                soru: "İhracat sevkiyatımız yaklaştı, forklift talebini son anda karşılayabilir misiniz?",
                cevap:
                    "Deneriz ama garanti veremeyiz, çünkü ihracat sezonunda ilçe genelinde talep aynı haftalara yığılır ve makine seçenekleri hızla daralır. Sevkiyat tarihinizi öğrendiğiniz andan itibaren bize haber vermenizi öneririz; liman programının ertelenemez olduğunu bildiğimiz için bu tür talepleri öncelikli olarak değerlendiririz. Son anda gelen bir talepte elimizde uygun makine varsa hemen yönlendiririz; yoksa dürüst cevabımız, o gün için başka bir çözüm aramanız gerektiğidir. Sezon içinde tekrar eden bir ihracat takviminiz varsa, bunu bize önceden bildirip sezon boyunca bir tahsis ayırmamızı isteyebilirsiniz; bu, son dakika belirsizliğini büyük ölçüde ortadan kaldırır.",
            },
            {
                soru: "Aynı tesiste hem sıkım hem dolum hattı var; makineyi ikisinde de kullanabilir miyiz?",
                cevap:
                    "Kullanabilirsiniz ama iki bölüm arasındaki hijyen farkı nedeniyle bir geçiş hazırlığı gerekir. Sıkım hattı yağlı ve ıslak bir ortamken dolum hattı kuru ve yüksek hijyenli bir ortamdır; sıkım hattından çıkan bir makine dolum hattına girmeden önce tekerlek yıkama ve gövde kontrolünden geçer. Bu geçiş birkaç dakika sürer ama günün programına baştan eklenmesi gerekir. Mümkünse iki bölümün işini aynı güne değil ayrı günlere ayırmayı öneririz; bu, tekrarlanan geçiş hazırlığından kaynaklanan zaman kaybını ortadan kaldırır ve genellikle daha hızlı sonuç verir.",
            },
            {
                soru: "Laboratuvar ve kalite kontrol bölümünde çalışmak için özel bir izin gerekiyor mu?",
                cevap:
                    "Evet, bu bölümlerde çalışma öncesi laboratuvar sorumlusunun onayını isteriz — bu bizim değil, tesisin kendi kalite prosedürüdür ve buna uyarız. Pratikte bu, işin planlanan gün ve saatini laboratuvar sorumlusuna önceden bildirmek ve onların uygun gördüğü bir dilimde çalışmak anlamına gelir. Makine tarafında ise dar koridorlardan geçebilen kompakt elektrikli sınıf tercih ederiz; dizel makine bu bölümlere zaten kabul edilmez. İş bitiminde alan laboratuvar tarafından ayrıca kontrol edilir; biz bu kontrolü kolaylaştırmak için çalışma alanını iş bitiminde standart hâlinden daha temiz bırakmaya özen gösteririz.",
            },
            {
                soru: "Sezon dışında forklift ihtiyacımız az ama düzenli; nasıl bir kiralama öneriyorsunuz?",
                cevap:
                    "Sezon dışında ihtiyacınız düşük ve düzenliyse, tek seferlik kısa kiralamalar sizin için hem daha esnek hem daha ekonomiktir — makineyi sürekli sahada tutmak yerine ihtiyaç doğdukça çağırırsınız. Bunun işlemesi için tesis kaydınızı bir kez oluştururuz: depo ölçüleri, koridor genişliği, raf yüksekliği ve ürün tipi kayıtlıdır; yeni bir talep geldiğinde tekrar anlatmanıza gerek kalmaz. İhracat sezonu yaklaştığında ise bu düzeni değiştirip sezon boyunca bir tahsis ayırmanızı öneririz, çünkü o dönemde talep yoğunluğu tek seferlik çağrıların güvenilirliğini düşürür. İki dönem arasındaki geçişi sizinle birlikte, sezon başlamadan birkaç hafta önce netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Ayvalık’ın zeytinyağı üretiminin yanı sıra dolum, ambalajlama ve ihracatıyla bilinen bir liman kasabası olduğu kamuya açık genel bilgidir; hijyenik geçiş prosedürü, cam ürün taşıma önlemleri ve sezonluk tahsis uygulamaları firmamızın kendi saha uygulamasıdır.",
    },

    // ── HİZMET SAYFALARI (11 sabit slug, src/lib/hizmet-konulari.ts) ─────
    // Merceğimiz bu dosyanın geneliyle tutarlı: GIDA-SÜT-ZEYTİNYAĞI-TAHIL
    // İŞLEME TESİSLERİNİN İÇİ ve bu tesislerin Balıkesir genelindeki sezon/
    // kampanya ritmi. Bölge sayfalarındaki tek tesis anlatımından farklı
    // olarak burada mercek hizmet kategorisinin kendisi: bir proses ortamında
    // o hizmetin nasıl işlediği. Bu, domainin ilk Balıkesir hizmet sayfası
    // seti olduğu için kardeş domain çakışması yoktur.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Balıkesir’in Proses Salonlarında Tank ve Boru Arasına Sepetli Örümcek Platform",
        giris:
            "Balıkesir’in süt, zeytinyağı ve tahıl işleme tesislerinde ekipman planı çoğu zaman insan geçişine göre değil, prosesin akış sırasına göre kurulur; bu yüzden tank çiftliği, boru ormanı ve elevatör kaidesi gibi bölgelerde makinenin girebileceği bir koridor bulunmayabilir. Standart bir platformun gövde genişliği bu aralıklara sığmadığında iş ya ertelenir ya da güvensiz bir yöntemle — merdiven, sabit iskele parçası — geçici olarak çözülmeye çalışılır. Sepetli örümcek platform, ayaklarını nokta nokta açabilme ve parça hâlinde dar bir kapıdan geçebilme özelliğiyle bu boşluğu dolduran bir sınıftır: proses salonuna sökülü hâlde taşınır, tank sırasının veya boru hattının hemen yanında yeniden monte edilir ve standart bir makinenin giremeyeceği bir noktaya sepeti ulaştırır. Bu sayfada, Balıkesir genelindeki gıda ve tarımsal işleme tesislerinde örümcek platformun hangi proses ortamlarında devreye girdiğini, montaj sürecinin işin takvimini nasıl etkilediğini ve standart makaslı platforma göre ne zaman tercih edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tank çiftliği ve boru ormanında dar geçiş",
                metin:
                    "Dikey depolama tankları sıra hâlinde dizildiğinde aralarındaki servis boşluğu insan geçişine göre bırakılır, makine geçişine göre değil. Bir kapak contası veya prob değişimi bu aralığın ortasındaki bir noktada gerekiyorsa standart gövdeli bir platform sığmaz. Örümcek platform, ayaklarını tankların dibine paralel açıp gövdesini dar tutarak bu aralıkta çalışabilir; montaj öncesi tank çapı ve sıra aralığı ölçülür, ayakların açılacağı zemin tank kaidelerinden bağımsız sağlam bir yüzey olmalıdır.",
            },
            {
                baslik: "Elevatör kaidesi ve dikey taşıma hattının dibi",
                metin:
                    "Kovalı elevatörlerin ve dik konveyörlerin alt kaidesi genellikle diğer ekipmanla çevrili, dar bir hacimdir; üst tambura erişim çoğu zaman dışarıdan bomlu makineyle mümkün olsa da, kaidenin hemen yanındaki bir kontrol paneli veya tahrik motoru için içeriden çalışmak gerekebilir. Bu dar kaidede örümcek platform, standart makinenin giremediği bir açıklıktan geçip motor seviyesine ayaklarını açarak konumlanabilir.",
            },
            {
                baslik: "Silo ve elevatör kulesi merdiven boşluğunda montaj",
                metin:
                    "Bazı silo yapılarında iç merdiven boşluğu, bakım için tek erişim yoludur ve bu boşluk bir platformun doğrudan sürülebileceği genişlikte değildir. Örümcek platform burada parça parça taşınıp boşluk içinde yeniden kurulabilir; ancak bu montaj süresi standart bir kurulumdan belirgin ölçüde uzundur ve merdiven boşluğunun taşıma kapasitesi önceden değerlendirilir. Boşluk çok dar kalıyorsa dürüst cevabımız iskele önerisidir.",
            },
            {
                baslik: "Kazan dairesi ve enerji odasında ekipman kalabalığı",
                metin:
                    "Kazan dairesi ve pano odaları, boru, kablo tavası ve ekipman gövdesiyle sıkışık bir hacimdir; bir vana veya sigorta değişimi için makinenin bu kalabalığın arasından geçmesi gerekir. Örümcek platform, gövdesini daraltarak ekipman sıraları arasında ilerleyebilir, ancak bu ortamda sıcak yüzey ve enerjili hat riskleri olduğu için çalışma öncesi tesisin kendi izin prosedürü işletilir ve hangi hatların devre dışı olduğu yazılı teyit edilir.",
            },
            {
                baslik: "Örümcek platform mu, standart makaslı mı: karar noktası",
                metin:
                    "Proses salonunda geçiş yeterince genişse standart akülü makaslı platform hem daha hızlı kurulur hem daha ekonomiktir; örümcek platformun montaj süresi burada gereksiz bir maliyettir. Karar, tank sırası veya ekipman arası boşluğun net genişliğine bağlıdır. Bu ölçüyü keşifte veya paylaşılan fotoğraflarla önceden netleştirir, gereksiz yere daha pahalı sınıfı önermeyiz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Proses ortamına göre dar geçiş senaryoları",
                paragraflar: [
                    "Balıkesir’deki gıda ve tarımsal işleme tesislerinde karşılaştığımız dar geçiş türlerini ve belirleyici ölçüyü aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Ortam", "Darlık kaynağı", "Kritik ölçü", "Ek koordinasyon"],
                    satirlar: [
                        ["Tank çiftliği arası", "Servis boşluğu insan ölçekli", "Sıra aralığı", "Zemin sağlamlığı kontrolü"],
                        ["Elevatör kaidesi", "Çevresi ekipmanla dolu", "Açıklık genişliği", "Motor devre dışı teyidi"],
                        ["Silo merdiven boşluğu", "Sabit dar geçiş", "Boşluk eni-boyu", "Taşıma kapasitesi hesabı"],
                        ["Kazan dairesi", "Boru ve pano kalabalığı", "Ekipman arası mesafe", "Sıcak/enerjili hat izni"],
                        ["Dolum hattı kenarı", "Konveyör ve palet trafiği", "Hat boşaltma saati", "Hijyen geçiş prosedürü"],
                    ],
                },
            },
            {
                baslik: "Montaj süresinin iş takvimine etkisi",
                paragraflar: [
                    "Örümcek platformun parça hâlinde taşınıp sahada yeniden kurulması, standart bir platformun doğrudan sürülmesine göre belirgin ölçüde daha uzun sürer. Tank çiftliği veya kazan dairesindeki bir işte bu süre genellikle sorun yaratmaz, çünkü sahaya çıkan makine zaten günün geri kalanında başka kalemlere de bakacaktır ve montaj süresi genel programa dağılır. Buna karşılık tek başına duran küçük bir kalem için örümcek platform çağrıldığında montaj süresi işin kendisinden uzun sürebilir; bu durumda maliyeti önceden açıkça gösteririz.",
                    "Bu yüzden talep geldiğinde önce standart makinenin geçip geçemeyeceğini netleştiririz. Geçebiliyorsa örümcek platform önerilmez; geçemiyorsa montaj süresi teklifte ayrı bir kalem olarak yazılır ve işletme bu maliyeti bilerek karar verir.",
                ],
            },
            {
                baslik: "Gıda alanında iz bırakmama ve zemin koruma",
                paragraflar: [
                    "Proses salonuna giren her makine, gıda üretim ortamının kurallarına tabidir: tekerlek yüzeyleri girişte temizlenir, ayakların basacağı zemin önceden işaretlenir ve sepette gevşek malzeme taşınmaz. Örümcek platformun ayaklarını açtığı nokta çoğu zaman tank kaidesine veya boru desteğine yakın olduğu için, bu noktanın taşıma kapasitesi ve yüzey durumu montaj öncesi ayrıca kontrol edilir.",
                    "Kısa duruşlarda montaj ve söküm süresi kaybını azaltmak için, aynı bölgede birden fazla kalem varsa bunları tek montajda toplamayı öneririz — makine bir kez kurulup birkaç noktaya sırayla ayak açarak taşınabiliyorsa, her kalem için ayrı sökme-kurma tekrarlanmaz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tank sıramız çok yakın dizili; örümcek platform aradan geçebilir mi?",
                cevap:
                    "Büyük olasılıkla evet, ancak önce tank çapını ve sıra aralığını netleştirmemiz gerekir. Sepetin fiziksel genişliği yeterli olsa bile ayakların açılacağı zeminin tank kaidesinden bağımsız ve sağlam olması gerekir; bazı tesislerde bu zemin kanal ızgarası veya drenaj kapağıyla kaplıdır ve ayak orada açılamaz. Ölçüleri ve mümkünse birkaç fotoğrafı paylaşırsanız montajın mümkün olup olmadığını sahaya çıkmadan söyleyebiliriz.",
            },
            {
                soru: "Kazan dairesinde çalışmak için özel bir izin gerekiyor mu?",
                cevap:
                    "Evet. Kazan dairesi ve enerji odaları sıcak yüzey ve enerjili hat riski taşıdığı için, çalışma öncesi tesisin kendi sıcak iş ve elektrik izni prosedürü işletilir; hangi hatların devre dışı bırakıldığı yazılı olarak teyit edilmeden işe başlanmaz. Bu bizim değil tesisin prosedürüdür ve biz buna uyarız; sizden istediğimiz, izin sürecinin sorumlusunu önceden bize bildirmenizdir.",
            },
            {
                soru: "Montaj süresi için ayrı ücret ödüyor muyuz?",
                cevap:
                    "Evet, örümcek platformun kurulum ve söküm süresi teklifte standart makineden ayrı bir kalem olarak gösterilir, çünkü bu süre gerçek bir işçilik ve saha zamanıdır. Standart bir platform yeterli olacaksa bunu önce söyleriz; örümcek platform yalnızca geçiş gerçekten dar olduğunda önerilir. Aynı bölgede birden fazla kalem varsa montaj maliyetini kalemler arasında paylaştırarak toplam maliyeti düşürmeye çalışırız.",
            },
            {
                soru: "Silo içindeki merdiven boşluğuna makine sığdıramıyoruz; alternatif var mı?",
                cevap:
                    "Boşluk gerçekten yetersizse dürüst cevabımız iskeledir; her dar boşluk örümcek platformla çözülemez. Ancak boşluk sınırda ise önce parça parça taşınabilecek en dar konfigürasyonu değerlendiririz ve merdivenin taşıma kapasitesini hesaba katarız. Fotoğraf ve ölçü paylaşırsanız hangi seçeneğin geçerli olduğunu keşfe çıkmadan söyleyebiliriz.",
            },
            {
                soru: "Dolum hattının kenarında çalışacağız; üretim durmadan mümkün mü?",
                cevap:
                    "Küçük ve hattın dışına taşmayan işler için mümkün olabilir, ancak konumlanma noktası hat trafiğinin dışında kalmalıdır. Hattın üzerine gelen bir kalem söz konusuysa üretim durdurulmadan çalışılmaz. Hangi kategoriye girdiğini keşifte veya telefonda tarif ettiğiniz konuma göre netleştiririz; hijyen geçişi gerekiyorsa bunu da programa ekleriz.",
            },
            {
                soru: "Standart platform yeterli olur mu, yoksa doğrudan örümcek mi istemeliyiz?",
                cevap:
                    "Önce standart makineyi değerlendiririz, çünkü hem daha hızlı kurulur hem daha ekonomiktir. Geçiş genişliği, sıra aralığı veya kapı ölçüsü yeterliyse örümcek platform önerilmez. Yalnızca bu ölçüler standart gövdeye yetmiyorsa örümcek platforma geçeriz. Baştan örümcek platform istenen taleplerde bile önce bu kontrolü yaparız, çünkü gereksiz yere daha pahalı sınıfı önermek işletmenin lehine değildir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in süt, zeytinyağı ve tahıl işleme tesislerinde ekipmanın proses akışına göre sıkı dizildiği ve servis boşluklarının çoğunlukla insan ölçeğinde bırakıldığı kamuya açık genel bilgidir; montaj süresi hesabı, izin koordinasyonu ve zemin kontrolü firmamızın saha pratiğidir.",
    },

    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Balıkesir’in Gıda ve Tarım Tesislerine Sezon Takvimine Uygun Nakliye ve Teslimat",
        giris:
            "Balıkesir’deki süt, zeytinyağı ve tahıl işleme tesislerinin ortak özelliği, yıl içinde talebin düz bir çizgide değil, hasat ve kampanya dönemlerine bağlı keskin sıçramalarla ilerlemesidir. Zeytin kampanyası başladığında sıkım ve dolum hatlarında makine ihtiyacı birkaç hafta içinde katlanır, çeltik hasadından sonra değirmenlerde benzer bir yoğunluk yaşanır, süt tesislerinde ise talep daha düzenli ama teslim saatleri tankerin kabul rampasına yanaştığı dilimle sıkı sıkıya bağlıdır. Bu ritim, nakliye ve teslimat hizmetini tek bir sevkiyat sorusuna indirgemez; makinenin doğru tesise, doğru kapıdan, tesisin kendi trafiğini bozmayacak bir saatte ulaşması gerekir. Bu sayfada, Balıkesir genelinde platform ve forklift nakliyesini kampanya takvimi, kabul rampası trafiği ve çok noktalı sevkiyat mantığı üzerinden anlatıyoruz — teslimat burada bir lojistik ayrıntısı değil, işin başlayıp başlamayacağını belirleyen ilk adımdır.",
        maddeler: [
            {
                baslik: "Kampanya döneminde artan talebe erken tahsis",
                metin:
                    "Zeytin ve çeltik kampanyası başladığında bölgedeki talep birkaç hafta içinde normal seviyesinin üzerine çıkar ve son dakika taleplerinde uygun makine bulmak zorlaşır. Düzenli çalıştığımız tesislerin kampanya tarihlerini önceden kayda alır, nakliye planımızı bu takvime göre kurarız. Tarihini erken bildiren tesis makineyi ve teslimat saatini garantiye alır, geç bildiren tesis ise o haftanın müsait sırasına girer.",
            },
            {
                baslik: "Kabul rampası ve tanker trafiğiyle çakışmayan teslimat saati",
                metin:
                    "Süt tesislerinde günün belirli saatleri çiğ süt tankerlerinin kabul rampasına yanaştığı, avlunun en dolu olduğu dilimlerdir. Bu saatlere denk gelen bir teslimat hem nakliye aracının manevrasını zorlaştırır hem tesisin kendi işleyişini aksatır. Teslimat saatini planlarken tesisin günlük kabul programını önceden sorar, aracı bu programın dışındaki bir dilime göre yönlendiririz.",
            },
            {
                baslik: "Çok katlı ve dar erişimli tesislere makine ulaştırma",
                metin:
                    "Değirmen ve silo tipi tesislerde makinenin hedef kata ya da hedef noktaya ulaşması, teslimatın kendisinden ayrı bir problemdir; yük asansörü kapasitesi, kapı genişliği ve zemin taşıma durumu önceden bilinmezse araç sahaya gelir ama makine hedefe çıkarılamaz. Bu yüzden teslimat planlanırken sadece adres değil, makinenin sahada nereye konumlanacağı da netleştirilir.",
            },
            {
                baslik: "Birden fazla tesise tek sevkiyatla ulaşmak",
                metin:
                    "Balıkesir genelinde aynı hafta içinde birden fazla tesisten gelen talepler, güzergâh üzerine denk geldiğinde tek bir sevkiyata bindirilebilir. Bu, her tesis için ayrı nakliye bedeli ödenmesini önler ve teslim tarihinde bir-iki günlük esneklik sağlayan tesisler için avantajlıdır. Kesin gün ve saat gerektiren teslimatlar bu düzenin dışında tutulur ve ayrı planlanır.",
            },
            {
                baslik: "Acil arıza ve sezon içi ikame makine teslimatı",
                metin:
                    "Kampanya döneminde bir makine arızalandığında, üretim durmasın diye ikame makinenin en kısa sürede sahaya ulaşması gerekir. Bu tür teslimatlarda öncelik normal sıradan çıkarılır ve bölgedeki en yakın müsait makine yönlendirilir. Garanti veremesek de, sabah erken bildirilen bir arıza çoğu zaman aynı gün içinde ikame edilir; bunun için tesisin arızanın türünü ve makinenin duracağı noktayı önceden bildirmesi işi hızlandırır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Sevkiyat türüne göre planlama farkı",
                paragraflar: [
                    "Balıkesir genelindeki tesislere yapılan teslimatları, tarih esnekliği ve önceliğe göre aşağıdaki tabloda sınıflandırdık.",
                ],
                tablo: {
                    basliklar: ["Sevkiyat türü", "Tarih esnekliği", "Öncelik", "Belirleyici bilgi"],
                    satirlar: [
                        ["Kampanya öncesi tahsis", "Haftalar öncesinden", "Planlı", "Kampanya başlangıç tarihi"],
                        ["Rutin tesis teslimatı", "Bir-iki gün esnek", "Normal", "Kabul rampası saatleri"],
                        ["Birleştirilmiş çok tesis", "Esnek aralık", "Ekonomik", "Güzergâh üzerindeki tesisler"],
                        ["Çok katlı/dar erişim", "Sabit", "Planlı", "Asansör-kapı ölçüsü"],
                        ["Acil ikame teslimat", "Aynı gün mümkünse", "Yüksek", "Arıza türü ve konum"],
                    ],
                },
            },
            {
                baslik: "Teslimat öncesi netleştirdiğimiz saha bilgileri",
                paragraflar: [
                    "Bir teslimatın sorunsuz geçmesi için aracın kapıdan girmesi yetmez; makinenin konumlanacağı noktaya kadar güzergâhın da uygun olması gerekir. Bu yüzden teslimattan önce üç bilgiyi netleştiririz: giriş kapısının ve varsa iç yolların genişliği, zeminin taşıma durumu (özellikle yağış sonrası toprak veya çakıl saha) ve makinenin duracağı noktanın hedefe yatay uzaklığı. Bu bilgiler eksik bırakıldığında araç sahaya ulaşır ama makine hedefe konumlanamaz, bu da teslimatı fiilen başarısız kılar.",
                    "İkinci kontrol tesisin kendi giriş prosedürüdür. Bazı tesislerde araç girişi güvenlik kaydı, bazılarında ise belirli saat aralığıyla sınırlıdır. Bu prosedürü önceden öğrenip sürücüye yazılı olarak iletiriz; sahada öğrenilen bir kısıt, teslimatı saatlerce geciktirebilir.",
                ],
            },
            {
                baslik: "Kampanya sezonunda teslimat önceliklerini yönetmek",
                paragraflar: [
                    "Kampanya döneminde talep birden fazla tesisten aynı haftaya yığıldığında, teslimat sırası rastgele değil önceden kayıtlı taahhütlere göre belirlenir. Düzenli çalıştığımız ve tarihini erken bildiren tesisler öncelikli sıraya girer; son dakika talepleri o haftanın kalan kapasitesine göre değerlendirilir. Bu düzen adil olmaktan çok öngörülebilir olmayı hedefler — bir tesis hangi hafta makineyi alacağını bilirse kendi üretim planını da ona göre kurabilir.",
                    "İkinci düzenleme araç kullanımıdır. Kampanya haftalarında aynı aracın günde birden fazla teslimat yapması gerekebilir; bu durumda güzergâh sabah planlanır ve tesislere yaklaşık varış saati bildirilir. Kesin saat taahhüdü isteyen tesisler için ayrı bir sefer ayrılır ve bu, teklif aşamasında açıkça konuşulur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kampanya döneminde makine talebimizi ne kadar önce bildirmeliyiz?",
                cevap:
                    "Ne kadar erken bildirirseniz o kadar iyi, ama pratik bir alt sınır vermek gerekirse kampanya başlangıcından en az iki-üç hafta önce bize ulaşmanızı öneririz. Bu, hem uygun makinenin sizin için ayrılmasını hem de teslimat gününün tesisin kendi kabul takvimine göre planlanmasını sağlar. Son dakika taleplerini reddetmeyiz ama o haftanın müsaitliğine bağlı kalır ve teslimat saati konusunda daha az esneklik sunabiliriz.",
            },
            {
                soru: "Tesisimize giriş için özel bir güvenlik prosedürü var; bunu nasıl yönetiyorsunuz?",
                cevap:
                    "Teslimat planlanmadan önce sizden bu prosedürü ayrıntılı olarak öğreniriz — kayıt gerekiyor mu, araç plakası önceden bildirilmeli mi, giriş belirli saatlerle mi sınırlı. Bu bilgiyi sürücüye yazılı olarak iletiriz ki sahada sürpriz yaşanmasın. Prosedür teslimat saatini kısıtlıyorsa bunu baştan planımıza yansıtırız; sahada öğrenilen bir kısıt saatlerce gecikmeye yol açabilir, bunu yaşamak istemeyiz.",
            },
            {
                soru: "Aynı hafta hem Susurluk’taki hem Gönen’deki tesisimize teslimat lazım; birlikte mi ayrı mı planlanır?",
                cevap:
                    "İki tesisin de tarih konusunda bir-iki günlük esnekliği varsa güzergâh üzerine denk getirip tek sevkiyatla ikisine de ulaşabiliriz; bu, her tesis için ayrı nakliye bedelini ortadan kaldırır. Ancak biri kesin gün ve saat istiyorsa o teslimatı ayrı seferde tutarız, çünkü birleştirilmiş sevkiyatta varış saatleri yaklaşık verilir. Hangi düzenin sizin için uygun olduğunu birlikte kararlaştırırız.",
            },
            {
                soru: "Değirmenimizin üst katına makine çıkarmak gerekiyor; teslimat bunu nasıl karşılıyor?",
                cevap:
                    "Teslimat planlanmadan önce yük asansörünüzün kabin ölçüsünü ve kapasitesini, kat kapılarının genişliğini ve döşemenin taşıma durumunu sorarız. Bunlardan biri uygunsa dar gövdeli makine seçilir ve kata çıkarılır; hiçbiri uygun değilse dıştan bomlu makineyle kat açıklığına uzanma seçeneğini konuşuruz. Bu bilgiler önceden netleşmeden araç yola çıkmaz, çünkü makinenin hedefe ulaşamaması hem sizin hem bizim zamanımızı boşa harcar.",
            },
            {
                soru: "Kampanya sırasında makinemiz arızalanırsa ne kadar sürede ikame gelir?",
                cevap:
                    "Kesin bir süre garanti edemeyiz, ancak kampanya döneminde günlük planlarımızda acil müdahaleye pay bırakırız. Sabah erken bildirilen bir arıza çoğu zaman aynı gün içinde ikame edilir; öğleden sonra bildirilen bir arıza ise büyük olasılıkla ertesi güne yazılır. Arızanın türünü ve makinenin duracağı noktayı bize hemen bildirmeniz, doğru ikame sınıfını seçmemizi ve süreyi kısaltmamızı sağlar.",
            },
            {
                soru: "Yağış sonrası sahamızın zemini bozuk; teslimat ertelenir mi?",
                cevap:
                    "Zemin gerçekten araç veya makinenin güvenli hareketine izin vermiyorsa evet, teslimat güvenli bir alternatif bulunana kadar ertelenir; bu bizim taviz vermediğimiz bir konudur. Ancak çoğu zaman tam erteleme yerine kısmi çözüm buluruz — aracı sahanın sert bir noktasında bırakıp makineyi oradan kendi gücüyle hedefe yürütmek gibi. Hangi seçeneğin uygulanabilir olduğunu teslimat günü sahada operatör değerlendirir ve size anında bildirir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’deki zeytin ve çeltik kampanyalarının belirli takvim dönemlerinde talebi artırdığı, süt tesislerinin kabul rampası trafiğinin gün içinde belirli saatlere yoğunlaştığı kamuya açık genel bilgidir; teslimat önceliklendirmesi, güzergâh birleştirme ve saha bilgisi toplama firmamızın kendi lojistik pratiğidir.",
    },

    "hizmet:forklift-istifleme-kiralama": {
        h1: "Balıkesir’in Çuval, Varil ve Palet Depolarında Forklift ve İstifleme Kiralama",
        giris:
            "Balıkesir’in gıda ve tarım işleme tesislerinde depolanan malzeme tek bir formatta değildir: zeytinyağı tesisinde teneke kutu ve cam şişe paletleri, un ve yem fabrikasında çuvallanmış ürün, süt tesisinde plastik kasa ve karton koli, tahıl değirmeninde büyük torba (big-bag) yan yana bulunabilir. Her format farklı bir istifleme mantığı ve farklı bir forklift ataşmanı gerektirir — çuval için standart çatal yeterliyken, cam şişe paletinde devrilme riski daha dikkatli bir sürüş ister, big-bag için özel askı ekipmanı gerekebilir. Kampanya döneminde bu farklı formatların hepsi aynı anda depoya akabilir ve mevcut forklift filosu yetersiz kalabilir. Bu sayfada, Balıkesir genelindeki gıda ve tarım depolarında forklift ve istifleme ekipmanı kiralamayı ürün formatına göre nasıl planladığımızı, koridor ve istif yüksekliği hesabını ve sezonluk kapasite artırımını anlatıyoruz.",
        maddeler: [
            {
                baslik: "Ürün formatına göre doğru ekipman seçimi",
                metin:
                    "Çuvallanmış tahıl ürünü, paletlenmiş cam şişe ve big-bag torba, forklift üzerinde farklı davranır. Çuval istiflemede standart çatal yeterlidir ama istif yüksekliği arttıkça devrilme riski artar; cam şişe paletinde ani fren ve dönüşlerde şişelerin kayması söz konusu olabileceğinden sürüş hızı ve manevra alanı daha dikkatli planlanır; big-bag için forklife takılan özel askı aparatı gerekebilir. Hangi formatla çalışılacağını önceden öğrenip ekipmanı ona göre seçeriz.",
            },
            {
                baslik: "Koridor genişliği ve istif yüksekliği hesabı",
                metin:
                    "Depo tarafında iki ölçü belirleyicidir: raf arası koridor genişliği ve hedeflenen istif yüksekliği. Dar koridorlu depolarda standart forklift dönüş yapamayabilir, bu durumda dar koridor forkliftleri veya reach truck sınıfı gündeme gelir. İstif yüksekliği arttıkça direk yüksekliği ve kaldırma kapasitesi birlikte değerlendirilir; yüksek istifte palet ağırlığının doğru bildirilmesi kritiktir, çünkü kapasite aşımı hem güvenlik hem raf hasarı riski taşır.",
            },
            {
                baslik: "Cam ve kırılabilir ürünlerde sürüş disiplini",
                metin:
                    "Zeytinyağı dolum hattından çıkan cam şişe paletleri, depoya taşınırken standart bir yük gibi ele alınamaz. Ani hızlanma, sert fren ve dar dönüşler şişe kaymasına ve kırılmaya yol açabilir. Bu tür yükler için operatöre önceden bilgi verilir, taşıma hızı düşürülür ve palet üzerindeki streç film ve köşe koruma durumunun sağlam olduğu teyit edilmeden hareket başlamaz.",
            },
            {
                baslik: "Kampanya döneminde geçici kapasite artırımı",
                metin:
                    "Zeytin ve çeltik kampanyası sırasında depoya giren ürün hacmi normal dönemin kat kat üzerine çıkar ve mevcut forklift filosu bu yükü kaldıramayabilir. Bu dönemlerde kısa süreli forklift takviyesi, yeni makine satın almaktan daha hızlı ve ekonomik bir çözümdür. Takviye planı, kampanyanın tahmini süresine göre önceden kurulur ve kampanya bitiminde makine iade edilir.",
            },
            {
                baslik: "Açık saha ve kapalı depo arasında yakıt tipi ayrımı",
                metin:
                    "Kapalı depo ve üretim salonlarında egzoz gazı bir üretim riski olduğu için elektrikli veya LPG’li forklift tercih edilir; dizel sınıf yalnızca açık yükleme alanına ve saha içi taşımaya çıkar. Ürünün açıkta bekletildiği bölümlerde (örneğin tahıl kabul sahası) dizel makine kullanılabilir, ama kapalı depoya bu makinenin girmesine izin verilmez.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Ürün formatına göre ekipman ve dikkat noktası",
                paragraflar: [
                    "Balıkesir’deki gıda ve tarım depolarında karşılaştığımız yaygın ürün formatlarını ve her birinde belirleyici unsuru aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Ürün formatı", "Tipik risk", "Önerilen ekipman", "Belirleyici bilgi"],
                    satirlar: [
                        ["Çuvallanmış tahıl", "Yüksek istifte devrilme", "Standart çatallı forklift", "İstif yüksekliği"],
                        ["Cam şişe paleti", "Kayma, kırılma", "Standart forklift, düşük hız", "Palet sabitleme durumu"],
                        ["Big-bag torba", "Askı hattı zorlanması", "Askı aparatlı forklift", "Torba dolu ağırlığı"],
                        ["Plastik kasa/koli", "Devrik istif", "Dar koridor forkliftı", "Koridor genişliği"],
                        ["Açık saha kabul ürünü", "Zemin düzensizliği", "Dizel forklift", "Zemin türü ve eğim"],
                    ],
                },
            },
            {
                baslik: "Kapasite planlamasında istediğimiz üç veri",
                paragraflar: [
                    "Doğru forklifti önermek için üç veriye ihtiyacımız var: taşınacak paletin gerçek dolu ağırlığı, hedeflenen azami istif yüksekliği ve raf arası koridor genişliği. Bu üç veri eksik verildiğinde en yaygın hata, kapasitesi yetersiz bir makinenin sahaya gönderilmesidir — bu hem verimsizlik hem güvenlik sorunu yaratır. Ağırlık konusunda tahmini değil ambalaj etiketinde veya sevkiyat belgesinde yazan gerçek rakamı isteriz.",
                    "Koridor genişliği ölçülürken yalnızca raf arası mesafe değil, dönüş yapılacak koridor ucundaki manevra alanı da değerlendirilir; bazı depolarda ana koridor geniş olsa da uç noktalardaki dönüş alanı dardır ve bu, forklift sınıfını sınırlayan asıl faktör olabilir.",
                ],
            },
            {
                baslik: "Kampanya sezonunda forklift takviyesini planlamak",
                paragraflar: [
                    "Kampanya döneminde depo hacminin normalin üzerine çıkması öngörülebilir bir durum olduğu için, takviye talebini kampanya başlamadan önce planlamayı öneririz. Son dakika taleplerinde uygun makine bulmak zorlaşabilir, çünkü bölgedeki talep aynı haftalarda birden fazla tesisten aynı anda gelir. Erken planlanan takviyede hem makine sınıfı hem teslimat tarihi güvence altına alınır.",
                    "Takviye süresi kampanyanın gerçek tahmini süresine göre kurulur; kampanya erken biterse makine erken iade edilebilir, uzarsa süre uzatılabilir. Bu esnekliği sözleşmede baştan tanımlarız, çünkü kampanya sürelerinin yıldan yıla birkaç hafta değişmesi olağandır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Cam şişe paletlerimizi taşırken kırılma riskini nasıl azaltıyorsunuz?",
                cevap:
                    "Öncelikle operatöre yükün cam ve kırılabilir olduğu önceden bildirilir; taşıma hızı düşürülür, ani fren ve sert dönüşlerden kaçınılır. İkinci kontrol paletin kendisidir — streç film ve köşe koruma sağlam değilse taşımadan önce bunu size bildiririz, çünkü zayıf sabitlenmiş bir palet en dikkatli sürüşte bile risk taşır. Depo içindeki güzergâh da mümkün olduğunca düz ve engelsiz bir hat olarak seçilir.",
            },
            {
                soru: "Big-bag torbalarımız için özel bir aparat mı gerekiyor?",
                cevap:
                    "Genellikle evet. Standart çatal big-bag taşımada kullanılabilir ama torbanın kendi askı kulaklarından güvenli tutuş sağlayan bir askı aparatı, hem torbanın hem forkliftin daha güvenli çalışmasını sağlar. Torbanın dolu ağırlığını önceden bildirirseniz, uygun kapasitede aparat ve forklifti birlikte planlarız; ağırlık bilgisi eksikse sahada kapasite kontrolü yapmadan kaldırma işlemine başlamayız.",
            },
            {
                soru: "Deponun koridorları dar; standart forklift dönüş yapabilir mi?",
                cevap:
                    "Koridor genişliğine ve dönüş ucundaki manevra alanına bağlı. Bu iki ölçüyü paylaşırsanız standart forkliftin sığıp sığmadığını hesaplarız; sığmıyorsa dar koridor forkliftı veya reach truck sınıfına geçeriz. Bazı depolarda ana koridor geniş görünse de raf ucundaki dönüş alanı yetersizdir, bu yüzden yalnızca ana koridoru değil dönüş noktalarını da ölçmenizi öneririz.",
            },
            {
                soru: "Kampanya döneminde ne kadar önceden forklift takviyesi talep etmeliyiz?",
                cevap:
                    "Mümkünse kampanya başlangıcından birkaç hafta önce. Bölgedeki talep aynı haftalarda birden fazla tesisten aynı anda geldiği için, erken bildirilen talep hem makine sınıfını hem teslimat tarihini güvence altına alır. Son dakika taleplerini de değerlendiririz ama o haftanın müsait kapasitesiyle sınırlı kalabiliriz.",
            },
            {
                soru: "Kapalı depoya dizel forklift sokabilir miyiz, egzoz gazı sorun olur mu?",
                cevap:
                    "Kapalı gıda depolarında egzoz gazı üretim riski taşıdığı için dizel makine önermeyiz; bu alanlara elektrikli veya LPG’li sınıf yönlendirilir. Dizel forklift yalnızca açık yükleme ve kabul sahalarında kullanılır. Depo tarafında ihtiyacınız kapalı alanı da kapsıyorsa baştan elektrikli sınıfı planlarız, sahada makine değiştirmek zaman kaybettirir.",
            },
            {
                soru: "İstif yüksekliğini artırmak istiyoruz; mevcut forkliftimiz yeterli mi diye nasıl anlarız?",
                cevap:
                    "Bunu üç veriyle değerlendiririz: hedeflenen yeni istif yüksekliği, paletin dolu ağırlığı ve mevcut forkliftinizin direk yüksekliği ile kaldırma kapasitesi. Yükseklik arttıkça kapasite genellikle düşer, bu yüzden mevcut makine yüksek istifte yetersiz kalabilir. Bu durumda geçici olarak daha uzun direkli bir forklift kiralamak, sabit yatırım yapmadan kampanya dönemini karşılamanın en hızlı yoludur.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in zeytinyağı, süt ve tahıl işleme tesislerinde depolanan ürünün çuval, palet, cam şişe ve big-bag gibi farklı formatlarda bulunduğu ve kampanya döneminde depo hacminin arttığı kamuya açık genel bilgidir; ekipman eşleştirme ve kapasite planlaması firmamızın kendi saha pratiğidir.",
    },

    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Balıkesir’de Tank Üstü, Kazan Bacası ve Elevatör Kulesine Eklemli Platform (Boom) Kiralama",
        giris:
            "Balıkesir’in gıda ve tarım işleme tesislerinde en yüksek ve en zor erişilen noktalar genellikle proses ekipmanının kendisidir: dikey tankların tepe kapağı, kazan dairesinin baca çevresi, elevatör kulesinin üst tamburu, silo üstü havalandırma başlığı. Bu noktalara zeminden düz bir merdivenle ya da sabit servis platformuyla her zaman ulaşılamaz, çünkü hedef genellikle bina veya ekipman gövdesinden bir miktar içeri veya öne doğru kaymıştır — düz yukarı çıkmak yetmez, yatay bir uzanım da gerekir. Eklemli platform (boom), yükseldikçe hem dikey hem yatay yönde eklemli koluyla hedefe dolanarak ulaşabilme özelliğiyle bu tür noktalar için en uygun sınıftır. Bu sayfada, Balıkesir genelindeki gıda ve tarım tesislerinde boom platformun tank, kazan, elevatör ve silo gibi yüksek proses ekipmanlarında nasıl kullanıldığını, yatay uzanım hesabının neden kritik olduğunu ve zeminden erişimin çatıya çıkmaya göre neden tercih edildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Tank tepe kapağı ve karıştırıcı redüktörüne yatay uzanım",
                metin:
                    "Dikey tankların tepe bölümü zeminden yüksek olsa da makine tankın hemen dibine yanaşamayabilir — komşu ekipman, boru desteği veya sabit merdiven buna engel olabilir. Boom platform, zeminden belirli bir mesafeden yükselip kolunu tankın üzerine doğru uzatarak bu engeli aşar. Burada belirleyici veri, makinenin duracağı noktanın tanka yatay uzaklığı ile hedefin yerden yüksekliğidir; bu iki ölçü birlikte doğru sınıfı belirler.",
            },
            {
                baslik: "Kazan bacası ve baca çevresi bakımı",
                metin:
                    "Kazan dairesinin baca çevresi, hem yüksek hem dar bir erişim hedefidir; bacaya bitişik çalışma alanı genellikle yoktur. Boom platform, baca gövdesinin etrafını saran bir yaklaşımla sepeti hedefe getirebilir. Sıcak yüzey riski nedeniyle bu işlerde kazanın soğutulduğu veya sıcaklığın güvenli seviyeye indiği tesis tarafından teyit edilmeden çalışma başlamaz.",
            },
            {
                baslik: "Elevatör kulesinin üst tamburu ve dış duvar erişimi",
                metin:
                    "Kovalı elevatörlerin üst tamburu, gövde kapağı ve boşaltma ağzı, tesisin en yüksek noktalarından biridir ve genellikle bina dışında yükselen bir kule biçimindedir. İçeriden erişim mümkün olmadığında boom platform dışarıdan kuleye yaklaşıp hedefe uzanır. Kule etrafında saçak, tesisat veya beton kaide gibi bir engel varsa daha uzun erişimli bir sınıfa geçmek gerekebilir; bu engelleri keşifte önceden tespit ederiz.",
            },
            {
                baslik: "Silo üstü havalandırma ve seviye sensörü bakımı",
                metin:
                    "Silo üstündeki havalandırma başlığı, doluluk sensörü ve güvenlik valfi, siloya bitişik sabit merdivenle erişilse de, bu merdivenin bakım amaçlı sık kullanımı önerilmez; boom platform aynı noktaya zeminden çıkarak daha hızlı ve tekrarlanabilir bir erişim sunar. Silo etrafındaki zeminin taşıma kapasitesi ve varsa dolum kamyonu manevra alanıyla çakışma önceden değerlendirilir.",
            },
            {
                baslik: "Çatıya çıkmak yerine zeminden erişim tercihi",
                metin:
                    "Kazan dairesi çatısı ya da silo tepesi gibi yüzeylere doğrudan çıkmak, taşıma kapasitesi belirsizliği ve kenar güvenliği açısından ayrı bir risk taşır. Bunun yerine zeminden yükselen bir boom platform, sepeti doğrudan hedefin yanına getirir ve çatıya hiç basılmaz. Bu tercih, hem işçi güvenliği hem de çatı yalıtımının zarar görmemesi açısından bizim standart yaklaşımımızdır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yüksek proses ekipmanına göre erişim planı",
                paragraflar: [
                    "Balıkesir’deki gıda ve tarım tesislerinde boom platform gerektiren başlıca yüksek nokta türlerini ve belirleyici ölçüyü aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Hedef nokta", "Erişim zorluğu", "Belirleyici ölçü", "Ek koordinasyon"],
                    satirlar: [
                        ["Tank tepe kapağı", "Yatay engel", "Yatay mesafe + yükseklik", "Komşu ekipman kontrolü"],
                        ["Kazan bacası", "Sıcak yüzey, dar alan", "Baca çevresi yaklaşma açısı", "Soğuma teyidi"],
                        ["Elevatör kulesi üstü", "Dış duvar, yüksek kot", "Bina-makine yatay mesafe", "Saçak/tesisat engeli"],
                        ["Silo üstü ekipman", "Sabit merdiven yerine tercih", "Zemin kotu ve mesafe", "Dolum kamyonu trafiği"],
                        ["Çatı üstü ekipman", "Doğrudan çıkış riskli", "Bina dibine yaklaşma mesafesi", "Yalıtım koruma"],
                    ],
                },
            },
            {
                baslik: "Yatay uzanım hesabının pratikte anlamı",
                paragraflar: [
                    "Boom platformlarda erişim tek bir yükseklik rakamıyla ifade edilemez; makine yükseldikçe yatay uzanabildiği mesafe azalır, yatay uzandıkça ulaşabildiği yükseklik düşer. Bu yüzden bir hedefin 'kaç metre yükseklikte' olduğunu bilmek tek başına yeterli değildir — makinenin duracağı noktanın hedefe olan yatay uzaklığı da aynı derecede önemlidir ve çoğu zaman gözden kaçar.",
                    "Bu iki ölçüyü önceden almadan sınıf önerisi yapmayız, çünkü doğru görünen bir yükseklik bilgisi yanlış yatay mesafeyle birleştiğinde sahada makinenin hedefe ulaşamadığı ortaya çıkabilir. Bina dibine yanaşmayı engelleyen bir unsur varsa — park hâlindeki araç, geçici stok, boru desteği — bunu kaldırmak çoğu zaman daha küçük ve ekonomik bir sınıfla çalışmayı mümkün kılar.",
                ],
            },
            {
                baslik: "Sıcak ve enerjili ekipman çevresinde çalışma disiplini",
                paragraflar: [
                    "Kazan ve enerji hattı çevresindeki işlerde makinenin kendisi kadar çalışma ortamının durumu da belirleyicidir. Sıcak yüzeyler soğutulduğu, enerjili hatlar devre dışı bırakıldığı tesis tarafından yazılı olarak teyit edilmeden işe başlanmaz; bu bizim değil tesisin güvenlik prosedürüdür ve biz buna uyarız. Operatörümüz bu teyidi almadan sepeti hedefe yaklaştırmaz.",
                    "İkinci katman makinenin kendisidir: sıcak ortamlarda uzun süre çalışacak ekipmanın soğutma ve hidrolik sistemleri işe başlamadan kontrol edilir. Bu, hem makinenin hem operatörün güvenliği için standart bir ön kontroldür ve iş süresine ayrıca eklenmez.",
                ],
            },
        ],
        sss: [
            {
                soru: "Tankımızın dibine makineyle yaklaşamıyoruz; yine de erişim mümkün mü?",
                cevap:
                    "Çoğu durumda evet, ama makine sınıfını yeniden seçmek gerekir. Bina veya tanka yaklaşamıyorsanız, hedef kota o mesafeden ulaşabilen daha uzun erişimli bir boom sınıfına geçilir. Sizden istediğimiz iki ölçü şudur: hedef noktanın yerden yüksekliği ve makinenin durabileceği en yakın sağlam zeminin tanka olan yatay uzaklığı. Bu ikisiyle uygun modeli hesaplarız.",
            },
            {
                soru: "Kazan bacasında çalışmak için sıcaklığın düşmesini ne kadar beklememiz gerekir?",
                cevap:
                    "Bu, kazanın büyüklüğüne ve soğutma yöntemine bağlı olduğu için tesisin kendi teknik ekibinin vereceği bir süredir; biz bu konuda tahmin yürütmeyiz. İşe başlamadan önce tesisten yazılı bir soğuma teyidi isteriz. Bu teyit gelmeden operatörümüz sepeti bacaya yaklaştırmaz, çünkü sıcak yüzey riski hem ekipman hem operatör için kabul edilemez.",
            },
            {
                soru: "Elevatör kulemizin çevresinde saçak var, makine yaklaşamıyor; ne yapılır?",
                cevap:
                    "Öncelikle saçağın kaldırılabilir geçici bir engel mi yoksa kalıcı bir yapı mı olduğunu değerlendiririz. Kaldırılabiliyorsa bunu kaldırmak genellikle en ekonomik çözümdür, çünkü birkaç metre yaklaşma bir sınıf küçük makineyle çalışmak anlamına gelebilir. Kalıcı bir yapıysa daha uzun erişimli bir sınıfa geçilir; bu durumda erişim mesafesini fotoğraf ve ölçüyle önceden netleştiririz.",
            },
            {
                soru: "Silo üstüne çıkmak yerine neden boom platform öneriyorsunuz?",
                cevap:
                    "Silo tepesine doğrudan çıkmak, yüzeyin taşıma kapasitesi belirsizliği ve kenar güvenliği açısından ayrı bir risk paketi getirir. Boom platform ise sepeti doğrudan hedefin yanına getirir ve silo tepesine hiç basılmaz. Bunun için gereken tek şey, makinenin duracağı zeminin taşıma kapasitesinin uygun olması ve varsa dolum kamyonu trafiğiyle çakışmamasıdır; bu ikisini keşifte kontrol ederiz.",
            },
            {
                soru: "Çatı üstü soğutma grubuna erişim için hangi bilgileri önceden vermeliyiz?",
                cevap:
                    "İki bilgi yeterli: çatı kotunun yerden yüksekliği ve makinenin duracağı noktanın binaya olan yatay mesafesi. İkincisi çoğu zaman unutulur, oysa boom platformda yatay uzanım yükseklikle birlikte azalır; bina dibine yanaşılamıyorsa daha büyük sınıfa geçmek gerekir. Binanın çevresinde park, saçak veya yeşil alan engeli varsa bunu da baştan bilmemiz gerekir.",
            },
            {
                soru: "Aynı günde birden fazla yüksek nokta için (tank, kule, kazan) tek makine yeterli mi?",
                cevap:
                    "Genellikle evet, tek bir boom platform farklı hedeflere sırayla konumlanarak birden fazla işi bitirebilir. Verimli olması için işleri önce ekipman sınıfına, sonra konuma göre gruplarız — aynı bölgeden erişilebilen kalemler arka arkaya yapılır. Hedefler birbirinden çok farklı erişim mesafesi gerektiriyorsa (biri düz yükseklik, biri uzun yatay uzanım) bazen iki farklı sınıf gerekebilir; bunu keşif sonrası netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in gıda ve tarım işleme tesislerinde tank, kazan, elevatör ve silo gibi yüksek proses ekipmanının bulunduğu kamuya açık genel bilgidir; yatay uzanım hesabı, soğuma teyidi ve zeminden erişim tercihinin gerekçesi firmamızın kendi saha pratiğidir.",
    },

    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Balıkesir’in Proses Salonu ve Depo İçinde Elektrikli Platform Kiralama",
        giris:
            "Balıkesir’deki süt, zeytinyağı ve tahıl işleme tesislerinin iç mekânları, dışarıdan bakılınca anlaşılmayan bir yoğunlukla doludur: tavan altından geçen CIP hattı, boru askıları, aydınlatma armatürleri ve havalandırma kanalları, proses ekipmanının hemen üzerinde bir ikinci kat gibi durur. Bu iç mekânlarda çalışacak makinenin iki temel kısıtı vardır — egzoz gazı üretemez, çünkü kapalı ve çoğu zaman gıda üretilen bir hacimdir; ve iz bırakmaz, çünkü paslanmaz yüzeyler ile hijyenik zeminler kozmetik bir hasarı bile üretim olayına çevirir. Bu iki kısıt, iç mekân işlerinde neredeyse istisnasız elektrikli makine kullanımını dayatır. Bu sayfada, Balıkesir genelindeki proses salonu ve depo içi işlerde platform kiralamayı egzozsuz çalışma zorunluluğu, iz bırakmama disiplini ve hat boşaltma saatlerinin iş programını nasıl belirlediği üzerinden anlatıyoruz.",
        maddeler: [
            {
                baslik: "Kapalı proses salonunda egzozsuz çalışma zorunluluğu",
                metin:
                    "Süt, zeytinyağı ve un tesislerinin proses salonlarında havalandırma genellikle ürün nemine ve tozuna göre tasarlanmıştır, egzoz gazı tahliyesine göre değil. Bu yüzden dizel veya LPG'li bir makinenin bu alanlara girmesi zaten önerilmez; iç mekân işlerinde standart tercih akülü elektrikli sınıftır. Uzun süren işlerde şarj noktası ve kablo güzergâhı tesisle önceden konuşulur, çünkü priz erişimi her zaman hedefe yakın değildir.",
            },
            {
                baslik: "Tavan altı hat ve askılarda iz bırakmama",
                metin:
                    "CIP hattı, buhar borusu ve kablo tavası gibi tavan altı ekipmana erişirken sepetin bu yüzeylere temas etmeden yaklaşması esastır; paslanmaz bir boruda bırakılan çizik, kozmetik değil temizlenebilirliği bozan bir hasardır. Bu yüzden sepet kenarları yumuşak koruma ile kaplanır, bom hareketinin süpüreceği hacim çalışma öncesi işaretlenir ve sepette gevşek malzeme taşınmaz.",
            },
            {
                baslik: "Depo içi raf ve yükleme köprüsü üstü işler",
                metin:
                    "Depo bölümünde platform ihtiyacı genellikle raf üstü aydınlatma, yangın söndürme başlığı bakımı veya yükleme köprüsü çevresindeki tesisat işleridir. Bu alanlarda forklift trafiği devam ediyorsa platformun çalışma alanı geçici olarak ayrılır ve forklift güzergâhı o süre için değiştirilir; iki farklı ekipmanın aynı koridoru aynı anda kullanması riskli olduğu için bu ayrım tesis sorumlusuyla birlikte yapılır.",
            },
            {
                baslik: "Zemin koruması ve tekerlek temizliği",
                metin:
                    "Proses salonuna giren her makinenin tekerlek yüzeyleri girişte temizlenir ve makinenin geçeceği güzergâh ürün akışının olmadığı bir hat olarak seçilir. Çalışma noktasının altına serilen koruyucu örtü, hem damlama hem sökülen küçük parçanın zemine düşmemesi için kullanılır. Bu kalemler ayrı bir ücret satırı değildir; proses salonunda çalışmanın standart hazırlığıdır.",
            },
            {
                baslik: "Hat boşaltma saatine göre iş programı",
                metin:
                    "Üretim hattının tam üzerine gelen bir iş, hat çalışırken yapılmaz; bu tür kalemler hattın kısa süreliğine boşaltıldığı pencereye yazılır. Hattın kenarındaki, üretimi kesmeyen işler ise üretim sürerken kapatılmış bir koridordan yürütülür. Bu ayrımı keşifte netleştirir, iş programını tesisin vardiya planına göre kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İç mekân bölümüne göre makine ve kısıt",
                paragraflar: [
                    "Balıkesir’deki proses salonu ve depo içlerinde karşılaştığımız tipik iş türlerini ve belirleyici kısıtı aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Bölüm", "Tipik iş", "Uygun sınıf", "Belirleyici kısıt"],
                    satirlar: [
                        ["Proses salonu", "Boru askısı, vana, yalıtım", "Akülü eklemli", "Egzozsuz çalışma"],
                        ["Tavan altı hat", "CIP hattı, kablo tavası", "Akülü eklemli", "Yüzey teması yasağı"],
                        ["Dolum-paketleme", "Fotosel, kodlama, aydınlatma", "Kompakt akülü makaslı", "Hat boşaltma saati"],
                        ["Depo rafı", "Aydınlatma, söndürme başlığı", "Akülü makaslı", "Forklift trafiği"],
                        ["Yükleme köprüsü", "Tesisat, kapı mekanizması", "Kompakt elektrikli", "Araç manevra alanı"],
                    ],
                },
            },
            {
                baslik: "Şarj planlaması ve uzun süreli iç mekân işleri",
                paragraflar: [
                    "İç mekân işlerinde elektrikli makine tercihi, beraberinde şarj planlamasını getirir. Kısa işlerde mevcut şarj seviyesi yeterli olur, ancak birkaç günü bulan montaj veya bakım işlerinde gece şarjı için bir priz noktası ve güvenli kablo güzergâhı gerekir. Bu noktayı tesisle önceden belirleriz; kabloyu üretim koridorunun ortasından geçirmek yerine, mümkünse duvara yakın ve trafik dışı bir hat seçilir.",
                    "Bazı tesislerde priz erişimi kısıtlıdır veya belirli bir panodan çekilmesi gerekir; bu durumda tesisin elektrik sorumlusuyla koordinasyon iş başlamadan önce tamamlanır. Şarj planı eksik kalırsa iş günün ortasında makinenin gücünün yetmemesiyle kesintiye uğrayabilir, bu yüzden bu adımı atlamayız.",
                ],
            },
            {
                baslik: "Forklift ve platform aynı koridoru paylaştığında",
                paragraflar: [
                    "Depo içinde platform çalışırken forklift trafiği devam ediyorsa, iki ekipmanın aynı koridoru aynı anda kullanması güvenlik açısından uygun değildir. Bu durumda platformun çalışacağı koridor bölümü geçici olarak ayrılır, forklift o süre için alternatif bir güzergâha yönlendirilir ve bu değişiklik depo sorumlusuna önceden bildirilir.",
                    "Kısa süren işlerde bu ayrım birkaç dakikayla sınırlı kalır ve depo işleyişini fazla etkilemez; uzun süren montaj işlerinde ise koridorun tamamen kapatıldığı bir pencere ayrılması daha güvenli ve daha az kesintili sonuç verir. Hangi yaklaşımın uygun olduğunu işin süresine göre birlikte kararlaştırırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Proses salonumuza dizel makine kesinlikle giremez; alternatifiniz ne?",
                cevap:
                    "Zaten önermeyiz. Kapalı proses salonunda egzoz gazı tek başına diskalifiye edici bir unsurdur; bu alanlara akülü elektrikli sınıf gönderilir. İşin büyüklüğüne göre dar gövdeli eklemli veya kompakt makaslı platform seçilir. Uzun süren işlerde şarj ihtiyacını da baştan planlarız, çünkü priz noktası ve kablo güzergâhı tesisin onayına tabi bir konudur.",
            },
            {
                soru: "Tavan altındaki boru hattımıza zarar vermeden nasıl çalışıyorsunuz?",
                cevap:
                    "Sepet kenarlarını yumuşak koruma ile kaplarız ve bom hareketinin süpüreceği hacmi çalışma öncesinde tesis sorumlusuyla birlikte işaretleriz. Sepette gevşek malzeme bulundurulmaz; el aletleri bağlı taşınır, küçük parçalar kapalı kutuda tutulur. Operatörümüz hattın hemen yanına yaklaşırken temas riskini en aza indiren bir hızda hareket eder, bu bizim standart uygulamamızdır.",
            },
            {
                soru: "Makinenin şarjı iş bitmeden biterse ne oluyor?",
                cevap:
                    "Bu senaryoyu önlemek için işin tahmini süresine göre şarj planı önceden kurulur; birkaç günü bulan işlerde gece şarjı için bir priz noktası ayarlanır. Buna rağmen beklenmedik bir uzama olursa, elimizde yedek şarjlı makine varsa hızlıca değişim yaparız; yoksa şarj süresini bekleriz ve bunu size önceden bildiririz. Şarj planlamasını atlamamak bu riski büyük ölçüde ortadan kaldırır.",
            },
            {
                soru: "Depoda forklift trafiği sürerken platform çalışabilir mi?",
                cevap:
                    "Aynı koridoru aynı anda paylaşmalarını istemeyiz. Platformun çalışacağı bölüm geçici olarak ayrılır ve forklift o süre için alternatif güzergâha yönlendirilir; bu, depo sorumlusuyla önceden koordine edilir. Kısa işlerde bu ayrım birkaç dakikayla sınırlı kalır, uzun işlerde koridorun tamamen kapatıldığı bir pencere daha güvenlidir.",
            },
            {
                soru: "Hattın tam üstündeki bir armatürü üretim dururken değiştirmek istiyoruz; ne kadar süre gerekir?",
                cevap:
                    "Tek bir armatür için harcanan asıl süre değişimin kendisi değil hazırlıktır — hattın boşaltılması, alt bölgenin örtülmesi, makinenin konumlanması. Bu yüzden önerimiz, tek kalem için duruş kullanmak yerine aynı bölgede biriken tüm yüksek kotlu işleri o pencereye toplamaktır. Süre tahminini keşif sonrası net veririz ve pencereye sığmayan bir işi sığacakmış gibi planlamayız.",
            },
            {
                soru: "Şarj için priz noktamız hedefe uzak; bu bir sorun mu?",
                cevap:
                    "Sorun olabilir ama çözümsüz değil. Öncelikle daha yakın bir priz noktası olup olmadığını tesisle birlikte kontrol ederiz; yoksa güvenli bir kablo güzergâhı belirleriz — kabloyu üretim koridorunun ortasından değil, duvara yakın ve trafik dışı bir hattan geçiririz. Bazı işlerde ise makineyi gün içinde iki kez kısa süreli şarj etmek, uzun bir kablo çekmekten daha pratik olabilir; bunu işin süresine göre birlikte kararlaştırırız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in gıda işleme tesislerinde tavan altı CIP hattı ve boru askılarının yaygın bir iç mimari unsuru olduğu, kapalı gıda alanlarında egzozsuz çalışmanın standart uygulama olduğu kamuya açık genel bilgidir; iz bırakmama disiplini ve şarj planlaması firmamızın kendi saha uygulamasıdır.",
    },

    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Balıkesir’de Silo, Elevatör Kulesi ve Sanayi Holü Çelik Konstrüksiyon Montajına Platform",
        giris:
            "Balıkesir’in tarım ve gıda işleme kapasitesi büyüdükçe, mevcut tesislere yeni silo hattı, ek elevatör kulesi veya genişleyen bir sanayi holü eklenmesi düzenli karşılaştığımız bir ihtiyaçtır. Bu montaj işleri, bakım işlerinden farklı bir erişim mantığı gerektirir: hedef sabit bir nokta değil, günden güne yükselen bir çelik gövdedir. Çatı aşıklarının montajı, cephe kaplamasının sabitlenmesi, silo gövde plakalarının kaynağı ve elevatör kulesi iskeletinin birleşimi, inşaatın ilerleyişine göre sürekli değişen bir erişim yüksekliği ve konumu ister. Bu sayfada, Balıkesir genelindeki tarım ve gıda sanayi yapılarının çelik konstrüksiyon montajında platform kiralamayı inşaat aşamasına göre değişen ihtiyaç, çoklu ekip koordinasyonu ve uzun süreli sahada bulunma perspektifinden anlatıyoruz.",
        maddeler: [
            {
                baslik: "İnşaat aşamasına göre değişen erişim ihtiyacı",
                metin:
                    "Bir silo veya hol inşaatının başında zemin seviyesindeki temel ve kolon işleri ağırlıktayken, ilerleyen haftalarda erişim ihtiyacı hızla yükselir — çatı aşığı, cephe kaplaması ve üst kat tesisatı devreye girer. Bu yüzden montaj projelerinde tek bir makine sınıfı değil, aşamaya göre değişen bir filo planı kurarız; erken aşamada kompakt makaslı yeterliyken, geç aşamada uzun erişimli bomlu sınıf gerekir.",
            },
            {
                baslik: "Silo gövde plakası kaynağı ve dikey ilerleme",
                metin:
                    "Silo gövdesi aşağıdan yukarı halka halka birleştirilirken, kaynak ekibinin erişim noktası her halkada bir üst seviyeye kayar. Bu dikey ilerlemeyi karşılamak için makinenin sık sık yükseklik değiştirmesi gerekir; sepetin kaynak dumanına ve kıvılcıma dayanıklı olması, operatörün kaynak ekibiyle sürekli iletişim hâlinde çalışması bu işlerde standart uygulamamızdır.",
            },
            {
                baslik: "Çatı aşığı ve cephe kaplaması montajında çok noktalı çalışma",
                metin:
                    "Sanayi holünün çatı aşıkları ve cephe sac panelleri, geniş bir alana yayılı çok sayıda montaj noktası gerektirir. Bu işlerde tek makine yerine birden fazla platformun eşzamanlı çalışması, montaj süresini kısaltır. Ekipler arası çakışmayı önlemek için her makinenin çalışma bölgesi önceden planlanır ve gün içinde bölgeler arasında geçiş sırası belirlenir.",
            },
            {
                baslik: "Elevatör kulesi iskeletinin birleşim noktalarında erişim",
                metin:
                    "Elevatör kulesi gibi dar ve yüksek yapıların çelik iskeleti kurulurken, her birleşim noktası farklı bir yükseklik ve açıdan erişim ister. Kule dar olduğu için makinenin duracağı alan sınırlıdır; bu nedenle montaj öncesi kule çevresindeki zemin ve manevra alanı ayrıntılı ölçülür, gerekirse dar gövdeli bir sınıf tercih edilir.",
            },
            {
                baslik: "Uzun süreli montaj projelerinde sahada kalıcı tahsis",
                metin:
                    "Birkaç haftayı bulan montaj projelerinde makineyi her gün taşımak yerine sahada sürekli tutmak hem ekonomik hem pratiktir; uzun dönem tarifesi günlük tarifeye göre belirgin avantaj sağlar. Bu tür projelerde arızalanma durumunda ikame makine yükümlülüğü sözleşmede süre belirtilerek yazılır, çünkü inşaat takviminde bir günlük gecikme bile sonraki işleri etkileyebilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat aşamasına göre makine planı",
                paragraflar: [
                    "Bir çelik konstrüksiyon projesinin aşamalarını ve her aşamada tercih edilen makine sınıfını aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["Aşama", "Tipik iş", "Uygun sınıf", "Belirleyici unsur"],
                    satirlar: [
                        ["Temel ve alt kolon", "Kaynak, cıvatalama", "Kompakt makaslı", "Zemin sağlamlığı"],
                        ["Orta gövde/kule halkası", "Kaynak, plaka birleşimi", "Eklemli bomlu", "Dikey ilerleme hızı"],
                        ["Çatı aşığı montajı", "Kaynak, vidalama", "Uzun erişimli bomlu", "Yayılı çalışma alanı"],
                        ["Cephe kaplaması", "Panel sabitleme", "Kompakt akülü makaslı", "Panel taşıma kapasitesi"],
                        ["Üst kat tesisat", "Elektrik, aydınlatma", "Akülü eklemli", "Kapalı hacim erişimi"],
                    ],
                },
            },
            {
                baslik: "Kaynak ve sıcak iş ortamında makine koruması",
                paragraflar: [
                    "Kaynak dumanı ve kıvılcım, sepette ve makinenin hareketli aksamında birikinti bırakabilir; bu ortamdan dönen makinede filtre ve elektrik bağlantı noktası kontrolü sıkılaştırılır. Saha tarafında ise operatör kıvılcım sıçrama mesafesini göz önünde bulundurarak konumlanır ve gerektiğinde koruyucu örtü kullanılır.",
                    "Sıcak iş izni gerektiren montaj bölgelerinde tesisin ya da yüklenicinin kendi güvenlik prosedürü işletilir; bu prosedür bizim değil, sahadaki genel yüklenicinin belirlediği kuraldır ve biz buna uyarız.",
                ],
            },
            {
                baslik: "Çok ekipli sahada koordinasyon",
                paragraflar: [
                    "Çelik konstrüksiyon projelerinde genellikle birden fazla taşeron aynı sahada çalışır — kaynak ekibi, vinç operatörü, elektrik ekibi. Platformun çalışma bölgesi bu ekiplerle çakışmayacak şekilde günlük olarak planlanır; sabah başlamadan önce genel yüklenici ile o günün çalışma alanları netleştirilir.",
                    "Uzun projelerde bu koordinasyon haftalık bir düzene oturur: hangi bölgenin hangi gün hangi ekibe ait olduğu önceden bilinir, makinenin o güne ait çalışma bölgesi buna göre ayarlanır. Bu düzen, sahadaki bekleme sürelerini belirgin biçimde azaltır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo montajı boyunca aynı makineyi mi kullanıyoruz, yoksa aşamaya göre değişiyor mu?",
                cevap:
                    "Genellikle aşamaya göre değişir. Montajın başında zemine yakın işler için kompakt bir sınıf yeterliyken, gövde yükseldikçe daha uzun erişimli bir sınıfa geçilir. Bu geçişi projenin başında sizinle birlikte planlarız, böylece hangi haftada hangi makinenin sahada olacağını önceden bilirsiniz ve sürpriz bir makine değişikliği yaşanmaz.",
            },
            {
                soru: "Kaynak dumanı ve kıvılcım makineye zarar verir mi, bu bize fatura edilir mi?",
                cevap:
                    "Hayır. Kaynak ortamının getirdiği bakım yükü, ortam teklif aşamasında konuşulduysa zaten fiyatın içindedir. Bu ortamdan dönen makinede filtre ve bağlantı kontrolü bizim standart iş akışımızdır. Kiracıya yansıyan tek başlık kullanım hatasıdır — makinenin belirlenen çalışma alanının dışına çıkarılması veya kapasitenin üzerinde yükleme gibi durumlar.",
            },
            {
                soru: "Sahada aynı anda birden fazla taşeron çalışıyor; platform onlarla nasıl koordine oluyor?",
                cevap:
                    "Her sabah genel yüklenici ile o günün çalışma bölgeleri netleştirilir ve platformun çalışacağı alan bu plana göre belirlenir. Uzun projelerde bu koordinasyon haftalık bir düzene oturur — hangi bölgenin hangi gün hangi ekibe ait olduğu önceden bilinir. Bu, sahadaki bekleme sürelerini azaltan bir uygulamadır ve genel yüklenicinin onayıyla işletilir.",
            },
            {
                soru: "Montaj projesi birkaç hafta sürecek; makineyi tüm süre sahada tutmak mantıklı mı?",
                cevap:
                    "Çoğu durumda evet. Uzun dönem tarifesi günlük tarifeye göre belirgin avantaj sağlar ve makine sahada olduğu için ortaya çıkan ek işlere anında müdahale edilebilir. Arızalanma ihtimaline karşı ikame makine yükümlülüğünü sözleşmede süre belirterek yazarız, çünkü inşaat takviminde bir günlük gecikme sonraki işleri etkileyebilir.",
            },
            {
                soru: "Elevatör kulesi dar bir alanda yükseliyor; makine manevra edebilecek mi?",
                cevap:
                    "Montaj öncesi kule çevresindeki zemin ve manevra alanını ayrıntılı ölçeriz; alan dar çıkarsa dar gövdeli bir sınıf tercih edilir. Kule yükseldikçe erişim açısı değiştiği için, makinenin duracağı nokta da zaman zaman güncellenir. Bu planlamayı projenin başında yaparız, sahada anlık karar vermek yerine önceden hazırlıklı oluruz.",
            },
            {
                soru: "Sıcak iş izni kimin sorumluluğunda, siz mi veriyorsunuz?",
                cevap:
                    "Hayır, sıcak iş izni sahadaki genel yüklenicinin veya işletmenin kendi güvenlik prosedürüdür; biz bu izne uyan bir taşeron gibi çalışırız. İzin alınmadan kaynak veya kesme işlemi yapılan bir bölgeye makinemizi sokmayız. Sizden istediğimiz, o günün izinli bölgelerini bize önceden bildirmenizdir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in tarım ve gıda sanayi kapasitesinin büyüdüğü ve buna bağlı yeni silo, elevatör ve hol inşaatlarının yapıldığı kamuya açık genel bilgidir; aşamalı makine planlaması ve çok ekipli saha koordinasyonu firmamızın kendi montaj pratiğidir.",
    },

    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Balıkesir’in Silo Sahalarında ve Açık Tarım Tesislerinde Platform Kiralama",
        giris:
            "Balıkesir’in tahıl üretim kapasitesi, hasat sonrası ürünün depolandığı silo sahalarında somutlaşır; bu sahalar genellikle tesisin kapalı bölümlerinden ayrı, açık havada duran dikey yapılardır ve erişim ihtiyacı da farklı bir karaktere sahiptir. Silo gövdesi, üst kapak, dolum ağzı ve havalandırma bacası gibi noktalar zeminden yüksekte ama kapalı bir bina korumasının dışındadır — rüzgâr, toprak zemin ve dolum kamyonu trafiği burada belirleyici üç unsurdur. Aynı sahada bazen birden fazla silo yan yana dizilir ve her birinin farklı bir dolum ve boşaltım takvimi vardır. Bu sayfada, Balıkesir genelindeki açık tarım ve silo sahalarında platform kiralamayı zemin ve rüzgâr koşulları, dolum kamyonu trafiği ve hasat sonrası yoğun bakım penceresi üzerinden anlatıyoruz.",
        maddeler: [
            {
                baslik: "Açık sahada zemin türü ve taşıma kapasitesi",
                metin:
                    "Silo sahaları çoğu zaman beton değil sıkıştırılmış toprak veya çakıl zemin üzerine kuruludur; bu zemin kuru havada makineyi rahatlıkla taşırken yağış sonrası yumuşayabilir. Makinenin konumlanacağı noktanın zemin durumu her seferinde ayrıca değerlendirilir; şüpheli bir zeminde ıslak kontrol yapılmadan ağır makine yönlendirilmez.",
            },
            {
                baslik: "Rüzgâr koşullarının yüksekte çalışmaya etkisi",
                metin:
                    "Açık sahada, bina koruması olmadığı için rüzgâr yüksekte çalışan bomlu platformların önemli bir kısıtıdır. Belirli bir rüzgâr hızının üzerinde bomlu makineyle çalışma güvenli değildir ve bu sınır operatör tarafından sahada ölçülerek uygulanır. Rüzgârlı günlerde iş ertelenebilir; bu bizim taviz vermediğimiz bir güvenlik kuralıdır.",
            },
            {
                baslik: "Dolum ağzı ve havalandırma bacası bakımı",
                metin:
                    "Silo tepesindeki dolum ağzı ve havalandırma bacası, düzenli kontrol gerektiren noktalardır; kapak contası, seviye sensörü ve havalandırma filtresi bu kotta bulunur. Sabit merdivenle erişim mümkün olsa da sık tekrarlanan bakım işlerinde bomlu platform daha hızlı ve daha az yorucu bir alternatiftir. Silo çevresindeki zemin ve dolum kamyonu manevra alanı önceden değerlendirilir.",
            },
            {
                baslik: "Dolum kamyonu trafiğiyle çakışmayan çalışma saati",
                metin:
                    "Hasat sonrası dönemde silo sahasına dolum kamyonları sık aralıklarla girer ve bu trafiğin yoğun olduğu saatlerde platformun sahada konumlanması hem makinenin hem kamyonun manevrasını zorlaştırır. Çalışma saatini kamyon trafiğinin azaldığı dilime yazarız; bu koordinasyonu saha sorumlusuyla gün öncesinden yaparız.",
            },
            {
                baslik: "Hasat sonrası yoğun bakım penceresinde erken planlama",
                metin:
                    "Silo sahalarındaki planlı bakım işleri genellikle hasat sonrası dolum yoğunluğunun azaldığı döneme yazılır ve bu dönemde bölgedeki talep aynı haftalara yığılır. Tarihini erken bildiren tesis makineyi bulur, geç bildiren sıraya girer; bu yüzden yıllık bakım takvimini mümkünse sezon başında bizimle paylaşmanızı öneririz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Silo sahasında erişim türüne göre planlama",
                paragraflar: [
                    "Balıkesir’deki açık silo sahalarında karşılaştığımız erişim türlerini ve belirleyici unsuru aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["İş", "Konum", "Uygun sınıf", "Belirleyici unsur"],
                    satirlar: [
                        ["Kapak, sensör bakımı", "Silo tepesi", "Zeminden bomlu", "Rüzgâr hızı"],
                        ["Havalandırma filtresi", "Silo tepesi", "Zeminden bomlu", "Zemin taşıma kapasitesi"],
                        ["Gövde kaynak/onarım", "Silo gövdesi orta kot", "Eklemli bomlu", "Dolum kamyonu trafiği"],
                        ["Dolum ağzı bakımı", "Silo üst yan", "Bomlu, kısa erişim", "Kamyon manevra alanı"],
                        ["Elevatör bağlantı hattı", "Silo-elevatör arası", "Zeminden bomlu", "Yatay mesafe"],
                    ],
                },
            },
            {
                baslik: "Rüzgâr ve hava koşullarında güvenlik sınırı",
                paragraflar: [
                    "Açık sahada bomlu platform kullanımı, üretici tarafından belirlenen rüzgâr hızı sınırına tabidir; bu sınır aşıldığında sepetin savrulma riski artar ve iş güvenli değildir. Operatörümüz sahada rüzgârı ölçer ve sınırın üzerindeyse işi ertelemekten çekinmez, bu bizim taviz vermediğimiz bir kuraldır.",
                    "Rüzgârlı günlerde işin tamamen iptal edilmesi yerine, mümkünse günün daha sakin bir saatine ertelenmesi denenir. Hasat sonrası yoğun dönemde bu esneklik özellikle değerlidir; bu yüzden bakım tarihlerini planlarken bir-iki günlük yedek pencere bırakmanızı öneririz.",
                ],
            },
            {
                baslik: "Hasat sonrası pencerede işleri sıralamak",
                paragraflar: [
                    "Hasat sonrası bakım penceresi kısa olduğu için tesisler bu haftalara olabildiğince çok kalem sığdırmak ister. Doğru sıralama, kalemleri önce ekipman sınıfına, sonra silo konumuna göre gruplamaktır — aynı bölgeden erişilebilen işler arka arkaya yapılır, konum değiştirmek gerektiğinde yeni nokta ve ona ait kalem listesi zaten hazırdır.",
                    "İkinci konu malzemedir; beklenen bir yedek parça yolda ise o kalem için ayrılan gün boşa gider. Bu yüzden takvim kurulurken her kalemin malzeme durumunu da sorarız, hazır olmayan işler listenin sonuna alınır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Silo sahamızın zemini toprak; makine batırmadan çalışabilir mi?",
                cevap:
                    "Kuru havada çoğu toprak veya çakıl zemin makineyi güvenle taşır, ancak yağış sonrası zemin yumuşayabilir. Konumlanma öncesi zemini kontrol ederiz; şüpheli görünüyorsa makineyi daha sert bir noktaya alıp oradan hedefe uzanmayı tercih ederiz. Zemin gerçekten uygun değilse iş, koşul düzelene kadar ertelenir; bu, makinenin saplanmasını önleyen bir güvenlik kuralıdır.",
            },
            {
                soru: "Rüzgârlı bir günde işi iptal mi ediyorsunuz, yoksa erteliyor musunuz?",
                cevap:
                    "Mümkünse erteleriz. Rüzgâr genellikle gün içinde değişir; sabah yüksek olan hız öğleden sonra düşebilir. Operatörümüz sahada rüzgârı ölçer ve güvenli aralığa girdiğinde işi tamamlar. Eğer gün boyunca rüzgâr yüksek kalırsa iş bir sonraki güne ertelenir; bu durumda sizi anında bilgilendiririz ve yeni tarihi birlikte belirleriz.",
            },
            {
                soru: "Silo tepesindeki bakımı sabit merdivenle mi yoksa platformla mı yapmalıyız?",
                cevap:
                    "Tek seferlik küçük bir kontrol için mevcut sabit merdiveniniz yeterli olabilir. Ancak düzenli tekrarlanan bakım, uzun süren bir işlem veya taşınması gereken malzeme varsa bomlu platform hem daha güvenli hem daha hızlıdır. Hangi yöntemin sizin durumunuz için daha uygun olduğunu işin sıklığı ve süresine göre birlikte değerlendiririz.",
            },
            {
                soru: "Dolum kamyonlarının geldiği saatlerde platform çalışabilir mi?",
                cevap:
                    "Tercih etmeyiz, çünkü iki büyük aracın aynı dar sahada manevra etmesi hem platformun hem kamyonun hareketini zorlaştırır. Çalışma saatini kamyon trafiğinin azaldığı dilime yazarız; bunun için saha sorumlusundan günlük dolum programını önceden alırız. Trafik yoğunluğu öngörülemiyorsa, işi sahaya vardığımızda anlık değerlendirip en uygun aralığa kaydırırız.",
            },
            {
                soru: "Hasat sonrası bakım için ne zaman randevu almalıyız?",
                cevap:
                    "Mümkünse hasat sezonu bitmeden birkaç hafta önce. Bölgedeki tesislerin çoğu aynı dönemde boşaldığı için talep birkaç haftaya yığılır ve son dakika talepleri sıraya girer. Yıllık bakım takviminizi sezon başında bizimle paylaşırsanız, park planımızı buna göre kurar ve tarihinizi garanti altına alırız.",
            },
            {
                soru: "Birden fazla siloda aynı gün iş yapabilir misiniz?",
                cevap:
                    "Evet, sahalar birbirine yakınsa ve aynı ekipman sınıfı yeterliyse tek makineyle sırayla birden fazla siloda çalışabiliriz. Verimli olması için işleri önce ekipman sınıfına, sonra konuma göre gruplarız. Silolar arasında farklı erişim mesafesi veya farklı sınıf gerekiyorsa bunu keşif sonrası netleştirir, gün programını ona göre kurarız.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in tahıl üretim kapasitesine bağlı açık silo sahalarının bulunduğu ve hasat sonrası dönemde bakım talebinin yoğunlaştığı kamuya açık genel bilgidir; zemin kontrolü, rüzgâr sınırı ve kamyon trafiği koordinasyonu firmamızın kendi saha pratiğidir.",
    },

    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Balıkesir’in Tesis Dışı Aydınlatma ve Enerji Hattı Bakımına Platform Kiralama",
        giris:
            "Balıkesir’deki gıda ve tarım işleme tesislerinin enerji ihtiyacı, proses ekipmanının içindeki pano ve motorlarla sınırlı kalmaz; tesis dışında da trafo çevresi, avlu aydınlatma direği, kabul rampası saçak altı ve giriş tabelası gibi düzenli bakım isteyen noktalar bulunur. Bu noktaların ortak özelliği, proses salonunun aksine açık havada, çoğu zaman araç trafiğinin de geçtiği alanlarda konumlanmasıdır. Bir aydınlatma direğinin lambası değiştirilirken avlu trafiği tamamen durdurulamaz, bir trafo çevresinde çalışırken enerji kesintisi tesisin onayı olmadan yapılamaz. Bu sayfada, Balıkesir genelindeki tesislerin dış aydınlatma ve enerji hattı bakımında platform kiralamayı enerji kesintisi koordinasyonu, avlu trafiğiyle çakışmama ve mevsimsel aydınlatma ihtiyacı üzerinden anlatıyoruz.",
        maddeler: [
            {
                baslik: "Trafo ve enerji dağıtım hattı çevresinde çalışma",
                metin:
                    "Trafo binası çevresi ve orta gerilim hattı yakınındaki işler, tesisin elektrik sorumlusunun onayı olmadan başlamaz; hangi hatların enerjili olduğu ve güvenli mesafenin ne kadar olduğu yazılı olarak teyit edilir. Bu teyit gelmeden operatörümüz sepeti bu bölgeye yaklaştırmaz, çünkü enerjili hatta yaklaşma riski hiçbir işin karşılığı olamayacak kadar büyüktür.",
            },
            {
                baslik: "Avlu ve kabul rampası aydınlatma direklerinde bakım",
                metin:
                    "Avlu aydınlatma direkleri genellikle araç manevra alanının içinde veya kenarında durur; bir lamba değişimi için direğin dibine makine konumlandırılacağında avlu trafiğinin o bölümü geçici olarak kapatılır. Trafiğin en az olduğu saat, tesisin günlük programına göre önceden belirlenir ve kapatma süresi mümkün olduğunca kısa tutulur.",
            },
            {
                baslik: "Saçak altı ve giriş tabelası bakımı",
                metin:
                    "Kabul rampası saçağı ve giriş tabelası, tesisin dışarıdan görünen yüzüdür ve bakımsız kaldığında ilk fark edilen noktalardır. Bu işler genellikle küçük ama yüksekte olduğu için kompakt bomlu bir platform yeterlidir; iş süresi kısa olsa da makinenin konumlandığı alan trafik açısından değerlendirilir.",
            },
            {
                baslik: "Mevsimsel aydınlatma ihtiyacının artışı",
                metin:
                    "Kış aylarında günün kısalması, tesislerin avlu ve giriş aydınlatmasını daha yoğun kullanmasına yol açar ve bu dönemde arızalı armatür sayısı da artar. Bölgedeki tesislerin çoğu bu ihtiyacı sonbahar sonunda fark eder ve talep bu döneme yığılır; erken planlanan bir kontrol turu, kışın ortasında ani arıza yaşamayı önler.",
            },
            {
                baslik: "Çok noktalı aydınlatma turu için tek çıkışta planlama",
                metin:
                    "Bir tesiste birden fazla aydınlatma noktası aynı anda arızalı veya kontrole ihtiyaç duyuyorsa, bunları tek bir platform çıkışında sırayla tamamlamak hem zaman hem maliyet açısından avantajlıdır. Noktaları önceden listeleyip güzergâhı buna göre kurarız; bu, her nokta için ayrı bir çağrı yapılmasını önler.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dış aydınlatma ve enerji bakımı senaryoları",
                paragraflar: [
                    "Balıkesir’deki tesislerin dışında karşılaştığımız enerji ve aydınlatma bakım türlerini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Nokta", "Tipik iş", "Öncelikli kısıt", "Ek koordinasyon"],
                    satirlar: [
                        ["Trafo çevresi", "Bakım, kontrol", "Enerji kesintisi teyidi", "Elektrik sorumlusu onayı"],
                        ["Avlu direği", "Lamba, kablo değişimi", "Trafik kapatma süresi", "Manevra alanı boşaltma"],
                        ["Kabul rampası saçağı", "Armatür, kamera bakımı", "Rampa trafiği", "Tanker giriş-çıkış saati"],
                        ["Giriş tabelası", "Aydınlatma, montaj", "Yol kenarı güvenliği", "Kaldırım/yol izni"],
                        ["Çok noktalı tur", "Birden fazla arıza", "Güzergâh sırası", "Liste önceden hazırlanmış olmalı"],
                    ],
                },
            },
            {
                baslik: "Enerji kesintisi gerektiren işlerde koordinasyon",
                paragraflar: [
                    "Trafo veya orta gerilim hattı yakınındaki bazı işler, güvenli çalışma için kısa süreli enerji kesintisi gerektirebilir. Bu kesinti tesisin proses akışını etkileyebileceği için, kesinti talebi işten günler önce tesis yönetimine iletilir ve uygun bir pencere birlikte belirlenir. Kesinti süresi mümkün olduğunca kısa tutulacak şekilde iş öncesinde tüm hazırlık tamamlanır — makine konumlandırılır, malzeme hazır edilir, yalnızca kesinti gerektiren adım kesinti penceresine bırakılır.",
                    "Kesinti onayı ve teyidi tesisin elektrik sorumlusundan yazılı alınmadan işe başlanmaz. Bu, bizim değil elektrik güvenliğinin temel kuralıdır ve pazarlığa açık değildir.",
                ],
            },
            {
                baslik: "Kış öncesi kontrol turunun avantajı",
                paragraflar: [
                    "Sonbahar sonunda yapılan bir aydınlatma kontrol turu, kış boyunca ani armatür arızası yaşama riskini önemli ölçüde azaltır. Bu turda tesisin tüm dış aydınlatma noktaları tek bir çıkışta gezilir, arızalı veya ömrünü tamamlamış armatürler tespit edilir ve gerekiyorsa aynı çıkışta değiştirilir.",
                    "Bu turu erken planlayan tesisler, kışın ortasında acil çağrı yapma ihtiyacını büyük ölçüde azaltır; acil kış çağrılarında ise hava koşulları (buzlanma, yoğun yağış) makinenin sahaya ulaşmasını ve güvenli çalışmasını zorlaştırabileceği için, mümkünse önleyici turu tercih etmenizi öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Trafo çevresinde çalışmak için enerji kesilmesi gerekiyor mu?",
                cevap:
                    "İşin türüne bağlı; bazı kontrol işleri güvenli mesafe korunarak enerji kesilmeden yapılabilir, bazı bakım işleri ise kısa süreli kesinti gerektirir. Hangisinin geçerli olduğunu tesisin elektrik sorumlusuyla birlikte önceden netleştiririz. Kesinti gerekiyorsa bu talebi günler önce iletir, uygun pencereyi birlikte belirleriz; kesinti onayı yazılı alınmadan işe başlamayız.",
            },
            {
                soru: "Avlu aydınlatma direğinin bakımı sırasında araç trafiğini tamamen mi kapatıyorsunuz?",
                cevap:
                    "Genellikle hayır, sadece direğin bulunduğu bölümü geçici olarak kapatırız ve trafiğin en az olduğu saate göre planlarız. Avlunun tamamını kapatmak yerine, makinenin konumlandığı ve bomun hareket edeceği dar bir alanı işaretleriz. Trafik yoğunluğu yüksekse çalışma saatini tesisin günlük programına göre erken veya geç bir dilime alırız.",
            },
            {
                soru: "Kabul rampasındaki kamerayı tanker trafiği sürerken değiştirebilir misiniz?",
                cevap:
                    "Tercih etmeyiz; rampa trafiği yoğunken hem tanker manevrası hem platformun konumlanması zorlaşır. Bu tür işleri rampanın boş olduğu bir dilime yazarız ve alanı o süre için resmen kapatırız. Tanker programını saha sorumlusundan önceden alırız, bu sayede işi rampa trafiğini kesmeden tamamlarız.",
            },
            {
                soru: "Kış öncesi kontrol turunu ne zaman planlamalıyız?",
                cevap:
                    "Sonbahar sonunda, hava koşulları henüz zorlaşmadan önce öneririz. Bu turda tüm dış aydınlatma noktalarını tek bir çıkışta geziyoruz, arızalı armatürleri tespit edip mümkünse aynı çıkışta değiştiriyoruz. Erken planlanan bu tur, kışın ortasında buzlanma veya yoğun yağış koşullarında acil çağrı yapma ihtiyacını azaltır.",
            },
            {
                soru: "Birden fazla aydınlatma noktamız arızalı; hepsini tek seferde mi hallediyorsunuz?",
                cevap:
                    "Mümkünse evet, bu hem sizin hem bizim için daha verimlidir. Noktaları önceden listelerseniz güzergâhı buna göre kurarız ve tek platform çıkışında sırayla tamamlarız. Bu, her nokta için ayrı çağrı yapmanızı önler ve toplam maliyeti düşürür. Listeyi ne kadar erken paylaşırsanız güzergâh planlaması o kadar verimli olur.",
            },
            {
                soru: "Giriş tabelamızın aydınlatmasını yol kenarında değiştireceğiz; trafik güvenliği nasıl sağlanıyor?",
                cevap:
                    "Yol kenarında çalışırken makinenin konumlandığı alan görünür şekilde işaretlenir ve gerekiyorsa geçici uyarı ekipmanı kullanılır. Kaldırım veya yol kullanımı için belediye izni gerekiyorsa bunu önceden netleştiririz. İş, yol trafiğinin en az olduğu saatlere göre planlanır ve mümkünse trafiği tamamen kesmeyecek bir konumlanma tercih edilir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’deki tesislerin dışında trafo, avlu aydınlatması, kabul rampası ve giriş tabelası gibi düzenli bakım gerektiren dış donanımların bulunduğu ve kış aylarında aydınlatma ihtiyacının arttığı kamuya açık genel bilgidir; kesinti koordinasyonu ve trafikle çakışmama planlaması firmamızın kendi saha pratiğidir.",
    },

    "hizmet:operatorlu-platform-kiralama": {
        h1: "Balıkesir’in Gıda ve Tarım Tesislerinde Operatörlü / Operatörsüz Platform Kiralama",
        giris:
            "Balıkesir’deki bir tesisin platform kiralarken karşılaştığı ilk soru genellikle operatörün kimin tarafından sağlanacağıdır ve bu seçim, işin türüne göre değişen bir karardır. Kendi bünyesinde yüksekte çalışma platformu kullanma belgesine sahip personeli olan bir tesis, operatörsüz kiralamayı tercih edip makineyi kendi ekibiyle kullanabilir. Ancak proses salonu içindeki gıda güvenliği kurallarını, tank aralarındaki geometriyi veya rüzgârlı bir silo sahasında güvenli çalışma sınırını bilmeyen bir operatör için bu, riskli bir tercih olabilir. Operatörlü kiralamada ise makineyi biz süreriz ve tesisin size özel kurallarını (hijyen geçişi, sıcak iş izni, rüzgâr sınırı) sahada uygulayan kişi de biz oluruz. Bu sayfada, Balıkesir genelindeki gıda ve tarım tesislerinde bu iki seçenek arasındaki farkı, belge kontrolünün nasıl yapıldığını ve hangi iş türünde hangisinin önerildiğini anlatıyoruz.",
        maddeler: [
            {
                baslik: "Operatörsüz kiralamada belge ve yeterlilik kontrolü",
                metin:
                    "Operatörsüz kiralamada, makineyi kullanacak personelin yüksekte çalışma platformu operatörlüğü belgesi teslim öncesi kontrol edilir; belgesiz personele makine teslim edilmez. Teslim sırasında makinenin temel kullanım noktaları operatöre gösterilir, ancak proses ortamına özgü kurallar (hijyen, sıcak iş izni) tesisin kendi sorumluluğundadır.",
            },
            {
                baslik: "Operatörlü kiralamada saha kurallarının uygulanması",
                metin:
                    "Operatörlü kiralamada makineyi süren kişi bizim personelimizdir ve tesisin özel kurallarını (tank aralığı geometrisi, hijyen geçiş prosedürü, rüzgâr sınırı) sahada bilerek uygular. Bu, özellikle proses salonu içi veya açık silo sahası gibi kendine özgü riskler taşıyan ortamlarda tercih edilir; operatörümüz bu tür ortamlarda tekrarlanan deneyime sahiptir.",
            },
            {
                baslik: "Kısa süreli işlerde operatörlü tercih nedeni",
                metin:
                    "Bir günlük veya birkaç saatlik işlerde, tesisin kendi personelini bu kısa iş için eğitmesi veya görevlendirmesi verimsiz olabilir; bu durumlarda operatörlü kiralama daha pratik bir seçenektir. Operatörümüz sahaya geldiğinde işin ne olduğunu ve tesisin kurallarını önceden bilerek başlar, bu da kısa işlerde zaman kazandırır.",
            },
            {
                baslik: "Uzun süreli sahada kalan makinede operatörsüz avantajı",
                metin:
                    "Birkaç haftayı bulan montaj veya bakım projelerinde, tesisin kendi eğitimli personeli varsa operatörsüz kiralama daha ekonomiktir; personel işin gün içindeki değişen ihtiyaçlarına göre makineyi esnek kullanabilir. Bu tercih, personelin belgesinin geçerli ve makinenin sınıfına uygun olması şartına bağlıdır.",
            },
            {
                baslik: "İki seçenek arasında geçiş ve karma kullanım",
                metin:
                    "Bazı tesisler işin türüne göre iki seçeneği bir arada kullanır — rutin küçük işler için kendi personeliyle operatörsüz, karmaşık veya riskli işler için bizim operatörümüzle çalışır. Bu karma kullanım sözleşmede net tanımlanır; hangi iş türünde hangi seçeneğin geçerli olduğu önceden yazılı hâle getirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş türüne göre operatör seçimi",
                paragraflar: [
                    "Balıkesir’deki tesislerde karşılaştığımız iş türlerine göre operatörlü/operatörsüz tercihini aşağıdaki tabloda özetledik.",
                ],
                tablo: {
                    basliklar: ["İş türü", "Önerilen seçenek", "Gerekçe", "Şart"],
                    satirlar: [
                        ["Kısa süreli tekil iş", "Operatörlü", "Eğitim/görevlendirme verimsiz", "—"],
                        ["Proses salonu içi hassas iş", "Operatörlü", "Geometri ve hijyen bilgisi", "Operatör deneyimi"],
                        ["Uzun süreli montaj/bakım", "Operatörsüz", "Esnek kullanım, maliyet avantajı", "Geçerli belge"],
                        ["Rutin tekrarlanan küçük iş", "Operatörsüz", "Tesis personeli zaten eğitimli", "Belge kontrolü"],
                        ["Rüzgârlı açık saha (silo)", "Operatörlü", "Güvenlik sınırı deneyimi", "—"],
                    ],
                },
            },
            {
                baslik: "Belge kontrolünün pratikte işleyişi",
                paragraflar: [
                    "Operatörsüz kiralamada teslim öncesi personelin yüksekte çalışma platformu operatörlüğü belgesi istenir ve makinenin sınıfına (makaslı, eklemli, bomlu) uygun olup olmadığı kontrol edilir. Belge süresi dolmuşsa veya makine sınıfı belgeyle uyuşmuyorsa teslim yapılmaz; bu, hem yasal hem güvenlik gerekliliğidir ve tavizsiz uygulanır.",
                    "Belge kontrolü teslim gününde son dakikaya bırakılmamalıdır; belgesi olmayan bir personelin sahada olduğu son anda anlaşılırsa iş gecikir. Bu yüzden operatörsüz taleplerde belge bilgisini randevu aşamasında önceden isteriz.",
                ],
            },
            {
                baslik: "Operatörlü işlerde sorumluluk ve iletişim",
                paragraflar: [
                    "Operatörlü kiralamada makineyi süren kişi bizim personelimiz olduğu için, sahadaki güvenlik uygulaması ve makine kullanımı sorumluluğu bizde kalır. Tesisin ortam kurallarını (hijyen, izin prosedürü) önceden bize iletmesi, operatörümüzün bu kurallara sahada uymasını sağlar.",
                    "İş sırasında tesis tarafında bir sorumlu kişi bulunması, özellikle proses salonu içi işlerde önerilir; bu kişi, operatörümüzün hedef noktayı doğru anlamasına ve hijyen geçişi gibi adımların zamanında yapılmasına yardımcı olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Kendi personelimiz var ama belgesi eski; yine de operatörsüz kiralayabilir miyiz?",
                cevap:
                    "Belgenin geçerlilik süresi dolmuşsa operatörsüz teslim yapamayız; bu yasal bir gerekliliktir ve tavizsiz uygulanır. Personelinizin belgesini yenilemesini bekleyebilir ya da bu süre zarfında işinizi operatörlü seçenekle çözebiliriz. Hangisi sizin takviminize uyuyorsa onu öneririz; belge yenileme süreci genellikle işinizin acil olduğu durumlarda operatörlü seçeneği daha pratik kılar.",
            },
            {
                soru: "Proses salonu içindeki hassas bir iş için hangi seçeneği önerirsiniz?",
                cevap:
                    "Genellikle operatörlü. Tank aralarındaki geometri, hijyen geçiş prosedürü ve iz bırakmama disiplini, tekrarlanan deneyim gerektiren konulardır ve bizim operatörümüz bu ortamlarda düzenli çalışır. Tesisinizin kendi personeli bu tür ortamda deneyimliyse operatörsüz de mümkündür, ama ilk kez böyle bir ortamda çalışacaksa operatörlü seçeneği öneririz.",
            },
            {
                soru: "Operatörlü kiralamada operatörünüz bizim tesisin kurallarını nasıl öğreniyor?",
                cevap:
                    "İşten önce sizden ortam kurallarını (hijyen geçişi, sıcak iş izni, giriş prosedürü) yazılı veya sözlü olarak alırız ve operatörümüzü bu kurallarla sahaya göndeririz. Sahada ayrıca sizin bir sorumlunuzun bulunması, ilk seferde özellikle faydalıdır; bu kişi operatörümüzün hedefi doğru anlamasına yardımcı olur. Tekrarlanan işlerde bu bilgi bizde kayıtlı kalır ve her seferinde yeniden anlatmanıza gerek kalmaz.",
            },
            {
                soru: "Uzun süreli bir montaj projesinde operatörsüz mü daha ekonomik olur?",
                cevap:
                    "Kendi eğitimli personeliniz varsa genellikle evet, çünkü personel işin gün içindeki değişen ihtiyaçlarına göre makineyi esnek kullanabilir ve ayrı bir operatör maliyeti oluşmaz. Ancak personeliniz yoksa veya proje boyunca sürekli müsait değilse, operatörlü seçenek daha güvenilir bir sonuç verir. İkisini birlikte hesaplar, hangisinin sizin için daha uygun olduğunu söyleriz.",
            },
            {
                soru: "Rüzgârlı bir silo sahasında operatörsüz çalışmak riskli mi?",
                cevap:
                    "Personeliniz rüzgâr sınırı konusunda deneyimli değilse riskli olabilir; bomlu makinelerde güvenli rüzgâr hızı sınırı vardır ve bu sınırı sahada doğru değerlendirmek deneyim gerektirir. Bu tür açık saha işlerinde operatörlü seçeneği öneririz, çünkü operatörümüz bu sınırı düzenli olarak uygular ve gerektiğinde işi ertelemekten çekinmez.",
            },
            {
                soru: "Karma kullanım istiyoruz — bazı işler operatörlü, bazıları operatörsüz; bu mümkün mü?",
                cevap:
                    "Evet, birçok tesisle bu şekilde çalışıyoruz. Hangi iş türünde hangi seçeneğin geçerli olacağını sözleşmede önceden net tanımlarız — örneğin rutin küçük işler operatörsüz, proses salonu içi veya açık saha işleri operatörlü olabilir. Bu ayrımı işin risk düzeyine göre birlikte belirleriz ve gerektiğinde güncelleriz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Yüksekte çalışma platformu operatörlüğü için geçerli belge zorunluluğunun mevzuat gereği olduğu kamuya açık genel bilgidir; operatörlü/operatörsüz karar kriterleri ve saha kuralı aktarımı firmamızın kendi uygulamasıdır.",
    },

    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Balıkesir Genelinde Çok Noktalı Tesis Rotasında Bakım Platformu Kiralama",
        giris:
            "Balıkesir’in tarım ve gıda üretim coğrafyası, Susurluk’un süt tesislerinden Gönen’in değirmenlerine, Edremit ve Burhaniye’nin zeytinyağı işletmelerinden merkez ilçenin dolum tesislerine kadar geniş bir alana yayılır. Birden fazla şubesi veya tesisi olan bir işletme grubu için, her tesise ayrı ayrı makine ve nakliye ayarlamak yerine tek bir rotada birden fazla noktayı gezen bir çalışma programı hem zaman hem maliyet açısından avantajlıdır. Bu tür bir rota, tek bir tesisteki işten farklı bir planlama ister: her durağın kendi adresi, zemin durumu, kot ve malzeme listesi ayrı kartlanır, duraklar güvenli bir sıraya dizilir ve bir durak teslim edilmeden diğerine geçilmez. Bu sayfada, Balıkesir genelinde birden fazla tesise dağılmış bakım işlerini tek bir çıkışta nasıl planladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Her durağın ayrı kartlanması",
                metin:
                    "Çok noktalı bir rotada her tesisin adresi, yaklaşım güzergâhı, zemin durumu, hedef kotu ve kullanılacak malzeme ayrı bir kayıt olarak tutulur. Bu ayrım, bir durakta karşılaşılan bir belirsizliğin diğer durakları etkilemesini önler; her tesis kendi özel koşullarıyla değerlendirilir, aynı makine sınıfının hepsine gerçekten uygun olduğu önceden doğrulanır.",
            },
            {
                baslik: "Güvenli rota sıralaması",
                metin:
                    "Duraklar coğrafi yakınlığa göre değil, güvenli ve verimli bir sıraya göre dizilir — bir tesisin işi tamamlanıp teslim alınmadan sıradaki tesise geçilmez. Bu sıralama, aynı gün içinde farklı ortam türlerinin (proses salonu, açık silo sahası, kazan dairesi) art arda gelmesi durumunda ekipmanın hazırlık ihtiyacını da göz önünde bulundurur.",
            },
            {
                baslik: "Hazır olmayan durağın programı bekletmemesi",
                metin:
                    "Rotadaki bir tesis işe hazır değilse — malzeme eksik, hedef alan erişilebilir değil — bu durak bütün programı bekletmez, sonraki servise taşınır. Diğer duraklar planlandığı gibi devam eder. Bu kural, tek bir tesisteki aksaklığın rotanın tamamını geciktirmesini önler.",
            },
            {
                baslik: "Farklı tesis tiplerinin aynı rotada birleştirilmesi",
                metin:
                    "Bir günlük rotada süt tesisindeki bir platform işi, silo sahasındaki bir kontrol ve zeytinyağı işletmesindeki bir aydınlatma bakımı bir arada bulunabilir; bu tesis tipleri farklı ekipman sınıfı gerektiriyorsa, aynı makinenin hepsine uygun olup olmadığı önceden değerlendirilir. Uygun değilse ya rota ekipman sınıfına göre bölünür ya da farklı iş için ayrı sevkiyat planlanır.",
            },
            {
                baslik: "Belirli bir güne kilitli randevuların rotayı sınırlaması",
                metin:
                    "Rotadaki bir tesis kesin bir gün ve saat talep ediyorsa, kapasite buna göre ayrı değerlendirilir. Ortak rota modelinde birkaç günlük esneklik daha fazla tesisi tek çıkışta birleştirmeyi mümkün kılar; kesin tarih zorunluysa o iş rotadan ayrılıp tekil sevkiyat olarak planlanır ve bu, maliyeti de buna göre değiştirir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çok noktalı rota planlama unsurları",
                paragraflar: [
                    "Balıkesir genelindeki çok tesisli bir rotayı kurarken değerlendirdiğimiz unsurları aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Unsur", "Neden önemli", "Nasıl ele alınır", "Sonuç"],
                    satirlar: [
                        ["Durak kartı", "Her tesis farklı koşulda", "Adres, zemin, kot ayrı kayıt", "Belirsizlik azalır"],
                        ["Sıralama", "Güvenli geçiş gerekir", "Teslim edilmeden geçilmez", "Kesintisiz akış"],
                        ["Hazırlık durumu", "Malzeme/erişim eksik olabilir", "Hazır olmayan durak ertelenir", "Rota gecikmez"],
                        ["Ekipman uyumu", "Farklı tesis tipi farklı sınıf ister", "Önceden doğrulama", "Doğru makine gider"],
                        ["Tarih esnekliği", "Kesin randevu kapasiteyi sınırlar", "Esnek/kesin ayrımı baştan yapılır", "Fiyat netleşir"],
                    ],
                },
            },
            {
                baslik: "Rota verimliliğinin maliyete yansıması",
                paragraflar: [
                    "Tek bir tesis için ayrı sevkiyat planlandığında nakliye maliyeti o tesise tam olarak yüklenir. Aynı makine güzergâh üzerindeki birden fazla tesise uğradığında ise bu maliyet duraklar arasında paylaşılır ve her tesis için ödenen bedel düşer. Bu avantajdan yararlanmak için tesislerin tarih konusunda bir-iki günlük esneklik tanıması yeterlidir.",
                    "İkinci avantaj koordinasyon zamanıdır; tek bir rota planlaması, birden fazla ayrı randevu ayarlamaktan daha az idari zaman gerektirir. İşletme grubu içindeki tesisler arasında bu koordinasyonu genellikle tek bir sorumlu kişi üzerinden yürütürüz, bu da iletişimi basitleştirir.",
                ],
            },
            {
                baslik: "Rotanın aksadığı durumlarda esneklik",
                paragraflar: [
                    "Bir durakta beklenmedik bir gecikme yaşandığında (örneğin zemin uygun değil, hedef alan erişilebilir değil), bu durak rotanın sonuna alınır veya bir sonraki çıkışa taşınır; diğer duraklar planlandığı gibi devam eder. Bu esneklik, tek bir aksaklığın tüm günü kilitlemesini önler.",
                    "Rota boyunca hava koşulları değişirse (örneğin bir durakta rüzgâr yüksekse) o durak için bomlu iş ertelenir, ancak rotanın diğer duraklarındaki farklı türde işler devam edebilir. Bu tür kararları operatörümüz sahada anlık değerlendirir ve durumu size bildirir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Üç farklı ilçedeki tesisimizi tek seferde gezebilir misiniz?",
                cevap:
                    "Tesisler güzergâh üzerine makul bir mesafede diziliyorsa ve tarih konusunda bir-iki günlük esneklik varsa evet, tek bir rotada birleştirebiliriz. Her tesisin işini önce kendi koşullarına göre ayrı kartlarız — zemin, kot, malzeme — sonra güvenli bir sıraya diziyoruz. Kesin gün ve saat gerektiren bir tesis varsa onu rotadan ayırıp tekil sevkiyat olarak planlarız.",
            },
            {
                soru: "Rotadaki bir tesiste iş uzarsa sonraki tesisler nasıl etkilenir?",
                cevap:
                    "Programda bir miktar pay bırakılır, ama beklenenden fazla uzarsa sıradaki durak(lar) gün içinde geriye kayabilir veya bir sonraki çıkışa taşınabilir. Bu ihtimali baştan konuşuruz ve kesin saat gerektiren bir tesis varsa rotanın başına ya da ayrı bir sevkiyata alırız. Gecikme yaşanırsa etkilenen tesisleri anında bilgilendiririz.",
            },
            {
                soru: "Farklı tesislerimizde farklı makine sınıfı gerekiyor; tek çıkışta hepsi mümkün mü?",
                cevap:
                    "Aynı makine hepsine uygun değilse, rotayı ekipman sınıfına göre bölmemiz gerekebilir — örneğin proses salonu içi için akülü eklemli, açık silo sahası için bomlu makine. Bu durumda ya iki farklı makine aynı gün farklı tesislere gider ya da rota iki güne yayılır. Hangisinin sizin için daha ekonomik olduğunu önceden hesaplarız.",
            },
            {
                soru: "Rotadaki bir tesis işe hazır olmazsa ne oluyor?",
                cevap:
                    "O durak bütün programı bekletmez; sonraki servise taşınır ve diğer duraklar planlandığı gibi devam eder. Hazır olmama durumu (malzeme eksik, alan erişilebilir değil) mümkünse bize önceden bildirilirse, o durağı rotadan çıkarıp programı yeniden düzenleyebiliriz; sahada son anda öğrenilmesi zaman kaybettirir.",
            },
            {
                soru: "Çok noktalı rota, tek tesis için ayrı sevkiyat almaktan ne kadar ucuz oluyor?",
                cevap:
                    "Fark büyük ölçüde nakliye kaleminden gelir; tek makine birden fazla tesise uğradığında bu maliyet duraklar arasında paylaşılır. Kesin bir yüzde vermek zor, çünkü tesisler arası mesafe ve durak sayısı değişkendir; ancak genel eğilim, üç veya daha fazla tesisi birleştiren rotalarda tesis başına maliyetin belirgin biçimde düşmesidir. Sizin tesislerinizin konumuna göre somut bir hesap sunarız.",
            },
            {
                soru: "Rota planlamasını kim, ne zaman yapıyor?",
                cevap:
                    "Rota, tesis listenizi ve her tesisteki iş kalemlerini aldıktan sonra bizim tarafımızdan kurulur; genellikle çıkıştan birkaç gün önce netleştiririz. İşletme grubunuz içinde tek bir sorumlu kişiyle iletişim kurmayı tercih ederiz, bu koordinasyonu basitleştirir. Rota kurulduktan sonra her tesise yaklaşık varış saatini bildiririz; kesin saat taahhüdü isteyen tesisler için bunu ayrıca not ederiz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in tarım ve gıda üretim tesislerinin ilçeler arasında geniş bir coğrafyaya yayıldığı kamuya açık genel bilgidir; durak kartlama, güvenli sıralama ve rota maliyet paylaşımı firmamızın kendi lojistik pratiğidir.",
    },

    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Balıkesir’in Zeytinlik, Tarla ve Silo Sahalarında Zor Zemin Platform Kiralama",
        giris:
            "Balıkesir’in tarım coğrafyasında bir platformun ulaşması gereken nokta, çoğu zaman asfalt bir avlu değil, zeytinlik yamacı, tarla kenarı, silo sahasının çakıl zemini veya hasat sonrası çamurlaşmış bir yoldur. Bu zeminler standart bir makinenin lastik tutuşuna göre değil, tarım aracının veya traktörün geçişine göre şekillenmiştir; eğim, yumuşak toprak ve mevsimsel çamur, erişim ekipmanının sahaya güvenle ulaşıp ulaşamayacağını belirleyen asıl unsurdur. Bu sayfada, Balıkesir genelindeki zeytinlik, tarla kenarı ve açık tarım tesisi sahalarında zor zemin koşullarında platform kiralamayı zemin değerlendirmesi, mevsimsel değişkenlik ve makinenin sahaya güvenle ulaşamadığı durumlarda dürüst alternatif önerme ilkesi üzerinden anlatıyoruz.",
        maddeler: [
            {
                baslik: "Zeminin önceden değerlendirilmesi",
                metin:
                    "Zor zemin taleplerinde iş kabul edilmeden önce zemin türü, eğim ve mevcut nem durumu hakkında bilgi isteriz; mümkünse fotoğraf paylaşılmasını öneririz. Bu ön değerlendirme, sahaya uygun olmayan bir makinenin gönderilip geri çevrilmesini önler ve doğru ekipman sınıfının (dört çeker şasili veya standart) baştan belirlenmesini sağlar.",
            },
            {
                baslik: "Yağış sonrası zemin taşıma kapasitesinin değişmesi",
                metin:
                    "Kuru havada sağlam görünen bir tarla kenarı veya zeytinlik yolu, yağış sonrası birkaç gün içinde taşıma kapasitesini kaybedebilir. Bu değişkenlik, sahaya çıkış günü ayrıca değerlendirilir; operatör zemin görünüşe güvenmez, gerektiğinde basit bir kontrolle zeminin sertliğini test eder. Uygun değilse iş, koşul düzelene kadar ertelenir.",
            },
            {
                baslik: "Eğimli zeytinlik arazide konumlanma",
                metin:
                    "Zeytinlik yamaçlarında makinenin duracağı nokta düz olmalıdır; eğimli bir zeminde bomlu platform güvenli çalışmaz. Bu yüzden hedefe en yakın düz noktayı önceden belirler, oradan yatay uzanımla hedefe ulaşmayı planlarız. Düz nokta hedeften uzaksa daha uzun erişimli bir sınıf gerekebilir.",
            },
            {
                baslik: "Sahaya erişimin mümkün olmadığı durumda dürüst cevap",
                metin:
                    "Bazı sahalarda zemin, eğim veya erişim yolu, mevcut ekipman sınıflarının hiçbiriyle güvenle çalışılamayacak kadar elverişsizdir. Bu durumda makineyi zorlayıp riskli bir denemeye girmek yerine, durumu açıkça söyleriz ve alternatif bir yöntem (örneğin sabit iskele veya farklı bir erişim noktası) önereriz. Sığmayacak veya güvenli çalışamayacak bir makineyi sahaya göndermek kimseye kazandırmaz.",
            },
            {
                baslik: "Hasat sonrası çamurlu yol koşullarında planlama",
                metin:
                    "Hasat döneminde tarla ve zeytinlik yollarında yoğun araç trafiği zemini yumuşatır ve çamurlaşma riskini artırır. Bu dönemde çıkış planlanırken güzergâh üzerindeki yol koşulları önceden sorulur; alternatif bir yol varsa bu tercih edilir, yoksa iş hava koşulunun düzeldiği bir güne ertelenir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Zemin türüne göre değerlendirme",
                paragraflar: [
                    "Balıkesir’in tarım sahalarında karşılaştığımız zemin türlerini ve değerlendirme kriterini aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Zemin türü", "Risk", "Değerlendirme", "Alternatif"],
                    satirlar: [
                        ["Kuru sıkışmış toprak", "Düşük", "Görsel + basit test", "Standart makine"],
                        ["Yağış sonrası toprak", "Yüksek", "Sahada anlık kontrol", "Erteleme veya sert nokta"],
                        ["Eğimli zeytinlik yamacı", "Devrilme riski", "Düz nokta arama", "Yatay uzanımla erişim"],
                        ["Çakıl silo sahası", "Orta", "Zemin sıkışıklığı kontrolü", "Standart makine"],
                        ["Hasat dönemi çamur yolu", "Yüksek", "Güzergâh önceden sorma", "Alternatif yol / erteleme"],
                    ],
                },
            },
            {
                baslik: "Zemin kontrolünün pratikte nasıl yapıldığı",
                paragraflar: [
                    "Sahaya çıkmadan önce mümkünse fotoğraf ve zeminin son yağıştan bu yana geçen gün sayısı gibi bilgiler isteriz. Bu bilgiler, sahaya hangi ekipman sınıfının gönderileceğine dair ilk kararı verir. Sahaya varıldığında operatör zemini görsel olarak değerlendirir ve şüpheli durumlarda basit bir sertlik testi yapar; bu testin sonucu makinenin konumlanacağı noktayı belirler.",
                    "Zemin sınırda ise, makineyi tam hedefin dibine değil daha sert bir noktaya konumlandırıp oradan yatay uzanımla çalışmayı tercih ederiz. Bu, zeminin taşıma sınırını zorlamadan işi tamamlamanın en güvenli yoludur.",
                ],
            },
            {
                baslik: "Sığmayan bir işi dürüstçe reddetmek",
                paragraflar: [
                    "Bazı taleplerde zemin veya erişim yolu, hiçbir ekipman sınıfıyla güvenle çalışılamayacak kadar elverişsizdir. Bu durumda makineyi zorlayıp riskli bir denemeye girmek yerine bunu açıkça söyleriz; bu, hem operatörümüzün hem işletmenizin güvenliği için tavizsiz uyguladığımız bir ilkedir.",
                    "Alternatif olarak farklı bir erişim noktası (örneğin arazinin başka bir kenarından yaklaşım), farklı bir mevsimde tekrar deneme veya sabit iskele gibi seçenekleri konuşuruz. Amacımız işi her ne pahasına olursa olsun yapmak değil, güvenle yapılabilecek bir yol bulmaktır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Zeytinlik yamacımızdaki ağaçların üzerine erişim gerekiyor; platform buraya çıkabilir mi?",
                cevap:
                    "Öncelikle yamacın eğimini ve makinenin duracağı en yakın düz noktayı değerlendirmemiz gerekir; bomlu platformlar eğimli zeminde güvenli çalışmaz. Düz bir nokta hedefe yeterince yakınsa oradan yatay uzanımla erişiriz. Düz nokta çok uzaksa veya hiç yoksa, dürüst cevabımız bu sahada platformla çalışmanın güvenli olmadığıdır; alternatif bir yöntemi birlikte değerlendiririz.",
            },
            {
                soru: "Yağıştan birkaç gün sonra zeminin kuruyup kurumadığını nasıl anlıyorsunuz?",
                cevap:
                    "Kesin bir kural yok, çünkü zeminin kuruma hızı toprak türüne ve güneşlenme durumuna göre değişir. Sahaya vardığımızda operatörümüz zemini görsel olarak değerlendirir ve şüpheli durumlarda basit bir sertlik testi yapar. Zemin hâlâ yumuşaksa makineyi zorlamayız; ya daha sert bir noktaya konumlanır ya da işi erteleriz. Bu değerlendirmeyi sahada anlık yaparız, telefonla kesin söz vermeyiz.",
            },
            {
                soru: "Silo sahamızın çakıl zemini araç ağırlığını kaldırır mı?",
                cevap:
                    "Çoğu çakıl zemin standart makineyi güvenle taşır, ancak zeminin sıkışıklık derecesi ve altındaki dolgu kalitesi değişkenlik gösterebilir. Şüpheli bir bölge varsa sahada kontrol ederiz; taşıma kapasitesi net değilse makineyi daha sağlam görünen bir noktaya konumlandırıp oradan hedefe uzanmayı tercih ederiz.",
            },
            {
                soru: "Hasat döneminde tarla yolumuz çamurlaşıyor; işimizi ne zaman planlamalıyız?",
                cevap:
                    "Mümkünse hasat trafiğinin en yoğun olduğu günlerin dışına planlamanızı öneririz. Güzergâh üzerindeki yol koşullarını çıkıştan önce sorarız; alternatif bir yol varsa onu tercih ederiz. Yol koşulu belirsizse ve alternatif yoksa, güvenli bir zemine ulaşana kadar işi ertelemek, makineyi çamura saplamaktan çok daha ekonomiktir.",
            },
            {
                soru: "Zeminin uygun olmadığını sahada mı yoksa telefonla mı anlıyorsunuz?",
                cevap:
                    "İkisi de. Telefonda paylaştığınız fotoğraf ve zemin bilgisiyle ilk değerlendirmeyi yaparız ve buna göre ekipman sınıfı öneririz. Ancak kesin karar sahada verilir, çünkü zemin koşulları günden güne değişebilir ve fotoğraf her zaman güncel durumu yansıtmayabilir. Sahada uygun değilse operatörümüz işi başlatmaz ve durumu size anında bildirir.",
            },
            {
                soru: "Zor zemin işleri için ek bir ücret var mı?",
                cevap:
                    "Zeminin gerçek koşulu teklif aşamasında konuşulduysa, buna uygun ekipman sınıfı (örneğin dört çeker şasili) zaten fiyata yansıtılır ve iş bitiminde ek satır çıkmaz. Ek maliyet yalnızca sahada beklenmedik bir zemin değişikliği nedeniyle ekipman sınıfının değiştirilmesi gerektiğinde gündeme gelebilir; bu durumu da işe başlamadan önce sizinle konuşuruz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-14. Balıkesir’in zeytinlik, tarla ve silo sahalarının çoğunlukla toprak veya çakıl zeminli olduğu ve yağış sonrası taşıma kapasitesinin değişebileceği kamuya açık genel bilgidir; zemin değerlendirme yöntemi ve güvenli konumlanma kararı firmamızın kendi saha pratiğidir.",
    },
};

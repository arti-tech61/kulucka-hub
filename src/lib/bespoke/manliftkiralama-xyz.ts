// ═══════════════════════════════════════════════════════════════════════════
// manliftkiralama.xyz — ELLE YAZILMIŞ İÇERİK
//
// Profil: ADANA tekstil ve tarım sanayinde manlift kiralama.
// Açı: Çukurova ovasının sanayi-tarım kimliği — tekstil/iplik-dokuma
// fabrikaları, pamuk ve narenciye işleme, un-yağ-yem tesisleri, Adana OSB
// ölçeği, Mersin liman komşuluğu ve bölgenin belirleyici iklim unsuru olan
// UZUN VE ŞİDDETLİ YAZ SICAĞI — operatör sağlığı, malzeme davranışı ve
// sabah/gece çalışma penceresi zorunluluğu.
//
// ⚠️ Bu dosyanın iklim teması SICAK VE KURU YAZDIR. Nem/yağış anlatısı bu
// dosyaya girmez. Sayfalar arası kalıp tekrarı yasaktır.
//
// Simetri: giriş → 5 madde → 3 ek bölüm (ilkinde tablo) → 6 uzun SSS
// Yazım: 2026-08-12. Yalnızca doğrulanabilir, kamuya açık il bilgisi.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const MANLIFTKIRALAMA_XYZ: Record<string, BespokeIcerik> = {
    "bolge:adana-osb": {
        h1: "Adana OSB'de Manlift Kiralama",
        giris:
            "Adana Organize Sanayi Bölgesi, Çukurova'nın tarım hâsılasını sanayi ürününe dönüştüren tesislerin toplandığı geniş bir alandır; tekstil ve iplik fabrikalarından yem-yağ tesislerine, metal işlemeden lojistik depolara kadar farklı ölçekte üretim burada iç içe durur. Bu genişlik, yükseğe erişim talebini de çeşitlendirir: bir gün iplik fabrikasının çatı altı aydınlatması, ertesi gün bir yağ tesisinin silo gövdesi, bir başka gün depo rafı üstü bakım gündeme gelir. Ovanın düz topoğrafyası makine hareketini kolaylaştırsa da bölgenin asıl belirleyici gerçeği iklimdir: Çukurova'nın yazı uzun, sıcaklığı yüksek ve öğle saatlerinde neredeyse dayanılmazdır. Bu koşulda çalışma programı güneşin değil termometrenin diktesine göre kurulur — sabahın erken saatleri ve akşamüstü, üretken çalışmanın gerçekleştiği asıl pencerelerdir. Biz eklemli ve teleskopik bomlu makineleri bu gerçeğe göre planlarız: öğlen saatleri sahada mola, malzeme hazırlığı ve iç mekân işlerine ayrılır, esas üretim saatlerin serin ucuna toplanır.",
        maddeler: [
            {
                baslik: "İplik ve dokuma fabrikalarında çatı altı bakım",
                metin:
                    "Bölgedeki tekstil tesislerinin geniş açıklıklı üretim salonlarında havalandırma kanalları, aydınlatma armatürleri ve pamuk tozu tutan filtre üniteleri düzenli temizlik ve bakım ister. Kapalı hacimde egzoz gazı üretmeyen akülü makine tercih edilir; pamuk tozunun yanıcı niteliği nedeniyle sepet çıkışı öncesi yüzey ve elektrik ekipmanı kontrolü ayrı bir güvenlik adımıdır. İş, üretim vardiyaları arasındaki kısa duruşa sığdırılacak şekilde önceden planlanır.",
            },
            {
                baslik: "Yağ, un ve yem tesislerinde silo çevresi işleri",
                metin:
                    "Ovanın tahıl ve yağlı tohum hasadını işleyen tesislerde silo gövdesi, elevatör hattı ve elleçleme konveyörleri yüksek kotta çalışır. Boya yenileme, kaynak kontrolü ve bağlantı sıkılığı gibi kalemler eklemli bomun yanal uzanımıyla yapılır. Yaz aylarında metal gövde öğleye doğru dokunulamayacak sıcaklığa ulaşabildiği için, bu tür işler günün ilk saatlerine yazılır ve öğleden sonraya sarkıtılmaz.",
            },
            {
                baslik: "Depo ve lojistik alanlarında raf üstü erişim",
                metin:
                    "OSB içindeki depolama tesislerinde raf sistemi montajı, sprinkler hattı bakımı ve yükleme kapısı üzeri işler akülü makaslı platformla yürütülür. Beton zeminli bu alanlarda iz bırakmayan lastik tercih edilir. Depo içi sıcaklık dışarıya göre daha ölçülü kalsa da, kapalı hacimde havalandırma yetersizse öğle saatlerinde iç sıcaklık da yükselir; bu durumda mola sıklığı artırılır.",
            },
            {
                baslik: "Dış saha ekipmanı ve çelik konstrüksiyon",
                metin:
                    "Tesisler arası boru köprüleri, yükleme rampası üstü kirişler ve dış saha aydınlatma direkleri doğrudan güneşe maruz kalır. Metal yüzeyler yaz ortasında eldivensiz dokunulamayacak sıcaklığa çıkabilir; bu nedenle dış saha çelik işleri sabahın erken saatine, gerekirse gün doğumundan hemen sonraya planlanır. Öğleden sonra sadece gölgede kalan veya ısıya duyarlı olmayan kalemler sürdürülür.",
            },
            {
                baslik: "OSB içi lojistik ve makine sevkiyatı",
                metin:
                    "Adana OSB'nin geniş cadde düzeni ve otoyol bağlantısına yakınlığı, ağır makine sevkiyatını nispeten kolaylaştırır. Buna karşılık yaz öğlesinde asfalt üzerindeki sıcaklık, lastik tekerlekli makinelerin uzun mesafe kendi motoruyla hareketinde performans kaybına yol açabilir; bu yüzden uzun transferler günün serin saatlerine, sabaha veya akşamüstüne planlanır.",
            },
        ],
        ekBolumler: [
            {
                baslik: "OSB içinde tesis tipine göre makine ve saat planı",
                paragraflar: [
                    "Aşağıdaki tablo, Adana OSB'deki farklı tesis tiplerinde tercih ettiğimiz makine sınıfını ve yaz aylarında önerilen çalışma saatini özetler.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Öncelikli kalem", "Uygun makine", "Yaz çalışma saati"],
                    satirlar: [
                        ["Tekstil üretim salonu", "Çatı altı filtre bakımı", "Akülü makaslı 12-16 m", "Vardiya arası, iç mekân"],
                        ["Yağ-un-yem tesisi", "Silo ve elevatör hattı", "Eklemli 18-26 m", "06:00-10:00"],
                        ["Depo ve lojistik", "Raf üstü, sprinkler", "Akülü makaslı 10-14 m", "İç mekân, tüm gün"],
                        ["Dış saha çelik yapı", "Boya, bağlantı kontrolü", "Eklemli 20-28 m", "Gün doğumu sonrası"],
                        ["Saha aydınlatma direği", "Armatür değişimi", "Teleskopik 20-30 m", "Sabah erken"],
                    ],
                },
            },
            {
                baslik: "Çukurova yazında çalışma penceresi",
                paragraflar: [
                    "Çukurova ovasında yaz mevsimi hem uzun hem sıcaklığın gün boyu yüksek seyrettiği bir dönemdir; öğle saatlerinde açık sahada metal yüzeyler ve ekipman kabinleri ciddi biçimde ısınır. Bu koşulda dış saha işlerinin çoğunu iki dilime böleriz: gün doğumundan öğlene kadar süren sabah penceresi ve akşamüstünden gün batımına kadar süren ikinci pencere. Öğle arası, gölgede bekleme, malzeme hazırlığı ve iç mekân işleri için ayrılır.",
                    "Bu düzenin bir bedeli vardır — günlük iş süresi iç bölgelere göre daha parçalıdır. Ancak bedelini ödemeyen program, sahada operatör sağlığı ve ekipman ömrü açısından çok daha büyük bir maliyet çıkarır. Bu yüzden teklif verirken yaz aylarında toplam takvim süresine gerçekçi bir pay ekleriz; müşteri işin bitiş tarihini baştan doğru bilir.",
                ],
            },
            {
                baslik: "Sıcakta operatör ve ekipman güvenliği",
                paragraflar: [
                    "Sepette geçirilen saatler, zeminden yükseldikçe güneşe daha açık hâle gelir ve metal sepet gövdesi öğle saatinde belirgin biçimde ısınır. Uygulamamız, operatöre düzenli su ve gölgelenme molası vermek, öğle zirvesinde açık sahadaki bomlu işleri askıya almak ve gerektiğinde geçici gölgelik kullanmaktır. Isı bitkinliği belirtisi gösteren personel derhâl sahadan indirilir; bu kuralda esneklik yoktur.",
                    "Ekipman tarafında da sıcaklık etkisi göz ardı edilmez: hidrolik yağın yüksek sıcaklıkta viskozitesi değişir, akülü makinelerde şarj devresi aşırı ısınmaya karşı korumaya girebilir. Uzun süreli yaz kiralamalarında makinenin gölgede park edilmesi ve günün en sıcak saatinde dinlendirilmesi, arıza riskini azaltan basit ama etkili bir önlemdir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yaz ortasında öğle saatinde çalışma tamamen durur mu?",
                cevap:
                    "Tamamen durmaz ama kapsam daralır. Açık sahada, doğrudan güneş altında ve yüksek kotta yürütülen bomlu işleri öğle zirvesinde askıya alırız; buna karşılık gölgede kalan alanlar, iç mekân işleri ve hazırlık-malzeme adımları öğle boyunca sürer. Hangi kalemin hangi saate denk geleceğini iş programına baştan yazarız, böylece öğle arası boşa geçen bir zaman dilimi değil, önceden planlanmış bir çalışma bloğu olur.",
            },
            {
                soru: "Tekstil fabrikamızda pamuk tozu var, akülü makine bu ortamda güvenli mi?",
                cevap:
                    "Akülü sınıf, egzoz gazı üretmediği için kapalı hacimde tercih edilen seçenektir; ancak pamuk tozunun yanıcı niteliği ayrı bir önlem gerektirir. Sahaya giren makinenin elektrik bağlantıları ve olası kıvılcım kaynakları önceden kontrol edilir, gerekiyorsa tesisin kendi patlayıcı ortam prosedürüne uygun ek tedbir alınır. Çalışma öncesi tesisin toz yoğunluğu düşük tuttuğu saat aralığı — genellikle vardiya arası temizlik sonrası — tercih edilir. Bu koordinasyon tesis güvenlik sorumlusuyla birlikte kurulur.",
            },
            {
                soru: "Silo gövdesinin boyası için hangi saatler uygun?",
                cevap:
                    "Metal gövde yaz öğlesinde dokunulamayacak sıcaklığa çıkabildiği için hem operatör güvenliği hem boyanın uygulama kalitesi açısından sabah erken saat tercih edilir. Yüzey sıcaklığı çok yüksek olduğunda boya çok hızlı kurur ve yüzeyde iz bırakabilir; bu yüzden uygulama günün en serin ve gölgeli olduğu dilime, genellikle gün doğumunu takip eden birkaç saate planlanır. Öğleden sonra ise yüzey ölçümü, hazırlık ve gölgede yapılabilen kalemler sürdürülür.",
            },
            {
                soru: "OSB içinde makine sevkiyatı ne kadar sürer?",
                cevap:
                    "Adana OSB'nin geniş cadde yapısı ve otoyol bağlantısı sevkiyatı genel olarak kolaylaştırır; asıl değişken günün saatidir. Uzun mesafeli kendi motoruyla transferlerde yaz öğlesindeki asfalt sıcaklığı lastikli ekipmanda performans kaybına yol açabileceğinden, bu tür hareketleri sabaha veya akşamüstüne planlarız. Kısa mesafeli iç saha hareketlerinde bu kısıt daha az belirleyicidir. Teslimat tarihini netleştirirken günün hangi diliminde sahaya varılacağını da birlikte kararlaştırırız.",
            },
            {
                soru: "Operatör sıcaktan etkilenirse ne yapılıyor?",
                cevap:
                    "Bu durumda öncelik işi bitirmek değil operatörü güvenli hâle getirmektir. Belirti gösteren operatör derhâl sepetten indirilir, gölgeye alınır ve su verilir; gerekiyorsa iş bir başka operatörle veya ertelenmiş saatte devam ettirilir. Bunu önlemek için düzenli mola takvimi, yeterli su bulundurma ve öğle zirvesinde açık saha işlerinin askıya alınması standart uygulamamızdır. Sıcak dönemde ekip iki operatörle rotasyonlu çalışabilir; bu, hem güvenlik hem iş temposunun sabit kalması açısından tercih edilen bir düzendir.",
            },
            {
                soru: "Yaz aylarında kiralama süresi kışa göre uzuyor mu?",
                cevap:
                    "Aynı iş kapsamı için evet, genellikle biraz uzar. Bunun nedeni günlük üretken saatin iki dilime bölünmesi ve öğle arasının bomlu işlerde boşa çıkmasıdır. Teklif hazırlarken bu gerçeği hesaba katıp takvime gerçekçi bir pay ekleriz; amaç işin ortasında süre uzatma tartışması yaşamak yerine baştan doğru bir bitiş tarihi vermektir. İç mekân ağırlıklı işlerde bu fark daha azdır, çünkü kapalı hacim sıcaklığı dış sahaya göre daha ölçülü seyreder.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Adana OSB'nin Çukurova'daki geniş sanayi bölgesi niteliği ve bölgenin uzun-sıcak yaz iklimi kamuya açık bilgidir; makine eşleşmesi, çalışma saati düzeni ve saha uygulamaları firma pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "bolge:seyhan": {
        h1: "Seyhan'da Manlift Kiralama ve Yükseğe Erişim",
        giris:
            "Seyhan, Adana'nın tarihî merkezini ve şehrin en yoğun ticari-idari dokusunu barındıran ilçedir. Burada yükseğe erişim talebi sanayi tesisinden çok kent dokusundan gelir: çok katlı iş hanları, mağaza cepheleri, kamu binaları, okullar ve yoğun konut siteleri günlük programımızın ana kalemidir. Tabela ve giydirme yenileme, cam cephe temizliği, klima dış ünitesi montajı, dış boya rötuşu ve sokak aydınlatması en sık gelen taleplerdir. Şehir merkezinde çalışmanın kendine has zorluğu dar sokak, yoğun yaya-araç trafiği ve komşu işletmelerle paylaşılan kaldırımdır; bu yüzden konumlanma planı işin kendisi kadar önem taşır. Adana'nın uzun ve sıcak yazı, şehir içi işlerde de belirleyicidir: asfalt ve beton yüzeylerin depoladığı ısı öğleden sonra havayı daha da ağırlaştırır, bu yüzden cephe işleri günün erken saatine kaydırılır ve öğle arası genellikle sahada beklemeyle geçer.",
        maddeler: [
            {
                baslik: "Dar sokakta konumlanma ve trafik düzeni",
                metin:
                    "Merkez dokuda cephe önü çoğunlukla kaldırım, park şeridi veya yaya geçişiyle paylaşılır. Makine gelmeden önce konum fotoğrafı istenir; kaldırım genişliği, üst geçen elektrik hattı ve zemindeki bodrum kapağı gibi riskler buradan tespit edilir. Yoğun saatlerde konumlanma, trafiğin göreli düştüğü aralığa kaydırılır.",
            },
            {
                baslik: "Tabela ve iş hanı cephesi işleri",
                metin:
                    "Çok katlı iş hanlarının cephesinde tabela değişimi, ışıklı harf bakımı ve kompozit panel onarımı sık gelen taleplerdir. Eklemli bom saçak altına ve balkon çıkıntılarının arkasına kırılarak ulaşır; merdivenle günlerce süren bir iş birkaç saatte biter. Işıklı tabelalarda elektrik kesimi bina yönetimiyle önceden netleştirilir.",
            },
            {
                baslik: "Sıcak öğleden sonrada cephe boyası kısıtı",
                metin:
                    "Şehir merkezindeki beton ve asfalt yüzeyler öğleden sonra topladıkları ısıyı geç saatlere kadar korur; bu ısı, cephe boyasının çok hızlı kurumasına ve yüzeyde fırça izi bırakmasına yol açar. Uygulamamız boya işlerini sabahın erken saatine, cephenin henüz gölgede veya serin olduğu dilime yazmaktır. Öğleden sonra yalnızca ölçüm, hazırlık ve gölgede kalan yüzeyler için çalışılır.",
            },
            {
                baslik: "Dış ünite ve klima montajları",
                metin:
                    "Çok katlı binalarda dış ünite montajı balkon dışına sarkarak yapıldığında ciddi risk taşır. Sepetten yapıldığında askı braketinin duvara sağlam oturması gözle doğrulanır ve bakır hat bağlantıları rahat çalışılır. Yaz aylarında talep arttığı için bu iş sıraya girer; erken rezervasyon bekleme süresini kısaltır.",
            },
            {
                baslik: "Kamu binaları ve okullarda program disiplini",
                metin:
                    "Merkezdeki kamu yapıları ve okullarda çalışma, kullanım saatleri dışına planlanır. Yaz tatili dönemi okullarda geniş bir bakım penceresi açar ve bu dönemde çatı, cephe ve aydınlatma işleri toplu olarak yürütülür. Kamu binalarında ise giriş-çıkış yoğunluğunun düştüğü saatler tercih edilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Merkez ilçede iş tipine göre makine ve saat",
                paragraflar: [
                    "Seyhan'da aldığımız taleplerin çoğu tek günlük işlerdir. Aşağıdaki tablo iş tipine göre makine seçimini ve yaz aylarında önerilen saat aralığını gösterir.",
                ],
                tablo: {
                    basliklar: ["İş tipi", "Tercih edilen makine", "Yaz saat aralığı", "Kritik hazırlık"],
                    satirlar: [
                        ["Tabela değişimi", "Eklemli 16-20 m", "Sabah veya akşamüstü", "Cephe önü park boşaltma"],
                        ["Cam cephe temizliği", "Teleskopik 18-24 m", "Sabah erken", "Yaya akışı için bariyer"],
                        ["Dış boya rötuşu", "Eklemli 16-22 m", "Gün doğumu sonrası", "Yüzey sıcaklığı ölçümü"],
                        ["Dış ünite montajı", "Eklemli 14-18 m", "Serin saatler", "Askı noktası ölçüsü"],
                        ["Okul yaz bakımı", "Eklemli 14-20 m", "Tatil dönemi, tüm gün", "Boş kampüs koordinasyonu"],
                    ],
                },
            },
            {
                baslik: "Şehir merkezinde sıcak saatlerin yönetimi",
                paragraflar: [
                    "Beton ve asfaltla kaplı merkez dokuda öğleden sonraki sıcaklık, açık kırsal alana göre daha uzun sürer geriler; güneş battıktan sonra bile zemin ve cephe yüzeyleri sıcaklığını bir süre korur. Bu yüzden şehir içi cephe işlerinde en uygun pencere sabahın ilk saatleridir — gece boyunca soğuyan yüzeyler henüz ısınmamıştır ve operatör için de en konforlu dilimdir.",
                    "Öğle ve öğleden sonra saatlerinde sahada kalan ekip için düzenli gölgeleme ve su molası standart uygulamadır. Sepet içi çalışma öğle zirvesinde metal cephe ve tabela gibi ısı yansıtan yüzeylerin yakınında özellikle kısıtlanır; bu yüzeylerin yaydığı ısı, ortam sıcaklığının üzerine eklenir.",
                ],
            },
            {
                baslik: "Bina yönetimi ve komşuluk ilişkileri",
                paragraflar: [
                    "Apartman ve iş hanı cephelerinde çalışma bütün binayı ilgilendirir. Sepetin kat pencerelerinin önünden geçeceği ve cephe önünün geçici olarak kapanacağı bilgisinin sakinlere önceden duyurulması, işin gününde yaşanan itirazları önler. Bina yönetiminden alınan yazılı onay, hem bizim hem müşterimizin işini kolaylaştırır.",
                    "Otopark ve giriş kullanımı da benzer şekilde önceden netleştirilir. Makinenin konumlanacağı yer bir gün önceden boşaltılmadığında ekip beklemek zorunda kalır; bu bekleme süresi kiralamaya yansır.",
                ],
            },
        ],
        sss: [
            {
                soru: "Öğleden sonra cephe boyası yaptırırsak sorun olur mu?",
                cevap:
                    "Kesin bir yasak olmasa da öneririz ki öğleden sonra boya uygulamasından kaçınılsın. Merkez dokudaki beton ve asfalt yüzeylerin topladığı ısı, cephe malzemesinin sıcaklığını da yükseltir; bu koşulda boya beklenenden hızlı kurur ve yüzeyde fırça-rulo izi kalıcı hâle gelebilir. Sabah erken saatte yapılan uygulamada yüzey daha serin, kuruma hızı daha dengeli olur ve sonuç daha pürüzsüz çıkar. Program yoğunsa öğleden sonra yalnızca hazırlık ve gölgedeki yüzeyler için çalışırız, asıl boya asıl serin pencereye bırakılır.",
            },
            {
                soru: "Cadde üzerindeki dükkânımın tabelası için yol kapatılır mı?",
                cevap:
                    "Çoğu durumda hayır; kaldırım ve cephe önündeki bir şeridin geçici olarak boşaltılması yeterli olur. Belirleyici olan makinenin konumlanacağı yerin genişliği ve bomun açılacağı yöndür. Trafik akışını doğrudan etkileyecek bir konumlanma zorunluysa ilgili belediye biriminden izin süreci gündeme gelir. Konum fotoğrafını önceden gönderdiğinizde hangi seçeneğin geçerli olacağını teklif aşamasında söyleyebiliriz.",
            },
            {
                soru: "Yaz tatilinde okulumuzda toplu bakım yaptırmak istiyoruz, nasıl planlanır?",
                cevap:
                    "Yaz tatili, kampüs boş olduğu için tam da bu tür işler için en geniş pencereyi açar. Çatı, cephe, aydınlatma ve dış ünite gibi kalemleri tek listede toplayıp aynı makineyle sırayla yürütmek en verimli yoldur. Sıcak saatlerde açık sahadaki işler sabaha kaydırılır, öğleden sonra ise gölgeli cephelerde veya iç mekâna yakın noktalarda çalışılır. Kalem listesini önceden çıkarırsanız, tatilin geri kalan kısmını başka işlere ayırabilirsiniz.",
            },
            {
                soru: "Operatör sıcakta uzun süre sepette kalabiliyor mu?",
                cevap:
                    "Kalabilir ama sınırsız değil; sepet metal gövdesi güneş altında ortam sıcaklığının üzerine çıkar ve bu, operatör için ek bir yük oluşturur. Bizim uygulamamız düzenli mola vermek, gölgede su molası tanımak ve öğle zirvesinde açık sahadaki işleri askıya almaktır. Belirti gösteren operatör derhâl indirilir. Bu kurallar işin süresini biraz uzatabilir ama operatör sağlığı konusunda ödün vermeyiz.",
            },
            {
                soru: "Elektrik hattı cephemin hemen önünden geçiyor, çalışma yapılabilir mi?",
                cevap:
                    "Yapılabilir, plan hattın konumuna göre kurulur. İlk adım hattın türünü ve cepheye mesafesini yerinde görmektir. Güvenli mesafe korunarak farklı açıdan konumlanmak mümkünse iş normal akışında yürür. Mesafe korunamıyorsa ilgili kuruluştan hattın geçici olarak enerjisiz bırakılması veya yalıtım önlemi alınması talep edilir. Bu talep zaman aldığı için keşif aşamasında tespit edilmesi önemlidir.",
            },
            {
                soru: "Yarım günlük kiralama mümkün mü?",
                cevap:
                    "Mümkündür ve merkez ilçedeki işlerin doğası gereği sık kullandığımız bir seçenektir. Süre hesabında yalnızca sepetteki çalışma değil, makinenin sahaya gidiş-dönüşü ve konumlanma süresi de vardır; bu yüzden çok kısa işlerde de bir taban süre uygulanır. En verimli kullanım aynı çıkışta birden fazla kalemi toplamaktır — tabela değişimiyle birlikte dış ünite kontrolü de yaptırıldığında aynı taban süre içinde iki iş biter.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Seyhan'ın Adana'nın tarihî merkez ve ticari yoğunluklu ilçesi olduğu kamuya açık bilgidir; konumlanma düzeni, saat planı ve hazırlık başlıkları firma pratiğidir. Marka, tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "bolge:yuregir": {
        h1: "Yüreğir'de Sanayi ve Tarım Tesisleri İçin Manlift Kiralama",
        giris:
            "Yüreğir, Adana'nın doğusunda Seyhan Nehri'nin güneyinde uzanan ve hem sanayi tesislerini hem geniş tarım arazilerini bir arada barındıran ilçedir. Bu ikili yapı, yükseğe erişim taleplerini de iki koldan besler: bir yanda tekstil ve gıda işleme tesislerinin çatı-cephe ve elleçleme donanımı, diğer yanda pamuk ve narenciye işleme tesislerinin depolama-paketleme yapıları. Ovanın düz arazisi makine hareketini kolaylaştırır, ancak bölgenin asıl sınavı yine iklimdir: yaz aylarında sıcaklık öğleye doğru hızla yükselir ve açık sahada metal yüzeylerle çalışmayı zorlaştırır. Bu yüzden Yüreğir'deki programımız günü iki verimli dilime böler — gün doğumundan öğlene kadar süren ilk pencere ve akşamüstünden gün batımına kadar süren ikinci pencere; öğle arası malzeme hazırlığı ve gölgeli iç mekân işlerine ayrılır.",
        maddeler: [
            {
                baslik: "Tekstil ve gıda tesislerinde çatı altı bakım",
                metin:
                    "İlçedeki üretim tesislerinde havalandırma kanalları, aydınlatma armatürleri ve filtre üniteleri düzenli bakım gerektirir. Kapalı hacimde akülü makine tercih edilir; gıda işleme hatlarında ayrıca hijyen kısıtı devreye girer ve makine sahaya girmeden temizlenir. Bu işler vardiya arası kısa duruşlara sığdırılacak biçimde önceden planlanır.",
            },
            {
                baslik: "Pamuk ve narenciye işleme tesislerinde elleçleme",
                metin:
                    "Hasat sonrası işleme tesislerinde taşıma bantları, elevatörler ve paketleme hatları yüksek kotta çalışır. Sezon başlamadan yapılan bakım turu, sezon içindeki duruşları önler. Eklemli bomla yürütülen bu turda kayış hizası, bağlantı sıkılığı ve muhafaza bütünlüğü aynı çıkışta gözden geçirilir; sıcak saatlerde metal gövdeye yakın çalışma sabaha bırakılır.",
            },
            {
                baslik: "Depolama yapılarında çatı ve raf üstü işler",
                metin:
                    "Ürün depolayan yapılarda çatı kaplaması, oluk hattı ve raf üstü aydınlatma düzenli kontrol ister. Depo içi işlerde akülü makaslı platform ve iz bırakmayan lastik tercih edilir. Dış çatı işleri ise sıcak saatlerden kaçınılarak sabah erken veya akşamüstü dilimine yazılır; çatı kaplama malzemesi öğlen aşırı ısındığında üzerinde yürümek de operatör açısından risklidir.",
            },
            {
                baslik: "Açık arazide sulama ve elektrik hattı işleri",
                metin:
                    "Geniş tarım arazilerinin sulama tesisatı ve elektrik beslemesi arazi tipi makine gerektirir. Toprak zeminde konumlanmada denge ayaklarının altına yük dağıtıcı plaka kullanılır. Yaz öğlesinde açık arazide sepette geçirilen süre kısıtlanır, operatöre düzenli su ve gölgelenme molası verilir.",
            },
            {
                baslik: "Sezon yoğunluğunda bakım penceresi",
                metin:
                    "Tarımsal işleme tesislerinde hasat dönemi üretimin zirve yaptığı, bakımın neredeyse imkânsızlaştığı dönemdir. Bu yüzden bakım kalemlerini hasat öncesi ve sonrası aralıklara yerleştiririz. Hasat öncesi tur arıza önleyicidir, hasat sonrası tur ise sezon boyunca oluşan yıpranmayı tespit eder.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Yüreğir'de tesis tipine göre makine ve saat planı",
                paragraflar: [
                    "Aşağıdaki tablo, Yüreğir'deki sanayi ve tarımsal işleme tesislerinde tercih ettiğimiz makine sınıfını ve yaz aylarında önerilen çalışma saatini gösterir.",
                ],
                tablo: {
                    basliklar: ["Tesis tipi", "Öncelikli kalem", "Uygun makine", "Yaz çalışma saati"],
                    satirlar: [
                        ["Tekstil-gıda üretim salonu", "Filtre ve aydınlatma bakımı", "Akülü makaslı 12-16 m", "İç mekân, tüm gün"],
                        ["Pamuk-narenciye işleme", "Elevatör ve bant turu", "Eklemli 18-26 m", "06:00-10:00"],
                        ["Depolama yapısı", "Çatı ve raf üstü", "Akülü + eklemli karışık", "Sabah / akşamüstü"],
                        ["Açık arazi hattı", "Direk üstü işler", "Arazi tipi eklemli 20-28 m", "Serin saatler"],
                        ["Sulama tesisatı", "Elektrik besleme bakımı", "Eklemli 16-22 m", "Gün doğumu sonrası"],
                    ],
                },
            },
            {
                baslik: "Ova sıcağında zemin ve makine davranışı",
                paragraflar: [
                    "Yaz ortasında açık arazide toprak yüzeyi sertleşir ve toz kalkar; bu durum bomlu makinelerin zemin taşıma açısından iç bölgeye göre farklı davranmasına yol açar. Kuru ve sert toprak genellikle iyi taşıma sağlar, ancak sulama sonrası nemli kalan parseller yumuşak kalabilir. Konumlanmadan önce zeminin güncel durumu kontrol edilir ve gerekiyorsa yük dağıtıcı plaka kullanılır.",
                    "Lastik ve hidrolik ekipman için de sıcaklık bir değişkendir: uzun süre güneş altında bekleyen makinede lastik basıncı yükselir, hidrolik yağ ısınır. Uygulamamız, mümkün olduğunda makineyi gölgeye park etmek ve öğle molasında ekipmanı dinlendirmektir.",
                ],
            },
            {
                baslik: "Hasat takvimi ile bakım takviminin örtüşmesi",
                paragraflar: [
                    "Bölgedeki işleme tesislerinin bakım ihtiyacı, hasat takvimiyle doğrudan bağlantılıdır. Hasat öncesi haftalarda tesislerle birlikte bir kalem listesi çıkarır, hangi ekipmanın hangi sırayla kontrol edileceğini planlarız. Bu hazırlık yapılmadan hasat başladığında, arıza anında makine bulma şansı düşer çünkü bölgedeki bütün tesisler aynı dönemde yoğunlaşır.",
                    "Hasat sonrası tur ise farklı bir amaca hizmet eder: sezon boyunca sürekli çalışan ekipmanın yıpranma noktalarını erkenden tespit etmek. Bu turda çıkan bulgular önceliklendirilerek bir sonraki sezona kadar giderilir; böylece her sezon aynı arızanın tekrarlanması önlenir.",
                ],
            },
        ],
        sss: [
            {
                soru: "Hasat döneminde tesisimizde acil bakım gerekirse makine bulabilir miyiz?",
                cevap:
                    "Bulabiliriz ancak bu dönemde talep bölgede yoğunlaştığı için önceden rezervasyon yapılmamış acil talepler bekleme süresiyle karşılaşabilir. Bu riski azaltmanın yolu hasat öncesi bir bakım turu yaptırmaktır; bu turda tespit edilen ve giderilen sorunlar, hasat ortasında acil çağrıya dönüşme ihtimalini büyük ölçüde azaltır. Yine de beklenmedik bir arıza çıkarsa, elimizdeki en yakın uygun makineyi öncelik sırasına göre yönlendiririz.",
            },
            {
                soru: "Açık arazide öğlen çalışmak neden kısıtlanıyor?",
                cevap:
                    "İki nedeni var. Birincisi operatör güvenliği: doğrudan güneş altında, gölgesiz açık arazide öğle saatinde uzun süre sepette kalmak ısı bitkinliği riski taşır. İkincisi ekipman: metal sepet ve kumanda panelleri bu saatte belirgin biçimde ısınır, bu da hem konforu hem bazı elektronik bileşenlerin performansını etkileyebilir. Bu yüzden açık arazi işlerini sabah ve akşamüstü dilimlerine topluyor, öğle arasını gölgeli veya kapalı alan işlerine ayırıyoruz.",
            },
            {
                soru: "Pamuk işleme tesisimizde toz var, bu ortamda makine kullanımı güvenli mi?",
                cevap:
                    "Pamuk tozunun yanıcı niteliği nedeniyle bu ortamlarda ek önlem alınır: makinenin elektrik bağlantıları ve olası kıvılcım kaynakları sahaya girmeden kontrol edilir, tesisin kendi patlayıcı ortam prosedürüne uyulur. Çalışma, tesisin toz yoğunluğunun düşük olduğu saat aralığına — genellikle vardiya arası temizlik sonrasına — denk getirilir. Bu koordinasyon tesis güvenlik sorumlusuyla birlikte kurulur ve iş izni olmadan sepet kaldırılmaz.",
            },
            {
                soru: "Sulama tesisatındaki elektrik hattı için enerji kesintisi gerekiyor mu?",
                cevap:
                    "Hattın üzerinde veya çok yakınında doğrudan çalışılacaksa evet, enerji kesintisi ve yeniden devreye alma prosedürü gerekir; bu, işletmeci kuruluşla önceden koordine edilir. Hatta yeterli güvenli mesafe bırakılarak farklı bir açıdan çalışılabiliyorsa kesinti gerekmeyebilir, ancak bu değerlendirmeyi sahada operatör ve iş güvenliği sorumlusu birlikte yapar. Keşif aşamasında hattın türü ve konumu netleştirildiğinde, işin gününde sürpriz yaşanmaz.",
            },
            {
                soru: "Depo çatısında yaz ortasında çalışmak neden riskli?",
                cevap:
                    "Çatı kaplama malzemesi, özellikle metal veya bitümlü yüzeyler, öğle saatinde doğrudan güneş altında çok yüksek sıcaklığa ulaşabilir; bu hem üzerinde yürümeyi hem sepetten yakın temas gerektiren işleri zorlaştırır. Ayrıca sıcak yüzeyden yükselen hava, görüş ve konsantrasyonu etkileyebilir. Bu nedenle çatı işlerini sabah erken veya akşamüstü serin saatlere planlıyoruz; öğle saatinde yalnızca gölgede kalan bölümler veya iç taraftan yapılabilen kalemler sürdürülüyor.",
            },
            {
                soru: "İki farklı tesisimiz var, aynı gün her ikisinde de çalışabilir misiniz?",
                cevap:
                    "Tesisler birbirine yakınsa ve kalemler kısa sürüyorsa mümkündür; sabah penceresini bir tesise, akşamüstü penceresini diğerine ayırarak öğle arasını geçiş ve dinlenme için kullanırız. Bu düzen hem makinenin verimli kullanılmasını sağlar hem toplam nakliye maliyetini düşürür. Tesisler arası mesafe ve her birindeki iş kapsamı bilindiğinde, bu tür birleşik programı teklif aşamasında netleştiririz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Yüreğir'in Adana'nın doğusunda, sanayi ve tarım arazilerini bir arada barındıran ilçe niteliği kamuya açık bilgidir; makine eşleşmesi, saat planı ve sezon takvimi firma pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "bolge:cukurova": {
        h1: "Çukurova'da Manlift Kiralama",
        giris:
            "Çukurova ilçesi, Adana'nın batısında, hem yeni gelişen sanayi-lojistik yatırımlarını hem geniş tarım arazilerini barındıran bir geçiş bölgesidir. Bu konumu, yükseğe erişim taleplerine de kendine özgü bir karışım kazandırır: bir yanda yeni yapılan depo ve lojistik tesislerin çatı-cephe işleri, diğer yanda narenciye ve sebze üretiminin desteklediği paketleme-soğuk hava tesisleri. Ovanın adını taşıyan bu ilçe, bölgenin tarım kimliğiyle sanayi büyümesinin kesiştiği noktadır. İklim buradaki her işin arka planında durur: yaz uzun ve sıcaklık öğleden itibaren hızla yükselir, bu yüzden dış saha işleri günün erken ve geç saatlerine toplanır. Yeni yapılaşan bir bölge olması, saha koşullarının da henüz oturmamış olabileceği anlamına gelir — bu yüzden konumlanma öncesi zemin ve güzergâh kontrolü burada standart bir adımdır.",
        maddeler: [
            {
                baslik: "Yeni depo ve lojistik tesislerinde ilk teslim işleri",
                metin:
                    "Yapımı yeni tamamlanan lojistik tesislerinde kamera, aydınlatma, tabela ve cephe aksesuar montajı bir arada gelir. Bu dönemde saha henüz düzenlenmemiş olabilir; gevşek dolgu zemin ve malzeme yığınları makine hareketini kısıtlayabilir. Teslimden önce güzergâhın sıkıştırılmış ve boş olması, işin planlanan günde bitmesinin ön koşuludur.",
            },
            {
                baslik: "Soğuk hava ve paketleme tesislerinde tavan işleri",
                metin:
                    "Narenciye ve sebze paketleme tesislerinde soğutucu üniteler, aydınlatma ve izolasyon panelleri tavan altında yer alır. Kapı açık kalma süresini kısaltmak için kalemler gruplanarak tek girişte tamamlanır. Yaz aylarında dış sıcaklıkla iç soğuk hacim arasındaki fark makineyi de etkileyebileceğinden, uzun süreli işlerde ara dinlenme planlanır.",
            },
            {
                baslik: "Depo çatı ve cephe kaplaması",
                metin:
                    "Geniş çatılı depo yapılarında ışıklık değişimi, oluk kontrolü ve cephe paneli bakımı düzenli programa bağlanır. Metal çatı kaplaması öğle saatinde yüksek sıcaklığa ulaştığından, bu işler sabah erken veya akşamüstü dilimine planlanır. Öğleden sonra yalnızca gölgede kalan cephe bölümleri veya iç taraftan yapılabilen kalemler sürdürülür.",
            },
            {
                baslik: "Açık arazide sera ve sulama tesisatı",
                metin:
                    "İlçenin tarım arazilerinde örtü altı üretim yapıları ve sulama tesisatının elektrik beslemesi arazi tipi makine gerektirir. Toprak zeminde konumlanmadan önce güncel nem durumu kontrol edilir, gerekiyorsa yük dağıtıcı plaka kullanılır. Sıcak saatlerde açık arazide sepette geçirilen süre kısıtlanır.",
            },
            {
                baslik: "Yeni yerleşim alanlarında altyapı işleri",
                metin:
                    "Bölgenin hızlı gelişimi, yeni konut ve ticari yapıların altyapı-aydınlatma işlerini de beraberinde getirir. Sokak aydınlatma direği montajı, saha kamerası kurulumu ve dış cephe aksesuar montajı bu kapsamda sık gelen taleplerdir. Yeni açılan yollarda zemin henüz oturmamış olabileceğinden, makine güzergâhı her seferinde ayrıca değerlendirilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Çukurova'da yapı tipine göre makine ve saat planı",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki yaygın yapı tiplerinde tercih ettiğimiz makine sınıfını ve yaz aylarında önerilen çalışma saatini gösterir.",
                ],
                tablo: {
                    basliklar: ["Yapı tipi", "Öncelikli kalem", "Uygun makine", "Yaz çalışma saati"],
                    satirlar: [
                        ["Yeni lojistik tesis", "İlk teslim montajları", "Eklemli 16-22 m", "Sabah / akşamüstü"],
                        ["Soğuk hava-paketleme", "Tavan ünite bakımı", "Akülü makaslı 10-14 m", "İç mekân, tüm gün"],
                        ["Depo çatı-cephe", "Işıklık ve oluk kontrolü", "Eklemli 18-26 m", "06:00-10:00"],
                        ["Sera ve sulama", "Taşıyıcı ve hat kontrolü", "Arazi tipi eklemli 18-24 m", "Serin saatler"],
                        ["Yeni yol aydınlatması", "Direk üstü montaj", "Teleskopik 20-28 m", "Sabah erken"],
                    ],
                },
            },
            {
                baslik: "Yeni gelişen sahada zemin ve güzergâh kontrolü",
                paragraflar: [
                    "Hızla yapılaşan bir bölgede saha koşulları her tesiste farklıdır: bazı parseller henüz asfaltlanmamış, bazı yollar geçici stabilize kaplamalıdır. Bomlu bir makinenin denge ayakları bu tür zeminde beklenenden farklı davranabileceği için, teslimattan önce güzergâh fotoğrafı istememiz standart bir adımdır. Gerekli görüldüğünde yük dağıtıcı plaka kullanılır veya makine daha sağlam bir noktadan konumlandırılıp uzun uzanımlı bir bomla hedefe ulaşılır.",
                    "Bu kontrolün ikinci faydası zaman kazandırmaktır: sahaya vardığında zemin uygun olmayan bir makine geri gönderilmek zorunda kalırsa hem gün kaybedilir hem nakliye maliyeti tekrarlanır. Fotoğraf veya kısa bir konum videosu, bu riski büyük ölçüde ortadan kaldırır.",
                ],
            },
            {
                baslik: "Sıcak mevsimde iş programının kurulması",
                paragraflar: [
                    "Çukurova'da yaz ayları hem uzun hem sıcaklığın gün boyu yüksek seyrettiği bir dönemdir. Dış saha işlerini sabah ve akşamüstü olmak üzere iki verimli dilime bölmek, hem operatör sağlığını korur hem malzeme davranışını (boya kuruma hızı, metal yüzey sıcaklığı) kontrol altında tutar. Öğle arası, malzeme hazırlığı, ölçüm ve gölgeli iç mekân işleri için ayrılır.",
                    "Bu programın toplam takvime etkisi gerçekçi biçimde teklife yansıtılır. Yeni gelişen bir bölgede işlerin çoğu zaten tek seferlik ve teslim odaklı olduğundan, sabah-akşam pencere düzenini baştan netleştirmek, işin bitiş tarihinde sürpriz yaşanmasını önler.",
                ],
            },
        ],
        sss: [
            {
                soru: "Yeni tamamlanan tesisimizde saha henüz düzenli değil, makine yine de gelebilir mi?",
                cevap:
                    "Gelebilir, ancak önce güzergâhın değerlendirilmesi gerekir. Yeni tesislerde dolgu zemin genellikle henüz yeterince sıkışmamış olur ve açık kanal veya malzeme yığınları makinenin geçeceği yolu daraltabilir. Teslimattan önce sahadan fotoğraf veya video istememizin nedeni budur; buna göre plaka kullanımı veya farklı bir konumlanma noktası önceden planlanır. Zemin güvenli değilse iş, sahanın toparlanmasını bekleyecek şekilde birkaç gün ertelenebilir.",
            },
            {
                soru: "Soğuk hava deposunda çalışırken dış sıcaklıkla iç soğukluk arasındaki fark makineyi etkiler mi?",
                cevap:
                    "Uzun süreli işlerde etkileyebilir; sık kapı açılıp kapanması hem tesisin soğuk zincirini hem makinenin akü ve hidrolik performansını bir miktar etkiler. Uygulamamız kalemleri gruplayarak kapının açık kalma süresini kısaltmak ve uzun işlerde ara dinlenme payı bırakmaktır. Bu detaylar teklif aşamasında konuşulduğunda, işin ortasında beklenmedik bir duraksama yaşanmaz.",
            },
            {
                soru: "Depo çatısındaki ışıklık değişimini hangi saatte yapıyorsunuz?",
                cevap:
                    "Metal çatı kaplaması öğle saatinde yüksek sıcaklığa ulaştığı için bu işi sabah erken veya akşamüstü serin saatlere planlarız. Bu tercih hem operatör konforu hem de çatı üzerinde geçirilen sürenin güvenli tutulması içindir. Öğle saatinde yalnızca gölgede kalan bölümler veya çatının iç tarafından erişilebilen kalemler sürdürülür; asıl çatı üstü işlem serin pencereye bırakılır.",
            },
            {
                soru: "Sera tesisatımızın elektrik bakımı için arazi tipi makine mi gerekiyor?",
                cevap:
                    "Genellikle evet. Sera ve sulama tesisatının bulunduğu açık arazi zemini toprak kaplı olduğundan, standart dar bomlu makineler yerine arazi tipi bomlu makineler tercih edilir; bu makineler hem daha sağlam lastiğe hem daha yüksek zemin taşıma toleransına sahiptir. Zeminin güncel nem durumu — özellikle sulama sonrası — teslimattan önce kontrol edilir. Kuru ve sert zeminde iş sorunsuz ilerlerken, yakın zamanda sulanmış parsellerde plaka kullanımı veya tarihin ertelenmesi gündeme gelebilir.",
            },
            {
                soru: "Bölgede birden fazla yeni yatırımımız var, hepsini tek programda planlayabilir miyiz?",
                cevap:
                    "Evet, özellikle yatırımlar birbirine yakınsa bu en verimli yoldur. Her tesisteki kalemleri tek listede toplar, makinenin hangi tesiste hangi sırayla çalışacağını sabah-akşamüstü pencere düzenine göre planlarız. Bu yaklaşım hem nakliye payını böler hem de her tesis için ayrı ayrı çıkış yapmanın getirdiği koordinasyon yükünü azaltır. Yatırım listesi ve konumlar önceden paylaşıldığında, teklif tek bir program üzerinden hazırlanır.",
            },
            {
                soru: "Yeni açılan yolda direk montajı için zemin ne kadar önemli?",
                cevap:
                    "Oldukça önemli. Yeni açılan yollarda stabilize kaplama henüz tam oturmamış olabilir ve bu, bomlu makinenin denge ayakları için beklenmedik bir batma riski yaratır. Teslimattan önce yol yüzeyinin durumu görsel olarak değerlendirilir; gerekiyorsa yük dağıtıcı plaka kullanılır veya makine daha sağlam bir kesimden konumlandırılıp uzun uzanımla hedefe ulaşılır. Bu ön kontrol, sahada devrilme riskini baştan ortadan kaldıran en pratik önlemdir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Çukurova ilçesinin Adana'nın batısında yer alan, hem yeni sanayi-lojistik yatırımlarını hem tarım arazilerini barındıran geçiş bölgesi niteliği kamuya açık bilgidir; makine eşleşmesi ve saat planı firma pratiğidir. Tesis adı ve rakamsal iddia kullanılmamıştır.",
    },

    "bolge:mersin-osb-cevre-ili": {
        h1: "Mersin OSB ve Çevresinde Manlift Kiralama",
        giris:
            "Adana merkezli ekibimiz, komşu il Mersin'in organize sanayi bölgesi ve çevresindeki tesislere de düzenli hizmet verir; iki il arasındaki kısa mesafe ve Mersin'in liman kimliği, bu bölgeyi Adana sanayisinin doğal uzantısı hâline getirir. Mersin OSB ve limana yakın sahalarda karşımıza çıkan iş profili, Adana'daki tekstil-tarım ağırlıklı tablodan biraz farklıdır: burada liman lojistiğine bağlı depolama tesisleri, konteyner ve dökme yük elleçleme ekipmanları, ihracata yönelik üretim tesislerinin cephe-çatı bakımı ve liman çevresindeki çelik konstrüksiyonların korozyon takibi öne çıkar. Mersin'in kıyı iklimi Adana'nın iç kesim sıcağından biraz farklı seyretse de yaz ayları burada da uzun ve sıcaktır; bu yüzden dış saha işlerinde aynı sabah-akşamüstü çalışma disiplinini uygularız. Bölgeler arası sevkiyat, iki il arasındaki otoyol bağlantısı sayesinde aynı gün içinde planlanabilir.",
        maddeler: [
            {
                baslik: "Liman lojistiğine bağlı depolama tesisleri",
                metin:
                    "Mersin limanına yakın depolama alanlarında raf sistemi montajı, sprinkler hattı bakımı ve yükleme kapısı üzeri işler sık gelen taleplerdir. Akülü makaslı platform ve iz bırakmayan lastik, bu tesislerde standart tercihtir. Liman trafiğinin yoğun olduğu saatlerde makine hareketi, tesisin kendi araç akışını kesmeyecek şekilde planlanır.",
            },
            {
                baslik: "Konteyner ve dökme yük elleçleme ekipmanı",
                metin:
                    "Elleçleme sahasındaki konveyör hatları, taşıyıcı ayaklar ve aydınlatma direkleri düzenli bakım ister. Bu ekipmanlar açık sahada, tuzlu deniz havasına sürekli maruz kalır; korozyon takibi bu yüzden Adana'daki kuru sahalara göre daha sık tekrarlanır. Bakım işleri, elleçleme operasyonunun durduğu veya azaldığı saatlere denk getirilir.",
            },
            {
                baslik: "İhracata yönelik üretim tesislerinde cephe bakımı",
                metin:
                    "Bölgedeki ihracat ağırlıklı üretim tesislerinde cephe görünümü kurumsal imaj açısından önemlidir; boya yenileme, tabela ve giydirme bakımı düzenli aralıklarla yapılır. Yaz sıcağında cephe boyası sabah erken saatlere planlanır, çünkü öğle sıcağında yüzey çok hızlı kurur ve iz bırakabilir.",
            },
            {
                baslik: "Kıyı çeliğinde korozyon ve bağlantı kontrolü",
                metin:
                    "Liman çevresindeki çelik konstrüksiyonlarda cıvata dip kısmı, kaynak ağzı ve sacın alt kıvrımı tuzlu havadan ilk etkilenen noktalardır. Yıllık koruma turunda bu noktalar sepetten yakın mesafeden incelenir ve gerekiyorsa nokta boya ile kapatılır. Bu turun kıyı sahalarında iç bölgeye göre daha sık tekrarlanması gerektiğini sahada gördüğümüz yüzey kayıplarına bakarak söyleyebiliriz.",
            },
            {
                baslik: "İki il arası sevkiyat ve program koordinasyonu",
                metin:
                    "Adana ile Mersin arasındaki otoyol bağlantısı, makinenin aynı gün içinde iki ilde farklı sahalara yönlendirilmesini mümkün kılar. Bu esneklik özellikle acil taleplerde işe yarar: Adana'daki bir işin ardından aynı gün Mersin OSB'ye geçiş planlanabilir. Sevkiyat saatleri, yaz aylarında yol yüzeyi sıcaklığının en yüksek olduğu öğle dilimini mümkün olduğunca dışarıda bırakacak şekilde kurulur.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Mersin OSB ve liman çevresinde iş kalemi tablosu",
                paragraflar: [
                    "Aşağıdaki tablo, Mersin OSB ve liman çevresindeki tesislerde en sık üstlendiğimiz kalemleri ve tercih edilen makine sınıfını gösterir.",
                ],
                tablo: {
                    basliklar: ["İş kalemi", "Makine sınıfı", "Korozyon riski", "Saha notu"],
                    satirlar: [
                        ["Depo raf-sprinkler bakımı", "Akülü makaslı 10-14 m", "Düşük", "İç mekân, düz zemin"],
                        ["Konveyör-elleçleme bakımı", "Eklemli 16-22 m", "Yüksek", "Tuzlu hava etkisi sürekli"],
                        ["Cephe boya-tabela", "Eklemli 18-24 m", "Orta", "Sabah erken uygulama"],
                        ["Çelik konstrüksiyon korozyon turu", "Eklemli 16-20 m", "Yüksek", "Yıllık periyodik kontrol"],
                        ["Saha aydınlatma direği", "Teleskopik 20-28 m", "Orta", "Rüzgârda sepet sınırlanır"],
                    ],
                },
            },
            {
                baslik: "Adana ile Mersin arasında iklim farkı ve program",
                paragraflar: [
                    "Mersin'in kıyı konumu, Adana'nın iç kesim sıcağına göre nemi biraz daha yüksek tutar; ancak yaz aylarında sıcaklığın uzun süre yüksek seyretmesi iki ilde de ortak bir gerçektir. Bu yüzden dış saha çalışma disiplinimiz her iki bölgede de aynıdır: sabah ve akşamüstü olmak üzere iki verimli pencere, öğle arasında gölgeli veya iç mekân işleri.",
                    "Liman çevresindeki tuzlu hava, Adana'nın iç kesimindeki tesislerde görülmeyen bir korozyon yükü ekler. Bu farkı bakım sıklığına yansıtırız — aynı tip çelik yapı, Mersin'de Adana'ya göre daha sık koruma turu görür.",
                ],
            },
            {
                baslik: "İki il arası iş planlamasında dikkat edilenler",
                paragraflar: [
                    "Adana ve Mersin'deki müşterilerimiz için aynı hafta içinde birleşik program kurmak, sevkiyat maliyetini düşüren pratik bir yöntemdir. Bunun için her iki sahadaki iş listesi önceden bilinmeli, hangi tesisin hangi gün ele alınacağı net olmalıdır. Liman sahasına giriş için gereken evrak ve izin süreçleri, OSB içi tesislere göre daha uzun sürebileceğinden bu adım programın en başına yazılır.",
                    "Acil taleplerde de bu iki il arası esneklik devreye girer: elimizde bölgede zaten çalışan bir makine varsa, kısa mesafe sayesinde aynı gün ikinci bir sahaya yönlendirme genellikle mümkün olur. Bu esnekliğin sınırı hava koşulu ve yol durumudur; yaz öğlesinde uzun mesafeli transferden kaçınırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "Adana'dan Mersin OSB'ye aynı gün makine gönderebiliyor musunuz?",
                cevap:
                    "İki il arasındaki otoyol bağlantısı sayesinde çoğu durumda mümkündür. Belirleyici olan makinenin o an nerede olduğu ve günün hangi saatinde sevkiyat gerektiğidir; yaz öğlesinde uzun mesafeli transferden kaçınıp sevkiyatı sabaha veya akşamüstüne kaydırırız. Acil bir talep geldiğinde önce bölgedeki müsait makineyi ve en kısa güzergâhı değerlendirir, mümkün olan en erken saati size bildiririz.",
            },
            {
                soru: "Liman sahasına makine ve operatör girişi için ne gerekiyor?",
                cevap:
                    "Liman ve gümrüklü alanlar kendi izin ve kayıt prosedürüne sahiptir; personel listesi, kimlik bildirimi, araç plaka kaydı ve genellikle saha oryantasyonu istenir. Bu süreç OSB içi tesislere göre daha uzun sürebilir, bu yüzden talebi aldığımızda evrak hazırlığına erken başlarız. Makinenin periyodik kontrol raporu ve ekipman belgeleri de sahaya girişte istenebilir; bunlar makineyle birlikte hazır bulundurulur.",
            },
            {
                soru: "Tuzlu havada çalışan çelik yapılar için bakım sıklığı nasıl belirleniyor?",
                cevap:
                    "Kıyıya yakınlık ve rüzgârın taşıdığı tuz yükü, bakım sıklığını doğrudan etkiler. Doğrudan liman kenarındaki yapılarda yıllık koruma turu genellikle yeterli olurken, çok yakın ve rüzgâra doğrudan açık noktalarda bu süre kısaltılabilir. İlk turda gördüğümüz yüzey kaybı ve pas yoğunluğu, bir sonraki turun ne zaman yapılması gerektiği konusunda somut bir gösterge verir; bu yüzden ilk yıldan sonra bakım sıklığını sahadan gelen bulguya göre ayarlarız.",
            },
            {
                soru: "Öğle saatinde iki il arası transfer neden önerilmiyor?",
                cevap:
                    "Yaz öğlesinde asfalt yüzey sıcaklığı yükselir ve lastik tekerlekli ağır ekipmanın uzun mesafe kendi motoruyla hareketinde bu, performans kaybına ve lastik üzerinde ek yüke yol açabilir. Ayrıca operatör için uzun süreli araç kullanımı, günün en sıcak diliminde ek bir yorgunluk kaynağıdır. Bu yüzden mümkün olduğunda transferleri sabaha veya akşamüstüne planlarız; zorunlu acil durumlarda öğle transferi yapılabilir ama bu istisnadır, kural değildir.",
            },
            {
                soru: "Mersin'deki tesisimiz için de aynı fiyat politikası mı geçerli?",
                cevap:
                    "Temel fiyatlandırma mantığı aynıdır — makine sınıfı, süre ve kalem sayısına göre hesaplanır. Fark yaratan tek unsur mesafeye bağlı nakliye payı ve liman sahası gibi ek izin süreci gerektiren yerlerde harcanan koordinasyon zamanıdır. Bu kalemler teklife ayrı satır olarak yazılır, gizli bir fark uygulanmaz. Adana ve Mersin'de aynı hafta içinde birleşik iş yaptırdığınızda nakliye payı bölündüğü için toplam maliyet genellikle ayrı ayrı yaptırmaktan daha düşük çıkar.",
            },
            {
                soru: "Konteyner sahasında elleçleme sürerken bakım yapılabilir mi?",
                cevap:
                    "Hareketli ekipmana yakın bir noktada çalışılacaksa hayır — o bölgenin geçici olarak durdurulması gerekir. Ancak taşıyıcı ayakların boyası veya hattan yeterince uzaktaki aydınlatma gibi kalemler, güvenli mesafe ve bariyer düzeniyle operasyon sürerken de yapılabilir. Kararı saha işletmecisiyle birlikte veririz; hangi bölümün durdurulacağı ve yeniden devreye alma yetkisinin kimde olduğu iş öncesi netleştirilmeden sepet kaldırılmaz.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-12. Mersin'in Adana'ya komşu il olduğu ve liman kenti niteliği kamuya açık coğrafi bilgidir; iki il arası sevkiyat düzeni, korozyon takibi ve saat planı firma pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
};

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
    "bolge:ceyhan": {
        h1: "Ceyhan OSB ve Enerji Yatırım Aksında Manlift Kiralama",
        giris: "Ceyhan’da manlift talebi, tarımsal üretimi işleyen tesislerle enerji yatırımlarının aynı ulaşım ve sanayi aksında bulunmasından doğar. Bu sayfa belirli bir tesis veya kapasite iddiasına dayanmaz; OSB parseli, tarımsal depo, boru-kablo hattı, çelik yapı ve enerji yardımcı tesislerinde karşılaşılan genel erişim koşullarını ele alır. Hedef yalnız yüksekliğe göre değil, üretimin durabileceği pencere, sıcak yüzey, enerji izolasyonu, yatay engel ve açık saha zeminiyle birlikte değerlendirilir. Çukurova yazında dış metal yüzey ve operatör ısı yükü çalışma saatini belirler; ağır dış işler serin saatlere alınır, öğle dilimi hazırlık veya uygun kapalı hacim işlerine ayrılır. Enerji aksı ifadesi, gerilimli hatta yaklaşma veya proses ekipmanına izinsiz müdahale hakkı vermez. Tesisin yetkili teknik ekibi güvenli bölgeyi teslim eder, operatör makineyi üretici sınırlarında konumlandırır ve her hücre teknik kabul ile kapanır.",
        maddeler: [
            { baslik: "OSB parselinde üretim ve bakım hücresi", metin: "Üretim holünde aydınlatma, havalandırma, kablo tavası ve çatı altı bağlantıları farklı ekiplerin listelerinde bulunabilir. Çalışma alanı bom-sepet zarfı ve alt düşme bölgesiyle ayrılır; forklift, vinç, askılı yük veya proses hareketi aynı hücreye girmez. Enerji kaynakları tesis prosedürüne göre güvenli duruma alınır. Aynı park konumundan erişilen hazır kalemler paketlenir, alet ve malzeme önceden hazırlanır. İş sonunda sökülen parçalar sayılır, koruyucular yerine takılır ve alan teknik sorumluya teslim edilmeden üretim yeniden açılmaz." },
            { baslik: "Enerji yardımcı yapılarında izin sınırı", metin: "Kablo güzergâhı, saha aydınlatması, yardımcı bina dışı veya boru köprüsü çevresinde çalışılacak noktanın enerji ve proses durumu işletme tarafından tanımlanır. Gerilimli bölüme güvenli yaklaşma korunamıyorsa yetkili ekip ayırma, yeniden açmayı önleme, gerilim yokluğu doğrulama ve gereken topraklama adımlarını uygular. Basınçlı ya da sıcak hat çevresinde tesisin iş izni geçerlidir. Manlift ekibi sistemi kapatmaz ve yeniden devreye almaz; güvenli erişim sağlar. Sözlü ‘kapalı’ bilgisiyle sepet yükseltilmez, her yeni bölüm ayrı teslim edilir." },
            { baslik: "Tarımsal depo ve kabul alanında ürün koruma", metin: "Tahıl, yem veya diğer tarımsal ürünün kabul ve depolama alanında çatı, mahya, elevatör çevresi ve aydınlatma işleri ürün akışından ayrılır. Açık ürün üstünde planlı çalışma yapılmaz; el aletleri bağlanır ve küçük parçalar kontrollü kapta tutulur. Kabul araçları ile platformun rotası kesişiyorsa zaman dilimleri ayrılır. Yığın veya ürün yüzeyi taşıyıcı zemin sayılmaz. Depo boşluk takvimi bakım listesine bağlanır. İş sonunda yabancı madde kontrolü ve alan temizliği işletme sorumlusu tarafından kabul edilmeden ürün akışı yeniden başlatılmaz." },
            { baslik: "Açık saha zemini ve sıcak saat planı", metin: "Dış sahada beton, sıkıştırılmış dolgu, kanal, menfez ve yol kenarı aynı taşıma gücüne sahip değildir. Operatör güzergâhı ve destek yüzeyini günlük kontrol eder; yağış veya saha değişikliği eski keşfi geçersiz kılabilir. Yaz sıcağında metal yüzey, hidrolik sistem ve personel için mola-gölge-su düzeni programın parçasıdır. Çatı, çelik ve boru hattı işleri serin pencereye yerleştirilir. Rüzgâr üretici sınırını aştığında bom indirilir. Hava nedeniyle duran dış işin yerine yalnız izni ve malzemesi önceden hazır iç hücre açılır; plansız alana girilmez." },
            { baslik: "Uzun programda park, şarj ve servis", metin: "Birden fazla vardiya süren işte makine düz, korunaklı ve yetkisiz erişime kapalı alanda kalır. Akülü sınıf için kuru, havalandırılan ve araç yolundan ayrılmış şarj noktası gerekir; kablo geçişe serilmez. Her vardiya başında lastik, korkuluk, kumanda, acil indirme, alarm ve görünür sızıntı kontrol edilir. Olağan dışı durumda kullanım durur, yetkisiz onarım yapılmaz ve servis zinciri başlatılır. Tamamlanan hücreler, açık izinler ve enerji durumu yazılı devredilir. Program uzarsa sonraki kapasite görülerek onay alınır; belirsiz süreli sahada kalış oluşmaz." },
        ],
        ekBolumler: [
            { baslik: "Ceyhan çalışma alanı eşleştirmesi", paragraflar: ["Ceyhan OSB ve enerji yatırım aksındaki genel alanlar, aşağıdaki hazırlık çerçevesiyle değerlendirilir; nihai sınıf gerçek saha ölçüsüne göre belirlenir."], tablo: { basliklar: ["Alan", "Erişim işi", "Ana kısıt", "Yaklaşım"], satirlar: [["Üretim holü","Üst tesisat","Hareketli ekipman","İzole hücre ve akülü sınıf"],["Enerji yardımcı alanı","Kablo ve bağlantı","Gerilim veya proses","Yetkili güvenli teslim"],["Tarımsal depo","Çatı ve elevatör çevresi","Ürün ve araç akışı","Boş pencerede çalışma"],["Boru-kablo köprüsü","Kontrol ve kaplama","Yatay engel","Eklemli erişim"],["Dış çelik yapı","Bağlantı ve boya","Sıcaklık, rüzgâr","Serin saatte bomlu"],["Park-şarj alanı","Uzun kalış","Trafik ve enerji","Korunaklı teslim"]] } },
            { baslik: "İş paketini duruş penceresine bağlamak", paragraflar: ["Hedefler enerji bölgesi, park konumu ve ortam türüne göre paketlenir. Her paket için ölçü, malzeme, sorumlu kişi, izolasyon yöntemi ve uygulanabilir saat yazılır. Kritik iş önce, üretim sürerken güvenle yapılabilecek kalem sonra planlanır. Son dakika hedefi mevcut iznin otomatik uzantısı sayılmaz; yeni geometri ve enerji kontrolü ister.", "Duruş başlamadan makine kabulü, kullanıcı teslimi ve rota kontrolü bitirilir. Paket kapanınca alet-parça sayımı ve teknik kabul yapılır. Kontrollü devreye almada yeniden erişim gerekirse sistem tekrar güvenli duruma alınır. İade kararı açık hedefler ve test desteği görüldükten sonra verilir; yalnız bakım personeli sahadan çıktı diye ünite çekilmez."] },
            { baslik: "Teklif için doğrulama dosyası", paragraflar: ["Girişten hedefe rota, en dar açıklık, hedef kotu, yatay uzaklık, zemin, kanal ve üst engeller fotoğraf ve ölçüyle paylaşılır. İşin elektrik, mekanik veya sıcak çalışma niteliği; üretimin durabileceği saat; açık ürün, araç ve vinç hareketi belirtilir. Dış çalışma için hava, kapalı çalışma için egzoz ve şarj koşulu kaydedilir.", "Belgeye belirli tesis, üretim kapasitesi veya doğrulanmamış proses ayrıntısı eklenmez. Saha bilgisi eksikse kesin model sözü verilmez; canlı görüntü veya keşif yapılır. Teklif makine sınıfı, süre, taşıma, operatör seçeneği, park-şarj ve bekleme koşulunu açık gösterir. Hacı Sabancı OSB için ikinci bir slug üretilmez; mevcut Adana OSB kaydı korunur."] },
        ],
        sss: [
            { soru: "Ceyhan’daki enerji yatırımlarında gerilimli hatta çalışıyor musunuz?", cevap: "Gerilim altında çalışma varsayımı yapmayız. Hattan sorumlu yetkili ekip, yaklaşma mesafesi korunamıyorsa beslemeyi ayırır, yeniden açmayı önler, çalışma noktasında gerilim yokluğunu doğrular ve gereken topraklamayı kurar. Komşu enerjili bölümler de değerlendirilir. Platform operatörü elektrik tesisini ayırmaz; güvenli bölgenin teslimini alır ve makineyi üretici sınırında yönetir. Özel eğitim, ekipman ve yazılı yöntem gerektiren istisnai işler ayrı kapsamdır. Aciliyet veya kısa süre, elektriksel güvenlik zincirini kısaltmaz." },
            { soru: "OSB ve tarımsal depo işini aynı makineyle yapabilir miyiz?", cevap: "Kot, geçiş, zemin, enerji türü ve hijyen koşulları uyuyorsa mümkün olabilir, fakat otomatik kabul edilmez. Temiz veya ürünle ilişkili hacim önce planlanır; dış ya da kirli alanda çalışmış ünite hazırlıksız geri alınmaz. Depo yığını taşıyıcı yüzey değildir ve açık ürün üstünde planlı bakım yapılmaz. OSB holünde dar koridor, depoda dış zemin farklı sınıf isteyebilir. Her hedef erişim diyagramına oturtulur. İki makine gerekiyorsa bunu sahada deneme yaparak değil teklif aşamasında açıklarız." },
            { soru: "Yaz sıcağında çalışma tamamen durur mu?", cevap: "Tamamen durması gerekmez; program sıcaklığa göre yeniden dağıtılır. Güneş alan çelik, çatı ve dış hat işleri serin saatlere alınır; öğle diliminde gölge, su ve dinlenme düzeni uygulanır veya uygun kapalı hücreye geçilir. Ekipman üretici sıcaklık sınırları ve saha risk değerlendirmesi izlenir. Metal yüzey ve personel ısı yükü kontrol edilmeden işi sürdürmeyiz. Hız baskısı mola ihtiyacını ortadan kaldırmaz. Gece ya da erken çalışma varsa aydınlatma, saha yetkilisi ve güvenli erişim ayrıca hazırlanır." },
            { soru: "Tarımsal depo doluyken çatı bakımına çıkabilir misiniz?", cevap: "Planlı işi depo boşluk penceresine almayı tercih ederiz. Ürün yığınına makine veya destek ayağı konmaz; düşebilecek küçük parça bile yabancı madde riski yaratır. Acil sızıntıda ürün etki alanından uzaklaştırılır, alan fiziksel olarak ayrılır ve mümkünse dışarıdaki sağlam zeminden sınırlı müdahale yapılır. El aletleri bağlanır, küçük parçalar kontrollü tutulur ve iş sonunda sayım yapılır. Ürün korunamıyor veya sağlam konum bulunamıyorsa çalışma ertelenir. Aciliyet, ürün güvenliğini görmezden gelme gerekçesi değildir." },
            { soru: "Makine birkaç vardiya sahada kalırsa kim kontrol eder?", cevap: "Yetkilendirilmiş kullanıcı her vardiya öncesinde lastik, korkuluk, kumanda, acil indirme, alarm ve görünür sızıntıyı kontrol eder. Kiralama tarafının teknik bakımı bu günlük kontrolün yerine geçmez. Makine düz, korunaklı ve yetkisiz erişime kapalı alanda park edilir; akülü sınıf güvenli noktada şarj edilir. Olağan dışı belirti görülürse kullanım kesilir ve servis aranır, emniyet sistemi üzerinde yetkisiz müdahale yapılmaz. Park, şarj, açık izin ve tamamlanan işler vardiyalar arasında yazılı devredilir." },
            { soru: "Hacı Sabancı OSB için ayrı bir sayfa açacak mısınız?", cevap: "Hayır. Proje belgesine göre mevcut `adana-osb` kaydı Hacı Sabancı OSB’nin karşılığıdır; aynı bölge için ikinci slug üretmiyoruz. Bu sayfa yalnız Ceyhan OSB ve enerji yatırım aksındaki farklı erişim bağlamını ele alır. Talebiniz Adana OSB içindeyse mevcut sayfanın rotası ve içeriği kullanılır. Aynı yer için iki ayrı adla içerik açmak hem kullanıcıyı hem sitemap ve içerik eşleşmesini belirsizleştirir. Konum açık adres ve domain kaydıyla doğrulanır, doğru mevcut bölge sayfasına yönlendirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Ceyhan OSB’nin varlığı, ilçenin tarım ve enerji yatırımlarıyla ilişkili aksı uygulama belgesindeki kamuya açık genel çerçevedir; enerji teslimi, ürün koruma, sıcak hava ve vardiya planı sektör geneli pratiktir. Özel tesis, kapasite, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:saricam": {
        h1: "Sarıçam’da OSB Komşusu Tesisler İçin Planlı Manlift Bakımı",
        giris: "Sarıçam için manlift planının ayırt edici tarafı, ilçenin Adana’daki büyük OSB alanına komşuluğunun bakım rutinine sağladığı erişim kolaylığıdır. Bu sayfa OSB’nin kendisi için ikinci kayıt açmaz; mevcut `adana-osb` içeriği korunur. Sarıçam’daki OSB dışı veya komşu tesis talepleri, bölgedeki planlı makine günlerine bağlanabilir; ancak yakınlık teknik uygunluğu veya anlık teslimi garanti etmez. Tekstil ve tarım sanayisine hizmet veren depo, atölye, paketleme veya yardımcı yapıların kapı, zemin, tavan ve üretim penceresi ayrı görülür. Rutin bakım yaklaşımı arıza çıktığında tek nokta çağırmak yerine aydınlatma, havalandırma, çatı, kapı ve dış saha hedeflerini periyodik turda toplamaktır. Yaz sıcaklığı dış işleri serin saatlere iter; kapalı hacimde egzozsuz sınıf ve havalandırma koşulu öne çıkar. Her tesis kendi iş emri, güvenli alan teslimi ve kapanış kaydını alır.",
        maddeler: [
            { baslik: "OSB komşuluğunu servis gününe çevirmek", metin: "Bölgede planlanan makine hareketi Sarıçam’daki uygun kısa veya orta süreli işe bağlanabilir. Talep için tarih aralığı, makine sınıfı, giriş, hedef ve gerçek çalışma süresi önceden doğrulanır. OSB ana işinin teknik kapanışı görülmeden ünite çekilmez; Sarıçam hedefi de sırf yakın olduğu için programa eklenmez. Uygun sınıf yoksa farklı tarih ya da ayrı sevkiyat sunulur. Varış penceresi yazılı paylaşılır ve değişiklik erken bildirilir. Paylaşılan lojistik, her tesisin izin ve sorumluluğunu birleştirmez; teklifler ve teslim kayıtları ayrı kalır." },
            { baslik: "Tekstil hacminde toz ve temiz erişim", metin: "İplik, dokuma veya tekstille ilişkili kapalı hacimde çatı altı aydınlatma, havalandırma ve filtre çevresi bakımından önce işletmenin toz ve yangın risk değerlendirmesi alınır. Akülü ve egzozsuz sınıf değerlendirilir; makine temizliği ve görünür sızıntı kontrolü yapılır. Kıvılcım çıkaran işlem ayrı izin ister ve uygun olmayan ortamda yürütülmez. Üretim hareketi çalışma hücresinden fiziksel olarak ayrılır. El aletleri bağlanır, gevşek lif ve birikim işletmenin yöntemiyle temizlenir. İş bitiminde parça sayımı ve alan kabulü yapılmadan hat yeniden açılmaz." },
            { baslik: "Tarımsal işleme ve depo bakım rutini", metin: "Ürün kabul saçağı, depo aydınlatması, mahya, elevatör çevresi, havalandırma ve kapı mekanizması aynı bakım turunda toplanabilir. Açık ürün üzerinde çalışma yapılmaz; kabul aracı ve platform hareketi saat olarak ayrılır. Ürün boşluk takvimi, çatı ve iç tesisat için doğal pencere oluşturur. Yığın yüzeyi zemin kabul edilmez. Tozlu veya ürünle temas eden hacimden sonra makine başka temiz bölüme geçecekse işletmenin kabul ettiği temizlik uygulanır. Periyodik kayıt, bir sonraki turda arızaya değil gerçek kullanım ve gözleme dayalı kapsam oluşturur." },
            { baslik: "Sıcak iklimde dış ve iç iş sırası", metin: "Cephe, çatı kenarı, oluk, dış aydınlatma ve çelik eleman işleri yazın serin saatlere yerleştirilir. Günün sıcak bölümünde izin ve malzemesi hazır kapalı hücreye geçilebilir; kapalı ortamın havalandırması ve operatör ısı yükü yine izlenir. Geniş yüzeyli malzeme rüzgâr etkisini artırır ve sepette kaldırılmaz. Üretici rüzgâr veya sıcaklık sınırı aşıldığında çalışma durur. Rutin tur, hava bağımlı ve bağımsız kalemleri birlikte tuttuğu için gün tamamen kaybolmadan sıra değişebilir; plansız hedef açılmaz." },
            { baslik: "Periyodik kayıttan sonraki bakım turuna", metin: "Her turda tamamlanan hedef, kullanılan park noktası, zemin, erişim engeli, gecikme nedeni ve makine sınıfı kaydedilir. Bu bilgi sonraki periyodu ve süreyi iyileştirir; sabit bir aralık dayatmaz. Tesis yerleşimi veya üretim takvimi değiştiğinde eski eşleşme yeniden doğrulanır. Makine birkaç vardiya kalırsa park, şarj, yetkili kullanıcı ve günlük kontrol yazılı devredilir. Olağan dışı durumda kullanım durur. Tur sonunda açık iş güvenli durumuyla kayda girer ve yeni programa alınır; sözlü olarak belirsiz bırakılmaz." },
        ],
        ekBolumler: [
            { baslik: "Sarıçam rutin bakım alanları", paragraflar: ["OSB’ye komşu tesislerde bakım turu, sektör adı yerine ortam ve operasyon penceresine göre eşleştirilir."], tablo: { basliklar: ["Alan", "Bakım kalemi", "Kısıt", "Program"], satirlar: [["Tekstil holü","Aydınlatma, emiş, kanal","Lif-toz, üretim","Temiz akülü, ayrılmış hücre"],["Tarımsal depo","Mahya, armatür, kapı","Ürün doluluğu","Boşluk döneminde"],["Ürün kabul","Saçak ve dış ışık","Araç trafiği","Kabul dışı slot"],["Atölye","Üst tesisat","Sıcak iş, tezgâh","İzinli duruş"],["Dış cephe","Oluk ve kaplama","Sıcaklık, rüzgâr","Serin saat"],["Uzun kalış","Park ve şarj","Yetkisiz erişim","Yazılı vardiya devri"]] } },
            { baslik: "Bakım turu öncesi tesis kartı", paragraflar: ["Hedefler, kot, yatay engel, kapı-koridor, zemin ve sepette taşınacak malzemeyle kaydedilir. Üretimin durabileceği saat, enerji yetkilisi, ürün veya toz durumu, araç ve vinç hareketi belirtilir. Girişten hedefe ardışık fotoğraf istenir. Yakınlık keşif ihtiyacını ortadan kaldırmaz.", "Kart, OSB çevresindeki mevcut makineyle karşılaştırılır. Uygunsa servis slotu kesinleşir; değilse başka sınıf veya ayrı tarih planlanır. Periyodik işte önceki kart referanstır fakat güncel durum teyit edilir. Yeni istif, kapı veya üretim ekipmanı erişimi değiştirmiş olabilir. Varsayım değişirse teklif ve sıra da güncellenir."] },
            { baslik: "Rutin bakımın kapanış standardı", paragraflar: ["Her hücre tamamlandığında alet-parça sayımı, bağlantı kontrolü ve işletme sorumlusu kabulü yapılır. Enerji veya hareketli ekipmanı yeniden devreye alma kararı tesis yetkilisine aittir. Açık ürün, atık veya gevşek eleman bırakılmaz. Bariyer makine tamamen çekilmeden kaldırılmaz.", "Tur sonunda makinenin görünür durumu, şarj-yakıt ve sonraki görev uygunluğu kontrol edilir. Sızıntı, alarm veya olağan dışı ses varsa ünite başka tesise gönderilmez. Bekleme nedenleri ve gerçek kullanım kaydı sonraki turu düzeltir. Böylece komşuluk avantajı acele servise değil, tekrarlanabilir bakım düzenine dönüşür."] },
        ],
        sss: [
            { soru: "Sarıçam için Hacı Sabancı OSB adına yeni bir sayfa açılıyor mu?", cevap: "Hayır. Uygulama belgesine göre mevcut `adana-osb` kaydı Hacı Sabancı OSB’nin kendisidir ve ikinci bir slug oluşturulmaz. Sarıçam sayfası OSB sınırındaki içeriği kopyalamaz; OSB’ye komşu ilçedeki tesislerin rutin bakımını ve planlı makine günlerine bağlanmasını anlatır. Talep OSB içindeyse mevcut Adana OSB kaydı, Sarıçam’daki ayrı adresteyse bu sayfanın keşif ve servis düzeni kullanılır. Açık adres ile bölge doğrulaması teklif öncesinde yapılır." },
            { soru: "OSB’deki makine aynı gün Sarıçam tesisimize gelebilir mi?", cevap: "Teknik sınıf, ana işin kapanışı, sizin saha hazırlığınız ve güvenli süre payı uygunsa mümkün olabilir. Kesin söz için hedef kotu, geçiş, zemin, ortam ve tarih aralığı önceden kartlanır. Ana OSB işi tahminle değil teknik teslimle kapandıktan sonra çıkış yapılır. Uygun süre kalmıyorsa görev geceye itilmez, yeni slot verilir. Makine sınıfı uyumsuzsa sırf yakın olduğu için gönderilmez. Kesin saat gerektiren veya uzun iş için ayrı sevkiyat daha doğru olabilir." },
            { soru: "Tekstil tesisinde pamuk veya lif tozu varken çalışabilir misiniz?", cevap: "İşletmenin risk değerlendirmesi, temizlik ve ortam uygunluğu olmadan başlamayız. Birikmiş lif ve toz tesis yöntemine göre uzaklaştırılır, havalandırma kontrol edilir ve akülü egzozsuz sınıf değerlendirilir. Kıvılcım çıkaran işlem ayrı izin ve uygun koşul gerektirir; platform kullanılması sıcak çalışma riskini ortadan kaldırmaz. Üretim çalışma hücresinden ayrılır, aletler bağlanır ve iş sonunda parça kontrolü yapılır. Ortam güvenli biçimde hazırlanamazsa bakım uygun duruşa taşınır." },
            { soru: "Tarımsal depoda ürün varken rutin bakım yapılır mı?", cevap: "Planlı çatı ve üst tesisat işini ürünün çıktığı pencereye yazmayı öneririz. Yığın taşıyıcı zemin değildir ve düşen parça ürün güvenliğini etkiler. Acil durumda ürün etki alanından uzaklaştırılır, çalışma bölgesi ayrılır ve mümkünse dış sağlam zeminden sınırlı müdahale yapılır. Açık ürün üstünde planlı çalışma yürütülmez. El aletleri ve küçük parçalar kontrol edilir; işletme temizlik ve yabancı madde kabulünü kapatmadan depo yeniden kullanılmaz." },
            { soru: "Rutin bakım sıklığını sabit olarak belirliyor musunuz?", cevap: "Sahadan doğrulanmayan sabit aralık dayatmayız. İlk turda yapı, kullanım, toz, sıcaklık, trafik ve gözlenen aşınma kaydedilir. İşletmenin üretici talimatları, yasal kontrolleri ve kendi bakım planı esas alınır. Sonraki tur zamanı bu verilerle oluşturulur. Yoğun kullanım veya değişen ortam aralığı kısaltabilir, düşük kullanım uzatabilir. Biz erişim ve saha planını tekrar edilebilir hâle getiririz; ekipmanın teknik bakım periyodunu yetkisiz biçimde yeniden tanımlamayız." },
            { soru: "Makine tesisimizde kalırsa gece şarj edilebilir mi?", cevap: "Akülü sınıf için elektrik hattının uygunluğu tesisçe doğrulanmış, kuru, havalandırılan ve araç-yaya trafiğinden ayrılmış şarj alanı gerekir. Kablo geçiş yoluna serilmez. Makine düz ve korunaklı park edilir, yetkisiz kullanım engellenir. Vardiya başında günlük görsel kontrol yapılır. Alarm, hasarlı bağlantı, olağan dışı ısınma veya sızıntıda kullanım ve şarj kesilir, servis aranır. Park ve şarj sorumluluğu teslim tutanağında açıkça yazılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Sarıçam’ın Adana OSB’ye komşu ilçe bağlamı ve Adana’nın tekstil-tarım sanayisi uygulama belgesindeki kamuya açık genel çerçevedir; servis günü, toz-ürün ayrımı ve sıcak saat planı sektör geneli pratiktir. Hacı Sabancı OSB için ikinci slug, özel tesis, kapasite, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:kozan": {
        h1: "Kozan OSB ve Tarıma Dayalı Sanayide Manlift Kiralama",
        giris: "Kozan’da manlift ihtiyacı, ilçe ölçeğindeki tarıma dayalı sanayi ile Kozan OSB’deki üretim ve depolama yapılarının bakımından oluşur. Belirli ürün, tesis veya kapasite uydurmadan genel zincire bakarız: hammadde kabulü, işleme, paketleme, depo, sevkiyat ve bunları besleyen çatı-altı tesisatlar. Büyük kent OSB’sinin sürekli makine havuzu burada varsayılmaz; iş listesi ve tarih önceden doğrulanır, uygun ünite ilçedeki programa ayrılır. Tarımsal ürünün sezonu bakım penceresini daraltabilir; ürün içeride veya hat faalken yapı boş sayılmaz. Çukurova sıcaklığı dış metal ve çatı işlerini serin saatlere taşır. Kapalı ürün hacminde egzozsuz, temiz ve sızıntısız sınıf; açık veya kaba zeminde taşıma gücüne uygun ünite değerlendirilir. Her talep, sektör etiketine değil gerçek kot, engel, zemin, hijyen ve duruş koşuluna göre eşleştirilir.",
        maddeler: [
            { baslik: "Hammadde kabulünde araç ve platform ayrımı", metin: "Kabul saçağı, kapı üstü, dış aydınlatma ve oluk bakımı kamyon veya tarımsal araç hareketiyle aynı cephede olabilir. Çalışılan alan geçici olarak kabul trafiğine kapatılır, yaklaşan araçlar başka noktaya yönlendirilir ve sepet zarfı bariyerlenir. Kapı ya da rampa ekipmanı üzerinde iş varsa sistem yetkili kişi tarafından güvenli duruma alınır. Bütün kabul hattını süresiz durdurmak yerine hedefler sırayla kapanır. İşlev kontrolü ve alan teslimi tamamlandıktan sonra trafik açılır. Kısa işlem olduğu için aktif araç yolunun üstüne bom uzatılmaz." },
            { baslik: "İşleme hacminde ürün ve yabancı madde kontrolü", metin: "Aydınlatma, havalandırma, kablo, üst boru ve askı bakımında açık ürünün bulunduğu bölüm ayrılır veya boşaltılır. Makine girişten önce temizlenir ve sızıntı kontrolü yapılır; el aletleri bağlanır, küçük parçalar kontrollü kapta tutulur. Egzozlu sınıf kapalı ürün hacminde kullanılmaz. İş sonunda alet-parça sayımı yapılır ve alan işletmenin temizlik prosedürüne hazır teslim edilir. Teknik bakımın bitmesi üretimin hemen açılacağı anlamına gelmez; hijyen kabulünü tesis sorumlusu kapatır. Ürün güvenliği koşulu kurulamıyorsa iş başka pencereye taşınır." },
            { baslik: "Depo doluluk takvimine göre çatı ve üst tesisat", metin: "Depo çatısı, mahya havalandırması, oluk ve iç aydınlatma işleri ürün doluluğuyla birlikte planlanır. Yığın yüzeyi makine zemini değildir ve üstten düşen parça parti güvenliğini etkiler. Boşalma ile yeni kabul arasındaki zaman bakım penceresi olarak kullanılır. İç ve dış kalemler ayrılır; hava dış işi durdurursa boş hacimde hazır üst tesisata geçilebilir. Depo sorumlusu hangi bölümün ne zaman güvenle açılacağını bildirir. Tamamlanan alan görsel kontrol ve temizlik kabulüyle kapanır; açık çatı veya gevşek bağlantı sonraki vardiyaya belirsiz bırakılmaz." },
            { baslik: "OSB parselinde enerji ve hareket izolasyonu", metin: "Konveyör, elevatör, fan, kapı ve diğer hareketli sistemlerin durgun görünmesi güvenli olduklarını kanıtlamaz. Çalışılacak ekipman tesis prosedürüne göre tanımlanır, enerji kaynakları ayrılır ve yeniden çalıştırma önlenir. Platform operatörü izolasyonu yapmaz; güvenli hücre teslimini bekler. Komşu faaliyet fiziksel olarak ayrılabiliyorsa sürebilir, ancak sepet altından yük veya personel geçirilmez. Her hücredeki hazır kalemler tamamlandıktan sonra koruyucular, aletler ve bağlantılar kontrol edilir. Yeniden devreye alma kararı tesis yetkilisine aittir." },
            { baslik: "İlçe programında makinenin sahada kalması", metin: "Birden fazla mevcut yapı veya birkaç vardiyalık bakım için makinenin günlük geri dönmesi yerine güvenli sahada kalışı değerlendirilebilir. Düz ve korunaklı park, yetkisiz kullanım kontrolü, akülü ünitede uygun şarj ve vardiya başı görsel kontrol gerekir. İşler ortam sırasına göre dizilir; temiz ürün hacmi önce, dış veya kirli alan sonra tamamlanır. Hava ve sezon değişikliği günlük rotayı etkileyebilir. Olağan dışı ses, alarm veya sızıntıda kullanım durur. Program uzatması sonraki kapasite görülerek yazılı kararlaştırılır; açık uçlu kiralama oluşmaz." },
        ],
        ekBolumler: [
            { baslik: "Kozan tarımsal sanayi iş akışı", paragraflar: ["Tarıma dayalı sanayi, ürünün kabulünden sevkiyatına kadar farklı erişim koşulları oluşturur."], tablo: { basliklar: ["Bölüm", "Yüksek iş", "Ana kısıt", "Planlama"], satirlar: [["Kabul saçağı","Kapı, oluk, aydınlatma","Araç hareketi","Kabul dışı pencere"],["İşleme hacmi","Havalandırma, üst tesisat","Açık ürün, hijyen","Temiz akülü ve ayrım"],["Depo","Çatı, mahya, armatür","Doluluk","Boşluk takvimi"],["Hareketli hat çevresi","Fan ve bağlantı","Beklenmedik hareket","Enerji izolasyonu"],["Dış saha","Cephe ve çelik","Zemin, sıcaklık","Serin saatte uygun bom"],["Uzun program","Çoklu hedef","Park ve şarj","Yazılı vardiya devri"]] } },
            { baslik: "Sezon öncesi bakım listesini hazırlamak", paragraflar: ["İşletme üretim ve ürün kabul takvimini paylaşır; hangi hacmin boş, hangi hattın durabilir olduğu işaretlenir. Çatı, aydınlatma, havalandırma, kapı ve dış saha hedefleri aynı listeye alınır fakat hijyen ve enerji koşuluna göre paketlenir. Malzeme ile yetkili ekip bakım penceresinden önce hazırlanır.", "Tarih değişirse yalnız makine günü değil depo boşluğu, temizlik, izolasyon ve vardiya yeniden bağlanır. Acil arıza kritik müdahale olarak ayrılır; birikmiş planlı bakım aynı kısa pencereye zorlanmaz. Sezon sonunda gerçekleşen süre ve gecikme nedeni kaydedilir, sonraki program bu hafızayla geliştirilir."] },
            { baslik: "Teklif ve saha kabul paketi", paragraflar: ["Girişten hedefe rota, kapı-koridor, hedef kotu, yatay mesafe, zemin ve üst engeller paylaşılır. Ürün doluluğu, hijyen kuralı, hareketli ekipman, enerji yetkilisi, araç saatleri ve dış hava etkisi belirtilir. Yakın çekim hedef fotoğrafı tek başına yeterli değildir.", "Makine gerçek erişim diyagramı ve ortam koşuluyla seçilir. Aynı sınıf bütün zinciri kapatmıyorsa iki aşama teklif edilir. Taşıma, süre, operatör, park-şarj ve bekleme koşulu görünür olur. Belirli ürün kapasitesi veya tesis adı üzerinden vaat verilmez. Güncel saha eski kayıttan farklıysa sınıf yeniden doğrulanır."] },
        ],
        sss: [
            { soru: "Kozan OSB’de hangi sektörlere hizmet veriyorsunuz?", cevap: "Sayfayı belirli firma veya ürün listesine bağlamıyoruz. Tarıma dayalı sanayi bağlamında kabul, işleme, paketleme, depo ve sevkiyat yapılarına; OSB’de ise genel üretim holü, üst tesisat, kapı ve dış saha erişimine bakıyoruz. Makineyi sektör adına göre değil hedef kotu, yatay engel, giriş, zemin, kapalı-açık ortam, ürün ve enerji koşuluna göre seçiyoruz. Talebiniz gerçek saha bilgisiyle değerlendirilir. Belgeyle doğrulanmayan tesis, kapasite veya üretim iddiası teklifin parçası yapılmaz." },
            { soru: "Ürün sezonunda bakım yapılabilir mi?", cevap: "Yalnız üretim ve ürün akışından güvenle ayrılabilen kritik müdahaleler uygun pencereye alınabilir. Açık ürün üzerinde planlı çalışma yapılmaz, kabul ve sevkiyat trafiği sepet alanından ayrılır. Birikmiş bakım listesini sezon içine sıkıştırmak yerine ürün girmeden önce veya boşalma sonrasında tamamlamayı öneririz. Acil durumda kapsam arızayı güvenli biçimde gidermekle sınırlanabilir. Malzeme, izolasyon ve temizlik önceden hazırlanır. Sezon baskısı enerji, hijyen veya düşen parça kontrolünü azaltmaz." },
            { soru: "Depo doluyken çatı sızıntısına müdahale eder misiniz?", cevap: "Önce ürün etki alanından uzaklaştırılır ve güvenli çalışma bölgesi kurulur. Yığın üzerine makine veya ayak konmaz. Mümkünse dışarıdaki sağlam zeminden sınırlı geçici kapatma yapılır; kalıcı çatı ve iç tesisat işi depo boşluğuna yazılır. Aletler bağlanır, küçük parçalar kontrol edilir ve iş sonunda yabancı madde sayımı yapılır. Ürün korunamıyor veya sağlam konum yoksa çalışma ertelenir. Sızıntının acil olması bütün partiyi riske atacak yöntemi kabul etme gerekçesi değildir." },
            { soru: "Kapalı işleme alanında dizel manlift kullanılabilir mi?", cevap: "Standart yaklaşımımız egzoz üretmeyen akülü sınıftır. Bunun yanında giriş ölçüsü, dönüş, zemin, hedef ve yatay engel doğrulanır. Akülü olması hijyen uygunluğunu tek başına sağlamaz; makine temizlenir, görünür sızıntı kontrol edilir ve işletmenin giriş prosedürü uygulanır. Şarj noktası kuru, havalandırılan ve araç yolundan ayrı olmalıdır. Dış saha ünitesinin içeri geçmesi gerekiyorsa enerji türü ile alt takım temizliği yeniden değerlendirilir. Uygun değilse ayrı iç saha makinesi planlanır." },
            { soru: "Aynı kiralamada birkaç tesise gidilebilir mi?", cevap: "Makine sınıfı, tarihler, temizlik sırası ve saha koşulları uyuyorsa ilçe programı kurulabilir. Her adresin giriş, zemin, hedef, enerji, ürün ve yerel sorumlu kartı ayrı hazırlanır. Temiz hacimler dış veya kirli işlerden önce sıralanır. Bir tesisin gecikmesi diğerinin iznini veya teslimini değiştirmez; sözleşmeler ayrı kalır. Hazır olmayan hedef bütün rotayı bekletmez. Başka sınıf gerektiren iş sırf yakın diye programa alınmaz. Birleştirme lojistiği verimli kılar, güvenlik sorumluluklarını birleştirmez." },
            { soru: "Yazın dış saha için hangi saatleri öneriyorsunuz?", cevap: "Kesin saat, günün hava ve tesis koşuluna göre belirlenir; uydurma sabit aralık vermeyiz. Genel yaklaşım, güneş alan metal ve çatı işlerini serin saatlere taşımak, sıcak bölümde dinlenme-hidrasyon veya uygun kapalı iş paketine geçmektir. Rüzgâr ve üretici sıcaklık sınırları takip edilir. Gece çalışılacaksa aydınlatma, saha yetkilisi ve trafik ayrımı hazırlanır. Operatörün ısı stresi belirtileri görmezden gelinmez. İş programı hava tahminiyle teyit edilir ve gerektiğinde güvenlik lehine değiştirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Kozan OSB’nin varlığı ve ilçenin tarıma dayalı sanayi bağlamı uygulama belgesindeki kamuya açık genel çerçevedir; sezon, ürün koruma, enerji izolasyonu ve saha programı sektör geneli pratiktir. Özel tesis, ürün kapasitesi, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:adana-yumurtalik-serbest-bolgesi": {
        h1: "Adana Yumurtalık Serbest Bölgesi ve Liman Aksında Manlift Kiralama",
        giris: "Adana Yumurtalık Serbest Bölgesi için manlift işi, serbest bölge girişi ile liman aksındaki lojistik hareketin aynı takvimde yönetilmesini gerektirir. Bu kayıt belirli terminal, işletme, gemi, yük veya kapasite iddiası içermez. Genel çalışma alanları depo ve atölye üst tesisatı, dış aydınlatma, kapı-saçak, çelik yapı, boru-kablo geçişi ve bakım hücreleridir. Makine yalnız teknik olarak uygun olmakla kalmamalı; giriş evrakı, araç kabulü, saha refakati, indirme alanı ve geri çıkış penceresi de hazır olmalıdır. Liman yönündeki hareketli yük, ağır araç ve kaldırma operasyonu sepetli çalışmadan fiziksel ve zamansal olarak ayrılır. Tuzlu-nemli ortam hakkında doğrulanmamış tesis ayrıntısı üretmeden, açık kıyı koşullarında rüzgâr ve yüzey kontrolü genel risk olarak ele alınır. Çukurova sıcağı dış metal işleri serin saate taşır. Her bölüm işletme yetkilisinin güvenli teslimiyle açılır ve teknik kabul ile kapanır.",
        maddeler: [
            { baslik: "Serbest bölge girişini iş başlangıcından önce kapatmak", metin: "Personel, araç ve ekipman için istenen giriş bilgileri saha işletmesinin prosedürüne göre önceden tamamlanır. Taşıyıcı kabul saati, indirme alanı, refakat ve yerel sorumlu teyit edilir. Eksik evrakı kapıda çözmek bakım penceresini tüketir ve ağır aracı bekletir. Makine sahaya girdiğinde görünür durum kaydı alınır, iç rota güncel trafik ve istife göre yürünür. Giriş izni çalışma izni değildir; hedef hücrenin enerji, hareket ve alt alan teslimi ayrıca yapılır. Değişen tarih veya kullanıcı bilgisi eski onaya otomatik eklenmez." },
            { baslik: "Liman aksında hareketli yükten ayrılmak", metin: "Vinç, forklift, çekici veya başka yük taşıma operasyonunun zarfıyla platformun bom-sepet alanı kesişmez. Askılı yük altında ve salınım yönünde personel bulunmaz. Çalışma hücresi yalnız makine tabanına koni koyarak değil, üst hareket ve düşme alanıyla birlikte kapatılır. Operasyon sürmek zorundaysa fiziksel olarak ayrılmış başka bölüm kullanılır; ayrım mümkün değilse bakım düşük trafik penceresine alınır. Platform yük elleçleme aracı değildir ve sepette ağır yük taşınmaz. Alanın yeniden açılmasına saha operasyon sorumlusu, iş tesliminden sonra karar verir." },
            { baslik: "Depo, kapı ve saçak bakım slotu", metin: "Depo aydınlatması, algılama veya üst tesisat ile yükleme kapısı, fotosel, saçak ve dış armatür işleri farklı operasyon pencereleri ister. İç depo hücresi stok ve araç hareketinden ayrılır; kapı cephesi ise kapı bazında sıraya alınır. Hangi kapının ne zaman boş kalacağı saha yönetiminden alınır. Rampa veya motor güvenli duruma getirilir. Aynı konumdan erişilen hazır işler tek pakette kapanır. İş sonunda alet-parça kontrolü yapılır, kapı işlevi yetkili tarafından doğrulanır ve yalnız tamamlanan alan yeniden kullanıma açılır." },
            { baslik: "Açık saha rüzgârı, sıcaklık ve yüzey kontrolü", metin: "Kıyıya açık saha koşullarında rüzgâr günlük programı etkileyebilir; makinenin üretici sınırı aşıldığında bom indirilir. Geniş yüzeyli parça sepette taşınmaz. Yazın güneş alan çelik ve dış cephe işleri serin saate yerleştirilir, mola ve hidrasyon planlanır. Tuz ve nem etkisiyle ilgili belirli korozyon oranı uydurulmaz; saha günü yüzey, bağlantı ve makine temizliği görsel olarak kontrol edilir. Zemin beton görünse bile rögar, kanal ve kenarlar işaretlenir. Hava dış işi durdurursa yalnız önceden hazır kapalı hücreye geçilir." },
            { baslik: "Çıkış, temizlik ve sonraki sevkiyat", metin: "Program kapanınca açık izinler, alet ve parçalar, makine görünümü, enerji ve temizlik kontrol edilir. Serbest bölgeden çıkış ve taşıyıcı yükleme saati saha operasyonuyla planlanır; geliş alanının yine boş olacağı varsayılmaz. Makine başka gıda veya tekstil hacmine gidecekse dış saha kalıntısı ve sızıntı açısından hazırlanır. Olağan dışı durumda sonraki işe gönderilmez. Uzatma yeni kapasite ve çıkış penceresiyle yazılı onaylanır. Teknik teslim, saha çıkışı ve iade kaydı ayrı kapılardır; bakım ekibinin son işi bitirmesi otomatik çıkış anlamına gelmez." },
        ],
        ekBolumler: [
            { baslik: "Serbest bölge-liman aksı çalışma kapıları", paragraflar: ["Manlift programı girişten çıkışa kadar birbirine bağlı kontrol kapılarıyla yürür."], tablo: { basliklar: ["Kapı", "Ana kontrol", "Sorumlu hazırlık", "Kapanış"], satirlar: [["Giriş","Personel, araç, ekipman kabulü","Evrak ve refakat","Saha kabulü"],["İndirme","Düz alan ve trafik ayrımı","Taşıyıcı ile saha sorumlusu","Durum kaydı"],["Çalışma hücresi","Enerji ve hareket ayrımı","Teknik-operasyon ekipleri","İş izni açık"],["Bakım paketi","Hazır hedef ve malzeme","Bakım ekibi","Teknik teslim"],["Çıkış","Yükleme ve saha trafiği","Operasyon sorumlusu","Araç çıktı"],["Sonraki görev","Temizlik ve makine durumu","Kiralama ekibi","Ünite uygun"]] } },
            { baslik: "Lojistik takvimle bakım penceresini eşleştirmek", paragraflar: ["İşletme araç, yük ve saha operasyonunun hangi bölümde ne zaman yoğunlaştığını bildirir. Bakım hedefleri bu takvimde fiziksel olarak ayrılabilen hücrelere yerleştirilir. Kapı, depo ve dış saha işleri aynı anda açılmaz; ekipman ve trafik zarfları görülerek sıra kurulur. Giriş ve çıkış pencereleri de bakım süresine eklenir.", "Operasyon değişirse yalnız iş saati değil refakat, indirme, bariyer ve taşıyıcı planı güncellenir. Son dakika hedefi mevcut iznin otomatik parçası olmaz. Hava nedeniyle dış iş durduğunda kullanılacak yedek hücre önceden onaylı olmalıdır. Bu plan lojistik faaliyetle bakımı birbirine engel olmadan yürütür."] },
            { baslik: "Teklif için giriş ve teknik dosya", paragraflar: ["Adres, saha girişi, kabul prosedürü, personel ve araç bilgileri; taşıyıcı indirme-yükleme alanı ve yerel irtibat önceden paylaşılır. Teknik bölümde hedef kotu, yatay engel, kapı-koridor, zemin, enerji, hareketli yük, sepetteki malzeme ve uygulanabilir saat bulunur. Açık saha için hava, kapalı alan için egzoz ve şarj değerlendirilir.", "Belirli terminal, liman operasyonu, yük tipi veya kapasite varsayılmaz. Saha işletmesinin prosedürü güncel ve yetkilidir. Bilgi eksikse kesin model veya varış sözü verilmez. Teklif taşıma, kullanım, operatör, evrak-koordinasyon, park ve bekleme koşulunu açık gösterir. Değişiklik yazılı onaylanır."] },
        ],
        sss: [
            { soru: "Serbest bölgeye giriş evrakını kim hazırlar?", cevap: "Saha işletmesinin güncel kabul prosedürü esas alınır. Kiralama tarafı makine ve personel için kendi belgelerini sağlar; işi yaptıran taraf saha daveti, yerel sorumlu ve çalışma bilgilerini koordine eder. Hangi belgenin kimden istendiği sevkiyat öncesi listelenir. Kapıda eksik evrak tamamlanacağı varsayılmaz. Giriş onayı alınsa bile teknik çalışma izni ayrıca açılır. Tarih, kullanıcı veya ekipman değişirse mevcut onayın geçerliliği yeniden teyit edilir. Belgede olmayan özel izin uydurmayız; saha yetkilisinden güncel bilgi alınır." },
            { soru: "Liman operasyonu sürerken platform çalışabilir mi?", cevap: "Yalnız fiziksel olarak ayrılmış, araç ve kaldırma zarfları kesişmeyen bir hücre varsa başka operasyon sürebilir. Askılı yük, vinç, forklift, çekici ve manlift aynı risk alanında eş zamanlı çalışmaz. Bariyer yalnız tabanı değil sepet hareketi ve düşme bölgesini kapsar. Ayrım kurulamıyorsa bakım düşük trafik veya duruş penceresine alınır. Platform yük elleçlemek için kullanılmaz. Çalışma bitince araç ve personel alanı terk eder, saha operasyon sorumlusu teslimi kabul ettikten sonra lojistik hareket yeniden açılır." },
            { soru: "Rüzgâr nedeniyle dış iş durursa ne olur?", cevap: "Makine üretici sınırı aşıldığında bom indirilir; aciliyet bu sınırı değiştirmez. Programda izni, malzemesi ve teknik sınıfı hazır bir depo veya atölye hücresi varsa ekip iç işe geçebilir. O an boş görünen alana plansız girilmez. Geniş panel veya malzeme sepetle taşınmaz. Yalnız dış iş varsa bekleme ve erteleme koşulu teklifteki plana göre uygulanır. Hava sakinleştiğinde zemin, bariyer ve operasyon trafiği yeniden kontrol edilerek dış hedef açılır." },
            { soru: "Kapı üstü bakım için bütün yükleme hattı kapanır mı?", cevap: "Genellikle kapı bazlı slot kurulabilir. Saha yönetimi çalışılacak kapıya araç atamasını durdurur, rampa veya motoru güvenli duruma getirir ve yaklaşım alanını bariyerler. Komşu kapılar yalnız araç dönüşleri sepet zarfına girmiyorsa kullanılabilir. Bakım, bağlantı ve işlev kontrolü tamamlanınca kapı yetkiliye teslim edilir; ekip sonraki göze geçer. Ortak enerji veya mekanik sistem birden fazla kapıyı etkiliyorsa daha geniş duruş gerekebilir. Bu bağımlılık keşifte belirlenir." },
            { soru: "Makine birkaç gün serbest bölgede kalabilir mi?", cevap: "Program ve saha kabulü uygunsa kalabilir. Düz, korunaklı, operasyon trafiğinden ayrılmış ve yetkisiz erişime kapalı park alanı gerekir. Akülü sınıfta kuru ve havalandırılan şarj noktası sağlanır; kablo araç yoluna serilmez. Yetkili kullanıcı her vardiya öncesi günlük kontrol yapar. Olağan dışı durumda kullanım durur ve servis aranır. Giriş-çıkış prosedürü nedeniyle operatör veya makine değişikliği saha yetkilisine bildirilir. Kalış ve sorumluluk teslim tutanağında görünür olur." },
            { soru: "Yumurtalık işi sonrası makine başka tesise doğrudan gidebilir mi?", cevap: "Ancak teknik durumu, temizlik ve sonraki tesisin giriş koşulu doğrulandıktan sonra. Açık saha veya liman aksında çalışan ünitenin teker, alt takım ve gövdesi kontrol edilir; sızıntı, alarm veya hasar varsa sonraki görev başlamaz. Gıda veya tekstil gibi daha temiz hacme geçişte işletmenin kabul ettiği temizlik uygulanır. Enerji türü ve ölçü de yeni hedef için yeniden değerlendirilir. Bir işte uygun olan sınıf diğerinde otomatik uygun sayılmaz. Çıkış ve yeni teslim kayıtları ayrı tutulur." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Adana Yumurtalık Serbest Bölgesi’nin varlığı ve liman aksı lojistiği uygulama belgesindeki kamuya açık genel çerçevedir; giriş, hareketli yük ayrımı, hava ve çıkış yönetimi sektör geneli pratiktir. Özel terminal, liman işletmesi, yük, kapasite, mesafe ve doğrulanmamış rakam kullanılmamıştır.",
    },
};

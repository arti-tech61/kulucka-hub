// ═══════════════════════════════════════════════════════════════════════════
// afyonplatformkiralama.com — ELLE YAZILMIŞ İÇERİK
//
// Profil: Afyon ENERJİ TESİSLERİ ve TARIM SANAYİ için platform kiralama.
// Mercek: güneş enerjisi (GES) santralleri bakımı, biyogaz tesisleri, tarım
// sanayi (şeker, haşhaş) depoları. Kardeş domainlerden farklı olarak ne
// mermer/termal (com-tr) ne kent içi cephe (platform.net) ne gıda-sanayii
// (manlift.com) anlatır — enerji üretim/dönüşüm tesisleri ile bunların
// beslendiği tarımsal atık/depo zincirini birlikte işler.
//
// ⚠️ Kesişen slug'lar: afyonplatform.com.tr'de "afyonkarahisar-merkez"
// (mermer+termal+gıda), afyonplatform.com.tr'de "dinar" (lojistik+su+tarım),
// afyonplatform.com.tr'de "sandikli" (termal+tarım), afyonplatform.net'te
// "sandikli" (kent içi cephe), afyonplatform.com.tr'de "bolvadin" (tarımsal
// sanayi silo-kurutma), afyonmanlift.com'da "bolvadin-osb" (proses tesisi
// silo-kule-bant), afyonmanliftkiralama.net'te "bolvadin" (jenerik fabrika-
// depo), afyonmanlift.com'da "konya-osb-cevre-ili" (gıda sanayii il dışı,
// un/bulgur/bisküvi). BU DOSYA hiçbirinin sektör anlatısını, tablosunu veya
// SSS'sini kullanmaz; her sayfa ENERJİ (GES paneli, biyogaz, trafo/invertör)
// ve TARIM SANAYİ DEPOLARI (şeker, haşhaş) merceğinden yazılmıştır.
//
// Sayfa iskeleti: giriş paragrafı, beş madde, üç ek bölüm (ilkinde tablo),
// altı uzun SSS ve kaynak notu. Tarih: 2026-08-13.
// Tesis adı, kapasite ve rakam kullanılmamıştır.
// ═══════════════════════════════════════════════════════════════════════════

import type { BespokeIcerik } from "../bespoke-icerik";

export const AFYONPLATFORMKIRALAMA_COM: Record<string, BespokeIcerik> = {
    "bolge:afyonkarahisar-merkez": {
        h1: "Afyonkarahisar Merkezde Enerji ve Tarım Sanayi Tesisleri İçin Platform Kiralama",
        giris:
            "Afyonkarahisar merkez çevresinde son yıllarda büyüyen iki yatırım kolu, platform kiralama açısından birbirinden hayli farklı iki dünya kurar: bir yanda tarım arazileri üzerine kurulan güneş enerjisi santralleri ve tarımsal atığı enerjiye çeviren biyogaz tesisleri, diğer yanda ilin geleneksel tarım sanayisinin depoladığı şeker ve haşhaş gibi endüstriyel ürünlerin bekletildiği depo yapıları. Bu iki dünyanın ortak noktası, ikisinin de doğrudan tarım arazisinin uzantısı olmasıdır — biri arazinin üzerine panel dizer, diğeri arazinin ürününü depolar. Ancak yüksekte çalışma açısından talepleri bambaşkadır: GES sahasında iş panel dizileri arasında yatayda ilerleyen bir bakım turudur, depo tarafında ise dikey istif ve çatı altı kontroldür. Merkezden çıkan ekipmanı seçerken bu ikisini birbirine karıştırmayız; hangi işin hangi dünyaya ait olduğunu netleştirdikten sonra sınıfı belirleriz.",
        maddeler: [
            {
                baslik: "GES panel dizilerinde erişim ve temizlik desteği",
                metin:
                    "Güneş enerjisi santrallerinde platform ihtiyacı, panelin kendisinden çok invertör kabinleri, trafo merkezi bağlantıları ve saha aydınlatma direkleridir; panel yüzeyi genellikle yerden erişilebilir bir eğimde kurulur, ancak yüksek gerilim hatlarının geçtiği direkler ve orta gerilim trafo yapıları düzenli kontrol ister. Bu sahalarda zemin çoğunlukla tarla düzeyinde, düzensiz ve mevsime göre yumuşayan bir yapıdadır; arazi kabiliyeti yüksek bir sınıf standart tercihimizdir. Elektrik tesisatına yakın çalışmada sahanın kendi güvenlik prosedürü önceliklidir.",
            },
            {
                baslik: "Biyogaz tesislerinde reaktör ve boru hattı erişimi",
                metin:
                    "Tarımsal atığı işleyen biyogaz tesislerinde yüksekteki iş, fermantasyon tanklarının üst kapakları, gaz toplama hatları, alev bacası ve boru köprüsü kontrolüdür. Bu tesislerde gaz kaynaklı risk her zaman ön plandadır; kıvılcım çıkaran hiçbir işlem tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz. Sepetli erişim, tank çevresindeki dar servis koridorlarında hem hız hem güvenlik kazandırır; makine tank gövdesine değil, güvenli mesafedeki bir noktaya konumlanır ve mesafe bomla kapatılır.",
            },
            {
                baslik: "Şeker ve haşhaş depolarında istif ve çatı kontrolü",
                metin:
                    "Endüstriyel bitki ürünlerinin bekletildiği depolarda iş, çuval veya varil istiflerinin üst sırası, çatı sacı onarımı ve mahya havalandırmasıdır. Bu depolarda ürün doluyken çalışma tercih edilmez; istif yüzeyi taşıyıcı değildir ve düşen bir parça partiyi riske atar. İşleri ürünün boşaldığı döneme yazmayı öneririz; bu, hem daha güvenli hem daha hızlı ilerler. Bazı haşhaş ürünleri ek güvenlik prosedürü gerektirebilir; bu durumda tesisin kendi erişim kurallarına uyarız.",
            },
            {
                baslik: "Elektrik altyapısına yakın çalışmada izin düzeni",
                metin:
                    "Hem GES sahalarında hem biyogaz tesislerinde ortak bir kural geçerlidir: enerjili hatlara veya ekipmana yakın çalışmadan önce tesisin kendi elektrik güvenlik prosedürü uygulanır. İlgili hattın gerilimsiz olduğu veya güvenli mesafenin korunduğu yazılı olarak teyit edilmeden sepet o kota çıkmaz. Bu teyit süreci işin süresini bir miktar uzatabilir; bunu teklifte açıkça gösteririz, sonradan çıkan sürpriz kalem olmaz.",
            },
            {
                baslik: "İki dünyayı aynı sevkiyatta birleştirmek",
                metin:
                    "Merkez çevresinde bir GES sahası ile bir tarım sanayi deposu birbirine yakın konumlanmışsa, aynı hafta içinde ikisini de aynı sevkiyatla kapatmak mümkündür; nakliye kalemi ikisi arasında bölünür. Bu birleşme, özellikle kısa iş listelerinde birim maliyeti belirgin biçimde düşürür. Tarihinizi erken bildirdiğinizde bölgede planlanmış bir program varsa sizi araya ekler, sevkiyat payınızı düşürürüz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Enerji ve tarım sanayi tesislerinde alan-sınıf eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, merkez çevresinde en sık çalıştığımız enerji ve tarım sanayi tesislerini ve seçtiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Tesis / alan", "Baskın kalem", "Belirleyici koşul", "Seçilen sınıf"],
                    satirlar: [
                        ["GES trafo/invertör kabini", "Bağlantı, kontrol", "Tarla zemini", "Arazi tipi bomlu"],
                        ["GES saha aydınlatması", "Direk, kamera", "Açık alan", "Hızlı toplanan bomlu"],
                        ["Biyogaz reaktör üstü", "Kapak, gaz hattı", "Gaz güvenliği izni", "Eklemli bomlu"],
                        ["Biyogaz boru köprüsü", "Hat kontrolü", "Kademeli konumlanma", "Kademeli bomlu"],
                        ["Şeker/haşhaş deposu", "İstif üstü, çatı", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Depo idari bölüm", "Aydınlatma, asma tavan", "Standart koşul", "Standart makaslı"],
                    ],
                },
            },
            {
                baslik: "Elektrik güvenlik izninin süreye etkisi",
                paragraflar: [
                    "Enerji üretim ve dönüşüm tesislerinde bir ekipmanın enerjili görünmemesi, güvenli olduğu anlamına gelmez. Bu yüzden çalışma öncesinde tek bir şey yaparız ve bundan vazgeçmeyiz: çalışılacak hattın veya ekipmanın gerilimsiz olduğu, tesisin kendi elektrik güvenlik ekibi tarafından yazılı olarak teyit edilir. Sözlü teyit bu tesislerde yeterli değildir.",
                    "Bu teyit süreci, özellikle ilk kez çalışılan sahalarda birkaç saat sürebilir; bunu iş planına baştan yazarız ve teklifte ayrı bir kalem olarak göstermeyiz, çünkü bu süre bizim sorumluluğumuzdaki bir bekleme değil, tesisin güvenlik sürecidir. Deneyimimiz, bu süreci hızlandırmak değil, ona düzenli uymaktır.",
                ],
            },
            {
                baslik: "Mevsimsel ürün akışının programa etkisi",
                paragraflar: [
                    "Tarım sanayi depolarında bakım takvimi, ürünün geldiği ve çekildiği döneme göre şekillenir; hasat sonrası dolan depo, sevkiyat sonrası boşalır ve bakım kalemleri bu boşalma penceresine yazılır. GES ve biyogaz tesislerinde ise böyle bir mevsimsellik yoktur — bu tesisler yıl boyunca aynı ritimde çalışır ve bakım takvimi üretim kaybına göre değil, tesisin kendi planlı duruş programına göre kurulur.",
                    "Bu fark, merkezdeki bir işletmenin iki farklı yatırımı varsa program kurgusunu ikiye ayırmamızı gerektirir: depo tarafı mevsimsel pencereye, enerji tarafı ise yıl içindeki planlı duruşlara yazılır. İki program aynı haftaya denk geldiğinde tek sevkiyatla ikisini birden kapatırız.",
                ],
            },
        ],
        sss: [
            {
                soru: "GES sahamızdaki invertör kabinlerine erişim için hangi makine uygun?",
                cevap:
                    "Tarla zemininin düzensiz ve mevsime göre yumuşayan yapısı nedeniyle arazi kabiliyeti yüksek bir sınıf öneririz. Kabinlerin panel dizileri arasındaki konumunu ve zeminin son yağıştan sonra ıslak kalıp kalmadığını bilmemiz, konumlanma kararını sahada hızlandırır. Elektrik hattına yakın çalışmada tesisinizin kendi güvenlik prosedürüne uyarız; bu prosedürü önceden bize iletmeniz süreci hızlandırır.",
            },
            {
                soru: "Biyogaz tesisimizde reaktör üstünde iş var; gaz riski nasıl yönetilir?",
                cevap:
                    "Bu tesislerde kıvılcım çıkaran hiçbir işlem, tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz. Çalışma öncesinde ilgili bölgenin gaz ölçümü yapılır ve güvenli olduğu teyit edilir; bu teyidi biz değil, tesisin kendi ekibi verir. Makineyi tank gövdesine değil, güvenli mesafedeki bir noktaya konumlandırır, mesafeyi bomla kaparız. Bu prosedür işin süresini bir miktar uzatabilir; bunu teklifte açıkça gösteririz.",
            },
            {
                soru: "Şeker deposu dolu; çatı onarımını bekletmeli miyiz?",
                cevap:
                    "Beklemenizi öneririz. Ürün doluyken istif yüzeyi taşıyıcı değildir, makine içeri girse bile konumlanacak sağlam bir zemin bulamaz. Buna ürün riski eklenir: düşen bir parça partinin tamamını şüpheli hâle getirir. Boşalma dönemini bekleyemeyeceğiniz acil sızıntılarda dışarıdan yandan uzanarak sınırlı bir müdahale mümkündür; kalıcı onarım yine boşalma dönemine yazılır.",
            },
            {
                soru: "Trafo merkezine yakın çalışmada ek bir hazırlık var mı?",
                cevap:
                    "Var; trafo ve orta gerilim ekipmanına yakın çalışmadan önce tesisin kendi elektrik güvenlik ekibi, ilgili hattın gerilimsiz olduğunu veya güvenli mesafenin korunduğunu yazılı olarak teyit eder. Bu teyit alınmadan sepet o kota çıkmaz. Ekibinizin bu teyidi ne kadar sürede verdiğini bize önceden söylerseniz, gün planını buna göre kurarız.",
            },
            {
                soru: "GES sahamız ile depo tesisimiz yakın; tek sevkiyatta ikisini de yapabilir misiniz?",
                cevap:
                    "Yapabiliriz ve bu, merkez çevresinde kiralamanın en ekonomik biçimidir. İki tesis farklı sınıf gerektirse bile nakliye tek seferde faturalanır ve ikisi arasında bölünür. Tek koşul, çalışma sırasının netleşmiş olmasıdır: enerji tesisindeki elektrik güvenlik teyidi genellikle daha uzun sürdüğü için programı ona göre kurarız. Her tesis kendi teklifini ve kendi teslim tutanağını alır.",
            },
            {
                soru: "Haşhaş deposunda ek güvenlik kuralı var mı?",
                cevap:
                    "Bazı haşhaş ürünlerinin depolandığı tesislerde işletmenin kendi erişim ve güvenlik kuralları geçerlidir; bu kurallara uyarız ve gerekli belgelendirmeyi işletmenizle birlikte yaparız. Teknik tarafta belirleyici olan yine istif yüksekliği ve ürünün dolu olup olmadığıdır; ürün boşaldığında iş çok daha hızlı ilerler. Kurallarınızı önceden paylaşırsanız ekibimiz bunlara uyarak gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Afyonkarahisar merkez çevresinde güneş enerjisi yatırımlarının ve tarım sanayi depolarının varlığı kamuya açık genel bilgidir; elektrik güvenlik teyidi ve mevsimsel program kurgusu firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:dinar": {
        h1: "Dinar’da Güneş Enerjisi ve Tarım Sanayi Tesisleri İçin Platform Kiralama",
        giris:
            "Dinar ovasının geniş ve düz tarım arazileri, son yıllarda yalnızca ekili alan olarak değil, güneş enerjisi santrallerinin kurulduğu bir zemin olarak da değer kazandı; ilçedeki GES yatırımları, ovanın tarımsal kimliğine enerji üretimini ekleyen bir katman oluşturdu. Bunun yanında Dinar, çevresindeki tarımsal üretimin işlendiği ve depolandığı bir merkez konumundadır ve bu depolarda endüstriyel bitki ürünleri bekletilir. Bizim için Dinar’a giden bir platform talebi, bu iki katmandan hangisine ait olduğuna göre bambaşka bir hazırlık gerektirir: GES sahasında iş elektrik güvenliği ve tarla zemini etrafında dönerken, depo tarafında iş istif yüksekliği ve ürün akışı etrafında döner. Bu sayfada ilçedeki bu iki tesis tipinde nasıl çalıştığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "GES sahasında trafo ve saha aydınlatması",
                metin:
                    "Ova tabanına kurulu GES sahalarında platform ihtiyacı, panel yüzeyinden çok orta gerilim trafo merkezi bağlantıları, invertör kabin kontrolü ve saha çevre aydınlatmasıdır. Zemin, sulama ve yağış sonrasında yüzeyde sağlam görünürken altta yumuşak kalabilir; bu, ova tabanında sık karşılaştığımız bir sorundur. Tekerlek veya destek ayağı gömüldüğünde makine yalnızca hareket edemez hâle gelmez, sepet yukarıdayken stabilite de bozulur. Sulama takvimi bize önceden söylenmeli, gerekiyorsa çalışma noktalarının altına plaka serilmelidir.",
            },
            {
                baslik: "Elektrik güvenlik teyidi olmadan sahaya inilmez",
                metin:
                    "GES sahasında herhangi bir enerjili ekipmana yakın çalışmadan önce, tesisin kendi elektrik güvenlik ekibi ilgili hattın gerilimsiz olduğunu veya güvenli mesafenin korunduğunu yazılı olarak teyit eder. Bu teyit alınmadan sepet o kota çıkmaz; bu, üzerinde pazarlık yapmadığımız bir maddedir. Teyit süreci işin süresini bir miktar uzatabilir; bunu teklifte açıkça gösteririz.",
            },
            {
                baslik: "Tarımsal işleme ve depolama tesislerinde istif kontrolü",
                metin:
                    "Dinar çevresindeki tarımsal işleme ve depolama tesislerinde iş, istiflenmiş ürünün üst sırası, çatı sacı onarımı ve havalandırma kanalı kontrolüdür. Ürün doluyken istif yüzeyi taşıyıcı değildir; bu yüzden işleri ürünün boşaldığı döneme yazmayı öneririz. Depo çevresindeki toz yükü, filtre kontrol aralığını kısaltan bir etkendir; iş sonunda makine ayrıca temizlenir.",
            },
            {
                baslik: "Sulu tarım arazisinde zemin taşıma gücü",
                metin:
                    "Dinar ovasının sulu tarım yapılan kesimlerinde zemin durumu sabit değildir; aynı parselin taşıma gücü sulamadan önce ve sonra farklıdır. Bu, hem GES sahalarındaki servis yollarını hem tarımsal tesislerin çevre alanlarını etkiler. Sulanmış bir güzergâhtan geçen makine hem iz bırakır hem kendi güvenliğini kaybedebilir. Sulama programınızı önceden paylaşırsanız çalışma noktalarını kuru pencereye yazarız.",
            },
            {
                baslik: "İki tesis tipini aynı sevkiyatta birleştirmek",
                metin:
                    "İlçedeki bir GES sahası ile bir tarımsal işleme deposu yakın konumlanmışsa, aynı hafta içinde ikisini de tek sevkiyatla kapatmak mümkündür. Nakliye kalemi ikisi arasında bölünür ve birim maliyet düşer. Tek koşul, çalışma sırasının netleşmiş olmasıdır; elektrik güvenlik teyidi genellikle daha uzun sürdüğü için programı önce GES tarafına, sonra depo tarafına göre kurarız.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Dinar’da tesis tipi ve sınıf eşleşmesi",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki enerji ve tarım sanayi tesislerinde en sık çalıştığımız alanları ve tercih ettiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Alan", "Baskın kalem", "Belirleyici koşul", "Seçilen sınıf"],
                    satirlar: [
                        ["GES trafo/invertör kabini", "Bağlantı, kontrol", "Elektrik güvenlik izni", "Arazi tipi bomlu"],
                        ["GES saha aydınlatması", "Direk, kamera", "Ova zemini", "Hızlı toplanan bomlu"],
                        ["Tarımsal işleme deposu", "İstif üstü, çatı", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Depo idari bölüm", "Aydınlatma, asma tavan", "Standart koşul", "Standart makaslı"],
                        ["Sulama pano/direk", "Elektrik hattı kontrolü", "Sulama sonrası çamur", "Geniş tabanlı 4x4"],
                        ["Servis yolu aydınlatması", "Direk bakımı", "Açık saha", "Kompakt dizel"],
                    ],
                },
            },
            {
                baslik: "Ova zemininin GES servis yollarına etkisi",
                paragraflar: [
                    "GES sahalarındaki servis yolları genellikle sıkıştırılmış toprak veya ince mıcırdır ve bu yollar, sulama kanalına yakın kesimlerde nem tutmaya eğilimlidir. Yüzeyde sağlam görünen bir yol, altında yumuşak kalabilir; bu, özellikle sulama sezonunda dikkat ettiğimiz bir durumdur.",
                    "Bu riski yönetmenin yolu, çalışma öncesinde güzergâhı ve son sulama tarihini sormaktır. Şüpheli bir bölümde makineyi indirmeden önce zemin kontrolü yapar, gerekiyorsa geçici plaka seriz. Bu basit adım, sahada yaşanabilecek bir gömülme riskini baştan önler.",
                ],
            },
            {
                baslik: "Elektrik güvenlik sürecinin planlamaya etkisi",
                paragraflar: [
                    "GES ve trafo çevresinde çalışmadan önce alınan yazılı teyit, iş planının ayrılmaz bir parçasıdır ve bu süreç bazen birkaç saat sürebilir. Bu süreyi bir gecikme olarak değil, işin doğal bir parçası olarak ele alırız ve teklifte ayrı bir kalem olarak göstermeyiz.",
                    "Tesisinizin elektrik güvenlik ekibinin çalışma saatlerini ve teyit sürecinin ortalama ne kadar sürdüğünü önceden bize bildirirseniz, gün planını bu süreye göre kurar, boşta geçen zamanı en aza indiririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "GES sahamızdaki servis yolu sulama kanalına yakın; zemin güvenli mi?",
                cevap:
                    "Sulama sonrasında bu yollarda taşıma gücü düşebilir; bu yüzden son sulama tarihini ve yolun güzergâhını önceden sorarız. Zemin şüpheliyse makineyi indirmeden önce kontrol eder, gerekiyorsa geçici plaka seriz. Kuru dönemde bu yollar genellikle sorunsuzdur; şüpheli zeminde makine indirmeyiz, bu kararı sahada, indirme öncesinde veririz.",
            },
            {
                soru: "Trafo merkezimize yakın çalışmadan önce ne bekliyorsunuz?",
                cevap:
                    "İlgili hattın gerilimsiz olduğunun veya güvenli mesafenin korunduğunun, tesisinizin kendi elektrik güvenlik ekibi tarafından yazılı olarak teyit edilmesini bekleriz. Bu teyit alınmadan sepet o kota çıkmaz. Ekibinizin bu teyidi ne kadar sürede verdiğini bize önceden söylerseniz, gün planını buna göre kurarız ve süreç bir gecikme olarak değil, planın bir parçası olarak işler.",
            },
            {
                soru: "Tarımsal deponun içinde istif çok yüksek; makine istife yanaşabilir mi?",
                cevap:
                    "Yanaşmasını tercih etmeyiz. İstiflenmiş ürünün ağırlığı, küçük bir zemin oturmasında bile hareket üretebilir. Doğru yöntem, devrilme koridorunun dışında kalan bir noktadan uzanmalı bir sınıfla yandan erişmektir. İstif yüksekliğini, sıra derinliğini ve aradaki boşluğu bilmemiz, gerekli uzanma mesafesini belirlememiz için yeterlidir.",
            },
            {
                soru: "GES sahası ile deponuz farklı yerlerde; ayrı ayrı mı ücretlendirilir?",
                cevap:
                    "Birbirine yakınsa hayır; makine bölgeye bir kez indirilir ve iki tesise sırayla uğrar, nakliye kalemi ikisi arasında bölünür. Uzak konumlanmışlarsa her biri kendi taşımasını doğurabilir; bu durumu talep sırasında netleştirir, size açıkça söyleriz. Programı kurarken elektrik güvenlik teyidi daha uzun sürdüğü için genellikle önce GES tarafını, sonra depo tarafını planlarız.",
            },
            {
                soru: "Sulama sezonunda GES bakımını ertelemeli miyiz?",
                cevap:
                    "Tamamını ertelemek gerekmez; listeyi bölmek yeterlidir. Servis yolundan geçmesi gereken kalemler kuruma penceresine yazılır; trafo ve invertör kabinlerine sabit noktadan erişilen kalemler ise sulama programından bağımsız ilerler. Böylece kiralanan gün boşa gitmez, yalnızca sıra değişir.",
            },
            {
                soru: "Tarımsal işleme tesisimizdeki toz makinenize zarar verir mi?",
                cevap:
                    "Ortam kaynaklı yıpranma bize aittir ve bunu kiralama fiyatına dahil ederiz. Kuru ürün işleyen tesislerden dönen ünitelerde filtre ve mafsal kontrol aralığını kısaltırız, iş sonunda ayrı bir temizlik adımı uygularız. Sizden istediğimiz tek şey, makinenin kullanımı sırasında dikkatli davranılması ve teslim tutanağında belirtilen koşullara uyulmasıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Dinar ovasındaki güneş enerjisi yatırımları ve ilçenin tarımsal işleme-depolama merkezi olması kamuya açık genel bilgidir; elektrik güvenlik teyidi ve zemin taşıma gücü sektör geneli teknik bilgi, program birleştirme yöntemi firma pratiğidir. Tesis adı ve rakam verilmemiştir.",
    },

    "bolge:sandikli": {
        h1: "Sandıklı’da Enerji ve Tarım Sanayi Tesisleri İçin Platform Kiralama",
        giris:
            "Sandıklı’nın geniş tarım arazileri, ilçenin termal turizm kimliğinin gölgesinde kalsa da, son yıllarda güneş enerjisi santrallerinin kurulduğu bir zemin olarak da öne çıkmaya başladı; buna ilçedeki tarımsal ürünlerin işlendiği ve endüstriyel bitki ürünlerinin depolandığı tesisler eklenir. Bizim için Sandıklı’ya giden bir platform talebi, ilçenin bilinen termal kimliğinden bağımsız, bu iki katman etrafında şekillenir: GES sahasında elektrik güvenliği ve tarla zemini, tarım sanayi deposunda ise istif yüksekliği ve ürün akışı belirleyicidir. Bu sayfada ilçedeki enerji ve tarım sanayi tesislerinde nasıl çalıştığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "GES sahasında panel dizisi çevresi ve trafo erişimi",
                metin:
                    "İlçedeki güneş enerjisi santrallerinde platform ihtiyacı, panel dizileri arasındaki servis yollarında konumlanan trafo merkezi ve invertör kabinleridir. Zemin, tarla düzeyinde ve mevsime göre değişen bir yapıdadır; bu yüzden arazi kabiliyeti yüksek bir sınıf standart tercihimizdir. Panel dizilerinin arasından geçerken makinenin şase genişliği, dizi aralığına göre önceden kontrol edilir.",
            },
            {
                baslik: "Biyogaz ve tarımsal atık dönüşüm tesislerinde erişim",
                metin:
                    "İlçedeki tarımsal üretim hacmi, bölgede biyogaz tesisi yatırımlarını da beraberinde getirmiştir. Bu tesislerde yüksekteki iş, fermantasyon tankı üst kapakları, gaz toplama hattı ve boru köprüsü kontrolüdür. Gaz kaynaklı risk her zaman ön plandadır; kıvılcım çıkaran hiçbir işlem tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz.",
            },
            {
                baslik: "Tarım sanayi depolarında istif ve çatı kontrolü",
                metin:
                    "İlçedeki tarımsal ürün işleme ve depolama tesislerinde iş, istiflenmiş ürünün üst sırası, çatı sacı onarımı ve havalandırma kanalı kontrolüdür. Ürün doluyken istif yüzeyi taşıyıcı değildir; işleri ürünün boşaldığı döneme yazmayı öneririz. Bu depolarda toz yükü, filtre kontrol aralığını kısaltan bir etkendir.",
            },
            {
                baslik: "Elektrik güvenlik teyidi olmadan sahaya inilmez",
                metin:
                    "Hem GES hem biyogaz tesislerinde, enerjili hatlara veya ekipmana yakın çalışmadan önce tesisin kendi elektrik güvenlik prosedürü uygulanır. İlgili hattın gerilimsiz olduğu veya güvenli mesafenin korunduğu yazılı olarak teyit edilmeden sepet o kota çıkmaz. Bu teyit süreci işin süresini bir miktar uzatabilir; bunu teklifte açıkça gösteririz.",
            },
            {
                baslik: "İki takvimi birbirine yaslamak",
                metin:
                    "Enerji tesisleri yıl boyunca aynı ritimde çalışırken, tarım sanayi depoları mevsimsel bir ritim taşır. Bölgeye indirilen bir makine, bu iki farklı takvimin kesiştiği haftalarda birden çok tesisin listesini kapatabilir ve nakliye kalemi işler arasında bölünür. Tarihinizi esnek tutabiliyorsanız bunu bize söyleyin; bölgede o hafta planlanmış bir program varsa işinizi ona ekleriz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İlçedeki enerji ve tarım sanayi tesisleri",
                paragraflar: [
                    "Aşağıdaki tablo, Sandıklı’da en sık çalıştığımız enerji ve tarım sanayi tesislerini ve seçtiğimiz sınıfı toplar.",
                ],
                tablo: {
                    basliklar: ["Tesis / alan", "Baskın kalem", "Belirleyici koşul", "Seçilen sınıf"],
                    satirlar: [
                        ["GES trafo/invertör kabini", "Bağlantı, kontrol", "Elektrik güvenlik izni", "Arazi tipi bomlu"],
                        ["GES panel dizisi aralığı", "Servis, temizlik desteği", "Dizi genişliği", "Dar gövdeli arazi tipi"],
                        ["Biyogaz reaktör üstü", "Kapak, gaz hattı", "Gaz güvenliği izni", "Eklemli bomlu"],
                        ["Tarım sanayi deposu", "İstif üstü, çatı", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Depo idari bölüm", "Aydınlatma, asma tavan", "Standart koşul", "Standart makaslı"],
                        ["Saha çevre aydınlatması", "Direk bakımı", "Açık alan", "Kompakt dizel"],
                    ],
                },
            },
            {
                baslik: "Termal turizmin gölgesindeki ikinci ekonomi",
                paragraflar: [
                    "Sandıklı denince ilk akla gelen termal turizm olsa da, ilçenin tarım arazisi üzerinde yükselen enerji yatırımları ve tarımsal ürün işleme tesisleri, farklı bir müşteri profili oluşturur. Bu profilin talepleri, termal tesislerin buhar-nem odaklı ihtiyaçlarından tamamen bağımsızdır ve elektrik güvenliği ile ürün akışı etrafında döner.",
                    "Bu iki dünya arasında hizmet verirken karıştırmadığımız tek şey ekip değil, prosedürdür: enerji tesislerinde elektrik güvenlik teyidi, tarım sanayi depolarında ise ürün akışı ve istif kontrolü öncelenir. Hangi dünyaya hizmet verdiğimizi bilerek sahaya gideriz.",
                ],
            },
            {
                baslik: "Mevsimsel ve sabit ritmin aynı programda buluşması",
                paragraflar: [
                    "Enerji tesisleri yıl boyunca aynı ritimde çalışırken, tarım sanayi depoları ürünün geldiği ve çekildiği döneme göre hareket eder. Bölgeye indirilen bir makine, bu iki farklı ritmin kesiştiği haftalarda birden çok işletmenin listesini kapatabilir.",
                    "Bunun pratik sonucu şudur: tarihinizi esnek tutabiliyorsanız bunu bize söyleyin. Bölgede o hafta planlanmış bir program varsa işinizi ona ekler, sevkiyat payınızı düşürürüz. Tarihiniz sabitse — özellikle hasat veya planlı elektrik duruşuna bağlı bir işse — erken haber vermek tek çözümdür.",
                ],
            },
        ],
        sss: [
            {
                soru: "GES sahamızın panel dizileri arası dar; makine oraya girebilir mi?",
                cevap:
                    "Girebilir, ancak dizi aralığına göre dar gövdeli bir sınıf seçilmesi gerekir. Panel dizisi genişliğini ve zeminin cinsini bize bildirirseniz sığacak sınıfı önceden netleştiririz. Zemin mevsime göre yumuşayabilir; son yağış veya sulama tarihini de bilmemiz konumlanma kararını sahada hızlandırır.",
            },
            {
                soru: "Biyogaz tesisimizde reaktör üstünde iş var; gaz riski nasıl yönetilir?",
                cevap:
                    "Bu tesislerde kıvılcım çıkaran hiçbir işlem, tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz. Çalışma öncesinde ilgili bölgenin gaz ölçümü yapılır ve güvenli olduğu teyit edilir; bu teyidi tesisin kendi ekibi verir. Makineyi tank gövdesine değil, güvenli mesafedeki bir noktaya konumlandırır, mesafeyi bomla kaparız.",
            },
            {
                soru: "Tarım sanayi deposu dolu; çatı onarımını bekletmeli miyiz?",
                cevap:
                    "Beklemenizi öneririz. Ürün doluyken istif yüzeyi taşıyıcı değildir, makine içeri girse bile konumlanacak sağlam bir zemin bulamaz. Buna ürün riski eklenir: düşen bir parça partinin tamamını şüpheli hâle getirir. Boşalma dönemini bekleyemeyeceğiniz acil sızıntılarda dışarıdan yandan uzanarak sınırlı bir müdahale mümkündür.",
            },
            {
                soru: "Trafo merkezine yakın çalışmada ek bir hazırlık var mı?",
                cevap:
                    "Var; trafo ve orta gerilim ekipmanına yakın çalışmadan önce tesisin kendi elektrik güvenlik ekibi, ilgili hattın gerilimsiz olduğunu yazılı olarak teyit eder. Bu teyit alınmadan sepet o kota çıkmaz. Ekibinizin bu teyidi ne kadar sürede verdiğini bize önceden söylerseniz, gün planını buna göre kurarız.",
            },
            {
                soru: "GES sahamız ile tarım sanayi deponuz yakın; tek sevkiyatta ikisini de yapabilir misiniz?",
                cevap:
                    "Yapabiliriz ve bu, ilçede kiralamanın en ekonomik biçimidir. İki tesis farklı sınıf gerektirse bile nakliye tek seferde faturalanır ve ikisi arasında bölünür. Programı kurarken elektrik güvenlik teyidi genellikle daha uzun sürdüğü için önce GES tarafını, sonra depo tarafını planlarız. Her tesis kendi teklifini ve kendi teslim tutanağını alır.",
            },
            {
                soru: "İlçede birkaç tesis aynı hafta iş yaptırmak istiyor; bu bizi geciktirir mi?",
                cevap:
                    "Hayır, çünkü gün dağılımı takvim açıklanmadan önce kilitlenir: her tesisin kaç günü olduğu yazılıdır. Komşu bir tesisin listesi beklenenden uzarsa bu, sizin gününüzden kesilmez. İşletmeler birbirine ticari olarak bağlanmaz — her biri ayrı teklif, ayrı tutanak alır. Ortaklaşan yalnızca makinenin bölgeye iniş-çıkışıdır.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Sandıklı’nın tarım arazileri üzerindeki güneş enerjisi yatırımları ve tarımsal ürün işleme tesislerinin varlığı kamuya açık genel bilgidir; elektrik güvenlik teyidi ve mevsimsel-sabit ritim ayrımı firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:bolvadin": {
        h1: "Bolvadin’de Biyogaz ve Şeker Sanayi Tesisleri İçin Platform Kiralama",
        giris:
            "Bolvadin, şeker pancarı ve haşhaş gibi endüstriyel bitkilerin işlendiği bir tarımsal sanayi ilçesidir ve bu üretim zinciri, son yıllarda yeni bir katman kazandı: şeker fabrikası atığından ve tarımsal artıklardan enerji üreten biyogaz tesisleri. Bu, ilçedeki platform talebine bambaşka bir boyut ekler — artık yalnızca silo ve kurutma ünitelerinin bakımı değil, fermantasyon tankları, gaz toplama hatları ve enerji dönüşüm ekipmanının da düzenli erişim ihtiyacı vardır. Biz bu sayfada Bolvadin’in geleneksel tarımsal sanayisini değil, bu yeni enerji katmanını ve onun şeker-haşhaş depolama zinciriyle kesiştiği noktaları anlatıyoruz.",
        maddeler: [
            {
                baslik: "Biyogaz reaktöründe kapak ve gaz hattı kontrolü",
                metin:
                    "Şeker fabrikası atığını veya tarımsal artığı işleyen biyogaz reaktörlerinde yüksekteki iş, tank üst kapakları, seviye ölçüm ekipmanı, gaz toplama hattı ve alev bacasıdır. Bu tesislerde gaz kaynaklı risk her zaman ön plandadır; kıvılcım çıkaran hiçbir işlem tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz. Makine tank gövdesine değil, güvenli mesafedeki bir noktaya konumlanır ve mesafe bomla kapatılır.",
            },
            {
                baslik: "Enerji dönüşüm ünitelerinde boru köprüsü ve panel kontrolü",
                metin:
                    "Biyogazın elektriğe dönüştürüldüğü ünitelerde, jeneratör grubu üzerindeki egzoz bacası, soğutma radyatörü ve kontrol panosu bağlantıları düzenli servis ister. Bu ekipmanlar genellikle açık sahada, betonarme bir platform üzerinde durur; zemin düzdür ancak ekipman etrafındaki manevra alanı sınırlıdır. Kompakt gövdeli bir sınıf, ekipmanlar arasında dar geçişlerde daha rahat ilerler.",
            },
            {
                baslik: "Şeker ve haşhaş depolarında istif ve çatı kontrolü",
                metin:
                    "İlçedeki şeker ve haşhaş depolarında iş, istiflenmiş ürünün üst sırası, çatı sacı onarımı ve mahya havalandırmasıdır. Ürün doluyken istif yüzeyi taşıyıcı değildir; işleri ürünün boşaldığı döneme yazmayı öneririz. Haşhaş depolarında işletmenin kendi erişim kuralları geçerlidir; bu kurallara uyarız.",
            },
            {
                baslik: "Kampanya sonrası açılan enerji tesisi bakım listesi",
                metin:
                    "Şeker fabrikasının kampanya dönemi bittiğinde, hem depo tarafında hem biyogaz tarafında bakım listesi bir anda açılır; kampanya süresince her iki tesis de kesintisiz çalışır ve bakım için pencere bırakmaz. Bu yüzden kampanya bitişinden önce program kurmayı öneririz: liste çıkarılır, hangi kalemin hangi sınıfla yapılacağı yazılır ve makine, tesis boşaldığı gün sahada olur.",
            },
            {
                baslik: "Elektrik güvenlik teyidi ve gaz izni birlikte yönetilir",
                metin:
                    "Bolvadin’deki bu enerji-tarım ikilisinde iki ayrı izin süreci aynı anda yönetilir: biyogaz tarafında gaz güvenliği teyidi, enerji dönüşüm ünitesinde elektrik güvenlik teyidi. İki sürecin de tesisin kendi ekipleri tarafından yürütülmesi gerekir; biz bu süreçlere uyarız, hızlandırmayız. Bu iki teyit tamamlanmadan sahaya makine indirmeyiz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Bolvadin’de enerji ve tarım sanayi alanları",
                paragraflar: [
                    "Aşağıdaki tablo, ilçedeki biyogaz ve şeker-haşhaş sanayi tesislerinde en sık çalıştığımız alanları toplar.",
                ],
                tablo: {
                    basliklar: ["Alan", "Baskın kalem", "Belirleyici koşul", "Seçilen sınıf"],
                    satirlar: [
                        ["Biyogaz reaktör üstü", "Kapak, seviye ölçüm, gaz hattı", "Gaz güvenliği izni", "Eklemli bomlu"],
                        ["Jeneratör / enerji dönüşüm ünitesi", "Baca, radyatör, pano", "Dar manevra alanı", "Kompakt akülü"],
                        ["Şeker deposu", "İstif üstü, çatı", "Ürün dolu hacim", "Arazi tipi makaslı"],
                        ["Haşhaş deposu", "İstif üstü, havalandırma", "Erişim kısıtı", "Arazi tipi makaslı"],
                        ["Boru köprüsü", "Hat kontrolü", "Kademeli konumlanma", "Kademeli bomlu"],
                        ["İdari bina", "Aydınlatma, cephe", "Standart koşul", "Standart makaslı"],
                    ],
                },
            },
            {
                baslik: "İki izin sürecinin birlikte yönetimi",
                paragraflar: [
                    "Bolvadin’deki bu tesislerde çalışırken karşımıza iki ayrı izin süreci çıkabilir: biyogaz tarafında gaz ölçümü ve güvenli çalışma teyidi, enerji dönüşüm tarafında elektrik güvenlik teyidi. İkisi de farklı ekipler tarafından yürütülür ve ikisi de kendi zaman çizelgesine sahiptir.",
                    "Bu iki sürecin çakışmaması için gün planını iki bloğa ayırırız: sabah bloğunda gaz teyidi tamamlanan bölgede çalışılır, öğleden sonra bloğunda elektrik teyidi tamamlanan bölgeye geçilir. Bu ayrım, iki teyidin de aynı anda beklenmesinden doğan zaman kaybını önler.",
                ],
            },
            {
                baslik: "Kampanya sonrası toplu bakımın ekonomisi",
                paragraflar: [
                    "Kampanya bittiğinde açılan bakım listesi, hem depo hem enerji tesisi kalemlerini aynı anda içerebilir; bu durumda tek bir uzun programla ikisini birlikte kapatmak, ayrı ayrı çağrı yapmaktan belirgin biçimde ucuza gelir. Makine tesiste kalır, nakliye kalemi tek seferde faturalanır.",
                    "Bu dönemde bölgedeki diğer tesisler de aynı işi ister ve makine bulmak fiyattan önce gelen bir konu hâline gelir. Kampanya bitişinden önce program kurmayı öneririz; erken rezervasyon yaptığınızda makine tesis boşaldığı gün sahada olur.",
                ],
            },
        ],
        sss: [
            {
                soru: "Biyogaz reaktörümüzün üst kapağında iş var; gaz riski nasıl yönetilir?",
                cevap:
                    "Bu tesislerde kıvılcım çıkaran hiçbir işlem, tesisin kendi gaz güvenliği prosedürü olmadan yapılmaz. Çalışma öncesinde ilgili bölgenin gaz ölçümü yapılır ve güvenli olduğu teyit edilir; bu teyidi tesisin kendi ekibi verir. Makineyi tank gövdesine değil, güvenli mesafedeki bir noktaya konumlandırır, mesafeyi bomla kaparız.",
            },
            {
                soru: "Jeneratör ünitemizin çevresi dar; makine oraya girebilir mi?",
                cevap:
                    "Girebilir, ancak kompakt gövdeli bir sınıfla. Jeneratör grubu genellikle betonarme bir platform üzerinde durur ve etrafındaki manevra alanı sınırlıdır. Ekipmanlar arası mesafeyi ve makinenin geçeceği en dar noktayı bize bildirirseniz sığacak sınıfı önceden netleştiririz.",
            },
            {
                soru: "Şeker deposu dolu; çatı onarımını bekletmeli miyiz?",
                cevap:
                    "Beklemenizi öneririz. Ürün doluyken istif yüzeyi taşıyıcı değildir, makine içeri girse bile konumlanacak sağlam bir zemin bulamaz. Buna ürün riski eklenir: düşen bir parça partinin tamamını şüpheli hâle getirir. Boşalma dönemini bekleyemeyeceğiniz acil durumlarda dışarıdan yandan uzanarak sınırlı bir müdahale mümkündür.",
            },
            {
                soru: "Hem biyogaz hem depo tarafında işimiz var; aynı gün ikisini de yapabilir misiniz?",
                cevap:
                    "Yapabiliriz, ancak iki izin sürecini çakıştırmamak için gün planını iki bloğa ayırırız: sabah bloğunda gaz teyidi tamamlanan bölgede çalışılır, öğleden sonra bloğunda elektrik teyidi tamamlanan bölgeye geçilir. Bu ayrım, iki teyidin de aynı anda beklenmesinden doğan zaman kaybını önler ve toplam süreyi kısaltır.",
            },
            {
                soru: "Kampanya sonrası bakım için ne zaman rezervasyon yapmalıyız?",
                cevap:
                    "Kampanya bitmeden önce. Bölgedeki tesisler aynı takvimi paylaşır ve hacimler boşaldığında talep birkaç haftaya yığılır. Erken rezervasyon yaptığınızda makine tesis boşaldığı gün sahada olur ve program ilk günden işler. Bize gereken, kalem listesi ve tahmini bitiş tarihidir.",
            },
            {
                soru: "Haşhaş deposunda ek güvenlik kuralı var mı?",
                cevap:
                    "Bazı haşhaş ürünlerinin depolandığı tesislerde işletmenin kendi erişim ve güvenlik kuralları geçerlidir; bu kurallara uyarız ve gerekli belgelendirmeyi işletmenizle birlikte yaparız. Teknik tarafta belirleyici olan yine istif yüksekliği ve ürünün dolu olup olmadığıdır. Kurallarınızı önceden paylaşırsanız ekibimiz bunlara uyarak gelir.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Bolvadin’in şeker pancarı ve haşhaş işleme geleneği ile bölgedeki biyogaz enerji yatırımlarının varlığı kamuya açık genel bilgidir; gaz-elektrik izin süreçlerinin birlikte yönetimi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },

    "bolge:konya-osb-cevre-ili": {
        h1: "Konya Yönünde GES ve Tarım Sanayi Depoları İçin Platform Kiralama",
        giris:
            "\"Trafo kabininde ısınma var, üretim düşüyor, bugün birini gönderebilir misiniz?\" — bu tür bir aramayı Konya tarafındaki bir güneş enerjisi santralinden aldığımızda, önce sorduğumuz şey mesafe değil kabin kotudur; sonra devreye giren şey ise komşu ilin kendi elektrik güvenlik ekibiyle nasıl koordine olacağımızdır. Konya’ya bakan geniş ova, bir yandan panel dizileriyle kaplı GES sahalarını, öte yandan ürünü toplayıp bekleten tarım sanayi depolarını barındırır ve bu iki yapı taleple bize hiç aynı şekilde gelmez: biri arıza telefonuyla aniden açılır, diğeri depo boşaldığında planlı bir tur olarak sırasını bekler. Bu sayfada iki türü de ayrı ayrı, kendi ritimleriyle nasıl karşıladığımızı anlatıyoruz.",
        maddeler: [
            {
                baslik: "Panel dizisi arasında trafo ve invertör kabinine ulaşmak",
                metin:
                    "Bir GES sahasında platform çağrısı çoğunlukla panelin kendisinden değil, dizilerin arasına serpiştirilmiş orta gerilim kabinlerden gelir. Bu kabinlere ulaşmak için makinenin dizi araları kadar dar bir koridordan geçmesi gerekir; bu yüzden şase genişliğini panel sıra aralığıyla karşılaştırmadan sınıf önermeyiz. Zemin, ekili arazinin devamı olduğu için tekerleğin batmayacağı bir taşıma gücü aranır ve bu, arazi tipi bir sınıfı neredeyse otomatik hâle getirir.",
            },
            {
                baslik: "Reaktör kapağına inmeden önce beklediğimiz onay",
                metin:
                    "Tarımsal artığı işleyen bir biyogaz ünitesinde sepeti yukarı kaldırmadan önce beklediğimiz tek şey, o bölgedeki gaz yoğunluğunun ölçülüp güvenli bulunduğuna dair tesisin kendi imzasıdır; bu imza gelmeden reaktör çevresine yaklaşmayız. Onay geldikten sonra bile makineyi tank gövdesine bitiştirmek yerine, yatay kolu geniş açan bir sınıfla mesafeli durup oradan uzanmayı tercih ederiz.",
            },
            {
                baslik: "Depo dolu görünse de üstüne çıkılmaz",
                metin:
                    "Tarımsal ürünün istiflendiği bir depoda, çuvalların en üst sırasına aydınlatma veya havalandırma için yaklaşmak istediğimizde önce sorduğumuz şey doluluk oranıdır. Yığın taşıyıcı bir zemin değildir; üstüne bir parça düşse bile o parti artık şüpheli sayılır. Bu yüzden depo dolu kaldığı sürece işi erteler, boşalma haberini beklemeyi öneririz — sabırsızlanan bir tesise dahi bu konuda taviz vermeyiz.",
            },
            {
                baslik: "Gaz ve elektrik için ayrı imza, ayrı takvim",
                metin:
                    "Bir günde hem enerji dönüşüm ünitesine hem GES trafosuna uğrayacaksak, iki farklı onayı aynı anda beklemeyiz; sabahı elektrik tarafına, öğleden sonrayı gaz tarafına ayırırız çünkü ikisinin imza süreci farklı ekiplerden ve farklı hızda gelir. Bu ayrım, sahada boş boş bekleyen bir makine yerine, her saatin bir işe gittiği bir günü mümkün kılar.",
            },
            {
                baslik: "Komşu ilde neden tek seferlik değil listeli çalışırız",
                metin:
                    "Konya tarafına geçtiğimizde makine bir kez indirilip geri döner; bu geliş-gidiş kendi başına bir maliyettir ve tek bir kabin veya tek bir çatı sacı için katlanılırsa iş, değerinin üstünde bir bedele çıkar. Bu yüzden aynı bölgedeki birkaç talebi aynı haftaya toplarız — biri GES tarafında, diğeri depo tarafında olsa bile. Elimizde liste varsa geliş-gidişi bir kez öderiz, kalan her iş kendi kalemine düşer.",
            },
        ],
        ekBolumler: [
            {
                baslik: "Konya tarafında karşılaştığımız alanlar",
                paragraflar: [
                    "Bu bölgede sık çağrıldığımız alanları ve her birinde tercih ettiğimiz sınıfı aşağıdaki tabloda topladık.",
                ],
                tablo: {
                    basliklar: ["Alan", "Çağrı sebebi", "Beklenen onay", "Tercih edilen sınıf"],
                    satirlar: [
                        ["GES trafo/invertör kabini", "Isınma, bağlantı kontrolü", "Elektrik ekibi imzası", "Dar gövdeli arazi tipi"],
                        ["GES çevre aydınlatması", "Direk, kamera arızası", "Yok, açık saha", "Hızlı toplanan bomlu"],
                        ["Biyogaz reaktör kapağı", "Periyodik kontrol", "Gaz ölçüm imzası", "Uzun kollu eklemli"],
                        ["Enerji dönüşüm ünitesi", "Baca, radyatör, pano", "Elektrik ekibi imzası", "Kompakt akülü"],
                        ["Tarım sanayi deposu", "Çatı sacı, mahya", "Depo boşalmış olmalı", "Arazi tipi makaslı"],
                        ["Sevkiyat rampası", "Aydınlatma, oluk", "Yok, trafik dışı saat", "Dizel, hızlı toplanan"],
                    ],
                },
            },
            {
                baslik: "Neden aynı gün iki farklı imzayı beklemeyiz",
                paragraflar: [
                    "Bir sahada hem elektrik hem gaz kaynaklı risk varsa, iki ayrı ekipten gelecek onayı aynı anda kovalamak günü heba eder; biri gelene kadar diğeri beklerken makine boş durur. Bunun yerine günü ikiye böleriz: sabah saatlerini, genellikle daha önce netleşen elektrik tarafına, öğleden sonrayı ise gaz ölçümünün tamamlandığı saate ayarlarız.",
                    "Bu sıralamayı önceden konuşmadığımız sahalarda, ilk ziyaretin büyük bölümü onay beklemekle geçebilir. Tesisin iki ekibinin de o gün sahada olacağını teyit ettiğimizde, aynı sevkiyatla iki bölgeyi de bitirmemiz mümkün olur.",
                ],
            },
            {
                baslik: "Tek kabin için mi, listeyle mi gelmeliyiz",
                paragraflar: [
                    "Konya tarafına giden bir sevkiyatın maliyetinin büyük kısmı, sahada geçirilen süreden değil geliş-gidişin kendisinden doğar. Tek bir trafo kabini veya tek bir çatı sacı için bu maliyeti tek başına taşımak, işin gerçek değerinin üstüne çıkar.",
                    "Bunun yerine önerimiz şudur: bölgedeki başka bir GES sahası veya depo ile aynı haftaya denk gelip gelmediğinizi bize sorun. Denk geliyorsa geliş-gidiş payını paylaşırsınız; gelmiyorsa bile listenizi bir sonraki turumuza kadar biriktirip tek seferde kapatmayı öneririz.",
                ],
            },
        ],
        sss: [
            {
                soru: "Konya tarafındaki bir GES sahasından acil arıza çağrısı geldi; aynı gün gelir misiniz?",
                cevap:
                    "Geliriz, ancak sahaya inmeden önce mutlaka sorduğumuz şey kabin çevresinin gerilimsiz hâle getirilip getirilmediğidir; bu teyit tesisin kendi elektrik ekibinden gelmeden sepet o noktaya çıkmaz. Telefonda kabin kotunu ve zeminin ne durumda olduğunu öğrenirsek, makine yola çıkarken sınıf kararını da vermiş oluruz; sahada ikinci bir bekleme yaşanmaz.",
            },
            {
                soru: "Biyogaz reaktörünün kapağını kontrol edeceğiz; gaz ölçümünü siz mi yapıyorsunuz?",
                cevap:
                    "Hayır, o ölçümü ve buna bağlı güvenli çalışma iznini tesisinizin kendi ekibi verir; biz bu izne uyarız, kendi ekipmanımızla ayrıca ölçüm yapmayız. Ölçümün ne kadar sürdüğünü bilirsek makinemizi o saate göre sahaya indiririz; izin gelmeden reaktöre yaklaşmayız, bunda esnememiz mümkün değildir.",
            },
            {
                soru: "Deponun içindeki istif hâlâ yüksek; yine de çatıya çıkabilir misiniz?",
                cevap:
                    "Tercih etmeyiz. Yığının üst sırası ağırlığını taşıyacak biçimde tasarlanmamıştır ve sepetin küçük bir teması bile onu bozabilir. Acil bir sızıntı varsa dışarıdan yandan uzanarak sınırlı bir müdahale yaparız, ama esas onarımı deponun boşaldığı güne ertelemenizi öneririz — bu, hem daha hızlı hem daha güvenli sonuçlanır.",
            },
            {
                soru: "Aynı gün hem trafo kabinine hem reaktöre uğrayabilir misiniz?",
                cevap:
                    "Uğrayabiliriz, ama iki onayı aynı anda beklemeyiz; günü bölerek çalışırız. Elektrik ekibinin onayı genellikle daha erken geldiği için sabahı ona ayırır, gaz ölçümü tamamlandığında öğleden sonra reaktör tarafına geçeriz. İki ekibin de o gün sahada olacağından emin olursak, tek sevkiyatla iki işi bitirmek mümkün olur.",
            },
            {
                soru: "Tek bir kabin arızası için Konya’ya tek başına gelmeniz mantıklı mı?",
                cevap:
                    "Genellikle değil ve bunu saklamayız; geliş-gidişin kendisi tek bir kalem için işin değerinin üstüne çıkabilir. Acil bir durumsa yine de geliriz. Acil değilse bölgedeki başka bir talebe denk gelip gelmediğinizi kontrol ederiz; denk geliyorsa geliş-gidiş payı paylaşılır ve toplamda ödediğiniz belirgin biçimde düşer.",
            },
            {
                soru: "Program birden fazla gün sürerse makine nerede kalıyor, kim sorumlu oluyor?",
                cevap:
                    "Tesis sınırları içinde, sizinle birlikte belirlediğimiz düz ve korunaklı bir noktada kalır. Akülü bir ünite kalacaksa oraya erişebilecek bir priz hattı isteriz. Kalış boyunca makinenin muhafazası park alanını sağlayan tarafa aittir; başlangıçta ve teslimde durumu fotoğraflarız ki iade günü hiçbir kalem tartışmalı kalmasın.",
            },
        ],
        kaynak:
            "Elle yazıldı — 2026-08-13. Konya bölgesindeki güneş enerjisi yatırımlarının ve tarımsal ürün depolama tesislerinin varlığı kamuya açık genel bilgidir; onay sıralaması ve geliş-gidiş paylaşım yöntemi firma saha pratiğidir. Tesis adı, kapasite ve rakam kullanılmamıştır.",
    },
};

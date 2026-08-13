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
    "bolge:dinar-osb": {
        h1: "Dinar OSB’de Enerji Altyapısı İçin Platform Kiralama",
        giris:
            "Dinar OSB’de enerji odaklı bir yüksekte çalışma programı, üretim hattının ne ürettiğinden önce elektriğin parsele nasıl ulaştığını, çatıda nasıl üretildiğini ve kesinti anında hangi ekiplerin yetki verdiğini anlamayı gerektirir. Bu sayfanın konusu ortak alan bakımı ya da genel fabrika kabulü değildir; çatı üstü güneş enerjisi sistemleri, trafo ve dağıtım yapıları, kablo güzergâhları ile enerji izleme elemanlarının erişim planıdır. Aynı parselde üretim sürerken enerji ekibi farklı bir izin zinciriyle çalışır ve sepetin hareketi yalnızca yükseklik ölçüsüne göre belirlenemez. Çatı taşıma sınırı, enerjili bölge yaklaşımı, yangın yolu açıklığı ve üretim duruşu tek iş planında buluşmalıdır. Bu nedenle sevkiyattan önce tesisin enerji sorumlusu ile bakım listesini nokta nokta ele alır, platformu ancak enerji durumu ve güvenli konumlanma alanı yazılı biçimde netleştiğinde sahaya indiririz.",
        maddeler: [
            { baslik: "Çatı GES bakımında aşağıdan güvenli erişim", metin: "Sanayi çatısındaki panel dizilerine ulaşmak için çatının üstüne araç çıkarmak yerine, uygun cepheden bomla yaklaşmayı önceliklendiririz. Panel sıraları arasındaki dar yürüyüş yolu bakım personeli için yeterli görünse bile malzeme taşıma ve kurtarma açısından yetersiz olabilir. Sepet; bağlantı kutusu, kablo taşıyıcı ve panel altı kontrol noktalarına aşağıdaki sert zeminden erişir. Çatı kenarındaki oluk, parapet ve güneş kırıcılar uzanma hattını etkilediği için yalnızca çalışma kotu değil, yatay mesafe de keşifte ölçülür. Rüzgâr, yağış ve yüzeydeki buzlanma işletmenin çalışma izniyle birlikte değerlendirilir; uygun olmayan hava koşulunda sırf makine sahaya geldi diye çalışma başlatılmaz." },
            { baslik: "Trafo ve dağıtım yapılarında yetki sınırı", metin: "Trafo çevresindeki izolatör, kablo başlığı, havalandırma panjuru veya üst kot bağlantısına yaklaşmadan önce ilgili bölümün enerji durumu tesisin yetkili ekibi tarafından doğrulanır. Platform operatörü elektriksel ayırma yapmaz, kilitleme etiketleme kararını vermez ve sözlü bir güvenceyle hareket etmez. Güvenli yaklaşma bölgesi işaretlendikten sonra makinenin dönüş alanı, bomun olası salınımı ve acil iniş koridoru kontrol edilir. Enerji verilecek saat önceden belirlendiğinde iş listesi ters sıraya alınabilir; önce trafonun çevresindeki işler kapanır, ardından üretimi durdurmayan dış cephe veya aydınlatma kalemlerine geçilir." },
            { baslik: "Kablo köprüsü ve sayaç noktalarında rota planı", metin: "Enerji dağıtımı yalnızca trafo binasında kalmaz; parsel içinde kablo tavaları, köprü geçişleri, dış sayaç kutuları ve izleme cihazları farklı kotlara yayılır. Bu noktalar için tek bir merkezî konumlanma çoğu zaman yeterli olmaz. İş başlamadan önce durakları harita üzerinde sıralar, her durakta makinenin zemine bastığı alanı ve alttan geçen araç yolunu kaydederiz. Böylece sepet havadayken lojistik trafiğiyle pazarlık yapmak yerine, geçişler vardiya ve sevkiyat penceresine göre önceden kapanır. Kablo taşıyıcısına yük bindirilmez; personel ve aletler yalnızca sepet içinde tutulur." },
            { baslik: "Yangın yolu ve acil erişimi açık tutmak", metin: "Enerji odalarının çevresindeki yol, sıradan bir park alanı değildir; yangın müdahalesi ve işletmenin acil tahliye düzeni için açık kalması gerekebilir. Makinenin destek alanı bu koridoru kapatıyorsa tesisin onayı olmadan yerleşim yapılmaz. Alternatif cephe, kısa süreli trafik kesisi veya işin düşük yoğunluklu saate taşınması birlikte değerlendirilir. Sepetin altındaki çalışma alanı bariyerlenirken acil kapı, hidrant veya pano önü kapatılmaz. Gün sonunda makine park edilecekse park yeri de aynı ilkeye göre seçilir; geçici kolaylık uğruna enerji güvenliği düzeni bozulmaz." },
            { baslik: "Bakım kaydıyla tekrar eden turu kısaltmak", metin: "Enerji ekipmanında aynı noktalara dönemsel olarak yeniden gidilir. Her konumlanmada erişilen eleman, kullanılan cephe, zemin koşulu ve işi durduran izin başlığı teslim kaydına işlenirse sonraki tur keşiften değil doğrulamadan başlar. Fotoğraf kaydı elektriksel uygunluk belgesi yerine geçmez; yalnızca erişim planını destekler. Yeni bir ekipman eklenmiş, servis yolu değişmiş veya çatı kenarı kapatılmışsa eski plan aynen kullanılmaz. Bu kayıt düzeni özellikle birden fazla parselin aynı bakım haftasında ele alındığı programlarda makinenin gereksiz dolaşmasını ve izin beklemesini azaltır." },
        ],
        ekBolumler: [
            { baslik: "Enerji çalışma noktasına göre hazırlık", paragraflar: ["Dinar OSB’de enerji bakımını, ekipmanın adı kadar erişim biçimi ve yetki zinciri belirler. Aşağıdaki tablo keşifte konuşulan temel ayrımları gösterir."], tablo: { basliklar: ["Çalışma noktası", "Erişim ihtiyacı", "Ön koşul", "Planlama kararı"], satirlar: [["Çatı panel dizisi", "Panel altı ve kablo hattı", "Çatı kenarı ile hava kontrolü", "Sert zeminden bomlu erişim"], ["Trafo dış yüzü", "Üst bağlantı ve panjur", "Yetkili enerji teyidi", "Sınırlandırılmış yaklaşma"], ["Kablo köprüsü", "Askı ve taşıyıcı kontrolü", "Alt trafik kesisi", "Durak bazlı rota"], ["İzleme ve sayaç noktası", "Sensör, anten, kabin", "Erişim yetkisi", "Kompakt konumlanma"], ["Dış saha aydınlatması", "Armatür ve bağlantı", "Araç yolu ayrımı", "Trafik dışı pencere"], ["Enerji odası cephesi", "Menfez ve çatı detayı", "Acil yol açıklığı", "Alternatif cephe seçimi"]] } },
            { baslik: "Enerji kesintisini iş listesine çevirmek", paragraflar: ["Planlı kesinti, yalnızca üretimin durduğu bir zaman dilimi değildir; normal işletmede yaklaşılamayan enerji noktalarının kontrollü biçimde erişilebilir olduğu sınırlı bir penceredir. Bu pencereye hazırlanmak için iş listesini önceden kot, cephe ve konumlanma sırasına göre dizeriz. Kesinti başladığında ilk iş ölçü almak veya uygun yeri aramak değil, daha önce doğrulanmış noktaya yerleşmek olur.", "Kesintinin sona ereceği saat değiştirilemeyecekse, listenin zorunlu ve ertelenebilir kalemleri ayrı tutulur. Önce yeniden enerji verilmeden tamamlanması gereken işler kapanır; temizlik, dış aydınlatma veya cephe kontrolü gibi enerjiden bağımsız kalemler sonraya bırakılır. İş bitiminde platformun güvenli bölgeye çekildiği ve personelin çalışma alanından çıktığı tesis yetkilisine bildirilmeden enerji verme sürecine geçilmez." ] },
            { baslik: "Birden çok parselde temiz bir enerji turu", paragraflar: ["Aynı OSB programında farklı parsellerin enerji ekipleri ayrı izin ve refakat düzenine sahip olabilir. Bir parselde alınan çalışma izni diğerinde geçerli sayılmaz; her adreste teslim, saha tanıtımı ve enerji teyidi yeniden yapılır. Buna karşılık erişim kayıtları ve makine hazırlığı ortaklaştırılabilir. Benzer kot ve zemin koşullarına sahip talepler aynı sınıfla sıraya alınır, uyumsuz bir iş için programın ortasında ekipman değiştirmekten kaçınılır.", "Günün akışı, izin saatlerine göre kurulurken acil müdahale yolları ve parseller arası temizlik de hesaba katılır. Çatıdan veya açık sahadan dönen ünitenin tekerlek ve sepet kontrolü yapılmadan temiz üretim hacmine girmesine izin verilmez. Böylece enerji turu yalnızca daha ekonomik değil, her tesisin kendi düzenini koruyan izlenebilir bir programa dönüşür." ] },
        ],
        sss: [
            { soru: "Çatıdaki güneş enerjisi ekipmanına platformla her cepheden ulaşılır mı?", cevap: "Hayır. Çalışma kotu uygun olsa bile yatay uzanma, oluk ve parapet biçimi, zeminin taşıma durumu ile bomun dönüş alanı erişimi sınırlayabilir. Keşifte çatı kenarını ve aşağıdaki konumlanma alanını birlikte inceleriz. Sert ve düz bir cephe varsa aşağıdan erişim tercih edilir; güvenli mesafe kapanmıyorsa farklı sınıf ya da farklı bir yöntem önerilir. Çatı taşıma sınırı hakkında tahmin yürütmeyiz ve yapının üzerine makine bindirmeyiz." },
            { soru: "Trafo enerjisiz görünüyor; yazılı teyit olmadan çalışabilir miyiz?", cevap: "Çalışamayız. Görsel durum, elektriksel ayırmanın kanıtı değildir. İlgili bölümün enerji durumu, güvenli yaklaşma sınırı ve yeniden enerji verme saati tesisin yetkili ekibi tarafından doğrulanmalıdır. Platform ekibi bu yetkinin yerine geçmez. Teyit gecikirse enerji noktasını beklemek yerine, izin gerektirmeyen dış saha kalemlerine geçebiliriz; ancak trafo çevresindeki işi sözlü güvenceyle başlatmayız." },
            { soru: "Planlı kesinti kısa sürerse bütün bakım listesi yetişir mi?", cevap: "Bunu kalem sayısıyla değil konumlanma sayısı ve zorunlu iş sırasıyla hesaplarız. Kesintiden önce rota, erişim cephesi ve gerekli aletler netleştirilirse pencere verimli kullanılır. Yine de listenin tamamı garanti edilemiyorsa enerji verilmeden bitmesi gereken işler önceliklenir; diğer kalemler ayrı pencereye bırakılır. Kesintiyi uzatma varsayımıyla teklif hazırlamak yerine gerçek süreye sığan açık bir kapsam sunarız." },
            { soru: "Makine yangın yolunda kısa süre durabilir mi?", cevap: "Ancak tesisin acil durum sorumlusu alanın geçici kullanımını onaylar ve alternatif geçişi açıkça belirlerse değerlendirilebilir. Hidrant, acil kapı, pano önü veya müdahale aracının dönüş alanı kapatılamaz. Uygun onay yoksa başka cepheden uzanır ya da işi trafik yoğunluğunun düştüğü saate taşırız. Makinenin gece parkı için de aynı kural geçerlidir; çalışma bitince acil yol tamamen açılır." },
            { soru: "Birden fazla parsel aynı makineyi paylaşabilir mi?", cevap: "Erişim ölçüleri ve çalışma ortamları aynı sınıfa uygunsa paylaşabilir. Her tesis ayrı teklif, teslim kaydı ve çalışma izni alır; bir parselin enerji teyidi diğerine taşınmaz. Adresleri izin saatlerine ve güzergâha göre sıralar, parseller arası gerekli temizliği programa yazarız. Böylece sevkiyat payı bölünürken güvenlik sorumluluğu bulanıklaşmaz ve her işletme kendi işinin kapanışını ayrıca onaylar." },
            { soru: "Enerji bakımından sonra hangi kayıtları teslim ediyorsunuz?", cevap: "Erişilen noktaları, platformun konumlandığı cepheleri, iş sırasında karşılaşılan erişim engellerini ve teslim durumunu çalışma kaydına işleriz. Bu kayıt, tesisin elektriksel test veya bakım raporunun yerine geçmez; platform hizmetinin izini gösterir. Bir sonraki turda aynı noktaya daha hızlı hazırlanmayı sağlar. Saha düzeni değişmişse eski kayıt yalnızca başlangıç bilgisi olarak kullanılır ve güncel koşullar yeniden doğrulanır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Organize sanayi alanlarında çatı üstü güneş enerjisi, parsel içi elektrik dağıtımı ve planlı bakım uygulamaları sektör geneli bilgilerdir; erişim rotası, izin sıralaması ve kayıt yöntemi firma saha pratiğidir. Tesis adı, kapasite ve doğrulanmamış rakam kullanılmamıştır.",
    },

    "bolge:sultandagi": {
        h1: "Sultandağı’nda Tarım Sanayisi ve Enerji Dönüşümü İçin Platform Kiralama",
        giris: "Sultandağı’nda tarımsal üretimin sanayi tarafı yalnızca ürünün soğukta tutulduğu hacimlerden ibaret değildir. Ayıklama sonrası çıkan organik yan ürünün yönetimi, paketleme yapılarının enerji tüketimi, çatı üstü üretim sistemleri, kazan ve kurutma yardımcıları ile depo çevresindeki elektrik altyapısı aynı bakım takviminde buluşur. Bu sayfa meyve sezonunun soğuk oda içindeki operasyonunu ya da yün işleyen atölyeleri tekrar etmez; tarımsal hammaddenin tesise girişinden yan ürünün ayrılmasına, depolama yapılarının enerji ihtiyacından dış saha yardımcılarına uzanan teknik zincire odaklanır. Yüksekte çalışma planı da bu zincirin ritmine göre kurulur: temiz ürün bölgesi ile atık kabul bölgesi birbirinden ayrılır, enerji ekipmanına yaklaşım yetkili teyidine bağlanır ve bahçe yolunun mevsimsel zemini sevkiyat kararına dâhil edilir. Amaç bir makineyi bütün sahada dolaştırmak değil, her ortam için doğru sırayı ve temizliği önceden kurmaktır.",
        maddeler: [
            { baslik: "Ayıklama hattı üstündeki yardımcı sistemler", metin: "Tarım ürünü kabul ve ayıklama bölümünde yüksekte kalan işler; aydınlatma, havalandırma ağzı, kablo taşıyıcı, kamera ve konveyör üstü sensör çevresinde toplanır. Ürün akışı sürerken açık ürünün üstüne personel veya ekipman çıkarılmaz. Bakım, hat boşaldığında ve alt bölge örtülüp sınırlandırıldığında yapılır. Sepet altına düşebilecek parçalar için toplama düzeni kurulur, el aletleri bağlanır ve iş sonunda eksiksiz sayılır. Burada platform seçimini yalnızca tavan yüksekliği değil, bantların arasındaki geçiş ve dönüş alanı belirler; ölçüler paylaşılmadan geniş bir sınıf gönderilmez." },
            { baslik: "Organik yan ürün alanında ayrı çalışma düzeni", metin: "Sap, yaprak, çekirdek veya ayıklama artığı gibi organik yan ürünlerin toplandığı bölüm, temiz paketleme hacminden farklı bir çevredir. Nem, koku, yüzey kirliliği ve araç hareketi aynı anda bulunabilir. Bu bölgedeki sundurma, aspirasyon, kapı üstü ve aydınlatma işleri günün kabul trafiği bittikten sonra planlanır. Makine bu alandan çıktıktan sonra temizlenmeden ürün bölümüne dönmez. Yan ürünün hangi yöntemle değerlendirildiği tesisten tesise değişebilir; belirli bir proses veya kapasite varsaymak yerine, sahanın kendi risk değerlendirmesi ve erişim kuralları esas alınır." },
            { baslik: "Çatı enerjisi ile üretim takvimini ayırmak", metin: "Paketleme veya depo çatısındaki güneş enerjisi elemanlarına bakım yapılırken aşağıdaki ürün akışını durdurmadan ilerlemek mümkün olabilir; ancak bu, enerji güvenliği ve düşen cisim kontrolü ortadan kalkmış demek değildir. Çatı kenarına sert zeminden yaklaşır, panel dizisi ve bağlantı kutularına güvenli uzanma hattı ararız. Elektriksel ayırma ve güvenli yaklaşma teyidi tesisin yetkili ekibinden gelir. Ürün kabulü yoğunken giriş kapısının üstünde çalışma yapılmaz; çatı işi, dış saha trafiğini kapatmayacak cephelere ve sakin saatlere bölünür." },
            { baslik: "Bahçe bağlantılı sahada kuru güzergâh seçimi", metin: "Tesis çevresindeki servis yolu bahçe veya sulama hattına bağlanıyorsa zeminin durumu takvim boyunca değişir. Yüzey kuru görünse bile alt katman sulama sonrasında taşıma gücünü kaybedebilir. Çekici ve platform için aynı rota varsayılmaz; ağır taşıma aracı sert alanda kalırken makine uygun koşul varsa kendi yürüyüşüyle çalışma noktasına geçebilir. Son sulama bilgisi, yol fotoğrafı ve dönüş alanı sevkiyattan önce istenir. Şüpheli zemine deneme amacıyla girilmez; alternatif konumlanma veya daha uygun bir kuru pencere seçilir." },
            { baslik: "Sezon öncesi tek liste, ortam bazlı sıra", metin: "Tarım sanayisindeki yardımcı sistemler sezon açıldığında birbirine bağlı hâle gelir; bir kapı arızası kabulü, bir aspirasyon sorunu ayıklamayı, enerji tarafındaki kesinti ise bütün tesisi etkileyebilir. Bu nedenle yüksekte kalan kalemleri sezon öncesi tek listede toplar, fakat uygulamayı ortam bazında böleriz. Önce temiz ve kuru hacimler, ardından dış saha, en son organik yan ürün bölgesi ele alınır. Çatı enerjisi için gereken yetkili teyidi ayrı saate bağlanır. Bu sıra, bir bölümdeki kiri diğerine taşımadan aynı sevkiyatın daha çok kalemi kapatmasını sağlar." },
        ],
        ekBolumler: [
            { baslik: "Tarım sanayisi alanlarına göre çalışma düzeni", paragraflar: ["Her bölüm aynı ürün zincirinde bulunsa da erişim, temizlik ve izin koşulları değişir. Planı aşağıdaki ayrımla kurarız."], tablo: { basliklar: ["Alan", "Yüksekteki kalem", "Baskın koşul", "Uygulama zamanı"], satirlar: [["Ayıklama hattı", "Sensör, armatür, kablo", "Açık ürün ve bant", "Hat boşken"], ["Paketleme hacmi", "Havalandırma, kamera", "Temiz alan", "Temizlik sonrası"], ["Yan ürün kabulü", "Sundurma, aspirasyon", "Nem ve araç trafiği", "Kabul bittikten sonra"], ["Çatı enerji alanı", "Bağlantı ve taşıyıcı", "Elektrik teyidi", "Yetkili pencere"], ["Depo dış cephesi", "Oluk, kapı üstü, ışık", "Yükleme trafiği", "Sevkiyat dışında"], ["Bahçe servis hattı", "Pano, direk, kamera", "Sulama sonrası zemin", "Kuru güzergâhta"]] } },
            { baslik: "Temiz alandan yan ürün alanına tek yönlü geçiş", paragraflar: ["Aynı platformun farklı bölümlere girmesi mümkündür, fakat gelişigüzel bir rota kullanılamaz. Ürünle temas riski bulunan temiz hacimler programın başına yazılır. Tekerlek, sepet ve aletler girişte kontrol edilir; sızıntı veya yüzey kirliliği görülürse makine içeri alınmaz. Temiz alan işi kapandıktan sonra dış sahaya ve en son organik yan ürün kabulüne geçilir.", "Programın tersine dönmesi zorunluysa araya yalnızca kısa bir süpürme değil, tesisin hijyen prosedürüne uygun temizlik ve kabul kontrolü konur. Bu zaman teklif ve günlük plana önceden yazılır. Böylece makinenin bir alandan diğerine taşıdığı görünmeyen risk, üretim başladıktan sonra ortaya çıkan bir kalite sorununa dönüşmez." ] },
            { baslik: "Enerji ve tarım takvimini birlikte kapatmak", paragraflar: ["Çatı enerji bakımı çoğu zaman ürün hattını doğrudan durdurmaz, fakat erişim cephesi yükleme kapısıyla çakışabilir. Bu nedenle enerji ekibinin izin saati ile depo ve kabul ekibinin trafik planı aynı çizelgede buluşturulur. Sabah sakin cephede çatı işi yapılırken ürün kabulü diğer kapıdan ilerleyebilir; yoğunluk başladığında platform dış saha rotasından çekilir ve hat içindeki planlı duruşa geçer.", "Bu eşgüdüm için bakım sorumlusunun tek başına tarih vermesi yeterli değildir. Enerji yetkilisi, üretim sorumlusu ve saha trafiğini yöneten ekip çalışma öncesi kendi sınırlarını belirtmelidir. Kararlar yazılı iş listesine işlendiğinde platform bekleme aracı olmaktan çıkar, farklı ekiplerin pencerelerini birbirine bağlayan planlı bir erişim aracına dönüşür." ] },
        ],
        sss: [
            { soru: "Paketleme hattı çalışırken üst kotta bakım yapabilir misiniz?", cevap: "Açık ürünün veya hareketli hattın üstünde planlı bakım yapmayız. İlgili kesit boşaltılır, enerji ve hareket durumu tesis tarafından güvenli hâle getirilir, alt alan örtülüp sınırlandırılır. Acil bir durum varsa kapsam yalnızca arızayı güvenli biçimde giderecek kalemle sınırlandırılır. Aydınlatma yenilemesi, kablo düzeni ve kapsamlı havalandırma işi gibi ertelenebilir kalemler sezon öncesi pencereye bırakılır." },
            { soru: "Yan ürün alanından sonra aynı makine depoya girebilir mi?", cevap: "Doğrudan giremez. Nemli veya kirli kabul alanından çıkan tekerlek, sepet ve ekipman tesisin temizlik prosedürüne göre temizlenip yeniden kontrol edilmelidir. Mümkünse programı temizden kirliye tek yönlü kurar ve depoyu önce bitiririz. Sıra değişemiyorsa temizlik süresini günlük plana ekleriz; bunu görünmez bir ara iş sayıp atlamayız." },
            { soru: "Çatı GES bakımı sırasında tesisi tamamen durdurmak gerekir mi?", cevap: "Her iş için tamamen duruş gerekmez. Ancak elektriksel yaklaşma koşulunu tesisin yetkili ekibi belirler ve çalışma cephesinin altındaki araç ya da personel trafiği ayrılmalıdır. Yükleme kapısına denk gelen bölüm sakin saate bırakılabilir, diğer cephelerde çalışma sürdürülebilir. Hangi bölümün ne ölçüde duracağı keşif ve izin planında yazılır; üretim kaybını azaltmak adına güvenlik teyidi atlanmaz." },
            { soru: "Bahçe servis yolu sulamadan sonra ne zaman kullanılabilir?", cevap: "Sabit bir süre söylemeyiz; toprağın yapısı, drenajı, gölgede kalması ve taşıyacağı ekipman sonucu değiştirir. Son sulama bilgisi yalnızca ön elemedir. Sevkiyat öncesinde fotoğraf ister, sahada indirme öncesi güzergâhı kontrol ederiz. Yüzey sağlam görünse bile taşıma gücünden şüphe varsa girmeyiz; sert bir noktadan uzanma, farklı rota veya daha kuru tarih seçeriz." },
            { soru: "Sezon öncesi bakım listesine hangi bilgileri eklemeliyiz?", cevap: "Her kalemin bulunduğu bölüm, yaklaşık kotu, aşağıdaki boş alanı, hattın hangi saatlerde durduğu ve işi onaylayacak yetkiliyi yazmanız yeterli bir başlangıçtır. Çatı enerji noktalarında erişim cephesi ve elektrik teyit süreci, dış sahada araç trafiği, bahçe bağlantısında sulama bilgisi ayrıca eklenir. Fotoğraflar ve basit bir yerleşim krokisi, sahada yanlış sınıf veya gereksiz konumlanma riskini büyük ölçüde azaltır." },
            { soru: "İlçedeki birkaç tarım işletmesi aynı programda çalışabilir mi?", cevap: "Erişim ihtiyaçları aynı makine sınıfıyla karşılanabiliyorsa çalışabilir. Her işletme kendi hijyen kabulünü, teslim kaydını ve enerji iznini ayrı yürütür; ortak olan yalnızca bölgeye geliş ve adresler arası programdır. Temiz alanı olan tesisleri rota başına, yan ürün veya dış saha ağırlıklı işleri sona yazarız. Böylece sevkiyat paylaşılırken bir işletmenin ortamı diğerine taşınmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-13. Sultandağı’nın tarımsal üretim ve ürün işleme kimliği kamuya açık genel bilgidir; organik yan ürün, çatı enerjisi ve yardımcı tesislere ilişkin yaklaşım sektör geneli çerçevede ele alınmış, tesis veya kapasite varsayılmamıştır. Rota, temizlik ve izin sıralaması firma saha pratiğidir.",
    },
};

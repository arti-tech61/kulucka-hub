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

    // ── HİZMET SAYFALARI (2026-08-14) ──────────────────────────────────────
    // Mercek: Afyonkarahisar'ın sucuk-pastırma/kırmızı et gıda işleme
    // tesisleri. afyonmanlift.com'daki genel tarım-gıda (mandıra, tahıl,
    // meyve paketleme) anlatısından farklı olarak burada SPESİFİK et işleme
    // zinciri (kurutma/olgunlaştırma odası, dondurulmuş ürün deposu,
    // soğuk zincir sevkiyat, baharat-tuz girdi deposu) işlenir.
    "hizmet:sepetli-orumcek-platform-kiralama": {
        h1: "Afyonkarahisar Sucuk-Pastırma Tesislerinde Kurutma Odaları Arası Sepetli Örümcek Platform Kiralama",
        giris:
            "Afyonkarahisar'ın sucuk ve pastırma üretiminde tanınan bir merkez olması, buradaki et işleme tesislerinin bir kısmının zaman içinde büyüyerek değil, mevcut binaya ek kurutma ve olgunlaştırma odaları eklenerek genişlediği anlamına gelir. Sonuç, koridorların dar, oda kapılarının standart bir makaslı platformu almayacak genişlikte, oda içindeki askı rayları ile tavan arası mesafenin ise sıkışık olduğu bir yerleşimdir. Aynı darlık paketleme hattının iki yanındaki servis geçitlerinde ve soğuk depo ile üretim alanı arasındaki bağlantı koridorlarında da karşımıza çıkar. Sepetli örümcek platform, gövdesini katlayarak dar bir kapıdan geçebilmesi, paletli veya küçük tekerlekli yürüyüş takımıyla ıslak beton üzerinde tutunması ve ayaklarını noktasal olarak açarak zemine yayılmasıyla bu tip alanlarda tercih edilir. Bu sayfada örümcek platformun kurutma odası tavanındaki askı sistemi bakımında, oda üstü aydınlatma ve nem sensörü değişiminde ne zaman gerçekten gerekli olduğunu, hangi ölçülerin (kapı genişliği, koridor dönüş yarıçapı, oda içi tavan yüksekliği) montaj kararını belirlediğini anlatıyoruz.",
        maddeler: [
            { baslik: "Kurutma odası kapı ve koridor ölçüsü", metin: "Sepetli örümcek platform seçiminde ilk soru makinenin katlanmış hâldeki genişliği ile en dar kapı arasındaki farktır. Afyonkarahisar'daki bazı sucuk-pastırma tesislerinde kurutma odaları sonradan eklendiği için kapı genişlikleri standart değildir; bir odanın kapısı diğerinden 15-20 santim dar olabilir. Bu nedenle sevkiyat öncesi en dar geçişin fotoğrafı ve santimetre cinsinden ölçüsü istenir; ölçü paylaşılmadan sadece 'dar kapı var' bilgisiyle makine gönderilmez." },
            { baslik: "Askı rayı altında güvenli manevra", metin: "Kurutma ve olgunlaştırma odalarında ürün tavana yakın askı raylarına asılıdır. Platform bu raylar arasında hareket ederken hem sepetin hem şasenin ürüne temas etmemesi gerekir. Çalışma öncesi raydaki ürünün o gün üretimde olup olmadığı, boş rayların hangi kısımda bulunduğu tesis yetkilisiyle birlikte kontrol edilir. Ürünle dolu bir rayın altında yalnızca zorunlu ve önceden planlanmış işler yapılır; keşif yapılmadan bu alanlara girilmez." },
            { baslik: "Nem ve sıcaklık kontrollü ortamda ekipman koşulu", metin: "Kurutma odaları belirli bir nem ve sıcaklık bandında tutulur; kapının uzun süre açık kalması odanın iklimini bozabilir. Bu nedenle platform odaya girmeden önce iş süresi ve kapının açık kalma planı tesis ile netleştirilir. Makinenin akü veya yakıt sistemi kapalı alan havalandırma kurallarına uygun seçilir; kapalı, göreceli dar hacimlerde akülü tip tercih edilir ve dizel/LPG tip için tesisin havalandırma onayı aranır." },
            { baslik: "Hijyen bölgesine giriş öncesi temizlik", metin: "Sucuk-pastırma üretiminde kurutma ve olgunlaştırma odaları genellikle temiz üretim alanının bir parçası sayılır ve tesisin kendi hijyen prosedürüne tabidir. Platform bu alana girmeden önce tekerlek ve şase dış sahada temizlenir; tesisin istediği ek dezenfeksiyon adımı varsa bu adım atlanmadan uygulanır. Aynı gün önce dış saha veya depo işi yapılan bir makine, ara temizlik yapılmadan doğrudan kurutma odasına alınmaz." },
            { baslik: "Dar alanda operatör görüş açısı ve yardımcı personel", metin: "Askı rayları arasındaki dar koridorda operatörün görüş açısı sınırlı olabilir; bu durumda yerde bir yardımcı personel bulundurulması hem manevra güvenliğini hem de rayla temas riskini azaltır. Sepetin yükselme ve dönüş hareketleri düşük hızda yapılır, ani manevra tercih edilmez. İş bitiminde platform odadan çıkarılmadan önce sepet tam iniş konumuna alınır ve geçiş güzergâhı tekrar kontrol edilir." },
        ],
        ekBolumler: [
            {
                baslik: "Tesis bölümüne göre örümcek platform gereksinimi",
                paragraflar: ["Sucuk-pastırma tesisinin farklı bölümlerinde geçiş genişliği, tavan yüksekliği ve hijyen sınıfı değişir. Aşağıdaki tablo, hangi bölümde hangi koşulun öne çıktığını özetler."],
                tablo: {
                    basliklar: ["Bölüm", "Öne çıkan kısıt", "Tipik geçiş genişliği", "Öncelikli önlem"],
                    satirlar: [
                        ["Kurutma odası", "Askı rayı ve dar kapı", "70-90 cm", "Ölçü teyidi, düşük hızlı manevra"],
                        ["Olgunlaştırma odası", "Nem/sıcaklık kontrolü", "80-100 cm", "Kısa kapı açık kalma süresi"],
                        ["Paketleme hattı yanı", "Bant ve personel trafiği", "90-120 cm", "Hat durduğunda çalışma"],
                        ["Soğuk depo geçidi", "Düşük sıcaklık, ıslak zemin", "100-130 cm", "Paletli yürüyüş takımı"],
                        ["İdari-üretim ara koridoru", "Çift yönlü trafik", "110-140 cm", "Refakatçi personel"],
                    ],
                },
            },
            {
                baslik: "Katlı gövdeyle taşıma ve montaj sırası",
                paragraflar: [
                    "Örümcek platform, tesise ulaştığında genellikle katlanmış hâldedir ve hedef odaya en yakın noktada açılıp çalışma konumuna getirilir. Bu, makinenin bütün hâlde dar bir koridordan geçirilmeye çalışılmasından daha güvenli bir yöntemdir. Açma işlemi düz ve sağlam bir zeminde yapılır; kurutma odasının hemen önündeki geçit bu iş için uygun değilse en yakın uygun nokta tesisle birlikte belirlenir.",
                    "Montaj sırasında ayakların açılma genişliği koridorun izin verdiği alanla sınırlıdır; bu nedenle bazı dar noktalarda tam açılım yerine kısıtlı bir açılım kullanılır ve buna göre maksimum yük ile erişim mesafesi düşer. Operatör bu sınırlamayı çalışma öncesi tesise bildirir; beklenenden düşük bir erişim mesafesi çıkması durumunda iş planı yeniden gözden geçirilir." ],
            },
            {
                baslik: "Sezonluk üretim yoğunluğunda planlama",
                paragraflar: [
                    "Sucuk-pastırma üretiminde kurban bayramı öncesi ve kış aylarına denk gelen dönemlerde kurutma odası doluluğu artabilir; bu dönemlerde boş oda veya boş rayda çalışma penceresi daralır. Bakım ihtiyacı olan kalemler mümkünse doluluğun göreceli düştüğü dönemlere planlanır; acil bir arıza varsa dolu rayın etrafında sınırlı ve kısa süreli müdahale yapılır.",
                    "Tesis yetkilisiyle önceden kurulan bir haftalık program, hangi odanın hangi gün boşalacağını, hangi rayın o hafta ürün almayacağını içerir. Bu bilgi paylaşıldığında platform ve operatör, ürünle temas riskini en aza indirecek günlerde sahaya yönlendirilir; program dışı ani talep gelirse önce boş oda kontrolü yapılır." ],
            },
        ],
        sss: [
            { soru: "Sepetli örümcek platform kurutma odasının kapısından geçmezse ne olur?", cevap: "Kapı ölçüsü sevkiyat öncesi paylaşılmadıysa ve sahada uyumsuzluk çıkarsa makine odaya sokulmaya zorlanmaz; kapı çevresindeki doğrama veya raftan güvenli mesafe kontrol edilir, gerekirse daha dar bir sınıf veya farklı bir erişim yöntemi (örneğin merdivenli platform ile parça parça çalışma) değerlendirilir. Bu yüzden ilk görüşmede en dar geçişin fotoğrafı ve ölçüsü istenir; tahmini bilgiyle sevkiyat yapılmaz." },
            { soru: "Ürünle dolu askı rayının altında çalışma yapılır mı?", cevap: "Yalnızca zorunlu ve tesis yetkilisinin onayladığı işler için, sınırlı süreyle ve ürünle temasın engellendiği bir düzenle yapılır. Standart bakım kalemleri, mümkünse rayın boşaldığı veya o bölgeye o gün ürün asılmadığı zaman dilimine planlanır. Rutin bir işi 'dolu rayın altında da yaparız' diyerek üstlenmeyiz; bu hem ürün güvenliği hem iş güvenliği açısından risklidir." },
            { soru: "Kurutma odasında akülü değil dizel platform kullanılabilir mi?", cevap: "Kapalı ve göreceli dar hacimli kurutma odalarında akülü tip tercih edilir; egzoz gazı ve ısı, odanın nem-sıcaklık dengesini bozabileceği gibi çalışan güvenliği açısından da uygun değildir. Dizel veya LPG tip, ancak tesisin havalandırma sistemi buna uygunsa ve tesis yetkilisi onay verirse, genellikle dış saha veya geniş hacimli bölümlerde kullanılır." },
            { soru: "Platform hijyen bölgesine girmeden önce hangi hazırlık yapılır?", cevap: "Tekerlek ve alt şase dış sahada su ve gerekiyorsa tesisin belirlediği dezenfektanla temizlenir; aynı gün önce farklı bir alanda (özellikle dış saha veya yükleme rampası) çalışılmışsa bu temizlik atlanmadan tekrarlanır. Tesisin kendi hijyen prosedürü varsa (örneğin belirli bir giriş noktasından geçiş, ek kontrol) bu adımlara uyulur; prosedür tesisten tesise değişebileceği için önceden sorulur." },
            { soru: "Dar koridorda operatör tek başına mı çalışır?", cevap: "Görüş açısının kısıtlı olduğu askı rayı aralarında yerde bir yardımcı personel bulunması önerilir; bu kişi geri manevra ve dönüşlerde operatöre yol gösterir. Tesisin kendi personelinden bir refakatçi görevlendirmesi de mümkündür, önemli olan iki tarafın da iletişim yöntemini (el işareti veya telsiz) çalışma öncesi netleştirmesidir." },
            { soru: "Kurutma odaları arasında aynı platform birden fazla odada art arda çalışabilir mi?", cevap: "Çalışabilir, ancak odalar arası geçişte ara temizlik ve kısa bir zemin-koridor kontrolü yapılır; bir odada biriken nem veya ürün kalıntısı diğerine taşınmaz. Ayrıca her odanın kendi doluluk durumu ayrı ayrı kontrol edilir; bir odanın boş olması diğerinin de boş olduğu anlamına gelmez." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Afyonkarahisar'ın sucuk ve pastırma üretimindeki bilinirliği kamuya açık genel bilgidir; kurutma/olgunlaştırma odası mimarisi, askı rayı düzeni ve hijyen prosedürü sektör geneli bilgi çerçevesinde ele alınmış, belirli bir tesis adı veya kapasite varsayılmamıştır. Ölçü teyidi ve manevra sırası firma saha pratiğidir.",
    },
    "hizmet:nakliye-teslimat-hizmeti": {
        h1: "Afyonkarahisar Et İşleme ve Soğuk Zincir Tesislerine Platform Nakliye ve Teslimat Hizmeti",
        giris:
            "Sucuk-pastırma üreten bir tesise platform nakliyesi, sıradan bir sanayi binasına yapılan teslimattan birkaç noktada ayrılır. Tesisin yükleme rampası çoğu zaman aynı anda soğutulmuş kamyonların da kullandığı tek bir kapıdır; bu kapının belirli saatlerde sevkiyat trafiğiyle dolu olması, platform indirme işleminin ürün çıkışıyla çakışmaması için önceden koordine edilmesini gerektirir. Ayrıca çoğu tesiste hammadde kabul, üretim ve soğuk depo bölümleri fiziksel olarak ayrı binalarda veya aynı binanın farklı kanatlarında yer alır; nakliye aracı hangi kapıya, hangi saatte gireceğini bilmeden sahaya gönderilmez. Bunlara ek olarak, hijyen bölgesine giren her aracın ve ekipmanın tesisin giriş kontrolünden geçmesi beklenir; bu da teslimat süresini standart bir sanayi tesisine göre biraz uzatabilir. Bu sayfada Afyonkarahisar'daki et işleme tesislerine platform nakliyesini planlarken hangi bilgilerin önceden istendiğini, indirme noktası seçiminin nasıl yapıldığını ve sevkiyat-üretim trafiğinin nasıl ayrıştırıldığını anlatıyoruz.",
        maddeler: [
            { baslik: "Sevkiyat kapısı ile yükleme trafiğinin ayrıştırılması", metin: "Et işleme tesislerinde yükleme rampası genellikle günün belirli saatlerinde soğutulmuş araç trafiğiyle doludur; sabah erken saatler çoğunlukla hammadde kabulüne, öğleden sonra ise sevkiyata ayrılır. Platform nakliyesi bu iki yoğun aralığın dışında bir saate planlanır. Tesisin sevkiyat sorumlusuyla önceden kurulan kısa bir telefon görüşmesi, hangi saatin uygun olduğunu netleştirir; bu görüşme yapılmadan rastgele bir saatte sahaya gidilmez." },
            { baslik: "Bina kanatları arası doğru kapı bilgisi", metin: "Üretim, kurutma-olgunlaştırma ve soğuk depo bölümleri farklı kapılara sahip olabilir. Nakliye aracının yanlış kapıya yönlendirilmesi, platformun bina içinden dar koridorlardan geçirilmesi gibi ek bir riski doğurur. Bu nedenle teslimat öncesi hangi kapının hedef bölüme en yakın olduğu, kapı önündeki manevra alanının genişliği ve varsa rampa eğimi sorulur; mümkünse fotoğraf istenir." },
            { baslik: "Hijyen giriş kontrolünün süreye etkisi", metin: "Bazı tesislerde araç ve ekipman girişinde tekerlek dezenfeksiyonu, kayıt defteri imzası veya kısa bir görsel kontrol uygulanır. Bu adımlar teslimat süresine birkaç dakika ile yarım saat arasında ek süre katabilir. Sevkiyat planı yapılırken bu süre payı önceden hesaba katılır; tesisin kendi prosedürü aksatılmadan, ama gereksiz beklemeye de yol açmadan indirme işlemi tamamlanır." },
            { baslik: "Dondurulmuş ve soğutulmuş alan yakınında indirme sırası", metin: "Platform indirme noktası soğuk depo kapısına yakınsa, kapının açık kalma süresi kısa tutulur; indirme işlemi kapı önünde uzun süre beklemeye neden olmayacak şekilde hızlı planlanır. Kamyon önce sağlam ve düz bir alana yönlendirilir, indirme rampadan uzakta tamamlanır ve platform kendi yürüyüşüyle hedef noktaya ilerler; böylece soğuk hava kaybı ve sevkiyat gecikmesi en aza indirilir." },
            { baslik: "Geri alım ve tesisten çıkış planı", metin: "İş bittiğinde platformun tesisten çıkışı da aynı hassasiyetle planlanır; geri alım saati mümkünse teslimat saatiyle aynı sakin dilime denk getirilir. Makine tesisten çıkmadan önce varsa hijyen bölgesinden geçişte uygulanan temizlik adımı tekrarlanır. Ani bir sevkiyat yoğunluğu oluşursa geri alım aracı kısa süre bekletilebilir; bu durum önceden tesise bildirilir, sürpriz bir gecikme yaratılmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Tesis bölümüne göre teslimat noktası ve zamanlama",
                paragraflar: ["Et işleme tesisinin farklı bölümlerine yapılan teslimatlarda uygun saat aralığı ve indirme noktası değişir. Aşağıdaki tablo tipik bir günün akışını özetler."],
                tablo: {
                    basliklar: ["Hedef bölüm", "Yoğun trafik saati", "Önerilen teslimat aralığı", "Dikkat noktası"],
                    satirlar: [
                        ["Hammadde kabul", "Sabah erken", "Öğleden sonra", "Kabul rampasından uzak dur"],
                        ["Üretim/paketleme", "Gün içi vardiya", "Vardiya arası", "Hat trafiğiyle çakışmama"],
                        ["Kurutma/olgunlaştırma", "Gün boyu değişken", "Tesisle teyitli saat", "Kapı açık kalma süresi kısa"],
                        ["Soğuk depo", "Sevkiyat öncesi yoğun", "Sabah ilk saatler", "Kapı açık kalma süresi kısa"],
                        ["Sevkiyat rampası", "Öğleden sonra", "Sabah erken", "Soğutulmuş araç trafiği önceliği"],
                    ],
                },
            },
            {
                baslik: "Bilgi paylaşımı teslimat hızını belirler",
                paragraflar: [
                    "Nakliye planlaması, tesisin kapı ölçüleri, rampa eğimi ve giriş prosedürü hakkında ne kadar erken bilgi verildiğine bağlı olarak hızlanır. Adres ve saatten ibaret bir talep, sahada beklenmedik bir dar geçiş veya kapalı kapıyla karşılaşma riskini taşır. Bunun yerine hedef bölümün fotoğrafı, kapı genişliği ve varsa asansör/rampa bilgisi paylaşıldığında araç ve platform kombinasyonu buna göre önceden seçilir.",
                    "Özellikle kurutma odası gibi dar geçitli bölümlere teslimat yapılacaksa, büyük bir platformun bina dışında bırakılıp daha küçük bir sınıfın içeri alınması gerekebilir. Bu ayrım sahada değil, sevkiyat öncesi masabaşında yapılmalıdır; aksi hâlde araç sahaya ulaştığında iş gecikir." ],
            },
            {
                baslik: "Bayram öncesi yoğun dönemde sevkiyat önceliği",
                paragraflar: [
                    "Kurban bayramı öncesi dönemde birçok et işleme tesisinde hem hammadde kabul hem ürün sevkiyatı yoğunlaşır; yükleme rampaları neredeyse tüm gün dolu olabilir. Bu dönemlerde platform teslimatı için sabah çok erken veya akşam geç bir saat tercih edilir, tesisin kendi trafiğine göre esnek bir pencere bırakılır.",
                    "Yoğun dönemde ani bir bakım ihtiyacı doğarsa, aracın sahaya varmadan önce tesisle telefonla kısa bir koordinasyon yapılması beklemeyi azaltır. Sabit bir saat verip o saate körü körüne bağlı kalmak yerine, sahadaki fiili trafiğe göre 30-60 dakikalık bir esneklik payı bırakılması bu dönemde daha gerçekçi bir yaklaşımdır." ],
            },
        ],
        sss: [
            { soru: "Platform teslimatı sevkiyat kamyonlarının trafiğini etkiler mi?", cevap: "Etkilememesi için teslimat saati önceden tesisle koordine edilir ve mümkünse sevkiyat yoğunluğunun düşük olduğu bir dilime denk getirilir. Rampa aynı anda hem soğutulmuş araç hem platform aracı tarafından kullanılacaksa, hangi aracın önce gireceği tesis sevkiyat sorumlusunun kararına bırakılır; nakliye ekibimiz bu konuda tesisin önceliğini esas alır." },
            { soru: "Soğuk depo kapısının uzun süre açık kalması sorun olur mu?", cevap: "Evet, bu nedenle soğuk depoya yakın indirme işlemlerinde kapı açık kalma süresi en aza indirilir; platform kapı dışında hazırlanır, kapı yalnızca geçiş anında açılır. Uzun bir hazırlık veya bekleme gerekiyorsa bu iş kapıdan uzak bir noktada, kapı kapalıyken tamamlanır." },
            { soru: "Kapı ölçüsünü tam bilmiyorsak ne olur?", cevap: "Tahmini bilgiyle sevkiyat riskli olduğu için mümkünse fotoğraf ve yaklaşık ölçü istenir. Kesin ölçü yoksa daha küçük ve esnek bir sınıf tercih edilir; sahada uyumsuzluk çıkması hâlinde alternatif giriş noktası veya daha küçük makineyle devam etme seçenekleri birlikte değerlendirilir." },
            { soru: "Hijyen giriş kontrolü ne kadar sürer?", cevap: "Tesisten tesise değişir; bazılarında birkaç dakikalık tekerlek dezenfeksiyonu ve kayıt yeterliyken bazılarında daha kapsamlı bir kontrol uygulanabilir. Bu süre sevkiyat planına önceden eklenir; net süreyi tesisin kendi prosedürü belirler, biz bunu tahmin etmek yerine önceden sorarız." },
            { soru: "Bayram öncesi dönemde aynı gün teslimat mümkün mü?", cevap: "Yoğunluğa bağlıdır; rampa trafiği çok sıkışıksa aynı gün içinde uygun bir boşluk bulmak zorlaşabilir. Bu dönemlerde erken planlama ve esnek saat aralığı önerilir; son dakika talebi geldiğinde elimizden geleni yaparız ama net bir saat garantisi yerine gerçekçi bir pencere sunarız." },
            { soru: "Aynı sevkiyatta birden fazla bölüme (kabul, üretim, depo) makine bırakılabilir mi?", cevap: "Bırakılabilir; bu durumda güzergâh, en yoğun bölümden en sakin bölüme doğru sıralanır ve her bölüm için ayrı bir teslimat penceresi belirlenir. Tek bir seferde tüm bölümlere aynı anda araç göndermek yerine, bölümler arası geçişte tesisin trafiğine göre kısa aralıklar bırakılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme tesislerinde soğuk zincir ve sevkiyat trafiğinin genel işleyişi kamuya açık sektör bilgisidir; belirli bir tesis adı, saat çizelgesi veya kapasite uydurulmamıştır. Teslimat koordinasyonu ve pencere belirleme firma saha pratiğidir.",
    },
    "hizmet:forklift-istifleme-kiralama": {
        h1: "Afyonkarahisar Dondurulmuş Ürün ve Soğuk Hava Depolarında Forklift ile İstifleme Kiralama",
        giris:
            "Sucuk-pastırma üretiminde nihai ürün, sevkiyata kadar genellikle dondurulmuş veya soğutulmuş bir depoda paletler hâlinde bekletilir. Bu depoların çalışma koşulları, standart bir kuru gıda deposundan belirgin şekilde farklıdır: sıcaklık eksi derecelere kadar inebilir, zemin zaman zaman buzlanabilir, koridorlar ürün akışına göre dar tutulmuştur ve forkliftin depoda geçirdiği süre soğuk hava kaybını artırmamak için sınırlı tutulmak istenir. Ayrıca dondurulmuş ürün paletleri, oda sıcaklığındaki paletlere göre daha ağır ve bazen daha kaygan yüzeyli olabilir; istifleme sırasında çatal açıklığı ve kaldırma yüksekliği buna göre seçilir. Bu sayfada Afyonkarahisar'daki et işleme tesislerinin soğuk hava deposu ve dondurulmuş ürün bölümlerinde forklift kiralarken hangi koşulların öne çıktığını, düşük sıcaklığın ekipman seçimini nasıl etkilediğini ve istifleme sırasının nasıl kurulduğunu anlatıyoruz.",
        maddeler: [
            { baslik: "Düşük sıcaklıkta ekipman ve operatör hazırlığı", metin: "Eksi derece ortamda çalışacak forkliftin akü ve hidrolik sistemi bu sıcaklığa uygun olmalıdır; her makine uzun süreli dondurucu ortam çalışmasına elverişli değildir. Sevkiyat öncesi hedef sıcaklık aralığı ve depoda geçirilecek yaklaşık süre paylaşılır. Operatör de soğuk ortamda görüş ve el hassasiyetinin azalabileceği bilinerek düşük hızda, kısa manevralarla çalışır." },
            { baslik: "Buzlanan zeminde kaldırma ve fren mesafesi", metin: "Soğuk depo zemini, kapı önündeki nem girişi veya buzdolabı yoğuşması nedeniyle noktasal olarak kayganlaşabilir. Bu bölgelerde forklift hızı düşürülür, ani fren ve dönüş yapılmaz. Kayganlığın belirgin olduğu noktalar tesis ile birlikte işaretlenir; gerekirse bu noktalarda ek bir uyarı önlemi (koni, işaret) tesis tarafından konur." },
            { baslik: "Dar koridorda palet yönlendirme", metin: "Dondurulmuş ürün depolarında raf aralıkları, depo hacminden en verimli şekilde faydalanmak için dar tutulur. Çatal açıklığı ve mast geriye eğim açısı bu koridorlara göre seçilir; standart geniş koridor forklifti buraya gönderilmez. Palet yerleştirme sırasında yan raflara temas riskini azaltmak için düşük hızda, gerektiğinde yardımcı personel yönlendirmesiyle ilerlenir." },
            { baslik: "Kapı açık kalma süresini kısaltan istifleme sırası", metin: "Depo kapısının uzun süre açık kalması iç sıcaklığı etkiler. Bu nedenle istifleme işi, kapı önünde bekleme süresini azaltacak şekilde önceden planlanır: paletler kapı dışında sıraya dizilir, forklift depoya girip çıkışını art arda ve hızlı yapar, kapı yalnızca geçiş anında açık tutulur. Uzun süren tek seferlik büyük bir yükleme yerine, kısa ve art arda geçişler tercih edilir." },
            { baslik: "Palet ağırlığı ve istif yüksekliği kontrolü", metin: "Dondurulmuş et ürünü paletleri, kuru gıda paletlerine göre genellikle daha ağırdır. İstif yüksekliği belirlenirken forkliftin kaldırma kapasitesi bu ağırlığa göre kontrol edilir; kapasiteyi zorlayan bir istif planı varsa önceden tesise bildirilir ve daha uygun bir kademeleme önerilir. Raf sisteminin kendi taşıma sınırı da bu hesaba dâhil edilir." },
        ],
        ekBolumler: [
            {
                baslik: "Depo tipine göre forklift seçim ölçütleri",
                paragraflar: ["Et işleme tesisinin depo bölümleri farklı sıcaklık ve koridor koşullarına sahiptir. Aşağıdaki tablo forklift seçiminde öne çıkan ölçütleri özetler."],
                tablo: {
                    basliklar: ["Depo tipi", "Tipik sıcaklık", "Öne çıkan risk", "Ekipman notu"],
                    satirlar: [
                        ["Dondurulmuş ürün deposu", "Eksi derece", "Buzlanma, düşük görüş", "Soğuğa uygun akü/hidrolik"],
                        ["Soğutulmuş ürün deposu", "0-4°C bandı", "Yoğuşma nemi", "Standart tip, düşük hız"],
                        ["Ambalaj/malzeme deposu", "Oda sıcaklığı", "Dar koridor", "Dar koridor mastı"],
                        ["Sevkiyat bekleme alanı", "Değişken", "Yoğun araç trafiği", "Görüş açısı geniş tip"],
                    ],
                },
            },
            {
                baslik: "Kapı geçişini azaltan yükleme planı",
                paragraflar: [
                    "Dondurulmuş ürün deposuna yapılan her giriş-çıkış, kapının bir süre açık kalmasına neden olur. İstifleme işini tek bir uzun operasyon yerine, önceden sıraya dizilmiş paletlerle kısa ve art arda geçişlere bölmek, toplam açık kalma süresini azaltır. Bu planlama forklift operatörü ile depo sorumlusunun işe başlamadan önce birkaç dakikalık bir koordinasyonuyla kurulur.",
                    "Yoğun sevkiyat günlerinde birden fazla forklift aynı depoda çalışacaksa, güzergâhlar çakışmayacak şekilde ayrılır; biri girişe yakın bölgede, diğeri depo içinde çalışır. Bu ayrım hem kapı önündeki trafik sıkışmasını hem de iki makinenin dar koridorda karşılaşma riskini azaltır." ],
            },
            {
                baslik: "Sevkiyat yoğunluğunda ek forklift ihtiyacı",
                paragraflar: [
                    "Bayram öncesi veya yüksek talep dönemlerinde sevkiyat hacmi arttığında, tek forkliftin depo giriş-çıkışı ile sevkiyat rampasına taşıma arasında yetişmesi zorlaşabilir. Bu dönemlerde geçici olarak ikinci bir forklift kiralanması, depo içi istifleme ile rampaya taşımayı ayrı ekiplere bölerek toplam süreyi kısaltır.",
                    "İkinci makinenin devreye girmesi tesisin mevcut trafik planına göre belirlenir; iki forkliftin aynı dar koridoru aynı anda kullanmaması için güzergâh önceden ayrılır. Talep normale döndüğünde ek makine sözleşme kapsamında iade edilir." ],
            },
        ],
        sss: [
            { soru: "Dondurulmuş ürün deposunda her forklift çalışabilir mi?", cevap: "Hayır, düşük sıcaklıkta uzun süre çalışacak makinenin akü ve hidrolik sistemi buna uygun olmalıdır. Standart bir forklift kısa süreli girişte sorun çıkarmayabilir ama sürekli eksi derece ortamda performans kaybı yaşayabilir. Bu nedenle depo sıcaklığı ve çalışma süresi önceden sorulur, buna göre uygun sınıf gönderilir." },
            { soru: "Buzlanan zeminde forklift kayma riski nasıl azaltılır?", cevap: "Kayganlığın belirgin olduğu noktalar (genellikle kapı önü ve yoğuşma bölgeleri) tesisle birlikte tespit edilir, bu noktalarda hız düşürülür ve ani dönüşten kaçınılır. Zemin bakımı ve buz temizliği tesisin sorumluluğundadır; ciddi bir buzlanma varsa çalışma o nokta düzeltilene kadar ertelenir." },
            { soru: "Dar koridorlu depoda hangi forklift tipi kullanılır?", cevap: "Koridor genişliğine göre dar koridor forklifti veya reach truck tipi ekipmanlar tercih edilebilir; çatal açıklığı ve mast geriye eğim açısı koridor genişliğine ve raf derinliğine göre seçilir. Koridor ölçüsü paylaşılmadan standart geniş tip gönderilmez." },
            { soru: "Kapı açık kalma süresini kısaltmak için ne öneriyorsunuz?", cevap: "Paletlerin kapı dışında önceden sıraya dizilmesi ve giriş-çıkışların art arda kısa sürede yapılması en etkili yöntemdir. Tek seferde uzun süren bir yükleme yerine, birkaç dakikalık kısa geçişler tercih edilir; bu hem sıcaklık kaybını hem enerji maliyetini azaltır." },
            { soru: "Dondurulmuş palet ağırlığı standart paletten farklı mı değerlendirilir?", cevap: "Evet, dondurulmuş et ürünü paletleri genellikle daha ağırdır; istif yüksekliği ve forkliftin kaldırma kapasitesi bu ağırlığa göre kontrol edilir. Kapasiteyi zorlayan bir istif planı varsa önceden bildirilir ve daha güvenli bir kademeleme önerilir." },
            { soru: "Yoğun sevkiyat döneminde ikinci forklift ne zaman önerilir?", cevap: "Tek makinenin depo içi istifleme ile rampaya taşıma arasında sürekli beklemeye neden olduğu, sevkiyat süresinin uzadığı dönemlerde ikinci bir forklift geçici olarak devreye alınabilir. Bu ihtiyaç genellikle bayram öncesi veya kampanya dönemlerinde ortaya çıkar; talep normale döndüğünde makine iade edilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Dondurulmuş/soğutulmuş ürün depolarının genel çalışma koşulları (sıcaklık, yoğuşma, dar koridor) kamuya açık sektör bilgisidir; belirli bir tesis adı veya kapasite uydurulmamıştır. İstifleme sırası ve kapı geçiş planı firma saha pratiğidir.",
    },
    "hizmet:eklemli-platform-boom-kiralama": {
        h1: "Afyonkarahisar Et İşleme Tesislerinde Soğutma Kulesi ve Dış Cephe İçin Eklemli Platform (Boom) Kiralama",
        giris:
            "Sucuk-pastırma tesislerinin dış cephesinde yüksekte kalan işler çoğunlukla iki grupta toplanır: çatı üstündeki soğutma kuleleri, kondanser üniteleri ve havalandırma bacaları ile bina dış cephesindeki oluk, aydınlatma ve tabela bakımı. Bu ekipmanların çoğu binanın en yüksek noktasında, çatı kenarından belirli bir mesafede konumlanır ve düz bir merdivenle güvenli erişim sağlanamaz. Eklemli platform, kollarını hem yukarı hem yana doğru uzatabildiği için çatı kenarının ötesindeki bu noktalara zeminden güvenli biçimde ulaşabilir. Afyonkarahisar'daki et işleme tesislerinde bu tip işler genellikle üretim durdurulmadan, bina dış cephesinden yürütülür; ancak soğutma sisteminin kesintiye uğramaması kritik olduğu için çalışma öncesi tesisin soğutma ve enerji ekibinden onay alınması gerekir. Bu sayfada eklemli platformun soğutma kulesi bakımında, çatı üstü bacada ve dış cephe işlerinde nasıl konumlandığını, hangi zemin ve mesafe koşullarının erişim kararını belirlediğini anlatıyoruz.",
        maddeler: [
            { baslik: "Soğutma kulesi ve kondanser çevresinde erişim mesafesi", metin: "Soğutma kuleleri genellikle çatının belirli bir köşesinde, diğer ekipmanlardan ayrı konumlanır. Eklemli platformun kule etrafında güvenli çalışma yapabilmesi için zeminden kuleye olan yatay ve dikey mesafenin, kulenin diğer yapılarla arasındaki boşluğun önceden bilinmesi gerekir. Bu ölçüler paylaşılmadan sadece 'çatıda soğutma kulesi var' bilgisiyle makine sınıfı belirlenmez." },
            { baslik: "Soğutma sistemi kesintisi olmadan çalışma planı", metin: "Soğutma sisteminin durması, kurutma odası ve soğuk depo sıcaklığını doğrudan etkileyebilir. Bu nedenle kule çevresindeki bakım işleri, sistemin devre dışı kalmasını gerektirmeyecek şekilde planlanır; sistemin kısa süreli durdurulması zorunluysa bu, tesisin soğutma ve üretim ekibinin ortak onayıyla, mümkünse düşük talep saatine denk getirilir." },
            { baslik: "Çatı kenarı ve düşen cisim kontrolü", metin: "Platform kolu çatı kenarının üzerinden geçerken, alttaki üretim veya yükleme alanında personel ve araç trafiği varsa bu bölge geçici olarak sınırlandırılır. Alet ve küçük parçaların düşme riskine karşı bağlama ve toplama önlemleri alınır. Alt bölgenin sınırlandırılması mümkün değilse çalışma, o bölgenin trafiğinin durduğu bir saate ertelenir." },
            { baslik: "Zemin sağlamlığı ve makine konumlanması", metin: "Eklemli platformun ağırlığı ve kol açıklığı, altındaki zeminin sağlam ve düz olmasını gerektirir. Bina çevresindeki servis yolu, yükleme rampası önü veya çim/toprak saha gibi farklı zemin tiplerinden hangisinin kullanılacağı önceden değerlendirilir; zemin taşıma gücünden şüphe varsa makine o noktaya konumlandırılmaz, alternatif bir erişim noktası aranır." },
            { baslik: "Dış cephe aydınlatma ve tabela işlerinde ayrı planlama", metin: "Soğutma kulesi dışında bina cephesindeki aydınlatma, oluk ve tabela bakımı daha düşük risk taşır ancak yine de bina girişindeki araç ve personel trafiğiyle çakışmayacak şekilde planlanır. Bu işler genellikle soğutma kulesi bakımından ayrı bir günde veya günün farklı bir diliminde yapılır; ikisi aynı sevkiyata sığdırılmaya çalışılmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Dış cephe ve çatı üstü iş alanlarına göre erişim koşulu",
                paragraflar: ["Et işleme tesisinin dış cephesindeki farklı iş alanları, farklı erişim mesafesi ve zemin koşulu gerektirir. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Alan", "Erişim türü", "Baskın koşul", "Planlama önceliği"],
                    satirlar: [
                        ["Soğutma kulesi/kondanser", "Çatı üstü, kol uzatma", "Sistem kesintisi riski", "Soğutma ekibi onayı"],
                        ["Çatı bacası/havalandırma", "Çatı kenarı ötesi", "Düşen cisim kontrolü", "Alt bölge sınırlama"],
                        ["Dış cephe aydınlatma", "Duvar boyunca", "Giriş trafiği", "Sakin saat"],
                        ["Yükleme rampası üstü tabela", "Rampa önü zemin", "Araç manevrası", "Rampa boşken çalışma"],
                        ["Bina çevresi servis yolu", "Zemin sağlamlığı", "Yol taşıma gücü", "Sert zemin tercih"],
                    ],
                },
            },
            {
                baslik: "Soğutma ekibiyle ortak keşif",
                paragraflar: [
                    "Soğutma kulesi çevresindeki bir bakım işine başlamadan önce tesisin soğutma veya bakım sorumlusuyla kısa bir saha keşfi yapılır. Bu keşifte kulenin çatıdaki tam konumu, çevresindeki diğer ekipmanla arasındaki mesafe ve sistemin hangi saatlerde göreceli düşük yükte çalıştığı konuşulur.",
                    "Keşif sırasında ayrıca acil bir soğutma arızası çıkması ihtimaline karşı platformun hızlı biçimde alandan çekilip çekilemeyeceği de değerlendirilir; kulenin hemen yanında acil müdahale gerekebilecek bir ekipman varsa platform bu ekipmana erişimi engellemeyecek bir açıda konumlandırılır." ],
            },
            {
                baslik: "Mevsimsel bakım penceresi",
                paragraflar: [
                    "Soğutma kulesi ve kondanser bakımı genellikle yaz aylarında sistemin en yoğun çalıştığı dönemde değil, ilkbahar veya sonbahar gibi göreceli düşük talep dönemlerinde planlanır. Bu, sistemin kısa süreli durdurulması gerektiğinde üretime etkisini azaltır.",
                    "Acil bir arıza yaz ortasında çıkarsa, müdahale kapsamı yalnızca arızayı güvenli şekilde giderecek kalemle sınırlı tutulur; kapsamlı bir bakım işi (örneğin genel temizlik, boya) daha sakin bir mevsime bırakılır." ],
            },
        ],
        sss: [
            { soru: "Soğutma kulesi bakımı sırasında soğutma sistemi durur mu?", cevap: "Mümkün olduğunca durdurulmadan çalışılır; platform kulenin çevresinde erişim sağlarken sistemin kendisi genellikle çalışır durumda kalabilir. Sistemin kısa süreli durdurulması gerekiyorsa bu, tesisin soğutma ekibinin onayıyla ve düşük talep saatine denk getirilerek yapılır." },
            { soru: "Çatı kenarının altında üretim veya yükleme devam ederken çalışılabilir mi?", cevap: "Düşen cisim riski nedeniyle alt bölgenin trafiği geçici olarak sınırlandırılır veya çalışma o bölgenin sakin olduğu saate ertelenir. Alt bölgeyi tamamen kapatmak mümkün değilse, kol hareketi o bölgenin üzerinden geçmeyecek şekilde sınırlandırılır." },
            { soru: "Bina çevresindeki zemin platform için yeterince sağlam mı önceden nasıl anlaşılır?", cevap: "Servis yolu, rampa önü ve çevresindeki toprak/çim alan ayrı ayrı değerlendirilir; fotoğraf ve varsa zemin bilgisi (beton, asfalt, sıkıştırılmış toprak) önceden istenir. Şüpheli bir zemin varsa makine oraya konumlandırılmaz, daha sağlam bir noktadan uzanma tercih edilir." },
            { soru: "Dış cephe aydınlatma bakımı soğutma kulesi işiyle aynı gün yapılabilir mi?", cevap: "Genellikle ayrı planlanır çünkü ikisi farklı ekiplerin onayını ve farklı erişim noktalarını gerektirir. Aynı sevkiyatta ikisi birleştirilmeye çalışılırsa iş süresi uzar ve öncelik karışabilir; bu nedenle ayrı gün veya günün ayrı diliminde ele alınması önerilir." },
            { soru: "Acil bir soğutma arızasında hızlı erişim sağlanabilir mi?", cevap: "Evet, ancak acil durumda da zemin ve erişim güvenliği atlanmaz; platform mümkün olan en kısa sürede sahaya yönlendirilir ve yalnızca arızayı güvenli şekilde giderecek kapsamda çalışılır. Kapsamlı bir bakım işi acil müdahaleyle karıştırılmaz, ayrı bir zamana bırakılır." },
            { soru: "Hangi mevsimde soğutma kulesi bakımı planlanmalı?", cevap: "Sistemin göreceli düşük yükte çalıştığı ilkbahar veya sonbahar dönemleri genellikle daha uygundur; bu dönemlerde kısa süreli bir durdurma gerekirse üretime etkisi azalır. Yaz aylarında yalnızca acil müdahaleler yapılır, kapsamlı bakım daha sakin bir mevsime bırakılır." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme tesislerinde çatı üstü soğutma ekipmanı ve dış cephe bakımının genel işleyişi kamuya açık sektör bilgisidir; belirli bir tesis adı veya sistem kapasitesi uydurulmamıştır. Erişim planlama ve soğutma ekibiyle koordinasyon firma saha pratiğidir.",
    },
    "hizmet:ic-mekan-depo-platform-kiralama": {
        h1: "Afyonkarahisar Sucuk-Pastırma Üretim Hollerinde İç Mekân Platform Kiralama",
        giris:
            "Et işleme tesisinin üretim holü, paketleme hattı ve hammadde depolama bölümü, dış cepheden farklı bir kurallar bütününe tabidir: zemin sık sık yıkanır, hava genellikle serin tutulur, üstte çoğunlukla paslanmaz çelik havalandırma kanalı, aydınlatma armatürü ve kablo taşıyıcı bulunur. Bu bölümlerde çalışacak platform, hem ürünle temas etmeyecek şekilde konumlanmalı hem de tesisin hijyen kurallarına (temiz tekerlek, uygun akülü tahrik, gıda alanına uygun yağlama) uygun olmalıdır. Standart bir sanayi holündeki iç mekân platform kiralamasından farkı, burada 'temiz alan' ile 'kirli alan' ayrımının çok daha katı tutulması ve bu ayrımın bakım programını doğrudan şekillendirmesidir. Bu sayfada üretim holü, paketleme hattı ve hammadde kabul bölümünde iç mekân platform kiralarken hangi hijyen ve zamanlama kurallarının öne çıktığını, tavan üstü sistemlere nasıl erişildiğini anlatıyoruz.",
        maddeler: [
            { baslik: "Üretim durduğunda çalışma esası", metin: "Paketleme hattı veya üretim bandı çalışırken üst kotta bakım yapılmaz; ilgili kesit vardiya arası veya planlı duruşta boşaltılır. Açık ürünün üstünde platform hareket etmez, alt bölge örtülüp sınırlandırılır. Acil bir arıza (örneğin aydınlatma kesintisi) varsa müdahale yalnızca arızayı giderecek kapsamla sınırlı tutulur, kapsamlı bir iş sezon dışı bir güne bırakılır." },
            { baslik: "Gıda alanına uygun akü ve yağlama", metin: "Üretim holünde kullanılacak platformun akülü olması ve varsa hidrolik sistemde gıda alanına uygun yağlayıcı kullanılması beklenir; egzozlu ekipman kapalı üretim alanına sokulmaz. Tesisin kendi ekipman kabul kriterleri varsa (örneğin belirli bir temizlik sertifikası) bu kriterler sevkiyat öncesi netleştirilir." },
            { baslik: "Havalandırma kanalı ve armatür altında konumlanma", metin: "Tavan altındaki paslanmaz kanal ve aydınlatma armatürlerine erişirken platform sepetinin kanal yüzeyine temas etmemesi gerekir; kanal iç yüzeyinin hijyeni bozulmamalıdır. Çalışma öncesi kanalın tam güzergâhı ve armatürün konumu tesisle birlikte kontrol edilir, gerektiğinde kanalın altına geçici bir koruma önlemi tesis tarafından konur." },
            { baslik: "Temiz alandan kirli alana tek yönlü sıra", metin: "Aynı platform hem hammadde kabul hem paketleme bölümünde çalışacaksa, program temiz ürün alanından başlar ve hammadde/atık bölgesine doğru ilerler. Ters yönde bir geçiş gerekiyorsa araya tesisin hijyen prosedürüne uygun bir temizlik ve kontrol konur; bu süre plana önceden eklenir, atlanmaz." },
            { baslik: "Zemin yıkama takvimiyle uyum", metin: "Üretim holü zemini gün içinde birkaç kez yıkanabilir; platform çalışması bu yıkama saatleriyle çakışmayacak şekilde planlanır. Islak zeminde makine hareketi düşük hızda yapılır, yıkama hemen bitmiş bir alanda kuruma süresi beklenir. Tesisin yıkama takvimi paylaşıldığında bakım programı buna göre kurulur." },
        ],
        ekBolumler: [
            {
                baslik: "Üretim holü bölümlerine göre çalışma koşulu",
                paragraflar: ["Üretim holünün farklı bölümleri farklı hijyen sınıfı ve zamanlama gerektirir. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Bölüm", "Hijyen sınıfı", "Çalışma zamanı", "Öncelikli önlem"],
                    satirlar: [
                        ["Hammadde kabul", "Orta", "Kabul arası", "Alt bölge örtüsü"],
                        ["Doğrama/kıyma hattı", "Yüksek", "Hat duruşunda", "Ürün üstünde çalışmama"],
                        ["Paketleme hattı", "Yüksek", "Vardiya arası", "Kanal/armatür teması yok"],
                        ["Kurutma/olgunlaştırma girişi", "Yüksek", "Tesisle teyitli", "Kısa kapı açık kalma"],
                        ["Hammadde/malzeme deposu", "Orta", "Gün içi esnek", "Zemin yıkama uyumu"],
                    ],
                },
            },
            {
                baslik: "Vardiya arası bakım penceresi",
                paragraflar: [
                    "Üretim genellikle vardiyalar hâlinde işler ve vardiyalar arasında hattın kısa süre boşaldığı bir aralık bulunur. İç mekân platform işleri, mümkünse bu aralığa sığdırılır; büyük kapsamlı bir iş vardiya arasına sığmıyorsa haftalık planlı duruş günü tercih edilir.",
                    "Vardiya arası pencere kısa olduğu için o sürede yapılacak işler önceden net bir listeye yazılır: hangi kalem, hangi kotta, ne kadar sürede tamamlanacak. Listesiz bir 'bakılsın' talebi bu dar pencerede tamamlanamayabilir; bu nedenle iş kapsamı önceden tesisle netleştirilir." ],
            },
            {
                baslik: "Temiz-kirli alan geçişinde temizlik kaydı",
                paragraflar: [
                    "Platformun bir bölümden diğerine geçişinde uygulanan temizlik, sözlü bir güven meselesi olmaktan çıkarılıp tesisin kendi kayıt sistemine (varsa) işlenir. Bu kayıt hem tesisin denetim sürecine hem de bir sonraki bakımın planlanmasına yardımcı olur.",
                    "Kayıt tutulmayan tesislerde bile, geçiş öncesi ve sonrası kısa bir kontrol (tekerlek, şase, sepet tabanı) yapılması ve bu kontrolün sonucu operatör tarafından not edilmesi önerilir; bu basit alışkanlık, hijyen sorununun kaynağının sonradan tespit edilmesini kolaylaştırır." ],
            },
        ],
        sss: [
            { soru: "Paketleme hattı çalışırken üst kotta bakım mümkün mü?", cevap: "Hayır, açık ürünün veya hareketli hattın üstünde planlı bakım yapılmaz. İlgili kesit vardiya arası veya planlı duruşta boşaltılır. Acil bir durum varsa müdahale yalnızca arızayı güvenli şekilde giderecek kapsamla sınırlı tutulur." },
            { soru: "Dizel veya LPG platform üretim holüne alınabilir mi?", cevap: "Genellikle alınmaz; kapalı gıda üretim alanında egzozlu ekipman tercih edilmez. Akülü tip standart seçimdir. Tesisin özel bir izni ve havalandırma koşulu varsa istisnai bir değerlendirme yapılabilir, ancak bu önceden tesisle netleştirilir." },
            { soru: "Havalandırma kanalına platform sepeti temas ederse ne olur?", cevap: "Kanal iç yüzeyinin hijyeni bozulabileceği için temas önlenmeye çalışılır; çalışma öncesi kanal güzergâhı ve sepet ölçüsü karşılaştırılır, dar noktalarda daha küçük bir sınıf tercih edilir. Kazara temas olursa durum tesise bildirilir, gerekiyorsa kanal tesisin kendi hijyen prosedürüne göre kontrol edilir." },
            { soru: "Hammadde kabul bölümünden paketleme hattına aynı gün geçilebilir mi?", cevap: "Geçilebilir ancak program temiz alandan başlayıp kirli alana doğru ilerler; ters yönde bir geçiş gerekiyorsa araya temizlik ve kontrol konur. Bu sıralama, ürünle temas riskini azaltmak için önceden planlanır." },
            { soru: "Zemin yıkanırken platform çalışabilir mi?", cevap: "Yıkama devam ederken çalışılmaz; yıkamanın bittiği ve zeminin kuruduğu bir zaman dilimi beklenir. Islak zeminde hareket gerekiyorsa hız düşürülür ve ani manevradan kaçınılır. Tesisin yıkama takvimi paylaşıldığında bakım programı bu takvime göre kurulur." },
            { soru: "Vardiya arası pencere yeterli olmazsa ne yapılır?", cevap: "İş kapsamı vardiya arası dar pencereye sığmıyorsa haftalık planlı duruş gününe ertelenir. Kapsamı önceden netleştirmeden vardiya arasına sığdırmaya çalışmak, işin yarım kalmasına veya üretim başlama saatinin gecikmesine yol açabilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme üretim holünün hijyen ve vardiya düzeni genel sektör bilgisidir; belirli bir tesis adı veya kapasite uydurulmamıştır. Temiz-kirli alan sıralaması ve vardiya arası planlama firma saha pratiğidir.",
    },
    "hizmet:celik-konstruksiyon-montaj-platformu": {
        h1: "Afyonkarahisar'da Et İşleme Tesisi Genişletme ve Soğuk Depo İnşaatında Çelik Konstrüksiyon Montaj Platformu",
        giris:
            "Afyonkarahisar'daki sucuk-pastırma üretiminin büyümesi, mevcut tesislerin zaman zaman yeni bir kurutma odası bloğu, ek soğuk hava deposu veya genişletilmiş paketleme holü inşa etmesiyle sonuçlanır. Bu tip genişletme projelerinde çelik konstrüksiyon montajı — çatı kirişi, cephe kaplaması, izolasyon panel montajı — genellikle mevcut üretim tesisinin hemen yanında, bazen ortak duvar veya ortak avluyu paylaşarak yürütülür. Bu, inşaat platformunun hem kendi montaj işini güvenli yapması hem de yan taraftaki çalışan üretimi (toz, gürültü, araç trafiği açısından) rahatsız etmemesi gerektiği anlamına gelir. Bu sayfada Afyonkarahisar'daki et işleme tesisi genişletme ve yeni soğuk depo inşaatlarında çelik konstrüksiyon montaj platformunun nasıl konumlandığını, mevcut üretimle sınırın nasıl çizildiğini ve inşaat aşamalarına göre platform ihtiyacının nasıl değiştiğini anlatıyoruz.",
        maddeler: [
            { baslik: "Mevcut üretim ile inşaat sahası arasında fiziksel sınır", metin: "Yeni bir kurutma odası bloğu veya depo eklenirken inşaat sahası, çalışan üretim alanından bariyer veya perde ile ayrılır. Platform bu sınırın inşaat tarafında kalır; kol hareketi üretim tarafına taşmayacak şekilde sınırlandırılır. Sınırın nerede çizileceği, projeye başlamadan tesis yönetimi ve inşaat sorumlusuyla birlikte belirlenir." },
            { baslik: "Çatı kirişi ve panel montajında kademeli yükseklik", metin: "Çelik çatı kirişi montajı genellikle zeminden başlayıp kademeli olarak yükselir; platform her kademede farklı bir çalışma yüksekliğine göre konumlanır. Kiriş montajı ilerledikçe erişim noktaları değişir, bu nedenle sabit bir tek konum yerine haftalık bir yerleşim planı kullanılır." },
            { baslik: "İzolasyon panel montajında hizalama hassasiyeti", metin: "Soğuk depo veya kurutma odası cephesindeki izolasyon panelleri, hizalama toleransı düşük bir işlemdir; platformun panel önünde sabit ve titremeden durması gerekir. Zemin düz değilse veya panelin bulunduğu yükseklik değişkense platform konumlaması buna göre ayarlanır, gerekirse takoz veya destekle ek sabitleme yapılır." },
            { baslik: "Toz ve gürültünün üretim tarafına taşmaması", metin: "Kesme, kaynak veya panel kesim işlemlerinde oluşan toz ve gürültü, ortak duvar veya avluyu paylaşan üretim tarafını rahatsız etmemelidir. Bu tip işler mümkünse üretimin daha sakin olduğu saatlere planlanır; perde veya branda ile toz sınırlandırılır." },
            { baslik: "İnşaat aşamasına göre platform sınıfı değişimi", metin: "Temel ve alt kat işlerinde makaslı platform yeterli olabilirken, çatı kirişi ve üst kat cephe işlerinde eklemli platform daha uygun erişim sağlar. İnşaat ilerledikçe hangi aşamada hangi sınıfın gerekeceği önceden bir takvime bağlanır; son anda 'bu iş için başka makine gerekiyor' sürprizinden kaçınılır." },
        ],
        ekBolumler: [
            {
                baslik: "İnşaat aşamasına göre platform ihtiyacı",
                paragraflar: ["Yeni bir üretim bloğu veya soğuk depo inşaatında aşamaya göre platform sınıfı ve konumlanma değişir. Aşağıdaki tablo bu ilerleyişi özetler."],
                tablo: {
                    basliklar: ["Aşama", "Tipik iş", "Uygun sınıf", "Öncelikli önlem"],
                    satirlar: [
                        ["Temel/alt kat çelik", "Kolon-kiriş montajı", "Makaslı platform", "Sert zemin"],
                        ["Çatı kirişi", "Ana taşıyıcı montaj", "Eklemli platform", "Kademeli yükseklik planı"],
                        ["Cephe izolasyon paneli", "Panel hizalama", "Eklemli/makaslı", "Titreşimsiz konum"],
                        ["Çatı kaplama", "Son kat montaj", "Eklemli platform", "Düşen cisim kontrolü"],
                        ["İç mekân tesisat", "Kanal/kablo montajı", "Makaslı platform", "Hijyen bölgesi geçişi"],
                    ],
                },
            },
            {
                baslik: "Ortak avlu kullanımında araç trafiği koordinasyonu",
                paragraflar: [
                    "İnşaat malzemesi taşıyan araçlar ile üretim tesisinin kendi sevkiyat araçları aynı avluyu paylaşıyorsa, iki trafiğin çakışmaması için günlük bir giriş-çıkış çizelgesi kullanılır. Platform da bu çizelgeye dâhil edilir; özellikle büyük parça taşıyan araçların geldiği saatlerde platform manevrası geçici olarak durdurulabilir.",
                    "Bu koordinasyon, inşaat sorumlusu ile üretim/sevkiyat sorumlusunun haftalık kısa bir toplantısıyla güncellenir. Değişen teslimat tarihleri veya üretim yoğunluğu bu toplantıda platform programına yansıtılır." ],
            },
            {
                baslik: "Devreye alma öncesi son kontrol yüksekliği",
                paragraflar: [
                    "Yeni blok tamamlanmaya yaklaştığında, aydınlatma, havalandırma çıkışı ve çatı derzi gibi kalemlerin son kontrolü genellikle inşaat platformuyla değil, işletmeye alım öncesi ayrı bir kontrol turuyla yapılır. Bu tur sırasında platform, inşaat ekibinden ziyade tesisin bakım ekibiyle birlikte çalışabilir.",
                    "Son kontrol turunun kapsamı önceden bir kontrol listesine yazılır; hangi kalemin hangi kotta, hangi yöntemle kontrol edileceği belirlenir. Bu liste, yeni bloğun işletmeye alınmasından sonraki ilk periyodik bakımın da temelini oluşturur." ],
            },
        ],
        sss: [
            { soru: "İnşaat platformu üretim alanına yakın çalışırken üretim durur mu?", cevap: "Gerekmez; inşaat ile üretim alanı fiziksel bir sınırla (bariyer veya perde) ayrılır ve platform bu sınırın inşaat tarafında kalır. Yalnızca ortak bir geçiş noktası veya avlu kullanımı varsa, o noktada geçici bir koordinasyon yapılır." },
            { soru: "Çatı kirişi montajında platform her gün aynı yerde mi durur?", cevap: "Hayır, kiriş montajı ilerledikçe erişim noktası değişir; bu nedenle haftalık bir yerleşim planı kullanılır. Sabit bir tek konum yerine, montajın ilerleme hızına göre platform konumu güncellenir." },
            { soru: "İzolasyon panel montajında zemin düzgün değilse ne yapılır?", cevap: "Zemin düzensizse platform konumlaması buna göre ayarlanır, gerekirse takoz veya ek destekle sabitleme yapılır; titreşimli veya eğik bir zeminde hassas hizalama gerektiren panel işi yapılmaz, önce zemin düzeltilir veya alternatif konum aranır." },
            { soru: "Kaynak ve kesim işleminin tozu üretim tarafına geçer mi?", cevap: "Geçmemesi için mümkünse bu işler üretimin sakin olduğu saatlere planlanır ve perde veya branda ile toz sınırlandırılır. Rüzgar yönü ve ortak havalandırma bağlantısı varsa bu da önceden değerlendirilir." },
            { soru: "İnşaat aşamasında hangi platform sınıfının gerekeceği nasıl belirlenir?", cevap: "Aşamaya göre değişir: temel ve alt kat işlerinde makaslı platform, çatı kirişi ve üst kat cephe işlerinde eklemli platform daha uygun erişim sağlar. İnşaat takvimi paylaşıldığında hangi aşamada hangi sınıfın gerekeceği önceden planlanır." },
            { soru: "Yeni blok tamamlandıktan sonra platform ihtiyacı biter mi?", cevap: "İnşaat platformu işi biter ama devreye alma öncesi son kontrol turu ve sonraki periyodik bakımlar için platform ihtiyacı devam eder. Bu geçiş, inşaat ekibinden tesisin kendi bakım ekibine devredilen bir süreçtir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme tesislerinde genişletme/yeni blok inşaatının genel aşamaları kamuya açık sektör bilgisidir; belirli bir proje adı veya metraj uydurulmamıştır. Sınır çizimi ve aşama bazlı platform planlaması firma saha pratiğidir.",
    },
    "hizmet:tarim-silo-platform-kiralama": {
        h1: "Afyonkarahisar Sucuk-Pastırma Üretiminde Baharat, Tuz ve Ambalaj Silo/Depo Sahalarında Platform Kiralama",
        giris:
            "Sucuk ve pastırma üretiminde et dışındaki en kritik girdiler baharat karışımları, tuz ve ambalaj malzemesidir; bu malzemeler genellikle üretim holünden ayrı bir silo, büyük konteyner veya raflı depo bölümünde tutulur. Bu bölümler tahıl silosu gibi büyük ölçekli değildir ama kendi içinde farklı bir erişim sorunu taşır: baharat siloları ve büyük karışım kazanları genellikle dar bir servis platformuna sahiptir, tuz deposu nem kontrolüne duyarlıdır, ambalaj malzemesi (film, kutu, etiket) raflı depoda yüksek istiflenir. Bu sayfada Afyonkarahisar'daki et işleme tesislerinin baharat/tuz silosu ve ambalaj malzemesi deposunda platform kiralarken hangi erişim ve nem kontrolü kurallarının öne çıktığını anlatıyoruz; burada tahıl veya tarımsal ürün silosu değil, üretim girdisi olan baharat-tuz-ambalaj zincirinin bakımı ele alınır.",
        maddeler: [
            { baslik: "Baharat karışım kazanı üstü servis erişimi", metin: "Baharat karışım kazanları genellikle kendi dar bir servis platformuna ve merdivenine sahiptir; ek bakım (motor, tahrik ünitesi, kapak contası) için bu sabit platformun üstüne değil, yanına ayrı bir mobil platform konumlandırılır. Kazanın çalışır durumda olup olmadığı ve o gün üretimde kullanılıp kullanılmayacağı önceden kontrol edilir." },
            { baslik: "Tuz deposunda nem ve korozyon kontrolü", metin: "Tuz, nem ile temas ettiğinde hem kendi kalitesini hem çevresindeki metal yapıyı etkileyebilir. Bu depoda çalışacak platformun tekerlek ve şasesi nemli tuz tortusuna karşı çalışma sonunda temizlenir; platform depoya girmeden önce zemin nem durumu kontrol edilir, ıslak veya tuz birikintili noktalarda düşük hızla ilerlenir." },
            { baslik: "Ambalaj malzemesi deposunda yüksek raf erişimi", metin: "Film, kutu ve etiket gibi ambalaj malzemeleri genellikle hafif ama hacimli olduğu için yüksek raflarda depolanır. Raf üstü aydınlatma veya havalandırma bakımı yapılırken malzeme paketlerinin istikrarına dikkat edilir; platform raf önünde dururken üstteki paketlerin düşme riski varsa bu bölge önce tesis tarafından kontrol edilir." },
            { baslik: "Silo/kazan çevresinde toz ve statik elektrik önlemi", metin: "Baharat tozunun yoğun olduğu noktalarda statik elektrik birikimi bir risk taşıyabilir; bu nedenle elektriksel bakım işlerinde tesisin kendi elektrik güvenlik kuralları uygulanır. Toz birikimi görülen yüzeylerde çalışma öncesi kısa bir temizlik istenir; toz kaldırıcı işlemler platform çalışmasından ayrı ve önce yapılır." },
            { baslik: "Dar servis alanında makine sınıfı seçimi", metin: "Baharat ve tuz depolama bölümü genellikle üretim holüne göre daha küçük bir alandır; buraya büyük bir makaslı platform yerine daha kompakt bir sınıf veya gerekirse örümcek platform yönlendirilir. Alan ölçüsü ve tavan yüksekliği paylaşılmadan sınıf seçimi yapılmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Girdi deposu bölümlerine göre çalışma koşulu",
                paragraflar: ["Baharat, tuz ve ambalaj malzemesi depolarının her biri farklı bir risk taşır. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Bölüm", "Baskın risk", "Öncelikli önlem", "Tipik makine"],
                    satirlar: [
                        ["Baharat karışım kazanı", "Toz, statik elektrik", "Elektrik güvenlik kuralı", "Kompakt platform"],
                        ["Tuz deposu", "Nem, korozyon", "Çalışma sonrası temizlik", "Kompakt platform"],
                        ["Ambalaj malzemesi deposu", "Yüksek raf istifi", "Paket düşme kontrolü", "Makaslı platform"],
                        ["Girdi kabul/tartı alanı", "Araç trafiği", "Kabul saatleri dışı", "Makaslı platform"],
                    ],
                },
            },
            {
                baslik: "Baharat kazanı bakımında üretim koordinasyonu",
                paragraflar: [
                    "Baharat karışım kazanı üretim reçetesine göre günün belirli saatlerinde çalışır; bakım işi bu saatlerin dışına, kazanın boş ve soğuk olduğu bir zaman dilimine planlanır. Kazan üreticisinin kendi bakım talimatı varsa bu talimat platform çalışmasından önce tesis tarafından paylaşılır.",
                    "Kazanın yakınındaki diğer ekipmanlarla (tartı, dozajlama ünitesi) olan mesafe de değerlendirilir; platform bu ekipmanlara temas etmeyecek şekilde konumlanır, gerekirse ekipman önü geçici olarak korumaya alınır." ],
            },
            {
                baslik: "Nem kontrolüne duyarlı depoda kısa çalışma penceresi",
                paragraflar: [
                    "Tuz deposunun nem kontrolü genellikle kapının açık kalma süresine duyarlıdır; bu nedenle platform çalışması kapıyı gereksiz uzun süre açık tutmayacak şekilde kısa bloklara bölünür. Uzun bir işin tek seferde tamamlanması gerekiyorsa, tesisin nem kontrol sistemi bu süre için geçici olarak devreye alınabilir; bu karar tesis yetkilisine aittir.",
                    "Çalışma sonunda platformun tekerlek ve alt kısmındaki tuz tortusu temizlenmeden başka bir bölüme (özellikle hijyen bölgesine) geçilmez; bu, sadece ekipman bakımı değil aynı zamanda tesisin genel hijyen zincirinin bir parçasıdır." ],
            },
        ],
        sss: [
            { soru: "Baharat karışım kazanının üstüne platformla çıkılabilir mi?", cevap: "Kazanın kendi sabit servis platformu varsa mobil platform onun üstüne değil yanına konumlanır ve oradan erişim sağlanır. Kazanın çalışır ve dolu olup olmadığı önceden kontrol edilir; dolu ve sıcak bir kazanın üstünde çalışma yapılmaz." },
            { soru: "Tuz deposunda platform korozyona uğrar mı?", cevap: "Kısa süreli çalışmada risk düşüktür ama uzun süre nemli tuz tortusuyla temas hâlinde metal yüzeylerde korozyon başlayabilir. Bu nedenle çalışma sonunda tekerlek ve alt şase temizlenir; sık kullanılan bir depo ise bu temizlik her seferinde standart adım olarak uygulanır." },
            { soru: "Ambalaj malzemesi deposunda raf üstü paketler düşer mi?", cevap: "Doğru istiflenmiş bir rafta risk düşüktür ama platform raf önünde çalışırken üstteki paketlerin istikrarı görsel olarak kontrol edilir. Şüpheli bir istif varsa önce tesisin depo sorumlusu bilgilendirilir, gerekirse paket önce indirilir sonra bakım yapılır." },
            { soru: "Baharat tozu yoğun ortamda elektrikli bakım yapılabilir mi?", cevap: "Yapılabilir ancak tesisin elektrik güvenlik kuralları ve varsa statik elektrik önlemleri uygulanır. Yoğun toz birikimi varsa çalışma öncesi kısa bir temizlik istenir; toz kaldırma işlemi platform çalışmasından ayrı ve önce yapılır." },
            { soru: "Dar baharat-tuz deposuna hangi platform sınıfı uygundur?", cevap: "Alan küçük ve tavan alçaksa kompakt bir makaslı platform veya örümcek platform tercih edilir. Alan ölçüsü ve tavan yüksekliği paylaşılmadan büyük bir sınıf gönderilmez; sahada uyumsuzluk çıkması riskini önceden azaltmak amaçlanır." },
            { soru: "Tuz deposu kapısı bakım sırasında ne kadar açık kalabilir?", cevap: "Sabit bir süre yoktur; tesisin nem kontrol sistemi ve o günkü hava koşuluna göre değişir. Çalışma kısa bloklara bölünerek kapının gereksiz uzun açık kalması önlenir; uzun bir iş tek seferde tamamlanacaksa nem kontrol sisteminin geçici ayarı tesis yetkilisince değerlendirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme tesislerinde baharat, tuz ve ambalaj malzemesi depolama pratiğinin genel işleyişi kamuya açık sektör bilgisidir; belirli bir tesis adı, reçete veya kapasite uydurulmamıştır. Nem kontrolü ve dar alan makine seçimi firma saha pratiğidir.",
    },
    "hizmet:enerji-aydinlatma-bakim-platformu": {
        h1: "Afyonkarahisar Et İşleme Tesislerinde Soğuk Zincir Enerji Hattı ve Aydınlatma Bakım Platformu",
        giris:
            "Sucuk-pastırma tesislerinde enerji sürekliliği, standart bir sanayi binasına göre daha kritik bir konudur; çünkü kesinti, yalnızca üretimi değil soğuk depodaki ve kurutma odasındaki sıcaklık kontrolünü de doğrudan etkiler. Bu nedenle tesis içindeki elektrik pano hattı, kompresör dairesi bağlantıları ve üretim holü aydınlatması, planlı bakımı en dikkatli yürütülmesi gereken kalemlerdendir. Aydınlatma armatürleri genellikle tavan yüksekliğinde, kablo taşıyıcı hatları ise havalandırma kanalıyla iç içe geçmiş biçimde bulunur; bu ikisine erişim, hem elektrik güvenliği hem hijyen kuralları aynı anda gözetilerek yapılır. Bu sayfada Afyonkarahisar'daki et işleme tesislerinde enerji hattı ve aydınlatma bakımı için platform kiralarken hangi elektrik güvenlik onayının arandığını, soğutma sistemine bağlı panoların bakımının nasıl planlandığını anlatıyoruz.",
        maddeler: [
            { baslik: "Elektriksel yaklaşma öncesi yetkili teyidi", metin: "Pano ve enerji hattı çevresinde çalışmadan önce ilgili devrenin durumu (enerjili mi, izole mi) tesisin elektrik yetkilisi tarafından teyit edilir. Bu teyit alınmadan platform pano önüne yaklaştırılmaz. Teyit sözlü değil, tesisin kendi iş izin prosedürüne göre belgelenir." },
            { baslik: "Kompresör dairesi ve soğutma panosu önceliği", metin: "Soğutma sistemini besleyen kompresör dairesindeki pano ve kablo hatları, kesintiye en duyarlı noktalardır. Bu bölgedeki bakım, sistemin yedekli çalıştığı veya göreceli düşük yükte olduğu bir saate planlanır; tek hatlı ve yedeksiz bir sistemde kesinti riski taşıyan işler tesisin özel onayı olmadan yapılmaz." },
            { baslik: "Üretim holü aydınlatmasında hat bazlı sıralama", metin: "Aydınlatma armatürü değişimi, tüm holü aynı anda karartmak yerine hat bazlı sırayla yapılır; bir hat değiştirilirken diğer hatlar aydınlık kalır ve üretim etkilenmez. Bu sıralama, hattın hangi bölümü aydınlattığı önceden bilindiğinde mümkündür; tesisin aydınlatma planı paylaşıldığında sıra buna göre kurulur." },
            { baslik: "Kablo taşıyıcı ile havalandırma kanalı ayrımı", metin: "Kablo taşıyıcı hatları çoğu zaman havalandırma kanalının hemen yanında veya altında seyreder; platform bu iki sistemi ayırt ederek çalışır, kanal yüzeyine temas etmeden kabloya erişir. Hangi hattın hangi sisteme ait olduğu belirsizse çalışma öncesi tesis elektrik yetkilisinden teyit alınır." },
            { baslik: "Acil aydınlatma arızasında sınırlı kapsam", metin: "Acil bir aydınlatma kesintisi üretim güvenliğini etkiliyorsa müdahale önceliklidir, ancak kapsam yalnızca arızayı güvenli şekilde giderecek kalemle sınırlı tutulur. Kapsamlı bir aydınlatma yenileme projesi, elektriksel teyit ve hat sıralaması gerektirdiği için planlı bir güne bırakılır, acil müdahaleyle karıştırılmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Enerji-aydınlatma kalemlerine göre planlama önceliği",
                paragraflar: ["Tesis içindeki farklı enerji ve aydınlatma kalemleri, farklı kesinti hassasiyeti taşır. Aşağıdaki tablo bu önceliklendirmeyi özetler."],
                tablo: {
                    basliklar: ["Kalem", "Kesinti hassasiyeti", "Bakım zamanı", "Onay gerekliliği"],
                    satirlar: [
                        ["Kompresör dairesi panosu", "Çok yüksek", "Yedekli/düşük yük saati", "Elektrik yetkilisi onayı"],
                        ["Soğuk depo aydınlatması", "Yüksek", "Sevkiyat dışı saat", "Kısa kapı açık kalma"],
                        ["Üretim holü aydınlatması", "Orta", "Vardiya arası", "Hat bazlı sıralama"],
                        ["İdari/ofis aydınlatması", "Düşük", "Gün içi esnek", "Standart iş izni"],
                        ["Dış saha/rampa aydınlatması", "Düşük", "Sevkiyat dışı saat", "Standart iş izni"],
                    ],
                },
            },
            {
                baslik: "Yedekli sistemlerde bakım penceresi",
                paragraflar: [
                    "Soğutma sistemi yedekli çalışıyorsa (birden fazla kompresör veya devre varsa), bir hattın bakımı diğer hat üretimi/soğutmayı sürdürürken yapılabilir. Bu durumda platform yalnızca bakımdaki hattın çevresinde çalışır, aktif hatta yaklaşmaz.",
                    "Yedeksiz veya tek hatlı bir sistemde bakım, planlı bir kısa duruşla yapılır; bu duruşun süresi ve zamanı tesisin üretim takvimine göre önceden belirlenir, sürpriz bir kesinti yaratılmaz." ],
            },
            {
                baslik: "Hat bazlı aydınlatma sıralamasının faydası",
                paragraflar: [
                    "Üretim holü aydınlatmasını hat bazlı sıralı değiştirmek, hem üretimin aydınlık kalmasını sağlar hem de her hat için ayrı bir elektriksel teyit alınmasına imkân verir. Bu yöntem, tüm holü aynı anda karartıp tek seferde bitirmeye çalışmaktan daha yavaş görünse de, üretim kaybını neredeyse sıfıra indirir.",
                    "Sıralama tesisin aydınlatma planı (hangi hat hangi bölümü besliyor) paylaşıldığında en verimli şekilde kurulur; plan yoksa saha keşfinde bu bilgi birlikte çıkarılır ve bir sonraki bakım için kayıt altına alınır." ],
            },
        ],
        sss: [
            { soru: "Elektrik pano bakımı için tesisten hangi teyit istenir?", cevap: "İlgili devrenin enerjili mi izole mi olduğuna dair yazılı veya tesisin kendi iş izin sistemine kayıtlı bir teyit istenir. Bu teyit tesisin elektrik yetkilisi tarafından verilir; sözlü bir 'sorun yok' bilgisiyle pano önüne yaklaşılmaz." },
            { soru: "Kompresör dairesindeki bakım soğutmayı durdurur mu?", cevap: "Sistem yedekliyse durdurmaz; bakımdaki hat devre dışı bırakılırken diğer hat çalışmaya devam eder. Yedeksiz sistemde kısa bir planlı duruş gerekebilir, bu durum önceden tesisle netleştirilir ve üretim takvimine göre zamanlanır." },
            { soru: "Aydınlatma değişimi sırasında üretim holü tamamen karanlıkta kalır mı?", cevap: "Kalmaz; değişim hat bazlı sıralı yapılır, bir hat değiştirilirken diğer hatlar aydınlık kalır. Bu, tesisin aydınlatma planının önceden bilinmesiyle mümkün olur; plan yoksa ilk keşifte bu bilgi çıkarılır." },
            { soru: "Kablo taşıyıcı ile havalandırma kanalı karışırsa ne olur?", cevap: "Karışıklık riski varsa çalışma öncesi tesis elektrik yetkilisinden hangi hattın hangi sisteme ait olduğu teyit edilir. Belirsizlik giderilmeden kanal yüzeyine yakın bir müdahale yapılmaz." },
            { soru: "Acil aydınlatma arızası ne kadar sürede giderilir?", cevap: "Süre arızanın türüne ve erişim koşuluna göre değişir; öncelik güvenli ve hızlı müdahaledir, kapsam yalnızca arızayı giderecek kalemle sınırlı tutulur. Kapsamlı bir yenileme işi bu acil müdahaleden ayrı, planlı bir güne bırakılır." },
            { soru: "Dış saha ve rampa aydınlatması ne zaman bakıma alınır?", cevap: "Genellikle sevkiyat trafiğinin düşük olduğu saatlere planlanır; bu alanların kesinti hassasiyeti üretim ve soğutma hatlarına göre daha düşüktür, bu nedenle bakım programında daha esnek bir zaman dilimine yerleştirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Et işleme tesislerinde soğutma sistemi ve enerji sürekliliğinin genel önemi kamuya açık sektör bilgisidir; belirli bir tesisin elektrik altyapısı veya kapasitesi uydurulmamıştır. Hat sıralaması ve yetkili teyit süreci firma saha pratiğidir.",
    },
    "hizmet:operatorlu-platform-kiralama": {
        h1: "Afyonkarahisar Et İşleme Tesislerinde Hijyen Bölgesine Uygun Operatörlü Platform Kiralama",
        giris:
            "Bir sucuk-pastırma tesisinde operatörlü platform kiralamak, sadece makineyi kullanacak yetkin bir kişi göndermekten ibaret değildir; operatörün de tesisin hijyen ve giriş prosedürüne uyması gerekir. Kurutma odası, paketleme hattı veya hammadde kabul gibi temiz üretim alanlarına giren her kişi, tesisin istediği koruyucu kıyafeti giyer, varsa el dezenfeksiyonu ve kayıt adımlarını tamamlar. Bu, operatörlü kiralamayı standart bir sanayi tesisindekinden biraz daha planlı hâle getirir: operatörün hangi bölüme gireceği, o bölümün hijyen sınıfı ve giriş prosedürü önceden bilinmelidir. Bu sayfada Afyonkarahisar'daki et işleme tesislerinde operatörlü platform kiralarken operatör yeterliliğinin nasıl doğrulandığını, hijyen bölgesine giriş kurallarının nasıl uygulandığını ve operatörsüz kiralamanın hangi durumlarda tercih edilebileceğini anlatıyoruz.",
        maddeler: [
            { baslik: "Operatör yeterlilik belgesinin doğrulanması", metin: "Operatörlü kiralamada, operatörün ilgili platform sınıfı için geçerli yeterlilik belgesi sevkiyat öncesi tesise iletilir. Tesisin kendi ziyaretçi/yüklenici kayıt sistemi varsa bu belge o sisteme önceden yüklenir; sahada belge kontrolü son adım olarak tekrarlanır, eksik belgeyle çalışmaya başlanmaz." },
            { baslik: "Hijyen bölgesine giriş için koruyucu ekipman", metin: "Operatör, kurutma odası veya paketleme hattı gibi temiz alanlara girerken tesisin istediği bone, önlük, galoş veya benzeri koruyucu ekipmanı kullanır. Bu ekipmanın kimin tarafından sağlanacağı (tesis mi, kiralayan firma mı) sevkiyat öncesi netleştirilir; sahada belirsizlik yaşanmaması için bu detay teklif aşamasında konuşulur." },
            { baslik: "Bölüm bazlı görevlendirme ve iş talimatı", metin: "Operatör, tesise geldiğinde önce o gün çalışacağı bölümün hijyen sınıfı ve o bölüme özel kısıtlar konusunda tesis yetkilisinden kısa bir bilgilendirme alır. Bu bilgilendirme, örneğin kurutma odasında hangi rayların dolu olduğunu veya paketleme hattında hangi saatlerde çalışılamayacağını içerir." },
            { baslik: "Operatörsüz kiralamanın uygun olduğu durumlar", metin: "Tesisin kendi bünyesinde yeterlilik belgeli personeli varsa ve bu personel hijyen prosedürlerine zaten aşinaysa operatörsüz kiralama tercih edilebilir. Bu durumda makine teslim edilirken tesisin kendi operatörüne kısa bir cihaz tanıtımı yapılır; makinenin sınırları ve bakım durumu yazılı olarak paylaşılır." },
            { baslik: "Vardiya değişiminde görev devri", metin: "İş birden fazla vardiyaya yayılıyorsa, bir operatörden diğerine görev devri yapılırken o güne kadar tamamlanan ve kalan işler, varsa özel bir kısıt (örneğin bir rayın o gün ürün alacağı bilgisi) yazılı olarak aktarılır. Sözlü aktarım tek başına yeterli görülmez." },
        ],
        ekBolumler: [
            {
                baslik: "Operatörlü ve operatörsüz kiralama karşılaştırması",
                paragraflar: ["Hangi seçeneğin uygun olduğu tesisin kendi personel durumuna ve işin niteliğine göre değişir. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Durum", "Önerilen seçenek", "Gerekli belge", "Not"],
                    satirlar: [
                        ["Tesiste yetkin personel yok", "Operatörlü", "Operatör yeterlilik belgesi", "Hijyen prosedürü sahada anlatılır"],
                        ["Tesiste yetkin personel var", "Operatörsüz", "Personel yeterlilik belgesi", "Kısa cihaz tanıtımı yapılır"],
                        ["Tek seferlik kısa iş", "Operatörlü", "Operatör yeterlilik belgesi", "Hızlı devreye alma"],
                        ["Uzun süreli/sürekli iş", "Operatörsüz", "Personel yeterlilik belgesi", "Maliyet avantajı olabilir"],
                    ],
                },
            },
            {
                baslik: "Hijyen bölgesi giriş prosedürünün önceden paylaşılması",
                paragraflar: [
                    "Her tesisin hijyen giriş prosedürü aynı değildir; bazı tesislerde yalnızca bone ve galoş yeterliyken bazılarında ek bir el dezenfeksiyonu veya kayıt adımı istenir. Bu fark operatör açısından önemlidir çünkü prosedür sahada öğrenilirse iş başlama saati gecikebilir.",
                    "Bu nedenle teklif aşamasında tesisten hijyen giriş prosedürünün kısa bir özeti istenir; operatör bu bilgiyle sahaya gelir ve giriş süreci ilk seferden sorunsuz tamamlanır." ],
            },
            {
                baslik: "Operatör değişikliğinde süreklilik",
                paragraflar: [
                    "Uzun süreli bir işte operatör izin veya rotasyon nedeniyle değişebilir; bu durumda yeni operatörün de aynı yeterlilik belgesine ve hijyen giriş kaydına sahip olması gerekir. Değişiklik mümkünse en az bir gün önceden tesise bildirilir, sahada sürpriz bir yeni yüz ile karşılaşılmaz.",
                    "Devir sırasında önceki operatörün not ettiği saha bilgileri (dar geçitler, dolu raylar, dikkat edilmesi gereken noktalar) yeni operatöre yazılı olarak aktarılır; bu, işin kalitesinin operatör değişse bile korunmasını sağlar." ],
            },
        ],
        sss: [
            { soru: "Operatörün yeterlilik belgesi olmadan çalışmaya başlanır mı?", cevap: "Hayır, belge sevkiyat öncesi tesise iletilir ve sahada tekrar kontrol edilir. Eksik belgeyle çalışmaya başlanmaz; bu hem yasal hem tesis güvenliği açısından geçilemez bir kuraldır." },
            { soru: "Koruyucu ekipmanı biz mi sağlıyoruz yoksa tesis mi?", cevap: "Bu, teklif aşamasında netleştirilir; bazı tesisler kendi koruyucu ekipmanını sağlarken bazıları operatörün kendi ekipmanıyla gelmesini bekler. Belirsizlik sahada yaşanmaması için bu detay önceden konuşulur." },
            { soru: "Operatörsüz kiralamada makinenin sınırları nasıl aktarılır?", cevap: "Teslim sırasında tesisin kendi operatörüne kısa bir cihaz tanıtımı yapılır; makinenin kapasite sınırları, bakım durumu ve varsa özel kullanım notu yazılı olarak paylaşılır. Bu aktarım sözlü değil, imzalı bir teslim tutanağıyla desteklenir." },
            { soru: "Vardiya değişiminde iş nasıl devredilir?", cevap: "Tamamlanan ve kalan işler ile varsa özel bir kısıt (örneğin bir rayın o gün dolu olacağı bilgisi) yazılı olarak bir sonraki operatöre aktarılır. Sözlü aktarım tek başına yeterli görülmez, önemli bilgiler kaybolmasın diye not edilir." },
            { soru: "Operatör tesise ilk kez geliyorsa hijyen prosedürünü nasıl öğrenir?", cevap: "Teklif aşamasında tesisten hijyen giriş prosedürünün özeti istenir, operatör bu bilgiyle sahaya gelir. Sahada da tesis yetkilisi kısa bir bilgilendirme yapar; prosedür ilk kez sahada öğrenilmeye çalışılmaz." },
            { soru: "Uzun süreli işte operatör değişirse iş kalitesi düşer mi?", cevap: "Düşmemesi için devir sırasında saha bilgileri (dar geçitler, dikkat noktaları) yazılı olarak yeni operatöre aktarılır ve yeni operatörün de aynı yeterlilik ve hijyen kaydına sahip olması sağlanır. Değişiklik mümkünse önceden tesise bildirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Gıda üretim tesislerinde hijyen giriş prosedürü ve operatör yeterlilik uygulamasının genel çerçevesi kamuya açık sektör bilgisidir; belirli bir tesisin prosedürü uydurulmamıştır. Belge doğrulama ve görev devri firma saha pratiğidir.",
    },
    "hizmet:cok-noktali-rota-bakim-platformu": {
        h1: "Afyonkarahisar'daki Birden Fazla Sucuk-Pastırma Tesisi ve Şarküteri Deposu İçin Çok Noktalı Rota Bakım Platformu",
        giris:
            "Afyonkarahisar merkezde ve çevre ilçelerde birden fazla et işleme tesisi, soğuk depo veya şarküteri toptan deposu bulunabilir; bu işletmelerin bir kısmı aynı OSB içinde, bir kısmı merkeze yakın farklı sanayi bölgelerinde yer alır. Bu tesislerin ortak bir özelliği, benzer erişim ihtiyaçları (kurutma odası bakımı, soğuk depo forklift işi, aydınlatma) taşımasıdır; bu da tek bir haftalık rotayla birden fazla adresi kapsayan bir bakım programını mantıklı kılar. Ancak her tesisin kendi hijyen kabulü, teslim kaydı ve giriş prosedürü ayrı yürütülür — ortak olan yalnızca güzergâh ve zamanlamadır. Bu sayfada Afyonkarahisar ve çevresindeki birden fazla et işleme/depolama noktasına çok noktalı rota bakımının nasıl kurulduğunu, hijyen bölgesi olan ve olmayan tesislerin rotada nasıl sıralandığını anlatıyoruz.",
        maddeler: [
            { baslik: "Rota sırasının hijyen sınıfına göre kurulması", metin: "Birden fazla tesis aynı günde ziyaret edilecekse, hijyen sınıfı en yüksek olan (örneğin kurutma odası veya paketleme hattı bulunan) tesis güne genellikle önce, daha genel amaçlı depo veya dış saha işleri sonra planlanır. Bu sıralama, bir tesisteki kirliliğin diğerine taşınmasını önler." },
            { baslik: "Her tesis için ayrı teslim ve kabul kaydı", metin: "Ortak olan yalnızca güzergâh ve araç programıdır; her tesis kendi teslim tesellüm belgesini, kendi giriş kaydını ve varsa kendi hijyen onayını ayrı ayrı tutar. Bir tesisteki onay diğerine devredilmez; her durak kendi prosedürüyle ele alınır." },
            { baslik: "Adresler arası mesafe ve trafik penceresi", metin: "Afyonkarahisar merkez ile çevre ilçelerdeki tesisler arasındaki mesafe, günlük rotanın kaç durağı kapsayabileceğini belirler. Bu hesap yapılırken yalnızca yol süresi değil, her duraktaki hijyen giriş süresi ve iş süresi de toplanır; gerçekçi olmayan bir günlük programa yer verilmez." },
            { baslik: "Ortak makine sınıfı ile farklı ortam ihtiyacı", metin: "Rotadaki tesislerin çoğu benzer bir platform sınıfına ihtiyaç duysa bile, aralarında kurutma odası gibi dar alanlı bir tesis varsa o durak için ayrı bir kompakt makine planlanır. Tek bir makine sınıfının tüm rotaya uyacağı varsayılmaz; her durağın kendi ölçüsü teyit edilir." },
            { baslik: "Bir duraktaki gecikmenin diğerine etkisi", metin: "Bir tesiste beklenmedik bir gecikme (örneğin hijyen kontrolünün uzaması) yaşanırsa, bu durum sonraki duraklara önceden bildirilir. Rotadaki tesisler, bir günlük programın parçası olduklarını bilir ve makul bir gecikme payını kabul eder; ancak bu pay önceden konuşulmadan varsayılmaz." },
        ],
        ekBolumler: [
            {
                baslik: "Rota durağı tipine göre planlama önceliği",
                paragraflar: ["Çok noktalı rotadaki her durak, hijyen sınıfı ve erişim ihtiyacına göre farklı bir sırada ve şekilde ele alınır. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Durak tipi", "Hijyen sınıfı", "Rotadaki sıra", "Öncelikli önlem"],
                    satirlar: [
                        ["Üretim/kurutma odası olan tesis", "Yüksek", "Gün başı", "Temiz makineyle giriş"],
                        ["Soğuk depo/dağıtım merkezi", "Orta-yüksek", "Gün ortası", "Kapı açık kalma süresi"],
                        ["Şarküteri toptan deposu", "Orta", "Gün ortası-sonu", "Standart hijyen kaydı"],
                        ["Dış saha/idari bina bakımı", "Düşük", "Gün sonu", "Esnek zamanlama"],
                    ],
                },
            },
            {
                baslik: "Haftalık rota ile acil taleplerin dengelenmesi",
                paragraflar: [
                    "Sabit bir haftalık rota, planlı bakım kalemlerini önceden belirlenmiş bir sırayla kapsar. Ancak rotadaki tesislerden biri acil bir arıza bildirirse, bu talep haftalık programın dışında değerlendirilir ve mümkün olan en kısa sürede, diğer duraklara olan etkisi hesaplanarak devreye alınır.",
                    "Acil taleplerin sık tekrarlandığı bir tesis varsa, bu durum bir sonraki haftalık program gözden geçirilirken dikkate alınır; o tesisin rotadaki sırası veya ziyaret sıklığı artırılabilir." ],
            },
            {
                baslik: "Bayram öncesi rota yoğunluğu",
                paragraflar: [
                    "Kurban bayramı öncesi dönemde rotadaki neredeyse tüm tesislerde üretim ve sevkiyat yoğunluğu aynı anda artar; bu da her duraktaki bekleme ve giriş süresini normalden uzatabilir. Bu dönemde günlük rota daha az durak içerecek şekilde daraltılır, aksi hâlde program gerçekçi olmaktan çıkar.",
                    "Yoğun dönem öncesi tesislerle yapılan kısa bir ön görüşme, hangi tesisin o hafta daha öncelikli olduğunu netleştirir; bu bilgi rota sırasına yansıtılır." ],
            },
        ],
        sss: [
            { soru: "Aynı günde birden fazla et işleme tesisi ziyaret edilebilir mi?", cevap: "Edilebilir, ancak mesafe, her duraktaki hijyen giriş süresi ve iş süresi birlikte hesaplanarak gerçekçi bir günlük program kurulur. Rotaya kaç durak sığacağı önceden değil, bu hesap yapıldıktan sonra belirlenir." },
            { soru: "Bir tesisteki hijyen onayı diğer tesise geçerli olur mu?", cevap: "Olmaz, her tesis kendi giriş prosedürünü ve teslim kaydını ayrı tutar. Ortak olan yalnızca araç ve makine programıdır; hijyen onayı her durakta yeniden alınır." },
            { soru: "Rotadaki bir tesiste gecikme olursa diğerleri ne olur?", cevap: "Gecikme sonraki duraklara önceden bildirilir; rotadaki tesisler günlük programın parçası olduklarını bilerek makul bir gecikmeyi kabul edebilir. Ancak bu pay keyfi değildir, gerçek zamanlı bilgilendirmeyle yönetilir." },
            { soru: "Rotadaki tüm tesislere aynı platform sınıfı mı gönderilir?", cevap: "Genellikle benzer sınıflar kullanılsa da, dar alanlı bir kurutma odası bulunan tesis için ayrı bir kompakt makine planlanır. Her durağın ölçüsü ayrı teyit edilir, tek bir sınıfın tüm rotaya uyacağı varsayılmaz." },
            { soru: "Acil bir arıza haftalık rotayı bozar mı?", cevap: "O günkü sıra bir miktar etkilenebilir ama acil talep, diğer duraklara olan etkisi hesaplanarak mümkün olan en kısa sürede devreye alınır. Sık tekrarlanan acil talepler bir sonraki haftalık programda dikkate alınır." },
            { soru: "Bayram öncesi rotaya daha fazla mı durak eklenir?", cevap: "Tam tersi; yoğunluk arttığı için günlük rota genellikle daha az durak içerecek şekilde daraltılır, aksi hâlde program gerçekçi olmaktan çıkar. Hangi tesisin öncelikli olduğu önceden kısa bir görüşmeyle netleştirilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Afyonkarahisar merkez ve çevresinde birden fazla et işleme/depolama noktasının varlığı kamuya açık genel bilgidir; belirli tesis adları veya adresler uydurulmamıştır. Rota sıralaması ve hijyen ayrımı firma saha pratiğidir.",
    },
    "hizmet:zor-zemin-arazi-platform-kiralama": {
        h1: "Afyonkarahisar Et İşleme Tesisi Dış Sahasında ve Yükleme Rampasında Zor Zemin Platform Kiralama",
        giris:
            "Et işleme tesisinin bina içi tamamen beton ve düzgün olsa bile, dış saha genellikle aynı özene sahip değildir: yükleme rampası önü sık sık kamyon manevrasıyla aşınır, bahçe veya çevre yolu yağış sonrası çamurlaşabilir, hammadde kabul alanının kenarındaki servis yolu düzensiz sıkıştırılmış toprak olabilir. Bu koşullarda standart bir sert zemin makaslı platformu göndermek yerine, zorlu zemine uygun paletli veya büyük tekerlekli bir sınıf tercih edilir. Afyonkarahisar'daki et işleme tesislerinde bu ihtiyaç en çok dış cephe aydınlatması, yükleme rampası üstü tente/gölgelik bakımı ve bina çevresi servis yolu üzerindeki kamera-aydınlatma direği bakımında ortaya çıkar. Bu sayfada dış saha ve yükleme rampası çevresinde zor zemin koşullarında platform kiralarken hangi zemin bilgilerinin önceden istendiğini, kuru güzergâh seçiminin nasıl yapıldığını anlatıyoruz.",
        maddeler: [
            { baslik: "Yükleme rampası önü zemin aşınması", metin: "Sürekli kamyon manevrası gören rampa önü zamanla oyuklaşabilir veya zeminde çukur oluşabilir. Bu bölgede çalışacak platform öncesinde zemin görsel olarak kontrol edilir; belirgin çukur veya çamur birikintisi varsa makine oraya değil, en yakın sağlam noktaya konumlandırılır ve oradan uzanılır." },
            { baslik: "Yağış sonrası bahçe ve servis yolu durumu", metin: "Bina çevresindeki servis yolu veya bahçe bağlantılı alan, yağış sonrası taşıma gücünü kaybedebilir. Yüzey kuru görünse bile alt katman ıslak kalabilir. Son yağış bilgisi ve zemin fotoğrafı sevkiyat öncesi istenir; şüpheli bir zemine deneme amacıyla girilmez, alternatif rota veya daha kuru bir tarih tercih edilir." },
            { baslik: "Sıkıştırılmış toprak alanda paletli tercih", metin: "Hammadde kabul kenarındaki servis yolu genellikle sıkıştırılmış toprak veya ince stabilize kaplamadır; standart dört tekerlekli bir platform burada batabilir veya kayabilir. Bu tip zeminlerde paletli yürüyüş takımına sahip bir sınıf tercih edilir; zemin tipi net değilse fotoğraf istenir." },
            { baslik: "Ağır taşıma aracı ile platformun ayrı rotası", metin: "Platformu taşıyan çekici, zeminden şüphe varsa sert ve sağlam alanda kalır; makine kendi yürüyüşüyle, uygun koşullar varsa hedef noktaya ilerler. İkisi için aynı rota otomatik olarak varsayılmaz; ağır aracın geçemeyeceği bir noktaya platformun kendi başına gitmesi planlanabilir." },
            { baslik: "Dış saha aydınlatma direği ve kamera bakımında konumlanma", metin: "Direk ve kamera direkleri genellikle rampa kenarında veya bahçe girişinde bulunur; bu noktalara erişim, hem zemin durumu hem araç manevra alanı birlikte değerlendirilerek planlanır. Direğin tam konumu ve çevresindeki zemin tipi sevkiyat öncesi paylaşıldığında doğru sınıf ilk seferde gönderilir." },
        ],
        ekBolumler: [
            {
                baslik: "Dış saha bölgelerine göre zemin durumu",
                paragraflar: ["Et işleme tesisinin dış saha bölgeleri farklı zemin tipi ve risk taşır. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["Bölge", "Tipik zemin", "Baskın risk", "Önerilen yaklaşım"],
                    satirlar: [
                        ["Yükleme rampası önü", "Beton, aşınmış", "Çukur, kamyon trafiği", "Sağlam nokta seçimi"],
                        ["Hammadde kabul kenarı", "Sıkıştırılmış toprak", "Batma, kayma", "Paletli yürüyüş takımı"],
                        ["Bahçe/servis yolu", "Toprak/stabilize", "Yağış sonrası zayıflama", "Kuru güzergâh, fotoğraf teyidi"],
                        ["Bina çevresi asfalt/beton", "Sert zemin", "Düşük risk", "Standart tekerlekli tip"],
                    ],
                },
            },
            {
                baslik: "Kuru pencere seçiminde bilgi akışı",
                paragraflar: [
                    "Dış saha çalışmalarında en büyük risk, zeminin yüzeyde kuru görünüp altta hâlâ ıslak olmasıdır. Bu nedenle son yağış tarihi, zeminin gölgede kalıp kalmadığı ve drenaj durumu sevkiyat öncesi sorulur; sabit bir 'iki gün sonra kurur' kuralı verilmez, çünkü zemin yapısı ve mevsim bu süreyi değiştirir.",
                    "Şüpheli bir durumda sahaya gidip zemini yerinde kontrol etmek, telefonla tahmin yürütmekten daha güvenilirdir; mümkünse kısa bir ön keşif planlanır, özellikle ilk kez çalışılan bir tesiste bu adım atlanmaz." ],
            },
            {
                baslik: "Ağır aracın giremediği noktalarda alternatif erişim",
                paragraflar: [
                    "Bazı dış saha noktalarına ağır taşıma aracı hiç giremeyebilir; bu durumda platform, sert bir noktada indirilip kendi yürüyüşüyle hedefe ilerler veya erişim tamamen farklı bir sınıfla (örneğin daha küçük ve manevra kabiliyeti yüksek bir makine) sağlanır.",
                    "Bu alternatif planlama, sahaya gidildiğinde değil, sevkiyat öncesi zemin ve mesafe bilgisi paylaşıldığında yapılır; böylece aracın sahada geri dönmek zorunda kalması gibi bir gecikme yaşanmaz." ],
            },
        ],
        sss: [
            { soru: "Yükleme rampası önündeki çukurlu zeminde platform çalışabilir mi?", cevap: "Çalışabilir ancak makine doğrudan çukurlu noktaya değil, en yakın sağlam alana konumlandırılır ve oradan uzanılır. Çukur belirginse ve sağlam nokta bulunamıyorsa, tesisin zemini düzeltmesi beklenir veya alternatif bir erişim açısı aranır." },
            { soru: "Yağıştan sonra ne kadar süre beklenmeli?", cevap: "Sabit bir süre verilmez; toprağın yapısı, drenajı ve gölgede kalması sonucu değiştirir. Son yağış bilgisi ve zemin fotoğrafı istenir, şüpheli durumda sahada yerinde kontrol tercih edilir." },
            { soru: "Sıkıştırılmış toprak zeminde standart dört tekerlekli platform kullanılabilir mi?", cevap: "Risklidir; bu tip zeminlerde batma veya kayma ihtimali standart tekerlekli makinede daha yüksektir. Paletli yürüyüş takımına sahip bir sınıf tercih edilir; zemin tipi net değilse önceden fotoğraf istenir." },
            { soru: "Ağır taşıma aracı dış sahaya giremezse ne olur?", cevap: "Platform sert bir noktada indirilip kendi yürüyüşüyle hedefe ilerleyebilir veya erişim tamamen farklı, daha küçük bir sınıfla sağlanır. Bu alternatif, sahada değil sevkiyat öncesi zemin bilgisi paylaşıldığında planlanır." },
            { soru: "Dış saha aydınlatma direğine erişim için hangi bilgi istenir?", cevap: "Direğin tam konumu, çevresindeki zemin tipi ve araç manevra alanının genişliği istenir. Bu bilgiler paylaşıldığında doğru platform sınıfı ilk seferde gönderilir, sahada uyumsuzluk riski azalır." },
            { soru: "Zemin şüpheliyse denenip görülür mü?", cevap: "Hayır, şüpheli zemine deneme amacıyla girilmez. Taşıma gücünden emin olunmadığı sürece makine oraya konumlandırılmaz; sağlam bir noktadan uzanma, farklı rota veya daha kuru bir tarih tercih edilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Sanayi tesislerinin dış saha ve yükleme rampası zemin koşullarının genel işleyişi kamuya açık sektör bilgisidir; belirli bir tesisin zemin durumu veya ölçüsü uydurulmamıştır. Kuru güzergâh seçimi ve alternatif erişim planlaması firma saha pratiğidir.",
    },
    "hizmet:makasli-platform-kiralama": {
        h1: "Enerji Tesisleri ve Tarım Sanayisi İçin Makaslı Platform Kiralama",
        giris:
            "Makaslı platform, Afyon'daki enerji üretim tesisleri ile tarım sanayisi depolarının ortak paydası olan sabit yükseklikli, geniş sepetli işler için tercih edilen sınıftır. Güneş enerjisi santrallerinde invertör kabinlerinin bakımı, biyogaz tesislerinde boru köprüsü ve fermantasyon tankı üstü kontroller, şeker ve haşhaş depolarında çatı sacı onarımı — bu işlerin hepsi tek noktada uzun süre çalışılan, geniş bir çalışma alanına ihtiyaç duyan görevlerdir ve makaslı platform tam da bu profile uyar. Eklemli sepetli platformun aksine makaslı tip yatayda değil dikeyde hareket eder; bu da onu, GES sahasındaki düz beton veya sıkıştırılmış zeminlerde ve depo içi sabit koridorlarda daha kararlı kılar. Ancak dış sahada tarla düzeyinde düzensiz zemin varsa, standart tekerlekli makaslı platform yerine arazi kabiliyeti yüksek bir versiyon gerekir; bu ayrım sevkiyat öncesi netleştirilir. Sepet genişliği, aynı anda iki kişinin ve ekipmanın çalışmasına imkân tanıdığı için, tek kişilik dar sepetli sınıflara göre özellikle bakım ekiplerinin tercih ettiği bir çözümdür. Elektrik tesisatına yakın çalışmada, tesisin kendi güvenlik prosedürü ve gerilimsizlik teyidi olmadan sepet ilgili kota çıkarılmaz; bu kural GES ve biyogaz sahalarında istisnasızdır.",
        maddeler: [
            {
                baslik: "GES invertör ve trafo kabini bakımında sabit konumlanma",
                metin: "İnvertör kabinleri ve orta gerilim trafo yapıları genellikle sahanın belirli noktalarında sabit durur; makaslı platform bu noktaya konumlanıp dikey olarak yükselir ve sepet o pozisyonda uzun süre sabit kalabilir. Bu, panel dizileri arasında sürekli hareket eden bir iş değil, nokta bazlı bir bakım turudur — makaslı platformun güçlü yanı tam olarak budur.",
            },
            {
                baslik: "Biyogaz tesisinde boru köprüsü ve tank üst kapağı erişimi",
                metin: "Fermantasyon tankının üst kapağı veya boru köprüsü hattı boyunca yapılan kontrollerde sepetin geniş tabanı, ekip için hem araç hem malzeme taşıma alanı sağlar. Tank gövdesine değil, güvenli mesafedeki sağlam bir zemin noktasına konumlanılır; gaz güvenliği prosedürü olmadan kıvılcım çıkaran işlem yapılmaz.",
            },
            {
                baslik: "Depo çatı sacı ve mahya onarımında geniş sepet avantajı",
                metin: "Şeker ve haşhaş depolarında çatı sacı değişimi veya mahya havalandırma onarımı, malzemenin sepette taşınmasını gerektirir; makaslı platformun geniş tabanı bu işi tek seferde, sepeti indirip tekrar yükseltmeden tamamlamaya imkân tanır. Depo ürün doluyken bu iş planlanmaz, istif yüzeyinin taşıyıcı olmaması nedeniyle boşalma dönemine bırakılır.",
            },
            {
                baslik: "Zemin tipine göre tekerlekli ve arazi tipi ayrımı",
                metin: "Depo içi beton zeminlerde standart tekerlekli makaslı platform yeterlidir; GES sahasının tarla düzeyindeki düzensiz zemininde ise arazi kabiliyeti yüksek, daha geniş tekerlekli bir versiyon tercih edilir. Bu ayrım sahaya gidildiğinde değil, zemin fotoğrafı ve tarif paylaşıldığında önceden yapılır.",
            },
            {
                baslik: "Elektrik altyapısına yakın çalışmada izin süreci",
                metin: "GES ve biyogaz sahalarında enerjili hatlara veya ekipmana yakın konumlanmadan önce tesisin elektrik güvenlik prosedürü uygulanır; hattın gerilimsiz olduğu veya güvenli mesafenin korunduğu yazılı teyit edilmeden sepet o noktaya çıkarılmaz. Bu teyit süreci işin süresini bir miktar uzatabilir, teklifte önceden gösterilir.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre makaslı platform sınıf seçimi",
                paragraflar: ["Enerji tesisi ve tarım sanayisi depolarında en sık karşılaşılan iş tipleri, gerektirdikleri sepet kapasitesi ve zemin uyumu açısından farklılaşır. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["İş tipi", "Tipik yükseklik bandı", "Zemin", "Önerilen sınıf"],
                    satirlar: [
                        ["GES invertör/trafo bakımı", "6-10 m", "Beton veya sıkıştırılmış toprak", "Arazi tipi tekerlekli makaslı"],
                        ["Biyogaz tank üst kapağı", "8-12 m", "Servis koridoru beton", "Standart tekerlekli makaslı"],
                        ["Depo çatı sacı/mahya onarımı", "8-14 m", "Depo içi beton", "Standart tekerlekli makaslı"],
                        ["Depo raf üstü istif kontrolü", "6-10 m", "Depo içi beton", "Dar gövdeli makaslı"],
                    ],
                },
            },
            {
                baslik: "Eklemli platforma göre ne zaman tercih edilir",
                paragraflar: [
                    "Eklemli sepetli platform, engel aşma ve yatay uzanma gerektiren işlerde daha esnektir; ancak makaslı platform, tek noktada uzun süreli ve sabit yükseklikte çalışılan işlerde hem daha kararlı hem daha geniş sepetiyle daha verimlidir. GES invertör bakımı veya depo çatı onarımı gibi işlerde hedef nokta sabit olduğundan makaslı tip önceliklidir.",
                    "İki sınıf arasında karar verirken belirleyici soru şudur: iş tek bir noktada mı yapılacak, yoksa engelin arkasına veya yana doğru uzanma mı gerekiyor? İlk durumda makaslı, ikinci durumda eklemli tercih edilir.",
                ],
            },
            {
                baslik: "Operatör ve sertifikasyon",
                paragraflar: [
                    "Makaslı platform operatörlü veya operatörsüz kiralanabilir; enerji tesisi sahalarında çoğu zaman tesisin kendi iş güvenliği ekibi, çalışacak personelin yüksekte çalışma eğitim belgesini talep eder. Bu belge süreci sevkiyat öncesi netleştirilirse sahada gecikme yaşanmaz.",
                    "Biyogaz tesislerinde ayrıca gaz ortamı güvenlik eğitimi istenebilir; bu, platformun kendisinden bağımsız, tesisin kendi prosedürüdür ve önceden sorulmalıdır.",
                ],
            },
        ],
        sss: [
            { soru: "Makaslı platform GES sahasının tarla zemininde çalışabilir mi?", cevap: "Standart tekerlekli tip düzensiz tarla zemininde risklidir; bunun yerine arazi kabiliyeti yüksek, geniş tekerlekli bir versiyon tercih edilir. Zemin tipi ve nem durumu sevkiyat öncesi paylaşıldığında doğru sınıf ilk seferde gönderilir." },
            { soru: "Biyogaz tesisinde tank gövdesine yakın çalışılabilir mi?", cevap: "Makine tank gövdesine değil, güvenli mesafedeki sağlam bir zemin noktasına konumlanır ve tesisin gaz güvenlik prosedürü uygulanır; kıvılcım riski taşıyan hiçbir işlem bu prosedür olmadan yapılmaz." },
            { soru: "Depo çatısında ürün doluyken makaslı platformla çalışılır mı?", cevap: "Önerilmez; istif yüzeyi taşıyıcı olmadığından düşen bir parça partiyi riske atar. Çatı ve mahya işleri, ürünün boşaldığı dönem için planlanır, bu hem daha güvenli hem daha hızlı ilerler." },
            { soru: "Makaslı platform ile eklemli platform arasındaki fark nedir?", cevap: "Makaslı platform dikeyde hareket eder ve tek noktada sabit, geniş bir sepet sunar; eklemli platform ise engel aşma ve yatay uzanma gerektiren işlerde daha esnektir. Sabit yükseklikte uzun süreli işlerde makaslı tip önceliklidir." },
            { soru: "Elektrik hattına yakın çalışmadan önce ne istenir?", cevap: "Tesisin elektrik güvenlik prosedürü uygulanır; ilgili hattın gerilimsiz olduğu veya güvenli mesafenin korunduğu yazılı olarak teyit edilmeden sepet o kota çıkarılmaz. Bu teyit süresi teklifte önceden belirtilir." },
            { soru: "Operatörlü kiralama şart mı?", cevap: "Hayır, operatörlü veya operatörsüz kiralanabilir; ancak enerji tesisi sahalarında tesisin kendi iş güvenliği ekibi çoğu zaman yüksekte çalışma eğitim belgesi talep eder. Bu belge süreci önceden netleştirilirse sahada gecikme yaşanmaz." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Makaslı platformun dikey hareket ve sabit konumlanma özelliği ile GES/biyogaz/depo tesislerindeki genel iş tipleri kamuya açık sektör bilgisidir; belirli bir tesisin ölçüsü veya kapasitesi uydurulmamıştır.",
    },
    "hizmet:manlift-kiralama": {
        h1: "Enerji Tesisleri ve Tarım Sanayisi İçin Manlift (Sepetli Yükseklik Aracı) Kiralama",
        giris:
            "Manlift, Afyon'daki enerji tesislerinde ve tarım sanayisi depolarında noktadan noktaya hızlı hareket ve uzun mesafe kat etme gerektiren işlerde makaslı platforma göre öne çıkan sınıftır. Güneş enerjisi santrallerinde saha aydınlatma direklerinin ve yüksek gerilim hattı direklerinin sıra hâlinde dizildiği geniş arazilerde, bir direkten diğerine geçmek için makinenin kendi motoruyla ilerleyebilmesi zaman kazandırır; teleskopik veya eklemli manlift bu profile uyar. Biyogaz tesisinde alev bacası ve gaz toplama hattı boyunca uzanan boru köprüsü kontrolünde, sepetin hem yükseğe çıkma hem yana uzanma kabiliyeti aranır — bu da manliftin eklemli bom yapısının güçlü olduğu bir alandır. Tarım sanayisi depolarında ise manlift, çatı mahyası boyunca ilerleyen uzun hatlı kontrollerde veya bina dışındaki servis yolunun zemin durumuna göre paletli yürüyüş takımlı versiyonlarla tercih edilir. Manliftin makaslı platforma göre temel farkı, sepetin dikey ekseninde değil bom ucunda hareket etmesidir; bu, engelin arkasına veya yana doğru uzanma gerektiren işlerde belirleyici avantajdır. Zemin ve mesafe bilgisi sevkiyat öncesi netleştirildiğinde doğru bom uzunluğu ve tekerlek tipi ilk seferde gönderilir.",
        maddeler: [
            {
                baslik: "GES saha aydınlatma ve yüksek gerilim direği sırasında hareket",
                metin: "GES sahalarında aydınlatma direkleri ve yüksek gerilim hattı direkleri genellikle sıra hâlinde, birbirinden belirli mesafede dizilir. Manlift kendi motoruyla bir direkten diğerine ilerleyebildiği için, her direk için makineyi yeniden konumlandırmak yerine tek sevkiyatla sıra boyunca ilerlenir; bu, geniş arazili GES sahalarında zaman kazandırır.",
            },
            {
                baslik: "Biyogaz tesisinde alev bacası ve boru hattı boyunca uzanma",
                metin: "Alev bacası kontrolü ve gaz toplama hattının boru köprüsü boyunca izlenmesi, hem yükseğe çıkma hem yana doğru uzanma gerektirir; eklemli bom yapısına sahip manlift, sepeti engelin (boru, kolon) arkasına taşıyabildiği için bu işte makaslı platforma göre daha uygundur. Gaz güvenliği prosedürü burada da geçerlidir.",
            },
            {
                baslik: "Depo dış cephesi ve mahya hattında uzun mesafe kontrolü",
                metin: "Tarım sanayisi deposunun dış cephesi veya çatı mahyası, tek bir noktadan değil uzun bir hat boyunca kontrol gerektirebilir; manlift bu hat boyunca kendi motoruyla ilerleyerek sepeti tekrar tekrar indirip yükseltme ihtiyacını ortadan kaldırır. Bina çevresindeki zemin toprak veya stabilize ise paletli yürüyüş takımlı versiyon tercih edilir.",
            },
            {
                baslik: "Bom uzunluğu ve erişim mesafesine göre sınıf seçimi",
                metin: "Manliftin bom uzunluğu, hedefe olan yatay ve dikey mesafeye göre belirlenir; sadece hedef yükseklik değil, makinenin konumlanabileceği en yakın sağlam nokta ile hedef arasındaki mesafe de hesaba katılır. Bu mesafe bilgisi paylaşılmadan doğru bom sınıfı seçilemez.",
            },
            {
                baslik: "Elektrik hattı yakınında güvenli mesafe kuralı",
                metin: "Yüksek gerilim hattı direklerine yakın manlift çalışmasında, tesisin kendi elektrik güvenlik prosedürü ve güvenli mesafe teyidi önceliklidir; bom ucu, gerilimsizlik veya güvenli mesafe yazılı olarak teyit edilmeden hatta yaklaştırılmaz.",
            },
        ],
        ekBolumler: [
            {
                baslik: "İş tipine göre manlift bom yapısı seçimi",
                paragraflar: ["Enerji tesisi ve tarım sanayisi işlerinde gerekli hareket tipi (dikey/yatay/mesafe) manlift sınıfını belirler. Aşağıdaki tablo bu ayrımı özetler."],
                tablo: {
                    basliklar: ["İş tipi", "Gereken hareket", "Zemin", "Önerilen bom tipi"],
                    satirlar: [
                        ["GES direk sırası boyunca ilerleme", "Uzun mesafe, düşük yükseklik", "Tarla/sıkıştırılmış toprak", "Teleskopik bom, arazi tipi"],
                        ["Biyogaz alev bacası/boru hattı", "Yükseğe çıkma + yana uzanma", "Servis koridoru beton", "Eklemli bom"],
                        ["Depo dış cephe/mahya hattı", "Uzun hat boyunca ilerleme", "Toprak/stabilize", "Paletli yürüyüş takımlı"],
                        ["Trafo/kabin nokta bakımı", "Sabit nokta, orta yükseklik", "Beton", "Kompakt eklemli bom"],
                    ],
                },
            },
            {
                baslik: "Makaslı platforma göre ne zaman tercih edilir",
                paragraflar: [
                    "Manlift, hedefin engelin arkasında olduğu veya bir noktadan diğerine sık sık hareket edilmesi gereken işlerde makaslı platforma göre üstündür; buna karşılık tek noktada uzun süre sabit çalışılacak geniş sepet gerektiren işlerde makaslı platform daha kararlı ve verimlidir.",
                    "GES sahasında direk sırası boyunca ilerleme veya biyogaz tesisinde boru hattının arkasına uzanma gibi işler manlift gerektirir; depo çatısında geniş bir alanda sabit duran onarım işleri ise makaslı platforma daha uygundur.",
                ],
            },
            {
                baslik: "Sevkiyat öncesi paylaşılması gereken bilgiler",
                paragraflar: [
                    "Doğru manlift sınıfının ilk seferde gönderilebilmesi için hedefe olan yatay mesafe, zemin tipi (beton, toprak, stabilize) ve varsa yüksek gerilim hattına yakınlık bilgisi sevkiyat öncesi istenir. Bu bilgiler eksik paylaşıldığında sahada bom uzunluğu yetersiz kalabilir veya zemin makineyi taşımayabilir.",
                    "Özellikle GES ve biyogaz sahalarında elektrik güvenlik prosedürünün süresi de teklife dahil edilir; bu, işin toplam süresini etkileyen ama önceden bilinebilen bir kalemdir.",
                ],
            },
        ],
        sss: [
            { soru: "Manlift ile makaslı platform arasındaki temel fark nedir?", cevap: "Manlift bom ucunda hareket eder ve engelin arkasına veya yana doğru uzanabilir; makaslı platform dikeyde yükselir ve tek noktada geniş, sabit bir sepet sunar. Hareket ve mesafe gerektiren işlerde manlift, sabit nokta işlerinde makaslı platform tercih edilir." },
            { soru: "GES sahasında direk sırası boyunca tek sevkiyatla çalışılabilir mi?", cevap: "Evet, manlift kendi motoruyla bir direkten diğerine ilerleyebildiği için sıra boyunca tek sevkiyatla çalışmak mümkündür. Bu, her direk için makineyi yeniden taşımaktan daha hızlı ve ekonomiktir." },
            { soru: "Biyogaz tesisinde boru hattının arkasına uzanmak gerekirse ne olur?", cevap: "Eklemli bom yapısına sahip manlift, sepeti boru veya kolon gibi engellerin arkasına taşıyabilir; bu nedenle bu tip işlerde makaslı platform yerine manlift tercih edilir. Gaz güvenliği prosedürü işlem boyunca geçerlidir." },
            { soru: "Toprak veya stabilize zeminde manlift kullanılabilir mi?", cevap: "Standart tekerlekli tip bu zeminlerde risklidir; paletli yürüyüş takımlı bir versiyon tercih edilir. Zemin tipi ve nem durumu sevkiyat öncesi paylaşıldığında doğru versiyon ilk seferde gönderilir." },
            { soru: "Doğru bom uzunluğu nasıl belirlenir?", cevap: "Sadece hedef yükseklik değil, makinenin konumlanabileceği en yakın sağlam nokta ile hedef arasındaki yatay mesafe de hesaba katılır. Bu iki bilgi paylaşılmadan doğru bom sınıfı seçilemez, bu yüzden sevkiyat öncesi istenir." },
            { soru: "Yüksek gerilim hattına yakın manlift çalışması nasıl yapılır?", cevap: "Tesisin kendi elektrik güvenlik prosedürü uygulanır; hattın gerilimsiz olduğu veya güvenli mesafenin korunduğu yazılı olarak teyit edilmeden bom ucu hatta yaklaştırılmaz. Bu teyit süreci teklifte önceden belirtilir." },
        ],
        kaynak: "Elle yazıldı — 2026-08-14. Manliftin bom hareketi ve GES/biyogaz/depo tesislerindeki genel iş tipleri kamuya açık sektör bilgisidir; belirli bir tesisin ölçüsü veya kapasitesi uydurulmamıştır.",
    },
};

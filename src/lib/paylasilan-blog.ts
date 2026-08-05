// Paylaşılan tema kullanan domainler için parametrik blog üretimi.
// Amaç: bespoke temalardaki (blog.ts) elle yazılmış 40+ yazı yerine, her domain'in
// kendi SiteIcerik verisinden (bolge/uzmanlik/hizmetler/h1) beslenen 10 şablon yazı —
// aynı 10 konu her domain'de işlenir ama metin site'ye özel gerçek veriyle doldurulur,
// bu yüzden kopya içerik oluşmaz (bkz. urunSeoParagraflari, aynı ilke).
import type { SiteIcerik } from "./siteler";
import type { BlogYazisi } from "./blog";
import { blogGorsel } from "./blog";
import { urunKatalogu } from "./urun-katalogu";

const GORSELLER = [
    blogGorsel.holTavan,
    blogGorsel.depo,
    blogGorsel.makinePark,
    blogGorsel.celikMontaj,
    blogGorsel.forkliftDepo,
    blogGorsel.tesisat,
] as const;

const GORSEL_ALT = [
    "Sanayi holünde makaslı platformla yüksekte çalışma",
    "Depo içinde yükseltici platformla raf üstü erişim",
    "Saha makine parkında dikey personel yükseltici",
    "Çelik konstrüksiyon montajında platform ve forklift",
    "Fabrika deposunda forklift ve makaslı platform",
    "Fabrika tesisat montajında makaslı platform",
] as const;

function bolgeIlk(site: SiteIcerik) {
    return site.bolge.split(",")[0].trim();
}

function ilgiliUrunSec(site: SiteIcerik, tercih: string[]): { baslik: string; slug: string } | undefined {
    for (const anahtar of tercih) {
        const u = urunKatalogu.find((x) => x.slug.includes(anahtar));
        if (u) return { baslik: `${u.ad} Kiralama`, slug: u.slug };
    }
    return undefined;
}

interface Sablon {
    slugTaban: string;
    kategori: BlogYazisi["kategori"];
    baslik: (s: SiteIcerik) => string;
    ozet: (s: SiteIcerik) => string;
    giris: (s: SiteIcerik) => string;
    bolumler: (s: SiteIcerik) => BlogYazisi["bolumler"];
    sss: (s: SiteIcerik) => { soru: string; cevap: string }[];
    ilgiliUrun: (s: SiteIcerik) => { baslik: string; slug: string } | undefined;
}

const SABLONLAR: Sablon[] = [
    {
        slugTaban: "dogru-platform-sinifi-secimi",
        kategori: "Ürün Rehberi",
        baslik: (s) => `${bolgeIlk(s)} Bölgesinde Doğru Platform Sınıfını Nasıl Seçersiniz?`,
        ozet: (s) => `${bolgeIlk(s)} sahalarında makaslı, eklemli ve teleskopik platform arasında karar verirken bakılması gereken üç ölçüt: yükseklik, yatay erişim ve zemin.`,
        giris: (s) => `${site_h1(s)} bölgesinde her saha aynı ekipmanı istemez. Doğru sınıfı seçmek, çalışma noktasının tam altına makine koyabilip koyamadığınızla başlar; devamı yükseklik ve zemin koşuluna bağlıdır.`,
        bolumler: (s) => [
            {
                baslik: "Önce erişim geometrisini tanımlayın",
                paragraflar: [
                    `${bolgeIlk(s)} sahasında çalışma noktasının tam altına makine koyabiliyorsanız, geniş sepetli makaslı platform genellikle en ekonomik seçimdir. Aradaki bir engeli aşmanız gerekiyorsa (parapet, boru hattı, cephe girintisi) eklemli platform devreye girer; engel yok ama nokta uzaksa teleskopik platform yatay erişimde öne çıkar.`,
                    `${s.uzmanlik} kapsamındaki işlerde bu üç sınıf arasındaki fark çoğunlukla saha ziyaretiyle netleşir; katalog değerleri başlangıç noktasıdır, kesin model günün saha koşuluna göre teyit edilir.`,
                ],
            },
            {
                baslik: "Zemin ve erişim koşulunu teyit edin",
                paragraflar: [
                    `${bolgeIlk(s)} bölgesindeki sahalarda zemin taşıma kapasitesi, kapı/geçit genişliği ve tavan yüksekliği (iç mekân işlerinde) makine seçimini doğrudan etkiler. Arazi tipi lastikli modeller düzensiz zeminde, elektrikli modeller ise iç mekânda ve gürültü/emisyon hassasiyeti olan alanlarda tercih edilir.`,
                    `${s.hizmetler[0] ?? s.uzmanlik} gibi işlerde saha girişi dar ise, makine ölçüleri teklif öncesinde saha planıyla karşılaştırılmalıdır; aksi halde teslimat günü gecikme riski doğar.`,
                ],
            },
            {
                baslik: "Kapasiteyi göz ardı etmeyin",
                paragraflar: [
                    "Sepette kaç kişi ve hangi malzeme ağırlığıyla çalışılacağı, sadece yükseklik kadar önemli bir kriterdir. Yüksek yük altında maksimum yatay erişim genellikle düşer; bu yüzden en zorlu nokta (en yüksek + en uzak + en ağır) baz alınarak sınıf seçilir.",
                    "Seçilen modelin çalışma diyagramı, kapasite ve erişim değerlerini teyit eder; kesin model ve fiyat yazılı teklifte netleşir.",
                ],
            },
        ],
        sss: (s) => [
            { soru: `${bolgeIlk(s)} bölgesinde hangi platform sınıfı daha çok tercih ediliyor?`, cevap: `Sahanın erişim geometrisine göre değişir; ${s.uzmanlik} kapsamındaki işlerde genellikle makaslı ve eklemli platform öne çıkar, kesin sınıf saha bilgisiyle teyit edilir.` },
            { soru: "Katalog yüksekliği ile çalışma yüksekliği aynı mı?", cevap: "Hayır; katalogdaki değer platform (sepet zemini) yüksekliğidir, çalışma yüksekliği bunun yaklaşık 2 metre üzeridir." },
            { soru: "Yanlış sınıf seçilirse ne olur?", cevap: "Erişemeyen veya gereğinden pahalı bir makine sahada zaman kaybettirir; bu yüzden seçim saha ziyareti veya doğru bilgi paylaşımıyla teyit edilerek yapılır." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-12m", "eklemli-platform-20m"]),
    },
    {
        slugTaban: "kiralama-oncesi-zemin-erisim-kontrolu",
        kategori: "Güvenlik",
        baslik: (s) => `${bolgeIlk(s)} Sahalarında Kiralama Öncesi Zemin ve Erişim Kontrolü`,
        ozet: (s) => `Teslimat günü gecikmesini önlemek için ${bolgeIlk(s)} sahasında önceden kontrol edilmesi gereken zemin, geçit ve elektrik hattı maddeleri.`,
        giris: (s) => `${bolgeIlk(s)} bölgesinde bir platform veya forklift talep etmeden önce sahayı gözden geçirmek, teslimat günü yaşanabilecek sürprizleri büyük ölçüde azaltır.`,
        bolumler: (s) => [
            {
                baslik: "Zemin ve geçit ölçüleri",
                paragraflar: [
                    `${bolgeIlk(s)} sahasında aracın makineyi indireceği alanın taşıma kapasitesi, kapı ve geçit genişlikleri önceden ölçülmelidir. Dar geçitlerde daha kompakt bir sınıf gerekebilir; bu bilgi teklif aşamasında paylaşılırsa doğru model önerilir.`,
                    `${s.uzmanlik} işlerinde saha zemini eğimli veya düzensizse, arazi tipi lastikli modeller değerlendirilir; düz beton zeminlerde standart modeller yeterlidir.`,
                ],
            },
            {
                baslik: "Yüksek gerilim hattı ve engeller",
                paragraflar: [
                    "Çalışma noktasına yakın elektrik hattı, boru köprüsü veya düşük tavan varsa, bu bilgiler saha planına önceden not edilir; makine operatörü ve teklif ekibi buna göre güvenli mesafe ve makine sınıfını birlikte belirler.",
                    `${s.hizmetler[1] ?? s.hizmetler[0] ?? s.uzmanlik} kapsamındaki sahalarda bu tür engeller sık görülür; erken bildirim, teslimat günündeki plan değişikliğini önler.`,
                ],
            },
            {
                baslik: "Teslimat günü kontrol listesi",
                paragraflar: [
                    "Araç giriş güzergâhı, indirme alanı ve varsa güvenlik/İSG belgesi talepleri önceden netleştirilir. Belgeli operatör talebi varsa bu bilgi de teslimat öncesinde iletilir.",
                    `${bolgeIlk(s)} sahasında bu adımlar teyit edildikten sonra makine, planlanan gün ve saatte sahaya ulaştırılır.`,
                ],
            },
        ],
        sss: (s) => [
            { soru: "Saha ziyareti şart mı?", cevap: `Çoğu durumda değil; ${bolgeIlk(s)} sahasının fotoğraf ve ölçüleri paylaşıldığında uzaktan da doğru sınıf belirlenebilir, karmaşık sahalarda saha ziyareti önerilir.` },
            { soru: "Elektrik hattına yakın çalışma mümkün mü?", cevap: "Güvenli mesafe kuralları çerçevesinde değerlendirilir; kesin mesafe ve önlem saha bilgisiyle birlikte teyit edilir." },
            { soru: "Teslimat günü zemin uygun çıkmazsa ne olur?", cevap: "Alternatif makine sınıfı veya zemin takviyesi gibi çözümler birlikte değerlendirilir; bu yüzden önceden bilgi paylaşımı önemlidir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["orumcek-platform", "makasli-platform-8m"]),
    },
    {
        slugTaban: "operatorlu-operatorsuz-karar-rehberi",
        kategori: "Karşılaştırma",
        baslik: (s) => `Operatörlü mü Operatörsüz mü? ${bolgeIlk(s)} Bölgesinde Karar Rehberi`,
        ozet: (s) => `${s.uzmanlik} kapsamındaki işlerde operatörlü ve operatörsüz kiralama arasındaki fark, maliyet ve sorumluluk açısından karşılaştırılıyor.`,
        giris: () => `Operatörlü ve operatörsüz kiralama arasındaki tercih, işin süresine, ekibin belge durumuna ve sahanın karmaşıklığına göre değişir.`,
        bolumler: (s) => [
            {
                baslik: "Operatörlü kiralama ne zaman mantıklı?",
                paragraflar: [
                    `${s.uzmanlik} kapsamındaki kısa süreli veya tek seferlik işlerde, ekipte belgeli operatör yoksa operatörlü kiralama tercih edilir. Sorumluluk ve sertifikasyon süreci bu şekilde tedarikçi tarafında kalır.`,
                    "Karmaşık saha koşulları (dar geçit, yüksek gerilim hattı yakını, düzensiz zemin) olan işlerde de deneyimli operatör riski azaltır.",
                ],
            },
            {
                baslik: "Operatörsüz kiralama ne zaman avantajlı?",
                paragraflar: [
                    `${bolgeIlk(s)} bölgesinde uzun süreli ve tekrarlayan işlerde, ekipte SRC/G sınıfı belgeli operatör varsa operatörsüz kiralama günlük maliyeti düşürür ve çalışma saatlerinde esneklik sağlar.`,
                    "Bu seçenekte makinenin periyodik kontrol belgesi ve kullanım kılavuzu teslimatla birlikte paylaşılır.",
                ],
            },
            {
                baslik: "Karma model: ilk gün operatörlü, devamı operatörsüz",
                paragraflar: [
                    "Uzun süreli kiralamalarda ilk gün operatörlü teslimat yapılıp saha ekibine kısa bir bilgilendirme verilmesi, devamının operatörsüz sürdürülmesi yaygın bir uygulamadır.",
                    "Bu model, hem güvenli başlangıç hem de maliyet avantajını bir arada sağlar; tercih teklif aşamasında netleştirilir.",
                ],
            },
        ],
        sss: () => [
            { soru: "Operatörlü kiralamada operatör kime ait olur?", cevap: "Operatör kiralayan firmaya aittir; sorumluluk ve belge süreci bu şekilde tedarikçi tarafında kalır." },
            { soru: "Operatörsüz kiralama için hangi belge gerekir?", cevap: "Kullanıcının SRC/G sınıfı yüksekte çalışma platformu operatör belgesine sahip olması gerekir." },
            { soru: "Karar hangi aşamada verilir?", cevap: "Teklif aşamasında iş süresi, ekip belge durumu ve saha koşulu birlikte değerlendirilerek netleştirilir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["teleskopik-platform-22m", "eklemli-platform-16m"]),
    },
    {
        slugTaban: "kiralama-maliyetini-etkileyen-faktorler",
        kategori: "Maliyet",
        baslik: (s) => `${bolgeIlk(s)} Bölgesinde Platform ve Forklift Kiralama Maliyetini Etkileyen Faktörler`,
        ozet: (s) => `Süre, nakliye mesafesi, operatör ve makine sınıfı — ${bolgeIlk(s)} bölgesinde kiralama bedelini belirleyen ana kalemler.`,
        giris: (s) => `${bolgeIlk(s)} bölgesinde kiralama bedeli tek bir kalemden oluşmaz; süre, nakliye, operatör ve makine sınıfı birlikte fiyatı belirler.`,
        bolumler: (s) => [
            {
                baslik: "Süre ve makine sınıfı",
                paragraflar: [
                    "Günlük, haftalık ve aylık kiralamada birim maliyet süre uzadıkça genellikle avantajlı hale gelir. Makine sınıfı büyüdükçe (daha yüksek erişim, daha ağır kapasite) günlük bedel de artar.",
                    `${s.uzmanlik} kapsamındaki işlerde doğru sınıfı seçmek, gereğinden büyük makine kiralayarak fazla ödeme yapmayı önler.`,
                ],
            },
            {
                baslik: "Nakliye ve operatör",
                paragraflar: [
                    `${bolgeIlk(s)} sahasına olan mesafe ve araç tipi nakliye bedelini belirler; bu kalem genellikle teklifte ayrı satır olarak gösterilir. Operatörlü kiralamada operatör ücreti de günlük bedele eklenir.`,
                    "Hafta sonu veya mesai dışı teslimat talep edilirse bu da ayrı bir kalem olarak değerlendirilebilir.",
                ],
            },
            {
                baslik: "Yazılı teklif neden önemli?",
                paragraflar: [
                    "Tüm bu kalemler (süre, sınıf, nakliye, operatör) yazılı teklifte ayrı ayrı görünür; bu şekilde hangi hizmetin ne kadara mal olduğu net şekilde görülür.",
                    "Kesin bedel, saha bilgisi ve güncel uygunluk kontrolünden sonra yazılı olarak iletilir.",
                ],
            },
        ],
        sss: (s) => [
            { soru: "En ucuz seçenek her zaman doğru mu?", cevap: `Hayır; ${bolgeIlk(s)} sahasının ihtiyacını karşılamayan bir makine, iş gecikmesi nedeniyle daha pahalıya mal olabilir.` },
            { soru: "Nakliye bedeli sabit mi?", cevap: "Hayır, mesafe ve araç tipine göre değişir; teklifte ayrı kalem olarak belirtilir." },
            { soru: "Uzun süreli kiralamada indirim var mı?", cevap: "Genellikle evet; kesin oran talep edilen süreye göre teklifte netleşir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["dizel-forklift-3-5-ton", "makasli-platform-10m"]),
    },
    {
        slugTaban: "forklift-platform-birlikte-kiralama",
        kategori: "Ürün Rehberi",
        baslik: () => `Forklift ve Platform Birlikte Kiralama: Ne Zaman Mantıklı?`,
        ozet: (s) => `${s.uzmanlik} kapsamındaki işlerde forklift ve yükseltici platformun birlikte kullanıldığı tipik senaryolar.`,
        giris: () => `Bazı sahalarda tek makine yetmez; malzeme taşıma ile yüksekte çalışma aynı anda gerekebilir. Bu durumda forklift ve platform birlikte planlanır.`,
        bolumler: (s) => [
            {
                baslik: "Tipik birlikte kullanım senaryoları",
                paragraflar: [
                    `${s.hizmetler[0] ?? s.uzmanlik} kapsamındaki işlerde malzeme forkliftle sahaya taşınırken, montaj veya bakım işi platformla yürütülür. Bu iki makinenin eşzamanlı planlanması saha akışını hızlandırır.`,
                    `${bolgeIlk(s)} bölgesindeki depo ve üretim tesislerinde raf üstü istifleme forkliftle, üst seviye bakım işleri ise platformla yapılır.`,
                ],
            },
            {
                baslik: "Planlama ve saha güvenliği",
                paragraflar: [
                    "İki makinenin aynı sahada çalışması, geçiş güzergâhlarının ve çalışma alanlarının önceden ayrılmasını gerektirir. Bu plan teslimat öncesinde saha ekibiyle netleştirilir.",
                    "Farklı vardiyalarda kullanım da mümkündür; bu durumda tek bir teslimat planıyla iki makine sırayla devreye alınır.",
                ],
            },
            {
                baslik: "Maliyet avantajı",
                paragraflar: [
                    "İki makinenin aynı firmadan, aynı teklif kapsamında kiralanması nakliye ve koordinasyon maliyetini genellikle azaltır.",
                    "Kesin paket fiyatı, her iki makinenin süresi ve saha bilgisiyle birlikte teklif aşamasında belirlenir.",
                ],
            },
        ],
        sss: () => [
            { soru: "Forklift ve platform aynı gün teslim edilebilir mi?", cevap: "Evet, saha planına göre aynı gün veya ayrı günlerde teslimat planlanabilir." },
            { soru: "İki makine için tek fatura mı kesilir?", cevap: "Talebe göre tek veya ayrı fatura düzenlenebilir; bu detay teklif aşamasında netleşir." },
            { soru: "Operatör her iki makine için ayrı mı olur?", cevap: "Evet, her makine kendi operatör belgesine tabidir; operatörlü kiralamada bu ayrı ayrı planlanır." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["elektrikli-forklift-1-3-ton", "agir-hizmet-forklift"]),
    },
    {
        slugTaban: "yukseklikte-calisma-guvenlik-kontrol-listesi",
        kategori: "Güvenlik",
        baslik: () => `Yüksekte Çalışma Güvenlik Kontrol Listesi`,
        ozet: (s) => `${bolgeIlk(s)} sahalarında platform kullanımı öncesi kontrol edilmesi gereken temel güvenlik maddeleri.`,
        giris: () => `Yüksekte çalışma ekipmanı kullanmadan önce birkaç temel kontrol, sahadaki riski büyük ölçüde azaltır.`,
        bolumler: (s) => [
            {
                baslik: "Teslimat öncesi belge kontrolü",
                paragraflar: [
                    "Makinenin güncel periyodik kontrol belgesi ve kullanım kılavuzu teslimatla birlikte paylaşılır; bu belgenin tarihi teslimat öncesinde teyit edilebilir.",
                    `${bolgeIlk(s)} sahasında İSG uzmanı talep ediliyorsa bu bilgi de teklif aşamasında iletilir.`,
                ],
            },
            {
                baslik: "Kullanım öncesi günlük kontrol",
                paragraflar: [
                    "Her kullanım öncesi acil durdurma, sepet kapısı, hidrolik hortum ve lastik/palet kontrolü yapılması önerilir; bu kontrol operatör veya kullanıcı tarafından kısa sürede tamamlanır.",
                    `${s.uzmanlik} kapsamındaki işlerde bu günlük kontrol alışkanlığı, sahadaki arıza kaynaklı duruşları azaltır.`,
                ],
            },
            {
                baslik: "Saha koşuluna göre önlem",
                paragraflar: [
                    "Rüzgâr, zemin eğimi ve yakın elektrik hattı gibi koşullar, çalışma öncesinde ayrıca değerlendirilir; gerekirse çalışma ertelenir veya farklı makine sınıfı önerilir.",
                    "Bu değerlendirme, sahadaki ekip ve operatör arasında kısa bir brifingle netleştirilir.",
                ],
            },
        ],
        sss: () => [
            { soru: "Periyodik kontrol belgesi kaç ayda bir yenilenir?", cevap: "Mevzuata göre değişir; makinenin güncel belge tarihi teslimat öncesinde paylaşılır." },
            { soru: "Rüzgârlı havada platform kullanılabilir mi?", cevap: "Üretici sınırları çerçevesinde değerlendirilir; yüksek rüzgârda çalışma ertelenmesi önerilir." },
            { soru: "Günlük kontrolü kim yapar?", cevap: "Operatörlü kiralamada operatör, operatörsüz kiralamada saha ekibi bu kontrolü üstlenir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-14m", "eklemli-platform-26m"]),
    },
    {
        slugTaban: "kisa-sureli-uzun-sureli-kiralama-karsilastirma",
        kategori: "Karşılaştırma",
        baslik: (s) => `Kısa Süreli mi Uzun Süreli mi? ${bolgeIlk(s)} İşleri İçin Karar Rehberi`,
        ozet: (s) => `${bolgeIlk(s)} bölgesindeki işlerde günlük/haftalık kiralama ile aylık kiralama arasındaki fark ve doğru tercih.`,
        giris: () => `Kiralama süresi tercih edilirken sadece iş takvimi değil, maliyet avantajı da göz önünde bulundurulur.`,
        bolumler: (s) => [
            {
                baslik: "Kısa süreli kiralama ne zaman uygun?",
                paragraflar: [
                    `${s.hizmetler[0] ?? s.uzmanlik} gibi net bir başlangıç ve bitiş tarihi olan işlerde günlük veya haftalık kiralama tercih edilir; bu model esneklik sağlar ve makine iş bitince iade edilir.`,
                    "Beklenmedik arıza veya proje gecikmesi durumunda süre kolayca uzatılabilir.",
                ],
            },
            {
                baslik: "Uzun süreli kiralama ne zaman avantajlı?",
                paragraflar: [
                    `${bolgeIlk(s)} bölgesinde birden fazla ay sürecek, tekrarlayan ihtiyaç duyulan işlerde aylık kiralama birim maliyeti düşürür ve makine sahada sürekli hazır bulunur.`,
                    "Bu modelde periyodik bakım ve arıza durumunda ikame makine süreci de sözleşmeye dahil edilebilir.",
                ],
            },
            {
                baslik: "Karar nasıl verilir?",
                paragraflar: [
                    "İş süresi net değilse, kısa süreli başlayıp ihtiyaç halinde uzatma opsiyonu bırakmak genellikle en esnek yoldur.",
                    "Kesin süre ve fiyat karşılaştırması, teklif aşamasında ihtiyaç bilgisiyle birlikte netleştirilir.",
                ],
            },
        ],
        sss: () => [
            { soru: "Kısa süreli kiralama uzatılabilir mi?", cevap: "Evet, ihtiyaç halinde süre uzatma teklif aşamasında değerlendirilir." },
            { soru: "Uzun süreli kiralamada bakım kime aittir?", cevap: "Periyodik bakım genellikle kiralayan firma tarafından planlanır; detay sözleşmede belirtilir." },
            { soru: "Süre ortasında makine değiştirilebilir mi?", cevap: "İhtiyaç değişirse farklı sınıfa geçiş değerlendirilebilir; bu durum önceden bildirilmelidir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["telehandler-14m", "teleskopik-platform-28m"]),
    },
    {
        slugTaban: "sektorde-sik-yapilan-makine-secim-hatalari",
        kategori: "Şehir & Sektör",
        baslik: (s) => `${bolgeIlk(s)} Sahalarında Sık Yapılan Makine Seçim Hataları`,
        ozet: (s) => `${bolgeIlk(s)} sahalarında sık karşılaşılan yanlış makine seçimi örnekleri ve bunlardan kaçınmanın yolları.`,
        giris: (s) => `${s.uzmanlik} kapsamındaki işlerde makine seçimi genellikle acele ile yapılır; bu da sahada zaman ve maliyet kaybına yol açabilir.`,
        bolumler: (s) => [
            {
                baslik: "Sadece yüksekliğe bakmak",
                paragraflar: [
                    "Yalnızca 'kaç metre' sorusuna odaklanmak, yatay erişim ve kapasite ihtiyacının gözden kaçmasına neden olur. Engelli bir sahada yüksekliği tutan ama erişemeyen bir makine seçmek yaygın bir hatadır.",
                    `${bolgeIlk(s)} sahasında bu hatayı önlemek için çalışma noktasının konumu (tam altı mı, engelin arkası mı) önceden tarif edilmelidir.`,
                ],
            },
            {
                baslik: "Zemin koşulunu göz ardı etmek",
                paragraflar: [
                    `${s.uzmanlik} işlerinde standart lastikli bir makinenin düzensiz veya yumuşak zeminde çalışması, sahada beklenmedik gecikmeye yol açabilir. Zemin tipi teklif öncesinde belirtilmelidir.`,
                    "Arazi tipi modeller bu tür sahalarda daha güvenli bir seçenektir.",
                ],
            },
            {
                baslik: "Kapasiteyi hafife almak",
                paragraflar: [
                    "Sepette birden fazla kişi veya ağır malzemeyle çalışılacaksa, bu bilgi makine seçiminde belirleyicidir; yüksek yük altında maksimum erişim düşer.",
                    "En zorlu senaryo (en yüksek + en uzak + en ağır) baz alınarak doğru sınıf belirlenir.",
                ],
            },
        ],
        sss: (s) => [
            { soru: "Bu hatalardan nasıl kaçınılır?", cevap: `${bolgeIlk(s)} sahasının fotoğrafı ve temel ölçüleri paylaşıldığında, doğru sınıf teklif aşamasında birlikte belirlenir.` },
            { soru: "Yanlış makine seçilirse değiştirilebilir mi?", cevap: "Mümkün olduğunda evet; ancak erken doğru bilgi paylaşımı bu ihtiyacı büyük ölçüde azaltır." },
            { soru: "Saha fotoğrafı yeterli mi, ölçü de gerekir mi?", cevap: "İkisi birlikte en sağlıklı sonucu verir; fotoğraf geometriyi, ölçü ise kesin sınıfı netleştirir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["orumcek-platform-23m", "makasli-platform-18m"]),
    },
    {
        slugTaban: "teklif-oncesi-sorulmasi-gereken-sorular",
        kategori: "Maliyet",
        baslik: () => `Teklif Almadan Önce Sormanız Gereken 7 Soru`,
        ozet: (s) => `${bolgeIlk(s)} bölgesinde platform veya forklift kiralamadan önce netleştirilmesi gereken sorular.`,
        giris: () => `Yazılı teklif almadan önce birkaç soruyu netleştirmek, sonradan çıkabilecek ek maliyet veya gecikmeyi önler.`,
        bolumler: (s) => [
            {
                baslik: "Süre, nakliye ve operatör",
                paragraflar: [
                    "Kiralama süresi net mi, uzatma opsiyonu var mı? Nakliye bedeli fiyata dahil mi, ayrı kalem mi? Operatörlü mü operatörsüz mü kiralanacak? Bu üç soru fiyatın büyük kısmını belirler.",
                    `${bolgeIlk(s)} sahasına teslimat süresi ve saatleri de bu aşamada netleştirilmelidir.`,
                ],
            },
            {
                baslik: "Arıza, belge ve ödeme",
                paragraflar: [
                    "Sahada arıza olursa müdahale süresi ve ikame makine garantisi var mı? Periyodik kontrol belgesi teslimatla birlikte veriliyor mu? Ödeme planı nasıl işliyor?",
                    `${s.uzmanlik} kapsamındaki kurumsal işlerde fatura karşılığı ödeme seçenekleri de bu aşamada sorulabilir.`,
                ],
            },
            {
                baslik: "Erken iade ve iletişim",
                paragraflar: [
                    "İş erken biterse sözleşme nasıl sonlandırılır, ek ücret var mı? Saha ile tedarikçi arasındaki iletişim kanalı (telefon, WhatsApp) net mi?",
                    "Bu sorular netleştikten sonra yazılı teklif talep edilir; kesin bedel ve koşullar bu teklifte görünür.",
                ],
            },
        ],
        sss: () => [
            { soru: "Bu sorular telefonda mı yoksa yazılı mı sorulmalı?", cevap: "Her ikisi de mümkündür; yazılı kayıt tutmak isteyenler için WhatsApp veya e-posta üzerinden teyit önerilir." },
            { soru: "Tüm sorulara aynı anda cevap alınabilir mi?", cevap: "Evet, saha bilgisi paylaşıldığında bu sorulara yazılı teklif içinde topluca cevap verilir." },
            { soru: "Ek soru sorma hakkım var mı?", cevap: "Elbette; teklif öncesi ve sonrasında ek sorular her zaman yanıtlanır." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-12m", "dizel-forklift"]),
    },
    {
        slugTaban: "elektrikli-mi-dizel-mi-model-secimi",
        kategori: "Ürün Rehberi",
        baslik: (s) => `Elektrikli mi Dizel mi? ${bolgeIlk(s)} Sahaları İçin Model Seçimi`,
        ozet: (s) => `${bolgeIlk(s)} bölgesinde iç mekân ve açık saha işlerine göre elektrikli ile dizel makine arasındaki fark.`,
        giris: () => `Elektrikli ve dizel model arasındaki tercih, çalışma ortamına (iç mekân/açık saha) ve gürültü-emisyon hassasiyetine göre belirlenir.`,
        bolumler: (s) => [
            {
                baslik: "Elektrikli modeller ne zaman tercih edilir?",
                paragraflar: [
                    `${bolgeIlk(s)} bölgesindeki AVM, fabrika içi ve hastane gibi kapalı alanlarda elektrikli modeller sıfır emisyon, düşük gürültü ve iz bırakmayan lastikleriyle tercih edilir.`,
                    `${s.uzmanlik} kapsamındaki iç mekân işlerinde bu özellikler, işletmenin normal faaliyetini kesintiye uğratmadan çalışmayı mümkün kılar.`,
                ],
            },
            {
                baslik: "Dizel modeller ne zaman tercih edilir?",
                paragraflar: [
                    "Açık saha, şantiye ve çelik montaj gibi işlerde dizel modellerin 4x4 çekiş gücü ve yüksek erişim kapasitesi öne çıkar; düzensiz zeminde daha güçlü performans sağlar.",
                    `${bolgeIlk(s)} bölgesindeki dış cephe ve altyapı işlerinde dizel modeller genellikle standart tercihtir.`,
                ],
            },
            {
                baslik: "Karma kullanım gereken sahalar",
                paragraflar: [
                    "Hem iç hem dış mekân işi olan projelerde, iş bölümüne göre iki farklı model bir arada planlanabilir; bu durum teklif aşamasında birlikte değerlendirilir.",
                    "Şarj süresi ve saha elektrik altyapısı, elektrikli model tercih edilecekse önceden kontrol edilmelidir.",
                ],
            },
        ],
        sss: (s) => [
            { soru: "Elektrikli modelin şarj süresi ne kadar?", cevap: "Modele göre değişir; tam şarj süresi ve saha elektrik altyapısı teklif aşamasında birlikte değerlendirilir." },
            { soru: "Dizel model iç mekânda kullanılabilir mi?", cevap: "Önerilmez; emisyon ve gürültü nedeniyle kapalı alanlarda elektrikli modeller tercih edilir." },
            { soru: `${bolgeIlk(s)} sahasında hangi model daha yaygın kullanılıyor?`, cevap: "Saha tipine göre değişir; iç mekân işlerinde elektrikli, açık saha işlerinde dizel model daha sık tercih edilir." },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["elektrikli-forklift", "eklemli-platform-16m"]),
    },
];

function site_h1(s: SiteIcerik) {
    return s.h1;
}

export function paylasilanBlogYazilari(site: SiteIcerik): BlogYazisi[] {
    return SABLONLAR.map((sablon, i) => {
        const gorselIndex = i % GORSELLER.length;
        return {
            slug: sablon.slugTaban,
            kategori: sablon.kategori,
            baslik: sablon.baslik(site),
            ozet: sablon.ozet(site),
            gorsel: GORSELLER[gorselIndex],
            gorselAlt: GORSEL_ALT[gorselIndex],
            tarih: "2026-08-01",
            okuma: 5,
            giris: sablon.giris(site),
            bolumler: sablon.bolumler(site),
            sss: sablon.sss(site),
            ilgiliUrun: sablon.ilgiliUrun(site),
        };
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~700 canlı sayfa üretir (85+ domain × sayfa/domain).
// Buraya yazacağınız TEK BİR SABİT CÜMLE, o kadar sayfada birebir tekrarlanır.
//
//   ❌ cevap: "Her iki seçenek de sunulur."          → 85 domainde aynı
//   ❌ giris: `${bolge} bölgesinde hizmet veriyoruz.` → mad-lib, hâlâ kopya
//   ✅ varyantSec(site, `tuz-${slug}`, [4-6 YAPISAL OLARAK FARKLI varyant])
//   ✅ kur(site, "tuz", [5 açılış], [5 gövde], [5 kapanış])  ← yüksek hacimde
//
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik   (eşik: örtüşme < %20)
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
// Paylaşılan tema kullanan domainler için parametrik blog üretimi.
// Amaç: bespoke temalardaki (blog.ts) elle yazılmış 40+ yazı yerine, her domain'in
// kendi SiteIcerik verisinden (bolge/uzmanlik/hizmetler/h1) beslenen 10 konu — ama
// her konunun 3 FARKLI YAZIM VARYANTI var (başlık, özet, giriş, bölüm başlıkları,
// ilk paragraflar, SSS); hangi varyant kullanılacağı `site.host`'tan deterministik
// olarak seçilir (secim()). Böylece iki farklı domain aynı konuyu işlese bile cümle
// kalıpları da farklılaşır — yalnızca isim/bölge değişen "mad-lib" kopya içerik
// üretilmez. Aynı domain her build'de aynı varyantı alır (deterministik).
import type { SiteIcerik } from "./siteler";
import { cesitle } from "./varyant";
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

// Host + tuz'dan deterministik bir dizi indeksi üretir (basit string hash).
// Aynı site her zaman aynı varyantı alır; farklı tuz değeri (slug + alan adı)
// aynı site içinde bile farklı alanların birbirinden bağımsız varyant almasını sağlar.
function secim<T>(site: SiteIcerik, tuz: string, dizi: readonly T[]): T {
    let h = 0;
    const s = site.host + "::" + tuz;
    for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return dizi[h % dizi.length];
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
    // ------------------------------------------------------------ 1: Doğru sınıf seçimi
    {
        slugTaban: "dogru-platform-sinifi-secimi",
        kategori: "Ürün Rehberi",
        baslik: (s) => secim(s, "b1-baslik", [
            `${bolgeIlk(s)} Bölgesinde Doğru Platform Sınıfını Nasıl Seçersiniz?`,
            `Makaslı mı, Eklemli mi? ${bolgeIlk(s)} Sahaları İçin Platform Sınıfı Rehberi`,
            `${bolgeIlk(s)}'de Hangi Platform Sınıfı İhtiyacınıza Uyar?`,
        ]),
        ozet: (s) => secim(s, "b1-ozet", [
            `${bolgeIlk(s)} sahalarında makaslı, eklemli ve teleskopik platform arasında karar verirken bakılması gereken üç ölçüt: yükseklik, yatay erişim ve zemin.`,
            `Yanlış makine sınıfı sahada zaman kaybettirir. ${bolgeIlk(s)} bölgesi için erişim geometrisi, zemin ve kapasiteye göre doğru platform sınıfını nasıl belirleyeceğinizi anlatıyoruz.`,
            `${s.uzmanlik} kapsamındaki işlerde makine sınıfı seçimi teklif fiyatını da belirler — ${bolgeIlk(s)} sahaları için pratik bir karar çerçevesi.`,
        ]),
        giris: (s) => secim(s, "b1-giris", [
            `${site_h1(s)} bölgesinde her saha aynı ekipmanı istemez. Doğru sınıfı seçmek, çalışma noktasının tam altına makine koyabilip koyamadığınızla başlar; devamı yükseklik ve zemin koşuluna bağlıdır.`,
            `Platform kiralarken ilk soru genelde "kaç metre" olur, ama tek başına yükseklik yanıltıcıdır. ${bolgeIlk(s)} sahalarında doğru sınıfa ulaşmak için erişim geometrisi ve zemin bilgisi de gerekir.`,
            `${bolgeIlk(s)} bölgesinde iş bittiğinde "yanlış makine geldi" demek istemiyorsanız, teklif öncesi birkaç noktayı netleştirmek işe yarar. Aşağıda bu noktaları sırayla ele alıyoruz.`,
        ]),
        bolumler: (s) => [
            {
                baslik: secim(s, "b1-b1-baslik", ["Önce erişim geometrisini tanımlayın", "İlk adım: çalışma noktasının konumu", "Erişim şekli sınıfı belirler"]),
                paragraflar: [
                    secim(s, "b1-b1-p1", [
                        `${bolgeIlk(s)} sahasında çalışma noktasının tam altına makine koyabiliyorsanız, geniş sepetli makaslı platform genellikle en ekonomik seçimdir. Aradaki bir engeli aşmanız gerekiyorsa (parapet, boru hattı, cephe girintisi) eklemli platform devreye girer; engel yok ama nokta uzaksa teleskopik platform yatay erişimde öne çıkar.`,
                        `Öncelikle şu soruyu yanıtlayın: makineyi çalışma noktasının tam altına koyabiliyor musunuz? ${bolgeIlk(s)} sahasında cevap "evet" ise makaslı platform genelde yeterlidir. "Hayır, bir engel var" ise eklemli, "hayır, nokta uzakta ve engel yok" ise teleskopik platform devreye girer.`,
                        `${bolgeIlk(s)} sahasındaki üç tipik durum makine sınıfını belirler: dikey ve engelsiz erişim → makaslı platform; engel aşma ihtiyacı → eklemli platform; uzak mesafeli yatay erişim → teleskopik platform. Bu ayrım fiyat teklifinden önce netleştirilmelidir.`,
                    ]),
                    `${s.uzmanlik} kapsamındaki işlerde bu üç sınıf arasındaki fark çoğunlukla saha ziyaretiyle netleşir; katalog değerleri başlangıç noktasıdır, kesin model günün saha koşuluna göre teyit edilir.`,
                ],
            },
            {
                baslik: secim(s, "b1-b2-baslik", ["Zemin ve erişim koşulunu teyit edin", "İkinci adım: zemin tipi", "Zemin, hangi modelin geleceğini belirler"]),
                paragraflar: [
                    secim(s, "b1-b2-p1", [
                        `${bolgeIlk(s)} bölgesindeki sahalarda zemin taşıma kapasitesi, kapı/geçit genişliği ve tavan yüksekliği (iç mekân işlerinde) makine seçimini doğrudan etkiler. Arazi tipi lastikli modeller düzensiz zeminde, elektrikli modeller ise iç mekânda ve gürültü/emisyon hassasiyeti olan alanlarda tercih edilir.`,
                        `Zemin sağlam beton mu, düzensiz açık saha mı — ${bolgeIlk(s)} sahasında bu ayrım model seçimini doğrudan değiştirir. Düz beton zeminde standart elektrikli modeller yeterlidir; düzensiz veya eğimli arazide dört tekerlekten çekişli modeller tercih edilir.`,
                        `Kapı genişliği, geçit ölçüsü ve zemin taşıma kapasitesi — ${bolgeIlk(s)} sahasına gönderilecek makinenin sınıfını bu üç veri belirler. Bu ölçüler teklif öncesi paylaşılırsa doğru model ilk seferde gelir.`,
                    ]),
                    `${s.hizmetler[0] ?? s.uzmanlik} gibi işlerde saha girişi dar ise, makine ölçüleri teklif öncesinde saha planıyla karşılaştırılmalıdır; aksi halde teslimat günü gecikme riski doğar.`,
                ],
            },
            {
                baslik: secim(s, "b1-b3-baslik", ["Kapasiteyi göz ardı etmeyin", "Üçüncü kriter: sepet kapasitesi", "Yük ve kişi sayısı da hesaba katılmalı"]),
                paragraflar: [
                    secim(s, "b1-b3-p1", [
                        "Sepette kaç kişi ve hangi malzeme ağırlığıyla çalışılacağı, sadece yükseklik kadar önemli bir kriterdir. Yüksek yük altında maksimum yatay erişim genellikle düşer; bu yüzden en zorlu nokta (en yüksek + en uzak + en ağır) baz alınarak sınıf seçilir.",
                        "Yükseklik ve erişim doğru seçilse bile, sepete kaç kişinin bineceği ve hangi malzemenin taşınacağı göz ardı edilirse makine yetersiz kalabilir. Kapasite arttıkça yatay erişim genelde azalır — bu dengeyi teklif aşamasında birlikte kontrol etmek gerekir.",
                        "Son kriter kapasitedir: sepette çalışacak kişi sayısı ve taşınacak malzeme ağırlığı. En zorlu senaryo (en yüksek nokta + en uzak erişim + en ağır yük) baz alınarak doğru sınıf netleştirilir, aksi halde saha ortasında makine yetersiz kalabilir.",
                    ]),
                    "Seçilen modelin çalışma diyagramı, kapasite ve erişim değerlerini teyit eder; kesin model ve fiyat yazılı teklifte netleşir.",
                ],
            },
        ],
        sss: (s) => [
            { soru: secim(s, "b1-sss1-s", [`${bolgeIlk(s)} bölgesinde hangi platform sınıfı daha çok tercih ediliyor?`, `${bolgeIlk(s)}'de en sık talep edilen makine sınıfı hangisi?`, `Hangi sınıf ${bolgeIlk(s)} sahalarında öne çıkıyor?`]), cevap: `Sahanın erişim geometrisine göre değişir; ${s.uzmanlik} kapsamındaki işlerde genellikle makaslı ve eklemli platform öne çıkar, kesin sınıf saha bilgisiyle teyit edilir.` },
            { soru: "Katalog yüksekliği ile çalışma yüksekliği aynı mı?", cevap: cesitle(s, "paylas-1", "Hayır; katalogdaki değer platform (sepet zemini) yüksekliğidir, çalışma yüksekliği bunun yaklaşık 2 metre üzeridir.") },
            { soru: "Yanlış sınıf seçilirse ne olur?", cevap: cesitle(s, "paylas-2", "Erişemeyen veya gereğinden pahalı bir makine sahada zaman kaybettirir; bu yüzden seçim saha ziyareti veya doğru bilgi paylaşımıyla teyit edilerek yapılır.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-12m", "eklemli-platform-20m"]),
    },
    // ------------------------------------------------------------ 2: Zemin/erişim kontrolü
    {
        slugTaban: "kiralama-oncesi-zemin-erisim-kontrolu",
        kategori: "Güvenlik",
        baslik: (s) => secim(s, "b2-baslik", [
            `${bolgeIlk(s)} Sahalarında Kiralama Öncesi Zemin ve Erişim Kontrolü`,
            `Teslimattan Önce: ${bolgeIlk(s)} Sahası İçin Zemin ve Geçit Kontrol Listesi`,
            `${bolgeIlk(s)}'de Makine Gelmeden Önce Nelere Bakılmalı?`,
        ]),
        ozet: (s) => secim(s, "b2-ozet", [
            `Teslimat günü gecikmesini önlemek için ${bolgeIlk(s)} sahasında önceden kontrol edilmesi gereken zemin, geçit ve elektrik hattı maddeleri.`,
            `${bolgeIlk(s)} sahasına makine gelmeden önce yapılan kısa bir kontrol, teslimat günündeki sürprizlerin çoğunu ortadan kaldırır.`,
            `Zemin, geçit genişliği ve saha engelleri — ${bolgeIlk(s)} bölgesinde kiralama öncesi kontrol edilmesi gereken maddeler.`,
        ]),
        giris: (s) => secim(s, "b2-giris", [
            `${bolgeIlk(s)} bölgesinde bir platform veya forklift talep etmeden önce sahayı gözden geçirmek, teslimat günü yaşanabilecek sürprizleri büyük ölçüde azaltır.`,
            `Makine sahaya geldiğinde "buradan geçmiyor" ya da "zemin taşımıyor" demek istemiyorsanız, ${bolgeIlk(s)} sahasında birkaç noktayı önceden kontrol etmek gerekir.`,
            `${bolgeIlk(s)} sahasındaki teslimatların büyük kısmı sorunsuz geçer; sorun çıkan az sayıdaki vakada neden genelde aynıdır — zemin veya geçit ölçüsü önceden kontrol edilmemiştir.`,
        ]),
        bolumler: (s) => [
            {
                baslik: secim(s, "b2-b1-baslik", ["Zemin ve geçit ölçüleri", "İlk kontrol: zemin ve geçit", "Araç ve makine için yer var mı?"]),
                paragraflar: [
                    secim(s, "b2-b1-p1", [
                        `${bolgeIlk(s)} sahasında aracın makineyi indireceği alanın taşıma kapasitesi, kapı ve geçit genişlikleri önceden ölçülmelidir. Dar geçitlerde daha kompakt bir sınıf gerekebilir; bu bilgi teklif aşamasında paylaşılırsa doğru model önerilir.`,
                        `Öncelikle indirme alanının zemin taşıma kapasitesini, sonra kapı/geçit genişliğini kontrol edin. ${bolgeIlk(s)} sahasında bu ikisinden biri dar çıkarsa daha kompakt bir makine sınıfına geçilir — bu bilgi ne kadar erken paylaşılırsa o kadar iyi.`,
                        `${bolgeIlk(s)} sahasına makine indirilecek alanın zemini taşıyor mu, geçitler yeterince geniş mi — bu iki soru teslimattan önce yanıtlanmalı. Aksi halde sahada makine değişikliği gerekebilir.`,
                    ]),
                    `${s.uzmanlik} işlerinde saha zemini eğimli veya düzensizse, arazi tipi lastikli modeller değerlendirilir; düz beton zeminlerde standart modeller yeterlidir.`,
                ],
            },
            {
                baslik: secim(s, "b2-b2-baslik", ["Yüksek gerilim hattı ve engeller", "İkinci kontrol: saha engelleri", "Elektrik hattı ve tavan yüksekliği"]),
                paragraflar: [
                    secim(s, "b2-b2-p1", [
                        "Çalışma noktasına yakın elektrik hattı, boru köprüsü veya düşük tavan varsa, bu bilgiler saha planına önceden not edilir; makine operatörü ve teklif ekibi buna göre güvenli mesafe ve makine sınıfını birlikte belirler.",
                        "Elektrik hattı, boru köprüsü, düşük tavan — çalışma noktasının yakınında bu tür bir engel varsa önceden bildirilmelidir. Güvenli mesafe ve doğru makine sınıfı bu bilgiye göre birlikte belirlenir.",
                        "Saha planında elektrik hattı veya alçak tavan gibi bir engel işaretli değilse, teslimat günü sürpriz olarak karşınıza çıkabilir. Bu tür engellerin önceden bildirilmesi, güvenli mesafe ve makine sınıfının doğru belirlenmesini sağlar.",
                    ]),
                    `${s.hizmetler[1] ?? s.hizmetler[0] ?? s.uzmanlik} kapsamındaki sahalarda bu tür engeller sık görülür; erken bildirim, teslimat günündeki plan değişikliğini önler.`,
                ],
            },
            {
                baslik: secim(s, "b2-b3-baslik", ["Teslimat günü kontrol listesi", "Son adım: teslimat günü hazırlığı", "Araç güzergâhı ve belge talepleri"]),
                paragraflar: [
                    "Araç giriş güzergâhı, indirme alanı ve varsa güvenlik/İSG belgesi talepleri önceden netleştirilir. Belgeli operatör talebi varsa bu bilgi de teslimat öncesinde iletilir.",
                    `${bolgeIlk(s)} sahasında bu adımlar teyit edildikten sonra makine, planlanan gün ve saatte sahaya ulaştırılır.`,
                ],
            },
        ],
        sss: (s) => [
            { soru: "Saha ziyareti şart mı?", cevap: `Çoğu durumda değil; ${bolgeIlk(s)} sahasının fotoğraf ve ölçüleri paylaşıldığında uzaktan da doğru sınıf belirlenebilir, karmaşık sahalarda saha ziyareti önerilir.` },
            { soru: "Elektrik hattına yakın çalışma mümkün mü?", cevap: cesitle(s, "paylas-3", "Güvenli mesafe kuralları çerçevesinde değerlendirilir; kesin mesafe ve önlem saha bilgisiyle birlikte teyit edilir.") },
            { soru: "Teslimat günü zemin uygun çıkmazsa ne olur?", cevap: cesitle(s, "paylas-4", "Alternatif makine sınıfı veya zemin takviyesi gibi çözümler birlikte değerlendirilir; bu yüzden önceden bilgi paylaşımı önemlidir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["orumcek-platform", "makasli-platform-8m"]),
    },
    // ------------------------------------------------------------ 3: Operatörlü/operatörsüz
    {
        slugTaban: "operatorlu-operatorsuz-karar-rehberi",
        kategori: "Karşılaştırma",
        baslik: (s) => secim(s, "b3-baslik", [
            `Operatörlü mü Operatörsüz mü? ${bolgeIlk(s)} Bölgesinde Karar Rehberi`,
            `${bolgeIlk(s)}'de Operatör Kararı: Kendiniz mi Kullanacaksınız, Operatör mü Gelecek?`,
            `Operatör Dahil mi Olmalı? ${bolgeIlk(s)} Sahaları İçin Kısa Rehber`,
        ]),
        ozet: (s) => secim(s, "b3-ozet", [
            `${s.uzmanlik} kapsamındaki işlerde operatörlü ve operatörsüz kiralama arasındaki fark, maliyet ve sorumluluk açısından karşılaştırılıyor.`,
            `Operatörlü mü ucuz operatörsüz mü — asıl soru bu değil. ${bolgeIlk(s)} sahaları için doğru kararı belge durumu ve iş süresi belirler.`,
            `${bolgeIlk(s)} bölgesinde operatör kararını neyin belirlediğini, hangi durumda hangi seçeneğin mantıklı olduğunu anlatıyoruz.`,
        ]),
        giris: (s) => secim(s, "b3-giris", [
            `Operatörlü ve operatörsüz kiralama arasındaki tercih, işin süresine, ekibin belge durumuna ve sahanın karmaşıklığına göre değişir.`,
            `${bolgeIlk(s)} sahasında bu kararı vermeden önce sorulması gereken tek soru var: ekipte SRC/G belgeli biri var mı? Cevaba göre yol ayrılır.`,
            `Operatör dahil mi olmalı, yoksa ekip kendi mi kullanmalı? ${bolgeIlk(s)} bölgesindeki işlerde bu kararı üç faktör belirler: süre, belge durumu, saha karmaşıklığı.`,
        ]),
        bolumler: (s) => [
            {
                baslik: secim(s, "b3-b1-baslik", ["Operatörlü kiralama ne zaman mantıklı?", "Operatör dahil kiralamanın avantajı", "Kısa işlerde operatörlü tercih"]),
                paragraflar: [
                    secim(s, "b3-b1-p1", [
                        `${s.uzmanlik} kapsamındaki kısa süreli veya tek seferlik işlerde, ekipte belgeli operatör yoksa operatörlü kiralama tercih edilir. Sorumluluk ve sertifikasyon süreci bu şekilde tedarikçi tarafında kalır.`,
                        `Ekipte SRC/G belgeli operatör yoksa, özellikle kısa süreli işlerde operatörlü kiralama en pratik yoldur. Sertifikasyon ve sorumluluk yükü bu seçenekte tedarikçi tarafında kalır.`,
                        `Tek seferlik bir iş için personel belgelendirmek genelde mantıklı değildir; bu durumda operatörlü kiralama tercih edilir ve sorumluluk tedarikçide kalır.`,
                    ]),
                    "Karmaşık saha koşulları (dar geçit, yüksek gerilim hattı yakını, düzensiz zemin) olan işlerde de deneyimli operatör riski azaltır.",
                ],
            },
            {
                baslik: secim(s, "b3-b2-baslik", ["Operatörsüz kiralama ne zaman avantajlı?", "Kendi operatörünüz varsa", "Uzun işlerde operatörsüz avantajı"]),
                paragraflar: [
                    secim(s, "b3-b2-p1", [
                        `${bolgeIlk(s)} bölgesinde uzun süreli ve tekrarlayan işlerde, ekipte SRC/G sınıfı belgeli operatör varsa operatörsüz kiralama günlük maliyeti düşürür ve çalışma saatlerinde esneklik sağlar.`,
                        `Ekipte belgeli operatör varsa ve iş uzun sürecekse operatörsüz kiralama genelde daha ekonomiktir; ayrıca çalışma saatleri konusunda tam esneklik sağlar.`,
                        `Tekrarlayan, uzun süreli işlerde ve ekipte belgeli personel varken operatörsüz kiralama günlük maliyeti aşağı çeker — ${bolgeIlk(s)} sahalarında bu model sıkça tercih edilir.`,
                    ]),
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
        sss: (s) => [
            { soru: "Operatörlü kiralamada operatör kime ait olur?", cevap: cesitle(s, "paylas-5", "Operatör kiralayan firmaya aittir; sorumluluk ve belge süreci bu şekilde tedarikçi tarafında kalır.") },
            { soru: "Operatörsüz kiralama için hangi belge gerekir?", cevap: cesitle(s, "paylas-6", "Kullanıcının SRC/G sınıfı yüksekte çalışma platformu operatör belgesine sahip olması gerekir.") },
            { soru: "Karar hangi aşamada verilir?", cevap: cesitle(s, "paylas-7", "Teklif aşamasında iş süresi, ekip belge durumu ve saha koşulu birlikte değerlendirilerek netleştirilir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["teleskopik-platform-22m", "eklemli-platform-16m"]),
    },
    // ------------------------------------------------------------ 4: Maliyet faktörleri
    {
        slugTaban: "kiralama-maliyetini-etkileyen-faktorler",
        kategori: "Maliyet",
        baslik: (s) => secim(s, "b4-baslik", [
            `${bolgeIlk(s)} Bölgesinde Platform ve Forklift Kiralama Maliyetini Etkileyen Faktörler`,
            `${bolgeIlk(s)}'de Kiralama Bedeli Neye Göre Değişir?`,
            `Fiyatı Belirleyen 4 Kalem: ${bolgeIlk(s)} İçin Maliyet Rehberi`,
        ]),
        ozet: (s) => secim(s, "b4-ozet", [
            `Süre, nakliye mesafesi, operatör ve makine sınıfı — ${bolgeIlk(s)} bölgesinde kiralama bedelini belirleyen ana kalemler.`,
            `${bolgeIlk(s)} sahasında verilen bir teklifin arkasında dört kalem vardır; bunların ne olduğunu ve nasıl değiştiğini anlatıyoruz.`,
            `"Ne kadar tutar" sorusunun tek bir cevabı yok. ${bolgeIlk(s)} bölgesi için fiyatı oluşturan kalemleri tek tek açıklıyoruz.`,
        ]),
        giris: (s) => secim(s, "b4-giris", [
            `${bolgeIlk(s)} bölgesinde kiralama bedeli tek bir kalemden oluşmaz; süre, nakliye, operatör ve makine sınıfı birlikte fiyatı belirler.`,
            `"Bu makine ne kadar" sorusunun kısa bir cevabı yoktur; ${bolgeIlk(s)} sahası için fiyat dört farklı kalemin toplamıdır.`,
            `${bolgeIlk(s)} sahasına verilen her teklif aynı dört kalemden oluşur: süre, nakliye, operatör, makine sınıfı. Bu kalemleri anlamak, teklifleri karşılaştırmayı kolaylaştırır.`,
        ]),
        bolumler: (s) => [
            {
                baslik: secim(s, "b4-b1-baslik", ["Süre ve makine sınıfı", "İlk kalem: süre ve sınıf", "Ne kadar süre, hangi sınıf"]),
                paragraflar: [
                    secim(s, "b4-b1-p1", [
                        "Günlük, haftalık ve aylık kiralamada birim maliyet süre uzadıkça genellikle avantajlı hale gelir. Makine sınıfı büyüdükçe (daha yüksek erişim, daha ağır kapasite) günlük bedel de artar.",
                        "Kiralama süresi uzadıkça günlük birim fiyat genellikle düşer; buna karşılık makine sınıfı büyüdükçe (daha yüksek erişim, daha ağır kapasite) günlük bedel yükselir.",
                        "İki değişken burada belirleyicidir: ne kadar süre kiralanacak ve hangi makine sınıfı seçilecek. Süre uzadıkça birim maliyet iyileşir, sınıf büyüdükçe günlük bedel artar.",
                    ]),
                    `${s.uzmanlik} kapsamındaki işlerde doğru sınıfı seçmek, gereğinden büyük makine kiralayarak fazla ödeme yapmayı önler.`,
                ],
            },
            {
                baslik: secim(s, "b4-b2-baslik", ["Nakliye ve operatör", "İkinci kalem: nakliye ve operatör ücreti", "Sahaya ulaşım maliyeti"]),
                paragraflar: [
                    secim(s, "b4-b2-p1", [
                        `${bolgeIlk(s)} sahasına olan mesafe ve araç tipi nakliye bedelini belirler; bu kalem genellikle teklifte ayrı satır olarak gösterilir. Operatörlü kiralamada operatör ücreti de günlük bedele eklenir.`,
                        `Nakliye bedeli mesafeye ve kullanılan araç tipine göre değişir; ${bolgeIlk(s)} sahası için bu kalem teklifte ayrı satırda gösterilir. Operatör talep edilirse günlük bedele ayrıca eklenir.`,
                        `${bolgeIlk(s)} sahasına makinenin ulaştırılması ayrı bir kalemdir — mesafe ve araç tipine göre değişir. Operatörlü kiralama tercih edilirse operatör ücreti bu kaleme eklenir.`,
                    ]),
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
            { soru: "Nakliye bedeli sabit mi?", cevap: cesitle(s, "paylas-8", "Hayır, mesafe ve araç tipine göre değişir; teklifte ayrı kalem olarak belirtilir.") },
            { soru: "Uzun süreli kiralamada indirim var mı?", cevap: cesitle(s, "paylas-9", "Genellikle evet; kesin oran talep edilen süreye göre teklifte netleşir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["dizel-forklift-3-5-ton", "makasli-platform-10m"]),
    },
    // ------------------------------------------------------------ 5: Forklift+platform birlikte
    {
        slugTaban: "forklift-platform-birlikte-kiralama",
        kategori: "Ürün Rehberi",
        baslik: (s) => secim(s, "b5-baslik", [
            `Forklift ve Platform Birlikte Kiralama: Ne Zaman Mantıklı?`,
            `${bolgeIlk(s)} Sahalarında Forklift + Platform İkilisi Ne Zaman Gerekir?`,
            `Tek Makine Yetmediğinde: ${bolgeIlk(s)} İçin Forklift-Platform Birlikte Planlama`,
        ]),
        ozet: (s) => secim(s, "b5-ozet", [
            `${s.uzmanlik} kapsamındaki işlerde forklift ve yükseltici platformun birlikte kullanıldığı tipik senaryolar.`,
            `Malzeme taşıma ile yüksekte çalışma aynı sahada gerektiğinde forklift ve platformu birlikte planlamanın avantajları.`,
            `${bolgeIlk(s)} bölgesinde iki makinenin bir arada çalıştığı sahalar için pratik bir planlama rehberi.`,
        ]),
        giris: (s) => secim(s, "b5-giris", [
            `Bazı sahalarda tek makine yetmez; malzeme taşıma ile yüksekte çalışma aynı anda gerekebilir. Bu durumda forklift ve platform birlikte planlanır.`,
            `${bolgeIlk(s)} sahasında bazen tek makine yeterli olmaz — biri malzemeyi taşırken diğeri yükseklikte işi yürütür. Bu iki ihtiyacı birlikte planlamak zaman kazandırır.`,
            `Forklift malzemeyi getirir, platform yükseklikte işi bitirir. ${bolgeIlk(s)} bölgesindeki büyük sahalarda bu iki makinenin birlikte planlanması yaygındır.`,
        ]),
        bolumler: (s) => [
            {
                baslik: secim(s, "b5-b1-baslik", ["Tipik birlikte kullanım senaryoları", "Hangi işlerde ikisi birden gerekir?", "İki makinenin bir arada çalıştığı sahalar"]),
                paragraflar: [
                    secim(s, "b5-b1-p1", [
                        `${s.hizmetler[0] ?? s.uzmanlik} kapsamındaki işlerde malzeme forkliftle sahaya taşınırken, montaj veya bakım işi platformla yürütülür. Bu iki makinenin eşzamanlı planlanması saha akışını hızlandırır.`,
                        `Malzeme forkliftle taşınır, montaj veya bakım işi platformla yapılır — ${s.hizmetler[0] ?? s.uzmanlik} kapsamındaki işlerde bu ikili sık görülür. Eşzamanlı planlama saha akışını hızlandırır.`,
                        `${bolgeIlk(s)} sahasında sık görülen bir senaryo: forklift malzemeyi indirir/istifler, platform ise yüksekteki montaj veya bakımı üstlenir. İki makinenin birlikte planlanması işi hızlandırır.`,
                    ]),
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
        sss: (s) => [
            { soru: "Forklift ve platform aynı gün teslim edilebilir mi?", cevap: cesitle(s, "paylas-10", "Evet, saha planına göre aynı gün veya ayrı günlerde teslimat planlanabilir.") },
            { soru: "İki makine için tek fatura mı kesilir?", cevap: cesitle(s, "paylas-11", "Talebe göre tek veya ayrı fatura düzenlenebilir; bu detay teklif aşamasında netleşir.") },
            { soru: "Operatör her iki makine için ayrı mı olur?", cevap: cesitle(s, "paylas-12", "Evet, her makine kendi operatör belgesine tabidir; operatörlü kiralamada bu ayrı ayrı planlanır.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["elektrikli-forklift-1-3-ton", "agir-hizmet-forklift"]),
    },
    // ------------------------------------------------------------ 6: Güvenlik kontrol listesi
    {
        slugTaban: "yukseklikte-calisma-guvenlik-kontrol-listesi",
        kategori: "Güvenlik",
        baslik: (s) => secim(s, "b6-baslik", [
            `Yüksekte Çalışma Güvenlik Kontrol Listesi`,
            `${bolgeIlk(s)} Sahalarında Platform Kullanmadan Önce 3 Güvenlik Kontrolü`,
            `Sahaya Çıkmadan Önce: Yüksekte Çalışma Güvenlik Rehberi`,
        ]),
        ozet: (s) => secim(s, "b6-ozet", [
            `${bolgeIlk(s)} sahalarında platform kullanımı öncesi kontrol edilmesi gereken temel güvenlik maddeleri.`,
            `Kısa bir kontrol listesi, ${bolgeIlk(s)} sahasında yüksekte çalışma riskini büyük ölçüde azaltır.`,
            `Belge, günlük kontrol ve saha koşulu — ${bolgeIlk(s)} bölgesinde platform kullanımından önce bakılması gereken üç başlık.`,
        ]),
        giris: (s) => secim(s, "b6-giris", [
            `Yüksekte çalışma ekipmanı kullanmadan önce birkaç temel kontrol, sahadaki riski büyük ölçüde azaltır.`,
            `${bolgeIlk(s)} sahasında platform kullanmadan önce yapılan birkaç dakikalık kontrol, olası bir kazayı önlemenin en pratik yoludur.`,
            `Güvenlik burada tek bir adım değil, üç aşamalı bir kontroldür: belge, günlük kontrol, saha koşulu. ${bolgeIlk(s)} sahaları için bu üçünü sırayla ele alıyoruz.`,
        ]),
        bolumler: (s) => [
            {
                baslik: "Teslimat öncesi belge kontrolü",
                paragraflar: [
                    "Makinenin güncel periyodik kontrol belgesi ve kullanım kılavuzu teslimatla birlikte paylaşılır; bu belgenin tarihi teslimat öncesinde teyit edilebilir.",
                    `${bolgeIlk(s)} sahasında İSG uzmanı talep ediliyorsa bu bilgi de teklif aşamasında iletilir.`,
                ],
            },
            {
                baslik: secim(s, "b6-b2-baslik", ["Kullanım öncesi günlük kontrol", "Her kullanımdan önce yapılması gereken", "Günlük kısa kontrol alışkanlığı"]),
                paragraflar: [
                    secim(s, "b6-b2-p1", [
                        "Her kullanım öncesi acil durdurma, sepet kapısı, hidrolik hortum ve lastik/palet kontrolü yapılması önerilir; bu kontrol operatör veya kullanıcı tarafından kısa sürede tamamlanır.",
                        "Acil durdurma düğmesi, sepet kapısı, hidrolik hortumlar, lastik/palet durumu — her kullanımdan önce bu dört nokta kısa sürede kontrol edilmelidir.",
                        "Makineyi her kullanmaya başlamadan önce birkaç dakikalık bir tur atmak yeterlidir: acil durdurma çalışıyor mu, sepet kapısı sağlam mı, hortumlarda sızıntı var mı, lastik/palet durumu normal mi.",
                    ]),
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
        sss: (s) => [
            { soru: "Periyodik kontrol belgesi kaç ayda bir yenilenir?", cevap: cesitle(s, "paylas-13", "Mevzuata göre değişir; makinenin güncel belge tarihi teslimat öncesinde paylaşılır.") },
            { soru: "Rüzgârlı havada platform kullanılabilir mi?", cevap: cesitle(s, "paylas-14", "Üretici sınırları çerçevesinde değerlendirilir; yüksek rüzgârda çalışma ertelenmesi önerilir.") },
            { soru: "Günlük kontrolü kim yapar?", cevap: cesitle(s, "paylas-15", "Operatörlü kiralamada operatör, operatörsüz kiralamada saha ekibi bu kontrolü üstlenir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-14m", "eklemli-platform-26m"]),
    },
    // ------------------------------------------------------------ 7: Kısa/uzun süreli
    {
        slugTaban: "kisa-sureli-uzun-sureli-kiralama-karsilastirma",
        kategori: "Karşılaştırma",
        baslik: (s) => secim(s, "b7-baslik", [
            `Kısa Süreli mi Uzun Süreli mi? ${bolgeIlk(s)} İşleri İçin Karar Rehberi`,
            `${bolgeIlk(s)}'de Günlük mü Aylık mı Kiralamalısınız?`,
            `Süre Kararı: ${bolgeIlk(s)} Sahaları İçin Kısa/Uzun Vadeli Kiralama Karşılaştırması`,
        ]),
        ozet: (s) => secim(s, "b7-ozet", [
            `${bolgeIlk(s)} bölgesindeki işlerde günlük/haftalık kiralama ile aylık kiralama arasındaki fark ve doğru tercih.`,
            `İş takvimi belirsizse hangi süre modeli seçilmeli? ${bolgeIlk(s)} sahaları için pratik bir karşılaştırma.`,
            `Kısa süreli esneklik mi, uzun süreli maliyet avantajı mı — ${bolgeIlk(s)} bölgesi için karar kriterleri.`,
        ]),
        giris: (s) => secim(s, "b7-giris", [
            `Kiralama süresi tercih edilirken sadece iş takvimi değil, maliyet avantajı da göz önünde bulundurulur.`,
            `${bolgeIlk(s)} sahasında bir makine kiralarken süre kararı çoğu zaman ikinci plana atılır, oysa doğrudan maliyeti etkiler.`,
            `"Ne kadar süreliğine kiralayayım" sorusunun cevabı sadece iş takvimine değil, birim maliyete de bağlıdır. ${bolgeIlk(s)} bölgesi için bu dengeyi anlatıyoruz.`,
        ]),
        bolumler: (s) => [
            {
                baslik: "Kısa süreli kiralama ne zaman uygun?",
                paragraflar: [
                    `${s.hizmetler[0] ?? s.uzmanlik} gibi net bir başlangıç ve bitiş tarihi olan işlerde günlük veya haftalık kiralama tercih edilir; bu model esneklik sağlar ve makine iş bitince iade edilir.`,
                    "Beklenmedik arıza veya proje gecikmesi durumunda süre kolayca uzatılabilir.",
                ],
            },
            {
                baslik: secim(s, "b7-b2-baslik", ["Uzun süreli kiralama ne zaman avantajlı?", "Aylık kiralamanın avantajlı olduğu durumlar", "Sürekli ihtiyaçta uzun vade"]),
                paragraflar: [
                    secim(s, "b7-b2-p1", [
                        `${bolgeIlk(s)} bölgesinde birden fazla ay sürecek, tekrarlayan ihtiyaç duyulan işlerde aylık kiralama birim maliyeti düşürür ve makine sahada sürekli hazır bulunur.`,
                        `Birden fazla ay boyunca tekrarlayan bir ihtiyaç varsa aylık kiralama günlük birim maliyeti aşağı çeker; ayrıca makine sahada sürekli hazır olur.`,
                        `${bolgeIlk(s)} sahasında iş birkaç ayı buluyorsa aylık kiralamaya geçmek genellikle daha ekonomiktir — hem birim maliyet düşer hem makine her gün sahada hazır bulunur.`,
                    ]),
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
        sss: (s) => [
            { soru: "Kısa süreli kiralama uzatılabilir mi?", cevap: cesitle(s, "paylas-16", "Evet, ihtiyaç halinde süre uzatma teklif aşamasında değerlendirilir.") },
            { soru: "Uzun süreli kiralamada bakım kime aittir?", cevap: cesitle(s, "paylas-17", "Periyodik bakım genellikle kiralayan firma tarafından planlanır; detay sözleşmede belirtilir.") },
            { soru: "Süre ortasında makine değiştirilebilir mi?", cevap: cesitle(s, "paylas-18", "İhtiyaç değişirse farklı sınıfa geçiş değerlendirilebilir; bu durum önceden bildirilmelidir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["telehandler-14m", "teleskopik-platform-28m"]),
    },
    // ------------------------------------------------------------ 8: Sık yapılan hatalar
    {
        slugTaban: "sektorde-sik-yapilan-makine-secim-hatalari",
        kategori: "Şehir & Sektör",
        baslik: (s) => secim(s, "b8-baslik", [
            `${bolgeIlk(s)} Sahalarında Sık Yapılan Makine Seçim Hataları`,
            `${bolgeIlk(s)}'de Platform Kiralarken En Sık Yapılan 3 Hata`,
            `Makine Seçerken Nelere Dikkat Etmelisiniz? ${bolgeIlk(s)} İçin Uyarılar`,
        ]),
        ozet: (s) => secim(s, "b8-ozet", [
            `${bolgeIlk(s)} sahalarında sık karşılaşılan yanlış makine seçimi örnekleri ve bunlardan kaçınmanın yolları.`,
            `Acele verilen kararlar sahada pahalıya patlıyor. ${bolgeIlk(s)} bölgesinde en sık tekrarlanan üç makine seçim hatasını anlatıyoruz.`,
            `${bolgeIlk(s)} sahalarında müşterilerin en sık düştüğü üç tuzak ve bunlardan nasıl kaçınılacağı.`,
        ]),
        giris: (s) => secim(s, "b8-giris", [
            `${s.uzmanlik} kapsamındaki işlerde makine seçimi genellikle acele ile yapılır; bu da sahada zaman ve maliyet kaybına yol açabilir.`,
            `Makine seçimi çoğu zaman telefon görüşmesinin son beş dakikasında verilen bir karardır — ${bolgeIlk(s)} sahasında bu acelenin bedeli genelde sahada ortaya çıkar.`,
            `${bolgeIlk(s)} bölgesinde tekrar tekrar karşılaştığımız üç hata var; bunları önceden bilmek, sahada zaman kaybını önler.`,
        ]),
        bolumler: (s) => [
            {
                baslik: "Sadece yüksekliğe bakmak",
                paragraflar: [
                    "Yalnızca 'kaç metre' sorusuna odaklanmak, yatay erişim ve kapasite ihtiyacının gözden kaçmasına neden olur. Engelli bir sahada yüksekliği tutan ama erişemeyen bir makine seçmek yaygın bir hatadır.",
                    `${bolgeIlk(s)} sahasında bu hatayı önlemek için çalışma noktasının konumu (tam altı mı, engelin arkası mı) önceden tarif edilmelidir.`,
                ],
            },
            {
                baslik: secim(s, "b8-b2-baslik", ["Zemin koşulunu göz ardı etmek", "İkinci hata: zemini önemsememek", "Zemin bilgisi paylaşılmadığında"]),
                paragraflar: [
                    secim(s, "b8-b2-p1", [
                        `${s.uzmanlik} işlerinde standart lastikli bir makinenin düzensiz veya yumuşak zeminde çalışması, sahada beklenmedik gecikmeye yol açabilir. Zemin tipi teklif öncesinde belirtilmelidir.`,
                        `Standart bir makine düzensiz veya yumuşak zeminde beklenenden yavaş ilerler, bazen hiç ilerleyemez. ${bolgeIlk(s)} sahasında zemin tipi teklif öncesi belirtilmezse bu risk baştan göz ardı edilmiş olur.`,
                        `Zemin bilgisi paylaşılmadan verilen bir teklif, sahada "makine buraya giremiyor" sürprizine yol açabilir. ${bolgeIlk(s)} bölgesinde bu, en sık tekrarlanan hatalardan biridir.`,
                    ]),
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
            { soru: "Yanlış makine seçilirse değiştirilebilir mi?", cevap: cesitle(s, "paylas-19", "Mümkün olduğunda evet; ancak erken doğru bilgi paylaşımı bu ihtiyacı büyük ölçüde azaltır.") },
            { soru: "Saha fotoğrafı yeterli mi, ölçü de gerekir mi?", cevap: cesitle(s, "paylas-20", "İkisi birlikte en sağlıklı sonucu verir; fotoğraf geometriyi, ölçü ise kesin sınıfı netleştirir.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["orumcek-platform-23m", "makasli-platform-18m"]),
    },
    // ------------------------------------------------------------ 9: Teklif öncesi sorular
    {
        slugTaban: "teklif-oncesi-sorulmasi-gereken-sorular",
        kategori: "Maliyet",
        baslik: (s) => secim(s, "b9-baslik", [
            `Teklif Almadan Önce Sormanız Gereken 7 Soru`,
            `${bolgeIlk(s)}'de Teklif İstemeden Önce Netleştirilmesi Gerekenler`,
            `Sürpriz Maliyetten Kaçının: Teklif Öncesi Sorulacak Sorular`,
        ]),
        ozet: (s) => secim(s, "b9-ozet", [
            `${bolgeIlk(s)} bölgesinde platform veya forklift kiralamadan önce netleştirilmesi gereken sorular.`,
            `Teklifi imzalamadan önce sorulmayan bir soru, ${bolgeIlk(s)} sahasında sonradan ek maliyet olarak geri dönebilir.`,
            `${bolgeIlk(s)} bölgesinde yazılı teklif istemeden önce netleştirilmesi gereken kalemler.`,
        ]),
        giris: (s) => secim(s, "b9-giris", [
            `Yazılı teklif almadan önce birkaç soruyu netleştirmek, sonradan çıkabilecek ek maliyet veya gecikmeyi önler.`,
            `${bolgeIlk(s)} sahası için teklif isterken atlanan bir detay, teslimat gününde ek maliyet veya gecikme olarak geri döner.`,
            `İyi bir teklif, iyi sorulmuş sorularla başlar. ${bolgeIlk(s)} bölgesinde kiralama öncesi netleştirilmesi gereken başlıkları topladık.`,
        ]),
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
        sss: (s) => [
            { soru: "Bu sorular telefonda mı yoksa yazılı mı sorulmalı?", cevap: cesitle(s, "paylas-21", "Her ikisi de mümkündür; yazılı kayıt tutmak isteyenler için WhatsApp veya e-posta üzerinden teyit önerilir.") },
            { soru: "Tüm sorulara aynı anda cevap alınabilir mi?", cevap: cesitle(s, "paylas-22", "Evet, saha bilgisi paylaşıldığında bu sorulara yazılı teklif içinde topluca cevap verilir.") },
            { soru: "Ek soru sorma hakkım var mı?", cevap: cesitle(s, "paylas-23", "Elbette; teklif öncesi ve sonrasında ek sorular her zaman yanıtlanır.") },
        ],
        ilgiliUrun: (s) => ilgiliUrunSec(s, ["makasli-platform-12m", "dizel-forklift"]),
    },
    // ------------------------------------------------------------ 10: Elektrikli/dizel
    {
        slugTaban: "elektrikli-mi-dizel-mi-model-secimi",
        kategori: "Ürün Rehberi",
        baslik: (s) => secim(s, "b10-baslik", [
            `Elektrikli mi Dizel mi? ${bolgeIlk(s)} Sahaları İçin Model Seçimi`,
            `${bolgeIlk(s)}'de Hangi Güç Kaynağı: Elektrikli mi, Dizel mi?`,
            `İç Mekân mı Açık Saha mı? ${bolgeIlk(s)} İçin Elektrikli-Dizel Karşılaştırması`,
        ]),
        ozet: (s) => secim(s, "b10-ozet", [
            `${bolgeIlk(s)} bölgesinde iç mekân ve açık saha işlerine göre elektrikli ile dizel makine arasındaki fark.`,
            `Çalışma ortamı, ${bolgeIlk(s)} sahasında elektrikli mi dizel mi kullanılacağını büyük ölçüde belirler.`,
            `${bolgeIlk(s)} bölgesinde hangi işlerde elektrikli, hangi işlerde dizel model tercih edilmeli — kısa bir karşılaştırma.`,
        ]),
        giris: (s) => secim(s, "b10-giris", [
            `Elektrikli ve dizel model arasındaki tercih, çalışma ortamına (iç mekân/açık saha) ve gürültü-emisyon hassasiyetine göre belirlenir.`,
            `${bolgeIlk(s)} sahasında "elektrikli mi dizel mi" sorusunun cevabı aslında basit: nerede çalışacaksınız?`,
            `Güç kaynağı seçimi, ${bolgeIlk(s)} bölgesindeki işin ortamına göre değişir — kapalı alan mı, açık saha mı olduğu bu kararı çoğunlukla tek başına belirler.`,
        ]),
        bolumler: (s) => [
            {
                baslik: "Elektrikli modeller ne zaman tercih edilir?",
                paragraflar: [
                    `${bolgeIlk(s)} bölgesindeki AVM, fabrika içi ve hastane gibi kapalı alanlarda elektrikli modeller sıfır emisyon, düşük gürültü ve iz bırakmayan lastikleriyle tercih edilir.`,
                    `${s.uzmanlik} kapsamındaki iç mekân işlerinde bu özellikler, işletmenin normal faaliyetini kesintiye uğratmadan çalışmayı mümkün kılar.`,
                ],
            },
            {
                baslik: secim(s, "b10-b2-baslik", ["Dizel modeller ne zaman tercih edilir?", "Açık sahada dizel avantajı", "Şantiye ve dış cephede güç kaynağı"]),
                paragraflar: [
                    secim(s, "b10-b2-p1", [
                        "Açık saha, şantiye ve çelik montaj gibi işlerde dizel modellerin 4x4 çekiş gücü ve yüksek erişim kapasitesi öne çıkar; düzensiz zeminde daha güçlü performans sağlar.",
                        "Şantiye, açık saha ve çelik montaj işlerinde dizel modellerin dört tekerlekten çekiş gücü ve yüksek erişimi öne çıkar; düzensiz zeminde elektrikli modellere göre daha güçlü performans gösterir.",
                        "Dış mekân işlerinde emisyon veya gürültü kısıtı yoksa dizel model genelde daha güçlü bir seçimdir; özellikle düzensiz zeminde 4x4 çekiş belirgin fark yaratır.",
                    ]),
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
            { soru: "Elektrikli modelin şarj süresi ne kadar?", cevap: cesitle(s, "paylas-24", "Modele göre değişir; tam şarj süresi ve saha elektrik altyapısı teklif aşamasında birlikte değerlendirilir.") },
            { soru: "Dizel model iç mekânda kullanılabilir mi?", cevap: cesitle(s, "paylas-25", "Önerilmez; emisyon ve gürültü nedeniyle kapalı alanlarda elektrikli modeller tercih edilir.") },
            { soru: `${bolgeIlk(s)} sahasında hangi model daha yaygın kullanılıyor?`, cevap: cesitle(s, "paylas-26", "Saha tipine göre değişir; iç mekân işlerinde elektrikli, açık saha işlerinde dizel model daha sık tercih edilir.") },
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

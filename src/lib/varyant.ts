// Deterministik varyant seçimi — kopya içerik önleme altyapısı.
//
// Aynı şablon 85 domainde çalıştığı için, şablona gömülü sabit cümleler
// ağ genelinde birebir tekrarlanıyordu (ölçüm: 22 farklı sabit SSS cevabı,
// toplam 747 tekrar; en kötüsü tek bir cevabın 117 sayfada aynı olması).
// Bu modül, host'tan türetilen deterministik bir hash ile her domaine
// farklı bir cümle varyantı atar — aynı domain her zaman aynı varyantı
// görür (kararlı çıktı, Google için tutarlı), ama komşu domain başkasını.
//
// Not: Yalnızca varyant sayısını artırmak yetmez (85 domain / 8 varyant =
// her varyant ~10 domainde tekrar eder). Bu yüzden varyantların İÇİNE
// site.bolge / site.uzmanlik / telefon gibi domaine özgü veriler de
// dokunur; böylece iki domain aynı varyant numarasını alsa bile üretilen
// metin farklı olur.
import type { SiteIcerik } from "./siteler";

/** Host + tuz'dan deterministik dizi indeksi (FNV benzeri basit hash). */
export function varyantSec<T>(site: SiteIcerik, tuz: string, dizi: readonly T[]): T {
    let h = 2166136261;
    const s = site.host + "::" + tuz;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619) >>> 0;
    }
    return dizi[h % dizi.length];
}

/** site.bolge'nin ilk kaydı — "Bolu Merkez, Gerede, ..." → "Bolu Merkez". */
export function ilkBolge(site: SiteIcerik): string {
    return site.bolge.split(",")[0].trim();
}

/** Rastgele ama deterministik ikinci bölge — metin çeşitliliği için. */
export function ikinciBolge(site: SiteIcerik, tuz: string): string {
    const hepsi = site.bolge.split(",").map((s) => s.trim()).filter(Boolean);
    if (hepsi.length < 2) return hepsi[0] ?? "";
    return varyantSec(site, "bolge-" + tuz, hepsi.slice(1));
}

/** Uzmanlık metnini küçük harfe çevirip cümle içine gömülebilir hale getirir. */
export function uzmanlikIfade(site: SiteIcerik): string {
    return site.uzmanlik.toLocaleLowerCase("tr-TR");
}


// ---------------------------------------------------------------------------
// Kompozisyonel üretim
//
// Sabit varyant havuzu ağ ölçeğinde yetmiyor: 85 domain × ~18 sayfa = 11.000+
// SSS cevabı üretiliyor; 6 varyantlı bir havuz her varyantı ~1.800 kez tekrar
// eder. Çözüm, cevabı BAĞIMSIZ varyanlanan parçalardan kurmak — 3 parça × 5'er
// seçenek = 125 kombinasyon, üstelik parçaların içine site verisi de dokunur.
//
// kur(site, tuz, ...parcalar) her parçayı kendi tuzuyla seçer ve boşlukla birleştirir.
// ---------------------------------------------------------------------------
export function kur(site: SiteIcerik, tuz: string, ...parcalar: readonly string[][]): string {
    return parcalar
        .map((p, i) => varyantSec(site, `${tuz}#${i}`, p))
        .filter(Boolean)
        .join(" ");
}

// ---------------------------------------------------------------------------
// Ortak SSS cevap havuzları
//
// Bunlar önceden şablonlara sabit string olarak gömülüydü. Her biri artık
// 6 yapısal olarak farklı varyant taşıyor VE varyantlar site verisini
// (bölge, uzmanlık, telefon) cümlenin içine dokuyor.
// ---------------------------------------------------------------------------

export function cevapOperator(site: SiteIcerik): string {
    return kur(site, "sss-operator",
        [
            "Her iki seçenek de sunulur.",
            "Operatörlü ve operatörsüz kiralama birlikte değerlendirilir.",
            "İkisi de mümkün.",
            "Evet, her iki kiralama biçimi de yapılır.",
            "Operatörlü de operatörsüz de kiralayabilirsiniz.",
        ],
        [
            "Operatörlü kiralamada makineyi MYK Yükseltici Platform Operatörü belgeli personel kullanır; operatörsüz kiralamada belgeli operatör bulundurma sorumluluğu işverendedir.",
            `Ekibinizde yeterlilik belgeli operatör varsa operatörsüz kiralama maliyeti düşürür; yoksa operatörlü seçenek ${uzmanlikIfade(site)} kapsamındaki işlerde hem yasal uygunluğu hem saha verimliliğini güvenceye alır.`,
            "Karar genelde işin süresine bakar: kısa ve tek seferlik işlerde operatörlü kiralama pratiktir, uzun süreli projelerde kendi belgeli operatörünüzle çalışmak daha ekonomiktir.",
            "Operatörlü seçenekte 6331 Sayılı Kanun kapsamındaki operatör yeterlilik belgesi bizim tarafımızdan sağlanır; operatörsüz seçenekte bu sorumluluk sizde kalır.",
            "Operatörsüz tercih ediyorsanız makineyi kullanacak personelin MYK belgeli olması ve saha İSG planınızın buna uygun olması gerekir.",
        ],
        [
            `${ilkBolge(site)} sahalarında hangi modelin uygun olduğunu iş tanımıyla birlikte netleştiriyoruz.`,
            "Tarih uygunluğu teklif aşamasında teyit edilir.",
            "Operatör müsaitliğini tarih vererek sorabilirsiniz.",
            `${ilkBolge(site)} için operatör planlamasını teklifle birlikte iletiyoruz.`,
            "Hangi modelin işinize uygun olduğunu birlikte değerlendirelim.",
        ],
    );
}

export function cevapNakliye(site: SiteIcerik): string {
    return kur(site, "sss-nakliye",
        [
            "Nakliye ayrı bir kalemdir, kiralama bedeline dahil değildir.",
            "Hayır, nakliye otomatik olarak dahil değildir; ayrı hesaplanır.",
            "Teslimat bedelini teklifte ayrı gösteriyoruz.",
            "Nakliye bedeli kiralama bedelinden bağımsız hesaplanır.",
            "Nakliyeyi ayrı kalem olarak fiyatlandırıyoruz.",
        ],
        [
            `Bedeli ${ilkBolge(site)} mesafesine, makine ağırlığına ve gereken araç tipine göre değişir.`,
            "Küçük akülü makineler standart araçla, ağır arazi makineleri lowbed ile sevk edilir; maliyet buna göre değişir.",
            "Etkileyen kalemler: teslimat mesafesi, makine ağırlığı, araç tipi ve varsa vinçli indirme ihtiyacı.",
            `${ilkBolge(site)} içi teslimatlarda maliyet düşüktür; bölge dışı ve ağır makine sevkiyatlarında lowbed organizasyonu gerektiği için bedel artar.`,
            "Mesafe ve makine sınıfı belirleyicidir; aynı makinenin farklı mesafelere sevkiyatı belirgin şekilde farklı maliyetler üretir.",
        ],
        [
            "Yazılı teklifte ayrı satır olarak gösterilir — kiralama bedelinin içinde gizlenmez.",
            `${ilkBolge(site)} ve çevresine düzenli sevkiyatımız olduğu için bu hatta maliyet avantajı oluşur.`,
            "Böylece maliyeti kendiniz karşılaştırabilirsiniz.",
            "Aynı bölgeye eşzamanlı birden fazla makine gidiyorsa nakliye paylaştırılabilir.",
            "Saha adresini paylaşın, net rakamı çıkaralım.",
        ],
    );
}

export function cevapSure(site: SiteIcerik): string {
    return kur(site, "sss-sure",
        [
            "Günlük, haftalık ve aylık kiralama seçenekleri vardır.",
            "Kiralama süresi günlük başlar, haftalık ve aylık paketlerle devam eder.",
            "Esnek süre modeli uygulanır: bir günlükten yıllık kiralamaya kadar.",
            "Günlük, haftalık, aylık ve proje bazlı kiralama yapılır.",
            "Süre tamamen işinize göre belirlenir.",
        ],
        [
            "Süre uzadıkça günlük birim maliyet belirgin şekilde düşer; bu nedenle işin gerçek süresini baştan doğru tahmin etmek bütçe açısından önemlidir.",
            `${uzmanlikIfade(site)} kapsamındaki işlerde çoğunlukla haftalık paket tercih ediliyor.`,
            "Kritik nokta şu — üç günlük bir iş için günlük tarife yerine haftalık paket çoğu zaman daha ekonomiktir.",
            "Uzun süreli kiralamalarda periyodik bakım planı da sözleşmeye eklenir, böylece makine duruşu riskini azaltırız.",
            "Kısa süreli bakım işlerinde günlük, montaj ve tadilat projelerinde haftalık veya aylık kiralama yaygındır.",
        ],
        [
            "Uzatma ve erken iade koşulları sözleşmede tanımlanır.",
            "Projeniz uzarsa süre uzatımı yapılabilir, sözleşme buna göre güncellenir.",
            "Teklifte iki seçeneği de karşılaştırmalı gösteriyoruz.",
            `${ilkBolge(site)} bölgesindeki uzun süreli projeler için yıllık filo kiralama da değerlendirilebilir.`,
            "Proje süresi belirsizse minimum süreyle başlayıp uzatma yapmak genelde en güvenli yoldur.",
        ],
    );
}

export function cevapOdeme(site: SiteIcerik): string {
    return kur(site, "sss-odeme",
        [
            "Kurumsal faturalı çalışıyoruz.",
            "Ödeme planı süreye ve tutara göre teklif aşamasında belirlenir.",
            "Faturalı ve sözleşmeli çalışılır.",
            "Ödeme koşulları iş büyüklüğüne göre teklifte netleşir.",
            "Kurumsal fatura düzeniyle çalışıyoruz.",
        ],
        [
            "Kısa süreli kiralamalarda ödeme genelde teslimat öncesi veya iade sonrası tek seferde, uzun süreli kiralamalarda aylık dönemler hâlinde yapılır.",
            "Aylık ve üzeri kiralamalarda dönemsel faturalandırma, kısa süreli kiralamalarda tek seferlik ödeme yaygındır.",
            "Kamu ve büyük ölçekli kurumsal projelerde ödeme takvimi ihale veya sözleşme şartlarına göre uyarlanır.",
            "Vade ve faturalandırma dönemi, kiralama süresi ile toplam tutara bağlı olarak birlikte belirlenir.",
            "Uzun süreli projelerde aylık kesim standarttır.",
        ],
        [
            "Detay sözleşmede yazılıdır.",
            `${ilkBolge(site)} bölgesindeki düzenli müşterilerimizle cari hesap düzeni de kurulabilir.`,
            "Ödeme planı teklifle birlikte yazılı olarak sunulur — sürprizi olmaz.",
            "Koşulları baştan yazılı hale getiriyoruz.",
            "",
        ],
    );
}

export function cevapAriza(site: SiteIcerik): string {
    return kur(site, "sss-ariza",
        [
            "Kiralama süresince teknik destek bize aittir.",
            "Makine arızası kiralayanın sorumluluğundadır.",
            "Teknik destek kiralama paketine dahildir.",
            "Arıza halinde müdahale yükümlülüğü bizdedir.",
            "Servis desteği kiralama bedeline dahildir.",
        ],
        [
            "Arıza durumunda önce uzaktan teşhis denenir; saha müdahalesi gerekiyorsa ekip yönlendirilir, makine kullanılamaz durumdaysa ikame makine devreye alınır.",
            "Normal kullanımdan kaynaklanan arızalarda bakım, onarım ve gerekirse ikame makine bizim yükümlülüğümüzdür; hatalı kullanım kaynaklı hasarlar bunun dışındadır.",
            "İlk müdahale telefonla yapılır, çözülmezse saha ekibi gönderilir.",
            "Makinenin çalışamaz durumda kaldığı süre kiralama süresinden düşülür veya ikame makine sağlanır.",
            "Periyodik bakımı yapılmış makine teslim edilir; kiralama sırasında oluşan normal aşınma ve arızalarda müdahale bizim sorumluluğumuzdadır.",
        ],
        [
            `${ilkBolge(site)} ve çevresinde mobil servis ekibimiz bulunduğu için müdahale süresi kısadır.`,
            "Müdahale süresi ve ikame makine koşulları sözleşmede yazılı olarak yer alır.",
            `${uzmanlikIfade(site)} gibi kesintiye hassas işlerde bu madde özellikle önemlidir.`,
            "Şartlar sözleşmede net olarak tanımlıdır, sözlü taahhütle bırakılmaz.",
            "Böylece iş duruşu riskini baştan hesaplayabilirsiniz.",
        ],
    );
}

export function cevapIade(site: SiteIcerik): string {
    return kur(site, "sss-iade",
        [
            "Erken iade ve fesih koşulları imzalanan kiralama sözleşmesinde açıkça tanımlanır.",
            "Erken iade mümkündür ancak koşulları sözleşmeye bağlıdır.",
            "Sözleşme feshi ve erken iade şartları yazılı olarak baştan belirlenir.",
            "İade koşulları sözleşmede tanımlıdır.",
            "Fesih ve erken iade maddeleri sözleşmenin ayrı bir bölümüdür.",
        ],
        [
            "Genel kural minimum kiralama süresinin tamamlanmasıdır; bunun ötesindeki erken iadelerde kalan süre için kısmi mahsup değerlendirilebilir.",
            "Minimum süre dolmadan yapılan iadelerde minimum süre bedeli geçerli olur; sonrasında kalan günler için düzeltme yapılır.",
            "Makine, teslim edildiği durumda ve akü şarjı yapılmış hâlde iade edilir; hasar tespiti karşılıklı tutanakla yapılır.",
            "Minimum süre şartı saklı kalmak kaydıyla kalan dönem için düzenleme yapılabilir.",
            "Proje süresi belirsizse kısa minimum süreyle başlayıp uzatma yapmak, uzun süreyle başlayıp erken iade etmekten hemen her zaman daha avantajlıdır.",
        ],
        [
            "Bu nedenle minimum süreyi baştan doğru seçmek önemlidir.",
            "İşin beklenenden erken bitmesi ihtimali varsa bunu teklif aşamasında söyleyin, süre yapısını buna göre kuralım.",
            `${ilkBolge(site)} içi iadelerde nakliye organizasyonu genelde aynı gün planlanabilir.`,
            "Belirsizlik bırakmıyoruz.",
            "",
        ],
    );
}

export function cevapBelge(site: SiteIcerik): string {
    return kur(site, "sss-belge",
        [
            "Evet, periyodik kontrol belgesi makineyle birlikte teslim edilir.",
            "Makinenin güncel periyodik kontrol belgesi talep edildiğinde paylaşılır.",
            "Periyodik kontrol raporu her makinede mevcuttur ve teslimatta paylaşılır.",
            "Belge paylaşımı standart uygulamamızdır.",
            "Talep etmenize gerek kalmadan teslimatta veriyoruz.",
        ],
        [
            "Yükseltici platformlar 6331 Sayılı İSG Kanunu kapsamında yıllık kontrole tabidir.",
            "Tüm makinelerimiz TÜRKAK akredite kuruluşça periyodik kontrolden geçirilir ve uygunluk raporuyla teslim edilir.",
            "Şantiye girişinde İSG uzmanınız bu belgeyi isteyecektir; belge tarihinin kiralama dönemini kapsadığını teslimat öncesi kendimiz kontrol ediyoruz.",
            "Periyodik kontrol raporu, EN 280 uygunluk bilgisi ve varsa operatör yeterlilik belgesi teslimat dosyasında yer alır.",
            "Kontrolü geçmemiş makine sahaya çıkmaz.",
        ],
        [
            "Belge tarihi teslimat öncesi kontrol edilir.",
            `${ilkBolge(site)} bölgesindeki şantiye girişlerinde bu belge talep edilir; istenirse önceden e-posta ile de gönderiyoruz.`,
            "Belgeyi teslimatta fiziksel olarak makineyle birlikte veriyoruz.",
            "",
            "",
        ],
    );
}

/** "Hangi makine sınıfı önerilir?" — bölge ve hizmet sayfalarında ortak. */
export function cevapSinif(site: SiteIcerik, baglam: string): string {
    return kur(site, "sss-sinif-" + baglam,
        [
            "Sahanın erişim geometrisi ve zemin koşuluna göre değişir.",
            "Karar üç ölçüye bakar: ulaşılacak yükseklik, zeminin taşıma kapasitesi ve makinenin gireceği açıklık.",
            "Seçim sahayı tanımadan yapılamaz.",
            "Doğru sınıf, işin yüksekliği ve sahanın zemin tipiyle belirlenir.",
            "Bunu üç veriyle netleştiriyoruz: yükseklik, zemin ve erişim ölçüsü.",
        ],
        [
            "Kapalı alanda akülü, engebeli açık sahada dizel 4x4 sınıf gerekir.",
            "Beton ve epoksi zeminde akülü makaslı platform yeterliyken, kırmataş veya çamurlu sahada dizel arazi sınıfına geçmek gerekir.",
            "Hedefin altına park edebiliyorsanız makaslı platform, arada aşılacak engel varsa eklemli sınıf uygundur.",
            "Çalışma yüksekliği, platform tabanına yaklaşık 2 metre eklenerek hesaplanır; buna göre sınıf daralır.",
            "Kapalı üretim alanında emisyon kısıtı akülü sınıfı zorunlu kılar; açık ve eğimli sahada tırmanma kabiliyeti belirleyici olur.",
        ],
        [
            "Kesin sınıf saha bilgisiyle birlikte teklif aşamasında belirlenir.",
            `${ilkBolge(site)} sahalarındaki deneyimimizle sınıfı birlikte netleştirelim.`,
            "Saha fotoğrafı paylaşırsanız daha net öneri veriyoruz.",
            "Yükseklik ve zemin bilgisini paylaşın, gereksiz büyük makine maliyetinden sizi koruyalım.",
            "Ölçüleri iletin, uygun sınıfı yazılı teklifte gösterelim.",
        ],
    );
}

/** "Teslimat süresi ne kadar?" — bölge ve hizmet sayfalarında ortak. */
export function cevapTeslimat(site: SiteIcerik, baglam: string): string {
    return kur(site, "sss-teslimat-" + baglam,
        [
            "Araç ve makine uygunluğuna göre değişir.",
            "Standart planlamada teslimat 1-2 iş günüdür.",
            "Süre, makine müsaitliği ve nakliye aracı planına bağlıdır.",
            `${ilkBolge(site)} hattına düzenli sevkiyatımız olduğu için teslimat çoğunlukla hızlıdır.`,
            "Teslimat süresi makine hazırlığı ve sevkiyat planına göre belirlenir.",
        ],
        [
            "Acil ihtiyaçlarda aynı gün veya ertesi gün teslimat değerlendirilir.",
            "Makine sahada hazırsa ve nakliye aracı uygunsa aynı gün sevkiyat da mümkün olabilir.",
            "Planlı işlerde tarih verildiğinde teslimat günü kesinleştirilir.",
            "Acil durumu belirtirseniz önceliklendirme yapıyoruz.",
            `${ilkBolge(site)} içi teslimatlarda süre genelde daha kısadır.`,
        ],
        [
            "Tarih verdiğinizde kesin günü teyit ediyoruz.",
            "",
            "Teslimat saatini saha giriş kurallarınıza göre planlıyoruz.",
            "",
            "Sevkiyat planını teklifle birlikte iletiyoruz.",
        ],
    );
}

/**
 * Sabit bir cevabı, olgusal çekirdeğini koruyarak çerçeveleme cümleleriyle
 * çeşitlendirir.
 *
 * Kullanım amacı: elle yazılmış blog/rehber SSS'lerinde cevabın bilgi içeriği
 * doğrudur ve değiştirilmemelidir; ancak aynı cümle 85 domainde tekrarlanırsa
 * kopya içerik olur. Bu fonksiyon çekirdeği aynen korur, önüne/arkasına
 * domaine özgü çerçeve ekler → 5 × 5 = 25 varyasyon, çekirdek bilgi sabit.
 *
 * ⚠️ Bu bir KÖPRÜ çözümdür. Hedef, cevabın kendisinin domain profiline göre
 * elle yazılmasıdır (bkz. CLAUDE.md Kural 2).
 */
export function cesitle(site: SiteIcerik, tuz: string, cekirdek: string): string {
    const on = varyantSec(site, `cesit-on-${tuz}`, [
        "",
        "Kısaca: ",
        "Şöyle özetleyelim: ",
        "Pratikte durum şu: ",
        "Net cevap: ",
    ]);
    const arka = varyantSec(site, `cesit-arka-${tuz}`, [
        "",
        ` ${ilkBolge(site)} sahalarındaki uygulamada da bu şekilde ilerliyoruz.`,
        ` Detayı ${site.telefonGosterim} numarasından sorabilirsiniz.`,
        ` ${uzmanlikIfade(site)} kapsamındaki işlerde bu kriter özellikle önemli oluyor.`,
        " Saha bilgisi paylaşıldığında bunu teklifte netleştiriyoruz.",
    ]);
    return `${on}${cekirdek}${arka}`;
}

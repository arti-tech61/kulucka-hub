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
// Ortak SSS cevap havuzları
//
// Bunlar önceden şablonlara sabit string olarak gömülüydü. Her biri artık
// 6 yapısal olarak farklı varyant taşıyor VE varyantlar site verisini
// (bölge, uzmanlık, telefon) cümlenin içine dokuyor.
// ---------------------------------------------------------------------------

export function cevapOperator(site: SiteIcerik): string {
    return varyantSec(site, "sss-operator", [
        `Her iki seçenek de sunulur. Operatörlü kiralamada makineyi MYK Yükseltici Platform Operatörü belgeli personel kullanır; operatörsüz kiralamada belgeli operatör bulundurma sorumluluğu işverendedir. ${ilkBolge(site)} sahalarında hangi modelin uygun olduğunu iş tanımıyla birlikte netleştiriyoruz.`,
        `Operatörlü ve operatörsüz kiralama birlikte değerlendirilir. Ekibinizde yeterlilik belgeli operatör varsa operatörsüz kiralama maliyeti düşürür; yoksa operatörlü seçenek hem yasal uygunluğu hem de saha verimliliğini güvenceye alır. Tarih uygunluğu teklif aşamasında teyit edilir.`,
        `İki model de mevcuttur. ${uzmanlikIfade(site)} kapsamındaki işlerde çoğu müşterimiz operatörlü kiralamayı tercih ediyor, çünkü makine tanıma süresi ortadan kalkıyor. Operatörsüz kiralamada belgeli personel bulundurma yükümlülüğü işverene aittir.`,
        `Evet, ikisi de mümkün. Karar genelde işin süresine bakar: kısa süreli ve tek seferlik işlerde operatörlü kiralama pratiktir, uzun süreli projelerde kendi belgeli operatörünüzle çalışmak daha ekonomiktir. Operatör müsaitliğini tarih vererek sorabilirsiniz.`,
        `Operatörlü kiralama da operatörsüz kiralama da yapılır. Operatörlü seçenekte 6331 Sayılı Kanun kapsamındaki operatör yeterlilik belgesi bizim tarafımızdan sağlanır; operatörsüz seçenekte bu sorumluluk sizde kalır. ${ilkBolge(site)} için tarih uygunluğunu teklif aşamasında doğruluyoruz.`,
        `Her iki kiralama biçimi de sunulur. Operatörsüz tercih ediyorsanız makineyi kullanacak personelin MYK belgeli olması ve saha İSG planınızın buna uygun olması gerekir. Operatörlü tercihte bu yükümlülükleri biz üstleniriz; müsaitlik tarihe göre değişir.`,
    ]);
}

export function cevapNakliye(site: SiteIcerik): string {
    return varyantSec(site, "sss-nakliye", [
        `Nakliye bedeli ${ilkBolge(site)} mesafesine, makine ağırlığına ve gereken araç tipine göre değişir. Yazılı teklifte ayrı bir kalem olarak gösterilir — kiralama bedelinin içinde gizlenmez, böylece maliyeti kendiniz karşılaştırabilirsiniz.`,
        `Mesafe ve makine sınıfı nakliye bedelini belirler; küçük akülü makineler standart araçla, ağır arazi makineleri lowbed ile sevk edilir. Teklifte nakliye ayrı satır olarak yazılır. ${ilkBolge(site)} ve çevresine düzenli sevkiyatımız olduğu için bu hatta maliyet avantajı oluşur.`,
        `Hayır, nakliye otomatik olarak dahil değildir; ayrı hesaplanır ve yazılı teklifte açıkça belirtilir. Bedeli etkileyen kalemler: teslimat mesafesi, makine ağırlığı, araç tipi ve varsa vinçli indirme ihtiyacı.`,
        `Nakliye ayrı kalemdir. ${ilkBolge(site)} içi teslimatlarda maliyet düşüktür; bölge dışı ve ağır makine sevkiyatlarında lowbed organizasyonu gerektiği için bedel artar. Kesin rakam saha adresi netleştiğinde teklifte yer alır.`,
        `Nakliyeyi teklifte ayrı gösteriyoruz. Bunun nedeni şeffaflık: aynı makineyi farklı mesafelere sevk etmenin maliyeti çok değişir, bunu kiralama bedeline gömmek karşılaştırmayı imkânsız kılardı. Saha adresini paylaşın, net rakamı çıkaralım.`,
        `Teslimat bedeli mesafeye ve araç tipine bağlıdır, teklifte ayrıca belirtilir. Aynı bölgeye eşzamanlı birden fazla makine gönderiliyorsa nakliye maliyeti paylaştırılabilir; ${ilkBolge(site)} çevresindeki toplu işlerde bunu değerlendiriyoruz.`,
    ]);
}

export function cevapSure(site: SiteIcerik): string {
    return varyantSec(site, "sss-sure", [
        `Günlük, haftalık ve aylık kiralama seçenekleri vardır. Süre uzadıkça günlük birim maliyet belirgin şekilde düşer; bu nedenle işin gerçek süresini baştan doğru tahmin etmek bütçe açısından önemlidir. Uzatma ve erken iade koşulları sözleşmede tanımlanır.`,
        `Kiralama süresi günlük başlar, haftalık ve aylık paketlerle devam eder. ${uzmanlikIfade(site)} kapsamındaki işlerde çoğunlukla haftalık paket tercih ediliyor. Projeniz uzarsa süre uzatımı yapılabilir, sözleşme buna göre güncellenir.`,
        `Esnek süre modeli uygulanır: bir günlükten aylık ve yıllık kiralamaya kadar. Kritik nokta şu — üç günlük bir iş için günlük tarife yerine haftalık paket çoğu zaman daha ekonomiktir. Teklifte iki seçeneği de karşılaştırmalı gösteriyoruz.`,
        `Günlük, haftalık, aylık ve proje bazlı kiralama yapılır. Uzun süreli kiralamalarda periyodik bakım planı da sözleşmeye eklenir, böylece makine duruşu riskini azaltırız. Erken iade koşulları önceden yazılı olarak netleştirilir.`,
        `Süre tamamen işinize göre belirlenir. Kısa süreli bakım işlerinde günlük, montaj ve tadilat projelerinde haftalık/aylık kiralama yaygındır. ${ilkBolge(site)} bölgesindeki uzun süreli projeler için yıllık filo kiralama da değerlendirilebilir.`,
        `Kiralama günlük birimle başlar; haftalık ve aylık paketlerde günlük maliyet kademeli olarak düşer. Proje süresi belirsizse minimum süreyle başlayıp uzatma yapmak genelde en güvenli yoldur — uzatma koşulları sözleşmede baştan yazılıdır.`,
    ]);
}

export function cevapOdeme(site: SiteIcerik): string {
    return varyantSec(site, "sss-odeme", [
        `Ödeme planı süreye ve tutara göre teklif aşamasında belirlenir. Kurumsal müşteriler için faturalı çalışma standarttır; uzun süreli kiralamalarda aylık dönemsel faturalandırma yapılabilir.`,
        `Kurumsal faturalı çalışıyoruz. Kısa süreli kiralamalarda ödeme genelde teslimat öncesi veya iade sonrası tek seferde, uzun süreli kiralamalarda aylık dönemler hâlinde yapılır. Detay sözleşmede yazılıdır.`,
        `Ödeme koşulları iş büyüklüğüne göre teklifte netleşir. Fatura kesimi kurumsal usullere uygundur; kamu ve büyük ölçekli kurumsal projelerde ödeme takvimi ihale/sözleşme şartlarına göre uyarlanır.`,
        `Faturalı ve sözleşmeli çalışılır. Aylık ve üzeri kiralamalarda dönemsel faturalandırma, kısa süreli kiralamalarda tek seferlik ödeme yaygındır. ${ilkBolge(site)} bölgesindeki düzenli müşterilerimizle cari hesap düzeni de kurulabilir.`,
        `Ödeme planı teklifle birlikte yazılı olarak sunulur — sürprizi olmaz. Kurumsal müşterilerde vade ve faturalandırma dönemi, kiralama süresi ve tutarına göre birlikte belirlenir.`,
        `Kurumsal fatura düzeniyle çalışıyoruz. Ödeme vadesi ve taksitlendirme, kiralama süresi ile toplam tutara bağlı olarak teklif aşamasında konuşulur; uzun süreli projelerde aylık kesim standarttır.`,
    ]);
}

export function cevapAriza(site: SiteIcerik): string {
    return varyantSec(site, "sss-ariza", [
        `Arıza bildirimi sonrası müdahale süresi ve ikame makine garantisi sözleşmede yazılı olarak yer alır. ${ilkBolge(site)} ve çevresinde mobil servis ekibimiz bulunduğu için müdahale süresi kısadır.`,
        `Kiralama süresince teknik destek bize aittir. Arıza durumunda önce uzaktan teşhis denenir; saha müdahalesi gerekiyorsa ekip yönlendirilir, makine kullanılamaz durumdaysa ikame makine devreye alınır. Şartlar sözleşmede tanımlıdır.`,
        `Makine arızası kiralayanın sorumluluğundadır — normal kullanımdan kaynaklanan arızalarda bakım, onarım ve gerekirse ikame makine bizim yükümlülüğümüzdür. Hatalı kullanım kaynaklı hasarlar bunun dışındadır ve sözleşmede ayrı tanımlanır.`,
        `Servis müdahale süresi ve ikame makine koşulları sözleşmede net olarak yazılır; sözlü taahhütle bırakılmaz. Böylece iş duruşu riskini baştan hesaplayabilirsiniz. ${uzmanlikIfade(site)} gibi kesintiye hassas işlerde bu madde özellikle önemlidir.`,
        `Arıza halinde ilk müdahale telefonla yapılır, çözülmezse saha ekibi gönderilir. Makinenin çalışamaz durumda kaldığı süre kiralama süresinden düşülür veya ikame makine sağlanır — hangisinin geçerli olacağı sözleşmede belirtilir.`,
        `Teknik destek kiralama paketine dahildir. Periyodik bakımı yapılmış makine teslim edilir; kiralama sırasında oluşan normal aşınma ve arızalarda müdahale ve ikame yükümlülüğü bizdedir. Süreler sözleşmede yazılıdır.`,
    ]);
}

export function cevapIade(site: SiteIcerik): string {
    return varyantSec(site, "sss-iade", [
        `Erken iade ve fesih koşulları imzalanan kiralama sözleşmesinde açıkça tanımlanır. Genel kural, minimum kiralama süresinin tamamlanmasıdır; bunun ötesindeki erken iadelerde kalan süre için kısmi mahsup değerlendirilebilir.`,
        `Erken iade mümkündür ancak koşulları sözleşmeye bağlıdır. Minimum süre dolmadan yapılan iadelerde minimum süre bedeli geçerli olur; sonrasında kalan günler için düzeltme yapılır. Bu nedenle minimum süreyi baştan doğru seçmek önemlidir.`,
        `Sözleşme feshi ve erken iade şartları yazılı olarak baştan belirlenir — belirsizlik bırakmıyoruz. İşin beklenenden erken bitmesi ihtimali varsa bunu teklif aşamasında söyleyin, süre yapısını buna göre kuralım.`,
        `İade koşulları sözleşmede tanımlıdır. Makine, teslim edildiği durumda ve akü şarjı yapılmış hâlde iade edilir; hasar tespiti karşılıklı tutanakla yapılır. Erken iadede kalan süreye ilişkin mahsup şartları sözleşmede yazılıdır.`,
        `Erken iade talebi değerlendirilir; minimum süre şartı saklı kalmak kaydıyla kalan dönem için düzenleme yapılabilir. ${ilkBolge(site)} içi iadelerde nakliye organizasyonu genelde aynı gün planlanabilir.`,
        `Fesih ve erken iade maddeleri sözleşmenin ayrı bir bölümüdür. Proje süresi belirsizse kısa minimum süreyle başlayıp uzatma yapmak, uzun süreyle başlayıp erken iade etmekten hemen her zaman daha avantajlıdır.`,
    ]);
}

export function cevapBelge(site: SiteIcerik): string {
    return varyantSec(site, "sss-belge", [
        `Makinenin güncel periyodik kontrol belgesi talep edildiğinde paylaşılır; belge tarihi teslimat öncesi kontrol edilir. Yükseltici platformlar 6331 Sayılı İSG Kanunu kapsamında yıllık kontrole tabidir.`,
        `Evet. Tüm makinelerimiz TÜRKAK akredite kuruluşça periyodik kontrolden geçirilir ve uygunluk (yeşil etiket) raporuyla teslim edilir. Belgeyi teslimatta fiziksel olarak makineyle birlikte veriyoruz.`,
        `Periyodik kontrol raporu her makinede mevcuttur ve teslimatta paylaşılır. Şantiye girişinde İSG uzmanınız bu belgeyi isteyecektir; belge tarihinin kiralama dönemini kapsadığını teslimat öncesi kendimiz kontrol ediyoruz.`,
        `6331 Sayılı Kanun kapsamındaki yıllık periyodik kontrol belgeleri güncel tutulur. ${ilkBolge(site)} bölgesindeki şantiye girişlerinde bu belge talep edilir; makineyle birlikte teslim ediyoruz, ayrıca istenirse önceden e-posta ile de gönderiyoruz.`,
        `Belge paylaşımı standart uygulamamızdır. Periyodik kontrol raporu, EN 280 uygunluk bilgisi ve varsa operatör yeterlilik belgesi teslimat dosyasında yer alır.`,
        `Talep etmenize gerek kalmadan teslimatta veriyoruz. Yükseltici platformların yıllık periyodik kontrolü yasal zorunluluktur; kontrolü geçmemiş makine sahaya çıkmaz.`,
    ]);
}

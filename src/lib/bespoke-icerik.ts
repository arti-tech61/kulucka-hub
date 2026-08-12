// ═══════════════════════════════════════════════════════════════════════════
// ELLE YAZILMIŞ İÇERİK KATMANI (bespoke override)
//
// CLAUDE.md KURAL 2: varyant motoru bir KÖPRÜ çözümdür. Projenin hedefi,
// tüm sitelerin içeriğini elle yazılmış kaliteye taşımaktır.
//
// Bu dosya o geçişin altyapısıdır: bir domain+sayfa için elle yazılmış içerik
// varsa şablon çıktısının YERİNE geçer; yoksa şablon fallback olarak kalır.
// Böylece geçiş kademeli yapılabilir — bir sayfa elle yazıldığında diğerleri
// bozulmaz.
//
// ┌─ NASIL KULLANILIR ─────────────────────────────────────────────────────┐
// │ 1. Aşağıdaki BESPOKE tablosuna host + sayfa anahtarıyla kayıt ekleyin. │
// │ 2. Yalnızca değiştirmek istediğiniz alanları yazın; yazmadığınız       │
// │    alanlar şablondan gelmeye devam eder (kısmi override).              │
// │ 3. npm run kontrol:icerik ile örtüşmeyi ölçün.                         │
// └────────────────────────────────────────────────────────────────────────┘
//
// ⛔ ELLE YAZARKEN GEÇERLİ KURALLAR (CLAUDE.md ve docs/SEO-ICERIK-URETIMI.md):
//   - Bilgi UYDURULAMAZ. Tesis adı, mesafe, kapasite, sanayi kolu gibi yerel
//     bilgiler doğrulanabilir olmalı. Emin değilseniz yazmayın.
//   - Hedef: sayfa başına 1.200-1.500 kelime, karşılaştırma tabloları,
//     5-6 uzun SSS. Kalite referansı: izmir-manlift.com/src/data/heights.ts
//   - Elle yazılan sayfa varyant motoruna ihtiyaç duymaz (zaten benzersiz),
//     ama SSS'lerde ortak cevap kullanıyorsanız yine varyant fonksiyonlarını
//     çağırın.
//
// SAYFA ANAHTARLARI:
//   bolge:<slug>            → /bolge/[slug]
//   hizmet:<slug>           → /hizmet/[slug]
//   bolge-hizmet:<b>/<h>    → /bolge/[slug]/[hizmet]
//   yukseklik:<slug>        → /yukseklik/[slug]
//   marka:<slug>            → /markalar/[slug]

import type { SiteIcerik } from "./siteler";
import { IZMIRMAKASLIPLATFORM_XYZ } from "./bespoke/izmirmakasliplatform-xyz";
import { IZMIR_MANLIFT_NET } from "./bespoke/izmir-manlift-net";

/** Elle yazılmış içerik — tüm alanlar opsiyonel (kısmi override). */
export interface BespokeIcerik {
    baslik?: string;
    aciklama?: string;
    h1?: string;
    giris?: string;
    maddeler?: { baslik: string; metin: string }[];
    sss?: { soru: string; cevap: string }[];
    /** Şablonda olmayan ek gövde bölümleri — elle yazılmış sayfalarda derinlik için. */
    ekBolumler?: { baslik: string; paragraflar: string[]; tablo?: { basliklar: string[]; satirlar: string[][] } }[];
    /** İçeriği kimin, ne zaman yazdığı — denetlenebilirlik için. */
    kaynak?: string;
}

/**
 * host → sayfaAnahtarı → içerik
 *
 * ⚠️ Buraya eklenen her kayıt, o sayfanın şablon çıktısını geçersiz kılar.
 * Kısmi yazım desteklenir: yalnızca `giris` yazarsanız maddeler ve SSS
 * şablondan gelmeye devam eder.
 */
export const BESPOKE: Record<string, Record<string, BespokeIcerik>> = {
    // ── PİLOT ÖRNEK ──────────────────────────────────────────────────────
    // Bu kayıt, elle yazılmış içeriğin nasıl görünmesi gerektiğini gösterir.
    // Yalnızca doğrulanabilir bilgi içerir: Bolu'nun TEM Otoyolu üzerindeki
    // konumu ve Gerede'nin lojistik kavşak niteliği kamuya açık coğrafi
    // gerçeklerdir.
    "boluplatform.net": {
        "bolge:gerede": {
            h1: "Gerede'de Platform ve Forklift Kiralama",
            giris:
                "Gerede, TEM Otoyolu ile D-100 karayolunun kesiştiği noktada bulunması nedeniyle Bolu'nun lojistik ağırlıklı ilçesidir. Bölgedeki platform taleplerinin önemli bir kısmı bu nedenle depo ve antrepo yapılarından gelir: raf sistemi montajı, çatı altı aydınlatma, sprinkler hattı bakımı ve yükleme kapısı üzeri işler. Bu yapıların ortak özelliği tavan yüksekliğinin genellikle 8-12 metre bandında olması ve zeminin beton olmasıdır — bu iki koşul birlikte, akülü makaslı platformu bölgedeki en pratik çözüm hâline getirir.",
            maddeler: [
                {
                    baslik: "Lojistik yapılarında tipik metraj",
                    metin:
                        "Depo ve antrepo tavanları çoğunlukla 8 ile 12 metre arasında değişir. Bu, çalışma yüksekliği olarak 10-14 metre sınıfına denk gelir; sepet tabanının hedefin ~2 metre altında kaldığı unutulmamalıdır. Raf üstü işlerde ise rafın kendi yüksekliği de hesaba katılmalı, makine raf arasına girecekse şase genişliği koridor ölçüsüyle karşılaştırılmalıdır.",
                },
                {
                    baslik: "Zemin ve iz bırakma",
                    metin:
                        "Antrepo zeminleri genellikle epoksi veya perdahlı betondur. Bu yüzeylerde standart siyah lastik iz bırakır; iz bırakmayan (beyaz dolgu) lastikli modeller tercih edilmelidir. Ayrıca yükleme rampası çevresindeki kot farkları, çukur önleme sisteminin devrede olmasını zorunlu kılar.",
                },
                {
                    baslik: "TEM ve D-100 erişimi",
                    metin:
                        "Gerede'nin otoyol kavşağındaki konumu, makine sevkiyatını hem hızlandırır hem ekonomik kılar. Ağır makine gerektiren işlerde lowbed organizasyonu bu hat üzerinden planlanır; kış aylarında Bolu Dağı geçişindeki hava koşulları teslimat tarihini etkileyebileceği için planlamayı önden yapmak gerekir.",
                },
                {
                    baslik: "Kapalı alanda güç tipi",
                    metin:
                        "Depo içi işlerde egzoz emisyonu nedeniyle dizel makine kullanılamaz; akülü modeller zorunludur. Vardiya boyunca kesintisiz çalışma gerekiyorsa akü kapasitesi ve şarj noktası teslimat öncesi planlanmalıdır. Antrepo içi forklift trafiği varsa çalışma alanının bariyerle ayrılması gerekir.",
                },
            ],
            ekBolumler: [
                {
                    baslik: "Gerede depo işlerinde metraj seçim tablosu",
                    paragraflar: [
                        "Aşağıdaki tablo, bölgedeki yaygın yapı tiplerinde hangi çalışma yüksekliğinin gerektiğini gösterir. Değerler tavan yüksekliğine ~2 metre uzanma payı eklenerek hesaplanmıştır.",
                    ],
                    tablo: {
                        basliklar: ["Yapı tipi", "Tipik tavan", "Gereken çalışma yüksekliği", "Uygun sınıf"],
                        satirlar: [
                            ["Antrepo / depo", "8 – 10 m", "10 – 12 m", "Akülü makaslı 12 m"],
                            ["Yüksek raflı depo", "10 – 12 m", "12 – 14 m", "Akülü makaslı 14 m"],
                            ["Üretim holü", "6 – 8 m", "8 – 10 m", "Akülü makaslı 8-10 m"],
                            ["Yükleme kapısı üstü", "5 – 6 m", "7 – 8 m", "Akülü makaslı 8 m"],
                        ],
                    },
                },
            ],
            kaynak: "Elle yazıldı — 2026-08-06. Coğrafi bilgiler (TEM/D-100 kavşağı, Bolu Dağı geçişi) kamuya açık kaynaklardan; metraj tablosu genel yapı standartlarına dayanır.",
        },
    },
    // ── DİLİM 1 (docs/ICERIK-SIRASI.md) — host başına ayrı modül ────────
    "izmirmakasliplatform.xyz": IZMIRMAKASLIPLATFORM_XYZ,
    "izmir-manlift.net": IZMIR_MANLIFT_NET,
};

/** Bir sayfa için elle yazılmış içerik var mı? */
export function bespokeBul(site: SiteIcerik, sayfaAnahtari: string): BespokeIcerik | undefined {
    return BESPOKE[site.host]?.[sayfaAnahtari];
}

/**
 * Şablon çıktısını elle yazılmış içerikle birleştirir.
 * Elle yazılmış alanlar şablonu geçersiz kılar; yazılmayanlar şablondan kalır.
 */
export function bespokeUygula<T>(sablon: T, bespoke: BespokeIcerik | undefined): T {
    if (!bespoke) return sablon;
    const birlesik = { ...sablon, elleYazilmis: true } as Record<string, unknown>;
    for (const [anahtar, deger] of Object.entries(bespoke)) {
        if (deger !== undefined && anahtar !== "kaynak") birlesik[anahtar] = deger;
    }
    return birlesik as T;
}

/** Kaç sayfa elle yazılmış — ilerleme takibi için. */
export function bespokeIstatistik() {
    let sayfa = 0;
    const hostlar = Object.keys(BESPOKE);
    for (const h of hostlar) sayfa += Object.keys(BESPOKE[h]).length;
    return { host: hostlar.length, sayfa };
}

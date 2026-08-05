/**
 * Hazirlanan siteler.
 *
 * Bu alan adlarinin DNS kaydi yoktu; hicbiri yayinda degildi. Tam site
 * hazirlanana kadar her biri KENDI sehir, ilce ve makine odagiyla gecici bir
 * tanitim sayfasi sunar.
 *
 * Neden her birine ayri icerik: `hostIcinSite` bilinmeyen bir host'u
 * `siteler[0]`a dusuruyor. Tanimlanmadan yonlendirilirlerse hepsi ayni
 * (eklemliplatform.com.tr) icerigini sunar ve kopya icerik olusur.
 *
 * Ayni sehir icin birden fazla alan adi var (Izmir 6, Eskisehir 4). Ayni metni
 * tekrarlamak dogrudan "kapi sayfasi" kalibidir; bu yuzden her alan adina
 * farkli ilce hatti ve farkli makine odagi verilmistir. Gercek icerik
 * yazilana kadar bu sayfalar gecicidir.
 *
 * Terminoloji: Makasli / Eklemli / Teleskopik / Orumcek Platform, Dikey
 * Personel Yukseltici, Elektrikli ve Dizel-LPG Forklift, Telehandler.
 * "Bomlu platform" bir urun adi DEGILDIR (arama terimi olarak gecebilir).
 */

export interface HazirlananSite {
    host: string;
    sehir: string;
    baslik: string;
    aciklama: string;
    h1: string;
    /** Sayfanin ana metni; her alan adinda farklidir. */
    paragraflar: string[];
    /** Bu alan adinin one cikardigi makine/hizmet hatti. */
    odakHizmetler: string[];
    /** Hizmet verilecek ilce ve sanayi bolgeleri. */
    bolgeler: string[];
    anaSite: { ad: string; url: string };
    /** Ana sitedeki en alakali derin sayfa; ic baglanti olarak gosterilir. */
    ilgiliSayfa?: { ad: string; url: string };
    telefon?: string;
    telefonGosterim?: string;
    eposta?: string;
}

const ARTI = { ad: "Artı Platform", url: "https://www.artiplatform.com.tr" };
const ARTI_TEL = "+905305518961";
const ARTI_TEL_GOSTERIM = "0530 551 89 61";
const ARTI_EPOSTA = "kiralama@artiplatform.com.tr";

export const hazirlananSiteler: HazirlananSite[] = [
    // ---------------------------------------------------------------- ANKARA

    // ----------------------------------------------------------------- BURSA

    // ------------------------------------------------------------- ESKİŞEHİR

    // ----------------------------------------------------------------- İZMİR

    // ------------------------------------------------- FARKLI DIKEY: TABELA
    {
        host: "bursa-tabela.net",
        sehir: "Bursa",
        baslik: "Bursa Tabela ve Reklam Üretimi | Hazırlanıyor",
        aciklama:
            "Bursa'da tabela, ışıklı harf ve cephe giydirme üretimi için hazırlık sürüyor.",
        h1: "Bursa Tabela ve Reklam Üretimi",
        paragraflar: [
            "Bu alan adı, platform kiralama değil tabela ve açık hava reklam üretimi içindir. Bursa'da tabela, kutu harf, ışıklı pano ve cephe giydirme işleri için sayfa hazırlanıyor.",
            "Tabela işi iki ayrı aşamadan oluşur: üretim ve montaj. Yüksek cephelerde montaj aşaması, ayrıca yüksekte çalışma ekipmanı gerektirir; bu iki tarafın birlikte planlanması iş süresini kısaltır.",
            "Ölçü, cephe fotoğrafı ve malzeme tercihinizi paylaşın; üretim ve montaj planı birlikte çıkarılsın.",
        ],
        odakHizmetler: [
            "Tabela üretimi",
            "Kutu harf ve ışıklı pano",
            "Cephe giydirme",
            "Yüksek cephe montajı",
            "Kurumsal kimlik uygulaması",
        ],
        bolgeler: ["Nilüfer", "Osmangazi", "Yıldırım", "İnegöl", "Bursa geneli"],
        anaSite: { ad: "Simya Reklam", url: "https://www.simyareklam.com.tr" },
    },
];

export function hostIcinHazirlananSite(host: string): HazirlananSite | undefined {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    return hazirlananSiteler.find((s) => s.host === temiz);
}

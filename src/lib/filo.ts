// ═══════════════════════════════════════════════════════════════════════════
// ⛔ KOPYA İÇERİK YASAĞI — GEÇİLMEZ KURAL
//
// Bu dosya ~7 marka sayfası × 85 domain besler.
// Değişiklikten sonra ZORUNLU:  npm run kontrol:icerik
// Tam kurallar: CLAUDE.md · docs/SEO-ICERIK-URETIMI.md
// ═══════════════════════════════════════════════════════════════════════════
//
// GERÇEK FİLO ENVANTERİ
//
// ⚠️ BU VERİ UYDURULAMAZ. Buradaki makineler Artı Platform'un GERÇEK filosudur;
// kaynak: saygitech/izmir-manlift.com deposundaki src/data/machines.ts (aynı
// şirketin filosu, kullanıcı tarafından teyit edildi — 2026-08-06).
//
// Yeni makine eklerken veya teknik değer değiştirirken:
//   - Değer üreticinin resmi kataloğundan doğrulanmalı
//   - Filoda olmayan makine EKLENEMEZ (marka sayfası "filomuzda var" der)
//   - Emin değilseniz eklemeyin — yanlış bilgi, olmayan bilgiden kötüdür
//
// Görseller public/filo/ altında, üreticinin resmi sitesinden alınmıştır
// (bkz. docs/GORSEL-KURALLARI.md — bayi filigranlı görsel kullanılamaz).

export interface FiloMakinesi {
    id: string;
    ad: string;
    marka: MarkaAdi;
    kategori: "makasli" | "eklemli" | "teleskopik" | "dikey";
    kategoriAdi: string;
    /** Maksimum çalışma yüksekliği (m) — platform yüksekliği + ~2 m uzanma. */
    yukseklik: number;
    /** Platform taşıma kapasitesi (kg) — personel + alet + malzeme. */
    kapasite: number;
    gucTipi: "akulu" | "dizel" | "hibrit";
    gucAdi: string;
    zemin: string;
    agirlik: number;
    gorsel: string;
}

export type MarkaAdi = "Dingli" | "Sinoboom" | "Zoomlion" | "Haulotte" | "JLG" | "Genie" | "Manitou";

export const FILO: FiloMakinesi[] = [
    {
        id: "dingli-jcpt0808",
        ad: "Dingli JCPT0808 Mikro Akülü Makaslı",
        marka: "Dingli",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 7.8,
        kapasite: 230,
        gucTipi: "akulu",
        gucAdi: "24V Akülü Elektrik",
        zemin: "İç Mekan / Dar Koridor",
        agirlik: 1250,
        gorsel: "/filo/dingli-jcpt0808.jpg",
    },
    {
        id: "dingli-jcpt1208ac",
        ad: "Dingli JCPT1208AC Akülü Makaslı",
        marka: "Dingli",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 12.0,
        kapasite: 300,
        gucTipi: "akulu",
        gucAdi: "AC Motorlu Akülü Elektrik",
        zemin: "İç Mekan / Düz Zemin",
        agirlik: 2600,
        gorsel: "/filo/dingli-jcpt1208ac.jpg",
    },
    {
        id: "dingli-jcpt1412dc",
        ad: "Dingli JCPT1412DC Akülü Makaslı",
        marka: "Dingli",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 13.8,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "4x12V Akülü Elektrik",
        zemin: "İç Mekan / İz Bırakmayan Teker",
        agirlik: 3100,
        gorsel: "/filo/dingli-jcpt1412dc.jpg",
    },
    {
        id: "dingli-jcpt1612dc",
        ad: "Dingli JCPT1612DC",
        marka: "Dingli",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 15.7,
        kapasite: 250,
        gucTipi: "akulu",
        gucAdi: "4x12V / 300Ah Akülü Elektrik",
        zemin: "İç Mekan / İz Bırakmayan Teker",
        agirlik: 3260,
        gorsel: "/filo/dingli-jcpt1612dc.jpg",
    },
    {
        id: "sinoboom-gtjz0608",
        ad: "Sinoboom GTJZ0608 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 7.8,
        kapasite: 230,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç Mekan / Dar Koridor",
        agirlik: 1526,
        gorsel: "/filo/sinoboom-gtjz0608.jpg",
    },
    {
        id: "sinoboom-gtjz0612",
        ad: "Sinoboom GTJZ0612 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 7.8,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 1750,
        gorsel: "/filo/sinoboom-gtjz0612.jpg",
    },
    {
        id: "sinoboom-gtjz0808",
        ad: "Sinoboom GTJZ0808 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 9.7,
        kapasite: 230,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç Mekan / Dar Koridor",
        agirlik: 1800,
        gorsel: "/filo/sinoboom-gtjz0808.jpg",
    },
    {
        id: "sinoboom-gtjz1012",
        ad: "Sinoboom GTJZ1012 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 11.7,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 2600,
        gorsel: "/filo/sinoboom-gtjz1012.jpg",
    },
    {
        id: "sinoboom-gtjz1212",
        ad: "Sinoboom GTJZ1212 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 13.9,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 3050,
        gorsel: "/filo/sinoboom-gtjz1212.jpg",
    },
    {
        id: "sinoboom-gtjz1414",
        ad: "Sinoboom GTJZ1414 Akülü Makaslı",
        marka: "Sinoboom",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 15.8,
        kapasite: 350,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 3600,
        gorsel: "/filo/sinoboom-gtjz1414.jpg",
    },
    {
        id: "zoomlion-zs0607ac",
        ad: "Zoomlion ZS0607AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 7.8,
        kapasite: 240,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç Mekan / Dar Koridor",
        agirlik: 1500,
        gorsel: "/filo/zoomlion-zs0607ac.jpg",
    },
    {
        id: "zoomlion-zs0808ac",
        ad: "Zoomlion ZS0808AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 9.7,
        kapasite: 230,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç Mekan / Dar Koridor",
        agirlik: 1750,
        gorsel: "/filo/zoomlion-zs0808ac.jpg",
    },
    {
        id: "zoomlion-zs0812ac",
        ad: "Zoomlion ZS0812AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 9.9,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 2200,
        gorsel: "/filo/zoomlion-zs0812ac.jpg",
    },
    {
        id: "zoomlion-zs1012ac",
        ad: "Zoomlion ZS1012AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 11.8,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 2600,
        gorsel: "/filo/zoomlion-zs1012ac.jpg",
    },
    {
        id: "zoomlion-zs1212ac",
        ad: "Zoomlion ZS1212AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 13.8,
        kapasite: 320,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 3100,
        gorsel: "/filo/zoomlion-zs1212ac.jpg",
    },
    {
        id: "zoomlion-zs1414ac",
        ad: "Zoomlion ZS1414AC Akülü Makaslı",
        marka: "Zoomlion",
        kategori: "makasli",
        kategoriAdi: "Makaslı Akülü Platform",
        yukseklik: 15.8,
        kapasite: 350,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik (Sıfır Emisyon)",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 3800,
        gorsel: "/filo/zoomlion-zs1414ac.jpg",
    },
    {
        id: "genie-z45-25-rt",
        ad: "Genie Z-45/25 RT",
        marka: "Genie",
        kategori: "eklemli",
        kategoriAdi: "Eklemli Dizel 4x4 Platform",
        yukseklik: 15.97,
        kapasite: 227,
        gucTipi: "dizel",
        gucAdi: "Deutz Dizel 4x4",
        zemin: "Engebeli Dış Mekan",
        agirlik: 6400,
        gorsel: "/filo/genie-z4525rt.jpg",
    },
    {
        id: "haulotte-ha26-rtj-pro",
        ad: "Haulotte HA26 RTJ PRO",
        marka: "Haulotte",
        kategori: "eklemli",
        kategoriAdi: "Eklemli Dizel 4x4 Platform",
        yukseklik: 26.4,
        kapasite: 250,
        gucTipi: "dizel",
        gucAdi: "Kubota Dizel 4x4 Sürüş",
        zemin: "Zorlu Arazi / Engebeli Şantiye",
        agirlik: 15500,
        gorsel: "/filo/haulotte-ha26-rtj-pro.jpg",
    },
    {
        id: "sinoboom-ab14ej",
        ad: "Sinoboom AB14EJ Akülü Eklemli",
        marka: "Sinoboom",
        kategori: "eklemli",
        kategoriAdi: "Eklemli Akülü Platform",
        yukseklik: 16.0,
        kapasite: 230,
        gucTipi: "akulu",
        gucAdi: "AC Motorlu Akülü Sistem",
        zemin: "İç ve Dış Mekan Düz Zemin",
        agirlik: 7100,
        gorsel: "/filo/sinoboom-ab14ej.jpg",
    },
    {
        id: "dingli-bt26rt",
        ad: "Dingli BT26RT Teleskopik 58m Sınıfı",
        marka: "Dingli",
        kategori: "teleskopik",
        kategoriAdi: "Teleskopik Ağır Hizmet Platform",
        yukseklik: 58.0,
        kapasite: 454,
        gucTipi: "hibrit",
        gucAdi: "Dizel + Akülü Hibrit Sistem",
        zemin: "Ağır Arazi ve Endüstri",
        agirlik: 28500,
        gorsel: "/filo/dingli-bt26rt.jpg",
    },
    {
        id: "jlg-1350sjp",
        ad: "JLG 1350SJP Teleskopik",
        marka: "JLG",
        kategori: "teleskopik",
        kategoriAdi: "Teleskopik Dizel 4x4 Platform",
        yukseklik: 43.3,
        kapasite: 450,
        gucTipi: "dizel",
        gucAdi: "Deutz TD 2.9 L4 Dizel 4x4",
        zemin: "Ağır Şantiye / Dış Mekan",
        agirlik: 20400,
        gorsel: "/filo/jlg-1350sjp.jpg",
    },
    {
        id: "haulotte-star-10",
        ad: "Haulotte Star 10 Dikey",
        marka: "Haulotte",
        kategori: "dikey",
        kategoriAdi: "Dikey Akülü Mast Platform",
        yukseklik: 10.0,
        kapasite: 200,
        gucTipi: "akulu",
        gucAdi: "24V Akülü Elektrik",
        zemin: "İç Mekan Dar Koridor",
        agirlik: 2735,
        gorsel: "/filo/haulotte-star-10.jpg",
    },
    {
        id: "manitou-100-vjr",
        ad: "Manitou 100 VJR Dikey",
        marka: "Manitou",
        kategori: "dikey",
        kategoriAdi: "Dikey Döner Kuleli Platform",
        yukseklik: 9.9,
        kapasite: 200,
        gucTipi: "akulu",
        gucAdi: "Akülü Elektrik",
        zemin: "Hassas Zemin Koridor",
        agirlik: 2650,
        gorsel: "/filo/manitou-100vjr.jpg",
    },
];

export function markaMakineleri(marka: MarkaAdi): FiloMakinesi[] {
    return FILO.filter((m) => m.marka === marka);
}

export function makineBul(id: string): FiloMakinesi | undefined {
    return FILO.find((m) => m.id === id);
}

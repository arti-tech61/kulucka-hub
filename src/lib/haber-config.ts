import { yazilar as izmirsektorYazilar, kategoriler as izmirsektorKategoriler, type Yazi } from "@/lib/yazilar";
import { guvenliYazilar, guvenliKategoriler } from "@/lib/yazilar-guvenli";

export interface HaberSitesi {
    host: string;
    gaId: string;
    adOn: string; // logo ilk parça
    adSon: string; // logo renkli parça
    renk: "red" | "amber"; // marka vurgu rengi
    slogan: string;
    baslik: string;
    aciklama: string;
    altBilgi: string;
    kategoriler: readonly string[];
    yazilar: Yazi[];
}

export const haberSiteleri: HaberSitesi[] = [
    {
        host: "izmirsektor.net",
        gaId: "G-6Q4PC3QLDC",
        adOn: "İzmir",
        adSon: "Sektör",
        renk: "red",
        slogan: "İzmir iş ve sanayi gündemi",
        baslik: "İzmir Sektör | İzmir İş ve Sanayi Haberleri",
        aciklama:
            "İzmir'in sanayi, lojistik, enerji ve iş dünyası gündemi: OSB'lerden limana, yatırımlardan iş güvenliğine bölgeyi izleyen bağımsız yayın.",
        altBilgi: "İzmir Sektör · İzmir'in iş, sanayi ve yatırım gündemini izler.",
        kategoriler: izmirsektorKategoriler,
        yazilar: izmirsektorYazilar,
    },
    {
        host: "guvenliyukselis.com",
        gaId: "G-SN3Z6SS0LE",
        adOn: "Güvenli",
        adSon: "Yükseliş",
        renk: "amber",
        slogan: "Yüksekte çalışma ve İSG gündemi",
        baslik: "Güvenli Yükseliş | İş Sağlığı ve Güvenliği Haberleri",
        aciklama:
            "Yüksekte çalışma güvenliği, İSG mevzuatı, ekipman standartları ve saha uygulamaları: iş güvenliği profesyonellerinin gündemini izleyen bağımsız yayın.",
        altBilgi: "Güvenli Yükseliş · Yüksekte çalışma ve iş güvenliği gündemini izler.",
        kategoriler: guvenliKategoriler,
        yazilar: guvenliYazilar,
    },
];

export function hostIcinHaberSitesi(host: string): HaberSitesi | undefined {
    const temiz = host.toLowerCase().replace(/^www\./, "").split(":")[0];
    // izmirsektor.com Türkiye'de erişim engeli aldı (2026-07-20) → .net ana alan adı; 301 zaten var, bu SSR yedeği
    const esas = temiz === "izmirsektor.com" ? "izmirsektor.net" : temiz;
    return haberSiteleri.find((s) => s.host === esas);
}

export function haberYazisi(site: HaberSitesi, slug: string): Yazi | undefined {
    return site.yazilar.find((y) => y.slug === slug);
}

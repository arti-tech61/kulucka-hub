import { hostIcinSite } from "@/lib/siteler";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { hostIcinHazirlananSite } from "@/lib/hazirlanan-siteler";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { hostBloglari } from "@/lib/blog";

export const dynamic = "force-dynamic";

/**
 * llms.txt — yapay zekâ motorlarına sitenin ne olduğunu düz metinle anlatan
 * gelişmekte olan standart (https://llmstxt.org). GEO erişim puanının bir
 * bileşeni: dosyanın varlığı, ChatGPT/Claude/Perplexity gibi motorların
 * siteyi doğru özetleyip kaynak göstermesini kolaylaştırır.
 *
 * İçerik host'a göre, panelde zaten tanımlı verilerden üretilir; yeni bilgi
 * uydurulmaz. Bilinmeyen host 404 alır (robots.txt'teki kalıpla tutarlı).
 */
export async function GET(istek: Request) {
    const host = (istek.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];

    const satirlar: string[] = [];

    const haber = hostIcinHaberSitesi(host);
    const site = hostIcinSite(host);
    const hazirlanan = hostIcinHazirlananSite(host);

    if (haber) {
        satirlar.push(
            `# ${haber.adOn} ${haber.adSon}`,
            "",
            `> ${haber.aciklama}`,
            "",
            "## Bağlantılar",
            "",
            `- [Ana sayfa](https://${haber.host}/)`,
        );
        for (const y of haber.yazilar.slice(0, 20)) {
            satirlar.push(`- [${y.baslik}](https://${haber.host}/yazi/${y.slug})`);
        }
    } else if (site) {
        satirlar.push(
            `# ${site.h1}`,
            "",
            `> ${site.aciklama}`,
            "",
            "## Hizmetler",
            "",
            ...site.hizmetler.map((h) => `- ${h}`),
            "",
            "## Bağlantılar",
            "",
            `- [Ana sayfa](https://${site.host}/)`,
        );
        for (const alt of hostAltSayfalari(site.host).slice(0, 15)) {
            satirlar.push(`- [${alt.baslik}](https://${site.host}/${alt.slug})`);
        }
        for (const blog of hostBloglari(site.host).slice(0, 10)) {
            satirlar.push(`- [${blog.baslik}](https://${site.host}/blog/${blog.slug})`);
        }
        satirlar.push(
            "",
            "## Notlar",
            "",
            `- Hizmet bölgesi: ${site.bolge}.`,
            `- İletişim: ${site.telefonGosterim} · ${site.eposta}`,
            `- Bağlı olduğu kuruluş: ${site.anaSite.ad} (${site.anaSite.url})`,
        );
    } else if (hazirlanan) {
        satirlar.push(
            `# ${hazirlanan.h1}`,
            "",
            `> ${hazirlanan.aciklama}`,
            "",
            "## Hazırlanan hizmetler",
            "",
            ...hazirlanan.odakHizmetler.map((h) => `- ${h}`),
            "",
            "## Hizmet bölgeleri",
            "",
            `${hazirlanan.sehir}: ${hazirlanan.bolgeler.join(", ")}`,
            "",
            "## Bağlantılar",
            "",
            `- [Ana sayfa](https://${hazirlanan.host}/)`,
            `- [${hazirlanan.anaSite.ad}](${hazirlanan.anaSite.url})`,
        );
    } else {
        return new Response("Not found", { status: 404 });
    }

    satirlar.push("");
    return new Response(satirlar.join("\n"), {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}

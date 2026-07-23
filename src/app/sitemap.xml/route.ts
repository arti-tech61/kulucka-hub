import { hostIcinSite } from "@/lib/siteler";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { rehberler } from "@/lib/rehberler";
import { kurumsalSayfalar } from "@/lib/kurumsal-sayfalar";
import { haberKurumsalSayfalar } from "@/lib/haber-kurumsal";

export const dynamic = "force-dynamic";

function xmlKacis(s: string) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Her host kendi sitemap'ini üretir; GSC'ye host bazında gönderilir.
export async function GET(istek: Request) {
    const host = (istek.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
    const bugun = new Date().toISOString().slice(0, 10);
    const urller: { loc: string; lastmod: string }[] = [];

    const haber = hostIcinHaberSitesi(host);
    if (haber) {
        urller.push({ loc: `https://${haber.host}/`, lastmod: bugun });
        for (const y of haber.yazilar) {
            urller.push({ loc: `https://${haber.host}/yazi/${y.slug}`, lastmod: y.tarih });
        }
        for (const sayfa of haberKurumsalSayfalar(haber).filter((s) => s.indexlenebilir)) {
            urller.push({ loc: `https://${haber.host}/${sayfa.slug}`, lastmod: bugun });
        }
    } else {
        const site = hostIcinSite(host);
        if (site) {
            urller.push({ loc: `https://${site.host}/`, lastmod: bugun });
            for (const alt of hostAltSayfalari(site.host)) {
                urller.push({ loc: `https://${site.host}/${alt.slug}`, lastmod: bugun });
            }
            for (const sayfa of kurumsalSayfalar(site).filter((s) => s.indexlenebilir)) {
                urller.push({ loc: `https://${site.host}/${sayfa.slug}`, lastmod: bugun });
            }
            if (site.host === "yuksektecalismarehberi.com") {
                urller.push({ loc: `https://${site.host}/rehber/telehandler-mi-bomlu-platform-mu`, lastmod: bugun });
                for (const r of rehberler) {
                    urller.push({ loc: `https://${site.host}/rehber/${r.slug}`, lastmod: bugun });
                }
            }
        }
    }

    const govde = urller
        .map((u) => `  <url><loc>${xmlKacis(u.loc)}</loc><lastmod>${u.lastmod}</lastmod></url>`)
        .join("\n");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${govde}\n</urlset>\n`;
    return new Response(xml, {
        headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
    });
}

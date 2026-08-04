import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { hostIcinSite } from "@/lib/siteler";
import { hostIcinHazirlananSite } from "@/lib/hazirlanan-siteler";

export const dynamic = "force-dynamic";

export async function GET(istek: Request) {
    const host = (istek.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
    // Hazirlanan siteler de taranabilir olmalidir; aksi halde bilinmeyen host
    // dalina duser ve `Disallow: /` ile tamamen kapanirlar.
    const canonicalHost =
        hostIcinHaberSitesi(host)?.host
        ?? hostIcinSite(host)?.host
        ?? hostIcinHazirlananSite(host)?.host;
    const govde = canonicalHost
        ? `User-agent: *\nAllow: /\n\nSitemap: https://${canonicalHost}/sitemap.xml\n`
        : "User-agent: *\nDisallow: /\n";
    return new Response(govde, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
    });
}

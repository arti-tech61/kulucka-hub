export const dynamic = "force-dynamic";

export async function GET(istek: Request) {
    const host = (istek.headers.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
    const govde = `User-agent: *\nAllow: /\n\nSitemap: https://${host}/sitemap.xml\n`;
    return new Response(govde, {
        headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
    });
}

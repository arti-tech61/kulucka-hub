import { headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";
import { hostIcinSite, siteler } from "@/lib/siteler";

export const dynamic = "force-dynamic";

async function aktifSite() {
    const h = await headers();
    return hostIcinSite(h.get("host") ?? "") ?? siteler[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const site = await aktifSite();
    return {
        title: site.baslik,
        description: site.aciklama,
        alternates: { canonical: `https://${site.host}/` },
        openGraph: {
            title: site.baslik,
            description: site.aciklama,
            url: `https://${site.host}/`,
            locale: "tr_TR",
            type: "website",
        },
    };
}

export default async function Sayfa() {
    const site = await aktifSite();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: site.h1,
        url: `https://${site.host}`,
        areaServed: site.bolge,
        parentOrganization: { "@type": "Organization", name: site.anaSite.ad, url: site.anaSite.url },
    };
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${site.gaId}');
            `}</Script>

            <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">{site.bolge}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{site.h1}</h1>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
                {site.paragraflar.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            <h2 className="mt-10 text-xl font-bold">Hizmetlerimiz</h2>
            <ul className="mt-4 space-y-2">
                {site.hizmetler.map((h, i) => (
                    <li key={i} className="flex gap-2 text-slate-700">
                        <span className="text-blue-700 font-bold">✓</span>
                        {h}
                    </li>
                ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold">Teklif ve rezervasyon</h2>
                <p className="mt-2 text-slate-600">
                    Bu hizmet {site.anaSite.ad} filosu tarafından verilmektedir. Fiyat teklifi ve
                    makine uygunluğu için ana sitemizden bize ulaşın.
                </p>
                <a
                    href={`${site.anaSite.url}/iletisim`}
                    className="mt-5 inline-block rounded-full bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800"
                >
                    Teklif Al — {site.anaSite.ad}
                </a>
            </div>

            <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
                © {new Date().getFullYear()} {site.anaSite.ad} ailesi ·{" "}
                <a className="underline" href={site.anaSite.url}>{site.anaSite.url.replace("https://", "")}</a>
            </footer>
        </main>
    );
}

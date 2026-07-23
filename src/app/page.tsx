import { headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";
import { hostIcinSite, siteler } from "@/lib/siteler";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { HaberAnaSayfa } from "@/components/haber-sitesi";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

async function aktifSite() {
    return hostIcinSite(await aktifHost()) ?? siteler[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const haber = hostIcinHaberSitesi(await aktifHost());
    if (haber) {
        return {
            title: haber.baslik,
            description: haber.aciklama,
            alternates: { canonical: `https://${haber.host}/` },
            openGraph: {
                title: haber.baslik,
                description: haber.aciklama,
                url: `https://${haber.host}/`,
                locale: "tr_TR",
                type: "website",
            },
        };
    }
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
    const host = await aktifHost();
    const haber = hostIcinHaberSitesi(host);
    if (haber) return <HaberAnaSayfa site={haber} />;
    const site = await aktifSite();
    const altSayfalar = hostAltSayfalari(site.host);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": site.kategori ? "WebSite" : "LocalBusiness",
        name: site.h1,
        url: `https://${site.host}`,
        areaServed: site.bolge,
        telephone: site.telefon,
        email: site.eposta,
        parentOrganization: { "@type": "Organization", name: site.anaSite.ad, url: site.anaSite.url },
    };
    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {site.gaId && (<>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
              <Script id="ga" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.gaId}');
                document.addEventListener('click', function (e) {
                  var a = e.target && e.target.closest ? e.target.closest('a') : null;
                  if (!a || !a.href) return;
                  if (a.href.indexOf('tel:') === 0) gtag('event', 'telefon_tiklamasi');
                  else if (a.href.indexOf('wa.me') !== -1 || a.href.indexOf('api.whatsapp.com') !== -1) gtag('event', 'whatsapp_tiklamasi');
                }, true);
                document.addEventListener('submit', function (e) {
                  if (e.target && e.target.tagName === 'FORM') gtag('event', 'generate_lead');
                }, true);
              `}</Script>
            </>)}

            <p className="text-xs font-bold tracking-widest text-blue-700 uppercase">{site.bolge}</p>
            <nav aria-label="Ana menü" className="mb-8 flex flex-wrap gap-3 text-sm">
                <a href="/" className="font-semibold text-blue-800">Ana sayfa</a>
                <a href="/hakkimizda" className="text-blue-800">Hakkımızda</a>
                <a href="/teklif-hazirligi" className="text-blue-800">Talep rehberi</a>
                <a href="/iletisim" className="text-blue-800">İletişim</a>
            </nav>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{site.h1}</h1>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
                {site.paragraflar.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            <aside className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                Makine modeli, kapasite, belge, operatör, teslimat tarihi ve ücret;
                güncel uygunluk kontrolünden sonra yalnız yazılı teklif ve sözleşmeyle kesinleşir.
            </aside>

            <h2 className="mt-10 text-xl font-bold">Hizmetlerimiz</h2>
            <ul className="mt-4 space-y-2">
                {site.hizmetler.map((h, i) => (
                    <li key={i} className="flex gap-2 text-slate-700">
                        <span className="text-blue-700 font-bold">✓</span>
                        {h}
                    </li>
                ))}
            </ul>

            {altSayfalar.length > 0 && (
                <>
                    <h2 className="mt-10 text-xl font-bold">Detaylı bilgi</h2>
                    <ul className="mt-4 space-y-2">
                        {altSayfalar.map((a) => (
                            <li key={a.slug}>
                                <a className="text-blue-700 underline hover:text-blue-900" href={`/${a.slug}`}>{a.baslik}</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {site.bolumler && site.bolumler.length > 0 && (
                <>
                    <h2 className="mt-10 text-xl font-bold">Rehber bölümleri</h2>
                    <ul className="mt-4 space-y-2">
                        {site.bolumler.map((b) => (
                            <li key={b.href}>
                                <a className="text-blue-700 underline hover:text-blue-900" href={b.href}>{b.baslik}</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold">Teklif ve rezervasyon</h2>
                <p className="mt-2 text-slate-600">
                    Bu hizmet {site.anaSite.ad} filosu tarafından verilmektedir. Fiyat teklifi ve
                    makine uygunluğu için ana sitemizden bize ulaşın.
                </p>
                <a
                    href={`tel:${site.telefon}`}
                    className="mt-5 inline-block rounded-full bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800"
                >
                    Ara — {site.telefonGosterim}
                </a>
                <a className="mt-3 block text-sm text-blue-800 underline" href={`mailto:${site.eposta}`}>
                    {site.eposta}
                </a>
            </div>

            <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
                © {new Date().getFullYear()} {site.anaSite.ad} ailesi ·{" "}
                <a className="underline" href={site.anaSite.url}>{site.anaSite.url.replace("https://", "")}</a>
                <span> · </span><a className="underline" href="/gizlilik-politikasi">Gizlilik</a>
                <span> · </span><a className="underline" href="/kullanim-kosullari">Koşullar</a>
            </footer>
        </main>
    );
}

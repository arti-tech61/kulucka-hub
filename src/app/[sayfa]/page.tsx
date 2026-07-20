import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { altSayfaBul, hostAltSayfalari } from "@/lib/alt-sayfalar";
import { GaEtiketi } from "@/components/ga";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ sayfa: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { sayfa } = await params;
    const alt = altSayfaBul(host, sayfa);
    if (!alt) return {};
    return {
        title: alt.baslik,
        description: alt.aciklama,
        alternates: { canonical: `https://${host}/${alt.slug}` },
        openGraph: {
            title: alt.baslik,
            description: alt.aciklama,
            url: `https://${host}/${alt.slug}`,
            locale: "tr_TR",
            type: "website",
        },
    };
}

export default async function AltSayfaGorunum({ params }: { params: Promise<{ sayfa: string }> }) {
    const host = await aktifHost();
    const { sayfa } = await params;
    const site = hostIcinSite(host);
    const alt = altSayfaBul(host, sayfa);
    if (!site || !alt) notFound();
    const digerSayfalar = hostAltSayfalari(host).filter((s) => s.slug !== alt.slug);

    const jsonLd: Record<string, unknown>[] = [
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: alt.baslik,
            description: alt.aciklama,
            url: `https://${host}/${alt.slug}`,
            isPartOf: { "@type": "WebSite", name: site.h1, url: `https://${host}` },
        },
    ];
    if (alt.sss && alt.sss.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: alt.sss.map((s) => ({
                "@type": "Question",
                name: s.soru,
                acceptedAnswer: { "@type": "Answer", text: s.cevap },
            })),
        });
    }

    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            {jsonLd.map((j, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
            ))}
            <GaEtiketi gaId={site.gaId} />

            <Link href="/" className="text-sm text-slate-500 hover:underline">← {site.h1}</Link>
            <p className="mt-6 text-xs font-bold tracking-widest text-blue-700 uppercase">{site.bolge}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{alt.h1}</h1>

            <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
                {alt.paragraflar.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            {alt.maddeler && alt.maddeler.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {alt.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <h2 className="font-bold">{m.baslik}</h2>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.metin}</p>
                        </div>
                    ))}
                </div>
            )}

            {alt.sss && alt.sss.length > 0 && (
                <>
                    <h2 className="mt-12 text-2xl font-bold">Sık sorulan sorular</h2>
                    <div className="mt-4 space-y-4">
                        {alt.sss.map((s) => (
                            <details key={s.soru} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary className="cursor-pointer font-semibold">{s.soru}</summary>
                                <p className="mt-3 leading-relaxed text-slate-700">{s.cevap}</p>
                            </details>
                        ))}
                    </div>
                </>
            )}

            {digerSayfalar.length > 0 && (
                <>
                    <h2 className="mt-12 text-xl font-bold">Diğer sayfalar</h2>
                    <ul className="mt-4 space-y-2">
                        {digerSayfalar.map((s) => (
                            <li key={s.slug}>
                                <a className="text-blue-700 underline hover:text-blue-900" href={`/${s.slug}`}>{s.baslik}</a>
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

import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { altSayfaBul, hostAltSayfalari } from "@/lib/alt-sayfalar";
import { kurumsalSayfaBul, kurumsalSayfalar } from "@/lib/kurumsal-sayfalar";
import { GaEtiketi } from "@/components/ga";
import { HaberCerceve } from "@/components/haber-sitesi";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { haberKurumsalSayfaBul } from "@/lib/haber-kurumsal";
import { TicariCerceve, TicariTeklif } from "@/components/ticari-cerceve";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ sayfa: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { sayfa } = await params;
    const haber = hostIcinHaberSitesi(host);
    const haberSayfasi = haber ? haberKurumsalSayfaBul(haber, sayfa) : undefined;
    if (haber && haberSayfasi) {
        return {
            title: haberSayfasi.baslik,
            description: haberSayfasi.aciklama,
            alternates: { canonical: `https://${haber.host}/${haberSayfasi.slug}` },
            robots: haberSayfasi.indexlenebilir ? undefined : { index: false, follow: true },
        };
    }
    const site = hostIcinSite(host);
    const alt = altSayfaBul(host, sayfa) ?? (site ? kurumsalSayfaBul(site, sayfa) : undefined);
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
        robots: "indexlenebilir" in alt && !alt.indexlenebilir
            ? { index: false, follow: true }
            : undefined,
    };
}

export default async function AltSayfaGorunum({ params }: { params: Promise<{ sayfa: string }> }) {
    const host = await aktifHost();
    const { sayfa } = await params;
    const haber = hostIcinHaberSitesi(host);
    const haberSayfasi = haber ? haberKurumsalSayfaBul(haber, sayfa) : undefined;
    if (haber && haberSayfasi) {
        return (
            <HaberCerceve site={haber}>
                <main className="mx-auto max-w-3xl px-6 py-12">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{haber.slogan}</p>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{haberSayfasi.h1}</h1>
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
                        {haberSayfasi.paragraflar.map((paragraf) => <p key={paragraf}>{paragraf}</p>)}
                    </div>
                    {haberSayfasi.maddeler && (
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {haberSayfasi.maddeler.map((madde) => (
                                <section key={madde.baslik} className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h2 className="font-bold">{madde.baslik}</h2>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{madde.metin}</p>
                                </section>
                            ))}
                        </div>
                    )}
                    {haberSayfasi.slug === "iletisim" && (
                        <a className="mt-8 inline-block rounded-full bg-slate-900 px-6 py-3 font-semibold text-white"
                           href="mailto:arti.tech61@gmail.com">E-posta gönder</a>
                    )}
                </main>
            </HaberCerceve>
        );
    }
    const site = hostIcinSite(host);
    const alt = altSayfaBul(host, sayfa) ?? (site ? kurumsalSayfaBul(site, sayfa) : undefined);
    if (!site || !alt) notFound();
    const digerSayfalar = [...hostAltSayfalari(host), ...kurumsalSayfalar(site)]
        .filter((s) => s.slug !== alt.slug);

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
        <TicariCerceve site={site}>
        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
            {jsonLd.map((j, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
            ))}
            <GaEtiketi gaId={site.gaId} />

            <Link href="/" className="text-sm font-semibold text-blue-700 hover:underline">← {site.h1}</Link>
            <section className="mt-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-12 text-white sm:px-10 sm:py-16">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{site.bolge}</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">{alt.h1}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{alt.paragraflar[0]}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href={`tel:${site.telefon}`} className="rounded-full bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-500">
                        Uygunluk sor
                    </a>
                    <Link href="/teklif-hazirligi" className="rounded-full border border-white/25 px-6 py-3 text-center font-bold text-white hover:bg-white/10">
                        Talep rehberini aç
                    </Link>
                </div>
            </section>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
                <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                    {alt.paragraflar.slice(1).map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <aside className="h-fit rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                    <strong className="block text-base">Teklif öncesi doğrulama</strong>
                    <span className="mt-2 block">
                        Model, kapasite, belge, operatör, teslimat tarihi ve ücret güncel uygunluk kontrolünden sonra yazılı teklifte kesinleşir.
                    </span>
                </aside>
            </div>

            {alt.maddeler && alt.maddeler.length > 0 && (
                <section className="mt-14">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Karar noktaları</p>
                    <h2 className="mt-3 text-3xl font-black tracking-tight">İhtiyaca göre değerlendirme</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {alt.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <span className="mb-4 grid size-9 place-items-center rounded-xl bg-blue-50 font-black text-blue-700">✓</span>
                            <h3 className="font-bold">{m.baslik}</h3>
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">{m.metin}</p>
                        </div>
                    ))}
                </div>
                </section>
            )}

            {alt.sss && alt.sss.length > 0 && (
                <>
                    <h2 className="mt-16 text-3xl font-black tracking-tight">Sık sorulan sorular</h2>
                    <div className="mt-6 space-y-3">
                        {alt.sss.map((s) => (
                            <details key={s.soru} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:border-blue-300">
                                <summary className="cursor-pointer font-semibold">{s.soru}</summary>
                                <p className="mt-3 leading-relaxed text-slate-700">{s.cevap}</p>
                            </details>
                        ))}
                    </div>
                </>
            )}

            {digerSayfalar.length > 0 && (
                <>
                    <h2 className="mt-16 text-2xl font-black">İlgili sayfalar</h2>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {digerSayfalar.map((s) => (
                            <li key={s.slug} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <a className="font-bold text-blue-700 hover:text-blue-900" href={`/${s.slug}`}>{s.baslik} →</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <div className="mt-16"><TicariTeklif site={site} /></div>
        </main>
        </TicariCerceve>
    );
}

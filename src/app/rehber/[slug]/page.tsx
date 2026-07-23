import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { rehberBul, rehberler } from "@/lib/rehberler";
import { hostIcinSite } from "@/lib/siteler";
import { GaEtiketi } from "@/components/ga";

export const dynamic = "force-dynamic";

const HOST = "yuksektecalismarehberi.com";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const rehber = rehberBul(slug);
    if (!rehber) return {};
    const suffix = " | Yüksekte Çalışma Rehberi";
    const seoTitle =
        rehber.baslik.length + suffix.length <= 60
            ? `${rehber.baslik}${suffix}`
            : rehber.baslik.length <= 60
                ? rehber.baslik
                : `${rehber.baslik.slice(0, 59).trimEnd()}…`;
    const seoDescription =
        rehber.aciklama.length <= 160 ? rehber.aciklama : `${rehber.aciklama.slice(0, 159).trimEnd()}…`;
    return {
        title: { absolute: seoTitle },
        description: seoDescription,
        alternates: { canonical: `https://${HOST}/rehber/${rehber.slug}` },
        openGraph: {
            title: rehber.baslik,
            description: rehber.aciklama,
            type: "article",
            locale: "tr_TR",
            url: `https://${HOST}/rehber/${rehber.slug}`,
            images: [{ url: `https://${HOST}/media/saha-hero.png`, alt: rehber.baslik }],
        },
        twitter: {
            card: "summary_large_image",
            title: rehber.baslik,
            description: rehber.aciklama,
            images: [`https://${HOST}/media/saha-hero.png`],
        },
    };
}

export default async function RehberSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    if (slug === "telehandler-mi-bomlu-platform-mu") {
        permanentRedirect("/rehber/telehandler-mi-personel-yukseltici-mi");
    }
    const rehber = rehberBul(slug);
    if (!rehber) notFound();
    const site = hostIcinSite(HOST);
    const digerleri = rehberler.filter((r) => r.slug !== rehber.slug);

    const jsonLd: Record<string, unknown>[] = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: rehber.baslik,
            description: rehber.aciklama,
            articleSection: rehber.etiket,
            inLanguage: "tr-TR",
            datePublished: rehber.yayin,
            dateModified: rehber.guncelleme ?? rehber.yayin,
            author: { "@type": "Organization", name: "Yüksekte Çalışma Rehberi", url: `https://${HOST}` },
            publisher: { "@type": "Organization", name: "Yüksekte Çalışma Rehberi", url: `https://${HOST}` },
            mainEntityOfPage: `https://${HOST}/rehber/${rehber.slug}`,
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Yüksekte Çalışma Rehberi", item: `https://${HOST}/` },
                { "@type": "ListItem", position: 2, name: rehber.baslik, item: `https://${HOST}/rehber/${rehber.slug}` },
            ],
        },
    ];
    if (rehber.sss && rehber.sss.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: rehber.sss.map((s) => ({
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
            {site && <GaEtiketi gaId={site.gaId} />}
            <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
                <ol className="flex flex-wrap items-center gap-2">
                    <li><Link href="/" className="text-blue-700 hover:underline">Yüksekte Çalışma Rehberi</Link></li>
                    <li aria-hidden="true" className="text-slate-400">/</li>
                    <li className="text-slate-700" aria-current="page">{rehber.etiket}</li>
                </ol>
            </nav>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-700">{rehber.etiket}</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{rehber.baslik}</h1>
            <p className="mt-3 text-sm text-slate-500">
                <time dateTime={rehber.yayin}>Yayımlandı: {new Date(`${rehber.yayin}T00:00:00+03:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time>
                {rehber.guncelleme && rehber.guncelleme !== rehber.yayin && (
                    <> · <time dateTime={rehber.guncelleme}>Güncellendi: {new Date(`${rehber.guncelleme}T00:00:00+03:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</time></>
                )}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{rehber.giris}</p>

            <div className="mt-10 space-y-10">
                {rehber.bolumler.map((b) => (
                    <section key={b.baslik}>
                        <h2 className="text-xl font-bold">{b.baslik}</h2>
                        <div className="mt-2 space-y-3">
                            {b.paragraflar.map((p, i) => (
                                <p key={i} className="leading-relaxed text-slate-700">{p}</p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            {rehber.sss && rehber.sss.length > 0 && (
                <>
                    <h2 className="mt-12 text-2xl font-bold">Sık sorulan sorular</h2>
                    <div className="mt-4 space-y-4">
                        {rehber.sss.map((s) => (
                            <details key={s.soru} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                                <summary className="cursor-pointer font-semibold">{s.soru}</summary>
                                <p className="mt-3 leading-relaxed text-slate-700">{s.cevap}</p>
                            </details>
                        ))}
                    </div>
                </>
            )}

            {digerleri.length > 0 && (
                <>
                    <h2 className="mt-12 text-xl font-bold">Diğer rehber bölümleri</h2>
                    <ul className="mt-4 space-y-2">
                        <li>
                            <a className="text-blue-700 underline hover:text-blue-900" href="/rehber/telehandler-mi-personel-yukseltici-mi">
                                Telehandler mı, personel yükseltici mi? Makine seçim rehberi
                            </a>
                        </li>
                        {digerleri.map((r) => (
                            <li key={r.slug}>
                                <a className="text-blue-700 underline hover:text-blue-900" href={`/rehber/${r.slug}`}>{r.baslik}</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
                Bu rehber bilgilendirme amaçlıdır; uygulamada üretici talimatları ve İSG uzmanınızın değerlendirmesi esastır.
            </p>
        </main>
    );
}

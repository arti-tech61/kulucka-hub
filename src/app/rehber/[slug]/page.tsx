import Link from "next/link";
import { notFound } from "next/navigation";
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
    return {
        title: `${rehber.baslik} | Yüksekte Çalışma Rehberi`,
        description: rehber.aciklama,
        alternates: { canonical: `https://${HOST}/rehber/${rehber.slug}` },
        openGraph: { title: rehber.baslik, description: rehber.aciklama, type: "article", locale: "tr_TR" },
    };
}

export default async function RehberSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
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
            publisher: { "@type": "Organization", name: "Yüksekte Çalışma Rehberi", url: `https://${HOST}` },
            mainEntityOfPage: `https://${HOST}/rehber/${rehber.slug}`,
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
            <Link href="/" className="text-sm text-slate-500 hover:underline">← Yüksekte Çalışma Rehberi</Link>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-blue-700">{rehber.etiket}</p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{rehber.baslik}</h1>
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
                            <a className="text-blue-700 underline hover:text-blue-900" href="/rehber/telehandler-mi-bomlu-platform-mu">
                                Telehandler mi, bomlu platform mu? Makine seçim rehberi
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

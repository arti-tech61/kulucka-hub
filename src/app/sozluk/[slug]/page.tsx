import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { TERIMLER, terimBul, terimBaglami, derinTerimSayfasiVarMi } from "@/lib/terimler";
import { varyantSec, ilkBolge } from "@/lib/varyant";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    const terim = terimBul(slug);
    // Derin terim sayfaları yalnız bilgi/rehber sitelerinde açılır (bkz. terimler.ts)
    if (!site || !terim || !derinTerimSayfasiVarMi(site)) return {};
    const canonical = `https://${host}/sozluk/${slug}`;
    return {
        title: `${terim.ad} Nedir? | ${site.h1}`,
        description: terim.kisa,
        alternates: { canonical },
        openGraph: { title: `${terim.ad} Nedir?`, description: terim.kisa, url: canonical, locale: "tr_TR", type: "article" },
    };
}

export default async function TerimSayfasi({ params }: { params: Params }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const terim = terimBul(slug);
    if (!terim) notFound();
    // Kiralama domainlerinde derin sayfa yok — sözlük hub'ına yönlendirilir.
    if (!derinTerimSayfasiVarMi(site)) notFound();

    const digerTerimler = TERIMLER.filter((t) => t.kategori === terim.kategori && t.slug !== slug).slice(0, 3);
    const bolge = ilkBolge(site);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        name: terim.ad,
        description: terim.tanim,
        inDefinedTermSet: `https://${host}/sozluk`,
        url: `https://${host}/sozluk/${slug}`,
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
            { "@type": "ListItem", position: 2, name: "Terimler Sözlüğü", item: `https://${host}/sozluk` },
            { "@type": "ListItem", position: 3, name: terim.ad, item: `https://${host}/sozluk/${slug}` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/sozluk">
            <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li><Link href="/sozluk" className="text-accent hover:text-accent-hover hover:underline">Sözlük</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">{terim.ad}</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Teknik Terim</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{terim.ad} Nedir?</h1>

                <p className="mt-6 text-lg leading-relaxed text-muted">{terim.tanim}</p>

                <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <h2 className="font-display text-lg font-bold text-fg">Neden önemli?</h2>
                    <p className="mt-2 leading-relaxed text-muted">{terim.nedenOnemli}</p>
                </div>

                {terim.sikHata && (
                    <div className="mt-6 rounded-2xl border border-border bg-elevated p-6">
                        <h2 className="font-display text-lg font-bold text-fg">Sahada sık yapılan hata</h2>
                        <p className="mt-2 leading-relaxed text-muted">{terim.sikHata}</p>
                    </div>
                )}

                <div className="mt-6 rounded-2xl border border-border bg-elevated p-6">
                    <h2 className="font-display text-lg font-bold text-fg">{bolge} sahalarındaki karşılığı</h2>
                    <p className="mt-2 leading-relaxed text-muted">{terimBaglami(site, terim)}</p>
                </div>

                {terim.ilgiliUrunSlug && (
                    <div className="mt-8">
                        <Link href={`/urunler/${terim.ilgiliUrunSlug}`} className="inline-block text-lg font-black text-accent hover:text-accent-hover">
                            İlgili makine sınıfını inceleyin →
                        </Link>
                    </div>
                )}

                {digerTerimler.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">
                            {varyantSec(site, `terim-diger-${slug}`, ["İlgili terimler", "Bu konuyla bağlantılı terimler", "Ayrıca bakın"])}
                        </h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {digerTerimler.map((t) => (
                                <Link key={t.slug} href={`/sozluk/${t.slug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {t.ad} →
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-8">
                    <Link href="/sozluk" className="text-sm font-bold text-muted hover:text-fg">← Tüm terimler sözlüğü</Link>
                </div>

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

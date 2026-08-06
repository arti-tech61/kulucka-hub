import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { markaSayfasiBul, aktifMarkalar } from "@/lib/marka-sayfalari";
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
    if (!site) return {};
    const sayfa = markaSayfasiBul(site, slug);
    if (!sayfa) return {};
    const canonical = `https://${host}/markalar/${slug}`;
    return {
        title: sayfa.baslik,
        description: sayfa.aciklama,
        alternates: { canonical },
        openGraph: { title: sayfa.baslik, description: sayfa.aciklama, url: canonical, locale: "tr_TR", type: "website" },
    };
}

export default async function MarkaSayfasi({ params }: { params: Params }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const sayfa = markaSayfasiBul(site, slug);
    if (!sayfa) notFound();

    const bolge = ilkBolge(site);
    const digerMarkalar = aktifMarkalar().filter((m) => m.slug !== slug).slice(0, 4);

    const itemListLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${sayfa.marka} Kiralık Platform Modelleri — ${bolge}`,
        itemListElement: sayfa.makineler.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Product",
                name: m.ad,
                brand: { "@type": "Brand", name: m.marka },
                image: `https://${host}${m.gorsel}`,
                description: `${m.kategoriAdi}, ${m.yukseklik.toFixed(2)} m çalışma yüksekliği, ${m.kapasite} kg platform kapasitesi, ${m.gucAdi}.`,
                offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
                    areaServed: site.bolge,
                },
            },
        })),
    };
    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: sayfa.sss.map((s) => ({
            "@type": "Question",
            name: s.soru,
            acceptedAnswer: { "@type": "Answer", text: s.cevap },
        })),
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
            { "@type": "ListItem", position: 2, name: "Markalar", item: `https://${host}/markalar` },
            { "@type": "ListItem", position: 3, name: sayfa.marka, item: `https://${host}/markalar/${slug}` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/markalar">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li><Link href="/markalar" className="text-accent hover:text-accent-hover hover:underline">Markalar</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">{sayfa.marka}</li>
                    </ol>
                </nav>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold">
                    <span className="rounded-full border border-border bg-elevated px-3 py-1 text-muted">Menşe: {sayfa.profil.mense}</span>
                    <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-accent">Filoda {sayfa.makineler.length} model</span>
                </div>
                <h1 className="mt-4 text-4xl font-black tracking-tight text-fg sm:text-5xl">{sayfa.h1}</h1>
                <p className="mt-5 text-lg leading-relaxed text-muted">{sayfa.giris}</p>

                <h2 className="mt-14 text-2xl font-black tracking-tight text-fg">Filomuzdaki {sayfa.marka} Makineleri</h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {sayfa.makineler.map((m) => (
                        <article key={m.id} className="overflow-hidden rounded-2xl border border-border bg-elevated">
                            <div className="relative h-48 w-full bg-bg">
                                <Image src={m.gorsel} alt={`${m.ad} — kiralık`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4" />
                            </div>
                            <div className="p-5">
                                <h3 className="font-display text-lg font-bold text-fg">{m.ad}</h3>
                                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-accent">{m.kategoriAdi}</p>
                                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <dt className="text-[11px] uppercase tracking-wide text-muted">Çalışma yüks.</dt>
                                        <dd className="font-display font-bold text-fg">{m.yukseklik.toFixed(2)} m</dd>
                                    </div>
                                    <div>
                                        <dt className="text-[11px] uppercase tracking-wide text-muted">Kapasite</dt>
                                        <dd className="font-display font-bold text-fg">{m.kapasite} kg</dd>
                                    </div>
                                    <div className="col-span-2">
                                        <dt className="text-[11px] uppercase tracking-wide text-muted">Güç / zemin</dt>
                                        <dd className="text-xs leading-relaxed text-muted">{m.gucAdi} · {m.zemin}</dd>
                                    </div>
                                </dl>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-14 rounded-2xl border border-border bg-elevated p-6">
                    <h2 className="font-display text-lg font-bold text-fg">{sayfa.marka} hakkında</h2>
                    <p className="mt-2 leading-relaxed text-muted">{sayfa.profil.karakter}</p>
                    <p className="mt-3 leading-relaxed text-muted">{sayfa.baglam}</p>
                </div>

                <h2 className="mt-16 text-2xl font-black tracking-tight text-fg">Sık sorulan sorular</h2>
                <div className="mt-4 space-y-3">
                    {sayfa.sss.map((s) => (
                        <details key={s.soru} className="group rounded-2xl border border-border bg-elevated p-5 shadow-sm open:border-accent">
                            <summary className="cursor-pointer font-semibold text-fg">{s.soru}</summary>
                            <p className="mt-3 leading-relaxed text-muted">{s.cevap}</p>
                        </details>
                    ))}
                </div>

                {digerMarkalar.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">
                            {varyantSec(site, `marka-diger-${slug}`, ["Filomuzdaki diğer markalar", "Diğer markalar", "Filoda bulunan diğer üreticiler"])}
                        </h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-4">
                            {digerMarkalar.map((m) => (
                                <Link key={m.slug} href={`/markalar/${m.slug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {m.marka} →
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

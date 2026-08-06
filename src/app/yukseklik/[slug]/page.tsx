import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { yukseklikSayfalari, yukseklikSayfasiBul } from "@/lib/yukseklik-sayfalari";
import { urunKatalogu } from "@/lib/urun-katalogu";
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
    const sayfa = yukseklikSayfasiBul(site, slug);
    if (!sayfa) return {};
    const canonical = `https://${host}/yukseklik/${slug}`;
    return {
        title: sayfa.baslik,
        description: sayfa.aciklama,
        alternates: { canonical },
        openGraph: { title: sayfa.baslik, description: sayfa.aciklama, url: canonical, locale: "tr_TR", type: "website" },
    };
}

export default async function YukseklikSayfasi({ params }: { params: Params }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const sayfa = yukseklikSayfasiBul(site, slug);
    if (!sayfa) notFound();

    const bolge = ilkBolge(site);
    // En yakın metrajlar — sayısal eksende komşuluk (metin benzerliği değil)
    const komsular = yukseklikSayfalari(site)
        .filter((s) => s.slug !== slug)
        .sort((a, b) => Math.abs(a.metraj - sayfa.metraj) - Math.abs(b.metraj - sayfa.metraj))
        .slice(0, 4);
    const urunler = sayfa.urunSluglari
        .map((s) => urunKatalogu.find((u) => u.slug === s))
        .filter((u): u is NonNullable<typeof u> => Boolean(u));

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
            { "@type": "ListItem", position: 2, name: "Yüksekliğe Göre", item: `https://${host}/yukseklik` },
            { "@type": "ListItem", position: 3, name: `${sayfa.metraj} Metre`, item: `https://${host}/yukseklik/${slug}` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/yukseklik">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li><Link href="/yukseklik" className="text-accent hover:text-accent-hover hover:underline">Yüksekliğe Göre</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">{sayfa.metraj} Metre</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Yüksekliğe Göre Seçim</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{sayfa.h1}</h1>

                <div className="mt-6 flex flex-wrap gap-4">
                    <div className="rounded-xl border border-border bg-elevated px-4 py-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-muted">Çalışma yüksekliği</div>
                        <div className="font-display text-lg font-bold text-fg">{sayfa.metraj}.00 m</div>
                    </div>
                    <div className="rounded-xl border border-border bg-elevated px-4 py-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-muted">Sepet tabanı</div>
                        <div className="font-display text-lg font-bold text-fg">{sayfa.platformYuksekligi}.00 m</div>
                    </div>
                    <div className="rounded-xl border border-border bg-elevated px-4 py-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-muted">Kat karşılığı</div>
                        <div className="font-display text-lg font-bold text-fg">~{sayfa.katKarsiligi} kat</div>
                    </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-muted">{sayfa.giris}</p>

                {sayfa.uyari && (
                    <div className="mt-8 rounded-2xl border-2 border-amber-400/60 bg-amber-50/60 p-6 dark:bg-amber-950/20">
                        <h2 className="font-display text-lg font-bold text-fg">Filomuzdaki durum</h2>
                        <p className="mt-2 leading-relaxed text-muted">{sayfa.uyari}</p>
                    </div>
                )}

                <h2 className="mt-14 text-2xl font-black tracking-tight text-fg">
                    {sayfa.tamEslesme ? "Bu Yükseklik İçin Filomuzdaki Makineler" : "Bu Yüksekliğe Ulaşan Makinelerimiz"}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {sayfa.onerilenMakineler.map((m) => (
                        <article key={m.id} className="overflow-hidden rounded-2xl border border-border bg-elevated">
                            <div className="relative h-36 w-full bg-bg">
                                <Image src={m.gorsel} alt={`${m.ad} — kiralık`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-3" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-display text-base font-bold text-fg">{m.ad}</h3>
                                <p className="mt-2 text-sm font-bold text-accent">{m.yukseklik.toFixed(2)} m · {m.kapasite} kg</p>
                                <p className="mt-1 text-xs leading-relaxed text-muted">{m.gucAdi}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2">
                    {sayfa.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">{m.baslik}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{m.metin}</p>
                        </div>
                    ))}
                </div>

                {urunler.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">Bu Bantta İlgili Makine Sınıfları</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            {urunler.map((u) => (
                                <Link key={u.slug} href={`/urunler/${u.slug}`} className="rounded-2xl border border-border bg-elevated p-4 text-sm font-bold text-accent hover:text-accent-hover">
                                    {u.ad} →
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                <h2 className="mt-16 text-2xl font-black tracking-tight text-fg">Sık sorulan sorular</h2>
                <div className="mt-4 space-y-3">
                    {sayfa.sss.map((s) => (
                        <details key={s.soru} className="group rounded-2xl border border-border bg-elevated p-5 shadow-sm open:border-accent">
                            <summary className="cursor-pointer font-semibold text-fg">{s.soru}</summary>
                            <p className="mt-3 leading-relaxed text-muted">{s.cevap}</p>
                        </details>
                    ))}
                </div>

                {komsular.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">
                            {varyantSec(site, `yuks-komsu-${slug}`, ["Diğer yükseklik sınıfları", "Yakın metrajlar", "Alternatif yükseklikler"])}
                        </h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-4">
                            {komsular.map((k) => (
                                <Link key={k.slug} href={`/yukseklik/${k.slug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {k.metraj} metre →
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

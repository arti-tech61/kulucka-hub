import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { hostBloglari, blogBul } from "@/lib/blog";
import { paylasilanBlogYazilari } from "@/lib/paylasilan-blog";
import { anahtarKelimeSayfalari } from "@/lib/anahtar-kelime-sayfalari";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

function hostVeSiteBloglari(host: string) {
    const site = hostIcinSite(host);
    if (!site) return { site: undefined, yazilar: [] as ReturnType<typeof paylasilanBlogYazilari> };
    const bespoke = hostBloglari(host);
    return { site, yazilar: bespoke.length > 0 ? bespoke : [...paylasilanBlogYazilari(site), ...anahtarKelimeSayfalari(site)] };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug } = await params;
    const { yazilar } = hostVeSiteBloglari(host);
    const yazi = yazilar.find((y) => y.slug === slug) ?? blogBul(host, slug);
    if (!yazi) return {};
    const canonical = `https://${host}/blog/${yazi.slug}`;
    const gorselUrl = `https://${host}${yazi.gorsel}`;
    return {
        title: yazi.baslik,
        description: yazi.ozet,
        alternates: { canonical },
        openGraph: {
            title: yazi.baslik,
            description: yazi.ozet,
            url: canonical,
            type: "article",
            locale: "tr_TR",
            publishedTime: yazi.tarih,
            modifiedTime: yazi.guncelleme ?? yazi.tarih,
            images: [{ url: gorselUrl, alt: yazi.gorselAlt }],
        },
        twitter: { card: "summary_large_image", title: yazi.baslik, description: yazi.ozet, images: [gorselUrl] },
    };
}

export default async function BlogYazisiSayfa({ params }: { params: Promise<{ slug: string }> }) {
    const host = await aktifHost();
    const { slug } = await params;
    const { site, yazilar } = hostVeSiteBloglari(host);
    const yazi = yazilar.find((y) => y.slug === slug);
    if (!site || !yazi) notFound();
    const digerleri = yazilar.filter((y) => y.slug !== yazi.slug).slice(0, 3);
    const gorselUrl = `https://${host}${yazi.gorsel}`;

    const jsonLd: Record<string, unknown>[] = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: yazi.baslik,
            description: yazi.ozet,
            image: gorselUrl,
            articleSection: yazi.kategori,
            inLanguage: "tr-TR",
            datePublished: yazi.tarih,
            dateModified: yazi.guncelleme ?? yazi.tarih,
            author: { "@type": "Organization", name: site.h1, url: `https://${host}` },
            publisher: { "@type": "Organization", name: site.anaSite.ad, url: site.anaSite.url },
            mainEntityOfPage: `https://${host}/blog/${yazi.slug}`,
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
                { "@type": "ListItem", position: 2, name: "Blog", item: `https://${host}/blog` },
                { "@type": "ListItem", position: 3, name: yazi.baslik, item: `https://${host}/blog/${yazi.slug}` },
            ],
        },
    ];
    if (yazi.sss && yazi.sss.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: yazi.sss.map((s) => ({ "@type": "Question", name: s.soru, acceptedAnswer: { "@type": "Answer", text: s.cevap } })),
        });
    }
    const tarihGoster = (iso: string) => new Date(`${iso}T00:00:00+03:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

    return (
        <Kabuk host={host} site={site} aktif="/blog">
            <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
                {jsonLd.map((j, i) => (
                    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
                ))}
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted">/</li>
                        <li><Link href="/blog" className="text-accent hover:text-accent-hover hover:underline">Blog</Link></li>
                        <li aria-hidden="true" className="text-muted">/</li>
                        <li className="text-fg" aria-current="page">{yazi.kategori}</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">{yazi.kategori}</p>
                <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight text-fg sm:text-4xl">{yazi.baslik}</h1>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                    <time dateTime={yazi.tarih}>Yayımlandı: {tarihGoster(yazi.tarih)}</time>
                    {yazi.guncelleme && yazi.guncelleme !== yazi.tarih && <time dateTime={yazi.guncelleme}>Güncellendi: {tarihGoster(yazi.guncelleme)}</time>}
                    <span>{yazi.okuma} dk okuma</span>
                </div>

                <figure className="mt-7 overflow-hidden rounded-3xl border border-border bg-bg">
                    <div className="relative aspect-[16/10]">
                        <Image src={yazi.gorsel} alt={yazi.gorselAlt} fill priority sizes="(max-width:1024px) 100vw, 900px" className="object-cover" />
                    </div>
                    <figcaption className="px-4 py-3 text-xs text-muted">{yazi.gorselAlt}</figcaption>
                </figure>

                <p className="mt-8 text-lg leading-relaxed text-fg">{yazi.giris}</p>

                <div className="mt-6 space-y-10">
                    {yazi.bolumler.map((b, bi) => (
                        <section key={b.baslik}>
                            <h2 className="text-2xl font-black tracking-tight text-fg">{b.baslik}</h2>
                            <div className="mt-3 space-y-4 text-lg leading-relaxed text-fg">
                                {b.paragraflar.map((p, i) => <p key={i}>{p}</p>)}
                            </div>
                            {bi === 0 && yazi.svg && (
                                <figure className="mt-6 rounded-2xl border border-border bg-elevated p-5">
                                    <div className="mx-auto max-w-md" dangerouslySetInnerHTML={{ __html: yazi.svg }} />
                                    <figcaption className="mt-2 text-center text-xs text-muted">Çalışma yüksekliği ve yatay erişim, makine sınıfını birlikte belirler.</figcaption>
                                </figure>
                            )}
                        </section>
                    ))}
                </div>

                {yazi.ilgiliUrun && (
                    <aside className="mt-10 rounded-2xl border border-border bg-elevated p-5">
                        <strong className="block text-sm uppercase tracking-wide text-muted">İlgili hizmet</strong>
                        <Link href={`/urunler/${yazi.ilgiliUrun.slug}`} className="mt-1 inline-block text-lg font-black text-accent hover:text-accent-hover hover:underline">
                            {yazi.ilgiliUrun.baslik} →
                        </Link>
                    </aside>
                )}

                {yazi.sss && yazi.sss.length > 0 && (
                    <>
                        <h2 className="mt-12 text-2xl font-black tracking-tight text-fg">Sık sorulan sorular</h2>
                        <div className="mt-4 space-y-3">
                            {yazi.sss.map((s) => (
                                <details key={s.soru} className="group rounded-2xl border border-border bg-elevated p-5 shadow-sm open:border-accent">
                                    <summary className="cursor-pointer font-semibold text-fg">{s.soru}</summary>
                                    <p className="mt-3 leading-relaxed text-muted">{s.cevap}</p>
                                </details>
                            ))}
                        </div>
                    </>
                )}

                {digerleri.length > 0 && (
                    <>
                        <h2 className="mt-14 text-2xl font-black text-fg">Diğer yazılar</h2>
                        <div className="mt-5 grid gap-5 sm:grid-cols-3">
                            {digerleri.map((d) => (
                                <Link key={d.slug} href={`/blog/${d.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-elevated shadow-sm transition hover:shadow-lg">
                                    <div className="relative aspect-[4/3] bg-bg">
                                        <Image src={d.gorsel} alt={d.gorselAlt} fill sizes="33vw" className="object-cover transition group-hover:scale-105" />
                                    </div>
                                    <p className="p-4 text-sm font-bold leading-snug text-fg group-hover:text-accent">{d.baslik}</p>
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-14"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

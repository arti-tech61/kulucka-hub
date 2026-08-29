import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { kategoriBilgisi } from "@/lib/urun-kategori-bilgi";
import { urunKatalogu, type UrunKatalogOgesi } from "@/lib/urun-katalogu";
import { paylasilanTemaKonfigleri } from "@/lib/paylasilan-tema-konfig";
import { GaEtiketi } from "@/components/ga";
import { kelimeSiniriKisalt } from "@/lib/kurumsal-sayfalar";
import { temaModulu, Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

function urunBul(slug: string): UrunKatalogOgesi | undefined {
    return urunKatalogu.find((u) => u.slug === slug);
}

// Slug önekine göre kategori — açıklama metni ve "diğer sınıflar" gruplaması için.
function kategoriKok(slug: string): string {
    if (slug.startsWith("makasli-platform")) return "makasli-platform";
    if (slug.startsWith("eklemli-platform")) return "eklemli-platform";
    if (slug.startsWith("teleskopik-platform")) return "teleskopik-platform";
    if (slug.includes("forklift")) return "forklift";
    if (slug.startsWith("orumcek-platform")) return "orumcek-platform";
    if (slug.startsWith("telehandler")) return "telehandler";
    return slug;
}


function digerUrunler(mevcutSlug: string, kategori: string, limit = 3): UrunKatalogOgesi[] {
    const ayniKategori = urunKatalogu.filter((u) => u.slug !== mevcutSlug && kategoriKok(u.slug) === kategori);
    if (ayniKategori.length >= limit) return ayniKategori.slice(0, limit);
    const digerleri = urunKatalogu.filter((u) => u.slug !== mevcutSlug && kategoriKok(u.slug) !== kategori);
    return [...ayniKategori, ...digerleri].slice(0, limit);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    const urun = urunBul(slug);
    if (!site || !urun || !(host in paylasilanTemaKonfigleri)) return {};
    const bolgeIlk = site.bolge.split(",")[0].trim();
    const baslik = kelimeSiniriKisalt(`${urun.ad} Kiralama | ${bolgeIlk}`, 60);
    const aciklama = urun.aciklamaSablonu(site);
    const canonical = `https://${host}/urunler/${slug}`;
    return {
        title: baslik,
        description: aciklama.slice(0, 160),
        alternates: { canonical },
        openGraph: {
            title: baslik,
            description: aciklama,
            url: canonical,
            locale: "tr_TR",
            type: "website",
            images: [{ url: `https://${host}${urun.gorsel}`, alt: urun.ad }],
        },
    };
}

export default async function UrunDetaySayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    // Ürün kataloğu sistemi yalnızca paylaşımlı temalı domainlerde kullanılıyor.
    if (!(host in paylasilanTemaKonfigleri)) notFound();
    const urun = urunBul(slug);
    if (!urun) notFound();

    const kategori = kategoriKok(slug);
    const bilgi = kategoriBilgisi(site, kategori);
    const bolgeIlk = site.bolge.split(",")[0].trim();
    const digerler = digerUrunler(slug, kategori);
    const tema = temaModulu(host);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: urun.ad,
        description: urun.aciklamaSablonu(site),
        image: `https://${host}${urun.gorsel}`,
        brand: { "@type": "Organization", name: site.anaSite.ad },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            areaServed: site.bolge,
            businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        },
    };

    return (
        <Kabuk host={host} site={site} aktif="/urunler">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li><Link href="/urunler" className="text-accent hover:underline">Ürünler</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">{urun.ad}</li>
                    </ol>
                </nav>

                <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border bg-elevated">
                        <Image src={urun.gorsel} alt={`${urun.ad} kiralama - ${bolgeIlk}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-8" priority />
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">{bolgeIlk} · {bilgi?.baslik ?? "Kiralık Makine"}</p>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{urun.ad} Kiralama</h1>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{urun.aciklamaSablonu(site)}</p>

                        <div className="mt-6 flex flex-wrap gap-4">
                            {urun.ozellikler.map(([etiket, deger]) => (
                                <div key={etiket} className="rounded-xl border border-border bg-elevated px-4 py-3">
                                    <div className="text-[11px] font-bold uppercase tracking-wider text-muted">{etiket}</div>
                                    <div className="font-display text-lg font-bold text-fg">{deger}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={`tel:${site.telefon}`} className="rounded-full bg-accent px-6 py-3 text-center font-bold text-accent-fg hover:bg-accent-hover">
                                Ara · {site.telefonGosterim}
                            </a>
                            <Link href="/iletisim" className="rounded-full border border-border px-6 py-3 text-center font-bold text-fg hover:bg-elevated">
                                Teklif İsteyin
                            </Link>
                        </div>
                    </div>
                </div>

                {bilgi && (
                    <div className="mt-16 grid gap-6 sm:grid-cols-3">
                        <div className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">{bilgi.baslik} Nedir?</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{bilgi.aciklama}</p>
                        </div>
                        <div className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">Tipik Kullanım Alanları</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{bilgi.kullanim}</p>
                        </div>
                        <div className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">Bu Sınıf Ne Zaman Seçilir?</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{bilgi.secim}</p>
                        </div>
                    </div>
                )}

                <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-sm leading-relaxed text-fg">
                    <strong className="block text-base text-accent">Teklif öncesi doğrulama</strong>
                    <span className="mt-2 block">
                        Görsel ve teknik özellikler kategori genelini temsil eder; kesin model, kapasite, sevkiyat tarihi ve fiyat, güncel stok uygunluğu kontrol edildikten sonra yazılı teklifte kesinleşir.
                    </span>
                </div>

                {digerler.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">Diğer Makine Sınıfları</h2>
                        <div className="mt-5 grid gap-6 sm:grid-cols-3">
                            {digerler.map((d) => (
                                <Link key={d.slug} href={`/urunler/${d.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-elevated">
                                    <div className="relative h-40 w-full bg-bg">
                                        <Image src={d.gorsel} alt={d.ad} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-display font-bold text-fg">{d.ad}</h3>
                                        <p className="mt-1 text-xs text-muted">{d.ozellikler[0]?.[1]}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                {tema?.sayfalar?.iletisim && (
                    <div className="mt-16 rounded-[2rem] border border-border bg-elevated p-8 text-center sm:p-12">
                        <h2 className="text-2xl font-black text-fg sm:text-3xl">Saha bilgilerinizi paylaşın, doğrulanabilir teklif hazırlayalım.</h2>
                        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                            <a href={`tel:${site.telefon}`} className="rounded-full bg-accent px-6 py-3 font-bold text-accent-fg hover:bg-accent-hover">
                                Ara · {site.telefonGosterim}
                            </a>
                            <a href={`https://wa.me/${site.telefon.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-6 py-3 font-bold text-fg hover:bg-bg">
                                WhatsApp ile Yazın
                            </a>
                        </div>
                    </div>
                )}
            </main>
        </Kabuk>
    );
}

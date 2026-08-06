import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { bolgeSayfalari, bolgeSayfasiBul } from "@/lib/bolge-sayfalari";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";
import { ilKoordinatBul, bolgeListesindenKoordinatBul } from "@/lib/il-koordinatlari";

export const dynamic = "force-dynamic";

const BOLGE_GORSELLERI = ["/media/isler/is-2.jpg", "/media/isler/is-8.jpg", "/media/isler/is-12.jpg", "/media/isler/is-14.jpg"];

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) return {};
    const bolge = bolgeSayfasiBul(site, slug);
    if (!bolge) return {};
    const canonical = `https://${host}/bolge/${slug}`;
    return {
        title: bolge.baslik,
        description: bolge.aciklama,
        alternates: { canonical },
        openGraph: { title: bolge.baslik, description: bolge.aciklama, url: canonical, locale: "tr_TR", type: "website" },
    };
}

export default async function BolgeSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const bolge = bolgeSayfasiBul(site, slug);
    if (!bolge) notFound();

    const digerBolgeler = bolgeSayfalari(site).filter((b) => b.slug !== slug).slice(0, 3);
    const gorsel = BOLGE_GORSELLERI[bolge.slug.length % BOLGE_GORSELLERI.length];

    // Önce bölge adının kendisinde (ör. "İkitelli OSB") ilçe/il eşleşmesi ara;
    // bulunamazsa site.bolge listesini sırayla dener.
    const koordinat = ilKoordinatBul(bolge.bolgeAdi) ?? bolgeListesindenKoordinatBul(site.bolge);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${site.anaSite.ad} — ${bolge.bolgeAdi}`,
        description: bolge.aciklama,
        areaServed: { "@type": "Place", name: bolge.bolgeAdi },
        ...(koordinat
            ? {
                  address: { "@type": "PostalAddress", addressLocality: bolge.bolgeAdi, addressRegion: koordinat.il, addressCountry: "TR" },
                  geo: { "@type": "GeoCoordinates", latitude: koordinat.lat, longitude: koordinat.lng },
              }
            : {}),
        telephone: site.telefon,
        url: `https://${host}/bolge/${slug}`,
    };

    return (
        <Kabuk host={host} site={site} aktif="/bolge">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted">/</li>
                        <li className="text-fg" aria-current="page">{bolge.bolgeAdi}</li>
                    </ol>
                </nav>

                <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Hizmet Bölgesi</p>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{bolge.h1}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{bolge.giris}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={`tel:${site.telefon}`} className="rounded-full bg-accent px-6 py-3 text-center font-bold text-accent-fg hover:bg-accent-hover">
                                Ara · {site.telefonGosterim}
                            </a>
                            <Link href="/iletisim" className="rounded-full border border-border px-6 py-3 text-center font-bold text-fg hover:bg-elevated">
                                Teklif İsteyin
                            </Link>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border bg-elevated">
                        <Image src={gorsel} alt={`${bolge.bolgeAdi} saha çalışması`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
                    </div>
                </div>

                <div className="mt-16 grid gap-5 sm:grid-cols-2">
                    {bolge.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">{m.baslik}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{m.metin}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <strong className="block text-sm uppercase tracking-wide text-accent">İlgili makine sınıfı</strong>
                    <Link href={`/urunler/${bolge.ilgiliUrun.slug}`} className="mt-1 inline-block text-lg font-black text-fg hover:text-accent">
                        {bolge.ilgiliUrun.baslik} →
                    </Link>
                </div>

                <h2 className="mt-16 text-2xl font-black tracking-tight text-fg">Sık sorulan sorular</h2>
                <div className="mt-4 space-y-3">
                    {bolge.sss.map((s) => (
                        <details key={s.soru} className="group rounded-2xl border border-border bg-elevated p-5 shadow-sm open:border-accent">
                            <summary className="cursor-pointer font-semibold text-fg">{s.soru}</summary>
                            <p className="mt-3 leading-relaxed text-muted">{s.cevap}</p>
                        </details>
                    ))}
                </div>

                {digerBolgeler.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">Diğer Hizmet Bölgelerimiz</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {digerBolgeler.map((b) => (
                                <Link key={b.slug} href={`/bolge/${b.slug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {b.bolgeAdi} →
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

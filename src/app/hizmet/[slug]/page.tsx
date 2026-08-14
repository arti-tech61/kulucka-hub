import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { hizmetSayfalari, hizmetSayfasiBul } from "@/lib/hizmet-sayfalari";
import { hizmetGorselSec } from "@/lib/hizmet-konulari";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";
import { ilKoordinatBul, bolgeListesindenKoordinatBul } from "@/lib/il-koordinatlari";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) return {};
    const hizmet = hizmetSayfasiBul(site, slug);
    if (!hizmet) return {};
    const canonical = `https://${host}/hizmet/${slug}`;
    return {
        title: hizmet.baslik,
        description: hizmet.aciklama,
        alternates: { canonical },
        openGraph: { title: hizmet.baslik, description: hizmet.aciklama, url: canonical, locale: "tr_TR", type: "website" },
    };
}

export default async function HizmetSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const host = await aktifHost();
    const { slug } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const hizmet = hizmetSayfasiBul(site, slug);
    if (!hizmet) notFound();

    const digerHizmetler = hizmetSayfalari(site).filter((h) => h.slug !== slug).slice(0, 3);
    const koordinat = bolgeListesindenKoordinatBul(site.bolge) ?? ilKoordinatBul(site.bolge.split(",")[0]?.trim() ?? "");
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: hizmet.konu.baslikTaban,
        provider: {
            "@type": "LocalBusiness",
            name: site.anaSite.ad,
            telephone: site.telefon,
            ...(koordinat
                ? {
                      address: { "@type": "PostalAddress", addressLocality: site.bolge.split(",")[0]?.trim(), addressRegion: koordinat.il, addressCountry: "TR" },
                      geo: { "@type": "GeoCoordinates", latitude: koordinat.lat, longitude: koordinat.lng },
                  }
                : {}),
        },
        areaServed: { "@type": "Place", name: site.bolge },
        url: `https://${host}/hizmet/${slug}`,
    };

    return (
        <Kabuk host={host} site={site} aktif="/hizmet">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted">/</li>
                        <li className="text-fg" aria-current="page">{hizmet.konu.baslikTaban}</li>
                    </ol>
                </nav>

                <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Hizmetimiz</p>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{hizmet.h1}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{hizmet.giris}</p>
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
                        {(() => {
                            const gorsel = hizmetGorselSec(host, hizmet.konu);
                            return <Image src={gorsel.src} alt={gorsel.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />;
                        })()}
                    </div>
                </div>

                <div className="mt-16 grid gap-5 sm:grid-cols-2">
                    {hizmet.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">{m.baslik}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{m.metin}</p>
                        </div>
                    ))}
                </div>

                {hizmet.ekBolumler?.map((b) => (
                    <section key={b.baslik} className="mt-16">
                        <h2 className="text-2xl font-black tracking-tight text-fg">{b.baslik}</h2>
                        {b.paragraflar.map((p, i) => (
                            <p key={i} className="mt-4 leading-relaxed text-muted">{p}</p>
                        ))}
                        {b.tablo && (
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full min-w-[520px] border-collapse text-sm">
                                    <thead>
                                        <tr className="border-b-2 border-border">
                                            {b.tablo.basliklar.map((h) => (
                                                <th key={h} className="px-3 py-3 text-left font-display font-bold text-fg">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {b.tablo.satirlar.map((satir, i) => (
                                            <tr key={i} className="border-b border-border">
                                                {satir.map((h, j) => (
                                                    <td key={j} className="px-3 py-3 text-muted">{h}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </section>
                ))}

                <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <strong className="block text-sm uppercase tracking-wide text-accent">İlgili makine sınıfı</strong>
                    <Link href={`/urunler/${hizmet.ilgiliUrun.slug}`} className="mt-1 inline-block text-lg font-black text-fg hover:text-accent">
                        {hizmet.ilgiliUrun.baslik} →
                    </Link>
                </div>

                <h2 className="mt-16 text-2xl font-black tracking-tight text-fg">Sık sorulan sorular</h2>
                <div className="mt-4 space-y-3">
                    {hizmet.sss.map((s) => (
                        <details key={s.soru} className="group rounded-2xl border border-border bg-elevated p-5 shadow-sm open:border-accent">
                            <summary className="cursor-pointer font-semibold text-fg">{s.soru}</summary>
                            <p className="mt-3 leading-relaxed text-muted">{s.cevap}</p>
                        </details>
                    ))}
                </div>

                {digerHizmetler.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">Diğer Hizmetlerimiz</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {digerHizmetler.map((h) => (
                                <Link key={h.slug} href={`/hizmet/${h.slug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {h.konu.baslikTaban} →
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

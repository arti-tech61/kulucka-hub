import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { bolgeHizmetSayfalari, bolgeHizmetSayfasiBul } from "@/lib/bolge-hizmet-sayfalari";
import { bolgeSayfasiBul } from "@/lib/bolge-sayfalari";
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

type Params = Promise<{ slug: string; hizmet: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const host = await aktifHost();
    const { slug, hizmet } = await params;
    const site = hostIcinSite(host);
    if (!site) return {};
    const sayfa = bolgeHizmetSayfasiBul(site, slug, hizmet);
    if (!sayfa) return {};
    const canonical = `https://${host}/bolge/${slug}/${hizmet}`;
    return {
        title: sayfa.baslik,
        description: sayfa.aciklama,
        alternates: { canonical },
        openGraph: { title: sayfa.baslik, description: sayfa.aciklama, url: canonical, locale: "tr_TR", type: "website" },
    };
}

export default async function BolgeHizmetSayfasi({ params }: { params: Params }) {
    const host = await aktifHost();
    const { slug, hizmet } = await params;
    const site = hostIcinSite(host);
    if (!site) notFound();
    const sayfa = bolgeHizmetSayfasiBul(site, slug, hizmet);
    if (!sayfa) notFound();

    // Aynı bölgedeki diğer hizmetler — kesişim sayfaları arası iç link
    const ayniBolge = bolgeHizmetSayfalari(site)
        .filter((s) => s.bolgeSlug === slug && s.hizmetSlug !== hizmet)
        .slice(0, 3);
    const bolgeSayfasi = bolgeSayfasiBul(site, slug);

    const koordinat = ilKoordinatBul(sayfa.bolgeAdi) ?? bolgeListesindenKoordinatBul(site.bolge);
    const adres = koordinat
        ? {
              address: { "@type": "PostalAddress", addressLocality: sayfa.bolgeAdi, addressRegion: koordinat.il, addressCountry: "TR" },
              geo: { "@type": "GeoCoordinates", latitude: koordinat.lat, longitude: koordinat.lng },
          }
        : {};

    const serviceLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: sayfa.konu.baslikTaban,
        provider: { "@type": "LocalBusiness", name: site.anaSite.ad, telephone: site.telefon, ...adres },
        areaServed: { "@type": "Place", name: sayfa.bolgeAdi },
        url: `https://${host}/bolge/${slug}/${hizmet}`,
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
            { "@type": "ListItem", position: 2, name: sayfa.bolgeAdi, item: `https://${host}/bolge/${slug}` },
            { "@type": "ListItem", position: 3, name: sayfa.konu.baslikTaban, item: `https://${host}/bolge/${slug}/${hizmet}` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/bolge">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li><Link href={`/bolge/${slug}`} className="text-accent hover:text-accent-hover hover:underline">{sayfa.bolgeAdi}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">{sayfa.konu.baslikTaban}</li>
                    </ol>
                </nav>

                <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">
                            {sayfa.bolgeAdi} · Hizmet
                        </p>
                        <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">{sayfa.h1}</h1>
                        <p className="mt-5 text-lg leading-relaxed text-muted">{sayfa.giris}</p>
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
                            const gorsel = hizmetGorselSec(host, sayfa.konu, slug);
                            return <Image src={gorsel.src} alt={gorsel.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />;
                        })()}
                    </div>
                </div>

                <div className="mt-16 grid gap-5 sm:grid-cols-2">
                    {sayfa.maddeler.map((m) => (
                        <div key={m.baslik} className="rounded-2xl border border-border bg-elevated p-6">
                            <h2 className="font-display text-lg font-bold text-fg">{m.baslik}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{m.metin}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <strong className="block text-sm uppercase tracking-wide text-accent">İlgili makine sınıfı</strong>
                    <Link href={`/urunler/${sayfa.ilgiliUrun.slug}`} className="mt-1 inline-block text-lg font-black text-fg hover:text-accent">
                        {sayfa.ilgiliUrun.baslik} →
                    </Link>
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

                {ayniBolge.length > 0 && (
                    <>
                        <h2 className="mt-16 text-2xl font-black text-fg">{sayfa.bolgeAdi} Bölgesindeki Diğer Hizmetlerimiz</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            {ayniBolge.map((s) => (
                                <Link key={s.slug} href={`/bolge/${s.bolgeSlug}/${s.hizmetSlug}`} className="rounded-2xl border border-border bg-elevated p-4 font-bold text-accent hover:text-accent-hover">
                                    {s.konu.baslikTaban} →
                                </Link>
                            ))}
                        </div>
                    </>
                )}

                {bolgeSayfasi && (
                    <div className="mt-8 rounded-2xl border border-border bg-elevated p-6">
                        <strong className="block text-sm uppercase tracking-wide text-muted">Bölge sayfası</strong>
                        <Link href={`/bolge/${slug}`} className="mt-1 inline-block text-lg font-black text-fg hover:text-accent">
                            {bolgeSayfasi.bolgeAdi} — tüm hizmetler ve makine sınıfları →
                        </Link>
                    </div>
                )}

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

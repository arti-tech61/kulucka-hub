import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HaberCerceve } from "@/components/haber-sitesi";
import { hostIcinHaberSitesi, haberYazisi } from "@/lib/haber-config";

export const dynamic = "force-dynamic";

const renkSinifi = { red: "text-red-600", amber: "text-amber-600" } as const;

async function aktifHaberSitesi() {
    const h = await headers();
    const host = (h.get("host") ?? "").toLowerCase();
    return hostIcinHaberSitesi(host);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const site = await aktifHaberSitesi();
    if (!site) return {};
    const { slug } = await params;
    const yazi = haberYazisi(site, slug);
    if (!yazi) return {};
    return {
        title: `${yazi.baslik} | ${site.adOn} ${site.adSon}`,
        description: yazi.ozet,
        alternates: { canonical: `https://${site.host}/yazi/${yazi.slug}` },
        openGraph: { title: yazi.baslik, description: yazi.ozet, type: "article", locale: "tr_TR" },
    };
}

export default async function YaziSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const site = await aktifHaberSitesi();
    if (!site) notFound();
    const { slug } = await params;
    const yazi = haberYazisi(site, slug);
    if (!yazi) notFound();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: yazi.baslik,
        description: yazi.ozet,
        datePublished: yazi.tarih,
        articleSection: yazi.kategori,
        publisher: { "@type": "Organization", name: `${site.adOn} ${site.adSon}`, url: `https://${site.host}` },
        mainEntityOfPage: `https://${site.host}/yazi/${yazi.slug}`,
    };
    return (
        <HaberCerceve site={site}>
            <main className="mx-auto max-w-3xl px-6 py-10">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Link href="/" className="text-sm text-slate-500 hover:underline">← Ana sayfa</Link>
                <p className={`mt-6 text-xs font-bold uppercase tracking-widest ${renkSinifi[site.renk]}`}>{yazi.kategori}</p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{yazi.baslik}</h1>
                <time className="mt-3 block text-sm text-slate-500" dateTime={yazi.tarih}>
                    {new Date(yazi.tarih).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                </time>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
                    {yazi.paragraflar.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
            </main>
        </HaberCerceve>
    );
}

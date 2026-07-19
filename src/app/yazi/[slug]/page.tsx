import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HaberCerceve } from "@/components/haber-sitesi";
import { slugIleYazi } from "@/lib/yazilar";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const yazi = slugIleYazi(slug);
    if (!yazi) return {};
    return {
        title: `${yazi.baslik} | İzmir Sektör`,
        description: yazi.ozet,
        alternates: { canonical: `https://izmirsektor.com/yazi/${yazi.slug}` },
        openGraph: { title: yazi.baslik, description: yazi.ozet, type: "article", locale: "tr_TR" },
    };
}

export default async function YaziSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const yazi = slugIleYazi(slug);
    if (!yazi) notFound();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: yazi.baslik,
        description: yazi.ozet,
        datePublished: yazi.tarih,
        articleSection: yazi.kategori,
        publisher: { "@type": "Organization", name: "İzmir Sektör", url: "https://izmirsektor.com" },
        mainEntityOfPage: `https://izmirsektor.com/yazi/${yazi.slug}`,
    };
    return (
        <HaberCerceve>
            <main className="mx-auto max-w-3xl px-6 py-10">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Link href="/" className="text-sm text-slate-500 hover:underline">← Ana sayfa</Link>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-red-600">{yazi.kategori}</p>
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

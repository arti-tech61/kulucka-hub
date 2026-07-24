import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import { GaEtiketi } from "@/components/ga";
import { temaModulu, Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) return {};
    return {
        title: `Blog | ${site.h1}`,
        description: `${site.h1} blog: makine seçimi, saha uygulaması, güvenlik ve maliyet üzerine şehir ve sektör odaklı rehberler.`,
        alternates: { canonical: `https://${host}/blog` },
    };
}

export default async function BlogListesi() {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    const yazilar = hostBloglari(host);
    if (!site || yazilar.length === 0) notFound();

    const BlogListe = temaModulu(host)?.BlogListe;
    if (BlogListe) {
        return (
            <Kabuk host={host} site={site} aktif="/blog">
                <GaEtiketi gaId={site.gaId} />
                <BlogListe site={site} />
            </Kabuk>
        );
    }

    return (
        <Kabuk host={host} site={site} aktif="/blog">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <GaEtiketi gaId={site.gaId} />
                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-blue-700 hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-slate-400">/</li>
                        <li className="text-slate-700" aria-current="page">Blog</li>
                    </ol>
                </nav>

                <header className="mt-6 max-w-3xl">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Bilgi &amp; rehber</p>
                    <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{site.h1} Blog</h1>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Makine seçimi, saha uygulaması, güvenlik ve maliyet üzerine sahadan derlenmiş rehberler.
                        Amaç doğru soruları sormanızı sağlamak; model, kapasite ve fiyat yazılı teklifte doğrulanır.
                    </p>
                </header>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {yazilar.map((y) => (
                        <Link key={y.slug} href={`/blog/${y.slug}`}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                <Image src={y.gorsel} alt={y.gorselAlt} fill sizes="(max-width:1024px) 100vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-105" />
                                <span className="absolute left-3 top-3 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                                    {y.kategori}
                                </span>
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                                <h2 className="text-lg font-black leading-snug text-slate-900 group-hover:text-blue-700">{y.baslik}</h2>
                                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{y.ozet}</p>
                                <span className="mt-4 text-sm font-bold text-blue-700">{y.okuma} dk okuma · Devamını oku →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </Kabuk>
    );
}

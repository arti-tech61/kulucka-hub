import Link from "next/link";
import { headers } from "next/headers";
import { notFound, permanentRedirect } from "next/navigation";
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
    const suffix = ` | ${site.adOn} ${site.adSon}`;
    const seoTitle =
        yazi.baslik.length + suffix.length <= 60
            ? `${yazi.baslik}${suffix}`
            : yazi.baslik.length <= 60
                ? yazi.baslik
                : `${yazi.baslik.slice(0, 59).trimEnd()}…`;
    const seoDescription =
        yazi.ozet.length <= 160 ? yazi.ozet : `${yazi.ozet.slice(0, 159).trimEnd()}…`;
    return {
        title: { absolute: seoTitle },
        description: seoDescription,
        alternates: { canonical: `https://${site.host}/yazi/${yazi.slug}` },
        openGraph: {
            title: yazi.baslik,
            description: seoDescription,
            url: `https://${site.host}/yazi/${yazi.slug}`,
            siteName: `${site.adOn} ${site.adSon}`,
            type: "article",
            locale: "tr_TR",
            publishedTime: yazi.tarih,
            section: yazi.kategori,
        },
        twitter: {
            card: "summary",
            title: yazi.baslik,
            description: seoDescription,
        },
    };
}

export default async function YaziSayfasi({ params }: { params: Promise<{ slug: string }> }) {
    const site = await aktifHaberSitesi();
    if (!site) notFound();
    const { slug } = await params;
    // Eski "bomlu platform" slug'ı doğru terminolojili yeni sayfaya kalıcı yönlendirilir.
    if (slug === "bomlu-platformda-emniyet-kemeri-neden-tartisilmaz") {
        permanentRedirect("/yazi/eklemli-teleskopik-platformda-emniyet-kemeri");
    }
    const yazi = haberYazisi(site, slug);
    if (!yazi) notFound();
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: yazi.baslik,
        description: yazi.ozet,
        datePublished: yazi.tarih,
        dateModified: yazi.tarih,
        inLanguage: "tr-TR",
        articleSection: yazi.kategori,
        author: {
            "@type": "Organization",
            name: `${site.adOn} ${site.adSon}`,
            url: `https://${site.host}`,
        },
        publisher: {
            "@type": "NewsMediaOrganization",
            name: `${site.adOn} ${site.adSon}`,
            url: `https://${site.host}`,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://${site.host}/yazi/${yazi.slug}`,
        },
        url: `https://${site.host}/yazi/${yazi.slug}`,
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: `${site.adOn} ${site.adSon}`, item: `https://${site.host}/` },
            { "@type": "ListItem", position: 2, name: yazi.baslik, item: `https://${site.host}/yazi/${yazi.slug}` },
        ],
    };
    return (
        <HaberCerceve site={site}>
            <main className="mx-auto max-w-3xl px-6 py-10">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-slate-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-slate-700 hover:underline">Ana sayfa</Link></li>
                        <li aria-hidden="true" className="text-slate-400">/</li>
                        <li className="text-slate-500">{yazi.kategori}</li>
                    </ol>
                </nav>
                <p className={`mt-6 text-xs font-bold uppercase tracking-widest ${renkSinifi[site.renk]}`}>{yazi.kategori}</p>
                <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">{yazi.baslik}</h1>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    <span>Yayın: {site.adOn} {site.adSon}</span>
                    <time dateTime={yazi.tarih}>
                        Yayımlandı: {new Date(`${yazi.tarih}T00:00:00+03:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
                    </time>
                </div>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-700">
                    {yazi.paragraflar.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}
                </div>
                <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-bold">Okur için doğrulama kontrolü</h2>
                    <p className="mt-3 leading-relaxed text-slate-700">
                        Bu başlıkla ilgili karar vermeden önce bilginin tarihini, uygulandığı
                        bölgeyi ve birincil kaynağını kontrol edin. Mevzuat ve güvenlik
                        konularında Resmî Gazete, yetkili kamu kurumu, üretici kullanım
                        kılavuzu ve işyerine özgü risk değerlendirmesi önceliklidir.
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                        <li>Rakam veya kuralın hangi tarih ve kaynak için geçerli olduğunu doğrulayın.</li>
                        <li>Genel bilgiyi saha koşuluna uygulamadan önce yetkili uzmana danışın.</li>
                        <li>Maddi hata görürseniz sayfa bağlantısıyla yayın iletişim kanalına bildirin.</li>
                    </ul>
                </section>
            </main>
        </HaberCerceve>
    );
}

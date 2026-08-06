import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { TERIMLER, terimBaglami, derinTerimSayfasiVarMi } from "@/lib/terimler";
import { varyantSec, ilkBolge } from "@/lib/varyant";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

const KATEGORI_ADI: Record<string, string> = {
    makine: "Makine Tipleri",
    olcu: "Ölçü ve Kapasite Terimleri",
    mevzuat: "Mevzuat ve Belgelendirme",
    saha: "Saha Koşulları",
};

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) return {};
    const bolge = ilkBolge(site);
    const baslik = varyantSec(site, "sozluk-baslik", [
        `Platform ve Manlift Terimleri Sözlüğü | ${bolge}`,
        `Yüksekte Çalışma Terimleri Sözlüğü — ${bolge}`,
        `Kiralık Platform Terimleri: Teknik Sözlük | ${bolge}`,
    ]);
    const aciklama = varyantSec(site, "sozluk-aciklama", [
        `Makaslı platform, eklemli platform, çalışma yüksekliği, periyodik kontrol ve daha fazlası — ${bolge} bölgesinde kiralama öncesi bilmeniz gereken ${TERIMLER.length} teknik terim.`,
        `Yükseltici platform kiralamadan önce karşılaşacağınız ${TERIMLER.length} teknik terimin açık ve pratik karşılığı; ${bolge} sahalarındaki uygulamalarıyla birlikte.`,
        `${TERIMLER.length} terimlik teknik sözlük: makine tipleri, ölçü kavramları, mevzuat ve saha koşulları — ${bolge} için hazırlandı.`,
    ]);
    return {
        title: baslik,
        description: aciklama,
        alternates: { canonical: `https://${host}/sozluk` },
        openGraph: { title: baslik, description: aciklama, url: `https://${host}/sozluk`, locale: "tr_TR", type: "website" },
    };
}

export default async function SozlukSayfasi() {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) notFound();

    const bolge = ilkBolge(site);
    const derin = derinTerimSayfasiVarMi(site);
    const gruplar = Object.keys(KATEGORI_ADI).map((k) => ({
        kategori: k,
        ad: KATEGORI_ADI[k],
        terimler: TERIMLER.filter((t) => t.kategori === k),
    })).filter((g) => g.terimler.length > 0);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: `Yüksekte Çalışma ve Platform Kiralama Terimleri — ${bolge}`,
        hasDefinedTerm: TERIMLER.map((t) => ({
            "@type": "DefinedTerm",
            name: t.ad,
            description: t.kisa,
            ...(derin ? { url: `https://${host}/sozluk/${t.slug}` } : {}),
        })),
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
            { "@type": "ListItem", position: 2, name: "Terimler Sözlüğü", item: `https://${host}/sozluk` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/sozluk">
            <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">Terimler Sözlüğü</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Teknik Sözlük</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">
                    {varyantSec(site, "sozluk-h1", [
                        "Platform ve Manlift Terimleri",
                        "Yüksekte Çalışma Terimleri Sözlüğü",
                        "Kiralama Öncesi Bilmeniz Gereken Terimler",
                    ])}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                    {varyantSec(site, "sozluk-giris", [
                        `Teklif alırken ve makine seçerken karşınıza çıkacak ${TERIMLER.length} teknik terimi, sahadaki pratik karşılıklarıyla birlikte topladık. En sık yapılan hatalar da her terimin altında not edildi.`,
                        `Yükseltici platform kiralamanın kendine özgü bir terminolojisi var ve bu terimlerin bir kısmı yanlış anlaşıldığında doğrudan yanlış makine seçimine yol açıyor. ${TERIMLER.length} terimi, ${bolge} sahalarındaki karşılıklarıyla açıkladık.`,
                        `Bu sözlük, ${bolge} bölgesindeki işlerde en çok sorulan ${TERIMLER.length} teknik terimi kapsıyor. Her terimde tanımın yanı sıra "neden önemli" ve varsa "sık yapılan hata" başlıkları da var.`,
                    ])}
                </p>

                {gruplar.map((g) => (
                    <section key={g.kategori} className="mt-14">
                        <h2 className="text-2xl font-black tracking-tight text-fg">{g.ad}</h2>
                        <div className="mt-5 space-y-4">
                            {g.terimler.map((t) => (
                                <article key={t.slug} id={t.slug} className="scroll-mt-24 rounded-2xl border border-border bg-elevated p-6">
                                    <h3 className="font-display text-lg font-bold text-fg">
                                        {derin ? (
                                            <Link href={`/sozluk/${t.slug}`} className="hover:text-accent">{t.ad}</Link>
                                        ) : (
                                            t.ad
                                        )}
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-muted">{t.tanim}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-fg">
                                        <strong className="text-accent">Neden önemli: </strong>{t.nedenOnemli}
                                    </p>
                                    {t.sikHata && (
                                        <p className="mt-2 text-sm leading-relaxed text-muted">
                                            <strong className="text-fg">Sık yapılan hata: </strong>{t.sikHata}
                                        </p>
                                    )}
                                    <p className="mt-3 text-sm leading-relaxed text-muted">{terimBaglami(site, t)}</p>
                                    {t.ilgiliUrunSlug && (
                                        <Link href={`/urunler/${t.ilgiliUrunSlug}`} className="mt-3 inline-block text-sm font-bold text-accent hover:text-accent-hover">
                                            İlgili makine sınıfını görün →
                                        </Link>
                                    )}
                                </article>
                            ))}
                        </div>
                    </section>
                ))}

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { aktifMarkalar, filoOzeti } from "@/lib/marka-sayfalari";
import { markaMakineleri } from "@/lib/filo";
import { varyantSec, ilkBolge, uzmanlikIfade } from "@/lib/varyant";
import { GaEtiketi } from "@/components/ga";
import { TicariTeklif } from "@/components/ticari-cerceve";
import { Kabuk } from "@/components/temalar";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) return {};
    const bolge = ilkBolge(site);
    const o = filoOzeti();
    const baslik = varyantSec(site, "markalar-baslik", [
        `Filomuzdaki Markalar | ${bolge} Platform Kiralama`,
        `${bolge} Kiralık Platform Markaları`,
        `Kiralık Platform Filomuz ve Markalar — ${bolge}`,
    ]);
    const aciklama = varyantSec(site, "markalar-aciklama", [
        `${o.markaSayisi} marka, ${o.toplamMakine} makine: ${o.enDusuk.toFixed(2)} m'den ${o.enYuksek.toFixed(2)} m'ye kiralık platform filosu. ${bolge} ve çevresine teslimat.`,
        `${bolge} bölgesine kiraladığımız ${o.toplamMakine} makinelik filo ${o.markaSayisi} markadan oluşuyor; metraj aralığı ${o.enDusuk.toFixed(2)}–${o.enYuksek.toFixed(2)} m.`,
        `Filomuzda ${o.markaSayisi} marka ve ${o.toplamMakine} model bulunuyor. ${bolge} sahalarınıza uygun sınıfı birlikte belirliyoruz.`,
    ]);
    return {
        title: baslik,
        description: aciklama,
        alternates: { canonical: `https://${host}/markalar` },
        openGraph: { title: baslik, description: aciklama, url: `https://${host}/markalar`, locale: "tr_TR", type: "website" },
    };
}

export default async function MarkalarSayfasi() {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) notFound();

    const bolge = ilkBolge(site);
    const markalar = aktifMarkalar();
    const o = filoOzeti();

    const itemListLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Kiralık Platform Markaları — ${bolge}`,
        itemListElement: markalar.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: m.marka,
            url: `https://${host}/markalar/${m.slug}`,
        })),
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
            { "@type": "ListItem", position: 2, name: "Markalar", item: `https://${host}/markalar` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/markalar">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">Markalar</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Filomuz</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">
                    {varyantSec(site, "markalar-h1", [
                        `Kiralık Platform Filomuzdaki Markalar`,
                        `${bolge} Bölgesine Kiraladığımız Markalar`,
                        `Filomuz: ${o.markaSayisi} Marka, ${o.toplamMakine} Makine`,
                    ])}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                    {varyantSec(site, "markalar-giris", [
                        `Filomuzda ${o.markaSayisi} markadan ${o.toplamMakine} makine bulunuyor; çalışma yüksekliği aralığı ${o.enDusuk.toFixed(2)} m ile ${o.enYuksek.toFixed(2)} m arasında. ${uzmanlikIfade(site)} kapsamındaki işlerde hangi sınıfın uygun olduğunu saha bilgisiyle birlikte belirliyoruz.`,
                        `${bolge} ve çevresine kiraladığımız filo ${o.markaSayisi} markadan oluşuyor. Pratikte belirleyici olan marka değil metraj ve kapasite; ${o.enDusuk.toFixed(2)}–${o.enYuksek.toFixed(2)} m aralığında işinize uyan sınıfı öneriyoruz.`,
                        `Toplam ${o.toplamMakine} makinelik filomuz ${o.markaSayisi} üreticiyi kapsıyor. Bu sayfalar bayilik sayfası değildir — yalnızca kiraladığımız kendi makinelerimizi tanıtır.`,
                    ])}
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {markalar.map((m) => {
                        const makineler = markaMakineleri(m.marka);
                        const y = makineler.map((x) => x.yukseklik).sort((a, b) => a - b);
                        const ornek = makineler[0];
                        return (
                            <Link key={m.slug} href={`/markalar/${m.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-elevated transition-colors hover:border-accent">
                                <div className="relative h-40 w-full bg-bg">
                                    <Image src={ornek.gorsel} alt={`${m.marka} kiralık platform`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-4" />
                                </div>
                                <div className="p-5">
                                    <h2 className="font-display text-xl font-bold text-fg group-hover:text-accent">{m.marka}</h2>
                                    <p className="mt-1 text-xs text-muted">{m.mense} · {makineler.length} model</p>
                                    <p className="mt-3 text-sm leading-relaxed text-muted">{m.segment}</p>
                                    <p className="mt-3 text-sm font-bold text-accent">
                                        {y.length > 1 ? `${y[0].toFixed(2)} – ${y[y.length - 1].toFixed(2)} m` : `${y[0].toFixed(2)} m`}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <h2 className="font-display text-lg font-bold text-fg">Marka mı, metraj mı?</h2>
                    <p className="mt-2 leading-relaxed text-muted">
                        {varyantSec(site, "markalar-not", [
                            "Sahada işi belirleyen dört ölçü var: çalışma yüksekliği, platform kapasitesi, şase genişliği ve güç tipi. Bu dördü uyduğunda farklı markaların aynı sınıf makineleri birbirinin yerine kullanılabilir — aynı sınıftaki makineler EN 280 standardına göre üretildiği için güvenlik donanımları ve temel kabiliyetler benzerdir.",
                            "Marka tercihi çoğu işte sonucu değiştirmez. Belirleyici olan hedef yüksekliğe ulaşabilmek, gereken kapasiteyi taşıyabilmek ve makinenin sahaya girebilmesidir. Belirli bir marka tercihiniz varsa müsaitliğe göre planlıyoruz.",
                            "Doğru soru 'hangi marka' değil, 'hangi metraj ve kapasite'. İş tanımınızı paylaşın; uygun sınıftaki müsait makineleri karşılaştırmalı gösterelim.",
                        ])}
                    </p>
                </div>

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

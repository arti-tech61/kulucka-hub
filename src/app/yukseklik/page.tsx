import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hostIcinSite } from "@/lib/siteler";
import { yukseklikSayfalari } from "@/lib/yukseklik-sayfalari";
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
    const sayfalar = yukseklikSayfalari(site);
    const enAz = Math.min(...sayfalar.map((s) => s.metraj));
    const enCok = Math.max(...sayfalar.map((s) => s.metraj));
    const baslik = varyantSec(site, "yuks-hub-baslik", [
        `Yüksekliğe Göre Platform Kiralama | ${bolge}`,
        `${bolge} Kaç Metre Platform Lazım?`,
        `${enAz}-${enCok} Metre Kiralık Platform — ${bolge}`,
    ]);
    const aciklama = varyantSec(site, "yuks-hub-aciklama", [
        `${enAz} metreden ${enCok} metreye kiralık platform. Hedef yüksekliğinize göre doğru makine sınıfını seçin — ${bolge} ve çevresine teslimat.`,
        `Kaç metreye çıkmanız gerektiğini biliyorsanız doğru sınıfı buradan bulabilirsiniz; ${bolge} bölgesine ${enAz}-${enCok} m aralığında platform kiralıyoruz.`,
        `${bolge} sahalarına yükseklik bandına göre platform kiralama: ${enAz} m ile ${enCok} m arası ${sayfalar.length} sınıf.`,
    ]);
    return {
        title: baslik,
        description: aciklama,
        alternates: { canonical: `https://${host}/yukseklik` },
        openGraph: { title: baslik, description: aciklama, url: `https://${host}/yukseklik`, locale: "tr_TR", type: "website" },
    };
}

export default async function YukseklikHubSayfasi() {
    const host = await aktifHost();
    const site = hostIcinSite(host);
    if (!site) notFound();

    const bolge = ilkBolge(site);
    const sayfalar = yukseklikSayfalari(site);

    const itemListLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Yükseklik Sınıfına Göre Kiralık Platform — ${bolge}`,
        itemListElement: sayfalar.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `${s.metraj} metre platform kiralama`,
            url: `https://${host}/yukseklik/${s.slug}`,
        })),
    };
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: site.h1, item: `https://${host}/` },
            { "@type": "ListItem", position: 2, name: "Yüksekliğe Göre", item: `https://${host}/yukseklik` },
        ],
    };

    return (
        <Kabuk host={host} site={site} aktif="/yukseklik">
            <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
                <GaEtiketi gaId={site.gaId} />

                <nav aria-label="Breadcrumb" className="text-sm font-semibold text-muted">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link href="/" className="text-accent hover:text-accent-hover hover:underline">{site.h1}</Link></li>
                        <li aria-hidden="true" className="text-muted/60">/</li>
                        <li className="text-fg" aria-current="page">Yüksekliğe Göre</li>
                    </ol>
                </nav>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-accent">Yükseklik Rehberi</p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-fg sm:text-5xl">
                    {varyantSec(site, "yuks-hub-h1", [
                        "Kaç Metre Platform Lazım?",
                        "Yüksekliğe Göre Platform Seçimi",
                        `${bolge} İçin Yükseklik Sınıfları`,
                    ])}
                </h1>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                    {varyantSec(site, "yuks-hub-giris", [
                        `Platform seçiminde en sık yapılan hata, katalogdaki "çalışma yüksekliği" değerinin sepet yüksekliği sanılmasıdır. Çalışma yüksekliği, sepet tabanına ortalama uzanma mesafesi olan ~2 metre eklenerek bulunur. Aşağıdaki sınıflarda bu ayrım her metraj için ayrıca gösteriliyor.`,
                        `Hedefinizin yerden yüksekliğini biliyorsanız doğru sınıfı bulmak kolaydır: aradığınız değere ~2 metre ekleyin, çıkan sayı ihtiyacınız olan çalışma yüksekliğidir. ${bolge} bölgesine kiraladığımız sınıflar aşağıda.`,
                        `${uzmanlikIfade(site)} kapsamındaki işlerde metraj seçimi maliyeti doğrudan etkiliyor — gereğinden büyük makine hem pahalı hem de sahaya girmesi zor oluyor. Aşağıdaki bantlardan hedefinize en yakınını seçin.`,
                    ])}
                </p>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sayfalar.map((s) => (
                        <Link key={s.slug} href={`/yukseklik/${s.slug}`} className="group rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-accent">
                            <div className="flex items-baseline justify-between gap-2">
                                <span className="font-display text-3xl font-black text-fg group-hover:text-accent">{s.metraj}<span className="text-lg"> m</span></span>
                                <span className="text-xs font-bold text-muted">~{s.katKarsiligi} kat</span>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-muted">
                                Sepet tabanı {s.platformYuksekligi} m · {s.onerilenMakineler.length} model
                            </p>
                            {!s.tamEslesme && (
                                <p className="mt-2 text-xs font-bold text-amber-700">Bir üst sınıfla karşılanıyor</p>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                    <h2 className="font-display text-lg font-bold text-fg">Yükseklik tek başına yetmez</h2>
                    <p className="mt-2 leading-relaxed text-muted">
                        {varyantSec(site, "yuks-hub-not", [
                            "Doğru sınıfı belirleyen üç ölçü var: çalışma yüksekliği, zeminin taşıma kapasitesi ve makinenin gireceği açıklık. Metraj yükseldikçe makine büyür ve ağırlaşır; kapalı alan işlerinde döşeme kapasitesi bu yüzden ayrıca kontrol edilmelidir.",
                            "Yüksekliğin yanında iki şey daha belirleyici: ortam (kapalı alanda emisyon nedeniyle akülü zorunlu) ve zemin (kırmataş veya çamurda dizel 4x4 gerekli). Bu üçü birlikte değerlendirilmeden sınıf kesinleşmez.",
                            "Hedef yüksekliği bulduktan sonra kapasite de kontrol edilmeli: 230 kg tek personel + alet için, 320 kg ve üzeri iki personel + malzeme için uygundur.",
                        ])}
                    </p>
                </div>

                <div className="mt-16"><TicariTeklif site={site} /></div>
            </main>
        </Kabuk>
    );
}

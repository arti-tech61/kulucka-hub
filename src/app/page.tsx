import { headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";
import { hostIcinSite, siteler } from "@/lib/siteler";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { HaberAnaSayfa } from "@/components/haber-sitesi";
import { TicariCerceve, TicariGorsel, TicariTeklif } from "@/components/ticari-cerceve";

export const dynamic = "force-dynamic";

async function aktifHost() {
    const h = await headers();
    return (h.get("host") ?? "").toLowerCase().replace(/^www\./, "").split(":")[0];
}

async function aktifSite() {
    return hostIcinSite(await aktifHost()) ?? siteler[0];
}

export async function generateMetadata(): Promise<Metadata> {
    const haber = hostIcinHaberSitesi(await aktifHost());
    if (haber) {
        return {
            title: haber.baslik,
            description: haber.aciklama,
            alternates: { canonical: `https://${haber.host}/` },
            openGraph: {
                title: haber.baslik,
                description: haber.aciklama,
                url: `https://${haber.host}/`,
                locale: "tr_TR",
                type: "website",
            },
        };
    }
    const site = await aktifSite();
    return {
        title: site.baslik,
        description: site.aciklama,
        alternates: { canonical: `https://${site.host}/` },
        openGraph: {
            title: site.baslik,
            description: site.aciklama,
            url: `https://${site.host}/`,
            locale: "tr_TR",
            type: "website",
        },
    };
}

export default async function Sayfa() {
    const host = await aktifHost();
    const haber = hostIcinHaberSitesi(host);
    if (haber) return <HaberAnaSayfa site={haber} />;
    const site = await aktifSite();
    const altSayfalar = hostAltSayfalari(site.host);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": site.kategori ? "WebSite" : "LocalBusiness",
        name: site.h1,
        url: `https://${site.host}`,
        areaServed: site.bolge,
        telephone: site.telefon,
        email: site.eposta,
        parentOrganization: { "@type": "Organization", name: site.anaSite.ad, url: site.anaSite.url },
    };
    return (
        <TicariCerceve site={site}>
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {site.gaId && (<>
              <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
              <Script id="ga" strategy="afterInteractive">{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.gaId}');
                document.addEventListener('click', function (e) {
                  var a = e.target && e.target.closest ? e.target.closest('a') : null;
                  if (!a || !a.href) return;
                  if (a.href.indexOf('tel:') === 0) gtag('event', 'telefon_tiklamasi');
                  else if (a.href.indexOf('wa.me') !== -1 || a.href.indexOf('api.whatsapp.com') !== -1) gtag('event', 'whatsapp_tiklamasi');
                }, true);
                document.addEventListener('submit', function (e) {
                  if (e.target && e.target.tagName === 'FORM') gtag('event', 'generate_lead');
                }, true);
              `}</Script>
            </>)}

            <section className="overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
                <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-700">{site.bolge}</p>
                        <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl">{site.h1}</h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">{site.paragraflar[0]}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a href={`tel:${site.telefon}`} className="rounded-full bg-blue-700 px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-blue-700/20 hover:bg-blue-800">
                                Teklif için ara
                            </a>
                            <a href="/teklif-hazirligi" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-center font-bold text-slate-800 hover:border-blue-400">
                                Talep bilgilerini hazırla
                            </a>
                        </div>
                    </div>
                    <TicariGorsel site={site} />
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
                Makine modeli, kapasite, belge, operatör, teslimat tarihi ve ücret;
                güncel uygunluk kontrolünden sonra yalnız yazılı teklif ve sözleşmeyle kesinleşir.
            </aside>

            <div className="mt-14 max-w-3xl">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Doğru seçim, net kapsam</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight">Hizmet başlıkları</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{site.paragraflar.slice(1).join(" ")}</p>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {site.hizmetler.map((h, i) => (
                    <li key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                        <span className="grid size-9 place-items-center rounded-xl bg-blue-50 font-black text-blue-700">0{i + 1}</span>
                        <p className="mt-4 font-bold leading-snug text-slate-800">{h}</p>
                    </li>
                ))}
            </ul>

            {altSayfalar.length > 0 && (
                <>
                    <h2 className="mt-16 text-2xl font-black">Detaylı hizmet sayfaları</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {altSayfalar.map((a) => (
                            <a key={a.slug} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg" href={`/${a.slug}`}>
                                {a.baslik}<span className="mt-4 block text-blue-700">İncele →</span>
                            </a>
                        ))}
                    </div>
                </>
            )}

            {site.bolumler && site.bolumler.length > 0 && (
                <>
                    <h2 className="mt-16 text-2xl font-black">Rehber bölümleri</h2>
                    <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                        {site.bolumler.map((b) => (
                            <li key={b.href} className="rounded-2xl border border-slate-200 bg-white p-5">
                                <a className="font-bold text-blue-700 hover:text-blue-900" href={b.href}>{b.baslik} →</a>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <div className="mt-16 grid gap-4 md:grid-cols-3">
                {[
                    ["1", "İşi tarif edin", "Yükseklik, zemin, erişim engeli, tarih ve adres bilgisini paylaşın."],
                    ["2", "Uygunluğu kontrol edelim", "Makine sınıfı, nakliye, belge ve operatör kapsamını doğrulayalım."],
                    ["3", "Yazılı teklif alın", "Kesinleşen kapsamı fiyat ve sözleşme koşullarıyla birlikte görün."],
                ].map(([no, baslik, metin]) => (
                    <div key={no} className="rounded-2xl bg-slate-950 p-6 text-white">
                        <span className="text-sm font-black text-cyan-300">{no}</span>
                        <h2 className="mt-5 text-xl font-black">{baslik}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{metin}</p>
                    </div>
                ))}
            </div>
            <div className="mt-16"><TicariTeklif site={site} /></div>
            </section>
        </main>
        </TicariCerceve>
    );
}

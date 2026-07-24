import { headers } from "next/headers";
import Script from "next/script";
import type { Metadata } from "next";
import { hostIcinSite, siteler } from "@/lib/siteler";
import { hostIcinHaberSitesi } from "@/lib/haber-config";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { HaberAnaSayfa } from "@/components/haber-sitesi";
import { TicariCerceve, TicariGorsel, TicariTeklif } from "@/components/ticari-cerceve";
import { GaEtiketi } from "@/components/ga";
import { ozelTemaVar, OzelTema } from "@/components/temalar";

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
        const socialImage = `https://${haber.host}/media/saha-hero.png`;
        return {
            title: haber.baslik,
            description: haber.aciklama,
            alternates: { canonical: `https://${haber.host}/` },
            openGraph: {
                title: haber.baslik,
                description: haber.aciklama,
                url: `https://${haber.host}/`,
                siteName: `${haber.adOn} ${haber.adSon}`,
                locale: "tr_TR",
                type: "website",
                images: [{ url: socialImage, alt: `${haber.adOn} ${haber.adSon}` }],
            },
            twitter: {
                card: "summary_large_image",
                title: haber.baslik,
                description: haber.aciklama,
                images: [socialImage],
            },
        };
    }
    const site = await aktifSite();
    const socialImage = `https://${site.host}/media/saha-hero.png`;
    return {
        title: site.baslik,
        description: site.aciklama,
        alternates: { canonical: `https://${site.host}/` },
        openGraph: {
            title: site.baslik,
            description: site.aciklama,
            url: `https://${site.host}/`,
            siteName: site.h1,
            locale: "tr_TR",
            type: "website",
            images: [{ url: socialImage, alt: site.h1 }],
        },
        twitter: {
            card: "summary_large_image",
            title: site.baslik,
            description: site.aciklama,
            images: [socialImage],
        },
    };
}

export default async function Sayfa() {
    const host = await aktifHost();
    const haber = hostIcinHaberSitesi(host);
    if (haber) {
        const publicationJsonLd = {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "NewsMediaOrganization",
                    "@id": `https://${haber.host}/#organization`,
                    name: `${haber.adOn} ${haber.adSon}`,
                    url: `https://${haber.host}/`,
                },
                {
                    "@type": "WebSite",
                    "@id": `https://${haber.host}/#website`,
                    name: `${haber.adOn} ${haber.adSon}`,
                    url: `https://${haber.host}/`,
                    inLanguage: "tr-TR",
                    publisher: { "@id": `https://${haber.host}/#organization` },
                },
            ],
        };
        return (
            <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationJsonLd).replace(/</g, "\\u003c") }} />
                <HaberAnaSayfa site={haber} />
            </>
        );
    }
    const site = await aktifSite();
    const altSayfalar = hostAltSayfalari(site.host);
    const bilgiSitesi = site.kategori === "egitim" || site.kategori === "rehber";
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

    // Host'a özel Stitch teması varsa varsayılan çerçeve yerine onu kullan.
    if (ozelTemaVar(host)) {
        return (
            <>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <GaEtiketi gaId={site.gaId} />
                <OzelTema host={host} site={site} />
            </>
        );
    }

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

            <section className="relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute left-1/3 top-0 size-[34rem] rounded-full bg-blue-600/15 blur-3xl" />
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:py-20">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">{site.bolge}</p>
                            <span className="size-1 rounded-full bg-slate-600" />
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                                {bilgiSitesi ? "Bağımsız bilgi mimarisi" : "Planlı saha çözümü"}
                            </p>
                        </div>
                        <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">{site.h1}</h1>
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300">{site.paragraflar[0]}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            {bilgiSitesi ? (
                                <a href={`/${altSayfalar[0]?.slug ?? "hakkimizda"}`} className="rounded-full bg-white px-6 py-3.5 text-center font-black text-slate-950 transition hover:bg-cyan-100">
                                    Rehberleri keşfet
                                </a>
                            ) : (
                                <a href={`tel:${site.telefon}`} className="rounded-full bg-white px-6 py-3.5 text-center font-black text-slate-950 transition hover:bg-cyan-100">
                                    Teklif için ara
                                </a>
                            )}
                            <a href="/teklif-hazirligi" className="rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-center font-bold text-white backdrop-blur transition hover:bg-white/10">
                                {bilgiSitesi ? "Kaynak değerlendirme ilkeleri" : "Talep bilgilerini hazırla"}
                            </a>
                        </div>
                        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6 text-sm">
                            {(bilgiSitesi ? [
                                ["01", "Kavramı öğrenin"],
                                ["02", "Kaynağı doğrulayın"],
                                ["03", "Sahada uygulayın"],
                            ] : [
                                ["01", "İhtiyaç analizi"],
                                ["02", "Uygunluk kontrolü"],
                                ["03", "Yazılı kapsam"],
                            ]).map(([no, label]) => (
                                <div key={no}>
                                    <span className="block text-[10px] font-black text-cyan-300">{no}</span>
                                    <span className="mt-1 block font-semibold text-slate-300">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <TicariGorsel site={site} />
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <aside className={`rounded-2xl p-5 text-sm leading-relaxed ${bilgiSitesi ? "border border-emerald-200 bg-emerald-50 text-emerald-950" : "border border-amber-200 bg-amber-50 text-amber-950"}`}>
                {bilgiSitesi
                    ? "Bu yayın eğitim ve genel bilgilendirme amacı taşır. Belgelendirme, mevzuat ve makine kullanımında resmî kurumların güncel metinleri, üretici talimatları ve işyerinizin İSG sorumlusu esas alınmalıdır."
                    : "Makine modeli, kapasite, belge, operatör, teslimat tarihi ve ücret; güncel uygunluk kontrolünden sonra yalnız yazılı teklif ve sözleşmeyle kesinleşir."}
            </aside>

            <div className="mt-14">
                <p className="max-w-3xl text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                    {bilgiSitesi ? "Öğrenme yolu" : "Doğru seçim, net kapsam"}
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight">
                    {bilgiSitesi ? "Bilgi ve rehber başlıkları" : "Hizmet başlıkları"}
                </h2>
                <div className="mt-8 gap-5 sm:columns-2 [column-fill:balance]">
                    {site.paragraflar.slice(1).map((p, i) => (
                        <div key={i} className="mb-5 break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">
                            <span className="text-xs font-black tracking-widest text-blue-700">{String(i + 1).padStart(2, "0")}</span>
                            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {site.hizmetler.map((h, i) => (
                    <li key={i} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
                        <div className="flex items-start justify-between">
                            <span className="text-xs font-black tracking-widest text-blue-700">0{i + 1}</span>
                            <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-slate-950 group-hover:text-white">↗</span>
                        </div>
                        <p className="mt-10 text-lg font-black leading-snug text-slate-900">{h}</p>
                    </li>
                ))}
            </ul>

            {altSayfalar.length > 0 && (
                <>
                    <h2 className="mt-16 text-2xl font-black">{bilgiSitesi ? "Derinlemesine rehberler" : "Detaylı hizmet sayfaları"}</h2>
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        {altSayfalar.map((a) => (
                            <a key={a.slug} className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-xl" href={`/${a.slug}`}>
                            {a.baslik}<span className="mt-4 block text-blue-700">{bilgiSitesi ? "Rehberi oku →" : "İncele →"}</span>
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
                {(bilgiSitesi ? [
                    ["1", "Soruyu tanımlayın", "Makine sınıfını, kullanım bağlamını ve öğrenmek istediğiniz konuyu netleştirin."],
                    ["2", "Birincil kaynağı açın", "Üretici kılavuzu, resmî kurum veya yetkili programın güncel metnini kontrol edin."],
                    ["3", "Saha koşuluna uyarlayın", "Bilgiyi risk değerlendirmesi, iş ekipmanı ve işyeri prosedürünüzle birlikte uygulayın."],
                ] : [
                    ["1", "İşi tarif edin", "Yükseklik, zemin, erişim engeli, tarih ve adres bilgisini paylaşın."],
                    ["2", "Uygunluğu kontrol edelim", "Makine sınıfı, nakliye, belge ve operatör kapsamını doğrulayalım."],
                    ["3", "Yazılı teklif alın", "Kesinleşen kapsamı fiyat ve sözleşme koşullarıyla birlikte görün."],
                ]).map(([no, baslik, metin]) => (
                    <div key={no} className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white">
                        <div className="absolute -right-10 -top-10 size-28 rounded-full bg-blue-600/20 blur-2xl" />
                        <span className="relative text-sm font-black text-cyan-300">{no}</span>
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

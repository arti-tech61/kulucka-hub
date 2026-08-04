import type { HazirlananSite } from "@/lib/hazirlanan-siteler";

/**
 * Hazirlanan site sayfasi.
 *
 * Tam site yayina alinana kadar gosterilen gecici tanitim sayfasi. Bos bir
 * "yakinda" ekrani degildir: her alan adi kendi sehri, ilce hatti ve makine
 * odagiyla gercek bilgi tasir, ziyaretciye ne yapildigini ve nasil
 * ulasilacagini soyler.
 */
export function HazirlananSiteSayfasi({ site }: { site: HazirlananSite }) {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900">
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-5 py-4">
                    <span className="text-lg font-semibold tracking-tight">{site.host}</span>
                    <a
                        href={site.anaSite.url}
                        className="text-sm font-medium text-slate-600 underline underline-offset-4 hover:text-slate-900"
                    >
                        {site.anaSite.ad}
                    </a>
                </div>
            </header>

            <div className="mx-auto max-w-4xl px-5 py-10">
                <p className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-900">
                    Bu site hazırlanıyor
                </p>

                <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{site.h1}</h1>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                    {site.paragraflar.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                </div>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Hazırlanan hizmetler</h2>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {site.odakHizmetler.map((h) => (
                            <li
                                key={h}
                                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                            >
                                {h}
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-xl font-semibold">Hizmet bölgeleri</h2>
                    <p className="mt-3 text-sm text-slate-600">
                        {site.sehir} ve çevresi: {site.bolgeler.join(", ")}.
                    </p>
                </section>

                <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-semibold">Şimdi ulaşın</h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Sayfa yayına alınana kadar talepleriniz{" "}
                        <a
                            href={site.anaSite.url}
                            className="font-medium text-slate-900 underline underline-offset-4"
                        >
                            {site.anaSite.ad}
                        </a>{" "}
                        üzerinden karşılanmaktadır.
                    </p>
                    {site.ilgiliSayfa && (
                        <p className="mt-3 text-sm text-slate-600">
                            Ayrıntılı bilgi:{" "}
                            <a href={site.ilgiliSayfa.url} className="font-medium text-slate-900 underline underline-offset-4">
                                {site.ilgiliSayfa.ad}
                            </a>
                        </p>
                    )}
                    {(site.telefonGosterim || site.eposta) && (
                        <div className="mt-4 flex flex-wrap gap-3">
                            {site.telefon && site.telefonGosterim && (
                                <a
                                    href={`tel:${site.telefon}`}
                                    className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
                                >
                                    {site.telefonGosterim}
                                </a>
                            )}
                            {site.eposta && (
                                <a
                                    href={`mailto:${site.eposta}`}
                                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800"
                                >
                                    {site.eposta}
                                </a>
                            )}
                        </div>
                    )}
                </section>
            </div>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-4xl px-5 py-6 text-sm text-slate-500">
                    {site.host} — {site.anaSite.ad} bünyesinde hazırlanmaktadır.
                </div>
            </footer>
        </main>
    );
}

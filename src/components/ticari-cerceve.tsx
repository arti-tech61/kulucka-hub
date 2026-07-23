import Link from "next/link";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";

export function TicariBaslik({ site }: { site: SiteIcerik }) {
    return (
        <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
                <Link href="/" className="group flex min-w-0 items-center gap-3">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blue-700 text-xl font-black text-white shadow-lg shadow-blue-700/20">
                        {site.kategori === "rehber" ? "R" : site.kategori === "egitim" ? "A" : "P"}
                    </span>
                    <span className="min-w-0">
                        <span className="block truncate text-base font-black tracking-tight text-slate-950">{site.h1}</span>
                        <span className="block truncate text-xs font-medium text-slate-500">{site.bolge}</span>
                    </span>
                </Link>
                <nav aria-label="Ana menü" className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
                    <Link href="/">Ana sayfa</Link>
                    <Link href="/hakkimizda">Hakkımızda</Link>
                    <Link href="/teklif-hazirligi">Talep rehberi</Link>
                    <Link href="/iletisim">İletişim</Link>
                </nav>
                <a
                    href={`tel:${site.telefon}`}
                    className="shrink-0 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                    <span className="hidden sm:inline">Hemen ara · </span>{site.telefonGosterim}
                </a>
            </div>
            <nav aria-label="Mobil menü" className="mx-auto grid max-w-6xl grid-cols-4 gap-2 border-t border-slate-100 px-4 py-3 text-center text-xs font-semibold text-slate-700 md:hidden">
                <Link href="/">Ana sayfa</Link>
                <Link href="/hakkimizda">Hakkımızda</Link>
                <Link href="/teklif-hazirligi">Talep rehberi</Link>
                <Link href="/iletisim">İletişim</Link>
            </nav>
        </header>
    );
}

export function TicariGorsel({ site }: { site: SiteIcerik }) {
    return (
        <div aria-hidden="true" className="relative min-h-72 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 size-56 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative flex h-full min-h-56 flex-col justify-between">
                <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                        Saha planı
                    </span>
                    <span className="grid size-12 place-items-center rounded-2xl bg-blue-600 text-2xl">↗</span>
                </div>
                <div>
                    <div className="mb-5 flex items-end gap-2">
                        {[36, 58, 84, 112].map((height) => (
                            <span
                                key={height}
                                className="w-9 rounded-t-lg border border-white/20 bg-gradient-to-t from-blue-700 to-cyan-300"
                                style={{ height }}
                            />
                        ))}
                    </div>
                    <p className="max-w-sm text-lg font-bold leading-snug">{site.uzmanlik}</p>
                    <p className="mt-2 text-sm text-slate-300">İş bilgisi → uygunluk kontrolü → yazılı teklif</p>
                </div>
            </div>
        </div>
    );
}

export function TicariTeklif({ site }: { site: SiteIcerik }) {
    return (
        <section className="rounded-[2rem] bg-blue-700 px-6 py-10 text-center text-white shadow-xl shadow-blue-700/20 sm:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">İhtiyacınızı birlikte netleştirelim</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-black tracking-tight">Saha bilgilerinizi paylaşın, doğrulanabilir teklif hazırlayalım.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-blue-100">
                Model, kapasite, belge, operatör, nakliye, teslimat ve ücret; güncel uygunluk kontrolünden sonra yazılı teklif ve sözleşmede kesinleşir.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`tel:${site.telefon}`} className="rounded-full bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50">
                    Ara · {site.telefonGosterim}
                </a>
                <a href={`mailto:${site.eposta}`} className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                    E-posta gönder
                </a>
            </div>
        </section>
    );
}

export function TicariCerceve({ site, children }: { site: SiteIcerik; children: ReactNode }) {
    return (
        <>
            <TicariBaslik site={site} />
            {children}
            <footer className="mt-20 border-t border-slate-200 bg-white">
                <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-slate-600 sm:px-8 md:grid-cols-[1fr_auto]">
                    <div>
                        <p className="font-black text-slate-950">{site.h1}</p>
                        <p className="mt-2 max-w-xl leading-relaxed">
                            {site.anaSite.ad} hizmet ağı içinde, {site.uzmanlik} odağında bilgilendirme ve teklif hazırlama noktası.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start gap-x-5 gap-y-2 md:justify-end">
                        <Link href="/hakkimizda">Hakkımızda</Link>
                        <Link href="/iletisim">İletişim</Link>
                        <Link href="/gizlilik-politikasi">Gizlilik</Link>
                        <Link href="/kullanim-kosullari">Koşullar</Link>
                        <a href={site.anaSite.url}>{site.anaSite.ad}</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

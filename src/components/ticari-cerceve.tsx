import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";

function siteGorunumu(site: SiteIcerik) {
    if (site.host.includes("forklift")) {
        return {
            kod: "FL",
            vurgu: "bg-amber-400 text-slate-950",
            buton: "bg-amber-400 text-slate-950 hover:bg-amber-300",
            gorsel: "/media/forklift.jpg",
            gorselAlt: "Saha koşuluna göre değerlendirilen forklift sınıfı",
            gorselSinifi: "object-cover",
        };
    }
    if (site.kategori === "egitim" || site.kategori === "rehber") {
        return {
            kod: site.kategori === "egitim" ? "PA" : "YR",
            vurgu: "bg-emerald-400 text-slate-950",
            buton: "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
            gorsel: "/media/guvenli-calisma.png",
            gorselAlt: "Yüksekte çalışma planı ve güvenlik kontrolü",
            gorselSinifi: "object-cover",
        };
    }
    if (site.host.includes("eklemli")) {
        return {
            kod: "EP",
            vurgu: "bg-cyan-300 text-slate-950",
            buton: "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
            gorsel: "/media/eklemli-platform.png",
            gorselAlt: "Eklemli personel yükseltici platform",
            gorselSinifi: "object-contain p-8 sm:p-12",
        };
    }
    return {
        kod: "AP",
        vurgu: "bg-lime-300 text-slate-950",
        buton: "bg-lime-300 text-slate-950 hover:bg-lime-200",
        gorsel: "/media/saha-hero.png",
        gorselAlt: "Yüksekte erişim işi için saha planlaması",
        gorselSinifi: "object-cover",
    };
}

export function TicariBaslik({ site }: { site: SiteIcerik }) {
    const gorunum = siteGorunumu(site);
    return (
        <header className="relative z-20 border-b border-white/10 bg-slate-950 text-white">
            <div className="border-b border-white/10 bg-white/[0.035]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 text-[11px] font-semibold tracking-wide text-slate-400 sm:px-8">
                    <span>{site.bolge}</span>
                    <span className="hidden sm:inline">Doğrulanmış kapsam · Yazılı teklif · Açık iletişim</span>
                </div>
            </div>
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8">
                <Link href="/" className="group flex min-w-0 items-center gap-3">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl text-sm font-black tracking-tighter shadow-lg ${gorunum.vurgu}`}>
                        {gorunum.kod}
                    </span>
                    <span className="min-w-0">
                        <span className="block truncate text-base font-black tracking-tight text-white">{site.h1}</span>
                        <span className="block truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{site.anaSite.ad} hizmet ağı</span>
                    </span>
                </Link>
                <nav aria-label="Ana menü" className="hidden items-center gap-7 text-sm font-semibold text-slate-300 md:flex">
                    <Link className="transition hover:text-white" href="/">Ana sayfa</Link>
                    <Link className="transition hover:text-white" href="/hakkimizda">Hakkımızda</Link>
                    <Link className="transition hover:text-white" href="/teklif-hazirligi">Talep rehberi</Link>
                    <Link className="transition hover:text-white" href="/iletisim">İletişim</Link>
                </nav>
                <a
                    href={`tel:${site.telefon}`}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-black transition ${gorunum.buton}`}
                >
                    <span className="hidden sm:inline">Hemen ara · </span>{site.telefonGosterim}
                </a>
            </div>
            <nav aria-label="Mobil menü" className="mx-auto grid max-w-7xl grid-cols-4 gap-2 border-t border-white/10 px-4 py-3 text-center text-[11px] font-bold text-slate-300 md:hidden">
                <Link href="/">Ana sayfa</Link>
                <Link href="/hakkimizda">Hakkımızda</Link>
                <Link href="/teklif-hazirligi">Talep rehberi</Link>
                <Link href="/iletisim">İletişim</Link>
            </nav>
        </header>
    );
}

export function TicariGorsel({ site }: { site: SiteIcerik }) {
    const gorunum = siteGorunumu(site);
    return (
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-2xl shadow-black/30">
            <Image
                src={gorunum.gorsel}
                alt={gorunum.gorselAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className={gorunum.gorselSinifi}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-5">
                    <div>
                        <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${gorunum.vurgu}`}>
                            Saha odaklı plan
                        </span>
                        <p className="mt-4 max-w-sm text-xl font-black leading-snug text-white">{site.uzmanlik}</p>
                        <p className="mt-2 text-sm font-medium text-slate-300">İhtiyaç → uygunluk → yazılı teklif</p>
                    </div>
                    <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur">↗</span>
                </div>
            </div>
        </div>
    );
}

export function TicariTeklif({ site }: { site: SiteIcerik }) {
    const gorunum = siteGorunumu(site);
    return (
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white shadow-2xl shadow-slate-950/20 sm:px-10">
            <div className="absolute -left-20 -top-24 size-72 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">İhtiyacınızı birlikte netleştirelim</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.03em] sm:text-4xl">Saha bilgilerinizi paylaşın, doğrulanabilir teklif hazırlayalım.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">
                Model, kapasite, belge, operatör, nakliye, teslimat ve ücret; güncel uygunluk kontrolünden sonra yazılı teklif ve sözleşmede kesinleşir.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={`tel:${site.telefon}`} className={`rounded-full px-6 py-3 font-black transition ${gorunum.buton}`}>
                    Ara · {site.telefonGosterim}
                </a>
                <a href={`mailto:${site.eposta}`} className="rounded-full border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                    E-posta gönder
                </a>
            </div>
            </div>
        </section>
    );
}

export function TicariCerceve({ site, children }: { site: SiteIcerik; children: ReactNode }) {
    return (
        <>
            <TicariBaslik site={site} />
            {children}
            <footer className="mt-20 border-t border-white/10 bg-slate-950 text-white">
                <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-sm text-slate-400 sm:px-8 md:grid-cols-[1fr_auto]">
                    <div>
                        <p className="font-black text-white">{site.h1}</p>
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

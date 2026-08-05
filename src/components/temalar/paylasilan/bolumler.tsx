import type { SiteIcerik } from "@/lib/siteler";
import { TemaForm, type TemaFormClass } from "../tema-form";
import { Ikon } from "./ikonlar";

const formCls: TemaFormClass = {
    etiket: "mb-2 block font-semibold text-fg",
    alan: "w-full rounded-lg border border-border bg-bg p-3 text-fg outline-none focus:border-accent",
    buton: "w-full rounded-lg bg-accent px-6 py-3 font-bold text-accent-fg hover:bg-accent-hover",
    izgara: "grid gap-5 sm:grid-cols-2",
};

export function HizmetlerBolumu({ site }: { site: SiteIcerik }) {
    const hizmetler = site.hizmetler.slice(0, 6);
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="mb-10 max-w-2xl">
                <h2 className="font-display text-[32px] font-bold text-fg md:text-[40px]">Hizmetlerimiz</h2>
                <p className="mt-3 text-muted">{site.uzmanlik} için doğru makine seçimi ve yazılı teklif süreci.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
                {hizmetler.map((h) => (
                    <article key={h} className="rounded-2xl bg-elevated p-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-accent-fg">
                            <Ikon ad="onay" className="h-5 w-5" />
                        </span>
                        <p className="mt-4 leading-6 text-fg">{h}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export function BolgeBolumu({ site }: { site: SiteIcerik }) {
    const bolgeler = site.bolge.split(",").map((s) => s.trim());
    return (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <h2 className="font-display text-[32px] font-bold text-fg md:text-[40px]">Hizmet Bölgelerimiz</h2>
            <div className="mt-8 flex flex-wrap gap-3">
                {bolgeler.map((b) => (
                    <span key={b} className="flex items-center gap-2 rounded-full bg-elevated px-4 py-2 text-fg">
                        <Ikon ad="konum" className="h-4 w-4 text-accent" />
                        {b}
                    </span>
                ))}
            </div>
        </section>
    );
}

export function IletisimKarti({ site }: { site: SiteIcerik }) {
    const bolgeler = site.bolge.split(",").map((s) => s.trim());
    const kartlar: [string, "telefon" | "posta" | "konum", string, string][] = [
        ...(site.telefon ? ([["Telefon", "telefon", site.telefonGosterim, `tel:${site.telefon}`]] as [string, "telefon" | "posta" | "konum", string, string][]) : []),
        ["E-posta", "posta", site.eposta, `mailto:${site.eposta}`],
        ["Bölge", "konum", site.bolge, "#"],
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div className="space-y-5">
                    {kartlar.map(([baslik, ikon, deger, href]) => (
                        <a key={baslik} href={href} className="flex items-center gap-4 rounded-2xl bg-elevated p-6">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-accent-fg">
                                <Ikon ad={ikon} className="h-5 w-5" />
                            </span>
                            <div>
                                <h3 className="font-display text-fg">{baslik}</h3>
                                <p className="mt-1 break-all text-muted">{deger}</p>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="rounded-2xl bg-elevated p-8">
                    <h2 className="mb-6 font-display text-[24px] font-bold text-fg">Teklif Talebi Gönderin</h2>
                    <TemaForm eposta={site.eposta} konu={`${site.h1} - Teklif Talebi`} opsiyonlar={bolgeler} cls={formCls} />
                </div>
            </div>
        </section>
    );
}

// Not: dış <main> etiketi yok — Cerceve zaten {children}'ı kendi <main>'i içinde
// render ediyor, burada ikinci bir <main> anlamsal olarak yanlış (iç içe main) olurdu.
export function MetinSayfasi({ site, baslik }: { site: SiteIcerik; baslik: string }) {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-8">
            <h1 className="font-display text-[36px] font-bold text-fg md:text-[44px]">{baslik}</h1>
            <div className="mt-8 space-y-5">
                {site.paragraflar.map((p, i) => (
                    <p key={i} className="leading-7 text-muted">
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
}

export function AnaSayfaGovde({ site }: { site: SiteIcerik }) {
    return (
        <>
            <HizmetlerBolumu site={site} />
            <BolgeBolumu site={site} />
            <IletisimKarti site={site} />
        </>
    );
}

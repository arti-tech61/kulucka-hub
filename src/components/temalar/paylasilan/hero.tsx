import type { SiteIcerik } from "@/lib/siteler";
import { Ikon } from "./ikonlar";

// Paylaşılan tema — ana sayfa hero bölümü. Component ağacı domain'ler arasında
// hiç değişmez; sadece `site` içeriği ve (Cerceve/renkler.ts üzerinden) renk
// token'ları değişir.
export function Hero({ site }: { site: SiteIcerik }) {
    const h1Kelimeler = site.h1.split(" ");
    const ortaNokta = Math.ceil(h1Kelimeler.length / 2);
    const h1Ust = h1Kelimeler.slice(0, ortaNokta).join(" ");
    const h1Alt = h1Kelimeler.slice(ortaNokta).join(" ");

    const oneCikanHizmetler = site.hizmetler.slice(0, 2);

    return (
        <section className="bg-gradient-to-br from-bg via-bg to-elevated pb-16 pt-20 lg:pb-24 lg:pt-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[0.7rem] font-bold uppercase tracking-wide text-accent-fg">
                            <Ikon ad="yildirim" className="h-3.5 w-3.5" />
                            Stok ve Teslimat Teklifte Doğrulanır
                        </span>

                        <h1 className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight text-primary sm:text-5xl lg:text-6xl">
                            {h1Ust}
                            {h1Alt && (
                                <>
                                    <br />
                                    <span className="text-accent">{h1Alt}</span>
                                </>
                            )}
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">{site.paragraflar[0]}</p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="/iletisim"
                                className="inline-flex items-center gap-2 rounded-[8px] bg-accent px-6 py-3.5 font-bold text-accent-fg transition-colors hover:bg-accent-hover"
                            >
                                Teklif İste
                                <Ikon ad="ok" className="h-4 w-4" />
                            </a>
                            <a
                                href="/urunler"
                                className="inline-flex items-center gap-2 rounded-[8px] border border-border px-6 py-3.5 font-bold text-fg transition-colors hover:bg-elevated"
                            >
                                Hizmetleri Keşfet
                            </a>
                        </div>

                        {oneCikanHizmetler.length > 0 && (
                            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                                {oneCikanHizmetler.map((hizmet) => (
                                    <div key={hizmet} className="flex items-center gap-2">
                                        <Ikon ad="onay" className="h-4.5 w-4.5 text-accent" />
                                        {hizmet}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-2xl border-2 border-accent bg-elevated p-8 shadow-xl">
                            <div className="mb-6 flex items-start gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent">
                                    <Ikon ad="telefon" className="h-7 w-7 text-accent-fg" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-muted">Teklif ve Bilgi Hattı</div>
                                    {site.telefon ? (
                                        <a href={`tel:${site.telefon}`} className="block font-display text-3xl font-black leading-tight text-primary">
                                            {site.telefonGosterim}
                                        </a>
                                    ) : (
                                        <a href={`mailto:${site.eposta}`} className="block font-display text-xl font-black leading-tight text-primary">
                                            {site.eposta}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div className="rounded-lg bg-bg p-3">
                                    <div className="font-display text-xl font-black text-primary">Stok</div>
                                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-muted">Teklifte</div>
                                </div>
                                <div className="rounded-lg bg-bg p-3">
                                    <div className="font-display text-xl font-black text-primary">Sevkiyat</div>
                                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-muted">Planlı</div>
                                </div>
                                <div className="rounded-lg bg-bg p-3">
                                    <div className="font-display text-xl font-black text-primary">Belge</div>
                                    <div className="text-[0.6rem] font-bold uppercase tracking-wider text-muted">Teyitli</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

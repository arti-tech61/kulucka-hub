import Image from "next/image";
import { ikinciTelefon } from "@/lib/siteler";
import { hostAltSayfalari } from "@/lib/alt-sayfalar";
import { bolgeSayfalari } from "@/lib/bolge-sayfalari";
import type { TemaModulu } from "../tipler";
import type { PaylasilanTemaConfig } from "./renkler";
import { Ikon, IkonWhatsapp } from "./ikonlar";
import { PaylasilanTemaStil } from "./tema-css";
import { MobilMenu } from "./mobil-menu";

const nav: [string, string][] = [
    ["/", "Ana Sayfa"],
    ["/hakkimizda", "Hakkımızda"],
    ["/urunler", "Ürünler"],
    ["/markalar", "Markalar"],
    ["/blog", "Blog"],
    ["/sozluk", "Sözlük"],
    ["/iletisim", "İletişim"],
];

// Paylaşımlı tema ortak çerçevesi: header + footer + telefon FAB.
// Component ağacı domain'ler arasında hiç değişmez; sadece `config` (renk/marka) değişir.
export function olusturCerceve(config: PaylasilanTemaConfig): TemaModulu["Cerceve"] {
    const fontDisplay = config.fontDisplay ?? "Oswald";
    const fontSans = config.fontSans ?? "Manrope";
    const fontHref = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontDisplay)}:wght@500;600;700;900&family=${encodeURIComponent(fontSans)}:wght@400;500;600;700&display=swap`;

    return function Cerceve({ site, aktif = "", children }: Parameters<TemaModulu["Cerceve"]>[0]) {
        return (
            <div className="paylasilan-tema flex min-h-screen flex-col bg-bg font-sans text-fg" data-tema-host={site.host}>
                <PaylasilanTemaStil renkler={config.renkler} host={site.host} />
                {/* Google Fonts stylesheet isteği render-blocking — preconnect ile DNS/TLS
                    turlarını daha erken başlatıp bekleme süresini kısaltıyoruz (PageSpeed). */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet" href={fontHref} />
                <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
                    <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                        <a href="/" className="flex items-center gap-2">
                            {config.logoUrl ? (
                                <Image src={config.logoUrl} alt={`${config.markaAdi} logosu`} width={200} height={60} className="h-12 w-auto object-contain" priority />
                            ) : (
                                <span className="font-display text-[20px] font-black tracking-tight text-primary">{config.markaAdi}</span>
                            )}
                        </a>
                        <nav className="hidden items-center gap-2 lg:flex">
                            {nav.map(([href, etiket]) => (
                                <a
                                    key={href}
                                    href={href}
                                    className={`rounded-[8px] px-3 py-2 font-semibold transition-colors ${
                                        aktif === href ? "bg-elevated text-primary" : "text-muted hover:bg-elevated hover:text-fg"
                                    }`}
                                >
                                    {etiket}
                                </a>
                            ))}
                        </nav>
                        <div className="flex items-center gap-2">
                            <a href="/iletisim" className="rounded-[8px] bg-accent px-4 py-2.5 text-sm font-bold text-accent-fg transition-colors hover:bg-accent-hover md:px-5 md:py-3 md:text-base">
                                Teklif Alın
                            </a>
                            <MobilMenu nav={nav} aktif={aktif} />
                        </div>
                    </div>
                </header>

                <main className="flex-1">{children}</main>

                <footer className="bg-primary px-6 py-16 text-bg">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
                        <div>
                            <h2 className="font-display text-[24px] font-bold text-bg">{config.markaAdi}</h2>
                            <p className="mt-4 leading-6 text-bg/80">{site.uzmanlik}</p>
                            <div className="mt-5 grid grid-cols-2 gap-3">
                                {nav.slice(1).map(([href, etiket]) => (
                                    <a key={href} href={href} className="text-bg/80 hover:text-bg">
                                        {etiket}
                                    </a>
                                ))}
                                <a href={site.anaSite.url} className="text-bg/80 hover:text-bg">
                                    {site.anaSite.ad}
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-[18px] font-semibold text-bg">Hizmet Bölgeleri</h3>
                            <div className="mt-4 flex flex-col gap-2.5">
                                {bolgeSayfalari(site).slice(0, 6).map((b) => (
                                    <a key={b.slug} href={`/bolge/${b.slug}`} className="text-bg/80 hover:text-bg">
                                        {b.bolgeAdi}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-[18px] font-semibold text-bg">Kaynaklar</h3>
                            <div className="mt-4 flex flex-col gap-2.5">
                                {hostAltSayfalari(site.host).slice(0, 5).map((s) => (
                                    <a key={s.slug} href={`/${s.slug}`} className="text-bg/80 hover:text-bg">
                                        {s.baslik}
                                    </a>
                                ))}
                                <a href="/blog" className="text-bg/80 hover:text-bg">Blog</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-[18px] font-semibold text-bg">Bize Ulaşın</h3>
                            {site.telefon && (
                                <div className="mt-4 flex items-center gap-3">
                                    <a className="flex items-center gap-3 text-bg/80 hover:text-bg" href={`tel:${site.telefon}`}>
                                        <Ikon ad="telefon" />
                                        {site.telefonGosterim}
                                    </a>
                                    <a href={`https://wa.me/${site.telefon.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#25D366] text-white">
                                        <IkonWhatsapp className="h-4 w-4" />
                                    </a>
                                </div>
                            )}
                            {ikinciTelefon(site) && (
                                <div className="mt-3 flex items-center gap-3">
                                    <a className="flex items-center gap-3 text-bg/80 hover:text-bg" href={`tel:${ikinciTelefon(site)!.telefon}`}>
                                        <Ikon ad="telefon" />
                                        {ikinciTelefon(site)!.telefonGosterim}
                                    </a>
                                    <a href={`https://wa.me/${ikinciTelefon(site)!.telefon.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#25D366] text-white">
                                        <IkonWhatsapp className="h-4 w-4" />
                                    </a>
                                </div>
                            )}
                            <a className="mt-3 flex items-center gap-3 break-all text-bg/80 hover:text-bg" href={`mailto:${site.eposta}`}>
                                <Ikon ad="posta" />
                                {site.eposta}
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto mt-10 max-w-7xl border-t border-bg/10 pt-6 text-center text-sm text-bg/60">
                        <a href="https://www.saygitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-bg/90">
                            Web Yazılım ve Tasarım: SAYGITECH
                        </a>
                    </div>
                </footer>

                {site.telefon && (
                    <a
                        href={`tel:${site.telefon}`}
                        aria-label={`${config.markaAdi} telefon ile ara`}
                        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-fg shadow-xl transition-colors hover:bg-accent-hover"
                    >
                        <Ikon ad="telefon" />
                    </a>
                )}
            </div>
        );
    };
}

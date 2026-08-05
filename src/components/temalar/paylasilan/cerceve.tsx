import Image from "next/image";
import type { TemaModulu } from "../tipler";
import type { PaylasilanTemaConfig } from "./renkler";
import { Ikon } from "./ikonlar";
import { PaylasilanTemaStil } from "./tema-css";

const nav: [string, string][] = [
    ["/", "Ana Sayfa"],
    ["/hakkimizda", "Hakkımızda"],
    ["/urunler", "Ürünler"],
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
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet" href={fontHref} />
                <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
                        <a href="/" className="flex items-center gap-2">
                            {config.logoUrl ? (
                                <Image src={config.logoUrl} alt={`${config.markaAdi} logosu`} width={140} height={40} className="h-9 w-auto object-contain" priority />
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
                        <a href="/iletisim" className="rounded-[8px] bg-accent px-5 py-3 font-bold text-accent-fg transition-colors hover:bg-accent-hover">
                            Teklif Alın
                        </a>
                    </div>
                </header>

                <main className="flex-1">{children}</main>

                <footer className="bg-primary px-6 py-16 text-bg">
                    <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
                        <div>
                            <h2 className="font-display text-[24px] font-bold text-bg">{config.markaAdi}</h2>
                            <p className="mt-4 leading-6 text-bg/80">{site.uzmanlik}</p>
                        </div>
                        <div>
                            <h3 className="font-display text-[18px] font-semibold text-bg">Hızlı Bağlantılar</h3>
                            <div className="mt-4 grid grid-cols-2 gap-3">
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
                            <h3 className="font-display text-[18px] font-semibold text-bg">Bize Ulaşın</h3>
                            {site.telefon && (
                                <a className="mt-4 flex items-center gap-3 text-bg/80 hover:text-bg" href={`tel:${site.telefon}`}>
                                    <Ikon ad="telefon" />
                                    {site.telefonGosterim}
                                </a>
                            )}
                            <a className="mt-3 flex items-center gap-3 break-all text-bg/80 hover:text-bg" href={`mailto:${site.eposta}`}>
                                <Ikon ad="posta" />
                                {site.eposta}
                            </a>
                        </div>
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

import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import type { TemaModulu } from "./tipler";
import { TemaForm } from "./tema-form";

// aydinplatform.net — Google Stitch tasarımının birebir portu.
// Renkler: deep-navy #0A1525, safety-yellow #FBBF24, off-white #F9FAFB.
// Fontlar: Hanken Grotesk (başlık) + Inter (gövde).
// NOT: Tailwind statik tarama yaptığı için arbitrary class'lar LİTERAL hex olmalı (interpolasyon yok).

function Ikon({ d, className }: { d: string; className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={d} />
        </svg>
    );
}
const IK = {
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    ok: "M5 12h14M12 5l7 7-7 7",
    pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-.01",
    mail: "M4 4h16v16H4zM22 6l-10 7L2 6",
    share: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",
};
const hy = "font-['Hanken_Grotesk']";

function bolgelerCoz(site: SiteIcerik) {
    const ilceler = site.bolge.split(",").map((s) => s.trim());
    return ilceler.slice(1).length >= 3 ? ilceler.slice(1) : ilceler;
}

// ---- Ortak çerçeve: header + footer + FAB + font linki ----
function AydinCerceve({ site, aktif, children }: { site: SiteIcerik; aktif?: string; children: ReactNode }) {
    const nav = [
        { ad: "Ana Sayfa", href: "/" },
        { ad: "Hakkımızda", href: "/hakkimizda" },
        { ad: "Filo", href: "/urunler" },
        { ad: "Blog", href: "/blog" },
        { ad: "İletişim", href: "/iletisim" },
    ];
    return (
        <div className="bg-[#f9f9ff] text-[#141b2b] font-['Inter'] overflow-x-hidden">
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#f9f9ff]/95 backdrop-blur-md shadow-sm border-b border-[#d3c5ac]">
                <a href="/" className="flex items-center gap-4">
                    <Image src="/media/logo/logo.png" alt={`${site.h1} logosu`} width={160} height={40} className="h-10 w-auto object-contain" priority />
                    <span className={`hidden md:block text-[24px] font-bold text-[#0A1525] ${hy}`}>{site.h1}</span>
                </a>
                <nav className="hidden lg:flex items-center gap-8">
                    {nav.map((n) => (
                        <a key={n.href} className={aktif === n.href ? "text-[#0A1525] font-bold border-b-2 border-[#0A1525] pb-1" : "text-[#4f4633] font-medium hover:text-[#795900] transition-colors"} href={n.href}>{n.ad}</a>
                    ))}
                </nav>
                <a className="bg-[#FBBF24] text-[#0A1525] px-6 py-2.5 rounded-[2px] text-[14px] font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all" href={`tel:${site.telefon}`}>
                    <Ikon d={IK.phone} className="w-4 h-4" />
                    <span className="hidden sm:inline">Hemen Ara: </span>{site.telefonGosterim}
                </a>
            </header>

            {children}

            <footer className="w-full py-20 px-6 flex flex-col md:flex-row justify-between items-start gap-8 bg-[#0A1525] text-white">
                <div className="max-w-md">
                    <div className={`${hy} text-[24px] font-bold text-white mb-4`}>{site.h1}</div>
                    <p className="text-[#dce2f7] text-base mb-6">{site.anaSite.ad} hizmet ağı içinde, {site.uzmanlik} odağında bilgilendirme ve teklif hazırlama noktası.</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center hover:bg-[#FBBF24] hover:text-[#0A1525] transition-all" href={site.anaSite.url} aria-label="Web"><Ikon d={IK.globe} className="w-5 h-5" /></a>
                        <a className="w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center hover:bg-[#FBBF24] hover:text-[#0A1525] transition-all" href="/iletisim" aria-label="İletişim"><Ikon d={IK.share} className="w-5 h-5" /></a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                    <h4 className="col-span-2 text-[14px] font-semibold text-[#FBBF24] uppercase tracking-widest mb-2">Hızlı Menü</h4>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href="/hakkimizda">Hakkımızda</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href="/urunler">Filo</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href="/blog">Blog</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href="/iletisim">İletişim</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href="/teklif-hazirligi">Talep Rehberi</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-base" href={site.anaSite.url}>{site.anaSite.ad}</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-[14px] font-semibold text-[#FBBF24] uppercase tracking-widest mb-2">Yasal</h4>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-[12px]" href="/gizlilik-politikasi">Gizlilik Politikası</a>
                    <a className="text-[#dce2f7] hover:text-white transition-colors text-[12px]" href="/kullanim-kosullari">Kullanım Koşulları</a>
                </div>
                <div className="w-full md:w-auto mt-8 md:mt-0 border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
                    <p className="text-[12px] text-[#dce2f7] opacity-80">© {new Date().getFullYear()} {site.h1}. Tüm hakları saklıdır.<br />{site.anaSite.ad} ağının bir parçasıdır.</p>
                </div>
            </footer>

            <a className="fixed bottom-8 right-8 bg-[#FBBF24] text-[#0A1525] w-16 h-16 rounded-xl shadow-2xl flex items-center justify-center z-40 hover:scale-110 active:scale-95 transition-transform" href={`tel:${site.telefon}`} aria-label="Hemen ara">
                <Ikon d={IK.phone} className="w-7 h-7" />
            </a>
        </div>
    );
}

// ---- Ana sayfa gövdesi ----
function AydinAnaSayfa({ site }: { site: SiteIcerik }) {
    const bolgeler = bolgelerCoz(site);
    const vurgu = bolgeler.slice(0, 3).join(", ");
    const filo = [
        { baslik: "Makaslı Platformlar", metin: "8m'den 18m'e kadar dikey erişim. İç ve dış mekan için elektrikli veya dizel seçenekler.", etiket: "8 - 18 Metre", gorsel: "/media/makasli-platform.png", slug: "makasli-platform-kiralama" },
        { baslik: "Eklemli Platformlar", metin: "16m'den 26m'e kadar çalışma yüksekliği. Engel üzerinden aşma ve hassas konumlandırma.", etiket: "16 - 26 Metre", gorsel: "/media/eklemli-platform.png", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        { baslik: "Teleskopik Platformlar", metin: "Maksimum yatay ve dikey erişim. Jeotermal tesisler ve büyük cephe projeleri için ideal.", etiket: "Yüksek Erişim", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg", slug: "eklemli-ve-teleskopik-platform-kiralama" },
    ];
    const surec = [
        { no: "01", baslik: "İhtiyaç Analizi", metin: "Yükseklik, zemin, erişim engeli, tarih ve adres bilgisini paylaşırsınız." },
        { no: "02", baslik: "Uygunluk Kontrolü", metin: "Makine sınıfı, nakliye, belge ve operatör kapsamını uzman ekibimiz doğrular." },
        { no: "03", baslik: "Yazılı Teklif", metin: "Kesinleşen kapsamı, fiyat ve sözleşme koşullarıyla birlikte şeffafça alırsınız." },
    ];
    const istatistik: [string, string][] = [
        ["10+", "Yıllık Tecrübe"],
        ["50+", "Makine Parkuru"],
        [`${bolgeler.length}`, "Bölgesel Destek"],
        ["24/7", "Teknik Destek"],
    ];
    return (
        <>
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/media/saha-hero.png" alt="Aydın'da yüksek erişim için saha planlaması" fill priority sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1525]/85 via-[#0A1525]/45 to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto px-6 max-w-[1280px]">
                    <div className="max-w-2xl text-[#F9FAFB]">
                        <span className="inline-block bg-[#FBBF24] text-[#0A1525] px-4 py-1 text-[14px] font-semibold mb-6">{site.anaSite.ad.toUpperCase()} HİZMET AĞI</span>
                        <h1 className={`${hy} text-[40px] sm:text-[48px] leading-[1.1] sm:leading-[56px] tracking-[-0.02em] font-extrabold mb-6`}>
                            {site.h1} — <span className="text-[#FBBF24]">{vurgu} Hattı</span>
                        </h1>
                        <p className="text-[18px] leading-[28px] mb-8 text-white/90">{site.paragraflar[0]}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a className="bg-[#FBBF24] text-[#0A1525] px-8 py-4 rounded-[2px] font-bold text-lg text-center hover:shadow-xl transition-all" href="/iletisim">Teklif Alın</a>
                            <a className="bg-transparent border-2 border-[#F9FAFB] text-[#F9FAFB] px-8 py-4 rounded-[2px] font-bold text-lg text-center hover:bg-[#F9FAFB] hover:text-[#0A1525] transition-all" href="/urunler">Filoyu İncele</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#0A1525] border-b border-white/10">
                <div className="container mx-auto px-6 max-w-[1280px] flex flex-wrap justify-center md:justify-between items-center gap-8">
                    {istatistik.map(([sayi, etiket]) => (
                        <div key={etiket} className="text-center md:text-left">
                            <p className={`text-[#FBBF24] ${hy} text-[32px] font-bold`}>{sayi}</p>
                            <p className="text-[#dce2f7] text-[12px] uppercase tracking-widest">{etiket}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 bg-[#F9FAFB]" id="fleet">
                <div className="container mx-auto px-6 max-w-[1280px]">
                    <div className="mb-16 text-center lg:text-left">
                        <h2 className={`${hy} text-[32px] leading-[40px] font-bold text-[#0A1525] mb-4`}>Makine Filomuz</h2>
                        <p className="text-[18px] text-[#4f4633] max-w-2xl">Aydın&apos;ın sanayi ve tarım ihtiyaçlarına uygun, bakımları yapılmış sertifikalı platformlar.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filo.map((f) => (
                            <div key={f.baslik} className="bg-[#f9f9ff] rounded-lg overflow-hidden border border-[#d3c5ac] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]">
                                <div className="h-64 relative overflow-hidden">
                                    <Image src={f.gorsel} alt={f.baslik} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-8">
                                    <h3 className={`${hy} text-[24px] leading-[32px] font-semibold text-[#0A1525] mb-2`}>{f.baslik}</h3>
                                    <p className="text-base text-[#4f4633] mb-6">{f.metin}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[14px] font-semibold text-[#795900]">{f.etiket}</span>
                                        <a className="text-[#0A1525] font-bold flex items-center gap-1 hover:text-[#795900] transition-colors" href={`/${f.slug}`}>
                                            Detaylar <Ikon d={IK.ok} className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#f9f9ff]">
                <div className="container mx-auto px-6 max-w-[1280px]">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3">
                            <h2 className={`${hy} text-[32px] leading-[40px] font-bold text-[#0A1525] mb-6`}>Süreç Nasıl İşler?</h2>
                            <p className="text-base text-[#4f4633] mb-8">Doğru makine seçimi iş güvenliği ve maliyet için kritiktir. 3 adımda planlı kiralama sağlıyoruz.</p>
                            <div className="p-6 bg-white rounded-lg border-l-4 border-[#FBBF24]">
                                <p className="text-base italic text-[#5a6578]">&ldquo;Belirsiz ölçü, yanlış nakliye ve iş kaybı riskini büyütür. Profesyonel keşif ile riskleri sıfırlıyoruz.&rdquo;</p>
                            </div>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {surec.map((s) => (
                                <div key={s.no} className="flex flex-col gap-4">
                                    <div className="w-16 h-16 bg-[#0A1525] text-[#FBBF24] flex items-center justify-center text-2xl font-bold rounded-xl">{s.no}</div>
                                    <h3 className={`${hy} text-[24px] leading-[32px] font-semibold text-[#0A1525]`}>{s.baslik}</h3>
                                    <p className="text-base text-[#4f4633]">{s.metin}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#0A1525] text-[#F9FAFB] overflow-hidden relative" id="regions">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FBBF24]/5 skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className={`${hy} text-[32px] leading-[40px] font-bold text-[#FBBF24] mb-8`}>Aydın Bölgesel Hizmet Ağı</h2>
                            <p className="text-[18px] text-[#dce2f7] mb-12">{site.bolge} hattında stratejik noktalarda yanınızdayız. Jeotermal enerji tesisleri, otel bakımları ve tarım depoları için yerel çözümler.</p>
                            <div className="grid grid-cols-2 gap-6">
                                {bolgeler.map((b) => (
                                    <div key={b} className="flex items-center gap-4 p-4 border border-white/20 rounded">
                                        <Ikon d={IK.pin} className="w-5 h-5 text-[#FBBF24]" />
                                        <span className={`${hy} text-xl`}>{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#FBBF24]/20 blur-xl group-hover:bg-[#FBBF24]/30 transition-all rounded-full" />
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image src="/media/blog/makasli-platform-kiralama-sanayi-holu-tavan-calismasi.jpg" alt="Aydın hizmet bölgesi" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AydinIletisim site={site} />
        </>
    );
}

// ---- İletişim gövdesi (hem ana sayfada hem /iletisim'de kullanılır) ----
function AydinIletisim({ site }: { site: SiteIcerik }) {
    const bolgeler = bolgelerCoz(site);
    return (
        <section className="py-20 bg-[#F9FAFB]" id="contact">
            <div className="container mx-auto px-6 max-w-[1280px]">
                <div className="bg-[#f9f9ff] rounded-2xl shadow-xl overflow-hidden border border-[#d3c5ac]">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-12 bg-[#0A1525] text-[#F9FAFB]">
                            <h2 className={`${hy} text-[32px] leading-[40px] font-bold mb-6`}>Hemen Teklif Alın</h2>
                            <p className="text-base text-[#dce2f7] mb-8">Saha bilgilerinizi paylaşın, işinize en uygun makine ve fiyat çalışmasını yapalım.</p>
                            <div className="space-y-6">
                                <a href={`tel:${site.telefon}`} className="flex items-start gap-4 group">
                                    <div className="bg-[#FBBF24]/20 p-2 rounded"><Ikon d={IK.phone} className="w-5 h-5 text-[#FBBF24]" /></div>
                                    <div>
                                        <p className="text-[12px] uppercase text-[#dce2f7]">Telefon</p>
                                        <p className={`${hy} text-xl group-hover:text-[#FBBF24] transition-colors`}>{site.telefonGosterim}</p>
                                    </div>
                                </a>
                                <a href={`mailto:${site.eposta}`} className="flex items-start gap-4 group">
                                    <div className="bg-[#FBBF24]/20 p-2 rounded"><Ikon d={IK.mail} className="w-5 h-5 text-[#FBBF24]" /></div>
                                    <div>
                                        <p className="text-[12px] uppercase text-[#dce2f7]">E-posta</p>
                                        <p className={`${hy} text-xl break-all group-hover:text-[#FBBF24] transition-colors`}>{site.eposta}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10">
                                <p className="text-[12px] text-[#dce2f7] italic leading-relaxed">&ldquo;Model, kapasite, belge, operatör, nakliye ve ücret; güncel uygunluk kontrolünden sonra yalnız yazılı teklif ve sözleşmeyle kesinleşir.&rdquo;</p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-12">
                            <TemaForm
                                eposta={site.eposta}
                                konu={`Teklif Talebi — ${site.h1}`}
                                opsiyonlar={bolgeler}
                                cls={{
                                    etiket: "block text-[14px] font-semibold text-[#0A1525] mb-2",
                                    alan: "w-full bg-[#f1f3ff] border border-[#d3c5ac] rounded p-3 focus:ring-2 focus:ring-[#FBBF24] outline-none transition-all",
                                    buton: "w-full bg-[#FBBF24] text-[#0A1525] font-bold py-4 rounded hover:brightness-95 transition-all text-lg uppercase tracking-wider",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---- Basit temalı içerik sarmalayıcı (hakkımızda gibi metin sayfaları için) ----
function AydinMetinSayfa({ baslik, altbaslik, children }: { baslik: string; altbaslik?: string; children: ReactNode }) {
    return (
        <section className="pt-32 pb-20 bg-[#F9FAFB] min-h-screen">
            <div className="container mx-auto px-6 max-w-[1000px]">
                {altbaslik && <p className="text-[14px] font-semibold text-[#795900] uppercase tracking-widest mb-3">{altbaslik}</p>}
                <h1 className={`${hy} text-[40px] leading-[1.1] font-extrabold text-[#0A1525] mb-8`}>{baslik}</h1>
                <div className="prose max-w-none text-[17px] leading-relaxed text-[#4f4633] space-y-5">{children}</div>
            </div>
        </section>
    );
}

export const aydinTema: TemaModulu = {
    Cerceve: AydinCerceve,
    AnaSayfa: AydinAnaSayfa,
    sayfalar: {
        iletisim: ({ site }) => <div className="pt-24"><AydinIletisim site={site} /></div>,
        hakkimizda: ({ site }) => (
            <AydinMetinSayfa baslik={`${site.anaSite.ad} — ${site.h1}`} altbaslik="Hakkımızda">
                {site.paragraflar.map((p, i) => <p key={i}>{p}</p>)}
            </AydinMetinSayfa>
        ),
    },
};

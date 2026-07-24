import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import type { TemaModulu } from "./tipler";
import { TemaForm } from "./tema-form";

// platformmanisa.com — Google Stitch DARK tasarımının birebir portu.
// surface-deep #020617, surface #101415, surface-card #1E293B, primary #b8c4ff, industrial-orange #F97316.
// Plus Jakarta Sans (başlık) + Inter (gövde) + JetBrains Mono (etiket).

const pj = "font-['Plus_Jakarta_Sans']";
const caps = "font-['JetBrains_Mono'] text-[12px] tracking-[0.1em] uppercase font-semibold";

function Ikon({ d, className, box = 24 }: { d: string; className?: string; box?: number }) {
    return (
        <svg className={className} width={box} height={box} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={d} />
        </svg>
    );
}
const IK = {
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    ok: "M5 12h14M12 5l7 7-7 7",
    chevron: "M9 18l6-6-6-6",
    pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-.01",
    mail: "M4 4h16v16H4zM22 6l-10 7L2 6",
    clipboard: "M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1zM8 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    doc: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6",
};

const NAV = [
    { ad: "Ana Sayfa", href: "/" },
    { ad: "Hakkımızda", href: "/hakkimizda" },
    { ad: "Kiralık Makineler", href: "/urunler" },
    { ad: "Blog", href: "/blog" },
    { ad: "İletişim", href: "/iletisim" },
];

function bolgeler(site: SiteIcerik) {
    return site.bolge.split(",").map((s) => s.trim());
}

// ---- Çerçeve ----
function Cerceve({ site, aktif, children }: { site: SiteIcerik; aktif?: string; children: ReactNode }) {
    return (
        <div className="bg-[#020617] text-[#e0e3e5] font-['Inter'] min-h-screen antialiased selection:bg-[#b8c4ff] selection:text-[#002486]">
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@600&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />

            <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
                <div className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto">
                    <a className="flex items-center gap-2" href="/">
                        <Image src="/media/logo/logo.png" alt={`${site.h1} logosu`} width={150} height={40} className="h-9 md:h-10 w-auto object-contain" priority />
                    </a>
                    <nav className="hidden md:flex gap-8 items-center">
                        {NAV.map((n) => (
                            <a key={n.href} className={aktif === n.href ? "text-[#b8c4ff] font-bold border-b-2 border-[#b8c4ff] pb-1" : "text-[#c4c5d9] font-medium hover:text-[#b8c4ff] transition-colors duration-300"} href={n.href}>{n.ad}</a>
                        ))}
                    </nav>
                    <a className={`hidden md:inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-2 rounded-lg ${caps} hover:brightness-95 transition-all`} href={`tel:${site.telefon}`}>
                        <Ikon d={IK.phone} className="w-4 h-4" box={20} /> Hemen Ara
                    </a>
                    <a className="md:hidden text-[#b8c4ff]" href={`tel:${site.telefon}`} aria-label="Ara"><Ikon d={IK.phone} className="w-6 h-6" /></a>
                </div>
            </header>

            <main className="pt-24">{children}</main>

            <footer className="w-full mt-[120px] bg-[#0b0f10] border-t border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-12 max-w-[1280px] mx-auto">
                    <div className="md:col-span-1 flex flex-col gap-4">
                        <Image src="/media/logo/logo.png" alt={`${site.h1} logosu`} width={150} height={40} className="h-10 w-auto object-contain opacity-70" />
                        <p className="text-sm text-[#c4c5d9] mt-2">Güvenilir, teknolojik ve profesyonel platform kiralama çözümleri.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className={`text-white ${caps} mb-2`}>Hizmet Bölgeleri</h4>
                        {bolgeler(site).map((b) => (
                            <a key={b} className="text-[#c4c5d9] text-[15px] hover:text-[#F97316] transition-all" href="/urunler">{b}</a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className={`text-white ${caps} mb-2`}>Kurumsal</h4>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all" href="/hakkimizda">Hakkımızda</a>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all" href="/blog">Blog</a>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all" href="/urunler">Kiralık Makineler</a>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all" href={site.anaSite.url}>{site.anaSite.ad}</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className={`text-white ${caps} mb-2`}>İletişim</h4>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all flex items-center gap-2" href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> {site.telefonGosterim}</a>
                        <a className="text-[#c4c5d9] text-[15px] hover:text-[#b8c4ff] transition-all flex items-center gap-2 break-all" href={`mailto:${site.eposta}`}><Ikon d={IK.mail} className="w-4 h-4" box={18} /> {site.eposta}</a>
                    </div>
                    <div className="md:col-span-4 mt-4 pt-8 border-t border-white/10 text-center">
                        <p className="text-[#c4c5d9] text-sm">© {new Date().getFullYear()} {site.h1}. Tüm hakları saklıdır. · {site.anaSite.ad} ağının bir parçasıdır.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// ---- Ana sayfa ----
function AnaSayfa({ site }: { site: SiteIcerik }) {
    const surec = [
        { no: "01", d: IK.clipboard, baslik: "İhtiyaç Analizi", metin: "Projenizin yüksekliği, zemin durumu ve çalışma ortamına göre uzman ekibimiz tarafından detaylı değerlendirme yapılır." },
        { no: "02", d: IK.shield, baslik: "Uygunluk Kontrolü", metin: "Belirlenen makinelerin periyodik bakımları ve iş güvenliği sertifikaları kontrol edilerek onaya sunulur." },
        { no: "03", d: IK.doc, baslik: "Yazılı Kapsam", metin: "Tüm süreç, teslimat koşulları ve teknik detaylar yazılı bir sözleşme ile kayıt altına alınarak operasyon başlatılır." },
    ];
    const makineler = [
        { baslik: "Makaslı Platformlar", erisim: "8-18m Erişim", renk: "text-[#b8c4ff]", metin: "Düz zeminlerde dikey erişim gerektiren montaj, bakım ve onarım işleri için ideal, sessiz ve emisyonsuz elektrikli modeller.", gorsel: "/media/makasli-platform.png", slug: "makasli-platform-kiralama" },
        { baslik: "Eklemli & Teleskopik", erisim: "16-32m Erişim", renk: "text-[#F97316]", metin: "Engellerin üzerinden aşarak ulaşılması zor noktalara erişim sağlayan, dış mekan ve zorlu arazi şartlarına uygun dizel/hibrit modeller.", gorsel: "/media/eklemli-platform.png", slug: "eklemli-ve-teleskopik-platform-kiralama" },
    ];
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-center pt-16 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent z-10" />
                    <Image src="/media/saha-hero.png" alt="Manisa sanayisinde yüksek erişim platformu" fill priority sizes="100vw" className="object-cover opacity-60" />
                </div>
                <div className="relative z-20 max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="col-span-1 md:col-span-8 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8c4ff]/10 border border-[#b8c4ff]/20 rounded-full w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#b8c4ff] animate-pulse" />
                            <span className={`text-[#b8c4ff] ${caps}`}>Profesyonel Kiralama Çözümleri</span>
                        </div>
                        <h1 className={`${pj} text-[28px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white`}>
                            {site.bolge.split(",")[0]} ve Çevresi İçin <br /><span className="text-[#b8c4ff]">Güçlü Platform Çözümleri</span>
                        </h1>
                        <p className="text-[18px] leading-[1.6] text-[#c4c5d9] max-w-2xl">{site.paragraflar[0]}</p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b8c4ff] text-[#002486] rounded-xl ${caps} hover:bg-[#dde1ff] transition-all hover:scale-[1.02]`} href="/urunler">Makine Parkurunu İncele <Ikon d={IK.ok} className="w-5 h-5" box={20} /></a>
                            <a className={`inline-flex items-center justify-center px-8 py-4 bg-[#1E293B] border border-white/10 text-white rounded-xl ${caps} hover:border-[#b8c4ff] transition-all`} href="/iletisim">Teklif Al</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Süreç */}
            <section className="py-[120px] bg-[#101415]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className={`${pj} text-[32px] font-bold text-white mb-4`}>Kiralama Sürecimiz</h2>
                        <p className="text-[#c4c5d9] max-w-2xl mx-auto">Profesyonel ve şeffaf adımlarla projenize en uygun çözümü sağlıyoruz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {surec.map((s) => (
                            <div key={s.no} className="bg-[#1E293B] p-8 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#b8c4ff]/50 transition-all duration-300">
                                <div className={`absolute -right-4 -top-8 text-[120px] ${pj} font-extrabold text-white/5 group-hover:text-[#b8c4ff]/10 transition-colors`}>{s.no}</div>
                                <div className="relative z-10">
                                    <Ikon d={s.d} className="w-9 h-9 text-[#b8c4ff] mb-6" box={36} />
                                    <h3 className={`${pj} text-[20px] font-bold text-white mb-3`}>{s.baslik}</h3>
                                    <p className="text-[#c4c5d9]">{s.metin}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Makine parkuru */}
            <section className="py-[120px] bg-[#020617]" id="makineler">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className={`${pj} text-[32px] font-bold text-white mb-2`}>Makine Parkurumuz</h2>
                            <p className="text-[#c4c5d9]">Farklı yükseklik ve zemin gereksinimleri için geniş seçenekler.</p>
                        </div>
                        <a className={`inline-flex items-center gap-2 text-[#b8c4ff] hover:text-[#dde1ff] transition-colors ${caps}`} href="/urunler">Tümünü Görüntüle <Ikon d={IK.ok} className="w-4 h-4" box={18} /></a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {makineler.map((m) => (
                            <div key={m.baslik} className="group bg-[#1E293B] rounded-xl border border-white/10 overflow-hidden hover:scale-[1.02] hover:border-[#b8c4ff]/50 transition-all duration-300">
                                <div className="h-64 relative bg-[#101415] overflow-hidden">
                                    <Image src={m.gorsel} alt={m.baslik} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-4 left-4 bg-[#020617]/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                                        <span className={`${caps} ${m.renk}`}>{m.erisim}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className={`${pj} text-[24px] font-bold text-white mb-4`}>{m.baslik}</h3>
                                    <p className="text-[#c4c5d9] mb-6 line-clamp-2">{m.metin}</p>
                                    <a className={`inline-flex items-center gap-1 text-[#b8c4ff] ${caps} group-hover:text-[#dde1ff]`} href={`/${m.slug}`}>Detaylı Bilgi <Ikon d={IK.chevron} className="w-4 h-4" box={18} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hizmet bölgeleri */}
            <section className="py-[120px] bg-[#101415] relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className={`${pj} text-[32px] font-bold text-white mb-6`}>Hizmet Bölgelerimiz</h2>
                            <p className="text-[#c4c5d9] mb-8">{site.bolge} sanayi bölgelerine hızlı ve güvenilir teslimat sağlıyoruz. Stratejik konumumuz sayesinde acil ihtiyaçlarınıza anında yanıt veriyoruz.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {bolgeler(site).map((b) => (
                                    <div key={b} className="bg-[#1E293B] p-4 rounded-lg border border-white/10 flex items-center gap-3">
                                        <Ikon d={IK.pin} className="w-5 h-5 text-[#b8c4ff]" box={20} />
                                        <span className="font-bold text-white">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-[400px] rounded-xl overflow-hidden border border-white/10 bg-[#1E293B] relative">
                            <Image src="/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg" alt="Manisa hizmet bölgesi" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover opacity-70" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// ---- Bölüm başlığı (alt sayfalar) ----
function Baslik({ ust, baslik, alt }: { ust: string; baslik: string; alt?: string }) {
    return (
        <section className="px-6 pt-16 pb-12 border-b border-white/10 bg-[#101415]">
            <div className="max-w-[1280px] mx-auto">
                <p className={`text-[#b8c4ff] ${caps} mb-4`}>{ust}</p>
                <h1 className={`${pj} text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white`}>{baslik}</h1>
                {alt && <p className="mt-5 text-[18px] text-[#c4c5d9] max-w-3xl">{alt}</p>}
            </div>
        </section>
    );
}

// ---- İletişim ----
function Iletisim({ site }: { site: SiteIcerik }) {
    return (
        <>
            <Baslik ust="İLETİŞİM & TEKLİF" baslik="Hızlı Teklif ve Saha Analizi" alt="Proje detaylarınızı paylaşın, uzman ekibimiz en uygun makine ve fiyat çalışmasını hazırlasın." />
            <section className="px-6 py-16 bg-[#020617]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="bg-[#1E293B] rounded-xl border border-white/10 p-8 flex flex-col gap-6">
                        <a href={`tel:${site.telefon}`} className="flex items-center gap-4 group">
                            <div className="bg-[#b8c4ff]/10 p-3 rounded-lg"><Ikon d={IK.phone} className="w-6 h-6 text-[#b8c4ff]" /></div>
                            <div><p className={`text-[#c4c5d9] ${caps}`}>Telefon</p><p className={`${pj} text-xl font-bold text-white group-hover:text-[#b8c4ff] transition-colors`}>{site.telefonGosterim}</p></div>
                        </a>
                        <a href={`mailto:${site.eposta}`} className="flex items-center gap-4 group">
                            <div className="bg-[#b8c4ff]/10 p-3 rounded-lg"><Ikon d={IK.mail} className="w-6 h-6 text-[#b8c4ff]" /></div>
                            <div><p className={`text-[#c4c5d9] ${caps}`}>E-posta</p><p className={`${pj} text-xl font-bold text-white break-all group-hover:text-[#b8c4ff] transition-colors`}>{site.eposta}</p></div>
                        </a>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {bolgeler(site).map((b) => (
                                <div key={b} className="bg-[#101415] p-3 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-white"><Ikon d={IK.pin} className="w-4 h-4 text-[#b8c4ff]" box={18} />{b}</div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#1E293B] rounded-xl border border-white/10 p-8">
                        <h2 className={`${pj} text-2xl font-bold text-white mb-6`}>Proje Detaylarınızı Paylaşın</h2>
                        <TemaForm
                            eposta={site.eposta}
                            konu={`Teklif Talebi — ${site.h1}`}
                            opsiyonlar={bolgeler(site)}
                            cls={{
                                etiket: `block ${caps} text-[#c4c5d9] mb-2`,
                                alan: "w-full bg-[#101415] border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#b8c4ff] outline-none transition-all",
                                buton: `w-full bg-[#F97316] text-white font-bold py-4 rounded-xl hover:brightness-95 transition-all ${caps}`,
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

// ---- Kiralık makineler (ürünler) ----
function Urunler({ site }: { site: SiteIcerik }) {
    const kartlar = [
        { baslik: "Makaslı Platformlar", erisim: "8-18m", metin: "Düz zeminde dikey erişim; iç mekân montaj, tavan ve hat üstü işleri için sessiz, emisyonsuz elektrikli modeller.", gorsel: "/media/makasli-platform.png", slug: "makasli-platform-kiralama" },
        { baslik: "Eklemli & Teleskopik", erisim: "16-32m", metin: "Engel aşan ve uzak noktalara erişen, dış saha ve zorlu arazi için dizel/hibrit yüksek erişim platformları.", gorsel: "/media/eklemli-platform.png", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        { baslik: "Depo & Lojistik Çözümleri", erisim: "Raf & Tavan", metin: "Yüksek raflı depolarda sayım, aydınlatma ve tavan bakımı için kompakt, dar koridora uygun makine seçenekleri.", gorsel: "/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg", slug: "makasli-platform-kiralama" },
    ];
    return (
        <>
            <Baslik ust="KİRALIK MAKİNELER" baslik="Doğru Makineyi Seçin" alt="Manisa OSB ve çevre sanayi için yükseklik, zemin ve erişim ihtiyacınıza uygun makine parkuru." />
            <section className="px-6 py-16 bg-[#020617]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kartlar.map((m) => (
                        <div key={m.baslik} className="group bg-[#1E293B] rounded-xl border border-white/10 overflow-hidden hover:scale-[1.02] hover:border-[#b8c4ff]/50 transition-all duration-300">
                            <div className="h-56 relative bg-[#101415] overflow-hidden">
                                <Image src={m.gorsel} alt={m.baslik} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 left-4 bg-[#020617]/80 backdrop-blur px-3 py-1 rounded-full border border-white/10"><span className={`${caps} text-[#b8c4ff]`}>{m.erisim}</span></div>
                            </div>
                            <div className="p-6">
                                <h3 className={`${pj} text-[22px] font-bold text-white mb-3`}>{m.baslik}</h3>
                                <p className="text-[#c4c5d9] mb-6">{m.metin}</p>
                                <a className={`inline-flex items-center gap-1 text-[#b8c4ff] ${caps} group-hover:text-[#dde1ff]`} href={`/${m.slug}`}>Detaylı Bilgi <Ikon d={IK.chevron} className="w-4 h-4" box={18} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

// ---- Hakkımızda ----
function Hakkimizda({ site }: { site: SiteIcerik }) {
    const standartlar = [
        "Periyodik bakımı yapılmış, sertifikalı makine parkuru",
        "İş güvenliği mevzuatına uygun operasyon ve belgelendirme",
        "Şeffaf yazılı teklif ve sözleşme süreci",
        "Manisa OSB ve çevre ilçelere hızlı sevkiyat",
        "Saha analizi ve doğru makine sınıfı yönlendirmesi",
        "Kesintisiz teknik destek ve yerinde çözüm",
    ];
    return (
        <>
            <Baslik ust="HAKKIMIZDA" baslik="Endüstriyel Güven, Platform Kiralama Standartlarımız" alt={`${site.anaSite.ad} hizmet ağı içinde, ${site.uzmanlik} odağında güvenilir yüksekte çalışma çözümleri.`} />
            <section className="px-6 py-16 bg-[#020617]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                    <div className="space-y-5 text-[17px] leading-relaxed text-[#c4c5d9]">
                        {site.paragraflar.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                    <div className="bg-[#1E293B] rounded-xl border border-white/10 p-8">
                        <h2 className={`${pj} text-xl font-bold text-white mb-6`}>Hizmet Standartlarımız</h2>
                        <ul className="space-y-4">
                            {standartlar.map((s) => (
                                <li key={s} className="flex items-start gap-3 text-[#c4c5d9]"><Ikon d={IK.shield} className="w-5 h-5 text-[#b8c4ff] shrink-0 mt-0.5" box={20} />{s}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

// ---- Blog listesi ----
function BlogListe({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host);
    return (
        <>
            <Baslik ust="BLOG & REHBER" baslik="Saha Bilgisi, Güvenlik ve Makine Seçimi" alt="Makine seçimi, güvenlik, maliyet ve saha uygulaması üzerine sahadan derlenmiş rehberler." />
            <section className="px-6 py-16 bg-[#020617]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {yazilar.map((y) => (
                        <a key={y.slug} href={`/blog/${y.slug}`} className="group bg-[#1E293B] rounded-xl border border-white/10 overflow-hidden hover:border-[#b8c4ff]/50 transition-all">
                            <div className="h-56 relative overflow-hidden"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" /></div>
                            <div className="p-6">
                                <span className={`${caps} text-[#F97316]`}>{y.kategori}</span>
                                <h2 className={`${pj} mt-3 text-[20px] font-bold text-white group-hover:text-[#b8c4ff] transition-colors`}>{y.baslik}</h2>
                                <p className="mt-3 line-clamp-3 text-[#c4c5d9] text-[15px] leading-6">{y.ozet}</p>
                                <span className={`mt-5 inline-flex items-center gap-1 text-[#b8c4ff] ${caps}`}>{y.okuma} dk · Oku <Ikon d={IK.chevron} className="w-4 h-4" box={18} /></span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}

export const platformmanisaTema: TemaModulu = {
    Cerceve,
    AnaSayfa,
    sayfalar: { hakkimizda: Hakkimizda, iletisim: Iletisim, urunler: Urunler },
    BlogListe,
};

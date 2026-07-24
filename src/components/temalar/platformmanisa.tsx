import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import type { TemaModulu } from "./tipler";
import { ManisaTeklifForm } from "./platformmanisa-form";

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

// ---- İletişim (Stitch ekranından birebir) ----
function Iletisim({ site }: { site: SiteIcerik }) {
    const bl = bolgeler(site);
    return (
        <section className="pt-24 pb-[120px] bg-[#020617]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Başlık */}
                <div className="text-center mb-12 pt-12">
                    <p className={`${caps} text-[#b8c4ff] tracking-widest mb-4`}>PROFESYONEL DESTEK</p>
                    <h1 className={`${pj} text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-6`}>Hızlı Teklif ve Saha Analizi<br /><span className="text-[#b8c4ff]">İçin Bizimle İletişime Geçin</span></h1>
                    <p className="text-[18px] text-[#c4c5d9] max-w-2xl mx-auto">Projenizin ihtiyaçlarını en iyi şekilde anlamak ve size özel, güvenilir çözümler sunmak için buradayız.</p>
                </div>
                {/* Bento */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="bg-[#1E293B] border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-[#b8c4ff] transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#b8c4ff]/5 to-transparent z-0" />
                            <div className="relative z-10">
                                <h3 className={`${pj} text-[28px] font-bold text-white mb-2`}>Hemen İletişime Geçin</h3>
                                <p className="text-[#c4c5d9] mb-6">Acil kiralama ihtiyaçlarınız için doğrudan uzman ekibimize ulaşın.</p>
                                <a href={`tel:${site.telefon}`} className="flex items-center gap-4 bg-[#323537] p-4 rounded-lg mb-4 hover:bg-[#323537]/80 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316]"><Ikon d={IK.phone} className="w-6 h-6" /></div>
                                    <div><p className={`${caps} text-[#c4c5d9] mb-1`}>DİREKT HAT</p><p className={`${pj} text-[22px] font-bold text-white`}>{site.telefonGosterim}</p></div>
                                </a>
                                <a href={`mailto:${site.eposta}`} className="flex items-center gap-4 bg-[#323537] p-4 rounded-lg hover:bg-[#323537]/80 transition-colors">
                                    <div className="w-12 h-12 rounded-full bg-[#b8c4ff]/20 flex items-center justify-center text-[#b8c4ff]"><Ikon d={IK.mail} className="w-6 h-6" /></div>
                                    <div><p className={`${caps} text-[#c4c5d9] mb-1`}>E-POSTA</p><p className="text-[18px] font-medium text-white break-all">{site.eposta}</p></div>
                                </a>
                            </div>
                        </div>
                        <div className="bg-[#1E293B] border border-white/10 rounded-xl p-6 flex-grow hover:border-[#b8c4ff] transition-colors">
                            <h3 className={`${pj} text-[28px] font-bold text-white mb-2`}>Hizmet Ağı</h3>
                            <p className="text-[#c4c5d9] mb-6">{site.bolge} endüstriyel bölgelerine hızlı servis imkanı.</p>
                            <div className="w-full h-48 rounded-lg overflow-hidden relative">
                                <Image src="/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg" alt="Manisa hizmet ağı" fill sizes="(max-width:1024px) 100vw, 40vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
                                {bl.slice(0, 2).map((b, i) => (
                                    <div key={b} className={`absolute ${i === 0 ? "top-1/4 left-1/3 text-[#F97316]" : "top-1/2 right-1/4 text-[#b8c4ff]"}`}>
                                        <Ikon d={IK.pin} className="w-6 h-6" />
                                        <span className="text-xs bg-[#020617] px-1 rounded shadow-lg absolute mt-1 whitespace-nowrap">{b}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <div className="bg-[#1E293B] border border-white/10 rounded-xl p-8 h-full">
                            <h2 className={`${pj} text-[32px] font-bold text-white mb-2`}>Proje Detaylarınızı Paylaşın</h2>
                            <p className="text-[#c4c5d9] mb-8">Size en uygun makine seçeneklerini ve kiralama teklifini hazırlayabilmemiz için aşağıdaki formu doldurun.</p>
                            <ManisaTeklifForm eposta={site.eposta} opsiyonlar={bl} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---- Kiralık makineler / ürünler (Stitch ekranından birebir) ----
function Urunler({ site }: { site: SiteIcerik }) {
    void site;
    const kartlar = [
        { baslik: "Makaslı Platform", rozet: "DİZEL / ELEKTRİKLİ", metin: "Düz zeminlerde dikey personel yükseltici. Dar alanlar için ideal.", specler: [["Çalışma Yüksekliği", "8m - 22m"], ["Kaldırma Kapasitesi", "227kg - 680kg"]], gorsel: "/media/makasli-platform.png", slug: "makasli-platform-kiralama" },
        { baslik: "Eklemli Platform", rozet: "DİZEL / ELEKTRİKLİ", metin: "Engelleri aşarak erişim sağlayan çok noktalı personel yükseltici.", specler: [["Çalışma Yüksekliği", "11m - 43m"], ["Yatay Erişim", "6m - 21m"]], gorsel: "/media/eklemli-platform.png", slug: "eklemli-ve-teleskopik-platform-kiralama" },
        { baslik: "Teleskopik Platform", rozet: "DİZEL", metin: "Yüksek erişim, uzun bom ve geniş çalışma alanı sağlayan teleskopik platform.", specler: [["Çalışma Yüksekliği", "16m - 58m"], ["Kaldırma Kapasitesi", "227kg - 450kg"]], gorsel: "/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg", slug: "eklemli-ve-teleskopik-platform-kiralama" },
    ];
    const rehber = [
        { d: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6", baslik: "Epoksi & Hassas Zeminler", metin: "İz bırakmayan lastikli, elektrikli makaslı veya eklemli platformlar tercih edilmelidir." },
        { d: "M3 20l6-9 4 5 3-4 5 8z", baslik: "Toprak & Engebeli Zeminler", metin: "4x4 çekişli, dizel motorlu, köpük dolgulu lastikli teleskopik veya eklemli platformlar uygundur." },
    ];
    return (
        <>
            <section className="pt-32 pb-12 px-6 max-w-[1280px] mx-auto text-center">
                <h1 className={`${pj} text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white mb-4`}>Makine Parkurumuz</h1>
                <p className="text-[18px] text-[#c4c5d9] max-w-2xl mx-auto">İhtiyaca göre karşılaştırılan makine sınıflarıyla projeye özel erişim seçenekleri sunuyoruz.</p>
            </section>
            <section className="px-6 max-w-[1280px] mx-auto pb-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kartlar.map((m) => (
                        <div key={m.baslik} className="bg-[#1E293B] rounded-xl border border-white/10 overflow-hidden hover:scale-[1.02] hover:border-[#b8c4ff] transition-all duration-300 group flex flex-col">
                            <div className="h-48 relative overflow-hidden">
                                <Image src={m.gorsel} alt={m.baslik} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 left-4 bg-[#323537] px-3 py-1 rounded-full border border-white/10"><span className={`${caps} text-[#e0e3e5]`}>{m.rozet}</span></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className={`${pj} text-[24px] font-bold text-white mb-2`}>{m.baslik}</h3>
                                <p className="text-[#c4c5d9] mb-4">{m.metin}</p>
                                <div className="mt-auto space-y-2 mb-6 border-t border-white/10 pt-3">
                                    {m.specler.map(([k, v]) => (<div key={k} className="flex justify-between items-center text-sm"><span className="text-[#c4c5d9]">{k}</span><span className="font-medium text-white">{v}</span></div>))}
                                </div>
                                <a href={`/${m.slug}`} className="w-full bg-[#b8c4ff] text-[#002486] py-3 rounded-lg font-semibold hover:bg-[#dde1ff] transition-colors mt-auto flex items-center justify-center gap-2">Teklif İste <Ikon d={IK.ok} className="w-4 h-4" box={16} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-[#191c1e] py-[120px] border-y border-white/10">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className={`${caps} text-[#ffb68b] mb-2 block`}>REHBER</span>
                        <h2 className={`${pj} text-[32px] font-bold text-white mb-4`}>Doğru Makineyi Seçin</h2>
                        <p className="text-[18px] text-[#c4c5d9] mb-6">Zemin tipine ve çalışma ortamına göre en uygun ekipmanı seçmek güvenlik ve verimlilik için kritik öneme sahiptir.</p>
                        <div className="space-y-4">
                            {rehber.map((r) => (
                                <div key={r.baslik} className="flex gap-4 p-4 rounded-xl border border-white/10 bg-[#020617]">
                                    <Ikon d={r.d} className="w-6 h-6 text-[#b8c4ff] shrink-0 mt-1" />
                                    <div><h4 className="font-bold text-white mb-1">{r.baslik}</h4><p className="text-sm text-[#c4c5d9]">{r.metin}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-xl border border-white/10 overflow-hidden">
                        <Image src="/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg" alt="Makine seçim rehberi" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a href="/blog" className="bg-[#020617]/80 backdrop-blur-sm border border-[#b8c4ff] text-[#b8c4ff] px-6 py-3 rounded-lg font-medium hover:bg-[#b8c4ff] hover:text-[#002486] transition-all flex items-center gap-2"><Ikon d={IK.doc} className="w-5 h-5" box={20} /> Detaylı Rehberi İncele</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// ---- Hakkımızda (Stitch ekranından birebir) ----
const IK2 = {
    factory: "M2 20h20M4 20V9l5 3V9l5 3V9l5 3v8M8 20v-3h2v3M14 20v-3h2v3",
    truck: "M1 4h13v11H1zM14 8h4l3 3v4h-7M5.5 18a1.5 1.5 0 1 0 0 .01M16.5 18a1.5 1.5 0 1 0 0 .01",
    compass: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM16 8l-2.5 5.5L8 16l2.5-5.5z",
    play: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM10 8l6 4-6 4z",
};
function Hakkimizda({ site }: { site: SiteIcerik }) {
    const adimlar = [
        ["01", "Saha Keşfi ve Talep Analizi", "Projeye uygun yükseklik, erişim tipi ve zemin taşıma kapasitesi yerinde incelenir."],
        ["02", "Doğru Makine Seçimi", "Keşif verilerine dayanarak makaslı, eklemli, teleskopik veya örümcek platform önerilir."],
        ["03", "Teknik Dokümantasyon", "Seçilen makinenin CE belgeleri, periyodik kontrol raporları ve sigorta poliçeleri sunulur."],
        ["04", "Sözleşme ve Onay", "Kiralama süresi, sorumluluklar ve ticari şartlar şeffaf bir sözleşme ile güvence altına alınır."],
        ["05", "Sevk Öncesi Son Kontrol (PDI)", "Makinenin hidrolik, mekanik ve elektronik aksamları sevkten hemen önce test edilir."],
        ["06", "Güvenli Lojistik Planlaması", "Makine, özel taşıyıcı araçlarımızla proje sahasına zamanında ve güvenle nakledilir."],
        ["07", "Saha İçi Konumlandırma", "Uzman personelimiz makineyi sahada çalışacak en stabil ve verimli noktaya yerleştirir."],
        ["08", "Operatör Oryantasyonu", "Makineyi kullanacak personele temel kullanım ve acil durum prosedürleri eğitimi verilir."],
    ];
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[560px] flex items-center justify-center px-6 overflow-hidden pt-24">
                <div className="absolute inset-0 z-0">
                    <Image src="/media/saha-hero.png" alt="Manisa endüstriyel tesis" fill priority sizes="100vw" className="object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/50 to-[#020617]" />
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                    <span className={`inline-block ${caps} text-[#b8c4ff] tracking-widest border border-[#b8c4ff]/30 px-4 py-1 rounded-full backdrop-blur-sm`}>Neden Biz?</span>
                    <h1 className={`${pj} text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-white`}>Endüstriyel Güven, <br /><span className="text-[#b8c4ff]">Operasyonel Mükemmellik</span></h1>
                    <p className="text-[18px] text-[#c4c5d9] max-w-2xl mx-auto">{site.bolge} bölgesindeki yüksek katlı projelerinizde ve ağır sanayi tesislerinizde; güvenliği, hızı ve kesintisiz hizmeti garanti eden profesyonel çözüm ortağınız.</p>
                    <div className="pt-2 flex justify-center gap-4">
                        <a className={`bg-[#b8c4ff] text-[#002486] px-8 py-3 rounded-lg font-bold hover:bg-[#dde1ff] transition-colors ${caps}`} href="/iletisim">Projemi İncele</a>
                        <a className={`bg-[#1E293B]/70 backdrop-blur text-white px-8 py-3 rounded-lg font-bold hover:bg-[#1E293B] transition-colors flex items-center gap-2 ${caps}`} href="/urunler"><Ikon d={IK2.play} className="w-4 h-4" box={18} /> Makine Parkuru</a>
                    </div>
                </div>
            </section>

            {/* Değer bento */}
            <section className="max-w-[1280px] mx-auto px-6 py-[120px]">
                <div className="text-center mb-12">
                    <h2 className={`${pj} text-[32px] font-bold text-white mb-2`}>Platform Kiralama Standartlarımız</h2>
                    <p className="text-[#c4c5d9] max-w-2xl mx-auto">Teoride değil, sahada test edilmiş güvenlik ve operasyon protokolleri.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 rounded-xl p-6 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
                        <Image src="/media/blog/makasli-platform-kiralama-fabrika-tesisat-montaj-isi.jpg" alt="Güvenlik" fill sizes="(max-width:768px) 100vw, 60vw" className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                        <div className="relative z-10"><Ikon d={IK.shield} className="w-9 h-9 text-[#3B82F6] mb-4" box={36} /><h3 className={`${pj} text-[28px] font-bold text-white mb-2`}>Sıfır Taviz Güvenlik Politikası</h3><p className="text-[#c4c5d9] text-sm">Tüm makine parkurumuz periyodik olarak uluslararası standartlarda (EN 280) bağımsız denetim kuruluşlarınca test edilmektedir.</p></div>
                    </div>
                    <div className="rounded-xl p-6 flex flex-col min-h-[300px] bg-[#1E293B]/70 backdrop-blur border-t-4 border-[#F97316]">
                        <Ikon d={IK2.factory} className="w-9 h-9 text-[#F97316] mb-4" box={36} /><h3 className={`${pj} text-[28px] font-bold text-white mb-2 mt-auto`}>OSB Uzmanlığı</h3><p className="text-[#c4c5d9] text-sm">Manisa Organize Sanayi Bölgesi&apos;nin lojistik ve güvenlik dinamiklerine tam hakimiyet. Dar alanlar ve hassas zeminler için özel çözümler.</p>
                    </div>
                    <div className="rounded-xl p-6 flex flex-col min-h-[300px] bg-[#1E293B]/70 backdrop-blur">
                        <Ikon d={IK2.truck} className="w-9 h-9 text-[#b8c4ff] mb-4" box={36} /><h3 className={`${pj} text-[28px] font-bold text-white mb-2 mt-auto`}>Hızlı Sevk &amp; Kurulum</h3><p className="text-[#c4c5d9] text-sm">Kendi lojistik ağımız ile talep edilen ekipmanı 120 dakika içinde proje sahasına ulaştırma ve kurma garantisi.</p>
                    </div>
                    <div className="md:col-span-2 rounded-xl p-6 flex flex-col justify-end min-h-[300px] relative overflow-hidden group">
                        <Image src="/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg" alt="Danışmanlık" fill sizes="(max-width:768px) 100vw, 60vw" className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                        <div className="relative z-10"><Ikon d={IK2.compass} className="w-9 h-9 text-[#b8c4ff] mb-4" box={36} /><h3 className={`${pj} text-[28px] font-bold text-white mb-2`}>Kapasite &amp; Erişim Danışmanlığı</h3><p className="text-[#c4c5d9] text-sm">Yanlış makine seçimi zaman kaybettirir. Uzman mühendislerimiz saha keşfi yaparak yük, zemin ve erişim ihtiyacınıza en uygun aracı belirler.</p></div>
                    </div>
                </div>
            </section>

            {/* 14 Adımda Standart */}
            <section className="bg-[#1d2022] py-[120px] border-y border-white/10">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className={`${caps} text-[#F97316] tracking-widest`}>Operasyon Protokolü</span>
                        <h2 className={`${pj} text-[32px] font-bold text-white mt-2`}>14 Adımda Profesyonel Hizmet Standardı</h2>
                        <p className="text-[#c4c5d9] max-w-2xl mx-auto mt-4">Her kiralamada eksiksiz uygulanan, sıfır hata prensibine dayalı operasyonel sürecimiz.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {adimlar.map(([no, b, m]) => (
                            <div key={no} className="bg-[#1E293B] p-6 rounded-xl border border-white/10 relative overflow-hidden group hover:border-[#b8c4ff] transition-colors">
                                <div className={`absolute -right-4 -top-8 text-[120px] ${pj} font-extrabold text-white/5 group-hover:text-[#b8c4ff]/10 transition-colors pointer-events-none`}>{no}</div>
                                <h4 className="text-lg font-bold text-white mb-2 relative z-10">{b}</h4>
                                <p className="text-sm text-[#c4c5d9] relative z-10">{m}</p>
                            </div>
                        ))}
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

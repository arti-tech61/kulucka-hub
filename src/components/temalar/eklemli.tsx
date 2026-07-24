import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import type { TemaModulu } from "./tipler";
import { EklemliHizliTeklif, EklemliIletisimForm } from "./eklemli-form";

// eklemliplatform.com.tr — Google Stitch LIGHT tasarımının birebir portu.
// primary #0233d3, primary-container(mavi) #3151eb, secondary(turuncu) #9d4300,
// background #f8f9fb, surface-container #edeef0, on-surface #191c1e. Inter.

const lbl = "font-['Inter'] text-[14px] tracking-[0.02em] font-semibold";

function Ikon({ d, className, box = 24 }: { d: string; className?: string; box?: number }) {
    return (<svg className={className} width={box} height={box} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>);
}
const IK = {
    precision: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01",
    verified: "M9 12l2 2 4-4M12 3l2.5 2 3.5-.5.5 3.5 2 2.5-2 2.5-.5 3.5-3.5-.5L12 21l-2.5-2-3.5.5-.5-3.5L3.5 14l2-2.5-.5-3.5 3.5.5z",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    ok: "M5 12h14M12 5l7 7-7 7", chevron: "M9 18l6-6-6-6", mail: "M4 4h16v16H4zM22 6l-10 7L2 6",
    support: "M3 14v-3a9 9 0 0 1 18 0v3M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2zM12 21h4",
    architecture: "M12 2v20M5 9l7-7 7 7M8 22a4 4 0 0 1 8 0", handshake: "M8 12l3 3 5-5M2 12l4-4 4 4-4 4zM22 12l-4-4-4 4 4 4z",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4", warning: "M12 2l10 18H2zM12 9v4M12 17h.01",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2", truck: "M1 4h13v11H1zM14 8h4l3 3v4h-7M5.5 18a1.5 1.5 0 1 0 0 .01M16.5 18a1.5 1.5 0 1 0 0 .01",
};
const NAV = [{ ad: "Ana Sayfa", href: "/" }, { ad: "Makinelerimiz", href: "/urunler" }, { ad: "Hakkımızda", href: "/hakkimizda" }, { ad: "Blog", href: "/blog" }, { ad: "İletişim", href: "/iletisim" }];

function Cerceve({ site, aktif, children }: { site: SiteIcerik; aktif?: string; children: ReactNode }) {
    return (
        <div className="bg-[#f8f9fb] text-[#191c1e] font-['Inter'] min-h-screen flex flex-col antialiased selection:bg-[#3151eb] selection:text-white">
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            <header className="bg-white/90 backdrop-blur-md border-b border-[#edeef0] sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center h-20">
                    <a className="flex items-center gap-2 shrink-0" href="/"><span className="w-10 h-10 rounded-lg bg-[#3151eb] text-white flex items-center justify-center"><Ikon d={IK.architecture} className="w-6 h-6" /></span><span className="text-[18px] md:text-[20px] font-extrabold text-[#0233d3] tracking-tight">{site.h1.toUpperCase()}</span></a>
                    <nav className="hidden md:flex gap-1 items-center">{NAV.map((n) => (<a key={n.href} className={`${lbl} px-3 py-2 rounded-md transition-all ${aktif === n.href ? "text-[#0233d3] bg-[#3151eb]/10" : "text-[#444655] hover:text-[#0233d3] hover:bg-[#3151eb]/5"}`} href={n.href}>{n.ad}</a>))}</nav>
                    <div className="flex items-center gap-2">
                        <a className={`hidden lg:inline-flex ${lbl} text-[#0233d3] items-center gap-2`} href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> {site.telefonGosterim}</a>
                        <a className={`bg-[#3151eb] text-white ${lbl} px-5 py-2.5 rounded-lg hover:bg-[#0233d3] transition-colors`} href="/iletisim">Teklif İste</a>
                    </div>
                </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-[#0d1330] pt-16 pb-8 text-white mt-auto">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div><div className="text-[22px] font-extrabold text-white mb-4">{site.h1.toUpperCase()}</div><p className="text-white/50 text-sm">{site.uzmanlik} için engel aşan eklemli ve teleskopik platform çözümleri.</p></div>
                    <div><h4 className="text-[16px] font-bold text-[#8ea2ff] mb-4">Makineler</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white" href="/dizel-eklemli-platform-kiralama">Dizel Eklemli</a></li><li><a className="text-white/60 hover:text-white" href="/elektrikli-eklemli-platform-kiralama">Elektrikli Eklemli</a></li><li><a className="text-white/60 hover:text-white" href="/urunler">Tüm Makineler</a></li></ul></div>
                    <div><h4 className="text-[16px] font-bold text-[#8ea2ff] mb-4">Kurumsal</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white" href="/hakkimizda">Hakkımızda</a></li><li><a className="text-white/60 hover:text-white" href="/blog">Blog</a></li><li><a className="text-white/60 hover:text-white" href="/gizlilik-politikasi">Gizlilik</a></li></ul></div>
                    <div><h4 className="text-[16px] font-bold text-[#8ea2ff] mb-4">İletişim</h4><a className="text-white/60 hover:text-white flex items-center gap-2 text-[15px]" href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> {site.telefonGosterim}</a><a className="text-white/60 hover:text-white flex items-center gap-2 text-[15px] mt-3 break-all" href={`mailto:${site.eposta}`}><Ikon d={IK.mail} className="w-4 h-4" box={18} /> {site.eposta}</a></div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 border-t border-white/10 mt-10 pt-8 text-center"><p className="text-white/40 text-sm">© {new Date().getFullYear()} {site.h1}. {site.anaSite.ad} ağının bir parçasıdır.</p></div>
            </footer>
        </div>
    );
}

const KUCUK = [
    { baslik: "Makaslı Platform", metin: "Makaslı lift ve kaldırma platformu – düz zeminlerde ideal personel yükseltici.", slug: "elektrikli-eklemli-platform-kiralama" },
    { baslik: "Elektrikli Forklift", metin: "Yük platformu ve yük asansörü – depo, lojistik, istifleme operasyonları.", slug: "elektrikli-eklemli-platform-kiralama" },
    { baslik: "Teleskopik Platform", metin: "Yüksek erişim, uzun bom.", slug: "dizel-eklemli-platform-kiralama" },
    { baslik: "Örümcek Platform", metin: "Dar alanlar, maksimum esneklik.", slug: "dizel-eklemli-platform-kiralama" },
];
const HIZMET = [
    { d: IK.user, baslik: "Operatörlü Kiralama", metin: "Belgeli, deneyimli operatörle güvenli ve verimli saha çalışması." },
    { d: IK.clock, baslik: "Uzun Dönem Kiralama", metin: "Süren projelerde avantajlı dönemsel kiralama ve öncelikli destek." },
    { d: IK.truck, baslik: "Nakliye & Sevkiyat", metin: "Türkiye geneli planlı teslimat; doğru ölçü ve saha kabul koordinasyonu." },
    { d: IK.support, baslik: "Teknik Destek", metin: "Kesintisiz operasyon için hızlı müdahale ve yerinde çözüm." },
];

function AnaSayfa({ site }: { site: SiteIcerik }) {
    return (
        <>
            {/* Hero + hızlı teklif */}
            <section className="relative overflow-hidden bg-[#0d1330] text-white">
                <div className="absolute inset-0 opacity-25"><Image src="/media/eklemli-platform.png" alt="" fill priority sizes="100vw" className="object-cover" /></div>
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
                    <div>
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 bg-[#3151eb]/20 border border-[#3151eb]/40 text-[#b7c4ff] ${lbl} rounded-full mb-6`}><Ikon d={IK.verified} className="w-4 h-4" box={16} /> Kurumsal Çözüm Ortağı</div>
                        <h1 className="text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.02em] font-extrabold mb-6">Projeniz İçin <span className="text-[#8ea2ff]">Manlift ve Platform Kiralama</span></h1>
                        <p className="text-[18px] leading-[28px] text-white/80 mb-8 max-w-2xl">{site.paragraflar[0]}</p>
                        <div className="flex flex-wrap gap-4">
                            <a className={`bg-[#3151eb] text-white ${lbl} px-8 py-4 rounded-xl shadow-lg hover:bg-[#0233d3] hover:-translate-y-0.5 transition-all flex items-center gap-2`} href="/urunler">Ürünleri Keşfet <Ikon d={IK.ok} className="w-5 h-5" box={20} /></a>
                            <a className={`bg-white/10 backdrop-blur text-white ${lbl} px-8 py-4 rounded-xl border border-white/25 hover:bg-white/20 transition-all`} href="/iletisim">Teklif Sihirbazı</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-[#191c1e]">
                        <h2 className="text-[22px] font-extrabold text-[#0233d3] mb-6">Hızlı Teklif Alın</h2>
                        <EklemliHizliTeklif eposta={site.eposta} />
                    </div>
                </div>
            </section>

            {/* Makine Parkurumuz */}
            <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
                <div className="mb-12 max-w-2xl"><h2 className="text-[32px] font-extrabold text-[#191c1e] mb-3 tracking-tight">Makine Parkurumuz</h2><p className="text-[#444655]">İhtiyaca göre karşılaştırılan makine sınıflarıyla projeye özel erişim seçenekleri sunuyoruz; gerçek model ve belge kapsamını teklifte doğruluyoruz.</p></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Öne çıkan */}
                    <div className="lg:row-span-2 relative rounded-2xl overflow-hidden bg-[#0d1330] text-white p-8 flex flex-col justify-end min-h-[420px]">
                        <Image src="/media/eklemli-platform.png" alt="Eklemli Platform" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover opacity-40" />
                        <div className="relative z-10">
                            <span className={`inline-block ${lbl} text-[#8ea2ff] uppercase mb-2`}>Premium Seri</span>
                            <h3 className="text-[28px] font-extrabold mb-3">Eklemli Platform</h3>
                            <p className="text-white/80 mb-5 max-w-md">Eklemli vinç ve bomlu personel yükseltici – engelleri aşarak maksimum erişim.</p>
                            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md">
                                {[["Çalışma Yük.", "16m - 28m"], ["Güç", "Dizel / Akülü"], ["Zemin", "Arazi / Düz"]].map(([k, v]) => (<div key={k}><p className="text-[12px] text-white/50 uppercase">{k}</p><p className="font-bold">{v}</p></div>))}
                            </div>
                            <a className={`inline-flex items-center gap-2 bg-[#3151eb] text-white ${lbl} px-6 py-3 rounded-lg hover:bg-white hover:text-[#0233d3] transition-all`} href="/dizel-eklemli-platform-kiralama">Ürünleri Keşfet <Ikon d={IK.ok} className="w-4 h-4" box={18} /></a>
                        </div>
                    </div>
                    {/* Küçük kartlar */}
                    {KUCUK.map((k) => (
                        <a key={k.baslik} href={`/${k.slug}`} className="group bg-white rounded-2xl border border-[#edeef0] p-6 hover:border-[#3151eb]/40 hover:shadow-lg transition-all flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#3151eb]/10 flex items-center justify-center text-[#3151eb] shrink-0"><Ikon d={IK.architecture} className="w-6 h-6" /></div>
                            <div><h3 className="text-[18px] font-bold text-[#191c1e] mb-1">{k.baslik}</h3><p className="text-[#444655] text-[14px] mb-2">{k.metin}</p><span className={`inline-flex items-center gap-1 text-[#0233d3] ${lbl}`}>İncele <Ikon d={IK.chevron} className="w-4 h-4" box={16} /></span></div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Profesyonel Hizmetlerimiz */}
            <section className="bg-white border-y border-[#edeef0] py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                    <span className={`${lbl} text-[#9d4300] uppercase`}>Çözüm Ortağınız</span>
                    <h2 className="text-[32px] font-extrabold text-[#191c1e] mb-10 mt-1 tracking-tight">Profesyonel Hizmetlerimiz</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{HIZMET.map((h) => (<div key={h.baslik} className="bg-[#f8f9fb] rounded-2xl border border-[#edeef0] p-7 hover:border-[#3151eb]/40 hover:shadow-md transition-all"><div className="w-12 h-12 rounded-xl bg-[#3151eb]/10 flex items-center justify-center mb-4 text-[#3151eb]"><Ikon d={h.d} className="w-6 h-6" /></div><h3 className="text-[18px] font-bold text-[#191c1e] mb-2">{h.baslik}</h3><p className="text-[#444655] text-[15px] leading-6">{h.metin}</p></div>))}</div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0d1330] text-white"><div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
                <h2 className="text-[32px] md:text-[40px] font-extrabold tracking-tight mb-4">Güveniniz İçin Zirveyi Hedefliyoruz</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-8">Türkiye geneli; sertifikalı makine parkuru, belgeli operatör ve şeffaf yazılı teklifle işinizi güvene alın.</p>
                <a className={`inline-flex items-center gap-2 bg-[#3151eb] text-white ${lbl} px-8 py-4 rounded-xl hover:bg-white hover:text-[#0233d3] transition-all`} href="/iletisim">Hemen Teklif Alın <Ikon d={IK.ok} className="w-5 h-5" box={20} /></a>
            </div></section>
        </>
    );
}

function Baslik({ ust, baslik, alt }: { ust: string; baslik: string; alt?: string }) {
    return (<section className="px-4 md:px-8 pt-16 pb-12 bg-white border-b border-[#edeef0]"><div className="max-w-[1280px] mx-auto"><p className={`text-[#3151eb] ${lbl} uppercase mb-3`}>{ust}</p><h1 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#191c1e]">{baslik}</h1>{alt && <p className="mt-5 text-[18px] text-[#444655] max-w-3xl">{alt}</p>}</div></section>);
}

function Urunler({ site }: { site: SiteIcerik }) {
    void site;
    const makineler = [
        { rozet: "CE Belgeli", rozetIk: IK.warning, baslik: "Sinoboom 20m Eklemli", metin: "Engelleri aşan yüksek erişim kapasiteli, dizel motorlu profesyonel platform.", specler: [["Yükseklik", "20 Metre"], ["Kapasite", "250 kg"], ["Güç", "Dizel"]], slug: "dizel-eklemli-platform-kiralama", gorsel: "/media/eklemli-platform.png" },
        { rozet: "İç Mekan", rozetIk: IK.verified, baslik: "14m Akülü Makaslı", metin: "İç mekan kullanımları için sessiz ve çevre dostu akülü makaslı platform.", specler: [["Yükseklik", "14 Metre"], ["Kapasite", "320 kg"], ["Güç", "Akülü"]], slug: "elektrikli-eklemli-platform-kiralama", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg" },
        { rozet: "Ağır Hizmet", rozetIk: IK.shield, baslik: "28m Dizel Eklemli", metin: "Açık saha ve zorlu arazi için maksimum erişimli, 4x4 çekişli dizel eklemli platform.", specler: [["Yükseklik", "28 Metre"], ["Kapasite", "230 kg"], ["Güç", "Dizel 4x4"]], slug: "dizel-eklemli-platform-kiralama", gorsel: "/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg" },
    ];
    const filtreler = ["Tümü", "Dizel Eklemli", "Akülü Eklemli", "10m - 15m", "16m - 20m", "20m+"];
    return (
        <>
            <Baslik ust="Makinelerimiz" baslik="Eklemli Platformlar" alt="Eklemli vinç ve bomlu personel yükseltici – engelleri aşarak erişim sağlayan profesyonel çözümler." />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9fb]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-wrap gap-2 mb-8 items-center"><span className="font-semibold text-[#444655] mr-2">Filtrele:</span>{filtreler.map((f, i) => (<button key={f} className={`px-4 py-2 rounded-full text-[14px] font-semibold border transition-colors ${i === 0 ? "bg-[#3151eb] text-white border-[#3151eb]" : "bg-white text-[#444655] border-[#edeef0] hover:border-[#3151eb]"}`}>{f}</button>))}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {makineler.map((m) => (
                            <div key={m.baslik} className="bg-white border border-[#edeef0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#3151eb]/40 transition-all group flex flex-col">
                                <div className="relative h-52 overflow-hidden"><Image src={m.gorsel} alt={m.baslik} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-3 left-3 bg-[#0d1330] text-[#8ea2ff] text-[12px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1"><Ikon d={m.rozetIk} className="w-3.5 h-3.5" box={14} /> {m.rozet}</div></div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-[20px] font-bold text-[#191c1e] mb-4">{m.baslik}</h3>
                                    <p className="text-[#444655] text-[14px] mb-4">{m.metin}</p>
                                    <div className="grid grid-cols-3 gap-2 mb-6 mt-auto">{m.specler.map(([k, v]) => (<div key={k} className="bg-[#f8f9fb] rounded-lg p-2 text-center"><p className="text-[11px] text-[#444655] uppercase">{k}</p><p className="text-[13px] font-bold text-[#191c1e]">{v}</p></div>))}</div>
                                    <a href={`/${m.slug}`} className={`${lbl} text-center bg-[#3151eb] text-white py-3 rounded-lg hover:bg-[#0233d3] transition-colors flex items-center justify-center gap-1`}>Teklif İste <Ikon d={IK.ok} className="w-4 h-4" box={16} /></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function Hakkimizda({ site }: { site: SiteIcerik }) {
    const st = ["Sertifikalı, periyodik bakımlı eklemli/teleskopik parkuru", "İş güvenliği mevzuatına uygun operasyon ve CE belgeli makine", "Belgeli operatör ve saha risk yönlendirmesi", "Türkiye geneli planlı nakliye ve teslimat", "Şeffaf yazılı teklif ve sözleşme", "Kesintisiz 7/24 teknik destek"];
    return (
        <>
            <Baslik ust="Hakkımızda" baslik="Engelli Erişimde Zirve" alt={`${site.anaSite.ad} hizmet ağı içinde, ${site.uzmanlik} odağında güvenilir yüksekte çalışma.`} />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9fb]"><div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                <div className="space-y-5 text-[17px] leading-relaxed text-[#444655]">{site.paragraflar.map((p, i) => <p key={i}>{p}</p>)}</div>
                <div className="bg-white rounded-2xl border border-[#edeef0] p-8 shadow-sm"><h2 className="text-xl font-bold text-[#191c1e] mb-6">Hizmet Standartlarımız</h2><ul className="space-y-4">{st.map((s) => (<li key={s} className="flex items-start gap-3 text-[#444655]"><Ikon d={IK.shield} className="w-5 h-5 text-[#3151eb] shrink-0 mt-0.5" box={20} />{s}</li>))}</ul></div>
            </div></section>
        </>
    );
}

function Iletisim({ site }: { site: SiteIcerik }) {
    return (
        <>
            <Baslik ust="İletişim" baslik="İletişim" alt="Projeniz için Manlift ve Platform Kiralama Kurumsal Çözüm Ortağınız. Bize hemen ulaşın, uzman ekibimiz saha koşullarınıza uygun ekipmanı belirlesin." />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9fb]"><div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
                <div className="bg-white rounded-2xl border border-[#edeef0] p-8 shadow-sm">
                    <h2 className="text-[22px] font-bold text-[#191c1e] mb-6">Merkez İletişim</h2>
                    <div className="space-y-6">
                        <a href={`tel:${site.telefon}`} className="flex items-center gap-4 group"><div className="w-12 h-12 rounded-xl bg-[#3151eb]/10 flex items-center justify-center text-[#3151eb]"><Ikon d={IK.phone} className="w-6 h-6" /></div><div><p className={`${lbl} text-[#444655] text-[12px] uppercase`}>Kiralama Hattı</p><p className="text-[18px] font-bold text-[#191c1e] group-hover:text-[#0233d3]">{site.telefonGosterim}</p></div></a>
                        <a href="tel:05305518961" className="flex items-center gap-4 group"><div className="w-12 h-12 rounded-xl bg-[#3151eb]/10 flex items-center justify-center text-[#3151eb]"><Ikon d={IK.support} className="w-6 h-6" /></div><div><p className={`${lbl} text-[#444655] text-[12px] uppercase`}>Satış &amp; Operasyon Hattı</p><p className="text-[18px] font-bold text-[#191c1e] group-hover:text-[#0233d3]">0530 551 89 61</p></div></a>
                        <a href={`mailto:${site.eposta}`} className="flex items-center gap-4 group"><div className="w-12 h-12 rounded-xl bg-[#3151eb]/10 flex items-center justify-center text-[#3151eb]"><Ikon d={IK.mail} className="w-6 h-6" /></div><div><p className={`${lbl} text-[#444655] text-[12px] uppercase`}>E-Posta</p><p className="text-[16px] font-bold text-[#191c1e] break-all group-hover:text-[#0233d3]">{site.eposta}</p></div></a>
                    </div>
                </div>
                <div className="bg-white rounded-2xl border border-[#edeef0] p-8 shadow-sm">
                    <h2 className="text-[22px] font-bold text-[#191c1e] mb-1">Mesaj Gönderin</h2>
                    <p className="text-[#444655] mb-6">Teknik destek, kiralama talepleri veya proje danışmanlığı için formu doldurabilirsiniz.</p>
                    <EklemliIletisimForm eposta={site.eposta} />
                </div>
            </div></section>
        </>
    );
}

function BlogListe({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host);
    return (
        <>
            <Baslik ust="Blog & İSG Bilgi Merkezi" baslik="Profesyonel Bilgi Havuzu" alt="Platform seçimi, güvenlik, İSG ve saha uygulaması üzerine sahadan rehberler." />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9fb]"><div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yazilar.map((y) => (<a key={y.slug} href={`/blog/${y.slug}`} className="group bg-white rounded-2xl border border-[#edeef0] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"><div className="h-52 relative overflow-hidden"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-6 flex-1 flex flex-col"><span className={`text-[#3151eb] ${lbl} uppercase text-[12px]`}>{y.kategori}</span><h2 className="mt-2 text-[20px] font-bold text-[#191c1e] group-hover:text-[#0233d3] transition-colors">{y.baslik}</h2><p className="mt-3 line-clamp-3 text-[#444655] text-[15px] leading-6 flex-1">{y.ozet}</p><span className={`mt-4 inline-flex items-center gap-1 text-[#0233d3] ${lbl}`}>{y.okuma} dk · Oku <Ikon d={IK.chevron} className="w-4 h-4" box={18} /></span></div></a>))}
            </div></section>
        </>
    );
}

export const eklemliTema: TemaModulu = { Cerceve, AnaSayfa, sayfalar: { hakkimizda: Hakkimizda, iletisim: Iletisim, urunler: Urunler }, BlogListe };

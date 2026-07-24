import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import type { TemaModulu } from "./tipler";
import { IzmirHizliTeklif, IzmirIletisimForm } from "./izmir-form";

// izmirforkliftkiralama.net — Google Stitch LIGHT "endüstriyel brutalist" tasarımı birebir.
// background #f8f9ff, charcoal #121c2a, primary #914d00, primary-container(orange) #f68b1e,
// safety-amber #FBBF24, concrete-gray #eceef0, surface-container #e6eeff, WhatsApp #25D366.
// Montserrat (başlık) + Inter (gövde).

const mo = "font-['Montserrat']";
const lbl = "font-['Inter'] text-[14px] tracking-[0.03em] font-semibold";
const ILCE = ["Aliağa", "Bornova", "Torbalı", "Kemalpaşa", "Çiğli AOSB", "Menemen", "Gaziemir", "Işıkkent"];

function Ikon({ d, className, box = 24 }: { d: string; className?: string; box?: number }) {
    return (<svg className={className} width={box} height={box} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>);
}
const IK = {
    forklift: "M3 17h4v-6h6l3 3v3h2M7 17a2 2 0 1 0 0 .01M17 17a2 2 0 1 0 0 .01M11 11V5h4M20 17V9",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", ok: "M5 12h14M12 5l7 7-7 7", chevron: "M9 18l6-6-6-6",
    bolt: "M13 2L3 14h7l-1 8 10-12h-7z", gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14.5 2h-5l-.3 2.5a7 7 0 0 0-1.7 1l-2.4-1-2 3.5L2.1 11a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1l.3 2.5h5l.3-2.5a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.07-.33.1-.66.1-1z",
    wrench: "M14 7a4 4 0 0 1-5 5L4 17l3 3 5-5a4 4 0 0 1 5-5l-3-3z", payments: "M2 7h20v10H2zM2 11h20M6 15h4",
    rocket: "M5 13l-2 4 4-2M12 2s4 2 4 8-4 8-4 8-4-2-4-8 4-8 4-8zM12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
    eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4", pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-.01",
    mail: "M4 4h16v16H4zM22 6l-10 7L2 6",
};
const NAV = [{ ad: "Ana Sayfa", href: "/" }, { ad: "Makine Filosu", href: "/urunler" }, { ad: "Hakkımızda", href: "/hakkimizda" }, { ad: "Blog", href: "/blog" }, { ad: "İletişim", href: "/iletisim" }];
const wa = (t: string) => `https://wa.me/${t.replace(/[^0-9]/g, "")}`;

const FILO = [
    { d: IK.forklift, rozet: "Ağır Hizmet", baslik: "Dizel Forkliftler", metin: "1.5 - 10 Ton kapasiteli. Ağır hizmet ve dış saha için ideal, yüksek performanslı yükleyiciler.", specler: [["Kapasite", "1.5 - 10 Ton"], ["Yakıt Tipi", "Dizel"]], slug: "dizel-forklift-kiralama", gorsel: "/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg" },
    { d: IK.bolt, rozet: "Sıfır Emisyon", baslik: "Akülü Forkliftler", metin: "Sessiz çalışma ve sıfır emisyon. Depo içi operasyonlara ve kapalı alanlara tam uygun.", specler: [["Kapasite", "1 - 3.5 Ton"], ["Yakıt Tipi", "Elektrik / Akülü"]], slug: "elektrikli-forklift-kiralama", gorsel: "/media/forklift.jpg" },
    { d: IK.forklift, rozet: "Yüksek İrtifa", baslik: "Platformlar", metin: "Makaslı ve Eklemli platform seçenekleri. Güvenli yüksek irtifa personel yükselticileri.", specler: [["Yükseklik", "8m - 18m"], ["Tip", "Makaslı / Eklemli"]], slug: "elektrikli-forklift-kiralama", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg" },
];
const OZELLIK = [
    { d: IK.bolt, baslik: "7/24 Hızlı Servis", metin: "İzmir içi tüm lokasyonlara anında müdahale ve hızlı teslimat." },
    { d: IK.gear, baslik: "Uzman Operatörler", metin: "Sertifikalı, tecrübeli ve iş güvenliği kurallarına hakim kadro." },
    { d: IK.wrench, baslik: "Bakımlı Filo", metin: "Periyodik bakımları eksiksiz yapılan, sıfır hata prensibiyle çalışan makineler." },
    { d: IK.payments, baslik: "Esnek Kiralama", metin: "Saatlik, günlük, haftalık veya aylık projenize özel uygun fiyatlandırma." },
];

function Cerceve({ site, aktif, children }: { site: SiteIcerik; aktif?: string; children: ReactNode }) {
    return (
        <div className="bg-[#f8f9ff] text-[#121c2a] font-['Inter'] min-h-screen flex flex-col antialiased selection:bg-[#f68b1e] selection:text-white">
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
            <header className="bg-[#f8f9ff] border-b border-[#121c2a]/10 shadow-sm sticky top-0 w-full z-50">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex justify-between items-center h-20">
                    <a className={`${mo} text-[22px] md:text-[26px] text-[#914d00] font-extrabold tracking-tight flex items-center gap-2`} href="/"><Ikon d={IK.forklift} className="w-8 h-8 text-[#f68b1e]" box={30} /> {site.h1.toUpperCase()}</a>
                    <nav className="hidden md:flex gap-1 items-center">{NAV.map((n) => (<a key={n.href} className={`${lbl} px-3 py-2 rounded-md transition-all ${aktif === n.href ? "text-[#914d00] border-b-2 border-[#914d00]" : "text-[#554335] hover:text-[#914d00]"}`} href={n.href}>{n.ad}</a>))}</nav>
                    <div className="flex items-center gap-2">
                        <a className={`hidden lg:inline-flex ${lbl} text-[#121c2a] border border-[#121c2a]/20 px-4 py-2 rounded-lg hover:bg-[#eceef0] transition-colors items-center gap-2`} href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> Hemen Ara</a>
                        <a className={`${lbl} bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#1DA851] transition-colors flex items-center gap-2`} href={wa(site.telefon)} target="_blank" rel="noopener noreferrer"><Ikon d={IK.chat} className="w-4 h-4" box={18} /><span className="hidden sm:inline">WhatsApp İle Fiyat Al</span></a>
                    </div>
                </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-[#121c2a] pt-16 pb-8 text-white mt-auto">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div><div className={`${mo} text-[22px] text-[#f68b1e] font-extrabold mb-4`}>{site.h1}</div><p className="text-white/50 text-sm">{site.uzmanlik} odağında güvenilir forklift ve platform kiralama.</p></div>
                    <div><h4 className={`${mo} text-[16px] text-[#f68b1e] font-bold mb-4`}>Hizmetler</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white" href="/dizel-forklift-kiralama">Kiralık Forklift</a></li><li><a className="text-white/60 hover:text-white" href="/urunler">Platform Hizmetleri</a></li></ul></div>
                    <div><h4 className={`${mo} text-[16px] text-[#f68b1e] font-bold mb-4`}>Kurumsal</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white" href="/hakkimizda">Hakkımızda</a></li><li><a className="text-white/60 hover:text-white" href="/blog">Blog</a></li><li><a className="text-white/60 hover:text-white" href="/gizlilik-politikasi">KVKK ve Gizlilik</a></li></ul></div>
                    <div><h4 className={`${mo} text-[16px] text-[#f68b1e] font-bold mb-4`}>İletişim</h4><a className="text-white/60 hover:text-white flex items-center gap-2 text-[15px]" href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> {site.telefonGosterim}</a><a className="text-white/60 hover:text-white flex items-center gap-2 text-[15px] mt-3 break-all" href={`mailto:${site.eposta}`}><Ikon d={IK.mail} className="w-4 h-4" box={18} /> {site.eposta}</a></div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 border-t border-white/10 mt-10 pt-8 text-center"><p className="text-white/40 text-sm">© {new Date().getFullYear()} {site.h1}. Tüm Hakları Saklıdır · {site.anaSite.ad} ağının bir parçasıdır.</p></div>
            </footer>
        </div>
    );
}

function FiloGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FILO.map((f) => (
                <div key={f.baslik} className="bg-white border border-[#121c2a]/10 rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:border-[#f68b1e] transition-all group flex flex-col">
                    <div className="relative h-48 overflow-hidden"><Image src={f.gorsel} alt={f.baslik} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-2 left-2 bg-[#121c2a] text-[#FBBF24] text-[12px] font-semibold px-2 py-1 rounded uppercase tracking-wider">{f.rozet}</div></div>
                    <div className="p-5 flex-1 flex flex-col">
                        <h3 className={`${mo} text-[20px] font-bold text-[#121c2a] mb-2`}>{f.baslik}</h3>
                        <p className="text-[#554335] text-[14px] mb-4 flex-1">{f.metin}</p>
                        <div className="space-y-1 mb-4 text-[13px]">{f.specler.map(([k, v]) => (<div key={k} className="flex justify-between border-b border-[#eceef0] py-1"><span className="text-[#554335]">{k}</span><span className="font-semibold text-[#121c2a]">{v}</span></div>))}</div>
                        <a href={`/${f.slug}`} className={`${lbl} text-center bg-[#914d00] text-white py-2 rounded hover:bg-[#f68b1e] transition-colors uppercase`}>Fiyat Al</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

function AnaSayfa({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host).slice(0, 3);
    return (
        <>
            {/* Hero + hızlı teklif */}
            <section className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-[#121c2a] py-20">
                <div className="absolute inset-0"><Image src="/media/forklift.jpg" alt="İzmir forklift kiralama" fill priority sizes="100vw" className="object-cover opacity-40 mix-blend-overlay" /></div>
                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                        <h1 className={`${mo} text-[36px] md:text-[52px] leading-[1.05] font-extrabold uppercase mb-6`}>İzmir Kiralık <span className="text-[#f68b1e]">{site.h1.replace("İzmir ", "")}</span> Hizmetleri</h1>
                        <p className="text-[18px] text-[#eceef0] max-w-2xl bg-[#121c2a]/50 p-4 rounded-lg backdrop-blur-sm border-l-4 border-[#f68b1e] mb-8">{site.paragraflar[0]}</p>
                        <div className="flex flex-wrap gap-4">
                            <a className="inline-flex items-center gap-2 bg-[#f68b1e] text-white px-8 py-4 rounded-lg shadow-[0_4px_0_0_#c46e12] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_#c46e12] transition-all uppercase font-semibold" href="/iletisim">Hızlı Fiyat Teklifi Al</a>
                            <a className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#121c2a] transition-colors uppercase font-semibold" href="/urunler">Makine Filomuzu İncele</a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-[#121c2a]/10 p-6 md:p-8">
                        <h2 className={`${mo} text-[24px] font-bold text-[#121c2a] mb-6 uppercase border-b-2 border-[#f68b1e] pb-2 inline-block`}>Hızlı Teklif Al</h2>
                        <IzmirHizliTeklif eposta={site.eposta} />
                    </div>
                </div>
            </section>
            {/* Makine filosu */}
            <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
                <h2 className={`${mo} text-[28px] md:text-[32px] font-bold text-[#121c2a] uppercase border-l-8 border-[#f68b1e] pl-4 mb-2`}>Makine Filosu</h2>
                <p className="text-[#554335] mb-10 pl-5">İhtiyacınıza uygun, bakımlı ve güvenilir iş makineleri.</p>
                <FiloGrid />
            </section>
            {/* Özellikler */}
            <section className="bg-white border-y border-[#121c2a]/10 py-16">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {OZELLIK.map((o) => (<div key={o.baslik} className="text-center"><div className="w-14 h-14 rounded-full bg-[#f68b1e]/15 flex items-center justify-center text-[#914d00] mx-auto mb-4"><Ikon d={o.d} className="w-7 h-7" box={28} /></div><h3 className={`${mo} text-[18px] font-bold text-[#121c2a] mb-2`}>{o.baslik}</h3><p className="text-[#554335] text-[14px]">{o.metin}</p></div>))}
                </div>
            </section>
            {/* Blog teaser */}
            <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
                <h2 className={`${mo} text-[28px] font-bold text-[#121c2a] mb-2`}>Sektörel Bilgiler ve Rehberler</h2>
                <p className="text-[#554335] mb-10">İş makineleri ve depo yönetimi hakkında uzman görüşleri.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {yazilar.map((y) => (<a key={y.slug} href={`/blog/${y.slug}`} className="bg-white border border-[#121c2a]/10 rounded-lg overflow-hidden group hover:border-[#f68b1e] hover:shadow-lg transition-all flex flex-col"><div className="h-44 relative overflow-hidden"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-5"><span className={`${lbl} text-[#914d00] uppercase text-[12px]`}>{y.kategori}</span><h3 className={`${mo} mt-2 text-[18px] font-bold text-[#121c2a] group-hover:text-[#914d00]`}>{y.baslik}</h3><span className="mt-4 inline-flex items-center gap-1 text-[#f68b1e] font-semibold text-[14px]">Devamını Oku <Ikon d={IK.ok} className="w-4 h-4" box={16} /></span></div></a>))}
                </div>
            </section>
            {/* Hizmet bölgeleri */}
            <section className="bg-[#e6eeff] py-16">
                <div className="max-w-[1280px] mx-auto px-4 md:px-8">
                    <h2 className={`${mo} text-[28px] font-bold text-[#121c2a] mb-2`}>Hizmet Bölgelerimiz</h2>
                    <p className="text-[#554335] mb-8">İzmir&apos;in her noktasına hızlı ve güvenilir iş makinesi kiralama hizmeti.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{ILCE.map((b) => (<div key={b} className="bg-white p-4 rounded-lg border border-[#121c2a]/10 flex items-center gap-2 font-semibold text-[#121c2a]"><Ikon d={IK.pin} className="w-5 h-5 text-[#914d00]" box={20} />{b}</div>))}</div>
                </div>
            </section>
        </>
    );
}

function Baslik({ ust, baslik, alt }: { ust: string; baslik: string; alt?: string }) {
    return (<section className="px-4 md:px-8 pt-16 pb-12 bg-white border-b border-[#121c2a]/10"><div className="max-w-[1280px] mx-auto"><p className={`text-[#914d00] ${lbl} uppercase mb-3`}>{ust}</p><h1 className={`${mo} text-[36px] md:text-[48px] leading-[1.1] font-extrabold text-[#121c2a] uppercase`}>{baslik}</h1>{alt && <p className="mt-5 text-[18px] text-[#554335] max-w-3xl">{alt}</p>}</div></section>);
}

function Urunler({ site }: { site: SiteIcerik }) {
    void site;
    const makineler = [
        { rozet: "Dizel", baslik: "3 Ton Dizel Forklift", metin: "Ağır yükler ve dış mekan kullanımı için ideal, yüksek performanslı dizel motorlu forklift.", specler: [["Kapasite", "3.000 kg"], ["Kaldırma Yüksekliği", "4.5 m"]], slug: "dizel-forklift-kiralama", gorsel: "/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg" },
        { rozet: "Elektrikli", baslik: "2.5 Ton Elektrikli Forklift", metin: "Sessiz çalışma ve sıfır emisyon ile kapalı alanlar ve depolar için mükemmel çözüm.", specler: [["Kapasite", "2.500 kg"], ["Kaldırma Yüksekliği", "4.0 m"]], slug: "elektrikli-forklift-kiralama", gorsel: "/media/forklift.jpg" },
        { rozet: "Platform", baslik: "Makaslı & Eklemli Platform", metin: "8-18m arası güvenli yüksek irtifa personel yükselticileri; iç ve dış saha çalışmaları için.", specler: [["Yükseklik", "8 - 18 m"], ["Tip", "Makaslı / Eklemli"]], slug: "elektrikli-forklift-kiralama", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg" },
    ];
    const filtreler = ["Tümü", "Forkliftler", "Platformlar", "3 - 5 Ton", "6 - 10 Ton"];
    return (
        <>
            <Baslik ust="Makine Filosu" baslik="Makine Filomuz" alt="İhtiyacınıza uygun, bakımlı ve güvenilir iş makineleri; kapasite ve tipe göre seçin." />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9ff]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-wrap gap-2 mb-8"><span className="font-semibold text-[#554335] mr-2 self-center">Filtrele:</span>{filtreler.map((f, i) => (<button key={f} className={`px-4 py-2 rounded-full text-[14px] font-semibold border transition-colors ${i === 0 ? "bg-[#914d00] text-white border-[#914d00]" : "bg-white text-[#554335] border-[#121c2a]/15 hover:border-[#f68b1e]"}`}>{f}</button>))}</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {makineler.map((m) => (
                            <div key={m.baslik} className="bg-white border border-[#121c2a]/10 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-[#f68b1e] transition-all group flex flex-col">
                                <div className="relative h-48 overflow-hidden"><Image src={m.gorsel} alt={m.baslik} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-2 left-2 bg-[#121c2a] text-[#FBBF24] text-[12px] font-semibold px-2 py-1 rounded uppercase tracking-wider">{m.rozet}</div></div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className={`${mo} text-[20px] font-bold text-[#121c2a] mb-2`}>{m.baslik}</h3>
                                    <p className="text-[#554335] text-[14px] mb-4 flex-1">{m.metin}</p>
                                    <div className="space-y-1 mb-4 text-[13px]">{m.specler.map(([k, v]) => (<div key={k} className="flex justify-between border-b border-[#eceef0] py-1"><span className="text-[#554335]">{k}</span><span className="font-semibold text-[#121c2a]">{v}</span></div>))}</div>
                                    <a href={`/${m.slug}`} className={`${lbl} text-center bg-[#f68b1e] text-white py-2.5 rounded hover:bg-[#914d00] transition-colors uppercase flex items-center justify-center gap-1`}>Teklif İste <Ikon d={IK.ok} className="w-4 h-4" box={16} /></a>
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
    return (
        <>
            <section className="px-4 md:px-8 pt-20 pb-16 bg-[#121c2a] text-white">
                <div className="max-w-[1280px] mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f68b1e]/15 text-[#f68b1e] rounded-full mb-5 text-[14px] font-semibold"><Ikon d={IK.pin} className="w-4 h-4" box={16} /> İzmir Bölgesi Lideri</div>
                    <h1 className={`${mo} text-[36px] md:text-[48px] leading-[1.1] font-extrabold mb-6`}>Güvenilir Yükseklik, <span className="text-[#f68b1e]">Sağlam Temeller.</span></h1>
                    <p className="text-[18px] text-white/70 max-w-3xl">{site.anaSite.ad} olarak, Ege bölgesinin en zorlu projelerinde güvenliği ve verimliliği merkeze alan ağır makine kiralama çözümleri sunuyoruz.</p>
                </div>
            </section>
            <section className="max-w-[1280px] mx-auto px-4 md:px-8 py-20">
                <p className={`${lbl} text-[#914d00] uppercase mb-8`}>Neden Biz?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl border border-[#121c2a]/10 p-8 shadow-sm"><div className="w-12 h-12 rounded-xl bg-[#f68b1e]/15 text-[#914d00] flex items-center justify-center mb-5"><Ikon d={IK.rocket} className="w-6 h-6" /></div><h3 className={`${mo} text-[22px] font-bold text-[#121c2a] mb-3`}>Misyonumuz</h3><p className="text-[#554335]">İnşaat, lojistik ve endüstriyel tesis projelerinde, müşterilerimizin yükseklikteki çalışmalarını en güvenli, hızlı ve maliyet etkin şekilde gerçekleştirmelerini sağlamak. Son teknoloji makine filomuz ve uzman kadromuzla, sıfır iş kazası hedefiyle 7/24 kesintisiz destek sunmak.</p></div>
                    <div className="bg-white rounded-xl border border-[#121c2a]/10 p-8 shadow-sm"><div className="w-12 h-12 rounded-xl bg-[#f68b1e]/15 text-[#914d00] flex items-center justify-center mb-5"><Ikon d={IK.eye} className="w-6 h-6" /></div><h3 className={`${mo} text-[22px] font-bold text-[#121c2a] mb-3`}>Vizyonumuz</h3><p className="text-[#554335]">Ege Bölgesi&apos;nde başlayan liderliğimizi, tüm Türkiye&apos;de referans alınan, sektörün standartlarını belirleyen bir platform kiralama markası haline getirmek.</p></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                    {[[IK.shield, "%100", "Güvenlik Standardı"], [IK.wrench, "Periyodik", "Bakımlı Filo"], [IK.bolt, "7/24", "Kesintisiz Destek"]].map(([d, b, m]) => (
                        <div key={m as string} className="bg-[#121c2a] text-white rounded-xl p-6 text-center"><Ikon d={d as string} className="w-8 h-8 text-[#f68b1e] mx-auto mb-3" box={32} /><div className={`${mo} text-[26px] font-extrabold text-[#f68b1e]`}>{b}</div><p className="text-white/70 text-[14px] mt-1">{m}</p></div>
                    ))}
                </div>
            </section>
        </>
    );
}

function Iletisim({ site }: { site: SiteIcerik }) {
    return (
        <>
            <Baslik ust="İletişim" baslik="Bize Ulaşın" alt={`${site.bolge} vinç, platform ve iş makinesi kiralama ihtiyaçlarınız için uzman ekibimizle yanınızdayız.`} />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9ff]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
                    <div className="bg-white rounded-lg border border-[#121c2a]/10 p-8 shadow-sm">
                        <h2 className={`${mo} text-[24px] font-bold text-[#121c2a] mb-1`}>İletişim Formu</h2>
                        <p className="text-[#554335] mb-6">Taleplerinizi bize iletin, en kısa sürede dönüş yapalım.</p>
                        <IzmirIletisimForm eposta={site.eposta} />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-6">
                            <h3 className={`${mo} text-[20px] font-bold text-[#121c2a] mb-2`}>Hızlı Teklif Alın</h3>
                            <p className="text-[#554335] text-[14px] mb-4">Acil platform veya vinç ihtiyaçlarınız için WhatsApp üzerinden anında fiyat teklifi alabilirsiniz.</p>
                            <a href={wa(site.telefon)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#1DA851] transition-colors"><Ikon d={IK.chat} className="w-5 h-5" /> WhatsApp İletişim Hattı</a>
                        </div>
                        <a href={`tel:${site.telefon}`} className="bg-white rounded-lg border border-[#121c2a]/10 p-6 shadow-sm flex items-center gap-4 hover:border-[#f68b1e] transition-colors"><div className="w-12 h-12 rounded-full bg-[#f68b1e]/15 flex items-center justify-center text-[#914d00]"><Ikon d={IK.phone} className="w-6 h-6" /></div><div><p className={`${lbl} text-[#554335] uppercase text-[12px]`}>Telefon</p><p className={`${mo} text-[18px] font-bold text-[#121c2a]`}>{site.telefonGosterim}</p></div></a>
                        <div className="bg-white rounded-lg border border-[#121c2a]/10 p-6 shadow-sm flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-[#e6eeff] flex items-center justify-center text-[#914d00]"><Ikon d={IK.pin} className="w-6 h-6" /></div><div><p className={`${lbl} text-[#554335] uppercase text-[12px]`}>Adres</p><p className="font-semibold text-[#121c2a]">{site.bolge}</p></div></div>
                    </div>
                </div>
            </section>
        </>
    );
}

function BlogListe({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host);
    return (
        <>
            <Baslik ust="Blog" baslik="Sektörel Bilgiler ve Rehberler" alt="İş makineleri ve depo yönetimi hakkında uzman görüşleri, güvenlik ve maliyet rehberleri." />
            <section className="px-4 md:px-8 py-16 bg-[#f8f9ff]"><div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yazilar.map((y) => (<a key={y.slug} href={`/blog/${y.slug}`} className="bg-white border border-[#121c2a]/10 rounded-lg overflow-hidden group hover:border-[#f68b1e] hover:shadow-lg transition-all flex flex-col"><div className="h-48 relative overflow-hidden"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /></div><div className="p-6 flex-1 flex flex-col"><span className={`${lbl} text-[#914d00] uppercase text-[12px]`}>{y.kategori}</span><h2 className={`${mo} mt-2 text-[20px] font-bold text-[#121c2a] group-hover:text-[#914d00]`}>{y.baslik}</h2><p className="mt-3 line-clamp-3 text-[#554335] text-[15px] leading-6 flex-1">{y.ozet}</p><span className="mt-4 inline-flex items-center gap-1 text-[#f68b1e] font-semibold text-[14px]">Devamını Oku <Ikon d={IK.ok} className="w-4 h-4" box={16} /></span></div></a>))}
            </div></section>
        </>
    );
}

export const izmirforkliftTema: TemaModulu = { Cerceve, AnaSayfa, sayfalar: { hakkimizda: Hakkimizda, iletisim: Iletisim, urunler: Urunler }, BlogListe };

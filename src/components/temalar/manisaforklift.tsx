import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { hostBloglari } from "@/lib/blog";
import type { TemaModulu } from "./tipler";
import { ForkliftTalepForm } from "./manisaforklift-form";

// manisaforklift.com — Google Stitch "clean-tech" LIGHT tasarımının birebir portu.
// background #f7f9fb, primary #795900, safety-amber #FBBF24, deep-slate #020617 (koyu bölümler),
// electric-blue #1D4ED8, cyan #67E8F9. Montserrat (başlık) + Inter (gövde).

const mo = "font-['Montserrat']";
const glass = "bg-white/70 backdrop-blur border border-white/20 shadow-[0_20px_40px_rgba(2,6,23,0.05)]";

function Ikon({ d, className, box = 24 }: { d: string; className?: string; box?: number }) {
    return (<svg className={className} width={box} height={box} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>);
}
const IK = {
    forklift: "M3 17h4v-6h6l3 3v3h2M7 17a2 2 0 1 0 0 .01M17 17a2 2 0 1 0 0 .01M11 11V5h4M20 17V9",
    phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    ok: "M5 12h14M12 5l7 7-7 7", chevron: "M9 18l6-6-6-6", tune: "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6",
    mail: "M4 4h16v16H4zM22 6l-10 7L2 6", pin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-.01",
    weight: "M6.5 8h11l2 12H4.5zM12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", height: "M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4",
    bolt: "M13 2L3 14h7l-1 8 10-12h-7z", precision: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01",
    speed: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 12l4-4M8 12h.01", shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
    rocket: "M5 13l-2 4 4-2M12 2s4 2 4 8-4 8-4 8-4-2-4-8 4-8 4-8zM12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", analytics: "M4 20V10M10 20V4M16 20v-6M22 20H2",
    calendar: "M4 5h16v16H4zM16 2v4M8 2v4M4 10h16", clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
};
const NAV = [
    { ad: "Ana Sayfa", href: "/" }, { ad: "Filo", href: "/urunler" },
    { ad: "Hakkımızda", href: "/hakkimizda" }, { ad: "Blog", href: "/blog" }, { ad: "İletişim", href: "/iletisim" },
];

function Cerceve({ site, aktif, children }: { site: SiteIcerik; aktif?: string; children: ReactNode }) {
    return (
        <div className="bg-[#f7f9fb] text-[#191c1e] font-['Inter'] min-h-screen flex flex-col antialiased selection:bg-[#FBBF24] selection:text-black">
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
            <header className="bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-sm">
                <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex justify-between items-center h-20">
                    <a className={`${mo} text-[24px] md:text-[28px] text-[#795900] font-extrabold tracking-tight flex items-center gap-2`} href="/"><Ikon d={IK.forklift} className="w-8 h-8 text-[#FBBF24]" box={32} /> {site.h1.toUpperCase()}</a>
                    <nav className="hidden md:flex gap-1 items-center">{NAV.map((n) => (<a key={n.href} className={`font-['Inter'] text-[14px] tracking-[0.05em] font-semibold px-3 py-2 rounded-md transition-all ${aktif === n.href ? "text-[#795900] border-b-2 border-[#795900]" : "text-[#4f4633] hover:text-[#795900] hover:bg-[#FBBF24]/10"}`} href={n.href}>{n.ad}</a>))}</nav>
                    <a className="bg-[#FBBF24] text-black font-semibold text-[14px] px-6 py-2.5 rounded-lg hover:brightness-95 transition-all shadow-sm flex items-center gap-2" href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /><span className="hidden sm:inline">Hemen Ara</span></a>
                </div>
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-[#020617] pt-16 pb-8 text-[#FBBF24] mt-auto border-t border-[#d3c5ac]/30">
                <div className="max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="flex flex-col gap-4"><div className={`${mo} text-[24px] text-[#FBBF24] font-extrabold`}>{site.h1.toUpperCase()}</div><p className="text-white/50 text-sm">Ağır Lojistikte Hassasiyet.</p></div>
                    <div><h4 className={`${mo} text-[16px] text-[#FBBF24] font-bold mb-4`}>Filo Çözümleri</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white transition-colors" href="/elektrikli-forklift-kiralama">Elektrikli Filo</a></li><li><a className="text-white/60 hover:text-white transition-colors" href="/dizel-forklift-kiralama">Dizel Güç</a></li></ul></div>
                    <div><h4 className={`${mo} text-[16px] text-[#FBBF24] font-bold mb-4`}>Şirket</h4><ul className="space-y-3 text-[15px]"><li><a className="text-white/60 hover:text-white transition-colors" href="/hakkimizda">Hakkımızda</a></li><li><a className="text-white/60 hover:text-white transition-colors" href="/blog">Blog</a></li><li><a className="text-white/60 hover:text-white transition-colors" href="/gizlilik-politikasi">Gizlilik Politikası</a></li></ul></div>
                    <div><h4 className={`${mo} text-[16px] text-[#FBBF24] font-bold mb-4`}>İletişim</h4><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-[15px]" href={`tel:${site.telefon}`}><Ikon d={IK.phone} className="w-4 h-4" box={18} /> {site.telefonGosterim}</a><a className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-[15px] mt-3 break-all" href={`mailto:${site.eposta}`}><Ikon d={IK.mail} className="w-4 h-4" box={18} /> {site.eposta}</a></div>
                </div>
                <div className="max-w-[1280px] mx-auto px-4 md:px-12 border-t border-white/10 mt-10 pt-8 text-center"><p className="text-white/40 text-sm">© {new Date().getFullYear()} {site.h1}. Ağır Lojistikte Hassasiyet · {site.anaSite.ad} ağının bir parçasıdır.</p></div>
            </footer>
        </div>
    );
}

function AnaSayfa({ site }: { site: SiteIcerik }) {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">
            <div className="absolute inset-0 z-0"><Image src="/media/forklift.jpg" alt="Modern forklift ile lojistik" fill priority sizes="100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#f7f9fb]/90 via-[#f7f9fb]/70 to-transparent" /></div>
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${glass} p-8 md:p-12 rounded-xl`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eceef0] text-[#795900] font-semibold text-[14px] rounded-full mb-6 border border-[#d3c5ac]/50"><Ikon d={IK.precision} className="w-4 h-4" box={16} /> Yeni Nesil Lojistik</div>
                    <h1 className={`${mo} text-[32px] md:text-[48px] leading-[1.1] md:leading-[56px] tracking-[-0.02em] font-bold text-[#191c1e] mb-6`}>Ege&apos;nin Endüstriyel Gücü: <span className="text-[#795900]">{site.h1}</span></h1>
                    <p className="text-[18px] leading-[28px] text-[#4f4633] mb-8 max-w-xl">{site.paragraflar[0]}</p>
                    <div className="flex flex-wrap gap-4">
                        <a className="bg-[#FBBF24] text-black font-semibold text-[14px] px-8 py-4 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2" href="/urunler">Filomuzu İnceleyin <Ikon d={IK.ok} className="w-5 h-5" box={20} /></a>
                        <a className="backdrop-blur bg-white/40 text-[#191c1e] font-semibold text-[14px] px-8 py-4 rounded-lg border border-slate-200 hover:bg-white/70 transition-all" href="/iletisim">Talebiniz Var Mı?</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

const MAKINELER = [
    { ad: "Industrial E-Series 3T", rozet: "Elektrikli", rozetRenk: "bg-[#67E8F9] text-[#020617]", stok: true, aciklama: "Hassas elektrikli denge ağırlıklı forklift.", ton: "3.0 Ton", metre: "4.5 Metre", gorsel: "/media/forklift.jpg", slug: "elektrikli-forklift-kiralama" },
    { ad: "Titan D-Series 5T", rozet: "Dizel", rozetRenk: "bg-[#FBBF24] text-[#020617]", stok: false, aciklama: "Zorlu dış saha performans makinesi.", ton: "5.0 Ton", metre: "5.0 Metre", gorsel: "/media/blog/forklift-ve-makasli-platform-kiralama-fabrika-deposu.jpg", slug: "dizel-forklift-kiralama" },
    { ad: "Agile L-Series 2.5T", rozet: "LPG", rozetRenk: "bg-[#795900] text-white", stok: true, aciklama: "Çok yönlü iç/dış mekan iş atı.", ton: "2.5 Ton", metre: "4.8 Metre", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg", slug: "dizel-forklift-kiralama" },
    { ad: "Goliath Heavy 10T", rozet: "Dizel", rozetRenk: "bg-[#FBBF24] text-[#020617]", stok: false, aciklama: "Ağır lojistik için maksimum güç.", ton: "10.0 Ton", metre: "6.0 Metre", gorsel: "/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg", slug: "dizel-forklift-kiralama" },
];

function Urunler({ site }: { site: SiteIcerik }) {
    void site;
    return (
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-12 grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
            <div className="col-span-full mb-4">
                <h1 className={`${mo} text-[32px] font-bold text-[#191c1e] mb-2`}>Makine Parkı</h1>
                <p className="text-[18px] text-[#4f4633] max-w-2xl">Yüksek teknolojili bölgesel lojistik için tasarlanmış hassas mühendislik filomuzu keşfedin. İhtiyacınıza tam uyan endüstriyel aracı bulmak için yeteneğe göre filtreleyin.</p>
            </div>
            {/* Filtre paneli */}
            <aside className="col-span-1 md:col-span-3">
                <div className={`${glass} rounded-xl p-6 sticky top-28`}>
                    <h2 className={`${mo} text-[20px] text-[#795900] font-bold mb-6 flex items-center gap-2`}><Ikon d={IK.tune} className="w-5 h-5" box={20} /> Filtreler</h2>
                    <div className="mb-8">
                        <h3 className="text-[14px] font-semibold text-[#191c1e] mb-3">Güç Kaynağı</h3>
                        <div className="space-y-2">
                            {[["Elektrikli (Sıfır Emisyon)", true], ["Dizel (Ağır Hizmet)", false], ["LPG (Çok Yönlü)", false]].map(([et, ch]) => (
                                <label key={et as string} className="flex items-center gap-3 cursor-pointer group"><input defaultChecked={ch as boolean} className="h-5 w-5 rounded border-[#d3c5ac] accent-[#795900]" type="checkbox" /><span className="text-[#4f4633] group-hover:text-[#795900] transition-colors">{et}</span></label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-[14px] font-semibold text-[#191c1e] mb-3">Kaldırma Kapasitesi</h3>
                        <div className="relative w-full h-2 bg-[#e0e3e5] rounded-full mt-2">
                            <div className="absolute left-[20%] right-[40%] h-full bg-[#FBBF24] rounded-full" />
                            <div className="absolute left-[20%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#FBBF24] rounded-full shadow" />
                            <div className="absolute right-[40%] top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border-2 border-[#FBBF24] rounded-full shadow" />
                        </div>
                        <div className="flex justify-between text-[12px] text-[#4f4633] mt-3"><span>1 Ton</span><span className="font-semibold text-[#795900]">3 - 8 Ton</span><span>15+ Ton</span></div>
                    </div>
                    <div>
                        <h3 className="text-[14px] font-semibold text-[#191c1e] mb-3">Markalar</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1 rounded-full bg-[#FBBF24]/20 text-[#795900] border border-[#795900]/30 text-[12px] font-medium">Linde</button>
                            <button className="px-3 py-1 rounded-full bg-[#e0e3e5] text-[#4f4633] border border-[#d3c5ac]/30 text-[12px] font-medium">Toyota</button>
                            <button className="px-3 py-1 rounded-full bg-[#e0e3e5] text-[#4f4633] border border-[#d3c5ac]/30 text-[12px] font-medium">Jungheinrich</button>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#d3c5ac]/30"><a href="/urunler" className="block w-full text-center py-2 bg-[#e0e3e5] text-[#4f4633] font-semibold rounded-lg hover:bg-[#d8dadc] transition-colors">Filtreleri Sıfırla</a></div>
                </div>
            </aside>
            {/* Makine grid */}
            <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MAKINELER.map((m) => (
                    <article key={m.ad} className={`${glass} rounded-xl overflow-hidden flex flex-col group`}>
                        <div className="relative h-48 overflow-hidden bg-[#d8dadc] rounded-t-xl">
                            <Image src={m.gorsel} alt={m.ad} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className={`absolute top-3 left-3 ${m.rozetRenk} px-2 py-1 rounded text-[12px] font-semibold uppercase tracking-wider shadow-sm`}>{m.rozet}</div>
                            {m.stok && <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-md px-2 py-1 rounded text-[12px] font-semibold text-[#795900] border border-white/40 shadow-sm">Stokta</div>}
                        </div>
                        <div className="p-5 flex-grow flex flex-col">
                            <h3 className={`${mo} text-[20px] font-semibold text-[#191c1e] mb-1`}>{m.ad}</h3>
                            <p className="text-[13px] text-[#4f4633] mb-4">{m.aciklama}</p>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="flex items-center gap-2 text-[#5e6479] bg-[#f2f4f6] p-2 rounded"><Ikon d={IK.weight} className="w-4 h-4" box={16} /><span className="text-[12px]">{m.ton}</span></div>
                                <div className="flex items-center gap-2 text-[#5e6479] bg-[#f2f4f6] p-2 rounded"><Ikon d={IK.height} className="w-4 h-4" box={16} /><span className="text-[12px]">{m.metre}</span></div>
                            </div>
                            <a href="/iletisim" className="mt-auto w-full py-3 bg-[#FBBF24] text-black font-semibold rounded-lg hover:brightness-95 transition-all shadow-sm text-center">Teklif Al</a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

function Hakkimizda({ site }: { site: SiteIcerik }) {
    const ozellik = [
        { d: IK.bolt, baslik: "Temiz Güç", metin: "Sürdürülebilir operasyonlar için öncü elektrikli filo benimseme." },
        { d: IK.precision, baslik: "Hassasiyet", metin: "Ağır kaldırmada milimetrik doğruluk sağlayan gelişmiş telemetri." },
        { d: IK.speed, baslik: "Çalışma Süresi", metin: "Tedarik zincirinizi hareket halinde tutan hızlı müdahale bakımı." },
    ];
    const deger = [
        { d: IK.shield, baslik: "Önce Güvenlik", metin: "Operasyonel güvenlik ve operatör refahında sıfır taviz yaklaşımı." },
        { d: IK.rocket, baslik: "Çeviklik", metin: "Ege genelinde kiralık ünitelerin ve acil onarım ekiplerinin hızlı sevki." },
        { d: IK.analytics, baslik: "Veri Odaklı", metin: "Optimum verim ve proaktif bakım sağlayan akıllı filo yönetimi." },
    ];
    const zaman = [
        ["2010", "Manisa Organize Sanayi Bölgesi'nde kuruldu."],
        ["2018", "İzmir liman operasyonlarına genişleme ve hibrit filo tanıtımı."],
        ["+150 Ünite", "Filo büyümesi ve bölgesel hizmet ağı."],
    ];
    return (
        <>
            <section className="relative pt-32 pb-24 overflow-hidden bg-[#020617] text-white text-center">
                <div className="absolute inset-0 opacity-25"><Image src="/media/blog/celik-konstruksiyon-montaji-makasli-platform-forklift-kiralama.jpg" alt="" fill sizes="100vw" className="object-cover" /></div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-12">
                    <h1 className={`${mo} text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#FBBF24] mb-6`}>Ağır Lojistiğin Geleceği</h1>
                    <p className="text-[18px] text-white/70">Ege bölgesinde daha temiz, daha akıllı ve daha güvenli bir endüstriyel manzara inşa ediyoruz. {site.h1}, zorlu güvenilirliği hassas teknolojiyle birleştirir.</p>
                </div>
            </section>
            <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                {ozellik.map((o) => (<div key={o.baslik} className="bg-white rounded-xl border border-[#d3c5ac]/40 p-8 shadow-sm text-center"><div className="w-14 h-14 rounded-full bg-[#FBBF24]/20 flex items-center justify-center text-[#795900] mx-auto mb-5"><Ikon d={o.d} className="w-7 h-7" box={28} /></div><h3 className={`${mo} text-[20px] font-bold text-[#191c1e] mb-2`}>{o.baslik}</h3><p className="text-[#4f4633] text-[15px]">{o.metin}</p></div>))}
            </section>
            <section className="bg-white border-y border-[#d3c5ac]/30 py-20">
                <div className="max-w-[1280px] mx-auto px-4 md:px-12">
                    <div className="text-center mb-12"><h2 className={`${mo} text-[32px] font-bold text-[#191c1e] mb-2`}>Yolculuğumuz</h2><p className="text-[#4f4633]">Türkiye&apos;nin endüstriyel kalbiyle birlikte büyüyoruz.</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {zaman.map(([y, m]) => (<div key={y} className="bg-[#f7f9fb] rounded-xl border border-[#d3c5ac]/40 p-8"><div className={`${mo} text-[28px] font-extrabold text-[#795900] mb-3`}>{y}</div><p className="text-[#4f4633]">{m}</p></div>))}
                    </div>
                </div>
            </section>
            <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
                <div className="text-center mb-12"><h2 className={`${mo} text-[32px] font-bold text-[#191c1e] mb-2`}>Temel Değerler</h2></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {deger.map((d) => (<div key={d.baslik} className="bg-white rounded-xl border border-[#d3c5ac]/40 p-8 shadow-sm"><div className="w-12 h-12 rounded-xl bg-[#020617] text-[#FBBF24] flex items-center justify-center mb-5"><Ikon d={d.d} className="w-6 h-6" /></div><h3 className={`${mo} text-[18px] font-bold text-[#191c1e] mb-2`}>{d.baslik}</h3><p className="text-[#4f4633] text-[15px]">{d.metin}</p></div>))}
                </div>
            </section>
        </>
    );
}

function Iletisim({ site }: { site: SiteIcerik }) {
    return (
        <>
            <section className="relative pt-24 pb-32 overflow-hidden bg-[#020617] text-white">
                <div className="max-w-[1280px] mx-auto px-4 md:px-12 relative z-10 text-center">
                    <h1 className={`${mo} text-[32px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-extrabold text-[#FBBF24] mb-6`}>Bize Ulaşın</h1>
                    <p className="text-[18px] text-white/70 max-w-2xl mx-auto">{site.bolge} bölgesinin önde gelen forklift lojistik ve teknoloji ortağı. Ağır kaldırma ihtiyaçlarınızda hassasiyetle yanınızdayız.</p>
                </div>
            </section>
            <section className="py-24 max-w-[1280px] mx-auto px-4 md:px-12 relative z-20 -mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <a href={`tel:${site.telefon}`} className={`${glass} rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 block`}>
                            <div className="w-12 h-12 rounded-full bg-[#FBBF24]/20 flex items-center justify-center text-[#795900] mb-6"><Ikon d={IK.phone} className="w-6 h-6" /></div>
                            <h3 className={`${mo} text-[20px] font-semibold text-[#191c1e] mb-2`}>Çağrı Merkezi</h3>
                            <p className="text-[#4f4633] mb-4">Acil onarımlar için 7/24 destek</p>
                            <span className={`${mo} text-[20px] font-semibold text-[#795900]`}>{site.telefonGosterim}</span>
                        </a>
                        <a href={`mailto:${site.eposta}`} className={`${glass} rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 block`}>
                            <div className="w-12 h-12 rounded-full bg-[#1D4ED8]/10 flex items-center justify-center text-[#1D4ED8] mb-6"><Ikon d={IK.mail} className="w-6 h-6" /></div>
                            <h3 className={`${mo} text-[20px] font-semibold text-[#191c1e] mb-2`}>E-posta</h3>
                            <p className="text-[#4f4633] mb-4">Kiralama talepleri ve teknik özellikler için.</p>
                            <span className="text-[14px] font-semibold text-[#1D4ED8] break-all">{site.eposta}</span>
                        </a>
                        <div className={`${glass} rounded-xl p-8`}>
                            <div className="w-12 h-12 rounded-full bg-[#dce1fb] flex items-center justify-center text-[#585e73] mb-6"><Ikon d={IK.pin} className="w-6 h-6" /></div>
                            <h3 className={`${mo} text-[20px] font-semibold text-[#191c1e] mb-2`}>Merkez</h3>
                            <p className="text-[#4f4633]">{site.bolge}</p>
                        </div>
                    </div>
                    <div className={`lg:col-span-8 ${glass} rounded-xl p-8 md:p-12`}>
                        <h2 className={`${mo} text-[32px] font-bold text-[#191c1e] mb-8`}>Talep Gönderin</h2>
                        <ForkliftTalepForm eposta={site.eposta} />
                    </div>
                </div>
            </section>
        </>
    );
}

function BlogListe({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host);
    return (
        <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
            <div className="mb-12 max-w-2xl"><h1 className={`${mo} text-[32px] md:text-[40px] font-bold text-[#191c1e] mb-3`}>Endüstriyel Lojistik ve İnovasyon</h1><p className="text-[18px] text-[#4f4633]">Forklift teknolojilerinden depo yönetimine kadar en güncel endüstri haberleri, bakım ipuçları ve güvenlik standartları.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yazilar.map((y) => (
                    <a key={y.slug} href={`/blog/${y.slug}`} className={`${glass} rounded-xl overflow-hidden group flex flex-col`}>
                        <div className="h-52 relative overflow-hidden"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                        <div className="p-6 flex-1 flex flex-col">
                            <span className="text-[12px] font-semibold text-[#795900] uppercase tracking-wider">{y.kategori}</span>
                            <h2 className={`${mo} mt-2 text-[20px] font-bold text-[#191c1e] group-hover:text-[#795900] transition-colors`}>{y.baslik}</h2>
                            <p className="mt-3 line-clamp-3 text-[#4f4633] text-[15px] leading-6 flex-1">{y.ozet}</p>
                            <div className="mt-4 flex items-center gap-4 text-[12px] text-[#4f4633]"><span className="flex items-center gap-1"><Ikon d={IK.calendar} className="w-4 h-4" box={14} /> {new Date(`${y.tarih}T00:00:00+03:00`).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span><span className="flex items-center gap-1"><Ikon d={IK.clock} className="w-4 h-4" box={14} /> {y.okuma} Dk Okuma</span></div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export const manisaforkliftTema: TemaModulu = {
    Cerceve,
    AnaSayfa,
    sayfalar: { hakkimizda: Hakkimizda, iletisim: Iletisim, urunler: Urunler },
    BlogListe,
};

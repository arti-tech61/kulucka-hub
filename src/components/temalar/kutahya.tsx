import Image from "next/image";
import { hostBloglari } from "@/lib/blog";
import type { SiteIcerik } from "@/lib/siteler";
import { TemaForm } from "./tema-form";
import type { TemaModulu } from "./tipler";

function Ikon({ ad, className = "h-5 w-5" }: { ad: keyof typeof yollar; className?: string }) {
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={yollar[ad]} /></svg>;
}

const yollar = {
    ok: "M5 12h14M13 5l7 7-7 7",
    telefon: "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.06 10.91a16 16 0 0 0 4 4l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    posta: "M4 4h16v16H4zM22 6l-10 7L2 6",
    konum: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    onay: "M20 6L9 17l-5-5",
    saat: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
};

const urunler = [
    { baslik: "Makaslı Platformlar", metin: "Düz ve taşıyıcı zeminlerde fabrika, depo ve tesis içi dikey erişim.", gorsel: "/media/makasli-platform.png", slug: "makasli-platform-kiralama" },
    { baslik: "Eklemli Platformlar", metin: "Hat, tesisat ve yapı engellerinin üzerinden güvenli yatay erişim.", gorsel: "/media/eklemli-platform.png", slug: "eklemli-ve-teleskopik-platform-kiralama" },
    { baslik: "Teleskopik Platformlar", metin: "Silo, baca ve yüksek cephelerde uzun erişim gerektiren işler.", gorsel: "/media/blog/dikey-personel-yukseltici-arti-platform-makine-parki.jpg", slug: "eklemli-ve-teleskopik-platform-kiralama" },
];

function Cerceve({ site, aktif = "", children }: Parameters<TemaModulu["Cerceve"]>[0]) {
    const nav = [["/", "Ana Sayfa"], ["/urunler", "Makine Parkuru"], ["/hakkimizda", "Hakkımızda"], ["/blog", "Blog"], ["/iletisim", "İletişim"]];
    return <div className="min-h-screen overflow-x-hidden bg-[#f7f9fb] text-[#191c1e] font-['Inter']">
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" />
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/95 text-white backdrop-blur-md">
            <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6">
                <a href="/" className="flex items-center gap-3"><Image src="/media/logo/logo.png" alt={`${site.h1} logosu`} width={150} height={40} className="h-9 w-auto object-contain" /><span className="hidden font-['Montserrat'] text-[18px] font-bold sm:block">Kütahya Platform</span></a>
                <nav className="hidden items-center gap-1 lg:flex">{nav.map(([href, etiket]) => <a key={href} href={href} className={`rounded-[2px] px-3 py-2 text-[14px] font-semibold tracking-[0.05em] transition-colors ${aktif === href ? "bg-[#1D4ED8] text-white" : "text-white hover:text-[#67E8F9]"}`}>{etiket}</a>)}</nav>
                <a href={`tel:${site.telefon}`} className="flex items-center gap-2 rounded-[2px] bg-[#67E8F9] px-4 py-3 text-[14px] font-bold text-[#020617]"><Ikon ad="telefon" className="h-4 w-4" /><span className="hidden md:inline">{site.telefonGosterim}</span><span className="md:hidden">Ara</span></a>
            </div>
        </header>
        <main>{children}</main>
        <footer className="bg-[#020617] px-6 py-14 text-white">
            <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-3">
                <div><h2 className="font-['Montserrat'] text-[24px] font-bold">Kütahya Platform</h2><p className="mt-4 text-[14px] leading-5 text-[#c0c6de]">{site.uzmanlik} için doğru makine ve yazılı teklif planlaması.</p></div>
                <div><h3 className="font-['Montserrat'] text-[20px] font-semibold text-[#67E8F9]">Hızlı Menü</h3><div className="mt-4 grid grid-cols-2 gap-3 text-[14px]">{nav.slice(1).map(([h, e]) => <a key={h} href={h} className="hover:text-[#67E8F9]">{e}</a>)}<a href={site.anaSite.url} className="hover:text-[#67E8F9]">{site.anaSite.ad}</a></div></div>
                <div><h3 className="font-['Montserrat'] text-[20px] font-semibold text-[#67E8F9]">İletişim</h3><a href={`tel:${site.telefon}`} className="mt-4 flex gap-2"><Ikon ad="telefon" />{site.telefonGosterim}</a><a href={`mailto:${site.eposta}`} className="mt-3 flex gap-2 break-all"><Ikon ad="posta" />{site.eposta}</a></div>
            </div>
        </footer>
        <a href={`tel:${site.telefon}`} aria-label="Kütahya Platform'u ara" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#67E8F9] text-[#020617] shadow-xl"><Ikon ad="telefon" /></a>
    </div>;
}

function AnaSayfa({ site }: { site: SiteIcerik }) {
    return <>
        <section className="relative min-h-[650px] overflow-hidden">
            <Image src="/media/saha-hero.png" alt="Kütahya platform kiralama saha çalışması" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/85 to-[#020617]/20" />
            <div className="relative mx-auto flex min-h-[650px] max-w-[1280px] items-center px-6 py-20 text-white">
                <div className="max-w-[720px]"><span className="rounded-[2px] bg-[#BEF264] px-3 py-2 text-[12px] font-bold tracking-[0.12em] text-[#020617]">KÜTAHYA ENDÜSTRİYEL ERİŞİM</span><h1 className="mt-6 font-['Montserrat'] text-[40px] font-bold leading-[48px] tracking-[-0.02em] md:text-[48px] md:leading-[56px]">{site.h1}</h1><p className="mt-6 max-w-[650px] text-[18px] leading-[28px] text-white/85">{site.paragraflar[0]}</p><div className="mt-8 flex flex-wrap gap-4"><a href="/iletisim" className="rounded-[2px] bg-[#67E8F9] px-8 py-4 font-bold text-[#020617]">Teklif Alın</a><a href="/urunler" className="rounded-[2px] border border-white px-8 py-4 font-bold">Makine Parkuru</a></div></div>
            </div>
        </section>
        <section className="bg-white px-6 py-20"><div className="mx-auto max-w-[1280px]"><p className="text-[12px] font-semibold tracking-[0.12em] text-[#1D4ED8]">KİRALAMA ÇÖZÜMLERİMİZ</p><h2 className="mt-3 font-['Montserrat'] text-[32px] font-bold leading-[40px] text-[#020617]">Sahaya Uygun Makine Sınıfı</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{urunler.map((u) => <article key={u.baslik} className="overflow-hidden rounded-[4px] border border-[#c6c6cd] bg-[#f7f9fb]"><div className="relative h-64"><Image src={u.gorsel} alt={u.baslik} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" /></div><div className="p-6"><h3 className="font-['Montserrat'] text-[20px] font-semibold text-[#020617]">{u.baslik}</h3><p className="mt-3 leading-6 text-[#46464c]">{u.metin}</p><a href={`/${u.slug}`} className="mt-5 flex items-center gap-2 font-semibold text-[#1D4ED8]">Detayları Gör <Ikon ad="ok" /></a></div></article>)}</div></div></section>
        <section className="bg-[#f2f4f6] px-6 py-20"><div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2"><div className="relative min-h-[420px] overflow-hidden rounded-[4px]"><Image src="/media/guvenli-calisma.png" alt="Güvenli yüksekte çalışma" fill sizes="50vw" className="object-cover" /></div><div className="self-center"><h2 className="font-['Montserrat'] text-[32px] font-bold text-[#020617]">Güven ve Tecrübenin Adresi</h2><p className="mt-5 text-[18px] leading-7 text-[#46464c]">{site.paragraflar[1]}</p><ul className="mt-6 space-y-4">{site.hizmetler.map((h) => <li key={h} className="flex gap-3"><span className="text-[#1D4ED8]"><Ikon ad="onay" /></span>{h}</li>)}</ul><a href="/hakkimizda" className="mt-8 inline-flex rounded-[2px] border border-[#1D4ED8] px-6 py-3 font-semibold text-[#1D4ED8]">Bizi Tanıyın</a></div></div></section>
    </>;
}

function Hakkimizda({ site }: { site: SiteIcerik }) {
    return <><IcHero baslik="Güvenilir Erişim, Planlı Operasyon" ust="HAKKIMIZDA" /><section className="px-6 py-20"><div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-2"><div><h2 className="font-['Montserrat'] text-[32px] font-bold text-[#020617]">Kütahya&apos;da Sahaya Özel Çözüm</h2>{site.paragraflar.map((p) => <p key={p} className="mt-5 leading-7 text-[#46464c]">{p}</p>)}</div><div className="grid gap-4 sm:grid-cols-2">{["Misyonumuz", "Vizyonumuz", "İş Güvenliği", "Şeffaf Teklif"].map((b, i) => <article key={b} className="rounded-[4px] bg-[#f2f4f6] p-6"><span className="text-[12px] font-bold text-[#1D4ED8]">0{i + 1}</span><h3 className="mt-3 font-['Montserrat'] text-[20px] font-semibold text-[#020617]">{b}</h3><p className="mt-3 text-[14px] leading-5 text-[#46464c]">{site.hizmetler[i] ?? site.uzmanlik}</p></article>)}</div></div></section></>;
}

function Urunler() {
    return <><IcHero baslik="Makine Parkuru" ust="8–32 METRE ERİŞİM ÇÖZÜMLERİ" /><section className="bg-[#f7f9fb] px-6 py-20"><div className="mx-auto max-w-[1280px]"><div className="grid gap-8 md:grid-cols-3">{urunler.map((u) => <article key={u.baslik} className="overflow-hidden rounded-[4px] border border-[#c6c6cd] bg-white"><div className="relative h-72"><Image src={u.gorsel} alt={u.baslik} fill sizes="33vw" className="object-cover" /></div><div className="p-6"><h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#020617]">{u.baslik}</h2><p className="mt-3 leading-6 text-[#46464c]">{u.metin}</p><a href={`/${u.slug}`} className="mt-6 flex w-full items-center justify-center gap-2 rounded-[2px] bg-[#020617] py-3 font-semibold text-white">Ürünü İncele <Ikon ad="ok" /></a></div></article>)}</div></div></section></>;
}

function Iletisim({ site }: { site: SiteIcerik }) {
    const bolgeler = site.bolge.split(",").map((b) => b.trim());
    return <><IcHero baslik="İletişim" ust="SAHA BİLGİLERİNİZİ PAYLAŞIN" /><section className="px-6 py-20"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.4fr_1fr]"><div className="rounded-[4px] bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"><h2 className="font-['Montserrat'] text-[24px] font-semibold text-[#020617]">Bize Mesaj Gönderin</h2><div className="mt-6"><TemaForm eposta={site.eposta} konu={`Kütahya Platform Teklif Talebi — ${site.h1}`} opsiyonlar={bolgeler} cls={{etiket:"mb-2 block text-[14px] font-semibold text-[#020617]",alan:"w-full rounded-[2px] border border-[#c6c6cd] bg-[#f7f9fb] p-3 outline-none focus:border-[#1D4ED8]",buton:"w-full rounded-[2px] bg-[#020617] px-8 py-4 font-bold text-white hover:bg-[#1D4ED8]",izgara:"grid gap-5 md:grid-cols-2"}} /></div></div><aside className="rounded-[4px] bg-[#020617] p-8 text-white"><h2 className="font-['Montserrat'] text-[24px] font-semibold">İletişim Bilgileri</h2><a href={`tel:${site.telefon}`} className="mt-8 flex gap-4"><span className="text-[#67E8F9]"><Ikon ad="telefon" /></span><span>{site.telefonGosterim}</span></a><a href={`mailto:${site.eposta}`} className="mt-6 flex gap-4 break-all"><span className="text-[#67E8F9]"><Ikon ad="posta" /></span><span>{site.eposta}</span></a><div className="mt-6 flex gap-4"><span className="text-[#67E8F9]"><Ikon ad="konum" /></span><span>{site.bolge}</span></div><div className="mt-6 flex gap-4"><span className="text-[#67E8F9]"><Ikon ad="saat" /></span><span>Hafta içi 08.00–18.00</span></div></aside></div></section></>;
}

function BlogListe({ site }: { site: SiteIcerik }) {
    const yazilar = hostBloglari(site.host);
    return <><IcHero baslik="Eğitici Blog" ust="SEKTÖREL BİLGİLER VE REHBERLER" /><section className="px-6 py-20"><div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-2 lg:grid-cols-3">{yazilar.map((y) => <article key={y.slug} className="overflow-hidden rounded-[4px] border border-[#c6c6cd] bg-white"><div className="relative h-56"><Image src={y.gorsel} alt={y.gorselAlt} fill sizes="33vw" className="object-cover" /></div><div className="p-6"><span className="text-[12px] font-bold tracking-[0.1em] text-[#1D4ED8]">{y.kategori.toUpperCase()}</span><h2 className="mt-3 font-['Montserrat'] text-[20px] font-semibold text-[#020617]">{y.baslik}</h2><p className="mt-3 line-clamp-3 text-[14px] leading-5 text-[#46464c]">{y.ozet}</p><a href={`/blog/${y.slug}`} className="mt-5 flex items-center gap-2 font-semibold text-[#1D4ED8]">Devamını Oku <Ikon ad="ok" /></a></div></article>)}</div></section></>;
}

function IcHero({ baslik, ust }: { baslik: string; ust: string }) {
    return <section className="bg-[#020617] px-6 py-20 text-white"><div className="mx-auto max-w-[1280px]"><p className="text-[12px] font-bold tracking-[0.12em] text-[#67E8F9]">{ust}</p><h1 className="mt-4 font-['Montserrat'] text-[40px] font-bold leading-[48px]">{baslik}</h1></div></section>;
}

export const kutahyaTema: TemaModulu = {
    Cerceve,
    AnaSayfa,
    sayfalar: { hakkimizda: Hakkimizda, iletisim: Iletisim, urunler: Urunler },
    BlogListe,
};

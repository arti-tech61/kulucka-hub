import Image from "next/image";
import { tumBloglar } from "@/lib/tum-bloglar";
import Link from "next/link";
import type { SiteIcerik } from "@/lib/siteler";
import { ikinciTelefon } from "@/lib/siteler";
import { urunKatalogu } from "@/lib/urun-katalogu";
import { bolgeSayfalari } from "@/lib/bolge-sayfalari";
import { hostBloglari } from "@/lib/blog";
import { paylasilanBlogYazilari } from "@/lib/paylasilan-blog";
import { anahtarKelimeSayfalari } from "@/lib/anahtar-kelime-sayfalari";
import { hizmetKonusuBul } from "@/lib/hizmet-konulari";
import { TemaForm, type TemaFormClass } from "../tema-form";
import { Ikon, IkonWhatsapp } from "./ikonlar";

// Kutu hover'ında doğrudan (kaymasız) tema-renkli dolgu — metin de aynı anda
// accent-fg'ye geçer (bkz. renkler.ts accentFg, her domain için elle
// kontrast-güvenli seçilmiş kontrast rengi — dolgu her zaman okunabilir kalır).
const KART_SWEEP =
    "group transition-colors duration-150 motion-reduce:transition-none hover:bg-accent focus-visible:bg-accent";
const KART_METIN = "transition-colors duration-150 motion-reduce:transition-none group-hover:text-accent-fg group-focus-visible:text-accent-fg";
const KART_METIN_SOLUK = "transition-colors duration-150 motion-reduce:transition-none group-hover:text-accent-fg/80 group-focus-visible:text-accent-fg/80";

// Google Drive "İş resimleri" klasöründen indirilen gerçek Artı Platform saha
// fotoğrafları (bkz. public/media/isler/) — anahtar kelime eşleştirmesiyle her
// hizmet metnine en uygun gerçek fotoğraf atanır, tekdüze ikon yerine.
const HIZMET_GORSELLERI: { anahtarlar: string[]; src: string; alt: string }[] = [
    { anahtarlar: ["sepetli", "örümcek", "orumcek", "tırtıl"], src: "/media/isler/is-9.jpg", alt: "Örümcek platform ile sahada erişim çalışması" },
    { anahtarlar: ["nakliye", "teslimat", "sevkiyat", "taşıma", "tasima"], src: "/media/isler/is-12.jpg", alt: "Kamyonla saha teslimatı ve nakliye" },
    { anahtarlar: ["forklift", "istifleme", "palet", "yük taşıma", "yuk tasima"], src: "/media/isler/is-3.jpg", alt: "Forklift ve makaslı platform ile saha çalışması" },
    { anahtarlar: ["eklemli", "boom", "akrobat", "manlift"], src: "/media/isler/is-7.jpg", alt: "Eklemli platform ile yükleme alanı çalışması" },
    { anahtarlar: ["iç mekan", "ic mekan", "depo içi", "depo ici", "tesisat", "tavan", "boru", "avm", "fabrika içi", "fabrika ici", "hastane"], src: "/media/isler/is-10.jpg", alt: "Fabrika içi tesisat ve tavan çalışması" },
    { anahtarlar: ["çelik", "celik", "konstrüksiyon", "konstruksiyon", "montaj", "cephe", "sanayi holü", "sanayi holu"], src: "/media/isler/is-1.jpg", alt: "Sanayi holünde çelik konstrüksiyon montaj çalışması" },
    { anahtarlar: ["tarım", "tarim", "silo", "kırsal", "kirsal", "çiftlik", "ciftlik", "sera"], src: "/media/isler/is-2.jpg", alt: "Kırsal sahada çelik konstrüksiyon çalışması" },
    { anahtarlar: ["enerji", "aydınlatma", "aydinlatma", "elektrik", "direk", "hat", "santral"], src: "/media/isler/is-11.jpg", alt: "Tabela ve aydınlatma bakımı için sahada erişim" },
    { anahtarlar: ["operatörlü", "operatorlu", "operatörsüz", "operatorsuz"], src: "/media/isler/is-14.jpg", alt: "Operatörlü platform teslimatı ve saha kontrolü" },
    { anahtarlar: ["dağınık", "daginik", "çok noktalı", "cok noktali", "rota", "güzergah", "guzergah"], src: "/media/isler/is-6.jpg", alt: "Çok noktalı bakım rotasında platform çalışması" },
    { anahtarlar: ["zemin", "arazi", "hazırlıksız", "hazirliksiz", "engebeli"], src: "/media/isler/is-8.jpg", alt: "Zorlu zemin koşullarında makine parkı" },
];
const HIZMET_VARSAYILAN = { src: "/media/isler/is-13.jpg", alt: "Artı Platform saha çalışması" };
// is-9.jpg (örümcek/sepetli platform) kasıtlı olarak dışarıda bırakıldı —
// yalnızca kendi anahtar kelimesiyle eşleştiğinde gösterilsin, rastgele
// dolgu fotoğrafı olarak alakasız hizmet metinlerine düşmesin.
const TUM_GORSELLER = [...HIZMET_GORSELLERI.map((g) => ({ src: g.src, alt: g.alt })), HIZMET_VARSAYILAN, { src: "/media/isler/is-4.jpg", alt: "Artı Platform saha çalışması" }, { src: "/media/isler/is-5.jpg", alt: "Artı Platform saha çalışması" }].filter((g) => g.src !== "/media/isler/is-9.jpg");

function hizmetGorseli(h: string, kullanilanlar: Set<string>) {
    const t = h.toLocaleLowerCase("tr-TR");
    const skorlu = HIZMET_GORSELLERI
        .map((g) => ({ g, skor: g.anahtarlar.filter((a) => t.includes(a)).length }))
        .filter((x) => x.skor > 0)
        .sort((a, b) => b.skor - a.skor);
    const secili =
        skorlu.find((x) => !kullanilanlar.has(x.g.src))?.g
        ?? TUM_GORSELLER.find((g) => !kullanilanlar.has(g.src))
        ?? skorlu[0]?.g
        ?? HIZMET_VARSAYILAN;
    kullanilanlar.add(secili.src);
    return secili;
}

const formCls: TemaFormClass = {
    etiket: "mb-2 block font-semibold text-fg",
    alan: "w-full rounded-lg border border-border bg-bg p-3 text-fg outline-none focus:border-accent",
    buton: "w-full rounded-lg bg-accent px-6 py-3 font-bold text-accent-fg hover:bg-accent-hover",
    izgara: "grid gap-5 sm:grid-cols-2",
};

export function HizmetlerBolumu({ site }: { site: SiteIcerik }) {
    const hizmetler = site.hizmetler.slice(0, 6);
    const kullanilanlar = new Set<string>();
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-2xl">
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Hizmet Kapsamımız</span>
                    <h2 className="mt-2 font-display text-[32px] font-bold text-fg md:text-[40px]">Hizmetlerimiz</h2>
                    <p className="mt-3 text-muted">{site.uzmanlik} için doğru makine seçimi ve yazılı teklif süreci.</p>
                </div>
                <a href="/urunler" className="hidden items-center gap-2 font-bold text-accent hover:text-accent-hover sm:inline-flex">
                    Tüm makine kategorilerini görün
                    <Ikon ad="ok" className="h-4 w-4" />
                </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {hizmetler.map((h) => {
                    const gorsel = hizmetGorseli(h, kullanilanlar);
                    const konu = hizmetKonusuBul(h);
                    return (
                        <Link
                            key={h}
                            href={`/hizmet/${konu.slug}`}
                            className={`group block overflow-hidden rounded-2xl border border-border bg-elevated shadow-sm transition-shadow duration-150 hover:shadow-lg motion-reduce:transition-none ${KART_SWEEP}`}
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg">
                                <Image
                                    src={gorsel.src}
                                    alt={gorsel.alt}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover object-[center_65%] transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                                />
                                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-950 shadow-sm">
                                    <Ikon ad="onay" className="h-3.5 w-3.5 text-primary" />
                                    {konu.baslikTaban}
                                </span>
                            </div>
                            <div className="flex items-start justify-between gap-3 p-5">
                                <p className={`line-clamp-2 leading-6 text-fg ${KART_METIN}`}>{h}</p>
                                <span className={`mt-0.5 shrink-0 text-muted transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none ${KART_METIN_SOLUK}`}>
                                    <Ikon ad="ok" className="h-4 w-4" />
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <a href="/urunler" className="mt-8 inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover sm:hidden">
                Tüm makine kategorilerini görün
                <Ikon ad="ok" className="h-4 w-4" />
            </a>
        </section>
    );
}

// Ana sayfada gösterilecek temsilci ürünler (her kategoriden orta segment bir
// sınıf) — tam liste (25 ürün, tüm metrajlar) yalnızca /urunler sayfasında.
const ANA_SAYFA_TEMSILCILERI = [
    "makasli-platform-12m-kiralama",
    "eklemli-platform-20m-kiralama",
    "teleskopik-platform-22m-kiralama",
    "dizel-forklift-3-5-ton-kiralama",
    "orumcek-platform-18m-kiralama",
    "telehandler-14m-kiralama",
];

// Görseller ve teknik özellikler tüm domain'lerde ortaktır (urun-katalogu.ts);
// yalnızca açıklama metni site.bolge/uzmanlik/h1'den türetilerek domain'e özel
// hale gelir — kopya içerik oluşmaz.
export function UrunlerBolumu({ site, tumunuGoster = false }: { site: SiteIcerik; tumunuGoster?: boolean }) {
    const bolgeIlk = site.bolge.split(",")[0].trim();
    const gosterilecekler = tumunuGoster ? urunKatalogu : urunKatalogu.filter((u) => ANA_SAYFA_TEMSILCILERI.includes(u.slug));
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <div className="mb-6 max-w-2xl">
                <h2 className="font-display text-[32px] font-bold text-fg md:text-[40px]">
                    {bolgeIlk} Kiralık Makine Parkuru
                </h2>
                <p className="mt-3 text-muted">Makaslı platform, eklemli platform ve forklift — {site.uzmanlik} için doğru sınıfı birlikte belirliyoruz.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {gosterilecekler.map((urun) => (
                    <a key={urun.ad} id={urun.slug} href={`/urunler/${urun.slug}`} className={`scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-elevated ${KART_SWEEP}`}>
                        {/* Ürün görselleri farklı en-boy oranlarına sahip (bkz. urun-katalogu.ts);
                            object-contain + sabit yükseklikli nötr zemin, hiçbir görseli kırpmadan
                            tam sığdırır. */}
                        <div className="relative h-56 w-full overflow-hidden bg-bg">
                            <Image
                                src={urun.gorsel}
                                alt={`${urun.ad} kiralama - ${bolgeIlk}`}
                                fill
                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className={`font-display text-[22px] font-bold text-fg ${KART_METIN}`}>{urun.ad} Kiralama</h3>
                            <p className={`mt-2 leading-6 text-muted ${KART_METIN_SOLUK}`}>{urun.aciklamaSablonu(site)}</p>
                            <div className={`mt-4 flex flex-wrap gap-4 text-sm text-muted ${KART_METIN_SOLUK}`}>
                                {urun.ozellikler.map(([etiket, deger]) => (
                                    <span key={etiket}>
                                        <strong className={`text-fg ${KART_METIN}`}>{etiket}:</strong> {deger}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            {!tumunuGoster && (
                <a href="/urunler" className="mt-8 inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
                    Tüm metrajları ve makine sınıflarını görün ({urunKatalogu.length} ürün)
                    <Ikon ad="ok" className="h-4 w-4" />
                </a>
            )}
        </section>
    );
}

export function BolgeBolumu({ site }: { site: SiteIcerik }) {
    const bolgeSayfaListesi = bolgeSayfalari(site);
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <div className="mb-6 max-w-2xl">
                <h2 className="font-display text-[32px] font-bold text-fg md:text-[40px]">Hizmet Bölgelerimiz</h2>
                <p className="mt-3 text-muted">Her bölgenin kendi saha koşulları vardır — detaylar için bölgenizi seçin.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {bolgeSayfaListesi.map((b) => (
                    <a key={b.slug} href={`/bolge/${b.slug}`} className={`flex items-center justify-between gap-3 rounded-2xl bg-elevated px-6 py-5 ${KART_SWEEP}`}>
                        <span className={`flex items-center gap-3 font-bold text-fg ${KART_METIN}`}>
                            <Ikon ad="konum" className={`h-4 w-4 shrink-0 text-accent ${KART_METIN}`} />
                            {b.bolgeAdi}
                        </span>
                        <Ikon ad="ok" className={`h-4 w-4 shrink-0 text-muted ${KART_METIN_SOLUK}`} />
                    </a>
                ))}
            </div>
        </section>
    );
}

export function IletisimKarti({ site }: { site: SiteIcerik }) {
    const bolgeler = site.bolge.split(",").map((s) => s.trim());
    const digerHat = ikinciTelefon(site);
    type Kart = { baslik: string; ikon: "telefon" | "posta" | "konum"; deger: string; href: string; whatsapp?: string };
    const kartlar: Kart[] = [
        ...(site.telefon ? [{ baslik: "Telefon (Hat 1)", ikon: "telefon" as const, deger: site.telefonGosterim, href: `tel:${site.telefon}`, whatsapp: site.telefon }] : []),
        ...(digerHat ? [{ baslik: "Telefon (Hat 2)", ikon: "telefon" as const, deger: digerHat.telefonGosterim, href: `tel:${digerHat.telefon}`, whatsapp: digerHat.telefon }] : []),
        { baslik: "E-posta", ikon: "posta" as const, deger: site.eposta, href: `mailto:${site.eposta}` },
        { baslik: "Bölge", ikon: "konum" as const, deger: site.bolge, href: "#" },
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div className="space-y-5">
                    {kartlar.map((k) => (
                        <div key={k.baslik} className="flex items-center gap-3">
                            <a href={k.href} className={`flex flex-1 items-center gap-4 rounded-2xl bg-elevated p-6 ${KART_SWEEP}`}>
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-bg">
                                    <Ikon ad={k.ikon} className="h-5 w-5" />
                                </span>
                                <div>
                                    <h3 className={`font-display text-fg ${KART_METIN}`}>{k.baslik}</h3>
                                    <p className={`mt-1 break-all text-muted ${KART_METIN_SOLUK}`}>{k.deger}</p>
                                </div>
                            </a>
                            {k.whatsapp && (
                                <a href={`https://wa.me/${k.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile yazın" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                                    <IkonWhatsapp className="h-5 w-5" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <div className="rounded-2xl bg-elevated p-8">
                    <h2 className="mb-6 font-display text-[24px] font-bold text-fg">Teklif Talebi Gönderin</h2>
                    <TemaForm eposta={site.eposta} konu={`${site.h1} - Teklif Talebi`} opsiyonlar={bolgeler} cls={formCls} />
                </div>
            </div>
        </section>
    );
}

// Not: dış <main> etiketi yok — Cerceve zaten {children}'ı kendi <main>'i içinde
// render ediyor, burada ikinci bir <main> anlamsal olarak yanlış (iç içe main) olurdu.
export function MetinSayfasi({ site, baslik }: { site: SiteIcerik; baslik: string }) {
    return (
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-8">
            <h1 className="font-display text-[36px] font-bold text-fg md:text-[44px]">{baslik}</h1>
            <div className="mt-8 space-y-5">
                {site.paragraflar.map((p, i) => (
                    <p key={i} className="leading-7 text-muted">
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
}

// Google'ın "Yerel haberler" kart ızgarasına benzer, kompakt 3x5 blog kartı
// ızgarası — Hizmet Bölgelerimiz'in hemen üstünde, ana sayfada blog trafiğine
// iç link sağlar.
export function BlogOneCikanlar({ site }: { site: SiteIcerik }) {
    const bespoke = hostBloglari(site.host);
    const yazilar = tumBloglar(site).slice(0, 15);
    if (yazilar.length === 0) return null;
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h2 className="font-display text-[32px] font-bold text-fg md:text-[40px]">Blog&apos;dan Öne Çıkanlar</h2>
                    <p className="mt-3 text-muted">Makine seçimi, saha uygulaması ve maliyet üzerine güncel rehberler.</p>
                </div>
                <a href="/blog" className="inline-flex items-center gap-2 font-bold text-accent hover:text-accent-hover">
                    Tüm yazıları görün
                    <Ikon ad="ok" className="h-4 w-4" />
                </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {yazilar.map((y) => (
                    <a key={y.slug} href={`/blog/${y.slug}`} className={`flex gap-3 rounded-xl border border-border bg-elevated p-3 ${KART_SWEEP}`}>
                        <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-bg">
                            <Image src={y.gorsel} alt={y.gorselAlt} fill sizes="80px" className="object-cover" />
                        </div>
                        <div className="min-w-0">
                            <span className={`text-[11px] font-bold uppercase tracking-wide text-accent ${KART_METIN}`}>{y.kategori}</span>
                            <p className={`mt-0.5 line-clamp-2 text-sm font-bold leading-snug text-fg ${KART_METIN}`}>{y.baslik}</p>
                            <span className={`mt-1 block text-xs text-muted ${KART_METIN_SOLUK}`}>{y.okuma} dk okuma</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export function AnaSayfaGovde({ site }: { site: SiteIcerik }) {
    return (
        <>
            <UrunlerBolumu site={site} />
            <HizmetlerBolumu site={site} />
            <BlogOneCikanlar site={site} />
            <BolgeBolumu site={site} />
            <IletisimKarti site={site} />
        </>
    );
}

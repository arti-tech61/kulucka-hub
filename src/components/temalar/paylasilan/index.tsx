import Image from "next/image";
import type { SiteIcerik } from "@/lib/siteler";
import type { TemaModulu } from "../tipler";
import type { PaylasilanTemaConfig } from "./renkler";
import { olusturCerceve } from "./cerceve";
import { Hero } from "./hero";
import { AnaSayfaGovde, IletisimKarti, UrunlerBolumu } from "./bolumler";
import { Ikon } from "./ikonlar";

const HAKKIMIZDA_GORSELLERI = ["/media/isler/is-1.jpg", "/media/isler/is-9.jpg", "/media/isler/is-14.jpg"];

export type { PaylasilanTemaConfig, PaylasilanRenkler } from "./renkler";

// Paylaşımlı tema factory'si: tek bileşen ağacı, domain başına yalnızca `config`
// (renk + marka + logo) değişir. Yeni bir domain eklemek = paylasilan-tema-konfig.ts'e
// birkaç satırlık bir config girmek; bu dosyada veya bileşenlerde değişiklik gerekmez.
export function olusturPaylasilanTema(config: PaylasilanTemaConfig): TemaModulu {
    const Cerceve = olusturCerceve(config);

    function AnaSayfa({ site }: { site: SiteIcerik }) {
        return (
            <>
                <Hero site={site} />
                <AnaSayfaGovde site={site} />
            </>
        );
    }

    function Hakkimizda({ site }: { site: SiteIcerik }) {
        const bolgeler = site.bolge.split(",").map((s) => s.trim());
        return (
            <div>
                <section className="mx-auto grid max-w-7xl gap-10 px-6 pt-10 md:grid-cols-2 md:px-8 md:pt-12">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Hakkımızda</p>
                        <h1 className="mt-3 font-display text-[36px] font-bold text-fg md:text-[44px]">{site.h1}</h1>
                        <p className="mt-5 leading-7 text-muted">{site.paragraflar[0]}</p>
                    </div>
                    <div className="relative min-h-[260px] overflow-hidden rounded-2xl">
                        <Image src={HAKKIMIZDA_GORSELLERI[0]} alt={`${site.h1} saha çalışması`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        {site.paragraflar.slice(1, 3).map((p, i) => (
                            <div key={p} className="overflow-hidden rounded-2xl bg-elevated md:col-span-1">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                                    <Image src={HAKKIMIZDA_GORSELLERI[(i + 1) % HAKKIMIZDA_GORSELLERI.length]} alt={`${site.h1} saha detayı`} fill sizes="33vw" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-bg">
                                        <Ikon ad="onay" className="h-5 w-5" />
                                    </span>
                                    <p className="mt-4 leading-6 text-fg">{p}</p>
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col justify-center rounded-2xl bg-accent p-8 text-accent-fg">
                            <h2 className="font-display text-[24px] font-bold">Hizmet Bölgelerimiz</h2>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {bolgeler.map((b) => (
                                    <span key={b} className="rounded-full bg-accent-fg/15 px-3 py-1 text-sm font-semibold">{b}</span>
                                ))}
                            </div>
                            <a href="/iletisim" className="mt-6 inline-flex w-fit items-center gap-2 rounded-[8px] bg-accent-fg px-5 py-2.5 font-bold text-accent">
                                Saha Bilgisi Paylaşın
                                <Ikon ad="ok" className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 pb-10 md:px-8">
                    <div className="grid gap-5 md:grid-cols-2">
                        {site.hizmetler.slice(0, 4).map((h) => (
                            <div key={h} className="flex items-start gap-4 rounded-2xl border border-border bg-elevated p-6">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-bg">
                                    <Ikon ad="onay" className="h-5 w-5" />
                                </span>
                                <p className="leading-6 text-fg">{h}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 pb-12 md:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-bg md:p-12">
                        <div>
                            <h2 className="font-display text-[26px] font-bold">Doğru Makineyi Birlikte Seçelim</h2>
                            <p className="mt-2 max-w-xl text-bg/75">{site.uzmanlik} için yükseklik, zemin ve erişim bilgilerinizi paylaşın; uygun makine sınıfı yazılı teklifte netleşsin.</p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <a href="/urunler" className="rounded-[8px] bg-accent px-6 py-3 font-bold text-accent-fg hover:bg-accent-hover">
                                Makine Parkurunu İnceleyin
                            </a>
                            <a href="/iletisim" className="rounded-[8px] border border-bg/30 px-6 py-3 font-bold text-bg hover:bg-bg/10">
                                Teklif İsteyin
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    function Iletisim({ site }: { site: SiteIcerik }) {
        return (
            <div>
                <div className="mx-auto max-w-7xl px-6 pt-10 md:px-8">
                    <h1 className="font-display text-[36px] font-bold text-fg md:text-[44px]">İletişim</h1>
                    <p className="mt-3 text-muted">{site.bolge} bölgesinde saha bilgilerinizi paylaşın, yazılı teklif hazırlayalım.</p>
                </div>
                <IletisimKarti site={site} />
            </div>
        );
    }

    function Urunler({ site }: { site: SiteIcerik }) {
        return (
            <div>
                <div className="mx-auto max-w-7xl px-6 pt-10 md:px-8">
                    <h1 className="font-display text-[36px] font-bold text-fg md:text-[44px]">Ürünlerimiz</h1>
                    <p className="mt-3 text-muted">{site.uzmanlik} için doğru makine sınıfını birlikte belirliyoruz.</p>
                </div>
                <UrunlerBolumu site={site} tumunuGoster />
            </div>
        );
    }

    return {
        Cerceve,
        AnaSayfa,
        sayfalar: {
            hakkimizda: Hakkimizda,
            iletisim: Iletisim,
            urunler: Urunler,
        },
    };
}

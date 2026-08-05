import type { SiteIcerik } from "@/lib/siteler";
import type { TemaModulu } from "../tipler";
import type { PaylasilanTemaConfig } from "./renkler";
import { olusturCerceve } from "./cerceve";
import { Hero } from "./hero";
import { AnaSayfaGovde, HizmetlerBolumu, IletisimKarti, MetinSayfasi } from "./bolumler";

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
        return <MetinSayfasi site={site} baslik="Hakkımızda" />;
    }

    function Iletisim({ site }: { site: SiteIcerik }) {
        return (
            <div>
                <div className="mx-auto max-w-7xl px-6 pt-16 md:px-8">
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
                <div className="mx-auto max-w-7xl px-6 pt-16 md:px-8">
                    <h1 className="font-display text-[36px] font-bold text-fg md:text-[44px]">Ürünlerimiz</h1>
                </div>
                <HizmetlerBolumu site={site} />
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

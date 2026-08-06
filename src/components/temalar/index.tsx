import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { TicariCerceve } from "@/components/ticari-cerceve";
import type { TemaModulu } from "./tipler";
import { olusturPaylasilanTema } from "./paylasilan";
import { paylasilanTemaKonfigleri } from "@/lib/paylasilan-tema-konfig";

// Tüm domainler artık tek paylaşımlı tema ağacını kullanıyor; host'a göre yalnızca
// renk/marka/logo değişir (bkz. src/lib/paylasilan-tema-konfig.ts). Eskiden 9 domain
// hand-written bespoke tema kullanıyordu — hepsi paylaşımlı temaya taşındı (tutarlı
// kalite + tek yerden bakım). Kayıtlı olmayan host'lar varsayılan TicariCerceve'yi kullanır.
const TEMALAR: Record<string, TemaModulu> = {
    ...Object.fromEntries(
        Object.entries(paylasilanTemaKonfigleri).map(([host, cfg]) => [host, olusturPaylasilanTema(cfg)])
    ),
};

export function temaModulu(host: string): TemaModulu | undefined {
    return TEMALAR[host];
}

export function ozelTemaVar(host: string): boolean {
    return host in TEMALAR;
}

// Sayfa gövdesini doğru çerçeveyle (temalı Cerceve ya da varsayılan TicariCerceve) sarmalar.
export function Kabuk({ host, site, aktif, children }: { host: string; site: SiteIcerik; aktif?: string; children: ReactNode }) {
    const tema = TEMALAR[host];
    if (tema) {
        const Cerceve = tema.Cerceve;
        return <Cerceve site={site} aktif={aktif}>{children}</Cerceve>;
    }
    return <TicariCerceve site={site}>{children}</TicariCerceve>;
}

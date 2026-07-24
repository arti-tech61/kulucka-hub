import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";
import { TicariCerceve } from "@/components/ticari-cerceve";
import type { TemaModulu } from "./tipler";
import { aydinTema } from "./aydin";
import { platformmanisaTema } from "./platformmanisa";
import { manisaforkliftTema } from "./manisaforklift";
import { kutahyaTema } from "./kutahya";
import { bilecikTema } from "./bilecik";
import { bozuyukTema } from "./bozuyuk";
import { canakkaleTema } from "./canakkale";

// Host'a özel Stitch temaları. Kayıtlı olmayan host'lar varsayılan TicariCerceve'yi kullanır.
const TEMALAR: Record<string, TemaModulu> = {
    "aydinplatform.net": aydinTema,
    "platformmanisa.com": platformmanisaTema,
    "manisaforklift.com": manisaforkliftTema,
    "kutahyaplatform.com": kutahyaTema,
    "bilecikplatform.com": bilecikTema,
    "bozuyukplatform.com.tr": bozuyukTema,
    "canakkaleplatform.com": canakkaleTema,
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

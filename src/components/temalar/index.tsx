import type { SiteIcerik } from "@/lib/siteler";
import { AydinTema } from "./aydin";

// Host'a özel Stitch temaları. Kayıtlı olmayan host'lar varsayılan TicariCerceve'yi kullanır.
const TEMALAR: Record<string, (props: { site: SiteIcerik }) => React.ReactNode> = {
    "aydinplatform.net": AydinTema,
};

export function ozelTemaVar(host: string): boolean {
    return host in TEMALAR;
}

export function OzelTema({ host, site }: { host: string; site: SiteIcerik }) {
    const Tema = TEMALAR[host];
    return Tema ? <Tema site={site} /> : null;
}

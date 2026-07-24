import type { ReactNode } from "react";
import type { SiteIcerik } from "@/lib/siteler";

// Her domain teması bu arayüzü uygular. Çerçeve (header+footer) ortaktır;
// her sayfa gövdesi Çerçeve İÇİNDE render edilir (kendi header/footer'ı OLMAZ).
export interface TemaModulu {
    // Ortak header + footer + font <link> + (varsa) FAB. children ortada render edilir.
    // `aktif`: aktif menü yolu (örn. "/", "/hakkimizda") — nav vurgusu için.
    Cerceve: (props: { site: SiteIcerik; aktif?: string; children: ReactNode }) => ReactNode;
    // Ana sayfa gövdesi (/).
    AnaSayfa: (props: { site: SiteIcerik }) => ReactNode;
    // Slug bazlı sayfa gövdeleri: "hakkimizda", "iletisim", "urunler" ve ürün alt-sayfa slug'ları.
    sayfalar?: Record<string, (props: { site: SiteIcerik }) => ReactNode>;
    // /blog listeleme gövdesi (opsiyonel; yoksa varsayılan listeleme kullanılır).
    BlogListe?: (props: { site: SiteIcerik }) => ReactNode;
}

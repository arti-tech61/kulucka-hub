import type { PaylasilanTemaConfig } from "@/components/temalar/paylasilan";

// Host -> paylaşımlı tema config'i. Yeni bir domain'i paylaşımlı temaya bağlamak
// için buraya birkaç satırlık bir entry eklemek yeterli; component kodu değişmez.
// NOT: her host aynı zamanda src/lib/siteler.ts (SiteIcerik + ticariSeoProfilleri)
// içinde de tanımlı olmalı, VE src/lib/hazirlanan-siteler.ts'te KAYITLI OLMAMALI
// (hazırlanan-siteler kontrolü page.tsx'te bu temadan önce çalışır ve varsa
// içeriği sessizce maskeler).
export const paylasilanTemaKonfigleri: Record<string, PaylasilanTemaConfig> = {
    // Pilot domain — logo 4 (yeşil, /public/media/logolar/4.png), Bolu'nun
    // orman/doğa kimliğiyle uyumlu accent rengi.
    "boluplatform.com": {
        markaAdi: "Bolu Platform",
        logoUrl: "/media/logolar/4.png",
        renkler: {
            primary: "#0a1525",
            primaryLight: "#16233a",
            accent: "#00aa4f",
            accentHover: "#00923f",
            accentFg: "#ffffff",
            bg: "#ffffff",
            fg: "#0a1525",
            muted: "#6b7280",
            elevated: "#f3f4f6",
            border: "#e5e7eb",
        },
    },
};

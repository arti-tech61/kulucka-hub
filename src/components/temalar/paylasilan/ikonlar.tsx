// Paylaşılan ikon seti — mevcut temalardaki (bkz. bozuyuk.tsx) inline-SVG deseniyle
// aynı yaklaşım: harici ikon kütüphanesi eklemeden, hafif ve tutarlı.
const yollar = {
    telefon: "M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.06 10.91a16 16 0 0 0 4 4l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
    posta: "M4 4h16v16H4zM22 6l-10 7L2 6",
    konum: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    onay: "M20 6L9 17l-5-5",
    ok: "M5 12h14M13 5l7 7-7 7",
    yildirim: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
} as const;

export function Ikon({ ad, className = "h-5 w-5" }: { ad: keyof typeof yollar; className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={yollar[ad]} />
        </svg>
    );
}

// WhatsApp logosu dolu (fill) çizimle kullanılır, diğer ikonlar gibi stroke değil.
export function IkonWhatsapp({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.16c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.29.38-.24.63-.14.26.09 1.66.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
        </svg>
    );
}

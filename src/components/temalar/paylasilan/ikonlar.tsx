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

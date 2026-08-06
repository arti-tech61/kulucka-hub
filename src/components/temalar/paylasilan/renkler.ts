// Paylaşımlı tema renk/marka konfigürasyonu. Tek bileşen ağacı, domain başına
// bu küçük config değişir — component kodu hiçbir zaman değişmez.
export interface PaylasilanRenkler {
    primary: string;      // koyu marka rengi — başlıklar, footer, buton metni
    primaryLight: string; // primary'nin açık tonu — ikincil vurgular
    accent: string;       // CTA/vurgu rengi
    accentHover: string;  // accent hover durumu
    accentFg: string;     // accent zemin üzerindeki metin rengi (kontrast)
    bg: string;            // sayfa zemini
    fg: string;             // ana metin rengi
    muted: string;          // ikincil/soluk metin
    elevated: string;       // kart/bölüm zemin rengi (bg'den bir ton koyu)
    border: string;         // ince kenarlık rengi
}

export interface PaylasilanTemaConfig {
    markaAdi: string;           // header/footer'da görünen kısa marka adı
    renkler: PaylasilanRenkler;
    logoUrl?: string;            // /media/logolar/N.png — verilmezse header'da yalnız markaAdi metni gösterilir
    fontDisplay?: string;        // Google Fonts aile adı — başlıklar (varsayılan: Oswald)
    fontSans?: string;           // Google Fonts aile adı — gövde metni (varsayılan: Manrope)
    // Gerçek marka fotoğrafları (ör. kendi ürün/showroom görselleri) olan domainler
    // için — verilirse ana sayfada jenerik saha fotoğrafları yerine bu galeri gösterilir.
    // {src, alt} — src /media/... yolu, alt SEO/erişilebilirlik metni.
    galeriGorselleri?: { src: string; alt: string }[];
}

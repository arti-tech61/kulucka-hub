export type NavLink = [href: string, etiket: string];
export type NavGrup = { etiket: string; ogeler: NavLink[] };
export type NavOge = NavLink | NavGrup;

// Kurumsal hiyerarşi: birincil dönüşüm/yön bulma öğeleri düz linktir; ürün
// çeşitleri ve ikincil SEO araçları (blog, sözlük) alt gruplara toplanır —
// 8 eşit ağırlıklı linkten 5 birincil öğeye iner.
export const navBaslik: NavOge[] = [
    ["/", "Ana Sayfa"],
    {
        etiket: "Ürünler",
        ogeler: [
            ["/urunler", "Tüm Ürünler"],
            ["/markalar", "Markalar"],
            ["/yukseklik", "Yüksekliğe Göre"],
        ],
    },
    {
        etiket: "Kaynaklar",
        ogeler: [
            ["/blog", "Blog"],
            ["/sozluk", "Sözlük"],
        ],
    },
    ["/hakkimizda", "Hakkımızda"],
    ["/iletisim", "İletişim"],
];

// Footer geleneksel olarak düz bir link listesi kullanır — tüm alt sayfalar
// tek seferde görünür olmalı, dropdown gerekmez.
export const navFooter: NavLink[] = [
    ["/hakkimizda", "Hakkımızda"],
    ["/urunler", "Ürünler"],
    ["/markalar", "Markalar"],
    ["/yukseklik", "Yüksekliğe Göre"],
    ["/blog", "Blog"],
    ["/sozluk", "Sözlük"],
    ["/iletisim", "İletişim"],
];

export function navOgeAktifMi(oge: NavOge, aktif: string): boolean {
    return Array.isArray(oge) ? oge[0] === aktif : oge.ogeler.some(([href]) => href === aktif);
}

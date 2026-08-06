// "Hizmetlerimiz" kart ızgarasındaki her madde (site.hizmetler — serbest metin)
// bu sabit konu listesinden birine anahtar kelimeyle eşleşir; hem kart görseli
// (bkz. paylasilan/bolumler.tsx) hem de /hizmet/[slug] SEO/GEO landing sayfası
// aynı eşleşmeyi kullanır — tek kaynak, iki tüketici.
export interface HizmetKonusu {
    slug: string;
    anahtarlar: string[];
    baslikTaban: string; // "{il} İçin X" gibi kalıplarda kullanılan kısa başlık
    gorsel: string;
    gorselAlt: string;
}

export const HIZMET_KONULARI: HizmetKonusu[] = [
    { slug: "sepetli-orumcek-platform-kiralama", anahtarlar: ["sepetli", "örümcek", "orumcek", "tırtıl"], baslikTaban: "Sepetli / Örümcek Platform Kiralama", gorsel: "/media/isler/is-9.jpg", gorselAlt: "Örümcek platform ile sahada erişim çalışması" },
    { slug: "nakliye-teslimat-hizmeti", anahtarlar: ["nakliye", "teslimat", "sevkiyat", "taşıma", "tasima"], baslikTaban: "Nakliye ve Teslimat Hizmeti", gorsel: "/media/isler/is-12.jpg", gorselAlt: "Kamyonla saha teslimatı ve nakliye" },
    { slug: "forklift-istifleme-kiralama", anahtarlar: ["forklift", "istifleme", "palet", "yük taşıma", "yuk tasima"], baslikTaban: "Forklift ve İstifleme Kiralama", gorsel: "/media/isler/is-3.jpg", gorselAlt: "Forklift ve makaslı platform ile saha çalışması" },
    { slug: "eklemli-platform-boom-kiralama", anahtarlar: ["eklemli", "boom", "akrobat", "manlift"], baslikTaban: "Eklemli Platform (Boom) Kiralama", gorsel: "/media/isler/is-7.jpg", gorselAlt: "Eklemli platform ile yükleme alanı çalışması" },
    { slug: "ic-mekan-depo-platform-kiralama", anahtarlar: ["iç mekan", "ic mekan", "depo içi", "depo ici", "tesisat", "tavan", "boru", "avm", "fabrika içi", "fabrika ici", "hastane"], baslikTaban: "İç Mekân ve Depo İçi Platform Kiralama", gorsel: "/media/isler/is-10.jpg", gorselAlt: "Fabrika içi tesisat ve tavan çalışması" },
    { slug: "celik-konstruksiyon-montaj-platformu", anahtarlar: ["çelik", "celik", "konstrüksiyon", "konstruksiyon", "montaj", "cephe", "sanayi holü", "sanayi holu"], baslikTaban: "Çelik Konstrüksiyon Montaj Platformu", gorsel: "/media/isler/is-1.jpg", gorselAlt: "Sanayi holünde çelik konstrüksiyon montaj çalışması" },
    { slug: "tarim-silo-platform-kiralama", anahtarlar: ["tarım", "tarim", "silo", "kırsal", "kirsal", "çiftlik", "ciftlik", "sera"], baslikTaban: "Tarım ve Silo Sahası Platform Kiralama", gorsel: "/media/isler/is-2.jpg", gorselAlt: "Kırsal sahada çelik konstrüksiyon çalışması" },
    { slug: "enerji-aydinlatma-bakim-platformu", anahtarlar: ["enerji", "aydınlatma", "aydinlatma", "elektrik", "direk", "hat", "santral"], baslikTaban: "Enerji ve Aydınlatma Bakım Platformu", gorsel: "/media/isler/is-11.jpg", gorselAlt: "Tabela ve aydınlatma bakımı için sahada erişim" },
    { slug: "operatorlu-platform-kiralama", anahtarlar: ["operatörlü", "operatorlu", "operatörsüz", "operatorsuz"], baslikTaban: "Operatörlü / Operatörsüz Platform Kiralama", gorsel: "/media/isler/is-14.jpg", gorselAlt: "Operatörlü platform teslimatı ve saha kontrolü" },
    { slug: "cok-noktali-rota-bakim-platformu", anahtarlar: ["dağınık", "daginik", "çok noktalı", "cok noktali", "rota", "güzergah", "guzergah"], baslikTaban: "Çok Noktalı Rota Bakım Platformu", gorsel: "/media/isler/is-6.jpg", gorselAlt: "Çok noktalı bakım rotasında platform çalışması" },
    { slug: "zor-zemin-arazi-platform-kiralama", anahtarlar: ["zemin", "arazi", "hazırlıksız", "hazirliksiz", "engebeli"], baslikTaban: "Zor Zemin / Arazi Platform Kiralama", gorsel: "/media/isler/is-8.jpg", gorselAlt: "Zorlu zemin koşullarında makine parkı" },
];

const VARSAYILAN: HizmetKonusu = { slug: "genel-platform-forklift-kiralama", anahtarlar: [], baslikTaban: "Platform ve Forklift Kiralama", gorsel: "/media/isler/is-13.jpg", gorselAlt: "Artı Platform saha çalışması" };

// hizmet metnindeki (site.hizmetler) serbest metni en yakın konuya eşler.
export function hizmetKonusuBul(hizmetMetni: string): HizmetKonusu {
    const t = hizmetMetni.toLocaleLowerCase("tr-TR");
    const skorlu = HIZMET_KONULARI
        .map((k) => ({ k, skor: k.anahtarlar.filter((a) => t.includes(a)).length }))
        .filter((x) => x.skor > 0)
        .sort((a, b) => b.skor - a.skor);
    return skorlu[0]?.k ?? VARSAYILAN;
}

export function hizmetKonusuSlugIle(slug: string): HizmetKonusu | undefined {
    return HIZMET_KONULARI.find((k) => k.slug === slug) ?? (slug === VARSAYILAN.slug ? VARSAYILAN : undefined);
}

export const TUM_HIZMET_KONULARI = [...HIZMET_KONULARI, VARSAYILAN];

// Türkiye'nin 81 ilinin merkez koordinatları (il merkezi enlem/boylam) — schema.org
// GeoCoordinates için kullanılır. Ayrıca sık geçen büyük ilçe/OSB isimleri de
// kendi koordinatlarıyla eklendi (İkitelli, Tuzla, Gebze gibi — il merkezinden
// belirgin şekilde uzak, ayrı geo etiketi anlamlı olan yerler).
export interface IlKoordinat {
    il: string;
    lat: number;
    lng: number;
}

const IL_KOORDINATLARI: Record<string, IlKoordinat> = {
    adana: { il: "Adana", lat: 37.0, lng: 35.3213 },
    adiyaman: { il: "Adıyaman", lat: 37.7648, lng: 38.2786 },
    afyonkarahisar: { il: "Afyonkarahisar", lat: 38.7507, lng: 30.5567 },
    afyon: { il: "Afyonkarahisar", lat: 38.7507, lng: 30.5567 },
    agri: { il: "Ağrı", lat: 39.7191, lng: 43.0503 },
    amasya: { il: "Amasya", lat: 40.6499, lng: 35.8353 },
    ankara: { il: "Ankara", lat: 39.9334, lng: 32.8597 },
    antalya: { il: "Antalya", lat: 36.8969, lng: 30.7133 },
    artvin: { il: "Artvin", lat: 41.1828, lng: 41.8183 },
    aydin: { il: "Aydın", lat: 37.8444, lng: 27.8458 },
    balikesir: { il: "Balıkesir", lat: 39.6484, lng: 27.8826 },
    bandirma: { il: "Balıkesir", lat: 40.3524, lng: 27.9764 },
    bilecik: { il: "Bilecik", lat: 40.1428, lng: 29.9792 },
    bozuyuk: { il: "Bilecik", lat: 39.9081, lng: 30.0389 },
    bingol: { il: "Bingöl", lat: 38.8853, lng: 40.4989 },
    bitlis: { il: "Bitlis", lat: 38.4006, lng: 42.1095 },
    bolu: { il: "Bolu", lat: 40.5760, lng: 31.5788 },
    burdur: { il: "Burdur", lat: 37.7203, lng: 30.2908 },
    bursa: { il: "Bursa", lat: 40.1826, lng: 29.0665 },
    canakkale: { il: "Çanakkale", lat: 40.1553, lng: 26.4142 },
    cankiri: { il: "Çankırı", lat: 40.6013, lng: 33.6134 },
    corum: { il: "Çorum", lat: 40.5506, lng: 34.9556 },
    denizli: { il: "Denizli", lat: 37.7765, lng: 29.0864 },
    diyarbakir: { il: "Diyarbakır", lat: 37.9144, lng: 40.2306 },
    duzce: { il: "Düzce", lat: 40.8438, lng: 31.1565 },
    edirne: { il: "Edirne", lat: 41.6771, lng: 26.5557 },
    elazig: { il: "Elazığ", lat: 38.6810, lng: 39.2264 },
    erzincan: { il: "Erzincan", lat: 39.7500, lng: 39.5000 },
    erzurum: { il: "Erzurum", lat: 39.9000, lng: 41.2700 },
    eskisehir: { il: "Eskişehir", lat: 39.7767, lng: 30.5206 },
    manlifteskisehir: { il: "Eskişehir", lat: 39.7767, lng: 30.5206 },
    gaziantep: { il: "Gaziantep", lat: 37.0662, lng: 37.3833 },
    giresun: { il: "Giresun", lat: 40.9128, lng: 38.3895 },
    gumushane: { il: "Gümüşhane", lat: 40.4386, lng: 39.5086 },
    hakkari: { il: "Hakkari", lat: 37.5744, lng: 43.7408 },
    hatay: { il: "Hatay", lat: 36.4018, lng: 36.3498 },
    isparta: { il: "Isparta", lat: 37.7648, lng: 30.5566 },
    mersin: { il: "Mersin", lat: 36.8121, lng: 34.6415 },
    istanbul: { il: "İstanbul", lat: 41.0082, lng: 28.9784 },
    ikitelli: { il: "İstanbul", lat: 41.0656, lng: 28.8064 },
    tuzla: { il: "İstanbul", lat: 40.8151, lng: 29.3020 },
    gebze: { il: "Kocaeli", lat: 40.8028, lng: 29.4306 },
    kadikoy: { il: "İstanbul", lat: 40.9927, lng: 29.0280 },
    uskudar: { il: "İstanbul", lat: 41.0226, lng: 29.0175 },
    maltepe: { il: "İstanbul", lat: 40.9354, lng: 29.1305 },
    pendik: { il: "İstanbul", lat: 40.8776, lng: 29.2338 },
    kartal: { il: "İstanbul", lat: 40.9061, lng: 29.1898 },
    esenyurt: { il: "İstanbul", lat: 41.0347, lng: 28.6733 },
    basaksehir: { il: "İstanbul", lat: 41.0949, lng: 28.8017 },
    hadimkoy: { il: "İstanbul", lat: 41.1250, lng: 28.6997 },
    dilovasi: { il: "Kocaeli", lat: 40.7783, lng: 29.5406 },
    izmir: { il: "İzmir", lat: 38.4237, lng: 27.1428 },
    kahramanmaras: { il: "Kahramanmaraş", lat: 37.5858, lng: 36.9371 },
    karabuk: { il: "Karabük", lat: 41.2061, lng: 32.6204 },
    karaman: { il: "Karaman", lat: 37.1759, lng: 33.2287 },
    kars: { il: "Kars", lat: 40.6013, lng: 43.0975 },
    kastamonu: { il: "Kastamonu", lat: 41.3887, lng: 33.7827 },
    kayseri: { il: "Kayseri", lat: 38.7312, lng: 35.4787 },
    kirikkale: { il: "Kırıkkale", lat: 39.8468, lng: 33.5153 },
    kirklareli: { il: "Kırklareli", lat: 41.7333, lng: 27.2167 },
    kirsehir: { il: "Kırşehir", lat: 39.1425, lng: 34.1709 },
    kilis: { il: "Kilis", lat: 36.7184, lng: 37.1212 },
    kocaeli: { il: "Kocaeli", lat: 40.8533, lng: 29.8815 },
    konya: { il: "Konya", lat: 37.8746, lng: 32.4932 },
    kutahya: { il: "Kütahya", lat: 39.4242, lng: 29.9833 },
    malatya: { il: "Malatya", lat: 38.3552, lng: 38.3095 },
    manisa: { il: "Manisa", lat: 38.6191, lng: 27.4289 },
    mardin: { il: "Mardin", lat: 37.3212, lng: 40.7245 },
    mugla: { il: "Muğla", lat: 37.2153, lng: 28.3636 },
    mus: { il: "Muş", lat: 38.9462, lng: 41.7539 },
    nevsehir: { il: "Nevşehir", lat: 38.6939, lng: 34.6857 },
    nigde: { il: "Niğde", lat: 37.9667, lng: 34.6833 },
    ordu: { il: "Ordu", lat: 40.9839, lng: 37.8764 },
    osmaniye: { il: "Osmaniye", lat: 37.0742, lng: 36.2478 },
    rize: { il: "Rize", lat: 41.0201, lng: 40.5234 },
    sakarya: { il: "Sakarya", lat: 40.6940, lng: 30.4358 },
    samsun: { il: "Samsun", lat: 41.2867, lng: 36.3300 },
    siirt: { il: "Siirt", lat: 37.9333, lng: 41.9500 },
    sinop: { il: "Sinop", lat: 42.0231, lng: 35.1531 },
    sivas: { il: "Sivas", lat: 39.7477, lng: 37.0179 },
    sanliurfa: { il: "Şanlıurfa", lat: 37.1591, lng: 38.7969 },
    sirnak: { il: "Şırnak", lat: 37.4187, lng: 42.4918 },
    tekirdag: { il: "Tekirdağ", lat: 40.9833, lng: 27.5167 },
    tokat: { il: "Tokat", lat: 40.3167, lng: 36.5500 },
    trabzon: { il: "Trabzon", lat: 41.0027, lng: 39.7168 },
    tunceli: { il: "Tunceli", lat: 39.3074, lng: 39.4388 },
    usak: { il: "Uşak", lat: 38.6823, lng: 29.4082 },
    van: { il: "Van", lat: 38.4891, lng: 43.4089 },
    yalova: { il: "Yalova", lat: 40.6500, lng: 29.2667 },
    yozgat: { il: "Yozgat", lat: 39.8181, lng: 34.8147 },
    zonguldak: { il: "Zonguldak", lat: 41.4564, lng: 31.7987 },
};

function ascii(t: string): string {
    return t
        .toLocaleLowerCase("tr-TR")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ş/g, "s")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9]/g, "");
}

// Metin içinde (bölge adı, host adı, il ismi ne olursa olsun) bilinen bir yer adı
// arar, ilk eşleşen il ve koordinatlarını döner. Bulamazsa undefined.
export function ilKoordinatBul(metin: string): IlKoordinat | undefined {
    const normalize = ascii(metin);
    const anahtarlar = Object.keys(IL_KOORDINATLARI).sort((a, b) => b.length - a.length);
    for (const anahtar of anahtarlar) {
        if (normalize.includes(anahtar)) return IL_KOORDINATLARI[anahtar];
    }
    return undefined;
}

// site.bolge genelde "asıl ilçe, asıl ilçe 2, ..., X (çevre ili)" şeklinde
// virgülle ayrılmış bir liste. Küçük ilçe adları (Nilüfer, Emirdağ, Odunpazarı
// gibi) tablo'da yoksa tek bir girdiye bakmak eşleşmeyi kaçırabilir — bu yüzden
// listedeki girdileri SIRAYLA dener, ilk eşleşeni döner. "(çevre ili)" etiketli
// girdiler zaten listenin sonunda olduğundan sıralama asıl bölgeyi önceliklendirir.
export function bolgeListesindenKoordinatBul(bolgeMetni: string): IlKoordinat | undefined {
    const girdiler = bolgeMetni.split(",").map((b) => b.trim()).filter(Boolean);
    for (const girdi of girdiler) {
        const bulunan = ilKoordinatBul(girdi);
        if (bulunan) return bulunan;
    }
    return undefined;
}

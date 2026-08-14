// Google İşletme Profili (GBP) bağlantıları — SADECE gerçek, doğrulanmış
// fiziksel işletme kaydı olan şehri hedefleyen domainlere bağlanır.
//
// ⚠️ Diğer domainlere (Ankara, Bursa, Afyon, Konya, ... — GBP kaydı olmayan
// şehirler) BAĞLANMAZ. Yanlış coğrafi eşleştirme (İzmir'deki bir işletmeyi
// "Afyon Platform" gibi başka bir şehir domaininde göstermek) NAP (İsim-
// Adres-Telefon) tutarsızlığı yaratır ve yerel SEO güvenini zedeler —
// faydadan çok zarar verir. Yeni bir şehirde GBP doğrulanınca buraya
// eklenir.
export interface GoogleIsletmeProfili {
    ad: string;
    url: string;
}

const IZMIR_PROFIL: GoogleIsletmeProfili = {
    ad: "Arti Platform Forklift Manlift Kiralama Hizmetleri",
    url: "https://maps.app.goo.gl/u3t6WSk7bYgQqgSv5",
};

const ESKISEHIR_PROFIL: GoogleIsletmeProfili = {
    ad: "Eskişehir Artı Platform Kiralama",
    url: "https://maps.app.goo.gl/iRrqSTNcKBvgTAKr6",
};

const IZMIR_HOSTLARI = [
    "izmir-forklift.com",
    "izmir-man-lift.com",
    "izmir-manlift.net",
    "izmirforkliftkiralama.net",
    "izmirmakasliplatform.com.tr",
    "izmirmakasliplatform.net.tr",
    "izmirmakasliplatform.xyz",
    "izmirmanliftkiralama.net",
    "izmirmanliftkiralama.org",
    "izmirplatformkiralama.org",
    "izmirplatformskiralama.com",
];

const ESKISEHIR_HOSTLARI = [
    "eskisehirmanlift.net",
    "eskisehirmanlift.xyz",
    "eskisehirplatform.net",
    "eskisehirplatform.org",
    "eskisehirplatformkiralama.net",
    "eskisehirvincplatform.com",
    "manlifteskisehir.com",
];

export function googleIsletmeBul(host: string): GoogleIsletmeProfili | undefined {
    if (IZMIR_HOSTLARI.includes(host)) return IZMIR_PROFIL;
    if (ESKISEHIR_HOSTLARI.includes(host)) return ESKISEHIR_PROFIL;
    return undefined;
}

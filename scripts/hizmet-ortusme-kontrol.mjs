// Tüm bespoke hizmet:* kayıtlarını host bazında topla, aynı slug'ı
// yazan her domain çiftini karşılaştır. 8-gram Jaccard-benzeri örtüşme.
import { BESPOKE } from "../src/lib/bespoke-icerik.ts";

function metin(icerik) {
    const parcalar = [];
    if (icerik.h1) parcalar.push(icerik.h1);
    if (icerik.giris) parcalar.push(icerik.giris);
    for (const m of icerik.maddeler ?? []) parcalar.push(m.baslik, m.metin);
    for (const b of icerik.ekBolumler ?? []) {
        parcalar.push(b.baslik, ...(b.paragraflar ?? []));
        if (b.tablo) parcalar.push(...b.tablo.satirlar.flat());
    }
    for (const s of icerik.sss ?? []) parcalar.push(s.soru, s.cevap);
    return parcalar.join(" ");
}

function normalize(s) {
    return s
        .toLowerCase()
        .replace(/[.,;:!?()'"„"—–\-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function shingles(s, n = 8) {
    const kelimeler = normalize(s).split(" ").filter(Boolean);
    const set = new Set();
    for (let i = 0; i + n <= kelimeler.length; i++) {
        set.add(kelimeler.slice(i, i + n).join(" "));
    }
    return set;
}

function ort(a, b) {
    const sa = shingles(a);
    const sb = shingles(b);
    if (sa.size === 0 || sb.size === 0) return 0;
    let kesisim = 0;
    for (const x of sa) if (sb.has(x)) kesisim++;
    return kesisim / Math.min(sa.size, sb.size);
}

const hizmetKayitlari = {};
for (const [host, sayfalar] of Object.entries(BESPOKE)) {
    for (const [anahtar, icerik] of Object.entries(sayfalar)) {
        if (!anahtar.startsWith("hizmet:")) continue;
        const slug = anahtar.slice(7);
        (hizmetKayitlari[slug] ??= {})[host] = icerik;
    }
}

let toplamKarsilastirma = 0;
let uyari = 0;
let sert = 0;
const sonuclar = [];

for (const [slug, hostlar] of Object.entries(hizmetKayitlari)) {
    const isimler = Object.keys(hostlar);
    for (let i = 0; i < isimler.length; i++) {
        for (let j = i + 1; j < isimler.length; j++) {
            toplamKarsilastirma++;
            const o = ort(metin(hostlar[isimler[i]]), metin(hostlar[isimler[j]]));
            if (o > 0.01) {
                uyari++;
                sonuclar.push(`${slug} | ${isimler[i]} vs ${isimler[j]} | ${(o * 100).toFixed(1)}%`);
            }
            if (o > 0.2) sert++;
        }
    }
}

console.log(`Toplam slug: ${Object.keys(hizmetKayitlari).length}`);
console.log(`Toplam domain-çift karşılaştırması: ${toplamKarsilastirma}`);
console.log(`>%1 örtüşen çift: ${uyari}`);
console.log(`>%20 (sert sınır aşımı): ${sert}`);
if (sonuclar.length) {
    console.log("\nDetaylar:");
    sonuclar.sort((a, b) => parseFloat(b.split("|")[2]) - parseFloat(a.split("|")[2]));
    for (const s of sonuclar.slice(0, 30)) console.log(s);
}

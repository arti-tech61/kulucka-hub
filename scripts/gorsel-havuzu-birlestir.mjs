// isler-ek/ havuzunu hizmet-konulari.ts'teki gorselHavuzu dizilerine ekler.
import { readFileSync, writeFileSync, readdirSync } from "fs";

const DOSYA = "src/lib/hizmet-konulari.ts";
const KLASOR = "public/media/isler-ek";

const ALT_SABLONLARI = {
    "sepetli-orumcek-platform-kiralama": ["Sepetli örümcek platform ile dar alan erişim çalışması", "Örümcek platform ile sahada yükseklik çalışması"],
    "nakliye-teslimat-hizmeti": ["Sahaya platform nakliye ve teslimat çalışması", "Kamyonla makine sevkiyatı", "Saha teslimatı için araç yükleme", "Platform teslimatı ve nakliye planlaması"],
    "forklift-istifleme-kiralama": ["Forklift ile palet istifleme çalışması", "Depo sahasında forklift ile yük taşıma"],
    "eklemli-platform-boom-kiralama": ["Eklemli platform ile dış mekan yüksek erişim çalışması", "Boom tip platform ile saha çalışması"],
    "ic-mekan-depo-platform-kiralama": ["Fabrika içi platform ile tesisat çalışması", "Depo içinde makaslı platform ile raf/tavan çalışması", "Kapalı mekanda platform ile bakım çalışması"],
    "celik-konstruksiyon-montaj-platformu": ["Çelik konstrüksiyon montajında platform ile çalışma", "Sanayi holünde çelik yapı montaj çalışması"],
    "tarim-silo-platform-kiralama": ["Tarım ve silo sahasında platform çalışması", "Kırsal sahada platform ile bakım çalışması"],
    "enerji-aydinlatma-bakim-platformu": ["Enerji ve aydınlatma hattı bakımında platform çalışması", "Direk ve tabela bakımı için sahada erişim"],
    "operatorlu-platform-kiralama": ["Operatörlü platform ile saha çalışması", "Operatör eşliğinde platform kullanımı"],
    "cok-noktali-rota-bakim-platformu": ["Filo hâlinde makine parkı — çok noktalı rota hazırlığı", "Birden fazla platform ile saha hazırlığı", "Çok noktalı bakım rotasında makine sıralaması"],
    "zor-zemin-arazi-platform-kiralama": ["Zorlu zemin koşullarında platform çalışması", "Engebeli arazide makine parkı"],
    "genel-platform-forklift-kiralama": ["Artı Platform saha çalışması", "Artı Platform makine parkı ve saha ekibi"],
};

const dosyalar = readdirSync(KLASOR).filter((f) => f.endsWith(".jpg"));
const gruplar = {};
for (const f of dosyalar) {
    let kategori = f.replace(/-p[0-9]+b?-[0-9]+\.jpg$/, "");
    if (kategori === "genel") kategori = "genel-platform-forklift-kiralama";
    (gruplar[kategori] ??= []).push(f);
}
for (const k of Object.keys(gruplar)) gruplar[k].sort();

let icerik = readFileSync(DOSYA, "utf8");

for (const [slug, dosyalarListesi] of Object.entries(gruplar)) {
    const altlar = ALT_SABLONLARI[slug] ?? ["Artı Platform saha çalışması"];
    const yeniGirdiler = dosyalarListesi
        .map((dosya, i) => `{ src: "/media/isler-ek/${dosya}", alt: "${altlar[i % altlar.length]}" }`)
        .join(", ");

    // slug'a ait objeyi bul, içindeki gorselHavuzu: [ ... ] dizisini genişlet.
    const slugRegex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?gorselHavuzu:\\s*\\[)([\\s\\S]*?)(\\](?:,\\s*\\n\\s*\\},|\\s*\\};))`);
    const eslesme = icerik.match(slugRegex);
    if (!eslesme) {
        console.error(`UYARI: "${slug}" için gorselHavuzu bulunamadı, atlandı.`);
        continue;
    }
    const mevcutGirdiler = eslesme[2].trim();
    const birlesikGirdiler = mevcutGirdiler ? `${mevcutGirdiler}, ${yeniGirdiler}` : yeniGirdiler;
    icerik = icerik.replace(slugRegex, `$1${birlesikGirdiler}$3`);
    console.log(`${slug}: +${dosyalarListesi.length} görsel eklendi`);
}

writeFileSync(DOSYA, icerik);
console.log("Tamamlandı.");

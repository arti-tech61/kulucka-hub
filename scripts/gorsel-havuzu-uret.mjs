// isler-ek/ klasöründeki kategorize edilmiş görselleri hizmet-konulari.ts'teki
// gorselHavuzu dizilerine eklemek için TS kod parçacıkları üretir.
// Kullanım: node scripts/gorsel-havuzu-uret.mjs
import { readdirSync } from "fs";

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
    "genel": ["Artı Platform saha çalışması", "Artı Platform makine parkı ve saha ekibi"],
};

const dosyalar = readdirSync(KLASOR).filter((f) => f.endsWith(".jpg"));
const gruplar = {};
for (const f of dosyalar) {
    const kategori = f.replace(/-p[0-9]+b?-[0-9]+\.jpg$/, "");
    (gruplar[kategori] ??= []).push(f);
}

for (const [kategori, dosyalarListesi] of Object.entries(gruplar)) {
    dosyalarListesi.sort();
    const altlar = ALT_SABLONLARI[kategori] ?? ["Artı Platform saha çalışması"];
    console.log(`\n// === ${kategori} (${dosyalarListesi.length} görsel) ===`);
    dosyalarListesi.forEach((dosya, i) => {
        const alt = altlar[i % altlar.length];
        console.log(`        { src: "/media/isler-ek/${dosya}", alt: "${alt}" },`);
    });
}

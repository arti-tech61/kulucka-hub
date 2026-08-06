#!/usr/bin/env node
// kulucka-hub — otomatik kural kontrolü
//
// Dokümantasyon unutulur; otomatik kontrol unutulmaz. Bu script, docs/ altındaki
// kuralların makinece doğrulanabilir olanlarını zorlar.
//
// Kullanım:
//   node scripts/kontrol.mjs            → hızlı kontroller (kod + görsel)
//   node scripts/kontrol.mjs --icerik   → + içerik örtüşme ölçümü (yavaş, jiti gerekir)
//
// Çıkış kodu 1 ise KURAL İHLALİ vardır; commit/deploy edilmemelidir.

import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const KOK = process.cwd();
const hatalar = [];
const uyarilar = [];
const hata = (kural, mesaj) => hatalar.push(`❌ [${kural}] ${mesaj}`);
const uyari = (kural, mesaj) => uyarilar.push(`⚠️  [${kural}] ${mesaj}`);

function oku(p) {
    try { return readFileSync(join(KOK, p), "utf8"); } catch { return null; }
}
function tsDosyalari(dizin) {
    const out = [];
    const gez = (d) => {
        if (!existsSync(join(KOK, d))) return;
        for (const ad of readdirSync(join(KOK, d))) {
            const yol = join(d, ad);
            if (statSync(join(KOK, yol)).isDirectory()) gez(yol);
            else if (/\.tsx?$/.test(ad)) out.push(yol);
        }
    };
    gez(dizin);
    return out;
}

// ---------------------------------------------------------------------------
// 1) GÖRSEL KURALLARI (docs/GORSEL-KURALLARI.md)
// ---------------------------------------------------------------------------
function gorselKontrol() {
    const dizin = "public/machines";
    if (!existsSync(join(KOK, dizin))) return;

    for (const ad of readdirSync(join(KOK, dizin))) {
        const st = statSync(join(KOK, dizin, ad));
        const kb = Math.round(st.size / 1024);
        if (kb > 300) hata("GÖRSEL-3", `${dizin}/${ad} = ${kb} KB (limit 300 KB). Kalite/boyut düşürün.`);
        else if (kb > 200) uyari("GÖRSEL-3", `${dizin}/${ad} = ${kb} KB (limit 300 KB'a yakın).`);
        if (!/\.jpe?g$/i.test(ad)) uyari("GÖRSEL-3", `${dizin}/${ad} JPEG değil — PNG/WebP dosya boyutunu artırır.`);
    }

    // Ürün kartlarında object-cover kullanımı (dekoratif olmayan)
    for (const f of tsDosyalari("src")) {
        const c = oku(f);
        if (!c) continue;
        const satirlar = c.split("\n");
        satirlar.forEach((s, i) => {
            if (!s.includes("object-cover")) return;
            // dekoratif arkaplanlar muaf: opacity-* veya "absolute inset-0 z-0"
            if (/opacity-\d|inset-0 z-0|z-0 object-cover/.test(s)) return;
            // makine/ürün görseli mi?
            const baglam = satirlar.slice(Math.max(0, i - 6), i + 2).join(" ");
            if (/machines\/|urun|makine|m\.image|\.gorsel|f\.image/i.test(baglam)) {
                hata("GÖRSEL-4", `${f}:${i + 1} ürün görselinde object-cover — object-contain kullanın (kırpma yapar).`);
            }
        });
    }

    // next/image fill + sizes tutarlılığı
    for (const f of tsDosyalari("src")) {
        const c = oku(f);
        if (!c) continue;
        const re = /sizes=\{?["'`]([^"'`]+)["'`]\}?/g;
        let m;
        while ((m = re.exec(c))) {
            const sizes = m[1];
            const satir = c.slice(0, m.index).split("\n").length;
            const blok = c.slice(Math.max(0, m.index - 900), m.index);
            const lg3 = /lg:grid-cols-3|lg:grid-cols-4/.test(blok);
            if (lg3 && !/min-width:\s*1024px/.test(sizes)) {
                hata("GÖRSEL-5", `${f}:${satir} grid lg:grid-cols-3+ ama sizes'ta 1024px breakpoint yok → gereğinden büyük görsel iner.`);
            }
        }
    }
}

// ---------------------------------------------------------------------------
// 2) RESPONSIVE KURALLARI (docs/RESPONSIVE-KURALLARI.md)
// ---------------------------------------------------------------------------
function responsiveKontrol() {
    // Breakpoint tutarlılığı — header benzeri dosyalarda nav/hamburger aynı eşikte mi
    for (const f of tsDosyalari("src")) {
        if (!/header|cerceve|nav|menu/i.test(f)) continue;
        const c = oku(f);
        if (!c) continue;
        const navEsik = c.match(/hidden\s+(sm|md|lg|xl|2xl):flex[^"'`]*items-center/)?.[1];
        const hamEsik = c.match(/["'`\s](sm|md|lg|xl|2xl):hidden\s+p-\d/)?.[1];
        if (navEsik && hamEsik && navEsik !== hamEsik) {
            hata("RESP-1", `${f} breakpoint tutarsız: masaüstü menü "${navEsik}:", hamburger "${hamEsik}:". ${navEsik}–${hamEsik} arası ekranlarda menü kaybolur.`);
        }
    }

    // next/image fill → üst kap relative olmalı
    for (const f of tsDosyalari("src")) {
        const c = oku(f);
        if (!c || !c.includes("next/image")) continue;
        const satirlar = c.split("\n");
        satirlar.forEach((s, i) => {
            if (!/^\s*fill\s*$|fill\b/.test(s) || !/^\s*fill\s*$/.test(s.trim())) return;
            const onceki = satirlar.slice(Math.max(0, i - 12), i).join(" ");
            if (!/relative|absolute|fixed/.test(onceki)) {
                uyari("RESP-4", `${f}:${i + 1} <Image fill> — üst kapta "relative" görünmüyor, kontrol edin.`);
            }
        });
    }

    // Form alanlarında htmlFor/aria-label
    for (const f of tsDosyalari("src")) {
        const c = oku(f);
        if (!c) continue;
        const satirlar = c.split("\n");
        satirlar.forEach((s, i) => {
            const alan = /<(input|select|textarea)\b/.test(s);
            if (!alan) return;
            if (/type=["'`]hidden["'`]/.test(s)) return;
            const blok = satirlar.slice(Math.max(0, i - 3), i + 6).join(" ");
            if (!/htmlFor=|aria-label|aria-labelledby|id=\{/.test(blok)) {
                hata("RESP-6", `${f}:${i + 1} form alanının etiketi yok (htmlFor/aria-label). Ekran okuyucu alanı tanımlayamaz.`);
            }
        });
    }

    // Sabit piksel genişlik
    for (const f of tsDosyalari("src")) {
        const c = oku(f);
        if (!c) continue;
        // min-w-[...] overflow-x-auto kabı içinde meşrudur (tablo yatay kaydırma).
        const m = c.match(/(?<!min-)\bw-\[\d{3,}px\]/g);
        if (m) uyari("RESP-3", `${f} sabit genişlik: ${[...new Set(m)].join(", ")} — max-w-* + w-full kullanın (yatay taşma riski).`);
    }
}

// ---------------------------------------------------------------------------
// 3) KOPYA İÇERİK KURALLARI (CLAUDE.md Kural 1, docs/SEO-ICERIK-URETIMI.md)
// ---------------------------------------------------------------------------
const SABLON_DOSYALARI = [
    "src/lib/bolge-sayfalari.ts",
    "src/lib/bolge-hizmet-sayfalari.ts",
    "src/lib/hizmet-sayfalari.ts",
    "src/lib/firsat-sayfalar.ts",
    "src/lib/kurumsal-sayfalar.ts",
    "src/lib/anahtar-kelime-sayfalari.ts",
    "src/lib/paylasilan-blog.ts",
];

function kopyaIcerikKontrol() {
    for (const f of SABLON_DOSYALARI) {
        const c = oku(f);
        if (!c) continue;

        // Şablon dosyasında sabit (değişkensiz) uzun cümle = 85 domainde birebir tekrar
        const sabitler = [...c.matchAll(/(?:cevap|metin|giris|ozet|aciklama):\s*"([^"\\]{50,})"/g)];
        for (const m of sabitler) {
            const satir = c.slice(0, m.index).split("\n").length;
            hata("İÇERİK-2.1", `${f}:${satir} sabit metin (${m[1].slice(0, 55)}...) → varyantSec()/kur() kullanın.`);
        }

        // varyantSec havuz büyüklüğü
        const havuzlar = [...c.matchAll(/varyantSec\([^,]+,\s*[^,]+,\s*\[([\s\S]*?)\]\s*\)/g)];
        for (const h of havuzlar) {
            // Havuz elemanlarını say: hem çok satırlı hem tek satırlı diziler
            const govde = h[1];
            const adet = (govde.match(/(^|,)\s*[`"']/g) || []).length;
            if (adet > 0 && adet < 3) {
                const satir = c.slice(0, h.index).split("\n").length;
                hata("İÇERİK-2.3", `${f}:${satir} varyant havuzunda ${adet} seçenek var (minimum 3, önerilen 4-6).`);
            }
        }

        // Tuz ayırt edici mi (sayfa slug'ı içeriyor mu)
        const tuzlar = [...c.matchAll(/varyantSec\(\s*\w+\s*,\s*(["'`])([^"'`]+)\1/g)];
        // Sabit tuz sorun DEĞİL, aynı tuzun birden fazla yerde kullanılması sorun.
        // (Tuz sayfa adını içeriyorsa — "f-nakliye-teslim" gibi — ayırt edicidir.)
        const sabitTuz = tuzlar.map((t) => t[2]).filter((t) => !/\$\{/.test(t));
        const tekrarEden = sabitTuz.filter((t, i) => sabitTuz.indexOf(t) !== i);
        if (tekrarEden.length) {
            hata("İÇERİK-2.5", `${f} aynı tuz birden fazla yerde: ${[...new Set(tekrarEden)].join(", ")} → farklı alanlar aynı varyantı alır.`);
        }
    }
}

// ---------------------------------------------------------------------------
// 4) SİTEMAP BÜTÜNLÜĞÜ (docs/SEO-ICERIK-URETIMI.md Kural 1.4)
// ---------------------------------------------------------------------------
function sitemapKontrol() {
    const sm = oku("src/app/sitemap.xml/route.ts");
    if (!sm) return;
    const uretenler = [
        ["bolgeSayfalari", "/bolge/"],
        ["bolgeHizmetSayfalari", "/bolge/[slug]/[hizmet]"],
        ["hizmetSayfalari", "/hizmet/"],
        ["hostAltSayfalari", "/[sayfa]"],
        ["kurumsalSayfalar", "/[sayfa] kurumsal"],
    ];
    for (const [fn, rota] of uretenler) {
        if (!sm.includes(fn)) hata("SEO-1.4", `sitemap.xml ${fn}() çağırmıyor → ${rota} sayfaları sitemap dışı kalıyor.`);
    }
    // Yeni route klasörü var ama sitemap'te yok mu?
    const appDir = join(KOK, "src/app");
    if (existsSync(appDir)) {
        for (const ad of readdirSync(appDir)) {
            if (/^(api|_|\[|globals|layout|page|favicon|robots|sitemap|llms)/.test(ad)) continue;
            if (!statSync(join(appDir, ad)).isDirectory()) continue;
            if (!sm.includes(`/${ad}/`) && !sm.includes(`"${ad}"`) && !sm.includes(`'${ad}'`)) {
                uyari("SEO-1.4", `src/app/${ad}/ route'u var ama sitemap.xml'de görünmüyor.`);
            }
        }
    }
}

// ---------------------------------------------------------------------------
// 5) İÇERİK ÖRTÜŞME ÖLÇÜMÜ (--icerik)
// ---------------------------------------------------------------------------
async function ortusmeOlc() {
    const { execSync } = await import("node:child_process");
    const gecici = join(KOK, ".kontrol-ortusme.ts");
    const { writeFileSync, unlinkSync } = await import("node:fs");
    writeFileSync(gecici, `
import { siteler } from "./src/lib/siteler";
import { bolgeSayfalari } from "./src/lib/bolge-sayfalari";
import { hizmetSayfalari } from "./src/lib/hizmet-sayfalari";
function ng(t,n=8){const w=t.toLocaleLowerCase("tr-TR").replace(/[^\\p{L}\\p{N}\\s]/gu," ").split(/\\s+/).filter(Boolean);const s=new Set();for(let i=0;i+n<=w.length;i++)s.add(w.slice(i,i+n).join(" "));return s;}
function ov(a,b){if(!a.size)return 0;let h=0;for(const x of a)if(b.has(x))h++;return h/a.size;}
const setler = [["bolge",(s)=>bolgeSayfalari(s).map(p=>[p.giris,...p.maddeler.map(m=>m.metin),...p.sss.map(q=>q.cevap)].join(" "))],
                ["hizmet",(s)=>hizmetSayfalari(s).map(p=>[p.giris,...p.maddeler.map(m=>m.metin),...p.sss.map(q=>q.cevap)].join(" "))]];
for (const [ad, uret] of setler) {
    const metinler = []; for (const s of siteler.slice(0,30)) metinler.push(...uret(s));
    const gs = metinler.map(m=>ng(m)); let t=0,n=0;
    for(let i=0;i<gs.length;i++) for(let j=i+1;j<gs.length;j++){t+=ov(gs[i],gs[j]);n++;}
    console.log(ad+"|"+(t/n*100).toFixed(1)+"|"+metinler.length);
}
`);
    try {
        const cikti = execSync(`npx jiti ${gecici}`, { cwd: KOK, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
        for (const satir of cikti.trim().split("\n")) {
            const [ad, oran, adet] = satir.split("|");
            const o = parseFloat(oran);
            const etiket = `${ad} (${adet} sayfa) örtüşme %${oran}`;
            if (o > 20) hata("İÇERİK-3", `${etiket} — eşik %20. MERGE EDİLMEZ.`);
            else if (o > 15) uyari("İÇERİK-3", `${etiket} — kabul edilebilir ama iyileştirilmeli.`);
            else console.log(`   ✅ ${etiket}`);
        }
    } catch (e) {
        uyari("İÇERİK-3", `Örtüşme ölçümü çalıştırılamadı (npx jiti gerekir): ${String(e).slice(0, 90)}`);
    } finally {
        try { unlinkSync(gecici); } catch {}
    }
}

// ---------------------------------------------------------------------------
const main = async () => {
    console.log("kulucka-hub kural kontrolü\n");
    gorselKontrol();
    responsiveKontrol();
    kopyaIcerikKontrol();
    sitemapKontrol();
    if (process.argv.includes("--icerik")) {
        console.log("   içerik örtüşmesi ölçülüyor (yavaş)...");
        await ortusmeOlc();
    }

    if (uyarilar.length) { console.log(`\n${uyarilar.length} uyarı:`); uyarilar.forEach((u) => console.log("  " + u)); }
    if (hatalar.length) {
        console.log(`\n${hatalar.length} KURAL İHLALİ:`);
        hatalar.forEach((h) => console.log("  " + h));
        console.log("\nKurallar: CLAUDE.md · docs/GORSEL-KURALLARI.md · docs/RESPONSIVE-KURALLARI.md · docs/SEO-ICERIK-URETIMI.md");
        process.exit(1);
    }
    console.log(`\n✅ Kural ihlali yok${uyarilar.length ? ` (${uyarilar.length} uyarı var)` : ""}.`);
};
main();

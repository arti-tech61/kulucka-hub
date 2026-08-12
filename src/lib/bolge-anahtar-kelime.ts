// ═══════════════════════════════════════════════════════════════════════════
// BÖLGEYE ÖZGÜ ANAHTAR KELİME MOTORU
//
// Her domain kendi bölgesinin arama terimlerini hedefler. Bu modül, bir
// SiteIcerik'ten o domaine ait coğrafi profili çıkarır ve blog/SEO
// şablonlarının kullanacağı anahtar kelime bileşenlerini üretir.
//
// ⚠️ ÖNCEKİ SORUN: anahtar-kelime-sayfalari.ts kendi IL_ANAHTARLARI tablosunu
// tutuyordu (17 giriş) ve 85 domainin 22'si "Türkiye" fallback'ine düşüyordu —
// yani Sincan (Ankara), Nilüfer (Bursa), İkitelli (İstanbul) gibi gerçek
// yerler kayboluyordu. Artık il çıkarımı il-koordinatlari.ts üzerinden
// yapılıyor (81 il), önce site.bolge'ye sonra host'a bakılıyor.
//
// ⛔ KOPYA İÇERİK: Bu modül anahtar kelime ÜRETİR, metin üretmez. Metin
// yazarken varyant.ts fonksiyonlarını kullanın. Tam kurallar: CLAUDE.md

import type { SiteIcerik } from "./siteler";
import { ilKoordinatBul, bolgeListesindenKoordinatBul, ilceninIli, hostIlBul } from "./il-koordinatlari";
import { hedefYuzey, type HedefYuzey } from "./hedef-bolgeler";

export interface BolgeProfili {
    /** İl adı — "Bolu", "Ankara". Bulunamazsa "Türkiye". */
    il: string;
    /** Cümle içinde kullanılabilir ifade — "Bolu bölgesinde" / "Türkiye genelinde". */
    ilIfade: string;
    /** site.bolge'nin ilk kaydı — genelde merkez ilçe veya OSB. */
    merkez: string;
    /** Tüm bölge kayıtları (ilçe/OSB listesi). */
    bolgeler: string[];
    /** OSB/sanayi bölgesi geçen kayıtlar — sanayi odaklı içerik için. */
    sanayiBolgeleri: string[];
    /** Ulusal kapsamlı mı (il bazlı içerik anlamsız olur). */
    ulusal: boolean;
    /** TAM hedef yüzey: ilin tüm ilçeleri + OSB/KSS + komşu iller ve sanayileri.
     *  site.bolge'deki dar liste değil — içerik üretimi bu yüzeyi hedefler. */
    yuzey: HedefYuzey;
}

export function bolgeProfili(site: SiteIcerik): BolgeProfili {
    const bolgeler = site.bolge.split(",").map((b) => b.trim()).filter(Boolean);
    const merkez = bolgeler[0] ?? "";
    const ulusal = /türkiye|turkiye|bağımsız/i.test(merkez);

    // İl çıkarım sırası — SIRALAMA ÖNEMLİ, değiştirmeyin:
    //   1. HOST: "izmirmanliftkiralama.net" gibi markalı domainlerde il adı
    //      host'ta açıkça yazar ve en güvenilir kaynaktır.
    //   2. MERKEZ İLÇE: host'ta il yoksa (manliftkirala.online) merkez ilçeyi
    //      ILCE_IL tablosundan çöz.
    //   3. BÖLGE LİSTESİ: son çare. Liste sonundaki "(çevre ili)" etiketleri
    //      buraya düştüğü için en düşük öncelikte.
    // Önceden liste önce denendiği ve alt-dize eşleşmesi kullanıldığı için
    // Aliağa→Manisa, Çiğli→Kars, Yenimahalle→Kırıkkale gibi hatalar oluşuyordu.
    const il = ulusal
        ? "Türkiye"
        : (hostIlBul(site.host)?.il
            ?? ilceninIli(merkez)
            ?? bolgeListesindenKoordinatBul(site.bolge)?.il
            ?? "Türkiye");

    const yuzey = hedefYuzey(il);
    // site.bolge'deki dar sanayi listesi + il verisindeki tam OSB/KSS listesi
    const sanayiBolgeleri = [...new Set([
        ...bolgeler.filter((b) => /osb|organize|sanayi|liman|serbest bölge/i.test(b)),
        ...yuzey.sanayi,
    ])];
    return {
        il,
        ilIfade: il === "Türkiye" ? "Türkiye genelinde" : `${il} bölgesinde`,
        merkez: ulusal ? "Türkiye" : merkez,
        bolgeler: ulusal ? [] : [...new Set([...bolgeler, ...yuzey.ilceler])],
        sanayiBolgeleri,
        ulusal,
        yuzey,
    };
}

/**
 * Bölgeye özgü anahtar kelime öbekleri.
 * Blog başlıkları ve meta açıklamalarında kullanılır.
 */
export function anahtarKelimeler(site: SiteIcerik) {
    const p = bolgeProfili(site);
    const yer = p.il === "Türkiye" ? "Türkiye" : p.il;
    return {
        profil: p,
        /** "Bolu manlift kiralama" */
        temel: `${yer} manlift kiralama`,
        /** "Bolu platform kiralama" */
        platform: `${yer} platform kiralama`,
        /** "Bolu makaslı platform kiralama" */
        makine: (tip: string) => `${yer} ${tip} kiralama`,
        /** "Gerede platform kiralama" — ilçe bazlı */
        ilce: (i: number) => {
            const b = p.bolgeler[i % Math.max(1, p.bolgeler.length)];
            return b ? `${b} platform kiralama` : `${yer} platform kiralama`;
        },
        yer,
    };
}

/** İçerik şablonlarında sık gereken bölge ifadeleri. */
export function bolgeIfadeleri(site: SiteIcerik) {
    const p = bolgeProfili(site);
    const ikincil = p.bolgeler[1] ?? p.merkez;
    const ucuncul = p.bolgeler[2] ?? ikincil;
    return {
        il: p.il,
        ilIfade: p.ilIfade,
        merkez: p.merkez,
        ikincil,
        ucuncul,
        /** "Gerede, Mengen ve Yeniçağa" gibi doğal liste — cümle içinde
         *  okunabilir kalması için en fazla 4 ad (tam yüzey p.yuzey'de). */
        liste: p.bolgeler.length > 2
            ? `${p.bolgeler.slice(0, Math.min(3, p.bolgeler.length - 1)).join(", ")} ve ${p.bolgeler[Math.min(3, p.bolgeler.length - 1)]}`
            : p.bolgeler.join(" ve ") || "Türkiye geneli",
        sanayi: p.sanayiBolgeleri[0] ?? (p.il === "Türkiye" ? "organize sanayi bölgeleri" : `${p.il} sanayi bölgesi`),
        ulusal: p.ulusal,
    };
}

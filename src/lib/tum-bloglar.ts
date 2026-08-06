// ═══════════════════════════════════════════════════════════════════════════
// MERKEZİ BLOG TOPLAYICI
//
// Bir domainin TÜM blog yazılarını tek yerden toplar. Önceden bu mantık 4 ayrı
// dosyada kopyalanmıştı (blog listesi, blog detay, ana sayfa kartları, sitemap)
// ve aralarında sapma riski vardı.
//
// ⚠️ ÖNEMLİ DEĞİŞİKLİK: Eskiden bespoke (elle yazılmış) blogu olan domainlerde
// şablon yazıları TAMAMEN devre dışı kalıyordu. Bu, 9-12 bespoke yazısı olan
// domainlerin toplam blog sayısını 30'un altında bırakıyordu. Artık ikisi
// BİRLEŞTİRİLİYOR; slug çakışmasında bespoke öncelikli (elle yazılmış içerik
// her zaman şablonu yener).
import type { SiteIcerik } from "./siteler";
import type { BlogYazisi } from "./blog";
import { hostBloglari } from "./blog";
import { paylasilanBlogYazilari } from "./paylasilan-blog";
import { anahtarKelimeSayfalari } from "./anahtar-kelime-sayfalari";
import { bolgeselBloglar } from "./bolgesel-blog";

/**
 * Domainin tüm blog yazıları — bespoke + şablon, slug bazında tekilleştirilmiş.
 * Sıra: bespoke (elle yazılmış) → bölgesel → paylaşılan → anahtar kelime.
 */
export function tumBloglar(site: SiteIcerik): BlogYazisi[] {
    const gorulen = new Set<string>();
    const out: BlogYazisi[] = [];
    const ekle = (yazilar: BlogYazisi[]) => {
        for (const y of yazilar) {
            if (gorulen.has(y.slug)) continue;
            gorulen.add(y.slug);
            out.push(y);
        }
    };
    ekle(hostBloglari(site.host));      // elle yazılmış — her zaman öncelikli
    ekle(bolgeselBloglar(site));        // bölgeye özgü anahtar kelimeler
    ekle(paylasilanBlogYazilari(site)); // genel konular
    ekle(anahtarKelimeSayfalari(site)); // temel arama terimleri
    return out;
}

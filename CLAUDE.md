# kulucka-hub — Çalışma Kuralları

Bu depo **85+ domaini tek kod tabanından** yayınlayan çok-kiracılı bir Next.js
sitesidir. Host header'a göre içerik ve tema seçilir (`src/lib/siteler.ts`,
`src/lib/paylasilan-tema-konfig.ts`).

---

## ⛔ KURAL 1 — KOPYA İÇERİK YASAKTIR (GEÇİLMEZ)

**Bu kuralın istisnası yoktur. İhlal eden kod merge edilmez.**

Aynı şablon 85 domainde çalıştığı için, şablona yazdığınız **tek bir sabit
cümle 85–900 sayfada birebir tekrarlanır.** Google bunu doorway/kopya içerik
olarak değerlendirir ve ağın tamamını cezalandırabilir.

### Yasak olan

```ts
// ❌ ASLA — sabit cümle, 85 domainde birebir aynı
sss: [
  { soru: "Operatörlü mü kiralanabilir?",
    cevap: "Her iki seçenek de sunulur; operatörlü kiralamada yeterlilik belgesi doğrulanır." },
]

// ❌ ASLA — sadece değişken enjeksiyonu ("mad-lib") da yeterli DEĞİL.
// 85 sayfa arasındaki tek fark bölge adıysa, bu hâlâ kopya içeriktir.
giris: `${bolge} bölgesinde platform kiralama hizmeti sunuyoruz.`
```

### Zorunlu olan

```ts
// ✅ Varyant havuzu — en az 4-6 YAPISAL OLARAK FARKLI seçenek
import { varyantSec } from "./varyant";

giris: varyantSec(site, "bolge-giris", [
    `${bolge} bölgesindeki firmalara ... sunuyoruz. Saha bilgisi paylaşıldığında ...`,
    `${bolge} sahalarında en sık karşılaştığımız soru "hangi makine yeter?" oluyor. Cevap üç veriye bağlı: ...`,
    `${uzm} işleri ${bolge} bölgesinde farklı saha koşulları getiriyor; kapalı üretim alanında ...`,
]),

// ✅ Yüksek hacimli alanlarda KOMPOZİSYONEL üretim (varyant.ts'teki kur())
// 3 parça × 5 seçenek = 125 kombinasyon
export function cevapX(site: SiteIcerik): string {
    return kur(site, "sss-x",
        [ /* 5 açılış cümlesi */ ],
        [ /* 5 gövde cümlesi */ ],
        [ /* 5 kapanış cümlesi */ ],
    );
}
```

### Varyant yazarken

1. **Yapısal olarak farklı olsun.** Kelime değiştirmek yetmez; cümle kurgusu,
   uzunluğu ve bakış açısı değişmeli. "Her iki seçenek de sunulur" ile
   "İkisi de mümkün" aynı varyant sayılır — ikisini birden yazmayın.
2. **Site verisini cümlenin İÇİNE dokuyun** (`site.bolge`, `site.uzmanlik`,
   `site.telefonGosterim`). İki domain aynı varyant numarasını alsa bile
   metin farklı çıksın.
3. **Tuz (salt) ayırt edici olsun.** `varyantSec(site, tuz, ...)` çağrısındaki
   tuz, sayfayı da tanımlamalı (`bolge-${slug}-giris`, `hizmet-${slug}-s2a`).
   Aksi hâlde aynı domainin farklı sayfaları aynı varyantı alır.
4. **Bilgi uydurmayın.** Varyant çeşitliliği için yanlış rakam, hayali referans
   veya doğrulanmamış yerel bilgi yazmak yasaktır. Çeşitlilik ANLATIM
   biçiminden gelmeli, uydurma bilgiden değil.

### Ölçüm — değişiklik öncesi/sonrası ZORUNLU

Yeni bir sayfa tipi ekliyorsanız veya mevcut şablon metnini değiştiriyorsanız,
sayfa seviyesi 8-gram örtüşmesini ölçün:

```bash
npm run kontrol:icerik
```

**Kabul eşiği: sayfa çiftleri arası ortalama 8-gram örtüşmesi %20'nin altında.**

Ölçüm geçmişi:
| Tarih | Sayfa tipi | Örtüşme |
|---|---|---|
| 2026-08-06 öncesi | bölge | %56.7 ❌ |
| 2026-08-06 öncesi | hizmet | %52.5 ❌ |
| 2026-08-06 sonrası | bölge | %11.4 ✅ |
| 2026-08-06 sonrası | hizmet | %11.6 ✅ |
| (referans) | ürün | %6.8 ✅ |
| 2026-08-06 sonrası | ürün kategori metni | %7.8 ✅ |
| 2026-08-06 | bölge×hizmet kesişimi | %12.8 ✅ |
| 2026-08-06 | sözlük domain bağlamı | %5.6 ✅ |

---

## 📌 KURAL 2 — HEDEF: ELLE YAZILMIŞ İÇERİK SEVİYESİ

Varyant motoru bir **köprü çözümdür**, varış noktası değil.

Şu anki durum (%11.4 örtüşme) kabul edilebilir ama ideal değil. **Projenin
hedefi, tüm sitelerin içeriğini elle yazılmış kaliteye taşımaktır.**

Referans nokta: `izmir-manlift.com` (ayrı repo, `saygitech/izmir-manlift.com`).
Orada ilçe ve blog sayfaları elle yazılmış ve 8-gram örtüşmesi **%0.2** —
her sayfada gerçek, doğrulanabilir yerel bilgi var (tesis adları, OSB
özellikleri, saha koşulları). Kalite hedefi budur.

### Elle yazılmış içerik ne demek

- Sayfa başına **1.200–1.500 kelime** (şu anki şablon çıktısı ~300-500)
- Gerçek yerel bilgi: bölgedeki sanayi kolları, tesis tipleri, zemin koşulları,
  mesafe/lojistik gerçekleri — **doğrulanabilir olmalı**
- Karşılaştırma tabloları (featured snippet ve AI özet yakalamak için)
- Sayfa tipine özgü 5-6 uzun SSS (kısa jenerik cevap değil)

### Geçiş sırası (öncelik)

1. En yüksek arama hacimli domainler ve bölge sayfaları
2. Hizmet sayfaları
3. Blog / anahtar kelime sayfaları
4. Ürün sayfaları (şu an %6.8, en az acil)

**Bir sayfayı elle yazılmış içeriğe geçirirken:** şablon çıktısını silmeyin,
`src/lib/` altında host bazlı bespoke veri olarak ekleyin (`blog.ts` ve
`alt-sayfalar.ts` bu deseni zaten kullanıyor) — şablon fallback olarak kalsın.


---

## 🔧 Otomatik kural kontrolü — ZORUNLU

Kurallar dokümantasyonla değil, **script'le** zorlanır:

```bash
npm run kontrol          # görsel + responsive + kopya içerik + sitemap kontrolleri
npm run kontrol:icerik   # + sayfa seviyesi 8-gram örtüşme ölçümü (yavaş)
```

**Commit öncesi `npm run kontrol` çalıştırın. Çıkış kodu 1 ise ihlal vardır,
commit etmeyin.**

Script şunları yakalar:
| Kural | Kontrol |
|---|---|
| GÖRSEL-3 | Görsel dosya boyutu > 300 KB |
| GÖRSEL-4 | Ürün görselinde `object-cover` (kırpma yapar) |
| GÖRSEL-5 | `sizes` ile grid sütun sayısı uyumsuz (gereksiz büyük indirme) |
| RESP-1 | Menü/hamburger breakpoint tutarsızlığı |
| RESP-4 | `<Image fill>` üst kabında `relative` yok |
| RESP-6 | Form alanında `htmlFor`/`aria-label` yok |
| İÇERİK-2.1 | Şablonda sabit (varyantlanmamış) cümle |
| İÇERİK-2.3 | Varyant havuzunda 3'ten az seçenek |
| İÇERİK-3 | Sayfa örtüşmesi > %20 |
| SEO-1.4 | Yeni route sitemap'e eklenmemiş |

---

## 📚 Detaylı kural dosyaları

| Dosya | Konu |
|---|---|
| [`docs/SEO-ICERIK-URETIMI.md`](docs/SEO-ICERIK-URETIMI.md) | Domain profiline göre içerik üretimi, yeni silo ekleme, farklılaşma kuralları, yol haritası |
| [`docs/GORSEL-KURALLARI.md`](docs/GORSEL-KURALLARI.md) | Ürün görseli kaynağı (resmi üretici), filigran yasağı, kırpma/boyut, `object-contain`, `sizes` |
| [`docs/RESPONSIVE-KURALLARI.md`](docs/RESPONSIVE-KURALLARI.md) | Breakpoint tutarlılığı, header taşması, yatay kayma, kontrast, form erişilebilirliği |

---

## Kopya içerik açısından KRİTİK dosyalar

Bu dosyalarda metin değiştiriyorsanız Kural 1 mutlaka geçerlidir:

| Dosya | Ağdaki sayfa sayısı | Durum |
|---|---|---|
| `src/lib/varyant.ts` | (motor) | Varyant/kompozisyon altyapısı — yeni ortak cümle buraya |
| `src/lib/bolge-sayfalari.ts` | ~586 | ✅ varyantlandı |
| `src/lib/bolge-hizmet-sayfalari.ts` | ~833 | ✅ varyant + kompozisyon (sınırlı kesişim) |
| `src/lib/terimler.ts` | ~133 | ✅ çekirdek tanım + domain bağlamı |
| `src/lib/hizmet-sayfalari.ts` | ~935 | ✅ varyantlandı |
| `src/lib/firsat-sayfalar.ts` | ~166 | ✅ varyantlandı |
| `src/lib/alt-sayfalar.ts` | ~280 | ✅ okuma anında varyantlanıyor |
| `src/lib/paylasilan-blog.ts` | ~700 | ✅ varyant + `cesitle()` |
| `src/lib/anahtar-kelime-sayfalari.ts` | ~420 | ✅ `cesitle()` |
| `src/lib/urun-katalogu.ts` | ~2.125 | ✅ `urun-kategori-bilgi.ts` — çekirdek tanım korunur, domain bağlamı eklenir |
| `src/lib/kurumsal-sayfalar.ts` | ~255 | ✅ `cesitle()` |

---

## Diğer notlar

- **Deploy:** iki Coolify uygulaması var (`kulucka-hub` 63 domain,
  `kulucka-hub-2` 26 domain). Coolify tek uygulamada 63 domain sınırına takılır.
  Push sonrası ikisini birden deploy edin.
- **git:** push için `gh auth switch -u arti-tech61` gerekir (saygitech hesabının
  bu repoya yetkisi yok).
- **Tema:** tüm domainler paylaşımlı temayı kullanır
  (`src/components/temalar/paylasilan/`). Yeni domain eklerken hem
  `siteler.ts` hem `paylasilan-tema-konfig.ts` girdisi gerekir, ve domain
  `hazirlanan-siteler.ts`'te KAYITLI OLMAMALIDIR (placeholder kontrolü
  temadan önce çalışır ve içeriği sessizce maskeler).

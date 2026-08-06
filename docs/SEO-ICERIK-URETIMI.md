# SEO Sayfa Üretimi ve İçerik Genişletme Kuralları

**Bu dosya, kulucka-hub'da yeni SEO sayfası üretmenin veya mevcut içeriği
genişletmenin TEK geçerli yöntemini tanımlar. Kurallar katıdır.**

---

## 0. Temel ilke: domain profili

85 domainin her biri **farklı bir arama niyetini** hedefler. İçerik bu profile
göre üretilir; profil dışına çıkan içerik kopya içerik sayılır.

Domain profili şu alanlardan okunur (`src/lib/siteler.ts`):

| Alan | Ne için kullanılır |
|---|---|
| `host` | Şehir/il çıkarımı, varyant tuzu (deterministik farklılaşma) |
| `bolge` | Coğrafi silo — bölge sayfaları, yerel bilgi, mesafe/lojistik anlatısı |
| `uzmanlik` | Sektörel açı — hangi tip sahalarda çalışıldığı |
| `hizmetler` | Hizmet silosu eşleştirmesi (`hizmet-konulari.ts` anahtar kelimeleri) |
| `paragraflar` | Ana sayfa anlatısı, tonu belirler |
| `kategori` | `kiralama` / `egitim` / `rehber` — sayfa tipi setini değiştirir |
| `ticariSeoProfilleri[host]` | `yer/isler/rota/kritik/zemin/olcu/makine` — en zengin ayrıştırıcı |

**KURAL 0.1** — Yeni içerik yazarken bu alanların **en az üçünü** metnin
içine dokuyun. Yalnızca `bolge` kullanmak "mad-lib" üretir ve yasaktır.

**KURAL 0.2** — `ticariSeoProfilleri` girdisi olan domainlerde (83 domain)
o profilin `isler`, `kritik`, `zemin`, `olcu` alanları içeriğin omurgasıdır.
Bu alanlar domain başına gerçekten farklıdır; kullanılmazsa farklılaşma kaybolur.

---

## 1. Sayfa tipi eklerken zorunlu iskelet

Yeni bir SEO sayfa tipi (silo) eklerken şu sözleşmeye uyulur:

```ts
export interface YeniSayfa {
    slug: string;              // TR karakter normalize edilmiş
    baslik: string;            // <title>
    aciklama: string;          // meta description, 150-160 karakter
    h1: string;                // baslik'ten FARKLI olmalı
    giris: string;             // 60+ kelime
    maddeler: { baslik: string; metin: string }[];   // en az 4
    sss: { soru: string; cevap: string }[];          // en az 5
    ilgiliUrun: { baslik: string; slug: string };    // iç link
}

export function yeniSayfalar(site: SiteIcerik): YeniSayfa[]
export function yeniSayfaBul(site: SiteIcerik, slug: string): YeniSayfa | undefined
```

**KURAL 1.1** — İki fonksiyon (liste + tekil bul) zorunludur. Sitemap ve sayfa
aynı fonksiyonu çağırır; ayrışırlarsa sitemap 404 URL üretir.

**KURAL 1.2** — `baslik` ile `h1` farklı olmalı. Aynıysa Google'a tek sinyal
gider, iki alanın anlamı kaybolur.

**KURAL 1.3** — Her metin alanı varyantlanır (bkz. Kural 2). Hiçbir alan sabit
string olamaz.

**KURAL 1.4** — Sayfa oluşturulduğunda **sitemap'e eklenmesi zorunludur**
(`src/app/sitemap.xml/route.ts`). Sitemap'te olmayan sayfa yok sayılır.

**KURAL 1.5** — JSON-LD zorunlu: en az `BreadcrumbList` + `FAQPage`.
Referans olarak `/blog/[slug]` veya `/[sayfa]` route'unu kopyalayın —
`/bolge` ve `/hizmet`'te FAQPage eksikti, onları örnek almayın.

---

## 2. Farklılaşma kuralları (kopya içerik önleme)

**KURAL 2.1 — Sabit cümle yasak.**
```ts
cevap: "Her iki seçenek de sunulur."   // ❌ 85 domainde birebir aynı
```

**KURAL 2.2 — Sadece değişken enjeksiyonu yeterli DEĞİL.**
```ts
giris: `${bolge} bölgesinde platform kiralama sunuyoruz.`  // ❌ hâlâ kopya
```
85 sayfa arasındaki tek fark bir özel isimse, Google bunu tek şablon olarak
görür. Cümle **kurgusu** da değişmeli.

**KURAL 2.3 — Varyant havuzu: en az 4-6 YAPISAL OLARAK FARKLI seçenek.**
```ts
giris: varyantSec(site, `bolge-${slug}-giris`, [
    `${bolge} bölgesindeki firmalara ... Saha bilgisi paylaşıldığında ...`,
    `${bolge} sahalarında en sık karşılaştığımız soru "hangi makine yeter?" ...`,
    `${uzm} işleri ${bolge} bölgesinde farklı saha koşulları getiriyor; ...`,
]),
```
Varyantlar farklı **uzunlukta, farklı bakış açısında ve farklı cümle
yapısında** olmalı. Eşanlamlı kelime değiştirmek varyant sayılmaz.

**KURAL 2.4 — Yüksek hacimli alanlarda kompozisyon zorunlu.**
Bir alan ağ genelinde 1.000+ kez üretiliyorsa sabit havuz yetmez
(6 varyant × 11.000 üretim = her varyant 1.800 tekrar). `kur()` kullanın:
```ts
kur(site, "tuz", [5 açılış], [5 gövde], [5 kapanış])   // 125 kombinasyon
```

**KURAL 2.5 — Tuz sayfayı tanımlamalı.**
```ts
varyantSec(site, "giris", [...])                    // ❌ aynı domainin tüm sayfaları aynı varyant
varyantSec(site, `bolge-${slug}-giris`, [...])      // ✅
```

**KURAL 2.6 — Site verisini cümlenin İÇİNE dokuyun.**
İki domain aynı varyant numarasını alsa bile metin farklı çıkmalı.

**KURAL 2.7 — Bilgi uydurmak kesinlikle yasaktır.**
Çeşitlilik **anlatım biçiminden** gelir. Uydurma rakam ("%99.4 zamanında
teslimat"), hayali referans, doğrulanmamış yerel bilgi (tesis adı, mesafe,
kapasite) yazılamaz. Bir bilgiden emin değilseniz o cümleyi yazmayın.

---

## 3. Ölçüm — atlanamaz adım

Her içerik değişikliğinden sonra sayfa seviyesi 8-gram örtüşmesi ölçülür:

```bash
node scripts/kontrol.mjs --icerik
```

| Örtüşme | Değerlendirme |
|---|---|
| < %15 | ✅ İyi |
| %15–20 | ⚠️ Kabul edilebilir, iyileştirilmeli |
| > %20 | ❌ **Merge edilmez** |

Ölçüm geçmişi CLAUDE.md'de tutulur; yeni ölçüm oraya eklenir.

---

## 4. İçerik derinliği hedefleri

| Alan | Minimum | Hedef (elle yazılmış) |
|---|---|---|
| `giris` | 60 kelime | 150+ kelime |
| `maddeler` | 4 madde × 25 kelime | 5-6 madde × 60 kelime |
| `sss` | 5 soru × 30 kelime | 6 soru × 100 kelime |
| Toplam sayfa | ~350 kelime | **1.200–1.500 kelime** |

**Referans:** `saygitech/izmir-manlift.com` — elle yazılmış ilçe/yükseklik
sayfaları 1.500 kelime, 8-gram örtüşmesi %0.2. Kalite hedefi budur.

---

## 5. Eksik sayfa tipleri (yol haritası)

Analiz sonucu kulucka-hub'da olmayan, izmir-manlift.com'da bulunan siloların
öncelik sırası:

| Öncelik | Silo | Potansiyel sayfa | Gerekli yeni veri |
|---|---|---|---|
| ✅ | **Bölge × Hizmet kesişimi** | **833 (kuruldu)** | — |
| ✅ | Teknik terim sözlüğü (`/sozluk`) | **133 (kuruldu)** | — |
| 3 | Marka sayfaları (`/markalar`) | ~7 × ortak | marka veri modeli |
| 4 | Yükseklik-niyetli sayfalar (`/yukseklik`) | ~8 × 85 | mevcut ürün verisinden türetilebilir |
| 5 | İlçe derinliği (il → ilçe hiyerarşisi) | ~1.000+ | yapılandırılmış ilçe verisi |

### ⚠️ Bölge × Hizmet kesişiminde neden 6.446 değil 833 sayfa

Kartezyen çarpım 6.446 sayfa ederdi, ancak analizde bunun yalnızca **%32'si**
sitenin gerçekten sunduğunu beyan ettiği bir hizmete karşılık geliyordu.
Kalan 4.415 sayfa sahte kombinasyon olurdu (yalnızca makaslı platform kiralayan
bir siteye "örümcek platform kiralama" sayfası açmak gibi) — hem yanlış bilgi,
hem de Google'in **doorway page** tanımına birebir uyuyor. Ağ 2,1 katına
çıkar ve olası ceza 85 domainin tamamını birden etkilerdi.

Konulan iki sınır (`src/lib/bolge-hizmet-sayfalari.ts`):

1. Yalnız `site.hizmetler` ile GERÇEKTEN eşleşen hizmet konuları
2. Yalnız ilk `MAKS_BOLGE = 3` bölge

**KURAL 5.0 — Sayfa sayısı hedef değildir.** Yeni silo eklerken "kaç sayfa
üretebilirim" değil, **"kaç sayfa gerçek bir arama niyetine karşılık geliyor"**
sorusu sorulur. Dolgu sayfa üretmek ağın tamamını riske atar.

**KURAL 5.1** — Yeni silo eklerken sayısal bir eksen varsa (yükseklik, kapasite,
fiyat bandı), ilgili sayfa seçimi **metin benzerliğiyle değil o eksenle**
yapılır (`Math.abs(a.height - b.height)` gibi).

**KURAL 5.2** — Envanterde karşılığı olmayan sorgu için sayfa açılacaksa
(`/yukseklik/12-metre` ama filoda tam 12 m yok), şablon **otomatik dürüstlük
uyarısı** basmalıdır. Yalan söyleyerek sayfa açmak yasaktır.
(izmir-manlift.com'daki `exactMatch: false` deseni.)

---

## 6. Ölçek uyarısı

İç linkleme motoru (token örtüşme skorlaması) **O(n²)** çalışır.
85 domain × 100 sayfa tek build'de karşılaştırılırsa build süresi patlar.

**KURAL 6.1** — Token haritaları **kiracı (domain) başına** kurulur.
Kiracılar arası link zaten istenmez.

**KURAL 6.2** — Sayfa sayısı domain başına 150'yi geçerse `force-dynamic`
yerine ISR/cache stratejisi gerekir.

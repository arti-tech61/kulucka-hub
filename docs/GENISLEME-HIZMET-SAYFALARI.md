# Hizmet Sayfaları Elle Yazım Projesi — 935 Sayfa

Tarih: 2026-08-13. Kapsam: 85 domain × 11 sabit hizmet konusu = **935 sayfa**.
Kullanıcı onayı: "Tam ağ (935 sayfa) — bölge projesiyle aynı ölçek."

Altyapı hazır (commit `77361b0`): `hizmet-sayfalari.ts` artık
`bespokeBul(site, "hizmet:<slug>")` + `bespokeUygula()` kullanıyor —
`bolge-sayfalari.ts` ile birebir aynı mekanik. `/hizmet/[slug]/page.tsx`
`ekBölümler` (ilk bölümde tablo) render ediyor.

---

## 1. Neden bölge projesinden FARKLI bir risk profili var

Bölge sayfalarında her domain **farklı bir slug kümesi** yazıyordu (bir
domain "kazan", diğeri "polatli-osb" vb.) — çakışma yalnızca paylaşılan
slug'larda oluyordu. **Hizmet sayfalarında durum ters: 85 domainin HEPSİ
AYNI 11 slug'ı yazacak** (`sepetli-orumcek-platform-kiralama`,
`nakliye-teslimat-hizmeti`, ... `zor-zemin-arazi-platform-kiralama`).
Bu, potansiyel olarak 85×84/2×11 ≈ 39.270 sayfa-çifti karşılaştırması
demek — ama gerçek risk daha düşük, çünkü:

1. Her domainin **kendi bölge/uzmanlık kimliği** var (bölge genişleme
   projesinde her domaine atanmış özgün "açı" — örn. bursamanlift.net'in
   "OSB fabrikalarında cephe/çatı erişimi", aydinplatform.net'in "otel,
   enerji, tarım sanayisi" açısı). Hizmet sayfaları bu açıdan YAZILIRSA
   doğal olarak ayrışır — jenerik "sepetli platform nedir" tanımı değil,
   "bu domainin bölgesinde bu hizmet nasıl işliyor" anlatımı.
2. Genel tanım cümleleri (örn. "sepetli platform dar alanlarda kullanılır")
   YASAK değil ama **domain-özel saha detayına gömülmeden tek başına
   paragraf olamaz** — her paragraf o domainin bölgesindeki gerçek bir
   sektör/tesis tipine bağlanmalı.

**Ölçüm exhaustive yapılabilir** (agent değil, script): 39.270 karşılaştırma
saf metin işleme, milisaniyeler sürer. Her parti sonunda ilgili slug'lar
için TÜM domain çiftleri ölçülecek (örnekleme değil, tam tarama).

---

## 2. İçerik stratejisi

Her domain kendi **mevcut açısını** (bölge bespoke dosyalarındaki üslup ve
sektör vurgusu) 11 hizmet konusuna uygular. Örnek: bursamanlift.net (açı:
OSB fabrikalarında cephe/çatı/hat üstü erişim) için:

- `sepetli-orumcek-platform-kiralama` → OSB'de yüksek hat/boru köprüsü işlerinde örümcek platform
- `nakliye-teslimat-hizmeti` → OSB'ler arası (DOSAB-Hasanağa-NOSAB) sevkiyat rotası
- `forklift-istifleme-kiralama` → fabrika depo/rampa forklift kullanımı
- `eklemli-platform-boom-kiralama` → hat üstü boru/kablo tavası engel aşma
- `ic-mekan-depo-platform-kiralama` → fabrika içi tesisat/aydınlatma
- `celik-konstruksiyon-montaj-platformu` → OSB'de yeni tesis çatı montajı
- `tarim-silo-platform-kiralama` → (bu domainin bölgesinde tarım sanayi yoksa dürüstçe az/kısa tutulur, uydurma yasak — bkz. §4)
- `enerji-aydinlatma-bakim-platformu` → fabrika dış aydınlatma/trafo çevresi
- `operatorlu-platform-kiralama` → OSB güvenlik prosedürü + operatör belge süreci
- `cok-noktali-rota-bakim-platformu` → aynı OSB'de birden fazla fabrikayı aynı turda gezme
- `zor-zemin-arazi-platform-kiralama` → OSB inşaat/hafriyat aşaması sahaları

**Simetri (bölge sayfalarıyla aynı):** h1 → giriş (tek uzun paragraf) →
5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS → kaynak beyanı.
1.000-1.500 kelime/sayfa. Bilgi uydurma yasak — domainin GERÇEKTEN
kapsadığı sektörler `siteler.ts`'teki `bolge`/`uzmanlik` alanlarından ve
o domainin bölge bespoke dosyalarından çıkarılır.

### §4 Dürüstlük kuralı — sektör uyumsuzluğu

Bazı hizmet konuları (örn. `tarim-silo-platform-kiralama`) bazı domainlerin
bölgesinde (örn. tamamen şehir merkezi/AVM odaklı bir domain) gerçekten
nadir olabilir. Bu durumda sayfa UYDURULMAZ — dürüstçe "bu bölgede daha
az sıklıkla ama karşılaşılan" çerçevesiyle yazılır, ya da domainin en
yakın gerçek sektörüyle (örn. şehir içi peyzaj/park bakımı) ilişkilendirilir.
Her domainin `docs/GENISLEME-*.md` belgelerindeki "açı" tanımı ve
`hedef-bolgeler.ts` verisi tek doğrulama kaynağıdır.

---

## 3. Uygulama sırası — domain başına 1 ajan, 11 sayfa

85 domain, dalga başına ~6-8 ajan paralel (bölge projesindeki desenle
aynı). Öncelik sırası `docs/ICERIK-SIRASI.md`'deki puanlamayla aynı
(en yüksek arama hacimli / en köklü domainler önce).

**Her ajan görevi:** tek domain, 11 hizmet konusu, `src/lib/bespoke/<host>.ts`
dosyasına `"hizmet:<slug>"` kayıtları (mevcut dosyanın İÇİNE, kapanış `};`
öncesine — yeni dosya AÇILMAZ, host zaten `bespoke-icerik.ts`'te kayıtlı).
Ajan önce kendi domainin MEVCUT bölge bespoke dosyalarını okur (açı/üslup
referansı için), sonra 11 hizmet sayfasını yazar.

## 4. Doğrulama protokolü (her dalga sonunda)

1. `npm run build`
2. **Tam tarama örtüşme scripti** (aşağıda) — o dalgadaki domainlerin
   yazdığı HER slug için, o slug'ı yazmış TÜM domainler (yeni + önceden
   yazılmış) arasında 8-gram örtüşmesi. Hedef <%1, sert sınır %20.
3. `npm run kontrol`
4. Commit → `gh auth switch -u arti-tech61` → push → iki Coolify deploy
5. Canlı curl doğrulaması (birkaç `/hizmet/<slug>` örneği, 200 + sitemap)

### Tam-tarama örtüşme scripti (şablon)

```js
// Tüm bespoke hizmet:* kayıtlarını host bazında topla, aynı slug'ı
// yazan her domain çiftini karşılaştır. bolge ölçüm scriptinin aynısı,
// yalnız "hizmet:" önekiyle filtrelenmiş.
import { BESPOKE } from "./src/lib/bespoke-icerik.ts";
function metin(s) { /* İzmir belgesi §7 ile aynı */ }
function ort(a, b) { /* aynı */ }
const hizmetKayitlari = {}; // { slug: { host: BespokeIcerik } }
for (const [host, sayfalar] of Object.entries(BESPOKE)) {
  for (const [anahtar, icerik] of Object.entries(sayfalar)) {
    if (!anahtar.startsWith("hizmet:")) continue;
    const slug = anahtar.slice(7);
    (hizmetKayitlari[slug] ??= {})[host] = icerik;
  }
}
for (const [slug, hostlar] of Object.entries(hizmetKayitlari)) {
  const isimler = Object.keys(hostlar);
  for (let i = 0; i < isimler.length; i++)
    for (let j = i + 1; j < isimler.length; j++) {
      const o = ort(metin(hostlar[isimler[i]]), metin(hostlar[isimler[j]]));
      if (o > 0.01) console.log(`${slug} | ${isimler[i]} vs ${isimler[j]} | ${(o*100).toFixed(1)}%`);
    }
}
```

## 5. Kabul kriterleri

- [ ] 935/935 sayfa (85 domain × 11 konu) elle yazılmış, `elleYazilmis: true`
- [ ] Her slug için TÜM domain çiftleri <%1 örtüşme (hiçbiri >%5)
- [ ] `npm run kontrol` + son dalgada `npm run kontrol:icerik` 0 ihlal
- [ ] Uydurulmuş tesis adı/rakam yok; sektör uyumsuzluğunda §4 dürüstlük kuralı uygulanmış
- [ ] Tüm `/hizmet/<slug>` sayfaları (85×11) canlıda 200

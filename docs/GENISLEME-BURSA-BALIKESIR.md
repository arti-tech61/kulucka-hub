# Bursa + Balıkesir/Bandırma SEO Genişleme — Uygulama Emri

Tarih: 2026-08-13. Format ve teknik mekanik referansı:
`docs/IZMIR-SEO-GENISLEME.md` (Bölüm 1 "sayfa nasıl doğar", Bölüm 2 "geçilmez
kurallar", Bölüm 7 "doğrulama protokolü" ve Bölüm 8 "bilinen tuzaklar" burada
da AYNEN geçerlidir — tekrar yazılmadı, oradan uygula). Bu belge yalnız
Bursa + Balıkesir/Bandırma kümesine özgü rakip analizi, envanter ve Faz A iş
emrini içerir.

---

## 0. Bağlam — neden bu iş

"bursa manlift kiralama", "bursa platform kiralama", "balıkesir platform
kiralama" ve "bandırma manlift" için Google 1. sayfa organik tarama yapıldı
(2026-08-13). Kendi kümemiz 6 domain × 5-10 bölge sayfası ile derinlikte
(1.000+ kelime, SSS, tablo) rakiplerin önünde; kapsamda en güçlü Bursa rakibi
26 ilçe/bölge sayfasıyla önde. Bandırma'da ise tek bir firma (Ar-Ge Vinç)
mikro-site ağıyla exact-match domain oyunu oynuyor ama içerik ince.

### Rakip envanteri (Google 1. sayfa, WebFetch ile incelendi)

| Rakip | Bölge sayfası | Blog | Derinlik | SSS/tablo/fiyat |
|---|---|---|---|---|
| bursamanliftkiralama.com | **26 ilçe/bölge** (Osmangazi, Nilüfer, Yıldırım, Gemlik, Mudanya, Karacabey, İznik, Yenişehir, GUSAB, Pilot Sanayi, TEKNOSAB…) | var (sayı belirsiz) | karma, kısa tanıtım + ürün linki | yok |
| bursamanlift.com | ~25 bölge adı ama **tek haber sayfasında liste** (ayrı sayfa değil) | 16 yazı (teslimat haberleri ağırlıklı) | uzun anasayfa, geri kalanı sığ | yok |
| bursaplatform.com.tr | 3 bölge (Bursa/İzmir/Balıkesir), ilçe sayfası yok | 3 haber (fuar + makine alımı) | şablon | yok |
| makasliplatformbursa.com (Sakin Vinç) | ilçe sayfası yok; Nilüfer OSB, Demirtaş OSB, Kestel OSB metin içinde | 6 yazı (ürün tanıtımı) | karma | minimal fiyat ("aylık 8.000 TL'den") |
| balikesirplatform.com.tr | 5 bölge adı (Balıkesir, Bandırma, Gönen, Bursa, İzmir), ayrı bölge sayfası yok | yok | şablon, slogan ağırlıklı | yok; 43+ ürün sayfası |
| Ar-Ge Vinç ağı (argevinc.com + manliftbandirma.com/.com.tr, platformbandirma.com/.com.tr, vincbandirma.com.tr, gonenmanlift.net, bandirmaplatform.com) | mikro-site başına 1-4 hizmet sayfası; Bandırma + Gönen exact-match domainler | menüde blog var, içerik sığ | hibrit şablon | yok |

### Rakiplerin ortak zayıflıkları → bizim silahımız

1. **Bölge sayfası ya yok ya kabuk.** 26 sayfalık lider bile kısa tanıtım +
   ürün linki; bizim standart 1.000-1.500 kelime elle yazım.
2. **SSS / karşılaştırma tablosu sıfır** — featured snippet ve AI özet
   yakalayan yapı hiçbirinde yok.
3. **Fiyat mantığı anlatımı yok** (tek istisna "aylık 8.000 TL'den" tek cümle).
4. **Blog fiilen makine-alım haberi**; bilgi içeriği yok.
5. Bandırma'daki mikro-site ağı domain eşleşmesi kazanıyor ama her site
   2-3 şablon sayfası — derin bölge içeriğiyle geçilebilir.
6. Balıkesir tarafında **hiçbir rakipte ilçe sayfası yok** (Edremit, Ayvalık,
   Burhaniye, Gönen OSB tamamen boş alan).

**Strateji: Bursa'da lider rakibin tek üstünlüğü olan kapsamı OSB/ilçe
derinliğiyle kapat; Balıkesir'de kimsenin yazmadığı ilçe/OSB sayfalarını
ilk biz yazalım. Her sayfa elle yazılır.**

---

## 1. Kendi envanterimiz (2026-08-13 kod durumu)

6 domainin `siteler.ts` `bolge:` listesi ile `src/lib/bespoke/` kapsamı
birebir eşit — **mevcut her bölgenin elle yazılmış sayfası var, borç yok.**
Bespoke dosyaları mevcut, yeni dosya AÇILMAZ; kayıtlar dosya İÇİNE eklenir.

| Domain | Açı (kayıtlı) | Mevcut `bolge:` | Bespoke dosya |
|---|---|---|---|
| bursamanlift.net | Nilüfer/DOSAB/Hasanağa OSB cephe-çatı erişimi, OSB fabrikaları | Nilüfer, DOSAB, Hasanağa OSB, Osmangazi, Yıldırım, İnegöl OSB, Gemlik sanayi bölgesi, Bilecik OSB (çevre ili), Yalova (çevre ili) | `bursamanlift-net.ts` |
| bursamanliftkiralama.net | Uzun süreli/aylık kiralama; İnegöl-Kestel-Gürsu + Gemlik-Mudanya hattı | İnegöl, Kestel, Gürsu, Gemlik, Mudanya, DOSAB, İnegöl OSB, Gemlik sanayi bölgesi, Bilecik OSB (çevre ili), Yalova (çevre ili) | `bursamanliftkiralama-net.ts` |
| manliftkirala.online | Nilüfer-Osmangazi tekstil/otomotiv yan sanayi, vardiyaya uygun teslimat | Nilüfer, Osmangazi, Bursa OSB, Demirtaş OSB, Yıldırım, Kestel | `manliftkirala-online.ts` |
| bursaeklemliplatform.net | Şehir merkezi yüksek bina/AVM cephesi, eklemli (26-34 m) | Osmangazi, Nilüfer merkez, Yıldırım, Bursa şehir merkezi, Kestel (çevre ilçe) | `bursaeklemliplatform-net.ts` |
| bandirmamanlift.net | Liman/tersane/fabrika, bölgesel teklif (Bandırma hattı) | Bandırma, Erdek, Gönen, Biga, Balıkesir OSB, Susurluk sanayi bölgesi, Çanakkale OSB (çevre ili), Gemlik (Bursa çevre ili) | `bandirmamanlift-net.ts` |
| balikesirplatform.org | Gıda/zeytinyağı/süt sanayi, hijyenik saha (Susurluk-Gönen) | Susurluk, Gönen, Susurluk OSB, Balıkesir merkez, Manyas, Bursa (çevre ili) | `balikesirplatform-org.ts` |

⚠️ **Alias uyarısı:** `dosab` (bursamanlift.net + bursamanliftkiralama.net) ile
`demirtas-osb` (manliftkirala.online) AYNI OSB'dir (Demirtaş OSB = DOSAB).
Küme genelinde bu OSB'yi zaten 3 domain anlatıyor — yeni sayfalarda bu OSB'ye
DÖRDÜNCÜ bir alias/slug ekleme. Benzer şekilde `susurluk-sanayi-bolgesi`
(bandirmamanlift) ile `susurluk-osb` (balikesirplatform) aynı bölgeyi anlatır.

---

## 2. Doğrulanabilir bölge havuzu (bunların dışına çıkma)

`src/lib/hedef-bolgeler.ts` verisi + kamuya açık gerçekler:

- **Bursa sanayi:** Bursa OSB (Nilüfer), DOSAB, NOSAB (Nilüfer OSB), Hasanağa
  OSB, İnegöl OSB, Gemlik OSB, Kestel OSB, Yenişehir OSB, Karacabey OSB,
  Mustafakemalpaşa OSB, TEKNOSAB, Gemlik Limanı ve Serbest Bölgesi, Beşevler
  Küçük Sanayi Sitesi, İnegöl Mobilya Küçük Sanayi Sitesi.
- **Bursa karakter:** İnegöl = mobilya üretim merkezi; Gemlik = liman +
  serbest bölge; Karacabey = gıda/tarıma dayalı sanayi; Görükle (Nilüfer) =
  Uludağ Üniversitesi kampüsü çevresi; Yenişehir, Mustafakemalpaşa, Orhangazi
  = ilçe + OSB.
- **Balıkesir sanayi:** Balıkesir OSB, Bandırma OSB, Gönen OSB, Susurluk OSB,
  Edremit OSB, Bandırma Limanı.
- **Balıkesir karakter:** Edremit-Burhaniye-Ayvalık körfez hattı = zeytin ve
  zeytinyağı işleme; Gönen = deri + termal; Bandırma = liman kenti.

Bu listede olmayan tesis/firma adı, rakam, istatistik YAZILMAZ. GUSAB ve
"Pilot Sanayi" rakip sitede geçiyor ama biz doğrulamadık — KULLANMA.

---

## 3. FAZ A — Bölge genişlemesi (20 sayfa)

⛔ **SONA-EKLEME KURALI MUTLAK:** Aşağıdaki metinler `siteler.ts`'te ilgili
domainin `bolge:` alanının **EN SONUNA, virgülle, AYNEN bu yazımla** eklenir.
Mevcut girdiler SİLİNMEZ, sırası ve yazımı DEĞİŞTİRİLMEZ, ortaya/başa ekleme
YASAK (ilk 3 girdi `/bolge/<slug>/<hizmet>` alt sayfalarını, ilk girdi onlarca
şablon başlığını besler — kayma = canlı URL 404 + toplu metin değişimi).
Ekleme sonrası `git diff src/lib/siteler.ts` ile her değişen satırda eski
girdilerin aynen korunduğunu doğrula. Her yeni slug için bespoke kaydı
(`"bolge:<slug>"`, `BespokeIcerik` simetrisi: h1 + giriş + 5 madde + 3 ek
bölüm (ilki tablolu) + 6 SSS + kaynak, 1.000-1.500 kelime) ilgili mevcut
bespoke dosyasının İÇİNE, kapanış `};` öncesine eklenir.

### A1. bursamanlift.net — açı: OSB fabrikalarında cephe/çatı/hat üstü erişim (3 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| NOSAB | `nosab` | Nilüfer OSB fabrikalarında çatı-cephe ve hat üstü aydınlatma erişimi; DOSAB/Hasanağa sayfalarından farklı saha anlatımı |
| Bursa OSB | `bursa-osb` | Türkiye'nin köklü OSB'lerinden birinde tekstil/otomotiv tesisi cephe-çatı bakımı — ⚠️ manliftkirala.online'da aynı slug VAR, önce onu oku |
| Beşevler Küçük Sanayi Sitesi | `besevler-kucuk-sanayi-sitesi` | KSS ölçeğinde atölye/dükkan cephe ve çatı işleri, dar site içi manevra |

### A2. bursamanliftkiralama.net — açı: uzun süreli/aylık kiralama, doğu hattı + Gemlik kıyısı (4 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| Kestel OSB | `kestel-osb` | OSB tesislerinde aylık sözleşme + periyodik bakım modeli — ⚠️ aynı domainde `kestel` (ilçe) sayfası VAR, OSB sahası anlatımıyla ayrış |
| Yenişehir | `yenisehir` | Yenişehir OSB'li ilçede proje süreli kiralama ekonomisi |
| Orhangazi | `orhangazi` | Gemlik-İznik aksındaki sanayi ilçesinde uzun süreli makine konuşlandırma |
| Gemlik Serbest Bölgesi | `gemlik-serbest-bolgesi` | serbest bölge giriş/evrak düzeninde uzun süreli kiralama — ⚠️ küme içinde `gemlik-sanayi-bolgesi` ×2 ve `gemlik` VAR, serbest bölge rejimi açısıyla ayrış |

### A3. manliftkirala.online — açı: üretim vardiyasına uygun teslimat, tekstil/otomotiv/gıda (3 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| TEKNOSAB | `teknosab` | yeni kurulan teknoloji OSB'sinde kuruluş/montaj dönemi işleri, vardiya öncesi teslimat |
| Karacabey | `karacabey` | gıda/tarıma dayalı sanayi ilçesinde üretim akışını kesmeyen bakım teslimatı |
| Mustafakemalpaşa | `mustafakemalpasa` | ilçe OSB'sinde planlı sevkiyat, Bursa merkezden mesafe-lojistik gerçeği |

### A4. bursaeklemliplatform.net — açı: yüksek bina/AVM/cephe, engel aşan eklemli (3 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| Görükle | `gorukle` | üniversite kampüsü çevresi rezidans/yurt cepheleri, balkon-parapet engeli |
| Mudanya | `mudanya` | sahil sitelerinde dar sokak + cephe girintisi — ⚠️ bursamanliftkiralama.net'te aynı slug VAR (tersane açılı), önce onu oku |
| Gemlik | `gemlik` | liman kenti çok katlı konut/iş merkezi cepheleri — ⚠️ bursamanliftkiralama.net'te aynı slug VAR (liman deposu açılı), önce onu oku |

### A5. bandirmamanlift.net — açı: liman/tersane/fabrika bölgesel teklif (3 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| Bandırma OSB | `bandirma-osb` | OSB kapı/kantar düzeni, fabrika bakım duruşu — ⚠️ aynı domainde `bandirma` (ilçe) sayfası VAR, OSB prosedürü açısıyla ayrış |
| Bandırma Limanı | `bandirma-limani` | liman sahası aydınlatma/üst yapı işleri, rüzgâr ve araç trafiği ayrımı — aynı domainin `bandirma` sayfasından liman-özel anlatımla ayrış |
| Manyas | `manyas` | Bandırma-Gönen arasındaki ilçeye bölgesel sevkiyat — ⚠️ balikesirplatform.org'da aynı slug VAR (gıda açılı), önce onu oku |

### A6. balikesirplatform.org — açı: gıda/zeytinyağı/süt sanayi, hijyenik saha (4 sayfa)

| `bolge:` alanına AYNEN eklenecek | Slug | Yazım açısı ipucu |
|---|---|---|
| Gönen OSB | `gonen-osb` | deri + gıda OSB'sinde hijyen ve koku-toz koşullu makine hazırlığı — ⚠️ aynı domainde `gonen` (ilçe) VAR ve bandirmamanlift.net'te de `gonen` VAR; OSB sahası açısıyla ikisinden de ayrış |
| Edremit | `edremit` | körfez zeytinyağı işleme tesisleri, hasat dönemi bakım takvimi (Edremit OSB varlığı kamuya açık) |
| Burhaniye | `burhaniye` | körfez hattı gıda/zeytin tesisleri + turizm yapıları karma talebi |
| Ayvalık | `ayvalik` | zeytinyağı işleme ve dolum tesislerinde hijyenik platform, sezonluk yoğunluk |

**Faz A toplamı: 20 yeni elle yazılmış bölge sayfası** (A1:3, A2:4, A3:3,
A4:3, A5:3, A6:4).

---

## 4. Çakışma haritası — MEVCUT + YENİ

Yazmadan önce slug'ı içeren TÜM kardeş dosyaları grep'le teyit et:
`grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts`

### Aynı slug, birden fazla domain (sıfırdan, kendi açısından yazılır; 8 kelimelik ardışık ortaklık yasak, hedef örtüşme <%1)

| Slug | Mevcut bespoke | Yeni yazacak | Toplam |
|---|---|---|---|
| bursa-osb | manliftkirala-online | A1 | 2 |
| mudanya | bursamanliftkiralama-net | A4 | 2 |
| gemlik | bursamanliftkiralama-net | A4 | 2 |
| manyas | balikesirplatform-org | A5 | 2 |

### Akraba tema (farklı slug, aynı coğrafya — anlatım çapası zorunlu ayrık)

| Yeni slug | Akraba mevcut kayıtlar | Ayrışma çapası |
|---|---|---|
| gemlik-serbest-bolgesi (A2) | gemlik-sanayi-bolgesi (bursamanlift-net + bursamanliftkiralama-net), gemlik (bursamanliftkiralama-net), gemlik-bursa-cevre-ili (bandirmamanlift-net) + A4'ün yeni `gemlik`i | SADECE serbest bölge rejimi: giriş izni, evrak, bölge içi çalışma düzeni |
| kestel-osb (A2) | kestel (bursamanliftkiralama-net + manliftkirala-online), kestel-cevre-ilce (bursaeklemliplatform-net) | SADECE OSB sahası; ilçe/şehir dokusu anlatma |
| nosab (A1) | dosab ×2, demirtas-osb, bursa-osb | NOSAB'ın kendi sahası; DOSAB/Bursa OSB ile kıyas cümlesi kurma |
| bandirma-osb, bandirma-limani (A5) | bandirma (aynı domain!) | OSB = prosedür/kantar; liman = saha/rüzgâr; ilçe sayfasının genel anlatımını tekrarlama |
| gonen-osb (A6) | gonen (aynı domain!) + gonen (bandirmamanlift-net) | SADECE OSB tesis düzeni; ilçe/termal anlatımına girme |

**Sıralı yazım kuralı:** çakışan/akraba slug'lar parti içinde SIRAYLA yazılır
(paralel değil); her yeni sayfa öncekilerin son hâlini okur.

---

## 5. Uygulama sırası

1. **Parti 1:** A1 + A3 (Bursa OSB/sanayi, 6 sayfa; `bursa-osb` çifti burada — sıralı) → doğrula → deploy
2. **Parti 2:** A2 + A4 (7 sayfa; `gemlik`/`gemlik-serbest-bolgesi` ve `mudanya` akrabalıkları burada — sıralı) → doğrula → deploy
3. **Parti 3:** A5 + A6 (Balıkesir, 7 sayfa; `manyas` çifti ve `gonen-osb`/`bandirma-osb` aynı-domain akrabalıkları — sıralı) → doğrula → deploy

Parti başına doğrulama, örtüşme ölçüm scripti, commit/push (`gh auth switch
-u arti-tech61`), iki Coolify deploy ve canlı kontrol:
`docs/IZMIR-SEO-GENISLEME.md` Bölüm 7'deki protokol AYNEN uygulanır.

## 6. Kabul kriterleri

- [ ] 20 yeni bölge sayfası canlıda 200 dönüyor ve sitemap'te
- [ ] `git diff src/lib/siteler.ts`: eklemeler yalnız satır sonlarında, mevcut girdiler aynen
- [ ] Kardeş çiftlerde 8-gram örtüşme <%1 (hiçbiri >%5 değil)
- [ ] `npm run kontrol` 0 ihlal; son partide `npm run kontrol:icerik`
- [ ] Her sayfa 1.000+ kelime, simetri tam (5 madde / 3 ek bölüm+tablo / 6 SSS / kaynak)
- [ ] Uydurulmuş tesis adı/rakam yok; Bölüm 2 havuzu dışında yerel iddia yok
- [ ] DOSAB'a yeni alias/slug eklenmedi

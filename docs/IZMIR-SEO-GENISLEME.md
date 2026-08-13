# İzmir SEO Genişleme — Uygulama Emri (Codex için eksiksiz talimat)

Tarih: 2026-08-13. Bu belge kendi başına yeterlidir: bağlam, rakip analizi,
teknik mekanik, domain bazlı iş emirleri, doğrulama protokolü ve kabul
kriterleri içerir. **Sırayla uygula, hiçbir adımı atlama.**

---

## 0. Bağlam — neden bu iş

"izmir manlift kiralama" ve "izmir platform kiralama" Google 1. sayfa rakip
taraması yapıldı. Kendi İzmir kümemiz (11 domain, ~89 elle yazılmış bölge
sayfası) **derinlikte tüm rakipleri şimdiden geçiyor** ama **kapsamda geride**:
en güçlü rakip 60+ ilçe sayfasına sahip, biz ilçe başına daha az noktadayız.

### Rakip envanteri (Google 1. sayfa)

| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| izmirmanliftplatform.com | **60+ ilçe** | Yok | 200-300 kelime şablon, tek uzun rehber |
| izmirmanlift.com | 30+ ilçe/çevre il | 4 kısa haber | 200-300 kelime şablon |
| izmirplatform.com.tr (A.Ş.) | Yok | 3 haber | 30+ ürün sayfası, metre+marka detaylı |
| makasliplatformizmir.com | 12 ilçe | Yok | Düşük-orta |
| izmirplatformkiralama.com.tr | Yok | Minimal | Kısa, tekrarlı |
| izmirplatform.org | Yok | 3 haber | Sınırlı |
| izmirkiralikplatform.com | Yok | Yok | Tek sayfa |

### Rakiplerin ortak zayıflıkları → bizim silahımız
1. Blog fiilen yok (en iyisi 4 "makine aldık" haberi).
2. SSS / tablo / karşılaştırma içeriği sıfır — featured snippet ve AI özet
   yakalayan yapı yok.
3. Sayfa başına 200-300 kelime şablon; bizim standart 1.000-1.500 kelime elle yazım.
4. Sektörel sayfa (tersane, rüzgar, liman, soğuk zincir, AVM/otel) hiçbirinde yok.
5. Fiyat şeffaflığı zayıf.

**Strateji: rakiplerin tek üstünlüğü olan kapsamı kapat (Faz A), kimsenin
girmediği sektör ve karar sayfalarıyla ara (Faz B + C). Her sayfa elle yazılır.**

---

## 1. Teknik mekanik — sayfa nasıl doğar (EZBERLE)

Depo: `/root/portfoy/kulucka-hub` (Next.js 16, çok-kiracılı; host header →
içerik). İki sayfa tipi kullanılacak:

### 1a. Bölge sayfası (`/bolge/<slug>`) — Faz A
1. `src/lib/siteler.ts` → ilgili domainin `bolge:` alanı virgüllü düz metin
   listesidir. Yeni bölge adını **Türkçe karakterleriyle, listenin EN SONUNA**
   ekle. Rota + sitemap otomatik üretilir, başka route dosyası YOK.

   ⛔ **SONA EKLEME KURALI MUTLAK — ortaya/başa ekleme YASAK.** Nedenleri:
   - `bolge-hizmet-sayfalari.ts:240` yalnız **ilk 3 girdiden** `/bolge/<slug>/<hizmet>`
     alt sayfaları üretir (`slice(0, MAKS_BOLGE)`). İlk 3'e yeni girdi sokarsan
     mevcut bir bölgenin 5 alt sayfası ROTADAN DÜŞER → indekslenmiş URL'ler 404.
   - `anahtar-kelime-sayfalari.ts:50` ve `firsat-sayfalar.ts:23` **ilk girdiyi**
     başlık/metinlerde kullanır — ilk girdi değişirse onlarca canlı sayfanın
     metni değişir.
   - `bolge-sayfalari.ts` `ilgiliUrun`'u liste indeksinden türetir — araya
     girmek sonraki tüm bölgelerin ürün eşleşmesini kaydırır.

   Düzenleme sonrası kontrol: `git diff src/lib/siteler.ts` çıktısında her
   değişen `bolge:` satırında eski girdiler AYNEN ve AYNI SIRADA korunmuş,
   eklemeler yalnız satır sonunda olmalı. Mevcut bir adı asla yeniden yazma
   (varyant tuzları bölge adına bağlı — ad değişirse canlı içerik değişir).
2. Slug, `bolge-sayfalari.ts` içindeki `slugla()` ile üretilir:
   küçük harf (tr-TR), ı→i ğ→g ü→u ş→s ö→o ç→c, alfasayısal olmayan → `-`.
   Örn. `"Kemalpaşa OSB"` → `kemalpasa-osb`, `"Çiğli Atatürk OSB"` →
   `cigli-ataturk-osb`. Parantez de tireye döner: `"Foça (çevre ilçe)"` →
   `foca-cevre-ilce`.
3. Elle yazılmış içerik `src/lib/bespoke/<host-tireli>.ts` dosyasına eklenir
   (dosyalar zaten var — 11 İzmir domaininin hepsinin dosyası mevcut, İÇİNE
   yeni `"bolge:<slug>"` kayıtları ekleyeceksin, yeni dosya açma).
4. Kayıt anahtarı `"bolge:<slug>"`; tip `BespokeIcerik`
   (`src/lib/bespoke-icerik.ts:120`):
   ```ts
   "bolge:kemalpasa-osb": {
       h1: "...",
       giris: "tek uzun paragraf",
       maddeler: [ { baslik, metin } × 5 ],
       ekBolumler: [
           { baslik, paragraflar: [...], tablo: { basliklar: [...], satirlar: [[...]] } }, // İLK bölümde tablo ZORUNLU
           { baslik, paragraflar: [...] },
           { baslik, paragraflar: [...] },
       ],
       sss: [ { soru, cevap } × 6 ],  // uzun, senaryolu cevaplar
       kaynak: "Elle yazıldı — <tarih>. <hangi bilgi kamuya açık, hangi bilgi firma pratiği>. Tesis adı ve rakam uydurulmamıştır.",
   },
   ```
   `bespokeUygula()` bu kaydı şablonun üstüne bindirir ve `elleYazilmis: true`
   otomatik işaretlenir — ek bir bayrak koyma.
5. Host zaten `bespoke-icerik.ts`'te kayıtlı (11 İzmir domaininin hepsi) —
   **yeni import/kayıt satırı GEREKMEZ.** Yanlışlıkla ikinci kez kaydedersen
   TS "duplicate key" hatası verir.

### 1b. Serbest sayfa (`/<slug>`) — Faz B ve C
`src/lib/alt-sayfalar.ts` → `altSayfalar: Record<host, AltSayfa[]>` yapısına,
ilgili hostun dizisine yeni öğe ekle:
```ts
{ slug, baslik, aciklama, h1, paragraflar: [...], maddeler?: [...], sss?: [...], kaynaklar?: [...] }
```
Sitemap otomatik. Bu dosya 85 domainde paylaşımlıdır — **buraya yazdığın her
cümle sadece o hostun dizisinde durduğu sürece güvenlidir; ortak yardımcılara
(varyant fonksiyonları) sabit cümle EKLEME.**

---

## 2. GEÇİLMEZ KURALLAR

1. **Kopya içerik yasak.** Aynı slug'ı birden fazla domain yazıyorsa her biri
   kendi açısından, sıfırdan yazılır. Yazmadan önce o slug'ı içeren TÜM kardeş
   dosyaları oku (`grep -l "bolge:<slug>" src/lib/bespoke/izmir*.ts`).
   8 kelimelik ardışık ortaklık yasak. Hedef örtüşme kardeşlerle **<%1**
   (proje sert limiti %20; bu limite yaklaşan iş kabul edilmez, yeniden yazılır).
2. **Bilgi uydurma yasak.** Tesis/firma adı, rakam, istatistik, "X fabrikası"
   gibi iddialar yazılamaz. Sadece kamuya açık, doğrulanabilir bölge karakteri
   (OSB'nin varlığı ve sektör ağırlığı, liman/üniversite varlığı, coğrafi konum)
   + firma saha pratiği ("şöyle planlarız") kullanılır. `kaynak` alanında bu
   ayrım açıkça yazılır.
3. **Simetri:** h1 → giriş (tek uzun paragraf) → 5 madde → 3 ek bölüm (ilki
   tablolu) → 6 uzun SSS → kaynak. 1.000-1.500 kelime/sayfa.
4. **Açı tutarlılığı:** Her domainin kayıtlı açısı vardır (aşağıdaki tabloda).
   Yeni sayfalar o açıdan yazılır; açı komşu domaininkine kaymaz.
5. Şablon dosyalarına (`bolge-sayfalari.ts`, `alt-sayfalar.ts` ortak kısımları,
   `varyant.ts`) sabit cümle ekleme — detay: `CLAUDE.md` Kural 1.

---

## 3. FAZ A — Bölge genişlemesi (47 sayfa, öncelik 1)

Her satır: `siteler.ts`'te `bolge:` alanına eklenecek metin (aynen bu yazımla)
→ üretilecek slug → yazım açısı ipucu. Mevcut listedeki girdileri SİLME,
sadece ekle. Gerçeklik notları: KOSBİ (Kemalpaşa OSB), İzmir Atatürk OSB
(Çiğli), Pancar OSB ve İTOB OSB (Torbalı/Menderes hattı), ESBAŞ Ege Serbest
Bölgesi (Gaziemir), Alsancak Limanı, İYTE (Urla), İzmir Katip Çelebi Üni.
(Çiğli), İzmir Ekonomi Üni. (Balçova), Işıkkent ayakkabıcılar bölgesi (Bornova)
kamuya açık gerçeklerdir; bunların ötesinde yerel iddia üretme.

### A1. izmirmanliftkiralama.net — açı: İSG/izin/belgeli operatör, rafineri-liman disiplini
| Eklenecek bölge | Slug | İpucu |
|---|---|---|
| Kemalpaşa OSB | kemalpasa-osb | OSB iç yönetmelik + İSG evrak akışı |
| Çiğli Atatürk OSB | cigli-ataturk-osb | çok vardiyalı tesiste izinli çalışma |
| Torbalı | torbali | büyüyen sanayi aksında work permit kültürü |
| İTOB OSB | itob-osb | OSB giriş prosedürleri |
| Kınık | kinik | ilçe ölçeğinde İSG standardını taşımak |
| Foça (çevre ilçe) | foca-cevre-ilce | turistik ilçede kamusal alan güvenliği |

### A2. izmir-manlift.net — açı: kesintisiz üretimde planlı bakım
| Çiğli Atatürk OSB | cigli-ataturk-osb | hat durdurmadan bakım penceresi |
| İTOB OSB | itob-osb | orta ölçekli tesiste bakım turu |
| Aliağa | aliaga | ağır sanayide duruş planlaması |
| Menemen | menemen | plastik/ambalaj tesislerinde periyodik bakım |

### A3. izmir-man-lift.com — açı: rüzgar/teleskopik, yüksek yapı ve açık saha
| Konak | konak | yüksek kamu/ofis cepheleri, rüzgar yükü |
| Bornova | bornova | yüksek depo + kampüs açık alanları |
| Çeşme | cesme | marina/otel, deniz rüzgarı koşulu |
| Urla | urla | alçak yoğunluklu yerleşim + taş yapı |
| Foça | foca | sahil hattında rüzgar planlaması |

### A4. izmirplatformskiralama.com — açı: saatlik dilim/kısa süreli kiralama modeli
| Buca | buca | yoğun konut+ticaret dokusunda saatlik iş |
| Bornova | bornova | kısa süreli mağaza/ofis işleri |
| Balçova | balcova | AVM+termal otel kısa pencere işleri |
| Narlıdere | narlidere | site yönetimi küçük işleri |
| Güzelbahçe | guzelbahce | sahil ilçesinde saatlik model ekonomisi |

### A5. izmirplatformkiralama.org — açı: KOBİ bütçesi, küçük sanayi siteleri
| Bornova | bornova | Işıkkent hattı küçük imalatçılar |
| Şirinyer | sirinyer | semt ölçeğinde atölye/dükkan işleri |
| Torbalı | torbali | KOBİ yoğun yeni sanayi aksı |
| Menderes | menderes | küçük işletme bütçesiyle kiralama |

### A6. izmirmanliftkiralama.org — açı: şehir içi trafik uyumlu teslimat lojistiği
| Karşıyaka | karsiyaka | yoğun trafik + dar sokak teslimatı |
| Konak | konak | trafiğe kapalı bölge çevresi planlama |
| Bayraklı | bayrakli | kule bölgesinde kurulum lojistiği |
| Karabağlar | karabaglar | mobilya atölyeleri hattına sevkiyat |
| Balçova | balcova | tünel/viyadük güzergah planlaması |

### A7. izmirmakasliplatform.xyz — açı: depo/raf sistemleri
| Pancar OSB | pancar-osb | depo yoğun OSB'de raf işleri |
| İTOB OSB | itob-osb | orta ölçek depo raf bakımı |
| Gaziemir Ege Serbest Bölgesi | gaziemir-ege-serbest-bolgesi | serbest bölge deposunda makaslı kullanım |
| Aliağa | aliaga | ağır sanayi yanı depo sahaları |

### A8. izmirmakasliplatform.com.tr — açı: otel + AVM proje ölçeği
| Çeşme | cesme | otel sezon dışı bakım projeleri |
| Balçova | balcova | termal otel + AVM yüksek tavan |
| İnciraltı | inciralti | otel bölgesi cephe/çatı projeleri |
| Mavişehir | mavisehir | AVM ve rezidans ortak alanları |

### A9. izmirmakasliplatform.net.tr — açı: üniversite kampüsleri
| Urla | urla | İYTE kampüs yapıları |
| Balçova | balcova | İzmir Ekonomi Üni. çevresi |
| Çiğli | cigli | Katip Çelebi Üni. yerleşkesi |

### A10. izmirforkliftkiralama.net — açı: doğru forklift seçimi
| Kemalpaşa OSB | kemalpasa-osb | lojistik depoda forklift sınıfı |
| Torbalı | torbali | üretim+depo karma sahada seçim |
| Çiğli Atatürk OSB | cigli-ataturk-osb | vardiyalı tesiste akülü/dizel kararı |
| Bornova | bornova | Işıkkent küçük depo forklifti |

### A11. izmir-forklift.com — açı: liman/hava kargo elleçleme
| Alsancak Liman | alsancak-liman | liman ardiyesi elleçleme ritmi |
| Kemalpaşa | kemalpasa | iç lojistik üssü bağlantısı |
| Torbalı | torbali | dağıtım merkezleri elleçlemesi |

**Faz A toplamı: 47 yeni elle yazılmış bölge sayfası.**

### Çakışma haritası — MEVCUT + YENİ (yazmadan önce listelenen dosyaları OKU)

Bir slug'ı yazmadan önce onu içeren TÜM dosyaları bul:
`grep -l '"bolge:<slug>"' src/lib/bespoke/izmir*.ts` — aşağıdaki tablo
2026-08-13 durumudur, yine de yazım anında grep'le teyit et.

| Slug | Mevcut bespoke (dosya) | Yeni yazacak | Toplam |
|---|---|---|---|
| bornova | izmir-manlift-net, izmirmakasliplatform-xyz, izmirmakasliplatform-net-tr, izmirmanliftkiralama-org | A3, A4, A5, A10 | **8 — EN YÜKSEK RİSK** |
| konak | izmirmakasliplatform-com-tr, izmirplatformskiralama-com, izmirplatformkiralama-org | A3, A6 | 5 |
| torbali | izmir-manlift-net | A1, A5, A10, A11 | 5 |
| cigli-ataturk-osb | izmirmakasliplatform-xyz | A1, A2, A10 | 4 |
| balcova | — | A4, A6, A8, A9 | 4 |
| aliaga | izmir-forklift-com, izmirmanliftkiralama-net | A2, A7 | 4 |
| buca | izmirmakasliplatform-net-tr, izmirmanliftkiralama-org, izmirplatformkiralama-org | A4 | 4 |
| bayrakli | izmirplatformskiralama-com, izmir-man-lift-com, izmirmakasliplatform-com-tr | A6 | 4 |
| kemalpasa-osb | izmirmakasliplatform-xyz | A1, A10 | 3 |
| karsiyaka | izmir-man-lift-com, izmirplatformskiralama-com | A6 | 3 |
| itob-osb | — | A1, A2, A7 | 3 |
| menemen | izmir-man-lift-com, izmirmakasliplatform-xyz | A2 | 3 |
| cigli | izmir-forklift-com, izmir-man-lift-com | A9 | 3 |
| cesme | — | A3, A8 | 2 |
| urla | — | A3, A9 | 2 |
| karabaglar | izmirplatformkiralama-org | A6 | 2 |
| menderes | izmirmanliftkiralama-net | A5 | 2 |
| foca | izmir-forklift-com | A3 | 2 |
| pancar-osb | izmir-manlift-net | A7 | 2 |
| kemalpasa | izmir-manlift-net | A11 | 2 |
| sirinyer, inciralti, mavisehir, kinik, foca-cevre-ilce, alsancak-liman, gaziemir-ege-serbest-bolgesi, guzelbahce, narlidere | — | tekil | 1 |

**Bornova kuralı (×8):** Bornova sayfası yazan her ajan önce 4 mevcut dosyayı
okur ve şu ayrık çapaları kullanır — A3: yüksek depo/silo çatılarında rüzgar
planlaması · A4: cadde mağazaları/ofislerde saatlik iş modeli · A5: Işıkkent
atölye-dükkan KOBİ ekonomisi · A10: Işıkkent depolarında forklift sınıfı
(A5 ile aynı bölgeyi anlatır ama makine tipi tamamen farklı — cümle düzeyi
ortaklık yine yasak). Çakışan slug'lar parti içinde SIRAYLA yazılır; her yeni
sayfa öncekilerin son hâlini okur.

---

## 4. FAZ B — Sektör sayfaları (14 sayfa, hiçbir rakipte yok)

`alt-sayfalar.ts` üzerinden, domain açısına uygun hosta eklenir:

| Host | Slug | Konu |
|---|---|---|
| izmirmanliftkiralama.net | tersane-gemi-bakim-platform-kiralama | Aliağa gemi söküm/tersane sahası disiplini |
| izmirmanliftkiralama.net | atex-bolgede-platform-kullanimi | patlayıcı ortamda ekipman sınıfı |
| izmir-man-lift.com | ruzgar-turbini-bakim-platform-destegi | RES saha işleri, kule dibi erişim |
| izmir-man-lift.com | yuksek-yapi-cam-cephe-bakim-platformu | Bayraklı kule aksı cephe işleri |
| izmir-forklift.com | liman-konteyner-sahasi-elleclemesi | liman içi ekipman koordinasyonu |
| izmir-forklift.com | havalimani-kargo-terminali-elleclemesi | hava kargo ritmi |
| izmirmakasliplatform.xyz | soguk-hava-deposu-platform-kullanimi | soğuk zincirde makine hazırlığı |
| izmirmakasliplatform.xyz | e-ticaret-deposu-raf-bakim-programi | mezanin/raf yoğun depo |
| izmirmakasliplatform.com.tr | avm-yuksek-tavan-bakim-programi | AVM gece vardiyası işleri |
| izmirmakasliplatform.com.tr | otel-sezon-oncesi-bakim-takvimi | doluluk penceresine göre plan |
| izmirplatformskiralama.com | fuar-stand-kurulum-platform-kiralama | Kültürpark fuar takvimi ritmi |
| izmirmanliftkiralama.org | tarihi-bina-cephe-restorasyonu-erisim | Konak/Kemeraltı hassas cephe |
| izmirplatformkiralama.org | mobilya-atolyesi-toz-emis-bakimi | Karabağlar atölye gerçeği |
| izmir-manlift.net | uretim-hatti-uzeri-planli-bakim | hat üstü çalışma güvenliği |

Yapı: h1 + 4-6 uzun paragraf + 4-5 madde + 6 SSS; 1.000+ kelime; sektör
gerçekleri genel ve doğrulanabilir düzeyde (firma/tesis adı yok).

Eklemeden önce slug çakışması kontrolü ZORUNLU (o hostta veya routelarda aynı
slug varsa sessizce gölgeleme olabilir):
`grep -n '"<slug>"' src/lib/alt-sayfalar.ts src/lib/anahtar-kelime-sayfalari.ts src/lib/firsat-sayfalar.ts src/lib/hizmet-sayfalari.ts`
— çıktı boş olmalı; doluysa farklı slug seç.

## 5. FAZ C — Karar/fiyat sayfaları (6 sayfa, featured snippet hedefi)

| Host | Slug | Konu |
|---|---|---|
| izmirmanliftkiralama.net | izmir-manlift-kiralama-fiyatlari-neye-gore-belirlenir | fiyatı belirleyen 6 kalem, TABLOLU; rakam VERMEDEN kalem mantığı |
| izmirplatformskiralama.com | izmir-platform-kiralama-fiyat-faktorleri | saatlik/günlük/haftalık yapı farkı |
| izmir-manlift.net | akulu-mu-dizel-mi-karar-tablosu | ortam/zemin/emisyon karşılaştırması |
| izmirmanliftkiralama.org | ayni-gun-teslimat-hangi-ilcelere-mumkun | ilçe-lojistik gerçekleri |
| izmirmakasliplatform.xyz | operatorlu-mu-operatorsuz-mu-maliyet-isg | sorumluluk+maliyet karşılaştırma |
| izmir-forklift.com | forklift-mi-telehandler-mi-secim-rehberi | iş tipine göre ayrım |

Fiyat sayfalarında **rakam yazmak yasak** — sadece fiyatı belirleyen
değişkenlerin mantığı anlatılır ("metraj arttıkça...", "süre uzadıkça birim
düşer" gibi), sonunda yazılı teklif çağrısı.

---

## 6. Uygulama sırası ve parti düzeni

1. **Parti 1:** A1 + A2 + A10 (OSB/sanayi ağı, 14 sayfa) → doğrula → deploy
2. **Parti 2:** A5 + A6 + A7 + A11 (12 sayfa) → doğrula → deploy
3. **Parti 3:** A3 + A4 + A8 + A9 (16 sayfa; balcova×4 ve cesme×2 çakışması bu partide — ekstra dikkat) → doğrula → deploy
4. **Parti 4:** Faz B (14 sayfa) → doğrula → deploy
5. **Parti 5:** Faz C (6 sayfa) + `docs/ICERIK-SIRASI.md` güncellemesi → final doğrulama → deploy

Her partide: aynı slug'ı yazanlar SIRAYLA yazılır (paralel değil), sonraki
önce öncekinin çıktısını okur.

## 7. Parti başına doğrulama protokolü (Definition of Done)

```bash
cd /root/portfoy/kulucka-hub

# 1. Derleme
npm run build                       # hata = düzeltmeden ilerleme yok

# 2. Örtüşme ölçümü (kardeş dosyalar arası, slug bazlı) — aşağıdaki scripti
#    repo köküne olcum.mjs olarak yaz, çalıştır, SONRA SİL.
npx tsx olcum.mjs                   # her çift <%1 hedef; >%5 = yeniden yaz
rm olcum.mjs

# 3. Proje kural denetimi
npm run kontrol                     # çıkış 1 = ihlal, commit YOK
npm run kontrol:icerik              # parti 5'te (yavaş, tam tarama)

# 4. Commit + push  (ÖNEMLİ: hesap değişimi zorunlu)
git add <değişen dosyalar>          # git add -A KULLANMA, dosyaları tek tek
git commit -m "İzmir genişleme parti-N: <özet>"
gh auth switch -u arti-tech61       # saygitech hesabının push yetkisi YOK
git push

# 5. Her iki Coolify uygulamasını deploy et (token: /root/.claude/projects/-root/memory/coolify_api.md)
curl -s "https://panel.saygi.cloud/api/v1/deploy?uuid=inqp15mhoxepqzd9x7a2a0ut&force=true" -H "Authorization: Bearer $TOKEN"
curl -s "https://panel.saygi.cloud/api/v1/deploy?uuid=h6xciy5asygrvf3oby76ws8d&force=true" -H "Authorization: Bearer $TOKEN"

# 6. Canlı doğrulama (deploy bittikten sonra)
curl -s "https://<host>/bolge/<yeni-slug>" | grep -c "<h1"     # 1 olmalı
curl -s "https://<host>/sitemap.xml" | grep "<yeni-slug>"      # listede olmalı
```

### Örtüşme ölçüm scripti (olcum.mjs — aynen kullan)
```js
// Parti kapsamındaki dosyaları içe aktar, slug kesişimlerini ölç.
import { IZMIRMANLIFTKIRALAMA_NET } from "./src/lib/bespoke/izmirmanliftkiralama-net.ts";
// ... partideki diğer exportlar
function metin(s){return [s.h1,s.giris,...(s.maddeler??[]).flatMap(m=>[m.baslik,m.metin]),...(s.ekBolumler??[]).flatMap(e=>[e.baslik,...e.paragraflar,...(e.tablo?e.tablo.satirlar.flat():[])]),...(s.sss??[]).flatMap(q=>[q.soru,q.cevap])].join(" ");}
function norm(t){return t.toLowerCase().replace(/[^\wçğıöşü\s]/g," ").replace(/\s+/g," ").trim();}
function sh(t,n=8){const w=norm(t).split(" ");const s=new Set();for(let i=0;i+n<=w.length;i++)s.add(w.slice(i,i+n).join(" "));return s;}
function ort(a,b){const A=sh(a),B=sh(b);if(!A.size||!B.size)return 0;let k=0;for(const x of A)if(B.has(x))k++;return k/Math.min(A.size,B.size);}
const D={ "host1":EXPORT1, "host2":EXPORT2 /* ... */ };
const adlar=Object.keys(D);
for(let i=0;i<adlar.length;i++)for(let j=i+1;j<adlar.length;j++){
  const a=D[adlar[i]],b=D[adlar[j]];
  for(const k of Object.keys(a).filter(x=>x in b))
    console.log(`${adlar[i]} vs ${adlar[j]} | ${k} | ${(ort(metin(a[k]),metin(b[k]))*100).toFixed(1)}%`);
}
```

## 8. Bilinen tuzaklar (hepsi bu depoda gerçekten yaşandı)

1. **`pkill` YASAK.** Bu sunucuda geniş desenli pkill container süreçlerini de
   öldürür ve kesinti çıkarır. Süreç öldürmen gerekiyorsa yalnız PID hedefli
   `kill <pid>`.
2. **`gh auth switch -u arti-tech61`** yapılmadan push 403 verir
   ("denied to saygitech").
3. **Çift kayıt:** host `bespoke-icerik.ts`'te zaten kayıtlı; ikinci kez
   eklersen duplicate-key TS hatası. Yeni import da ekleme.
4. **Kapanmamış dosya:** bespoke dosyasına ekleme yaparken kapanış `};`
   öncesine ekle; iş bitince `npx tsc --noEmit --skipLibCheck --target es2020
   --module esnext --moduleResolution bundler src/lib/bespoke/<dosya>.ts` ile
   tek dosya doğrulaması yap.
5. **String içinde düz çift tırnak** TS hatası verir — metin içinde vurgu
   gerekiyorsa tırnaksız yaz veya kesme işareti kullan.
6. **Unary plus tuzağı:** `varyantSec(...)  + " " + ...` zincirlerinde diziden
   sonra yanlış `,` koymak metne bitişik `0` basar (2026-08-13'te 1.400 sayfada
   yaşandı ve düzeltildi). Şablon dosyalarını değiştirmiyorsun ama editleme
   sırasında `]), +` deseni görürsen ANINDA bildir.
7. **Coolify:** iki app'in deploy'ları paralel koşar ve build CPU yer; ikisini
   tetikledikten sonra bitmesini bekle, üçüncü tetikleme yapma. Deploy durumu:
   `GET /api/v1/deployments/{deployment_uuid}`.
8. **Dağınık klasör açma:** `/root` altına proje dışı klasör açma; geçici
   script repo kökünde oluştur, işi bitince sil.
9. **`bolge:` alanına eklerken** mevcut girdileri, sırasını ve yazımını BOZMA —
   varyant tuzları bölge adına bağlıdır; mevcut bir adı değiştirmek o sayfanın
   içeriğini değiştirir.

## 9. Kabul kriterleri (iş "bitti" sayılır ancak şunlar sağlanırsa)

- [ ] 47 Faz A + 14 Faz B + 6 Faz C = **67 yeni sayfa** canlıda 200 dönüyor
- [ ] Her yeni bölge sayfası sitemap'te
- [ ] Tüm parti örtüşme ölçümleri kardeş çiftlerde <%1 (hiçbiri >%5 değil)
- [ ] `npm run kontrol` ve `npm run kontrol:icerik` 0 ihlal
- [ ] Her sayfa 1.000+ kelime, simetri tam (5 madde / 3 ek bölüm+tablo / 6 SSS / kaynak)
- [ ] Hiçbir sayfada uydurulmuş tesis adı/rakam yok (kaynak satırı bunu beyan ediyor)
- [ ] `docs/ICERIK-SIRASI.md` İzmir satırları güncellendi
- [ ] Son commit push edildi, iki Coolify app deploy'u "finished"

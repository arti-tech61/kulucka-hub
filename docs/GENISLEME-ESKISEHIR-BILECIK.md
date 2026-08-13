# Eskişehir + Bilecik/Bozüyük SEO Genişleme — Uygulama Emri

Tarih: 2026-08-13. Format ve teknik mekanik `docs/IZMIR-SEO-GENISLEME.md` ile
birebir aynıdır — **o belgenin 1. bölümünü (sayfa nasıl doğar), 2. bölümünü
(geçilmez kurallar) ve 7-8. bölümlerini (doğrulama protokolü + tuzaklar) burada
tekrar etmeden AYNEN uygula.** Bu belge yalnız bu koridora özgü rakip analizi,
iş emri ve çakışma haritasını içerir. **Sırayla uygula, hiçbir adımı atlama.**

---

## 0. Bağlam — bu koridor neden FARKLI

"eskişehir manlift kiralama", "eskişehir platform kiralama", "bilecik platform
kiralama", "bozüyük kiralık platform" Google 1. sayfa taraması yapıldı
(2026-08-13). İki kritik bulgu:

1. **Bu koridor ağın EN DOYGUN kümesi: 19 domain** (7 Eskişehir + 12
   Bilecik/Bozüyük) ve mevcut `bolge:` listelerinin **TAMAMI zaten bespoke
   yazılmış** (19 dosyada ~120 elle yazılmış bölge kaydı). İzmir'deki gibi
   "boş slot doldurma" işi değil; her yeni sayfa mevcut kardeş sayfalara
   çarpma riski taşır. **Çakışma haritası (§3) bu belgenin en kritik
   bölümüdür.**
2. **SERP'te zaten biz varız.** Aramalarda çıkan `bilecikplatform.com`,
   `bozuyukplatform.com`, `eskisehirplatform.net` bizim ağın domainleri;
   `artiplatform.com.tr` (Eskişehir şubesi + rehber blog) ana markamız.
   Bilecik/Bozüyük'te gerçek yerel rakip fiilen YOK — "bozüyük kiralık
   platform" sonuçlarının çoğu emlak ilanına dönüyor, tek yerel platform
   sonucu bizim `bozuyukplatform.com`. Bu bir **düşük rekabet / yüksek
   sahiplenme fırsatıdır**: az sayıda ama derin sayfayla koridor kilitlenir.

### Rakip envanteri (Google 1. sayfa — kendi ağımız hariç)

| Rakip | İl | Bölge sayfası | Blog | Derinlik | Not |
|---|---|---|---|---|---|
| esgokcevinc.com.tr | Eskişehir | Yok | Yok (footer'da boş link) | ~200-400 kelime/sayfa | 12 karma hizmet (oto kurtarma, konteyner…) — odak dağınık |
| dunyaplatform.com.tr | Eskişehir | Yok | Yok | Kısa metin, 2-3 katman | Müşteri yorumu + referans görseli var; SSS/tablo yok |
| eskisehirplatform.gen.tr | Eskişehir | Yok | Yok | Toplam ~1.500-2.500 kelime | "Eskişehir Platform LTD" — tekrarlı başlıklar, sınırlı özgün metin |
| eskisehirplatform.com.tr | Eskişehir | Yok | Yok | Rehber/dizin | 8 firma listeleyen ajans yapımı rehber (Artı Platform da listede) |
| basyapivinc.com.tr | Bilecik | Yok (Bilecik/Bozüyük özel sayfa dahi yok) | Yok | Anasayfa + 6 statik sayfa | Bilecik'in en görünür rakibi bu — o bile bölge sayfasız |
| bilecikvinckiralama.com.tr | Bilecik | — | — | — | **DNS çözülmüyor (ölü site)** — SERP'te hâlâ görünen ölü rakip = fırsat |
| fatihvinc, atlasismakinalari, canlojistik, ertanmakina, aydinvinc | Eskişehir | 1. sayfa diğerleri | — | — | Detay incelenmedi; hepsi tekil hizmet-sayfası yapısında görünüyor |
| armut.com | — | — | — | — | Pazaryeri; organik içerikle yarışılmaz, snippet ile aşılır |

⚠️ Belirsizlik notu: `eskisehirplatform.com` bizim `siteler.ts`'te üç Bilecik
domaininin `anaSite`'ı olarak kayıtlı; `.gen.tr`'deki "Eskişehir Platform LTD"
ise ayrı bir firma olabilir. Metinlerde bu firmaya dair hiçbir iddia yazma.

### Rakiplerin ortak zayıflıkları → bizim silahımız
1. **Hiçbir rakipte tek bir ilçe/bölge sayfası yok** (İzmir'de 60+ ilçeli
   rakip vardı; burada sıfır). Bölge sayfası yazan tek ağ biziz.
2. Blog fiilen yok; SSS / tablo / karşılaştırma içeriği sıfır.
3. Eskişehir rakipleri vinç/kurtarma/konteyner karma firmalar — platform
   uzmanlığı anlatısı zayıf.
4. Bilecik-Bozüyük hattında rakip ya statik tek sayfa ya ölü domain.

**Strateji: İzmir'deki gibi kapsam kapatma DEĞİL — koridor zaten bizim.
Amaç: (a) hiç dokunulmamış doğrulanabilir alt bölgeleri (Beylikova OSB,
Sivrihisar OSB, KSS'ler, kırsal enerji ilçeleri) tekil sayfalarla sahiplenmek,
(b) Kütahya/Sakarya çevre-il koridorunu açmak, (c) doygun slug'lara yeni kopya
yaklaştırmamak. Domain başına 2-3 sayfa, toplam 44 — az ve derin.**

---

## 1. Mevcut envanter — 19 domain (2026-08-13 durumu)

Kaynaklar: `src/lib/siteler.ts` (`bolge:` alanları), `src/lib/bespoke/*.ts`
(kayıtlı slug'lar), `src/lib/hedef-bolgeler.ts:48-54` (il verisi). 19 hostun
hepsi `bespoke-icerik.ts`'te kayıtlı — **yeni import/kayıt satırı GEREKMEZ.**

### Eskişehir (7 domain)

| Host | Açı (`uzmanlik`) | Mevcut `bolge:` (hepsi bespoke YAZILMIŞ) |
|---|---|---|
| eskisehirmanlift.net | OSB fabrikalarında üretim hattı bakımı, eklemli-teleskopik | Eskişehir OSB, Odunpazarı, Muttalip, Tepebaşı, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |
| eskisehirmanlift.xyz | OSB sanayi tesisleri geneli | Eskişehir, Organize Sanayi Bölgesi, Odunpazarı, Tepebaşı, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |
| eskisehirplatform.org | Havacılık-savunma sanayi + Sivrihisar bölgesi | Eskişehir, Sivrihisar, Odunpazarı, Tepebaşı, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |
| eskisehirplatform.net | Havacılık, savunma ve seramik sanayi | Eskişehir OSB, Odunpazarı, Tepebaşı, Eskişehir 2. OSB, Sivrihisar (çevre ilçe) |
| eskisehirplatformkiralama.net | Şehir merkezi mağaza/otel/kamu iç mekân | Tepebaşı, Odunpazarı, Şehir merkezi, Çifteler, Alpu, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |
| eskisehirvincplatform.com | Kırsal hat enerji/aydınlatma, sepetli + vinç | Sivrihisar, Alpu, Mahmudiye, Seyitgazi, Eskişehir çevre yolu, Odunpazarı, Tepebaşı, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |
| manlifteskisehir.com | Eskişehir-Bozüyük hattında planlı duruş dönemi | Eskişehir OSB, Bozüyük, Bilecik, İnönü, Odunpazarı, Tepebaşı, Eskişehir 2. OSB, Bozüyük OSB (Bilecik çevre ili), Polatlı (Ankara çevre ili) |

### Bilecik/Bozüyük (12 domain)

| Host | Açı (`uzmanlik`) | Mevcut `bolge:` (hepsi bespoke YAZILMIŞ) |
|---|---|---|
| bilecikplatform.com | Seramik, metal işleme, depo projeleri (il geneli) | Bilecik, Bozüyük, Osmaneli, Söğüt, Bozüyük OSB, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bilecikplatform.com.tr | Osmaneli OSB depo/lojistik + Söğüt orman ürünleri | Bilecik merkez, Osmaneli, Söğüt, Pazaryeri, Gölpazarı, Bozüyük OSB, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bilecikplatform.net | Osmaneli-Pazaryeri OSB odağı | Osmaneli, Pazaryeri, Osmaneli OSB, Bilecik merkez, Bozüyük OSB (çevre ilçe) |
| bozuyukmanlift.com | Seramik fabrikalarında çatı/yüksek bakım, eklemli | Bozüyük OSB ve Seramik Sanayi Bölgesi, Bilecik, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukmanlift.net | Cam sanayi tesislerinde yüksek erişim | Bozüyük Cam Sanayi Bölgesi (VitrA çevresi), Bilecik, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukmanlift.xyz | Lojistik depo + metal işleme | TEM Otoyolu Bozüyük Çıkışı, Lojistik ve Metal Sanayi Bölgesi, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukplatform.com | Lojistik ve nakliye terminali | Bozüyük lojistik bölgesi, Bozüyük merkez, İnönü, Söğüt, Eskişehir (çevre ili) |
| bozuyukplatform.com.tr | OSB içi seramik, cam, lojistik | Bozüyük OSB ve çevresi, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukplatform.net | Mobilya ve orman ürünleri sanayi | Bozüyük merkez, Bozüyük OSB, İnönü, Yenipazar, Bilecik (çevre ilçe) |
| bozuyukplatform.net.tr | Bozüyük OSB tüm sektörler geneli | Bozüyük Organize Sanayi Bölgesi, Bilecik, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukplatform.org | Depo/sevkiyat, forklift ağırlıklı | Bozüyük Depo ve Lojistik Sevkiyat Bölgesi, Bilecik, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |
| bozuyukplatform.xyz | Yeni fabrika inşaatları, çelik konstrüksiyon | Bozüyük Yeni Sanayi Yatırım Alanları, Bilecik, Bilecik OSB, Söğüt, Pazaryeri, Eskişehir OSB (çevre ili), İnegöl OSB (Bursa çevre ili) |

### Doygunluk tablosu — MEVCUT slug'lar kaç domainde yazılmış

Bu slug'lara **YENİ kopya eklenmeyecek** (tek istisna: inonu, aşağıda gerekçeli):

| Mevcut slug | Domain sayısı |
|---|---|
| eskisehir-osb-cevre-ili, inegol-osb-bursa-cevre-ili | 8 |
| sogut, pazaryeri, bilecik-osb (+bilecik ×5) | 7 |
| odunpazari, tepebasi, eskisehir-2-osb | 7 |
| bozuyuk-osb-bilecik-cevre-ili, polatli-ankara-cevre-ili | 6 |
| inonu, osmaneli, sivrihisar (varyantlarıyla) | 3 |

### Doğrulanabilir gerçekler (yalnız bunlar kullanılabilir)

`hedef-bolgeler.ts:48-54` + kamuya açık düzey:
- **Eskişehir:** Eskişehir OSB Türkiye'nin en büyük organize sanayi
  bölgelerindendir; 2. OSB, Beylikova OSB, Sivrihisar OSB, Küçük Sanayi
  Sitesi, Demirciler Sanayi Sitesi vardır. OSB içinde havacılık kümesi
  bulunur (TUSAŞ Motor/TEI çevresi — **yalnız "havacılık motor sanayinin
  varlığı" düzeyinde, tesis içi hiçbir iddia yok**). Şehirde raylı sistemler
  sanayi geleneği vardır (TÜLOMSAŞ/TÜRASAŞ — aynı genel düzeyde). İlçeler:
  Odunpazarı, Tepebaşı, Sivrihisar, Çifteler, Seyitgazi, Alpu, Beylikova,
  İnönü, Mahmudiye, Mihalgazi, Mihalıççık, Günyüzü, Han, Sarıcakaya.
- **Bilecik:** İlçeler: Merkez, Bozüyük, Osmaneli, Söğüt, Gölpazarı,
  Pazaryeri, Yenipazar, İnhisar (**Yenipazar = Bilecik'in ilçesi; Aydın
  Yenipazar ile karıştırma**). OSB'ler: Bilecik OSB, Bozüyük OSB, Osmaneli
  OSB, Pazaryeri OSB, Söğüt OSB; ayrıca Bozüyük Seramik Sanayi Bölgesi,
  Bilecik KSS, Bozüyük KSS. Bozüyük'te seramik ve cam sanayi ağırlığı,
  TEM/Anadolu otoyolu çıkışı ve YHT hattı istasyonu kamuya açık gerçeklerdir.
- **Çevre iller** (`hedef-bolgeler.ts:125-126`): Eskişehir ↔ Bilecik, Bursa,
  Kütahya, Afyonkarahisar, Konya, Ankara, Bolu; Bilecik ↔ Bursa, Eskişehir,
  Kütahya, Sakarya, Bolu. Kütahya'nın seramik/çini sanayi geleneği kamuya
  açık gerçektir. **Bu listelerin ötesinde yerel iddia (firma adı, tesis içi
  bilgi, rakam) ÜRETME.** Bilecik mermerciliği gibi listede olmayan temalara
  girme.

---

## 2. FAZ A — İş emri (44 sayfa)

Her satır: `siteler.ts`'te ilgili domainin `bolge:` alanının **EN SONUNA,
AYNEN bu yazımla** eklenecek metin → `slugla()` çıktısı → yazım açısı.
⛔ **SONA-EKLEME KURALI MUTLAK** (İzmir belgesi §1a): `MAKS_BOLGE = 3`
(`bolge-hizmet-sayfalari.ts:38`) ilk 3 girdiden alt sayfa üretir; araya
girmek canlı URL'leri 404'e düşürür ve ilk-girdi/indeks bağımlı metinleri
değiştirir. Mevcut girdileri SİLME, yazımını DEĞİŞTİRME.

### Eskişehir — 19 sayfa

**A1. eskisehirmanlift.net** — açı: üretim hattı üstü bakım, eklemli-teleskopik seçim
| Eklenecek bölge (aynen) | Slug | İpucu |
|---|---|---|
| Eskişehir Küçük Sanayi Sitesi | eskisehir-kucuk-sanayi-sitesi | atölye tavanı/vinç yolu altı dar alanda eklemli erişim |
| Beylikova OSB | beylikova-osb | gelişen OSB'de hat kurulum-bakım dönemi |
| Kütahya (çevre ili) | kutahya-cevre-ili | komşu ile makine sevkiyatı + hat bakım planı |

**A2. eskisehirmanlift.xyz** — açı: OSB sanayi tesisleri geneli
| Demirciler Sanayi Sitesi | demirciler-sanayi-sitesi | metal atölyelerinde kıvılcım/sıcak iş ortamında platform |
| Sivrihisar OSB | sivrihisar-osb | ilçe OSB'sinde tesis geneli bakım turu |
| Çifteler | cifteler | tarımsal işleme tesislerinde sezonluk bakım |

**A3. eskisehirplatform.org** — açı: havacılık-savunma tedarik disiplini + Sivrihisar
| OSB Havacılık Kümesi | osb-havacilik-kumesi | tedarikçi sahasında evrak/İSG disiplini (tesis içi iddia YOK) |
| Sivrihisar OSB | sivrihisar-osb | savunma-havacılık tedarik ağının ilçe ayağı |
| Mihalıççık | mihaliccik | uzak ilçeye planlı sevkiyat ve konaklama lojistiği |

**A4. eskisehirplatform.net** — açı: havacılık + seramik üretim sahaları
| OSB Havacılık Kümesi | osb-havacilik-kumesi | hassas üretim çevresinde temiz/elektrikli makine tercihi |
| Beylikova | beylikova | ilçe ölçeğinde sanayi + kamu binası işleri |
| Seyitgazi | seyitgazi | kırsal ilçede seramik hammadde sahaları çevresi işler |

**A5. eskisehirplatformkiralama.net** — açı: şehir içi mağaza/otel/kamu iç mekân
| Muttalip | muttalip | merkez yakını mahallede dükkan/depo iç mekân işleri |
| Demirciler Sanayi Sitesi | demirciler-sanayi-sitesi | şehir içi sanayi sitesinde dükkan-atölye iç tavan işleri |

**A6. eskisehirvincplatform.com** — açı: kırsal hat enerji/aydınlatma, sepetli+vinç
| Mihalgazi | mihalgazi | vadi coğrafyasında hat boyu direk erişimi |
| Sarıcakaya | saricakaya | dağınık yerleşimde günlük rota planı |
| Günyüzü | gunyuzu | uzak kırsalda yakıt/servis öz yeterliği |

**A7. manlifteskisehir.com** — açı: Eskişehir-Bozüyük hattı planlı duruş
| Kütahya (çevre ili) | kutahya-cevre-ili | seramik ekseninde duruş takvimi eşleştirme |
| Beylikova OSB | beylikova-osb | yeni tesislerde devreye alma duruşları |

### Bilecik/Bozüyük — 25 sayfa

**B1. bilecikplatform.com** — açı: il geneli seramik/metal/depo
| Bilecik Küçük Sanayi Sitesi | bilecik-kucuk-sanayi-sitesi | KSS dükkanlarında karma iş yükü |
| Gölpazarı | golpazari | uzak ilçeye il merkezi üzerinden servis |
| İnhisar | inhisar | ilin en küçük ilçesine erişim taahhüdü |

**B2. bilecikplatform.com.tr** — açı: Osmaneli depo/lojistik + Söğüt orman ürünleri
| Söğüt OSB | sogut-osb | orman ürünleri tesislerinde tozlu ortam makine bakımı |
| Osmaneli OSB | osmaneli-osb | depo koridorunda makaslı çalışma düzeni |

**B3. bilecikplatform.net** — açı: Osmaneli-Pazaryeri OSB odağı
| Pazaryeri OSB | pazaryeri-osb | ilçe OSB'sinde tekil tesise özel program |
| İnhisar | inhisar | Osmaneli aksından kuzey ilçelere uzanan servis |

**B4. bozuyukmanlift.com** — açı: seramik çatı/yüksek bakım, eklemli
| Bozüyük Küçük Sanayi Sitesi | bozuyuk-kucuk-sanayi-sitesi | seramik yan sanayi atölyelerinde çatı-cephe işleri |
| Kütahya (çevre ili) | kutahya-cevre-ili | seramik ekseninde çatı bakım sezonu |

**B5. bozuyukmanlift.net** — açı: cam sanayi yüksek erişim
| İnönü | inonu | Bozüyük-Eskişehir arasındaki ilçede tesis yüksek erişimi (⚠ 4. kopya — §3) |
| Kütahya (çevre ili) | kutahya-cevre-ili | cam-seramik hattında yüksek tavan işleri |

**B6. bozuyukmanlift.xyz** — açı: lojistik depo + metal işleme
| Sakarya (çevre ili) | sakarya-cevre-ili | TEM üzerinden komşu ile sevkiyat penceresi |
| Osmaneli OSB | osmaneli-osb | TEM aksındaki OSB depolarında manlift işleri |

**B7. bozuyukplatform.com** — açı: lojistik ve nakliye terminali
| Sakarya (çevre ili) | sakarya-cevre-ili | terminal-liman yönü nakliye entegrasyonu |
| Gölpazarı | golpazari | çevre ilçe sevkiyat rotasında ara durak işleri |

**B8. bozuyukplatform.com.tr** — açı: OSB içi seramik/cam/lojistik
| Söğüt OSB | sogut-osb | komşu OSB'ye ortak makine parkı yönetimi |
| Pazaryeri OSB | pazaryeri-osb | OSB'ler arası kısa mesafe transfer ekonomisi |

**B9. bozuyukplatform.net** — açı: mobilya ve orman ürünleri
| Söğüt OSB | sogut-osb | ahşap işleme hattında toz ve yangın disiplini |
| Bozüyük Küçük Sanayi Sitesi | bozuyuk-kucuk-sanayi-sitesi | mobilya atölyelerinde iç mekân makaslı kullanımı |

**B10. bozuyukplatform.net.tr** — açı: Bozüyük OSB tüm sektörler
| Bilecik Küçük Sanayi Sitesi | bilecik-kucuk-sanayi-sitesi | il merkezi KSS'sine OSB'den servis |
| Yenipazar | yenipazar | Bilecik'in Yenipazar ilçesine (Aydın değil!) erişim |

**B11. bozuyukplatform.org** — açı: depo/sevkiyat, forklift ağırlıklı
| Bozüyük Küçük Sanayi Sitesi | bozuyuk-kucuk-sanayi-sitesi | KSS'de yükleme-boşaltma ve raf işleri |
| Sakarya (çevre ili) | sakarya-cevre-ili | komşu il depolarına forklift+platform paket sevk |

**B12. bozuyukplatform.xyz** — açı: yeni fabrika inşaatı, çelik konstrüksiyon
| Yenipazar | yenipazar | kırsal ilçede yeni yapı/tesis kurulum işleri |
| Bilecik Küçük Sanayi Sitesi | bilecik-kucuk-sanayi-sitesi | KSS genişleme/yeni dükkan imalatı işleri |

**Faz A toplamı: 44 yeni elle yazılmış bölge sayfası (19 Eskişehir + 25 Bilecik/Bozüyük).**

---

## 3. ÇAKIŞMA HARİTASI — bu belgenin en kritik bölümü

İki tür çakışma var ve **ikisi de yazım öncesi grep gerektirir**:

```bash
cd /root/portfoy/kulucka-hub
# (a) Aynı slug'ı yazan/yazacak kardeşler:
grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts
# (b) Komşu-konu slug'ları (aynı yeri farklı adla anlatan mevcut sayfalar):
grep -l '"bolge:<komsu-slug>"' src/lib/bespoke/*.ts
```

### 3a. Yeni slug × domain matrisi (aynı slug'ı yazacaklar SIRAYLA yazılır)

| Slug | Mevcut bespoke (dosya) | Yeni yazacak | Toplam | Risk |
|---|---|---|---|---|
| inonu | manlifteskisehir-com, bozuyukplatform-com, bozuyukplatform-net | B5 | **4 — EN YÜKSEK RİSK** | 3 mevcut dosya OKUNMADAN yazılamaz |
| kutahya-cevre-ili | — | A1, A7, B4, B5 | **4 — koridor kümesi** | 4 ayrık çapa zorunlu (aşağıda) |
| sakarya-cevre-ili | — | B6, B7, B11 | 3 | TEM/sevkiyat teması ortak — çapa ayrımı şart |
| sogut-osb | — | B2, B8, B9 | 3 | + 7 mevcut `sogut` sayfası komşu (3c) |
| bilecik-kucuk-sanayi-sitesi | — | B1, B10, B12 | 3 | üç farklı açı: karma iş / OSB'den servis / yeni imalat |
| bozuyuk-kucuk-sanayi-sitesi | — | B4, B9, B11 | 3 | çatı-cephe / iç mekân mobilya / yükleme-raf |
| osmaneli-osb | bilecikplatform-net | B2, B6 | 3 | mevcut sayfa önce okunur |
| golpazari | bilecikplatform-com-tr | B1, B7 | 3 | |
| yenipazar | bozuyukplatform-net | B10, B12 | 3 | |
| osb-havacilik-kumesi | — | A3, A4 | 2 | iki havacılık domaini — çapa ayrımı kritik (aşağıda) |
| sivrihisar-osb | — | A2, A3 | 2 | + 2 mevcut `sivrihisar` + 1 `sivrihisar-cevre-ilce` komşu |
| beylikova-osb | — | A1, A7 | 2 | + A4'ün `beylikova` (ilçe) sayfası komşu |
| demirciler-sanayi-sitesi | — | A2, A5 | 2 | tesis bakımı vs dükkan iç mekân |
| inhisar | — | B1, B3 | 2 | |
| pazaryeri-osb | — | B3, B8 | 2 | + 7 mevcut `pazaryeri` komşu |
| cifteler | eskisehirplatformkiralama-net | A2 | 2 | |
| seyitgazi | eskisehirvincplatform-com | A4 | 2 | |
| muttalip | eskisehirmanlift-net | A5 | 2 | |
| eskisehir-kucuk-sanayi-sitesi, mihaliccik, beylikova, mihalgazi, saricakaya, gunyuzu | — | tekil | 1 | düşük risk |

### 3b. Çok-kopyalı slug kuralları (Bornova kuralının bu koridordaki karşılığı)

**inonu (×4):** B5 yazarı önce `manlifteskisehir-com.ts`,
`bozuyukplatform-com.ts`, `bozuyukplatform-net.ts` içindeki üç inonu kaydını
okur. Mevcut çapalar: manlifteskisehir = planlı duruş hattı;
bozuyukplatform.com = lojistik rota; bozuyukplatform.net = mobilya/orman
ürünleri. B5'in çapası SADECE **cam sanayi tesislerinde yüksek erişim** olur;
diğer üç temaya girmek yasak.

**kutahya-cevre-ili (×4):** Ayrık çapalar — A1: üretim hattı bakımına makine
sevkiyatı ve dönüş planı · A7: seramik fabrikalarının planlı duruş takvimine
göre dönemsel konuşlanma · B4: çatı-cephe bakım sezonu ve eklemli manlift
sevkiyatı · B5: cam-seramik tesislerinde yüksek tavan erişimi. Dördü de
"Kütahya'nın seramik/çini geleneği" gerçeğine dayanabilir ama **aynı cümle
kurgusuyla değil**; 8 kelimelik ardışık ortaklık yasak.

**osb-havacilik-kumesi (×2):** A3 (org) çapası **tedarik zinciri disiplini**
(evrak, İSG, saha giriş prosedürü); A4 (net) çapası **hassas üretim çevresinde
makine seçimi** (elektrikli/temiz makine, iz bırakmayan lastik). İkisi de
tesis İÇİNE dair tek cümle yazamaz; yalnız "havacılık kümesinin varlığı"
düzeyi. `kaynak` satırında bu sınır açıkça beyan edilir.

**sakarya-cevre-ili (×3):** B6 = TEM sevkiyat penceresi/metal işleme; B7 =
nakliye terminali entegrasyonu; B11 = forklift+platform paket sevkiyatı.
Üçü de Bozüyük markası — cümle düzeyi ayrışma özellikle sıkı denetlenir.

**KSS üçlüleri:** bilecik-kucuk-sanayi-sitesi ve bozuyuk-kucuk-sanayi-sitesi
üçer domainde yazılır; her yazar önce parti içindeki önceki KSS sayfalarının
SON hâlini okur. Aynı ilçe-KSS gerçeğini anlatırken iş tipi (çatı / iç mekân
/ yükleme) tamamen ayrı tutulur.

### 3c. Komşu-konu çakışmaları (aynı slug değil, AYNI YER — gizli kopya riski)

| Yeni slug | Komşu mevcut sayfalar (grep edilecek) | Kural |
|---|---|---|
| sogut-osb (×3) | `"bolge:sogut"` — 7 dosya | Söğüt ilçe sayfaları genel anlatır; sogut-osb SADECE OSB içi tesis pratiği anlatır. Yazmadan önce kendi domaininin sogut kaydı MUTLAKA okunur |
| pazaryeri-osb (×2) | `"bolge:pazaryeri"` — 7 dosya | aynı kural; B3 ve B8'in kendi pazaryeri sayfaları var |
| sivrihisar-osb (×2) | `"bolge:sivrihisar"` ×2 + `"bolge:sivrihisar-cevre-ilce"` ×1 | A3'ün kendi sivrihisar sayfası VAR — OSB sayfası ilçe sayfasını tekrarlayamaz |
| beylikova-osb / beylikova | birbirinin komşusu (A1+A7 vs A4) | OSB sayfaları tesis pratiği, ilçe sayfası ilçe geneli |
| osmaneli-osb (×2 yeni) | `"bolge:osmaneli"` ×2 + mevcut osmaneli-osb ×1 | B2'nin kendi osmaneli sayfası var — okunur |
| bozuyuk-kucuk-sanayi-sitesi | bozuyuk-merkez ×2, bozuyuk ×2 | merkez sayfalarındaki KSS değinileri tekrarlanmaz |
| eskisehir-kucuk-sanayi-sitesi, demirciler-sanayi-sitesi | odunpazari/tepebasi ×7, sehir-merkezi ×1 | site sayfaları semt sayfalarının sanayi paragraflarını kopyalayamaz |
| osb-havacilik-kumesi | eskisehir-osb ×3, organize-sanayi-bolgesi ×1 | küme sayfası genel OSB anlatımını tekrarlamaz; yalnız havacılık ayağı |
| inhisar, golpazari, yenipazar | bilecik/bilecik-merkez ×5+ | "il merkezinden servis" cümleleri merkez sayfalarından kopyalanamaz |

---

## 4. Uygulama sırası ve parti düzeni

1. **Parti 1 — Eskişehir tekil + OSB (A1, A2, A6): 9 sayfa.** Çakışma düşük
   (yalnız sivrihisar-osb ilk kopyası, demirciler ilk kopyası). Doğrula → deploy.
2. **Parti 2 — Eskişehir çakışmalı küme (A3, A4, A5, A7): 10 sayfa.**
   osb-havacilik-kumesi ×2, sivrihisar-osb 2. kopya, beylikova-osb ×2,
   kutahya-cevre-ili ilk 2 kopya, demirciler 2. kopya — hepsi SIRAYLA,
   her yazar öncekinin son hâlini okur. Doğrula → deploy.
3. **Parti 3 — Bilecik (B1, B2, B3): 7 sayfa.** sogut-osb/pazaryeri-osb ilk
   kopyalar + komşu ilçe sayfaları okuması. Doğrula → deploy.
4. **Parti 4 — Bozüyük manlift + inonu (B4, B5, B6): 6 sayfa.** inonu 4.
   kopya bu partide — üç mevcut dosya okunmadan başlanmaz; kutahya 3-4.
   kopyalar. Doğrula → deploy.
5. **Parti 5 — Bozüyük platform (B7…B12): 12 sayfa.** KSS üçlüleri,
   sakarya ×3, sogut-osb 2-3. kopyalar sırayla. `docs/ICERIK-SIRASI.md`
   güncellemesi + `npm run kontrol:icerik` tam tarama. Doğrula → deploy.

Parti başına doğrulama, örtüşme ölçüm scripti (olcum.mjs), commit/push
(`gh auth switch -u arti-tech61`), iki Coolify deploy'u ve canlı doğrulama:
**İzmir belgesi §7 AYNEN uygulanır.** Tuzak listesi (pkill yasağı, duplicate
key, kapanmamış dosya, çift tırnak, unary plus, sona-ekleme) İzmir belgesi
§8'dekiyle aynıdır.

## 5. Kabul kriterleri

- [ ] 44 yeni sayfa canlıda 200 dönüyor, hepsi sitemap'te
- [ ] `git diff src/lib/siteler.ts`: her değişen `bolge:` satırında eski
      girdiler aynen/aynı sırada, eklemeler yalnız satır sonunda
- [ ] Tüm parti örtüşme ölçümleri kardeş çiftlerde <%1 (hiçbiri >%5 değil);
      §3c komşu-konu çiftleri de ölçüme dahil edildi
- [ ] `npm run kontrol` + `kontrol:icerik` 0 ihlal
- [ ] Her sayfa 1.000-1.500 kelime, simetri tam (5 madde / 3 ek bölüm, ilki
      tablolu / 6 uzun SSS / kaynak satırı)
- [ ] Hiçbir sayfada tesis içi iddia, firma adı, uydurma rakam yok; havacılık
      sayfalarının `kaynak` satırı "kümenin varlığı düzeyinde" sınırını beyan
      ediyor
- [ ] Yenipazar sayfaları Bilecik ilçesini anlatıyor (Aydın karışması yok)
- [ ] `docs/ICERIK-SIRASI.md` koridor satırları güncellendi, push + iki
      Coolify deploy'u "finished"

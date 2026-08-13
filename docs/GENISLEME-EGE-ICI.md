# Ege İçi SEO Genişleme — Denizli · Afyon · Kütahya · Uşak · Aydın (Uygulama Emri)

Tarih: 2026-08-13. Format ve mekanik `docs/IZMIR-SEO-GENISLEME.md` ile birebir
aynıdır; bu belge o şablonun Ege içi 5 il kümesine uyarlanmış hâlidir.
Teknik mekanik (bölge sayfası nasıl doğar, slugla kuralları, BespokeIcerik tipi,
doğrulama protokolü, tuzaklar) İzmir belgesinin 1., 7. ve 8. bölümlerinden AYNEN
geçerlidir — burada tekrarlanmayan her kural orada yazdığı gibi uygulanır.

---

## 0. Bağlam — neden bu iş

Beş il için Google taraması yapıldı (2026-08-13): "denizli platform kiralama",
"afyon platform kiralama", "kütahya platform kiralama", "aydın platform
kiralama". Uşak için ayrı tarama yapılmadı; görev tanımı gereği zayıf rekabet
varsayıldı (tek gözlem: Afyon rakibi Egemen Forklift'in Uşak landing sayfası var).

**Genel tablo İzmir'den daha elverişli:** bu illerde hiçbir rakipte SSS, tablo
veya sektörel sayfa yok; ilçe sayfası olan rakip sayısı azdır. En ciddi kapsam
rakibi Aydın'da (aydinplatform.com.tr, 17 ilçe sayfası); en ciddi fiyat
şeffaflığı rakibi yine Aydın'da (aydinmanliftplatform.com, fiyat aralıkları
yayınlıyor). Denizli ve Uşak'ta rekabet en zayıf.

İki öz-gözlem (rakip değil, bilgi):
- artiplatform.com.tr (kendi ayrı sitemiz) Denizli ve Kütahya aramalarında
  1. sayfada — kendi domainlerimizle kanibalizasyon değil tamamlayıcılık:
  açılar farklı tutulacak.
- afyonplatform.com, kutahyaplatform.com, aydinplatform.net (kuluçka-hub
  domainlerimiz) 1. sayfada listeleniyor; Afyon/Kütahya sonuçlarında hâlâ ESKİ
  site URL yapısı görünüyor (örn. `/afyon-platform-kiralama-urunlerimiz/...`)
  — eski indeks. Yeni bölge sayfaları + sitemap bu indeksin tazelenmesini
  hızlandırır.

### Rakip envanteri — il il (Google 1. sayfa, WebFetch ile doğrulandı)

**Denizli**
| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| denizliplatform.com.tr | Yok (sadece "çevre iller" metni) | 10+ duyuru ("araç aldık" tipi) | Kısa kategori sayfaları; SSS/tablo yok; 1984'ten beri, 500+ makine iddiası |
| denizliplatformkiralama.com | Yok | ~10 duyuru | Şablon ağır (Ekolikweb ajans şablonu), SSS/tablo yok |
| kiralikplatformdenizli.com | Yok | ~10 duyuru | Aynı ajans şablonu ailesi; sığ; sosyal linkler placeholder |
Not: Aynı şablon ailesinden platformdenizli.com, denizlieklemliplatform.com vb.
kardeş doorway'ler de 1. sayfayı dolduruyor — hepsi sığ. **İlçe/OSB derinliği
olan tek oyuncu biz olacağız.**

**Afyon**
| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| afyonegemenforklift.com.tr | Çevre il landing'leri (Bursa, Denizli, Isparta, Burdur, Uşak) | Duyuru tipi | 1998'den beri; forklift+platform+yedek parça; teknik rehber/SSS yok |
| makinaparkuru.com (pazaryeri) | İl bazlı listeleme sayfaları | — | Teknik özellik tabloları VAR (model/yükseklik); 20+ ilan; firma değil aracı |
| masplatformkiralama.com | Tek Afyon sayfası | Yok | Çok sığ |

**Kütahya**
| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| uzayplatform.com.tr | Çok-il şablonu (Manisa, Ankara, Gaziantep...) | Var, tarihli | Kütahya sayfası ~1.200 kelime, görece özgün — kelime sayısında en yakın rakip; SSS/tablo yok |
| kutahyavinckiralama.com | 13 Kütahya ilçesi + 6 çevre il | Var (eğitici: "Vinç nedir?") | Sayfa başına sığ; vinç odaklı, platform ikincil |
| kirandagforkliftplatform.com | Tek Kütahya sayfası | Yok | İstanbul/Gebze merkezli; sığ; fiyat vermiyor |

**Aydın** — kümenin en rekabetçi ili
| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| aydinplatform.com.tr | **17 ilçe sayfası** | Duyuru tipi | 1984'ten beri, 500+ filo; ilçe sayfaları şablon; SSS/tablo yok |
| aydinmanliftplatform.com | İlçe landing'leri (Kuşadası, Söke, Nazilli...) | Blog-vari bölümler | **Fiyat şeffaflığı VAR** (günlük/aylık aralıklar), filo rakamları, SSS-vari "manlift nedir" içeriği — en tehlikeli rakip |
| aydinplatformkiralama.com | Yok | Yok | Tek lokasyon, jenerik; sığ |

**Uşak** — zayıf rekabet varsayımı (görev tanımı); yerel odaklı güçlü site
gözlenmedi. usakplatform.com tek domainimiz — düşük maliyetle il liderliği
alınabilir.

### Rakiplerin ortak zayıflıkları → bizim silahımız (5 ilde de aynı)
1. SSS / karşılaştırma tablosu hiçbirinde yok (makinaparkuru'nun spec tablosu hariç).
2. OSB / sanayi bölgesi bazlı sayfa HİÇBİR rakipte yok — ilçe bile azınlıkta.
3. Blog fiilen "makine aldık" duyurusu; eğitici içerik yalnız kutahyavinckiralama'da ve sığ.
4. Sayfa derinliği 200-500 kelime şablon (tek istisna uzayplatform ~1.200).
5. Fiyat şeffaflığı yalnız aydinmanliftplatform'da — Aydın'da fiyat-mantığı
   sayfası (rakamsız, İzmir Faz C deseni) ile karşılık verilebilir (bu belge
   kapsamı dışında, ileriki faz).

**Strateji: OSB/sanayi bölgesi sayfalarıyla kimsenin girmediği katmanı al,
ilçe kapsamını rakip seviyesine çıkar. Her sayfa elle yazılır (1.000-1.500
kelime, 5 madde + 3 ek bölüm/tablolu + 6 SSS + kaynak).**

---

## 1. Teknik mekanik — özet (detay: IZMIR-SEO-GENISLEME.md §1)

1. `src/lib/siteler.ts` → ilgili domainin `bolge:` alanına yeni adı **Türkçe
   karakterleriyle, listenin EN SONUNA** ekle.
   ⛔ **SONA-EKLEME KURALI MUTLAK — ortaya/başa ekleme YASAK.**
   (`bolge-hizmet-sayfalari.ts:240` ilk 3 girdiden alt sayfa üretir;
   `anahtar-kelime-sayfalari.ts:50` ve `firsat-sayfalar.ts:23` ilk girdiyi
   kullanır; `bolge-sayfalari.ts` ürün eşleşmesini indeksten türetir. Araya
   girmek canlı URL düşürür / canlı metin değiştirir.) Mevcut girdilerin
   yazımını ASLA değiştirme — varyant tuzları ada bağlı.
2. Slug `slugla()` ile: küçük harf, ı→i ğ→g ü→u ş→s ö→o ç→c İ→i,
   alfasayısal olmayan → `-`.
3. Elle içerik `src/lib/bespoke/<host-tireli>.ts` içine `"bolge:<slug>"`
   kaydı olarak eklenir. **Bu belgedeki 14 domainin bespoke dosyası ve
   `bespoke-icerik.ts` kaydı ZATEN VAR** (2026-08-13 doğrulandı) — yeni dosya
   ve yeni import AÇMA (duplicate-key TS hatası verir).
4. Kayıt şeması, kopya içerik kuralları (<%1 kardeş örtüşme hedefi), ölçüm
   scripti, doğrulama protokolü, deploy komutları: İzmir belgesi §1a, §2, §7.

---

## 2. FAZ A — Bölge genişlemesi (39 sayfa)

Her satır: `siteler.ts`'te ilgili domainin `bolge:` alanının **sonuna aynen bu
yazımla** eklenecek metin → üretilecek slug → yazım açısı.

Gerçeklik çerçevesi (hepsi `src/lib/hedef-bolgeler.ts`'te kayıtlı, kamuya açık):
Denizli OSB, Denizli Deri İhtisas OSB, Çardak OSB + tekstil ağırlığı; Afyon
Mermer İhtisas OSB (İscehisar), Sandıklı OSB, Dinar OSB, Bolvadin OSB, Emirdağ
OSB; Kütahya OSB, Tavşanlı OSB, Gediz OSB, Simav OSB, Kütahya Seramik Sanayi
Bölgesi, Tunçbilek ve Seyitömer termik santral bölgeleri; Uşak OSB, Uşak Deri
Karma OSB, Banaz OSB; Aydın'da ASTİM OSB, Nazilli OSB, Söke OSB, Çine OSB.
Aydın'ın jeotermal karakteri (Germencik–Buharkent hattı) ve Ortaklar'ın
(Germencik) karayolu kavşağı konumu kamuya açık gerçeklerdir. **Bu listenin
ötesinde tesis adı/rakam/istatistik ÜRETME.**

### A1. denizliplatform.net — açı: tekstil fabrikası, mermer ve termal otel ekipmanı (4 sayfa)
| Eklenecek bölge | Slug | İpucu |
|---|---|---|
| Denizli OSB | denizli-osb | tekstil ağırlıklı OSB'de fabrika içi yüksekte çalışma |
| Çardak OSB | cardak-osb | il merkezine uzak OSB'de sevkiyat/planlama gerçeği |
| Tavas | tavas | ilçe ölçeğinde tesis ve bina işleri |
| Merkezefendi | merkezefendi | merkez ilçede sanayi sitesi + ticari cepheler |

### A2. manliftkirala.xyz — açı: Denizli tekstil ve mermer sanayinde manlift (3 sayfa)
| Sarayköy | saraykoy | jeotermal/sera ve tesis bakımında manlift erişimi |
| Buldan | buldan | dokuma ilçesinde küçük işletme manlift işleri |
| Denizli Deri İhtisas OSB | denizli-deri-ihtisas-osb | ihtisas OSB'de üretim alanı koşulları |

### A3. afyonplatform.com.tr — açı: termal otel + mermer ocağı/fabrikası (3 sayfa)
| İscehisar Mermer İhtisas OSB | iscehisar-mermer-ihtisas-osb | mermer işleme tesislerinde toz/yük koşulu |
| Sandıklı OSB | sandikli-osb | OSB + termal ilçe kombinasyonu |
| Şuhut | suhut | ilçe tesisleri ve bina işleri, merkezden lojistik |

### A4. afyonplatform.com — açı: Dazkırı-Çobanlar tekstil ve halı sanayi (2 sayfa)
| Başmakçı | basmakci | Dazkırı komşusu ilçede tesis işleri |
| Evciler | evciler | güneybatı aksının uç noktasına sevkiyat planı |

### A5. afyonplatform.net — açı: şehir merkezi inşaat ve bina cephesi (3 sayfa)
| Bayat | bayat | ilçe merkezi bina/cephe işleri |
| Hocalar | hocalar | küçük ilçeye ekipman götürme pratiği |
| Bolvadin | bolvadin | ilçe merkezinde inşaat/cephe açısı (DİKKAT: ×4 çakışma) |

### A6. afyonmanlift.com — açı: Emirdağ-Sinanpaşa tarım sanayi ve gıda tesisleri (2 sayfa)
| Emirdağ OSB | emirdag-osb | OSB'de tarım makinesi/gıda tesisi bakımı |
| İhsaniye | ihsaniye | tarımsal yapılar ve depo işleri |

### A7. afyonmanliftkiralama.net — açı: OSB fabrika ve lojistik depoları (3 sayfa)
| Sandıklı OSB | sandikli-osb | OSB depo/fabrika manlift turu (A3'ten farklı açı!) |
| Bolvadin OSB | bolvadin-osb | OSB üretim tesislerinde iş planı |
| Afyonkarahisar Küçük Sanayi Sitesi | afyonkarahisar-kucuk-sanayi-sitesi | KSS atölye ölçeği |

### A8. afyonplatformkiralama.com — açı: enerji tesisleri ve tarım sanayi (2 sayfa)
| Dinar OSB | dinar-osb | enerji/tarım sanayi kesişiminde ekipman planı |
| Sultandağı | sultandagi | meyve-tarım aksında sezonluk tesis işleri |

### A9. kutahyaplatform.com — açı: seramik üretimi, depo ve tesis bakımı (2 sayfa)
| Kütahya OSB | kutahya-osb | OSB'de seramik/üretim tesisi depo bakımı |
| Emet | emet | bor/maden ilçesinde tesis bakım lojistiği |

### A10. kutahyaplatform.com.tr — açı: merkez seramik ve çini fabrikaları (3 sayfa)
| Kütahya Seramik Sanayi Bölgesi | kutahya-seramik-sanayi-bolgesi | seramik hattı üstü/fırın çevresi çalışma |
| Altıntaş | altintas | merkezden ilçeye sevkiyatlı iş planı |
| Kütahya OSB | kutahya-osb | seramik-çini fabrika açısından OSB (A9'dan farklı açı!) |

### A11. kutahyaplatform.tr — açı: Tavşanlı maden-termik ve Gediz bölgesi (3 sayfa)
| Tunçbilek Termik Santral Bölgesi | tuncbilek-termik-santral-bolgesi | santral çevresi bakım disiplini |
| Seyitömer Termik Santral Bölgesi | seyitomer-termik-santral-bolgesi | duruş dönemi yoğunluğu planlama |
| Tavşanlı OSB | tavsanli-osb | maden yan sanayi OSB işleri |

### A12. kutahyaplatform.net — açı: çini, seramik ve termik santral sanayi (2 sayfa)
| Gediz OSB | gediz-osb | ilçe OSB'sinde üretim tesisi işleri |
| Simav | simav | jeotermal/sera ve ilçe tesisleri (DİKKAT: ×4 çakışma) |

### A13. usakplatform.com — açı: halı, tekstil ve deri sanayi fabrikaları (3 sayfa)
| Uşak Deri Karma OSB | usak-deri-karma-osb | deri ihtisas OSB'de üretim alanı koşulları |
| Banaz OSB | banaz-osb | ilçe OSB'sine sevkiyat + tesis işleri |
| Sivaslı | sivasli | ilçe ölçeğinde işletme/bina işleri |

### A14. aydinplatform.net — açı: otel, enerji, tarım sanayisi ve tesis bakımı (4 sayfa)
| ASTİM OSB | astim-osb | il merkezinin ana OSB'sinde tesis bakım turu |
| İncirliova | incirliova | tarım sanayi aksında tesis işleri |
| Ortaklar | ortaklar | Germencik-Ortaklar kavşak konumundan lojistik avantaj |
| Buharkent | buharkent | jeotermal tesis çevresi çalışma koşulu |

**Faz A toplamı: 39 yeni elle yazılmış bölge sayfası**
(Denizli 7 · Afyon 15 · Kütahya 10 · Uşak 3 · Aydın 4)

---

## 3. Çakışma haritası (2026-08-13 grep ile doğrulandı — yazım anında yeniden teyit et)

Yazmadan önce: `grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts`

| Slug | Mevcut bespoke dosyası | Yeni yazacak | Toplam |
|---|---|---|---|
| bolvadin | afyonplatform-com-tr, afyonmanliftkiralama-net, afyonplatformkiralama-com | A5 | **4 — EN YÜKSEK RİSK** |
| simav | kutahyaplatform-com, kutahyaplatform-com-tr, kutahyaplatform-tr | A12 | **4 — EN YÜKSEK RİSK** |
| kutahya-osb | kutahyaplatform-net | A9, A10 | 3 |
| dinar-osb | afyonplatform-com-tr, afyonmanliftkiralama-net | A8 | 3 |
| sultandagi | afyonplatform-com, afyonmanlift-com | A8 | 3 |
| denizli-osb | manliftkirala-xyz | A1 | 2 |
| merkezefendi | manliftkirala-xyz | A1 | 2 |
| saraykoy | denizliplatform-net | A2 | 2 |
| buldan | denizliplatform-net | A2 | 2 |
| suhut | afyonplatform-net | A3 | 2 |
| sandikli-osb | — | A3, A7 | 2 |
| ihsaniye | afyonmanliftkiralama-net | A6 | 2 |
| bolvadin-osb | afyonmanlift-com | A7 | 2 |
| cardak-osb, tavas, denizli-deri-ihtisas-osb, iscehisar-mermer-ihtisas-osb, basmakci, evciler, bayat, hocalar, emirdag-osb, afyonkarahisar-kucuk-sanayi-sitesi, emet, kutahya-seramik-sanayi-bolgesi, altintas, tuncbilek-termik-santral-bolgesi, seyitomer-termik-santral-bolgesi, tavsanli-osb, gediz-osb, usak-deri-karma-osb, banaz-osb, sivasli, astim-osb, incirliova, ortaklar, buharkent | — | tekil | 1 |

**Bolvadin kuralı (×4):** A5 yazılmadan önce 3 mevcut dosyadaki bolvadin
kayıtları OKUNUR; A5 açısı yalnız inşaat/bina cephesidir — OSB/tarım/enerji
anlatılarına GİRME (onlar kardeş dosyalarda).
**Simav kuralı (×4):** A12 yazılmadan önce 3 mevcut Simav kaydı okunur; A12
çapası jeotermal/sera + termik-sanayi bağlantısıdır, kardeşlerin genel ilçe
anlatısını tekrarlama.
**kutahya-osb kuralı (×3):** A9 depo/tesis bakımı, A10 seramik-çini fabrika
açısı, mevcut kutahyaplatform-net kaydı çini/termik açısı — üç metin sıfırdan
ve ayrık; A9 ile A10 SIRAYLA yazılır, sonraki öncekini okur.
**sandikli-osb (×2, ikisi de yeni):** A3 termal-mermer, A7 depo-lojistik açısı;
sırayla yazılır.

Çakışan slug'lar parti içinde SIRAYLA yazılır (paralel değil); her yeni sayfa
öncekilerin son hâlini okur. 8 kelimelik ardışık ortaklık yasak; kardeş çift
örtüşme hedefi <%1 (İzmir belgesi §7 ölçüm scriptiyle ölç).

---

## 4. Uygulama sırası (öneri)

1. **Parti 1 — Denizli + Uşak (10 sayfa):** A1, A2, A13 → doğrula → deploy
   (en zayıf rekabet, en hızlı kazanım)
2. **Parti 2 — Aydın + Kütahya (14 sayfa):** A14, A9–A12 (kutahya-osb ve simav
   çakışmaları bu partide — sıralı yazım) → doğrula → deploy
3. **Parti 3 — Afyon (15 sayfa):** A3–A8 (bolvadin, sandikli-osb, dinar-osb,
   sultandagi çakışmaları — sıralı yazım) → doğrula → deploy

Parti başına doğrulama, commit (`gh auth switch -u arti-tech61`), iki Coolify
deploy'u ve canlı kontrol: İzmir belgesi §7 protokolü aynen.

## 5. Kabul kriterleri

- [ ] 39 yeni bölge sayfası canlıda 200 dönüyor ve sitemap'te
- [ ] `git diff src/lib/siteler.ts`: her `bolge:` satırında eski girdiler aynen
      ve aynı sırada; eklemeler yalnız satır sonunda
- [ ] Kardeş çift örtüşmeleri <%1 (hiçbiri >%5 değil); `npm run kontrol` 0 ihlal
- [ ] Her sayfa 1.000+ kelime, simetri tam (5 madde / 3 ek bölüm+tablo / 6 SSS / kaynak)
- [ ] Uydurulmuş tesis adı/rakam yok; her kayıtta `kaynak` satırı beyanı var
- [ ] Yeni bespoke dosyası ve yeni `bespoke-icerik.ts` importu AÇILMADI

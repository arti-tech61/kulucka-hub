# İstanbul Kümesi — SEO Genişleme Planı (Faz A)

Tarih: 2026-08-13. Bu belge `docs/IZMIR-SEO-GENISLEME.md`'nin İstanbul kümesi
için kısaltılmış eşdeğeridir. **Teknik mekanik, geçilmez kurallar, doğrulama
protokolü ve tuzaklar için o belgenin §1, §2, §7 ve §8 bölümleri AYNEN
geçerlidir — burada tekrarlanmaz, oradan uygulanır.**

---

## 0. Bağlam — rakip taraması (2026-08-13)

"istanbul manlift kiralama" ve "istanbul platform kiralama" Google 1. sayfa
taraması yapıldı. İyi haber: **istanbuleklemliplatform.com kendi sorgusunda
1. sayfada görünüyor.** Kötü haber: İstanbul, İzmir'den kalabalık bir pazar —
1. sayfada Armut gibi marketplace'ler ve köklü filo firmaları (Uzay Platform:
"Türkiye'nin ilk platform kiralama firması", 450+ makine) var.

### Rakip envanteri (incelenen en güçlü 5 site)

| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| manliftkiralama.com.tr | 7 bölge sayfası (Tuzla, Pendik, Kartal, Maltepe, Ataşehir, Kadıköy) + 39 ilçe tek listede | Yok | Ana sayfa ~3.500 kelime, teknik detay yüksek; SSS/tablo yok |
| uzayplatform.com.tr | 15+ il/bölge iniş sayfası (İstanbul + Anadolu illeri) | 10+ haber | ~300+ kelime hizmet sayfaları; büyük filo, marka gücü yüksek |
| guvenplatform.com.tr | Az sayıda ilçe (Esenyurt, Kadıköy izleri) | Var, az sayıda | Ana makale ~1.200-1.500 kelime; SSS ayrı sayfa; tablo yok |
| istanbulplatform.com.tr | Yok | Yok | 7 ürün + 4 hizmet sayfası, kısa şablon; SSS/tablo yok |
| istanbulkiralikmanlift.com | Yok | Yok | Wix tek sayfa, 6 model; minimal |

Ayrıca 1. sayfada: armut.com (marketplace), karlivinc.com.tr,
vincplatformkiralama.com.tr, dogaplatform.com, temelplatform.com (Ataşehir
merkezli), eksiogluistanbulplatform.com, harputplatform.com (Silivri).

### Rakiplerin ortak zayıflıkları → bizim silahımız
1. **İlçe/bölge sayfası fiilen yok** — en iyisi 7 sayfa; 39 ilçeyi tek
   listeye yazan var, ilçe başına sayfa açan yok denecek kadar az.
2. Blog zayıf (en iyisi 10 kısa haber), SSS/tablo/karşılaştırma sıfıra yakın.
3. OSB/sanayi-alanı sayfası hiçbirinde yok (İkitelli, Dudullu, Tuzla OSB,
   Beylikdüzü OSB, tersaneler — hepsi boş alan).
4. Avrupa/Anadolu yakası ayrımını lojistik gerçeklik olarak işleyen yok;
   biz 3-hub modelini (İkitelli/Tuzla/Gebze) zaten anlatıyoruz.
5. Fiyat şeffaflığı zayıf (istanbul-platform.com açımız bunu zaten işliyor).

**Strateji:** İzmir'deki durumun tersi — İstanbul'da rakipler *kapsamda da*
zayıf. Elle yazılmış OSB/ilçe sayfalarıyla hem kapsam hem derinlik farkı
açılır. Farklılaşmanın omurgası: (a) yaka ayrımı — her sayfa hangi hub'dan,
hangi köprü/tünel güzergahıyla beslenir; (b) sektörel doku — tersane, deri,
kimya, havalimanı lojistiği, plaza/gökdelen.

### Kendi envanterimiz (2026-08-13)

6 domain, 42 elle yazılmış bölge sayfası:

| Domain | Açı | Mevcut `bolge:` bespoke slug'ları |
|---|---|---|
| istanbuldaplatform.com | İkitelli merkezli kurumsal proje + maliyet hesaplama | ikitelli, basaksehir, esenler, bagcilar, mahmutbey, tuzla, gebze-cevre-bolge (7) |
| istanbulplatforms.com | uzun dönem kontrat / endüstriyel tedarik | ikitelli-osb, basaksehir, istanbul-geneli, marmara-bolgesi (4) |
| istanbulplatformkiralama.net | Tuzla tersane + OSB, Anadolu Yakası | tuzla, tuzla-osb, aydinli, pendik, kartal, maltepe, kadikoy, uskudar (8) |
| istanbul-platform.com | fiyat şeffaflığı, iki yaka, 3 şube | ikitelli, esenyurt, basaksehir, hadimkoy, tuzla, gebze, pendik, kartal (8) |
| platformistanbul.net | 3-hub sevkiyat modeli (İkitelli/Tuzla/Gebze) | ikitelli, basaksehir, mahmutbey, tuzla, pendik, gebze, gosb, tosb, dilovasi, istanbul-geneli (10) |
| istanbuleklemliplatform.com | gökdelen/plaza + liman, eklemli | levent, maslak, atasehir, istanbul-avrupa-yakasi, istanbul-anadolu-yakasi (5) |

---

## 1. GEÇİLMEZ HATIRLATMALAR (İzmir belgesi §1-2'nin özü)

1. ⛔ **SONA EKLEME KURALI MUTLAK.** `siteler.ts` `bolge:` alanında yeni ad
   listenin **EN SONUNA** eklenir; ortaya/başa ekleme YASAK
   (`bolge-hizmet-sayfalari.ts` ilk 3 girdiden alt sayfa üretir — ilk 3'ü
   kaydırmak indekslenmiş URL'leri 404 yapar; ilk girdi başlıklarda kullanılır;
   `ilgiliUrun` indeks bazlıdır). Mevcut girdilerin yazımını ve sırasını BOZMA.
   Düzenleme sonrası `git diff src/lib/siteler.ts` ile teyit et.
2. Bespoke kayıt: `src/lib/bespoke/<host-tireli>.ts` içine `"bolge:<slug>"`
   anahtarıyla — 6 dosyanın hepsi mevcut ve host kayıtlı, **yeni dosya/import
   açma** (duplicate-key hatası verir).
3. Simetri: h1 → giriş → 5 madde → 3 ek bölüm (ilki TABLOLU) → 6 uzun SSS →
   kaynak satırı. 1.000-1.500 kelime.
4. Kopya içerik yasak: aynı slug'ı yazan kardeş dosyaları önce
   `grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts` ile bul, OKU; 8 kelimelik
   ardışık ortaklık yasak; hedef örtüşme <%1.
5. Bilgi uydurma yasak. Aşağıdaki tablolardaki yerler
   `src/lib/hedef-bolgeler.ts` İstanbul girdisiyle doğrulanmıştır (35 ilçe +
   İkitelli/Tuzla/Dudullu/Beylikdüzü/Birlik OSB, Tuzla Kimya Sanayicileri OSB,
   İstanbul Deri OSB, Tuzla Tersaneler Bölgesi, Ambarlı Limanı, İMES,
   Maslak-Levent iş merkezleri). Bunların ötesinde tesis/firma adı, rakam
   üretme. **GEBKİM önerilmez — Kocaeli'dedir, İstanbul değil.**
6. Yaka/hub tutarlılığı: Avrupa Yakası sayfaları İkitelli hub'ından, Anadolu
   Yakası sayfaları Tuzla hub'ından beslenir — metinde ters yazma.

---

## 2. FAZ A — Bölge genişlemesi (23 sayfa)

Her satır: `siteler.ts`'te ilgili domainin `bolge:` alanının **SONUNA aynen
eklenecek metin** → üretilecek slug → yazım açısı ipucu.

### A1. istanbuldaplatform.com — açı: kurumsal proje + maliyet hesaplama (4)
| Eklenecek bölge (aynen) | Slug | İpucu |
|---|---|---|
| Esenyurt | esenyurt | depo/üretim yoğun ilçede proje maliyet kalemleri |
| Beylikdüzü OSB | beylikduzu-osb | OSB içi kurumsal iş planlama ve bütçeleme |
| Hadımköy | hadimkoy | sanayi aksında çok makineli proje kurgusu |
| Küçükçekmece | kucukcekmece | karma doku (konut+sanayi) işlerinde keşif/maliyet |

### A2. istanbulplatforms.com — açı: uzun dönem kontrat / endüstriyel tedarik (4)
| Dudullu OSB | dudullu-osb | Anadolu Yakası OSB'sinde sürekli filo tahsisi |
| Silivri | silivri | uzak ilçede kontratlı tedarikin lojistik avantajı |
| Ambarlı Liman | ambarli-liman | liman ardiyesi operasyonuna dönemsel tahsis |
| İstanbul Deri OSB | istanbul-deri-osb | Tuzla'daki ihtisas OSB'sinde periyodik bakım kontratı |

### A3. istanbulplatformkiralama.net — açı: Tuzla tersane + OSB disiplini (4)
| Tuzla Tersaneler Bölgesi | tuzla-tersaneler-bolgesi | tersane giriş prosedürü, tuzlu hava, dar zemin |
| Tuzla Kimya Sanayicileri OSB | tuzla-kimya-sanayicileri-osb | kimya sahasında ekipman hazırlığı ve İSG |
| Sancaktepe | sancaktepe | büyüyen Anadolu Yakası ilçesine Tuzla hub sevkiyatı |
| Sultanbeyli | sultanbeyli | ilçe ölçeğinde OSB disiplinini taşımak |

### A4. istanbul-platform.com — açı: fiyat şeffaflığı, iki yaka (4)
| Beylikdüzü | beylikduzu | ilçe bazında fiyatı etkileyen unsurlar (rakamsız) |
| Avcılar | avcilar | nakliye mesafesinin maliyete etkisi, E-5 hattı |
| Ümraniye | umraniye | İMES hattında makine seçimi/fiyat ilişkisi |
| Kağıthane | kagithane | dönüşen ofis aksında süre-bütçe dengesi |

### A5. platformistanbul.net — açı: 3-hub sevkiyat modeli (4)
| Esenyurt | esenyurt | İkitelli hub'ından sevkiyat penceresi |
| Dudullu OSB | dudullu-osb | Tuzla hub'ından OSB'ye sevkiyat rotası |
| Arnavutköy | arnavutkoy | havalimanı lojistik aksına hub planlaması |
| Çatalca | catalca | en uzak ilçeye sevkiyat süresi gerçekleri |

### A6. istanbuleklemliplatform.com — açı: gökdelen/plaza + yüksek erişim (3)
| Şişli | sisli | plaza/yüksek yapı cephe işlerinde eklemli erişim |
| Sarıyer | sariyer | Maslak aksı dışı yamaç doku, engel aşma |
| Bakırköy | bakirkoy | AVM/yüksek tavan ortak alanlarında eklemli kullanım |

**Faz A toplamı: 23 yeni elle yazılmış bölge sayfası** (küme 42 → 65).

> `bolge:` alanına ekleme örneği (A2): mevcut
> `"İkitelli OSB, Başakşehir, İstanbul geneli, Marmara bölgesi"` →
> `"İkitelli OSB, Başakşehir, İstanbul geneli, Marmara bölgesi, Dudullu OSB, Silivri, Ambarlı Liman, İstanbul Deri OSB"`

---

## 3. Çakışma haritası (grep ile 2026-08-13 doğrulandı — yazım anında tekrar teyit et)

`grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts`

| Slug | Mevcut bespoke | Yeni yazacak | Toplam |
|---|---|---|---|
| esenyurt | istanbul-platform-com | A1, A5 | **3 — EN YÜKSEK RİSK** |
| hadimkoy | istanbul-platform-com | A1 | 2 |
| dudullu-osb | — | A2, A5 | 2 |
| beylikduzu-osb (A1) / beylikduzu (A4) | — | ayrı slug ama **komşu konu** — iki sayfa birbirini okumadan yazılmaz; A1 sırf OSB içi, A4 sırf ilçe geneli/fiyat | 2 |
| diğer 15 slug | — | tekil | 1 |

**Esenyurt kuralı (×3):** önce `istanbul-platform-com.ts`'teki mevcut esenyurt
kaydı okunur; A1 maliyet-kalemi açısından, A5 hub-sevkiyat açısından yazar —
cümle düzeyi ortaklık yasak, sırayla yazılır (paralel değil).

Ayrıca: istanbulplatformkiralama-net'te `tuzla-osb` ve `aydinli` zaten var —
A3'ün yeni tersane/kimya sayfaları bunları OKUMADAN yazılmaz (aynı dosya
içinde de tekrar yasak).

---

## 4. Uygulama ve doğrulama

Parti düzeni önerisi: **Parti 1** A1+A2 (8) → **Parti 2** A3+A4 (8) →
**Parti 3** A5+A6 (7; esenyurt×3 ve dudullu-osb×2 çakışmaları burada kapanır).

Parti başına doğrulama, commit/push (`gh auth switch -u arti-tech61`), iki
Coolify app deploy'u ve canlı kontrol: `docs/IZMIR-SEO-GENISLEME.md` §7
protokolü aynen uygulanır (olcum.mjs örtüşme scripti dahil; her çift <%1).

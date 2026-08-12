# İçerik Geliştirme Sırası — 85 Domain

> Bu dosya **bağlayıcıdır.** Elle yazılmış içerik (CLAUDE.md KURAL 2) bu sırayla
> ilerler. Sıra dışına çıkmak için gerekçe yazın.

## Puanlama

`puan = il pazar ağırlığı + bölge derinliği + uzantı gücü`

| Bileşen | Nasıl hesaplanır |
|---|---|
| İl pazar ağırlığı | Sanayi tesisi yoğunluğu + nüfus, 3–10 bandına ölçeklendi (İstanbul 10, Bilecik 3,5) |
| Bölge derinliği | `min(10, ilçe sayısı) × 0,35 + OSB sayısı × 0,5` — yazılacak yüzey ne kadar geniş |
| Uzantı gücü | `.com/.net/.com.tr/.tr` → +1,2; `.xyz/.org/.site/.store/.online` → 0 |

## Her domain için iş akışı

1. `bespoke-icerik.ts` içine `"<host>": { "bolge:<slug>": {...} }` kaydı aç.
2. **Bölge sayfaları** (en yüksek arama hacmi) → **hizmet** → **blog** sırasıyla.
3. Sayfa başına hedef: **1.200–1.500 kelime**, en az 1 karşılaştırma tablosu,
   5-6 uzun SSS.
4. ⛔ Bilgi uydurulamaz. Tesis adı, mesafe, OSB özelliği doğrulanabilir olmalı.
5. `npm run kontrol` → 0 ihlal olmadan commit yok.
6. Kalite referansı: `izmir-manlift.com` (%0,2 örtüşme).

## Dilimler

| Dilim | Sıra | Kapsam |
|---|---|---|
| **1** | 1–15 | Büyükşehir + yüksek OSB yoğunluğu. Tam elle yazım. |
| **2** | 16–35 | Sanayi illeri. Bölge + hizmet sayfaları elle. |
| **3** | 36–60 | Orta ölçek. Bölge sayfaları elle, gerisi şablon. |
| **4** | 61–85 | Uzun kuyruk. Şablon + hedefli bölge sayfası. |

## Sıra

| # | Dilim | Puan | Domain | İl | Merkez | Kapsam | Uzmanlık |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 16.5 | `izmirmakasliplatform.xyz` | İzmir | Kemalpaşa OSB | 10 ilçe / 8 OSB | Lojistik depo yüksek raf erişimi için makaslı platform kiralama |
| 2 | 1 | 16.4 | `izmir-manlift.net` | İzmir | Kemalpaşa | 9 ilçe / 6 OSB | Fabrika içi kesintisiz üretim ortamına uygun akülü makaslı ve eklemli  |
| 3 | 1 | 16.4 | `izmirmanliftkiralama.net` | İzmir | Aliağa | 9 ilçe / 6 OSB | Rafineri ve liman sahalarına belgeli operatörlü, ISG uyumlu manlift ki |
| 4 | 1 | 16.2 | `ankaraeklemliplatform.com` | Ankara | OSTİM | 10 ilçe / 5 OSB | OSB sanayi tesislerinde dar alan ve engebeli zeminde eklemli platform  |
| 5 | 1 | 15.8 | `izmir-man-lift.com` | İzmir | Çiğli | 9 ilçe / 5 OSB | Deniz kıyısı rüzgar koşullarına dayanıklı eklemli ve teleskopik manlif |
| 6 | 1 | 15.8 | `izmirplatformskiralama.com` | İzmir | Konak | 9 ilçe / 5 OSB | Şehir merkezi işletmelerine saatlik, esnek programlı kısa süreli platf |
| 7 | 1 | 15.7 | `ankara-platform.com` | Ankara | OSTİM | 10 ilçe / 4 OSB | Ankara'nın OSTİM-İvedik-Sincan sanayi hattına genel amaçlı platform ki |
| 8 | 1 | 15.7 | `ankaraplatform.net` | Ankara | Yenimahalle | 10 ilçe / 4 OSB | Ankara'da ofis, AVM ve fabrika iç mekânlarına egzozsuz platform kirala |
| 9 | 1 | 15.7 | `platformistanbul.net` | İstanbul | İkitelli | 10 ilçe / 2 OSB | İstanbul'da bölgesel hub modeliyle manlift, platform, forklift ve tele |
| 10 | 1 | 15.0 | `izmirmanliftkiralama.org` | İzmir | Bornova | 10 ilçe / 5 OSB | Şehir içi trafik kısıtlarına uygun planlı manlift teslimatı |
| 11 | 1 | 14.8 | `ankaramanlift.net` | Ankara | Sincan | 9 ilçe / 3 OSB | Ankara batı hattında lojistik depo ve açık saha odaklı manlift kiralam |
| 12 | 1 | 14.8 | `izmirforkliftkiralama.net` | İzmir | İzmir ve çevresi | 6 ilçe / 5 OSB | depo, üretim ve yükleme sahalarında forklift seçimi |
| 13 | 1 | 14.7 | `izmirplatformkiralama.org` | İzmir | Buca | 9 ilçe / 5 OSB | Küçük sanayi sitesi KOBİ'lerine uygun bütçeli kısa süreli platform kir |
| 14 | 1 | 14.5 | `istanbulplatformkiralama.net` | İstanbul | Tuzla | 8 ilçe / 1 OSB | Tuzla tersane ve OSB bölgesinde manlift, forklift ve vinç kiralama |
| 15 | 1 | 14.3 | `bursamanlift.net` | Bursa | Nilüfer | 9 ilçe / 4 OSB | Bursa organize sanayi bölgelerinde cephe ve çatı erişimine özel ekleml |
| 16 | 2 | 14.2 | `bursamanliftkiralama.net` | Bursa | İnegöl | 10 ilçe / 3 OSB | Mobilya ve otomotiv yan sanayine uzun süreli, periyodik bakımlı manlif |
| 17 | 2 | 14.0 | `istanbul-platform.com` | İstanbul | İkitelli | 8 ilçe / 0 OSB | İstanbul Avrupa ve Anadolu yakasında fiyat şeffaflığı odaklı manlift,  |
| 18 | 2 | 13.8 | `platformmanisa.com` | Manisa | Manisa OSB | 9 ilçe / 6 OSB | OSB üretim tesisleri, depo ve bakım operasyonları |
| 19 | 2 | 13.8 | `manliftkirala.net` | Ankara | Sincan | 6 ilçe / 3 OSB | Ankara Sincan-Ostim sanayi bölgesinde atölye ve fabrika bakımı için ma |
| 20 | 2 | 13.7 | `konyaplatform.net` | Konya | Konya OSB | 10 ilçe / 4 OSB | Tarım makineleri sanayi ve tahıl lojistik tesislerinde ağır hizmet pla |
| 21 | 2 | 13.6 | `istanbuldaplatform.com` | İstanbul | İkitelli | 7 ilçe / 0 OSB | İkitelli OSB merkezli kurumsal proje odaklı manlift, platform, forklif |
| 22 | 2 | 13.5 | `manisaforklift.com` | Manisa | Manisa OSB | 8 ilçe / 6 OSB | yükleme, depo ve üretim hattı forklift operasyonları |
| 23 | 2 | 13.3 | `izmirmakasliplatform.net.tr` | İzmir | Buca | 6 ilçe / 2 OSB | İzmir Buca-Bornova'da üniversite kampüsü ve sanayi tesisleri için maka |
| 24 | 2 | 13.1 | `istanbulplatforms.com` | İstanbul | İkitelli OSB | 4 ilçe / 1 OSB | İstanbul ve Marmara'da kurumsal projeler için uzun dönem kontratlı end |
| 25 | 2 | 12.9 | `istanbuleklemliplatform.com` | İstanbul | Levent | 5 ilçe / 0 OSB | İstanbul gökdelen ve liman tesislerinde eklemli platform kiralama |
| 26 | 2 | 12.8 | `izmir-forklift.com` | İzmir | Aliağa | 6 ilçe / 1 OSB | İzmir Aliağa-Gaziemir liman ve havalimanı lojistiği için forklift kira |
| 27 | 2 | 12.8 | `izmirmakasliplatform.com.tr` | İzmir | Konak | 6 ilçe / 1 OSB | İzmir Konak-Alsancak şehir merkezinde otel ve AVM cephesi için makaslı |
| 28 | 2 | 12.2 | `denizliplatform.net` | Denizli | Denizli merkez | 10 ilçe / 3 OSB | Tekstil fabrikaları, mermer ocakları ve termal otel yüksekte çalışma e |
| 29 | 2 | 11.8 | `manlifteskisehir.com` | Eskişehir | Eskişehir OSB | 9 ilçe / 3 OSB | Eskişehir-Bozüyük sanayi hattında planlı duruş dönemine özel manlift k |
| 30 | 2 | 11.7 | `aydinplatform.net` | Aydın | Aydın | 10 ilçe / 4 OSB | otel, enerji, tarım sanayisi ve tesis bakım işleri |
| 31 | 2 | 11.7 | `eskisehirvincplatform.com` | Eskişehir | Sivrihisar | 10 ilçe / 2 OSB | Kırsal hat enerji ve aydınlatma altyapısına özel sepetli platform ve v |
| 32 | 2 | 11.4 | `manliftkiralama.org.tr` | Gaziantep | Gaziantep OSB | 5 ilçe / 3 OSB | Gaziantep OSB'de tekstil ve gıda sanayi için manlift kiralama |
| 33 | 2 | 11.1 | `eskisehirmanlift.net` | Eskişehir | Eskişehir OSB | 7 ilçe / 3 OSB | Eskişehir OSB fabrikalarında üretim hattı bakımına özel eklemli-telesk |
| 34 | 2 | 11.1 | `manliftkirala.online` | Bursa | Nilüfer | 6 ilçe / 2 OSB | Bursa Nilüfer-Osmangazi sanayi bölgesinde manlift kiralama |
| 35 | 2 | 11.0 | `bandirmamanlift.net` | Balıkesir | Bandırma | 8 ilçe / 3 OSB | liman, tersane, enerji ve fabrika bakım sahaları |
| 36 | 3 | 11.0 | `eskisehirplatformkiralama.net` | Eskişehir | Tepebaşı | 8 ilçe / 2 OSB | Eskişehir şehir merkezi mağaza, otel ve kamu binalarına iç mekân platf |
| 37 | 3 | 10.9 | `bursaeklemliplatform.net` | Bursa | Osmangazi | 5 ilçe / 0 OSB | Bursa şehir merkezinde yüksek bina ve AVM cephesi için eklemli platfor |
| 38 | 3 | 10.7 | `afyonplatform.com.tr` | Afyonkarahisar | Afyonkarahisar merkez | 10 ilçe / 3 OSB | Termal otel bakımı, mermer ocağı ve mermer fabrikası yüksekte çalışma  |
| 39 | 3 | 10.5 | `muglaplatform.com.tr` | Muğla | Muğla | 8 ilçe / 3 OSB | Bodrum-Marmaris otel ve turizm tesisleri platform kiralama |
| 40 | 3 | 10.1 | `manliftkirala.store` | Konya | Selçuklu | 6 ilçe / 2 OSB | Konya Selçuklu-Karatay sanayi bölgesinde tarım makineleri ve gıda sana |
| 41 | 3 | 10.0 | `canakkaleplatform.tr` | Çanakkale | Çanakkale | 8 ilçe / 3 OSB | Biga OSB fabrika bakımı ve liman lojistiği için sepetli platform kiral |
| 42 | 3 | 10.0 | `usakplatform.com` | Uşak | Uşak merkez | 8 ilçe / 4 OSB | Halı, tekstil ve deri sanayi fabrikalarında yüksekte çalışma ekipmanı |
| 43 | 3 | 9.9 | `eskisehirmanlift.xyz` | Eskişehir | Eskişehir | 7 ilçe / 3 OSB | Eskişehir OSB sanayi tesisleri için manlift kiralama |
| 44 | 3 | 9.9 | `eskisehirplatform.net` | Eskişehir | Eskişehir OSB | 5 ilçe / 2 OSB | Eskişehir havacılık, savunma ve seramik sanayinde platform kiralama |
| 45 | 3 | 9.8 | `plusplatform.com.tr` | Eskişehir | Odunpazarı | 6 ilçe / 1 OSB | THJZ akülü makaslı platform satışı ve kiralaması |
| 46 | 3 | 9.6 | `manliftkiralama.online` | Kayseri | Kayseri OSB | 6 ilçe / 2 OSB | Kayseri mobilya ve tekstil sanayinde manlift kiralama |
| 47 | 3 | 9.4 | `eskisehirplatform.org` | Eskişehir | Eskişehir | 7 ilçe / 2 OSB | Eskişehir havacılık-savunma sanayi ve Sivrihisar bölgesi platform kira |
| 48 | 3 | 9.3 | `afyonmanliftkiralama.net` | Afyonkarahisar | Afyonkarahisar OSB | 6 ilçe / 3 OSB | Afyon OSB fabrika ve lojistik depoları için manlift kiralama |
| 49 | 3 | 9.3 | `manliftkiralama.xyz` | Adana | Adana OSB | 5 ilçe / 2 OSB | Adana tekstil ve tarım sanayinde manlift kiralama |
| 50 | 3 | 9.1 | `bozuyukmanlift.com` | Bilecik | Bozüyük OSB ve Seramik Sanayi Bölgesi | 7 ilçe / 4 OSB | Seramik fabrikalarında çatı ve yüksek bakım işlerine özel eklemli manl |
| 51 | 3 | 9.1 | `bozuyukmanlift.net` | Bilecik | Bozüyük Cam Sanayi Bölgesi (VitrA çevresi) | 7 ilçe / 4 OSB | Cam sanayi tesislerinde yüksek erişim işlerine özel manlift kiralama |
| 52 | 3 | 9.1 | `bozuyukplatform.net.tr` | Bilecik | Bozüyük Organize Sanayi Bölgesi | 7 ilçe / 4 OSB | Bozüyük OSB'deki tüm sektörlere genel platform kiralama ve bakım deste |
| 53 | 3 | 9.1 | `canakkaleplatform.com` | Çanakkale | Çanakkale | 7 ilçe / 2 OSB | enerji, liman, metal ve seramik sahaları |
| 54 | 3 | 9.1 | `afyonmanlift.com` | Afyonkarahisar | Emirdağ | 7 ilçe / 2 OSB | Afyon Emirdağ-Sinanpaşa hattında tarım sanayi ve gıda tesisleri için m |
| 55 | 3 | 9.1 | `manliftkirala.xyz` | Denizli | Denizli OSB | 6 ilçe / 2 OSB | Denizli tekstil ve mermer sanayinde manlift kiralama |
| 56 | 3 | 9.0 | `bilecikplatform.com.tr` | Bilecik | Bilecik merkez | 8 ilçe / 3 OSB | Osmaneli OSB depo/lojistik ve Söğüt orman ürünleri sanayi bakım ekipma |
| 57 | 3 | 8.9 | `muglaplatform.xyz` | Muğla | Muğla | 7 ilçe / 3 OSB | Milas-Yatağan maden ve enerji tesisleri platform kiralama |
| 58 | 3 | 8.8 | `boluplatform.net` | Bolu | Bolu Merkez | 9 ilçe / 2 OSB | TEM otoyol hattı sanayi tesislerine hızlı platform ve vinç sevkiyatı |
| 59 | 3 | 8.8 | `kutahyaplatform.com.tr` | Kütahya | Kütahya Merkez | 6 ilçe / 2 OSB | Kütahya merkez seramik ve çini fabrikaları platform kiralama |
| 60 | 3 | 8.8 | `kutahyaplatform.tr` | Kütahya | Kütahya | 6 ilçe / 2 OSB | Tavşanlı maden-termik santral ve Gediz bölgesi platform kiralama |
| 61 | 4 | 8.8 | `kutahyaplatform.com` | Kütahya | Kütahya ve ilçeleri | 6 ilçe / 2 OSB | seramik üretimi, depo ve tesis bakım çalışmaları |
| 62 | 4 | 8.8 | `bozuyukplatform.com.tr` | Bilecik | Bozüyük OSB ve çevresi | 6 ilçe / 4 OSB | OSB içi seramik, cam ve lojistik tesisleri |
| 63 | 4 | 8.6 | `bilecikplatform.com` | Bilecik | Bilecik | 7 ilçe / 3 OSB | seramik, metal işleme ve depo projeleri |
| 64 | 4 | 8.5 | `boluplatform.com.tr` | Bolu | Abant | 8 ilçe / 2 OSB | Turizm tesisleri için sezonluk çatı ve cephe bakım platformu kiralama |
| 65 | 4 | 8.5 | `boluplatform.com` | Bolu | Bolu | 8 ilçe / 2 OSB | orman ürünleri, TEM otoyol tesisleri, turizm işletmeleri (Abant, Karta |
| 66 | 4 | 8.3 | `manliftkiralama.site` | Samsun | Samsun liman bölgesi | 5 ilçe / 2 OSB | Samsun liman ve gıda sanayinde manlift kiralama |
| 67 | 4 | 8.1 | `balikesirplatform.org` | Balıkesir | Susurluk | 6 ilçe / 1 OSB | Balıkesir Susurluk-Gönen gıda ve zeytinyağı sanayinde platform kiralam |
| 68 | 4 | 8.0 | `afyonplatform.net` | Afyonkarahisar | Afyonkarahisar merkez | 5 ilçe / 1 OSB | Afyon şehir merkezinde inşaat ve bina cephesi işleri için platform kir |
| 69 | 4 | 8.0 | `afyonplatformkiralama.com` | Afyonkarahisar | Afyonkarahisar merkez | 5 ilçe / 1 OSB | Afyon enerji tesisleri ve tarım sanayi için platform kiralama |
| 70 | 4 | 8.0 | `afyonplatform.com` | Afyonkarahisar | Dazkırı | 5 ilçe / 1 OSB | Afyon Dazkırı-Çobanlar tekstil ve halı sanayinde platform kiralama |
| 71 | 4 | 8.0 | `kutahyaplatform.net` | Kütahya | Kütahya merkez | 5 ilçe / 1 OSB | Kütahya çini, seramik ve termik santral sanayinde platform kiralama |
| 72 | 4 | 7.9 | `bozuyukmanlift.xyz` | Bilecik | TEM Otoyolu Bozüyük Çıkışı | 7 ilçe / 4 OSB | Lojistik depo ve metal işleme tesislerine özel manlift kiralama |
| 73 | 4 | 7.9 | `bozuyukplatform.xyz` | Bilecik | Bozüyük Yeni Sanayi Yatırım Alanları | 7 ilçe / 4 OSB | Yeni fabrika inşaatları ve çelik konstrüksiyon işlerine özel platform  |
| 74 | 4 | 7.6 | `canakkaleplatform.xyz` | Çanakkale | Çanakkale | 6 ilçe / 2 OSB | Çan seramik fabrikaları ve Gelibolu tersane bölgesi platform kiralama |
| 75 | 4 | 7.5 | `bilecikplatform.net` | Bilecik | Osmaneli | 5 ilçe / 2 OSB | Bilecik Osmaneli-Pazaryeri OSB'de platform kiralama |
| 76 | 4 | 7.4 | `bozuyukplatform.org` | Bilecik | Bozüyük Depo ve Lojistik Sevkiyat Bölgesi | 7 ilçe / 3 OSB | Depo ve sevkiyat operasyonlarına özel forklift ağırlıklı platform kira |
| 77 | 4 | 7.2 | `ikincielplatform.net` | Türkiye | Türkiye | 0 ilçe / 0 OSB | İkinci el makine riskine girmeden, bakımlı ve güncel platform/manlift  |
| 78 | 4 | 7.2 | `eklemliplatform.com.tr` | Türkiye | Türkiye | 0 ilçe / 0 OSB | engelli erişim gerektiren açık ve kapalı çalışma sahaları |
| 79 | 4 | 7.2 | `yuksektecalismarehberi.com` | Türkiye | Türkiye | 0 ilçe / 0 OSB | ekipman seçimi, yüksekte çalışma güvenliği ve saha kontrolü |
| 80 | 4 | 7.2 | `platformakademisi.com` | Türkiye | Türkiye | 0 ilçe / 0 OSB | operatör öğrenimi, ekipman terminolojisi ve kaynaklı güvenlik rehberle |
| 81 | 4 | 7.0 | `bozuyukplatform.net` | Bilecik | Bozüyük merkez | 5 ilçe / 1 OSB | Bozüyük mobilya ve orman ürünleri sanayinde platform kiralama |
| 82 | 4 | 6.9 | `boluplatform.xyz` | Bolu | Mudurnu | 7 ilçe / 2 OSB | Orman ürünleri ve ahşap sanayi tesislerine arazi tipi makine kiralama |
| 83 | 4 | 6.5 | `amasyaplatform.com` | Amasya | Amasya OSB | 5 ilçe / 1 OSB | Amasya gıda ve meyve işleme sanayinde platform kiralama |
| 84 | 4 | 6.5 | `bozuyukplatform.com` | Bilecik | Bozüyük lojistik bölgesi | 5 ilçe / 0 OSB | Bozüyük lojistik ve nakliye terminalinde platform kiralama |
| 85 | 4 | 6.0 | `ikincielplatform.xyz` | Türkiye | Türkiye | 0 ilçe / 0 OSB | İkinci el forklift bakım ve parça riskine girmeden, sabit maliyetli ve |

---

## İlerleme

| Domain | Bölge | Hizmet | Blog | Durum |
|---|---|---|---|---|
| `boluplatform.net` | 1/9 | 0 | 0 | 🟡 pilot (243 kelime — hedefin altında) |
| `izmirplatformkiralama.org` | **9/9** | 0 | 0 | ✅ TAMAM — KOBİ bütçe ekonomisi açısı |
| `istanbul-platform.com` | **8/8** | 0 | 0 | ✅ TAMAM — fiyat şeffaflığı açısı |
| `istanbuldaplatform.com` | **7/7** | 0 | 0 | ✅ TAMAM — kurumsal proje yönetimi açısı |
| `platformmanisa.com` | **9/9** | 0 | 0 | ✅ TAMAM — Manisa yerelli bakım operasyonu |
| `manisaforklift.com` | 4/8 | 0 | 0 | 🟡 devam — forklift operasyon mükemmelliği |
| `konyaplatform.net` | 7/10 | 0 | 0 | 🟡 devam — ağır hizmet/Konya yerelli |
| `istanbulplatformkiralama.net` | **8/8** | 0 | 0 | ✅ TAMAM — tersane açısı (paralel ajan) |
| `bursamanlift.net` | **9/9** | 0 | 0 | ✅ TAMAM — cephe-çatı açısı, ilk Bursa (paralel ajan) |
| `bursamanliftkiralama.net` | **10/10** | 0 | 0 | ✅ TAMAM — uzun dönem sözleşme açısı (paralel ajan) |
| `ankaraplatform.net` | **10/10** | 0 | 0 | ✅ TAMAM — egzozsuz iç mekân açısı (paralel ajan) |
| `platformistanbul.net` | **10/10** | 0 | 0 | ✅ TAMAM — hub modeli açısı, ilk İstanbul domaini (paralel ajan) |
| `ankaramanlift.net` | **9/9** | 0 | 0 | ✅ TAMAM — depo-lojistik/açık saha açısı (paralel ajan) |
| `izmirforkliftkiralama.net` | **6/6** | 0 | 0 | ✅ TAMAM — forklift odağı (paralel ajan) |
| `izmirmanliftkiralama.org` | **10/10** | 0 | 0 | ✅ TAMAM — teslimat lojistiği açısı (paralel ajan, iki aşamada) |
| `ankara-platform.com` | **10/10** | 0 | 0 | ✅ bölge sayfaları TAMAM — seçim rehberliği açısı, çapraz ≤%0,2, domain içi %0,0 |
| `izmirplatformskiralama.com` | **9/9** | 0 | 0 | ✅ bölge sayfaları TAMAM — saatlik dilim açısı; ortak bölgeler 5 sürümlü, çapraz max %0,4 |
| `izmir-man-lift.com` | **9/9** | 0 | 0 | ✅ bölge sayfaları TAMAM — rüzgâr/teleskopik açısı; ortak bölgeler 4 sürümlü, çapraz max %0,4 |
| `ankaraeklemliplatform.com` | **10/10** | 0 | 0 | ✅ bölge sayfaları TAMAM — dar alan/eklemli açısı, domain içi %0,0 |
| `izmirmanliftkiralama.net` | **9/9** | 0 | 0 | ✅ bölge sayfaları TAMAM — İSG/izin/operatör açısı, domain içi %0,0, üçlü çapraz max %0,4 |
| `izmir-manlift.net` | **9/9** | 0 | 0 | ✅ bölge sayfaları TAMAM — kesintisiz üretim açısı, ~970 kelime/sayfa, domain içi %0,0, çapraz domain %0,0-0,4 |
| `izmirmakasliplatform.xyz` | **10/10** | 0 | 0 | ✅ bölge sayfaları TAMAM — ~1.100 kelime/sayfa, örtüşme %0,0, simetrik düzen (5 madde+3 ek bölüm+6 SSS) |

Bir domain tamamlandığında bu tabloya satır ekleyin.

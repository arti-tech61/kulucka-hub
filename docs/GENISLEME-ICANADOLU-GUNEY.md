# İç Anadolu + Güney SEO Genişleme — Konya, Kayseri, Adana, Gaziantep, Samsun, Amasya

Tarih: 2026-08-13. Format ve teknik mekanik `docs/IZMIR-SEO-GENISLEME.md` ile
birebir aynıdır — **oradaki Bölüm 1 (teknik mekanik), Bölüm 2 (geçilmez
kurallar), Bölüm 7 (doğrulama protokolü) ve Bölüm 8 (tuzaklar) bu iş için de
aynen geçerlidir.** Bu belge o bölümleri tekrarlamaz; il bazlı rakip durumu,
domain iş emirleri ve çakışma haritasını verir.

---

## 0. Bağlam — bu küme neden farklı

İzmir kümesinin aksine bu illerde **il başına 1 domain** var (tek istisna:
Konya'da 2). Çakışma riski düşük; asıl iş, her ilde 3-5 doğrulanabilir bölge
sayfası ekleyip derinlik üstünlüğünü kurmak. Rakip taraması (2026-08-13,
"X platform kiralama" + Konya için "konya manlift kiralama"):

### Rakip özeti — il bazında

**Konya (orta rekabet — kümenin en kalabalık SERP'i).** 1. sayfada 8+ yerel
firma + Armut. En güçlüsü **sanplatform.com**: aktif blog (3 makale, fiyat +
karşılaştırma konuları), 9 soruluk SSS accordion — ama **bölge/ilçe sayfası
yok**. konyamanlift.com 40+ tag ile SEO denemiş, içerik sığ, SSS/tablo yok.
konya-platform.com, platformkonya.com, kibarplatform.com: vitrin siteleri.
Kendi varlıklarımız (artiplatform.com.tr Konya sayfası, manliftkiralama.org
/sehirler/konya) 1. sayfada zaten görünüyor. **Hiçbir rakipte ilçe/OSB sayfası
yok** — İzmir'deki 60+ ilçeli rakip benzeri burada yok.

**Kayseri (zayıf rekabet).** erciyesplatform.com: bölge sayfası yok, blog yok,
SSS/tablo yok, 8 kategorilik basit yapı. kayserimanliftkiralama.com: statik
vitrin, minimal metin. Diğerleri (zirveplatform, enesplatform, göktaş) vinç
ağırlıklı karışık siteler. Derinlikli tek sayfa bile ilk sıraları alabilir.

**Adana (zayıf rekabet — SERP kirli).** "adana platform kiralama" sonuçlarının
yarısı rent-a-car (Yolcu360, Enterprise) — ticari rakip yoğunluğu düşük.
En güçlü marka adanadoganlift.com (1968'den beri): bölge sayfası yok, blog yok,
kısa özet içerik. Tek dikkat: **albamak.com.tr ilçe düzeyi programatik sayfa
açmış** (adana/ceyhan-... deseni) — şablon üretimi, derinliği düşük.

**Gaziantep (orta rekabet).** En güçlüsü **uzayplatform.com.tr**: şehir bazlı
sayfalar (Gaziantep, Kilis, Adıyaman, Malatya...) + aktif blog; ama sayfa
~400 kelime, SSS/tablo yok. Armut "40 firma" listeliyor. albamak.com.tr burada
da ilçe sayfası açmış (şehitkamil deseni). Kendi varlıklarımız
(artiplatform.com.tr — 2 ayrı URL) 1. sayfada. 1.000+ kelime + SSS + tablo ile
uzayplatform'un üstüne çıkılır.

**Samsun (zayıf-orta rekabet).** samsunplatform.com (25+ yıl vurgusu): blog +
**2 ilçe sayfası** (Atakum, Bafra), 500+ kelime ana sayfa. brkvincplatform.com:
**3 ilçe sayfası** (Yakakent, Vezirköprü, Terme) + blog, orta derinlik, SSS yok.
Bölge sayfası fikri burada filizlenmiş ama sığ; kendi manlifkirala.net.tr
Samsun sayfamız da SERP'te. Derinlikle fark açılır.

**Amasya (zayıf rekabet — varsayım).** Arama yapılmadı; il ölçeği ve komşu il
gözlemleri gereği ciddi yerel SEO rakibi beklenmiyor. amasyaplatform.com bu
ilde tek odaklı domain olarak konumlanmış durumda.

### Ortak zayıflıklar → silahımız (İzmir bulgusuyla aynı)
1. SSS/tablo/karşılaştırma içeriği fiilen sıfır (tek istisna sanplatform SSS'i).
2. Bölge/OSB sayfası ya hiç yok ya 2-3 sığ şablon.
3. Sayfa başına 300-500 kelime; bizim standart 1.000-1.500 elle yazım.
4. Sektörel derinlik (mobilya, tekstil, tahıl lojistiği, liman) hiçbirinde yok.

---

## 1. Kendi envanter — mevcut durum (2026-08-13, `siteler.ts` doğrulandı)

| Host | İl | Mevcut `bolge:` listesi | Bespoke kapsam |
|---|---|---|---|
| konyaplatform.net | Konya | Konya OSB, Selçuklu, Karatay, Meram, Ereğli, Çumra, Konya 2. OSB, Akşehir, Aksaray OSB (çevre ili), Karaman OSB (çevre ili) | 10/10 ✅ |
| manliftkirala.store | Konya | Selçuklu, Karatay, Konya OSB, Meram, Ereğli, Ankara OSB (çevre ili) | 6/6 ✅ |
| manliftkiralama.online | Kayseri | Kayseri OSB, Melikgazi, Kocasinan, Hacılar, Develi, Sivas OSB (çevre ili) | 6/6 ✅ |
| manliftkiralama.xyz | Adana | Adana OSB, Seyhan, Yüreğir, Çukurova, Mersin OSB (çevre ili) | 5/5 ✅ |
| manliftkiralama.org.tr | Gaziantep | Gaziantep OSB, Şehitkamil, Şahinbey, Nizip OSB, Kahramanmaraş OSB (çevre ili) | 5/5 ✅ |
| manliftkiralama.site | Samsun | Samsun liman bölgesi, İlkadım, Atakum, Tekkeköy OSB, Çarşamba | 5/5 ✅ |
| amasyaplatform.com | Amasya | Amasya OSB, Amasya merkez, Merzifon, Suluova, Tokat (çevre ili) | 5/5 ✅ |

Tüm hostlar `bespoke-icerik.ts`'te kayıtlı — **yeni import/kayıt satırı
GEREKMEZ**; sadece mevcut bespoke dosyasının İÇİNE `"bolge:<slug>"` eklenir.

Doğrulanabilir bölge kaynağı: `src/lib/hedef-bolgeler.ts` (il başına ilçe +
sanayi listeleri repo içinde onaylı veridir). Aşağıdaki tüm yeni bölgeler bu
dosyadan ya da kamuya açık kesin gerçeklerden (Büsan Sanayi Sitesi — Karatay,
Mimarsinan OSB — Kayseri) seçildi. **Bu listelerin dışında yerel iddia üretme.**

---

## 2. FAZ A — Bölge genişlemesi (27 sayfa)

Her satır: `siteler.ts`'te ilgili hostun `bolge:` alanının **EN SONUNA, aynen
bu yazımla** eklenecek metin → üretilecek slug → yazım açısı.

⛔ **SONA-EKLEME KURALI MUTLAK** (gerekçeler İzmir belgesi §1a'da):
`bolge-hizmet-sayfalari.ts:240` ilk 3 girdiden alt sayfa üretir; ilk girdi
başlıklarda kullanılır; `ilgiliUrun` indeksten türetilir. Mevcut girdileri
SİLME, SIRALARINI ve YAZIMLARINI DEĞİŞTİRME; ekleme yalnız satır sonuna.
Düzenleme sonrası `git diff src/lib/siteler.ts` ile teyit et.

### A1. konyaplatform.net — açı: tarım makineleri sanayi + tahıl/lojistik tesislerinde ağır hizmet platform
| Eklenecek bölge | Slug | İpucu |
|---|---|---|
| Büyükkayacık OSB | buyukkayacik-osb | Konya'nın yeni nesil OSB aksında ağır hizmet planlaması |
| Beyşehir | beysehir | Beyşehir OSB + ilçe ölçeğinde tarım makineleri servis sahası |
| Seydişehir | seydisehir | Seydişehir OSB, ağır sanayi karakterli ilçede platform lojistiği |
| Karapınar | karapinar | ova lojistiği; geniş açık saha, uzun mesafe sevkiyat planı |

### A2. manliftkirala.store — açı: Selçuklu-Karatay ekseninde tarım makineleri ve gıda sanayi manlift
| Büsan Sanayi Sitesi | busan-sanayi-sitesi | Karatay Büsan'da atölye yoğun dokuda manlift manevrası |
| Konya Yeni Sanayi Sitesi | konya-yeni-sanayi-sitesi | küçük imalatçı sitelerinde kısa süreli manlift işleri |
| Çumra | cumra | gıda/şeker ekseni ilçede tesis bakım manlifti — ⚠ konyaplatform-net.ts'te `bolge:cumra` VAR, önce onu oku |

### A3. manliftkiralama.online — açı: Kayseri mobilya + tekstil sanayi manlift
| Mimarsinan OSB | mimarsinan-osb | mobilya imalat aksında manlift kullanım deseni |
| İncesu OSB | incesu-osb | şehir dışı OSB'de sevkiyat + saha planı |
| Kayseri Mobilya Kenti | kayseri-mobilya-kenti | mobilya üretim/sergi hacimlerinde yüksek erişim |
| Talas | talas | konut+ticaret ağırlıklı ilçede cephe/tabela işleri |
| Kayseri Serbest Bölgesi | kayseri-serbest-bolgesi | serbest bölge giriş prosedürü ve depo işleri |

### A4. manliftkiralama.xyz — açı: Adana tekstil + tarım sanayi manlift
| Ceyhan | ceyhan | Ceyhan OSB + enerji yatırım aksında manlift talebi |
| Sarıçam | saricam | OSB'ye komşu ilçede tesis bakım rutini |
| Kozan | kozan | Kozan OSB, ilçe ölçeğinde tarıma dayalı sanayi |
| Adana Yumurtalık Serbest Bölgesi | adana-yumurtalik-serbest-bolgesi | serbest bölge/liman aksı lojistiği |

Not: Mevcut "Adana OSB" girdisi Hacı Sabancı OSB'nin kendisidir — **"Hacı
Sabancı OSB" adıyla ikinci bir sayfa AÇMA** (aynı tesisin kopyası olur).

### A5. manliftkiralama.org.tr — açı: Gaziantep OSB tekstil + gıda sanayi manlift
| Nizip | nizip | ilçe merkezi + Nizip OSB dışı işler (mevcut `nizip-osb` sayfasından net ayrış: bu sayfa İLÇE anlatır) |
| İslahiye OSB | islahiye-osb | batı aksı OSB'sinde sevkiyat ve saha planı |
| Oğuzeli | oguzeli | havalimanı aksındaki ilçede platform lojistiği |
| Gaziantep Ayakkabıcılar Sanayi Sitesi | gaziantep-ayakkabicilar-sanayi-sitesi | site tipi yoğun atölye dokusunda manlift kullanımı |

Not: "Başpınar OSB" Gaziantep OSB'nin yaygın adıdır — mevcut `gaziantep-osb`
sayfasıyla aynı tesisi anlatır, **ekleme**. 2.-5. OSB'ler `hedef-bolgeler.ts`'te
yalnız grup adıyla doğrulanmıştır; tekil "Gaziantep 3. OSB" sayfası açma.

### A6. manliftkiralama.site — açı: Samsun liman + gıda sanayi manlift
| Bafra | bafra | Bafra OSB + ova gıda tesislerinde platform planı |
| Kavak OSB | kavak-osb | şehir dışı OSB'de sevkiyat gerçeği |
| Samsun Serbest Bölgesi | samsun-serbest-bolgesi | liman bitişiği serbest bölge depo işleri |
| Canik | canik | merkez ilçede ticari cephe/çatı işleri |

Not: rakiplerin tek bölge sayfası girişimi bu ilde (Atakum, Bafra, Terme).
`bafra` yazılırken samsunplatform.com'un Bafra sayfası ŞABLON referans değil —
kendi açımızdan (gıda sanayi + OSB) sıfırdan yazılır.

### A7. amasyaplatform.com — açı: Amasya gıda + meyve işleme sanayi platform
| Merzifon OSB | merzifon-osb | OSB özelinde tesis işleri — ⚠ mevcut `bolge:merzifon` İLÇE sayfasıdır, önce onu oku, OSB sayfası ilçe sayfasını TEKRARLAMAZ |
| Taşova | tasova | ilçe ölçeğinde tarımsal tesis + cephe işleri |
| Gümüşhacıköy | gumushacikoy | küçük ilçe ekonomisinde planlı platform temini |

**Faz A toplamı: 27 yeni elle yazılmış bölge sayfası**
(A1:4 + A2:3 + A3:5 + A4:4 + A5:4 + A6:4 + A7:3).

---

## 3. Çakışma haritası

Bu illerde il başına 1 domain (Konya'da 2) olduğundan çakışma İzmir'e göre
çok düşük. Yine de yazım anında grep'le teyit ZORUNLU:

```bash
grep -l '"bolge:<slug>"' src/lib/bespoke/*.ts
```

2026-08-13 durumu:

| Slug | Mevcut bespoke | Yeni yazacak | Not |
|---|---|---|---|
| cumra | konyaplatform-net.ts | A2 (manliftkirala-store) | **tek gerçek slug çakışması** — A2 yazarı önce konyaplatform-net'in `bolge:cumra` kaydını okur; açı farkı: ağır hizmet/tahıl (mevcut) vs gıda sanayi manlifti (yeni); 8 kelimelik ardışık ortaklık yasak, hedef <%1 |
| merzifon-osb ↔ merzifon | amasyaplatform-com.ts (`merzifon`) | A7 (`merzifon-osb`) | slug farklı ama KONU komşusu — ilçe sayfası okunmadan OSB sayfası yazılmaz |
| nizip ↔ nizip-osb | manliftkiralama-org-tr.ts (`nizip-osb`) | A5 (`nizip`) | aynı domain içinde konu komşusu — ilçe sayfası OSB sayfasını tekrarlamaz |
| diğer 24 slug | — | tekil | çakışma yok |

Konya'da iki domain'in MEVCUT ortak slug'ları (konya-osb, selcuklu, karatay,
meram, eregli) bu işte DEĞİŞTİRİLMEZ — sadece bilgi olsun diye not edildi.

---

## 4. Uygulama sırası ve doğrulama

1. **Parti 1:** A1 + A2 (Konya, 7 sayfa; `cumra` çakışması burada — SIRAYLA yaz) → doğrula → deploy
2. **Parti 2:** A3 + A4 (Kayseri + Adana, 9 sayfa) → doğrula → deploy
3. **Parti 3:** A5 + A6 + A7 (Gaziantep + Samsun + Amasya, 11 sayfa) + `docs/ICERIK-SIRASI.md` güncellemesi → final doğrulama → deploy

Parti başına doğrulama protokolü, örtüşme ölçüm scripti (olcum.mjs), commit/push
(`gh auth switch -u arti-tech61`) ve çift Coolify deploy adımları
`docs/IZMIR-SEO-GENISLEME.md` §7'deki gibi AYNEN uygulanır. Sayfa yapısı da
aynı: h1 → tek uzun giriş → 5 madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS →
kaynak satırı; 1.000-1.500 kelime; tesis adı/rakam uydurma YASAK (yalnız
`hedef-bolgeler.ts` + bu belgede doğrulanmış gerçekler + firma saha pratiği).

## 5. Kabul kriterleri

- [ ] 27 yeni bölge sayfası canlıda 200 dönüyor ve sitemap'te
- [ ] `cumra` çifti dahil tüm kardeş örtüşmeleri <%1 (hiçbiri >%5 değil)
- [ ] `npm run kontrol` 0 ihlal; son partide `npm run kontrol:icerik`
- [ ] `git diff siteler.ts`: her `bolge:` satırında eski girdiler aynen/aynı sırada, eklemeler yalnız sonda
- [ ] Hiçbir sayfada uydurulmuş tesis adı/rakam yok (kaynak satırı beyan ediyor)
- [ ] İki Coolify deploy'u "finished"

# Çanakkale + Muğla + Bolu SEO Genişleme — Uygulama Emri

Tarih: 2026-08-13. Format ve mekanik referansı: `docs/IZMIR-SEO-GENISLEME.md`
(bölüm 1 "Teknik mekanik", bölüm 7 "Doğrulama protokolü" ve bölüm 8 "Bilinen
tuzaklar" AYNEN geçerlidir — burada tekrarlanmayan her kural oradan okunur).
**Sırayla uygula, hiçbir adımı atlama.**

---

## 0. Bağlam — neden bu iş

"çanakkale/muğla/bodrum/bolu platform kiralama" Google taraması yapıldı
(2026-08-13). Üç ilde de rekabet İzmir'den ÇOK daha zayıf: SERP'in çoğunu
rent-a-car/villa siteleri dolduruyor, sektörel rakiplerin hiçbirinde bölge
sayfası ağı + blog + SSS kombinasyonu yok. Bizim kümeler (Çanakkale 3 domain,
Muğla 2, Bolu 4) elle yazılmış bölge sayfalarıyla zaten derinlikte önde;
bu emir kapsamı az sayıda, DOĞRULANABİLİR noktayla tamamlar.

### Rakip envanteri (il başına en güçlüler)

| İl | Rakip | Gözlem |
|---|---|---|
| Çanakkale | daglivinc.com | **En kurumsal rakip**: vinç+platform+JCB, 18+ makine filo sayfası, Merkez/Lapseki/Biga/Gelibolu/Ezine/Çan/Bayramiç lokasyon desteği, blog + SSS mevcut. Ana işi vinç; platform ikincil. |
| Çanakkale | on7vinc.net | Yerel (Işıklar Köyü), 6 hizmet sayfası, ~400-500 kelime, bölge sayfası/blog/SSS YOK. |
| Muğla | kirandagforkliftplatform.com | **İstanbul-Tuzla merkezli**, Muğla sayfası ~500 kelime jenerik şablon, ilçe sayfası yok, fiyat/SSS/blog yok. Yerel varlık zayıf. |
| Muğla | masplatformkiralama.com | SERP'te görünüyor ama alan adı DNS çözmüyor (2026-08-13) — fiilen ölü. |
| Muğla (Bodrum) | bodrumvinckiralama.com.tr | Yerel vinç firması, platform yan hizmet; bölge sayfası/blog/SSS yok, şablon metin. |
| Bolu | albamak.com.tr (Alba İş Makineleri) | Bot erişimi 403 — SERP gözlemi: mahalle düzeyine inen programatik sayfa ağı (örn. "Merkez-Salıbeyler eklemli platform"), akülü/dizel eklemli, makaslı, teleskopik, telehandler, forklift listesi. Kapsamı geniş, derinliği (SERP snippet'ine göre) şablon. |
| Bolu | boluvinc.com | Yerel, tek sayfa ağırlıklı vitrin; bölge sayfası/blog/SSS yok. |

### Sonuç
- Çanakkale'de tek ciddi rakip Dağlı Vinç; onun da bölge SAYFALARI değil
  lokasyon listesi var. Lapseki'yi listeliyor — bizde Lapseki yok, kapat.
- Muğla'da yerel platform-odaklı güçlü site YOK; İstanbul merkezli şablon
  sayfalar sıralanıyor. Az sayfayla bile öne geçilebilir; turizm sektör
  sayfası kimsede yok.
- Bolu'da Albamak programatik kapsamla oynuyor → biz kapsam yarışına girmeyiz,
  4 domainli açı ayrımımız + elle yazım derinliği zaten farklılaştırıcı.
  Yalnız gerçekten boş kalan 3-4 nokta eklenir.

---

## 1. Kendi envanter — mevcut durum (2026-08-13, grep ile teyitli)

9 hostun DOKUZU da `bespoke-icerik.ts`'te kayıtlı — **yeni import/kayıt satırı
EKLEME** (duplicate-key hatası verir). Her hostun `bolge:` listesindeki TÜM
girdilerin bespoke kaydı var (İzmir'deki gibi eksik yok); yeni eklenen her
girdi için bespoke kaydı da yazılacak.

| Host | Açı | Mevcut `bolge:` girdileri (sıra AYNEN) |
|---|---|---|
| canakkaleplatform.tr | Biga OSB + liman disiplini | Çanakkale, Biga, Liman Bölgesi, Biga OSB, Çan, Gelibolu, Ezine, Bandırma OSB (Balıkesir çevre ili) |
| canakkaleplatform.xyz | Çan seramik + Gelibolu tersane | Çanakkale, Çan, Gelibolu, Biga OSB, Ezine, Bandırma OSB (Balıkesir çevre ili) |
| canakkaleplatform.com | il geneli / merkez, enerji-seramik-gıda karma | Çanakkale, Biga, Çan, Gelibolu, Biga OSB, Ezine, Bandırma OSB (Balıkesir çevre ili) |
| muglaplatform.com.tr | Bodrum-Marmaris otel/marina turizmi | Muğla, Bodrum, Marmaris, Milas, Fethiye, Yatağan sanayi bölgesi, Aydın OSB (çevre ili), Denizli OSB (çevre ili) |
| muglaplatform.xyz | Milas-Yatağan maden/enerji/ağır sanayi | Muğla, Milas, Yatağan, Fethiye, Yatağan sanayi bölgesi, Aydın OSB (çevre ili), Denizli OSB (çevre ili) |
| boluplatform.net | TEM otoyol-lojistik | Bolu Merkez, Gerede, TEM Otoyolu, Bolu Dağı, Gerede Deri OSB, Mengen, Mudurnu, Düzce OSB (çevre ili), Kızılcahamam (Ankara çevre ili) |
| boluplatform.com | merkez-şehir geneli | Bolu, Gerede, Mengen, Mudurnu, Kıbrıscık, Gerede Deri OSB, Düzce OSB (çevre ili), Kızılcahamam (Ankara çevre ili) |
| boluplatform.xyz | orman ürünleri / arazi | Mudurnu, Göynük, Kıbrıscık, Gerede Deri OSB, Mengen, Düzce OSB (çevre ili), Kızılcahamam (Ankara çevre ili) |
| boluplatform.com.tr | dağ turizmi (Abant/Kartalkaya) | Abant, Kartalkaya, Bolu Merkez, Gerede Deri OSB, Mengen, Mudurnu, Düzce OSB (çevre ili), Kızılcahamam (Ankara çevre ili) |

Doğrulanabilirlik tabanı (`src/lib/hedef-bolgeler.ts` + kamuya açık gerçekler):
Çanakkale OSB, Biga OSB, Çan OSB, Ezine OSB (gıda ağırlıklı), Çan Termik
Santral Bölgesi, Gelibolu tersane bölgesi, 1915 Çanakkale Köprüsü'nün
Lapseki-Gelibolu ekseni; Muğla OSB (Menteşe), Milas OSB, Yatağan termik santral
bölgesi, Dalaman (havalimanı), Datça/Ortaca/Köyceğiz ilçeleri; Bolu OSB,
Gerede Deri OSB, Yeniçağa/Dörtdivan/Seben ilçeleri. **Bunların ötesinde tesis
adı, firma adı, rakam üretme.**

---

## 2. FAZ A — Bölge genişlemesi (14 sayfa)

Mekanik: `siteler.ts` → ilgili hostun `bolge:` alanının **EN SONUNA**, aşağıda
"Eklenecek metin" sütunundaki parçayı AYNEN (Türkçe karakterli, virgülle) ekle.
⛔ **SONA-EKLEME KURALI MUTLAK** — `bolge-hizmet-sayfalari.ts` yalnız İLK 3
girdiden alt sayfa üretir (`MAKS_BOLGE = 3`, satır 240 `slice(0, MAKS_BOLGE)`);
araya girmek canlı URL düşürür. Mevcut girdileri SİLME, yazımını DEĞİŞTİRME.
Her satır için `src/lib/bespoke/<host-tireli>.ts` içine `"bolge:<slug>"`
kaydı yazılır (şema: IZMIR emri §1a; simetri: h1 + giriş + 5 madde + 3 ek
bölüm (ilki tablolu) + 6 SSS + kaynak; 1.000-1.500 kelime).

### A1. canakkaleplatform.tr — açı: liman/feribot disiplini, Biga OSB evrak düzeni
`bolge:` sonuna eklenecek: `, Lapseki, Eceabat`

| Eklenecek bölge | Slug | Açı ipucu |
|---|---|---|
| Lapseki | lapseki | 1915 Çanakkale Köprüsü'nün Anadolu yakası ayağı + feribot iskelesi; köprü-otoyol ekseninde lojistik/depo sahalarına sevkiyat planı (genel düzeyde, tesis adı yok) |
| Eceabat | eceabat | feribotla yaka geçişli sevkiyat planlaması, Gelibolu yarımadası tesislerine liman disipliniyle teslimat |

### A2. canakkaleplatform.xyz — açı: seramik/tersane ağır ortam ekipmanı
`bolge:` sonuna eklenecek: `, Çan Termik Santral Bölgesi`

| Çan Termik Santral Bölgesi | can-termik-santral-bolgesi | enerji sahasında toz/ısı koşulu, izinli çalışma; Çan seramik sayfasıyla AYRIŞ: orada fabrika-fırın, burada santral sahası disiplini |

### A3. canakkaleplatform.com — açı: il geneli karma sanayi
`bolge:` sonuna eklenecek: `, Çanakkale OSB, Ezine OSB`

| Çanakkale OSB | canakkale-osb | merkez OSB'de karma imalat; OSB giriş-izin akışı genel düzeyde |
| Ezine OSB | ezine-osb | gıda ağırlıklı OSB karakteri (peynir/süt ürünleri bölge kimliği kamuya açık); hijyen koşullu kapalı alanda elektrikli makine tercihi. Mevcut "bolge:ezine" sayfasıyla AYRIŞ: o ilçe geneli, bu OSB sahası |

### A4. muglaplatform.com.tr — açı: otel/marina turizm tesisleri
`bolge:` sonuna eklenecek: `, Dalaman, Datça, Ortaca`

| Dalaman | dalaman | havalimanı çevresi turizm-lojistik hattı; sezon takvimine göre tesis bakım planı (havalimanının varlığı kamuya açık; terminal içi iş İDDİA ETME) |
| Datça | datca | yarımada sonunda uzun karayolu sevkiyatı gerçeği, butik otel/marina çevresi kompakt makine tercihi |
| Ortaca | ortaca | Dalyan turizm çevresi + sera/tarımsal işletme yapıları (bölgenin seracılık karakteri kamuya açık, genel düzeyde) |

### A5. muglaplatform.xyz — açı: maden/enerji/ağır sanayi
`bolge:` sonuna eklenecek: `, Muğla OSB, Milas OSB`

| Muğla OSB | mugla-osb | merkez (Menteşe) OSB'de karma imalat sahası; OSB prosedürü |
| Milas OSB | milas-osb | OSB sahası özelinde çatı/depo işleri. Mevcut "bolge:milas" sayfası ve alt-sayfa "milas-osb-eklemli-ve-teleskopik-platform-kiralama" ile AYRIŞ zorunlu — yazmadan önce İKİSİNİ de oku (rota farklı ama konu komşu, 8-gram ortaklık yasak) |

### A6. boluplatform.com — açı: merkez-şehir geneli
`bolge:` sonuna eklenecek: `, Bolu OSB`

| Bolu OSB | bolu-osb | merkez OSB (hedef-bolgeler.ts'te kayıtlı); şehir açısından OSB'ye sevkiyat/evrak akışı. HİÇBİR Bolu domaininde Bolu OSB yok — gerçek boşluk |

### A7. boluplatform.net — açı: TEM otoyol-lojistik
`bolge:` sonuna eklenecek: `, Yeniçağa`

| Yeniçağa | yenicaga | D-100/TEM koridoru üzerinde ilçe; otoyol hattı dinlenme-akaryakıt-depo tesislerine sevkiyat ritmi (genel düzeyde) |

### A8. boluplatform.xyz — açı: orman ürünleri / arazi
`bolge:` sonuna eklenecek: `, Seben`

| Seben | seben | dağlık-ormanlık ilçe; orman yolu şartında arazi tipi makine seçimi. Kıbrıscık sayfasıyla AYRIŞ: komşu ilçe, aynı temayı farklı kurguyla anlatma riski yüksek — önce "bolge:kibriscik" kaydını oku |

### A9. boluplatform.com.tr — açı: dağ turizmi (düşük öncelik)
`bolge:` sonuna eklenecek: `, Dörtdivan`

| Dörtdivan | dortdivan | Köroğlu Dağları eteğinde küçük ilçe (Kartalkaya ile aynı dağ kütlesi); dağ-etek tesis ve köy konağı işleri, kış koşulu planı. İlçe küçük — sayfa beklentisi düşük tutulur, bu satır İSTEĞE BAĞLI son parti |

**Faz A toplamı: 14 yeni elle yazılmış bölge sayfası** (Çanakkale 5, Muğla 5, Bolu 4).

---

## 3. Çakışma haritası — MEVCUT + YENİ

Yeni eklenen 14 slug'ın TAMAMI kendi kümesinde tekil — yeni slug çakışması
YOK. Riskin tamamı mevcut çok-domainli sluglarda ve "komşu konu" çiftlerinde.
Yazım anında yine de teyit: `grep -l '"bolge:<slug>"' src/lib/bespoke/{canakkale,mugla,bolu}*.ts`

Mevcut çok-domainli sluglar (bu işte DOKUNULMAZ ama komşu konu yazarken oku):

| Küme | Slug | Dosyalar |
|---|---|---|
| Bolu | mengen, mudurnu, gerede-deri-osb, duzce-osb-cevre-ili, kizilcahamam-ankara-cevre-ili | 4 dosyanın DÖRDÜ de — **en yüksek yoğunluk** |
| Bolu | gerede (com, net) · kibriscik (com, xyz) · bolu-merkez (net, com.tr) | ×2 |
| Çanakkale | canakkale, can, gelibolu, biga-osb, ezine, bandirma-osb-balikesir-cevre-ili | 3 dosyanın ÜÇÜ de |
| Çanakkale | biga (com, tr) | ×2 |
| Muğla | mugla, milas, fethiye, yatagan-sanayi-bolgesi, aydin-osb-cevre-ili, denizli-osb-cevre-ili | 2 dosyanın İKİSİ de |

Komşu-konu çiftleri (yeni sayfa, mevcut sayfayla aynı gerçekliği anlatır —
yazmadan önce mevcut kaydı OKU, cümle düzeyi ortaklık yasak):

| Yeni sayfa | Okunacak mevcut kayıt(lar) |
|---|---|
| can-termik-santral-bolgesi (xyz) | canakkaleplatform-xyz.ts → "bolge:can" |
| canakkale-osb, ezine-osb (com) | canakkaleplatform-com.ts → "bolge:canakkale", "bolge:ezine" + kardeş dosyalardaki aynı sluglar |
| milas-osb, mugla-osb (xyz) | muglaplatform-xyz.ts → "bolge:milas", "bolge:mugla" + alt-sayfalar.ts "milas-osb-…" girdisi |
| dalaman, ortaca, datca (com.tr) | muglaplatform-com-tr.ts → "bolge:fethiye", "bolge:marmaris" (aynı turizm açısı, kurgu ayrışsın) |
| bolu-osb (com) | boluplatform-com.ts → "bolge:bolu" |
| yenicaga (net) | boluplatform-net.ts → "bolge:tem-otoyolu", "bolge:gerede" |
| seben (xyz) | boluplatform-xyz.ts → "bolge:kibriscik" |
| dortdivan (com.tr) | boluplatform-com-tr.ts → "bolge:kartalkaya" + boluplatform-com.ts "bolge:gerede" |

---

## 4. FAZ B — Muğla turizm sektör sayfası (1 sayfa)

Rakiplerin hiçbirinde sektör sayfası yok. `alt-sayfalar.ts` →
`altSayfalar["muglaplatform.com.tr"]` dizisine (mevcut 2 girdinin SONUNA)
`AltSayfa` biçiminde ekle:

```ts
{
    slug: "tatil-koyu-sezon-oncesi-bakim-programi",
    baslik: "Tatil Köyü Sezon Öncesi Bakım Programı | Platform Kiralama",
    aciklama: "...",           // meta description, özgün
    h1: "Tatil Köylerinde Sezon Öncesi Bakım Programı ve Platform Planlaması",
    paragraflar: [ /* 4-6 uzun paragraf */ ],
    maddeler: [ /* 4-5 madde */ ],
    sss: [ /* 6 uzun SSS */ ],
},
```

Konu: doluluk takvimi pencereleri (sezon öncesi/sonrası), misafir alanında
sessiz elektrikli makine tercihi, dar avlu/taş zemin koşulu, gece çalışma
planı — hepsi firma saha pratiği düzeyinde, tesis adı/rakam YOK. 1.000+ kelime.
Bu hostun mevcut "bodrum-otel-makasli-…" ve "marmaris-marina-…" alt
sayfalarını önce oku, örtüşme.

Eklemeden önce slug çakışma kontrolü ZORUNLU:
`grep -n '"tatil-koyu-sezon-oncesi-bakim-programi"' src/lib/alt-sayfalar.ts src/lib/anahtar-kelime-sayfalari.ts src/lib/firsat-sayfalar.ts src/lib/hizmet-sayfalari.ts`
— çıktı boş olmalı; doluysa farklı slug seç.

---

## 5. Uygulama sırası

1. **Parti 1 — Çanakkale (5):** A1 + A2 + A3 → doğrula → deploy
2. **Parti 2 — Muğla (5+1):** A4 + A5 + Faz B → doğrula → deploy
3. **Parti 3 — Bolu (4):** A6 + A7 + A8 + A9 (A9 isteğe bağlı) → doğrula → deploy

Doğrulama protokolü, örtüşme ölçüm scripti (olcum.mjs), commit/push
(`gh auth switch -u arti-tech61`), iki Coolify deploy'u ve canlı doğrulama:
**IZMIR-SEO-GENISLEME.md §7 AYNEN uygulanır.** Bu kümelerin hangi Coolify
uygulamasında olduğuna bakılmaksızın push sonrası İKİ uygulama da deploy edilir.

## 6. Kabul kriterleri

- [ ] 14 Faz A + 1 Faz B = **15 yeni sayfa** canlıda 200 dönüyor (A9 atlanırsa 14)
- [ ] `git diff src/lib/siteler.ts`: her `bolge:` satırında eski girdiler AYNEN
      ve AYNI SIRADA, eklemeler yalnız satır SONUNDA
- [ ] Her yeni bölge sayfası sitemap'te
- [ ] Kardeş çift örtüşmeleri <%1 (hiçbiri >%5 değil)
- [ ] `npm run kontrol` 0 ihlal; son partide `npm run kontrol:icerik`
- [ ] Her sayfa 1.000+ kelime, simetri tam (5 madde / 3 ek bölüm+tablo / 6 SSS / kaynak)
- [ ] Uydurulmuş tesis/firma adı ve rakam YOK; her `kaynak` satırı kamuya açık
      bilgi / saha pratiği ayrımını beyan ediyor
- [ ] `docs/ICERIK-SIRASI.md` ilgili satırlar güncellendi, push + iki deploy "finished"

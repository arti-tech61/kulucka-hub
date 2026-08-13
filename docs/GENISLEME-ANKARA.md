# Ankara SEO Genişleme — Rakip Analizi + Faz A Planı

Tarih: 2026-08-13. Format ve mekanik referansı: `docs/IZMIR-SEO-GENISLEME.md`
(teknik mekanik, slugla() kuralları, doğrulama protokolü ve tuzaklar oradan
AYNEN geçerlidir — burada tekrarlanmaz). Bu belge Ankara kümesinin (5 domain,
45 mevcut elle yazılmış bölge sayfası) kapsam genişlemesini tanımlar.

---

## 0. Bağlam

"ankara manlift kiralama" ve "ankara platform kiralama" Google 1. sayfa
taraması yapıldı (2026-08-13). İzmir'dekiyle aynı tablo: rakipler kapsamda
önde olabildikleri yerde derinlikte zayıf; en güçlü yerel rakip 17 ilçe
sayfasına sahip ama sayfa başına içerik bizim standardımızın (1.000-1.500
kelime elle yazım) altında.

### (a) Rakip envanteri (Google 1. sayfa organik)

| Rakip | Bölge sayfası | Blog | Derinlik |
|---|---|---|---|
| ankaramanliftkiralama.com.tr (Alba) | **17 ilçe** (Kahramankazan, Sincan, Akyurt, Temelli, Ostim, Çankaya, Keçiören, Yenimahalle, Mamak, Etimesgut, Pursaklar, Gölbaşı, Çubuk, Altındağ, Polatlı, Eryaman…) | Tek "Manlift Rehberi" + 15 SSS | Karma; karşılaştırma tablosu ve fiyat aralığı var — **en ciddi yerel rakip** |
| istanbulvinc.com/subeler/ankara | Ankara ilçe sayfası YOK (tek şube sayfası, 2.000+ kelime) | Var (kurumsal) | Yüksek; ulusal marka, 8 ürün kategorisi |
| ankaramanliftkiralama.net | Yok ("Ankara merkez ve çevre semtler" genel) | Yok | Şablon; sektörel sayfalar sığ |
| makinaparkuru.com (pazaryeri) | Şehir bazlı (Ankara + 12 İç Anadolu ili), ilçe yok | Yok | Şablon ilan listeleri; aracı model |
| ankaramanlift.com | — | — | **SSL sertifikası bozuk** (secureserversites.net cert'i) — pratikte devre dışı |
| armut.com | Pazaryeri listelemesi | — | Aracı; içerik derinliği yok |

### (b) Rakip zayıflıkları → bizim silahımız

1. İlçe sayfası yazan tek rakip Alba; o da ilçe başına kısa/karma içerik —
   OSB ve sanayi sitesi ölçeğinde (Şaşmaz, Siteler, Polatlı OSB, Etimesgut
   KSS) sayfası HİÇBİR rakipte yok.
2. Gerçek blog fiilen yok (Alba'da tek rehber, istanbulvinc'inki genel
   kurumsal); SSS/tablo yapısı yalnız Alba'da ve tek sayfada.
3. İki sonuç pazaryeri (armut, makinaparkuru), biri kırık SSL — 1. sayfanın
   yarısı gerçek içerik üretmiyor.
4. Açı ayrışması yok: herkes "her işi yaparız" anlatıyor; bizim 5 domainlik
   açı sistemi (eklemli/dar alan, seçim rehberi, depo-lojistik, iç mekân
   egzozsuz, atölye bakım rutini) benzersiz.
5. istanbulvinc güçlü ama Ankara'ya tek sayfa ayırıyor — ilçe/OSB uzun
   kuyruğunda boşluk bize kalıyor.

**Strateji: Alba'nın ilçe kapsamını OSB/sanayi sitesi derinliğiyle geç;
her sayfa elle, kendi domain açısından yazılır.**

---

## 1. Mevcut envanterimiz (2026-08-13, grep ile doğrulandı)

`siteler.ts` `bolge:` listeleri + `src/lib/bespoke/*` kapsamı (tümü bire bir
elle yazılmış):

| Domain | Açı (bespoke dosya başlığından) | Mevcut `bolge:` girdileri | Bespoke sayfa |
|---|---|---|---|
| ankaraeklemliplatform.com | dar alan + engebeli zeminde EKLEMLİ erişim | OSTİM, İvedik OSB, Sincan OSB, Yenimahalle, Batıkent, Ankara Anadolu OSB, Temelli OSB, Kazan, Polatlı, Kırıkkale OSB (çevre ili) | 10 |
| ankara-platform.com | makine SEÇİM REHBERLİĞİ (genel amaçlı karma filo) | OSTİM, İvedik, Sincan, Etimesgut, Başkent OSB, Ankara Anadolu OSB, Temelli OSB, Kazan, Polatlı, Kırıkkale OSB (çevre ili) | 10 |
| ankaramanlift.net | DEPO-LOJİSTİK + açık saha (batı hattı) | Sincan, Etimesgut, Kazan, Temelli, Polatlı, Akyurt, Ankara Anadolu OSB, Temelli OSB, Kırıkkale OSB (çevre ili) | 9 |
| ankaraplatform.net | İÇ MEKÂN + EGZOZSUZ (akülü) | Yenimahalle, Başkent OSB, Ostim, Çankaya, Kırıkkale, Ankara Anadolu OSB, Temelli OSB, Kazan, Polatlı, Kırıkkale OSB (çevre ili) | 10 |
| manliftkirala.net | ATÖLYE ÖLÇEĞİNDE BAKIM RUTİNİ (Sincan-Ostim) | Sincan, Ostim, Ostim OSB, Başkent OSB, İvedik OSB, Ankara merkez | 6 |

Toplam mevcut: 45 elle yazılmış bölge sayfası.

Gerçeklik çerçevesi (`hedef-bolgeler.ts` "Ankara" kaydı — SADECE buradan +
kamuya açık kesin bilgiden öneri yapılır): ilçeler Çankaya, Keçiören,
Yenimahalle, Mamak, Etimesgut, Sincan, Altındağ, Pursaklar, Gölbaşı, Polatlı,
Kahramankazan, Akyurt, Elmadağ, Çubuk, Beypazarı, Nallıhan, Ayaş,
Kızılcahamam, Şereflikoçhisar, Haymana, Bala, Güdül, Kalecik, Çamlıdere,
Evren; sanayi: OSTİM OSB, İvedik OSB, ASO 1. OSB (Sincan), ASO 2.-3. OSB
(Temelli), Başkent OSB, Polatlı OSB, Anadolu OSB, Şaşmaz Sanayi Sitesi,
Siteler Mobilya Sanayi Bölgesi, Ostim KSS, Etimesgut KSS.

⚠️ **Kahramankazan = Kazan.** Mevcut listelerde "Kazan" olarak yazılmış ve
bespoke `bolge:kazan` sayfaları canlı. "Kahramankazan" ayrı bölgeymiş gibi
ÖNERİLMEZ/eklenmez (aynı yerin ikinci sayfası = kendi kendine kopya).

---

## 2. FAZ A — Bölge genişlemesi (21 sayfa)

Mekanik: İzmir belgesi §1a aynen. Her ad `siteler.ts`'te ilgili domainin
`bolge:` alanının **EN SONUNA, aynen bu yazımla** eklenir
(⛔ SONA-EKLEME KURALI MUTLAK — ilk 3 girdi ve ilk girdi asla değişmez,
mevcut girdiler silinmez/yeniden yazılmaz). Slug `slugla()` kuralıyla:
küçük harf tr-TR, ı→i ğ→g ü→u ş→s ö→o ç→c, alfasayısal olmayan → `-`.
İçerik `src/lib/bespoke/<host-tireli>.ts` İÇİNE `"bolge:<slug>"` kaydı olarak
eklenir (dosyalar mevcut, yeni dosya/import AÇILMAZ); simetri: giriş → 5
madde → 3 ek bölüm (ilki tablolu) → 6 uzun SSS → kaynak; 1.000-1.500 kelime.

### A1. ankaraeklemliplatform.com — açı: dar alan/engebeli zeminde eklemli erişim
| Eklenecek bölge | Slug | İpucu |
|---|---|---|
| Siteler Mobilya Sanayi Bölgesi | siteler-mobilya-sanayi-bolgesi | mobilya atölyelerinin dar sokak-dar kapı geometrisinde eklemli kol |
| Şaşmaz Sanayi Sitesi | sasmaz-sanayi-sitesi | oto sanayi sitesi dar aralıklarında manevra |
| Altındağ | altindag | eski dokulu ilçede dar sokaktan erişim |
| Keçiören | kecioren | eğimli/yoğun konut dokusunda engebeli zemin erişimi |

### A2. ankara-platform.com — açı: doğru makine seçim rehberliği
| Akyurt | akyurt | lojistik depo işine hangi sınıf makine |
| Gölbaşı | golbasi | karma (konut+tesis) ilçede iş tipine göre seçim |
| Pursaklar | pursaklar | ilk kez kiralayan küçük işletmeye seçim rehberi |
| Çubuk | cubuk | ilçe ölçeğinde akülü/dizel kararı |
| Polatlı OSB | polatli-osb | OSB tesisinde iş kalemine göre makine eşleştirme |

### A3. ankaramanlift.net — açı: depo-lojistik + açık saha (batı hattı)
| Polatlı OSB | polatli-osb | OSB depo sahalarında açık alan teleskopik kullanımı |
| Elmadağ | elmadag | Samsun yolu aksında açık stok sahaları |
| Ayaş | ayas | batı aksı tarım-depo sahalarında arazi tipi manlift |
| Beypazarı | beypazari | ilçe tesislerinde açık saha planlaması |

### A4. ankaraplatform.net — açı: iç mekân + egzozsuz (akülü)
| Keçiören | kecioren | AVM ve kapalı ortak alanlarda egzozsuz çalışma |
| Mamak | mamak | kapalı spor/eğitim salonu tipi hacimlerde akülü platform |
| Gölbaşı | golbasi | kurum ve tesis iç hacimlerinde sessiz çalışma |
| Kızılcahamam | kizilcahamam | termal otel kapalı alanlarında iz bırakmayan lastik |

### A5. manliftkirala.net — açı: atölye ölçeğinde bakım rutini
| Şaşmaz Sanayi Sitesi | sasmaz-sanayi-sitesi | oto sanayi atölyesinin yıllık bakım takvimi |
| Etimesgut Küçük Sanayi Sitesi | etimesgut-kucuk-sanayi-sitesi | KSS dükkânında kendin-yap sınırı |
| Siteler Mobilya Sanayi Bölgesi | siteler-mobilya-sanayi-bolgesi | mobilya atölyesinde periyodik bakım rutini |
| Yenimahalle | yenimahalle | ilçe atölye dokusunda bakım erteleme faturası |

**Faz A toplamı: 21 yeni elle yazılmış bölge sayfası** (küme 45 → 66).

Gerçeklik notu: Siteler'in mobilya, Şaşmaz'ın oto sanayi ağırlığı,
Kızılcahamam'ın termal turizmi, Polatlı OSB/Akyurt lojistik karakteri kamuya
açık gerçeklerdir; bunların ötesinde tesis adı/rakam/yerel iddia ÜRETME.
Beypazarı/Ayaş/Çubuk/Elmadağ için yalnız coğrafi konum + genel ilçe karakteri
kullan; emin olunmayan hiçbir şey yazılmaz.

---

## 3. Çakışma haritası — MEVCUT + YENİ

Yazmadan önce grep'le teyit ZORUNLU:
`grep -l '"bolge:<slug>"' src/lib/bespoke/ankara*.ts src/lib/bespoke/manliftkirala-net.ts`
Tablo 2026-08-13 grep durumudur.

| Slug | Mevcut bespoke (dosya) | Yeni yazacak | Toplam |
|---|---|---|---|
| yenimahalle | ankaraeklemliplatform-com, ankaraplatform-net | A5 | **3 — en yüksek** |
| golbasi | — | A2, A4 | 2 |
| polatli-osb | — | A2, A3 | 2 |
| kecioren | — | A1, A4 | 2 |
| sasmaz-sanayi-sitesi | — | A1, A5 | 2 |
| siteler-mobilya-sanayi-bolgesi | — | A1, A5 | 2 |
| akyurt | ankaramanlift-net | A2 | 2 |
| altindag, mamak, kizilcahamam, elmadag, ayas, beypazari, pursaklar, cubuk, etimesgut-kucuk-sanayi-sitesi | — | tekil | 1 |

Çakışan slug'lar SIRAYLA yazılır; her yeni sayfa önce kardeş dosyalardaki
aynı slug'ın son hâlini okur. Ayrık çapalar:
- **yenimahalle (×3):** mevcutlar dar alan/eklemli ve iç mekân/egzozsuz
  açısından yazılmış; A5 yalnız BAKIM RUTİNİ anlatır (takvim, erteleme
  maliyeti, periyodik kontrol) — makine geometrisi/emisyon konusuna girmez.
- **siteler + sasmaz (×2):** A1 makine geometrisi (dar kapı, kol erişimi),
  A5 iş rutini (bakım takvimi, atölye ekonomisi) — aynı bölgeyi farklı
  mercekle anlatır, cümle düzeyi ortaklık yasak.
- **golbasi / polatli-osb / kecioren (×2):** A2 seçim rehberi ve A3 depo /
  A4 iç mekân açıları zaten yapısal olarak ayrık; yine de sırayla yazılır.
- 8 kelimelik ardışık ortaklık yasak; kardeş çiftlerde hedef örtüşme <%1
  (İzmir belgesi §7 `olcum.mjs` protokolü aynen uygulanır).

---

## 4. Uygulama sırası, doğrulama, kabul

1. **Parti 1:** A1 + A5 (8 sayfa; siteler/sasmaz ×2 çakışması bu partide) →
   doğrula → deploy
2. **Parti 2:** A2 + A3 (9 sayfa; polatli-osb ×2) → doğrula → deploy
3. **Parti 3:** A4 (4 sayfa; kecioren/golbasi çakışmalarının ikinci yarısı) +
   `docs/ICERIK-SIRASI.md` Ankara satırları → final doğrulama → deploy

Parti başına doğrulama, commit/push (`gh auth switch -u arti-tech61`),
iki Coolify deploy'u ve canlı kontrol: İzmir belgesi §7 AYNEN. Bilinen
tuzaklar (pkill yasağı, unary plus, kapanmamış dosya, çift kayıt): §8 AYNEN.

Kabul kriterleri:
- [ ] 21 yeni sayfa canlıda 200 + sitemap'te
- [ ] Kardeş çift örtüşmeleri <%1 (hiçbiri >%5 değil)
- [ ] `npm run kontrol` + `npm run kontrol:icerik` 0 ihlal
- [ ] Her sayfa 1.000+ kelime, simetri tam, uydurulmuş tesis adı/rakam yok
- [ ] `git diff src/lib/siteler.ts`: her `bolge:` satırında eski girdiler
      aynen ve aynı sırada, eklemeler yalnız satır sonunda

# SEO Genişleme — Codex Devir Belgesi ve Yol Haritası

Tarih: 2026-08-13. Bu belge, `docs/GENISLEME-MASTER.md`'de planlanan ağ geneli
genişlemenin şu ana kadarki durumunu ve **kalan işin Codex tarafından hangi
sırayla, hangi belgelerle tamamlanacağını** tanımlar. Teknik mekanik,
geçilmez kurallar ve doğrulama protokolü için tek kaynak:
`docs/IZMIR-SEO-GENISLEME.md` §1, §2, §7, §8 — burada tekrarlanmaz.

---

## 1. Durum — tamamlanan kümeler (main'de, canlıda, doğrulanmış)

| Küme | Sayfa | Commit | Durum |
|---|---|---|---|
| İzmir | 67/67 | `1abd05f`…`1306ffd` (Parti 1-5) | ✅ tamam, canlı |
| İstanbul | 23/23 | `a82fd0f`, `4fa86cf` | ✅ tamam, canlı |
| Ankara | 21/21 | `cde7a41` | ✅ tamam, canlı |
| Bursa+Balıkesir | 20/20 | `fb37f9a` | ✅ tamam, canlı |
| Ege içi — Parti 1 (Denizli+Uşak) | 10/39 | `2d0d909` | ✅ tamam, canlı |

`origin/main` HEAD: `2d0d909`. Tüm partiler build+kontrol+örtüşme ölçümü
(<%1 hedef) geçti, `npm run kontrol` 0 ihlal, iki Coolify app deploy edilip
canlıda 200 doğrulandı.

## 2. Sürmekte olan iş — Ege içi Parti 2 (Aydın + Kütahya)

**Devam ediyor, TAMAMLANMADI.** `docs/GENISLEME-EGE-ICI.md` §4 Parti 2
tanımı: A14 (aydinplatform.net, 4 sayfa) + A9-A12 (4 Kütahya domaini, 10
sayfa) = 14 sayfa.

`siteler.ts`'teki 14 Ege domaininin `bolge:` listeleri **ZATEN TÜM 39 YENİ
BÖLGE ADINI İÇERİYOR** (Parti 1 entegrasyonunda tek seferde sona-eklendi,
commit `2d0d909`). Bespoke içerik dosyaları ise parti parti yazılıyor.
Codex devraldığında şu bespoke dosyalarının durumunu **grep ile teyit et**
(bazıları benim tarafımdan tamamlanmış olabilir, bazıları eksik kalmış olabilir):

```bash
cd /root/portfoy/kulucka-hub
for f in aydinplatform-net kutahyaplatform-com kutahyaplatform-com-tr kutahyaplatform-tr kutahyaplatform-net; do
  echo "$f: $(grep -c '"bolge:' src/lib/bespoke/$f.ts) kayıt"
done
```

Beklenen hedef sayılar (Parti 1 sonrası mevcut + Parti 2 eklenecek):
- `aydinplatform-net.ts`: mevcut sayı + 4 (astim-osb, incirliova, ortaklar, buharkent)
- `kutahyaplatform-com.ts`: mevcut + 2 (kutahya-osb, emet)
- `kutahyaplatform-com-tr.ts`: mevcut + 3 (kutahya-seramik-sanayi-bolgesi, altintas, kutahya-osb — bu ÜÇÜNCÜ kutahya-osb kaydı, seramik-çini fabrika açısından)
- `kutahyaplatform-tr.ts`: mevcut + 3 (tuncbilek-termik-santral-bolgesi, seyitomer-termik-santral-bolgesi, tavsanli-osb)
- `kutahyaplatform-net.ts`: mevcut + 2 (gediz-osb, simav)

**`kutahya-osb` slug'ı 3 dosyada yazılıyor/yazıldı** — her biri farklı açı
(kutahyaplatform-net: küçük-orta işletme paylaşımlı kiralama; kutahyaplatform-com:
depo/lojistik bakım; kutahyaplatform-com-tr: seramik-çini üretim hattı).
Eksik olan varsa yazmadan önce diğer ikisini OKU.

**Eğer tüm 5 dosya hedef sayılara ulaşmışsa** (yani ben bitirmiş ama entegre
edip deploy etmemişsem), doğrudan §5'teki entegrasyon protokolünü uygula.
**Eğer eksikler varsa**, `docs/GENISLEME-EGE-ICI.md` §2'deki A9-A12 ve A14
tablolarından eksik sayfaları tamamla (aynı simetri: h1→giriş→5 madde→3 ek
bölüm/tablolu→6 SSS→kaynak, 1000-1500 kelime, bilgi uydurma yasak).

## 3. Kalan iş — sırayla

### 3a. Ege içi Parti 3 — Afyon (15 sayfa, 6 domain)
Belge: `docs/GENISLEME-EGE-ICI.md` §2 A3-A8, §3 çakışma haritası.
`siteler.ts` zaten güncel (Parti 1'de sona eklendi). Bespoke dosyaları
tamamen eksik. **En yüksek risk:** `bolvadin` ×4 domain (afyonplatform-com-tr,
afyonplatform-net, afyonmanliftkiralama-net, afyonplatformkiralama-com —
belgede A5 olarak işaretli tek biri değil, dörtte de var, dikkatle oku),
`sandikli-osb` ×2 (A3+A7, sırayla), `dinar-osb` ×3, `sultandagi` ×3.
Sıralı yazım zorunlu (paralel değil) çakışan slug'larda.

### 3b. Eskişehir + Bilecik/Bozüyük (44 sayfa, 19 domain)
Belge: `docs/GENISLEME-ESKISEHIR-BILECIK.md`. Ağın en doygun koridoru —
`inonu` ×4, `kutahya-cevre-ili` ×4, `sakarya`/`sogut-osb`/KSS'ler ×3.
Çakışma haritası (§ilgili bölüm) özellikle dikkatli okunmalı; doygun
slug'lara (sogut/pazaryeri ×7, odunpazari/tepebasi ×7) YENİ kopya EKLENMEDİ
— bu kural korunmalı.

### 3c. İç Anadolu + Güney (27 sayfa — Konya, Kayseri, Adana, Gaziantep, Samsun, Amasya)
Belge: `docs/GENISLEME-ICANADOLU-GUNEY.md`. Domain sayısı az, çakışma riski
düşük (tek gerçek çakışma: `cumra`, 2 Konya domaini). "Hacı Sabancı OSB" ve
"Başpınar OSB" isimleri bilinçli olarak yasaklı listede — kullanma.

### 3d. Kıyı + Bolu (15 sayfa — Çanakkale, Muğla, Bolu)
Belge: `docs/GENISLEME-KIYI-BOLU.md`. En küçük küme, en düşük risk. Bolu'da
zaten geniş kapsam var — belgede yalnızca gerçek boşluklar önerilmiş
(Bolu OSB, Yeniçağa, Seben), fazla eklemeye gerek yok.

**Toplam kalan: ~101 sayfa** (Ege Parti 2 tamamlanması + Parti 3 15 + Eskişehir/Bilecik 44 + İç Anadolu/Güney 27 + Kıyı/Bolu 15).

---

## 4. Uygulama yöntemi (önerilen)

Her küme için aynı desen (İzmir/İstanbul/Ankara/Bursa'da kanıtlanmış):

1. Kümenin `docs/GENISLEME-*.md` belgesini baştan sona oku.
2. `siteler.ts`'teki ilgili domainlerin `bolge:` alanlarını **tek seferde,
   tüm partiler için birden, sona-ekleme kuralıyla** güncelle (Parti 1'de
   yaptığım gibi — sonraki partiler sadece bespoke içerik yazar, siteler.ts'e
   tekrar dokunmaz).
3. Parti parti (belgedeki §Uygulama sırası) paralel ajanlarla bespoke
   içerik yaz. Çakışan slug'ları İÇEREN partiler sıralı yazılır; her ajana
   kardeş dosyaları önce okuma talimatı ver.
4. Her parti bitince: `npm run build` → örtüşme ölçüm scripti (İzmir §7,
   <%1 hedef) → `npm run kontrol` → commit → `gh auth switch -u arti-tech61`
   → `git push` (veya `git push origin <dal>:main` main başka yerde kiliteliyse)
   → iki Coolify deploy (`inqp15mhoxepqzd9x7a2a0ut`, `h6xciy5asygrvf3oby76ws8d`)
   → canlı curl doğrulaması.
5. Küme bitince bir sonrakine geç.

## 5. Bilinen riskler / hatırlatmalar

- **Worktree kullan.** Ana repo dizini bazen başka bir dalda kilitli olabilir
  (`git worktree add .worktrees/<isim> -b <dal> origin/main`); iş bitince
  `git worktree remove --force` + `git branch -d` ile temizle.
- **`gh auth switch -u arti-tech61`** her push öncesi zorunlu.
- Coolify deploy bazen geçici `failed` verebilir (bu oturumda bir kez
  yaşandı, muhtemelen Coolify'ın kendi otomatik güncellemesiyle çakıştı) —
  aynı deploy'u tekrar tetiklemek genelde çözer; disk/container sağlığını
  (`df -h`, `docker ps`) kontrol et, `docker exec coolify tail
  /var/www/html/storage/logs/laravel.log` ile gerçek hatayı gör.
- Sona-ekleme kuralı ihlali = canlı URL 404 + mevcut sayfa metni değişimi.
  Her partide `git diff src/lib/siteler.ts` ile teyit zorunlu.
- Coolify token: `/root/.claude/projects/-root/memory/coolify_api.md`.

## 6. Kabul kriterleri (ağ geneli, tüm kümeler bitince)

- [ ] `docs/GENISLEME-MASTER.md`'deki 8 kümenin hepsi ✅
- [ ] Toplam ~256 yeni sayfa canlıda 200 + sitemap'te
- [ ] `npm run kontrol:icerik` ağ geneli 0 ihlal
- [ ] Hiçbir kardeş çift örtüşmesi >%5 değil
- [ ] `docs/ICERIK-SIRASI.md` tüm illerin satırları güncel

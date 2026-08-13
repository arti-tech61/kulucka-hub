# SEO Genişleme — Ağ Geneli Master İndeks

Tarih: 2026-08-13. Tüm kümeler için Google 1. sayfa rakip analizi yapıldı ve
küme başına uygulama emri yazıldı. Teknik mekanik, doğrulama protokolü (§7)
ve tuzak listesi (§8) TEK kaynakta: `IZMIR-SEO-GENISLEME.md` — küme belgeleri
ona referans verir.

## Küme belgeleri ve planlanan sayfa sayıları

| Belge | Kapsam (domain) | Yeni sayfa | Rekabet durumu |
|---|---|---|---|
| [IZMIR-SEO-GENISLEME.md](IZMIR-SEO-GENISLEME.md) | İzmir (11) | 67 (47 bölge + 14 sektör + 6 karar) | Yüksek — rakipte 60+ ince ilçe sayfası |
| [GENISLEME-ESKISEHIR-BILECIK.md](GENISLEME-ESKISEHIR-BILECIK.md) | Eskişehir + Bilecik/Bozüyük (19) | 44 | Fiilen rakipsiz koridor — ağ sahiplenmiş |
| [GENISLEME-EGE-ICI.md](GENISLEME-EGE-ICI.md) | Denizli, Afyon, Kütahya, Uşak, Aydın (14) | 39 | Orta — Aydın'da 17 ilçeli rakip |
| [GENISLEME-ICANADOLU-GUNEY.md](GENISLEME-ICANADOLU-GUNEY.md) | Konya, Kayseri, Adana, G.antep, Samsun, Amasya (7) | 27 | Zayıf-orta |
| [GENISLEME-ISTANBUL.md](GENISLEME-ISTANBUL.md) | İstanbul (6) | 23 | Kalabalık ama ilçe sayfasında zayıf |
| [GENISLEME-ANKARA.md](GENISLEME-ANKARA.md) | Ankara (5) | 21 | Orta — 17 ilçeli tek ciddi rakip |
| [GENISLEME-BURSA-BALIKESIR.md](GENISLEME-BURSA-BALIKESIR.md) | Bursa + Balıkesir/Bandırma (6) | 20 | Orta — 26 kabuk sayfalı rakip |
| [GENISLEME-KIYI-BOLU.md](GENISLEME-KIYI-BOLU.md) | Çanakkale, Muğla, Bolu (9) | 15 (14 bölge + 1 sektör) | Zayıf |

**Ağ toplamı: 256 yeni elle yazılmış sayfa** (mevcut ~580 sayfanın üstüne).

## Önerilen küme sırası (etki × rekabet açığı)

1. **İzmir** (devam ediyor — Codex, Parti 1/5)
2. **İstanbul** — en yüksek arama hacmi + rakip kapsam açığı
3. **Ankara** — yüksek hacim, tek ciddi rakip
4. **Bursa + Balıkesir**
5. **Ege içi** (Denizli önce — en zayıf rekabet, hızlı kazanım)
6. **Eskişehir + Bilecik** (doygun küme, az-derin ekleme)
7. **İç Anadolu + Güney**
8. **Kıyı + Bolu**

## Değişmez uygulama kuralları (özet — detay İzmir belgesinde)

- `bolge:` alanına ekleme YALNIZ SONA (MAKS_BOLGE=3 / ilk-girdi tuzağı).
- Yazmadan önce slug'ı kapsayan TÜM kardeş dosyalar grep'le bulunup okunur.
- Bilgi uydurma yasak; her sayfada `kaynak` beyanı.
- Parti başına: build → örtüşme ölçümü (<%1 hedef) → `npm run kontrol` →
  tek tek `git add` → `gh auth switch -u arti-tech61` → push → 2 Coolify deploy
  → canlı curl doğrulaması.

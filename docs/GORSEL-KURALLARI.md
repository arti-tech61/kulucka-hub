# Görsel Ekleme Kuralları ve Kontrol Noktaları

Bu oturumda tekrar tekrar karşılaşılan görsel sorunlarının kök nedenleri ve
zorunlu önlemler. **Yeni ürün/makine görseli eklerken bu dosya baştan sona
uygulanır.**

---

## ⛔ KURAL 1 — Kaynak: yalnızca resmi üretici sitesi

Ürün görseli **üreticinin kendi resmi sitesinden** alınır.

### Yasak kaynaklar
- ❌ Bayi / kiralama firması siteleri — **filigran ve firma yazısı içerir**
  (yaşanmış: "Forklift America" damgası, makine gövdesinde
  `www.aerialplatforms.co.uk` yazısı, "APL" logosu)
- ❌ Unsplash / stok fotoğraf — alakasız makine gösterir, ürünle uyumsuz
- ❌ İkinci el ilan siteleri — kullanılmış, hasarlı, farklı model olabilir

### Doğru kaynaklar (öncelik sırası)
1. Üreticinin resmi global sitesi
   - Dingli: `dingliglobal.com/equipment/scissorlifts-{MODEL}.htm`
   - Sinoboom: `sinoboom.my/content/details_108_{ID}.html`
   - Zoomlion: `global.zoomlion-access.com/en/product/pro-detail-{ID}.htm`
   - Genie: `genielift.com/en/aerial-lifts/...`
   - JLG: `jlg.com/en/equipment/...` (görseller `dam.jlg.com` CDN'inde)
   - Haulotte: `haulotte-africa.com` / `haulotte.com` (CDN: `haulotte.ephoto.fr`)
   - Manitou: `manitou.com` (CDN: `views.manitou-group.com`, **Referer header gerekir**)
2. Üreticinin resmi bölgesel sitesi (`.eu`, `.us`, `.my` uzantıları)
3. Yetkili distribütörün ürün sayfası — **yalnızca filigransızsa**

### Teknik not
Bazı üretici CDN'leri hotlink korumalıdır; `-e` (Referer) header'ı gerekir:
```bash
curl -sL -A "Mozilla/5.0" -e "https://www.uretici.com/urun-sayfasi" -o out.jpg "URL"
```

---

## ⛔ KURAL 2 — Her görsel GÖZLE doğrulanır

İndirilen her görsel, koda eklenmeden önce **Read aracıyla açılıp
görsel olarak kontrol edilir.** İstisnası yoktur.

### Kontrol listesi
- [ ] Görselde **filigran / firma yazısı / telefon numarası yok**
- [ ] Gösterilen makine **gerçekten o model** (gövdedeki model yazısını okuyun:
      "JCPT1612HA", "ZS1414AC" gibi)
- [ ] Makine tipi doğru (makaslı ≠ eklemli ≠ teleskopik ≠ dikey mast)
- [ ] Teknik çizim / erişim diyagramı değil, **gerçek ürün fotoğrafı**
- [ ] Zemin nötr (beyaz/şeffaf stüdyo) veya temiz saha fotoğrafı

**Yaşanmış hata:** JLG sayfasından indirilen ilk görsel erişim diyagramıydı
(turuncu grafik), ürün fotoğrafı değil. Gözle bakılmasaydı siteye girecekti.

---

## ⛔ KURAL 3 — İşleme: kırpma + boyut + format

İndirdikten sonra **zorunlu** işleme adımları:

```python
from PIL import Image, ImageChops

# 1) Beyaz/şeffaf kenar boşluğunu kırp (kart içinde makine küçük görünmesin)
def kirp(im, pad=0.04):
    if im.mode == 'RGBA':
        bg = Image.new('RGB', im.size, (255,255,255)); bg.paste(im, mask=im.split()[3]); im = bg
    else:
        im = im.convert('RGB')
    d = ImageChops.difference(im, Image.new('RGB', im.size, (255,255,255)))
    d = ImageChops.add(d, d, 2.0, -20)          # küçük gürültüyü ele
    bb = d.getbbox()
    if not bb: return im
    l,t,r,b = bb; w,h = im.size
    px,py = int((r-l)*pad), int((b-t)*pad)
    return im.crop((max(0,l-px), max(0,t-py), min(w,r+px), min(h,b+py)))

# 2) Maks 1600px, JPEG kalite 85, optimize
im = kirp(Image.open(dosya))
if max(im.size) > 1600:
    s = 1600/max(im.size); im = im.resize((int(im.width*s), int(im.height*s)), Image.LANCZOS)
im.save(dosya, 'JPEG', quality=85, optimize=True)
```

**Hedef dosya boyutu: 300 KB altı.** Üzerindeyse kaliteyi 80'e düşürün.

---

## ⛔ KURAL 4 — Kartta gösterim: `object-contain`

```tsx
// ❌ ASLA — ürün fotoğrafını kırpar, makinenin yarısı kesilir
className="w-full h-full object-cover"

// ✅ ZORUNLU — ürün tam sığar, nötr zemin boşluğu doldurur
className="w-full h-full object-contain bg-slate-50"
```

**İstisna:** dekoratif arkaplan görselleri (`opacity-10` hero fonu gibi)
`object-cover` kullanabilir — orada kadraj kasıtlıdır.

**Yaşanmış hata:** stüdyo çekimi kare/dikey oranlı ürün fotoğrafları,
sabit oranlı kartlarda `object-cover` ile gösterilince dikey mast
platformların gövdesi kesiliyordu.

---

## ⛔ KURAL 5 — `sizes` doğru olmalı (performans)

`next/image` `fill` kullanıyorsa `sizes` **gerçek gösterim genişliğini**
tarif etmeli. Yanlış `sizes` = gereğinden büyük dosya indirilir.

```tsx
// ❌ grid lg:grid-cols-3 ise 50vw yanlış — PageSpeed'de 122 KiB israf
sizes="(min-width: 768px) 50vw, 100vw"

// ✅ tüm breakpoint'ler tarif edilmeli
sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
```

Kural: `sizes` içindeki breakpoint'ler, grid'in `sm:` / `md:` / `lg:`
sütun sayılarıyla **birebir eşleşmeli**.

---

## ✅ Ekleme sonrası kontrol noktaları

Görseli koda ekledikten sonra sırayla:

1. `npm run build` — hata yok
2. Dosya boyutu: `ls -la public/machines/` — hiçbiri 300 KB üzeri değil
3. `npx tsx scripts/kontrol.mjs` (veya `node scripts/kontrol.mjs`) —
   otomatik kontroller geçiyor
4. Deploy sonrası canlı doğrulama:
   ```bash
   curl -s https://DOMAIN/makine/MODEL-ID | grep -o '/machines/[a-z0-9-]*\.jpg'
   ```
5. **Kullanıcıya ekran görüntüsü sorma:** kart içinde makine tam görünüyor mu,
   kırpılma var mı — bunu ancak kullanıcı gözle doğrulayabilir.

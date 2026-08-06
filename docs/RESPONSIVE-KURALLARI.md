# Responsive ve Sığma Kuralları

Bu oturumda tekrarlanan yerleşim hatalarının kök nedenleri ve zorunlu
önlemler. **Header, menü veya kart yerleşimine dokunan her değişiklikte
bu dosya uygulanır.**

---

## ⛔ KURAL 1 — Breakpoint tutarlılığı (en sık yapılan hata)

Aynı yerleşim grubundaki tüm öğeler **aynı breakpoint eşiğini** kullanmalı.

**Yaşanmış hata:** masaüstü menü `xl:` (1280px), arama kutusu `lg:` (1024px)
eşiğindeydi. Sonuç: 1024–1279px arası (çoğu dizüstü ekranı) masaüstü menü
görünmüyor, mobil hamburger menü basılıyordu.

```tsx
// ❌ TUTARSIZ
<nav className="hidden xl:flex">          {/* masaüstü menü */}
<button className="xl:hidden">            {/* hamburger */}
<div className="hidden lg:flex">          {/* arama — FARKLI EŞİK */}

// ✅ TUTARLI
<nav className="hidden lg:flex">
<button className="lg:hidden">
```

**Kontrol:** `scripts/kontrol.mjs` bu tutarsızlığı otomatik yakalar.

---

## ⛔ KURAL 2 — Header'a yatay öğe eklemeyin

Header'ın ana satırı (logo + menü + CTA butonları) zaten doludur.
Buraya yeni bir yatay öğe (arama kutusu, seçici, rozet) eklemek **logo ve
menü metninin üst üste binmesine** yol açar.

**Yaşanmış hata:** arama kutusu `flex-1 max-w-xs mx-4` ile ana satıra
konulmuştu; dar ekranlarda logo yazısının üzerine bindi.

**Doğru yaklaşım:**
- Arama gibi ikincil öğeler **kendi satırına** veya **sayfa içeriğine** taşınır
- Header'da kalması şartsa: ayrı satır (`mt-2.5` ile alt blok) kullanılır

---

## ⛔ KURAL 3 — Sayfa yatay taşmamalı

Hiçbir breakpoint'te gövde yatay kaymamalı.

```tsx
// Geniş içerik kendi kabında kaydırılır, sayfa değil
<div className="overflow-x-auto">
  <table>...</table>
</div>
```

- Sabit `w-[900px]` gibi genişlikler yasak → `max-w-*` + `w-full` kullanın
- Uzun kelime/URL taşması için `break-words` veya `break-all`
- Görseller `max-w-full` (next/image `fill` kullanıyorsa üst kap `relative`)

---

## ⛔ KURAL 4 — `next/image fill` üst kabı `relative` olmalı

```tsx
// ❌ görsel konumlanamaz, sayfanın tamamına yayılır
<div className="w-12 h-12 overflow-hidden">
  <Image fill ... />

// ✅
<div className="relative w-12 h-12 overflow-hidden">
  <Image fill ... />
```

**Yaşanmış hata:** `SafeImage` `<img>`'den `next/image fill`'e çevrilirken
3 üst kaba `relative` eklenmesi unutuldu.

---

## ⛔ KURAL 5 — Kontrast (WCAG AA)

Hover'da kutu rengi değişiyorsa metin rengi de birlikte değişmeli.

- Metin/zemin kontrast oranı **en az 4.5:1** (küçük metin)
- Renkli zemin üzerine metin: `accentFg` token'ı kullanın — her domain için
  elle kontrast-güvenli seçilmiştir, yeni renk icat etmeyin
- Rozet/etiket: `emerald-600` yerine `emerald-800` (600 beyaz metinle AA'yı geçmez)

**Yaşanmış hata:** PageSpeed "arka plan ve ön plan renkleri yeterli kontrast
oranına sahip değil" — MÜSAİT rozeti `bg-emerald-600 text-white`.

---

## ⛔ KURAL 6 — Form erişilebilirliği

Her form alanının **programatik etiketi** olmalı.

```tsx
// ❌ görsel etiket var ama bağlı değil — ekran okuyucu alanı tanımlayamaz
<label className="...">Ad Soyad</label>
<input type="text" ... />

// ✅ useId() ile benzersiz id (aynı form sayfada birden fazla olabilir)
const id = useId();
<label htmlFor={`${id}-ad`}>Ad Soyad</label>
<input id={`${id}-ad`} ... />

// ✅ görsel etiketi olmayan alan (arama kutusu vb.)
<label htmlFor="katalog-arama" className="sr-only">Katalogda ara</label>
<input id="katalog-arama" type="search" ... />
// veya: aria-label="..."
```

Slider / range input: `aria-label` + `aria-valuetext` zorunlu.

---

## ⛔ KURAL 7 — Hareket tercihi

Animasyon `prefers-reduced-motion`'a saygı göstermeli:

```tsx
className="transition-colors duration-150 motion-reduce:transition-none"
```

---

## ✅ Değişiklik sonrası kontrol noktaları

1. `npm run build` — hata yok
2. `node scripts/kontrol.mjs` — breakpoint tutarsızlığı, eksik `relative`,
   eksik `htmlFor` kontrolleri geçiyor
3. Deploy sonrası canlı kontrol:
   ```bash
   curl -s https://DOMAIN/ | grep -c 'flex-1 max-w-xs'   # header'da yatay öğe = 0 olmalı
   curl -s https://DOMAIN/ | grep -o '<label for="[^"]*"' | head   # etiketler bağlı mı
   ```
4. **Kullanıcıdan görsel doğrulama isteyin** — ekran görüntüsü alma imkânımız
   yok; sığma sorunlarını ancak kullanıcı tarayıcıda görebilir.
   Sorulacak: masaüstü (1280px+), dizüstü (1024–1279px), tablet, mobil.

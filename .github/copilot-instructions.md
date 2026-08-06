# kulucka-hub — Copilot Talimatları

Bu repo 85+ domaini tek kod tabanından yayınlar (host header tabanlı
çok-kiracılı Next.js).

## ⛔ Kopya içerik yasaktır — geçilmez kural

`src/lib/` altındaki şablonlara yazılan tek bir sabit cümle 85–900 canlı
sayfada birebir tekrarlanır.

- Sabit cümle önermeyin.
- Sadece değişken enjeksiyonu (`${bolge} bölgesinde...`) yeterli değildir.
- Her metin `varyantSec()` ile 4-6 yapısal olarak farklı varyanttan seçilmeli;
  yüksek hacimli alanlarda `kur()` kompozisyonel üreticisi kullanılmalı.
- Bilgi uydurmayın.

Tam kural seti: `CLAUDE.md`

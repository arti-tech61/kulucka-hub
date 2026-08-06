# Agent Talimatları — kulucka-hub

> Bu dosya OpenAI Codex, Cursor, Gemini CLI ve diğer kod ajanları içindir.
> **Tam kural seti [`CLAUDE.md`](./CLAUDE.md) dosyasındadır — çalışmaya
> başlamadan önce onu okuyun.**

## Bu depoda çalışmadan önce bilmeniz gereken tek kritik şey

Bu repo **85+ domaini tek kod tabanından** yayınlar. `src/lib/` altındaki
şablon dosyalarına yazdığınız **tek bir sabit cümle, 85–900 canlı sayfada
birebir tekrarlanır.**

### ⛔ KOPYA İÇERİK YASAKTIR — GEÇİLMEZ KURAL

- Şablonlara sabit cümle yazmayın.
- Sadece değişken enjeksiyonu (`${bolge} bölgesinde ...`) da YETERLİ DEĞİLDİR.
- Her metin alanı `varyantSec()` ile en az 4-6 yapısal olarak farklı
  varyanttan seçilmeli; yüksek hacimli alanlarda `kur()` kompozisyonel
  üreticisi kullanılmalı (`src/lib/varyant.ts`).
- Değişiklik sonrası sayfa seviyesi 8-gram örtüşmesi **%20'nin altında**
  olmalı (ölçüm yöntemi CLAUDE.md'de).
- **Bilgi uydurmak yasaktır.** Çeşitlilik anlatım biçiminden gelir,
  uydurma rakam/referans/yerel bilgiden değil.

### 📌 Proje hedefi

Varyant motoru köprü çözümdür. Hedef, tüm sitelerin içeriğini **elle yazılmış
kaliteye** taşımaktır (referans: `saygitech/izmir-manlift.com`, %0.2 örtüşme,
sayfa başına 1.200-1.500 kelime gerçek yerel bilgi).

## Kritik dosyalar

`src/lib/varyant.ts` · `bolge-sayfalari.ts` · `hizmet-sayfalari.ts` ·
`firsat-sayfalar.ts` · `alt-sayfalar.ts` · `paylasilan-blog.ts` ·
`anahtar-kelime-sayfalari.ts` · `urun-katalogu.ts` · `kurumsal-sayfalar.ts`

Detaylı tablo ve her dosyanın kaç sayfa ürettiği: CLAUDE.md

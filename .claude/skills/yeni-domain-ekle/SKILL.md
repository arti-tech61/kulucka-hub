---
name: yeni-domain-ekle
description: Kulucka-hub'a yeni domain(ler)i paylaşımlı temayla, benzersiz içerikle canlıya alır — DNS, Coolify, kod, deploy, doğrulama dahil uçtan uca akış. "şu domainleri kuluçka-hub'a ekle", "paylaşımlı temaya al" gibi isteklerde kullan.
---

# Kulucka-hub'a yeni domain ekleme

Bu proje (kulucka-hub) host header'a göre tek Next.js deploy'undan onlarca domaine
farklı içerik sunuyor. Yeni bir domaini "paylaşımlı tema"ya bağlamak tekrar eden,
çok adımlı bir iş — bu skill o akışı codifiye eder.

## Önce kontrol et

- Domain zaten `src/lib/siteler.ts`, `src/lib/paylasilan-tema-konfig.ts` veya
  `src/lib/hazirlanan-siteler.ts` içinde kayıtlı mı? (`grep -n "\"$domain\"" src/lib/*.ts`)
- Domain Cloudflare'de zone olarak var mı, DNS kaydı ne durumda? Eğer canlı bir
  **yönlendirme** (301) varsa — bu genelde bilinçli bir SEO konsolidasyonu olabilir
  (örn. birden fazla varyant domain tek bir kanonik siteye yönleniyor). Kullanıcıya
  sormadan bozma; `curl -sI -o /dev/null -w "%{redirect_url}"` ile hedefi göster,
  kullanıcı onaylarsa devam et.
- Aynı marka/il için zaten kulucka-hub'da veya başka bir Coolify app'te içerik var
  mı (örn. "izmirmakasliplatform" hem `.net` standalone app hem `.xyz` kulucka-hub'da
  olabilir)? Varsa yeni domain'in içeriği o mevcut içerikten belirgin şekilde
  farklılaştırılmalı (duplicate content SEO riski).

## 1. Cloudflare DNS

Kayıtlı token: `/etc/rankpanel/cloudflare.env` (`CF_ACCOUNT_ID`, `CF_API_TOKEN`).
Kulucka-hub'daki tüm domainler aynı deseni kullanır — **A kaydı, proxied, sunucu IP'sine**:

```
root  A  187.127.73.189  proxied=true
www   A  187.127.73.189  proxied=true
```

Zone ID'yi `GET /zones?name=$domain` ile bul, sonra `POST /zones/{id}/dns_records`
ile root+www ekle (yoksa) ya da `PUT` ile güncelle (varsa, örn. eski redirect A
kaydını 192.0.2.1'den bu IP'ye çevirmek için).

## 2. Coolify — domain'i uygulamaya bağla

- App UUID: `inqp15mhoxepqzd9x7a2a0ut` (kulucka-hub), Token: bkz. `coolify_api.md` hafıza kaydı
- `GET /api/v1/applications/inqp15mhoxepqzd9x7a2a0ut` → mevcut `fqdn` alanını al
  (virgülle ayrılmış `https://domain1,https://domain2,...` formatında)
- Yeni domain(ler)i `https://domain` formatında ekleyip **tam listeyi** `PATCH`
  ile `domains` alanına yaz (fqdn alanı PATCH kabul etmiyor, `domains` kullan —
  bkz. Coolify API quirks hafızası). Var olan hiçbir domaini silme.

## 3. Kod — `siteler.ts`

`src/lib/siteler.ts`'teki `siteler` dizisine yeni `SiteIcerik` girişi ekle:
`host, h1, paragraflar (2-3 kısa paragraf — UZUN SEO metni buraya KOYMA, bkz. aşağıdaki
"kritik tuzak"), hizmetler (4-6 madde), telefon, telefonGosterim, eposta, bolge,
uzmanlik, kategori, anaSite {ad, url}`.

**`bolge` formatı:** virgülle ayrılmış il/ilçe listesi. Parantez içine ek not
eklerken **virgül kullanma** — `"X (Y, çevre il)"` `site.bolge.split(",")`'i kırar
(parantez içindeki virgül ayrı bir sahte girdi üretir). Doğrusu: `"X (Y çevre ili)"`.

Aynı dosyadaki `ticariSeoProfilleri` sözlüğüne host anahtarıyla bir
`TicariSeoProfili` girişi ekle: `{yer, isler, rota, kritik, zemin, olcu, makine}`.
Bu, `anaSayfaDetayliRehber()` ile ana sayfada katlanır "Detaylı Kiralama Rehberi"
bölümünde 12 farklılaştırılmış SEO paragrafı üretir — kopya içerik riskini bu
alanların (özellikle `isler`, `yer`) domain'e özgü tutarak azalt.

## 4. Kod — `paylasilan-tema-konfig.ts`

`src/lib/paylasilan-tema-konfig.ts`'teki `paylasilanTemaKonfigleri` sözlüğüne host
anahtarıyla `PaylasilanTemaConfig` ekle: `markaAdi, logoUrl (/media/logolar/N.png,
N: 1-22, tekrar kullanımı sorun değil — jenerik ikonlar), renkler {primary,
primaryLight, accent, accentHover, accentFg, bg, fg, muted, elevated, border}`.
Aynı gruptaki (örn. aynı il) komşu domainlere farklı accent tonu ver — tek şablonun
fark edilirliğini azaltır. `TEMALAR` map'ine EK BİR ŞEY YAPMANA GEREK YOK — zaten
`Object.entries(paylasilanTemaKonfigleri)` ile otomatik spread ediliyor.

Domain `hazirlanan-siteler.ts`'te KAYITLI OLMAMALI (page.tsx'te tema kontrolünden
ÖNCE çalışıyor, varsa içeriği sessizce maskeler) — kayıtlıysa sil.

## 5. Build + yerel doğrulama

```bash
cd /root/portfoy/kulucka-hub
rm -rf .next && npm run build   # tip/şema hatalarını yakalar
cp -r public .next/standalone/ 2>/dev/null
cp -r .next/static .next/standalone/.next/ 2>/dev/null
PORT=4999 node .next/standalone/server.js &
sleep 3
curl -s -H "Host: $domain" http://localhost:4999/ | grep -c "azırlanıyor"   # 0 olmalı
curl -s -H "Host: $domain" http://localhost:4999/ | grep -c "data-tema-host=\"$domain\""  # 1 olmalı
```

Standalone sunucuyu kapatırken **geniş desenli `pkill` kullanma** — bu sunucuda
konteyner süreçlerini de öldürebilir (bkz. pkill hazard hafızası). `kill %1` ya da
PID hedefli kill kullan.

## 6. Commit + push + deploy + doğrula

Türkçe commit mesajı, `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
trailer'ıyla. Sonra:

```bash
curl -s "https://panel.saygi.cloud/api/v1/deploy?uuid=inqp15mhoxepqzd9x7a2a0ut&force=true" \
  -H "Authorization: Bearer $COOLIFY_TOKEN"
```

Deployment durumunu Monitor ile izlerken **JSON'u doğru parse et** — `grep -o
'"status":"[^"]*"' | head -1` yanlış alanı (iç içe geçmiş bir `"running:unknown"`
alanı) yakalayabilir ve asla "finished" görmez. Doğrusu:

```bash
python3 -c "import json,sys; print(json.load(sys.stdin).get('status'))"
```

Deploy bitince (`finished`) her yeni domain için canlı doğrulama:

```bash
curl -s "https://$domain/" | grep -c "azırlanıyor"       # 0
curl -s "https://$domain/urunler" | grep -o "/urunler/[a-z0-9-]*" | sort -u | wc -l  # 25 (tam katalog)
```

## Özet — tek seferde ne yapılır

Birden fazla domain eklerken hepsini TEK commit + TEK deploy'da topla (her domain
için ayrı deploy döngüsü gereksiz zaman kaybı). DNS ve Coolify `domains` adımlarını
da toplu (tüm domainler için tek PATCH / tek DNS script koşusu) yap.

## Kritik: tek Coolify app'in domain tavanı ~63

Coolify deploy'u domain listesini SSH komutuna gömüyor; belirli bir toplam uzunluktan
sonra `posix_spawn(): Argument list too long` hatasıyla deploy başarısız oluyor (rollback
otomatik, canlı siteler etkilenmiyor ama yeni domain hiç yayılmıyor). 2026-08-06'da
bisection ile ölçüldü: **62 domain çalıştı, 64 patladı → tavan tam 63**. Bu sayı
domain adlarının toplam karakter uzunluğuna bağlı, kesin sabit değil ama ~60-65
aralığında bekle.

**Yeni domain eklerken önce mevcut `fqdn` sayısını kontrol et**
(`GET /applications/{uuid}` → `fqdn.split(",")`). 63'e yaklaşıyorsa (veya deploy
`Argument list too long` ile patlarsa) **yeni bir Coolify app aç** (`kulucka-hub-2`,
`kulucka-hub-3`...) aynı repo/branch/dockerfile ile:
```
POST /api/v1/applications/public
{"project_uuid": "f13vr4fshpmhasw1v5193r18", "server_uuid": "vw2d8sl5hz64y2amrabz0ntu",
 "environment_name": "production", "git_repository": "https://github.com/arti-tech61/kulucka-hub",
 "git_branch": "main", "build_pack": "dockerfile", "ports_exposes": "3000", "name": "kulucka-hub-2"}
```
Sonra o app'in `domains` alanına yeni domain grubunu PATCH'le, deploy et. Hangi domain
hangi app'te olduğunu takip etmek için (henüz merkezi bir kayıt yok) Coolify
`GET /applications` ile tüm app'lerin `fqdn` alanlarını tarayarak bulunabilir.

## Cloudflare "Mass URL Redirect" tuzağı

Bazı domain varyantları (örn. `manliftkirala.*`, `izmirmakasliplatform.*`) hesap
seviyesinde bir Cloudflare **Mass URL Redirect** listesine kayıtlı olabilir (eski
SEO konsolidasyon kararı) — DNS'i bizim sunucuya çeksen bile CF edge'de 301 dönmeye
devam eder, origin'e hiç ulaşmaz. Kontrol: `curl -sI -w "%{redirect_url}"`.

Bu listeleri görmek/düzenlemek **Account Rulesets** izni ister; günlük DNS token'ında
(`/etc/rankpanel/cloudflare.env`) bu izin yok. Gerekirse kullanıcıdan token-oluşturma
yetkili geçici bir token iste, onunla şu izinlerle yeni bir token türet: Account
Rulesets Read/Write, Mass URL Redirects Read/Write, Account Rule Lists Read/Write.
Listeleri bul: `GET /accounts/{id}/rules/lists`, öğeleri: `.../lists/{list_id}/items`,
sil: `DELETE .../items` body `{"items":[{"id":"..."}]}` (async, `operation_id` ile
`GET .../bulk_operations/{op_id}` üzerinden takip edilir, ~10-30sn sürer).

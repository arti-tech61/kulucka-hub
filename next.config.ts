import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // izmirsektor.com Türkiye'de erişim engeli aldı (2026-07-20): ana alan adı .net oldu.
      // .com ve www varyantları apex .net'e 301
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?izmirsektor\\.com" }],
        destination: "https://izmirsektor.net/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.izmirsektor\\.net" }],
        destination: "https://izmirsektor.net/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.guvenliyukselis\\.com" }],
        destination: "https://guvenliyukselis.com/:path*",
        permanent: true,
      },
      // manliftkirala.net.tr'nin eski marka/model bazlı ürün URL'leri (site
      // kulucka-hub'a taşınırken jenerik kategori sistemine geçti). GSC'de hâlâ
      // gösterim alan 3 URL en yakın mevcut kategoriye 301'lendi (2026-08-29).
      {
        source: "/urunler/manitou-mt-625-h-6-mt-telehandler-compact-kiralama",
        has: [{ type: "host", value: "(www\\.)?manliftkirala\\.net\\.tr" }],
        destination: "https://manliftkirala.net.tr/urunler/telehandler-7m-kiralama",
        permanent: true,
      },
      {
        source: "/urunler/zoomlion-fe18h-1-8-ton-elektrikli-forklift-kiralama",
        has: [{ type: "host", value: "(www\\.)?manliftkirala\\.net\\.tr" }],
        destination: "https://manliftkirala.net.tr/urunler/elektrikli-forklift-1-3-ton-kiralama",
        permanent: true,
      },
      {
        source: "/urunler/sinoboom-ab16ej-plus-16-mt-akulu-eklemli-kiralama",
        has: [{ type: "host", value: "(www\\.)?manliftkirala\\.net\\.tr" }],
        destination: "https://manliftkirala.net.tr/urunler/eklemli-platform-16m-kiralama",
        permanent: true,
      },
      // istanbulplatforms.com'un eski "üretici firmalar" ve "filo" sayfaları
      // (site kulucka-hub'a taşınırken markalar/ürünler sistemine geçti).
      // GSC'de hâlâ gösterim alan 6 URL en yakın mevcut sayfaya 301'lendi (2026-08-29).
      {
        source: "/uretici-firmalar/haulotte",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/markalar/haulotte-platform-kiralama",
        permanent: true,
      },
      {
        source: "/uretici-firmalar/genie",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/markalar/genie-platform-kiralama",
        permanent: true,
      },
      {
        source: "/uretici-firmalar/dingli",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/markalar/dingli-platform-kiralama",
        permanent: true,
      },
      {
        source: "/uretici-firmalar/sinoboom",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/markalar/sinoboom-platform-kiralama",
        permanent: true,
      },
      {
        source: "/flotamiz/platform/kompakt-akulu-makasli-platform-6m",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/urunler/makasli-platform-8m-kiralama",
        permanent: true,
      },
      {
        source: "/flotamiz/lift-truck/agir-tonaj-dizel-forklift-7-ton",
        has: [{ type: "host", value: "(www\\.)?istanbulplatforms\\.com" }],
        destination: "https://istanbulplatforms.com/urunler/agir-hizmet-forklift-5-10-ton-kiralama",
        permanent: true,
      },
      // Coolify'ın www⇄non-www yönlendirmesi çoklu-domain uygulamalarda çalışmıyor
      // (her domain kendi bağımsız router'ı, aralarında middleware yok). Kalan tüm
      // domain'ler için genel bir www -> non-www 301'i burada, uygulama katmanında yapılıyor.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.(?<host>.+)" }],
        destination: "https://:host/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

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

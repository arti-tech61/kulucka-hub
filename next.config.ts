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
    ];
  },
};

export default nextConfig;

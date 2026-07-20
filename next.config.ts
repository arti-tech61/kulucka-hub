import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      // izmirsektor.net ve www varyantları apex .com'a 301
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?izmirsektor\\.net" }],
        destination: "https://izmirsektor.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www\\.izmirsektor\\.com" }],
        destination: "https://izmirsektor.com/:path*",
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

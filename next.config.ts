import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
};

export default nextConfig;

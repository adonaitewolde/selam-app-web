import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
  },

  // Set explicit output file tracing root to silence lockfile warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;

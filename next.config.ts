import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Derive the project root dynamically so local clones don't break
    root: process.cwd(),
  },
};

export default nextConfig;

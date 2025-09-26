import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Explicitly set the workspace root to avoid "inferred root" warnings
    root: "/Users/ado0810/Desktop/selam-app",
  },
};

export default nextConfig;

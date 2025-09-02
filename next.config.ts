import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    },
    {
      protocol: "http",
      hostname: "**",
    }]
  },
  redirects: async () => [
    {
      source: '/',
      destination: '/dashboard',
      permanent: false
    }
  ]
  /* config options here */
};

export default nextConfig;

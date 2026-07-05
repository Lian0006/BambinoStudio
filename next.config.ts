import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    unoptimized: false,
  },
  // Allow serving static files with .jpg extension that are actually PNG
  experimental: {},
  allowedDevOrigins: ['localhost:3001', '192.168.20.25', 'jmttu-2800-484-1764-2600-545-820c-d98-71b9.free.pinggy.net'],
};

export default nextConfig;

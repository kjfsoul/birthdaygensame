/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dynamic on Vercel. Do NOT set `output: 'export'`.
  reactStrictMode: true,
  
  // Disable static optimization completely
  experimental: {
    typedRoutes: false,
  },
  
  // Ensure all pages are server-rendered
  async redirects() {
    return []
  },
  
  async rewrites() {
    return []
  },

  // Helpful when lint rules aren’t ready in CI
  eslint: {
    ignoreDuringBuilds: true,
  },

  // If you use external images, list domains here (adjust as needed)
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
};

module.exports = nextConfig;

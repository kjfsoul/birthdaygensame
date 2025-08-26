/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dynamic on Vercel. Do NOT set `output: 'export'`.
  reactStrictMode: true,
  
  // Remove any custom distDir; Next expects `.next` on Vercel.
  // distDir: '.next', // (default) — leaving it implicit avoids mistakes

  // If typedRoutes was turned on and you have non-existent links, disable it.
  experimental: {
    typedRoutes: false,
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // dynamic Next.js on Vercel; DO NOT use 'export'
  output: 'standalone',
  // If you aren't using i18n or basePath, keep them undefined.
  // i18n: undefined,
  // basePath: '',
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Cloudflare Pages configuration
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  },
}

module.exports = nextConfig


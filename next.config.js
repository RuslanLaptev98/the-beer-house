/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.punkapi.com'],
  },
  swcMinify: true,
};

module.exports = nextConfig;

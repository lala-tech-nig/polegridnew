// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,        // Enable React strict mode
  swcMinify: true,              // Use SWC for faster minification
  images: {
    domains: ["i.postimg.cc", "localhost"], // Add external image domains if needed
  },
  experimental: {
    appDir: true,               // Enable app directory (Next 13+)
  },
};

export default nextConfig;

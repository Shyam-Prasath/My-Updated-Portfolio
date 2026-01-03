/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Allow local images and sanity CDN if needed
    domains: ["localhost", "cdn.sanity.io"],

    // Keep optimization ON (important)
    unoptimized: false,
  },
};

module.exports = nextConfig;

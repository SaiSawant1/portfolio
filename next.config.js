/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  serverRuntimeConfig: {
    enableServerActions: true,
  },
  publicRuntimeConfig: {
    enableServerActions: true,
  },
  experimental:{
    serverActions:true,
  }
};

module.exports = nextConfig;

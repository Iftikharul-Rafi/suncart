/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
    ],
  },

  
  devIndicators: false,

  
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
};

export default nextConfig;
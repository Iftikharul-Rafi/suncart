/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // external image allow
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

  // ডেভলপমেন্ট ইন্ডিকেটর ("N" লোগো) বন্ধ করতে
  devIndicators: false,

  // Turbopack alias (optional but ok)
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
  },
};

export default nextConfig;
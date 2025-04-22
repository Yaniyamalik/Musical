import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
// };

export default nextConfig;

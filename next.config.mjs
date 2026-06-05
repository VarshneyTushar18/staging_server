/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "www.tech2globe.com",
      },
      {
        protocol: "https",
        hostname: "blog.tech2globe.com",
      },
      {
        protocol: "https",
        hostname: "stagenew.tech2globe.tech",
      },
    ],
  },
};

export default nextConfig;

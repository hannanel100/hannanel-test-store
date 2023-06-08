/** @type {import('next').NextConfig} */
const nextConfig = {
  // configure images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.schema.io",
        port: "",
        pathname: "/hannanel-test-store/**",
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'export', */
  /* reactStrictMode: true, */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketplace.canva.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

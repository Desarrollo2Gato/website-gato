/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'export', */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.optimization.minimize = true;
    }

    return config;
  },
};

export default nextConfig;

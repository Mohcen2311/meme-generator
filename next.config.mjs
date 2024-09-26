const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
        port: "",
      },
    ],
  },
};

export default nextConfig;

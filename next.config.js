const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
    output: "export", // Required for `next export`
    basePath: "/web-2025", // ⚠️ Must match your repo name
    assetPrefix: "/web-2025/", // Ensures assets load correctly
    images: {
      unoptimized: true, // ⚠️ Required for GitHub Pages, since no Image Optimization
    },
  };
  
  module.exports = nextConfig;
  
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Target SVG files
      use: ["@svgr/webpack"], // Use SVGR to transform SVG into React components
    });

    return config; // Return the updated config
  },
};

export default nextConfig;

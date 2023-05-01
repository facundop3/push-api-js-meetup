/** @type {import('next').NextConfig} */

// STEP-[1]: install next-pwa and add the wrapper to next config.
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;

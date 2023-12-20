/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, // Enable React strict mode for improved error handling
  // swcMinify: true,      // Enable SWC minification for improved performance
  // compiler: {
  //   removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  // },
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development"
});

module.exports = withPWA(nextConfig);

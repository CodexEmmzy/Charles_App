/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the output option to "export" to enable static HTML export
  output: "export",
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;

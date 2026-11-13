/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  turbopack: { root: import.meta.dirname },
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  // These are public Contentful Delivery API credentials embedded in the website.
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE || "",
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT || "master",
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  },
};
export default config;

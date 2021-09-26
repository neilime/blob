/* eslint-disable no-undef */
module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  target: "serverless",
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

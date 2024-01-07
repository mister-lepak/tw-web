const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/tw-web" : undefined,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

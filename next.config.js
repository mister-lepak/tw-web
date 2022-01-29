const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/tw-web" : "",
  images: {
    loader: "akamai",
    path: "/",
  },
};

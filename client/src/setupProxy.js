const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/*"],
    createProxyMiddleware({
      target: process.env.NODE_ENV === "development" ? "http://localhost:3140" : "https://csit-314-production.up.railway.app",
    })
  );
};
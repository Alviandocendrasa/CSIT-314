const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api/*"],
    createProxyMiddleware({
      target: "https://csit-314-production.up.railway.app",
    })
  );
};
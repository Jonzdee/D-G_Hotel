const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hms-ccny.onrender.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};

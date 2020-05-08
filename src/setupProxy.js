const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',// 根据这个来进行匹配的，所以接口调用的地方也需要加上这个
    createProxyMiddleware({
      target: 'http://dqm-backend-1404-develop.ts',
      changeOrigin: true,
    })
  );
};

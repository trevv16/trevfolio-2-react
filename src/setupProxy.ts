const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line import/no-anonymous-default-export
export default function (app: any) {
  if (process.env.NODE_ENV !== 'production') {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.REACT_APP_DEV_SERVER,
        changeOrigin: true
      })
    );
  } else {
    app.use(
      '/api',
      createProxyMiddleware({
        target: process.env.REACT_APP_PROD_SERVER,
        changeOrigin: true
      })
    );
  }
}

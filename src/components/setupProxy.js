const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://7wqabd0gq1.execute-api.us-west-2.amazonaws.com/prod/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Rewrite the path
            },
        })
    );
};

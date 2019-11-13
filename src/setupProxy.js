const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/rest', { 
         target: 'http://ynzwfw.yn.gov.cn/' ,
         secure: false,
         changeOrigin: true//,
        //  pathRewrite: {
        //   "^/": "/"
        //  },
         // cookieDomainRewrite: "http://localhost:3000"
      }));
      app.use(proxy('/apc', { 
        target: 'http://www.sogou.com' ,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
         "^/": "/"
        },
        // cookieDomainRewrite: "http://localhost:3000"
     }));
  };
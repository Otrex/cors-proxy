cors_proxy = require('cors-anywhere');
const port = process.env.PORT || 3000;
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, function() {
    console.log('Running CORS Anywhere on' + port);
});
const { createServer } = require('http');
const { parse } = require('url');
const handler = require('serve-handler');

module.exports = (req, res) => {
  const { pathname } = parse(req.url, true);
  if (pathname === '/api') {
    res.end('Hello from Vercel!');
  } else {
    handler(req, res, {
      public: 'public'
    });
  }
};

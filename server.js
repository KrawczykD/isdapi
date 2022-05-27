  const jsonServer = require('json-server');
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();
  const port = process.env.PORT || 3000;


  server.use(jsonServer.rewriter({
      "/": "/home",
      "/brand/:brand": "/:brand",
      "/brand/:brand/cat/:cat": "/products?brand=:brand&cat=:cat",
      "/brand/:brand/cat/:cat/productid/:id": "/products?brand=:brand&cat=:cat&id=:id",

      "/postcoderhints/:option":"/postcoderhints?Message_like=:option",
      "/postcoderfull/:option":"/postcoderfull?Message_like=:option",
      "/coordinates":"/coordinates",
      "/recentUpdatesSingle":"/single",
      "/recentUpdatesFalse":"/false",
      "/recentUpdatesNone":"none"
    }))

  server.use(middlewares);
  server.use(router);

  server.listen(port);

  jsonServer.rewriter






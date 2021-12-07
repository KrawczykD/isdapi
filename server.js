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
      "/postcoder/:option":"/postcoder?Message_like=:option",
    }))

  server.use(middlewares);
  server.use(router);

  server.listen(port);

  jsonServer.rewriter






const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


server.use(jsonServer.rewriter({
    "/create/products": "/createProducts",
    "/fusion/products": "/fusionProducts",
    "/vision/products": "/visionProducts",
    "/plas/products": "/plasProducts",
    "/slide/products": "/slideProducts",
    "/accessories/products": "/accessoriesProducts",
    "/milano/products": "/milanoProducts",
    "/serica/products": "/sericaProducts",
    "/alvic/products": "/alvicProducts",
  }))

server.use(middlewares);
server.use(router);

server.listen(port);

jsonServer.rewriter
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


server.use(jsonServer.rewriter({
    "/:brand": "/:brand",
    "/:brand/:cat": "/:brand+Products",
   
  }))

server.use(middlewares);
server.use(router);

server.listen(port);

jsonServer.rewriter
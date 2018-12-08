const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var secure = require('ssl-express-www');




server.use(middlewares)
server.use(secure);
server.use(router)
server.listen(process.env.PORT || 3000, function() {
    console.log("listening on 3000");
  });
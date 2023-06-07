const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

const mysql = require("mysql");
mysql.connect("mysql://mysql/apinode");

server.use(express.urlencoded());
server.use(express.json());

const postRoute = require("./api/routes/buyRoute");
postRoute(server);

const postRoute = require("./api/routes/categorieRoute");
postRoute(server);

const postRoute = require("./api/routes/chatRoute");
postRoute(server);

const commentRoute = require("./api/routes/commentRoute");
commentRoute(server);

const postRoute = require("./api/routes/accountRoute");
postRoute(server);

const postRoute = require("./api/routes/followRoute");
postRoute(server);

const userRoute = require("./api/routes/productionRoute");
userRoute(server);

server.listen(port,hostname, () => {
    console.log(`Serveur qui tourne sur le port ${port}`)
});
const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;

const server = express();

/*const mysql = require("mysql");
mysql.connect("mysql://mysql/apinode");*/

server.use(express.urlencoded());
server.use(express.json());

const accountRoute = require("./api/routes/accountRoute");
accountRoute(server);

const categorieRoute = require("./api/routes/categorieRoute");
categorieRoute(server);

const chat_messageRoute = require("./api/routes/chat_messageRoute");
chat_messageRoute(server);

const chatRoute = require("./api/routes/chatRoute");
chatRoute(server);

const commandRoute = require("./api/routes/commandRoute");
commandRoute(server);

const commentRoute = require("./api/routes/commentRoute");
commentRoute(server);

const likeRoute = require("./api/routes/likeRoute");
likeRoute(server);

const playlistRoute = require("./api/routes/playlistRoute");
playlistRoute(server);

const playlist_songRoute = require("./api/routes/playlist_songRoute");
playlist_songRoute(server);

const productionRoute = require("./api/routes/productionRoute");
productionRoute(server);

const reportsRoute = require("./api/routes/reportsRoute");
reportsRoute(server);

const styleRoute = require("./api/routes/styleRoute");
styleRoute(server);

server.listen(port, () => {
    console.log(`Serveur qui tourne sur le port ${port}`)
});
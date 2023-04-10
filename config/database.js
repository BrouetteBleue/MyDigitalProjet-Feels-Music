// config/database.js
let mysql = require('mysql');

//creer la connexion
let db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'node'
});

// crée la connexion
db.connect()

//exporter la connexion
module.exports = db;
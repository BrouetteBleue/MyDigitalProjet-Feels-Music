module.exports = (server) => {
    const accountController = require("../controllers/accountController");


    server.route("/inscription")
    .post(accountController.register)

    server.route("/connexion")
    .post(accountController.login) 

    server.route("/user/:username")
    .get(accountController.getUserByUsername);



}
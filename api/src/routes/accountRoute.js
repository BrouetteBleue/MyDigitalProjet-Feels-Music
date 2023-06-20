module.exports = (server) => {
    const accountController = require("../controllers/accountController");


    server.route("/signin")
    .post(accountController.register)

    server.route("/login")
    .post(accountController.login) 

    server.route("/user/:username")
    .get(accountController.getUserByUsername);

    server.route("/beatmakers")
    .get(accountController.getBeatmakers);



}
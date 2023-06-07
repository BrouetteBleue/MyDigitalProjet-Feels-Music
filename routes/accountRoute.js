module.exports = (server) => {
    
    const accountController = require("../controllers/accountController");
    

    server.post("/user/register", userController.userRegister);
    server.post("/user/login", userController.userLogin);
    
    server.route("/accounts/:account_id/accounts")
    .get(accountController.listAllAccounts);

    server.route("/accounts/:account_id") // req.params.account_id
    .get(accountController.getAAccount)
    .put(accountController.updateAAccount)
    .delete(accountController.deleteAAccount)
}
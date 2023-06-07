module.exports = (server) => {
    
    const accountController = require("../controllers/accountController");
    
    server.route("/accounts/:account_id/accounts")
    .get(accountController.listAllAccounts)
    .post(accountController.createAAccount);

    server.route("/accounts/:account_id") // req.params.account_id
    .get(accountController.getAAccount)
    .put(accountController.updateAAccount)
    .delete(accountController.deleteAAccount)
}
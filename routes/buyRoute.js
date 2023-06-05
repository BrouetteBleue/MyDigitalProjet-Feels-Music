module.exports = (server) => {
    
    const buyController = require("../controllers/buyController");
    
    server.route("/posts/:post_id/buys")
    .get(buyController.listAllBuys)
    .post(buyController.createABuy);

    server.route("/buys/:buy_id") // req.params.buy_id
    .get(buyController.getABuy)
    .put(buyController.updateABuy)
    .delete(buyController.deleteABuy)
}
module.exports = (server) => {
    
    const productionController = require("../controllers/productionController");
    
    server.route("/accounts/:account_id/productions")
    .get(productionController.listAllProductions)
    .post(productionController.createAProduction);

    server.route("/productions/:production_id") // req.params.production_id
    .get(productionController.getAProduction)
    .put(productionController.updateAProduction)
    .delete(productionController.deleteAProduction)
}
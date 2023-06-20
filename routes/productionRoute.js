const express = require('express');
module.exports = (server) => {
    
    const productionController = require("../controllers/productionController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/productions")
    .get(productionController.listAllProductions);
    
    server.route("/accounts/:account_id/productions")
    .post(jwtMiddleware.verifyToken, productionController.createAProduction);

    server.route("/productions/:production_id") // req.params.production_id
    .get(jwtMiddleware.verifyToken, productionController.getAProduction)
    .put(jwtMiddleware.verifyToken, productionController.updateAProduction)
    .delete(jwtMiddleware.verifyToken, productionController.deleteAProduction)
}
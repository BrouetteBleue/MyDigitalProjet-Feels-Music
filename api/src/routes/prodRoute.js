
module.exports = (server) => {
    const productionController = require("../controllers/prodController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

    server.post("/uploadProduction", 
        jwtMiddleware.verifyToken,
        productionController.uploadMiddleware,
        productionController.uploadProduction
    );

    server.get("/production/:prod", productionController.getProductionDetails);

    server.get("/productions", productionController.getProductions);
};
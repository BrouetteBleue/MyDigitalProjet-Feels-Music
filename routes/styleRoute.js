module.exports = (server) => {
    
    const styleController = require("../controllers/styleController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/styles")
    .get(styleController.listAllStyles);

    server.route("/accounts/:account_id/styles")
    .post(jwtMiddleware.verifyToken, styleController.createAStyle);

    server.route("/styles/:style_id") // req.params.style_id
    .get(jwtMiddleware.verifyToken, styleController.getAStyle)
    .put(jwtMiddleware.verifyToken, styleController.updateAStyle)
    .delete(jwtMiddleware.verifyToken, styleController.deleteAStyle)
}
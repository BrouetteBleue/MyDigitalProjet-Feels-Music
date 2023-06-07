module.exports = (server) => {
    
    const styleController = require("../controllers/styleController");
    
    server.route("/styles")
    .get(styleController.listAllStyles);

    server.route("/accounts/:account_id/styles")
    .post(styleController.createAStyle);

    server.route("/styles/:style_id") // req.params.style_id
    .get(styleController.getAStyle)
    .put(styleController.updateAStyle)
    .delete(styleController.deleteAStyle)
}
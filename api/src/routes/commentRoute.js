
module.exports = (server) => {
    const commentController = require("../controllers/commentController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

    server.route("/comment") 
    .post(jwtMiddleware.verifyTokenRequired,commentController.createComment)

    server.route("/comment/:productionId")
    .get(commentController.getCommentsByProduction);

};
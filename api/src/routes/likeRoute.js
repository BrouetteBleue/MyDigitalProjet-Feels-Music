
module.exports = (server) => {
    const likeController = require("../controllers/likeController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

    server.route("/like") 
    .post(jwtMiddleware.verifyToken,likeController.like)
    .delete(jwtMiddleware.verifyToken,likeController.unlike)
    .get(jwtMiddleware.verifyToken,likeController.getUserLikes);

};
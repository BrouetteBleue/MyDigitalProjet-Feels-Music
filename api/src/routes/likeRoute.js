
module.exports = (server) => {
    const likeController = require("../controllers/likeController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");

    server.route("/like") 
    .post(jwtMiddleware.verifyTokenRequired,likeController.like)
    .delete(jwtMiddleware.verifyTokenRequired,likeController.unlike)
    .get(jwtMiddleware.verifyTokenRequired,likeController.getUserLikes);

};
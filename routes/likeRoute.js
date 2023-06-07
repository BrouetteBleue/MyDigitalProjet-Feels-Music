module.exports = (server) => {
    
    const likeController = require("../controllers/likeController");
    
    server.route("/likes")
    .get(likeController.listAllLikes);
    
    server.route("/accounts/:account_id/likes")
    .post(likeController.createALike);

    server.route("/likes/:like_id") // req.params.like_id
    .get(likeController.getALike)
    .put(likeController.updateALike)
    .delete(likeController.deleteALike)
}
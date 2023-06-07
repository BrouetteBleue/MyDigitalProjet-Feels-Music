module.exports = (server) => {
    
    const likeController = require("../controllers/likeController");
    
    server.route("/accounts/:account_id/likes")
    .get(likeController.listAllLikes)
    .post(likeController.createALike);

    server.route("/likes/:like_id") // req.params.like_id
    .get(likeController.getALike)
    .put(likeController.updateALike)
    .delete(likeController.deleteALike)
}
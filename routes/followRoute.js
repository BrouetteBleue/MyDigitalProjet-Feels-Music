module.exports = (server) => {
    
    const followController = require("../controllers/followController");
    
    server.route("/posts/:post_id/follows")
    .get(followController.listAllFollows)
    .post(followController.createAFollow);

    server.route("/follows/:follow_id") // req.params.follow_id
    .get(followController.getAFollow)
    .put(followController.updateAFollow)
    .delete(followController.deleteAFollow)
}
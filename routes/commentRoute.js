const express = require('express');
module.exports = (server) => {
    
    const commentController = require("../controllers/commentController");
    
    server.route("/comments")
    .get(commentController.listAllComments);
    
    server.route("/accounts/:account_id/comments")
    .post(commentController.createAComment);

    server.route("/comments/:comment_id") // req.params.comment_id
    .get(commentController.getAComment)
    .put(commentController.updateAComment)
    .delete(commentController.deleteAComment)
}
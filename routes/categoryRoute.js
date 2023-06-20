const express = require('express');
module.exports = (server) => {
    
    const categoryController = require("../controllers/categoryController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/categorys")
    .get(categoryController.listAllcategorys);

    server.route("/posts/:account_id/categorys")
    .post(jwtMiddleware.verifyToken, categoryController.createACategory);

    server.route("/categorys/:category_id") // req.params.category_id
    .get(jwtMiddleware.verifyToken, categoryController.getACategory)
    .put(jwtMiddleware.verifyToken, categoryController.updateACategory)
    .delete(jwtMiddleware.verifyToken, categoryController.deleteACategory)
}
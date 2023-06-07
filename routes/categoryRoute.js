module.exports = (server) => {
    
    const categoryController = require("../controllers/categoryController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/posts/:account_id/categorys")
    .get(categoryController.listAllcategorys)
    .post(jwtMiddleware.verifyToken, categoryController.createACategory);

    server.route("/categorys/:category_id") // req.params.category_id
    .get(jwtMiddleware.verifyToken, categoryController.getACategory)
    .put(jwtMiddleware.verifyToken, categoryController.updateACategory)
    .delete(jwtMiddleware.verifyToken, categoryController.deleteACategory)
}
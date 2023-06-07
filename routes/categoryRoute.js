module.exports = (server) => {
    
    const categoryController = require("../controllers/categoryController");
    
    server.route("/posts/:account_id/categorys")
    .get(categoryController.listAllcategorys)
    .post(categoryController.createACategory);

    server.route("/categorys/:category_id") // req.params.category_id
    .get(categoryController.getACategory)
    .put(categoryController.updateACategory)
    .delete(categoryController.deleteACategory)
}
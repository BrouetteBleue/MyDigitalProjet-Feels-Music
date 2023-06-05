module.exports = (server) => {
    
    const categorieController = require("../controllers/categorieController");
    
    server.route("/posts/:post_id/categories")
    .get(categorieController.listAllCategories)
    .post(categorieController.createACategorie);

    server.route("/categories/:categorie_id") // req.params.categorie_id
    .get(categorieController.getACategorie)
    .put(categorieController.updateACategorie)
    .delete(categorieController.deleteACategorie)
}
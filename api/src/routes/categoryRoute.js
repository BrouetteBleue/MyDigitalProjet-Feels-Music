module.exports = (server) => {
    const categoryController = require("../controllers/categoryController");
    const styleController = require("../controllers/styleController");

    server.route("/categories")
    .get(categoryController.getCategories)

    server.route("/styles")
    .get(styleController.getStyles)



}
exports.listAllCategorys = (req, res) => {
    Category.find({}, (error, categorys) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(categorys);
        }
    })
} 

exports.createACategory = (req, res) => {
    let newCategory = new Category(req.body);

    newCategory.save((error, category) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(category);
        }
    })
}

exports.getACategory = (req, res) => {
    Category.findById(req.params.category_id, (error, category) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(category);
        }
    })
}

exports.updateACategory = (req, res) => {
    Category.findByIdAndUpdate(req.params.category_id, req.body, { new: true }, (error, category) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(category);
        }
    })
}

exports.deleteACategory = (req, res) => {
    Category.findByIdAndRemove(req.params.category_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Category supprimé"});
        }
    })
}
const Categorie = require('../models/categorieModel');

exports.listAllCategories = (req, res) => {
    Categorie.find({}, (error, categories) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(categories);
        }
    })
} 

exports.createACategorie = (req, res) => {
    let newCategorie = new Categorie(req.body);

    newCategorie.save((error, categorie) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(categorie);
        }
    })
}

exports.getACategorie = (req, res) => {
    Categorie.findById(req.params.categorie_id, (error, categorie) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(categorie);
        }
    })
}

exports.updateACategorie = (req, res) => {
    Categorie.findByIdAndUpdate(req.params.categorie_id, req.body, { new: true }, (error, categorie) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(categorie);
        }
    })
}

exports.deleteACategorie = (req, res) => {
    Categorie.findByIdAndRemove(req.params.categorie_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Categorie supprimé"});
        }
    })
}
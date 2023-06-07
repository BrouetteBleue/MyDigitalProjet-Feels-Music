const Production = require('../models/productionModel');
const Account = require('../models/accountModel');
const Categorie = require('../models/categorieModel');

exports.listAllProductions = (req, res) => {
    Production.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, productions) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(productions);
        }
    })
}

exports.createAProduction = (req, res) => {
    Account.findById(req.prams.account_id, (error, account), 
    Categorie.findById(req.prams.production_id, (error, categorie)  => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newProduction = new Production({...req.body, account_id: req.params.account_id, categorie_id: req.params.categorie_id});
          
            newProduction.save((error, production) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(production);
                }
            })
        }
    }))
}

exports.getAProduction = (req, res) => {
    Production.findById(req.params.production_id, (error, production) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(production);
        }
    })
}

exports.updateAProduction = (req, res) => {
    Production.findByIdAndUpdate(req.params.production_id, req.body, { new: true }, (error, production) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(production);
        }
    })
}


exports.deleteAProduction = (req, res) => {
    Production.findByIdAndRemove(req.params.production_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Article supprimé"});
        }
    })
} 
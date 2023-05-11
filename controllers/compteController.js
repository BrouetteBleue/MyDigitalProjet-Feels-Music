const Compte = require('../models/compteModel');

exports.listAllComptes = (req, res) => {
    Compte.find({}, (error, comptes) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comptes);
        }
    })
} 

exports.createACompte = (req, res) => {
    let newCompte = new Compte(req.body);

    newCompte.save((error, compte) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(compte);
        }
    })
}

exports.getACompte = (req, res) => {
    Compte.findById(req.params.compte_id, (error, compte) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(compte);
        }
    })
}

exports.updateACompte = (req, res) => {
    Compte.findByIdAndUpdate(req.params.compte_id, req.body, { new: true }, (error, compte) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(compte);
        }
    })
}

exports.deleteACompte = (req, res) => {
    Compte.findByIdAndRemove(req.params.compte_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Compte supprimé"});
        }
    })
}
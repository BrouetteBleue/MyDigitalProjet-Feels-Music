const Account = require('../models/accountModel');

exports.listAllAccounts = (req, res) => {
    Account.find({}, (error, accounts) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(accounts);
        }
    })
} 

exports.createAAccount = (req, res) => {
    let newAccount = new Account(req.body);

    newAccount.save((error, account) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json(account);
        }
    })
}

exports.getAAccount = (req, res) => {
    Account.findById(req.params.account_id, (error, account) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(account);
        }
    })
}

exports.updateAAccount = (req, res) => {
    Account.findByIdAndUpdate(req.params.account_id, req.body, { new: true }, (error, account) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(account);
        }
    })
}

exports.deleteAAccount = (req, res) => {
    Account.findByIdAndRemove(req.params.account_id, (error) => {
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
const Follow = require('../models/followModel');
const Production = require('../models/productionModel');
const Account = require('../models/accountModel');

exports.listAllFollows = (req, res) => {
    Follow.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, follows) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(follows);
        }
    })
}

exports.createAFollow = (req, res) => {
    Production.findById(req.prams.production_id, (error, production),
    Account.findById(req.prams.account_id, (error, account)   => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newFollow = new Follow({...req.body, production_id: req.params.production_id, account_id: req.params.account_id});
          
            newFollow.save((error, follow) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(follow);
                }
            })
        }
    }))
}

exports.getAFollow = (req, res) => {
    Follow.findById(req.params.follow_id, (error, follow) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(follow);
        }
    })
}

exports.updateAFollow = (req, res) => {
    Follow.findByIdAndUpdate(req.params.follow_id, req.body, { new: true }, (error, follow) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(follow);
        }
    })
}


exports.deleteAFollow = (req, res) => {
    Follow.findByIdAndRemove(req.params.follow_id, (error) => {
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
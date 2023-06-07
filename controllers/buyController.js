const Buy = require('../models/buyModel');
const Production = require('../models/productionModel');
const Account = require('../models/accountModel');

exports.listAllBuys = (req, res) => {
    Buy.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, buys) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(buys);
        }
    })
}

exports.createABuy = (req, res) => {
    Production.findById(req.prams.production_id, (error, production),
    Account.findById(req.prams.account_id, (error, account)   => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newBuy = new Buy({...req.body, production_id: req.params.production_id, account_id: req.params.account_id});
          
            newBuy.save((error, buy) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(buy);
                }
            })
        }
    }))
}

exports.getABuy = (req, res) => {
    Buy.findById(req.params.buy_id, (error, buy) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(buy);
        }
    })
}

exports.updateABuy = (req, res) => {
    Buy.findByIdAndUpdate(req.params.buy_id, req.body, { new: true }, (error, buy) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(buy);
        }
    })
}
const jwt = require('jsonwebtoken');

 
exports.accountRegister = (req, res) => {
    let newAccount = new Account (req.body);

    newAccount.save((error, account) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            res.status(201);
            res.json({ message: `Utilisateur créé : ${account.email}`});
        }
    })
}

exports.loginRegister = (req, res) => {
    //find account
    Account.findOne({email : req.body.email}, (error, account) => {
        if (error || account == null) {
            res.status(500);
            console.log(error);
            res.json({ message: "Utilisateur inconnu." });
        }
        else {
            //account found
            if(account.email == req.body.email && account.password == req.body.password) {
                let accountData = {
                    id: account._id,
                    emaim: account.email,
                    role: "admin"
                }
                jwt.sign(accountData, process.env.JWT_KEY, {expiresIn : "30days"}, (error, token) => {
                    if (error) {
                        res.status(500);
                        console.log(error);
                        res.json({ message: "Impossible de générer le token." });
                    }
                    else {
                        res.status(200);
                        res.json({token})
                    }
                })
            }
            else{
                res.status(401);
                console.log(error);
                res.json({message: "Email ou mot de passe incorrect"})
            }
        }
    })
}

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
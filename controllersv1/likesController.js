exports.listAllLikes = (req, res) => {
    Like.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, likes) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(likes);
        }
    })
}

exports.createALike = (req, res) => {
    Production.findById(req.prams.production_id, (error, production),
    Account.findById(req.prams.account_id, (error, account)   => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newLike = new Like({...req.body, production_id: req.params.production_id, account_id: req.params.account_id});
          
            newLike.save((error, like) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(like);
                }
            })
        }
    }))
}

exports.getALike = (req, res) => {
    Like.findById(req.params.like_id, (error, like) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(like);
        }
    })
}

exports.updateALike = (req, res) => {
    Like.findByIdAndUpdate(req.params.like_id, req.body, { new: true }, (error, like) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(like);
        }
    })
}


exports.deleteALike = (req, res) => {
    Like.findByIdAndRemove(req.params.like_id, (error) => {
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
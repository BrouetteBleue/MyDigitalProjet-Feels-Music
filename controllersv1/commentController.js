exports.listAllComments = (req, res) => {
    Comment.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, comments) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." }); 
        }
        else {
            res.status(200);
            res.json(comments);
        }
    })
}

exports.createAComment = (req, res) => {
    Production.findById(req.prams.production_id, (error, production),
    Account.findById(req.prams.account_id, (error, account)   => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newComment = new Comment({...req.body, production_id: req.params.production_id, account_id: req.params.account_id});
          
            newComment.save((error, comment) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(comment);
                }
            })
        }
    }))
}

exports.getAComment = (req, res) => {
    Comment.findById(req.params.comment_id, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.updateAComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true }, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.deleteAComment = (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Commentaire supprimé"});
        }
    })
} 
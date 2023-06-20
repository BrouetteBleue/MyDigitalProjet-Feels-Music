
exports.listAllChats = (req, res) => {
    Chat.find({account_id: req.params.account_id}, (error, chats) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(chats);
        }
    })
}

exports.createAChat = (req, res) => {
    Account.findById(req.prams.account_id, (error, posts) => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newChat = new Chat({...req.body, account_id: req.params.account_id});
          
            newChat.save((error, chat) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(chat);
                }
            })
        }
    })
}

exports.getAChat = (req, res) => {
    Chat.findById(req.params.chat_id, (error, chat) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(chat);
        }
    })
}

exports.updateAChat = (req, res) => {
    Chat.findByIdAndUpdate(req.params.chat_id, req.body, { new: true }, (error, chat) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(chat);
        }
    })
}

exports.deleteAChat = (req, res) => {
    Chat.findByIdAndRemove(req.params.chat_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json({message: "Conversation supprimé"});
        }
    })
}
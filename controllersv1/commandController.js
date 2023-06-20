
exports.listAllCommands = (req, res) => {
    Command.find({production_id: req.params.production_id, account_id: req.params.account_id}, (error, commands) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(commands);
        }
    })
}

exports.createACommand = (req, res) => {
    Production.findById(req.prams.production_id, (error, production),
    Account.findById(req.prams.account_id, (error, account)   => {
        if (error) {
            res.status(401);
            console.log(error);
            res.json({ message: "Reqûete invalide." });
        }
        else {
            let newCommand = new Command({...req.body, production_id: req.params.production_id, account_id: req.params.account_id});
          
            newCommand.save((error, command) => {
                if (error) {
                    res.status(401);
                    console.log(error);
                    res.json({ message: "Reqûete invalide." });
                }
                else {
                    res.status(201);
                    res.json(command);
                }
            })
        }
    }))
}

exports.getACommand = (req, res) => {
    Command.findById(req.params.command_id, (error, command) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(command);
        }
    })
}

exports.updateACommand = (req, res) => {
    Command.findByIdAndUpdate(req.params.command_id, req.body, { new: true }, (error, command) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({ message: "Erreur serveur." });
        }
        else {
            res.status(200);
            res.json(command);
        }
    })
}
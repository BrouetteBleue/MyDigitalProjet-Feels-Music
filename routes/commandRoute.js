const express = require('express');
module.exports = (server) => {
    
    const commandController = require("../controllers/commandController");
    
    server.route("/accounts/:account_id/commands")
    .get(commandController.listAllCommands)
    .post(commandController.createACommand);

    server.route("/commands/:command_id") // req.params.command_id
    .get(commandController.getACommand)
    .put(commandController.updateACommand)
    .delete(commandController.deleteACommand)
}
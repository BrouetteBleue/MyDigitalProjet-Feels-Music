'use strict';
const Command = require('../models/commandModel');

exports.findAll = function(req, res){
    Command.findAll(function(err, command){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', command);
        res.send(command);
    });
};

exports.create = function(req, res) {
    const new_command = new Command(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Command.create(new_command, function(err, command) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Compte créé !",data:command});
        });
    }
};

exports.findById = function(req, res) {
    Command.findById(req.params.id, function(err, command) {
      if (err)
      res.send(err);
      res.json(command);
    });
};
    
exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Command.update(req.params.id, new Command(req.body), function(err, command) {
       if (err)
       res.send(err);
       res.json({ error:false, message: 'Compte modifié' });
    });
    }
};

exports.delete = function(req, res) {
    Command.delete( req.params.id, function(err, command) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Compte supprimé' });
    });
};
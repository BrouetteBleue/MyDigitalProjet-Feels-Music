'use strict';
const Chat = require('../models/chatModel');

exports.findAll = function(req, res){
    Chat.findAll(function(err, chat){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', chat);
        res.send(chat);
    });
};

exports.create = function(req, res) {
    const new_chat = new Chat(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Chat.create(new_chat, function(err, chat) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Chat créé !",data:chat});
        });
    }
};

exports.findById = function(req, res) {
    Chat.findById(req.params.id, function(err, chat) {
      if (err)
      res.send(err);
      res.json(chat);
    });
};

exports.delete = function(req, res) {
    Chat.delete( req.params.id, function(err, chat) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Chat supprimé' });
    });
};
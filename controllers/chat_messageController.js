'use strict';
const Chat_message = require('../models/chat_messageModel');

exports.findAll = function(req, res){
    Chat_message.findAll(function(err, chat_message){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', chat_message);
        res.send(chat_message);
    });
};

exports.create = function(req, res) {
    const new_chat_message = new Chat_message(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Chat_message.create(new_chat_message, function(err, chat_message) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Message créé !",data:chat_message});
        });
    }
};

exports.findById = function(req, res) {
    Chat_message.findById(req.params.id, function(err, chat_message) {
      if (err)
      res.send(err);
      res.json(chat_message);
    });
};
    
exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Chat_message.update(req.params.id, new Chat_message(req.body), function(err, chat_message) {
       if (err)
       res.send(err);
       res.json({ error:false, message: 'Message modifié' });
    });
    }
};

exports.delete = function(req, res) {
    Chat_message.delete( req.params.id, function(err, chat_message) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Message supprimé' });
    });
};
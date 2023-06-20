'use strict';
const Like = require('../models/likeModel');

exports.findAll = function(req, res){
    Like.findAll(function(err, like){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', like);
        res.send(like);
    });
};

exports.create = function(req, res) {
    const new_like = new Like(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Like.create(new_like, function(err, like) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Like créé !",data:like});
        });
    }
};

exports.findById = function(req, res) {
    Like.findById(req.params.id, function(err, like) {
      if (err)
      res.send(err);
      res.json(like);
    });
};

exports.delete = function(req, res) {
    Like.delete( req.params.id, function(err, like) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Like supprimé' });
    });
};
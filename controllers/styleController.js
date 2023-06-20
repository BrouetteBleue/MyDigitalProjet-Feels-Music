'use strict';
const Style = require('../models/styleModel');

exports.findAll = function(req, res){
    Style.findAll(function(err, style){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', style);
        res.send(style);
    });
};

exports.create = function(req, res) {
    const new_style = new Style(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Style.create(new_style, function(err, style) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Style créé !",data:style});
        });
    }
};

exports.findById = function(req, res) {
    Style.findById(req.params.id, function(err, style) {
      if (err)
      res.send(err);
      res.json(style);
    });
};
    
exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Style.update(req.params.id, new Style(req.body), function(err, style) {
       if (err)
       res.send(err);
       res.json({ error:false, message: 'Style modifié' });
    });
    }
};

exports.delete = function(req, res) {
    Style.delete( req.params.id, function(err, style) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Style supprimé' });
    });
};
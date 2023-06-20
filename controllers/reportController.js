'use strict';
const Report = require('../models/reportModel');

exports.findAll = function(req, res){
    Report.findAll(function(err, report){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', report);
        res.send(report);
    });
};

exports.create = function(req, res) {
    const new_report = new Report(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Report.create(new_report, function(err, report) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Report créé !",data:report});
        });
    }
};

exports.findById = function(req, res) {
    Report.findById(req.params.id, function(err, report) {
      if (err)
      res.send(err);
      res.json(report);
    });
};
    
exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Report.update(req.params.id, new Report(req.body), function(err, report) {
       if (err)
       res.send(err);
       res.json({ error:false, message: 'Report modifié' });
    });
    }
};

exports.delete = function(req, res) {
    Report.delete( req.params.id, function(err, report) {
      if (err)
      res.send(err);
      res.json({ error:false, message: "Report supprimé" });
    });
};
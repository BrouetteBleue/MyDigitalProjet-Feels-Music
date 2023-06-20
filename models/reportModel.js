'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Report object create
var Report = function(report){
    this.title          = report.motif;
    this.like           = report.description;
    this.created_at     = new Date();
    this.modified       = new Date();
};

Report.create = function (newReport, result) {
    dbfeelsmusic.query("INSERT INTO report set ?", newReport, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Report.findById = function (id, result) {
    dbfeelsmusic.query("Select * from report where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Report.findAll = function (result) {
    dbfeelsmusic.query("Select * from report", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('report : ', res);
            result(null, res);
        }
    });
};

Report.update = function(id, report, result){
    dbfeelsmusic.query("UPDATE report SET motif=?, description=? WHERE id = ?", [report.motif,report.description, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Report.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM report WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Report;
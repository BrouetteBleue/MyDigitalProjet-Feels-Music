'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Command object create
var Command = function(command){
  this.total           = style.total;
  this.created_at     = new Date();
};

Command.create = function (newComd, result) {
    dbfeelsmusic.query("INSERT INTO command set ?", newComd, function (err, res) {
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

Command.findById = function (id, result) {
    dbfeelsmusic.query("Select * from command where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Command.findAll = function (result) {
    dbfeelsmusic.query("Select * from command", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('command : ', res);
            result(null, res);
        }
    });
};

Command.update = function(id, command, result){
    dbfeelsmusic.query("UPDATE command SET total=? WHERE id = ?", [command.total, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Command.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM command WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Command;
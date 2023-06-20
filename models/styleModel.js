'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Style object create
var Style = function(style){
  this.name           = style.name;
  this.created_at     = new Date();
  this.modified       = new Date();
};

Style.create = function (newStyle, result) {
    dbfeelsmusic.query("INSERT INTO style set ?", newStyle, function (err, res) {
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

Style.findById = function (id, result) {
    dbfeelsmusic.query("Select * from style where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Style.findAll = function (result) {
    dbfeelsmusic.query("Select * from style", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('style : ', res);
            result(null, res);
        }
    });
};

Style.update = function(id, style, result){
    dbfeelsmusic.query("UPDATE style SET name=? WHERE id = ?", [style.name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Style.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM style WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Style;
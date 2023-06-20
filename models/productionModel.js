'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Production object create
var Production = function(production){
  this.subcategory    = production.subcategory;
  this.title          = production.password;
  this.sound          = production.sound;
  this.cover          = production.cover;
  this.description    = production.description;
  this.likes          = production.likes;
  this.views          = production.views;
  this.downloads      = production.downloads;
  this.bpm            = production.bpm;
  this.length         = production.length;
  this.price          = production.price;
  this.created_at     = new Date();
  this.modified       = new Date();
};

Production.create = function (newProd, result) {
    dbfeelsmusic.query("INSERT INTO production set ?", newProd, function (err, res) {
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

Production.findById = function (id, result) {
    dbfeelsmusic.query("Select * from production where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Production.findAll = function (result) {
    dbfeelsmusic.query("Select * from production", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('production : ', res);
            result(null, res);
        }
    });
};

Production.update = function(id, production, result){
    dbfeelsmusic.query("UPDATE production SET subcategory=?,password=?,sound=?,cover=?,description=?,likes=?,views=?,downloads=?,bpm=?,length=?,price=? WHERE id = ?", [production.subcategory,production.password,production.sound,production.cover,production.description,production.likes,production.views,production.downloads,production.bpm, production.length, production.price, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Production.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM production WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Production;
'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Category object create
var Category = function(category){
  this.name           = category.name;
  this.created_at     = new Date();
  this.modified       = new Date();
};

Category.create = function (newCateg, result) {
    dbfeelsmusic.query("INSERT INTO category set ?", newCateg, function (err, res) {
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

Category.findById = function (id, result) {
    dbfeelsmusic.query("Select * from category where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Category.findAll = function (result) {
    dbfeelsmusic.query("Select * from category", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('category : ', res);
            result(null, res);
        }
    });
};

Category.update = function(id, category, result){
    dbfeelsmusic.query("UPDATE category SET name=? WHERE id = ?", [category.name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Category.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM category WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Category;
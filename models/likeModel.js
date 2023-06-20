'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Like object create
var Like = function(like){
  this.created_at     = new Date();
};

Like.create = function (newLike, result) {
    dbfeelsmusic.query("INSERT INTO like set ?", newLike, function (err, res) {
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

Like.findById = function (id, result) {
    dbfeelsmusic.query("Select * from like where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Like.findAll = function (result) {
    dbfeelsmusic.query("Select * from like", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('like : ', res);
            result(null, res);
        }
    });
};

Like.update = function(id, like, result){
    dbfeelsmusic.query("UPDATE like SET WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Like.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM like WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Like;
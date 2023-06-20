'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Comment object create
var Comment = function(comment){
  this.message        = comment.message;
  this.created_at     = new Date();
};

Comment.create = function (newCom, result) {
    dbfeelsmusic.query("INSERT INTO comment set ?", newCom, function (err, res) {
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

Comment.findById = function (id, result) {
    dbfeelsmusic.query("Select * from comment where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Comment.findAll = function (result) {
    dbfeelsmusic.query("Select * from comment", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('comment : ', res);
            result(null, res);
        }
    });
};

Comment.update = function(id, comment, result){
    dbfeelsmusic.query("UPDATE comment SET message=? WHERE id = ?", [comment.mesage, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Comment.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM comment WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Comment;
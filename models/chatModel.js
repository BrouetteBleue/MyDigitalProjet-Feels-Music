'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Chat object create
var Chat = function(chat){
  this.created_at     = new Date();
};

Chat.create = function (newChat, result) {
    dbfeelsmusic.query("INSERT INTO chat set ?", newChat, function (err, res) {
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

Chat.findById = function (id, result) {
    dbfeelsmusic.query("Select * from chat where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Chat.findAll = function (result) {
    dbfeelsmusic.query("Select * from chat", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('chat : ', res);
            result(null, res);
        }
    });
};

Chat.update = function(id, chat, result){
    dbfeelsmusic.query("UPDATE chat SET WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Chat.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM chat WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Chat;
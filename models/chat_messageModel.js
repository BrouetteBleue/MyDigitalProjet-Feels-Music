'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Chat_message object create
var Chat_message = function(chat_message){
  this.message           = chat_message.message;
  this.created_at     = new Date();
};

Chat_message.create = function (newChatm, result) {
    dbfeelsmusic.query("INSERT INTO chat_message set ?", newChatm, function (err, res) {
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

Chat_message.findById = function (id, result) {
    dbfeelsmusic.query("Select * from chat_message where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Chat_message.findAll = function (result) {
    dbfeelsmusic.query("Select * from chat_message", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('chat_message : ', res);
            result(null, res);
        }
    });
};

Chat_message.update = function(id, chat_message, result){
    dbfeelsmusic.query("UPDATE chat_message SET message=? WHERE id = ?", [chat_message.mesage, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Chat_message.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM chat_message WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Chat_message;
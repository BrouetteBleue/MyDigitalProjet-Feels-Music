'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Playlist object create
var Playlist = function(playlist){
    this.title          = playlist.title;
    this.like           = playlist.like;
    this.created_at     = new Date();
    this.modified       = new Date();
};

Playlist.create = function (newPlay, result) {
    dbfeelsmusic.query("INSERT INTO playlist set ?", newPlay, function (err, res) {
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

Playlist.findById = function (id, result) {
    dbfeelsmusic.query("Select * from playlist where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Playlist.findAll = function (result) {
    dbfeelsmusic.query("Select * from playlist", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('playlist : ', res);
            result(null, res);
        }
    });
};

Playlist.update = function(id, playlist, result){
    dbfeelsmusic.query("UPDATE playlist SET title=?, like=? WHERE id = ?", [playlist.title,playlist.like, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Playlist.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM playlist WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Playlist;
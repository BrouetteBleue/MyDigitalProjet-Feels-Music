'use strict';
var dbfeelsmusic = require('./../../config/database.js');

//Playlist_song object create
var Playlist_song = function(playlist_song){
    this.created_at     = new Date();
    this.modified     = new Date();
};

Playlist_song.create = function (newPlays, result) {
    dbfeelsmusic.query("INSERT INTO playlist_song set ?", newPlays, function (err, res) {
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

Playlist_song.findById = function (id, result) {
    dbfeelsmusic.query("Select * from playlist_song where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Playlist_song.findAll = function (result) {
    dbfeelsmusic.query("Select * from playlist_song", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('playlist_song : ', res);
            result(null, res);
        }
    });
};

Playlist_song.update = function(id, playlist_song, result){
    dbfeelsmusic.query("UPDATE playlist_song SET WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Playlist_song.delete = function(id, result){
    dbfeelsmusic.query("DELETE FROM playlist_song WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Playlist_song;
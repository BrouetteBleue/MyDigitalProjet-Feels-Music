'use strict';
const Playlist_song = require('../models/playlist_songModel');

exports.findAll = function(req, res){
    Playlist_song.findAll(function(err, playlist_song){
        console.log('controller')
        if (err)
        res.send(err);
        console.log('res', playlist_song);
        res.send(playlist_song);
    });
};

exports.create = function(req, res) {
    const new_playlist_song = new Playlist_song(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Playlist_song.create(new_playlist_song, function(err, playlist_song) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Playlist de sons créé !",data:playlist_song});
        });
    }
};

exports.findById = function(req, res) {
    Playlist_song.findById(req.params.id, function(err, playlist_song) {
      if (err)
      res.send(err);
      res.json(playlist_song);
    });
};
    
exports.update = function(req, res) {
      if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
      }else{
        Playlist_song.update(req.params.id, new Playlist_song(req.body), function(err, playlist_song) {
       if (err)
       res.send(err);
       res.json({ error:false, message: 'Playlist de sons modifié' });
    });
    }
};

exports.delete = function(req, res) {
    Playlist_song.delete( req.params.id, function(err, playlist_song) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Playlist de sons supprimé' });
    });
};
module.exports = (server) => {
    
    const playlist_songController = require("../controllers/playlist_songController");
    
    server.route("/accounts/:account_id/playlist_songs")
    .get(playlist_songController.listAllplaylist_songs)
    .post(playlist_songController.createAplaylist_song);

    server.route("/playlist_songs/:playlist_song_id") // req.params.playlist_song_id
    .get(playlist_songController.getAplaylist_song)
    .put(playlist_songController.updateAplaylist_song)
    .delete(playlist_songController.deleteAplaylist_song)
}
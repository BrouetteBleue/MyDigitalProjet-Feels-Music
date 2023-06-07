module.exports = (server) => {
    
    const playlist_songController = require("../controllers/playlist_songController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/accounts/:account_id/playlist_songs")
    .get(playlist_songController.listAllplaylist_songs)
    .post(jwtMiddleware.verifyToken, playlist_songController.createAplaylist_song);

    server.route("/playlist_songs/:playlist_song_id") // req.params.playlist_song_id
    .get(jwtMiddleware.verifyToken, playlist_songController.getAplaylist_song)
    .put(jwtMiddleware.verifyToken, playlist_songController.updateAplaylist_song)
    .delete(jwtMiddleware.verifyToken, playlist_songController.deleteAplaylist_song)
}
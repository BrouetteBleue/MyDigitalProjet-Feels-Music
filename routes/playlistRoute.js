module.exports = (server) => {
    
    const playlistController = require("../controllers/playlistController");
    
    server.route("/accounts/:account_id/playlists")
    .get(playlistController.listAllPlaylists)
    .post(playlistController.createAPlaylist);

    server.route("/playlists/:playlist_id") // req.params.playlist_id
    .get(playlistController.getAPlaylist)
    .put(playlistController.updateAPlaylist)
    .delete(playlistController.deleteAPlaylist)
}
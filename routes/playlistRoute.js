module.exports = (server) => {
    
    const playlistController = require("../controllers/playlistController");
    const jwtMiddleware = require("../middlewares/jwtmiddleware");
    
    server.route("/accounts/:account_id/playlists")
    .get(playlistController.listAllPlaylists)
    .post(jwtMiddleware.verifyToken, playlistController.createAPlaylist);

    server.route("/playlists/:playlist_id") // req.params.playlist_id
    .get(jwtMiddleware.verifyToken, playlistController.getAPlaylist)
    .put(jwtMiddleware.verifyToken, playlistController.updateAPlaylist)
    .delete(jwtMiddleware.verifyToken, playlistController.deleteAPlaylist)
}
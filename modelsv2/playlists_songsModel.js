const mysql = require("mysql");
const Schema = mysql.Schema;

let playlistSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    }
});
module.exports = mysql.model('Playlist', playlistSchema);
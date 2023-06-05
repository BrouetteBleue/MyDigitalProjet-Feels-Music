const mysql = require("mysql");
const Schema = mysql.Schema;

let likesSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mysql.model('Likes', likesSchema);
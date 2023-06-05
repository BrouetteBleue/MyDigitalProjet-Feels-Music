const mysql = require("mysql");
const Schema = mysql.Schema;

let chatSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mysql.model('Chat', chatSchema);
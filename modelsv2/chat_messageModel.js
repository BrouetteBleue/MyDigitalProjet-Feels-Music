const mysql = require("mysql");
const Schema = mysql.Schema;

let chat_messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mysql.model('Chat_message', chat_messageSchema);
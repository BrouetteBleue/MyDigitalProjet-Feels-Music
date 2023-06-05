const mysql = require("mysql");
const Schema = mysql.Schema;

let commentSchema = new Schema({
    message: {
        type: Text,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    }
});
module.exports = mysql.model('Comment', commentSchema);
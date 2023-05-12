const mysql = require("mysql");
const Schema = mysql.Schema;

let commentSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },
    comment_id: {
        type: String
    },
    production_id: {
        type: String
    },
    compte_id: {
        type: String
    }
});
module.exports = mysql.model('Comment', commentSchema);
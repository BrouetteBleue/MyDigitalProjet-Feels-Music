const mysql = require("mysql");
const Schema = mysql.Schema;

let commandSchema = new Schema({
    total: {
        type: Number,
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
module.exports = mysql.model('Command', commandSchema);
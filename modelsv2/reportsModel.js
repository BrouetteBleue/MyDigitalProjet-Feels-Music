const mysql = require("mysql");
const Schema = mysql.Schema;

let reportsSchema = new Schema({
	motif: {
        type: Enumerator,
        required: true
    },
	description: {
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
module.exports = mysql.model('Reports', reportsSchema);
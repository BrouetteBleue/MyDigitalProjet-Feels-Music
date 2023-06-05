const mysql = require("mysql");
const Schema = mysql.Schema;

let categorySchema = new Schema({
    name: {
        type: Enumerator,
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
module.exports = mysql.model('Category', categorySchema);
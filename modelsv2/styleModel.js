const mysql = require("mysql");
const Schema = mysql.Schema;

let styleSchema = new Schema({
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
module.exports = mysql.model('Style', styleSchema);
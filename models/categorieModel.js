const mysql = require("mysql");
const Schema = mysql.Schema;

let categorieSchema = new Schema({
    name: {
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
    categorie_id: {
        type: String
    }
});
module.exports = mysql.model('Categorie', categorieSchema);
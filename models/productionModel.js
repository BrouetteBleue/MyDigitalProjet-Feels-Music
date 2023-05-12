const mysql = require("mysql");
const Schema = mysql.Schema;

let productionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    sound: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
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
    },
    production_id: {
        type: String
    },
    compte_id: {
        type: String
    },
    categorie_id: {
        type: String
    }
});
module.exports = mysql.model('Production', productionSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
module.exports = mongoose.model('Categorie', categorieSchema);
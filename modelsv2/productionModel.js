const mysql = require("mysql");
const Schema = mysql.Schema;

let productionSchema = new Schema({
    subcategory: {
        type: Text
    },
    title: {
        type: String,
        required: true
    },
    sound: {
        type: String,
        required: true
    },
    cover: {
        type: String
    },
    description: {
        type: Text
    },
    likes: {
        type: Number
    },
    views: {
        type: Number
    },
    downloads: {
        type: Number
    },
    bpm: {
        type: Number
    },
    length: {
        type: String
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
    }
});
module.exports = mysql.model('Production', productionSchema);
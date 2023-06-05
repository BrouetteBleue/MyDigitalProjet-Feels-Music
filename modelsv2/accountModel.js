const mysql = require("mysql");
const Schema = mysql.Schema;

let accountSchema = new Schema({
    role: {
        type: Boolean,
        required: true
    },
    pseudo: {
        type: String,
        required: true
    },
	password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    },
	email: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    photo: {
        type: String
    },
    insta: {
        type: String
    },
    open_to_work: {
        type: Boolean,
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
module.exports = mysql.model('Account', accountSchema);
const mysql = require("mysql");
const Schema = mysql.Schema;

let compteSchema = new Schema({
    role: {
        type: String,
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
        type: String,
        required: true
    },
	email: {
        type: String,
        required: true
    },
    country: {
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
    compte_id: {
        type: String
    }
});
module.exports = mysql.model('Compte', compteSchema);
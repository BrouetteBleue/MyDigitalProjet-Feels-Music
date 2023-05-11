const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let followSchema = new Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    follow_id: {
        type: String
    },
    production_id: {
        type: String
    },
    compte_id: {
        type: String
    }
});
module.exports = mongoose.model('Follow', followSchema);
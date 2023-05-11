const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let buySchema = new Schema({
    total: {
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
    buy_id: {
        type: String
    },
    compte_id: {
        type: String
    },
    production_id: {
        type: String
    }
});
module.exports = mongoose.model('Buy', buySchema);
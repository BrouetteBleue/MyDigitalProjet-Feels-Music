const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let chatSchema = new Schema({
    message: {
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
    chat_id: {
        type: String
    },
    compte_id: {
        type: String
    },
    compte_id_2: {
        type: String
    }
});
module.exports = mongoose.model('Chat', chatSchema);
module.exports = (server) => {
    
    const chat_messageController = require("../controllers/chat_messageController");
    
    server.route("/posts/:post_id/chat_messages")
    .get(chat_messageController.listAllchat_messages)
    .post(chat_messageController.createAchat_message);

    server.route("/chat_messages/:chat_message_id") // req.params.chat_message_id
    .get(chat_messageController.getAchat_message)
    .put(chat_messageController.updateAchat_message)
    .delete(chat_messageController.deleteAchat_message)
}
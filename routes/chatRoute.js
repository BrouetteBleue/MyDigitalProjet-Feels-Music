module.exports = (server) => {
    
    const chatController = require("../controllers/chatController");
    
    server.route("/posts/:post_id/chats")
    .get(chatController.listAllChats)
    .post(chatController.createAChat);

    server.route("/chats/:chat_id") // req.params.chat_id
    .get(chatController.getAChat)
    .put(chatController.updateAChat)
    .delete(chatController.deleteAChat)
}
const ChatService = require('../services/chat.service');
class ChatController {
    async send(req, res) {
        const {user, project, text} = req.body;
        try {
            const data = await ChatService.send({user, project, text});
            res.json(data);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

    async find(req, res) {
        const {id} = req.params;
        try {
            const data = await ChatService.find(id);
            res.json(data);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }

}

module.exports = new ChatController();

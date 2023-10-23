const Message = require('../models/Message.model');

class MessageService {
    async send(data) {
        return await Message.create(data)
    }

    async find(project) {
        return await Message.find({project}).populate('user')
    }


}

module.exports = new MessageService();

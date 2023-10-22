const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const required = true
const schema = new mongoose.Schema({
    projectId: {
        type: Schema.Types.ObjectId, ref:'Project', required
    },
    userId: {
        type: Schema.Types.ObjectId, ref:'User', required
    },
    status: {
        type: String, enum: ['new', 'allowed', 'forbidden'], required
    },
});

module.exports = mongoose.model('ProjectParticipantRequest', schema);

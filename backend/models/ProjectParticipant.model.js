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



});

module.exports = mongoose.model('ProjectParticipant', schema);

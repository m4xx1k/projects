const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const required = true;

const schema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required
    }, project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required
    }, text: {
        type: String,
        ref: 'Project',
        required
    },
}, {timestamps: true});

module.exports = mongoose.model('Message', schema);

const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const required = true;

const ProjectComplexity = ["easy", "medium", "hard"];
const ProjectStatus = ["open", "in_progress", "completed", "archived"];

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required
    },

    description: {
        type: String,
        required
    },

    complexity: {
        type: String,
        enum: ProjectComplexity,
        required
    },

    developmentTime: {
        type: Number,
        required
    },

    subjectArea: {
        type: String,
        required
    },
    stack: {
        type: String,
        required
    },

    participantsCount: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ProjectStatus,
        default: "open"
    },

    link: {
        type: String,
        required
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required
    }

});

module.exports = mongoose.model('Project', projectSchema);

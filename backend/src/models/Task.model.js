const {Schema, model} = require("mongoose");

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    deadline: {
        type: Date, required: true
    },
    complexity: {
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    urgency: {
        type: String,
        enum: ["low", "medium", "high"],
        required: true,
    },
    status: {
        type: String,
        enum: ["open", "in_progress", "done"],
        required: true,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required:true
    }
}, {timestamps: true});


module.exports = model("Task", TaskSchema);

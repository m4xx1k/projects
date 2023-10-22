const Task = require("../models/Task.model");

class TaskService {
    async create(taskData) {
        return await Task.create(taskData);
    }

    async find(filter) {
        return await Task.find(filter);
    }

    async findById(id) {
        return await Task.findById(id);
    }

    async findOne(filter) {
        return await Task.findOne(filter);
    }


    async update(id, updateData) {
        return await Task.findByIdAndUpdate(id, updateData);
    }

    async delete(id) {
        return await Task.findByIdAndDelete(id);
    }

    async assignTask({id, userId}) {
        return await this.update(id, {assignTo: userId})
    }

}

module.exports = new TaskService();

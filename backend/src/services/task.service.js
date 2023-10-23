const Task = require("../models/Task.model");
const TaskDeclined = require("../models/TaskDeclined.model");
const projectParticipantsService = require("./projectParticipant.service");

class TaskService {
    async create(taskData) {
        return await Task.create(taskData);
    }

    async filter(filter) {
        return await Task.find(filter).populate('assignedTo')
    }

    async findById(id) {
        return await Task.findById(id).populate('assignedTo');
    }

    async findOne(filter) {
        return await Task.findOne(filter);
    }


    async update({id, data}) {
        return await Task.findByIdAndUpdate(id, data);
    }

    async decline(data) {
        return await TaskDeclined.create(data);
    }

    async findDeclined(filter) {
        return await TaskDeclined.find(filter);
    }

    async findProjectTasks({user, project, filter}) {
        const req = {project}
        if (filter) {
            if (filter.assignedTo) req.assignedTo = filter.assignedTo
            if (filter.urgency) req.urgency = filter.urgency
            if (filter.complexity) req.complexity = filter.complexity
            if (filter.status) req.status = filter.status
        }
        let all = await Task.find(req).populate('assignedTo');
        let notDeclined = [];
        let declined = [];

        if (user) {
            declined = await TaskDeclined.find({project, user}).populate('task');
            const declinedTasksIds = declined.map(({task}) => task._id.toString())
            notDeclined = all.filter(task => {
                return !declinedTasksIds.includes(task._id.toString())
            })

        }

        return {all, notDeclined, declined};
    }

    async findFullProjectTasks({creator, user, project, filter}) {
        const participants = await projectParticipantsService.findAllProjectParticipants(project)
        const isCreator = user === creator
        const isParticipant = participants.some(participant => participant.userId._id.toString() === user)
        const requestForTasks = {project}
        if (isParticipant) requestForTasks.user = user
        if (filter) requestForTasks.filter = filter
        const tasks = await this.findProjectTasks(requestForTasks)
        const usersTask = tasks.notDeclined.find(task => {
            return task.assignedTo?._id.toString() === user
        })
        return {tasks, isCreator, isParticipant, usersTask, participants}


    }


    async delete(id) {
        return await Task.findByIdAndDelete(id);
    }

    async assignTask({task, user}) {
        return await this.update({
            id: task,
            data: {
                assignedTo: user
            }
        })
    }

}

module.exports = new TaskService();

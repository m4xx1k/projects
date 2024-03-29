const Project = require('../models/Project.model');
const Task = require('../models/Task.model');
const TaskDeclined = require('../models/TaskDeclined.model');
const Message = require('../models/Message.model');
const ProjectParticipant = require('../models/ProjectParticipant.model')
const ProjectParticipantRequest = require('../models/ProjectParticipantRequest.model')

class ProjectService {
    static async create(projectData) {
        const project = await Project.create({...projectData, participantsCount: 1});
        await ProjectParticipant.create({projectId: project._id, userId: projectData.userId})
        return project
    }

    static async get(id) {
        const project = await Project.findById(id);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    }

    static async update(id, projectData) {
        const project = await Project.findByIdAndUpdate(id, projectData);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    }
    static async find(data){
        return await Project.find(data)
    }
    static async delete(id) {
        await Project.findByIdAndDelete(id);
        await ProjectParticipantRequest.deleteMany({project: id})
        await ProjectParticipant.deleteMany({projectId: id})
        await Task.deleteMany({project: id})
        await TaskDeclined.deleteMany({project: id})
        await Message.deleteMany({project: id})
        return true
    }

    static async list(filter) {
        if (filter) {
            const {participants, developmentTime: development, status} = filter
            const participantsCount = {}
            const developmentTime = {}
            if (!Number.isNaN(participants[0])) participantsCount.$gte = participants[0]
            if (!Number.isNaN(participants[1])) participantsCount.$lte = participants[1]

            if (!Number.isNaN(development[0])) developmentTime.$gte = development[0]
            if (!Number.isNaN(development[1])) developmentTime.$lte = development[1]
            const req = {participantsCount, developmentTime}
            if (status && status !== "Всі") req.status = status
            return await Project.find(req)

        } else {
            return await Project.find();
        }

    }
}

module.exports = ProjectService;

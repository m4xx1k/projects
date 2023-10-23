const ProjectParticipantRequest = require('../models/ProjectParticipantRequest.model');
const ProjectParticipant = require('../models/ProjectParticipant.model');
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');

class ProjectParticipantService {
    static async request(data) {
        const checkRequestExist = await ProjectParticipantRequest.find(data)
        if (checkRequestExist?.length) return
        return await ProjectParticipantRequest.create({...data, status: 'new'});
    }

    static async allow(id) {
        const requestData = await ProjectParticipantRequest.findByIdAndUpdate(id, {status: 'allowed'});
        const project = await Project.findById(requestData.projectId)
        await Project.findByIdAndUpdate(requestData.projectId, {participantsCount: project.participantsCount + 1})
        return await ProjectParticipant.create({...requestData.toObject()})
    }

    static async forbid(id) {
        return await ProjectParticipantRequest.findByIdAndUpdate(id, {status: 'forbidden'});
    }

    static async findAllProjectRequests(data) {
        return await ProjectParticipantRequest.find(data).populate('userId')
    }

    static async findAllProjectParticipants(projectId) {
        return await ProjectParticipant.find({projectId}).populate('userId')
    }

    static async availableParticipants(projectId) {
        console.log({projectId})
        const participations = await this.findAllProjectParticipants(projectId)
        const all = await Task.find({project: projectId})
        const allIds = all.map(task => task.assignedTo.toString())
        console.log({allIds})
        return participations.filter(p => {
            const participationId = p.userId._id.toString()
            console.log({participationId})
            return !allIds.includes(participationId)
        })
    }

    static async check({projectId, userId}) {

        return await ProjectParticipant.findOne({projectId, userId})
    }


}

module.exports = ProjectParticipantService;

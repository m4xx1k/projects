const ProjectParticipantService = require('../services/projectParticipant.service');

class ProjectController {
    async request(req, res) {
        const {userId, projectId} = req.body;
        try {
            const request = await ProjectParticipantService.request({userId, projectId});
            res.json({request});
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message});
        }
    }

    async allow(req, res) {
        const {id} = req.params;

        try {
            const request = await ProjectParticipantService.allow(id);
            res.json({request});
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message});
        }
    }

    async forbid(req, res) {
        const {id} = req.params;

        try {
            const request = await ProjectParticipantService.forbid(id);
            res.json({request});
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message});
        }
    }

    async findAllProjectRequests(req, res) {
        const {id} = req.params;
        const {status} = req.query

        try {
            const data = {projectId: id}
            if (status) data.status = status
            const requests = await ProjectParticipantService.findAllProjectRequests(data);
            res.json(requests)
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message});
        }
    }

    async findAllProjectParticipants(req, res) {
        const {id} = req.params;

        try {
            const participants = await ProjectParticipantService.findAllProjectParticipants(id);
            res.json(participants);
        } catch (error) {
            console.log(error)
            res.status(400).json({error: error.message});
        }
    }


}

module.exports = new ProjectController();

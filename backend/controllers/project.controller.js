// controllers/ProjectController.js

const ProjectService = require('../services/project.service');

class ProjectController {
    async create(req, res) {
        const {
            name,
            description,
            complexity,
            developmentTime,
            subjectArea,
            stack,
            participantsCount,
            status,
            link,
            userId
        } = req.body;

        try {
            const project = await ProjectService.create({
                name,
                description,
                complexity,
                developmentTime,
                subjectArea,
                participantsCount,
                status,
                stack,
                link,
                userId
            });
            res.json({project});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async findById(req, res) {
        const {id} = req.params;

        try {
            const project = await ProjectService.get(id);
            res.json({project});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async update(req, res) {
        const {id, data} = req.body;

        try {
            const project = await ProjectService.update(id,data);
            res.json({project});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async delete(req, res) {
        const {id} = req.params;

        try {
            const project = await ProjectService.delete(id);
            res.json({project});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }
    async findAll(req, res) {

        try {
            const projects = await ProjectService.list();
            res.json({projects});
        } catch (error) {
            res.status(400).json({error: error.message});
        }
    }


}

module.exports = new ProjectController();

const Project = require('../models/Project.model');

class ProjectService {
    static async create(projectData) {
        return await Project.create(projectData);
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

    static async delete(id) {
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            throw new Error('Project not found');
        }
        return project;
    }

    static async list() {
        return await Project.find();
    }
}

module.exports = ProjectService;

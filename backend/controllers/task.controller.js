const taskService = require('../services/task.service')

class TaskController {


    async create(req, res) {
        const taskData = req.body;
        try {
            const task = await taskService.create(taskData);
            res.status(201).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async findAll(req, res) {
        const filter = req.query;
        try {
            const tasks = await taskService.find(filter);
            res.status(200).json(tasks);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async findById(req, res) {
        const {id} = req.params;
        try {
            const task = await taskService.findById(id);
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async update(req, res) {
        const {id} = req.params;
        const updateData = req.body;
        try {
            const task = await taskService.update(id, updateData);
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async delete(req, res) {
        const {id} = req.params;
        try {
            const task = await taskService.delete(id);
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }
}

module.exports = new TaskController();

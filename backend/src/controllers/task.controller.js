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

    async filter(req, res) {
        const filter = req.body;
        try {
            const task = await taskService.filter(filter);
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


    async findDeclined(req, res) {
        const filter = req.body;
        try {
            const tasks = await taskService.findDeclined(filter);
            res.status(200).json(tasks);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }
    async findProjectTasks(req, res) {
        const {user, project} = req.body;
        try {
            const tasks = await taskService.findProjectTasks({user, project});
            res.status(200).json(tasks);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async findFullProjectTasks(req, res) {
        const {user, project,creator, filter} = req.body;
        console.log({filter})
        try {
            const tasks = await taskService.findFullProjectTasks({user, project,creator,filter});
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
    async findOne(req, res) {
        const data = req.body;
        try {
            const task = await taskService.findOne(data);
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }

    async update(req, res) {
        const {id, data} = req.body;
        try {
            const task = await taskService.update({id, data});
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }
    async assignTask(req, res) {
        const {task, user} = req.body;
        try {
            const result = await taskService.assignTask({task, user});
            res.status(200).json(result);
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
    async decline(req, res) {
        const data = req.body;
        try {
            const task = await taskService.decline(data);
            res.status(200).json(task);
        } catch (e) {
            console.log(e)
            res.status(400).json({error: e.message});
        }
    }
}

module.exports = new TaskController();

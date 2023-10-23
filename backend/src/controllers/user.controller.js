const UserService = require('../services/user.service');

class AuthController {
    async register(req, res) {
        const {fullname, password, course, specialty, faculty, link, about, email, phone} = req.body;
        try {
            const data = await UserService.register({
                fullname,
                password,
                course,
                specialty,
                faculty,
                link,
                about,
                email,
                phone
            });
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).json({error: error.message});
        }
    }

    async login(req, res) {
        const {email, password} = req.body;

        try {
            const data = await UserService.login({email, password});
            res.json(data);
        } catch (error) {
            console.log(error)
            res.status(500).json({error: error.message});
        }
    }

    async update(req, res) {
        const data = req.body;
        try {
            const user = await UserService.update(data);
            res.json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({error: error.message});
        }
    }
    async delete(req, res) {
        const {id} = req.params;
        try {
            const user = await UserService.delete(id);
            res.json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({error: error.message});
        }
    }

    async findOne(req, res) {
        try {
            const {id} = req.params
            const user = await UserService.findOne(id);

            res.status(200).json(user);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error.message || 'Unauthorized.'});


        }
    }

    async userProjects(req, res) {
        try {
            const {id} = req.params
            const projects = await UserService.userProjects(id);

            res.status(200).json(projects);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error.message || 'Unauthorized.'});


        }
    }

    async userTasks(req, res) {
        try {
            const {id} = req.params
            const tasks = await UserService.userTasks(id);

            res.status(200).json(tasks);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: error.message || 'Unauthorized.'});


        }
    }


}

module.exports = new AuthController();

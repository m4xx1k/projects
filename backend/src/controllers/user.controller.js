// controllers/AuthController.js

const AuthService = require('../services/auth.service');

class AuthController {
    async register(req, res) {
        const {fullname, password, course, specialty, faculty, link, about, email, phone} = req.body;
        try {
            const data = await AuthService.register({
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
            res.status(400).json({error: error.message});
        }
    }

    async login(req, res) {
        const {email, password} = req.body;

        try {
            const data = await AuthService.login({email, password});
            res.json(data);
        } catch (error) {
            res.status(401).json({error: error.message});
        }
    }

    async me(req, res) {
        const {id} = req?.user
        const user = await AuthService.me(id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(401).json({ message: 'Unauthorized.' });
        }
    }
}

module.exports = new AuthController();

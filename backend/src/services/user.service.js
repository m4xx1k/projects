const User = require('../models/User.model');
const Task = require('../models/Task.model');
const ProjectParticipant = require('../models/ProjectParticipant.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UserService {
    async register({password, ...rest}) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({password: hashedPassword, ...rest});
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '8h'});

            return {token, user};
        } catch (e) {
            console.log(e);
        }
    }

    async login({email, password}) {
        const user = await User.findOne({email});
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '8h'});

        return {token, user};
    }

    async findOne(id) {

        return await User.findById(id);
    }

    async userProjects(id) {
        return await ProjectParticipant.find({userId: id}).populate('projectId')
    }

    async userTasks(id) {
        return await Task.find({assignedTo: id}).populate('project')
    }


}

module.exports = new UserService();

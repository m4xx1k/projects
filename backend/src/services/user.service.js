const User = require('../models/User.model');
const Task = require('../models/Task.model');
const ProjectParticipant = require('../models/ProjectParticipant.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const projectService = require('./project.service')

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

    async update(data) {
        let dataToUpdate = data
        if (data?.password) {
            const hashedPassword = await bcrypt.hash(data.password, 10);
            dataToUpdate = {...data, password: hashedPassword}
        } else {
            delete dataToUpdate.password
        }

        const user = await User.findByIdAndUpdate(data._id, dataToUpdate);

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '8h'});

        return {token, user};


    }

    async delete(id) {
        const user = await User.findByIdAndDelete(id)
        const projects = await projectService.find({userId: id})
        console.log({projects})
        for (const project of projects) {
            await projectService.delete(project._id)
        }
        return true
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

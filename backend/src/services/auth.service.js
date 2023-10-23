const User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthService {
    async register({password, ...rest}) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({password: hashedPassword, ...rest});
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8h' });

            return { token, user };
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

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '8h' });

        return { token, user };
    }

    async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    }
    async me(id) {
        return await User.findById(id);
    }


}

module.exports = new AuthService();

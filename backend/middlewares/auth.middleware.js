const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({error: 'Unauthorized'});
        }

        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({error: 'Unauthorized'});
    }
};

module.exports = authMiddleware;

const roleMiddleware = (role) => async (req, res, next) => {
    console.log(req?.user)
    if (req.user.role !== role) {
        return res.status(403).json({ error: 'Forbidden' });
    }

    next();
};

module.exports = roleMiddleware;

const AuthController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require("express");

const router = express.Router();

router.post('/registration', AuthController.register);
router.post('/login', AuthController.login);
router.get('/me', authMiddleware, AuthController.me);
router.get('/', authMiddleware,  (req, res) => {
    res.send('This is a protected route for creators');
});

module.exports = router;


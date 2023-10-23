const AuthController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')
const express = require("express");

const router = express.Router();

router.post('/registration', AuthController.register);
router.post('/login', AuthController.login);
router.put('/update', authMiddleware, AuthController.update);
router.delete('/delete/:id', authMiddleware, AuthController.delete);
router.get('/tasks/:id', AuthController.userTasks);
router.get('/projects/:id', AuthController.userProjects);
router.get('/:id', AuthController.findOne);


module.exports = router;


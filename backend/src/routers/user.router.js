const AuthController = require('../controllers/user.controller');
const express = require("express");

const router = express.Router();

router.post('/registration', AuthController.register);
router.post('/login', AuthController.login);
router.get('/tasks/:id', AuthController.userTasks);
router.get('/projects/:id', AuthController.userProjects);
router.get('/:id', AuthController.findOne);


module.exports = router;


const ProjectController = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require("express");

const router = express.Router();

router.post('/', authMiddleware,ProjectController.create);
router.put('/', authMiddleware,  ProjectController.update);
router.post('/all', ProjectController.findAll);
router.delete('/:id', authMiddleware,  ProjectController.delete);
router.get('/:id', ProjectController.findById);

module.exports = router;


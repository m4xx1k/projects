const ProjectController = require('../controllers/project.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const express = require("express");

const router = express.Router();

router.post('/', authMiddleware, roleMiddleware('creator'), ProjectController.create);
router.put('/', authMiddleware, roleMiddleware('creator'), ProjectController.update);
router.post('/all', ProjectController.findAll);
router.delete('/:id', authMiddleware, roleMiddleware('creator'), ProjectController.delete);
router.get('/:id', ProjectController.findById);

module.exports = router;


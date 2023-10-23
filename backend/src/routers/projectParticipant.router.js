const ProjectParticipantController = require('../controllers/projectParticipant.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const express = require("express");

const router = express.Router();

router.post('/request', authMiddleware, roleMiddleware('participant'), ProjectParticipantController.request);
router.post('/allow/:id', authMiddleware, roleMiddleware('creator'), ProjectParticipantController.allow);
router.post('/forbid/:id', authMiddleware, roleMiddleware('creator'), ProjectParticipantController.forbid);
router.get('/requests/:id', authMiddleware, ProjectParticipantController.findAllProjectRequests);
router.get('/participants/:id', ProjectParticipantController.findAllProjectParticipants);

module.exports = router;


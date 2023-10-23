const ProjectParticipantController = require('../controllers/projectParticipant.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require("express");

const router = express.Router();

router.post('/request', authMiddleware, ProjectParticipantController.request);
router.get('/check/:projectId/:userId', ProjectParticipantController.check);
router.post('/allow/:id', authMiddleware,  ProjectParticipantController.allow);
router.post('/forbid/:id', authMiddleware,  ProjectParticipantController.forbid);
router.get('/requests/:id', authMiddleware, ProjectParticipantController.findAllProjectRequests);
router.get('/participants/:id', ProjectParticipantController.findAllProjectParticipants);
router.get('/availableParticipants/:id', ProjectParticipantController.availableParticipants);

module.exports = router;


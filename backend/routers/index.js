const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const projectRouter = require('./project.router');
const projectParticipantRouter = require('./projectParticipant.router');

router.use('/user', userRouter);
router.use('/project', projectRouter);
router.use('/projectParticipant', projectParticipantRouter);

module.exports = router;

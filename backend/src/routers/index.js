const express = require('express');
const router = express.Router();

const chatRouter = require('./chat.router');
const userRouter = require('./user.router');
const taskRouter = require('./task.router');
const projectRouter = require('./project.router');
const projectParticipantRouter = require('./projectParticipant.router');

router.use('/chat', chatRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);
router.use('/project', projectRouter);
router.use('/projectParticipant', projectParticipantRouter);

module.exports = router;

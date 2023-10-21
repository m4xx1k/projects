const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const projectRouter = require('./project.router');

router.use('/user', userRouter);
router.use('/project', projectRouter);

module.exports = router;

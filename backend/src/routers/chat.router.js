// routes/auth.js

const ChatController = require('../controllers/chat.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const express = require("express");

const router = express.Router();

router.post('/', authMiddleware, ChatController.send);
router.get('/:id', authMiddleware, ChatController.find);

module.exports = router;


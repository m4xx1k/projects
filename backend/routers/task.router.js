const express = require("express");
const TaskController = require('../controllers/task.controller')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post("/", authMiddleware, roleMiddleware('creator'), TaskController.create);

router.get("/", TaskController.findAll);

router.get("/:id", TaskController.findById);

router.put("/:id", authMiddleware, roleMiddleware('creator'), TaskController.update);

router.delete("/:id", authMiddleware, roleMiddleware('creator'), TaskController.delete);
module.exports = router

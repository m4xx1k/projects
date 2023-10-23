const express = require("express");
const TaskController = require('../controllers/task.controller')
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.post("/", authMiddleware, roleMiddleware('creator'), TaskController.create);

router.get("/", TaskController.findAll);
router.post("/filter", TaskController.filter);
router.post("/declined/filter", TaskController.findDeclined);
router.post("/all", TaskController.findProjectTasks);
router.post("/full", TaskController.findFullProjectTasks);
router.put("/assign", authMiddleware, TaskController.assignTask);
router.post("/decline", authMiddleware, TaskController.decline);
router.post("/one/filtered", TaskController.findOne);

router.get("/:id", TaskController.findById);

router.put("/", authMiddleware, TaskController.update);

router.delete("/:id", authMiddleware, roleMiddleware('creator'), TaskController.delete);
module.exports = router

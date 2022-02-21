const express = require("express");
const router = express.Router();
const read = require("../controllers/read");

router.get("/", read.tasks);

router.get("/:id", read.taskById);

router.get("/completed-tasks", read.completedTasks);

router.get("/unfinished-tasks", read.unfinishedTasks);

router.get("/available-tasks", read.availableTasks);

router.get("/most-assigned-task/workers", read.mostAssignedWorkers);

router.get("/most-assigned-task/tags", read.mostAssignedTags);

module.exports = router;
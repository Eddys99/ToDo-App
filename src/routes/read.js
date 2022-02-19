const express = require("express");
const router = express.Router();
const read = require("../controllers/read");

router.get("/", read.tasks);

router.get("/completed-tasks", read.completedTasks);

router.get("/unfinished-tasks", read.unfinishedTasks);

module.exports = router;
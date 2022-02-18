const express = require("express");
const router = express.Router();
const TaskModel = require("../models/taskSchema");

router.post("/", async (req, res) => {
    try {
        let workersCounter = req.body.workers.length;
        const createTask = new TaskModel({
            task: req.body.task,
            responsibleWorkers: req.body.workers,
            tags: [{
                difficulty: req.body.difficulty
            }],
            countWorkers: workersCounter
        });
        await createTask.save();
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

module.exports = router;
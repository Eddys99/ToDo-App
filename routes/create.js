const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.post("/", async (req, res) => {
    try {
        const createTask = new TaskModel({
            task: req.body.task,
            responsibleWorkers: req.body.workers,
            tags: [{
                difficulty: req.body.difficulty
            }]
        });
        await createTask.save();
        res.redirect("/read-task");
    } catch(err) {
        console.log(err);
        res.redirect("/create-task");
    }
});

module.exports = router;
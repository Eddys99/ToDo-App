const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.post("/", async (req, res) => {
    try {
        const createTask = new TaskModel({
            task: req.body.task
        })
        await createTask.save();
        res.send(createTask);
    } catch(err) {
        console.log(err);
        res.redirect("/create-task");
    }
});

module.exports = router;
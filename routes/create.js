const express = require("express");
const router = express.Router();
const taskModel = require("../database/models/todo");

router.post("/", async (req, res) => {
    const createTask = new taskModel({
        task: req.body.task
    })
    await createTask.save();
    res.send(createTask);
});

module.exports = router;
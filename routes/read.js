const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.get("/", async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.send(tasks);
    } catch(err) {
        console.log(err);
        res.redirect("/create-task");
    }
});

module.exports = router;
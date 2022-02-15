const express = require("express");
const router = express.Router();
const taskModel = require("../database/models/todo");

router.get("/", async (req, res) => {
    const tasks = await taskModel.find();
    res.send(tasks);
});

module.exports = router;
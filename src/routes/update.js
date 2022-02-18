const express = require("express");
const router = express.Router();
const TaskModel = require("../models/taskSchema");

router.put("/:id", async (req, res) => {
    try {
        let changeTaskName = { $set: { task: req.body.task }};
        let id = { _id: req.params.id };
        const updateTask = await TaskModel.updateOne(
            id,
            changeTaskName
        );
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

router.put("/workers/:id", async (req, res) => {
    try {
        let addWorkersToList = { $addToSet: { responsibleWorkers: { $each: req.body.workers }}};
        let id = { _id: req.params.id };
        const updateWorkers = await TaskModel.updateOne(
            id,
            addWorkersToList
        );
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

router.put("/tags/:id", async (req, res) => {
    try {
        let insertTagDifficulty = { $addToSet: { tags: { difficulty: req.body.diff }}};
        let selectedField = { _id: req.params.id, 'tags.difficulty': { $ne: req.body.diff }};
        const updateTags = await TaskModel.updateOne(
            selectedField,
            insertTagDifficulty
        );
        console.log(updateTags);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

module.exports = router;
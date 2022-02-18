const express = require("express");
const router = express.Router();
const TaskModel = require("../models/taskSchema");

router.delete("/:id", async (req, res) => {
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(req.params.id);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

router.delete("/workers/:id", async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let removeWorker = { $pull: { responsibleWorkers: req.body.worker }};
        const popWorker = await TaskModel.updateOne(
            id,
            removeWorker
        );
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

router.delete("/tags/:id", async (req, res) => {
    try {
        let removeThisTag = { $pull: { tags: { difficulty: req.body.diff }}};
        let id = { _id: req.params.id };
        const removeTag = await TaskModel.updateOne(
            id,
            removeThisTag
        );
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
});

module.exports = router;
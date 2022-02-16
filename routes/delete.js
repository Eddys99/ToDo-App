const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.delete("/:id", async (req, res) => {
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(req.params.id);
        res.redirect("/read-task");
    } catch(err) {
        console.log(err);
        res.redirect("/read-task");
    }
});

router.delete("/pull-workers/:id", async (req, res) => {
    try {
        let removeWorker = { $pull: { responsibleWorkers: req.body.deleteThisWorker }};
        let id = { _id: req.params.id };
        const popWorker = await TaskModel.updateOne(
            id,
            removeWorker
        );
        res.redirect("/read-task");
    } catch(err) {
        console.log(err);
        res.redirect("/read-task");
    }
});

module.exports = router;
const TaskModel = require("../models/taskSchema");

async function task(req, res) {
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(req.params.id);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workers(req, res) {
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
}

async function tags(req, res) {
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
}

module.exports = {
    task,
    workers,
    tags
}
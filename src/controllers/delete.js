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
        let query = { _id: req.params.id };
        let update = { $pull: { responsibleWorkers: req.body.worker }};
        const popWorker = await TaskModel.updateOne(query, update);
        const getResWorkersNumber = await TaskModel.findOne(query);
        update = { $set: { countWorkers: getResWorkersNumber.responsibleWorkers.length }};
        const updateWorkersCounter = await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tags(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $pull: { tags: { difficulty: req.body.diff }}};
        const removeTag = await TaskModel.updateOne(query, update);
        const getTagsLength = await TaskModel.findOne(query);
        update = { $set: { tagsCount: getTagsLength.tags.length }};
        const updateTagsCounter = await TaskModel.updateOne(query, update);
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
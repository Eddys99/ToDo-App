const TaskModel = require("../models/taskSchema");

async function task(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $set: { task: req.body.task }};
        const updateTask = await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workers(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $addToSet: { responsibleWorkers: { $each: req.body.workers }}};
        const updateWorkers = await TaskModel.updateOne(query, update);
        const getNumberOfWorkers = await TaskModel.findOne(query);
        update = { $set: { countWorkers: getNumberOfWorkers.responsibleWorkers.length }};
        const updateWorkersCounter = await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tags(req, res) {
    try {
        let update = { $addToSet: { tags: { difficulty: req.body.diff }}};
        let query = { _id: req.params.id, 'tags.difficulty': { $ne: req.body.diff }};
        const updateTags = await TaskModel.updateOne(query, update);
        query = { _id: req.params.id };
        const getTagsLength = await TaskModel.findOne(query);
        update = { $set: { tagsCount: getTagsLength.tags.length }};
        const updateTagsCounter = await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function markTaskAsDone(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $set: { isDone: true }};
        const markDone = await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task,
    workers,
    tags,
    markTaskAsDone
}
const TaskModel = require("../models/taskSchema");

async function task(req, res) {
    try {
        await TaskModel.findByIdAndDelete(req.params.id);
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
        await TaskModel.updateOne(query, update);
        const getResWorkersNumber = await TaskModel.findOne(query);
        update = { $set: { countWorkers: getResWorkersNumber.responsibleWorkers.length }};
        await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workersV2(req, res) {
    try {
        let query = { _id: req.params.id };
        const getDocument = await TaskModel.findOne(query);
        getDocument.removeWorker(req.body.worker);
        getDocument.save();
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
        await TaskModel.updateOne(query, update);
        const getTagsLength = await TaskModel.findOne(query);
        update = { $set: { tagsCount: getTagsLength.tags.length }};
        await TaskModel.updateOne(query, update);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tagsV2(req, res) {
    try {
        let query = { _id: req.params.id };
        const getDocument = await TaskModel.findOne(query);
        getDocument.removeTag(req.body.diff);
        getDocument.save();
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task,
    workers,
    workersV2,
    tags,
    tagsV2
}
const TaskModel = require("../models/taskSchema");

async function task(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $set: { task: req.body.task, updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workers(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $addToSet: { responsibleWorkers: { $each: req.body.workers }}, $set: { updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            const getNumberOfWorkers = await TaskModel.findOne(query);
            update = { $set: { countWorkers: getNumberOfWorkers.responsibleWorkers.length }};
            await TaskModel.updateOne(query, update);
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workersV2(req, res) {
    try {
        let query = { _id: req.params.id };
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            getDocument.addWorker(req.body.workers);
            getDocument.save();
            res.send(getDocument);
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tags(req, res) {
    try {
        let update = { $addToSet: { tags: { difficulty: req.body.diff }}, $set: { updated_at: Date.now() }};
        let query = { _id: req.params.id, 'tags.difficulty': { $ne: req.body.diff }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            query = { _id: req.params.id };
            const getTagsLength = await TaskModel.findOne(query);
            update = { $set: { tagsCount: getTagsLength.tags.length }};
            await TaskModel.updateOne(query, update);
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tagsV2(req, res) {
    try {
        let query = { _id: req.params.id };
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            getDocument.addTag(req.body.diff);
            getDocument.save();
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function markTaskAsDone(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $set: { isDone: true, updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function markAsDeleted(req, res) {
    try {
        let query = { _id: req.params.id };
        let update = { $set: { deleted: true, deleted_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            res.send('Deleted');
        } else {
            res.send('Already deleted.');
        }
    } catch (err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task,
    workers,
    workersV2,
    tags,
    tagsV2,
    markTaskAsDone,
    markAsDeleted
}
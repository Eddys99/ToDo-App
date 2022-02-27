const TaskModel = require("../models/taskSchema");

async function updateTaskTitle(id, newTaskTitle) {
    try {
        let query = { _id: id };
        let update = { $set: { task: newTaskTitle, updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

async function addNewWorkers(id, workers) {
    try {
        let query = { _id: id };
        let update = { $addToSet: { responsibleWorkers: { $each: workers }}, $set: { updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            const getNumberOfWorkers = await TaskModel.findOne(query);
            update = { $set: { countWorkers: getNumberOfWorkers.responsibleWorkers.length }};
            await TaskModel.updateOne(query, update);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

async function addNewTag(id, tag) {
    try {
        let update = { $addToSet: { tags: { difficulty: tag }}, $set: { updated_at: Date.now() }};
        let query = { _id: id, 'tags.difficulty': { $ne: tag }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            query = { _id: id };
            const getTagsLength = await TaskModel.findOne(query);
            update = { $set: { tagsCount: getTagsLength.tags.length }};
            await TaskModel.updateOne(query, update);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

async function markTaskAsDone(id) {
    try {
        let query = { _id: id };
        let update = { $set: { isDone: true, updated_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

async function markTaskAsDeleted(id) {
    try {
        let query = { _id: id };
        let update = { $set: { deleted: true, deleted_at: Date.now() }};
        const getDocument = await TaskModel.findOne(query);
        if (getDocument.deleted == false) {
            await TaskModel.updateOne(query, update);
            return true;
        } else {
            return false;
        }
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    updateTaskTitle,
    addNewWorkers,
    addNewTag,
    markTaskAsDone,
    markTaskAsDeleted
}
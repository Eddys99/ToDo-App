const res = require("express/lib/response");
const TaskModel = require("../models/taskSchema");

async function deleteTask(id) {
    try {
        await TaskModel.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
}

async function removeWorker(id, worker) {
    try {
        let query = { _id: id };
        let update = { $pull: { responsibleWorkers: worker }};
        await TaskModel.updateOne(query, update);
        const getResWorkersNumber = await TaskModel.findOne(query);
        update = { $set: { countWorkers: getResWorkersNumber.responsibleWorkers.length }};
        await TaskModel.updateOne(query, update);
    } catch(err) {
        console.log(err);
    }
}

async function removeTag(id, diff) {
    try {
        let query = { _id: id };
        let update = { $pull: { tags: { difficulty: diff }}};
        await TaskModel.updateOne(query, update);
        const getTagsLength = await TaskModel.findOne(query);
        update = { $set: { tagsCount: getTagsLength.tags.length }};
        await TaskModel.updateOne(query, update);
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    deleteTask,
    removeWorker,
    removeTag
}
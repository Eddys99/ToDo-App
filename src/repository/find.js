const TaskModel = require("../models/taskSchema");

async function getAllTasks() {
    try {
        const tasks = await TaskModel.find();
        return tasks;
    } catch(err) {
        console.log(err);
    }
}

async function getById(id) {
    try {
        let query = { _id: id};
        const task = await TaskModel.findOne(query);
        return task;
    } catch(err) {
        console.log(err);
    }
}

async function getDoneTasks() {
    try {
        let query = { isDone: true };
        const completedTasks = await TaskModel.find(query);
        return completedTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getUndoneTasks() {
    try {
        let query = { isDone: false};
        const unfinishedTasks = await TaskModel.find(query);
        return unfinishedTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getAvailableTasks() {
    try {
        let query = { deleted: false };
        const availableTasks = await TaskModel.find(query);
        return availableTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getMostAssignedWorkersTask() {
    try {
        let sortQuery = { countWorkers: -1};
        const mostAssignedWorkersTask = await TaskModel.find().sort(sortQuery).limit(1);
        return mostAssignedWorkersTask;
    } catch(err) {
        console.log(err);
    }
}

async function getMostAssignedTagsTask() {
    try {
        let sortQuery = { tagsCount: -1};
        const mostAssignedWorkersTask = await TaskModel.find().sort(sortQuery).limit(1);
        return mostAssignedWorkersTask;
    } catch(err) {
        console.log(err);
    }
}

async function getOneWorkerTasks() {
    try {
        let query = { responsibleWorkers: { $size: 1 }};
        const oneWorkerTasks = await TaskModel.find(query);
        return oneWorkerTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getMultipleWorkersTasks() {
    try {
        let query = { 'responsibleWorkers.1': { $exists: true }};
        const getMultipleWorkersTasks = await TaskModel.find(query);
        return getMultipleWorkersTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getOneTagTasks() {
    try {
        let query = { tags: { $size: 1 }};
        const getOneTagTasks = await TaskModel.find(query);
        return getOneTagTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getMultipleTagsTasks() {
    try {
        let query = { 'tags.1': { $exists: true }};
        const getMultipleTagsTasks = await TaskModel.find(query);
        return getMultipleTagsTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getSortAscByNumberOfWorkers() {
    try {
        let query = { countWorkers: 1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        return getSortedTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getSortDescByNumberOfWorkers() {
    try {
        let query = { countWorkers: -1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        return getSortedTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getSortAscByNumberOfTags() {
    try {
        let query = { tagsCount: 1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        return getSortedTasks;
    } catch(err) {
        console.log(err);
    }
}

async function getSortDescByNumberOfTags() {
    try {
        let query = { tagsCount: -1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        return getSortedTasks;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    getAllTasks,
    getById,
    getDoneTasks,
    getUndoneTasks,
    getAvailableTasks,
    getMostAssignedWorkersTask,
    getMostAssignedTagsTask,
    getOneWorkerTasks,
    getMultipleWorkersTasks,
    getOneTagTasks,
    getMultipleTagsTasks,
    getSortAscByNumberOfWorkers,
    getSortDescByNumberOfWorkers,
    getSortAscByNumberOfTags,
    getSortDescByNumberOfTags
}
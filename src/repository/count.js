const TaskModel = require("../models/taskSchema");

async function countDoneTasks() {
    try {
        let filter = { isDone: true };
        const getNumberOfDoneTasks = await TaskModel.where(filter).count();
        return getNumberOfDoneTasks;
    } catch(err) {
        console.log(err);
    }
}

async function countUndoneTasks() {
    try {
        let filter = { isDone: false };
        const getNumberOfUndoneTasks = await TaskModel.where(filter).count();
        return getNumberOfUndoneTasks;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithWorkers() {
    try {
        let filter = { 'responsibleWorkers.0': { $exists: true }};
        const getNumberOfTasksWithWorkers = await TaskModel.where(filter).count();
        return getNumberOfTasksWithWorkers;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithoutWorkers() {
    try {
        let filter = { responsibleWorkers: { $size: 0 }};
        const getNumberOfTasksWithoutWorkers = await TaskModel.where(filter).count();
        return getNumberOfTasksWithoutWorkers;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithTags() {
    try {
        let filter = { 'tags.0': { $exists: true }};
        const getNumberOfTasksWithTags = await TaskModel.where(filter).count();
        return getNumberOfTasksWithTags;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithoutTags() {
    try {
        let filter = { tags: { $size: 0 }};
        const getNumberOfTasksWithoutTags = await TaskModel.where(filter).count();
        return getNumberOfTasksWithoutTags;
    } catch(err) {
        console.log(err);
    }
}

async function countDoneTasksV2() {
    try {
        let filter = { isDone: true };
        const getNumberOfDoneTasks = await TaskModel.where(filter).countDocuments();
        return getNumberOfDoneTasks;
    } catch(err) {
        console.log(err);
    }
}

async function countUndoneTasksV2() {
    try {
        let filter = { isDone: false };
        const getNumberOfUndoneTasks = await TaskModel.where(filter).countDocuments();
        return getNumberOfUndoneTasks;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithWorkersV2() {
    try {
        let filter = { 'responsibleWorkers.0': { $exists: true }};
        const getNumberOfTasksWithWorkers = await TaskModel.where(filter).countDocuments();
        return getNumberOfTasksWithWorkers;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithoutWorkersV2() {
    try {
        let filter = { responsibleWorkers: { $size: 0 }};
        const getNumberOfTasksWithoutWorkers = await TaskModel.where(filter).countDocuments();
        return getNumberOfTasksWithoutWorkers;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithTagsV2() {
    try {
        let filter = { 'tags.0': { $exists: true }};
        const getNumberOfTasksWithTags = await TaskModel.where(filter).countDocuments();
        return getNumberOfTasksWithTags;
    } catch(err) {
        console.log(err);
    }
}

async function countTasksWithoutTagsV2() {
    try {
        let filter = { tags: { $size: 0 }};
        const getNumberOfTasksWithoutTags = await TaskModel.where(filter).countDocuments();
        return getNumberOfTasksWithoutTags;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    countDoneTasks,
    countUndoneTasks,
    countTasksWithWorkers,
    countTasksWithoutWorkers,
    countTasksWithTags,
    countTasksWithoutTags,
    countDoneTasksV2,
    countUndoneTasksV2,
    countTasksWithWorkersV2,
    countTasksWithoutWorkersV2,
    countTasksWithTagsV2,
    countTasksWithoutTagsV2
}
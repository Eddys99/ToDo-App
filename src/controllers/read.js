const TaskModel = require("../models/taskSchema");

async function tasks(req, res) {
    try {
        const tasks = await TaskModel.find();
        res.send(tasks);
    } catch(err) {
        console.log(err);
        res.redirect("No tasks yet");
    }
}

async function taskById(req, res) {
    try {
        let query = { _id: req.params.id };
        const task = await TaskModel.findOne(query);
        res.send(task);
    } catch(err) {
        console.log(err);
        res.send("Task not found.");
    }
}

async function completedTasks(req, res) {
    try {
        let query = { isDone: true };
        const completedTasks = await TaskModel.find(query);
        res.send(completedTasks);
    } catch(err) {
        console.log(err);
        res.send("No finished tasks yet.");
    }
}

async function unfinishedTasks(req, res) {
    try {
        let query = { isDone: false};
        const unfinishedTasks = await TaskModel.find(query);
        res.send(unfinishedTasks);
    } catch(err) {
        console.log(err);
        res.send("All tasks are completed or there are no tasks.");
    }
}

async function availableTasks(req, res) {
    try {
        let query = { deleted: false };
        const availableTasks = await TaskModel.find(query);
        res.send(availableTasks);
    } catch(err) {
        console.log(err);
        res.send("No available tasks.");
    }
}

async function mostAssignedWorkers(req, res) {
    try {
        let sortQuery = { countWorkers: -1};
        const mostAssignedWorkersTask = await TaskModel.find().sort(sortQuery).limit(1);
        res.send(mostAssignedWorkersTask);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function mostAssignedTags(req, res) {
    try {
        let sortQuery = { tagsCount: -1};
        const mostAssignedWorkersTask = await TaskModel.find().sort(sortQuery).limit(1);
        res.send(mostAssignedWorkersTask);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function oneWorkerTasks(req, res) {
    try {
        let query = { responsibleWorkers: { $size: 1 }};
        const getOneWorkerTasks = await TaskModel.find(query);
        res.send(getOneWorkerTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function multipleWorkersTasks(req, res) {
    try {
        let query = { 'responsibleWorkers.1': { $exists: true }};
        const getMultipleWorkersTasks = await TaskModel.find(query);
        res.send(getMultipleWorkersTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function oneTagTasks(req, res) {
    try {
        let query = { tags: { $size: 1 }};
        const getOneTagTasks = await TaskModel.find(query);
        res.send(getOneTagTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function multipleTagTasks(req, res) {
    try {
        let query = { 'tags.1': { $exists: true }};
        const getMultipleTagsTasks = await TaskModel.find(query);
        res.send(getMultipleTagsTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function countCompletedTasks(req, res) {
    try {
        let filter = { isDone: true };
        const numberOfCompletedTasks = await TaskModel.where(filter).count();
        res.send("Completed tasks: " + numberOfCompletedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countUnfinishedTasks(req, res) {
    try {
        let filter = { isDone: false };
        const numberOfUnfinishedTasks = await TaskModel.where(filter).count();
        res.send("Unfinished tasks: " + numberOfUnfinishedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithWorkers(req, res) {
    try {
        let filter = { 'responsibleWorkers.0': { $exists: true }};
        const numberOfTasksWithWorkers = await TaskModel.where(filter).count();
        res.send("Tasks that have workers: " + numberOfTasksWithWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutWorkers(req, res) {
    try {
        let filter = { responsibleWorkers: { $size: 0 }};
        const numberOfTasksWithoutWorkers = await TaskModel.where(filter).count();
        res.send("Tasks that have no workers: " + numberOfTasksWithoutWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithTags(req, res) {
    try {
        let filter = { 'tags.0': { $exists: true }};
        const numberOfTasksWithTags = await TaskModel.where(filter).count();
        res.send("Tasks with tags: " + numberOfTasksWithTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutTags(req, res) {
    try {
        let filter = { tags: { $size: 0 }};
        const numberOfTasksWithoutTags = await TaskModel.where(filter).count();
        res.send("Tasks with tags: " + numberOfTasksWithoutTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortAscByNumberOfWorkers(req, res) {
    try {
        let query = { countWorkers: 1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortDescByNumberOfWorkers(req, res) {
    try {
        let query = { countWorkers: -1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortAscByNumberOfTags(req, res) {
    try {
        let query = { tagsCount: 1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortDescByNumberOfTags(req, res) {
    try {
        let query = { tagsCount: -1 };
        const getSortedTasks = await TaskModel.find().sort(query);
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

module.exports = {
    tasks,
    taskById,
    completedTasks,
    unfinishedTasks,
    availableTasks,
    mostAssignedWorkers,
    mostAssignedTags,
    oneWorkerTasks,
    multipleWorkersTasks,
    oneTagTasks,
    multipleTagTasks,
    countCompletedTasks,
    countUnfinishedTasks,
    countTasksWithWorkers,
    countTasksWithoutWorkers,
    countTasksWithTags,
    countTasksWithoutTags,
    sortAscByNumberOfWorkers,
    sortDescByNumberOfWorkers,
    sortAscByNumberOfTags,
    sortDescByNumberOfTags
}
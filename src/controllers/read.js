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
        const mostAssignedWorkersTask = await TaskModel.aggregate([
            { $unwind : "$responsibleWorkers" },
            { $group : { _id : "$_id", len : { $sum : 1 } } },
            { $sort : { len : -1 } },
          ]);
        res.redirect("/read/" + mostAssignedWorkersTask[0]._id);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function mostAssignedTags(req, res) {
    try {
        const mostAssignetTags = await TaskModel.aggregate([
            { $unwind : "$tags" },
            { $group : { _id : "$_id", len : { $sum : 1 } } },
            { $sort : { len : -1 } },
          ]);
        res.redirect("/read/" + mostAssignetTags[0]._id);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

module.exports = {
    tasks,
    taskById,
    completedTasks,
    unfinishedTasks,
    availableTasks,
    mostAssignedWorkers,
    mostAssignedTags
}
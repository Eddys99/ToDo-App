const TaskModel = require("../models/taskSchema");

async function tasks(req, res) {
    try {
        const tasks = await TaskModel.find();
        res.send(tasks);
    } catch(err) {
        console.log(err);
        res.redirect("/read");
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

module.exports = {
    tasks,
    completedTasks,
    unfinishedTasks
}
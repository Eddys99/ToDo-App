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

module.exports = {
    tasks
}
const TaskModel = require("../models/taskSchema");

async function task(req, res) {
    try {
        let workersCounter = req.body.workers.length;
        const createTask = new TaskModel({
            task: req.body.task,
            responsibleWorkers: req.body.workers,
            tags: [{
                difficulty: req.body.difficulty
            }],
            countWorkers: workersCounter,
            countWorkersV2: workersCounter
        });
        await createTask.save();
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task
}
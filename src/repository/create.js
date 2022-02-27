const TaskModel = require("../models/taskSchema");

async function createTask(taskName, workers, workersCounter, difficulty) {
    try {
        const createTask = new TaskModel({
            task: taskName,
            responsibleWorkers: workers,
            tags: [{
                difficulty: difficulty
            }],
            countWorkers: workersCounter,
            countWorkersV2: workersCounter
        });
        await createTask.save();
    } catch (err) {
        console.log(err);
    }
}

module.exports = { 
    createTask
}
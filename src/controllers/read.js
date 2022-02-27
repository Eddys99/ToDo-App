const repoAggregate = require("../repository/aggregate");
const repoCount = require("../repository/count");
const repoFind = require("../repository/find");

async function tasks(req, res) {
    try {
        const tasks = await repoFind.getAllTasks();
        res.send(tasks);
    } catch(err) {
        console.log(err);
        res.redirect("No tasks yet");
    }
}

async function taskById(req, res) {
    try {
        const task = await repoFind.getById(req.params.id);
        res.send(task);
    } catch(err) {
        console.log(err);
        res.send("Task not found.");
    }
}

async function completedTasks(req, res) {
    try {
        const completedTasks = await repoFind.getDoneTasks();
        res.send(completedTasks);
    } catch(err) {
        console.log(err);
        res.send("No finished tasks yet.");
    }
}

async function unfinishedTasks(req, res) {
    try {
        const unfinishedTasks = await repoFind.getUndoneTasks();
        res.send(unfinishedTasks);
    } catch(err) {
        console.log(err);
        res.send("All tasks are completed or there are no tasks.");
    }
}

async function availableTasks(req, res) {
    try {
        const availableTasks = await repoFind.getAvailableTasks();
        res.send(availableTasks);
    } catch(err) {
        console.log(err);
        res.send("No available tasks.");
    }
}

async function mostAssignedWorkers(req, res) {
    try {
        const mostAssignedWorkersTask = await repoFind.getMostAssignedWorkersTask();
        res.send(mostAssignedWorkersTask);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function mostAssignedTags(req, res) {
    try {
        const mostAssignedWorkersTask = await repoFind.getMostAssignedTagsTask();
        res.send(mostAssignedWorkersTask);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function mostAssignedWorkersV2(req, res) {
    try {
        const document = await repoAggregate.mostWorkers();
        res.redirect("/read/get-this-task/" + document);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function mostAssignedTagsV2(req, res) {
    try {
        const document = await repoAggregate.mostTags();
        res.redirect("/read/get-this-task/" + document);
    } catch(err) {
        console.log(err);
        res.send("No tasks.");
    }
}

async function oneWorkerTasks(req, res) {
    try {
        const getOneWorkerTasks = await repoFind.getOneWorkerTasks();
        res.send(getOneWorkerTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function multipleWorkersTasks(req, res) {
    try {
        const getMultipleWorkersTasks = await repoFind.getMultipleWorkersTasks();
        res.send(getMultipleWorkersTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function oneTagTasks(req, res) {
    try {
        const getOneTagTasks = await repoFind.getOneTagTasks();
        res.send(getOneTagTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function multipleTagTasks(req, res) {
    try {
        const getMultipleTagsTasks = await repoFind.getMultipleTagsTasks();
        res.send(getMultipleTagsTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks found.");
    }
}

async function countCompletedTasks(req, res) {
    try {
        const numberOfCompletedTasks = await repoCount.countDoneTasks();
        res.send("Completed tasks: " + numberOfCompletedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countUnfinishedTasks(req, res) {
    try {
        const numberOfUnfinishedTasks = await repoCount.countUndoneTasks();
        res.send("Unfinished tasks: " + numberOfUnfinishedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithWorkers(req, res) {
    try {
        const numberOfTasksWithWorkers = await repoCount.countTasksWithWorkers();
        res.send("Tasks that have workers: " + numberOfTasksWithWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutWorkers(req, res) {
    try {
        const numberOfTasksWithoutWorkers = await repoCount.countTasksWithoutWorkers();
        res.send("Tasks that have no workers: " + numberOfTasksWithoutWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithTags(req, res) {
    try {
        const numberOfTasksWithTags = await repoCount.countTasksWithTags();
        res.send("Tasks with tags: " + numberOfTasksWithTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutTags(req, res) {
    try {
        const numberOfTasksWithoutTags = await repoCount.countTasksWithoutTags();
        res.send("Tasks with tags: " + numberOfTasksWithoutTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countCompletedTasksV2(req, res) {
    try {
        const numberOfCompletedTasks = await repoCount.countDoneTasksV2;
        res.send("Completed tasks: " + numberOfCompletedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countUnfinishedTasksV2(req, res) {
    try {
        const numberOfUnfinishedTasks = await repoCount.countUndoneTasksV2();
        res.send("Unfinished tasks: " + numberOfUnfinishedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithWorkersV2(req, res) {
    try {
        const numberOfTasksWithWorkers = await repoCount.countTasksWithWorkersV2();
        res.send("Tasks that have workers: " + numberOfTasksWithWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutWorkersV2(req, res) {
    try {
        const numberOfTasksWithoutWorkers = await repoCount.countTasksWithoutWorkersV2();
        res.send("Tasks that have no workers: " + numberOfTasksWithoutWorkers);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithTagsV2(req, res) {
    try {
        const numberOfTasksWithTags = await repoCount.countTasksWithTagsV2();
        res.send("Tasks with tags: " + numberOfTasksWithTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function countTasksWithoutTagsV2(req, res) {
    try {
        const numberOfTasksWithoutTags = await repoCount.countTasksWithoutTagsV2();
        res.send("Tasks with tags: " + numberOfTasksWithoutTags);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortAscByNumberOfWorkers(req, res) {
    try {
        const getSortedTasks = await repoFind.getSortAscByNumberOfWorkers();
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortDescByNumberOfWorkers(req, res) {
    try {
        const getSortedTasks = await repoFind.getSortDescByNumberOfWorkers();
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortAscByNumberOfTags(req, res) {
    try {
        const getSortedTasks = await repoFind.getSortAscByNumberOfTags();
        res.send(getSortedTasks);
    } catch(err) {
        console.log(err);
        res.send("No tasks yet.");
    }
}

async function sortDescByNumberOfTags(req, res) {
    try {
        const getSortedTasks = await repoFind.getSortDescByNumberOfTags();
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
    mostAssignedWorkersV2,
    mostAssignedTagsV2,
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
    sortDescByNumberOfTags,
    countCompletedTasksV2,
    countUnfinishedTasksV2,
    countTasksWithWorkersV2,
    countTasksWithoutWorkersV2,
    countTasksWithTagsV2,
    countTasksWithoutTagsV2
}
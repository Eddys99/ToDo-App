const TaskModel = require("../models/taskSchema");

async function mostWorkers() {
    try {
        const mostAssignedWorkersTask = await TaskModel.aggregate([
            { $unwind : "$responsibleWorkers" },
            { $group : { _id : "$_id", len : { $sum : 1 } } },
            { $sort : { len : -1 } },
        ]);
        return mostAssignedWorkersTask[0]._id;
    } catch(err) {
        console.log(err);
    }
}

async function mostTags() {
    try {
        const mostAssignetTags = await TaskModel.aggregate([
            { $unwind : "$tags" },
            { $group : { _id : "$_id", len : { $sum : 1 } } },
            { $sort : { len : -1 } },
        ]);
        return mostAssignetTags[0]._id;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    mostWorkers,
    mostTags
}
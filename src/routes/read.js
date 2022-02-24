const express = require("express");
const router = express.Router();
const read = require("../controllers/read");

router.get("/", read.tasks);

router.get("/get-this-task/:id", read.taskById);

router.get("/completed-tasks", read.completedTasks);

router.get("/unfinished-tasks", read.unfinishedTasks);

router.get("/available-tasks", read.availableTasks);

router.get("/most-assigned-task/workers", read.mostAssignedWorkers);

router.get("/most-assigned-task/tags", read.mostAssignedTags);

router.get("/most-assigned-task/workers/v2", read.mostAssignedWorkersV2);

router.get("/most-assigned-task/tags/v2", read.mostAssignedTagsV2);

router.get("/one-worker-tasks", read.oneWorkerTasks);

router.get("/multiple-workers-tasks", read.multipleWorkersTasks);

router.get("/one-tag-tasks", read.oneTagTasks);

router.get("/multiple-tags-tasks", read.multipleTagTasks);

router.get("/count/completed-tasks", read.countCompletedTasks);

router.get("/count/unfinished-tasks", read.countUnfinishedTasks);

router.get("/count/tasks-with-workers", read.countTasksWithWorkers);

router.get("/count/tasks-without-workers", read.countTasksWithoutWorkers);

router.get("/count/tasks-with-tags", read.countTasksWithTags);

router.get("/count/tasks-without-tags", read.countTasksWithoutTags);

router.get("/count/completed-tasks/v2", read.countCompletedTasksV2);

router.get("/count/unfinished-tasks/v2", read.countUnfinishedTasksV2);

router.get("/count/tasks-with-workers/v2", read.countTasksWithWorkersV2);

router.get("/count/tasks-without-workers/v2", read.countTasksWithoutWorkersV2);

router.get("/count/tasks-with-tags/v2", read.countTasksWithTagsV2);

router.get("/count/tasks-without-tags/v2", read.countTasksWithoutTagsV2);

router.get("/sorted/by/workers/asc", read.sortAscByNumberOfWorkers);

router.get("/sorted/by/workers/desc", read.sortDescByNumberOfWorkers);

router.get("/sorted/by/tags/asc", read.sortAscByNumberOfTags);

router.get("/sorted/by/tags/desc", read.sortDescByNumberOfTags);

module.exports = router;
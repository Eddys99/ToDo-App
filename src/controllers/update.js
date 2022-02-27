const repoUpdate = require("../repository/update");
const repoFind = require("../repository/find");

async function task(req, res) {
    try {
        let result = await repoUpdate.updateTaskTitle(req.params.id, req.body.task);
        if(result == true) {
            res.send("Task name updated.");
        } else {
            res.send("Task deleted.");
        }
    } catch(err) {
        console.log(err);
        res.send("Task not found.");
    }
}

async function workers(req, res) {
    try {
        let result = await repoUpdate.addNewWorkers(req.params.id, req.body.workers);
        if(result == true) {
            res.send("Worker added.");
        } else {
            res.end("Task is deleted.");
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function workersV2(req, res) {
    try {
        const getDocument = await repoFind.getById(req.params.id);
        if (getDocument.deleted == false) {
            getDocument.addWorker(req.body.workers);
            getDocument.save();
            res.send(getDocument);
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tags(req, res) {
    try {
        let result = await repoUpdate.addNewTag(req.params.id, req.body.diff);
        if (result == true) {
            res.send("Tag added.");
        } else {
            res.send("Task is deleted.");
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tagsV2(req, res) {
    try {
        const getDocument = await repoFind.getById(req.params.id);
        if (getDocument.deleted == false) {
            getDocument.addTag(req.body.diff);
            getDocument.save();
            res.send('Done');
        } else {
            res.send('Task is deleted');
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function markTaskAsDone(req, res) {
    try {
        let result = await repoUpdate.markTaskAsDone(req.params.id);
        if (result == true) {
            res.send("Done.");
        } else {
            res.send("Task is deleted.");
        }
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function markAsDeleted(req, res) {
    try {
        let result = await repoUpdate.markTaskAsDeleted(req.params.id);
        if(result == true) {
            res.send("Done");
        } else {
            res.send("Already deleted.")
        }
    } catch (err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task,
    workers,
    workersV2,
    tags,
    tagsV2,
    markTaskAsDone,
    markAsDeleted
}
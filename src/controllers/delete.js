const repoDelete = require("../repository/delete");
const repoFind = require("../repository/find");

async function task(req, res) {
    try {
        await repoDelete.deleteTask(req.params.id);
        res.send("Task deleted.");
    } catch(err) {
        console.log(err);
        res.send("Task not found.");
    }
}

async function workers(req, res) {
    try {
        await repoDelete.removeWorker(req.params.id, req.body.worker);
        res.redirect("Worker removed.");
    } catch(err) {
        console.log(err);
        res.redirect("Worker not found.");
    }
}

async function workersV2(req, res) {
    try {
        const getDocument = await repoFind.getById(req.params.id);
        getDocument.removeWorker(req.body.worker);
        getDocument.save();
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

async function tags(req, res) {
    try {
        await repoDelete.removeTag(req.params.id, req,body.diff);
        res.redirect("Tag removed.");
    } catch(err) {
        console.log(err);
        res.redirect("Tag not found.");
    }
}

async function tagsV2(req, res) {
    try {
        const getDocument = await repoFind.getById(req.params.id);
        getDocument.removeTag(req.body.diff);
        getDocument.save();
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task,
    workers,
    workersV2,
    tags,
    tagsV2
}
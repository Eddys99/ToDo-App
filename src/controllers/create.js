const repoCreate = require("../repository/create");

async function task(req, res) {
    try {
        await repoCreate.createTask(req.body.task, req.body.workers, req.body.workers.length, req.body.difficulty);
        res.redirect("/read");
    } catch(err) {
        console.log(err);
        res.redirect("/read");
    }
}

module.exports = {
    task
}
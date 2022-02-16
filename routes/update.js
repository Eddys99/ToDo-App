const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.put("/:id", async (req, res) => {
    try {
        let resWrk = {
            $set: { 
                task: req.body.task 
            },
            $addToSet: { 
                responsibleWorkers: { $each: req.body.workers }
            }
        };
        let id = { _id: req.params.id };
        const updateTask = await TaskModel.updateOne(
            id,
            resWrk
        );
        res.redirect("/read-task");
    } catch(err) {
        console.log(err);
        res.redirect("/read-task");
    }
});

module.exports = router;
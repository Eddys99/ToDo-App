const express = require("express");
const router = express.Router();
const taskModel = require("../database/models/todo");

router.put("/:id", async (req, res) => {
    try {
        const updateTask = await taskModel.updateOne({ _id: req.params.id }, { $set: { task: req.body.task }});
        res.send(updateTask);
    } catch(err) {
        console.log(err);
        res.redirect("/" + req.params.id);
    }
});

module.exports = router;
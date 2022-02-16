const express = require("express");
const router = express.Router();
const TaskModel = require("../database/models/todo");

router.delete("/:id", async (req, res) => {
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(req.params.id);
        res.redirect("/read-task");
    } catch(err) {
        console.log(err);
        res.redirect("/read-task");
    }
});
module.exports = router;
const express = require("express");
const router = express.Router();
const taskModel = require("../database/models/todo");

router.delete("/:id", async (req, res) => {
    const deleteTask = await taskModel.findByIdAndDelete(req.params.id);
    res.send(deleteTask);
});

module.exports = router;
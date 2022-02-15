const express = require("express");
const router = express.Router();
const taskModel = require("../database/models/todo");

router.delete("/:id", async (req, res) => {
    try {
        const deleteTask = await taskModel.findByIdAndDelete(req.params.id);
        res.send(deleteTask);
    } catch(err) {
        console.log(err);
        res.redirect("/" + req.params.id);
    }
});
module.exports = router;
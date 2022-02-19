const express = require("express");
const router = express.Router();
const remove = require("../controllers/delete");

router.delete("/:id", remove.task);

router.delete("/workers/:id", remove.workers);

router.delete("/tags/:id", remove.tags);

module.exports = router;
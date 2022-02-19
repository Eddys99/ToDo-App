const express = require("express");
const router = express.Router();
const update = require("../controllers/update");

router.put("/:id", update.task);

router.put("/workers/:id", update.workers);

router.put("/tags/:id", update.tags);

router.put("/done/:id", update.markTaskAsDone);

module.exports = router;
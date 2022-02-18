const express = require("express");
const router = express.Router();
const update = require("../middlewares/update");

router.put("/:id", update.task);

router.put("/workers/:id", update.workers);

router.put("/tags/:id", update.tags);

module.exports = router;
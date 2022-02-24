const express = require("express");
const router = express.Router();
const remove = require("../controllers/delete");

router.delete("/:id", remove.task);

router.delete("/workers/:id", remove.workers);

router.delete("/workers/v2/:id", remove.workersV2);

router.delete("/tags/:id", remove.tags);

router.delete("/tags/v2/:id", remove.tagsV2);

module.exports = router;
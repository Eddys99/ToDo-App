const express = require("express");
const router = express.Router();
const update = require("../controllers/update");

router.put("/:id", update.task);

router.put("/workers/:id", update.workers);

router.put("/workers/v2/:id", update.workersV2);

router.put("/tags/:id", update.tags);

router.put("/tags/v2/:id", update.tagsV2);

router.put("/done/:id", update.markTaskAsDone);

router.put("/soft-delete/:id", update.markAsDeleted);

module.exports = router;
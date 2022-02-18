const express = require("express");
const router = express.Router();
const read = require("../middlewares/read");

router.get("/", read.tasks);

module.exports = router;
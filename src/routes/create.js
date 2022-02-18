const express = require("express");
const router = express.Router();
const create = require("../middlewares/create");

router.post("/", create.task);

module.exports = router;
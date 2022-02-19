const express = require("express");
const router = express.Router();
const create = require("../controllers/create");

router.post("/", create.task);

module.exports = router;
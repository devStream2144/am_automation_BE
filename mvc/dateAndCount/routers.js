const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.post("/add", controller.AddDateAndCount);

module.exports = router;

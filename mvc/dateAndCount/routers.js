const express = require("express");
const router = express.Router();
const controller = require("./controllers");

router.post("/add", controller.AddDateAndCount);
router.get("/get/:fromTime/:toTime", controller.GetDateAndCount);

module.exports = router;

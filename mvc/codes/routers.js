const express = require("express");

const router = express.Router();

const controller = require("./controllers");

router.get("/", controller.GetCodes);
router.post("/add", controller.AddCode);
router.patch("/update/:id", controller.UpdateCode);
router.delete("/delete/:id", controller.DeleteCode);
router.post("/add/many", controller.AddCodes);

module.exports = router;

const express = require("express");

const router = express.Router();

const controller = require("./controllers");

router.post("/add", controller.AddParts);
router.get("/get", controller.GetAllParts);
// router.post("/get/:id", controller.AddParts);
router.put("/update/:id", controller.UpdateParts);
router.delete("/delete/:id", controller.DeleteParts);

module.exports = router;

const express = require("express");

const router = express.Router();
const upload = require("../../middleware/multer");
const controller = require("./controllers");

router.post("/add", upload.single("file"), controller.AddParts);
router.get("/get", controller.GetAllParts);
// router.post("/get/:id", controller.AddParts);
router.put("/update/:id", upload.single("file"), controller.UpdateParts);
router.delete("/delete/:id", controller.DeleteParts);

module.exports = router;

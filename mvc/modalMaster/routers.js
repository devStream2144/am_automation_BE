const express = require("express");

const router = express.Router();
const upload = require("../../middleware/multer");
const controller = require("./controllers");

router.post("/add", controller.AddModalMaster);
router.delete("/delete/:id", controller.DeleteModal);

router.get("/production/shift", controller.GetShiftProduction);
router.get("/production/shiftwise/:to/:from", controller.GetShiftwiseProductin);
router.get("/production/:month/:year", controller.GetMonthProduction);
router.get("/production/:year", controller.GetYearProduction);

router.post("/video", upload.single("video"), (req, res) => {
  const fileName = req?.file?.filename;
  res.status(200).json({
    message: "video file uploaded!",
    filename: fileName,
    success: true,
  });
});
router.get("/", controller.GetAllModals);

module.exports = router;

const express = require("express");

const router = express.Router();
const upload = require("../../middleware/multer");
const controller = require("./controllers");

router.post("/add", controller.AddModalMaster);
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

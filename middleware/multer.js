const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Destination directory for uploaded file
  },
  filename: (req, file, cb) => {
    const randomName =
      crypto.randomBytes(16).toString("hex") + "-" + file.originalname;
    cb(null, Date.now() + "-" + randomName);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;

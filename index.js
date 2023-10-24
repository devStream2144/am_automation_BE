const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const upload = require("./middleware/multer");
const path = require("path");
const PORT = 8080 || process.env.PORT;

const app = express();
app.use(cors());
dotenv.config({ path: ".env" });
app.use(express.json());
require("./DB/connection");

// API INSTANCE
app.use("/part", require("./mvc/parts/routers"));
app.use("/modal", require("./mvc/modalMaster/routers"));
app.use("/code", require("./mvc/codes/routers"));
app.use("/modbus", require("./mvc/modbus/routers"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "Ok" });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

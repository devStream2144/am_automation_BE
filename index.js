const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = 8080 || process.env.PORT;
const app = express();
app.use(cors());
dotenv.config({ path: ".env" });
app.use(express.json());
require("./DB/connection");

// API INSTANCE
app.use("/part", require("./mvc/parts/routers"));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_SEC, {})
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

const mongoose = require("mongoose");
const moment = require("moment");

const dateAndCountSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
    require: true,
  },
  count: {
    type: Number,
    require: true,
  },
});

const partMaster = mongoose.model("dateAndCount", dateAndCountSchema);
module.exports = partMaster;

const mongoose = require("mongoose");

const partsSchema = mongoose.Schema({
  partName: {
    type: String,
    require: true,
  },
  partCode: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  dateAndTime: {
    type: Date,
    default: Date.now(),
    require: true,
  },
});

const partMaster = mongoose.model("parts", partsSchema);
module.exports = partMaster;

const mongoose = require("mongoose");

const modalMasterSchema = mongoose.Schema({
  fgCode: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  partsSelection: {
    type: Array,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  video: {
    type: String,
    require: true,
  },
  dateAndTime: {
    type: Date,
    default: Date.now(),
  },
});

const modalMaster = mongoose.model("modalMaster", modalMasterSchema);
module.exports = modalMaster;

const mongoose = require("mongoose");
const moment = require("moment");

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
  quantityArr: {
    type: Array,
    require: true,
  },
  partSelectSequence: {
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
    type: String,
    default: moment().format("YYYY-MM-DDTHH:mm:ss"),
  },
});

const modalMaster = mongoose.model("modalMaster", modalMasterSchema);
module.exports = modalMaster;

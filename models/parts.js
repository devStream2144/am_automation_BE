const mongoose = require("mongoose");

const partsSchema = mongoose.Schema({
  modalNo: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  partNo: {
    type: String,
    require: true,
  },
  itemCode: {
    type: String,
    require: true,
  },
});

const parts = mongoose.model("parts", partsSchema);
module.exports = parts;

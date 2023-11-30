const mongoose = require("mongoose");
const moment = require("moment");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
    require: true,
  },
});

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;

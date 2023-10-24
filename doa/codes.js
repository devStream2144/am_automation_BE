const codes = require("../models/codes");

module.exports = {
  addCodes: async (data, cb) => {
    try {
      const resp = await codes.insertMany(data);
      if (resp) {
        cb(null, resp, "Codes added successfull!");
      } else {
        cb(true, null, "Codes added failed!");
      }
    } catch (e) {
      cb(e, null, "Codes added failed!");
    }
  },

  addCode: async (data, cb) => {
    try {
      const resp = await new codes(data);
      if (resp) {
        const save_resp = await resp.save();
        if (save_resp) {
          cb(null, resp, "Code added successfull!");
        }
      } else {
        cb(true, null, "Code added failed!");
      }
    } catch (e) {
      cb(e, null, "Code added failed!");
    }
  },

  updateCode: async (data, cb) => {
    console.log("data: ", data);
    try {
      const resp = await codes.findByIdAndUpdate(data.docId, data, {
        new: true,
      });
      if (resp) {
        cb(null, resp, "Code updated successfull!");
      } else {
        cb(true, null, "Code updated failed!");
      }
    } catch (e) {
      cb(e, null, "Code updated failed!");
    }
  },

  deleteCode: async (data, cb) => {
    try {
      const resp = await codes.findByIdAndDelete(data.docId);
      if (resp) {
        cb(null, resp, "Code deleted successfull!");
      } else {
        cb(true, null, "Code deleted failed!");
      }
    } catch (e) {
      cb(e, null, "Code deleted failed!");
    }
  },

  getCodes: async (data, cb) => {
    try {
      const resp = await codes.find();
      if (resp) {
        cb(null, resp, "Codes get successfull!");
      } else {
        cb(true, null, "Codes get failed!");
      }
    } catch (e) {
      cb(e, null, "Codes get failed!");
    }
  },
};

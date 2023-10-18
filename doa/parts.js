const parts = require("../models/parts");

module.exports = {
  addParts: async (data, cb) => {
    try {
      const resp = await new parts(data);
      if (resp) {
        const save_resp = await resp.save();
        if (save_resp) {
          cb(null, resp, "Part add successfull!");
        }
      } else {
        cb(true, null, "Part added failed!");
      }
    } catch (e) {
      cb(e, null, "Part added failed!");
    }
  },

  getAllParts: async (data, cb) => {
    try {
      const resp = await parts.find();
      if (resp) {
        cb(null, resp, "Part gets successfull!");
      } else {
        cb(true, null, "Part get failed!");
      }
    } catch (e) {
      cb(e, null, "Part gets failed!");
    }
  },

  updateParts: async (data, cb) => {
    try {
      const resp = await parts.findByIdAndUpdate(data.id, data, {
        new: true,
      });
      if (resp) {
        cb(null, resp, "Part update successfull!");
      } else {
        cb(true, null, "Part update failed!");
      }
    } catch (e) {
      cb(e, null, "Something went wrong!");
    }
  },

  deleteParts: async (data, cb) => {
    try {
      const resp = await parts.findByIdAndRemove(data.id);
      if (resp) {
        cb(null, resp, "Part delete successfull!");
      } else {
        cb(true, null, "Part delete failed!");
      }
    } catch (e) {
      cb(e, null, "Something went wrong!");
    }
  },
};

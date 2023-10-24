const partMaster = require("../models/partMaster");

module.exports = {
  addParts: async (data, cb) => {
    try {
      const docCount = await partMaster.estimatedDocumentCount();
      console.log("docCount : ", docCount);
      const resp = await new partMaster({ ...data, partIndex: docCount + 1 });
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
      const resp = await partMaster.find();
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
    console.log("data : ", data);
    try {
      const resp = await partMaster.findByIdAndUpdate(data.docId, data, {
        new: true,
        useFindAndModify: false,
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
      const resp = await partMaster.findByIdAndRemove(data.id);
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

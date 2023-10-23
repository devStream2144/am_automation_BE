const modalMaster = require("../models/modalMaster");

module.exports = {
  addModalMaster: async (data, cb) => {
    try {
      const resp = await new modalMaster(data);
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
};

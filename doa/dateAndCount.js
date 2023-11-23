const dateAndCount = require("../models/dateAndCount");

module.exports = {
  addDateAndCount: async (data, cb) => {
    try {
      const docsCount = await dateAndCount.estimatedDocumentCount();
      const resp = await new dateAndCount({ count: docsCount + 1 });
      if (resp) {
        const save_resp = await resp.save();
        if (save_resp) {
          const all_recs = await dateAndCount.find();
          if (all_recs) {
            cb(null, all_recs, "Date and count add successfull!");
          } else {
            cb(true, null, "Date and count add failed!");
          }
        }
      } else {
        cb(true, null, "Date and count added failed!");
      }
    } catch (e) {
      cb(e, null, "Date and count added failed!");
    }
  },
};

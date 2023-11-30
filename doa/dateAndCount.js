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

  getDateAndCount: async (data, cb) => {
    const { fromTime, toTime } = data;
    try {
      const resp = await dateAndCount.find({
        date: {
          $gte: fromTime,
          $lt: toTime,
        },
      });
      if (resp) {
        cb(null, resp, "Date and count add successfull!");
      } else {
        cb(null, all_recs, "Date and count get failed!");
      }
    } catch (err) {
      cb(err, null, "Date and count get failed! - catched");
    }
  },
};

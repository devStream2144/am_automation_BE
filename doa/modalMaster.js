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

  uploadVideoFile: async (file, cb) => {
    try {
      const resp = await new modalMaster(file);
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

  getAllModals: async (data, cb) => {
    try {
      const resp = await modalMaster.find();
      if (resp) {
        cb(null, resp, "Part gets successfull!");
      } else {
        cb(true, null, "Part get failed!");
      }
    } catch (e) {
      cb(e, null, "Part gets failed!");
    }
  },

  getShiftProduction: async (data, cb) => {
    try {
      const currentDate = new Date(); // Get the current date
      currentDate.setUTCHours(0, 0, 0, 0); // Set the time to midnight (if needed)
      const query = {
        dateAndTime: {
          $gte: currentDate,
          $lt: new Date(currentDate.getTime() + 24 * 60 * 60 * 1000), // 24 hours later
        },
      };
      const resp = await modalMaster.find(query);
      console.log("resp : ", resp);
      if (resp) {
        cb(null, resp, "Shift productions gets successfull!");
      } else {
        cb(true, null, "Shift productions get failed - 1!");
      }
    } catch (e) {
      console.log("e : ", e);
      cb(e, null, "Shift productions gets failed - 2!");
    }
  },

  getMonthProduction: async (data, cb) => {
    try {
      const { month, year } = data;
      const startDate = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
      const endDate = new Date(Date.UTC(year, month, 1, 0, 0, 0));
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        cb(true, null, "Invalid date range provided.");
        return;
      }
      const query = {
        dateAndTime: {
          $gte: startDate,
          $lt: endDate,
        },
      };
      const resp = await modalMaster.find(query);
      if (resp) {
        cb(null, resp, "Shift productions get successful!");
      } else {
        cb(true, null, "No matching records found.");
      }
    } catch (e) {
      console.error("Error: ", e);
      cb(true, null, "Shift productions get failed - 2!");
    }
  },

  getYearProduction: async (data, cb) => {
    try {
      const { year } = data;
      console.log("year: ", year);

      if (isNaN(year) || year < 0) {
        cb(true, null, "Invalid year provided.");
        return;
      }
      const startDate = new Date(Date.UTC(year, 0, 1, 0, 0, 0)); // January 1st of the specified year
      const endDate = new Date(Date.UTC(year + 1, 0, 1, 0, 0, 0)); // January 1st of the following year
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        cb(true, null, "Invalid date range provided.");
        return;
      }
      const query = {
        dateAndTime: {
          $gte: startDate,
          $lt: endDate,
        },
      };
      const resp = await modalMaster.find(query);
      if (resp) {
        cb(null, resp, "Shift productions get successful for the year!");
      } else {
        cb(true, null, "No matching records found for the year.");
      }
    } catch (e) {
      console.error("Error: ", e);
      cb(true, null, "Shift productions get failed for the year.");
    }
  },

  getShiftwiseProductin: async (data, cb) => {
    try {
      const { dateTo, dateFrom } = data;
      const resp = await modalMaster.find({
        dateAndTime: { $gte: dateTo, $lte: dateFrom },
      });
      console.log("data : ", resp);
      cb(null, resp, "Shift productions get successful!");
    } catch (error) {
      console.error(error);
      cb(error, null, "Shift productions get failed!");
    }
  },
};

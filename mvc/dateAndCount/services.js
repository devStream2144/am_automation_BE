const dateAndCount = require("../../doa/dateAndCount");

const dateAndCountServices = () => {
  const AddDateAndCount = async (data, cb) => {
    dateAndCount.addDateAndCount(data, (err, data, message) => {
      if (err) {
        var resp = {
          message: message,
          success: false,
        };
        cb(err, null, resp);
      } else {
        var resp = {
          message: message,
          success: true,
        };
        cb(err, data, resp);
      }
    });
  };

  const GetDateAndCount = async (data, cb) => {
    dateAndCount.getDateAndCount(data, (err, data, message) => {
      if (err) {
        var resp = {
          message: message,
          success: false,
        };
        cb(err, null, resp);
      } else {
        var resp = {
          message: message,
          success: true,
        };
        cb(err, data, resp);
      }
    });
  };

  return {
    AddDateAndCount,
    GetDateAndCount,
  };
};
module.exports = dateAndCountServices();

const admin = require("../../doa/admins");

const adminServices = () => {
  const AddAdmin = async (data, cb) => {
    admin.addAdmin(data, (err, data, message) => {
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
  const GetAdmin = async (data, cb) => {
    admin.getAdmin(data, (err, data, message) => {
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
    AddAdmin: AddAdmin,
    GetAdmin: GetAdmin,
  };
};

module.exports = adminServices();

const modalMaster = require("../../doa/modalMaster");

const modalMasterServices = () => {
  const AddModalMaster = async (data, cb) => {
    modalMaster.addModalMaster(data, (err, data, message) => {
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
    AddModalMaster,
  };
};

module.exports = modalMasterServices();

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

  const DeleteModal = async (data, cb) => {
    modalMaster.deleteModal(data, (err, data, message) => {
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

  const UpdateModal = async (data, cb) => {
    modalMaster.updateModal(data, (err, data, message) => {
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

  const UploadVideoFile = async (data, cb) => {
    modalMaster.uploadVideoFile(data, (err, data, message) => {
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

  const GetAllModals = async (data, cb) => {
    modalMaster.getAllModals(data, (err, data, message) => {
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

  const GetShiftProduction = async (data, cb) => {
    modalMaster.getShiftProduction(data, (err, data, message) => {
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

  const GetMonthProduction = async (data, cb) => {
    modalMaster.getMonthProduction(data, (err, data, message) => {
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

  const GetYearProduction = async (data, cb) => {
    modalMaster.getYearProduction(data, (err, data, message) => {
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

  const GetShiftwiseProductin = async (data, cb) => {
    modalMaster.getShiftwiseProductin(data, (err, data, message) => {
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
    UploadVideoFile,
    GetAllModals,
    GetShiftProduction,
    GetMonthProduction,
    GetYearProduction,
    GetShiftwiseProductin,
    DeleteModal,
    UpdateModal,
  };
};

module.exports = modalMasterServices();

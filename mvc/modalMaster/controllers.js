const ModalMasterServices = require("./services");
module.exports = {
  AddModalMaster: (req, res) => {
    var data = req.body;
    ModalMasterServices.AddModalMaster(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  UploadVideoFile: (req, res) => {
    var video = req.body.video;
    ModalMasterServices.UploadVideoFile(video, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetAllModals: (req, res) => {
    var video = req.body.video;
    ModalMasterServices.GetAllModals(video, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetShiftProduction: (req, res) => {
    ModalMasterServices.GetShiftProduction(null, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetMonthProduction: (req, res) => {
    const data = {
      month: req.params.month,
      year: req.params.year,
    };
    ModalMasterServices.GetMonthProduction(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetYearProduction: (req, res) => {
    const data = {
      month: req.params.month,
      year: req.params.year,
    };
    ModalMasterServices.GetYearProduction(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetShiftwiseProductin: (req, res) => {
    const dateTo = req.params.to;
    const dateFrom = req.params.from;
    const data = {
      dateTo,
      dateFrom,
    };
    ModalMasterServices.GetShiftwiseProductin(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

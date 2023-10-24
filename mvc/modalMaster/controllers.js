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
};

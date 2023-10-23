const ModalMasterServices = require("./services");
module.exports = {
  AddModalMaster: (req, res) => {
    var formData = {
      fgCode: req.body.fgCode,
      description: req.body.description,
      partsSelection: req.body.partsSelection,
    };
    console.log("formData : ", formData);
    ModalMasterServices.AddModalMaster(
      { ...formData, video: "video_name.mp4" },
      (err, data, message) => {
        if (!err) {
          return res.json({ err, data, message });
        } else {
          return res.json({ err, data, message });
        }
      }
    );
  },
};

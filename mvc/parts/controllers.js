const PartsServices = require("./services");

module.exports = {
  AddParts: (req, res) => {
    var formData = {
      partName: req.body.partName,
      partCode: req.body.partCode,
    };
    PartsServices.AddParts(
      { ...formData, image: req?.file?.filename },
      (err, data, message) => {
        if (!err) {
          return res.json({ err, data, message });
        } else {
          return res.json({ err, data, message });
        }
      }
    );
  },

  GetAllParts: (req, res) => {
    PartsServices.GetAllParts(null, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  UpdateParts: (req, res) => {
    var formData = {
      partName: req.body.partName,
      partCode: req.body.partCode,
    };
    var id = req.params.id;
    PartsServices.UpdateParts(
      { ...formData, image: req?.file?.filename, docId: id },
      (err, data, message) => {
        if (!err) {
          return res.json({ err, data, message });
        } else {
          return res.json({ err, data, message });
        }
      }
    );
  },

  DeleteParts: (req, res) => {
    var id = req.params.id;
    const data = {
      id,
    };
    PartsServices.DeleteParts(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

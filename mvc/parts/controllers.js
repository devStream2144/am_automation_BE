const PartsServices = require("./services");

module.exports = {
  AddParts: (req, res) => {
    var data = req.body;
    PartsServices.AddParts(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  UpdateParts: (req, res) => {
    var data = req.body;
    var id = req.params.id;
    PartsServices.UpdateParts({ ...data, id }, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
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

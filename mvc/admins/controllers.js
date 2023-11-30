const AdminServices = require("./services");

module.exports = {
  AddAdmin: (req, res) => {
    var data = req.body;
    AdminServices.AddAdmin(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },

  GetAdmin: (req, res) => {
    var data = req.body;
    AdminServices.GetAdmin(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

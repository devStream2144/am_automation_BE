const DateAndCountServices = require("./services");

module.exports = {
  AddDateAndCount: (req, res) => {
    DateAndCountServices.AddDateAndCount(null, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

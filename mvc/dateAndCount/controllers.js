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

  GetDateAndCount: (req, res) => {
    const data = {
      fromTime: req.params.fromTime,
      toTime: req.params.toTime,
    };
    DateAndCountServices.GetDateAndCount(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

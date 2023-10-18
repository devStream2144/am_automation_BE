const CodesServices = require("./services");

module.exports = {
  AddCodes: (req, res) => {
    var data = req.body;
    CodesServices.AddCodes(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
  AddCode: (req, res) => {
    var data = req.body;
    CodesServices.AddCode(data, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
  UpdateCode: (req, res) => {
    var data = req.body;
    var docId = req.params.id;
    CodesServices.UpdateCode({ ...data, docId }, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
  DeleteCode: (req, res) => {
    var docId = req.params.id;
    CodesServices.DeleteCode({ docId }, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
  GetCodes: (req, res) => {
    CodesServices.GetCodes(null, (err, data, message) => {
      if (!err) {
        return res.json({ err, data, message });
      } else {
        return res.json({ err, data, message });
      }
    });
  },
};

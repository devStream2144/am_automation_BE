const Modbus = require("jsmodbus");
const net = require("net");
const socket = new net.Socket();
const unitId = 1;
const client = new Modbus.client.TCP(socket, unitId);
const options = {
  host: "192.168.1.220",
  port: 502,
};

module.exports = {
  reqToWriteData: (req, res, next) => {
    try {
      const partArr = req.body;
      console.log(partArr);
      socket.on("connect", function () {
        client
          .writeMultipleRegisters(0, partArr)
          .then(function (resp) {
            req.info = {
              data: resp,
              message: "Data write successfully!",
              status: 200,
              error: false,
            };
            socket.end();
            next();
          })
          .catch(function (err) {
            console.log("err : ", err);
            req.info = {
              data: err,
              message: "Data write failed!",
              status: 400,
              error: true,
            };
            socket.end();
            next();
          });
      });
      socket.on("error", () => {
        console.error;
        next();
      });
      socket.connect(options);
    } catch (e) {}
  },

  reqToReadData: (req, res, next) => {
    try {
      socket.on("connect", function () {
        client
          .readHoldingRegisters(0, 10)
          .then(function (resp) {
            req.info = {
              data: resp.response._body.valuesAsArray,
              message: "Data read successfully!",
              status: 200,
              error: true,
            };
            next();
            socket.end();
          })
          .catch(function () {
            const error = require("util").inspect(arguments, {
              depth: null,
            });
            req.info = {
              data: error,
              message: "Data read failed!",
              status: 400,
              error: true,
            };
            next();
            socket.end();
          });
      });
      socket.on("error", console.error);
      socket.connect(options);
    } catch (e) {
      console.log("err : ", e);
      res.status(400).json({ error: e, message: "Data reading failed!" });
    }
  },

  reqToReadInputRegister: (req, res, next) => {
    try {
      socket.on("connect", function () {
        client
          .readHoldingRegisters(39, 1)
          .then(function (resp) {
            req.info = {
              data: resp.response._body.valuesAsArray,
              message: "Data read successfully!",
              status: 200,
              error: true,
            };
            next();
            socket.end();
          })
          .catch(function () {
            const error = require("util").inspect(arguments, {
              depth: null,
            });
            req.info = {
              data: error,
              message: "Data read failed!",
              status: 400,
              error: true,
            };
            next();
            socket.end();
          });
      });
      socket.on("error", console.error);
      socket.connect(options);
    } catch (e) {
      console.log("err : ", e);
      res.status(400).json({ error: e, message: "Data reading failed!" });
    }
  },
};

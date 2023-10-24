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
    const partArr = req.body;
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
        .catch(function () {
          req.info = {
            data: arguments,
            message: "Data write failed!",
            status: 400,
            error: true,
          };
          socket.wend();
          next();
        });
    });
    socket.on("error", () => {
      console.error;
      next();
    });
    socket.connect(options);
  },

  reqToReadData: (req, res, next) => {
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
          socket.end();
          next();
        })
        .catch(function () {
          let error = require("util").inspect(arguments, {
            depth: null,
          });
          req.info = {
            data: error,
            message: "Data read failed!",
            status: 400,
            error: true,
          };
          socket.end();
          next();
        });
    });
    socket.on(
      "error",
      socket.on("error", () => {
        console.error;
        next();
      })
    );
    socket.connect(options);
  },
};

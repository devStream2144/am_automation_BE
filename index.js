const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const upload = require("./middleware/multer");
const path = require("path");
const PORT = 8080 || process.env.PORT;

// modbus connection setup
const Modbus = require("jsmodbus");
const net = require("net");
const unitId = 1;
const options = {
  host: "192.168.1.220",
  port: 502,
};

const app = express();
app.use(cors());
dotenv.config({ path: ".env" });
app.use(express.json());
require("./DB/connection");

// API INSTANCE
app.use("/part", require("./mvc/parts/routers"));
app.use("/modal", require("./mvc/modalMaster/routers"));
app.use("/code", require("./mvc/codes/routers"));
// app.use("/modbus", require("./mvc/modbus/routers"));
app.use("/dac", require("./mvc/dateAndCount/routers"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({ message: "Ok" });
});

let holdLengthOfReadedData = 0;

// modbus read write
app.post("/modbus/write", async (req, res) => {
  try {
    const partArr = req.body;
    console.log("partArr : ", partArr);
    const socket = new net.Socket();
    const client = new Modbus.client.TCP(socket, unitId);
    socket.on("connect", async function () {
      try {
        const resp = await client.writeMultipleRegisters(0, partArr);
        if (resp) {
          holdLengthOfReadedData = 0;
          res.status(200).json({
            data: resp.response._body.valuesAsArray,
            message: { success: true, message: "Data write successfull!" },
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        socket.end();
      }
    });
    socket.on("error", console.error);
    socket.connect(options);
  } catch (err) {
    console.log("error: ", err);
  }
});

app.get("/modbus/read", async (req, res) => {
  try {
    const socket = new net.Socket();
    const client = new Modbus.client.TCP(socket, unitId);
    socket.on("connect", async function () {
      try {
        const resp = await client.readHoldingRegisters(0, 15);
        const resp2 = await client.readHoldingRegisters(39, 1);
        if (resp2) {
          client
            .writeSingleRegister(39, 0)
            .then(function (resp) {
              console.log(resp);
              socket.end();
            })
            .catch(function () {
              console.error(arguments);
            });
        }
        if (resp) {
          const numberOfOnes = resp?.response._body?.valuesAsArray?.filter(
            (element) => element === 1
          ).length;
          if (numberOfOnes > holdLengthOfReadedData) {
            holdLengthOfReadedData = numberOfOnes;
            res.status(200).json({
              statusAddresses: resp?.response._body?.valuesAsArray,
              isScreenClear: resp2?.response._body?.valuesAsArray,
            });
          } else {
            res.status(200).json({
              statusAddresses: null,
              isScreenClear: resp2?.response._body?.valuesAsArray,
            });
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        socket.end();
      }
    });
    socket.on("error", console.error);
    socket.connect(options);
  } catch (err) {
    console.log("error: ", err);
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

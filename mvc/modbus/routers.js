const express = require("express");
const modbusClient = require("../../middleware/modbus");
const router = express.Router();

router.post("/write", modbusClient.reqToWriteData, (req, res) => {
  res.status(200).json({ data: req.info });
});

router.get("/read", modbusClient.reqToReadData, (req, res) => {
  res.status(200).json({ data: req.info });
});

module.exports = router;

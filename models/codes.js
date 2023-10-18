const mongoose = require("mongoose");

const codesSchema = mongoose.Schema({
  fGCode: { type: String, require: true },
  description: { type: String, require: true },
  stickerInsulationUBase: { type: String, require: true },
  drxDpx3125hpTmSidePlug: { type: String, require: true },
  frontalCoverDrxHp125: { type: String, require: true },
  screwForFrontalCoverDrx: { type: String, require: true },
  insertCoverDrx125HpRed: { type: String, require: true },
  nutM6SupportDrxHp125: { type: String, require: true },
  nutM6: { type: String, require: true },
  ScrewWasherM6: { type: String, require: true },
  screwToFixBreakerToBoard: { type: String, require: true },
  phaseInsulatorF3Sf: { type: String, require: true },
  isDrxAdjAndNotAdjLg: { type: String, require: true },
  packagingDrx125HpLgILev: { type: String, require: true },
  mtgNutM4Dpx3Mccb: { type: String, require: true },
  cartonStickerLxRx3: { type: String, require: true },
  packagingDrx125HpLgiiLev: { type: String, require: true },
});

const codes = mongoose.model("codes", codesSchema);
module.exports = codes;

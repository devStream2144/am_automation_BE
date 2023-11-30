const admin = require("../models/admin");
const bcrypt = require("bcrypt");

module.exports = {
  addAdmin: async (data, cb) => {
    try {
      const saltRounds = 10;
      const { password } = data;
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        const resp = await new admin({ ...data, password: hash });
        if (resp) {
          const save_resp = await resp.save();
          if (save_resp) {
            cb(null, resp, "Admin added successfull!");
          }
        } else {
          cb(true, null, "Admin added failed!");
        }
      });
    } catch (e) {
      console.log("ERROR : ", e);
      cb(e, null, "Admin added failed! - catched");
    }
  },

  getAdmin: async (data, cb) => {
    const { username, password } = data;
    try {
      const resp = await admin.findOne({ username });
      bcrypt.compare(password, resp.password, async (err, result) => {
        if (result) {
          cb(null, resp, "Admin login successfull!");
        } else {
          cb(err, null, "Login failed!");
        }
      });
    } catch (e) {
      console.log("ERROR : ", e);
      cb(e, null, "Login failed! - catched");
    }
  },
};

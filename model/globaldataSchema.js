const mongoose = require("mongoose");

const globaldataSchema = new mongoose.Schema({
  rank_number: {
    type: Number,
  },
  challenge_id: {
    type: Number,
  },
});

const globaldata = mongoose.model("globaldata", globaldataSchema);
module.exports = globaldata;

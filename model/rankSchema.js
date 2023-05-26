const mongoose = require("mongoose");

const rankSchema = new mongoose.Schema({
  rank: {
    type: Number,
  },
  mesons_username: {
    type: String,
  },
  name: {
    type: String,
  },
  problems: {
    type: Number,
  },
  coins: {
    type: Number,
  },
});

const Rank = mongoose.model("ranks", rankSchema);
module.exports = Rank;

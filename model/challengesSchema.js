const mongoose = require("mongoose");

const challengesSchema = new mongoose.Schema({
  all_challenges: [],
});

const Challenges = mongoose.model("challenges", challengesSchema);
module.exports = Challenges;

const mongoose = require("mongoose");

const allUsersSchema = new mongoose.Schema({
  usernames: {
    type: Array,
  },
});

const AllUsers = mongoose.model("allUsers", allUsersSchema);
module.exports = AllUsers;

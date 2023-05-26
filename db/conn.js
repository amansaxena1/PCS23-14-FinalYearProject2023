const mongoose = require("mongoose");

const DB = "mongodb+srv://aman:er@cluster0.35hhi.mongodb.net/Database?retryWrites=true&w=majority"

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conn success");
  })
  .catch((err) => {
    console.log(err);
  });

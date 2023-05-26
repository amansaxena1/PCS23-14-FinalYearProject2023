const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
require("dotenv").config();
//SCHEMA IMPORT
const User = require("./model/userSchema");
const Rank = require("./model/rankSchema");
const allUsers = require("./model/allUsersSchema");
const Challenges = require("./model/challengesSchema");
const Globaldata = require("./model/globaldataSchema");
const dailyChallenges = require("./model/dailyChallengeSchema");

//extra
app.use(express.json({
  type: "*/*" // optional, only if you want to be sure that everything is parsed as JSON. Wouldn't recommend
}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//previous code ..... commented now
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express mesons" });
});


//CONNECTION TO MONGO
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//SIGN UP
var verifySignupDetails = async (obj) => {
  const user = new User({
    mesons_username: obj.post.mesons_username,
    mesons_password: obj.post.password,
    challenges: {
      total_challenges: 0,
      won_challenges_number: 0,
      lost_challenges_number: 0,
    },
    friends: [],
    todo: [],
    startedChallenge: [],
  });

  user.save((err, user) => {
    if (err) {
      return err;
    } else {
      return "Inserted to database!!";
    }
  });
  allUsers.updateOne(
    { _id: "61e9d7e277f4baaf74d7a428" },
    {
      $push: {
        usernames: obj.post.mesons_username,
      },
    },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );
  const rank = new Rank({
    rank: 0,
    mesons_username: obj.post.mesons_username,
    name: obj.post.full_name,
    problems: obj.post.total_questions,
    coins: obj.post.total_coins,
  });
  rank.save((err, rank) => {
    if (err) {
      return err;
    } else {
      return "Inserted!!";
    }
  });
  return "data_to_be_saved_to_db";
};

app.post("/api/signup", (req, res) => {
  res.send(verifySignupDetails(req.body));
});

//NEW CHALLENGE
app.post("/api/addNewChallenge", (req, res) => {
  const newChallenge = {
    challenge_name: req.body.post.challenge_name,
    created_by: req.body.post.created_by,
    number_of_problems: req.body.post.number_of_problems,
  };
  Challenges.updateOne(
    { _id: "61ed8e9e9e08e68047d89bef" },
    {
      $push: {
        all_challenges: newChallenge,
      },
    },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );

  Globaldata.updateOne(
    { _id: "61ed915c9e08e68047d89bf0" },
    {
      $set: {
        challenge_id: req.body.post.challenge_name + 1,
      },
    },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );

  User.updateOne(
    { mesons_username: req.body.post.created_by },
    {
      $push: {
        "challenges.my_challenges": req.body.post.challenge_name,
      },
    },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );

  res.send(200);
});

//Assign challenge to friends
app.post("/api/assignChallenge", (req, res) => {
  var friend = req.body.post.mesons_username;
  var challenge_name = req.body.post.challenge_name;
  User.updateOne(
    { mesons_username: friend },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );
  res.send(200);
});

//INDIVIDUAL FRIEND
app.post("/api/getFriend", (req, res) => {
  var mesons_username = req.body.post;
  User.find({ mesons_username: mesons_username }, function (err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

//Todo questions
app.post("/api/removeTodo", (req, res) => {
  User.updateOne(
    { mesons_username: req.body.post.mesons_username },
    {
      $set: {
        todo: req.body.post.obj,
      },
    },
    function (error, success) {
      if (error) {
        return err;
      } else {
        return "done";
      }
    }
  );
  res.send(200);
});

//Login
app.post("/api/login", async (req, res) => {
  var mesons_username = req.body.post.mesons_username;
  const user = await User.findOne({ mesons_username: mesons_username })
    .select([
      "mesons_password",
      "codeforces_username",
      "leetcode_username",
      "codechef_username",
    ])
    .lean();
  if (user) {
    if (user.mesons_password === req.body.post.mesons_password) {
      user.status = "OK";
    } else res.send({ status: "NOT OK" });
  } else {
    res.send({ status: "NOT OK" });
  }
});

//update on login
app.post("/api/updateOnLogin", async (req, res) => {

  res.send(200);
});

//daily challenge
app.post("/api/dailyChallenge", async (req, res) => {
  await dailyChallenges.updateOne(
    { _id: "61e8650eb4f19c6c07c421a6" },
    {
      $set: {
        date: req.body.post.date,
      },
    }
  );
  res.send(200);
});

//Add field of end time in user
app.post("/api/endTimeUpdation", async (req, res) => {
  var obj = {
    challenge_name: req.body.post.challenge_name,
    end_time: req.body.post.end_time,
  };
  await User.updateOne(
    { mesons_username: req.body.post.mesons_username },
    {
      $push: {
        startedChallenge: obj,
      },
    }
  );
  res.send(200);
});

//on submit contest
app.post("/api/submitContest", async (req, res) => {
  await User.updateOne(
    { mesons_username: req.body.post.mesons_username },
    {
      $inc: { "challenges.assigned_challenges_number": -1 },
      $pull: {
        "challenges.assigned_challenges": req.body.post.challenge_name,
      },
    }
  );
  res.send(200);
});

//Won contest
app.post("/api/wonContest", async (req, res) => {
  await User.updateOne(
    { mesons_username: req.body.post.mesons_username },
    {
      $inc: { "challenges.won_challenges_number": 1 },
    }
  );
  res.send(200);
});

//Lost contest
app.post("/api/lostContest", async (req, res) => {
  await User.updateOne(
    { mesons_username: req.body.post.mesons_username },
    {
      $inc: { "challenges.lost_challenges_number": 1 },
    }
  );
  res.send(200);
});

//add friend
app.post("/api/addFriend", async (req, res) => {
  await User.updateOne(
    { mesons_username: req.body.post.mesons_username }
  );
  res.send(200);
});

//get friends on add friend screen
app.post("/api/allFriends", async (req, res) => {
  var mesons_username = req.body.post;
  const user = await User.findOne({ mesons_username: mesons_username })
    .select(["friends"])
    .lean();
  res.send(user);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));

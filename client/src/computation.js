import store from "./redux/store";
import axios from "axios";

var data;

export const loadData1 = () => {
  data = store.getState().allData.data;
  // console.log(data);
  todayQuestions();
};
var global_all_usernames;
//Signup
export const fetchAllUsers = async () => {
  var all_usernames = [];
  global_all_usernames = all_usernames;
  // console.log(all_usernames);
};

var dailychallenge;

export const daily = () => {
  todayQuestions();
  return dailychallenge;
};

export const todayQuestions = async () => {
  var datefromDB = data.data[0].dailychallenges[0].date;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  if (today === datefromDB) {
    dailychallenge = data.data[0].dailychallenges[0];
    // return dailychallenge;
  } else {
    dailychallenge = {};
  }
  // console.log(dailychallenge);
  // return dailychallenge;
};

// signup functions

async function checkuser(platform, username) {
}

export const signupVerification = async (obj) => {
  var result = {
    full_name: true,
    mesons_username: true,
    codeforces_username: false,
    codechef_username: false,
    leetcode_username: false,
    password: false,
  };

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  await fetchAllUsers();
  if (
    obj.mesons_username.length === 0 ||
    global_all_usernames.find((element) => element === obj.mesons_username)
  )
    result.mesons_username = false;
  if (
    obj.codeforces_username.length > 0 &&
    (await checkuser("codeforces", obj.codeforces_username))
  )
    result.codeforces_username = true;
  if (
    obj.codechef_username.length > 0 &&
    (await checkuser("codechef", obj.codechef_username))
  )
    result.codechef_username = true;
  if (
    obj.leetcode_username.length > 0 &&
    (await checkuser("leetcode", obj.leetcode_username))
  )
    result.leetcode_username = true;
  if (obj.full_name.length === 0 || format.test(obj.full_name))
    result.full_name = false;
  if (obj.password.length > 7) result.password = true;
  return result;
};

// challenges functions

var verified_questions_array = [];

async function addChallengeToDBbackend(obj) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  obj.date = today;
}

async function addAssignChallengeToDB(obj) {
  for (var i = 0; i < obj.assignedTo.length; i++) {
    var send_obj = {
      mesons_username: obj.assignedTo[i],
      challenge_name: obj.challenge_name,
    };
  }
}

//   obj.assignedTo.map((user) => {
//     var send_obj = {
//       mesons_username: user,
//       challenge_name: obj.challenge_map,
//     };
//     const response = await fetch("http://127.0.0.1:5000/api/assignChallenge", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ post: send_obj }),
//     });
//     const body = await response.text();
//     console.log(body);
//   });
// }

const codeforcesURL = function (url) {
  return false;
};

const leetcodeURL = function (url) {
  return false;
};

const checkQuestion = (questions) => {
  return false;
};

export const newChallenge = async (obj) => {
  var result = {
    assignedTo: true,
    duration: true,
    questions: true,
  };

  var status = true;

  if (status) {
    // get it from database
    await addChallengeToDBbackend(obj);
    await addAssignChallengeToDB(obj);
  }
  return result;
};

export const checkFriend = (username) => {
  if (data.data[0].user[0].friends.find((element) => element === username))
    return true;
  if (data.data[0].user[0].mesons_username === username) return true;
  return false;
};

export const addNewFriend = async (friend_username) => {
  var my_username = data.data[0].user[0].mesons_username;
  console.log("add new friend", my_username, friend_username);
  var obj = {
    mesons_username: my_username,
    friend_username: friend_username,
  };
};

async function removeTodofromDb(send_obj) {
  console.log(send_obj);
}

export const onSubmitTodo = (mesons_username, todoQuestions) => {
  console.log("comp", todoQuestions);
  var obj = [];
  todoQuestions.map((todos) => {
    if (todos.done === false) {
      obj.push({
        platform_name: todos.platform,
        problem_name: todos.problem,
        problem_url: todos.problem_url,
        date: todos.date,
        accuracy: todos.accuracy,
      });
    }
  });
  var send_obj = {
    mesons_username: mesons_username,
    obj: obj,
  };
  removeTodofromDb(send_obj);
};

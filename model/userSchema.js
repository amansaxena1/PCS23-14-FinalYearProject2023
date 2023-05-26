const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   total_accepted_quesions: {
//     type: Number,
//   },
//   todays_questions: {
//     type: Number,
//   },
//   fetched_data:{
//     type: Array
//   },
//   daily_graph: [
//     {
//       date: {
//         type: String,
//       },
//       number_of_questions: {
//         type: Number,
//       },
//     },
//   ],
//   data_of_30_days: [
//     {
//       date: {
//         type: String,
//       },
//       number_of_questions: {
//         type: Number,
//       },
//     },
//   ],
//   friends: {
//     type: Array,
//   },
//   todo_questions: {
//     type: Array,
//   },
//   challenges: {
//     created_challenges: {
//       type: Array,
//     },
//     assigned_challenges: {
//       type: Array,
//     },
//     assigned_challenges_number: {
//       type: Number,
//     },
//     won_challenges: [
//       {
//         challenge_name: {
//           type: String,
//         },
//         number_of_questions_completed: {
//           type: Number,
//         },
//       },
//     ],
//     won_challenges_number: {
//       type: Number,
//     },
//     lost_challenges: {
//       type: Array,
//     },
//     lost_challenges_number: {
//       type: Number,
//     },
//   },
//   info: {
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//   },
//   codechef: {
//     codeforces_username: {
//       type: String,
//     },
//     codeforces_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_verdict: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     codeforces_todo_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     codeforces_todo_questions_number: {
//       type: Number,
//     },
//     codeforces_accepted_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     codeforces_accepted_questions_number: {
//       type: Number,
//     },
//     codeforces_today_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     codeforces_daily_graph: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//     codeforces_data_of_30_days: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//   },
//   leetcode: {
//     leetcode_username: {
//       type: String,
//     },
//     leetcode_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_verdict: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     leetcode_questions_todo: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     leetcode_todo_questions_number: {
//       type: Number,
//     },
//     leetcode_accepted_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     leetcode_accepted_questions_number: {
//       type: Number,
//     },
//     leetcode_today_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     leetcode_daily_graph: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//     leetcode_data_of_30_days: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//   },
//   codechef: {
//     codechef_username: {
//       type: String,
//     },
//     codechef_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_verdict: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     codechef_todo_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//         question_date: {
//           type: String,
//         },
//       },
//     ],
//     codechef_todo_questions_number: {
//       type: Number,
//     },
//     codechef_accepted_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     codechef_accepted_questions_number: {
//       type: Number,
//     },
//     codechef_today_questions: [
//       {
//         question_name: {
//           type: String,
//         },
//         question_url: {
//           type: String,
//         },
//       },
//     ],
//     codechef_daily_graph: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//     codechef_data_of_30_days: [
//       {
//         date: {
//           type: String,
//         },
//         number_of_questions: {
//           type: Number,
//         },
//       },
//     ],
//   },
// });

const userSchema = new mongoose.Schema({
  mesons_username: {
    type: String,
  },
  mesons_password: {
    type: String,
  },
  full_name: {
    type: String,
  },
  codeforces_username: {
    type: String,
  },
  codechef_username: {
    type: String,
  },
  leetcode_username: {
    type: String,
  },
  leetcode_login_status: {
    type: Boolean,
  },
  progress: {
    rank: {
      type: Number,
    },
    badge: {
      type: String,
    },
    level: {
      type: String,
    },
  },
  total_coins: {
    type: Number,
  },
  total_questions: {
    type: Number,
  },
  daily_graph: [
    {
      number_of_questions: {
        type: Number,
      },
      date: {
        type: String,
      },
    },
  ],
  recent_submissions: [
    {
      platform: {
        type: String,
      },
      problem_name: {
        type: String,
      },
      problem_url: {
        type: String,
      },
      verdict: {
        type: String,
      },
    },
  ],
  codeforces: {
    codeforces_username: {
      type: String,
    },
    codeforces_total_accepted_questions: {
      type: Number,
    },
    codeforces_total_accepted_submissions: {
      type: Number,
    },
    codeforces_total_wrong_submissions: {
      type: Number,
    },
    codeforces_last_30_days_submissions: [],
    codeforces_total_easy_accepted_questions: {
      type: Number,
    },
    codeforces_total_medium_accepted_questions: {
      type: Number,
    },
    codeforces_total_hard_accepted_questions: {
      type: Number,
    },
    codeforces_coins: {
      type: Number,
    },
    codeforces_daily_graph: [],
    codeforces_accepted_questions: [],
    codeforces_last_five: [],
  },
  codechef: {
    codechef_username: {
      type: String,
    },
    codechef_total_accepted_questions: {
      type: Number,
    },
    codechef_total_accepted_submissions: {
      type: Number,
    },
    codechef_total_wrong_submissions: {
      type: Number,
    },
    codechef_last_30_days_submissions: [],
    codechef_total_easy_accepted_questions: {
      type: Number,
    },
    codechef_total_medium_accepted_questions: {
      type: Number,
    },
    codechef_total_hard_accepted_questions: {
      type: Number,
    },
    codechef_coins: {
      type: Number,
    },
    codechef_daily_graph: [],
    codechef_accepted_questions: [],
    codechef_last_five: [],
  },
  leetcode: {
    leetcode_username: {
      type: String,
    },
    leetcode_total_accepted_questions: {
      type: Number,
    },
    leetcode_total_accepted_submissions: {
      type: Number,
    },
    leetcode_total_wrong_submissions: {
      type: Number,
    },
    leetcode_last_30_days_submissions: [],
    leetcode_total_easy_accepted_questions: {
      type: Number,
    },
    leetcode_total_medium_accepted_questions: {
      type: Number,
    },
    leetcode_total_hard_accepted_questions: {
      type: Number,
    },
    leetcode_coins: {
      type: Number,
    },
    leetcode_daily_graph: [],
    leetcode_accepted_questions: [],
    leetcode_last_five: [],
  },
  challenges: {
    total_challenges: {
      type: Number,
    },
    won_challenges_number: {
      type: Number,
    },
    lost_challenges_number: {
      type: Number,
    },
    assigned_challenges_number: {
      type: Number,
    },
    my_challenges: [],
    assigned_challenges: [],
    won_lost_challenges: [
      {
        challenge_name: {
          type: String,
        },
        status: {
          type: String,
        },
      },
    ],
    won_challenges: [],
    lost_challenges: [],
  },
  friends: [],
  todo: [],
  startedChallenge: [],
});

const User = mongoose.model("users", userSchema);
module.exports = User;

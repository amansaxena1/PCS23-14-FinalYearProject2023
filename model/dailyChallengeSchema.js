const mongoose = require("mongoose");

const DailyChallengeSchema = new mongoose.Schema({
    date:{
        type:String
    },
    leetcode_problem:{
        leetcode_problem_name:{
            type:String
        },
        leetcode_problem_url:{
            type:String
        },
        leetcode_problem_accuracy:{
            type:Number
        },
    },
    codeforces_problem:{
        codeforces_problem_name:{
            type:String
        },
        codeforces_problem_url:{
            type:String
        },
        codeforces_problem_accuracy:{
            type:Number
        },
    },
    codechef_problem:{
        codechef_problem_name:{
            type:String
        },
        codechef_problem_url:{
            type:String
        },
        codechef_problem_accuracy:{
            type:Number
        },
    },
});

const DailyChallenge = mongoose.model("dailychallenge", DailyChallengeSchema);
module.exports = DailyChallenge;

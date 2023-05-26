import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ChallengesCard from "../partials/challenges/ChallengesCard";
import NewChallengeCard from "../partials/challenges/NewChallengeCard";
import MyChallengesCard from "../partials/challenges/MyChallengesCard";
import { useSelector } from "react-redux";
import "../css/scroll.css";
import "../css/todoquestion.css";
import { useHistory } from "react-router-dom";

function Challenges() {
  const history = useHistory();
  const data = useSelector((state) => state.allData.data);
  var my_ch = data.data[0].user[0].challenges.my_challenges;
  var ass_ch = data.data[0].user[0].challenges.assigned_challenges;
  var won_ch = data.data[0].user[0].challenges.won_challenges;
  var lost_ch = data.data[0].user[0].challenges.lost_challenges;
  var all = data.data[0].challenges[0].all_challenges;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [NewChallengeCardOpen, setNewChallengeCardOpen] = useState(false);
  var my_challenges = [],
    key = 1;
  my_ch.map((ques) => {
    my_challenges.push({
      key: key,
      challenged_by: all[key - 1].created_by,
      challenge_name: ques,
      assigned: all[key - 1].date,
      questions: all[key - 1].number_of_problems,
      duration:
        all[key - 1].duration / 60 +
        (all[key - 1].duration / 60 > 1 ? " Hours" : " Hour"),
    });
    key++;
  });

  var assigned_challenges = [];
  key = 1;
  ass_ch.map((ques) => {
    assigned_challenges.push({
      key: key,
      challenge_name: ques,
      challenged_by: all[ques - 1].created_by,
      assigned: all[ques - 1].date,
      questions: all[ques - 1].number_of_problems,
      duration:
        all[ques - 1].duration / 60 +
        (all[ques - 1].duration / 60 > 1 ? " Hours" : " Hour"),
    });
    key++;
  });

  var won_challenges = [];
  key = 1;
  won_ch.map((ques) => {
    won_challenges.push({
      key: key,
      challenge_name: ques,
      challenged_by: all[ques - 1].created_by,
      assigned: all[ques - 1].date,
      questions: all[ques - 1].number_of_problems,
      duration:
        all[ques - 1].duration / 60 +
        (all[ques - 1].duration / 60 > 1 ? " Hours" : " Hour"),
    });
    key++;
  });

  var lost_challenges = [];
  key = 1;
  lost_ch.map((ques) => {
    lost_challenges.push({
      key: key,
      challenge_name: ques,
      challenged_by: all[ques - 1].created_by,
      assigned: all[ques - 1].date,
      questions: all[ques - 1].number_of_problems,
      duration:
        all[ques - 1].duration / 60 +
        (all[ques - 1].duration / 60 > 1 ? " Hours" : " Hour"),
    });
    key++;
  });


  const sendDataToParent = (index) => {
    console.log(index);
    setNewChallengeCardOpen(index.status);
    my_challenges.push({
      key: 1000,
      challenged_by: "",
      challenge_name: index.challenge_name,
      assigned: index.date,
      questions: index.number_of_problems,
      duration:
        index.duration / 60 + (index.duration / 60 > 1 ? " Hours" : " Hour"),
    });
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="">
          <h1 style={{ color: "#00ddd4" }} className="text-3xl font-bold ml-8">
            Challenges
          </h1>
          <div
            style={{ width: "100%" }}
            className="flex justify-end pl-8 pr-8 mt-2"
          >
            <button
              style={{
                width: "80px",
                borderRadius: 20,
                marginRight: "10px",
              }}
              type="submit"
              className="challengebtn font-bold focus:outline-none text-white text-sm sm:text-base py-1 w-full"
              // className="glow-button flex items-center justify-center font-bold focus:outline-none text-white text-sm sm:text-base py-1 w-full"
            >
              <span className=" uppercase">Create</span>
            </button>
            <button
              style={{
                width: "100px",
                borderRadius: 20,
              }}
              type="submit"
              onClick={() => {
                history.push({
                  pathname: "/allchallenges",
                });
              }}
              className="challengebtn2 font-bold focus:outline-none text-white text-sm sm:text-base py-1 w-full"
            >
              <span className=" uppercase">Browse</span>
            </button>
          </div>
        </div>

        {NewChallengeCardOpen ? (
          <div className="py-8">
            <p className="text-2xl font-bold text-white ml-8">New Challenge</p>
            <NewChallengeCard sendDataToParent={sendDataToParent} />
          </div>
        ) : null}

        <p className="text-2xl font-bold text-white mt-4 ml-8">My Challenges</p>
        <main style={{ backgroundColor: "#1a1a1a" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
            </div>
          </div>
        </main>

        <p className="text-2xl font-bold text-white mt-4 ml-8">Assigned</p>
        <main style={{ backgroundColor: "#1a1a1a" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
            </div>
          </div>
        </main>
        <p className="text-2xl font-bold text-white mt-4 ml-8">Won</p>
        <main style={{ backgroundColor: "#1a1a1a" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
            </div>
          </div>
        </main>
        <p className="text-2xl font-bold text-white mt-4 ml-8">Lost</p>
        <main style={{ backgroundColor: "#1a1a1a" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Challenges;

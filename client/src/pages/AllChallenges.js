import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { useSelector } from "react-redux";
import AllChallengesCard from "../partials/challenges/AllChallengesCard";
import "../css/scroll.css";
function AllChallenges() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const data2 = useSelector((state) => state.allData.data);
  var all = data2.data[0].challenges[0].all_challenges;
  var all_challenges = [];
  all.map((ele) => {
    all_challenges.push({
      challenge_name: ele.challenge_name,
      created_by: ele.created_by,
      created: ele.date,
      questions: ele.number_of_problems,
      duration:
        ele.duration / 60 + (ele.duration / 60 > 1 ? " Hours" : " Hour"),
    });
  });

  function render_all_challenges() {
    return all_challenges.map((all_challenges, index) => {
      const { challenge_name, created_by, created, questions, duration } =
        all_challenges;
      const obj = {
        challenge_name: challenge_name,
        created_by: created_by,
        created: created,
        questions: questions,
        duration: duration,
      };
      return <AllChallengesCard dataFromParent={obj} />;
    });
  }

  return (
    <div
      style={{ backgroundColor: "#1a1a1a" }}
      className="flex h-screen overflow-hidden"
    >
      
    </div>
  );
}

export default AllChallenges;

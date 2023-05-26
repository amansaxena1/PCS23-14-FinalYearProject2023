import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import "../css/todoquestion.css";
import CodeforcesLogo from "../images/codeforces.svg";
import CodechefLogo from "../images/codechef.svg";
import LeetcodeLogo from "../images/LeetCode.svg";
import { useSelector } from "react-redux";
import { onSubmitTodo } from "../computation";
import "../css/scroll.css";

function TodoQuestions() {
  var data = useSelector((state) => state.allData.data);
  console.log(data);
  data = data.data[0].user[0].todo;
  var key = 0;
  var todoQuestions = [];

  var logos = new Map();
  logos.set("codeforces", CodeforcesLogo);
  logos.set("codechef", CodechefLogo);
  logos.set("leetcode", LeetcodeLogo);



  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}

export default TodoQuestions;

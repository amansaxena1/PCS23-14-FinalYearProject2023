import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import "../css/todoquestion.css";
import { useSelector } from "react-redux";
import "../css/scroll.css";
function Ranks() {
  const history = useHistory();


  var allRanks = [];

  function renderData() {
    var rank = 1;
    return <h1>kl</h1>
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      style={{ backgroundColor: "#1a1a1a" }}
      className="flex h-screen overflow-hidden"
    >
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div
        style={{ backgroundColor: "#1a1a1a" }}
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost"
      >
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 style={{ color: "#00ddd4" }} className="text-3xl font-bold ml-8">
          Rank List
        </h1>
      </div>
    </div>
  );
}

export default Ranks;

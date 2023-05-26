import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
// import { useSelector } from "react-redux";
import "../css/scroll.css";

import "../css/todoquestion.css";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const data = useSelector((state) => state.allData.data);
  // const renderList = data.data.map((userInfo) => {
  //   console.log(userInfo);
  // });
  return (
    <div
      className="flex h-screen overflow-hidden App"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main style={{ backgroundColor: "#1a1a1a" }}>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="App grid grid-cols-12 gap-6">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

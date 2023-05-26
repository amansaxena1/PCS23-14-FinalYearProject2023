import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { useLocation } from "react-router-dom";
import lottie from "lottie-web";
import Loading from "./../images/loading.json";
import "../css/scroll.css";

function IndividualFriend() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const container = useRef(null);

  var body;

  const getUser = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/getd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: location.state.username }),
    });
    // body has data
    body = await response.json();
    // console.log("Aman", body[0].full_name);

    var fetcheddata = body[0];
    console.log(fetcheddata);
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    var prior = currentTimeInSeconds - 86400 * 30;
    var dates = new Map();


    setLoaded(true);
  };

  useEffect(() => {
    getUser();
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Loading,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  if (loaded) {
    return (
      <div
        style={{ backgroundColor: "#1a1a1a" }}
        className="flex h-screen overflow-hidden"
      >
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main style={{ backgroundColor: "#1a1a1a" }}>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* <Challenges dataFromParent={challenges} /> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div style={{ width: "450px", height: "450px" }} ref={container} />
      </div>
    );
  }
}

export default IndividualFriend;

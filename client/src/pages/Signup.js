import React, { useState, useEffect, useRef } from "react";
import "./../css/login.css";
import Header from "../partials/header/Header";
import Coding from "./../images/coding.json";
import lottie from "lottie-web";
import "../css/todoquestion.css";

const Signup = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Coding,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "fixed",
          width: "100%",
        }}
      >
        <Header />
      </div>
    </div>
  );
};

export default Signup;

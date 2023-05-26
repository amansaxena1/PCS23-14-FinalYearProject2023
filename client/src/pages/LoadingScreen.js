import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./../images/loading.json";
import lottie from "lottie-web";
import "../css/scroll.css";

function LoadingScreen() {
  const history = useHistory();
  const [getData, setGetData] = new useState(true);
  const location = useLocation();
  //get from browser
  const container = useRef(null);
  const dispatch = useDispatch();


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
      onClick={() => history.push({ pathname: "/dashboard" })}
    >
      <div style={{ width: "450px", height: "450px" }} ref={container} />
    </div>
  );
}

export default LoadingScreen;

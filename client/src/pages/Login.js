import React, { useEffect, useRef, useState } from "react";
import "./../css/login.css";
import Header from "../partials/header/Header";
import axios from "axios";
import Loading from "./../images/loading.json";
import gif from "../images/load.gif";

const Login = () => {
  const [mesons_username, setmesons_username] = new useState("");
  const [password, setpassword] = new useState("");
  const [aman, setaman] = new useState(false);


  async function loginClicked() {
    if (mesons_username === "" || password === "") {
      window.alert("Please fill all the details correctly");
    } else {
      
    }
    }

  if (aman) {
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
        <img style={{ width: 450, height: 450 }} src={gif} alt="loading" />
      </div>
    );
  } else {
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
  }
};

export default Login;

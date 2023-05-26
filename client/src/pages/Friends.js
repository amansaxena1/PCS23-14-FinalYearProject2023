import React, { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import AllFriends from "../partials/friends/AllFriends";
import Search from "../images/search.svg";
import Downshift from "downshift";
import "../../src/css/challenge.css";
import { useDispatch, useSelector } from "react-redux";
import Addfriend from "../images/addfriend.svg";
import { addNewFriend } from "../computation";
import axios from "axios";
import "../css/scroll.css";
import { setData } from "../redux/actions/dataActions";

function Friends() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allData.data);
  const [my_friends, setmy_friends] = useState(data.data[0].user[0].friends);
  const [clicked, setclicked] = useState(false);
  const [inputFields, setInputFields] = useState("");
  const [open, setOpen] = useState(true);
  var allUsers;
  var your_name = data.data[0].user[0].mesons_username;
  // const my_friends = data.data[0].user[0].friends;
  const all_userinfo = data.data[0].ranks;
  var dict = new Map();
  all_userinfo.map((user) => {
    dict.set(user.mesons_username, user);
  });

  allUsers = data.data[0].allusers[0].usernames;
  allUsers = allUsers.filter(function (value, index, arr) {
    return value != your_name;
  });
  allUsers = allUsers.filter(function (value, index, arr) {
    const s = my_friends.find((ele) => ele === value);
    if (s === undefined) return true;
    else return false;
  });

  async function onClickAddFriend() {
    var joined = my_friends.concat(inputFields);
    setmy_friends(joined);
    setclicked(true);
    allUsers = allUsers.filter(function (value, index, arr) {
      return value != inputFields;
    });
    setInputFields("");
    await addNewFriend(inputFields);
  }

  function dropClick(val) {
    setInputFields(val);
  }

  var key = 1;

  function renderData() {
    return my_friends.map((username) => {
      // const { key, friend, name, rank, questions, badge } = friendsData;
      const obj = {
        friend: username,
        name: dict.get(username).name,
        rank: "Expert",
        questions: dict.get(username).problems,
        badge:
          "Badge" + Math.min(parseInt(dict.get(username).problems / 250), 800),
      };
      return <AllFriends key={key++} dataFromParent={obj} />;
    });
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div>
          <h1 className="text-3xl font-bold text-white ml-8">Add Friends</h1>
          <main style={{ backgroundColor: "#1a1a1a" }}>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="flex">
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Friends;

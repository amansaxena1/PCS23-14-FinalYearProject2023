import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MesonsLogo from "../images/logo.svg";
import DashboardLogo from "../images/dashboard.svg";
import LeetcodeLogo from "../images/LeetCode.svg";
import CodechefLogo from "../images/codechef.svg";
import CodeforcesLogo from "../images/codeforces.svg";
import ChallengesLogo from "../images/challenges.svg";
import CompareLogo from "../images/compare.svg";
import RankLogo from "../images/rank.svg";
import FriendsLogo from "../images/friends.svg";
import TodoLogo from "../images/todo.svg";

import "../css/challenge.css";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        style={{ backgroundColor: "#262624" }}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 flex-shrink-0 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          {/* <NavLink exact to="/" className="block"> */}
          <div className="flex justify-center sidebar-hover my-3">
            <img src={MesonsLogo} alt="Logo" className="w-10 h-10 rotatee" />
            <h1 className="pl-4 font-semibold text-3xl h1color">
              <span style={{ color: "#28e3d8" }}>ME</span>
              SONS
            </h1>
          </div>
          {/* </NavLink> */}
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3 mb-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                ----
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul>
              {/* Dashboard */}
              <li className={`sidebarrow rounded-lg ${pathname === "/"}`}>
                <NavLink
                  exact
                  to="/dashboard"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname === "/" && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img alt="" style={{ width: "18px" }} src={DashboardLogo} />
                    {/* </div> */}
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Dashboard
                    </span>
                  </div>
                </NavLink>
              </li>
              <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3 mt-5 mb-3">
                <span
                  className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                  aria-hidden="true"
                >
                  ----
                </span>
                <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  Platforms
                </span>
              </h3>
              {/* Leetcode */}
              <li
                className={`sidebarrow rounded-lg ${
                  pathname.includes("messages") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/leetcode"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("messages") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{
                        width: "22px",
                        backgroundColor: "#fff",
                        borderRadius: "20%",
                      }}
                      src={LeetcodeLogo}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Leetcode
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Codechef */}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("tasks") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/codechef"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("tasks") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{
                        width: "22px",
                        backgroundColor: "#fff",
                        borderRadius: "20%",
                      }}
                      src={CodechefLogo}
                    />

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Codechef
                    </span>
                  </div>
                </NavLink>
              </li>
              {/* Codeforces */}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("campaigns") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/codeforces"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("campaigns") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{
                        width: "22px",
                        backgroundColor: "#fff",
                        borderRadius: "20%",
                      }}
                      src={CodeforcesLogo}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Codeforces
                    </span>
                  </div>
                </NavLink>
              </li>

              <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3 mt-5 mb-3">
                <span
                  className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                  aria-hidden="true"
                >
                  ----
                </span>
                <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                  Features
                </span>
              </h3>
              {/* Rank */}
              <li
                className={`sidebarrow rounded-lg ${
                  pathname.includes("analytics") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/rank"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("analytics") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{ width: "16px", height: "16px" }}
                      src={RankLogo}
                    />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Rank
                    </span>
                  </div>
                </NavLink>
              </li>
              {/*  Challenges  */}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("analytics") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/challenges"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("analytics") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src={ChallengesLogo}
                    ></img>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Challenges
                    </span>
                  </div>
                </NavLink>
              </li>
              {/*  Friends  */}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("analytics") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/friends"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("analytics") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src={FriendsLogo}
                    ></img>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Friends
                    </span>
                  </div>
                </NavLink>
              </li>
              {/*  Compare  */}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("analytics") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/compare"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("analytics") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{ width: "18px" }}
                      src={CompareLogo}
                    ></img>
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Compare
                    </span>
                  </div>
                </NavLink>
              </li>
              {/*Todo*/}
              <li
                className={`sidebarrow rounded-lg mt-1 ${
                  pathname.includes("analytics") && "bg-gray-900"
                }`}
              >
                <NavLink
                  exact
                  to="/todo"
                  className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 block text-gray-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("analytics") && "hover:text-gray-200"
                  }`}
                  activeClassName="selected"
                >
                  <div className="flex items-center">
                    <img
                      alt=""
                      style={{ width: "16px", marginLeft: "2px" }}
                      src={TodoLogo}
                    ></img>

                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      To Do
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-gray-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-gray-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="text-xs uppercase text-gray-500 font-semibold pl-3 mt-3 pt-3">
            <span
              className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
              aria-hidden="true"
            ></span>
            <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
              Made With ❤️ by Ethos Typos
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

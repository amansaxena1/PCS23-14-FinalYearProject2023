import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../../utils/Transition";
import { useSelector } from "react-redux";
import UserAvatar from "../../images/user-36-04.jpg";
import Badge1 from "../../images/badges/level1.svg";
import Badge2 from "../../images/badges/level2.svg";
import Badge3 from "../../images/badges/level3.svg";
import Badge4 from "../../images/badges/level4.svg";
import Badge5 from "../../images/badges/level5.svg";
import Badge6 from "../../images/badges/level6.svg";
import { opacity } from "tailwindcss/defaultTheme";
import "../../css/challenge.css";
// import "../../css"

function UserMenu() {
  const data = useSelector((state) => state.allData.data);
  const mesons_username = data.data[0].user[0].mesons_username;
  const full_name = data.data[0].user[0].full_name;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const badge_icon = new Map();
  badge_icon.set("Badge1", Badge1);
  badge_icon.set("Badge2", Badge2);
  badge_icon.set("Badge3", Badge3);
  badge_icon.set("Badge4", Badge4);
  badge_icon.set("Badge5", Badge5);
  badge_icon.set("Badge6", Badge6);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const level =
    "Badge" +
    Math.min(parseInt(data.data[0].user[0].total_questions / 150), 800);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex border-none">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full rotate"
          src={badge_icon.get(level)}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span
            className="truncate ml-2 text-medium font-medium"
            style={{ color: "#ffffff" }}
          >
            {full_name}
          </span>
          <div className="rotate">
            <svg
              className="w-3 h-3 flex-shrink-0 ml-2 fill-current text-gray-400"
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </button>

      <Transition
        // style={{ backgroundColor: "#fff" }}
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          style={{ backgroundColor: "#1F1F20", opacity: "0.9" }}
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
          className="rounded-lg"
        >
          <div className="pt-0.5 pb-2 px-3 mb-1">
            <div className="font-medium text-white">{full_name}</div>
            <div className="text-xs italic">
              <h1 style={{ color: "#00ddd4" }}>{mesons_username}</h1>
            </div>
          </div>
          <ul>
            <li>
              {/* <Link
                style={{ color: "#fff" }}
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                to="/dashboard"
              >
                Personal Info
              </Link> */}
            </li>
            <li>
              <Link
                style={{ color: "#fff" }}
                className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-2 px-3"
                to="/login"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;

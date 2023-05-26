import React from "react";
import LinkIcon from "../../images/link.svg";
import { daily } from "./../../computation";
function DailyCodeforcesChallenge() {
  var obj = daily();
  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg"
    >
      <header className="px-5 pt-4">
        <h1 className="text-white text-2xl pt-1">Daily Challenge</h1>
      </header>
      <div className="px-5 pt-5">
        <div className="flex justify-between cursor-pointer">
          <a
            style={{
              textOverflow: "ellipsis",
              width: "75%",
              color: "#00ddd4",
              letterSpacing: "0.05rem",
              textDecoration: "underline",
            }}
            target="_blank"
            href={obj.codeforces_problem.codeforces_problem_url}
            className="text-xl mb-2"
          >
            {obj.codeforces_problem.codeforces_problem_name}
          </a>
          <img
            alt=""
            style={{ width: "24px", marginBottom: "10px" }}
            src={LinkIcon}
          ></img>
        </div>

        <div className="flex pb-1">
          <h1 className="text-s font-semibold text-gray-400 mb-1">Accuracy:</h1>
          <h1 className="font-bold text-white ml-2">
            {obj.codeforces_problem.codeforces_problem_accuracy} %
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DailyCodeforcesChallenge;

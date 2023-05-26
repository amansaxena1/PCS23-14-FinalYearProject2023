import React from "react";
import LineChart from "../../charts/LineChart01";
import { useSelector } from "react-redux";

function DailyLineCard(props) {
  const yourdata = useSelector((state) => state.allData.data.data[0].user[0]);
  const frienddata = props.dataFromParent;

  var your_name = yourdata.full_name;
  var your_accepted = yourdata.total_questions;
  var your_codeforces = yourdata.codeforces.codeforces_daily_graph;
  var your_codechef = yourdata.codechef.codechef_daily_graph;
  var your_leetcode = yourdata.leetcode.leetcode_daily_graph;
  // var your_graph =
  var friend_name = frienddata.full_name;
  var friend_accepted = frienddata.total_questions;
  var friend_codeforces = frienddata.codeforces.codeforces_daily_graph;
  var friend_codechef = frienddata.codechef.codechef_daily_graph;
  var friend_leetcode = frienddata.leetcode.leetcode_daily_graph;
  // var friend_graph =

  var currentTimeInSeconds = Math.floor(1672531200000 / 1000);
  var prior = currentTimeInSeconds - 86400 * 365;
  var your_dates = new Map();
  var friend_dates = new Map();
  for (var i = prior; i <= currentTimeInSeconds + 86400; i += 86400) {
    var temp = new Date(i * 1000);
    your_dates.set(
      (temp.getDate() > 9
        ? String(temp.getDate())
        : "0" + String(temp.getDate())) +
        "/" +
        (temp.getMonth() + 1 > 9
          ? String(temp.getMonth() + 1)
          : "0" + String(temp.getMonth() + 1)) +
        "/20" +
        String(temp.getYear() - 100),
      0
    );
    friend_dates.set(
      (temp.getDate() > 9
        ? String(temp.getDate())
        : "0" + String(temp.getDate())) +
        "/" +
        (temp.getMonth() + 1 > 9
          ? String(temp.getMonth() + 1)
          : "0" + String(temp.getMonth() + 1)) +
        "/20" +
        String(temp.getYear() - 100),
      0
    );
  }
  your_codechef.forEach((element) => {
    if (your_dates.has(element.date)) {
      your_dates.set(
        element.date,
        your_dates.get(element.date) + element.no_of_questions
      );
    }
  });
  your_codeforces.forEach((element) => {
    if (your_dates.has(element.date)) {
      your_dates.set(
        element.date,
        your_dates.get(element.date) + element.no_of_questions
      );
    }
  });
  your_leetcode.forEach((element) => {
    if (your_dates.has(element.date)) {
      your_dates.set(
        element.date,
        your_dates.get(element.date) + element.no_of_questions
      );
    }
  });

  friend_codechef.forEach((element) => {
    if (friend_dates.has(element.date)) {
      friend_dates.set(
        element.date,
        friend_dates.get(element.date) + element.no_of_questions
      );
    }
  });
  friend_codeforces.forEach((element) => {
    if (friend_dates.has(element.date)) {
      friend_dates.set(
        element.date,
        friend_dates.get(element.date) + element.no_of_questions
      );
    }
  });
  friend_leetcode.forEach((element) => {
    if (friend_dates.has(element.date)) {
      friend_dates.set(
        element.date,
        friend_dates.get(element.date) + element.no_of_questions
      );
    }
  });

  var labels = [];
  var your_questions = [];
  var friend_questions = [];

  your_dates.forEach((value, key) => {
    labels.push(key);
    your_questions.push(value);
  });

  friend_dates.forEach((value, key) => {
    friend_questions.push(value);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: your_questions,
        fill: true,
        borderColor: "#00ddd4",
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "#000",
        clip: 20,
      },
      {
        data: friend_questions,
        fill: true,
        borderColor: "#d6d6d6",
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: "#000",
        clip: 20,
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full shadow-lg rounded-lg"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Daily Graph</h2>
      </header>
      <div className="flex justify-evenly">
        <div
          style={{ backgroundColor: "#202020" }}
          className="px-4 pb-1 rounded-lg"
        >
          <h1 style={{ color: "#00ddd4" }} className="text-3xl font-bold">
            {your_accepted}
          </h1>
          <div className="text-xs font-semibold text-gray-400">
            total solved
          </div>
          <h1
            style={{ textTransform: "capitalize" }}
            className="text-lg font-semibold text-white mb-1"
          >
            {your_name}
          </h1>
        </div>
        <div
          style={{ backgroundColor: "#202020" }}
          className="px-4 pb-1 rounded-lg"
        >
          <h1 style={{ color: "#bbbbbb" }} className="text-3xl font-bold">
            {friend_accepted}
          </h1>
          <div className="text-xs font-semibold text-gray-400">
            total solved
          </div>
          <h1
            style={{ textTransform: "capitalize" }}
            className="text-lg font-semibold text-white mb-1"
          >
            {friend_name}
          </h1>
        </div>
      </div>
      <div className="flex-grow">
        <LineChart data={chartData} width={1200} height={250} />
      </div>
    </div>
  );
}

export default DailyLineCard;

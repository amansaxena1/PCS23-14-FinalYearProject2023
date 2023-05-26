import React from "react";
import LineChart from "../../charts/LineChart01";
import LeetcodeLogo from "../../images/LeetCode.svg";
import { useSelector } from "react-redux";
function LeetcodeCard(props) {
  const yourdata = useSelector(
    (state) => state.allData.data.data[0].user[0].leetcode
  );
  const frienddata = props.dataFromParent.leetcode;
  var your_submissions = yourdata.leetcode_last_30_days_submissions;
  var your_username = yourdata.leetcode_username;
  var friend_submissions = frienddata.leetcode_last_30_days_submissions;
  var friend_username = frienddata.leetcode_username;

  var currentTimeInSeconds = Math.floor(Date.now() / 1000);
  var prior = currentTimeInSeconds - 86400 * 30;
  var dates = new Map();
  var friend_dates = new Map();
  for (var i = prior; i <= currentTimeInSeconds + 86400; i += 86400) {
    var temp = new Date(i * 1000);
    dates.set(
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
  // var friend_dates = dates;
  your_submissions.forEach((element) => {
    if (dates.has(element.date)) {
      dates.set(element.date, element.no_of_questions);
    }
  });

  friend_submissions.forEach((element) => {
    if (dates.has(element.date)) {
      friend_dates.set(element.date, element.no_of_questions);
    }
  });

  var labels = [];
  var questions = [];

  dates.forEach((value, key) => {
    labels.push(key);
    questions.push(value);
  });

  var friend_questions = [];

  friend_dates.forEach((value, key) => {
    friend_questions.push(value);
  });

  const chartData = {
    labels: labels,
    datasets: [
      // Indigo line
      {
        data: questions,
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
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg"
    >
      <div className="px-5 pt-5">
        <header className="flex mb-2">
          <div
            style={{
              backgroundColor: "#fff",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <img alt="" src={LeetcodeLogo} />
          </div>
          <h1 className="text-2xl font-semibold text-white mb-2 ml-3">
            Leetcode
          </h1>
        </header>
        <div className="flex w-100 justify-around">
          <h1
            style={{ color: "#00ddd4" }}
            className="text-lg font-semibold text-white mb-2"
          >
            {your_username}
          </h1>
          <h1 className="text-lg font-semibold text-white mb-2">vs</h1>
          <h1
            style={{ color: "#d6d6d6" }}
            className="text-lg font-semibold text-white mb-2"
          >
            {friend_username}
          </h1>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default LeetcodeCard;

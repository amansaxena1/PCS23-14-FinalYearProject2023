import React from "react";
import LineChart from "../../charts/LineChart01";
import { useSelector } from "react-redux";

function DailyLineCardCodechef() {
  const data = useSelector((state) => state.allData.data);

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0];
    var currentTimeInSeconds = Math.floor(1672531200000 / 1000);
    var prior = currentTimeInSeconds - 86400 * 365;
    var dates = new Map();
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
    }
    fetcheddata.codechef.codechef_daily_graph.forEach((element) => {
      if (dates.has(element.date)) {
        dates.set(
          element.date,
          dates.get(element.date) + element.no_of_questions
        );
      }
    });
  }

  var labels = [];
  var questions = [];

  dates.forEach((value, key) => {
    labels.push(key);
    questions.push(value);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: questions,
        fill: true,
        backgroundColor: "#213E3B",
        borderColor: "#00ddd4",
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
      <header className="px-5 pt-4">
        <h1 className="text-white text-2xl pt-2">Daily Graph</h1>
      </header>
      <div className="px-5 pt-5">
        <h1 className="text-lg font-semibold text-white mb-2">
          {fetcheddata.codechef_username}
        </h1>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
          Total solved
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-white mr-2">
            {fetcheddata.codechef.codechef_total_accepted_questions}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <LineChart data={chartData} width={1200} height={235} />
      </div>
    </div>
  );
}

export default DailyLineCardCodechef;

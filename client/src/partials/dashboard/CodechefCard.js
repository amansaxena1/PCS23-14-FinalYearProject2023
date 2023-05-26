import React from "react";
import LineChart from "../../charts/LineChart01";
import CodechefLogo from "../../images/codechef.svg";
import { useSelector } from "react-redux";
function CodechefCard() {
  const data = useSelector((state) => state.allData.data);

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0].codechef;
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    var prior = currentTimeInSeconds - 86400 * 30;
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
    fetcheddata.codechef_last_30_days_submissions.forEach((element) => {
      if (dates.has(element.date)) {
        dates.set(element.date, element.no_of_questions);
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
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg"
    >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
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
            <img alt="" src={CodechefLogo} />
          </div>
        </header>
        <h2 className="text-lg font-semibold text-white mb-2">
          {fetcheddata.codechef_username}
        </h2>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
          codechef
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-white mr-2">
            {fetcheddata.codechef_total_accepted_questions}
          </div>
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

export default CodechefCard;

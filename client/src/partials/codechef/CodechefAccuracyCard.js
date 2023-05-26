import React from "react";
import HorizontalBarChart from "../../charts/HorizontalBarChart";
import { useSelector } from "react-redux";

function CodechefAccuracyCard() {
  const data = useSelector(
    (state) => state.allData.data.data[0].user[0].codechef
  );
  const chartData = {
    labels: ["Accept", "Wrong"],
    datasets: [
      {
        label: "",
        data: [
          data.codechef_total_accepted_questions,
          data.codechef_total_wrong_submissions,
        ],
        backgroundColor: "#213E3B",
        borderWidth: 2,
        borderColor: "#00ddd4",
        hoverBackgroundColor: "#00ddd4",
        barPercentage: 0.8,
        categoryPercentage: 0.5,
        borderRadius: 15,
      },
    ],
  };
  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-full xl:col-span-4 shadow-lg rounded-lg"
    >
      <header className="px-5 pt-4">
        <h1 className="text-white text-2xl pt-1">Accuracy</h1>
      </header>
      <div>
        <div className="pr-5">
          <HorizontalBarChart data={chartData} width={389} height={108} />
        </div>
      </div>
    </div>
  );
}

export default CodechefAccuracyCard;

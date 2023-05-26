import React from "react";
// import { Link } from 'react-router-dom';
// import LineChart from '../../charts/LineChart01';
// import Icon from '../../images/icon-01.svg';
// import EditMenu from '../EditMenu';
import BarChart from "../../charts/BarChart04";

function DifficultyWiseQuestions(props) {
  const data = props.dataFromParent;

  // console.log("data", data);
  const chartData = {
    labels: ["Leetcode", "Codeforces", "Codechef"],
    datasets: [
      {
        label: "Easy",
        data: [data.leetcode_easy, data.codeforces_easy, data.codechef_easy],
        backgroundColor: "#1B5D59",
        hoverBackgroundColor: "#00ddd4",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#00ddd4",
      },
      {
        label: "Medium",
        data: [
          data.leetcode_medium,
          data.codeforces_medium,
          data.codechef_medium,
        ],
        backgroundColor: "#7F681C",
        hoverBackgroundColor: "#ffd13d",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ffd13d",
      },
      {
        label: "Hard",
        data: [data.leetcode_hard, data.codeforces_hard, data.codechef_hard],
        backgroundColor: "#79363C",
        hoverBackgroundColor: "#f06e7d",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#f06e7d",
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Difficulty Wise Questions</h2>
      </header>
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default DifficultyWiseQuestions;

import React from "react";
import DoughnutChart from "../../charts/DoughnutChart";

function TotalQuestions(props) {
  const data = props.dataFromParent;
  const chartData = {
    labels: ["Codeforces", "Codechef", "Leetcode"],
    datasets: [
      {
        hoverOffset: 14,
        label: "Website",
        data: [
          data.codeforces_questions,
          data.codechef_questions,
          data.leetcode_questions,
        ],
        backgroundColor: ["#79363C", "#4A351F", "#7F681C"],
        hoverBackgroundColor: ["#f06e7d", "#965c21", "#ffd13d"],
        cutout: 40,
        radius: "120%",
        borderWidth: 3,
        borderColor: ["#f06e7d", "#965c21", "#ffd13d"],
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Total Questions</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={210} />
    </div>
  );
}

export default TotalQuestions;

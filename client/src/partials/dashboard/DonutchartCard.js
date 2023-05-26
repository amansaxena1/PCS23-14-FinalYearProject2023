import React from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { useSelector } from "react-redux";

function DonutchartCard() {
  const data = useSelector((state) => state.allData.data);

  var obj = {
    total_codeforces: 0,
    total_codechef: 0,
    total_leetcode: 0,
  };

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0];

    obj = {
      total_codeforces:
        fetcheddata.codeforces.codeforces_total_accepted_questions,
      total_codechef: fetcheddata.codechef.codechef_total_accepted_questions,
      total_leetcode: fetcheddata.leetcode.leetcode_total_accepted_questions,
    };
    // console.log("donutgraph", obj);
  }

  const chartData = {
    labels: ["Codeforces", "Codechef", "Leetcode"],
    datasets: [
      {
        hoverOffset: 14,
        label: "Website",
        data: [obj.total_codeforces, obj.total_codechef, obj.total_leetcode],
        backgroundColor: ["#79363C", "#4A351F", "#7F681C"],
        hoverBackgroundColor: ["#f06e7d", "#965c21", "#ffd13d"],
        cutout: 35,
        radius: "140%",
        borderWidth: 3,
        borderColor: ["#f06e7d", "#965c21", "#ffd13d"],
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Ratio</h2>
      </header>
      <DoughnutChart data={chartData} width={389} height={170} />
    </div>
  );
}

export default DonutchartCard;

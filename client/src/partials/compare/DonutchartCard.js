import React from "react";
import DoughnutChart from "../../charts/DoughnutChart";
import { useSelector } from "react-redux";
function DonutchartCard(props) {
  const yourdata = useSelector((state) => state.allData.data.data[0].user[0]);
  //codeforces_total_accepted_questions
  const yourcodeforces =
    yourdata.codeforces.codeforces_total_accepted_questions;
  const yourcodechef = yourdata.codechef.codechef_total_accepted_questions;
  const yourleetcode = yourdata.leetcode.leetcode_total_accepted_questions;

  const friendcodeforces =
    props.dataFromParent.codeforces.codeforces_total_accepted_questions;
  const friendcodechef =
    props.dataFromParent.codechef.codechef_total_accepted_questions;
  const friendleetcode =
    props.dataFromParent.leetcode.leetcode_total_accepted_questions;

  const chartData = {
    labels: ["Codeforces", "Codechef", "Leetcode"],
    datasets: [
      {
        hoverOffset: 14,
        label: "Website",
        data: [yourcodeforces, yourcodechef, yourleetcode],
        backgroundColor: ["#79363C", "#4A351F", "#7F681C"],
        hoverBackgroundColor: ["#f06e7d", "#965c21", "#ffd13d"],
        cutout: 35,
        radius: "140%",
        borderWidth: 3,
        borderColor: ["#f06e7d", "#965c21", "#ffd13d"],
      },
    ],
  };
  const chartData2 = {
    labels: ["Codeforces", "Codechef", "Leetcode"],
    datasets: [
      {
        hoverOffset: 14,
        label: "Website",
        data: [friendcodeforces, friendcodechef, friendleetcode],
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
      className="col-span-full xl:col-span-8 shadow-lg rounded-lg"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Ratio</h2>
      </header>
      <div className="flex">
        <div className="w-1/2">
          <DoughnutChart data={chartData} width={409} height={173} />
        </div>
        <div className="w-1/2">
          <DoughnutChart data={chartData2} width={409} height={173} />
        </div>
      </div>
    </div>
  );
}

export default DonutchartCard;

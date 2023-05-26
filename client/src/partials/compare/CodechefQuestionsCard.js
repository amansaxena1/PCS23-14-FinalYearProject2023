import React from "react";
import CodechefQuestionsBarChart from "../../charts/CodechefQuestionsBarChart";
import { useSelector } from "react-redux";
function CodechefQuestionsCard(props) {
  const yourdata = useSelector((state) => state.allData.data.data[0].user[0]);
  console.log("Data-------> ", props.dataFromParent);
  const friendeasy =
    props.dataFromParent.codechef.codechef_total_easy_accepted_questions;
  const friendmedium =
    props.dataFromParent.codechef.codechef_total_medium_accepted_questions;
  const friendhard =
    props.dataFromParent.codechef.codechef_total_hard_accepted_questions;
  const friendname = props.dataFromParent.full_name;
  const youreasy = yourdata.codechef.codechef_total_easy_accepted_questions;
  const yourmedium = yourdata.codechef.codechef_total_medium_accepted_questions;
  const yourhard = yourdata.codechef.codechef_total_hard_accepted_questions;
  const yourname = yourdata.full_name;

  const chartData = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: yourname,
        data: [youreasy, yourmedium, yourhard],
        backgroundColor: "#1B5D59",
        hoverBackgroundColor: "#00ddd4",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#00ddd4",
      },
      {
        label: friendname,
        data: [friendeasy, friendmedium, friendhard],
        backgroundColor: "#757574",
        hoverBackgroundColor: "#d6d6d6",
        barPercentage: 0.66,
        categoryPercentage: 0.66,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#d6d6d6",
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Codechef</h2>
      </header>
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <CodechefQuestionsBarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default CodechefQuestionsCard;

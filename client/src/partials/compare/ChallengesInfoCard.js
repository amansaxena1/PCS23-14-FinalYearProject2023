import React from "react";
import ChallengesInfoBarChart from "../../charts/ChallengesInfoBarChart";
import { useSelector } from "react-redux";
function ChallengesInfoCard(props) {
  const yourdata = useSelector((state) => state.allData.data.data[0].user[0]);
  // console.log("Data-------> ", yourdata);
  const yourwon = yourdata.challenges.won_challenges_number;
  const yourlost = yourdata.challenges.lost_challenges_number;
  const yourpending = yourdata.challenges.assigned_challenges_number;
  const yourname = yourdata.full_name;
  const friendwon = props.dataFromParent.challenges.won_challenges_number;
  const friendlost = props.dataFromParent.challenges.lost_challenges_number;
  const friendpending =
    props.dataFromParent.challenges.assigned_challenges_number;
  const friendname = props.dataFromParent.full_name;

  const chartData = {
    labels: ["Won", "Lost", "Pending"],
    datasets: [
      {
        label: yourname,
        data: [yourwon, yourlost, yourpending],
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
        data: [friendwon, friendlost, friendpending],
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
        <h2 className="text-white text-2xl mt-2">Challenges</h2>
      </header>
      <div className="flex-grow">
        {/* Change the height attribute to adjust the chart height */}
        <ChallengesInfoBarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default ChallengesInfoCard;

import React from "react";
import BarChartChallengesInfo from "../../charts/BarChartChallengesInfo";
function ChallengesInfo(props) {
  const data = props.dataFromParent;
  const chartData = {
    labels: ["Total", "Won", "Lost", "Pending"],
    datasets: [
      {
        label: "",
        data: [(data.won+data.lost), data.won, data.lost, data.pending],
        backgroundColor: "#213E3B",
        borderWidth: 2,
        borderColor: "#00ddd4",
        hoverBackgroundColor: "#00ddd4",
        barPercentage: 0.44,
        categoryPercentage: 0.66,
        borderRadius: 15,
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Challenges Info</h2>
      </header>
      <div className="flex-grow">
        <BarChartChallengesInfo data={chartData} width={595} height={260} />
      </div>
    </div>
  );
}

export default ChallengesInfo;

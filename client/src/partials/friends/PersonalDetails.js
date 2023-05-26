import React, { useEffect, useState } from "react";
import LineChart from "../../charts/LineChart01";
import User from "../../images/badges/level1.svg";
import Addfriend from "../../images/addfriend.svg";
import { checkFriend, addNewFriend } from "../../computation";
import Badge1 from "../../images/badges/level1.svg";
import Badge2 from "../../images/badges/level2.svg";
import Badge3 from "../../images/badges/level3.svg";
import Badge4 from "../../images/badges/level4.svg";
import Badge5 from "../../images/badges/level5.svg";
import Badge6 from "../../images/badges/level6.svg";

function PersonalDetails(props) {
  const [isfriend, setisfriend] = useState(false);

  const badge_icon = new Map();
  badge_icon.set("Badge1", Badge1);
  badge_icon.set("Badge2", Badge2);
  badge_icon.set("Badge3", Badge3);
  badge_icon.set("Badge4", Badge4);
  badge_icon.set("Badge5", Badge5);
  badge_icon.set("Badge6", Badge6);

  const badge_rank = new Map();
  badge_rank.set("Badge1", "Hustler");
  badge_rank.set("Badge2", "Professional");
  badge_rank.set("Badge3", "Veteran");
  badge_rank.set("Badge4", "Emperor");
  badge_rank.set("Badge5", "Sovereign");
  badge_rank.set("Badge6", "Grand Overlord");

  const data = props.dataFromParent;

  useEffect(() => {
    setisfriend(!checkFriend(data.mesons_username));
  }, []);

  const chartData = {
    labels: props.dataFromParent.labels,
    datasets: [
      // Indigo line
      {
        data: props.dataFromParent.questions,
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
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Personal Details</h2>
      </header>
      <div className="flex justify-between">
        <div className="px-5 pt-2">
          <h1 className="text-2xl font-bold text-white mr-2">{data.name}</h1>
          <h2
            style={{ color: "#00ddd4", letterSpacing: 1 }}
            className="mt-1 text-lg font-bold text-white mb-2"
          >
            {badge_rank.get(data.level)}
          </h2>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="text-xs font-semibold text-white lowercase">
              {data.mesons_username}
            </div>
            {isfriend ? (
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
                className="ml-2 cursor-pointer"
                onClick={() => addNewFriend(data.mesons_username)}
              >
                <img alt="" src={Addfriend} />
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex justify-end px-2 pr-5">
          <img
            alt=""
            className="badge"
            src={badge_icon.get(data.level)}
            width="80"
            height="80"
          />
        </div>
      </div>
      <div className="flex-grow">
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default PersonalDetails;

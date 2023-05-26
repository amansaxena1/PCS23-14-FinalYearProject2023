import React from "react";
import { useHistory } from "react-router-dom";
import EditMenu from "../EditMenu";
import Badge1 from "../../images/badges/level1.svg";
import Badge2 from "../../images/badges/level2.svg";
import Badge3 from "../../images/badges/level3.svg";
import Badge4 from "../../images/badges/level4.svg";
import Badge5 from "../../images/badges/level5.svg";
import Badge6 from "../../images/badges/level6.svg";

function AllFriends(props) {
  const history = useHistory();
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

  function handleClick() {
    history.push({
      pathname: "/individualfriend",
      state: { username: props.dataFromParent.friend },
    });
  }
  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg hover:shadow-2xl cursor-pointer"
      onClick={handleClick}
    >
      <div className="px-5 pt-5">
        <div className="flex justify-between items-start">
          <div className="text-2xl font-bold text-white mr-2">
            {props.dataFromParent.name}
          </div>
          <EditMenu className="relative inline-flex">
            <li className="mx-0">
              <p className="font-medium text-sm text-red-600 flex justify-center">
                Remove friend
              </p>
            </li>
          </EditMenu>
        </div>
        <div className="flex justify-between mb-1">
          <div>
            <h2
              // style={{ color: "#32be91" }}
              className="text-sm font-semibold text-white mb-2"
            >
              {props.dataFromParent.friend}
            </h2>
            <div style={{color:"#00ddd4",letterSpacing:1}} className="text-m font-bold mb-1">
              {badge_rank.get(props.dataFromParent.badge)}
              {/* {props.dataFromParent.rank} */}
            </div>
            <div className="mt-2 text-xs font-semibold text-white lowercase">
              {props.dataFromParent.questions}
            </div>
          </div>
          <div className="flex justify-end mr-1 mt-4 mb-2 rounded-lg pb-2">
            <img
              className="rotate"
              style={{ borderRadius: 12 }}
              src={badge_icon.get(props.dataFromParent.badge)}
              width="70"
              height="70"
              alt="Icon 01"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllFriends;

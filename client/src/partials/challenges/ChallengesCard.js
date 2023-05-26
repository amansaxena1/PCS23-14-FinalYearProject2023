import React from "react";
import { useHistory } from "react-router-dom";

function ChallengesCard(props) {
  const history = useHistory();

  return (
    <div
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 rounded-xl"
      style={{ background: "#262624" }}
    >
      <div className="px-5 pt-3 pb-1 transform transition duration-500 hover:shadow-2xl">
        <div className="flex justify-between items-center mb-2">
          <h1 style={{ color: "#00ddd4" }} className="text-2xl mr-2">
            {props.dataFromParent.challenge_name}
          </h1>
          <button
            className="glw"
            style={{
              color: "#00ddd4",
              fontSize: "30px",
              outline: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: "2px",
              paddingLeft: "5px",
            }}
            onClick={() => {
              history.push({
                pathname: "/solve",
                state: { challenge_name: props.dataFromParent.challenge_name },
              });
            }}
          >
            ➤
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-sm font-semibold text-white mb-2">
              Challenged by:{" "}
              <span style={{ color: "#00ddd4" }}>
                {props.dataFromParent.challenged_by}
              </span>
            </div>
            <div className="text-sm font-semibold text-white mb-2">
              Assigned:{" "}
              <span style={{ color: "#00ddd4" }}>
                {props.dataFromParent.assigned}
              </span>
            </div>
            <div className="text-sm font-semibold text-white mb-2">
              Questions:{" "}
              <span style={{ color: "#00ddd4" }}>
                {props.dataFromParent.questions}
              </span>
            </div>
            <div className="text-sm font-semibold text-white mb-2">
              Duration:{" "}
              <span style={{ color: "#00ddd4" }}>
                {props.dataFromParent.duration}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChallengesCard;

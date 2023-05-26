import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import GoldCoin from "../../images/goldcoin.json";
import { useSelector } from "react-redux";

function CodeforcesCoinCard() {
  const data = useSelector(
    (state) =>
      state.allData.data.data[0].user[0].leetcode
        .leetcode_total_accepted_questions
  );
  var coins = data * 5;
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: GoldCoin,
    });
    return () => {
      lottie.destroy();
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 shadow-lg rounded-lg"
    >
      <div className="flex px-2">
        <div style={{ width: "70%" }} className="pl-3 pt-4">
          <header>
            <h1 className="text-white text-2xl pt-1">Coins</h1>
          </header>
          <div className="flex mt-1">
            <h1 className="text-5xl font-semibold text-white">{coins}</h1>
          </div>
        </div>
        <div
          style={{ width: "200px", height: "160px" }}
          ref={container}
          onMouseEnter={() => lottie.play()}
          onMouseLeave={() => lottie.pause()}
        />
      </div>
    </div>
  );
}

export default CodeforcesCoinCard;

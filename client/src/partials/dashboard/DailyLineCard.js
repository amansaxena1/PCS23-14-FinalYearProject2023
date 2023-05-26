import React from "react";
import LineChart from "../../charts/LineChart01";
import { useSelector } from "react-redux";

function DailyLineCard() {
  const data = useSelector((state) => state.allData.data);

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0];
    var currentTimeInSeconds = Math.floor(1672531200000 / 1000);
    var prior = currentTimeInSeconds - 86400 * 365;
    var dates = new Map();
    for (var i = prior; i <= currentTimeInSeconds + 86400; i += 86400) {
      var temp = new Date(i * 1000);
      dates.set(
        (temp.getDate() > 9
          ? String(temp.getDate())
          : "0" + String(temp.getDate())) +
          "/" +
          (temp.getMonth() + 1 > 9
            ? String(temp.getMonth() + 1)
            : "0" + String(temp.getMonth() + 1)) +
          "/20" +
          String(temp.getYear() - 100),
        0
      );
    }
    fetcheddata.codechef.codechef_daily_graph.forEach((element) => {
      if (dates.has(element.date)) {
        dates.set(
          element.date,
          dates.get(element.date) + element.no_of_questions
        );
      }
    });
    fetcheddata.codeforces.codeforces_daily_graph.forEach((element) => {
      if (dates.has(element.date)) {
        dates.set(
          element.date,
          dates.get(element.date) + element.no_of_questions
        );
      }
    });
    fetcheddata.leetcode.leetcode_daily_graph.forEach((element) => {
      if (dates.has(element.date)) {
        dates.set(
          element.date,
          dates.get(element.date) + element.no_of_questions
        );
      }
    });
  }
  // console.log(dates);

  var labels = [];
  var questions = [];

  dates.forEach((value, key) => {
    labels.push(key);
    questions.push(value);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: questions,
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
      className="col-span-full shadow-lg rounded-lg"
    >
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <svg
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            enableBackground="new 0 0 32 32"
          >
            <image
              id="image0"
              width="32"
              height="32"
              x="0"
              y="0"
              href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABxVBMVEUAAAAA//8s4tYs4tYr
                4dYs4tcr4dYt4dIs4NUs4dYs49ks4tcr4tcAf38t5Ngr4tYr4dcr49cs4tgs4tYA/6or49cs4dgp
                59sr4tcr4tYs4tcs4dYs4dcs39Us4dcA//8s4tcs4NYp4dUr4dcr4dcs4dYf398s4dcp3tUs5Ngr
                4NYs4dcr4dYr4dYs4dYs4dYq4dgv388r4tgr4tYs4dYq5toq4tYt4tUAqqozzMwr4tYr4dYt5dkr
                4dYr4dYs4dcr49cr4tgr49gq1NQr4dYs4tcq3dQs4tcu4tYs4tYr4dcr5Ncs4toq4Nct49or4tYs
                4dcs4tcs4dcq4NQt49Ur4tYr4tYs4tYs49gs4tcp49Ur4dcr4dYs4dcr4dYs5NYr4dcq4tQt4dUs
                4tYq4dYr4dYs4tYr4tgs4dYs4dYr4Ngt4dkq4Noc4sY///8s4tcq6dQs4dcs4tYr4NUs4dgs4dYr
                4tcs39Us4dUq/9Qs4tcr4dYv59cs4tcs4dYx4dcq49gs4dcs49gs4tcs4tYm5dgr4dgs49cr4tcs
                4dcr4dYs4tcr4tMo5NYv4tks4dcq39Qs49cr4dYr4dYs4dcs4tf///8wIk+YAAAAlXRSTlMAAmzW
                /OaREaHWS6G2AlWZk0CQ1QOugyv6amL+NGKbAa1/K7bT8gitN1aZ2t7IyZw8EKregypZPgMFmJ09
                3/ZnU5iSBqTPHtQshMY6P1Qcn8jE9kJJWNf4d5Y3teTJXjm0Ek+fX/TfNevEOz0qCQTDDKbydlal
                hkpoBrOjINrzGkLseP3UFJ2JjfPjqDUTG+IYm+v7z70Lw3gAAAABYktHRJaRaSs5AAAACXBIWXMA
                AA7DAAAOwwHHb6hkAAAAB3RJTUUH5QscECIYT7qEoQAAAY5JREFUOMt1kvc/QlEYxi8NI0RWCdce
                obJH9syqjCQhEUIiO3vvzfl/3Xvuud1zde/z0/M+7/dz3rMIAikqWiKVyWMIUcUCWnGiRDxgJBcD
                FAiQiQEJCJCyQWKSMjkFA1QISEV1WjpdZXBAppoBNKjOgpU2myNyIJFLojKP4fOxIQWqwqLiErYq
                jQQolYFy1uoiRkBVVFbpDUaCqK4BtTRQB9P6hsYmaJpbmHVNrW3tHWRnVzc8Zk8vFfX10zYXsBow
                c6sOwmSIcsPhPhjBxsqYaNRssXKADgPUQEA2DBiDyfjEpH1KGDA66GSack4OUOJnn3HNzs3Txs0B
                buEnN4WBBY8gsIjaS97llVWBvsW3tq6z6Q0bBOGXOKh39/g38X5gy2cJF9tBEFRIwc4uU5J7+64D
                p/YQ5zVSOO6I9qFj6E94A0+1MDzjngOcX+DAJfeJySu0+2velm9gdkvZO/b0Vt6Me5jZ6R/hQMAD
                Dwg9PoFnL7QvTF/7+u9iAm/oj79/CCzA0+fX98+vV7j3B8WZ1SoeDOJZAAAAJXRFWHRkYXRlOmNy
                ZWF0ZQAyMDIxLTExLTI4VDEzOjM0OjI0KzAzOjAwGg1x5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy
                MS0xMS0yOFQxMzozNDoyNCswMzowMGtQyVsAAAAASUVORK5CYII="
            />
          </svg>
        </header>
        <h1 className="text-lg font-semibold text-white mb-2">
          {fetcheddata.mesons_username}
        </h1>
        <div className="text-xs font-semibold text-gray-400 uppercase mb-1">
          total solved
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-white mr-2">
            {fetcheddata.total_questions}
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <LineChart data={chartData} width={1200} height={235} />
      </div>
    </div>
  );
}

export default DailyLineCard;

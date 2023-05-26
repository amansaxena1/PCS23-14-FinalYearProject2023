import React from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

function HeatMapCardCodechef() {
  const data = useSelector((state) => state.allData.data);

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0];
    var currentTimeInSeconds = Math.floor(1672531200000 / 1000);
    // var today = new Date("19 May 2022").getDay();
    var today = 4;
    var prior = currentTimeInSeconds - 86400 * (363 + today);
    var dates = new Map();
    // var d = new Date("19 May 2022");
    // var today = new Date().getDay();
    for (var i = prior; i <= currentTimeInSeconds; i += 86400) {
      var temp = new Date(i * 1000);
      dates.set(
        (temp.getMonth() + 1 > 9
          ? String(temp.getMonth() + 1)
          : "0" + String(temp.getMonth() + 1)) +
          "/" +
          (temp.getDate() > 9
            ? String(temp.getDate())
            : "0" + String(temp.getDate())) +
          "/20" +
          String(temp.getYear() - 100),
        0
      );
    }

    var format = (date) => {
      var m1 = date[3];
      var m2 = date[4];
      var d1 = date[0];
      var d2 = date[1];
      var dt = m1 + m2 + "/" + d1 + d2 + "/20" + date[8] + date[9];
      return dt;
    };

    fetcheddata.codechef.codechef_daily_graph.forEach((element) => {
      var dt = format(element.date);
      if (dates.get(dt) != undefined)
        dates.set(dt, dates.get(dt) + element.no_of_questions);
    });

    // console.log(dates);

    var arr1 = [],
      arr2 = [],
      arr3 = [],
      arr4 = [],
      arr5 = [],
      arr6 = [],
      arr7 = [];

    var c = 0;
    dates.forEach((element) => {
      if (c % 7 === 0) arr1.push(element);
      else if (c % 7 === 1) arr2.push(element);
      else if (c % 7 === 2) arr3.push(element);
      else if (c % 7 === 3) arr4.push(element);
      else if (c % 7 === 4) arr5.push(element);
      else if (c % 7 === 5) arr6.push(element);
      else if (c % 7 === 6) arr7.push(element);
      c++;
    });
  }
  // console.log(
  //   arr1,
  //   arr2,
  //   arr3,
  //   arr4,
  //   arr5,
  //   arr6,
  //   arr7
  // );

  const s = {
    series: [
      {
        name: "sun",
        data: arr7,
      },
      {
        name: "sat",
        data: arr6,
      },
      {
        name: "fri",
        data: arr5,
      },
      {
        name: "thu",
        data: arr4,
      },
      {
        name: "wed",
        data: arr3,
      },
      {
        name: "tue",
        data: arr2,
      },
      {
        name: "mon",
        data: arr1,
      },
    ],

    options: {
      legend: {
        show: false,
      },
      colors: ["#167875"],
      plotOptions: {
        heatmap: {
          radius: 5,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 0,
                name: "No submission",
                color: "#525252",
              },
            ],
          },
        },
      },
      chart: {
        redrawOnParentResize: false,
        type: "heatmap",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 3,
        colors: ["#262625"],
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#fff"],
          },
        },
      },
      xaxis: {
        type: "category",
        categories: [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
          "oct",
          "nov",
          "dec",
        ],
        labels: {
          style: {
            colors: [
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
              "#fff",
            ],
          },
        },
      },
      grid: {
        padding: {
          right: 20,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full shadow-lg rounded-lg"
    >
      <header className="px-5 py-4">
        <h1 className="text-white text-2xl pt-2">Daily Submissions</h1>
      </header>
      <div className="">
        <ReactApexChart
          options={s.options}
          series={s.series}
          type="heatmap"
          height={250}
        />
      </div>
    </div>
  );
}

export default HeatMapCardCodechef;

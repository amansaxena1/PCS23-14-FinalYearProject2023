import React from "react";
import CodeforcesLogo from "../../images/codeforces.svg";
import CodechefLogo from "../../images/codechef.svg";
import LeetcodeLogo from "../../images/LeetCode.svg";

function RecentSubmissions(props) {
  const data = props.dataFromParent.submissions;
  // console.log("data", data);
  // const data = [
  //   {
  //     key: 1,
  //     questions: "Destroying Asteroids",
  //     verdict: "Accepted",
  //     url: "#",
  //     platform: "codechef",
  //   },
  //   {
  //     key: 2,
  //     questions: "Minimum NUmber Of Arrows To Burst Baloon",
  //     verdict: "Accepted",
  //     url: "#",
  //     platform: "leetcode",
  //   },
  //   {
  //     key: 3,
  //     questions: "Destroying Asteroids",
  //     verdict: "Accepted",
  //     url: "#",
  //     platform: "codeforces",
  //   },
  //   {
  //     key: 4,
  //     questions: "Destroying Asteroids",
  //     verdict: "Wrong",
  //     url: "#",
  //     platform: "leetcode",
  //   },
  //   {
  //     key: 5,
  //     questions: "Destroying Asteroids",
  //     verdict: "Accepted",
  //     url: "#",
  //     platform: "leetcode",
  //   },
  // ];

  const platform_logo = new Map();
  platform_logo.set("codeforces", CodeforcesLogo);
  platform_logo.set("codechef", CodechefLogo);
  platform_logo.set("leetcode", LeetcodeLogo);

  function render_data() {
    return data.map((data) => {
      const { key, problem_name, verdict, problem_url, platform } = data;
      return (
        <tr key={key}>
          <td className="pt-5 pl-3">
            <div className="flex items-center">
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                <img
                  alt=""
                  style={{ width: "20px" }}
                  src={platform_logo.get(platform)}
                />
              </div>
              <a
                style={{
                  outline: "none",
                }}
                href={problem_url}
                target="_blank"
                className="text-white ml-3 underline"
              >
                {problem_name.length > 20
                  ? problem_name.substring(0, 20) + "..."
                  : problem_name}
              </a>
            </div>
          </td>
          <td style={{ width: "17%" }} className="p-3">
            <h1
              style={{
                color:
                  verdict === "Accepted"
                    ? "#22c55e"
                    : verdict === "Wrong"
                    ? "#d9534f"
                    : "#f0ad4e",
              }}
              className="text-center text-red-500 mt-1 font-bold"
            >
              {verdict.split(" ")[0]}
            </h1>
          </td>
        </tr>
      );
    });
  }

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full xl:col-span-8 shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 pt-4">
        <h2 className="text-white text-2xl mt-2">Recent Submissions</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <tbody className="text-sm font-medium">{render_data()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentSubmissions;

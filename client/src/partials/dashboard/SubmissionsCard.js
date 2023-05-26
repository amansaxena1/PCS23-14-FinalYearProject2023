import React from "react";
import CodeforcesLogo from "../../images/codeforces.svg";
import CodechefLogo from "../../images/codechef.svg";
import LeetcodeLogo from "../../images/LeetCode.svg";
import "../../css/todoquestion.css";
import { useSelector } from "react-redux";

function SubmissionCard() {
  const dataa = useSelector(
    (state) => state.allData.data.data[0].user[0].recent_submissions
  );
  // console.log("Aman", dataa);
  var arr = [];
  var a = 0;
  dataa.map((element) => {
    arr.push({
      key: a++,
      questions: element.problem_name,
      verdict: element.verdict,
      platform: element.platform,
      url: element.problem_url,
    });
  });
  const data = [
    {
      key: 1,
      questions: "Destroying Asteroids",
      verdict: "Accepted",
      url: "#",
      platform: "codechef",
    },
    {
      key: 2,
      questions: "Destroying Asteroids",
      verdict: "Accepted",
      url: "#",
      platform: "leetcode",
    },
    {
      key: 3,
      questions: "Destroying Asteroids",
      verdict: "Accepted",
      url: "#",
      platform: "codeforces",
    },
    {
      key: 4,
      questions: "Destroying Asteroids",
      verdict: "Wrong",
      url: "#",
      platform: "leetcode",
    },
    {
      key: 5,
      questions: "Destroying Asteroids",
      verdict: "Accepted",
      url: "#",
      platform: "leetcode",
    },
    {
      key: 6,
      questions: "Destroying Asteroids",
      verdict: "Accepted",
      url: "#",
      platform: "codechef",
    },
    {
      key: 7,
      questions: "Destroying Asteroids",
      verdict: "TLE",
      url: "#",
      platform: "leetcode",
    },
  ];

  const platform_logo = new Map();
  platform_logo.set("codeforces", CodeforcesLogo);
  platform_logo.set("codechef", CodechefLogo);
  platform_logo.set("leetcode", LeetcodeLogo);

  function render_data() {
    return arr.map((data) => {
      const { key, questions, verdict, url, platform } = data;
      return (
        <tr key={key} className="tablerow">
          <td className="pl-3 py-2">
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
                style={{ letterSpacing: 0.5 }}
                href={url}
                className="text-white ml-3 underline"
                target="_blank"
              >
                {questions.length > 20
                  ? questions.substring(0, 20) + "..."
                  : questions}
              </a>
            </div>
          </td>
          <td style={{ width: "17%" }}>
            <div
              style={{
                color:
                  verdict === "Accepted"
                    ? "#22c55e"
                    : verdict === "Wrong Answer"
                    ? "#d9534f"
                    : "#f0ad4e",
              }}
              className="text-center text-red-500 font-bold"
            >
              {verdict.split(" ")[0]}
            </div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full shadow-lg rounded-lg"
    >
      <header className="px-5 pt-4">
        <h1 className="text-white text-2xl">Recent Submissions</h1>
        {/* <h1 
         style={{color:"#fff",borderRadius:"20px"}} className="px-4 py-1 cursor-pointer underline float-right text-md font-semibold viewall">View All ➜</h1> */}
      </header>
      <div className="p-2">
        <div className="mb-2">
          <table className="table-auto w-full">
            <tbody className="text-sm font-medium">{render_data()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SubmissionCard;

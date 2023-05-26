import React from "react";
import CodeforcesLogo from "../../images/codeforces.svg";
import CodechefLogo from "../../images/codechef.svg";
import LeetcodeLogo from "../../images/LeetCode.svg";
import { useSelector } from "react-redux";

function SubmissionCardCodeforces() {
  const data = useSelector(
    (state) =>
      state.allData.data.data[0].user[0].codeforces
        .codeforces_accepted_questions
  );

  const platform_logo = new Map();
  platform_logo.set("codeforces", CodeforcesLogo);
  platform_logo.set("codechef", CodechefLogo);
  platform_logo.set("leetcode", LeetcodeLogo);

  function render_data() {
    var key = 0;
    return data.map((data) => {
      return (
        <div
          key={key++}
          style={{ flexGrow: 1, maxWidth: "250px" }}
          className="flex items-center tablerow rounded-lg px-2 py-2"
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "24px",
              height: "21px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              // paddingTop: "1px",
            }}
          >
            <img
              alt=""
              style={{ width: "15px" }}
              src={platform_logo.get("codeforces")}
            />
          </div>
          <a
            style={{
              width: "250px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            target="_blank"
            href={data.codeforces_question_url}
            className="text-white ml-3 underline"
          >
            {data.codeforces_question_name}
          </a>
        </div>
      );
    });
  }

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full shadow-lg rounded-lg"
    >
      <header className="px-5 pt-4">
        <h1 className="text-white text-2xl">Accepted Submissions</h1>
      </header>
      <div className="p-2">
        <div className="flex flex-wrap justify-between pb-2">
          {render_data()}
        </div>
      </div>
    </div>
  );
}
export default SubmissionCardCodeforces;

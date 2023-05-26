import React from "react";
import CodeforcesLogo from "../../images/codeforces.svg";
import CodechefLogo from "../../images/codechef.svg";
import LeetcodeLogo from "../../images/LeetCode.svg";
import { useSelector } from "react-redux";

function InformationCard() {
  const data = useSelector((state) => state.allData.data);
  // console.log(data);

  var codeforces = {
    easy: 10,
    medium: 10,
    hard: 10,
  };
  var codechef = {
    easy: 10,
    medium: 10,
    hard: 10,
  };
  var leetcode = {
    easy: 10,
    medium: 10,
    hard: 10,
  };

  if (data.status === "success") {
    var fetcheddata = data.data[0].user[0];
    codeforces = {
      easy: fetcheddata.codeforces.codeforces_total_easy_accepted_questions,
      medium: fetcheddata.codeforces.codeforces_total_medium_accepted_questions,
      hard: fetcheddata.codeforces.codeforces_total_hard_accepted_questions,
    };
    codechef = {
      easy: fetcheddata.codechef.codechef_total_easy_accepted_questions,
      medium: fetcheddata.codechef.codechef_total_medium_accepted_questions,
      hard: fetcheddata.codechef.codechef_total_hard_accepted_questions,
    };
    leetcode = {
      easy: fetcheddata.leetcode.leetcode_total_easy_accepted_questions,
      medium: fetcheddata.leetcode.leetcode_total_medium_accepted_questions,
      hard: fetcheddata.leetcode.leetcode_total_hard_accepted_questions,
    };
  }

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full xl:col-span-8 shadow-lg rounded-lg"
    >
      <header className="px-5 py-4">
        <h1 className="text-white text-2xl">Information</h1>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead
              style={{ backgroundColor: "#1c1c1c" }}
              className="text-xs uppercase text-white rounded-lg"
            >
              <tr>
                <th className="p-3">
                  <div className="font-semibold text-left">Platform</div>
                </th>
                <th className="p-3">
                  <div className="font-semibold text-center">Easy</div>
                </th>
                <th className="p-3">
                  <div className="font-semibold text-center">Medium</div>
                </th>
                <th className="p-3">
                  <div className="font-semibold text-center">Hard</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              <tr>
                <td className="p-3 pt-5">
                  <div className="flex items-center">
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        alt=""
                        style={{ width: "18px" }}
                        src={CodeforcesLogo}
                      />
                    </div>
                    <div className="text-white ml-3">Codeforces</div>
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-center text-green-500">
                    {codeforces.easy}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-center text-yellow-500">
                    {codeforces.medium}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-center text-red-500">
                    {codeforces.hard}
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-3">
                  <div className="flex items-center">
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        alt=""
                        style={{ width: "18px" }}
                        src={CodechefLogo}
                      />
                    </div>
                    <div className="text-white ml-3">Codechef</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                    {codechef.easy}
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-yellow-500">
                    {codechef.medium}
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">
                    {codechef.hard}
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-3">
                  <div className="flex items-center">
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                    >
                      <img
                        alt=""
                        style={{ width: "18px" }}
                        src={LeetcodeLogo}
                      />
                    </div>
                    <div className="text-white ml-3">Leetcode</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">
                    {leetcode.easy}
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-yellow-500">
                    {leetcode.medium}
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">
                    {leetcode.hard}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;

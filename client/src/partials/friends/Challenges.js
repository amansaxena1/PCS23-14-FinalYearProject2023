import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Challenges(props) {
  const dataa = props.dataFromParent;
  const check = useSelector((state) => state.allData.data).data[0].challenges[0]
    .all_challenges;

  var dict = new Map();

  check.map((challenge) => {
    dict.set(challenge.challenge_name, {
      challenge_name: challenge.challenge_name,
      created_by: challenge.created_by,
      created_on: "",
    });
  });

  var data = [];
  var obj = {};
  for (var x of dataa.challenges) {
    obj = dict.get(x.challenge_name);
    obj.created_on = x.created_on;
    obj = {
      assigned_on: dict.get(x.challenge_name).created_on,
      assigned_by: dict.get(x.challenge_name).created_by,
      challenge_name: x.challenge_name,
      status: x.status,
    };
    data.push(obj);
  }

  // console.log("props", dataa);
  const history = useHistory();

  // const data = [
  //   {
  //     key: 1,
  //     name: "Challenge 01",
  //     status: "Lost",
  //     assigned_by: "dhd",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 2,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 3,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 4,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 5,
  //     name: "Challenge 01",
  //     status: "Lost",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 6,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 7,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 8,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 9,
  //     name: "Challenge 01",
  //     status: "Lost",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 10,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 11,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  //   {
  //     key: 12,
  //     name: "Challenge 01",
  //     status: "Won",
  //     assigned_by: "mesons_username",
  //     assigned_on: "22 days ago",
  //   },
  // ];

  function render_data() {
    return data.map((data) => {
      const { key, name, status, assigned_by, assigned_on } = data;
      return (
        <tr key={key}>
          <td className="p-2">
            <div className="flex items-center">
              <div
                onClick={() => {
                  history.push({
                    pathname: "/solve",
                    state: { challenge_name: name },
                  });
                }}
                className="text-white cursor-pointer"
              >
                {name}
              </div>
            </div>
          </td>
          <td className="p-2">
            <div className="text-center text-white">{status}</div>
          </td>
          <td className="p-2">
            <div
              onClick={() => {
                history.push({
                  pathname: "/individualfriend",
                  state: { username: assigned_by },
                });
              }}
              className="text-center text-green-500 underline cursor-pointer"
            >
              {assigned_by}
            </div>
          </td>
          <td className="p-2">
            <div className="text-center text-white">{assigned_on}</div>
          </td>
        </tr>
      );
    });
  }

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="col-span-full shadow-lg rounded-lg hover:shadow-2xl"
    >
      <header className="px-5 py-4">
        <h2 className="text-white text-2xl mt-2">Challenges</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead
              style={{ backgroundColor: "#1a1a1a" }}
              className="text-xs uppercase text-white rounded-lg"
            >
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Challenge Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Assigned by</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Assigned on</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium">{render_data()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Challenges;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SeachDropdown from "./SearchDropdown";
import AddIcon from "../../images/add.svg";
import CancelIcon from "../../images/cancel.svg";
import { newChallenge } from "../../computation";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions/dataActions";
import axios from "axios";

function NewChallengeCard({ sendDataToParent }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allData.data);
  const [inputFields, setInputFields] = useState([{ id: uuidv4(), url: "" }]);
  const [duration, setduration] = useState(0);
  const [assignedTo, setassignedTo] = useState("");

  const contest_number = data.data[0].challenge_id;

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setInputFields(newInputFields);
  };
  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), url: "" }]);
  };
  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const onSubmitCreate = async () => {
    // var send = false;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    var send = {
      status: false,
      challenge_name: contest_number,
      date: today,
      questions: questions,
      duration: duration,
    };
    sendDataToParent(send);
    var questions = [];
    inputFields.map((i) => {
      questions.push(i.url);
    });

    var obj = {};
    obj = {
      challenge_name: contest_number,
      questions: questions,
      duration: duration,
      assignedTo: assignedTo,
      created_by: data.data[0].user[0].mesons_username,
      number_of_problems: questions.length,
    };
    await newChallenge(obj);
    const url =
      "https://mesons-api.vercel.app/allusersdetailsdatabase/" +
      data.data[0].user[0].mesons_username;
    const response1 = await axios.get(url).catch((err) => {
      console.log("Err", err);
    });
    await dispatch(setData(response1.data));
    // console.log(obj);
  };

  const childToParent = (childToParent) => {
    setassignedTo(childToParent);
  };

  return (
    <div
      style={{ backgroundColor: "#262624" }}
      className="ml-8 mr-8 mt-6 col-span-full rounded-lg"
    >
      <div
        style={{ width: "100%" }}
        className="px-5 pt-5 new-challenge-search-bar"
      >
        <div className="flex items-start mb-3 text-white mb-3">
          <p
            style={{ color: "#00ddd4" }}
            className="text-xl pr-2 font-semibold"
          >
            Challenge {contest_number}
          </p>{" "}
        </div>
        <div className="justify-start text-white mt-2 mb-3">
          <SeachDropdown childToParent={childToParent} />
        </div>
        <div className=" mb-3">
          <div className="flex justify-start">
            <h1 className="text-white text-xl">Questions</h1>
            <img
              alt=""
              className="ml-2 cursor-pointer"
              src={AddIcon}
              onClick={handleAddFields}
            />
          </div>
          <div className="flex flex-wrap">
            {inputFields.map((inputField) => (
              <div
                style={{ maxWidth: "33%", minWidth: "300px", flexGrow: 1 }}
                key={inputField.id}
                className="flex justify-start mt-3"
              >
                <input
                  style={{
                    backgroundColor: "#484848",
                    width: "80%",
                    maxWidth: "250px",
                    outline: "none",
                  }}
                  className="rounded-2xl text-white py-1 pl-3 placeholder-gray-400"
                  placeholder="Enter URL"
                  name="url"
                  label="Url"
                  variant="filled"
                  value={inputField.url}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <img
                  alt=""
                  className="ml-2 cursor-pointer"
                  src={CancelIcon}
                  onClick={() => handleRemoveFields(inputField.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 pt-3">
        <div>
          <h1 className="text-white text-xl  mb-3">Duration</h1>
          <div className="flex mb-3">
            <div className=" flex">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 bg-white checked:bg-neutral-800 checked:border-neutral-800 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value={60}
                  onChange={(event) => setduration(event.target.value)}
                />
                <label
                  className="form-check-label inline-block text-white"
                  htmlFor="inlineRadio10"
                >
                  1 Hour
                </label>
              </div>
              <div className="ml-2 form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 bg-white checked:bg-neutral-800 checked:border-neutral-800 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value={120}
                  onClick={(event) => setduration(event.target.value)}
                />
                <label
                  className="form-check-label inline-block text-white"
                  htmlFor="inlineRadio20"
                >
                  2 Hours
                </label>
              </div>
              <div className="ml-2 form-check form-check-inline">
                <input
                  className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 bg-white checked:bg-neutral-800 checked:border-neutral-800 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value={180}
                  onClick={(event) => setduration(event.target.value)}
                />
                <label
                  className="form-check-label inline-block text-white"
                  htmlFor="inlineRadio30"
                >
                  3 Hours
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 180 }} className="flex mt-4 mb-3">
          <button
            style={{
              borderRadius: 20,
              width: "5.5rem",
            }}
            type="submit"
            onClick={onSubmitCreate}
            className="mb-3 flex items-center justify-center font-bold py-1 viewall"
          >
            <span className=" uppercase">Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewChallengeCard;

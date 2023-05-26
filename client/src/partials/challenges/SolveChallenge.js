import React, { useState } from "react";
import Sidebar from "./../Sidebar";
import Header from "./../Header";
import PlayIcon from "../../images/play.svg";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../css/challenge.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/actions/dataActions";
import axios from "axios";

function SolveChallenge(props) {
  const dispatch = useDispatch();
  const data2 = useSelector((state) => state.allData.data);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(false);
  const [end, setEnd] = useState();
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 10800;
  const location = useLocation();
  var challenge_name = location.state.challenge_name;
  const timerProps = {
    isPlaying: play,
    size: 140,
  };

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;

  var all =
    data2.data[0].challenges[0].all_challenges[parseInt(challenge_name) - 1];
  const stratTime = Date.now() / 1000;
  const endTime = stratTime + parseInt(all.duration) * 60 - 1; // <-------------------Here you can change the time

  const remainingTime = endTime - stratTime;
  //challange name,start time + duration in ms
  var data = [];
  var key = 0;
  all.problems.map((ques) => {
    var x = key + 1;
    data.push({
      key: key,
      url: ques,
      question_name: "Question " + x,
      done: false,
    });
    key++;
  });
  var final_ques = data;
  async function onClickPlayButton() {
    setPlay(true);
    setShow(true);
    var obj = {
      mesons_username: data2.data[0].user[0].mesons_username,
      challenge_name: challenge_name,
      end_time: Math.floor(Date.now() / 1000) + all.duration * 60 * 60,
    };
    setEnd(Math.floor(Date.now() / 1000) + all.duration * 60 * 60);
    const response = await fetch("http://127.0.0.1:5000/api/endTimeUpdation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: obj }),
    });
    // body has data
    var body = await response.text();
    console.log(body);
  }

  function renderData() {
    return data.map((data, index) => {
      var { key, url, question_name } = data;
      return (
        <div key={key} className="flex form-check form-check-inline">
          <input
            className="rounded text-green-500 transition duration-400 mt-1 align-top mr-2 cursor-pointer"
            type="checkbox"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => {
              final_ques[key].done = !final_ques[key].done;
            }}
          />
          <a
            href={url}
            className="form-check-label underline outline-none inline-block text-white"
            htmlFor="inlineRadio10"
            style={{ letterSpacing: "0.05em" }}
            target="_blank"
          >
            {question_name}
          </a>
        </div>
      );
    });
  }

  async function onSubmit() {
    setShow(false);
    setPlay(false);
    var len = 0;
    final_ques.map((ques) => {
      if (ques.done === true) len++;
    });
    var obj = {
      mesons_username: data2.data[0].user[0].mesons_username,
      challenge_name: challenge_name,
      end: end,
    };
    const response = await fetch("http://127.0.0.1:5000/api/submitContest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: obj }),
    });
    var body = await response.text();
    console.log(body);
    if (len === final_ques.length) {
      const response = await fetch("http://127.0.0.1:5000/api/wonContest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: obj }),
      });
      var body = await response.text();
      console.log(body);
    } else {
      const response = await fetch("http://127.0.0.1:5000/api/lostContest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: obj }),
      });
      var body = await response.text();
      console.log(body);
    }
    const url =
      "https://mesons-api.vercel.app/allusersdetailsdatabase/" +
      data2.data[0].user[0].mesons_username;
    const response1 = await axios.get(url).catch((err) => {
      console.log("Err", err);
    });
    await dispatch(setData(response1.data));
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div>
          <h1 style={{ color: "#00ddd4" }} className="text-3xl font-bold ml-8">
            Solve Challenge
          </h1>
          <div
            style={{ maxHeight: "500px" }}
            className="grid grid-cols-12 gap-6 mx-8 py-6"
          >
            <div className="col-span-full xl:col-span-4">
              <div
                style={{ backgroundColor: "#262624" }}
                className="py-2 shadow-lg rounded-lg"
              >
                <h1
                  style={{ color: "#00ddd4" }}
                  className="text-2xl ml-6 font-semibold"
                >
                  Instructions
                </h1>
                <div
                  style={{
                    // height: "90%",
                    width: "100%",
                    // backgroundColor: "#ff0000",
                    justifyContent: "space-around",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="text-white px-4 py-4"
                >
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      Timer will start and questions will be visible once you
                      press the play button in top right corner.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>Click on question name to visit the question.</p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      Accepted submissions will be auto detected and checked.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      Challenge will automatically be finished after time is
                      over.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      If all questions get completed before time, you can press
                      submit button and challenge will end.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      In case challenge window closes, challenge automatically
                      ends.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      You will{" "}
                      <span style={{ color: "#00ddd4", fontWeight: "bold" }}>
                        WIN
                      </span>{" "}
                      the challenge only after completing all the questions
                      within time.
                    </p>
                  </div>
                  <div className="flex">
                    <p className="mr-1">➜</p>
                    <p>
                      Once you attempted the challenge, you can't attempt it
                      again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pb-4 col-span-full xl:col-span-8 shadow-lg rounded-lg"
              style={{ backgroundColor: "#262624" }}
            >
              <div className="px-4 pt-3">
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex align-center"
                >
                  <div className="flex items-start mb-2 text-white">
                    <p
                      style={{ color: "#00ddd4" }}
                      className="text-2xl font-semibold"
                    >
                      {" "}
                      {location.state.challenge_name}
                    </p>
                  </div>
                  <img
                    alt=""
                    style={{ cursor: "pointer", width: 42 }}
                    src={PlayIcon}
                    className="glw"
                    onClick={() => onClickPlayButton()}
                  ></img>
                </div>
                <div className="ml-5">
                  <div>
                    <h1 className="text-white text-xl">Questions</h1>
                    {show ? (
                      <div className="ml-4 mt-2">{renderData()}</div>
                    ) : null}
                  </div>
                  <div>
                    <h1 className="text-white text-xl mt-4">Assigned By</h1>
                    <h1
                      style={{ color: "#00ddd4" }}
                      className="text-lg mt-2 ml-6 font-semibold"
                    >
                      {"- "}
                      {all.created_by}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-white text-xl mt-4">Duration</h1>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        textAlign: "center",
                        maxWidth: "420px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                      className="duration-circle ml-5"
                    >
                      <div className="px-2 py-2">
                        <CountdownCircleTimer
                          {...timerProps}
                          trailColor="#484848"
                          colors={["#0dba64", "#F7B801", "#A30000"]}
                          colorsTime={[10800, 7200, 1]}
                          strokeWidth={9}
                          duration={daySeconds}
                          initialRemainingTime={remainingTime % daySeconds}
                          onComplete={(totalElapsedTime) => ({
                            shouldRepeat:
                              remainingTime - totalElapsedTime > hourSeconds,
                          })}
                          className="single-circle"
                        >
                          {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                              {renderTime(
                                "hours",
                                getTimeHours(daySeconds - elapsedTime)
                              )}
                            </span>
                          )}
                        </CountdownCircleTimer>
                      </div>
                      <div className="px-2 py-2">
                        <CountdownCircleTimer
                          {...timerProps}
                          trailColor="#484848"
                          colors={["#0dba64", "#F7B801", "#A30000"]}
                          colorsTime={[3600, 1800, 1]}
                          isSmoothColorTransition={true}
                          duration={hourSeconds}
                          strokeWidth={9}
                          initialRemainingTime={remainingTime % hourSeconds}
                          onComplete={(totalElapsedTime) => ({
                            shouldRepeat:
                              remainingTime - totalElapsedTime > minuteSeconds,
                          })}
                          className="single-circle"
                        >
                          {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                              {renderTime(
                                "minutes",
                                getTimeMinutes(hourSeconds - elapsedTime)
                              )}
                            </span>
                          )}
                        </CountdownCircleTimer>
                      </div>
                      <div className="px-2 py-2">
                        <CountdownCircleTimer
                          {...timerProps}
                          trailColor="#484848"
                          colors={["#0dba64", "#F7B801", "#A30000"]}
                          colorsTime={[60, 30, 1]}
                          isSmoothColorTransition={true}
                          duration={minuteSeconds}
                          strokeWidth={9}
                          initialRemainingTime={remainingTime % minuteSeconds}
                          onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > 0,
                          })}
                          className="single-circle"
                        >
                          {({ elapsedTime, color }) => (
                            <span style={{ color }}>
                              {renderTime(
                                "seconds",
                                getTimeSeconds(elapsedTime)
                              )}
                            </span>
                          )}
                        </CountdownCircleTimer>
                      </div>
                    </div>
                  </div>
                  {show ? (
                    <div
                      style={{
                        // backgroundColor: "#ff0000",
                        width: "60%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <button
                        style={{
                          borderRadius: 20,
                          width: "5.5rem",
                          maxWidth: "150px",
                        }}
                        type="submit"
                        onClick={() => onSubmit()}
                        className="flex items-center justify-center font-bold focus:outline-none py-1 viewall"
                      >
                        <span className=" uppercase">submit</span>
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolveChallenge;

import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
// import SeachDropdown from "../partials/challenges/SearchDropdown";
import Search from "../images/search.svg";
import Downshift from "downshift";
import { useSelector } from "react-redux";
import Loading from "../images/loading.json";
import lottie from "lottie-web";
import Load from "../images/load.gif";
import "../css/scroll.css";
function Compare() {
  const container = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [friendUsername, setfriendUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [frienddata, setFrienddata] = useState();
  const data = useSelector((state) => state.allData.data);
  var items = [];
  if (data.status === "success") {
    var fetcheddata = data.data[0].allusers[0].usernames;
    items = fetcheddata;
  }

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Loading,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  items.splice(items.indexOf(data.data[0].user[0].mesons_username), 1);

  const onEnter = (event) => {
    event.target.blur();
  };

  async function bringData(selection) {
   
  }
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollhost">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div>
          <h1 style={{ color: "#00ddd4" }} className="text-3xl font-bold ml-8">
            Compare
          </h1>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Downshift
              onChange={(selection) => bringData(selection)}
              itemToString={(item) => (item ? item : "")}
            >
              {({
                getInputProps,
                getItemProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
              }) => (
                <div className="flex rounded mr-5 mb-2">
                  <div style={{ width: "40%", minWidth: "250px" }}>
                    <div
                      style={{
                        backgroundColor: "#484848",
                      }}
                      className="flex rounded-3xl py-1 px-3"
                    >
                      <img
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: 7,
                        }}
                        src={Search}
                      />
                      <input
                        style={{
                          backgroundColor: "#484848",
                          width: "80%",
                          borderRadius: 10,
                          outline: "none",
                        }}
                        placeholder="Search"
                        className="p-1 text-white placeholder-gray-400"
                        {...getInputProps()}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "#484848",
                        borderRadius: 10,
                        width: "100%",
                      }}
                      className="rounded-2xl mt-1"
                    >
                      <ul {...getMenuProps()}>
                        {isOpen
                          ? items
                              .filter(
                                (item) =>
                                  !inputValue ||
                                  item
                                    .toLowerCase()
                                    .includes(inputValue.toLowerCase())
                              )
                              .map((item, index) => (
                                <li
                                  onKeyUp={onEnter}
                                  {...getItemProps({
                                    key: item,
                                    index,
                                    item,
                                    style: {
                                      backgroundColor: "#484848",
                                      paddingLeft: "0.5rem",
                                      color: "#ccc",
                                      borderRadius: 10,
                                    },
                                    className: ` ${
                                      highlightedIndex === index
                                        ? "bg-white font-bold"
                                        : "bg-gray-100"
                                    }`,
                                  })}
                                >
                                  {item}
                                </li>
                              ))
                          : null}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </Downshift>
          </div>
        </div>
        {loading ? (
          <div
            style={{
              width: window.innerWidth + "px",
              height: window.innerHeight + "px",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "#1a1a1a",
            }}
          >
            <img src={Load} alt="" />
            {/* <div style={{ width: "450px", height: "450px" }} ref={container} /> */}
          </div>
        ) : friendUsername === "" ? null : (
          <main style={{ backgroundColor: "#1a1a1a" }}>
            <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">
              <div className="grid grid-cols-12 gap-6">
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}

export default Compare;

import React, { useState } from "react";
import Downshift from "downshift";
import "../../css/challenge.css";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "../../images/add.svg";
import CancelIcon from "../../images/cancel.svg";
import Search from "../../images/search.svg";
import { useSelector } from "react-redux";

function SeachDropdown({ childToParent }) {
  const data = useSelector((state) => state.allData.data);
  var allfriends = data.data[0].user[0].friends;
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), friend_username: "" },
  ]);
  // console.log(data.data[0]);
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i["friend_username"] = event;
      }
      return i;
    });
    setInputFields(newInputFields);
    var assignedTo = [];
    newInputFields.map((i) => {
      if (i.friend_username !== "") assignedTo.push(i.friend_username);
    });
    childToParent(assignedTo);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(), friend_username: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  var a = 0;
  return (
    <div>
      <div className="flex mb-3">
        <h1 className="text-white text-xl">Friend</h1>
        <img
          alt=""
          className="ml-2 cursor-pointer"
          src={AddIcon}
          onClick={handleAddFields}
        />
      </div>
      <div className="flex flex-wrap">
        {inputFields.map((inputField) => (
          <Downshift
            key={a++}
            onChange={(selection) =>
              handleChangeInput(inputField.id, selection)
            }
            itemToString={(item) => (item ? item : "")}
          >
            {({
              getInputProps,
              getItemProps,
              getMenuProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem,
            }) => (
              <div className="flex rounded mr-5 mb-2">
                <div>
                  <div
                    style={{
                      backgroundColor: "#484848",
                      width: "100%",
                      maxWidth: "400px",
                    }}
                    className="flex justify-center rounded-2xl"
                  >
                    <img
                      alt=""
                      style={{ width: "20px", height: "20px", marginTop: 7 }}
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
                      maxWidth: "400px",
                    }}
                    className="rounded-2xl mt-1"
                  >
                    <ul className="" {...getMenuProps()}>
                      {isOpen
                        ? allfriends
                            .filter(
                              (item) =>
                                !inputValue ||
                                item
                                  .toLowerCase()
                                  .includes(inputValue.toLowerCase())
                            )
                            .map((item, index) => (
                              <li
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
                <img
                  alt=""
                  style={{ maxWidth: "32px", maxHeight: "32px" }}
                  className="ml-1 cursor-pointer"
                  src={CancelIcon}
                  onClick={() => handleRemoveFields(inputField.id)}
                />
              </div>
            )}
          </Downshift>
        ))}
      </div>
    </div>
  );
}

export default SeachDropdown;

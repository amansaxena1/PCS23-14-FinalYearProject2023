import React from "react";
import "./../../css/header.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div>
      <header className="resp body-font">
        <div className="container mx-auto flex flex-wrap p-3 md:flex-row items-center justify-between">
          <a
            href="https://amansaxena1.github.io/stock/"
            className="flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer"
          >
            {/* <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              enableBackground="new 0 0 32 32"
            >
              <image
                id="image0"
                width="32"
                height="32"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABxVBMVEUAAAAA//8s4tYs4tYr
                4dYs4tcr4dYt4dIs4NUs4dYs49ks4tcr4tcAf38t5Ngr4tYr4dcr49cs4tgs4tYA/6or49cs4dgp
                59sr4tcr4tYs4tcs4dYs4dcs39Us4dcA//8s4tcs4NYp4dUr4dcr4dcs4dYf398s4dcp3tUs5Ngr
                4NYs4dcr4dYr4dYs4dYs4dYq4dgv388r4tgr4tYs4dYq5toq4tYt4tUAqqozzMwr4tYr4dYt5dkr
                4dYr4dYs4dcr49cr4tgr49gq1NQr4dYs4tcq3dQs4tcu4tYs4tYr4dcr5Ncs4toq4Nct49or4tYs
                4dcs4tcs4dcq4NQt49Ur4tYr4tYs4tYs49gs4tcp49Ur4dcr4dYs4dcr4dYs5NYr4dcq4tQt4dUs
                4tYq4dYr4dYs4tYr4tgs4dYs4dYr4Ngt4dkq4Noc4sY///8s4tcq6dQs4dcs4tYr4NUs4dgs4dYr
                4tcs39Us4dUq/9Qs4tcr4dYv59cs4tcs4dYx4dcq49gs4dcs49gs4tcs4tYm5dgr4dgs49cr4tcs
                4dcr4dYs4tcr4tMo5NYv4tks4dcq39Qs49cr4dYr4dYs4dcs4tf///8wIk+YAAAAlXRSTlMAAmzW
                /OaREaHWS6G2AlWZk0CQ1QOugyv6amL+NGKbAa1/K7bT8gitN1aZ2t7IyZw8EKregypZPgMFmJ09
                3/ZnU5iSBqTPHtQshMY6P1Qcn8jE9kJJWNf4d5Y3teTJXjm0Ek+fX/TfNevEOz0qCQTDDKbydlal
                hkpoBrOjINrzGkLseP3UFJ2JjfPjqDUTG+IYm+v7z70Lw3gAAAABYktHRJaRaSs5AAAACXBIWXMA
                AA7DAAAOwwHHb6hkAAAAB3RJTUUH5QscECIYT7qEoQAAAY5JREFUOMt1kvc/QlEYxi8NI0RWCdce
                obJH9syqjCQhEUIiO3vvzfl/3Xvuud1zde/z0/M+7/dz3rMIAikqWiKVyWMIUcUCWnGiRDxgJBcD
                FAiQiQEJCJCyQWKSMjkFA1QISEV1WjpdZXBAppoBNKjOgpU2myNyIJFLojKP4fOxIQWqwqLiErYq
                jQQolYFy1uoiRkBVVFbpDUaCqK4BtTRQB9P6hsYmaJpbmHVNrW3tHWRnVzc8Zk8vFfX10zYXsBow
                c6sOwmSIcsPhPhjBxsqYaNRssXKADgPUQEA2DBiDyfjEpH1KGDA66GSack4OUOJnn3HNzs3Txs0B
                buEnN4WBBY8gsIjaS97llVWBvsW3tq6z6Q0bBOGXOKh39/g38X5gy2cJF9tBEFRIwc4uU5J7+64D
                p/YQ5zVSOO6I9qFj6E94A0+1MDzjngOcX+DAJfeJySu0+2velm9gdkvZO/b0Vt6Me5jZ6R/hQMAD
                Dwg9PoFnL7QvTF/7+u9iAm/oj79/CCzA0+fX98+vV7j3B8WZ1SoeDOJZAAAAJXRFWHRkYXRlOmNy
                ZWF0ZQAyMDIxLTExLTI4VDEzOjM0OjI0KzAzOjAwGg1x5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAy
                MS0xMS0yOFQxMzozNDoyNCswMzowMGtQyVsAAAAASUVORK5CYII="
              />
            </svg> */}
            <span className="ml-3 text-xl text-white">MESONS</span>
          </a>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav> */}
          <div className="flex">
            <button
              style={{
                borderRadius: "20px",
                width: "85px",
                height: "30px",
              }}
              type="submit"
              className="viewall mr-2 font-bold focus:outline-none text-sm sm:text-base"
              onClick={() => history.push({ pathname: "/login" })}
            >
              Login
            </button>
            <button
              style={{
                borderRadius: "20px",
                width: "85px",
              }}
              type="submit"
              onClick={() => history.push({ pathname: "/signup" })}
              className="viewall mr-2 font-bold focus:outline-none text-sm sm:text-base"
            >
              Signup
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

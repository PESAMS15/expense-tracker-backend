import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import mainMenu from "../assets/mobile_bar.png";
import closeMenu from "../assets/close.png";

// import Home from "../components/Home";
// import List from "../components/List";
import Profile from "../components/Profile";
// import ProfileExpand from "../components/ProfileExpand";
export default function DashBoard(props) {
  const navigate = useNavigate();
  const [active, setActive] = useState("1");
  const [viewProfile, setViewProfile] = useState("hidden");


  const [isMobile, setIsMobile] = useState(true);

  function selectLink1() {
    setActive("1");
  }
  function selectLink2() {
    setActive("2");
  }
  function selectLink3() {
    setActive("3");
  }
  function selectLink4() {
    setActive("4");
  }

  const handleLogOut = async () => {
    const res = await fetch("https://expesne-tracker.onrender.com/user/logout");
    props.setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const checklogin = async () => {
      const res = await fetch("https://expesne-tracker.onrender.com/user/auth", {
        headers: {
          Authorization: localStorage.getItem("token"),
        }
      });
      const data = await res.json();
      console.log(data)

      if (data.msg == "User Login Found") {
        props.setIsLoggedIn(true);
      } else {
        alert("Please Login to Continue")
        navigate("/");
        props.setIsLoggedIn(false);
      }
    };
    checklogin();
  }, []);

  return (
    <div>
      <div className="lg:grid lg:grid-cols-5  h-screen font-lexend overflow-y-scroll overflow-x-clip">
        <div className="col-span-1 p-4 bg-rp-black text-jp-yellow">
          <div className="lg:inline flex">
        <Profile setViewProfile={setViewProfile} />

   
            <ul className="lg:flex lg:flex-col mt-10 hidden">
              <Link to="/dashboard">
                <li
                  onClick={selectLink1}
                  className={
                    active === "1"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md bg-ho-blue rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                  Home
                </li>
              </Link>
              <Link to="/dashboard/analysis">
                <li
                  onClick={selectLink2}
                  className={
                    active === "2"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-xl hover: hover:rounded-md bg-ho-blue rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </span>
                  Analysis
                </li>
              </Link>
              <Link to="/dashboard/daily">
                <li
                  onClick={selectLink3}
                  className={
                    active === "3"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md bg-ho-blue rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Daily
                </li>
              </Link>
              <Link to="/dashboard/goals">
                <li
                  onClick={selectLink4}
                  className={
                    active === "3"
                      ? "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md bg-ho-blue rounded-md"
                      : "mb-4 flex px-5 py-3 cursor-pointer text-xl hover:bg-ho-blue hover:rounded-md transition delay-100"
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                       <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15h2v2h-2v-2zm0-14h2v10h-2V3z" />
                    </svg>
                  </span>
                  Goals
                </li>
              </Link>
            </ul>
                  
            <div className="lg:hidden flex">
              <button
                className=" bg-white rounded-lg "
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <img src={mainMenu} className="h-10 w-10 p-2" />
                ) : (
                  <img src={closeMenu} className="h-10 w-10 p-2" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsMobile(true)}
          className={isMobile ? "hidden bg-mj-black" : "inline bg-mj-black"}
        >
          <div className=" bg-white flex justify-start  ">
            <ul className=" flex flex-col items-center justify-start">
              <Profile />
              <Link to="/dashboard">
                <li
                  onClick={selectLink1}
                  className={
                    active === "1"
                      ? "text-rp-black flex text-xl p-2 pt-8"
                      : "text-rp-black  w-fit  flex text-xl  pt-8"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </span>
                  Home
                </li>
              </Link>
              <Link to="/dashboard/analysis">
                <li
                  onClick={selectLink2}
                  className={
                    active === "2"
                      ? "text-rp-black flex text-xl p-2 pt-4"
                      : "text-rp-black flex text-xl p-2 pt-4"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </span>
                  Analysis
                </li>
              </Link>
              <Link to="/dashboard/daily">
                <li
                  onClick={selectLink3}
                  className={
                    active === "3"
                      ? "text-rp-black flex text-xl p-2"
                      : "text-rp-black flex text-xl p-2"
                  }
                >
                  <span className="mx-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Daily
                </li>
              </Link>
              <Link to="/dashboard/goals">
                <li
                  onClick={selectLink4}
                  className={
                    active === "4 "
                    ? "text-rp-black flex text-xl p-2"
                    : "text-rp-black flex text-xl p-2"             
                  }
                >
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                       <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15h2v2h-2v-2zm0-14h2v10h-2V3z" />
                    </svg>
                  </span>
                  Goals
                </li>
              </Link>
              <div className="ml-6 w-full  mt-4 bottom-5  pb-6 ">
                <button
                  onClick={handleLogOut}
                  className="bg-mj-yellow text-white mt-6 w-full px-4 py-3 flex rounded-md font-bold duration-300 ease-out hover:scale-110"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                  </span>
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </div>

        <div className=" lg:block absolute bottom-14 z-50 right-5 lg:bottom-20 lg:left-16 lg:right-0">
          <button
            onClick={props.openModalExpense}
            className="bg-mj-yellow px-4 py-3 text-rp-black flex rounded-md font-bold duration-300 ease-out hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-white animate-bounce w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="hidden text-white lg:block">Add Expense</span>
          </button>
        </div>
        <div className="hidden lg:block lg:absolute bottom-5 left-16">
          <button
            onClick={handleLogOut}
            className="bg-mj-yellow text-white px-6 py-3 flex rounded-md font-bold duration-300 ease-out hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-white animate-bounce w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            Logout
          </button>
        </div>
        <Outlet ></Outlet>
      </div>
    </div>
  );
}

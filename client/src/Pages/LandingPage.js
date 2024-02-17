import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Vector from "../assets/Vector.svg";
import Menu from "../assets/mobile_bar.png";
import Close from "../assets/close.png";
import Anaimation from "../assets/Personal finance-amico.svg";

export default function LandingPage(props) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await fetch("https://expesne-tracker.onrender.com/user/logout");
    props.setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const checklogin = async () => {
      const res = await fetch("https://expesne-tracker.onrender.com/user/auth");
      const data = await res.json();
      console.log(data);
      if (data.msg === "Login to Proceed") {
        props.setIsLoggedIn(false);
      } else {
        props.setIsLoggedIn(true);
      }
    };
    checklogin();
  }, []);

  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="w-screen h-screen bg-rp-black ">
      <nav className="nav-mobile lg:hidden ">
        <div
          className="pt-4 shadow-md shadow-blue-300 lg:flex lg:py-5 bg-white px-4 py-5  items-center lg:text-xl text-sm lg:justify-between justify-start"
          id="navbar"
        >
          <div className="flex justify-between items-center" >
            <h1 className="text-rp-yellow text-xl font-semibold pt-4">
              Expense Tracker
            </h1>
            <button
              className=" px-4 py-2  bg-mj-yellow rounded-md "
              onClick={() => setIsMobile(!isMobile)}
            >
              {/* <h1 className="text-mj-black">jayesh patil</h1> */}
              {isMobile ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-white h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
             </svg>
             
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 stroke-white h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

              )}
            </button>
          </div>
          <div
            onClick={() => setIsMobile(true)}
            className={
              isMobile
                ? "text-mj-yellow hidden"
                : "text-mj-yellow  w-fit pt-10 grid-rows-4  text-center text-base "
            }
          >



            {props.isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={props.openModalLogin}
                className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <div
        className="nav-desktop px-20  shadow-md w-full hidden lg:flex lg:py-8 mb-10 shadow-blue-300 bg-white items-center lg:text-xl text-sm lg:justify-between justify-start"
        id="navbar"
      >
        <h1 className="text-rp-yellow lg:text-4xl font-semibold text-xl">
        SmartSpend
        </h1>
        <div className="grid grid-cols-3  lg:flex items-center lg:justify-between text-mj-yellow ">

    

          {props.isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-mj-yellow text-mj-black px-3 py-1 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={props.openModalLogin}
              className="bg-mj-yellow text-mj-black px-6 py-3 rounded-md font-semibold hover:scale-110 duration-200 ease-in-out"
            >
              Login
            </button>
          )}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 text-slate-300 l items-center px-6 mt-16 md:mt-32 lg:mt-0">
        <div className="my-auto max-w-[648px]">
          <div className="lg:text-4xl lg:py-3 text-2xl p-1">
          The  "
{" "}
            <span className="text-mj-yellow underline">Personal Finance Management System</span>{" "}
            that works for you
          </div>
          <div className="lg:text-base  text-xl my-4">
          Track all your expenses here..." to "Track your finance here
          </div>
          {props.isLoggedIn ? (
            <button
              onClick={() => {
                navigate("/dashboard");
              }}
              className="bg-mj-yellow text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
            >
              Dashboard
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={props.openModalSignup}
              className="mt-8 bg-mj-yellow text-mj-black px-4 py-2 rounded-md font-semibold flex items-center w-fit my-2"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pl-1 animate-bounce w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="my-auto md:mt-0 mt-10 w-full">
          <img src={Anaimation} alt="join now" className="md:w-[500px] max-w-[848px] " />
        </div>
      </div>
    </div>
  );
}

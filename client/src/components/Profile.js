import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/man.png";

export default function Profile({ setViewProfile }) {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function handleGetUser() {
      const res = await fetch("https://expesne-tracker.onrender.com/user/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        navigate("/");
      } else {
        setUser(data.user);
      }
    }
    handleGetUser();
  }, []);

  return (
    <div
      className="lg:flex  hidden mx-auto flex-col items-center justify-center  gap-4   cursor-pointer w-fit  hover:scale-110 duration-100 ease-out"
      onMouseEnter={() => {
        setViewProfile("block");
      }}
      onMouseLeave={() => {
        setViewProfile("hidden");
      }}
    >
      <div className="">
              <img
          src='https://img.freepik.com/3d-models/9TLRH7X0-award-022/award-022-beauty.png?w=300&ga=GA1.1.1517313874.1705651214'
          width={80}
          height={80}
          alt="curator image"
          className="rounded-full border-[8px] border-"
        />
        <div className="text-center">
          <p className="text-[18px] font-bold capitalize">Hi, {user.name}</p>
          
        </div>
        </div>
     
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Daily from "../components/Daily";
import List from "../components/List";
import Profile from "../components/Profile";
import ProfileExpand from "../components/ProfileExpand";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function MainDaily(props) {
  const navigate = useNavigate();
  const [viewProfile, setViewProfile] = useState("hidden");
  let [expense, setExpense] = useState([]);
  useEffect(() => {
    async function HandleDailyExpense() {
      const res = await fetch("https://expesne-tracker.onrender.com/expense/getdailyexpense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("_id"),
        }),
      });
      const data = await res.json();

      if (data.errors) {
        navigate("/");
      } else {
        setExpense(data.filterData);
      }
    }
    HandleDailyExpense();
  }, []);
  return (
    <>
      <div className="col-span-2 bg-jp-black">
        <Daily />
      </div>
      <div className="col-span-2 bg-jp-black">
        {/* <Profile setViewProfile={setViewProfile} /> */}
      
          {expense.map((item) => {
            return (
              <List
                setDeleteId={props.setDeleteId}
                openModalConfirm={props.openModalConfirm}
                expense={item}
              />
            );
          })}
        
      </div>
      <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
        <ProfileExpand />
      </div>
    </>
  );
}

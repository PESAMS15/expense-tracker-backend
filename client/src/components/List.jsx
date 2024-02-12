import React, { useEffect, useState } from "react";
import Money from "../assets/money.png";

import moment from "moment";
import { useNavigate } from "react-router-dom";
import DoughnutChart from "./Load";
import DoughnutChart2 from "./LOADER";

export default function List(props) {
  const navigate = useNavigate();
  const HandleSetUp = () => {
    props.setDeleteId(props.expense._id);
    props.openModalConfirm();
  };
  const navi = () => {
    navigate(`expense/${props.expense._id}`);
  };
  return (
    <div className="m-2 mt-8  mx-4 lg:mx-0 p-2 cursor-pointer lg:w-5/6 lg:grid  items-start text-slate-300 bg-rp-black rounded-xl lg:p-4  ">
      <div className="">
        {/* <DoughnutChart2 currentValue={props.expense.amountPaid} totalValue={props.expense.amount.$numberDecimal} /> */}
      </div>
      <div className="bg-blue-400 rounded-full flex justify-between   py-3 px-4 ">
        <img src={Money} className="h-7 w-7 " />
        <h1 className="text-2xl">₦{props.expense.amount.$numberDecimal}</h1>
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-2 mt-5">
          <div className=" ">
            <h1 className="font-bold text-xl">{props.expense.desc}</h1>
            <h1 className="text-2xl">₦{props.expense.amount.$numberDecimal}</h1>
          </div>
          <div className=""></div>
        </div>
        <div onClick={HandleSetUp} className="text-jp-yellow cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  hover:scale-110"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className=" ">
<div className="flex h-fit">
  <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit px-2 py-1 ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
        clipRule="evenodd"
      />
    </svg>
    <p className="text-sm  ">
      {moment(props.expense.date).format("MMM D")}
    </p>
  </div>
  <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit px-2 py-1 ml-3 ">
    <p className="text-sm h-fit ">{props.expense.category}</p>
  </div>
</div>
</div> */
}

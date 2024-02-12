import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker2 from "./DatePicker2";
import ReactLoading from "react-loading";

const AddExpense = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    amount: "",
    desc: "",
    date: "",
    category: "Others",
    _id: localStorage.getItem("_id"),
  });

  const [error, setError] = useState({
    amount: "",
    desc: "",
  });

  const handleAddExpense = async (e) => {
    setIsLoading(true);
    setError({
      msg: "",
    });
    const res = await fetch("https://expesne-tracker.onrender.com/expense/addexpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });
    const data = await res.json();
    if (data.errors) {
      setIsLoading(false);
      setError(data.errors);
      console.log(data.errors);
    } else {
      setIsLoading(false);
      props.closeModalExpense();
      navigate("/dashboard");
      window.location.reload();
    }
  };

  return (
   
      <div className="  font-lexend bg-rp-black ">
        <div className="col-span-4  p-6 ">
          <div className=" flex mt-4 ">
            <h1 className="text-jp-white text-2xl font-bold ">Add Expense</h1>
          </div>
          <div className=" text-jp-white flex mt-4 ">
            <h1 className="text-4xl border-b-2 mt-2">₦</h1>
            <input
              className="p-3  text-3xl  bg-transparent border-b-2 outline-none "
              placeholder="0"
              type="number"
              value={expense.amount}
              onChange={(e) => {
                const tempExpense = { ...expense };
                tempExpense.amount = e.target.value;
                setExpense(tempExpense);
              }}
            ></input>
          </div>
          <span className="pt-1 text-sm text-red-500 font-lexend">
            {error.msg}
          </span>
          <div>
            <input
              className="p-3 px-4 rounded-md mt-6  w-full placeholder-white bg-jp-black outline-none text-jp-white"
              placeholder="what was this expense for ?"
              value={expense.desc}
              onChange={(e) => {
                const tempExpense = { ...expense };
                tempExpense.desc = e.target.value;
                setExpense(tempExpense);
              }}
            ></input>
          </div>
          <div className="w-full">
            <DatePicker2 expense={expense} setExpense={setExpense} />
          </div>
          <div>
            <h1 className="text-jp-slate font-bold  mt-4">Category</h1>
          </div>
          <div className="text-mj-black">
            <select
              className="bg-jp-black w-full text-white px-3 py-3 my-1 rounded"
              name="Categories"
              id="categories"
              value={expense.category}
              onChange={(e) => {  
                const tempExpense = { ...expense };
                tempExpense.category = e.target.value;
                setExpense(tempExpense);
              }}
            >
              <option value="Housing">Housing</option>
              <option value="Food">Food</option>
              <option value="Transportation">Transportation</option>
              <option value="Utilities">Utilities</option>
              <option value="Saving">Saving</option>
              <option value="Debt Payments">Debt Payments</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="bg-rp-yellow  rounded-md w-fit px-8 mt-10">
            {isLoading ? (
              <ReactLoading
                type="bubbles"
                color="white"
                height={50}
                width={50}
              />
            ) : (
              <button
                onClick={handleAddExpense}
                className="font-bold text-jp-yellow py-4"
              >
                Save Expense
              </button>
            )}
          </div>
        </div>
      </div>
   
  );
};

export default AddExpense;

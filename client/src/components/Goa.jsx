import React, { useState } from 'react'

const Goa = () => {
    let id = localStorage.getItem("goalid")
    const [click, setclick] = useState(false)
    const [amountPaid, setamountPaid] = useState(0)
    const [goal, setgoal] = useState(null)
    const view_one_goal = async () => {
        try {
          const response = await fetch(`https://expesne-tracker.onrender.com/goal/${id}/viewonegoal`, {
            method: "GET",
            // headers: { token: localStorage.token }
          });
    
          const parseRes = await response.json();
          // console.log(parseRes)
          setgoal(parseRes.goal)
        } catch (err) {
          console.error(err.message);
        }
    }
    view_one_goal()

    const HandleClick = () => {
      setclick(!click)
      console.log(click)
    }
    const pay = async () => {
      // alert("click")
      const res = await fetch(`https://expesne-tracker.onrender.com/goal/addgoalamount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amountPaid, _id:id }),
      });
      const data = await res.json();
      alert("payment successful")
      console.log(data);
    } 
 
  return (
    <div>
      <div className="text-center font-semibold text-xl">
        Goal
      </div>
      <div className="flex justify-between">
        <div className="text-xl">
          Goal amount:
          
      </div>
      <div className="text-xl">
      ₦{goal && goal.amount}
      </div>
    </div>
    <div className="flex justify-between">
        <div className="text-xl">
          Description:
          
      </div>
      <div className="text-xl">
      {goal && goal.description}
      </div>
      </div>
      <div className="flex justify-between">
        <div className="text-xl">
          Amount Saved:
        </div>
        <div className="text-xl">
          ₦{goal && goal.amountSaved}
        </div>
        </div>
      <div>
      <button onClick={HandleClick} className={`p-2 block my-3 rounded px-3 bg-yellow-600 ${goal &&  goal.amountSaved >= goal.amount? "hidden": "block"}`}>Add Amount</button>
    <div className="flex gap-3">
      <input type="text" onChange={e=> setamountPaid(e.target.value)} className={`bg-white border border-gray-300 rounded text-black py-2 px-4  ${click? "block": "hidden"} w-full appearance-none leading-normal`} />
      <button onClick={pay} className={`p-2 block h-full my-3 rounded px-3 bg-yellow-600 ${click? "block": "hidden"}`}>Pay</button>
      </div>
      </div>

    </div>
  )
}

export default Goa

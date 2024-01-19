import React, { useState } from 'react'

const Goals = (props) => {
  const [goals, setgoals] = useState(null)

   async function view_goals ()  {
        const res = await fetch(`https://expesne-tracker.onrender.com/goal/viewgoal `,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({  _id: localStorage.getItem("_id") }),
          });
          const data = await res.json();
          // console.log(data)
          setgoals(data.goals)
        

    }
    // console.log(goals)

    const go = (id)=>{
      console.log(id)
      localStorage.setItem("goalid",id )
      props.openModalGoa()
    }
  
    view_goals()


  return (
    <div className='lg:col-span-4 md:p-7 h-screen bg-jp-black relative -mt-1 lg:mt-0 text-slate-300'>
        <div className='p-5 mx-auto relative   bg-rp-black '>
            <h1 className='md:text-2xl text-xl text-center text-slate-300'>Goals</h1>
            <div className="m-2 mt-4 lg:mt-0 md:mx-4 lg:mx-0 md:p-2  mx-auto  items-start text-slate-300 bg-rp-black rounded-xl lg:p-4 lg:m-6 lg:w-[90%] w-[100%]  justify-between">
           
            <div onClick={props.openModalGoal} className="bg-jp-black cursor-pointer rounded-full absolute  right-3   w-fit  h-12  top-3 p-3 mb-8 lg:mb-3 ">
                <button >Add Goal</button>
            </div>
            {/* <div className='text-center'>Goals</div> */}
            {goals && goals.map((goal, index) => (
            <div   onClick={(e)=> go(goal._id)}  key={index} className="bg-jp-black flex cursor-pointer justify-between  mx-auto rounded-xl lg:w-[90%] w-[100%] h-20  p-3 mb-8 lg:mb-3 ">
                <div className="text-jp-yellow text-xl">
                  <div className='text-white font-medium text-xl '>
                    Goal
                  </div>
                  {goal.description}
                </div>
                <div className="text-jp-yellow text-xl">
                  <div className='text-white font-medium text-xl '>Amount</div>
                  ₦{goal.amount
                  }</div>
            </div>
            ))}
        </div>
        </div>

    </div>
  )
}

export default Goals
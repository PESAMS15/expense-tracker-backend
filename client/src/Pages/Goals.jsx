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
    <div className='lg:col-span-4 md:p-7 overflow-y-auto h-screen rounded-lg bg-jp-black relative -mt-1 lg:mt-0 text-slate-300'>
        <div className='p-5 mx-auto relative    bg-rp-black '>
            <h1 className='md:text-2xl font-bold text-xl  text-slate-300'>Goals</h1>
            <div className="m-2 mt-4 lg:mt-0 md:mx-4 lg:mx-0 md:p-2  mx-auto  items-start text-slate-300 bg-rp-black rounded-xl lg:p-4 lg:m-6 lg:w-[90%] w-[100%]  justify-between">
            <button
            onClick={props.openModalGoal}
            className="bg-mj-yellow px-4 py-3 fixed  w-fit  right-10 bottom-20 l text-white flex rounded-md font-bold duration-300 ease-out hover:scale-110"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <span className="">Add Goal</span>
          </button>
 
            {/* <div className='text-center'>Goals</div> */}
            {goals && goals.map((goal, index) => (
            <div   onClick={(e)=> go(goal._id)}  key={index} className="bg-jp-black w-full flex cursor-pointer justify-between  mx-auto rounded-xl lg:w-[90%] w-[100%]  p-3 mb-8 lg:mb-3 ">
                <div className="text-jp-yellow w-full text-xl flex flex-col gap-4">
               
                 <div>
                 {goal.description}
                 </div>
               <div className='border-b pb-4'>
                <p className='text-sm '>balance ('N')</p>
               ₦{goal.amount}
               </div>
               
                  </div>
            </div>
            ))}
        </div>
        </div>

    </div>
  )
}

export default Goals
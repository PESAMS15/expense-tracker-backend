import React, { useState } from 'react'
import ReactLoading from "react-loading";


const Goal = () => {
    const [goalm, setgoalm] = useState("")
    const [desc, setdesc] = useState("")
     const [isLoading, setIsLoading] = useState(false);

     const handleAddGoal  =  async()=>{
        setIsLoading(true)
     }

  return (
    <div className='p-6 bg-rp-black text-white w-full rounded-xl font-lexend'>
        <div className="text-center">
        Add a Goal
        </div>
           
            <div className=" text-jp-white flex mt-4 ">
            <h1 className="text-4xl border-b-2 mt-2">₦</h1>
            <input
              className="p-3 bg-rp-black text-3xl w-3/4 border-b-2 outline-none "
              placeholder="0"
              type="number"
              value={goalm}
              onChange={(e) => {
                setgoalm(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <input
              className="p-3 px-4 rounded-md mt-6  w-3/4 placeholder-rp-yellow bg-jp-black outline-none text-jp-white"
              placeholder="what are you saving up for ?"
              value={desc}
              onChange={(e) => {
                
                setdesc(e.target.value);
              }}
            ></input>
          </div>
          <div className="border-rp-yellow border-2 rounded-md w-fit px-8 mt-10">
            {isLoading ? (
              <ReactLoading
                type="bubbles"
                color="#F5A302"
                height={50}
                width={50}
              />
            ) : (
              <button
                onClick={handleAddGoal}
                className="font-bold text-jp-yellow py-4"
              >
                Add Goal
              </button>
            )}
          </div>
        
    </div>
  )
}

export default Goal
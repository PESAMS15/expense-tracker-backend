import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactLoading from "react-loading";

import { useState } from 'react'

const ResetPassword = () => {
    const navigate = useNavigate();
    const {token} = useParams()
  const [isLoading, setIsLoading] = useState(false);

    const [password, setpassword] = useState("")

    const resetPassword = async ()=>{
        setIsLoading(true)
        // console.log(email)
        const res = await fetch("https://expesne-tracker.onrender.com/user/resetpassword", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword: password, token }),
        });
    
        const data = await res.json();
        alert(data.message)
        navigate("/")
        
        console.log(data.message)
      setIsLoading(false)

    }
    
   
  return (
    <div className='text-white h-screen p-3 flex items-center  justify-center'>
     <div className='w-full md:w-1/3 pb-10 py-3 p-3 border-2 bg-zinc-800   rounded'>
           
      <h2 className='text-center text-2xl md:text-3xl my-5'>Reset Password</h2>
     <div className="flex justify-between my-5">
     <label
            htmlFor="password"
            className="font-bold flex items-center col-span-4"
          >
            New Password
          </label>
          <input
            type="password"
            onChange={(e) => {
                setpassword(password)
            }}
            placeholder="Enter New Password"
            name="password"
            className="p-2 m-2 inline-block outline-none  col-span-8 bg-jp-black  rounded-sm placeholder-white"
          ></input>
     </div>
     <div className="flex justify-between my-5">
     <label
            htmlFor="password"
            className="font-bold flex items-center col-span-4"
          >
            Confirm Password
          </label>
          <input
            type="password"
            onChange={(e) => {
                setpassword(e.target.value)
            }}
            placeholder="Confirm New Password"
            name="password"
            className="p-2 m-2 inline-block outline-none  col-span-8 bg-jp-black  rounded-sm placeholder-white"
          ></input>
     </div>
     {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#FFFFFF"
              height={50}
              width={50}
            />
          ) : (
            <button
              onClick={resetPassword}
              className="font-bold py-3 px-6 rounded-md  border-2 border-rp-yellow text-white hover:border-rp-black hover:text-rp-black hover:bg-rp-yellow hover:scale-110 transition delay-150 duration-200"
            >
              Submit
            </button>
          )}
     </div>
    </div>
  )
}

export default ResetPassword

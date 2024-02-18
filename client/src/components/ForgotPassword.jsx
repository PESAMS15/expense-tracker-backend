import React, {useState} from 'react'
import ReactLoading from "react-loading";
const ForgotPassword = () => {
  const [email, setemail] = useState("")
  const [isLoading, setIsLoading] = useState(false);


  const forg = async()=>{
    setIsLoading(true)
    console.log(email)
    const res = await fetch("https://expesne-tracker.onrender.com/user/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    alert(data.message)
    console.log(data)
  setIsLoading(false)
  }
  return (
    <div>
     <h1 className="font-bold text-2xl ">Forgot password?</h1>
        <p className="">Please enter your email so we can help rest your password</p>
        <hr className="my-4 "></hr>
       <input
            type="email"
            onChange={(e) => setemail(e.target.value) }
            placeholder="Enter Your  Email"
            className="p-2 m-2 inline-block outline-none   w-full bg-jp-black rounded-sm placeholder-white"
          />
           <div className="mt-4">
          {isLoading ? (
            <ReactLoading
              type="bubbles"
              color="#FFFFFF"
              height={50}
              width={50}
            />
          ) : (
            <button
              onClick={forg}
              className="font-bold py-3 px-6 rounded-md  border-2 border-rp-yellow text-white hover:border-rp-black hover:text-rp-black hover:bg-rp-yellow hover:scale-110 transition delay-150 duration-200"
            >
              Submit
            </button>
          )}
        </div>
    </div>
  )
}

export default ForgotPassword

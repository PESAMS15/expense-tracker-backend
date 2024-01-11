import React from 'react'

const Goals = (props) => {
  return (
    <div className='lg:col-span-4 md:p-7 h-screen bg-jp-black -mt-1 lg:mt-0 text-slate-300'>
        <div className='p-5 mx-auto  bg-rp-black relative'>
            <h1 className='md:text-2xl text-xl text-center text-slate-300'>Goals</h1>
            <div className="m-2 mt-4 lg:mt-0 md:mx-4 lg:mx-0 md:p-2 relative cursor-pointer lg:grid lg:grid-cols-7  items-start text-slate-300 bg-rp-black rounded-xl lg:p-4 lg:m-6 lg:w-[90%] w-[100%] flex justify-between">
            <div className="text-jp-yellow absolute  top-0 right-5 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-5 relative lg:left-[26rem] left-[18.5rem] lg:top-10 top-11 hover:scale-110" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="bg-jp-black rounded-full lg:w-2/3 w-fit  h-12 relative top-3 p-3 mb-8 lg:mb-3 ">
                <button onClick={props.openModalGoal}>Goal</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Goals
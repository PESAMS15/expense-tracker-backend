import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from "moment";
import Money from "../assets/money.png";
// import Loader from '../components/Load';
import DoughnutChart from '../components/Load';

const  Expense =  (props) => {
  const [click, setclick] = useState(false)
  const [amoundPaid, setamoundPaid] = useState(0)
  const [data, setdata] = useState(null)
  const { id } = useParams()
  const fetchExpense = async () => {
    const res = await fetch(`https://expesne-tracker.onrender.com/expense/viewoneexpense/${id}`)
    const data = await res.json()
    setdata(data)
    console.log(data)
  }
  const HandleSetUp = () => {
    props.setDeleteId(data.expense._id);
    props.openModalConfirm();

    
  };

  const HandleClick = () => {
    setclick(!click)
    console.log(click)
  }
  const pay = async () => {
    // alert("click")
    const res = await fetch(`https://expesne-tracker.onrender.com/expense/paytoexpense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amountPaid: amoundPaid, id }),
    });
    const data = await res.json();
    alert("payment successful")
    console.log(data);
    fetchExpense()
  } 
  React.useEffect(() => {
    fetchExpense()
  }, [])
  return (
    data && (
      <div className='lg:col-span-4 md:p-7 h-screen bg-jp-black -mt-1 lg:mt-0 text-slate-300'>
      <div className='p-5 mx-auto  bg-rp-black relative'>
        <h1 className='md:text-2xl text-xl text-center text-slate-300'>Expense</h1>
        <div   className="m-2 mt-4 lg:mt-0 md:mx-4 lg:mx-0 md:p-2 relative cursor-pointer lg:grid lg:grid-cols-7  items-start text-slate-300 bg-rp-black rounded-xl lg:p-4 lg:m-6 lg:w-[90%] w-[100%] flex justify-between">
      <div
        onClick={HandleSetUp}
        className="text-jp-yellow absolute top-0 right-5 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-5 relative lg:left-[26rem] left-[18.5rem] lg:top-10 top-11 hover:scale-110"
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
      <div className="bg-jp-black rounded-full w-fit hidden md:block h-12 relative top-3 p-2 mb-8 lg:mb-3">
        <img src={Money} className="h-7 w-7 mt-1"></img>
      </div>
      <div className="lg:col-span-4 ml-3 lg:ml-0 mt-2 lg:mt-2 ">
        <div className="flex h-fit">
          <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit whitespace-nowrap px-2 py-1 ">
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
            <p className="text-sm  ml-1">
              {moment(data.expense.date).format("MMM D")}
            </p>
          </div>
          <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit px-2 py-1 ml-3 ">
            <p className="text-sm h-fit ml-1">{data.expense.category}</p>
          </div>
        </div>
        <div className="lg:mt-1 h-fit mt-2 ">
          <h1 className="font-bold text-xl">{data.expense.desc}</h1>
        </div>
      </div>
      <div className="lg:col-span-2 lg:ml-6 ml-3 lg:mt-0 mt-2 ">
        <p className="text-sm font-bold">Your share</p>
        <div className="flex font-bold text-jp-white mt-5 lg:mt-2 lg:mx-0 mx-4 ">
          <p>₦</p>
          <h1 className="ml- text-2xl">{data.expense.amount.$numberDecimal}</h1>
        </div>
      </div>
    </div>
    <div className='flex justify-between'>
      <div> amount paid: {data.expense.amountPaid || "0.00"}</div>
    </div>
    <DoughnutChart currentValue={data.expense.amountPaid} totalValue={data.expense.amount.$numberDecimal} />
    <button onClick={HandleClick} className={`p-2 block my-3 rounded px-3 bg-yellow-600 ${data.expense.amountPaid >= data.expense.amount.$numberDecimal? "hidden": "block"}`}>Add Amount</button>
      <input type="text" onChange={e=> setamoundPaid(e.target.value)} className={`bg-white border border-gray-300 rounded py-2 px-4  ${click? "block": "hidden"} w-full appearance-none leading-normal`} />
    <div className="flex gap-3">
      <button onClick={pay} className={`p-2 block h-full my-3 rounded px-3 bg-yellow-600 ${click? "block": "hidden"}`}>Pay</button>
    </div>

      </div>
     
   

    </div>
    )
  )
}

export default Expense
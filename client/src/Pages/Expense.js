import React from 'react'
import { useParams } from 'react-router-dom'
const Expense = async() => {
    const { id } = useParams()
    console.log(id)

    const res = await fetch(`https://expesne-tracker.onrender.com/expense/viewoneexpense/${id}`
     )
    const data = await res.json();
    console.log(data)

  return (
    <div>{id}</div>
  )
}

export default Expense
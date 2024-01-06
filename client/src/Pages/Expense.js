import React from 'react'
import { useParams } from 'react-router-dom'

const  Expense =  () => {
  const { id } = useParams()
  const fetchExpense = async () => {
    const res = await fetch(`https://expesne-tracker.onrender.com/expense/viewoneexpense/${id}`)
    const data = await res.json()
    console.log(data)
  }
  React.useEffect(() => {
    fetchExpense()
  }, [])
  return (
    <div>Expense {id}</div>
  )
}

export default Expense
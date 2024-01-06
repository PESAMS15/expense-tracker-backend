import React from 'react'
import { useParams } from 'react-router-dom'

const  Expense =  () => {
  const { id } = useParams()
  const fetchExpense = async () => {
    const res = await fetch(`http://localhost:3000/expense/${id}`)
    const data = await res.json()
    console.log(data)
  }
  React.useEffect(() => {
    fetchExpense()
  }, [])
  return (
    <div>Expense</div>
  )
}

export default Expense
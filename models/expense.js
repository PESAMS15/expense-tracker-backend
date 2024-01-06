const mongoose = require("mongoose");
const expenseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
   
    date: {
      type: Date,
    },
    amount: {
      type: Number,
      required: [true, "Please Enter Amount for Expense"],
    },
    amountPaid:{
      type: Number,

    },
    desc: {
      type: String,
      required: [true, "Please Enter Description for Expense"],
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const Expense = mongoose.model("expense", expenseSchema);
module.exports = Expense;

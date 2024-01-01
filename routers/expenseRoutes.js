const { Router } = require("express");
const {
  add_expense,
  view_expense,
  view_expense_by_catergory,
  set_budget,
  view_expenses_in_range,
  delete_expense,
  get_budget,
  get_today_expense,
} = require("../controllers/expenseControllers");
const { requireAuth } = require("../middleware/authMiddleware");
const expenseRouter = Router();

expenseRouter.post("/addexpense",  add_expense);
expenseRouter.post("/viewexpense",  view_expense);
expenseRouter.post("/getdailyexpense",  get_today_expense);
expenseRouter.post("/setbudget",  set_budget);
expenseRouter.post("/getbudget",  get_budget);
expenseRouter.get(
  "/viewexpense/:category",
  
  view_expense_by_catergory
);
expenseRouter.post("/viewexpenseinrange",  view_expenses_in_range);
expenseRouter.get("/:id/deleteExpense",  delete_expense);

module.exports = expenseRouter;

const { add_goal, view_goal, view_one_goal, delete_goal, addGoalAmount } = require('../controllers/goalController');

const goalRouter = require('express').Router();


goalRouter.post("/addgoal",  add_goal);
goalRouter.post("/viewgoal",  view_goal);
goalRouter.get("/:id/viewonegoal",  view_one_goal);
goalRouter.get("/deletegoal",  delete_goal);
goalRouter.post("/addgoalamount",  addGoalAmount);

module.exports = goalRouter;
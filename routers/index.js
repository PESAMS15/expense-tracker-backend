const { Router } = require("express");
const expenseRouter = require("./expenseRoutes");
const userRouter = require("./userRoutes");
const goalRouter = require("./goalRoutes");
const router = Router();

router.use("/user", userRouter);
router.use("/expense", expenseRouter);
router.use("/goal", goalRouter);

module.exports = router;

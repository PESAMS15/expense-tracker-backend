
const Goal = require("../models/goal");

module.exports.add_goal = async (req, res) => {
    console.log(req.body);
    let { amount, description } = req.body;
    const id = req.body._id;
    if (amount && description) {
        try {
            const goal = await Goal.create({
                id,
                amount,
                description
            });
            res.status(200).json({ goal });
        } catch (err) {
            console.log(err);
            res.status(404).json({ errors: { msg: "Something went wrong." } });
        }
    } else {
        res
            .status(404)
            .json({ errors: { msg: "Please Fill Amount and Description." } });
    }
}

module.exports.view_goal = async (req, res) => {
    const id = req.body._id;
    try {
        const goals = await Goal.find({ id }).sort({ amount: -1 });

        res.status(200).json({ goals });
    } catch (err) {
        res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
}

module.exports.view_one_goal = async (req, res) => {
    const id = req.params.id;
    try {
        const goal = await Goal.findById(id);
        res.status(200).json({ goal });
    } catch (err) {
        res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
}

module.exports.delete_goal = async (req, res) => {
    const id = req.body._id;
    try {
        const goal = await Goal.findByIdAndDelete(id);
        res.status(200).json({ goal });
    } catch (err) {
        res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
}

module.exports.addGoalAmount = async (req, res) => {
    const id = req.body._id;
    const amount = req.body.amount;
    try {
      
        const updateAmountSaved = await Goal.findByIdAndUpdate(id, {$inc: {amountSaved: amount}});
        const goal = await Goal.findById(id)
        if (goal.amount <= goal.amountSaved){
            const updateGoalStatus = await Goal.findByIdAndUpdate(id, {$set: {goalStatus: "Achieved"}});
        }
       
        res.status(200).json({ goal });
    } catch (err) {
        res.status(404).json({ errors: { msg: "Something went wrong." } });
    }
}
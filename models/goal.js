const mongoose = require("mongoose");


const goalSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    amountSaved: {
        type: Number,
        default: 0
    },
    description:{
        type: String,
        required: true
    },
    goalStatus: {
        type: String,
        enum: ["Not Completed", "Completed"],
        default: "Not Completed"
    },

})

const Goal = mongoose.model("goal", goalSchema);
module.exports = Goal;
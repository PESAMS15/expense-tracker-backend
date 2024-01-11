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
    description:{
        type: String,
        required: true
    }
})

const Goal = mongoose.model("goal", goalSchema);
module.exports = Goal;
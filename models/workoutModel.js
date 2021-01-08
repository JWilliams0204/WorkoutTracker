const mongoose = require("mongoose");


const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now

    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter your type of exercise."
            },

            name: {
                type: String,
                trim: true,
                required: "Enter the name of your exercise."
            },

            duration: {
                type: Number,
                required: "Enter how long your exercise will be."
            },

            weight: {
                type: Number,
                default: 0
            },

            reps: {
                type: Number,
                default: 0
            },

            distance: {
                type: Number,
                default: 0
            },

            sets: {
                type: Number,
                default: 0
            },


        }
    ]
})

const Exercise = mongoose.model("Workout", workoutSchema);

module.exports = Exercise;
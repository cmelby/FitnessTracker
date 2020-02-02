// Requiree Dependencies....
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExcerciseSchema = new Schema({
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
          }
        ]

  });
  
  const ExcerciseSchema = mongoose.model("Exercise", ExcerciseSchema);
  

  module.exports = Excercise;


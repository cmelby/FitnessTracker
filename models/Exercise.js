// Requiree Dependencies....
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
  
// ExerciseSchema.methods.setWorkout = function() {
//   this.exercise = `${this.name} ${this.duration} ${this.weight}${this.reps}${this.sets}`;

//   return this.exercise;
// };

// UserSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();

//   return this.lastUpdated;
// };

  const Exercise = mongoose.model("Exercise", ExerciseSchema);

  module.exports = Exercise;


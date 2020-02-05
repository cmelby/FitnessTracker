// Requiree Dependencies....
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExereciseSchema = new Schema({
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number

  });

  const Exerecise = mongoose.model("Exerecise", ExereciseSchema);

  module.exports = Exerecise;


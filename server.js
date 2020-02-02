
// Require Dependencies...
const express = require("express");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");

// const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;
// Set up middleware....
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html")(app, path);
app.use(express.static("public"));
mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });



app.get("/", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
  

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  


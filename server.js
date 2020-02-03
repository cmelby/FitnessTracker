
// Require Dependencies...
const express = require("express");
const logger = require("morgan");
const path = require("path")
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Set up middleware....
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require routes ......
require("./routes/html")(app, path);

app.use(express.static("public"));

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


db.Workout.create({ name: "Deadlift" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

  app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  app.get("/api/workouts/:id", (req, res) => {
      db.Workout.findOne({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
    app.get("/api/exercise", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  app.put("/api/workouts/:id", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

app.post("/POST", ({body}, res) => {
  db.Excercise.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


app.listen(PORT, () => {
  // require("./seeders/seed")();
    console.log(`App running on port ${PORT}!`);
  });
  

  // /exercise/:id
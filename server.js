
// Require Dependencies...
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path")
// const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;
// Set up middleware....
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes/html.js")(app, path);

  

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  


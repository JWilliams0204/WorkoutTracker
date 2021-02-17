const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
/*const db = require("./models/workout");
const path = require("path");*/
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb: //localhost/workout",
  { useNewUrlParser: true, useFindAndModify: false }, () => 
  console.log("Connected to DB")
  );


app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));
/*
app.get("/api/workouts", (req, res) => {
    db.aggregate([
      {
          $addFields: {
              totalDuration: {
                  $sum: "$exercises.duration"
              }
          }
      }
    ])
    .then((workouts)=>{
        res.json(workouts)
    })

})

app.post("/api/workouts", (req, res) =>
{
    db.create({}).then((workouts)=>{
        res.json(workouts)
    })   
}
)
app.put("/api/workouts/:id", (req, res) =>{
    db.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true, runValidators: true}
    ).then((workouts)=>{
        res.json(workouts)
        
}
)
}); 
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html") )
}) */
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});

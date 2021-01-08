const db = require("../models/workoutModel");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
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
    router.post("/api/workouts", (req, res) =>
{
    db.create({}).then((workouts)=>{
        res.json(workouts)
    })   
}
)
router.put("/api/workouts/:id", (req, res) =>{
    db.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true, runValidators: true}
    ).then((workouts)=>{
        res.json(workouts)
        
}
)
}); 

})
module.exports = router;
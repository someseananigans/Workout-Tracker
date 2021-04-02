const router = require('express').Router()
const { Workout } = require('../models')

// get a workout by id
router.get('/workout/:id', (req, res) => {
  Workout.findById()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})
// get all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})
// get workouts in range
router.get('/workouts/range', (req, res) => {
  Workout.find(req.body).limit(7)
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})
// create a workout
router.post('/workouts', (req, res) => {
  console.log(req.body)
  Workout.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})
// update a workout
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body }})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})
// delete a workout
router.delete('/workout/:id', (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

module.exports = router
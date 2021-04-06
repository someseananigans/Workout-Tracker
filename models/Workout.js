const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    },
  }]
})

WorkoutSchema.set('toObject', { virtuals: true })
WorkoutSchema.set('toJSON', { virtuals: true })

WorkoutSchema.virtual('totalDuration')
  .get(function () {
    let totalDuration = 0
    this.exercises.forEach(exercise => {
      totalDuration += exercise.duration
    })
    return totalDuration
    // return this.exercises.reduce((t, exercise) => t + exercise.duration, 0)
  })

module.exports = model('workout', WorkoutSchema)
module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useFindAndModify: false
})
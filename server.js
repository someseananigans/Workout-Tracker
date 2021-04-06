const express = require('express')
const { join } = require('path')

const PORT = 3000
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(process.env.PORT || PORT))
  .catch(err => console.log(err))
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// Import Routes
const userRoutes = require('./routes/user')

// APP
const app = express()

// DB
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useCreateIndex: true
}). then(() => console.log('DB Connected'))

//Routes Middleware
app.use('/api', userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
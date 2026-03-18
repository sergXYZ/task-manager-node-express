require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const tasks = require('./routes/tasks')

const connectDB = require('./db/connect')
//middleware
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port)
  } catch (error) {
    console.log(error)
  }
}
start()

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const tasks = require('./routes/tasks')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

const connectDB = require('./db/connect')
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port)
  } catch (error) {
    console.log(error)
  }
}
start()

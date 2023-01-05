const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

// Connect to database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello')
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))

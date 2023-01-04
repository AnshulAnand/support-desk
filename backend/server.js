const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))
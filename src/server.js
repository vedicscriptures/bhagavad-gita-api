// importing required modules
const express = require('express')
const mongoose = require('mongoose')

// importing environment variables
require('dotenv').config()

// creating database connection
const MONGODB_URI = process.env.MONGODBURI
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.info('✅ Connected to MONGO DB...'))
  .catch(err => console.error(err))

// api settings
const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})
app.set('trust proxy', 1)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import routes
require('./routes')(app)

// server setup
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () =>
  console.info(`✅ Server is Listening on Port : ${server.address().port}`)
)

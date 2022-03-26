/* eslint-disable new-cap */
// import modules
const { Schema, model } = require('mongoose')

// User Schema
const userSchema = new Schema({
  _id: String,
  name: String,
  mail: String,
  pass: String,
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Number,
    default: 365
  },
  count: Number
})

// user models
module.exports = new model('user', userSchema)

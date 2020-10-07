const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    min: 6,
    max: 100
  },
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 300
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

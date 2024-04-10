const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const User = mongoose.model('users', userSchema);




const movieSchema = new mongoose.Schema({


    title: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  }
});

const Movie = mongoose.model('movie', movieSchema);


module.exports = {Movie ,User};


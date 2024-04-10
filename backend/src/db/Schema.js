import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);
const Users = mongoose.model("users", userSchema);

export default { Movie , Users};

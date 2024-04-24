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
  Title: { type: String, required: true },
  Year: { type: String },
  Rated: { type: String },
  Released: { type: String },
  Runtime: { type: String },
  Genre: { type: String },
  Director: { type: String },
  Writer: { type: String },
  Actors: { type: String },
  Plot: { type: String },
  Language: { type: String },
  Country: { type: String },
  Awards: { type: String },
  Metascore: { type: String },
  imdbRating: { type: String },
  imdbVotes: { type: String },
  imdbID: { type: String },
  Type: { type: String },
  Response: { type: String },
  Images: [{ type: String }]  
});

const reviewSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  rating: Number,
  review: String,
});


const contactSchema = new mongoose.Schema({
  message: String,
});

const Contact = mongoose.model('contact', contactSchema);
const Review = mongoose.model('review', reviewSchema);
const Movie = mongoose.model("movie", movieSchema);
const Users = mongoose.model("users", userSchema);

export default { Movie , Users , Review , Contact};

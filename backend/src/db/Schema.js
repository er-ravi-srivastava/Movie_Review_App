import mongoose from "mongoose";

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

const Movie = mongoose.model("Movie", movieSchema);

// const saveMovie = async (movieData) => {
//   try {
//     const movie = new Movie(movieData);
//     await movie.save();
//     console.log('Movie saved to MongoDB:', movie);
//   } catch (error) {
//     console.error('Error saving movie to MongoDB:', error);
//   }
// };

export default { Movie };

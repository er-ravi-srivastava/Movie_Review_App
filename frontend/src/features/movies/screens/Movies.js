import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Home from "../../home/screens/Home";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3008/movies");
        setMovies(response.data.data.movies); // Make sure your API returns this structure
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="relative">
      <div className="text-center px-10 py-12">
        <h1 className="text-4xl mt-40 font-bold text-gray-900">
          Welcome to MovieMania - Your Ultimate Destination for Film Reviews!
        </h1>
        <p className="mt-4 text-lg leading-8 text-black-600">
          Immerse yourself in the mesmerizing world of cinema, where every frame tells a story and every performance captivates the soul. At MovieMania, we're passionate about bringing you the latest insights, reviews, and analyses of the silver screen's finest offerings.
          Embark on a cinematic adventure like never before as you explore a vast array of genres, from pulse-pounding action thrillers to heartwarming romantic comedies and thought-provoking dramas. Discover hidden cinematic gems waiting to be unearthed and revisit timeless classics that have shaped the landscape of modern filmmaking.
        </p>
      </div>
  
      <div className="container mx-auto px-9 py-14 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={movie.Images?.[0] || "https://via.placeholder.com/400"}
                  alt={`Poster for ${movie.Title}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{movie.Title}</h2>
                  <p className="text-gray-700 mb-2">Year: {movie.Year}</p>
                  <p className="text-gray-700 mb-2">IMDb Rating: {movie.imdbRating}</p>
                  <p className="text-gray-600">{movie.Plot}</p>
                  <Link
                    to={`/movie/${movie._id}`}
                    className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Read Review
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default Movie;

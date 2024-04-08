import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // const response = await axios.get("http://localhost:3008/movies");
        // console.log(response.data)
        // setMovies(response.data.data)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-9 py-14 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
              <p className="text-gray-600">{movie.summary}</p>
              <Link to={`/movie/${movie._id}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read Review
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3008/movies");
        setMovies(response.data.data.movies); 
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
      <div className="container mx-auto px-9 py-14 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie._id} className="bg-white rounded-lg shadow-md overflow-hidden relative h-[460px]">
                <img
                  src={movie.Images?.[0] || "https://via.placeholder.com/400"}
                  alt={`Poster for ${movie.Title}`}
                  className="w-full h-55 object-fill"
                />
                <div className="p-4 flex flex-col gap-1">
                  <h2 className="text-xl font-bold ">{movie.Title}</h2>
                  <p className="text-gray-700 ">Year: {movie.Year}</p>  
                  <p className="text-gray-700 ">IMDb Rating: {movie.imdbRating}</p>
                  <p className="text-gray-600 line-clamp-4">{movie.Plot}</p>
                  <div className="flex gap-3 absolute bottom-2">
                  <button
                    onClick={()=>{
                      nav("/review")
                    }}
                    
                    className="h-[53px] inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 rounded"
                  >
                    Submit Review
                  </button>
                  <button
                    // onClick={()=>{
                    //   nav("/review")
                    // }}
                    
                    className="h-[53px] bg-blue-500 hover:bg-blue-600 text-white font-semibold  px-4 rounded"
                  >
                    Read Review
                  </button>
                  </div>
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

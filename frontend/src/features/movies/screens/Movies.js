import React from "react";
import { Link } from "react-router-dom";

const Movie = () => {
 
  const movies = [
    {
      id: 1,
      title: "Inception",
      poster: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH&psig=AOvVaw1xAibESLQykiaXMJe55NJF&ust=1712516176659000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCqkoWiroUDFQAAAAAdAAAAABAE",
      rating: 8.8,
      summary: "A thief who enters the dreams of others to steal their secrets from their subconscious.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      rating: 9,
      summary: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      id: 3,
      title: "365 Days",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/84/The_Next_365_Days.png",
      rating: 8,
      summary:"Massimo is a member of the Sicilian Mafia family and Laura is a sales director. She does not expect that on a trip to Sicily trying to save her relationship, Massimo will kidnap her and give her 365 days to fall in love with him."
    }
    
  ];

  return (
    <div className="container mx-auto px-9 py-14 mt-16"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-700 mb-2">Rating: {movie.rating}</p>
              <p className="text-gray-600">{movie.summary}</p>
              <Link to={`/movie/${movie.id}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
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

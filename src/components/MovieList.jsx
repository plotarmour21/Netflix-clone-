import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieList = ({ request }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(request);
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, [request]); // Fetch movies when the request changes

  if (error) return <div>Error fetching movies: {error.message}</div>;

  return (
    <>
      <h1 className="flex justify-center bg-zinc-900 text-white font-semibold p-2 text-5xl"></h1>
      <div className="bg-zinc-900 flex text-white">
        <ul className="flex flex-wrap gap-12 p-3">
          {movies.map((movie) => (
            <li key={movie.id} className="flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: "160px", height: "225px" }} // Adjust size as needed
              />
              <div className="text-center mt-2">{movie.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MovieList;

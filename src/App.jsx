import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./request"; // adjust the path accordingly

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.fetchTrending);
        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovies();
  }, []);

  if (error) return <div>Error fetching movies: {error.message}</div>;

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "150px", height: "225px" }} // Adjust size as needed
            />
            <div>{movie.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

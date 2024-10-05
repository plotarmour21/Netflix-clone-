import React from "react";
import MovieList from "./components/MovieList";
import requests from "./request";

const App = () => {
  return (
    <div className="bg-zinc-900">
      <h1 className="flex font-bold text-3xl text-white bg-zinc-700 justify-center py-4">
        Trending Movies
      </h1>
      <MovieList request={requests.fetchTrending} />

      <h2 className="flex font-bold text-2xl text-white justify-center mt-6">
        Top Rated Movies
      </h2>
      <MovieList request={requests.fetchTopRated} />

      <h2 className="flex font-bold text-2xl text-white justify-center mt-6">
        Upcoming Movies
      </h2>
      <MovieList request={requests.fetchUpcoming} />

      <h2 className="flex font-bold text-2xl text-white justify-center mt-6">
        Now Playing
      </h2>
      <MovieList request={requests.fetchNowPlaying} />

      <h2 className="flex font-bold text-2xl text-white justify-center mt-6">
        Action Movies
      </h2>
      <MovieList request={requests.fetchActionMovies} />

      <h2 className="flex font-bold text-2xl text-white justify-center mt-6">
        Comedy Movies
      </h2>
      <MovieList request={requests.fetchComedyMovies} />
    </div>
  );
};

export default App;

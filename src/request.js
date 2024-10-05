const APIKEY = "7cf851f1e011274c5b7c76b9a318d94e";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`, // Action
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35`, // Comedy
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`, // Horror
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749`, // Romance
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=99`, // Documentaries
};

export default requests;

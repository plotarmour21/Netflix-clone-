const APIKEY = "7cf851f1e011274c5b7c76b9a318d94e";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
};

export default requests;

import axios from "axios";

const searchMovies = async (searchTerm = "") => {
  const searchParam = searchTerm ? searchTerm.split(" ").join("+") : "";
  const res = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${searchParam}&page=1&include_adult=false`
  );
  console.log(res);
  return res.data.results;
};

export default searchMovies;

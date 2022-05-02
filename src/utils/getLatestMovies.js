import axios from "axios";

const getLatestMovies = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`
  );
  return res.data.results;
};

export default getLatestMovies;

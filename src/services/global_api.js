import axios from "axios";
import apiConstants from "../constants/api"

const getTrendingMovies = axios.get(apiConstants.TMDB_BASE_URL + "/trending/all/day?api_key=" + apiConstants.TMDB_API_KEY)
const getMoviesByGenreId = (genreId) => axios.get(apiConstants.TMDB_BASE_URL + "/discover/movie?api_key=" + apiConstants.TMDB_API_KEY + "&with_genres=" + genreId)

export default {
    getTrendingMovies,
    getMoviesByGenreId
}
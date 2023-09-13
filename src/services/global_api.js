import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const apiKey = "b90fdd4253f996d129cfe6f42209a660"
const getTrendingMovies = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + apiKey)

export default {
    getTrendingMovies
}
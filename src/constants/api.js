const TMDB_BASE_URL = "https://api.themoviedb.org/3"
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const TMDB_API_KEY = `${import.meta.env.VITE_TMDB_API_KEY}`

export default {
    TMDB_BASE_URL,
    TMDB_IMAGE_BASE_URL,
    TMDB_API_KEY
}
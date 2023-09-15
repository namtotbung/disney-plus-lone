import apiConstants from "../constants/api"

const MovieCard = ({ movie }) => {
    
    return (
        <img 
            className="w-[110px] md:w-[200px] rounded-md transition-all ease-in border-2 border-gray-500 hover:border-gray-100 hover:scale-105 cursor-pointer select-none"
            src={apiConstants.TMDB_IMAGE_BASE_URL + movie.poster_path}
            alt="Movie Poster"
        />
    )
}

export default MovieCard
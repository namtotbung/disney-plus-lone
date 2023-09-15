import genres from "../constants/genres"
import MovieGenre from "./MovieGenre";

const MoviesByGenre = () => {
    return (
        <div>
            {genres.map((genre) => (
                <div key={genre.id} className="my-8">
                    <h2 className="px-8 md:px-16 text-xl font-bold">{genre.name}</h2>
                    <MovieGenre genreId={genre.id}/>
                </div>
            ))}
        </div>
    )
}

export default MoviesByGenre
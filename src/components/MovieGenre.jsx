import { useEffect, useRef, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import api from "../services/global_api"
import MovieCard from "./MovieCard"

const MovieList = ({ genreId }) => {
    const [movies, setMovies] = useState([])
    const ref = useRef()
    const SCREEN_WIDTH = window.innerWidth

    useEffect(() => {
        getMoviesByGenreId().then((res) => setMovies(res.data.results))
    }, [])

    const getMoviesByGenreId = () => {
        return api.getMoviesByGenreId(genreId)
    }

    const slideRight = (element) => {
        element.scrollLeft += SCREEN_WIDTH/2
    }

    const slideLeft = (element) => {
        element.scrollLeft -= SCREEN_WIDTH/2
    }

    return (
        <div className="relative">
            <HiChevronLeft className="hidden md:block absolute z-10 top-1/2 -translate-y-1/2 left-8 text-3xl rounded-full transition-all hover:bg-white/30 cursor-pointer" onClick={() => slideLeft(ref.current)}/>
            <HiChevronRight className="hidden md:block absolute z-10 top-1/2 -translate-y-1/2 right-8 text-3xl rounded-full transition-all hover:bg-white/30 cursor-pointer" onClick={() => slideRight(ref.current)}/>
            <div className="px-8 md:px-16 py-6 flex gap-8 overflow-x-auto no-scrollbar scroll-smooth" ref={ref}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default MovieList
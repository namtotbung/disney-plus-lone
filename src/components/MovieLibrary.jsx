import { useEffect, useState, useRef } from "react"
import genres from "../constants/genres"
import MovieGenre from "./MovieGenre"

const MovieLibrary = () => {
    const visibleGenreCountRef = useRef(1)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && visibleGenreCountRef.current < genres.length && !isLoadingMore) {
            console.log(visibleGenreCountRef.current, genres.length, visibleGenreCountRef.current < genres.length);
            setIsLoadingMore(true)
            setTimeout(() => {
                visibleGenreCountRef.current += 1;
                setIsLoadingMore(false)
            }, 1000)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {genres.slice(0, visibleGenreCountRef.current).map((genre) => (
                <div key={genre.id} className="my-8">
                    <h2 className="px-8 md:px-16 text-xl font-bold">{genre.name}</h2>
                    <MovieGenre genreId={genre.id}/>
                </div>
            ))}
            {isLoadingMore ? <div className="px-8 md:px-16 pb-16 text-center text-3xl font-bold">Loading...</div> : <div className="h-[100px]"></div>}
        </div>
    )
}

export default MovieLibrary
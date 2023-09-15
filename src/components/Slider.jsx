import { useEffect, useRef, useState } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import api from "../services/global_api"
import apiConstants from "../constants/api"
const SCREEN_WIDTH = window.innerWidth

const Slider = () => {
    const [movies, setMovies] = useState([])
    const ref = useRef()
    console.log(SCREEN_WIDTH)
    useEffect(() => {
        getTrendingMovies().then(res => setMovies(res.data.results))
    })
    
    const getTrendingMovies = () => api.getTrendingMovies

    const slideRight = (element) => {
        element.scrollLeft += SCREEN_WIDTH-104
    }

    const slideLeft = (element) => {
        element.scrollLeft -= SCREEN_WIDTH-104
    }

    return (
        <div className="relative">
            <HiChevronLeft className="hidden md:block absolute top-1/2 -translate-y-1/2 left-8 text-3xl rounded-full transition-all hover:bg-white/30 cursor-pointer" onClick={() => slideLeft(ref.current)}/>
            <HiChevronRight className="hidden md:block absolute top-1/2 -translate-y-1/2 right-8 text-3xl rounded-full transition-all hover:bg-white/30 cursor-pointer" onClick={() => slideRight(ref.current)}/>
            <div className="w-full px-16 py-4 flex gap-6 overflow-x-auto no-scrollbar scroll-smooth" ref={ref}>
                {movies.map((movie, index) => (
                    <img
                        className="min-w-full h-[500px] object-cover object-top rounded-sm select-none transition-all hover:border-4 border-gray-100"
                        key={index}
                        src={apiConstants.TMDB_IMAGE_BASE_URL + movie.backdrop_path}
                        alt="Backdrop Image"
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
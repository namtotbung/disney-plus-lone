import disneyImage from "../assets/images/disney.png"
import marvelImage from "../assets/images/marvel.png"
import nationalGeographicImage from "../assets/images/national-geographic.png"
import pixarImage from "../assets/images/pixar.png"
import starwarsImage from "../assets/images/starwars.png"
import disneyVideo from "../assets/videos/disney.mp4"
import marvelVideo from "../assets/videos/marvel.mp4"
import nationalGeographicVideo from "../assets/videos/national-geographic.mp4"
import pixarVideo from "../assets/videos/pixar.mp4"
import starwarsVideo from "../assets/videos/starwars.mp4"

const ProductionHouse = () => {
    const productions = [
        {
            id: 0,
            image: disneyImage,
            video: disneyVideo
        },
        {
            id: 1,
            image: marvelImage,
            video: marvelVideo
        },
        {
            id: 2,
            image: nationalGeographicImage,
            video: nationalGeographicVideo
        },
        {
            id: 3,
            image: pixarImage,
            video: pixarVideo
        },
        {
            id: 4,
            image: starwarsImage,
            video: starwarsVideo
        }
    ]

    return (
        <div className="px-16 py-4 flex gap-2 md:gap-5">
            {productions.map((production) => (
                <div key={production.id} className="relative rounded-lg border-2 border-gray-600 transition-all hover:scale-105 hover:border-gray-100 overflow-hidden shadow-xl shadow-black cursor-pointer">
                    <video className="absolute scale-105 top-0 left-0 w-full transition-all opacity-0 hover:opacity-50" src={production.video} autoPlay muted loop playsInline/>
                    <img className="w-full" src={production.image} alt="Production Image" />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse
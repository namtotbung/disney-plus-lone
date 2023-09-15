import Header from "./components/Header";
import Slider
 from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import MovieLibrary from "./components/MovieLibrary";

const App = () => {
  return (
    <div className="text-white bg-black">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <MovieLibrary/>
    </div>
  )
}

export default App;
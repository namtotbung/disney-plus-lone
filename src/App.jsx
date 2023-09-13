import Header from "./components/Header";
import Slider
 from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";

const App = () => {
  return (
    <div className="text-white bg-black">
      <Header/>
      <Slider/>
      <ProductionHouse/>
    </div>
  )
}

export default App;
import Cards from "./components/Cards"
import Crousel from "./components/Crousel"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <Crousel/>
      <p className=" m-7 ml-96 items-center font-extrabold text-4xl" >Choose your Barber and book your slots</p>
      <Cards/>
    </div>
  )
}

export default App

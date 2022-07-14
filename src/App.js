import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Precios from "./components/Precios";
import Servicios from "./components/Servicios";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios />

      <Nosotros />
      <Footer />
    </div>
  );
}

export default App;
